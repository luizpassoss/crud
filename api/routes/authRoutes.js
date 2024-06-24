import express from 'express';
const router = express.Router();
import { login, verifyToken } from '../controllers/authController.js';

router.post('/login', login);

router.get('/protected-route', verifyToken, (req, res) => {
    res.json({ message: 'Rota protegida acessada com sucesso', user: req.user });
});

export default router;
