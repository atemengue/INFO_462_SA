const express = require("express");
const router = express.Router();
const controller = require("../controllers/index.controller");


//health check endpoint
/**
 * @openapi
 * /:
 *  get: 
 *    summary: Health check endpoint
 *    description: Health check endpoint
 *    responses:
 *      200:
 *        description: app is running
 */
router.get('/', controller.healthCheck);

//create one vehicle
/**
 * @openapi
 * /vehicles:
 *   post:
 *     tags: [Vehicles]
 *     summary: Create Vehicle
 *     description: Create a new vehicle
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               registrationNumber:
 *                 type: string
 *               make:
 *                 type: string
 *               model:
 *                 type: string
 *               year:
 *                 type: integer
 *               rentalPrice:
 *                 type: integer  
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.post('/vehicles',controller.createvehicule);

//update one vehicle
/**
 * @openapi
 * /vehicles/{id}:
 *   put:
 *     tags: [Vehicles]
 *     summary: Update Vehicle
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               registrationNumber:
 *                 type: string
 *               make:
 *                 type: string
 *               model:
 *                 type: string
 *               year:
 *                 type: integer
 *               rentalPrice:
 *                 type: integer  
 *     description: Update a vehicle by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the vehicle to update
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
*/
router.put('/vehicles/:id',controller.updatevehicle);

//delete one vehicle
/**
 * @openapi
 * /vehicles/{id}:
 *   delete:
 *     tags: [Vehicles]
 *     summary: Delete Vehicle
 *     description: Delete a vehicle by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the vehicle to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
*/
router.delete('/vehicles/:id',controller.deletevehicle);


//get vehicle by id
/**
 * @openapi
 * /vehicles/{id}:
 *  get:
 *    tags: [Vehicles]
 *    summary: Get Vehicle
 *    description: Get a vehicle by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the vehicle to get
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Successful response
*/
router.get('/vehicles/:id', controller.getvahiculebyid);
//get all vehicles
/**
 * @openapi
 * /vehicles:
 *   get: 
 *     tags: [Vehicles]
 *     summary: get all vehicles
 *     description: Returns 'all vehicles'
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.get('/vehicles',controller.getvehicles);


//serch vehicle by registration number
/**
 * @openapi
 * /vehicles/search/{registrationNumber}:
 *   get:
 *     tags: [Vehicles]
 *     summary: Search Vehicle
 *     description: Search a vehicle by registration number
 *     parameters:
 *       - in: path
 *         name: registrationNumber
 *         required: true
 *         description: Registration number of the vehicle to search
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/vehicles/search/:registrationNumber', controller.searchvehiculebyregistrationnumber);

// search vehicle by maxprice
/**
 * @openapi
 * /vehicles/price/{maxPrice}:
 *   get:
 *     tags: [Vehicles]
 *     summary: Search Vehicle
 *     description: Search a vehicle by max price
 *     parameters:
 *       - in: path
 *         name: maxPrice
 *         required: true
 *         description: Max price of the vehicle to search
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 */

router.get('/vehicles/price/:maxPrice', controller.searchVehicleByMaxPrice);


module.exports = router;