import { Resend } from 'resend'

// Инициализация Resend
const resend = new Resend(process.env.RESEND_API_KEY)

interface PlaytestEmailData {
  email: string
  message: string
}

export async function sendPlaytestEmail(data: PlaytestEmailData) {
  const { email, message } = data

  try {
    const response = await resend.emails.send({
      from: 'MEOW BORG <noreply@meowborg.com>',
      to: process.env.PLAYTEST_EMAIL || 'meow@meowborg.com',
      subject: 'New Playtest Submission',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #FFDD00; background: #000000; padding: 20px; text-align: center;">
            MEOW BORG Playtest Submission
          </h1>
          
          <div style="padding: 20px; background: #f5f5f5;">
            <h2 style="color: #000000;">Contact Information</h2>
            <p><strong>Email:</strong> ${email}</p>
            
            <h2 style="color: #000000; margin-top: 30px;">Message</h2>
            <p style="white-space: pre-wrap;">${message}</p>
            
            <hr style="margin: 30px 0; border: none; border-top: 2px solid #FF0000;" />
            
            <p style="color: #666; font-size: 12px;">
              Submitted: ${new Date().toLocaleString()}
            </p>
          </div>
        </div>
      `,
    })

    return { success: true, data: response }
  } catch (error) {
    console.error('Error sending email:', error)
    return { success: false, error }
  }
}
