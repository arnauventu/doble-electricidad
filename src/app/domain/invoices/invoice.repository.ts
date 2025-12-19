import { Observable } from 'rxjs';
import { Invoice } from './invoice.model';

/**
 * Repositorio abstracto para la gestión de facturas
 * Define el contrato que deben implementar los repositorios concretos
 */
export abstract class InvoiceRepository {
  /**
   * Obtiene la lista de facturas del usuario
   * @returns Observable con el array de facturas
   */
  abstract getInvoices(): Observable<Invoice[]>;
}
