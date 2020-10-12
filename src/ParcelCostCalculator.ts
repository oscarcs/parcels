import { Parcel } from "./Parcel";

export interface ParcelCostOutput {
    costs: Map<Parcel, number>;
    types: Map<Parcel, ParcelType>;
    total: number;
    speedyTotal: number;
}

export enum ParcelType {
    Small,
    Medium,
    Large,
    ExtraLarge
}

export class ParcelCostCalculator {
    public static calculateOrder(parcels: Parcel[]): ParcelCostOutput {
        let costs = new Map<Parcel, number>();
        let types = new Map<Parcel, ParcelType>();
        
        for (let parcel of parcels) {
            let type = this.calculateType(parcel);
            let cost = this.calculateCost(type, parcel.weight);
            types.set(parcel, type);
            costs.set(parcel, cost);
        }

        let total = Array.from(costs.values())
            .reduce((acc: number, cur: number) => (acc + cur));

        return {
            costs,
            types,
            total: total,
            speedyTotal: total * 2
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

    public static calculateCost(parcelType: ParcelType, weight: number): number {
        const smallWeightLimit = 1;
        const mediumWeightLimit = 3;
        const largeWeightLimit = 6;
        const extraLargeWeightLimit = 10;
        
        switch (parcelType) {
            case ParcelType.Small:
                if (weight < smallWeightLimit) {
                    return 3;
                }
                else {
                    return 3 + (weight - smallWeightLimit) * 2; 
                }
            
            case ParcelType.Medium: 
                if (weight < mediumWeightLimit) {
                    return 8;
                }
                else {
                    return 8 + (weight - mediumWeightLimit) * 2;
                }
            
            case ParcelType.Large:
                if (weight < largeWeightLimit) {
                    return 15;
                }
                else {
                    return 15 + (weight - largeWeightLimit) * 2;
                }

            case ParcelType.ExtraLarge:
                if (weight < extraLargeWeightLimit) {
                    return 25;
                }
                else {
                    return 25 + (weight - extraLargeWeightLimit) * 2;
                }
        }
    }
}