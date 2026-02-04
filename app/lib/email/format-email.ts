import { sanitizeStringForHtml } from "../sanitize-operations";

export function signatureBlock(): string {
  return `
    <div style="margin:10px 15px;">
      <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; width:100%; font-family: Arial, Helvetica, sans-serif;">
        <tr>
          <td style="border-radius:28px; background-color:#bbb; padding:0;">

            <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; width:100%; font-family: Arial, Helvetica, sans-serif;">
              <tr>
                <td colspan="3" height="1" style="height:1px; line-height:0; font-size:0;">&nbsp;</td>
              </tr>

              <tr>
                <td width="1" style="width:1px; line-height:0; font-size:0;">&nbsp;</td>

                <td style="border-radius:27px; background-color:#f8f8f8; padding:0;">
                  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="border-collapse:collapse; width:100%;">
                    <tr>
                      <td colspan="4" height="10" style="height:10px; line-height:0; font-size:0;">&nbsp;</td>
                    </tr>

                    <tr>
                      <td width="10" style="width:10px; line-height:0; font-size:0;">&nbsp;</td>

                      <td width="40" height="40" style="width:40px; height:40px; border-radius:999px; background-color:#999; line-height:0; font-size:0;" align="center" valign="middle">
                        <img
                          width="36"
                          height="36"
                          alt="Julius Busch"
                          src="https://julius-busch.com/cv_photo_48x48.png"
                          style="display:block; border:0; width:36px; height:36px; border-radius:999px; margin:2px;"
                        >
                      </td>

                      <td width="20" style="width:20px; line-height:0; font-size:0;">&nbsp;</td>

                      <td style="font-size:18px; font-weight:bold; line-height:18px;">
                        Julius Busch<br>
                        <span style="font-size:12px; font-weight:normal; color:#444;">📍 Brussels, Belgium</span>
                      </td>
                    </tr>

                    <tr>
                      <td colspan="4" height="10" style="height:10px; line-height:0; font-size:0;">&nbsp;</td>
                    </tr>

                    <tr>
                      <td colspan="4" height="6" style="height:6px; line-height:0; font-size:0; background-color:#b60000;">&nbsp;</td>
                    </tr>

                    <tr>
                      <td colspan="4" height="12" style="height:12px; line-height:0; font-size:0;">&nbsp;</td>
                    </tr>

                    <tr>
                      <td width="10" style="width:10px;">&nbsp;</td>
                      <td colspan="3" style="font-size:13px; color:#333; line-height:18px;">
                        🌍&nbsp;<b>Website:</b>&nbsp;<a href="https://julius-busch.com/" style="color:#012060; text-decoration:underline;">julius-busch.com</a>&nbsp;| 
                        📇&nbsp;<b>LinkedIn:</b>&nbsp;<a href="https://linkedin.com/in/buschjulius" style="color:#012060; text-decoration:underline;">linkedin.com/in/buschjulius</a>
                      </td>
                    </tr>

                    <tr>
                      <td colspan="4" height="15" style="height:15px; line-height:0; font-size:0;">&nbsp;</td>
                    </tr>
                  </table>
                </td>

                <td width="1" style="width:1px; line-height:0; font-size:0;">&nbsp;</td>
              </tr>

              <tr>
                <td colspan="3" height="3" style="height:3px; line-height:0; font-size:0;">&nbsp;</td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
    </div>
  `;
}

export function notificationMessageReceived(senderName: string, senderEmail: string, sentMessage: string): {plainMessage: string, htmlMessage: string} {

  const plainMessage: string = `You received a new message via the contact form on julius-busch.com:

Name: ${senderName}
Email: ${senderEmail}

Message:
${sentMessage}

---
This email was automatically generated via the contact form on julius-busch.com`;

  const htmlMessage: string = `
    <div style="
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    ">
    <p>You received a new message via the contact form on <a href="https://julius-busch.com" style="color:#012060; text-decoration:underline;">julius-busch.com</a>:</p>

    <p style="margin-bottom: 5px;"><strong>Name:</strong> ${sanitizeStringForHtml(senderName)}</p>
    <p style="margin: 5px 0 15px;"><strong>Email:</strong> ${sanitizeStringForHtml(senderEmail)}</p>

    <p style="
      border: solid black 2px;
      box-shadow: 0 2px 0 dimgray;
      border-radius: 20px;
      margin: 0 0 2em 0;
      padding: 15px;
      font-family: Courier New, Courier , monospace;
      font-weight: bold;
    ">
      ${sanitizeStringForHtml(sentMessage)}
    </p>
    
    <hr style="
      height: 3px;
      background: rgb(207, 187, 0);
      border: none;
    ">
    <p>
      <em>This email was automatically generated via the contact form on <a style="color:#012060; text-decoration:underline;" href="https://julius-busch.com">julius-busch.com</a>.</em>
    </p>
  </div>`;

  return { plainMessage, htmlMessage };
}


export function notificationMessageSent(sentMessage: string): {plainMessage: string, htmlMessage: string} {

  const plainMessage: string = `Thank you for reaching out to me via the contact form on julius-busch.com.

You sent the following message:

${sentMessage}


I will get back to you as soon as possible.

---
This email was automatically generated via the contact form on julius-busch.com.`;

  const htmlMessage: string = `
  <body style="
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  ">
    <div style="
      margin: 0;
      padding: 0;
      font-family: Arial, Helvetica, sans-serif;
    ">
      
      <div style="padding: 10px;">
    
        <p>Thank you for reaching out to me via the contact form on <a href="https://julius-busch.com" style="color:#012060;text-decoration:underline;">julius-busch.com</a>.</p>

        <p>You sent the following message:</p>

        <p style="
          margin: 35px 10px 35px 10px;
          font-family: Courier New, Courier , monospace;
          font-weight: bold;
        ">
          ${sanitizeStringForHtml(sentMessage)}
        </p>
        <p>I will get back to you as soon as possible.</p>
      </div>
      ${signatureBlock()}
      <p style="padding: 10px;">
        <em>
          This email was automatically generated via the contact form on <a style="color:#012060;text-decoration:underline;" href="https://julius-busch.com">julius-busch.com</a>.
        </em>
      </p>
      
    </div>
  </body>`;

  return { plainMessage, htmlMessage };
}