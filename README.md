# User Authentication API

This project is a simple REST API for user management using NestJS, Sequelize, and JWT.

## Endpoints

### 1. Create User

**POST** `/api/v1/add-user`

Creates a new user and saves it to the database.

**Request**:

- **Content-Type**: `application/json`
- **Request Body**:

  ```json
  {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "password": "yourpassword" // Required for registration
  }
  ```

**Response**:

- **Status**: `201 Created`
- **Response Body**:

  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "createdAt": "2024-08-16T00:00:00.000Z",
    "updatedAt": "2024-08-16T00:00:00.000Z"
  }
  ```

### 2. Get User by ID

**GET** `/api/v1/get-user/:id`

Retrieves user information based on the specified ID.

**Authorization**:

- **Header**: `Authorization: Bearer <your-token>`
- **Description**: A valid JWT token is required in the `Authorization` header to access this endpoint.

**Query Parameters**:

- `id` (URL parameter) — User ID.

**Response**:

- **Status**: `200 OK`
- **Response Body**:

  ```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "1234567890",
    "createdAt": "2024-08-16T00:00:00.000Z",
    "updatedAt": "2024-08-16T00:00:00.000Z"
  }
  ```

- **Status**: `401 Unauthorized` (if no token or an invalid token is provided)
- **Response Body**:

  ```json
  {
    "statusCode": 401,
    "message": "Unauthorized",
    "error": "Unauthorized"
  }
  ```

- **Status**: `404 Not Found` (if the user with the specified ID is not found)
- **Response Body**:

  ```json
  {
    "statusCode": 404,
    "message": "Not Found",
    "error": "Not Found"
  }
  ```

### 3. User Login and Token Retrieval

**POST** `/api/v1/login`

Allows users to log in and receive a JWT token.

**Request**:

- **Content-Type**: `application/json`
- **Request Body**:

  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```

**Response**:

- **Status**: `200 OK`
- **Response Body**:

  ```json
  {
    "accessToken": "your.jwt.token.here"
  }
  ```

### Authorization

To access protected routes, you need to pass the JWT token in the `Authorization` header in the format `Bearer <your-token>`.

**Example Header**:

```http
Authorization: Bearer your.jwt.token.here
```

## Running the Project

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   ```

2. Install dependencies:

   ```bash
   cd your-repo-name
   npm install
   ```

3. Start the project:

   ```bash
   npm run start
   ```

## Database Migrations

To run database migrations, use:

```bash
npm run migrate
```
