const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('../config');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* exports.login = async (req, res) => {
  const { id, password } = req.body;
  try {
    const user = await User.findById({ id });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'ID ou mot de passe incorrect' });
    }
    const token = jwt.sign({ userId: user.id, role: user.role }, config.jwtSecret, { expiresIn: '1h' });
    const refreshToken = jwt.sign({ userId: user.id }, config.jwtRefreshSecret, { expiresIn: '7d' });
    res.json({ token, refreshToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.refresh = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const decoded = jwt.verify(refreshToken, config.jwtRefreshSecret);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({ message: 'Utilisateur non trouvé' });
    }
    const token = jwt.sign({ userId: user.id, role: user.role }, config.jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Refresh token invalide' });
  }
}; */

exports.login = async (req, res) => {
  try {
    const { id, password } = req.body;
    const user = await User.findById(id);

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'ID ou mot de passe incorrect' });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      config.jwtSecret,
      { expiresIn: '1h' }
    );

    const refreshToken = jwt.sign(
      { userId: user.id },
      config.jwtRefreshSecret,
      { expiresIn: '7d' }
    );

    res.json({ token, refreshToken });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.refresh = async (req, res) => {
  try {
    const { refreshToken } = req.body;
    const decoded = jwt.verify(refreshToken, config.jwtRefreshSecret);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Utilisateur non trouvé' });
    }

    const token = jwt.sign(
      { userId: user.id, role: user.role },
      config.jwtSecret,
      { expiresIn: '1h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(401).json({ message: 'Refresh token invalide' });
  }
};
