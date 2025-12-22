import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Observable, from, of, switchMap, map } from 'rxjs';

import { ProfileRepository } from '../../domain/profile/profile.repository';
import { Profile } from '../../domain/profile/profile.model';

/** Clave para almacenar el perfil en el storage local */
const PROFILE_KEY = 'profile_arnauu';

/**
 * Implementación del repositorio de perfiles usando Ionic Storage
 * Persiste los datos localmente en el dispositivo
 */
@Injectable({ providedIn: 'root' })
export class ProfileStorageRepository implements ProfileRepository {
  constructor(private readonly storage: Storage) {
    this.storage.create();
  }

  /**
   * Obtiene el perfil almacenado localmente
   * Si no existe, crea y retorna un perfil por defecto
   * @returns Observable con los datos del perfil
   */
  public getProfile(): Observable<Profile> {
    return from(this.storage.get(PROFILE_KEY)).pipe(
      switchMap((profile: Profile) => {
        // Si existe el perfil, lo retorna
        if (profile) {
          return of(profile);
        }

        // Si no existe, crea un perfil por defecto
        const defaultProfile: Profile = {
          name: 'Arnau Ventura',
          email: 'arnau.ventura@gmail.com',
          signupDate: '01/01/2023',
          address: 'Calle Mayor 1, Barcelona',
        };

        // Guarda el perfil por defecto y lo retorna
        return from(this.storage.set(PROFILE_KEY, defaultProfile)).pipe(
          map(() => defaultProfile)
        );
      })
    );
  }

  /**
   * Actualiza el perfil en el storage local
   * @param profile - Datos actualizados del perfil
   * @returns Observable que se completa cuando la actualización finaliza
   */
  public updateProfile(profile: Profile): Observable<void> {
    return from(this.storage.set(PROFILE_KEY, profile)).pipe(map(() => void 0));
  }
}
