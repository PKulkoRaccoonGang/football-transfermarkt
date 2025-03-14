FROM python:3.10-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    gcc \
    sqlite3 \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

COPY . /app/

ENV DJANGO_SETTINGS_MODULE=config.settings

EXPOSE 9000

WORKDIR /app/football_transfermarkt

CMD ["python", "manage.py", "runserver", "0.0.0.0:9000"]
