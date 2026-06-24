export type ContactSubmissionEmailData = {
  parentFirstName: string;
  parentLastName: string;
  contactNumber: string;
  email: string;
  childFirstName: string;
  childLastName: string;
  age: string;
  gender: string;
  previousExperience: string;
  medicalConditions: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatMultiline(value: string) {
  if (!value.trim()) {
    return "—";
  }

  return escapeHtml(value).replaceAll("\n", "<br />");
}

function formatGender(gender: string) {
  if (gender === "male") {
    return "Male";
  }

  if (gender === "female") {
    return "Female";
  }

  return escapeHtml(gender);
}

function emailDataRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:14px 20px;border-bottom:1px solid #ececec;font-family:Georgia,'Times New Roman',serif;font-size:13px;font-weight:600;color:#6b6b6b;vertical-align:top;width:38%;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:14px 20px;border-bottom:1px solid #ececec;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.5;color:#2d2d2d;vertical-align:top;">
        ${value}
      </td>
    </tr>
  `;
}

function emailSection(title: string, rows: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background-color:#ffffff;border:1px solid #e8e8e8;border-radius:12px;margin-bottom:20px;">
      <tr>
        <td style="padding:18px 20px 14px;border-bottom:1px solid #ececec;background-color:#faf8f8;">
          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:18px;font-weight:600;color:#2d2d2d;letter-spacing:0.02em;">
            ${escapeHtml(title)}
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:0;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
            ${rows}
          </table>
        </td>
      </tr>
    </table>
  `;
}

function emailTextBlock(label: string, value: string) {
  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background-color:#ffffff;border:1px solid #e8e8e8;border-radius:12px;margin-bottom:20px;">
      <tr>
        <td style="padding:18px 20px 10px;background-color:#faf8f8;border-bottom:1px solid #ececec;">
          <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;font-weight:600;color:#2d2d2d;">
            ${escapeHtml(label)}
          </p>
        </td>
      </tr>
      <tr>
        <td style="padding:16px 20px 20px;font-family:Arial,Helvetica,sans-serif;font-size:15px;line-height:1.6;color:#2d2d2d;">
          ${formatMultiline(value)}
        </td>
      </tr>
    </table>
  `;
}

export function buildContactSubmissionEmail(data: ContactSubmissionEmailData) {
  const parentName = `${data.parentFirstName} ${data.parentLastName}`.trim();
  const childName = `${data.childFirstName} ${data.childLastName}`.trim();
  const submittedAt = new Date().toLocaleString("en-US", {
    dateStyle: "long",
    timeStyle: "short",
  });

  const parentRows = [
    emailDataRow("Full Name", escapeHtml(parentName)),
    emailDataRow("Email", `<a href="mailto:${escapeHtml(data.email)}" style="color:#5c4d56;text-decoration:none;">${escapeHtml(data.email)}</a>`),
    emailDataRow("Contact Number", escapeHtml(data.contactNumber)),
  ].join("");

  const childRows = [
    emailDataRow("Full Name", escapeHtml(childName)),
    emailDataRow("Age", escapeHtml(data.age)),
    emailDataRow("Gender", formatGender(data.gender)),
  ].join("");

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="x-apple-disable-message-reformatting" />
    <title>New CDF Contact Form Submission</title>
  </head>
  <body style="margin:0;padding:0;background-color:#f4f4f4;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background-color:#f4f4f4;">
      <tr>
        <td align="center" style="padding:32px 16px;">
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;max-width:600px;">
            <tr>
              <td style="padding:28px 32px;background-color:#2d2d2d;border-radius:14px 14px 0 0;text-align:center;">
                <p style="margin:0 0 6px;font-family:Georgia,'Times New Roman',serif;font-size:12px;font-weight:400;letter-spacing:0.18em;text-transform:uppercase;color:#d4c4c8;">
                  Children's Dance Factory
                </p>
                <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:28px;font-weight:600;line-height:1.3;color:#ffffff;">
                  New Contact Form Submission
                </h1>
                <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.5;color:#d9d9d9;">
                  A new inquiry was received from your website.
                </p>
              </td>
            </tr>

            <tr>
              <td style="padding:24px 24px 8px;background-color:#ffffff;border-left:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;background-color:#f7f2f3;border:1px solid #eadde0;border-radius:10px;">
                  <tr>
                    <td style="padding:14px 18px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.5;color:#5c4d56;">
                      <strong style="color:#2d2d2d;">Received:</strong> ${escapeHtml(submittedAt)}
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td style="padding:8px 24px 24px;background-color:#ffffff;border-left:1px solid #e8e8e8;border-right:1px solid #e8e8e8;">
                ${emailSection("Parent / Guardian", parentRows)}
                ${emailSection("Child", childRows)}
                ${emailTextBlock("Previous Experience", data.previousExperience)}
                ${emailTextBlock("Pre-existing Medical / Physical Conditions", data.medicalConditions)}
                ${emailTextBlock("Message", data.message)}
              </td>
            </tr>

            <tr>
              <td style="padding:22px 24px 28px;background-color:#fafafa;border:1px solid #e8e8e8;border-top:none;border-radius:0 0 14px 14px;text-align:center;">
                <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.6;color:#6b6b6b;">
                  This is an automated notification from the
                  <strong style="color:#2d2d2d;">CDF website contact form</strong>.
                </p>
                <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.6;color:#9a9a9a;">
                  Reply directly to this email to respond to ${escapeHtml(parentName)}.
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
