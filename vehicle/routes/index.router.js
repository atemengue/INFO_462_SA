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

//create one vahicle
/**
 * @openapi
 * /vehicles:
 *   post:
 *     tags: [Vehicules]
 *     summary: Create Vehicule
 *     description: Create a new vehicule
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
 * /vehicules/{id}:
 *   put:
 *     tags: [Vehicules]
 *     summary: Update Vehicule
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
 *     description: Update a vehicule by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the vehicule to update
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
*/
router.put('/vehicules/:id',controller.updatevehicle);

//delete one vehicle
/**
 * @openapi
 * /vehicles/vehicules/{id}:
 *   delete:
 *     tags: [Vehicules]
 *     summary: Delete Vehicule
 *     description: Delete a vehicule by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the vehicule to delete
 *         schema:
 *           type: string
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successful response
*/
router.delete('/vehicules/:id', controller.deletevehicle);


//get vehicle by id
/**
 * @openapi
 * /vehicules/{id}:
 *  get:
 *    tags: [Vehicules]
 *    summary: Get Vehicule
 *    description: Get a vehicule by id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: ID of the vehicule to get
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Successful response
*/
router.get('/vehicules/:id', controller.getvahiculebyid);
//get all vehicles
/**
 * @openapi
 * /vehicles/vehicles:
 *   get: 
 *     tags: [Vehicules]
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
 * /vehicules/search/{registrationNumber}:
 *   get:
 *     tags: [Vehicules]
 *     summary: Search Vehicule
 *     description: Search a vehicule by registration number
 *     parameters:
 *       - in: path
 *         name: registrationNumber
 *         required: true
 *         description: Registration number of the vehicule to search
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 */
router.get('/vehicules/search/:registrationNumber', controller.searchvehiculebyregistrationnumber);

// search vehicle by maxprice
/**
 * @openapi
 * /vehicules/price/{maxPrice}:
 *   get:
 *     tags: [Vehicules]
 *     summary: Search Vehicule
 *     description: Search a vehicule by max price
 *     parameters:
 *       - in: path
 *         name: maxPrice
 *         required: true
 *         description: Max price of the vehicule to search
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successful response
 */

router.get('/vehicules/price/:maxPrice', (req, res) => {
    res.send('Search vehicule');
})


module.exports = router;