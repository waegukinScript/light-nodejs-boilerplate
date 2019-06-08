const nodemailer = require("nodemailer");
const validateContactInput = require("../validation/contact");

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});

/**
 * GET /contact
 * Contact form page.
 */
exports.getContact = (req, res) => {
  res.render("contact", {
    title: "Contact"
  });
};

/**
 * POST /contact
 * Contact form page.
 */
exports.sendEmail = (req, res) => {
  console.log("/contact req.body ", req.body);
  const { errors, isValid } = validateContactInput(req.body);

  if (!isValid) {
    res.status(400).json(errors);
  }

  res.json({ message: "email sent" });
  const mailOptions = {
    from: process.env.EMAIL,
    to: "grashupfer99@gmail.com",
    subject: "Sending Emails in Development Mode",
    html: `
    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0;" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        rel="stylesheet"
      />
      <style>
        body {
          font-family: "Roboto", Arial, sans-serif;
          height: 100% !important;
          margin: 0;
          min-width: 100%;
          padding: 0;
          width: 100% !important;
        }
        body,
        table,
        td,
        div,
        p,
        a {
          line-height: 100%;
          text-size-adjust: 100%;
          -webkit-font-smoothing: antialiased;
          -ms-text-size-adjust: 100%;
          -webkit-text-size-adjust: 100%;
        }
        table,
        td {
          border-collapse: collapse !important;
          border-spacing: 0;
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
        }
        img {
          border: 0;
          line-height: 100%;
          outline: none;
          text-decoration: none;
          -ms-interpolation-mode: bicubic;
        }
        .action-item {
          border: 1px solid #005f7f;
          color: #005f7f;
          padding: 8px 20px;
        }
        .action-item:hover {
          background-color: #2a923d;
          border: 1px solid #2a923d;
          color: #fff;
        }
        #outlook a {
          padding: 0;
        }
        .ReadMsgBody {
          width: 100%;
        }
        .ExternalClass {
          width: 100%;
        }
        .ExternalClass,
        .ExternalClass p,
        .ExternalClass span,
        .ExternalClass font,
        .ExternalClass td,
        .ExternalClass div {
          line-height: 100%;
        }
  
        @media all and (min-width: 560px) {
          .container {
            border-radius: 8px;
            -webkit-border-radius: 8px;
            -moz-border-radius: 8px;
            -khtml-border-radius: 8px;
          }
        }
  
        a,
        a:hover {
          color: #005f7f;
        }
        .footer a,
        .footer a:hover {
          color: #999999;
        }
      </style>
      <title>New E-Mail Message</title>
    </head>
    <body
      topmargin="0"
      rightmargin="0"
      bottommargin="0"
      leftmargin="0"
      marginwidth="0"
      marginheight="0"
      width="100%"
      style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%; height: 100%; -webkit-font-smoothing: antialiased; text-size-adjust: 100%; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; line-height: 100%; background-color: #ececec; color: #333333;"
      bgcolor="#ececec"
      text="#333333"
    >
      <table
        width="100%"
        align="center"
        border="0"
        cellpadding="0"
        cellspacing="0"
        style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; width: 100%;"
      >
        <tr>
          <br />
          <td
            align="center"
            valign="top"
            style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0;"
            bgcolor="#ececec"
          >
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              align="center"
              bgcolor="#ffffff"
              width="560"
              style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit; max-width: 560px; margin: 30px 0 0 0;"
              class="container"
            >
              <tr>
                <td
                  align="center"
                  valign="top"
                  style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-top: 20px;"
                >
                  <h1
                    style="color: #f5cb5c; font-family: 'Roboto', Arial, sans-serif; font-size: 20px; line-height: 120%; margin-bottom: 5px; text-transform: uppercase;"
                  >
                    NODEMAILER
                  </h1>
                </td>
              </tr>
  
              <tr>
                <td
                  align="center"
                  valign="top"
                  style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-top: 20px;"
                >
                  <img
                    border="0"
                    vspace="0"
                    hspace="0"
                    src="https://res.cloudinary.com/dijc9b7wz/image/upload/v1519039572/sky_default_yqejau.jpg"
                    alt="Mailer"
                    width="560"
                    style="border: none; color: #333333; display: block; font-size: 13px; margin: 0; max-width: 560px; padding: 0; outline: none; text-decoration: none; width: 100%; -ms-interpolation-mode: bicubic;"
                  />
                </td>
              </tr>
  
              <tr>
                <td
                  valign="top"
                  style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 3px; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; line-height: 150%; padding-top: 5px;"
                >
                  <h3
                    style="color: #333; font-family: 'Roboto', Arial, sans-serif; font-size: 22px; font-weight: 800; line-height: 100%; margin: 20px 0 10px 0; padding: 0;"
                  >
                    New E-Mail Message
                  </h3>
                </td>
              </tr>
              <tr>
                <td
                  valign="top"
                  style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-bottom: 3px; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%; line-height: 150%; padding-top: 5px;"
                >
                  <span
                    style="display:block;color: #333; font-family: 'Roboto', Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 100%; margin: 20px 0 10px 0; padding: 0;"
                  >
                    From: ${req.body.name}
                  </span>
                  <span
                    style="display:block;color: #333; font-family: 'Roboto', Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 100%; margin: 20px 0 10px 0; padding: 0;"
                  >
                    Email: ${req.body.email}
                  </span>
                  <span
                    style="display:block;color: #333; font-family: 'Roboto', Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 100%; margin: 20px 0 10px 0; padding: 0;"
                  >
                    Subject: Sending Emails in Development Mode
                  </span>
                </td>
              </tr>
  
              <tr>
                <td
                  valign="top"
                  style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; padding-left: 6.25%; padding-right: 6.25%; width: 87.5%;"
                >
                  <p
                    style="font-size: 15px; font-weight: 400; line-height: 160%; color: #333333; font-family: 'Roboto', Arial, sans-serif;"
                  >
                  ${req.body.message}
                  </p>
                  <br />
                </td>
              </tr>
            </table>
  
            <table
              border="0"
              cellpadding="0"
              cellspacing="0"
              align="center"
              width="560"
              style="border-collapse: collapse; border-spacing: 0; padding: 0; width: inherit; max-width: 560px;"
              class="wrapper"
            >
              <tr>
                <td
                  align="center"
                  valign="top"
                  style="border-collapse: collapse; border-spacing: 0; margin: 0; padding: 0; font-size: 12px; font-weight: 400; line-height: 150%; padding-top: 20px; padding-bottom: 20px; color: #999999; font-family: 'Roboto', Arial, sans-serif;"
                  class="footer"
                >
                  NODEMAILER
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("ERROR SENDING EMAIL ", error);
    } else {
      console.log("Email sent! : " + info.response);
      res.json({ status: "sent" });
    }

    transporter.close();
  });
};
