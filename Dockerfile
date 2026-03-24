# Використовуємо офіційний легкий образ Nginx
FROM nginx:alpine

# Копіюємо наш згенерований сайт у папку сервера
COPY index.html /usr/share/nginx/html/

# Відкриваємо 80 порт
EXPOSE 80