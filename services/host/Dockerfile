FROM base as builder

WORKDIR /app/services/host
RUN npm run build:prod

FROM nginx:alpine
COPY --from=builder /app/services/host/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]