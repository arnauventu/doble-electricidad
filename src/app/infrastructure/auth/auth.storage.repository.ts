import { Injectable, inject } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { from, map, switchMap } from 'rxjs';
import { AuthRepository } from '../../domain/auth/auth.repository';
import { AuthUser } from '../../domain/auth/auth.model';

/** Clave para almacenar el usuario autenticado en el storage local */
const AUTH_KEY = 'auth_use';

/**
 * Implementación del repositorio de autenticación usando Ionic Storage
 * Simula un sistema de autenticación persistiendo datos localmente
 */
@Injectable()
export class AuthStorageRepository implements AuthRepository {
  private readonly storage = inject(Storage);
  private storageReady = this.storage.create();

  /**
   * Simula el inicio de sesión de un usuario
   * En producción, esto haría una llamada HTTP a un endpoint de autenticación
   * @param email - Correo electrónico del usuario
   * @param password - Contraseña del usuario (no se valida en esta implementación simulada)
   * @returns Observable con los datos del usuario autenticado
   */
  login(email: string, password: string) {
    const user: AuthUser = { email };

    return from(this.storageReady).pipe(
      switchMap(() => from(this.storage.set(AUTH_KEY, user))),
      map(() => user)
    );
  }

  /**
   * Cierra la sesión eliminando los datos del usuario del storage
   * @returns Observable que se completa cuando se elimina la sesión
   */
  logout() {
    return from(this.storageReady).pipe(
      switchMap(() => from(this.storage.remove(AUTH_KEY)))
    );
  }

  /**
   * Obtiene el usuario almacenado en el storage local
   * Útil para verificar si existe una sesión activa
   * @returns Observable con el usuario autenticado o null si no hay sesión
   */
  getCurrentUser() {
    return from(this.storageReady).pipe(
      switchMap(() => from(this.storage.get(AUTH_KEY)))
    );
  }
}
