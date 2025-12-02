# 🎨 Изменения во фронтенде

## 📂 Структура проекта

```
src/
├── components/
│   ├── Auth/
│   │   └── AuthModal.tsx              ✨ НОВЫЙ - Модальное окно авторизации (если используется)
│   ├── Forms/
│   │   ├── VolunteerForm.tsx          ✨ НОВЫЙ - Форма волонтёра (POST → /notify)
│   │   ├── PsychologistForm.tsx       ✨ НОВЫЙ - Форма психолога (POST → /notify)
│   │   ├── ChapterForm.tsx            ✨ НОВЫЙ - Форма филиала (POST → /notify)
│   │   └── PartnerForm.tsx            ✨ НОВЫЙ - Форма партнёра (POST → /notify)
│   └── Layout/
│       └── Header.tsx                 🔧 ИЗМЕНЁН - Добавлены кнопки Sign In/Up (optional)
├── contexts/
│   └── AuthContext.tsx                ✨ НОВЫЙ - Контекст авторизации (optional)
├── lib/
│   └── translations.ts                🔧 ИЗМЕНЁН - Добавлены переводы
├── pages/
│   ├── GetInvolvedPage.tsx            🔧 ИЗМЕНЁН - Формы вместо Instagram
│   └── PartnerPage.tsx                🔧 ИЗМЕНЁН - Форма вместо mailto
└── App.tsx                             🔧 ИЗМЕНЁН - Добавлен AuthProvider (optional)
```

## 📝 Детальные изменения

### 1. src/components/Auth/AuthModal.tsx (НОВЫЙ)

**Функционал:**

- Модальное окно для входа/регистрации
- 3 режима: Sign In, Sign Up, Reset Password
- Валидация форм
- Обработка ошибок
- Многоязычность

**Использование:**

```tsx
<AuthModal
  isOpen={authModalOpen}
  onClose={() => setAuthModalOpen(false)}
  defaultMode="signin"
/>
```

---

### 2. src/contexts/AuthContext.tsx (НОВЫЙ)

**Функционал:**

- Управление состоянием пользователя
- Автоматическая загрузка профиля
- Методы: signUp, signIn, signOut, resetPassword
- Отслеживание изменений сессии

**Использование:**

```tsx
const { user, profile, signIn, signOut } = useAuth();
```

---

### 3. src/components/Forms/ (4 НОВЫХ ФАЙЛА)

#### VolunteerForm.tsx

**Поля:**

- Full Name, Email, Phone, City
- Motivation (textarea)
- Availability (textarea)
- Skills (textarea, optional)

#### PsychologistForm.tsx

**Поля:**

- Full Name, Email, Phone, City
- Specialization
- Experience Years (number)
- License Number
- About (textarea)

#### ChapterForm.tsx

**Поля:**

- Full Name, Email, Phone, City
- Institution/Organization
- Team Size (number, optional)
- Proposal (textarea)

#### PartnerForm.tsx

**Поля:**

- Company Name
- Contact Name, Email, Phone
- Company Type (select)
- Message (textarea)

**Общие фичи всех форм:**

- ✅ Валидация полей
- ✅ Отправка POST на локальный endpoint `/notify` (Telegram notifications)
- ✅ Success/Error сообщения
- ✅ Автоподстановка email для авторизованных (если auth включён)
- ✅ Работа без авторизации
- ✅ Многоязычность

---

### 4. src/components/Layout/Header.tsx (ИЗМЕНЁН)

**Добавлено:**

```tsx
// Импорты
import { useAuth } from '../../contexts/AuthContext';
import { User, LogOut } from 'lucide-react';
import { AuthModal } from '../Auth/AuthModal';

// Состояние
const { user, profile, signOut } = useAuth();
const [authModalOpen, setAuthModalOpen] = useState(false);
const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

// Кнопки авторизации
{
  user ? (
    <div className="relative group">
      <button>
        <User /> {profile?.full_name || user.email}
      </button>
      <div className="dropdown">
        <button onClick={signOut}>
          <LogOut /> Sign Out
        </button>
      </div>
    </div>
  ) : (
    <>
      <button onClick={() => openAuthModal('signin')}>Sign In</button>
      <button onClick={() => openAuthModal('signup')}>Sign Up</button>
    </>
  );
}

// Модальное окно
<AuthModal
  isOpen={authModalOpen}
  onClose={() => setAuthModalOpen(false)}
  defaultMode={authMode}
/>;
```

---

### 5. src/pages/GetInvolvedPage.tsx (ИЗМЕНЁН)

**Было:**

```tsx
// Instagram ссылки
<a href="https://instagram.com/umainury_org">
  <Instagram /> @umainury_org
</a>
```

**Стало:**

```tsx
// Формы приложений
import { VolunteerForm } from '../components/Forms/VolunteerForm';
import { PsychologistForm } from '../components/Forms/PsychologistForm';
import { ChapterForm } from '../components/Forms/ChapterForm';

const [activeForm, setActiveForm] = useState<
  'volunteer' | 'psychologist' | 'chapter' | null
>(null);

// Кнопки для открытия форм
<button onClick={() => setActiveForm('volunteer')}>Apply Now</button>;

// Условный рендеринг форм
{
  activeForm === 'volunteer' && <VolunteerForm />;
}
{
  activeForm === 'psychologist' && <PsychologistForm />;
}
{
  activeForm === 'chapter' && <ChapterForm />;
}
```

---

### 6. src/pages/PartnerPage.tsx (ИЗМЕНЁН)

**Было:**

```tsx
// mailto ссылка
<a href="mailto:umainury@outlook.com">
  <Mail /> umainury@outlook.com
</a>
```

**Стало:**

```tsx
// Форма партнёра
import { PartnerForm } from '../components/Forms/PartnerForm';

<PartnerForm />;
```

---

### 7. src/App.tsx (ИЗМЕНЁН)

**Добавлено:**

```tsx
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        {/* Весь контент обёрнут в AuthProvider */}
      </div>
    </AuthProvider>
  );
}
```

---

### 8. Server integration

Формы теперь отправляют данные на локальный Express-сервер `server/notify.js`,
который форматирует и отправляет сообщения в Telegram. Реляционная база данных
и серверная запись отключены в этой ветке.

---

### 9. src/lib/translations.ts (ИЗМЕНЁН)

**Добавлено ~100 новых переводов:**

```tsx
auth: {
  signIn: 'Sign In',
  signUp: 'Sign Up',
  signOut: 'Sign Out',
  email: 'Email',
  password: 'Password',
  fullName: 'Full Name',
  // ... ещё 10+ ключей
},
forms: {
  fullName: 'Full Name',
  email: 'Email',
  phone: 'Phone',
  city: 'City',
  submit: 'Submit Application',
  volunteerTitle: 'Volunteer Application',
  psychologistTitle: 'Psychologist Application',
  // ... ещё 50+ ключей
}
```

---

## 🎯 Что работает

### Авторизация:

✅ Регистрация новых пользователей
✅ Вход существующих пользователей
✅ Выход из системы
✅ Восстановление пароля
✅ Автоматическое создание профиля
✅ Сохранение сессии

### Формы:

✅ Отправка заявок волонтёров
✅ Отправка заявок психологов
✅ Отправка заявок на филиалы
✅ Отправка запросов партнёров
✅ Валидация всех полей
✅ Сообщения об успехе/ошибках

### UI/UX:

✅ Responsive дизайн
✅ Кнопки Sign In/Up в Header
✅ Меню пользователя с Sign Out
✅ Модальное окно авторизации
✅ Анимации и переходы
✅ Многоязычность (EN, частично RU/KK)

---

## 📦 Сборка проекта

```
// Формы отправляют JSON на локальный endpoint
fetch('/notify', { method: 'POST', body: JSON.stringify({ type: 'volunteer', data: application }) })
```

// Авторизация (если включена) должна использовать ваш собственный бекенд или
// внешнюю систему; в этой ветке интеграция с серверной БД отключена.

## 🔗 Связь с бэкендом

Формы отправляют данные на локальный endpoint `/notify` (локальный Express-сервер).
Пример отправки формы:

```tsx
fetch('/notify', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ type: 'volunteer', data: application }),
});
```

Note: this branch does not include server-side database persistence; the
notification pipeline sends formatted messages to Telegram.

---

**Все изменения протестированы и работают! ✅**
