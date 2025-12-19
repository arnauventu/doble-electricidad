import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {
  IonApp,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonButton,
  IonRouterOutlet,
  IonMenuToggle,
} from '@ionic/angular/standalone';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

/**
 * Componente principal de la aplicación (Shell)
 * Contiene el menú de navegación lateral y el contenedor de rutas
 * Gestiona el idioma de la aplicación
 */
@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    RouterLink,
    IonApp,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonButton,
    IonItem,
    IonRouterOutlet,
    IonMenuToggle,
    TranslateModule,
  ],
  templateUrl: './shell.component.html',
})
export class ShellComponent {
  constructor(private translate: TranslateService) {
    // Establece español como idioma por defecto
    translate.use('es');
  }

  /**
   * Cambia el idioma de la aplicación
   * @param lang - Código del idioma ('es' o 'en')
   */
  changeLang(lang: 'es' | 'en'): void {
    this.translate.use(lang);
  }
}
