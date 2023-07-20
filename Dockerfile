FROM node:16-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:16-alpine AS server
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --only=production
COPY --from=builder /app/.next ./.next
COPY public ./public 
EXPOSE 3000

CMD ["npm", "start"]