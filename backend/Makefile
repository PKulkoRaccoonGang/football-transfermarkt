PYTHON = python
PIP = pip
MANAGE = $(PYTHON) football_transfermarkt/manage.py

VENV_DIR = env
ACTIVATE = source $(VENV_DIR)/bin/activate

.PHONY: help install venv runserver migrations migrate ruff ruff-fix test clean

venv:
	$(PYTHON) -m venv $(VENV_DIR)

install: venv
	$(ACTIVATE) && $(PIP) install -r requirements.txt

runserver:
	$(MANAGE) runserver

migrations:
	$(MANAGE) makemigrations

migrate:
	$(MANAGE) migrate

ruff:
	ruff format .

test:
	$(PYTHON) -m pytest

clean:
	find . -name "__pycache__" -type d -exec rm -rf {} +
	find . -name "*.pyc" -type f -delete
	find . -name "*.pyo" -type f -delete
