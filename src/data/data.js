import { v4 as uuidv4 } from "uuid";

let data = {
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 333 371 652",
  address: "98014, Carnation, WA",
  skills: [
    { title: "Talent Acquisition", grade: 9, id: uuidv4() },
    { title: "Employee Relations", grade: 8, id: uuidv4() },
    { title: "Performance Management", grade: 10, id: uuidv4() },
    { title: "HR Policies and Compliance", grade: 9, id: uuidv4() },
    { title: "Training and Development", grade: 7, id: uuidv4() },
  ],
  education: [
    {
      school: "Cornell University",
      title: "Industrial and Labor Relations",
      date: "2006-2010",
      id: uuidv4(),
    },
    {
      school: "Georgetown University",
      title: "Human Resources Management",
      date: "2011-2012",
      id: uuidv4(),
    },
  ],
  experience: [
    {
      company: "GHR Solutions Group",
      position: "HR Manager",
      responsibilities: [
        "Strategic HR Planning: Develop and implement HR strategies aligned with organizational goals and business objectives.",
        "Employee Engagement: Foster a positive work environment through initiatives that enhance employee morale and satisfaction.",
        "Policy Development: Create and enforce HR policies and procedures to ensure compliance with legal and regulatory requirements.",
        "Workforce Planning: Conduct workforce analysis and planning to anticipate staffing needs and optimize organizational structure.",
      ],
      date: "2013-Present",
      id: uuidv4(),
    },
    {
      company: "Amazon",
      position: "Recruitment Specialist",
      responsibilities: [
        "Talent Acquisition: Manage full-cycle recruitment processes for various departments, including sourcing, screening, and interviewing candidates.",
        "Onboarding and Orientation: Coordinate new hire onboarding programs to facilitate smooth transitions and integration into the company culture.",
        "Performance Evaluation: Conduct performance reviews and provide feedback to managers and employees to support professional growth and development.",
        "HR Analytics: Utilize data analytics to measure HR metrics and analyze trends for informed decision-making and continuous improvement.",
      ],
      date: "2010-2013",
      id: uuidv4(),
    },
  ],
};
export default data;
