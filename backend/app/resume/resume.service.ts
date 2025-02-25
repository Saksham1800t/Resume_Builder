import Resume, { IResume } from './resume.schema';
import { Resume as ResumeDTO } from './resume.dto';

export const createResume = async (resumeData: ResumeDTO): Promise<IResume> => {
  const resume = new Resume(resumeData);
  return await resume.save();
};

export const getResumes = async (): Promise<IResume[]> => {
  return await Resume.find();
};

export const getResumeById = async (id: string): Promise<IResume | null> => {
  return await Resume.findById(id);
};

export const updateResume = async (id: string, resumeData: ResumeDTO): Promise<IResume | null> => {
  return await Resume.findByIdAndUpdate(id, resumeData, { new: true });
};

export const deleteResume = async (id: string): Promise<IResume | null> => {
  return await Resume.findByIdAndDelete(id);
};