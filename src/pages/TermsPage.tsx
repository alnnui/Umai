import { FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function TermsPage() {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: November 20, 2024',
      sections: [
        {
          title: '1. Acceptance of Terms',
          content: `By accessing or using the Umai Nury platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.`
        },
        {
          title: '2. Eligibility',
          content: `Our services are available to individuals who can form legally binding contracts under applicable law. By using our services, you represent that you are at least 13 years old.`
        },
        {
          title: '3. Account Registration',
          content: `To access certain features, you must register for an account. You agree to:
• Provide accurate and complete information
• Maintain the security of your account credentials
• Notify us immediately of any unauthorized access
• Be responsible for all activities under your account`
        },
        {
          title: '4. Use of Services',
          content: `You agree to use our services only for lawful purposes and in accordance with these terms. You must not:
• Violate any applicable laws or regulations
• Infringe on the rights of others
• Interfere with the proper functioning of our platform
• Attempt to gain unauthorized access to our systems
• Use our services for any fraudulent purposes`
        },
        {
          title: '5. Product Requests',
          content: `When requesting menstrual hygiene products:
• Requests are subject to availability
• Each user may request up to 2 packages per month
• Products are provided free of charge to those in need
• False information may result in account suspension
• We reserve the right to verify eligibility`
        },
        {
          title: '6. Donations',
          content: `All donations are voluntary and non-refundable unless required by law. We will use donations to support our mission of providing menstrual hygiene products and mental health support to women in need.`
        },
        {
          title: '7. Event Registration',
          content: `When registering for events:
• Registration does not guarantee attendance if capacity is reached
• We reserve the right to cancel or reschedule events
• You must provide accurate contact information
• Respectful behavior is required at all events`
        },
        {
          title: '8. Intellectual Property',
          content: `All content on the Umai Nury platform, including text, graphics, logos, and software, is owned by Umai Nury or our licensors and is protected by copyright and other intellectual property laws.`
        },
        {
          title: '9. Disclaimer of Warranties',
          content: `Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will be uninterrupted, secure, or error-free.`
        },
        {
          title: '10. Limitation of Liability',
          content: `To the fullest extent permitted by law, Umai Nury shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.`
        },
        {
          title: '11. Changes to Terms',
          content: `We reserve the right to modify these terms at any time. We will notify users of significant changes by posting a notice on our platform or sending an email notification.`
        },
        {
          title: '12. Termination',
          content: `We reserve the right to suspend or terminate your account at our discretion, including for violation of these terms or fraudulent activity.`
        },
        {
          title: '13. Governing Law',
          content: `These terms shall be governed by and construed in accordance with the laws of Kazakhstan, without regard to its conflict of law provisions.`
        },
        {
          title: '14. Contact Information',
          content: `For questions about these terms, please contact us at:
Email: legal@umainury.org
Address: Almaty, Kazakhstan`
        }
      ]
    },
    ru: {
      title: 'Условия использования',
      lastUpdated: 'Последнее обновление: 20 ноября 2024',
      sections: [
        {
          title: '1. Принятие условий',
          content: `Получая доступ или используя платформу Umai Nury, вы соглашаетесь соблюдать эти Условия использования. Если вы не согласны с этими условиями, пожалуйста, не используйте наши услуги.`
        },
        {
          title: '2. Право на использование',
          content: `Наши услуги доступны лицам, которые могут заключать юридически обязывающие договоры в соответствии с применимым законодательством. Используя наши услуги, вы подтверждаете, что вам не менее 13 лет.`
        },
        {
          title: '3. Регистрация аккаунта',
          content: `Для доступа к определенным функциям вы должны зарегистрировать аккаунт. Вы соглашаетесь:
• Предоставлять точную и полную информацию
• Поддерживать безопасность учетных данных
• Немедленно уведомлять нас о несанкционированном доступе
• Нести ответственность за все действия в вашем аккаунте`
        },
        {
          title: '4. Использование услуг',
          content: `Вы соглашаетесь использовать наши услуги только в законных целях и в соответствии с этими условиями. Вы не должны:
• Нарушать применимые законы или правила
• Нарушать права других лиц
• Вмешиваться в надлежащее функционирование платформы
• Пытаться получить несанкционированный доступ к нашим системам
• Использовать наши услуги в мошеннических целях`
        },
        {
          title: '5. Запросы продуктов',
          content: `При запросе средств менструальной гигиены:
• Запросы зависят от наличия
• Каждый пользователь может запросить до 2 упаковок в месяц
• Продукты предоставляются бесплатно нуждающимся
• Ложная информация может привести к приостановке аккаунта
• Мы оставляем за собой право проверять право на получение`
        },
        {
          title: '6. Пожертвования',
          content: `Все пожертвования являются добровольными и не подлежат возврату, если иное не требуется законом. Мы будем использовать пожертвования для поддержки нашей миссии по предоставлению средств менструальной гигиены и поддержки психического здоровья нуждающимся женщинам.`
        },
        {
          title: '7. Регистрация на мероприятия',
          content: `При регистрации на мероприятия:
• Регистрация не гарантирует участие при достижении максимальной вместимости
• Мы оставляем за собой право отменить или перенести мероприятия
• Вы должны предоставить точную контактную информацию
• На всех мероприятиях требуется уважительное поведение`
        },
        {
          title: '8. Интеллектуальная собственность',
          content: `Весь контент на платформе Umai Nury, включая текст, графику, логотипы и программное обеспечение, принадлежит Umai Nury или нашим лицензиарам и защищен законами об авторском праве и другими законами об интеллектуальной собственности.`
        },
        {
          title: '9. Отказ от гарантий',
          content: `Наши услуги предоставляются "как есть" без каких-либо гарантий. Мы не гарантируем, что наши услуги будут бесперебойными, безопасными или без ошибок.`
        },
        {
          title: '10. Ограничение ответственности',
          content: `В максимальной степени, разрешенной законом, Umai Nury не несет ответственности за любые косвенные, случайные, особые, косвенные или штрафные убытки, возникающие в результате использования наших услуг.`
        },
        {
          title: '11. Изменения в условиях',
          content: `Мы оставляем за собой право изменять эти условия в любое время. Мы уведомим пользователей о значительных изменениях, разместив уведомление на нашей платформе или отправив уведомление по электронной почте.`
        },
        {
          title: '12. Прекращение',
          content: `Мы оставляем за собой право приостановить или прекратить действие вашего аккаунта по нашему усмотрению, включая нарушение этих условий или мошенническую деятельность.`
        },
        {
          title: '13. Применимое право',
          content: `Эти условия регулируются и толкуются в соответствии с законодательством Казахстана, без учета его коллизионных норм.`
        },
        {
          title: '14. Контактная информация',
          content: `По вопросам об этих условиях, пожалуйста, свяжитесь с нами:
Email: legal@umainury.org
Адрес: Алматы, Казахстан`
        }
      ]
    },
    kk: {
      title: 'Пайдалану шарттары',
      lastUpdated: 'Соңғы жаңарту: 20 қараша 2024',
      sections: [
        {
          title: '1. Шарттарды қабылдау',
          content: `Umai Nury платформасына кіру немесе пайдалану арқылы сіз осы Пайдалану шарттарын сақтауға келісесіз. Егер сіз осы шарттармен келіспесеңіз, біздің қызметтерді пайдаланбаңыз.`
        },
        {
          title: '2. Пайдалану құқығы',
          content: `Біздің қызметтер қолданылатын заңнамаға сәйкес заңды міндетті келісімшарттар жасай алатын тұлғаларға қол жетімді. Біздің қызметтерді пайдалану арқылы сіз кемінде 13 жаста екеніңізді растайсыз.`
        },
        {
          title: '3. Аккаунт тіркеу',
          content: `Белгілі бір функцияларға қол жеткізу үшін сіз аккаунт тіркеуіңіз керек. Сіз келесіге келісесіз:
• Дәл және толық ақпарат беру
• Тіркелгі деректеріңіздің қауіпсіздігін қамтамасыз ету
• Рұқсатсыз қолжетімділік туралы дереу хабарлау
• Аккаунтыңыздағы барлық әрекеттер үшін жауапты болу`
        },
        {
          title: '4. Қызметтерді пайдалану',
          content: `Сіз біздің қызметтерді тек заңды мақсаттарда және осы шарттарға сәйкес пайдалануға келісесіз. Сіз мыналарды жасамауыңыз керек:
• Қолданылатын заңдарды немесе ережелерді бұзу
• Басқалардың құқықтарын бұзу
• Платформаның дұрыс жұмыс істеуіне кедергі жасау
• Біздің жүйелерге рұқсатсыз қолжетімділік алуға тырысу
• Біздің қызметтерді алаяқтық мақсаттарда пайдалану`
        },
        {
          title: '5. Өнім сұраулары',
          content: `Менструалдық гигиена құралдарын сұрау кезінде:
• Сұраулар қолжетімділікке байланысты
• Әрбір пайдаланушы айына 2 қаптамаға дейін сұрай алады
• Өнімдер мұқтаждарға тегін беріледі
• Жалған ақпарат аккаунтты тоқтатуға әкелуі мүмкін
• Біз құқықты тексеру құқығын сақтаймыз`
        },
        {
          title: '6. Қайырымдылық',
          content: `Барлық қайырымдылық ерікті және заңмен талап етілмесе, қайтарылмайды. Біз мұқтаж әйелдерге менструалдық гигиена құралдарын және психикалық денсаулық қолдауын беру миссиямызды қолдау үшін қайырымдылықты пайдаланамыз.`
        },
        {
          title: '7. Іс-шараларға тіркелу',
          content: `Іс-шараларға тіркелу кезінде:
• Тіркелу максималды сыйымдылыққа жеткенде қатысуға кепілдік бермейді
• Біз іс-шараларды болдырмау немесе қайта жоспарлау құқығын сақтаймыз
• Сіз дәл байланыс ақпаратын беруіңіз керек
• Барлық іс-шараларда құрметті мінез-құлық талап етіледі`
        },
        {
          title: '8. Зияткерлік меншік',
          content: `Umai Nury платформасындағы барлық мазмұн, соның ішінде мәтін, графика, логотиптер және бағдарлама, Umai Nury немесе біздің лицензиарларымызға тиесілі және авторлық құқық пен басқа зияткерлік меншік заңдарымен қорғалған.`
        },
        {
          title: '9. Кепілдіктен бас тарту',
          content: `Біздің қызметтер ешқандай кепілдіксіз "болған күйінде" ұсынылады. Біз қызметтеріміздің үздіксіз, қауіпсіз немесе қатесіз болатынына кепілдік бермейміз.`
        },
        {
          title: '10. Жауапкершілікті шектеу',
          content: `Заңмен рұқсат етілген толық көлемде, Umai Nury біздің қызметтерді пайдаланудан туындайтын кез келген жанама, кездейсоқ, арнайы, салдарлы немесе айыппұл залалдары үшін жауапты болмайды.`
        },
        {
          title: '11. Шарттарға өзгерістер',
          content: `Біз осы шарттарды кез келген уақытта өзгерту құқығын сақтаймыз. Біз платформамызда хабарлама орналастыру немесе электрондық пошта хабарламасын жіберу арқылы маңызды өзгерістер туралы пайдаланушыларға хабарлаймыз.`
        },
        {
          title: '12. Тоқтату',
          content: `Біз өз қалауымызша аккаунтыңызды тоқтата тұру немесе тоқтату құқығын сақтаймыз, соның ішінде осы шарттарды бұзу немесе алаяқтық әрекет үшін.`
        },
        {
          title: '13. Қолданылатын заң',
          content: `Бұл шарттар оның қақтығыстар туралы ережелерін ескермей, Қазақстан заңдарына сәйкес реттеледі және түсіндіріледі.`
        },
        {
          title: '14. Байланыс ақпараты',
          content: `Осы шарттар туралы сұрақтар үшін бізбен хабарласыңыз:
Email: legal@umainury.org
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
          <FileText className="w-16 h-16 text-blue-600" />
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
