export interface Resume {
  _id?: string;
  name: string;
  email: string;
  phone: string;
  education: string;
  experience: string;
  skills: string[];
  createdAt?: Date;
  updatedAt?: Date;
}
