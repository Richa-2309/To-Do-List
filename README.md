# Todo CRUD API

A simple RESTful Todo application built using **Java** and **Spring Boot**. This project demonstrates basic CRUD (Create, Read, Update, Delete) operations on Todo items.

## Features

- Create a new Todo
- Get all Todos
- Get Todo by ID
- Update an existing Todo
- Delete a Todo

## Tech Stack

- Java
- Spring Boot
- Gradle
- REST API
- JSON

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todo` | Get all todos |
| GET | `/todo/{id}` | Get todo by ID |
| POST | `/todo` | Create a new todo |
| PUT | `/todo/{id}` | Update a todo |
| DELETE | `/todo/{id}` | Delete a todo |

## Sample JSON

```json
{
    "id": 1,
    "title": "Learn Spring Boot",
    "completed": false,
    "userId": 101
}
```

## HTTP Status Codes

- `200 OK` – Request successful
- `201 Created` – Todo created successfully
- `404 Not Found` – Todo not found
- `400 Bad Request` – Invalid request data

## How to Run

1. Clone the repository.
2. Open the project in your IDE.
3. Run the Spring Boot application.
4. Access the API using Postman or Thunder Client.

## Future Improvements

- Connect with MySQL
- Add Spring Data JPA
- Input Validation
- Exception Handling
- Swagger Documentation
- Authentication using Spring Security & JWT

## Author
Richa Kumari
Thanks
