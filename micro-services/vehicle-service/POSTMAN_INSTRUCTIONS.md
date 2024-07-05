# Testing Vehicle Management API with Postman

This document provides instructions and queries to test the Vehicle Management API using Postman.

## Base URL

```
http://localhost:3000/api
```

## Endpoints

### 1. Create a new vehicle

- **Method:** POST
- **URL:** `/vehicles`
- **Body:** (raw JSON)

```json
{
  "registrationNumber": "ABC123",
  "make": "Toyota",
  "model": "Camry",
  "year": 2020,
  "rentalPrice": 50
}
```

### 2. Get all vehicles

- **Method:** GET
- **URL:** `/vehicles`

### 3. Update a vehicle

- **Method:** PUT
- **URL:** `/vehicles/ABC123`
- **Body:** (raw JSON)

```json
{
  "make": "Honda",
  "model": "Accord",
  "year": 2021,
  "rentalPrice": 55
}
```

### 4. Delete a vehicle

- **Method:** DELETE
- **URL:** `/vehicles/ABC123`

### 5. Search by registration number

- **Method:** GET
- **URL:** `/vehicles/search/registration`
- **Query Parameter:** `registrationNumber=ABC123`

### 6. Search by rental price

- **Method:** GET
- **URL:** `/vehicles/search/price`
- **Query Parameter:** `price=60`

## Step-by-Step Instructions

### 1. Create a new vehicle

1. Open Postman.
2. Create a new POST request.
3. Set the URL to `http://localhost:3000/api/vehicles`.
4. Go to the "Body" tab and select "raw" and "JSON" as the type.
5. Copy the following JSON into the body:

```json
{
  "registrationNumber": "ABC123",
  "make": "Toyota",
  "model": "Camry",
  "year": 2020,
  "rentalPrice": 50
}
```

6. Click "Send".
7. Verify that the response status is `201 Created` and the response body contains the newly created vehicle.

### 2. Get all vehicles

1. Create a new GET request.
2. Set the URL to `http://localhost:3000/api/vehicles`.
3. Click "Send".
4. Verify that the response status is `200 OK` and the response body contains a list of vehicles.

### 3. Update a vehicle

1. Create a new PUT request.
2. Set the URL to `http://localhost:3000/api/vehicles/ABC123`.
3. Go to the "Body" tab and select "raw" and "JSON" as the type.
4. Copy the following JSON into the body:

```json
{
  "make": "Honda",
  "model": "Accord",
  "year": 2021,
  "rentalPrice": 55
}
```

5. Click "Send".
6. Verify that the response status is `200 OK` and the response body contains the updated vehicle information.

### 4. Delete a vehicle

1. Create a new DELETE request.
2. Set the URL to `http://localhost:3000/api/vehicles/ABC123`.
3. Click "Send".
4. Verify that the response status is `200 OK` and the response body contains a message indicating the vehicle has been deleted.

### 5. Search by registration number

1. Create a new GET request.
2. Set the URL to `http://localhost:3000/api/vehicles/search/registration`.
3. Add a query parameter `registrationNumber` with the value `ABC123`.
4. Click "Send".
5. Verify that the response status is `200 OK` and the response body contains the vehicle with the registration number `ABC123`.

### 6. Search by rental price

1. Create a new GET request.
2. Set the URL to `http://localhost:3000/api/vehicles/search/price`.
3. Add a query parameter `price` with the value `60`.
4. Click "Send".
5. Verify that the response status is `200 OK` and the response body contains vehicles with rental prices less than or equal to `60`.

## Additional Vehicles for Testing

To test search functionalities better, you can create additional vehicles using the following POST requests:

### Vehicle 1

- **Method:** POST
- **URL:** `/vehicles`
- **Body:** (raw JSON)

```json
{
  "registrationNumber": "XYZ789",
  "make": "Ford",
  "model": "Focus",
  "year": 2019,
  "rentalPrice": 45
}
```

### Vehicle 2

- **Method:** POST
- **URL:** `/vehicles`
- **Body:** (raw JSON)

```json
{
  "registrationNumber": "LMN456",
  "make": "Chevrolet",
  "model": "Malibu",
  "year": 2022,
  "rentalPrice": 60
}
```

### Vehicle 3

- **Method:** POST
- **URL:** `/vehicles`
- **Body:** (raw JSON)

```json
{
  "registrationNumber": "DEF321",
  "make": "Nissan",
  "model": "Altima",
  "year": 2018,
  "rentalPrice": 40
}
```

Using these instructions and queries, you should be able to thoroughly test your Vehicle Management API with Postman.
```