import mongoose, { Schema, Document } from 'mongoose';

export interface IResume extends Document {
    name: string;
    email: string;
    phone: string;
    address: string;
    summary: string;
    education: {
      degree: string;
      institution: string;
      year: string;
    }[];
    experience: {
      jobTitle: string;
      company: string;
      startDate: string;
      endDate: string;
      description: string;
    }[];
    skills: string[];
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  const ResumeSchema: Schema = new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      address: { type: String, required: true },
      summary: { type: String, required: true },
      education: [
        {
          degree: { type: String, required: true },
          institution: { type: String, required: true },
          year: { type: String, required: true },
        },
      ],
      experience: [
        {
          jobTitle: { type: String, required: true },
          company: { type: String, required: true },
          startDate: { type: String, required: true },
          endDate: { type: String, required: true },
          description: { type: String, required: true },
        },
      ],
      skills: { type: [String], required: true },
    },
    { timestamps: true }
  );
  
  export default mongoose.model<IResume>('Resume', ResumeSchema);
  