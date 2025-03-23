FROM node:18-alpine as deps
WORKDIR /app
COPY package*.json ./
COPY packages packages
COPY services services
RUN npm ci
RUN npm install -g webpack webpack-cli

FROM node:18-alpine as builder
ARG SERVICE
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=deps /usr/local/bin/webpack /usr/local/bin/webpack
COPY --from=deps /usr/local/bin/webpack-cli /usr/local/bin/webpack-cli
COPY . .
WORKDIR /app/services/${SERVICE}
RUN npm run build:prod

FROM nginx:alpine
ARG SERVICE
COPY --from=builder /app/services/${SERVICE}/build /usr/share/nginx/html
COPY services/${SERVICE}/nginx.conf /etc/nginx/conf.d/default.conf

RUN rm /etc/nginx/conf.d/default.conf
COPY services/${SERVICE}/nginx.conf /etc/nginx/conf.d/
RUN mkdir -p /var/cache/nginx

HEALTHCHECK --interval=30s --timeout=3s \
    CMD wget -q --spider http://localhost:80 || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]