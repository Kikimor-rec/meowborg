# Code Conventions: MEOW BORG Website

> **Базовый документ:** См. полное техническое видение в [`vision.md`](./vision.md)  
> **Принцип:** KISS (Keep It Simple, Stupid)

---

## Общие правила

### 1. Философия кода
- **Простота превыше всего** - не усложняй без необходимости
- **Convention over Configuration** - используй дефолты фреймворков
- **Работающий код важнее идеального** - сначала MVP, потом оптимизация
- **Читаемость важнее краткости** - код пишется раз, читается много раз

### 2. Структура файлов
- **Один компонент = один файл**
- **Именование:** PascalCase для компонентов, camelCase для утилит
- **Расположение:** следуй структуре из `vision.md` раздел 3
- **Импорты:** используй alias `@/` для абсолютных путей

---

## TypeScript

### Правила типизации
```typescript
// ✅ Хорошо - явные типы для параметров и возврата
function sendEmail(email: string, message: string): Promise<ApiResponse> {
  // ...
}

// ❌ Плохо - неявные any
function sendEmail(email, message) {
  // ...
}
```

- **Явная типизация** - всегда указывай типы параметров и возврата функций
- **Интерфейсы над types** - для объектов используй `interface`
- **Никогда `any`** - используй `unknown` если тип неизвестен
- **Типы в отдельных файлах** - если используются в нескольких местах

---

## React Components

### Server vs Client Components
```typescript
// ✅ Server Component (по умолчанию) - статический контент
export default function About() {
  return <div>О проекте</div>
}

// ✅ Client Component - только для интерактивности
'use client'
export default function PlaytestForm() {
  const [email, setEmail] = useState('')
  // ...
}
```

- **Server Components по умолчанию** - не добавляй `"use client"` без необходимости
- **Client Components** - только для форм, интерактивных элементов
- **Никакого бизнес-логики в компонентах** - выноси в `lib/`

### Структура компонента
```typescript
'use client' // только если нужен

import { useState } from 'react'
import { ComponentProps } from './types' // если сложные типы

export default function Component({ prop1, prop2 }: ComponentProps) {
  // 1. Hooks
  const [state, setState] = useState('')
  
  // 2. Handlers
  const handleClick = () => {
    // ...
  }
  
  // 3. Render
  return (
    <div className="...">
      {/* JSX */}
    </div>
  )
}
```

---

## Styling (Tailwind CSS)

### Использование классов
```typescript
// ✅ Хорошо - Tailwind классы, кастомные цвета из config
<div className="bg-meow-black text-meow-yellow p-4 rounded-lg">
  
// ❌ Плохо - inline styles
<div style={{ backgroundColor: '#000', color: '#FFDD00' }}>
```

- **Только Tailwind** - никаких inline styles или CSS modules
- **Кастомные цвета** - используй `meow-yellow`, `meow-red`, `meow-black`, `meow-white` из конфига
- **Responsive** - mobile-first подход (`sm:`, `md:`, `lg:`)
- **Группировка** - логически группируй классы (layout → colors → typography)

---

## API Routes

### Структура
```typescript
// app/api/playtest/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { logger } from '@/lib/logger'

export async function POST(request: NextRequest) {
  try {
    // 1. Парсинг и валидация
    const body = await request.json()
    const { email, message } = validatePlaytestRequest(body)
    
    // 2. Бизнес-логика (в lib/)
    await sendPlaytestEmail(email, message)
    
    // 3. Логирование
    logger.info('playtest', 'Request sent', { email })
    
    // 4. Ответ
    return NextResponse.json({ success: true, message: 'Заявка отправлена' })
    
  } catch (error) {
    // 5. Обработка ошибок
    logger.error('playtest', 'Failed to process request', error)
    return NextResponse.json(
      { success: false, error: 'Ошибка отправки' },
      { status: 500 }
    )
  }
}
```

- **Try-catch обязателен** - всегда оборачивай в try-catch
- **Валидация сначала** - проверяй входные данные до обработки
- **Бизнес-логика в lib/** - API route только оркестрирует
- **Логируй важное** - см. `vision.md` раздел 9
- **Понятные ошибки** - возвращай читаемые сообщения

---

## Валидация

```typescript
// lib/validation.ts
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePlaytestRequest(data: unknown): PlaytestRequest {
  if (!data || typeof data !== 'object') {
    throw new Error('Invalid request data')
  }
  
  const { email, message } = data as any
  
  if (!email || !validateEmail(email)) {
    throw new Error('Invalid email')
  }
  
  if (!message || message.length < 10 || message.length > 500) {
    throw new Error('Message must be 10-500 characters')
  }
  
  return { email, message }
}
```

- **Валидация в отдельных функциях** - переиспользуй
- **Throw errors** - не возвращай boolean, бросай исключения
- **Конкретные сообщения** - понятно что не так

---

## Логирование

```typescript
import { logger } from '@/lib/logger'

// ✅ Хорошо - контекст + сообщение
logger.info('playtest', 'Request received', { email })
logger.error('email', 'Resend API failed', error)

// ❌ Плохо - console.log напрямую в production коде
console.log('error:', error)
```

- **Используй logger** - из `lib/logger.ts`
- **Контекст обязателен** - первый параметр (где произошло)
- **Структурированные данные** - третий параметр для объектов
- **Не логируй чувствительные данные** - см. `vision.md` раздел 9

---

## Именование

### Переменные и функции
```typescript
// ✅ Хорошо
const userEmail = 'user@example.com'
const isValidEmail = validateEmail(email)
async function sendPlaytestEmail(email: string) { }

// ❌ Плохо
const e = 'user@example.com'
const valid = check(email)
async function send(email: string) { }
```

### Компоненты
```typescript
// ✅ Хорошо - PascalCase, описательное
Hero.tsx
PlaytestForm.tsx
SocialLinks.tsx

// ❌ Плохо
hero.tsx
form.tsx
links.tsx
```

- **camelCase** - переменные, функции
- **PascalCase** - компоненты, интерфейсы
- **UPPER_CASE** - константы (`const API_URL = '...'`)
- **Описательные имена** - `sendEmail` вместо `send`
- **Boolean префиксы** - `is`, `has`, `should` (`isValid`, `hasError`)

---

## Git Commits

```bash
# ✅ Хорошо
feat: add playtest form component
fix: email validation regex
docs: update vision.md

# ❌ Плохо
update
fixed stuff
changes
```

**Формат:** `<type>: <описание>`

**Types:**
- `feat` - новая функциональность
- `fix` - исправление бага
- `docs` - документация
- `style` - форматирование кода
- `refactor` - рефакторинг
- `test` - тесты

---

## Тестирование

```typescript
// __tests__/lib/validation.test.ts
import { validateEmail } from '@/lib/validation'

describe('validateEmail', () => {
  it('should validate correct email', () => {
    expect(validateEmail('test@example.com')).toBe(true)
  })
  
  it('should reject invalid email', () => {
    expect(validateEmail('invalid')).toBe(false)
  })
})
```

- **Тестируй критичное** - валидация, API логика
- **Не тестируй UI** - на MVP пропускаем
- **Понятные названия** - `it('should ...')`
- **Arrange-Act-Assert** - структура теста

---

## Environment Variables

```typescript
// ✅ Хорошо - проверка наличия
const apiKey = process.env.RESEND_API_KEY
if (!apiKey) {
  throw new Error('RESEND_API_KEY is not set')
}

// ✅ Хорошо - публичные переменные
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

// ❌ Плохо - хардкод
const apiKey = 're_xxxxxxxxxxxxx'
```

- **Никогда не коммить** - `.env.local` в `.gitignore`
- **Проверяй наличие** - fail fast если переменная не задана
- **Префикс для публичных** - `NEXT_PUBLIC_` для клиентского кода
- **Документируй** - список всех переменных в `README.md`

---

## Чеклист перед коммитом

- [ ] Код запускается без ошибок (`npm run dev`)
- [ ] Линтер проходит (`npm run lint`)
- [ ] Код отформатирован (`npm run format`)
- [ ] Тесты проходят (`npm test`)
- [ ] Нет `console.log` (используй `logger`)
- [ ] Нет хардкода (API ключи, URL в env)
- [ ] Типы TypeScript корректны (нет `any`)
- [ ] Компоненты в правильных директориях

---

## Запрещено

❌ `any` в TypeScript  
❌ Inline styles вместо Tailwind  
❌ `console.log` в production коде  
❌ Хардкод API ключей и секретов  
❌ Сложная вложенность (>3 уровней)  
❌ Файлы >300 строк (разделяй)  
❌ `var` (только `const`/`let`)  
❌ Коммиты нерабочего кода  

---

## Разрешено (и приветствуется)

✅ Простые решения вместо сложных  
✅ Комментарии для неочевидной логики  
✅ Ранний `return` для читаемости  
✅ Дефолтные настройки фреймворков  
✅ Переиспользование кода через функции  
✅ Явная типизация везде  
✅ Рефакторинг после работающего MVP  

---

**Помни:** Код должен быть простым, понятным и работающим. Если сомневаешься - выбирай более простое решение.
