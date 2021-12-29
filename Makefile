# Makefile to streamline build/run locally

.PHONY: up backend
up backend : 
	docker-compose up --build
