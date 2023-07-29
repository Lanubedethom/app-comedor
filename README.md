# App-Comedor

App-Comedor es un sistema de gestión de comedores escolares que permite registrar y consultar los datos de los alumnos, los menús, los pagos y las asistencias.

## Requisitos previos

Para ejecutar este programa, necesitas tener instalado lo siguiente:

- Node.js 14.x o superior
- npm 6.x o superior
- PostgreSQL 13.x o superior

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

[http://localhost:3000/](^1^)

5. Explora las funcionalidades del sistema.

## Ejemplos de uso

Aquí puedes ver algunos ejemplos de uso del sistema:

- Para registrar un nuevo alumno, haz clic en el botón "Añadir alumno" y rellena el formulario con los datos solicitados.
- Para consultar los menús disponibles, haz clic en el botón "Menús" y verás una lista con los platos y los precios.
- Para registrar un pago, haz clic en el botón "Pagos" y selecciona el alumno, el mes y el importe.
- Para registrar una asistencia, haz clic en el botón "Asistencias" y selecciona el alumno, la fecha y el menú.

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo [LICENSE](^2^) para más detalles.

## Créditos

Este proyecto fue creado por [Lanubedethom](^3^) como parte del curso de Desarrollo Web con JavaScript y Node.js.

## Contacto

Si tienes alguna duda, sugerencia o comentario sobre este proyecto, puedes contactarme a través de mi correo electrónico: lanubedethom@gmail.com
