# Microservices Project - TP3

This project demonstrates a microservices architecture using Docker and Docker Compose. The project includes three main services:

1. **User Service** - Manages user-related operations.
2. **Vehicle Service** - Manages vehicle-related operations.
3. **API Gateway** - Acts as a gateway for the user and vehicle services.

## Prerequisites

- Docker installed on your machine.
- Docker Compose installed on your machine.
- `dotenv` package installed if you want to manage environment variables.

## Project Structure

```
project-root/
│
├── api-gateway/
│   ├── Dockerfile
│   ├── index.js
│   ├── middleware/
│   │   ├── auth.js
│   │   └── authorize.js
│   ├── package.json
│   └── .env
│
├── micro-services/
│   ├── user-service/
│   │   ├── Dockerfile
│   │   ├── models/
│   │   │   └── User.js
│   │   ├── routes/
│   │   │   └── users.js
│   │   ├── app.js
│   │   ├── index.js
│   │   ├── package.json
│   │   └── .env
│   │
│   ├── vehicle-service/
│       ├── Dockerfile
│       ├── routes/
│       │   └── vehicles.js
│       ├── app.js
│       ├── index.js
│       ├── package.json
│       └── .env
│
├── docker-compose.yml
└── .env
```

## Environment Variables

Create a `.env` file in the root directory of each service (api-gateway, user-service, vehicle-service) with the following variables:

### api-gateway/.env

```
USER_SERVICE_URL=http://user-service:3001/api/users
VEHICLE_SERVICE_URL=http://vehicle-service:3000/api/vehicles
JWT_SECRET=your_jwt_secret
PORT=8080
```

### user-service/.env

```
MONGODB_URI=mongodb://mongodb:27017/user_management
JWT_SECRET=your_jwt_secret
JWT_REFRESH_SECRET=your_jwt_refresh_secret
PORT=3001
```

### vehicle-service/.env

```
MONGODB_URI=mongodb://mongodb:27017/vehicle_management
PORT=3000
```

## How to Run the Project

1. **Clone the repository**

   ```bash
   git clone <repository_url>
   cd project-root
   ```

2. **Build and Start the Services**

   Use Docker Compose to build and start the services. This will set up the user-service, vehicle-service, and API gateway along with MongoDB.

   ```bash
   docker-compose up --build
   ```

3. **Access the Services**

   - **API Gateway:** `http://localhost:8080`
   - **User Service:** `http://localhost:3001`
   - **Vehicle Service:** `http://localhost:3000`

## Using the API Gateway

You can access the microservices through the API Gateway. The API Gateway forwards requests to the appropriate services based on the URL.

### Example Endpoints

- **Register User:** `POST http://localhost:8080/api/users/register`
- **Login User:** `POST http://localhost:8080/api/users/login`
- **Get Vehicles:** `GET http://localhost:8080/api/vehicles`

## Stopping the Services

To stop the services, use the following command:

```bash
docker-compose down
```

This will stop and remove the containers created by Docker Compose.

## Troubleshooting

- **ECONNREFUSED Error:** Ensure that the service URLs in the `.env` files match the container names in the `docker-compose.yml` file.
- **No Response from Services:** Check the logs for each service by running `docker-compose logs`.

## Logs

To view logs of a specific service:

```bash
docker-compose logs <service_name>
```

For example, to view logs for the user-service:

```bash
docker-compose logs user-service
```

## Additional Notes

- Ensure MongoDB is running properly.
- Adjust the environment variables as needed.