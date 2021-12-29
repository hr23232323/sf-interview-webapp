# Stride Funding Case Study Web Application
_A React/Django fullstack web application built for the Stride Funding interview. The live demo for the application can be seen [here](https://sf-webapp.netlify.app/). The frontend of the application is built using Typescript/React/NextJs/MUI. The backend of the application is built using Python/Django_

_Note: This application is meant to be a POC and does not contain the appropriate level of security/auth configurations for Prod._

## Running the application
The project contains a Makefile which makes local development super simple. You need to have the following CLI tools installed-
```
docker
docker-compose
npm
```
Once you have the above CLI tool installed, you're ready to start development! 
To build both the frontend and backend, use the following command:
```
make build
```

To run the application locally, run the following command:
```
make up
```

To understand the behind the scenes working of the above commands, checkout the `Makefile`

## Architecture
The application repository is broken up into three main folders-
1. Frontend
2. Backend
3. Miscellaneous

The first two are fairly self-explanatory. The third is a folder which was used for data exploration/cleaning. It contains some Jupyter Notebooks to import, clean, explore and export data.


## Reference docs/resources

While building this project, I relied heavily on online guides/tutorials/articles to avoid reinventing the wheel. The following resources were especially useful.
1. [Material UI guide on NextJs + Typescript](https://github.com/mui-org/material-ui/tree/master/examples/nextjs-with-typescript)
2. [Digital Ocean guide on using Axios for data fetching in React](https://www.digitalocean.com/community/tutorials/react-axios-react)
3. [Frontend data filtering in React](https://betterprogramming.pub/advanced-data-filtering-in-react-5ea2fa3befca)
4. [Fullstack application using React+Django](https://www.digitalocean.com/community/tutorials/build-a-to-do-application-using-django-and-react)
