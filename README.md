# 🌌 Enciclopedia Star Wars

Aplicación web para explorar personajes del universo de **Star Wars**.

La aplicación permite buscar personajes por **nombre o ID** y consultar información detallada sobre ellos.

El proyecto está desarrollado con un **frontend en React + TypeScript** y un **backend en FastAPI + Python**, que se encarga de comunicarse con la API externa SWAPI.

## 🌐 Demo

La aplicación está desplegada en **Render**.

👉 **Aplicación:** https://enciclopedia-star-wars.onrender.com

El backend de FastAPI sirve también los archivos compilados del frontend, por lo que toda la aplicación puede utilizarse desde una única URL.

## ✨ Funcionalidades

* 🔎 Buscar personajes por nombre.
* 🔢 Buscar personajes por ID.
* 👤 Mostrar información de los personajes.
* 📋 Consultar detalles adicionales de cada personaje.
* 🌐 Consumir datos de una API externa.
* ⚛️ Interfaz desarrollada con React y TypeScript.
* 🐍 Backend desarrollado con FastAPI y Python.
* 🔗 Comunicación entre frontend, backend y SWAPI.
* 🌍 Configuración de CORS para el desarrollo local.
* ☁️ Despliegue de la aplicación en Render.

## 🛠️ Tecnologías utilizadas

### Frontend

* React
* TypeScript
* Vite
* CSS
* React Router

### Backend

* Python
* FastAPI
* Requests
* python-dotenv
* Uvicorn

### API externa

* SWAPI — Star Wars API

### Herramientas

* Git
* GitHub
* Render
* Visual Studio Code

## 📁 Estructura del proyecto

```text
La-Enciclopedia-Star-Wars/
│
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routes.py
│   │   ├── schemas.py
│   │   └── services.py
│   │
│   ├── requirements.txt
│   └── ...
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── SearchBar.tsx
│   │   │   ├── CharacterCard.tsx
│   │   │   └── CharacterList.tsx
│   │   │
│   │   ├── interfaces/
│   │   ├── services/
│   │   ├── App.tsx
│   │   └── main.tsx
│   │
│   ├── package.json
│   └── ...
│
├── .gitignore
└── README.md
```

## 🏗️ Arquitectura

La aplicación está dividida en un frontend y un backend.

Durante el desarrollo local:

```text
┌──────────────────────┐
│  React + TypeScript  │
│       Vite           │
└──────────┬───────────┘
           │
           │ HTTP
           ▼
┌──────────────────────┐
│       FastAPI        │
│       Python         │
└──────────┬───────────┘
           │
           │ HTTP
           ▼
┌──────────────────────┐
│        SWAPI         │
│    API externa       │
└──────────────────────┘
```

En producción, FastAPI sirve también los archivos estáticos generados por React:

```text
             Usuario
                │
                ▼
        ┌────────────────┐
        │    FastAPI     │
        │    Render      │
        └───────┬────────┘
                │
        ┌───────┴────────┐
        │                │
        ▼                ▼
 React compilado       SWAPI
 archivos estáticos   API externa
```

De esta manera, **no es necesario desplegar el frontend y el backend como servicios independientes**.

La aplicación completa puede abrirse utilizando únicamente la URL del servicio de Render.

## 🔎 Búsqueda de personajes

La aplicación permite realizar búsquedas de dos formas.

### Buscar por nombre

El usuario puede introducir el nombre de un personaje.

Por ejemplo:

```text
Luke Skywalker
```

El frontend envía la solicitud al backend y este obtiene la información correspondiente desde SWAPI.

### Buscar por ID

También es posible buscar un personaje mediante su ID.

Por ejemplo:

```text
1
```

El personaje con ID `1` corresponde a **Luke Skywalker**.
```

## ⚙️ Ejecutar el backend localmente

Clonar el repositorio:

```bash
git clone https://github.com/tamarit06/La-Enciclopedia-Star-Wars.git
```

Entrar en el proyecto:

```bash
cd La-Enciclopedia-Star-Wars
```

Entrar en el backend:

```bash
cd backend
```

Crear el entorno virtual:

```bash
python -m venv .venv
```

Activar el entorno virtual en Linux/macOS:

```bash
source .venv/bin/activate
```

Instalar las dependencias:

```bash
pip install -r requirements.txt
```


Iniciar el servidor:

```bash
uvicorn app.main:app --reload
```

El backend estará disponible en:

```text
http://127.0.0.1:8000
```

La documentación interactiva de FastAPI estará disponible en:

```text
http://127.0.0.1:8000/docs
```

## ⚛️ Ejecutar el frontend localmente

Abrir otra terminal y entrar en la carpeta del frontend:

```bash
cd frontend
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el servidor de desarrollo:

```bash
npm run dev
```

El frontend estará disponible normalmente en:

```text
http://localhost:5173
```

Durante el desarrollo, React se ejecuta de manera independiente utilizando Vite.

En producción, el frontend compilado es servido por FastAPI.

## 🔗 Endpoints de la API

### Obtener personajes

```http
GET /characters
```

Ejemplo:

```text
GET /characters?page=1
```

### Buscar personajes

```http
GET /characters?search=Luke
```

### Obtener un personaje por ID

```http
GET /characters/{id}
```

Ejemplo:

```text
GET /characters/1
```

## 📡 Ejemplo de respuesta

Una búsqueda puede devolver una respuesta como:

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "characters": [
    {
      "name": "Luke Skywalker",
      "gender": "male",
      "id": 1
    }
  ]
}
```



## ☁️ Despliegue

La aplicación está desplegada en **Render**.

Se utiliza un único servicio para ejecutar el backend y servir el frontend compilado.

El proceso general es:

```text
GitHub
   │
   ▼
Render
   │
   ▼
FastAPI
   │
   ├──► Sirve el frontend React compilado
   │
   └──► Realiza peticiones a SWAPI
```

La aplicación puede accederse mediante la URL proporcionada por Render:

```text
https://enciclopedia-star-wars.onrender.com/
```

La documentación de la API está disponible en:

```text
https://enciclopedia-star-wars.onrender.com/docs
```

## 📸 Capturas de pantalla

### Página principal

<img width="3016" height="1398" alt="image" src="https://github.com/user-attachments/assets/5463a074-16cb-4445-9555-a92539028e1b" />


### Detalles de un personaje

<img width="2540" height="2480" alt="image" src="https://github.com/user-attachments/assets/62cc7596-36cf-4751-b13c-8772ad4d3093" />


## 🚧 Próximas mejoras

* [ ] Agregar imágenes de los personajes.
* [ ] Agregar información sobre las películas.
* [ ] Agregar información sobre las especies.
* [ ] Agregar información sobre las naves.
* [ ] Agregar información sobre los vehículos.
* [ ] Agregar más filtros de búsqueda.
* [ ] Mejorar el manejo de errores.
* [ ] Agregar animaciones de carga.
* [ ] Mejorar el diseño responsive.
* [ ] Añadir más elementos visuales relacionados con Star Wars.

## 🎯 Objetivos del proyecto

Este proyecto fue desarrollado como una forma práctica de aprender y aplicar conceptos de desarrollo web.

Los principales objetivos fueron:

* Crear una API REST utilizando FastAPI.
* Desarrollar una interfaz utilizando React y TypeScript.
* Consumir una API externa.
* Conectar un frontend con un backend.
* Trabajar con variables de entorno.
* Configurar CORS.
* Utilizar Git y GitHub.
* Desplegar una aplicación web en Render.

## 📚 Lo aprendido

Durante el desarrollo del proyecto se practicaron conceptos como:

* Desarrollo de APIs REST con FastAPI.
* React y TypeScript.
* Componentes reutilizables.
* Interfaces de TypeScript.
* Peticiones HTTP.
* Consumo de APIs externas.
* Configuración de CORS.
* Variables de entorno.
* Arquitectura frontend/backend.
* Git y GitHub.
* Despliegue en la nube con Render.
* Depuración de errores durante el desarrollo y despliegue.

## 👩‍💻 Autora

**Lianet Tamarit**

Estudiante de Ciencias de la Computación y desarrolladora enfocada en el desarrollo backend.

GitHub: [@tamarit06](https://github.com/tamarit06)

---

⭐ Si te gusta el proyecto, puedes darle una estrella al repositorio.

**May the Force be with you. ✨**
