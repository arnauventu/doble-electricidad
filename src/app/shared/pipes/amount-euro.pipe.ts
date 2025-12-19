import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountEuro',
  standalone: true,
})
export class AmountEuroPipe implements PipeTransform {
  transform(value: number | null | undefined): string {
    if (value == null) {
      return '-';
    }

    return `${value.toFixed(2)} €`;
  }
}
