import mongoose, { Schema, Document } from 'mongoose';

export interface IResume extends Document {
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

const ResumeSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    education: { type: String, required: true },
    experience: { type: String, required: true },
    skills: { type: [String], required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IResume>('Resume', ResumeSchema);