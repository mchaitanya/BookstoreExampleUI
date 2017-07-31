/**
 * Model class describing a book's rating information
 * 
 * See: {@link RatingComponent}
 */
export class Rating {
    /**
     * Id of the book
     */
    skuId: string;

    /**
     * Average rating for this book
     */
    rating: number;

    /**
     * Number of users who rated this book
     */
    count: number;
}