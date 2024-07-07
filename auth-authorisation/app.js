const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const mongoose = require('mongoose');

const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

// Import required modules

// Create an Express application
const app = express();

// Middleware
app.use(express.json());
const corsOptions = {
    origin: '*', // Remplacez '*' par l'URL de votre front-end si vous voulez restreindre l'accès
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));


// Swagger configuration
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Authentication API',
            version: '1.0.0',
            description: 'API endpoints for user registration and authentication',
        },
        servers: [
            {
                url: 'http://userauth:4001',
            },
        ],
    },
    apis: ['./app.js'],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Connect to MongoDB
const target = 'dbuser'
mongoose.connect(`mongodb://${target}:27018/vehicules`, {
// mongoose.connect('mongodb+srv://user1:userdb@testcluster.jjurk0m.mongodb.net/?retryWrites=true&w=majority&appName=testcluster', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('Failed to connect to MongoDB', error));

// Define user schema
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    permissions: [String],
});

userSchema.pre('save', async function (next) {
    if (!this.permissions.length) {
        this.permissions = ['read']; 
    }
    next();
});

// Create user model
const User = mongoose.model('User', userSchema);

// Routes
/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               permissions:  
 *                  type: array
 *                  items:
 *                    type: string
 *
 *     responses:
 *       200:
 *         description: User registered successfully
 *       400:
 *         description: Username already exists, or missing username/password
 *       500:
 *         description: Internal server error
 */
app.post('/register', async (req, res) => {
    // Get username and password from request body
    const { username, password, permissions } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, password: hashedPassword, permissions: permissions });
        await newUser.save();

        res.json({ message: 'User registered successfully', "user": newUser });
    } catch (error) {
        console.error('Failed to register user', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Authenticate a user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *       401:
 *         description: Invalid password
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */
app.post('/login', async (req, res) => {
    // Get username and password from request body
    const { username, password } = req.body;
    var user = await User.findOne({ username })
    if (user == null) {
        return res.status(404).json({ message: 'User not found' });

    }
    bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (!result) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        // Generate JWT token with expiration time of 1 minute
        const token = jwt.sign({ userId: user.id }, 'secretKey', { expiresIn: '15m' });

        // Return token
        res.json({ token });
    });
});

app.get('/protected', (req, res) => {
    // Get token from request headers
    const token = req.headers.authorization;

    // Verify token
    jwt.verify(token, 'secretKey', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Get user ID from decoded token
        const userId = decoded.userId;

        // Find user by ID
        User.findById(userId, (err, user) => {
            if (err) {
                return res.status(500).json({ message: 'Internal server error' });
            }

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Return protected data
            res.json({ message: `Hello, ${user.username}! This is protected data.` });
        });
    });
});


app.get('/permissions', (req, res) => {
    const token = req.headers.authorization;

    // Verify token
    const bearerToken = token.split(' ')[1]; // Extract the token from the "Bearer" format
    jwt.verify(bearerToken, 'secretKey', (err, decoded) => {
        if (err) {
            console.error('Error verifying token:', err);
            return res.status(401).json({ message: 'Invalid token' });
        }

        // Log decoded user ID
        console.log('Decoded user ID:', decoded.userId);

        // Get user ID from decoded token
        const userId = decoded.userId;

        // Find user by ID and populate 'permissions' field
        User.findById(userId)
            .populate('permissions') // Populate the 'permissions' field
            .then(user => {
                if (!user) {
                    console.log('User not found with ID:', userId);
                    return res.status(404).json({ message: 'User not found' }); // Use 404 for not found
                }

                // Log retrieved user and permissions
                console.log('Retrieved user:', user);
                console.log('User permissions:', user.permissions);

                // Return user's permissions
                res.send({ permissions: user.permissions });
            })
            .catch(err => {
                console.error('Error finding user:', err);
                return res.status(500).json({ message: 'Internal server error' });
            });
    });
});


app.get('/auth', (req, res) => {
    console.log('Hello from auth');
    res.json({ message: 'Hello from auth' });
});
app.get('', (req, res) => {
    console.log('Hello from auth');
    res.json({ message: 'Hello from auth' });
});
// Start the server
app.listen(4001, () => {
    console.log('Server started on port 4001');
});