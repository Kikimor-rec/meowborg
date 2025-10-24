'use client'

import { useState } from 'react'

export default function PlaytestForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<
    'idle' | 'loading' | 'success' | 'error'
  >('idle')
  const [errors, setErrors] = useState({ email: '', message: '' })

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Валидация
    const newErrors = { email: '', message: '' }

    if (!email) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!message || message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    } else if (message.length > 500) {
      newErrors.message = 'Message must be less than 500 characters'
    }

    if (newErrors.email || newErrors.message) {
      setErrors(newErrors)
      return
    }

    setErrors({ email: '', message: '' })
    setStatus('loading')

    // TODO: Отправка на API (будет в итерации 4-5)
    setTimeout(() => {
      console.log('Form data:', { email, message })
      setStatus('success')
      setEmail('')
      setMessage('')
    }, 1000)
  }

  return (
    <section className="min-h-screen bg-meow-black py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-4xl md:text-6xl text-meow-yellow mb-8 text-center">
          Join the Playtest
        </h2>

        <p className="text-meow-white text-center mb-12">
          Want to explore the feline dreamworld? Sign up for our playtest and
          be among the first to experience MEOW BORG.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-meow-white mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-meow-black border-2 border-meow-yellow text-meow-white focus:outline-none focus:border-meow-red transition-colors"
              placeholder="your@email.com"
              disabled={status === 'loading'}
            />
            {errors.email && (
              <p className="text-meow-red text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-meow-white mb-2">
              Tell us about yourself
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full px-4 py-3 bg-meow-black border-2 border-meow-yellow text-meow-white focus:outline-none focus:border-meow-red transition-colors resize-none"
              placeholder="Why do you want to join the playtest?"
              disabled={status === 'loading'}
            />
            <div className="flex justify-between mt-1">
              {errors.message && (
                <p className="text-meow-red text-sm">{errors.message}</p>
              )}
              <p className="text-meow-white/60 text-sm ml-auto">
                {message.length}/500
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-4 bg-meow-yellow text-meow-black font-heading text-xl hover:bg-meow-red hover:text-meow-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? 'Sending...' : 'Submit'}
          </button>

          {/* Success Message */}
          {status === 'success' && (
            <div className="text-center text-meow-yellow text-lg">
              ✓ Thank you! We&apos;ll contact you soon.
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
