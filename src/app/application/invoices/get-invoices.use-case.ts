import { Observable } from 'rxjs';
import { Invoice } from '../../domain/invoices/invoice.model';
import { InvoiceRepository } from '../../domain/invoices/invoice.repository';
import { inject } from '@angular/core';

/**
 * Caso de uso para obtener la lista de facturas
 * Encapsula la lógica de negocio para recuperar facturas
 */
export class GetInvoicesUseCase {
  private readonly invoiceRepository = inject(InvoiceRepository);

  /**
   * Ejecuta el caso de uso para obtener todas las facturas
   * @returns Observable con el array de facturas del usuario
   */
  public execute(): Observable<Invoice[]> {
    return this.invoiceRepository.getInvoices();
  }
}
