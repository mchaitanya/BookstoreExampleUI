import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: "discount"
})
export class DiscountPipe implements PipeTransform {
    transform(value: string, discountPercent: number): string {
        // strip off the '$' and convert the price to a number
        const originalPrice: number = Number(value.slice(1));
        // calculate the discounted price
        const newPrice: number = ((100 - discountPercent) * originalPrice) / 100;
        // prepend the '$' symbol, and limit the output to 2 decimals
        return "$" + newPrice.toFixed(2);
    }
}