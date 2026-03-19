# Utiliza la imagen oficial de Nginx
FROM nginx:alpine

# Copia los archivos estáticos al directorio de Nginx
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./css /usr/share/nginx/html/css
COPY ./img /usr/share/nginx/html/img

# Expone el puerto 80
EXPOSE 80

# Inicia Nginx
CMD ["nginx", "-g", "daemon off;"]