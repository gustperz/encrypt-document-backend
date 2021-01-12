FROM node:14-alpine

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app
WORKDIR /home/node/app

COPY package*.json ./
COPY tsconfig.json ./
COPY --chown=node:node ./src ./src

USER node

RUN npm install
RUN npm run build

EXPOSE 8000

CMD ["node", "dist/server.js"]