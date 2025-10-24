import nodemailer from 'nodemailer'

export type InquiryType = 'playtest' | 'question' | 'join-team'

interface ContactEmailData {
  email: string
  message: string
  inquiryType: InquiryType
}

const inquiryTypeLabels: Record<InquiryType, string> = {
  playtest: 'Playtest Request',
  question: 'Question',
  'join-team': 'Join Team Request',
}

// Создание SMTP транспорта
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true для 465, false для других портов
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export async function sendContactEmail(data: ContactEmailData) {
  const { email, message, inquiryType } = data

  try {
    const transporter = createTransporter()

    const subject = `[MEOW BORG] ${inquiryTypeLabels[inquiryType]} - ${email}`

    const html = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #FFDD00; background: #000000; padding: 20px; text-align: center;">
          MEOW BORG Contact Form
        </h1>
        
        <div style="padding: 20px; background: #f5f5f5;">
          <h2 style="color: #000000;">Inquiry Type</h2>
          <p style="font-size: 18px; color: #FF0000; font-weight: bold;">
            ${inquiryTypeLabels[inquiryType]}
          </p>
          
          <h2 style="color: #000000; margin-top: 30px;">Contact Information</h2>
          <p><strong>Email:</strong> ${email}</p>
          
          <h2 style="color: #000000; margin-top: 30px;">Message</h2>
          <p style="white-space: pre-wrap;">${message}</p>
          
          <hr style="margin: 30px 0; border: none; border-top: 2px solid #FF0000;" />
          
          <p style="color: #666; font-size: 12px;">
            Submitted: ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_EMAIL || 'meow@meowborg.com',
      subject: subject,
      html: html,
      replyTo: email,
    })

    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}
