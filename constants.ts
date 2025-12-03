import { EducationItem, Skill, ContactInfo } from './types';

export const PERSONAL_INFO = {
  name: "Mohd Taqi Adnan",
  headline: "MBA Finance Candidate | Account Management Specialist",
  about: "Driven and detail-oriented Master of Business Administration candidate specializing in Finance (2023-2025). With a strong foundation in Commerce and hands-on expertise in MS Office and Tally Prime, I am eager to apply my accounting and management skills in a challenging professional environment.",
};

export const CONTACT_INFO: ContactInfo = {
  phone: "9985076199",
  email: "taqiadnan20@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohd-taqi-adnan-970939229",
  location: "Hyderabad, Telangana, India",
};

export const EDUCATION: EducationItem[] = [
  {
    institution: "Amjad Ali Khan College Of Business Administration",
    degree: "Master of Business Administration (MBA) - Finance",
    duration: "2023 - 2025 (Expected)",
    location: "Hyderabad"
  },
  {
    institution: "Maulana Azad National Urdu University",
    degree: "Bachelor of Commerce (BCom)",
    duration: "January 2020 - December 2023",
    location: "Hyderabad"
  },
  {
    institution: "Govt High School Sadasivpet",
    degree: "Secondary School Certificate",
    duration: "Completed",
    location: "Telangana"
  }
];

export const SKILLS: Skill[] = [
  { name: "Accounting", category: "Professional", level: 90 },
  { name: "Account Management", category: "Professional", level: 85 },
  { name: "Financial Analysis", category: "Professional", level: 80 },
  { name: "Tally Prime", category: "Technical", level: 88 },
  { name: "MS Office Suite", category: "Technical", level: 92 },
  { name: "English", category: "Language", level: 95 },
  { name: "Urdu", category: "Language", level: 100 },
];
