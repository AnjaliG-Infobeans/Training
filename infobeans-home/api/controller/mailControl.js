const admins = ["anjali.goyal@infobeans.com"];

const dotenv = require("dotenv");
const transporter = require("../config/mail");

dotenv.config();

const createMail = (data) => {
  const mailOptions = {
    from: process.env.USER_EMAIL,
    to: admins,
    subject: "InfoBeans: New Form Submitted",
    html: `
        <p>New contact form submitted.</p>
        <h3>Details:</h3>

        <table>
            <tr>
                <td>Name:</td>
                <td>${data.fname} ${data.lname}</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>${data.email}</td>
            </tr>
            <tr>
                <td>Message:</td>
                <td>${data.message}</td>
            </tr>
            <tr>
                <td>File:</td>
                <td>${data.file}</td>
            </tr>
        </table>

    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return err;
    }
    return info;
  });
};
module.exports = createMail;
