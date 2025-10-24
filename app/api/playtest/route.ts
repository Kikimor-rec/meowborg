import { NextResponse } from 'next/server'
import { sendContactEmail, type InquiryType } from '@/lib/email'

// Интерфейс для данных формы
interface ContactSubmission {
  email: string
  message: string
  inquiryType: InquiryType
}

// Валидация email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: Request) {
  try {
    // Парсим body
    const body: ContactSubmission = await request.json()
    const { email, message, inquiryType } = body

    // Валидация
    if (!email || !message || !inquiryType) {
      return NextResponse.json(
        { error: 'Email, message and inquiry type are required' },
        { status: 400 }
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      )
    }

    if (message.length < 10 || message.length > 500) {
      return NextResponse.json(
        { error: 'Message must be between 10 and 500 characters' },
        { status: 400 }
      )
    }

    // Валидация типа обращения
    const validInquiryTypes = ['playtest', 'question', 'join-team']
    if (!validInquiryTypes.includes(inquiryType)) {
      return NextResponse.json(
        { error: 'Invalid inquiry type' },
        { status: 400 }
      )
    }

    // Отправка email через SMTP
    const emailResult = await sendContactEmail({ email, message, inquiryType })

    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error)
      return NextResponse.json(
        { error: 'Failed to send email notification' },
        { status: 500 }
      )
    }

    console.log('Contact submission processed successfully:', {
      email,
      inquiryType,
      timestamp: new Date().toISOString(),
    })

    // Возвращаем успех
    return NextResponse.json(
      { success: true, message: 'Thank you for your interest!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing playtest submission:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
