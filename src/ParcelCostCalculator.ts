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
            if (parcel.width < 10 && parcel.height < 10 && parcel.depth < 10) {
                costs.set(parcel, 3);
                types.set(parcel, ParcelType.Small);
            }
            else if (parcel.width < 50 && parcel.height < 50 && parcel.depth < 50) {
                costs.set(parcel, 8);
                types.set(parcel, ParcelType.Medium);
            }
            else if (parcel.width < 100 && parcel.height < 100 && parcel.depth < 100) {
                costs.set(parcel, 15);
                types.set(parcel, ParcelType.Large);
            }
            else {
                costs.set(parcel, 25);
                types.set(parcel, ParcelType.ExtraLarge);
            }
        }

        let total = Array.from(costs.values())
            .reduce((acc: number, cur: number) => (acc + cur));

        return {
            costs,
            types,
            total: total
        };
    }
}