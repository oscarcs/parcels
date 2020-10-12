import { Parcel } from "./Parcel";
import { ParcelCostCalculator, ParcelType } from "./ParcelCostCalculator";

test('A single underweight small parcel', () => {
    let parcels = [new Parcel(4, 5, 1, 0.3)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.outputs.get(parcels[0]).cost).toBe(3);
    expect(result.outputs.get(parcels[0]).type).toBe(ParcelType.Small);
    expect(result.total).toBe(3);
});

test('A single overweight small parcel', () => {
    let parcels = [new Parcel(4, 5, 1, 4)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.outputs.get(parcels[0]).cost).toBe(9);
    expect(result.outputs.get(parcels[0]).type).toBe(ParcelType.Small);
    expect(result.total).toBe(9);
});

test('A single underweight medium parcel', () => {
    let parcels = [new Parcel(9.6, 15, 48, 2.1)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.outputs.get(parcels[0]).cost).toBe(8);
    expect(result.outputs.get(parcels[0]).type).toBe(ParcelType.Medium);
    expect(result.total).toBe(8);
});

test('A single overweight medium parcel', () => {
    let parcels = [new Parcel(9.6, 15, 48, 4)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.outputs.get(parcels[0]).cost).toBe(10);
    expect(result.outputs.get(parcels[0]).type).toBe(ParcelType.Medium);
    expect(result.total).toBe(10);
});

test('A single underweight large parcel', () => {
    let parcels = [new Parcel(50, 99.8, 10, 5.5)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.outputs.get(parcels[0]).cost).toBe(15);
    expect(result.outputs.get(parcels[0]).type).toBe(ParcelType.Large);
    expect(result.total).toBe(15);
});

test('A single overweight large parcel', () => {
    let parcels = [new Parcel(50, 99.8, 10, 10.4)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.outputs.get(parcels[0]).cost).toBe(23.8);
    expect(result.outputs.get(parcels[0]).type).toBe(ParcelType.Large);
    expect(result.total).toBe(23.8);
});

test('A single underweight extra large parcel', () => {
    let parcels = [new Parcel(50, 99.8, 102, 8)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.outputs.get(parcels[0]).cost).toBe(25);
    expect(result.outputs.get(parcels[0]).type).toBe(ParcelType.ExtraLarge);
    expect(result.total).toBe(25);
});

test('A single overweight extra large parcel', () => {
    let parcels = [new Parcel(50, 99.8, 102, 11.3)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.outputs.get(parcels[0]).cost).toBe(27.6);
    expect(result.outputs.get(parcels[0]).type).toBe(ParcelType.ExtraLarge);
    expect(result.total).toBe(27.6);
});

test('A heavy parcel', () => {
    let parcels = [new Parcel(50, 99.8, 102, 30)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.outputs.get(parcels[0]).cost).toBe(50);
    expect(result.outputs.get(parcels[0]).type).toBe(ParcelType.Heavy);
    expect(result.total).toBe(50);
});

test('A very heavy parcel', () => {
    let parcels = [new Parcel(50, 99.8, 102, 51)];
    let result = ParcelCostCalculator.calculateOrder(parcels);

    expect(result.outputs.get(parcels[0]).cost).toBe(51);
    expect(result.outputs.get(parcels[0]).type).toBe(ParcelType.Heavy);
    expect(result.total).toBe(51);
});