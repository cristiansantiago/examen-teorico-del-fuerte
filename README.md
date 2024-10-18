<div align="center">

# Examen practico del Corporación del fuerte

  <img src="https://img.shields.io/badge/-React-61DBFB?style=for-the-badge&labelColor=black&logo=react&logoColor=61DBFB"/>
  <img src="https://img.shields.io/badge/-NextJS-FFFFFF?style=for-the-badge&labelColor=black&logo=nextdotjs&logoColor=FFFFFF"/>
  <img src="https://img.shields.io/badge/-Typescript-007acc?style=for-the-badge&labelColor=black&logo=typescript&logoColor=007acc"/>
  <img src="https://img.shields.io/badge/-Tailwind-06B6D4?style=for-the-badge&labelColor=black&logo=tailwindcss&logoColor=06B6D4"/>

</div>


## Primeros pasos

En primer lugar, ejecute el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

### Desafió 3:
Cree una página web que muestre una lista de 10 imágenes aleatorias de https://picsum.photos/. Cada imagen debe tener un ancho de 200 píxeles y una altura de 200 píxeles. La página web debe tener un botón "Actualizar" que genere un nuevo conjunto de 10 imágenes aleatorias.

Este desafió se encuentra en la ruta `/images` y el archivo se encuentra en 
```
src
 └── app 
      └── images
            └── page.tsx
```
### Desafío 4:
Cree una página web que permita a los usuarios buscar libros por título o autor mediante la API de Google Books (https://developers.google.com/books/docs/v1/using#PerformingSearch). La página web debe mostrar una lista de libros que coincidan con la consulta de búsqueda, incluidos el título, el autor, la imagen de portada y la descripción.

Este desafió se encuentra en la raíz `/` y el archivo se encuentra 

```
src
 └── app 
      └── pape.tsx            
```

### Desafió 5:
Codifica en HTML y CSS los archivos para obtener el siguiente resultado: 
Cada bola de nieve tiene un borde negro sólido de 2 px, un radio de borde del 50 % y está centrada en la página. La bola de nieve inferior tiene una altura y un ancho de 200 px, la del medio tiene una altura y un ancho de 150 px y la superior tiene una altura y un ancho de 100 px. Cada "punto" (ojos y botones) tiene una altura y un ancho de 20 px, un radio de borde del 50 % y un fondo negro. Las bolas de nieve superior y del medio tienen botones que están espaciados de manera uniforme (horizontal para la superior y verticalmente para la bola de nieve del medio). No es necesario que coincida exactamente con nuestra imagen para el espaciado entre los puntos, siempre que estén espaciados de manera uniforme y centrados.

Este desafió se encuentra en la ruta `/snow` y el archivo se encuentra 

```
src
 └── app 
      └── snow
            └── page.tsx           
```