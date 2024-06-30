// __tests__/user.test.js
const mongoose = require('mongoose');
const User = require('../models/User');

describe('User Model', () => {
  beforeAll(async () => {
    await mongoose.connect('mongodb://localhost/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });

  it('should create a new user', async () => {
    const user = new User({
      name: 'John Doe',
      password: 'password123',
      role: 'user'
    });
    const savedUser = await user.save();
    expect(savedUser._id).toBeDefined();
    expect(savedUser.name).toBe('John Doe');
    expect(savedUser.role).toBe('user');
  });

  it('should hash the password before saving', async () => {
    const user = new User({
      name: 'Jane Doe',
      password: 'password456',
      role: 'user'
    });
    const savedUser = await user.save();
    expect(savedUser.password).not.toBe('password456');
  });
});
