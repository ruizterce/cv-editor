import { v4 as uuidv4 } from "uuid";

let data = {
  name: "Anthony Edwards",
  email: "tonyed@email.com",
  phone: 123456789,
  address: "08004, Barcelona",
  education: [
    {
      school: "IAM University",
      title: "MBA",
      date: "2013-2015",
      id: uuidv4(),
    },
    {
      school: "Harvard University",
      title: "Aerospace Engineering",
      date: "2007-2012",
      id: uuidv4(),
    },
  ],
  experience: [
    {
      company: "Airbus",
      position: "CTO",
      responsibilities: [
        "Technology Strategy Development: Define and implement Airbus' technology strategy aligned with business goals and market trends.",
        "Innovation Leadership: Drive innovation across the organization by fostering a culture of creativity and technological advancement.",
        "Research and Development Oversight: Oversee all aspects of R&D activities to ensure alignment with strategic objectives and timely delivery of innovative solutions.",
        "Partnership and Collaboration: Establish and maintain strategic partnerships with technology vendors, research institutions, and academia to leverage external expertise and resources.",
      ],
      date: "2010-2015",
      id: uuidv4(),
    },
    {
      company: "Wendy's",
      position: "Cook and Quality Manager",
      responsibilities: [
        "Food Preparation: Prepare and cook food items according to Wendy's operational standards and recipes.",
        "Quality Control: Ensure that all food products meet Wendy's quality standards for freshness, taste, and presentation.",
        "Station Management: Manage assigned cooking stations (e.g., grill, fryers, sandwich assembly) efficiently during peak and off-peak hours.",
        "Inventory Management: Monitor and maintain adequate stock levels of food ingredients and supplies required for daily operations.",
        "Food Safety and Hygiene: Adhere to food safety procedures and guidelines, including proper handling, storage, and sanitation practices.",
      ],
      date: "2006-2009",
      id: uuidv4(),
    },
  ],
};
export default data;
