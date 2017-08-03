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
     * Original price in dollars
     */
    price: number;

    /**
     * Discount offered as a percent of the original price
     */
    discountPercentage: number;
}