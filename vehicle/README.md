# TP2_groupe2_software_arhitecture
## Introduction
This project is a simple implementation of a software architecture for a simple system. The system is a simple online car that allows users to view car, add them to the cart, and place an order. The system is composed of three main components: the client, the server, and the database. The client is a web application that allows users to interact with the system. The server is responsible for processing user requests and interacting with the database. The database is responsible for storing and retrieving data. The system is designed to be scalable, reliable, and secure. The client is implemented using React, the server is implemented using Node.js, and the database is implemented using MongoDB.
### How it work
this project user the gateway service,the vehicle service, and aalso the userauth/authorisation service
- you can create and read vehicle without being authenticater
- to delete project you must be authenticate and have provide the token key in authorisation
## run the project
 user the comand `docker-compose upn --build` 
 ## test the project
 ### get the token
 to test the project and then open the browser and go to `http://localhost:8080/auth/api-docs/` to see the register and gest the tokent key for the identification.
 ### test deletion of a vehicle

 to test the project and then open the browser and go to `http://localhost:8080/vehicles/api-docs/` to see the vehicle management ui and 
 - before you try to delete the vehicle try to provide the toke otherwise you will not be able to do it.
 - alse when registering a user you mus add role `delete` to aloww user to be able to delete a vehicle whe authenticated


 # thank