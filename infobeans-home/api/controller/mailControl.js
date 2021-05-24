const admins = ["anjali.goyal@infobeans.com"];

const dotenv = require("dotenv");
const transporter = require("../config/mail");
const newMail = require("../config/createMail");

dotenv.config();

const createMail = async (data, role) => {
  // Get mail details: User or Admin
  const mailOptions = await newMail(data, role, admins);

  // Shoot mail to relevant receipients
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return err;
    }
    return info;
  });
};
module.exports = createMail;
