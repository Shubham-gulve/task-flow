import { Request, Response, NextFunction } from 'express';
import { LoginRequest, RegisterRequest, TaskRequest } from '../types';

export const validateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { email, password }: LoginRequest = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  next();
};

export const validateRegister = (req: Request, res: Response, next: NextFunction) => {
  const { email, password }: RegisterRequest = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters' });
  }

  next();
};

export const validateTask = (req: Request, res: Response, next: NextFunction) => {
  const { title, description, status }: TaskRequest = req.body;

  if (!title || title.trim().length === 0) {
    return res.status(400).json({ error: 'Task title is required' });
  }

  if (title.length > 200) {
    return res.status(400).json({ error: 'Task title must be less than 200 characters' });
  }

  if (description && description.length > 1000) {
    return res.status(400).json({ error: 'Task description must be less than 1000 characters' });
  }

  if (status && !['PENDING', 'IN_PROGRESS', 'COMPLETED'].includes(status)) {
    return res.status(400).json({ error: 'Invalid task status' });
  }

  next();
};
