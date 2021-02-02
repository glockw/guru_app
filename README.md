# GuruApp

Este site es un buscador de lo que sea, basado en el siguiente Stack

- React with NextJS
- ExpressJS with Apollo
- Redux for state management

# Instalación

clonar el repositorio

```sh
           git clone git@github.com:glockw/guru_app.git
```

Para correr el api

- Crear en la carpeta raiz el archivo **.env**
- Poner los keys: - **NEXT_PUBLIC_API** (NextJS requiere que las variables de ambiente que sean accedidas desde el lado del cliente empiecen por el prefio **NEXT*PUBLIC***) este key tendra la ruta al **GURU API** descrito mas adelante.

desde la carpeta root correr los siguientes comandos

```sh
 $ npm install
 $ npm run dev
```

## GURU API

```sh
           git clone git@github.com:glockw/guru_proxi.git
```

Este api es el que maneja el cliente de apollo y sirve como intermediario entre en el Site y yelp, este abre un sin número de posibilidades entre las mas simples transformaciones y extensiones de la data y desacopla al API de esa extra funcionalidad haciendolo más cohesivo.
Para correr el api

- Crear en la carpeta raiz el archivo **.env**
- Poner los keys: - **YELP_API_KEY** - **PORT**

desde la carpeta root correr los siguientes comandos

```sh
 $ npm install
 $ npm run dev #este linea correa el proyecto con nodemon
```

## Pagina base

<a href="https://ibb.co/fxnNgz8"><img src="https://i.ibb.co/1mdXgts/Screen-Shot-2021-02-02-at-1-12-41-PM.png" 
style="display:block;"
alt="Screen-Shot-2021-02-02-at-1-12-41-PM" ></a>

## Busqueda Realizada

<a href="https://ibb.co/dj3d8Qf"><img src="https://i.ibb.co/6rp3j4y/Screen-Shot-2021-02-02-at-1-16-50-PM.png" alt="Screen-Shot-2021-02-02-at-1-16-50-PM" ></a>

## Para ir al detalle de un component hacer hover y clic en el hipervinculo

<a href="https://ibb.co/mTYkRqd"><img src="https://i.ibb.co/g9XNrTQ/Screen-Shot-2021-02-02-at-1-19-35-PM.png" style="display:block;"
alt="Screen-Shot-2021-02-02-at-1-19-35-PM" ></a>

## Plus visited Link

<a href="https://ibb.co/ypNPdxf"><img src="https://i.ibb.co/f9XFqT1/Screen-Shot-2021-02-02-at-1-22-54-PM.png" style="display:block" alt="Screen-Shot-2021-02-02-at-1-22-54-PM" ></a>

## Pagina del Detalle

<a href="https://ibb.co/HT2zQMb"><img src="https://i.ibb.co/s9PwrDN/Screen-Shot-2021-02-02-at-1-26-06-PM.png" style="display:block" alt="Screen-Shot-2021-02-02-at-1-26-06-PM" ></a>

Todas las ventanas son mobile friendly.

Gracias!
