import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ error: 'Acesso negado, token não fornecido' });
  }
  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Token inválido' });
  }
};

export default authenticate;
