# Usa una imagen oficial de Node como builder
FROM node:18-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build --prod

# Usa una imagen de servidor Nginx para servir la aplicación
FROM :alpine
COPY --from=build /app/dist/datos_clientes /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
