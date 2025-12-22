import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRepository } from '../../domain/auth/auth.repository';
import { AuthUser } from '../../domain/auth/auth.model';

/**
 * Caso de uso para obtener la sesión activa del usuario
 * Verifica si existe un usuario autenticado en el sistema
 * Utilizado principalmente por el guard de autenticación
 */
export class GetSessionUseCase {
  private readonly authRepository = inject(AuthRepository);

  /**
   * Ejecuta el caso de uso para obtener el usuario actual
   * @returns Observable con el usuario autenticado o null si no hay sesión activa
   */
  public execute(): Observable<AuthUser | null> {
    return this.authRepository.getCurrentUser();
  }
}
