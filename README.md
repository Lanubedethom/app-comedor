# App-Comedor

App-Comedor es una simulación del comedor público universitario que permite registrar y consultar los datos de los alumnos, el sistema de pagos y las asistencias.

## Requisitos previos

Para ejecutar este programa, necesitas tener instalado lo siguiente:

- Node.js 14.x o superior
- npm 6.x o superior
- PostgreSQL 13.x o superior o cualquier otro gestor de BBDD que soporte prisma

## Instalación

Para instalar las dependencias de este proyecto, sigue estos pasos:

1. Clona el repositorio de GitHub en tu máquina local usando el comando:

```bash
git clone https://github.com/Lanubedethom/app-comedor.git
```

2. Entra en la carpeta del proyecto usando el comando:

```bash
cd app-comedor
```

3. Instala las dependencias del cliente usando el comando:

```bash
cd client && npm install
```

4. Instala las dependencias del servidor usando el comando:

```bash
cd server && npm install
```

5. Crea una base de datos PostgreSQL vacía y configura las variables de entorno en el archivo `.env` del servidor con los datos de conexión. 

6. Ejecuta las migraciones de la base de datos usando el comando:

```bash
npx prisma migrate dev --preview-feature
```

7. Genera el cliente de Prisma usando el comando:

```bash
npx prisma generate
```

8. . Si estas usando otro SGBD, tienes que cambiar las configuraciones de `schema.prisma`
```schema.prisma
datasource db {
  provider = "nombreSGBD"
  url      = env("DATABASE_URL")
}
```
Luego modificar la variable de entorno `DATABASE_URL ` en `.env` para la SGBD que estas usando.

## Ejecución

Para ejecutar el programa, sigue estos pasos:

1. Inicia el servidor de desarrollo usando el comando:

```bash
npm run dev
```

2. Abre una nueva terminal y entra en la carpeta del cliente usando el comando:

```bash
cd client
```

3. Inicia el cliente de desarrollo usando el comando:

```bash
npm run dev
```

4. Abre un navegador web y accede a la dirección:

 `http://localhost:numeroDePuerto/`

5. Explora las funcionalidades del sistema.

## Ejemplos de uso

Aquí puedes ver algunos ejemplos de uso del sistema:

- Para...

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](^2^) para más detalles.

## Créditos

Este proyecto fue creado por [Lanubedethom](^3^) como parte del curso de Metodologías del Desarrollo del Software

## Contacto

Si tienes alguna duda, sugerencia o comentario sobre este proyecto, puedes contactarme a través de mi correo electrónico: lanubedethom@gmail.com
