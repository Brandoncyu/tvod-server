# T.V.O.D. (Backend)

This is the backend of the project.
The frontend can be found at:
* https://github.com/Brandoncyu/tvod-frontend

T.V.O.D. is a web platform for users to track what television programs they are watching during this era of "Peak TV." Users can mark what shows they consider their favorites, leave comments and ratings for each episode, and receive a schedule of all episodes upcoming and recently aired. They also have the ability to follow other users and receive updates on what their friends are currently watching.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

* fork and clone this repository

### Installing

A step by step series of examples that tell you how to get a development env running to utilize the PostGres db

Install the Node dependencies:

```shell
* run npm install
```

Create the development database:

```shell
* createdb tvoddatabase
```

and run migrations and seeds:

```shell
* npm run knex migrate:latest
* npm run knex seed:run
```

Finally, start the server in development mode:

```shell
* npm run dev
```

## Deployment

This project has been deployed on Heroku at the address: https://pacific-spire-38027.herokuapp.com/

## Built With

* [JavaScript](https://www.javascript.com/) - The language
* [TVMaze](http://www.tvmaze.com/api) - A third-party API that provides television data.
* [Bootstrap](https://bootstrap.com/) - The css framework used
* [React](https://reactjs.org/) - Frontend library
* [Redux](https://redux.js.org/) - State container
* [Express](http://expressjs.com/) - Backend framework
* [postgreSQL](https://www.postgresql.org/) - database
* [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js
* [Node](https://nodejs.org/en/) - Package ecosystem
* [Heroku](https://www.heroku.com/) - A cloud platform to deploy your apps, whether front-end or backend.
* [Moment](https://momentjs.com/) - Npm package to manipulate dates and times in JavaScript.

## Contributing

Please send me a message for details on our code of conduct, and the process for submitting pull requests.

## Author

* **Brandon Yu** - *Initial work* - [Brandoncyu](https://github.com/Brandoncyu)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
