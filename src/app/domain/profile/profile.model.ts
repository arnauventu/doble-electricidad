/**
 * Modelo de dominio que representa el perfil de un usuario
 * Contiene la información personal y de contacto
 */
export interface Profile {
  name: string;
  email: string;
  signupDate: string;
  address: string;
}
