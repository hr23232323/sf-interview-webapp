# Makefile to streamline build/run locally

.PHONE: build
build :
	docker-compose build; cd frontend; npm install

.PHONY: up
up : 
	docker-compose up --detach; cd frontend; npm run dev

