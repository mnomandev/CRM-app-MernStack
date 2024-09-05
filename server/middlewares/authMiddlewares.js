import asyncHandler from 'express-async-handler';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import User from '../models/userModel.js';

// Middleware to protect routes
const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer ')) {
    const token = authHeader.split(' ')[1];

    if (!token) {
      res.status(StatusCodes.UNAUTHORIZED);
      throw new Error('Not Authorized, No Token!');
    }

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET || 'your-secret-key'
      );
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        res.status(StatusCodes.UNAUTHORIZED);
        throw new Error('Not Authorized, User Not Found!');
      }

      next();
    } catch (error) {
      res.status(StatusCodes.UNAUTHORIZED);
      throw new Error('Not Authorized, Token Failed!');
    }
  } else {
    res.status(StatusCodes.UNAUTHORIZED);
    throw new Error('Not Authorized, No Token Provided');
  }
});
// Middleware for role-based access control
const authorizeRoles = (...roles) => {
  return asyncHandler(async (req, res, next) => {
    if (roles.includes(req.user.role)) {
      next();
    } else {
      return res
        .status(StatusCodes.FORBIDDEN)
        .json({ message: 'Forbidden to access this route' });
    }
  });
};
export { authorizeRoles, protect };
