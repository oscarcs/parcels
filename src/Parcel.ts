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
     * Create a new Parcel.
     * @param width Width in cm
     * @param height Height in cm
     * @param depth Depth in cm
     */
    constructor(width: number, height: number, depth: number) {
        this.width = width;
        this.height = height;
        this.depth = depth;
    }
}