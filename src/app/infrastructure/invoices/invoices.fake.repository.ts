import { Observable, of } from 'rxjs';
import { InvoiceRepository } from '../../domain/invoices/invoice.repository';
import { Invoice } from '../../domain/invoices/invoice.model';

/**
 * Implementación simulada del repositorio de facturas
 * Retorna datos estáticos para propósitos de testing y desarrollo
 * En producción, esto se reemplazaría con una implementación que consulte una API
 */
export class InvoicesFakeRepository extends InvoiceRepository {
  /**
   * Retorna una lista estática de facturas de ejemplo
   * @returns Observable con array de facturas simuladas
   */
  public getInvoices(): Observable<Invoice[]> {
    return of([
      {
        id: '01',
        name: 'Factura Enero 2024',
        amount: 120.45,
        date: '2024-01-15',
        supplyAddress: 'Calle Mayor 1, Barcelona',
        status: 'paid',
      },
      {
        id: '02',
        name: 'Factura Febrero 2024',
        amount: 89.99,
        date: '2024-02-15',
        supplyAddress: 'Calle Mayor 1, Barcelona',
        status: 'pending',
      },
      {
        id: '03',
        name: 'Factura Marzo 2024',
        amount: 140.2,
        date: '2024-03-15',
        supplyAddress: 'Avenida Diagonal 123, Barcelona',
        status: 'failed',
      },
    ]);
  }
}
