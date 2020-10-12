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
    ExtraLarge,
    Heavy
}

const smallWeightLimit = 1;
const mediumWeightLimit = 3;
const largeWeightLimit = 6;
const extraLargeWeightLimit = 10;
const heavyWeightLimit = 50;

export class ParcelCostCalculator {
    /**
     * Calculate the cost of an order.
     * @param parcels An array of parcel objects.
     */
    public static calculateOrder(parcels: Parcel[]): ParcelCostOutput {
        let costs = new Map<Parcel, number>();
        let types = new Map<Parcel, ParcelType>();
        
        for (let parcel of parcels) {
            let type = this.calculateBaseType(parcel);
            let cost = this.calculateCost(type, parcel.weight);

            // Override the type if a heavy parcel type would be cheaper
            if (cost > 50) {
                type = ParcelType.Heavy;
                cost = this.calculateCost(type, parcel.weight); 
            }

            types.set(parcel, type);
            costs.set(parcel, cost);
        }

        let total = Array.from(costs.values()).reduce((acc, cur) => (acc + cur));

        return {
            costs,
            types,
            total: total,
            speedyTotal: total * 2
        };
    }

    /**
     * Calculate the base type (before weight and discount considerations)
     * @param parcel 
     */
    private static calculateBaseType(parcel: Parcel): ParcelType {
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

    /**
     * Calculate the cost of an individual parcel.
     * @param parcelType 
     * @param weight 
     */
    private static calculateCost(parcelType: ParcelType, weight: number): number {        
        switch (parcelType) {
            case ParcelType.Small:
                return 3 + 2 * Math.max(0, weight - smallWeightLimit); 
            
            case ParcelType.Medium:
                return 8 + 2 * Math.max(0, weight - mediumWeightLimit);
            
            case ParcelType.Large:
                return 15 + 2 * Math.max(0, weight - largeWeightLimit);

            case ParcelType.ExtraLarge:
                return 25 + 2 * Math.max(0, weight - extraLargeWeightLimit);

            case ParcelType.Heavy:
                return 50 + Math.max(0, weight - heavyWeightLimit);
        }
    }
}