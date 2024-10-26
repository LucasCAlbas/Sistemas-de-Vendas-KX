# Usa uma imagem Node
FROM node:16-alpine AS build

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de configuração
COPY package.json ./
COPY package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o código do projeto
COPY . .

# Constrói a aplicação
RUN npm run build

# Usa uma imagem Nginx para servir os arquivos do React
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Comando para rodar o Nginx
CMD ["nginx", "-g", "daemon off;"]
