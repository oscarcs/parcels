import { Parcels } from "./Parcels";

test('Adding 1 and 2 makes 3', () => {
    expect(Parcels.add(1, 2)).toBe(3);
})