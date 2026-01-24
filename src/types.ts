export interface Profile {
  name: string;
  image?: string;
  contact?: string;
  socials: {
    website: string;
    facebook: string;
    twitter: string;
    github: string;
    medium: string;
    qiita: string;
    linkedin: string;
    wantedly: string;
  };
  experience: Experience[];
  education: Education[];
  skills: Skills;
  presentations: Presentation[];
}

export interface Experience {
  period: string;
  title: string;
  company: string;
  details?: string[];
}

export interface Education {
  period: string;
  degree: string;
  school: string;
}

export interface Skills {
  licenses: License[];
  languages: string[];
  databases: string[];
  others: string[];
}

export interface License {
  name: string;
  url?: string;
}

export interface Presentation {
  date: string;
  title: string;
  coordinates?: [number, number]; // [longitude, latitude]
  countryCode: string;
  url?: string;
}
