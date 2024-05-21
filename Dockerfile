FROM node:20.13
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:ssr
ENV PORT 4000
EXPOSE $PORT
CMD ["node", "dist/family-central-frontend/server/server.mjs"]

