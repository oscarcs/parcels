import { Parcel } from "./Parcel";
import { ParcelCostCalculator, ParcelType } from "./ParcelCostCalculator";

test('A single small parcel', () => {
    let parcels = [new Parcel(4, 5, 1)]
    let result = ParcelCostCalculator.calculate(parcels);

    expect(result.costs.get(parcels[0])).toBe(3);
    expect(result.types.get(parcels[0])).toBe(ParcelType.Small);
    expect(result.total).toBe(3);
})