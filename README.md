# Technical test ProloT

<p align="center">
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=flat&logo=node.js&logoColor=white"> </img>
    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=flat&logo=mongodb&logoColor=white"> </img>
</p>

## Installation

To run this project, you need to install [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/).

Then, run the following commands:

```bash
git clone https://github.com/realrootboy/ProloT
cd prolot
docker-compose up
```

This commands will up a MongoDB instance, install all dependencies and run the project.

The API will be available at [http://localhost:3333](http://localhost:3333).

## What is missing?

- ❌ Add more tests
- ❌ Receive data via MQTT

## Usage

First of all, you must setup dotenv file. To do that, you can copy the `.env.example` file and rename it to `.env`. Then, you can change the values to your needs.

For testing, you must setup dotenv test file. To do that, you can copy the `.env.test.example` file and rename it to `.env.test`. Then, you can change the values to your needs.

After that, you be able to run the following commands:

```bash
# Run tests
npm run test
```

<font color="red">Dont worry about database JSON, you wont need this.</font>

## Routes

All routes are available at `insomnia.json`. (You can import it to Insomnia) This file contains all routes and their parameters. This file includes too a websocket route to receive updates.

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Author

[Renan Moreira Gomes](
    https://www.linkedin.com/in/renan-moreira-gomes-572421184/
)
