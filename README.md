# Pandemic Assignemnt

## Introduction

In this task, you will implement a web server application that would help our office stay safe during a
global pandemic.

## Prerequsites

- Node.js(LTS preferably or v14+)
- Docker

## Running the server

1. Clone this repository
2. `docker-compose up` (or)
3. Install dependencies: `npm install`
3. Build the project: `npm run build`
4. Run with `npm start`

- By default the server will run on port 80, you can specify a different port by modifying .env file
## REST endpoints

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
curl 'http://localhost/api/v1/record'
```

### GET /notify/:userId

Gets all the users that were exposed during the last week to the specified user

Example using curl:

```
curl 'http://localhost/api/v1/notify/123'
```
