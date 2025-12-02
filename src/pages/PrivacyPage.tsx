import { Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function PrivacyPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: November 20, 2024',
      sections: [
        {
          title: '1. Information We Collect',
          content: `We collect information that you provide directly to us when you:
• Register for an account
• Request menstrual hygiene products
• Register for events
• Make donations
• Contact us

This information may include your name, email address, phone number, city, and any other information you choose to provide.`
        },
        {
          title: '2. How We Use Your Information',
          content: `We use the information we collect to:
• Process your requests for menstrual hygiene products
• Register you for events and send event updates
• Process donations and send receipts
• Communicate with you about our services
• Improve our services and user experience
• Comply with legal obligations`
        },
        {
          title: '3. Information Sharing',
          content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
• With your consent
• To comply with legal obligations
• To protect our rights and safety
• With service providers who help us operate our platform (under strict confidentiality agreements)`
        },
        {
          title: '4. Data Security',
          content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.`
        },
        {
          title: '5. Your Rights',
          content: `You have the right to:
• Access your personal information
• Correct inaccurate information
• Request deletion of your information
• Opt-out of marketing communications
• Withdraw consent at any time

To exercise these rights, please contact us at privacy@umainury.org`
        },
        {
          title: '6. Cookies and Tracking',
          content: `We use cookies and similar tracking technologies to improve your experience on our website. You can control cookies through your browser settings.`
        },
        {
          title: '7. Children\'s Privacy',
          content: `Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13.`
        },
        {
          title: '8. Changes to This Policy',
          content: `We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date.`
        },
        {
          title: '9. Contact Us',
          content: `If you have questions about this privacy policy, please contact us at:
Email: privacy@umainury.org
Address: Almaty, Kazakhstan`
        }
      ]
    },
    ru: {
      title: 'Политика конфиденциальности',
      lastUpdated: 'Последнее обновление: 20 ноября 2024',
      sections: [
        {
          title: '1. Информация, которую мы собираем',
          content: `Мы собираем информацию, которую вы предоставляете нам напрямую, когда вы:
• Регистрируете аккаунт
• Запрашиваете средства менструальной гигиены
• Регистрируетесь на мероприятия
• Делаете пожертвования
• Связываетесь с нами

Эта информация может включать ваше имя, адрес электронной почты, номер телефона, город и любую другую информацию, которую вы решите предоставить.`
        },
        {
          title: '2. Как мы используем вашу информацию',
          content: `Мы используем собранную информацию для:
• Обработки ваших запросов на средства менструальной гигиены
• Регистрации на мероприятия и отправки обновлений
• Обработки пожертвований и отправки квитанций
• Связи с вами о наших услугах
• Улучшения наших услуг и пользовательского опыта
• Соблюдения юридических обязательств`
        },
        {
          title: '3. Передача информации',
          content: `Мы не продаем, не обмениваем и не сдаем в аренду вашу личную информацию третьим лицам. Мы можем передавать вашу информацию только в следующих случаях:
• С вашего согласия
• Для соблюдения юридических обязательств
• Для защиты наших прав и безопасности
• Поставщикам услуг, которые помогают нам управлять платформой (в соответствии со строгими соглашениями о конфиденциальности)`
        },
        {
          title: '4. Безопасность данных',
          content: `Мы применяем соответствующие технические и организационные меры для защиты вашей личной информации от несанкционированного доступа, изменения, раскрытия или уничтожения. Однако ни один метод передачи через интернет не является на 100% безопасным.`
        },
        {
          title: '5. Ваши права',
          content: `Вы имеете право:
• Получить доступ к своей личной информации
• Исправить неточную информацию
• Запросить удаление вашей информации
• Отказаться от маркетинговых коммуникаций
• Отозвать согласие в любое время

Для реализации этих прав, пожалуйста, свяжитесь с нами по адресу privacy@umainury.org`
        },
        {
          title: '6. Файлы cookie и отслеживание',
          content: `Мы используем файлы cookie и аналогичные технологии отслеживания для улучшения вашего опыта на нашем веб-сайте. Вы можете контролировать файлы cookie через настройки браузера.`
        },
        {
          title: '7. Конфиденциальность детей',
          content: `Наши услуги не предназначены для детей младше 13 лет. Мы сознательно не собираем личную информацию от детей младше 13 лет.`
        },
        {
          title: '8. Изменения в этой политике',
          content: `Мы можем периодически обновлять эту политику конфиденциальности. Мы уведомим вас о любых изменениях, разместив новую политику на этой странице и обновив дату "Последнее обновление".`
        },
        {
          title: '9. Свяжитесь с нами',
          content: `Если у вас есть вопросы об этой политике конфиденциальности, пожалуйста, свяжитесь с нами:
Email: privacy@umainury.org
Адрес: Алматы, Казахстан`
        }
      ]
    },
    kk: {
      title: 'Құпиялылық саясаты',
      lastUpdated: 'Соңғы жаңарту: 20 қараша 2024',
      sections: [
        {
          title: '1. Біз жинайтын ақпарат',
          content: `Біз сіз бізге тікелей берген ақпаратты жинаймыз, сіз:
• Аккаунт тіркегенде
• Менструалдық гигиена құралдарын сұрағанда
• Іс-шараларға тіркелгенде
• Қайырымдылық жасағанда
• Бізбен байланысқанда

Бұл ақпарат сіздің атыңызды, электрондық пошта мекенжайыңызды, телефон нөміріңізді, қалаңызды және сіз беруді таңдаған кез келген басқа ақпаратты қамтуы мүмкін.`
        },
        {
          title: '2. Ақпаратты қалай қолданамыз',
          content: `Біз жинаған ақпаратты мынау үшін қолданамыз:
• Менструалдық гигиена құралдарына сұрауларыңызды өңдеу
• Іс-шараларға тіркеу және жаңартуларды жіберу
• Қайырымдылықты өңдеу және квитанцияларды жіберу
• Қызметтеріміз туралы сізбен байланысу
• Қызметтерімізді және пайдаланушы тәжірибесін жақсарту
• Заңды міндеттемелерді орындау`
        },
        {
          title: '3. Ақпарат бөлісу',
          content: `Біз сіздің жеке ақпаратыңызды үшінші тұлғаларға сатпаймыз, алмаспаймыз немесе жалға бермейміз. Біз сіздің ақпаратыңызды тек келесі жағдайларда бөлісе аламыз:
• Сіздің келісіміңізбен
• Заңды міндеттемелерді орындау үшін
• Біздің құқықтарымыз бен қауіпсіздігімізді қорғау үшін
• Платформамызды басқаруға көмектесетін қызмет провайдерлерімен (қатаң құпиялылық келісімдері бойынша)`
        },
        {
          title: '4. Деректер қауіпсіздігі',
          content: `Біз сіздің жеке ақпаратыңызды рұқсатсыз қолжетімділіктен, өзгертуден, ашудан немесе жоюдан қорғау үшін тиісті техникалық және ұйымдастырушылық шараларды қолданамыз. Алайда, интернет арқылы берудің ешбір әдісі 100% қауіпсіз емес.`
        },
        {
          title: '5. Сіздің құқықтарыңыз',
          content: `Сіздің құқығыңыз бар:
• Жеке ақпаратыңызға қолжетімділік алу
• Дұрыс емес ақпаратты түзету
• Ақпаратыңызды жоюды сұрау
• Маркетингтік коммуникациялардан бас тарту
• Келісімді кез келген уақытта қайтарып алу

Осы құқықтарды іске асыру үшін бізбен хабарласыңыз: privacy@umainury.org`
        },
        {
          title: '6. Cookie файлдары және бақылау',
          content: `Біз веб-сайтымыздағы тәжірибеңізді жақсарту үшін cookie файлдарын және ұқсас бақылау технологияларын қолданамыз. Сіз браузер параметрлері арқылы cookie файлдарын басқара аласыз.`
        },
        {
          title: '7. Балалардың құпиялылығы',
          content: `Біздің қызметтеріміз 13 жасқа толмаған балаларға арналмаған. Біз 13 жасқа толмаған балалардан білетіндей жеке ақпаратты жинамаймыз.`
        },
        {
          title: '8. Осы саясаттағы өзгерістер',
          content: `Біз осы құпиялылық саясатын кезеңді түрде жаңарта аламыз. Біз жаңа саясатты осы бетте орналастырып және "Соңғы жаңарту" күнін жаңартып, кез келген өзгерістер туралы сізге хабарлаймыз.`
        },
        {
          title: '9. Бізбен байланысыңыз',
          content: `Осы құпиялылық саясаты туралы сұрақтарыңыз болса, бізбен байланысыңыз:
Email: privacy@umainury.org
Мекенжай: Алматы, Қазақстан`
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-in-up">
        <div className="flex items-center justify-center mb-8">
          <Shield className="w-16 h-16 text-blue-600" />
        </div>

        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          {currentContent.title}
        </h1>

        <p className="text-center text-gray-600 mb-12">
          {currentContent.lastUpdated}
        </p>

        <div className="space-y-8">
          {currentContent.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
