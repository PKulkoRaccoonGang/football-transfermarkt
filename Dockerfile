FROM node:18-alpine as builder

ARG SERVICE
WORKDIR /app

COPY package*.json ./
COPY packages ./packages
COPY services ./services

RUN npm ci

WORKDIR /app/services/${SERVICE}
RUN npm run build:prod

FROM nginx:alpine
ARG SERVICE
COPY --from=builder /app/services/${SERVICE}/build /usr/share/nginx/html
COPY services/${SERVICE}/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]