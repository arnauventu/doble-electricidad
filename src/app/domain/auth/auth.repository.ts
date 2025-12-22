import { Observable } from 'rxjs';
import { AuthUser } from './auth.model';

/**
 * Repositorio abstracto para la gestión de autenticación
 * Define el contrato que deben implementar los repositorios concretos
 * Siguiendo el patrón Repository para abstraer la capa de datos
 */
export abstract class AuthRepository {
  /**
   * Autentica un usuario con sus credenciales
   * @param email - Correo electrónico del usuario
   * @param password - Contraseña del usuario
   * @returns Observable con los datos del usuario autenticado
   */
  abstract login(email: string, password: string): Observable<AuthUser>;

  /**
   * Cierra la sesión del usuario actual
   * Elimina la información de autenticación almacenada
   * @returns Observable que se completa cuando finaliza el logout
   */
  abstract logout(): Observable<void>;

  /**
   * Obtiene los datos del usuario actualmente autenticado
   * @returns Observable con el usuario o null si no hay sesión activa
   */
  abstract getCurrentUser(): Observable<AuthUser | null>;
}
