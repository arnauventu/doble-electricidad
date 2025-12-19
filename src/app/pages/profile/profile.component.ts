import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
  ReactiveFormsModule,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core';
import { GetProfileUseCase } from 'src/app/application/profile/get-profile.use-case';
import { UpdateProfileUseCase } from 'src/app/application/profile/update-profile.use-case';
import { Profile } from 'src/app/domain/profile/profile.model';
import { ReadonlyDirective } from 'src/app/shared/directives/readonly.directive';

/**
 * Interfaz que define la estructura del formulario de perfil
 * Cada campo es un FormControl tipado
 */
export interface ProfileForm {
  name: FormControl<string>;
  email: FormControl<string>;
  signupDate: FormControl<string>;
  address: FormControl<string>;
}
/**
 * Componente para gestionar el perfil del usuario
 * Permite visualizar y editar los datos personales
 * Usa Reactive Forms para la gestión del formulario
 */
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    ReadonlyDirective,
    TranslateModule,
  ],
  templateUrl: './profile.component.html',
  providers: [GetProfileUseCase, UpdateProfileUseCase],
})
export class ProfilePage implements OnInit {
  private readonly getProfile = inject(GetProfileUseCase);
  private readonly updateProfile = inject(UpdateProfileUseCase);

  profile: Profile | null = null;
  isEditing = false;

  form = new FormGroup<ProfileForm>({
    name: new FormControl('', {
      nonNullable: true,
      validators: Validators.required,
    }),
    email: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.email],
    }),
    signupDate: new FormControl('', { nonNullable: true }),
    address: new FormControl('', { nonNullable: true }),
  });

  /**
   * Inicializa el componente cargando los datos del perfil
   * Se ejecuta automáticamente al cargar el componente
   */
  ngOnInit(): void {
    this.getProfile.execute().subscribe((profile) => {
      if (profile) {
        this.profile = profile;
        this.form.patchValue(profile);
      }
    });
  }

  edit(): void {
    this.isEditing = true;
  }

  /**
   * Guarda los cambios realizados en el perfil
   * Valida el formulario antes de persistir los datos
   */
  save(): void {
    // Verifica que el formulario sea válido
    if (this.form.invalid) return;

    // Obtiene los valores del formulario
    const updatedProfile = this.form.getRawValue();

    // Persiste los cambios usando el caso de uso
    this.updateProfile.execute(updatedProfile).subscribe(() => {
      this.profile = updatedProfile;
      this.isEditing = false;
    });
  }
}
