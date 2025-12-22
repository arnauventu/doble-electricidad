import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { GetSessionUseCase } from './get-session.use-case';
import { map } from 'rxjs';

/**
 * Guard de autenticación para proteger rutas privadas
 * Verifica si el usuario está autenticado antes de permitir el acceso
 *
 * Si el usuario no está autenticado, redirige automáticamente al login
 */
export const authGuard: CanActivateFn = () => {
  const getSession = inject(GetSessionUseCase);
  const router = inject(Router);

  // Verifica si existe un usuario autenticado
  return getSession.execute().pipe(
    map((user) => {
      if (user) {
        // Usuario autenticado: permite el acceso a la ruta
        return true;
      }
      // Usuario no autenticado: redirige al login
      router.navigateByUrl('/login');
      return false;
    })
  );
};
