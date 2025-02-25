import { Request, Response } from 'express';
import asyncHandler from 'express-async-handler';
import { createResponse } from '../common/helper/response.hepler';
import { createResume, getResumes, getResumeById, updateResume, deleteResume } from './resume.service';

export const createResumeController = asyncHandler(async (req: Request, res: Response) => {
  const resume = await createResume(req.body);
  res.status(201).json(createResponse(resume));
});

export const getResumesController = asyncHandler(async (req: Request, res: Response) => {
  const resumes = await getResumes();
  res.status(200).json(createResponse(resumes));
});

export const getResumeByIdController = asyncHandler(async (req: Request, res: Response) => {
  const resume = await getResumeById(req.params.id);
  if (!resume) {
    res.status(404).json(createResponse(null, 'Resume not found'));
    return;
  }
  res.status(200).json(createResponse(resume));
});

export const updateResumeController = asyncHandler(async (req: Request, res: Response) => {
  const resume = await updateResume(req.params.id, req.body);
  if (!resume) {
    res.status(404).json(createResponse(null, 'Resume not found'));
    return;
  }
  res.status(200).json(createResponse(resume));
});

export const deleteResumeController = asyncHandler(async (req: Request, res: Response) => {
  const resume = await deleteResume(req.params.id);
  if (!resume) {
    res.status(404).json(createResponse(null, 'Resume not found'));
    return;
  }
  res.status(200).json(createResponse(null, 'Resume deleted successfully'));
});
