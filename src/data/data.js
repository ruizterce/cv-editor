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
};
export default data;
