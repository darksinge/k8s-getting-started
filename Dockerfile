FROM node:12.16.1-alpine3.11
RUN npm install
CMD ["node", "app.js"]