import { Component, inject, OnInit } from '@angular/core';
import { ShellComponent } from './layout/shell/shell.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShellComponent],
  template: `<app-shell></app-shell>`,
})
export class AppComponent implements OnInit {
  private translate = inject(TranslateService);

  ngOnInit() {
    this.translate.setDefaultLang('es');
    this.translate.use('es');
  }
}
