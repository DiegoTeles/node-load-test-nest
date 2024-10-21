FROM node:18-alpine

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar os arquivos package.json e package-lock.json
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install --production

# Copiar o restante dos arquivos da aplicação
COPY . .

# Expor a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
