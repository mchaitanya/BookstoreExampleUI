/**
 * Model class describing a book's pricing information
 * 
 * See: {@link PriceComponent}, {@link DiscountPipe}
 */
export class Price {
    /**
     * Id of the book
     */
    skuId: string;

    /**
     * Original price as a dollar string. Example: `"$100"`
     */
    price: string;

    /**
     * Discount offered as a percent of the original price
     */
    discountPercentage: number;
}