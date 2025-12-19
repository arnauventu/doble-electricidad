import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { GetInvoicesUseCase } from 'src/app/application/invoices/get-invoices.use-case';
import { Invoice } from 'src/app/domain/invoices/invoice.model';
import { InvoiceRepository } from 'src/app/domain/invoices/invoice.repository';
import { InvoicesFakeRepository } from 'src/app/infrastructure/invoices/invoices.fake.repository';
import { AmountEuroPipe } from 'src/app/shared/pipes/amount-euro.pipe';

/**
 * Componente para listar y gestionar facturas
 * Permite visualizar, descargar y generar PDFs de facturas
 */
@Component({
  selector: 'app-invoices',
  standalone: true,
  imports: [IonicModule, CommonModule, AmountEuroPipe, TranslateModule],
  templateUrl: './invoices.component.html',
  providers: [
    { provide: InvoiceRepository, useClass: InvoicesFakeRepository },
    GetInvoicesUseCase,
  ],
})
export class InvoicesPage implements OnInit {
  private readonly getInvoicesUseCase = inject(GetInvoicesUseCase);
  public invoices$!: Observable<Invoice[]>;

  ngOnInit(): void {
    this.invoices$ = this.getInvoicesUseCase.execute();
  }

  /**
   * Abre el PDF de la factura en una nueva pestaña del navegador
   * @param invoice - Factura a visualizar
   */
  viewInvoice(invoice: Invoice): void {
    const doc = this.createPdf(invoice);
    window.open(doc.output('bloburl'), '_blank');
  }

  /**
   * Descarga el PDF de la factura en el dispositivo del usuario
   * @param invoice - Factura a descargar
   */
  downloadInvoice(invoice: Invoice): void {
    const doc = this.createPdf(invoice);
    doc.save(`${invoice.name}.pdf`);
  }

  /**
   * Genera un documento PDF con los datos de la factura
   * Usa la librería jsPDF para la generación del documento
   * @param invoice - Factura a convertir en PDF
   * @returns Documento PDF generado
   */
  private createPdf(invoice: Invoice): jsPDF {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(`Factura`, 10, 20);

    doc.setFontSize(12);
    doc.text(`Nombre: ${invoice.name}`, 10, 40);
    doc.text(`Fecha de emisión: ${invoice.date}`, 10, 50);
    doc.text(`Importe: ${invoice.amount} €`, 10, 60);
    doc.text(`Dirección: ${invoice.supplyAddress}`, 10, 70);

    return doc;
  }
}
