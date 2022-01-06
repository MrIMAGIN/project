FROM node:17.3-alpine3.12

WORKDIR /var/www/app

COPY package*.json ./


RUN npm install


COPY . .
EXPOSE 3000

CMD ["npm", "run", "start"]
