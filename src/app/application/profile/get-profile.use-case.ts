import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from '../../domain/profile/profile.model';
import { ProfileRepository } from '../../domain/profile/profile.repository';

/**
 * Caso de uso para obtener el perfil del usuario
 * Encapsula la lógica de negocio para recuperar datos del perfil
 * Siguiendo el patrón Clean Architecture
 */
export class GetProfileUseCase {
  private readonly repository = inject(ProfileRepository);

  /**
   * Ejecuta el caso de uso para obtener el perfil
   * @returns Observable con los datos del perfil del usuario
   */
  public execute(): Observable<Profile> {
    return this.repository.getProfile();
  }
}
