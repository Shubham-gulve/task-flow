import { Request, Response } from 'express';
import { prisma } from '../utils/database';
import { AuthRequest, TaskRequest, TaskQuery } from '../types';

export const getTasks = async (req: AuthRequest, res: Response) => {
  try {
    const { page = '1', limit = '10', status, search } = req.query as TaskQuery;
    
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const skip = (pageNum - 1) * limitNum;

    const where: any = {
      userId: req.user!.id,
    };

    if (status) {
      where.status = status;
    }

    if (search) {
      where.title = {
        contains: search,
        mode: 'insensitive',
      };
    }

    const [tasks, total] = await Promise.all([
      prisma.task.findMany({
        where,
        skip,
        take: limitNum,
        orderBy: {
          createdAt: 'desc',
        },
      }),
      prisma.task.count({ where }),
    ]);

    res.json({
      tasks,
      pagination: {
        page: pageNum,
        limit: limitNum,
        total,
        pages: Math.ceil(total / limitNum),
      },
    });
  } catch (error) {
    console.error('Get tasks error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createTask = async (req: AuthRequest, res: Response) => {
  try {
    const { title, description, status = 'PENDING' }: TaskRequest = req.body;

    const task = await prisma.task.create({
      data: {
        title,
        description,
        status,
        userId: req.user!.id,
      },
    });

    res.status(201).json(task);
  } catch (error) {
    console.error('Create task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getTask = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const task = await prisma.task.findFirst({
      where: {
        id,
        userId: req.user!.id,
      },
    });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json(task);
  } catch (error) {
    console.error('Get task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateTask = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, status }: TaskRequest = req.body;

    const existingTask = await prisma.task.findFirst({
      where: {
        id,
        userId: req.user!.id,
      },
    });

    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const task = await prisma.task.update({
      where: { id },
      data: {
        title,
        description,
        status,
      },
    });

    res.json(task);
  } catch (error) {
    console.error('Update task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteTask = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const existingTask = await prisma.task.findFirst({
      where: {
        id,
        userId: req.user!.id,
      },
    });

    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    await prisma.task.delete({
      where: { id },
    });

    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error('Delete task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const toggleTaskStatus = async (req: AuthRequest, res: Response) => {
  try {
    const { id } = req.params;

    const existingTask = await prisma.task.findFirst({
      where: {
        id,
        userId: req.user!.id,
      },
    });

    if (!existingTask) {
      return res.status(404).json({ error: 'Task not found' });
    }

    const newStatus = existingTask.status === 'COMPLETED' ? 'PENDING' : 'COMPLETED';

    const task = await prisma.task.update({
      where: { id },
      data: {
        status: newStatus,
      },
    });

    res.json(task);
  } catch (error) {
    console.error('Toggle task error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
