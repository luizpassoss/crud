import jwt from 'jsonwebtoken';

function login(req, res) {
    // Implemente a lógica de login
    const { username, password } = req.body;
    if (username === 'admin' && password === 'senha123') {
        const token = jwt.sign({ username }, 'segredo', { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas' });
    }
}

function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Token não fornecido' });
    }

    jwt.verify(token, 'segredo', (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Token inválido' });
        }
        req.user = decoded;
        next();
    });
}

export { login, verifyToken };


