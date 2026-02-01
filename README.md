# Embarques

Proyecto NestJS para gestión de embarques.

## Descripción

Sistema de administración de embarques construido con NestJS, TypeORM y PostgreSQL.

## Requisitos Previos

- Node.js (v16+)
- npm o yarn
- PostgreSQL

## Instalación

```bash
npm install
```

## Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto:

```
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=embarques
DATABASE_USER=postgres
DATABASE_PASSWORD=password
```

## Ejecución

```bash
# Desarrollo
npm run start:dev

# Producción
npm run build
npm run start:prod
```

## Estructura del Proyecto

```
src/
├── modules/
├── config/
├── common/
└── main.ts
```

## Licencia

MIT
