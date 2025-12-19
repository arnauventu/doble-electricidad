# Doble Electricidad – Área privada

Aplicación web desarrollada con Angular e Ionic como prueba técnica para Factor Energía.  
La aplicación simula el área privada de la empresa “Doble Electricidad” y permite consultar facturas y gestionar los datos personales del usuario.

---

## Funcionalidades

### Login
- Pantalla de acceso con usuario y contraseña.
- Autenticación simulada (sin backend).

### Consultar facturas
- Listado de facturas del usuario.
- Cada factura muestra:
  - Nombre de la factura
  - Fecha de emisión
  - Importe
  - Dirección del suministro
- Posibilidad de visualizar y descargar la factura en PDF (PDF en blanco, según el enunciado).

### Consultar datos personales
- Visualización de los datos personales del usuario:
  - Nombre del titular
  - Correo electrónico
  - Fecha de alta
  - Dirección de envío
- Edición de los datos mediante formulario.
- Guardado persistente de los cambios.

---

## Arquitectura

El proyecto sigue una arquitectura limpia (hexagonal), separando claramente las responsabilidades:

