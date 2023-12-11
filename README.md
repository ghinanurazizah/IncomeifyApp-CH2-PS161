# Incomeify - Node.js Backend
This repository contains the Node.js backend for the Incomeify project. The backend allow users to perform GET and POST operations, consumed by our application Incomeify Mobile Application. It is built using Node.js and the Express framework. The deployment involves using Google Cloud Platform services, specifically Cloud Run for the API deployment and Compute Engine for the MySQL server.

## API Endpoints Documentation
### Summary

| Route                | HTTP Method | Description                                   | Token Required? |
|----------------------|-------------|-----------------------------------------------|-----------------|
| /auth/register       | POST        | Sign up a new user                            | -               |
| /auth/login          | POST        | Login user                                    | -               |
| /api/user            | POST        | Get user data                                 | Yes             |

### Authentication & Authorization (Register, Login)
### POST `/auth/register` - Sign up a new user
##### Request
- Method: POST
- Path: `/auth/register`
- Body:
```json
{
    "name": "Homelander",
    "email": "homelander@hotmail.com",
    "password": "123"
}

