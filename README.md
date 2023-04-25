# Pandemic Assignemnt

## Introduction

In this task, you will implement a web server application that would help our office stay safe during a
global pandemic.

## Prerequsites

- Node.js(LTS preferably or v14+)
- Docker

## Running the server

1. Clone this repository
2. `docker-compose up -D`

OR
* make sure you have mongodb instance running locally on port 27017
1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Run with `npm start`

- By default the server will run on port 80, you can specify a different port by modifying .env file
## REST endpoints

### /api-docs

Can be accessed by going to `http://localhost/api-docs`. Swagger UI tool to see all the available endpoints and try to execute them.

### POST /record

Creates a record for arrival or departure from the office, requires the body to include: userId and status("ARRIVAL" | "DEPARTURE")

Example using curl:

```
curl -X POST http://localhost/api/v1/record
   -H "Content-Type: application/json"
   -d '{"userId": 123, "status": "ARRIVAL"}'
```

### GET /record/:userId

Gets all the records of the specified user

Example using curl:

```
curl 'http://localhost/api/v1/record/123'
```

### GET /notify/:userId

Gets all the users that were exposed during the last week to the specified user

Example using curl:

```
curl 'http://localhost/api/v1/notify/123'
```
