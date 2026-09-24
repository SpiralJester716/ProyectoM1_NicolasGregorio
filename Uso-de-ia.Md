# Documentación del uso de IA

## Herramienta utilizada

ChatGPT.

## Objetivo

Utilicé la IA como apoyo para desarrollar el proyecto paso a paso,
entender HTML, CSS y JavaScript, configurar Git y GitHub Pages
y resolver errores.

## Interacciones y resultados

### 1. Estructura inicial de HTML

Prompt:
"haceme un codigo html generico con un parrafo nomas"

Resultado:
La IA proporcionó un documento HTML básico que sirvió para
comenzar a comprender su estructura.

### 2. Explicación de JavaScript

Prompt:
"ya puse el style que sigue?"

Resultado:
La IA propuso conectar un archivo JavaScript al HTML,
escuchar el clic del botón y mostrar la cantidad seleccionada.
Probé el código en el navegador y confirmé su funcionamiento.

En los intercambios posteriores se incorporaron la generación
aleatoria en HSL, la conversión a HEX, los arrays y la creación
dinámica de tarjetas.

### 3. Resolución del error de publicación

Prompt:
"sabes que desde el link no funciona la generacion de paleta
me tira ese error"

Contexto:
Adjunté una captura de la consola con un error 404.

Resultado:
A partir de varias capturas se identificó una diferencia entre
el nombre Script.js del repositorio y la ruta script.js del HTML.

Se corrigió el nombre mediante git mv, se ajustó la referencia
y se subieron los cambios. Después comprobé que la generación
funcionara en GitHub Pages.

## Verificación y aprendizaje

Las propuestas de la IA se incorporaron por etapas y se probaron
en el navegador.

Durante el proceso aprendí a conectar archivos, seleccionar
elementos del DOM, responder a eventos, generar colores,
registrar commits y publicar cambios.

La resolución del error 404 mostró la importancia de comprobar
las rutas y distinguir entre los archivos locales y los publicados.

## Evidencias

Las capturas de los prompts y las respuestas se encuentran en
Documentación/capturas/ia/.