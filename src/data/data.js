import { v4 as uuidv4 } from "uuid";

let data = {
  name: "Anthony Edwards",
  email: "tonyed@email.com",
  phone: 123456789,
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
        "Technology Strategy Development",
        "Innovation Leadership",
        "Research and Development Oversight",
      ],
      date: "2010-2015",
      id: uuidv4(),
    },
    {
      company: "Wendy's",
      position: "Cook",
      responsibilities: ["Food Preparation", "Quality Control"],
      date: "2006-2009",
      id: uuidv4(),
    },
  ],
};
export default data;
