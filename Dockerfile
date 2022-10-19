FROM node
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ ./
# RUN npx prisma db push
CMD ["npm", "run",  "dev"]
