import { Parcel } from "./Parcel";

export interface ParcelCostOutput {
    costs: Map<Parcel, number>;
    types: Map<Parcel, ParcelType>;
    total: number;
}

export enum ParcelType {
    Small,
    Medium,
    Large,
    ExtraLarge
}

export class ParcelCostCalculator {
    public static calculate(parcels: Parcel[]): ParcelCostOutput {
        let costs = new Map<Parcel, number>();
        let types = new Map<Parcel, ParcelType>();
        
        for (let parcel of parcels) {
            let type = this.calculateType(parcel);
            let cost = this.calculateCost(type);
            types.set(parcel, type);
            costs.set(parcel, cost);
        }

        let total = Array.from(costs.values())
            .reduce((acc: number, cur: number) => (acc + cur));

        return {
            costs,
            types,
            total: total
        };
    }

    public static calculateType(parcel: Parcel): ParcelType {
        if (parcel.width < 10 && parcel.height < 10 && parcel.depth < 10) {
            return ParcelType.Small;
        }
        
        if (parcel.width < 50 && parcel.height < 50 && parcel.depth < 50) {
            return ParcelType.Medium;
        }
        
        if (parcel.width < 100 && parcel.height < 100 && parcel.depth < 100) {
            return ParcelType.Large;
        }
        
        return ParcelType.ExtraLarge;
    }

    public static calculateCost(parcelType: ParcelType): number {
        switch (parcelType) {
            case ParcelType.Small: return 3;
            case ParcelType.Medium: return 8;
            case ParcelType.Large: return 15;
            case ParcelType.ExtraLarge: return 25;
        }
    }
}