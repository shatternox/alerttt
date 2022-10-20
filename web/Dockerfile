FROM node

COPY package*.json ./

# RUN npm install

RUN npm ci --only=production

COPY . .

EXPOSE 55671

CMD ["node", "server.js"]


