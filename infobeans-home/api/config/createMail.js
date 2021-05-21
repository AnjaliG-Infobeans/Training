const createNew = (data, role, admins = []) => {
  if (role === "admin") {
    data.title = "New contact form submitted.";
    data.receipients = admins;
  } else if (role === "user") {
    data.title =
      "Congratulations! You have successfully submitted InfoBeans' contact form.";
    data.receipients = data.email;
  }

  let mailOptions = {
    from: process.env.USER_EMAIL,
    to: data.receipients,
    subject: "InfoBeans: New Form Submitted",
    html: `
            <p>${data.title}</p>
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
  return mailOptions;
};

module.exports = createNew;
