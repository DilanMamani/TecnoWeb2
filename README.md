API de Usuarios y Productos

Este proyecto es un backend desarrollado con Node.js, Express.js y MongoDB para gestionar usuarios y productos. Incluye operaciones CRUD, contadores de registros y seguimiento de operaciones realizadas.

📌 Tecnologías utilizadas
- Node.js
- Express.js
- MongoDB con Mongoose
- Dotenv
- CORS
- Morgan

🚀 Configuración del entorno

1. Clonar el repositorio
```
git clone https://github.com/DilanMamani/TecnoWeb2.git
cd TecnoWeb2
```

2. Instalar dependencias
```
npm install
```

3. Configurar variables de entorno
Crear un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```
MONGO_URI=mongodb+srv://<usuario>:<password>@cluster0.mongodb.net/dbTecno
PORT=5001
```
Reemplaza `<usuario>` y `<password>` con las credenciales de la base de datos.

4. Ejecutar el servidor
```
npm start
```
El servidor se ejecutará en `http://localhost:5001`.

📌 Endpoints disponibles

Usuarios
- `GET /usuarios` → Obtener todos los usuarios
- `POST /usuarios` → Crear un nuevo usuario
- `PUT /usuarios/:id` → Actualizar un usuario por ID
- `DELETE /usuarios/:id` → Eliminar un usuario por ID

Productos
- `GET /productos` → Obtener todos los productos
- `POST /productos` → Crear un nuevo producto
- `PUT /productos/:id` → Actualizar un producto por ID
- `DELETE /productos/:id` → Eliminar un producto por ID

Contadores
- `GET /contadores` → Obtener el número total de registros en usuarios y productos

Operaciones realizadas
- `GET /operaciones` → Obtener el número total de operaciones realizadas en el backend

📌 Pruebas con Postman o Insomnia

Para probar los endpoints, usa Postman o Insomnia e ingresa las rutas mencionadas arriba.

Ejemplo para crear un usuario (`POST /usuarios`):
```
{
    "nombre": "Juan",
    "edad": 30,
    "ocupacion": "Ingeniero"
}
```

Ejemplo para crear un producto (`POST /productos`):
```
{
    "nombre": "Laptop",
    "precio": 1200,
    "categoria": "Tecnología"
}
```

📌 Despliegue

Para desplegar este backend en **Render** o **Railway**, sigue estos pasos:

1. Subir el código a GitHub.
2. Crear un servicio en Render o Railway.
3. Configurar las variables de entorno (`MONGO_URI` y `PORT`).
4. Iniciar el servicio y probar los endpoints.

📌 Autores
- **Dilan Mamani** - Desarrollador del proyecto