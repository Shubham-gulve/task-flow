import { Router } from 'express';
import {
  getTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  toggleTaskStatus,
} from '../controllers/taskController';
import { authenticateToken } from '../middleware/auth';
import { validateTask } from '../middleware/validation';

const router = Router();

router.use(authenticateToken);

router.get('/', getTasks);
router.post('/', validateTask, createTask);
router.get('/:id', getTask);
router.patch('/:id', validateTask, updateTask);
router.delete('/:id', deleteTask);
router.patch('/:id/toggle', toggleTaskStatus);

export default router;
