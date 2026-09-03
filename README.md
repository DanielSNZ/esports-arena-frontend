# eSports Arena Manager

Proyecto frontend desarrollado para la asignatura **Desarrollo FullStack II (DSY1104)**.

## Descripción

eSports Arena Manager es una plataforma orientada a la gestión de torneos de videojuegos competitivos. La aplicación permite consultar torneos, equipos, partidas y rankings, además de realizar inscripciones y simular diferentes perfiles de usuario.

Esta primera versión corresponde a la **Evaluación Parcial 1 (EP1)** y utiliza datos simulados en JavaScript, sin conexión al backend.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Git
- GitHub

## Funcionalidades actuales

- Navegación entre las diferentes vistas.
- Visualización de torneos disponibles.
- Visualización de equipos registrados.
- Consulta de partidas.
- Consulta de ranking.
- Formulario de inscripción a torneos.
- Formulario de registro de usuario.
- Validación de formularios con JavaScript.
- Simulación de perfiles de usuario.
- Control de acciones según el perfil seleccionado.
- Datos simulados mediante arreglos de JavaScript.
- Diseño adaptable para diferentes tamaños de pantalla.

## Perfiles simulados

Durante EP1 se utilizan los siguientes perfiles de prueba:

- Visitante
- Jugador
- Organizador
- Administrador

En EP3 estos perfiles serán obtenidos desde la autenticación del backend mediante JWT.

## Estructura del proyecto

```text
esports-arena-frontend/
├── css/
│   └── estilos.css
├── img/
│   └── banner-esports.png
├── js/
│   ├── datos.js
│   ├── equipos.js
│   ├── partidas.js
│   ├── perfil.js
│   ├── ranking.js
│   ├── registro.js
│   ├── torneos.js
│   └── validaciones.js
├── pages/
│   ├── equipos.html
│   ├── inscripcion.html
│   ├── partidas.html
│   ├── ranking.html
│   ├── registro.html
│   └── torneos.html
├── index.html
└── README.md