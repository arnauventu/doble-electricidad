export type InvoiceStatus = 'paid' | 'pending' | 'failed';

/**
 * Modelo de dominio que representa una factura
 */
export interface Invoice {
  id: string;
  name: string;
  amount: number;
  date: string;
  supplyAddress: string;
  status: InvoiceStatus;
}
