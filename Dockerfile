
FROM node:18-alpine AS builder
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install husky
COPY . .
ENV HUSKY_SKIP_INSTALL=1
RUN npm install
RUN npm run build

FROM node:18-alpine AS server
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --omit=dev
COPY --from=builder /app/.next ./.next
COPY public ./public
EXPOSE 3000
CMD ["npm", "start"]