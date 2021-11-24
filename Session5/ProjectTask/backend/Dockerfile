FROM node

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 2000

ENV MONGODB_USERNAME=mayur
ENV MONGODB_PASSWORD=secret

CMD ["npm", "start"]