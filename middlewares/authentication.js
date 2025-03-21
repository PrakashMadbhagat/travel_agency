const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    // Check if token exists
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access Denied. No Token Provided.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach user data to request
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or Expired Token.' });
    }
};
const isAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Access Denied. Admins Only.' });
    }
    next();
};

const isUser = (req, res, next) => {
    if (req.user.role !== 'user') {
        return res.status(403).json({ message: 'Access Denied. Users Only.' });
    }
    next();
};

module.exports = {verifyToken, isAdmin, isUser};
