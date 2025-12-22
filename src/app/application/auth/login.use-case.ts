import { inject } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthRepository } from '../../domain/auth/auth.repository';
import { AuthUser } from '../../domain/auth/auth.model';

/**
 * Caso de uso para el inicio de sesión de usuario
 * Encapsula la lógica de negocio para autenticar usuarios
 * Siguiendo el principio de Single Responsibility
 */
export class LoginUseCase {
  private readonly authRepository = inject(AuthRepository);

  /**
   * Ejecuta el caso de uso para autenticar un usuario
   * @param email - Correo electrónico del usuario
   * @param password - Contraseña del usuario
   * @returns Observable con los datos del usuario autenticado
   */
  public execute(email: string, password: string): Observable<AuthUser> {
    return this.authRepository.login(email, password);
  }
}
