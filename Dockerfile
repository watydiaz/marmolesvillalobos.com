# Utiliza la imagen oficial de Nginx
FROM nginx:alpine

# Copia los archivos estáticos al directorio de Nginx
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./css /usr/share/nginx/html/css
COPY ./assets/img /usr/share/nginx/html/assets/img
COPY ./assets/video /usr/share/nginx/html/assets/video
COPY ./js /usr/share/nginx/html/js
COPY ./favicon.ico /usr/share/nginx/html/favicon.ico

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]