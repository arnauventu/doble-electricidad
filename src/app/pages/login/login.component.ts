import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { LoginUseCase } from '../../application/auth/login.use-case';
import { TranslateModule } from '@ngx-translate/core';

/**
 * Interfaz que define la estructura del formulario de login
 * Cada campo es un FormControl tipado
 */
export interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, TranslateModule],
  providers: [LoginUseCase],
  templateUrl: './login.component.html',
})
export class LoginPage {
  private readonly loginUseCase = inject(LoginUseCase);
  private readonly router = inject(Router);

  form = new FormGroup<LoginForm>({
    email: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    password: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
  });

  /**
   * Procesa el inicio de sesión
   * Valida el formulario antes de ejecutar el caso de uso
   * Navega a la página de facturas tras login exitoso
   */
  public login() {
    if (this.form.invalid) return;
    const { email, password } = this.form.getRawValue();
    this.loginUseCase.execute(email, password).subscribe(() => {
      this.router.navigateByUrl('/invoices');
    });
  }
}
