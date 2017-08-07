import { Pipe, PipeTransform } from "@angular/core";

/**
 * Parametrized pipe that outputs the discounted price in the template
 * 
 * See: {@link PriceComponent}, {@link Price}
 * 
 * @example
 * // outputs: 80
 * {{ 100 | discount:20 }}
 */
@Pipe({
    name: "discount"
})
export class DiscountPipe implements PipeTransform {
    transform(originalPrice: number, discountPercent: number): number {
        return ((100 - discountPercent) * originalPrice) / 100;
    }
}