FROM node:12.16.1-alpine3.11
COPY . .
RUN npm install
CMD ["node", "app.js"]