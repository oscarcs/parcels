export class Parcel {
    /**
     * Width in cm
     */
    public width: number;

    /**
     * Height in cm
     */
    public height: number;

    /**
     * Depth in cm
     */
    public depth: number;

    /**
     * Weigth in kg
     */
    public weight: number;

    /**
     * Create a new Parcel.
     * @param width Width in cm
     * @param height Height in cm
     * @param depth Depth in cm
     * @param weight Weight in kg
     */
    constructor(width: number, height: number, depth: number, weight: number) {
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.weight = weight;
    }
}