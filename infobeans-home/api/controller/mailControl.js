const admins = ["anjali.goyal@infobeans.com"];

const dotenv = require("dotenv");
const transporter = require("../config/mail");
const newMail = require("../config/createMail");

dotenv.config();

const createMail = async (data, role) => {
  const mailOptions = await newMail(data, role, admins);

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return err;
    }
    return info;
  });
};
module.exports = createMail;
