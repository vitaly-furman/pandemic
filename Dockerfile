FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm install -g typescript

RUN npm run build

CMD npm start

EXPOSE 8080
