FROM node:12.16.1-alpine3.11
COPY . .
CMD ["node", "app.js"]