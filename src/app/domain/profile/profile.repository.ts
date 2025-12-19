import { Observable } from 'rxjs';
import { Profile } from './profile.model';

/**
 * Repositorio abstracto para la gestión de perfiles de usuario
 * Define el contrato que deben implementar los repositorios concretos
 * Siguiendo el patrón Repository para abstraer la capa de datos
 */
export abstract class ProfileRepository {
  /**
   * Obtiene el perfil del usuario actual
   * @returns Observable con los datos del perfil
   */
  abstract getProfile(): Observable<Profile>;

  /**
   * Actualiza los datos del perfil del usuario
   * @param profile - Datos actualizados del perfil
   * @returns Observable que se completa cuando la actualización finaliza
   */
  abstract updateProfile(profile: Profile): Observable<void>;
}
