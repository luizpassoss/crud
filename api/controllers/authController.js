import { Usuario } from '../models/index.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const user = await Usuario.create({
      username: req.body.username,
      password: hashedPassword
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const user = await Usuario.findOne({ where: { username: req.body.username } });
    if (!user || !(await bcrypt.compare(req.body.password, user.password))) {
      return res.status(401).json({ error: 'Usuário ou senha incorretos' });
    }
    const token = jwt.sign({ id: user.id }, 'your_secret_key', { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
