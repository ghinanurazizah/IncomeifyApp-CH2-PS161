# Incomeify - Flask (ML Model Deployment)

This branch encompasses the deployment of a Machine Learning Model for the Incomeify project, facilitating predictions through API request methods. 

## API Documentation

### Summary

Base URL : <https://incomeify-app-ikm4vmuapa-as.a.run.app>

| Route        | HTTP Method | Description               |
| ------------ | ----------- | ------------------------- |
| /            | GET         | Health check              |
| /predict     | POST        | Perform Data              |

### Endpoints

#### **GET `/` - Health check**

##### Request

- **Method:** GET
- **Path:** `/`

##### Response

- **Status: 200 OK**
  ```json
    {
      "message":"API is running!",
      "status":true
    }
  ```

#### POST `/predict` - Perform Data

##### Request

- **Method:** POST
- **Path:** `/predict`
- **Body:**

    ```json
    {
        "career_level": "Manager/Assistant Manager",
        "location": "Medan",
        "experience_level": 1,
        "education_level": "Sarjana (S1)",
        "employment_type": "Fulltime"
    }
    ```

##### Response

- **Status: 200 OK**

  ```json
  {
      "prediction": 6717717,
      "status": true
  }
  ```


- **Status: 500 Internal Server Error**
  ```json
  {
    "error": "error message",
    "status": false,
  }
  ```
