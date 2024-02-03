FROM node:20

ARG SERVICE_NAME

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

ENV PORT=8081

CMD ["npm", "start"]