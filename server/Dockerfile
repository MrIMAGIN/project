FROM node:17.3.0

WORKDIR /var/www/app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]
