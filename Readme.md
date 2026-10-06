CoderHouse - Backend

API REST desarrollada con Node.js y Express.js como parte del curso de Backend de CoderHouse.

El proyecto implementa una API para la gestión de servicios y reservas, utilizando persistencia de datos mediante archivos JSON y una arquitectura organizada por capas.

🚀 Tecnologías utilizadas

Node.js

Express.js

JavaScript

ES Modules

File System (fs/promises)

dotenv

npm

📁 Estructura del proyecto
```text
BackEnd-Entrega5/
│
├── src/
│   │
│   ├── app.js
│   ├── server.js
│   │
│   ├── config/
│   │   └── env.config.js
│   │
│   ├── data/
│   │   ├── bookings.json
│   │   └── services.json
│   │
│   ├── dao/
│   │   ├── booking.dao.js
│   │   └── service.dao.js
│   │
│   ├── repositories/
│   │   ├── booking.repository.js
│   │   └── service.repository.js
│   │
│   ├── managers/
│   │   ├── booking.manager.js
│   │   └── service.manager.js
│   │
│   ├── controllers/
│   │   ├── booking.controller.js
│   │   └── service.controller.js
│   │
│   ├── routes/
│   │   ├── booking.router.js
│   │   └── service.router.js
│   │
│   └── utils/
│       └── path.js
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

🏗️ Arquitectura

El proyecto utiliza una arquitectura organizada en diferentes capas:
```text
Cliente
   │
   ▼
Router
   │
   ▼
Controller
   │
   ▼
Manager
   │
   ▼
Repository
   │
   ▼
DAO
   │
   ▼
Archivo JSON
```

Router

Se encarga de definir las rutas y asociarlas con los Controllers correspondientes.

Controller

Recibe req y res, obtiene la información de la petición y devuelve la respuesta HTTP correspondiente.

Manager

Contiene la lógica de negocio y las validaciones necesarias para cada operación.

Repository

Se encarga de realizar las operaciones sobre los recursos utilizando el DAO.

DAO

Se encarga exclusivamente del acceso a los datos. En este proyecto utiliza fs/promises para leer y escribir los archivos JSON.

⚙️ Instalación
1. Clonar el repositorio
git clone https://github.com/MartinfMelendez/BackEnd-Entrega5.git

2. Ingresar al proyecto
cd BackEnd-Entrega5

3. Instalar las dependencias
npm install

4. Configurar las variables de entorno

Crear un archivo .env en la raíz del proyecto tomando como referencia .env.example.

Ejemplo:

PORT=8080


El archivo .env no debe subirse al repositorio.

5. Iniciar el servidor

Para iniciar el proyecto:

npm run dev

El proyecto utiliza Nodemon para reiniciar automáticamente el servidor cuando se detectan cambios.

Una vez iniciado, la API estará disponible en:

http://localhost:8080

El puerto utilizado depende del valor configurado en la variable PORT.

📌 API REST

La API cuenta con dos recursos principales:

/api/services — gestión de servicios.

/api/bookings — gestión de reservas.

🔧 Services

El recurso services permite realizar operaciones CRUD sobre los servicios.

Endpoints
Método	Endpoint	Descripción
GET	/api/services	Obtener todos los servicios
GET	/api/services/:id	Obtener un servicio por ID
POST	/api/services	Crear un servicio
PUT	/api/services/:id	Actualizar un servicio
DELETE	/api/services/:id	Eliminar un servicio
Obtener todos los servicios
GET /api/services

Devuelve la lista de servicios registrados.

Obtener un servicio
GET /api/services/1

El 1 corresponde al ID del servicio.

Crear un servicio
POST /api/services

Body:

{
    "name": "Servicio de prueba",
    "description": "Descripción del servicio",
    "duration": 60,
    "price": 15000,
    "category": "General",
    "available": true
}

Campos:

Campo	Tipo	Descripción
name	String	Nombre del servicio
description	String	Descripción
duration	Number	Duración del servicio
price	Number	Precio
category	String	Categoría
available	Boolean	Disponibilidad
Actualizar un servicio
PUT /api/services/1


Body:

{
    "name": "Servicio actualizado",
    "description": "Nueva descripción",
    "duration": 90,
    "price": 20000,
    "category": "General",
    "available": true
}

Eliminar un servicio
DELETE /api/services/1

📅 Bookings

El recurso bookings permite administrar las reservas de los clientes y asociar servicios a cada reserva.

Endpoints
Método	Endpoint	Descripción
GET	/api/bookings	Obtener todas las reservas
GET	/api/bookings/:id	Obtener una reserva por ID
POST	/api/bookings	Crear una reserva
POST	/api/bookings/:bookingId/services/:serviceId	Agregar un servicio a una reserva
DELETE	/api/bookings/:id	Eliminar una reserva
Crear una reserva
POST /api/bookings


Body:

{
    "clientName": "Martin Biagi",
    "clientEmail": "Martin@email.com",
    "date": "2026-10-10",
    "time": "15:30",
    "status": "confirmada",
    "services": []
}


El ID de la reserva se genera automáticamente.

Obtener todas las reservas
GET /api/bookings

Obtener una reserva
GET /api/bookings/1

Agregar un servicio a una reserva
POST /api/bookings/1/services/2


Donde:

1 corresponde al ID de la reserva.

2 corresponde al ID del servicio.

Antes de asociar el servicio, la aplicación verifica que tanto la reserva como el servicio existan.

Si el servicio todavía no está asociado:

{
    "service": 2,
    "quantity": 1
}


Si el mismo servicio se agrega nuevamente, se incrementa quantity:

{
    "service": 2,
    "quantity": 2
}

Eliminar una reserva
DELETE /api/bookings/1


El 1 corresponde al ID de la reserva que se desea eliminar.

🧪 Pruebas de la API

Los endpoints pueden probarse utilizando herramientas como:

Thunder Client

Postman

Insomnia

REST Client para VS Code

Se recomienda probar los diferentes endpoints utilizando los métodos HTTP correspondientes:

GET
POST
PUT
DELETE

📦 Dependencias

El proyecto utiliza:

Express — Framework para la creación del servidor y la API REST.

dotenv — Gestión de variables de entorno.

Nodemon — Reinicio automático del servidor durante el desarrollo.

El proyecto utiliza ES Modules, por lo que se trabaja con import y export.

La persistencia de los datos se realiza mediante archivos JSON utilizando fs/promises.

🔐 Variables de entorno

El proyecto utiliza variables de entorno mediante dotenv.

El archivo .env debe contener, como mínimo:

PORT=8080


El archivo .env se encuentra excluido del repositorio mediante .gitignore.

🎯 Objetivo del proyecto

Este proyecto forma parte del aprendizaje de Backend con Node.js y tiene como objetivo aplicar conceptos fundamentales del desarrollo de APIs REST, incluyendo:

Creación de servidores con Node.js.

Uso de Express.

Manejo de rutas.

Routers.

Controllers.

Managers.

Repositories.

DAO.

Métodos HTTP.

Creación de endpoints.

Manejo de parámetros.

Recepción de información mediante JSON.

Operaciones CRUD.

Gestión de servicios.

Gestión de reservas.

Asociación de servicios a reservas.

Manejo de cantidades de servicios.

Persistencia mediante File System.

Variables de entorno.

Organización de un proyecto backend por capas.

👨‍💻 Autor

Martin F. Melendez

Repositorio:

https://github.com/MartinfMelendez/BackEnd-Entrega5

