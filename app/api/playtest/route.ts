import { NextResponse } from 'next/server'

// Интерфейс для данных формы
interface PlaytestSubmission {
  email: string
  message: string
}

// Валидация email
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: Request) {
  try {
    // Парсим body
    const body: PlaytestSubmission = await request.json()
    const { email, message } = body

    // Валидация
    if (!email || !message) {
      return NextResponse.json(
        { error: 'Email and message are required' },
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

    // TODO: В следующей итерации добавим отправку email через Resend
    // Пока просто логируем
    console.log('Playtest submission received:', {
      email,
      message,
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
