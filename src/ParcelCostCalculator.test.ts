import { Parcel } from "./Parcel";
import { ParcelCostCalculator, ParcelType } from "./ParcelCostCalculator";

test('A single small parcel', () => {
    let parcels = [new Parcel(4, 5, 1)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.costs.get(parcels[0])).toBe(3);
    expect(result.types.get(parcels[0])).toBe(ParcelType.Small);
    expect(result.total).toBe(3);
});

test('A single medium parcel', () => {
    let parcels = [new Parcel(9.6, 15, 48)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.costs.get(parcels[0])).toBe(8);
    expect(result.types.get(parcels[0])).toBe(ParcelType.Medium);
    expect(result.total).toBe(8);
});

test('A single large parcel', () => {
    let parcels = [new Parcel(50, 99.8, 10)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.costs.get(parcels[0])).toBe(15);
    expect(result.types.get(parcels[0])).toBe(ParcelType.Large);
    expect(result.total).toBe(15);
});

test('A single extra large parcel', () => {
    let parcels = [new Parcel(50, 99.8, 102)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.costs.get(parcels[0])).toBe(25);
    expect(result.types.get(parcels[0])).toBe(ParcelType.ExtraLarge);
    expect(result.total).toBe(25);
});