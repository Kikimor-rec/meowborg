# Technical Vision: MEOW BORG Website

> Дата создания: 24 октября 2025  
> Принцип: KISS (Keep It Simple, Stupid) - максимально простое решение для проверки идеи

---

## 1. Технологии

### Frontend Stack
- **Framework:** Next.js 14+ (App Router)
  - SSG (Static Site Generation) для статического контента
  - Идеальная интеграция с Vercel
  - Возможность добавления интерактивных элементов в будущем

- **Язык:** TypeScript
  - Типобезопасность
  - Лучшая поддержка в IDE

- **Стилизация:** Tailwind CSS
  - Быстрая разработка
  - Минимум кастомного CSS
  - Встроенная поддержка темной темы

### Хранение контента
- **MDX файлы** (Markdown + React компоненты)
  - Простое редактирование правил игры
  - Не требуется БД на старте
  - Git как система версионирования
  - Возможность встраивать React компоненты для будущих калькуляторов/генераторов

### Deployment
- **Vercel**
  - Автоматический деплой из Git (main branch)
  - Zero-config для Next.js
  - Бесплатный план для старта
  - Автоматический HTTPS

### Дизайн система
- **Цветовая палитра MEOW BORG:**
  - Желтый (основной акцент)
  - Красный (вторичный акцент)
  - Черный (фон/текст)
  - Белый (текст/фон)

### Язык
- **Английский** - основной язык сайта
- Интернациональная аудитория

### Будущие возможности
- Интерактивные калькуляторы
- Генераторы персонажей
- (Реализация через React компоненты в MDX)

---

## 2. Принципы разработки

### Основной принцип
**KISS (Keep It Simple, Stupid)** - максимально простое решение для проверки идеи

### Ключевые принципы

1. **Итеративная разработка**
   - Сначала MVP (Minimum Viable Product)
   - Постепенное добавление функций по мере необходимости

2. **Convention over Configuration**
   - Используем стандартные настройки Next.js
   - Минимум кастомных конфигураций

3. **Static First**
   - Максимум статической генерации (SSG)
   - Минимум клиентского JavaScript
   - Быстрая загрузка страниц

4. **Не изобретаем велосипед**
   - Используем готовые решения и библиотеки
   - Фокус на уникальном контенте, а не на инфраструктуре

### Git Flow
- **Trunk-based development**
  - Основная ветка: `main`
  - Feature branches для новых функций
  - Проверка работоспособности локально перед пушем
  - Автодеплой на Vercel после merge в `main`

### Качество кода

**Линтинг и форматирование:**
- ESLint (встроен в Next.js) - проверка кода
- Prettier - автоматическое форматирование
- Запуск перед коммитом

**Тестирование:**
- Автотесты для критичной функциональности
- Фреймворк: Jest + React Testing Library
- Покрытие тестами добавляется по мере роста проекта

**Workflow разработки:**
1. Разработка локально (`npm run dev`)
2. Проверка работоспособности вручную
3. Запуск линтера и тестов
4. Коммит только рабочего кода
5. Push в Git → автодеплой на Vercel

### Передача проекта
- Документация в README.md
- Понятная структура проекта
- Комментарии в сложных местах
- Готовность к работе в команде в будущем

---

## 3. Структура проекта

### Тип проекта
**Landing Page** - одностраничный сайт для анонса проекта MEOW BORG

### Файловая структура

```
meow-borg/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Общий layout (мета-теги, шрифты)
│   ├── page.tsx                 # Главная страница (лендинг)
│   ├── globals.css              # Tailwind + кастомные стили
│   └── api/                     # API Routes
│       └── playtest/
│           └── route.ts         # Прием заявок на плейтест
│
├── components/                   # React компоненты
│   ├── Hero.tsx                 # Главный блок с названием и слоганом
│   ├── About.tsx                # О проекте и философии системы
│   ├── PlaytestForm.tsx         # Форма заявки на плейтест
│   └── SocialLinks.tsx          # Ссылки на соцсети
│
├── public/                       # Статические файлы
│   ├── images/                  # Логотип, артворк, иконки
│   └── favicon.ico
│
├── lib/                          # Утилиты
│   └── email.ts                 # Resend API интеграция
│
├── package.json
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
├── .env.local                    # Переменные окружения (API ключи)
└── README.md
```

### Структура лендинга

**Одна страница с секциями (на английском языке):**

1. **Hero секция**
   - Название MEOW BORG
   - Короткий слоган/описание
   - Визуальный акцент (цвета: желтый, красный, черный, белый)

2. **О проекте**
   - Философия системы
   - Что такое MEOW BORG
   - Для кого эта игра
   - Legal notice (Third Party License)
   - Dedication

3. **Заявка на плейтест**
   - Форма: email + текстовое поле (комментарий)
   - Отправка через API route
   - Уведомление на email через Resend

4. **Социальные сети**
   - Ссылки на соцсети (будут добавлены позже)
   - Призыв следить за проектом

### Email интеграция
- **Resend API** - отправка заявок на плейтест
- Бесплатный план: 3000 писем/месяц
- Простая интеграция с Next.js

---

## 4. Архитектура проекта

### Архитектурный паттерн
**Layered Architecture** (упрощенная трехслойная архитектура)

```
┌─────────────────────────────────────────────┐
│  Presentation Layer                         │
│  (React Components)                         │
│  - Hero, About, PlaytestForm, SocialLinks   │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│  API Layer                                  │
│  (Next.js API Routes)                       │
│  - app/api/playtest/route.ts                │
└─────────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────────┐
│  Service Layer                              │
│  (Business Logic & External Services)       │
│  - lib/email.ts (Resend integration)        │
└─────────────────────────────────────────────┘
```

### Рендеринг стратегия

**SSG (Static Site Generation)** - основная стратегия
- Весь лендинг генерируется статически при билде
- Максимальная производительность
- Моментальная загрузка страниц
- SEO-friendly из коробки

**Server Components** (по умолчанию в Next.js 14)
- Все компоненты без интерактивности
- Рендерятся на сервере
- Меньше JavaScript на клиенте

**Client Components** (минимум)
- Только интерактивные элементы: `PlaytestForm`
- Маркируются директивой `"use client"`

### Data Flow

**Заявка на плейтест:**
```
User fills form → Client Component (PlaytestForm)
                       ↓
                  POST /api/playtest
                       ↓
              Validation & Processing
                       ↓
                Resend API (Email)
                       ↓
              Response to User (Success/Error)
```

### Технические решения

**Что есть:**
- Next.js App Router (файловый роутинг)
- API Routes для серверной логики
- Resend для email отправки
- Tailwind для стилизации

**Чего нет (KISS принцип):**
- База данных
- State management (Redux/Zustand)
- Backend сервер
- Сложная бизнес-логика
- Авторизация/аутентификация

### Масштабирование в будущем

При необходимости можно добавить:
- MDX для контента (правила игры)
- Интерактивные калькуляторы (Client Components)
- Генераторы персонажей
- База данных (если понадобится хранить заявки)

---

## 5. Модель данных

### Подход к данным
**Без базы данных на MVP** - все данные обрабатываются через API и отправляются на email

### TypeScript интерфейсы

**Заявка на плейтест:**
```typescript
interface PlaytestRequest {
  email: string;          // Email участника
  message: string;        // Комментарий/сообщение
  timestamp?: Date;       // Время отправки (опционально)
}
```

**API Response:**
```typescript
interface ApiResponse {
  success: boolean;       // Успешность операции
  message: string;        // Сообщение для пользователя
  error?: string;         // Детали ошибки (если есть)
}
```

**Validation Rules:**
- `email`: валидный email формат (RFC 5322)
- `message`: 10-500 символов
- Rate limiting: максимум 5 заявок с одного IP в час

### Хранение данных

**Контент сайта:**
- Тексты о проекте → хардкод в компонентах
- Изображения → `/public/images/`
- Стили → Tailwind классы + `globals.css`

**Заявки на плейтест:**
- Не сохраняются в БД
- Отправляются на email через Resend
- Email содержит: адрес участника, сообщение, timestamp

**Конфигурация:**
- Переменные окружения (`.env.local`):
  - `RESEND_API_KEY` - ключ API Resend
  - `PLAYTEST_EMAIL` - email для получения заявок
  - `NEXT_PUBLIC_SITE_URL` - URL сайта

### Будущее расширение

При необходимости можно добавить:
- База данных (PostgreSQL + Vercel Postgres)
- Сохранение заявок для аналитики
- CMS для контента (Contentful, Sanity)
- Таблица users для авторизации мастеров плейтеста

---

## 6. Сценарии работы (User Stories)

### Основные сценарии

#### 1. Посетитель знакомится с проектом

**Цель:** Узнать о MEOW BORG и понять философию системы

**Шаги:**
1. Посетитель заходит на сайт
2. Видит Hero секцию с названием и слоганом
3. Скроллит вниз и читает раздел "О проекте"
4. Знакомится с философией и концепцией системы
5. Видит визуальный стиль (желтый, красный, черный, белый)

**Результат:** Посетитель понимает, что такое MEOW BORG

---

#### 2. Посетитель подает заявку на плейтест

**Цель:** Зарегистрироваться для участия в плейтесте

**Успешный сценарий:**
1. Посетитель скроллит до формы плейтеста
2. Вводит свой email
3. Пишет комментарий/сообщение (почему хочет участвовать)
4. Нажимает кнопку "Отправить заявку"
5. Видит сообщение "Заявка отправлена! Мы свяжемся с вами"
6. Форма очищается

**На стороне системы:**
- API получает данные
- Валидирует email и сообщение
- Отправляет email владельцу проекта через Resend
- Возвращает success response

**Результат:** Владелец получает email с заявкой

---

#### 3. Посетитель переходит в социальные сети

**Цель:** Подписаться на проект для получения обновлений

**Шаги:**
1. Посетитель видит секцию с соцсетями
2. Выбирает интересующую платформу
3. Кликает на ссылку
4. Переходит в соцсеть (новая вкладка)
5. Подписывается на проект

**Результат:** Посетитель следит за обновлениями проекта

---

### Обработка ошибок (Edge Cases)

#### Невалидные данные формы

**Сценарий:** Email не соответствует формату
- **Действие:** Показать ошибку под полем "Введите корректный email"
- **Форма:** Не отправляется

**Сценарий:** Сообщение пустое или слишком короткое (<10 символов)
- **Действие:** Показать ошибку "Минимум 10 символов"
- **Форма:** Не отправляется

**Сценарий:** Сообщение слишком длинное (>500 символов)
- **Действие:** Показать ошибку "Максимум 500 символов"
- **Форма:** Не отправляется

---

#### Технические ошибки

**Сценарий:** Ошибка сети при отправке
- **Действие:** Показать сообщение "Ошибка отправки. Попробуйте позже"
- **Форма:** Данные остаются, можно повторить попытку

**Сценарий:** Resend API недоступен
- **Действие:** Логировать ошибку, показать пользователю техническую ошибку
- **Форма:** Данные сохраняются для повторной попытки

---

#### Защита от спама

**Сценарий:** Повторная отправка с одного IP
- **Действие:** Rate limiting - максимум 5 заявок в час
- **Ответ:** "Вы уже отправили заявку. Попробуйте позже"

---

## 7. Деплой

### Платформа
**Vercel** - официальная платформа для Next.js проектов

### Процесс деплоя

#### Первоначальная настройка
1. Создать репозиторий на GitHub
2. Подключить GitHub к Vercel
3. Импортировать проект `meow-borg`
4. Vercel автоматически детектит Next.js
5. Настроить переменные окружения
6. Первый деплой

#### Continuous Deployment
- **Production:** Push в `main` → автоматический деплой на production
- **Preview:** Push в feature branch → preview URL для тестирования
- **Rollback:** Откат к предыдущей версии в один клик

### Environment Variables

**Production переменные (Vercel Dashboard):**
```
RESEND_API_KEY=re_xxx        # API ключ Resend
PLAYTEST_EMAIL=your@email.com # Email для получения заявок
NEXT_PUBLIC_SITE_URL=https://meow-borg.vercel.app
```

**Local Development (`.env.local`):**
```
RESEND_API_KEY=re_test_xxx
PLAYTEST_EMAIL=test@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Домен

**По умолчанию:**
- `meow-borg.vercel.app` (бесплатно)

**Кастомный домен (опционально):**
- Подключение через Vercel Dashboard
- Автоматический SSL сертификат
- DNS настройка

### Build настройки

**Vercel автоматически:**
- Устанавливает зависимости: `npm install`
- Собирает проект: `npm run build`
- Запускает: Next.js production server

**Build команды (по умолчанию):**
- Build Command: `next build`
- Output Directory: `.next`
- Install Command: `npm install`

### Преимущества Vercel

✅ Zero-config для Next.js  
✅ Автоматический HTTPS  
✅ Global CDN (быстрая загрузка по всему миру)  
✅ Instant rollback (откат за секунды)  
✅ Preview deployments (тестирование до production)  
✅ Логи и аналитика  
✅ Бесплатный plan для личных проектов  

### Workflow разработки → деплой

```
1. Разработка локально (npm run dev)
              ↓
2. Тестирование и проверка
              ↓
3. Commit + Push в feature branch
              ↓
4. Vercel создает Preview URL
              ↓
5. Тестирование на Preview
              ↓
6. Merge в main
              ↓
7. Автоматический Production Deploy
```

---

## 8. Подход к конфигурированию

### Принцип
**Convention over Configuration** - используем стандартные настройки, минимум кастомизации

### Конфигурационные файлы

#### Next.js (`next.config.js`)
Минимальная конфигурация, используем дефолты:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Пустой - используем все настройки по умолчанию
  // Добавляем только при необходимости
}

module.exports = nextConfig
```

#### Tailwind CSS (`tailwind.config.ts`)
Кастомная цветовая палитра MEOW BORG:

```typescript
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'meow-yellow': '#FFDD00',
        'meow-red': '#FF0000',
        'meow-black': '#000000',
        'meow-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

export default config
```

#### TypeScript (`tsconfig.json`)
Используем дефолтную конфигурацию от Next.js:

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

### Environment Variables

#### Production (Vercel Dashboard)
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
PLAYTEST_EMAIL=your@email.com
NEXT_PUBLIC_SITE_URL=https://meow-borg.vercel.app
```

#### Local Development (`.env.local`)
```
RESEND_API_KEY=re_test_xxxxxxxxxxxxx
PLAYTEST_EMAIL=test@example.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

**Правила:**
- Секретные ключи НИКОГДА не коммитим в Git
- `.env.local` добавлен в `.gitignore`
- Публичные переменные начинаются с `NEXT_PUBLIC_`
- Документируем необходимые переменные в `README.md`

### Package.json Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write ."
  }
}
```

### ESLint (`.eslintrc.json`)
Дефолтная конфигурация Next.js:

```json
{
  "extends": "next/core-web-vitals"
}
```

### Prettier (`.prettierrc`)
Базовые правила форматирования:

```json
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### Принципы конфигурирования

✅ **Минимализм** - только необходимые настройки  
✅ **Дефолты** - используем стандартные конфигурации фреймворков  
✅ **Безопасность** - секреты только в environment variables  
✅ **Документация** - все переменные описаны в README  
✅ **Переиспользование** - одна конфигурация для dev и production (через env)  

---

## 9. Подход к логгированию

### Принцип
**Простое и достаточное** - логируем только критичные события и ошибки

### Что логируем

#### Ошибки (ERROR level)
- Ошибки Resend API (не удалось отправить email)
- Неожиданные server-side ошибки
- Ошибки валидации на сервере
- Network errors

#### Информационные события (INFO level)
- Успешная отправка заявки на плейтест
- Успешная отправка email

#### Отладка (DEBUG level)
- Данные запросов (только в development)
- Промежуточные состояния
- Timing информация

### Инструменты

#### Development (локальная разработка)
```typescript
console.log('[INFO]', message)
console.error('[ERROR]', error)
console.debug('[DEBUG]', data)
```

#### Production (Vercel)
- **Vercel Logs** - встроенное логирование
  - Автоматический сбор логов
  - Доступ через Vercel Dashboard
  - Retention: 1 день (бесплатный план)
  
- **Next.js Runtime Logs**
  - API Routes логи
  - Server-side errors
  - Build logs

### Структура логов

**Формат:**
```
[timestamp] [level] [context] message [data]
```

**Пример:**
```typescript
// lib/logger.ts
export const logger = {
  error: (context: string, message: string, error?: any) => {
    console.error(`[${new Date().toISOString()}] [ERROR] [${context}] ${message}`, error)
  },
  
  info: (context: string, message: string, data?: any) => {
    console.log(`[${new Date().toISOString()}] [INFO] [${context}] ${message}`, data)
  },
  
  debug: (context: string, message: string, data?: any) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[${new Date().toISOString()}] [DEBUG] [${context}] ${message}`, data)
    }
  }
}
```

**Использование:**
```typescript
// app/api/playtest/route.ts
import { logger } from '@/lib/logger'

// Успешная отправка
logger.info('playtest', 'Request received', { email: request.email })

// Ошибка
logger.error('playtest', 'Failed to send email', error)
```

### Уровни логирования

| Level | Когда использовать | Environment |
|-------|-------------------|-------------|
| **ERROR** | Критичные ошибки, требующие внимания | Dev + Production |
| **INFO** | Важные события (заявки, успешные операции) | Dev + Production |
| **DEBUG** | Отладочная информация, детали выполнения | Dev only |

### Что НЕ логируем

❌ Персональные данные (emails в production логах)  
❌ API ключи и секреты  
❌ Полные request/response bodies в production  
❌ Избыточную информацию (каждый рендер компонента)  

### Мониторинг ошибок (будущее)

При необходимости можно добавить:
- **Sentry** - для отслеживания ошибок в production
- **Vercel Analytics** - для производительности
- **LogRocket** - для session replay (если нужен debugging user experience)

### Доступ к логам

**Development:**
- Терминал с `npm run dev`

**Production:**
1. Vercel Dashboard → Project → Logs
2. Фильтрация по времени
3. Поиск по тексту
4. Экспорт (на платных планах)

### Best Practices

✅ **Контекст** - всегда указываем, где произошло событие  
✅ **Краткость** - логи должны быть читаемыми  
✅ **Структура** - единый формат для всех логов  
✅ **Безопасность** - не логируем чувствительные данные  
✅ **Production-ready** - минимум шума, максимум пользы  

---

## Итоги

Документ **Technical Vision** для проекта MEOW BORG Website завершен! 🎉

### Резюме подхода:
- ✅ **KISS принцип** - максимально простое решение
- ✅ **Next.js + Vercel** - быстрый старт и деплой
- ✅ **MDX для контента** - не нужна БД на старте
- ✅ **Resend для email** - простая интеграция
- ✅ **TypeScript + Tailwind** - современный стек
- ✅ **Автотесты + Линтеры** - качество кода
- ✅ **Минимальная конфигурация** - дефолты везде где возможно
- ✅ **Простое логирование** - только необходимое

Готовы к разработке! 🚀
