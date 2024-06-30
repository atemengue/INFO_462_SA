// __tests__/userController.test.js
const userController = require('../controllers/userController');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

jest.mock('../models/User');
jest.mock('jsonwebtoken');

describe('UserController', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  describe('login', () => {
    it('should return a token and refresh token on successful login', async () => {
      const req = {
        body: {
          id: '667060d5ae28e7dbd1fe9ab0',
          password: 'fogou'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      User.findById = jest.fn().mockResolvedValue({
        id: '667060d5ae28e7dbd1fe9ab0',
        password: 'fogou',
        comparePassword: jest.fn().mockResolvedValue(true),
        role: 'user'
      });

      jwt.sign = jest.fn()
        .mockReturnValueOnce('testToken')
        .mockReturnValueOnce('testRefreshToken');

      await userController.login(req, res);

     // expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        token: 'testToken',
        refreshToken: 'testRefreshToken'
      });
    });

    it('should return 401 when user is not found or password is incorrect', async () => {
      const req = {
        body: {
          id: '123',
          password: 'wrongPassword'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      User.findById = jest.fn().mockResolvedValue(null);

      await userController.login(req, res);

      expect(res.status).toHaveBeenCalledWith(401);
      expect(res.json).toHaveBeenCalledWith({ message: 'ID ou mot de passe incorrect' });
    });

    it('should return 500 when an error occurs', async () => {
      const req = {
        body: {
          id: '123',
          password: 'password123'
        }
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn()
      };

      User.findById = jest.fn().mockRejectedValue(new Error('Database error'));

      await userController.login(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
    });
  });
});
