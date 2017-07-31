import { Price } from "app/models/price.model";
import { Rating } from "app/models/rating.model";

/**
 * Model class describing a book
 */
export class Book {
    /**
     * Details about this book, namely
     *  - its id
     *  - its title
     *  - its author
     *  - its cover image URL
     *  - its description
     */
    product: {
        skuId: string;
        title: string;
        author: string;
        imageCover: string;
        description: string;
    }

    /**
     * Pricing information for this book
     */
    price: Price;
    
    /**
     * Rating information for this book
     */
    rating: Rating;
    
    /**
     * Comments made about this book
     */
    comments: string[];
}