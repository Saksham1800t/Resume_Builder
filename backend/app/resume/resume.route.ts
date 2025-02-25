import { Router } from 'express';
import {
  createResumeController,
  getResumesController,
  getResumeByIdController,
  updateResumeController,
  deleteResumeController,
} from './resume.controller';

const router = Router();

router.post('/create', createResumeController);
router.get('/', getResumesController);
router.get('/:id', getResumeByIdController);
router.put('/:id', updateResumeController);
router.delete('/:id', deleteResumeController);

export default router;