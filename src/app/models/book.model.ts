import { Price } from "app/models/price.model";
import { Rating } from "app/models/rating.model";

export class Book {
    product: {
        skuId: string;
        title: string;
        author: string;
        imageCover: string;
        description: string;
    }
    price: Price;
    rating: Rating;
    comments: string[];
}