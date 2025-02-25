export interface Resume {
    _id?: string;
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