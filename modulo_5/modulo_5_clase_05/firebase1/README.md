# firebase1

Demostración para crear un CRUD y publicar en Firebase.

## Para regenerar carpeta node_mdules
```
npm install
```

## Para probar la aplicación
```
npm run serve
```
## Publicar en Firebase

1) Crear la que haber creado la carpeta ```dist/```
con este comando:
```
npm run build
```
2) Ir a la ```consola``` de ```Firebase```
3) Seleccionar ```Hosting```
4) Click en ```comenzar```
5) Instalar herramientas de ```Firebase``` (**se hace una sola vez en la vida**)
```
npm install -g firebase-tools
```
6) Ingresar a ```Firebase``` con la herramienta. La primera vez se abrirá una pantalla para elegir la cuenta de Google.
```
firebase login --interactive
```
7) Inicializar el ```Firebase```, elegir ```Hosting``` con las flechas y la barra espaciadora. La carpeta publica por defecto es ```public```, **debe ser ```dist/```**.
```
firebase init
```
8) Volver a generar la carpeta ```dist/```
```
npm run build
```
9) Finalmente desplegar
```
firebase deploy
```
## Si va a volver a publicar
1) Actualizar la carpeta ```dist/```
```
npm run build
```
2) Desplegar nuevamente
```
firebase deploy
```

## Más información en
Ver [publicar VueJS en Firebase](https://www.youtube.com/watch?v=UkkKbVRN548)
Nota: el vídeo está desactualizado.

## Problemas con las rutas
Para que las rutas funcionen, debe configurar la sección ```rewrite``` en ```firebase.json```:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```
Esta configuración hace que cualquier recurso pedido sea enviado al ```index.html```.