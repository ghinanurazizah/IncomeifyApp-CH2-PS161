# Incomeify - Node.js Backend

This repository contains the Node.js backend for the Incomeify project. The backend allow users to perform GET and POST operations, consumed by our application Incomeify Mobile Application. It is built using Node.js and the Express framework. The deployment involves using Google Cloud Platform services, specifically Cloud Run for the API deployment and Compute Engine for the MySQL server.

## Environment Variables
To run this project, you will need to add the following environment to your `.env` file
```diff
${\color{red}Some \space text \space here}$
```

## API Endpoints Documentation

### Summary

Base URL: https://node-api-ikm4vmuapa-as.a.run.app

| Route          | HTTP Method | Description        | Token Required? |
| -------------- | ----------- | ------------------ | --------------- |
| /auth/register | POST        | Sign up a new user | -               |
| /auth/login    | POST        | Login user         | -               |
| /api/user      | GET         | Get user data      | Yes             |

### Authentication & Authorization (Register, Login)

#### POST `/auth/register` - Sign up a new user

##### Request

- **Method:** **POST**
- **Path:** **`/auth/register`**
- **Body:**
  ```json
  {
    "name": "John Doe",
    "email": "johndoe@hotmail.com",
    "password": "johndoe1"
  }
  ```

##### Response

- **Status:** **201 Created**
  ```json
  {
    "success": true,
    "message": "User registered successfully",
    "data": {
      "id": 5,
      "name": "John Doe",
      "email": "johndoe@hotmail.com",
      "createdAt": "2023-12-11T15:18:27.120Z"
    }
  }
  ```
- **Status:** **400 Bad Request**
  ```json
  {
    "success": false,
    "message": "Email is already registered"
  }
  ```
- **Status:** **400 Bad Request**
  ```json
  {
    "success": false,
    "message": "Password must be at least 8 characters long."
  }
  ```

---

#### POST `/auth/login` - Login user

##### Request

- **Method:** **POST**
- **Path:** **`/auth/login`**
- **Body:**
  ```json
  {
    "email": "johndoe@hotmail.com",
    "password": "johndoe1"
  }
  ```

##### Response

- **Status:** **200 OK**
  ```json
  {
    "success": true,
    "message": "Login successful",
    "data": {
      "id": 5,
      "name": "John Doe",
      "email": "johndoe@hotmail.com",
      "createdAt": "2023-12-11T15:18:27.120Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
  }
  ```
- **Status:** **401 Unauthorized**
  ```json
  {
    "success": false,
    "message": "Invalid Credentials"
  }
  ```

---

#### GET `/api/user` - Get user data

##### Request

- **Method:** **GET**
- **Path:** **`/api/user`**

Put the token in the Header with `Authorization` key and `Bearer <token>` value.

```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

##### Response

- **Status:** **200 OK**
  ```json
  {
    "success": true,
    "data": {
      "id": 5,
      "name": "John Doe",
      "email": "johndoe@hotmail.com",
      "createdAt": "2023-12-11T15:18:27.120Z"
    }
  }
  ```
