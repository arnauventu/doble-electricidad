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
  IonRouterOutlet,
  IonMenuToggle,
} from '@ionic/angular/standalone';

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
    IonItem,
    IonRouterOutlet,
    IonMenuToggle,
  ],
  templateUrl: './shell.component.html',
})
export class ShellComponent {}
