FROM node:carbon-alpine

RUN apk update && apk add python && rm -rf /var/cache/apk/*

WORKDIR /home/node/app

USER node

CMD ["npm", "start"]
