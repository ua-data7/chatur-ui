FROM node:20-alpine

WORKDIR /src

COPY package.json package-lock.json /src/
RUN npm ci

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]