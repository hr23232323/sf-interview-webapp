# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /backend

# Install pipenv
RUN pip install pipenv

# Install python dependencies in /.venv
COPY ./backend/Pipfile .
COPY ./backend/Pipfile.lock .

RUN PIPENV_VENV_IN_PROJECT=1 pipenv install --deploy

# Copy over remaining files
COPY ./backend/ .

