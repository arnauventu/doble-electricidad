import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../domain/profile/profile.model';
import { ProfileRepository } from '../../domain/profile/profile.repository';

/**
 * Caso de uso para actualizar el perfil del usuario
 * Encapsula la lógica de negocio para modificar datos del perfil
 */
export class UpdateProfileUseCase {
  private readonly repository = inject(ProfileRepository);

  /**
   * Ejecuta el caso de uso para actualizar el perfil
   * @param profile - Datos actualizados del perfil
   * @returns Observable que se completa cuando la actualización finaliza
   */
  public execute(profile: Profile): Observable<void> {
    return this.repository.updateProfile(profile);
  }
}
