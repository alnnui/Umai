export type Language = 'en' | 'ru' | 'kk';

export const translations = {
  en: {
    header: {
      signIn: 'Sign In',
      signUp: 'Sign Up',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      getInvolved: 'Get Involved',
      support: 'Support Us',
      partner: 'Partner',
      events: 'Events',
      donate: 'Donate',
      getAccess: 'Get Access',
    },
    home: {
      hero: {
        title: 'Diginity Starts Here',
        subtitle:
          'Breaking the silence around menstrual health and postpartum depression across Central Asia',
        description:
          'Umai Nury is the first and only non-profit organization in Kazakhstan and Central Asia ensuring women in difficult situations have free access to essential menstrual hygiene products.',
        getAccess: 'Get Access',
        donate: 'Support Our Mission',
      },
      mission: {
        title: 'Our Mission',
        problem: 'The Problem',
        problemText:
          'Thousands of women in Kazakhstan and Central Asia face period poverty and lack access to menstrual hygiene products. Many suffer in silence from postpartum depression without proper support.',
        solution: 'Our Solution',
        solutionText:
          'We provide free menstrual hygiene products and connect women with professional psychological support, breaking taboos and ensuring dignity for all.',
      },
      partner: {
        title: 'Our Founding Partner',
        name: 'Saby Charitable Foundation',
        description:
          'Since 2002, Saby Foundation has been supporting social initiatives across Kazakhstan. As our founding partner, they help us provide essential menstrual hygiene products and psychological support to women in need.',
      },
      howItWorks: {
        title: 'How We Help',
        psychSupport: 'Psychological Support for Postpartum Depression',
        psychStep1:
          '1. Request support through the Umai Nury app or fill out the form on this website',
        psychStep2: '2. Provide necessary documents',
        psychStep2Link: 'See who qualifies',
        menstrualProducts: 'How to Get Menstrual Products',
        menstrualStep1:
          '1. Register in the Umai Nury app at the nearest center',
        menstrualStep2: '2. Show your required documents at the center',
        menstrualStep2Link: 'See who qualifies',
        menstrualStep3: '3. Scan QR code and collect your products!',
      },
      eligibility: {
        title: 'Who Gets Our Help',
        subtitle: 'We provide support to women in the following categories:',
        category1: 'Large families (3+ children)',
        category2: 'Single mothers',
        category3: 'Low-income families',
        category4: 'People with disabilities (I, II, III degree)',
      },
      cta: {
        title: 'Join Us in Making a Difference',
        subtitle:
          'Your support helps women access essential products and mental health services',
        button: 'Donate Now',
      },
    },
    about: {
      title: 'About Umai Nury',
      intro:
        'Umai Nury is the first and only non-profit organization in Kazakhstan and Central Asia that strives to ensure every woman in difficult life circumstances has free access to necessary menstrual hygiene products. We also support women experiencing postpartum depression by providing them with accessible psychological help.',
      whyWeExist: {
        title: 'Why We Exist',
        text1:
          'In Kazakhstan, around 5.1% of the population — nearly one million people — live below the poverty line. According to available data, more than 60% of them are women. This means that approximately 600–700 thousand women struggle to afford even the most basic hygiene products.',
        text2:
          'With the minimum monthly salary at 85,000 tenge and a single pack of menstrual pads costing around 1,000 tenge, many women spend up to 2,000 tenge each month (about 2–3% of their entire income) on something they simply cannot go without. For families living on the edge of survival, pads become luxury items.',
        text3:
          'At Umai Nury, we believe that no woman is truly free until every woman is free, and that conviction is the very reason we exist.',
      },
      team: {
        title: 'Our Team',
        founder: 'Aizat Serikbek - Founder & Executive Director',
        cofounder: 'Alima Orazaly - Co-founder & Operations Director',
        digital: 'Mustafa Kassym - Digital Development Director',
        tech: 'Alimzhan Kadyrov - Technology & Innovation Director',
      },
      work: {
        title: 'Our Work',
        app: {
          title: 'Umai Nury App',
          description:
            'Our digital platform connects women in need with free menstrual products and psychological support. Through the Umai Nury App, users can register for product pick-ups, join events, access help, or make donations — all in one place.',
        },
        talks: {
          title: 'Umai Talks',
          description:
            "Monthly educational sessions and open discussions with psychologists, doctors, and activists aimed at raising awareness of menstrual health, postpartum depression, and women's rights.",
        },
        outreach: {
          title: 'Community Outreach',
          description:
            'We organise donation drives, awareness campaigns, and partnerships with schools to reach girls in underdeveloped areas and ensure that no one is left behind.',
        },
      },
    },
    support: {
      title: 'Support Our Work',
      subtitle: 'Fundraise Your Own Way',
      intro:
        "Whoever you are, you can make a difference. Whether you're a student, a business owner, an artist, or an organiser, there is always a way to turn what you love into something meaningful.",
      creative: {
        title: "If You're Creative",
        ideas: [
          'Sell your artwork or crafts for donations',
          'Organise an art or hand-made fair',
          'Host a Sip & Paint evening',
          'Offer a creative workshop with paid entry',
        ],
      },
      host: {
        title: 'If You Love to Host',
        ideas: [
          'Hold a charity dinner',
          'Organise a movie, karaoke, or game night',
          'Turn your birthday or celebration into a fundraiser',
          'Partner with a café for a themed charity night',
          'Host a bake-off or brunch',
          'Arrange a home concert or seasonal celebration',
        ],
      },
      entrepreneur: {
        title: "If You're Entrepreneurial",
        ideas: [
          "Donate a day's revenue",
          'Add a donation option at checkout',
          'Create a limited "Umai Edition" product',
          'Run a raffle or social media challenge',
          'Start a "Sponsor-a-Box" programme',
          'Keep a donation jar at work',
        ],
      },
      active: {
        title: "If You're Active",
        ideas: [
          'Join or host a charity walk, run, or cycling event',
          'Organise a yoga, fitness, or dance class for donations',
          'Arrange a friendly sports match',
          'Start a step-count challenge',
          'Hike or climb for a cause',
        ],
      },
      student: {
        title: "If You're a Student or Educator",
        ideas: [
          'Place a "Coins for Care" jar in classrooms',
          'Host a quiz, talent show, or art competition',
          'Organise a bake sale or raffle',
          'Hold a themed day',
          'Set up a charity photo booth',
          'Run a "teacher vs. student" game',
        ],
      },
      community: {
        title: "If You're a Community Builder",
        ideas: [
          'Organise a neighbourhood raffle',
          'Host a coffee morning or picnic',
          'Plan a cultural evening',
          'Invite local musicians for a concert',
          'Bring your community together',
        ],
      },
      impact:
        'Whether you raise 1,000 or 100,000 tenge, every tenge helps to support women in their hardest times.',
      contact: 'Need help with ideas? Contact us at umainury@outlook.com',
    },
    getInvolved: {
      title: 'Get Involved',
      volunteer: {
        title: 'Become a Volunteer',
        intro:
          'Do you want to be part of meaningful initiatives while expanding your network and skills? Join the Umai Nury volunteer team and make a real difference.',
        duties: [
          'Help organise events and fundraisers',
          'Create social media content',
          'Join donation drives and packing sessions',
          'Support awareness campaigns',
        ],
        whatYouCanDo: 'What You Can Do:',
        howTo: {
          title: 'How to Join',
          description:
            "Contact us through email or Instagram, provide your details, and we'll tell you the next steps.",
          button: 'Apply Now',
          step1:
            'Contact us at umainury@outlook.com or Instagram @umainury_org',
          step2: 'Include your name, age, and city',
          step3: "We'll reach out with next steps",
        },
      },
      psychologist: {
        title: 'Psychologists & Mental Health Workers',
        intro:
          'We welcome mental health professionals to collaborate with us and support women facing postpartum depression.',
        opportunitiesLabel: 'Opportunities:',
        opportunities: [
          'Offer accessible psychological assistance',
          'Lead workshops during Umai Talks',
          'Guide our team in creating resources',
        ],
        note: 'We provide a small stipend, but many join us out of shared commitment to helping women.',
        applyButton: 'Apply as Psychologist',
      },
      chapter: {
        title: 'Start a Chapter',
        whatIsChapter: 'What Is a Chapter?',
        what: 'A chapter is a local branch of Umai Nury — volunteers carrying our mission into their school, university, or community.',
        chaptersVsProjects: 'Chapters vs. Projects',
        vs: 'Projects are short-term. Chapters are ongoing groups that continue year-round.',
        whyStartChapter: 'Why Start a Chapter?',
        why: [
          'Be part of an established organisation',
          'Access our resources and branding',
          'Receive mentorship from our team',
          'Represent a movement making real impact',
        ],
        readyToStart:
          'Ready to start a chapter in your city? Fill out the application form below.',
        startButton: 'Start a Chapter',
        howTo: {
          title: 'How to Start',
          steps: [
            'Submit application via email',
            'Interview with our team',
            'Appoint chapter officers',
            'Organise paperwork',
            'Set your goals',
            'Plan events and fundraisers',
            'Recruit members',
          ],
        },
      },
    },
    partner: {
      title: 'Partner With Us',
      forBusiness: 'For Businesses',
      intro:
        "Rising inflation and economic challenges mean basic needs are becoming harder to afford. Around 5.1% of Kazakhstan's population (924,000 people) live below the poverty line.",
      impact:
        'By partnering with Umai Nury, your company can help change this reality and make a tangible impact.',
      partnerIntro:
        'Join us as a corporate partner to make a real difference in the lives of women and girls.',
      partnerHelps:
        'Your partnership helps us provide essential hygiene products and support to those in need.',
      becomeButton: 'Become a Partner',
      contact:
        'Contact us at umainury@outlook.com to discuss collaboration opportunities.',
    },
    donate: {
      title: 'Donate',
      subtitle:
        'Every contribution helps us provide free menstrual products and health education for women across Kazakhstan and Central Asia.',
      yourImpact: 'Your Impact',
      impact: {
        amount1: '1,000 KZT (~$2)',
        desc1: 'Provides one girl with essential period care',
        amount2: '20,000 KZT (~$42)',
        desc2: 'Covers one therapy session for postpartum depression',
      },
      bankDetails: {
        title: 'Bank Details',
        name: 'Umai Nury Public Foundation',
        bin: '251040003661',
        iban: 'KZ20 601A 8710 5883 7751',
        bic: 'HSBKKZKX',
        currency: 'KZT (Kazakhstani Tenge)',
        purpose: 'Donation to Umai Nury',
      },
      message: "Even the smallest contribution can change someone's life.",
    },
    getAccess: {
      title: 'Get Access',
      subtitle:
        'To receive help, you will need to download the Umai Nury app, where you can access both menstrual products and postpartum depression support.',
      appInfo:
        'Download the Umai Nury app to get access to menstrual products and psychological support',
      downloadButton: 'Download App',
    },
    events: {
      title: 'Events',
      subtitle: 'Take part in upcoming Umai Talks and community events',
      noEvents: 'No upcoming events at the moment. Check back soon!',
    },
    footer: {
      about: 'About Us',
      getInvolved: 'Get Involved',
      support: 'Support Us',
      partner: 'Partner',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      contact: 'Contact',
      email: 'umainury@outlook.com',
      instagram: '@umainury_org',
      copyright: '© 2024 Umai Nury. All rights reserved.',
    },
    auth: {
      signIn: 'Sign In',
      signUp: 'Sign Up',
      signOut: 'Sign Out',
      email: 'Email',
      password: 'Password',
      fullName: 'Full Name',
      resetPassword: 'Reset Password',
      forgotPassword: 'Forgot password?',
      noAccount: "Don't have an account?",
      haveAccount: 'Already have an account?',
      backToSignIn: 'Back to sign in',
      sendResetLink: 'Send Reset Link',
      loading: 'Loading...',
      emailPlaceholder: 'your@email.com',
      fullNamePlaceholder: 'Enter your full name',
    },
    forms: {
      fullName: 'Full Name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      phone: 'Phone',
      phonePlaceholder: '+7 (XXX) XXX-XX-XX',
      city: 'City',
      submit: 'Submit Application',
      submitting: 'Submitting...',
      submitAnother: 'Submit Another Application',
      fullNamePlaceholder: 'Your full name',
      cityPlaceholder: 'Your city',
      motivation: 'Why do you want to volunteer?',
      motivationPlaceholder: 'Tell us why you want to help...',
      availability: 'Your Availability',
      availabilityPlaceholder: 'When are you available? (days, times)',
      skills: 'Skills & Experience',
      skillsPlaceholder: 'Any relevant skills or experience...',
      volunteerTitle: 'Volunteer Application',
      volunteerSuccess: 'Application Submitted!',
      volunteerSuccessMessage:
        'Thank you for your interest in volunteering! We will review your application and contact you soon.',
      psychologistTitle: 'Psychologist Application',
      psychologistSuccess: 'Application Submitted!',
      psychologistSuccessMessage:
        'Thank you for your interest! We will review your credentials and contact you soon.',
      specialization: 'Specialization',
      specializationPlaceholder: 'e.g., Clinical Psychology',
      experienceYears: 'Years of Experience',
      licenseNumber: 'License Number',
      licenseNumberPlaceholder: 'Your professional license number',
      about: 'About You',
      aboutPlaceholder:
        'Tell us about your experience, approach, and why you want to help...',
      chapterTitle: 'Chapter Application',
      chapterSuccess: 'Application Submitted!',
      chapterSuccessMessage:
        'Thank you for your interest in starting a chapter! We will review your proposal and be in touch soon.',
      institution: 'Institution/Organization',
      institutionPlaceholder: 'School, university, or organization name',
      teamSize: 'Team Size',
      teamSizePlaceholder: 'How many people in your team?',
      proposal: 'Chapter Proposal',
      proposalPlaceholder:
        'Describe your vision for the chapter, planned activities, target community, and how you plan to support the mission...',
      partnerTitle: 'Partnership Inquiry',
      partnerSuccess: 'Inquiry Submitted!',
      partnerSuccessMessage:
        'Thank you for your interest in partnering with us! We will contact you soon to discuss opportunities.',
      companyName: 'Company Name',
      companyNamePlaceholder: 'Your company name',
      contactName: 'Contact Person',
      contactNamePlaceholder: 'Your full name',
      companyType: 'Company Type',
      selectCompanyType: 'Select company type',
      corporate: 'Corporate/Large Business',
      smallBusiness: 'Small Business',
      ngo: 'NGO/Non-Profit',
      government: 'Government Organization',
      educational: 'Educational Institution',
      other: 'Other',
      message: 'Message',
      messagePlaceholder:
        'Tell us about your organization and how you would like to partner with us...',
    },
    signin: {
      title: 'Sign In',
      email: 'Email',
      password: 'Password',
      emailPlaceholder: 'your@email.com',
      passwordPlaceholder: '••••••••',
      submit: 'Sign In',
      loading: 'Loading...',
      noAccount: "Don't have an account?",
      signUp: 'Sign up',
      error: 'Failed to sign in',
    },
    signup: {
      title: 'Sign Up',
      fullName: 'Full Name',
      email: 'Email',
      password: 'Password',
      fullNamePlaceholder: 'Enter your full name',
      emailPlaceholder: 'your@email.com',
      passwordPlaceholder: '••••••••',
      submit: 'Sign Up',
      loading: 'Loading...',
      haveAccount: 'Already have an account?',
      signIn: 'Sign in',
      error: 'Failed to sign up',
      enterFullName: 'Please enter your full name',
    },
  },
  ru: {
    header: {
      signIn: 'Вход',
      signUp: 'Регистрация',
    },
    nav: {
      home: 'Главная',
      about: 'Кто мы',
      getInvolved: 'Присоединиться',
      support: 'Поддержать',
      partner: 'Партнёрство',
      events: 'События',
      donate: 'Помочь',
      getAccess: 'Получить доступ',
    },
    home: {
      hero: {
        title: 'Достоинство начинается здесь',
        subtitle:
          'Разрушаем молчание вокруг менструального здоровья и послеродовой депрессии в Центральной Азии',
        description:
          'Umai Nury – первая и на сегодняшний день единственная некоммерческая организация в Казахстане и Центральной Азии, которая стремится обеспечить каждой женщине, находящейся в трудной жизненной ситуации, бесплатный доступ к необходимым средствам менструальной гигиены.',
        getAccess: 'Получить доступ',
        donate: 'Поддержать миссию',
      },
      mission: {
        title: 'Наша миссия',
        problem: 'Проблема',
        problemText:
          'Тысячи женщин в Казахстане и Центральной Азии сталкиваются с менструальной бедностью и не имеют доступа к средствам гигиены. Многие страдают молча от послеродовой депрессии без должной поддержки.',
        solution: 'Наше решение',
        solutionText:
          'Мы предоставляем бесплатные средства менструальной гигиены и связываем женщин с профессиональной психологической поддержкой, разрушая табу и обеспечивая достоинство для всех.',
      },
      partner: {
        title: 'Наш основной партнёр',
        name: 'Благотворительный фонд Saby',
        description:
          'С 2002 года фонд Saby поддерживает социальные инициативы по всему Казахстану. Как наш основной партнёр, они помогают нам предоставлять необходимые средства менструальной гигиены и психологическую поддержку женщинам, нуждающимся в помощи.',
      },
      howItWorks: {
        title: 'Как мы помогаем',
        psychSupport: 'Психологическая поддержка при послеродовой депрессии',
        psychStep1:
          '1. Запросите поддержку в приложении «Umai Nury» или заполнив форму на этом сайте',
        psychStep2: '2. Предоставьте необходимые документы',
        psychStep2Link: 'Кто получает помощь',
        menstrualProducts: 'Как получить менструальные продукты',
        menstrualStep1:
          '1. Зарегистрируйтесь в приложении «Umai Nury» в ближайшем центре',
        menstrualStep2: '2. В центре покажите свои необходимые документы',
        menstrualStep2Link: 'Кто получает помощь',
        menstrualStep3: '3. Сканируйте QR-код и забирайте!',
      },
      eligibility: {
        title: 'Кто получает нашу помощь',
        subtitle: 'Мы предоставляем поддержку женщинам следующих категорий:',
        category1: 'Многодетные семьи (3+ детей)',
        category2: 'Матери-одиночки',
        category3: 'Малообеспеченные семьи',
        category4: 'Инвалиды (I, II, III степени)',
      },
      cta: {
        title: 'Присоединяйтесь к нам в создании изменений',
        subtitle:
          'Ваша поддержка помогает женщинам получить доступ к необходимым продуктам и услугам психического здоровья',
        button: 'Помочь сейчас',
      },
    },
    about: {
      title: 'Кто мы',
      intro:
        'Umai Nury – первая и на сегодняшний день единственная некоммерческая организация в Казахстане и Центральной Азии, которая стремится обеспечить каждой женщине, находящейся в трудной жизненной ситуации, бесплатный доступ к необходимым средствам менструальной гигиены. Мы также оказываем поддержку женщинам, переживающим послеродовую депрессию, предоставляя им доступную психологическую помощь.',
      whyWeExist: {
        title: 'Почему мы существуем',
        text1:
          'Около 5.1% населения Казахстана живут за чертой бедности, что составляет почти один миллион человек. По существующим данным, более 60% из них — женщины. Это значит, что около 600–700 тысяч женщин не могут позволить себе даже самые базовые средства гигиены.',
        text2:
          'При минимальной заработной плате в 85 000 тенге и стоимости одной упаковки прокладок около 1 000 тенге, многим женщинам приходится тратить до 2 000 тенге (2.3%) в месяц на то, без чего невозможно обойтись. Для семей, живущих на грани выживания, это становится тяжелым эмоциональным и физическим бременем.',
        text3:
          'Мы в Umai Nury верим, что ни одна женщина не может быть по-настоящему свободной, пока каждая женщина не будет свободна. Эта вера — причина нашего существования.',
      },
      team: {
        title: 'Наша команда',
        founder: 'Айзат Серикбек — основательница и исполнительный директор',
        cofounder: 'Алима Оразалы — соосновательница и операционный директор',
        digital: 'Мустафа Касым — директор по цифровому развитию',
        tech: 'Алимжан Кадыров — директор по технологиям и инновациям',
      },
      work: {
        title: 'Наша работа',
        app: {
          title: 'Приложение Umai Nury',
          description:
            'Через приложение пользователи могут регистрироваться на пунктах выдачи, участвовать в мероприятиях, находить помощь и делать пожертвования — всё в одном месте.',
        },
        talks: {
          title: 'Umai Talks',
          description:
            'Ежемесячные образовательные сессии и дискуссии с психологами, врачами и активистами, направленные на повышение осведомленности о менструальном здоровье, послеродовой депрессии и правах женщин.',
        },
        outreach: {
          title: 'Работа с сообществами',
          description:
            'Мы проводим благотворительные сборы, информационные кампании и партнёрства со школами, чтобы помогать девушкам из малообеспеченных районов.',
        },
      },
    },
    support: {
      title: 'Поддержите нашу работу',
      subtitle: 'Организуйте сбор средств по-своему',
      intro:
        'Каждый может помочь — студент, предприниматель, художник, волонтёр. Выберите то, что вам ближе, и превратите это в добро.',
      creative: {
        title: 'Если вы творческий человек',
        ideas: [
          'Продавайте свои работы или поделки на благотворительность',
          'Организуйте арт-ярмарку',
          'Проведите «Sip & Paint» вечер',
          'Устройте мастер-класс с платным участием',
        ],
      },
      host: {
        title: 'Если вы любите устраивать мероприятия',
        ideas: [
          'Благотворительный ужин',
          'Кино-, караоке- или игровая ночь',
          'Праздник как сбор средств',
          'Совместная акция с кафе',
          'Выпечка или «ужин за донат»',
          'Домашний концерт, девичник',
        ],
      },
      entrepreneur: {
        title: 'Если вы предприниматель',
        ideas: [
          'Отдайте дневную выручку на поддержку женщин',
          'Добавьте опцию пожертвования при оплате',
          'Создайте лимитированную «Umai Edition» продукцию',
          'Проведите розыгрыш или челлендж',
          'Организуйте программу «Sponsor-a-Box»',
          'Поставьте банку для донатов',
        ],
      },
      active: {
        title: 'Если вы физически активный человек',
        ideas: [
          'Организуйте благотворительный забег',
          'Проведите урок йоги или фитнеса',
          'Устройте спортивный матч',
          'Начните шаговый челлендж',
          'Пройдите поход «во имя добра»',
        ],
      },
      student: {
        title: 'Если вы студент или педагог',
        ideas: [
          'Поставьте копилку «Монеты для заботы»',
          'Проведите викторину или конкурс',
          'Выпечка, продажа закладок',
          'Тематический день',
          'Фото-зона или аукцион',
          'Игра «Учителя против студентов»',
        ],
      },
      community: {
        title: 'Если вы строитель общества',
        ideas: [
          'Местная лотерея или ярмарка',
          'Утренний кофе или пикник',
          'Культурный вечер',
          'Концерт местных музыкантов',
          'Объедините свое сообщество',
        ],
      },
      impact:
        'Даже если соберете 1000 или 100 000 тенге – каждая сумма пойдет во благо женщин.',
      contact:
        'Если вам нужна помощь с идеями, обязательно обращайтесь: umainury@outlook.com',
    },
    getInvolved: {
      title: 'Присоединяйтесь к нам',
      volunteer: {
        title: 'Станьте волонтёром',
        intro:
          'Хотите стать частью значимого дела и расширить круг общения? Присоединяйтесь к команде волонтёров Umai Nury.',
        whatYouCanDo: 'Что вы можете делать:',
        duties: [
          'Помогать в организации мероприятий',
          'Создавать контент и распространять информацию',
          'Участвовать в сборе и упаковке пожертвований',
          'Продвигать инициативы в школах и вузах',
        ],
        howTo: {
          title: 'Как стать волонтёром',
          description:
            'Свяжитесь с нами по электронной почте или в Instagram, укажите свои данные, и мы расскажем о следующих шагах.',
          button: 'Отправить заявку',
          step1:
            'Напишите нам на umainury@outlook.com или в Instagram @umainury_org',
          step2: 'Укажите имя, возраст и город',
          step3: 'Мы свяжемся с вами и добавим в сеть волонтёров',
        },
      },
      psychologist: {
        title: 'Психологи и специалисты по ментальному здоровью',
        intro:
          'Мы приглашаем психологов и специалистов по психическому здоровью к сотрудничеству для поддержки женщин с послеродовой депрессией.',
        opportunitiesLabel: 'Возможности:',
        opportunities: [
          'Оказывать доступную психологическую помощь',
          'Вести семинары на Umai Talks',
          'Помогать создавать ресурсы',
        ],
        note: 'Мы предоставляем небольшой гонорар, но многие присоединяются из желания помогать женщинам.',
        applyButton: 'Подать заявку психологом',
      },
      chapter: {
        title: 'Откройте свой филиал',
        whatIsChapter: 'Что такое филиал?',
        what: 'Филиал — это локальное представительство Umai Nury, группа волонтёров, продвигающая нашу миссию в своём городе, школе или университете.',
        chaptersVsProjects: 'Филиалы vs. Проекты',
        vs: 'Проект — это одноразовое мероприятие. Филиал — это постоянное сообщество, действующее круглый год.',
        whyStartChapter: 'Почему стоит открыть филиал?',
        why: [
          'Доступ к ресурсам и бренду Umai Nury',
          'Наставничество и помощь в организации',
          'Участие в движении, которое реально помогает',
        ],
        readyToStart:
          'Готовы открыть филиал в своём городе? Заполните форму заявки ниже.',
        startButton: 'Открыть филиал',
        howTo: {
          title: 'Как создать филиал',
          steps: [
            'Отправьте заявку',
            'Пройдите короткое интервью',
            'Назначьте команду координаторов',
            'Ведите учёт членов',
            'Определите цели',
            'Планируйте мероприятия',
            'Привлекайте участников',
          ],
        },
      },
    },
    partner: {
      title: 'Партнёрство',
      forBusiness: 'Для бизнеса',
      intro:
        'На фоне растущей инфляции и экономических трудностей базовые потребности становятся все недоступнее. По данным Бюро национальной статистики, 5.1% населения (около 924 000 человек) живут за чертой бедности.',
      impact:
        'Партнёрство с Umai Nury помогает изменить эту реальность. Ваш бизнес может подарить женщинам доступ к средствам гигиены и психологической поддержке.',
      partnerIntro:
        'Присоединяйтесь к нам как корпоративный партнёр и сделайте реальную разницу в жизни женщин и девочек.',
      partnerHelps:
        'Ваше партнёрство помогает нам предоставлять необходимые гигиенические продукты и поддержку тем, кто в ней нуждается.',
      becomeButton: 'Стать партнёром',
      contact:
        'Если вы хотите стать партнёром — свяжитесь с нами: umainury@outlook.com',
    },
    forms: {
      fullName: 'Полное имя',
      email: 'Электронная почта',
      phone: 'Телефон',
      city: 'Город',
      submit: 'Отправить заявку',
      submitting: 'Отправляется...',
      submitAnother: 'Отправить другую заявку',
      fullNamePlaceholder: 'Ваше полное имя',
      cityPlaceholder: 'Ваш город',

      motivation: 'Почему вы хотите стать волонтёром?',
      motivationPlaceholder: 'Расскажите, почему вы хотите помогать...',

      availability: 'Ваша доступность',
      availabilityPlaceholder: 'Когда вы можете? (дни, время)',

      skills: 'Навыки и опыт',
      skillsPlaceholder: 'Любые подходящие навыки или опыт...',

      volunteerTitle: 'Заявка волонтёра',
      volunteerSuccess: 'Заявка отправлена!',
      volunteerSuccessMessage:
        'Спасибо за интерес к волонтёрству! Мы рассмотрим вашу заявку и скоро свяжемся с вами.',

      psychologistTitle: 'Заявка психолога',
      psychologistSuccess: 'Заявка отправлена!',
      psychologistSuccessMessage:
        'Спасибо за интерес! Мы рассмотрим вашу квалификацию и скоро свяжемся с вами.',

      specialization: 'Специализация',
      specializationPlaceholder: 'Например: Клиническая психология',

      experienceYears: 'Годы опыта',

      licenseNumber: 'Номер лицензии',
      licenseNumberPlaceholder: 'Ваш номер профессиональной лицензии',

      about: 'О вас',
      aboutPlaceholder:
        'Расскажите о вашем опыте, методах работы и почему вы хотите помочь...',

      chapterTitle: 'Заявка на открытие отделения',
      chapterSuccess: 'Заявка отправлена!',
      chapterSuccessMessage:
        'Спасибо за инициативу! Мы рассмотрим ваше предложение и скоро свяжемся с вами.',

      institution: 'Институт/Организация',
      institutionPlaceholder: 'Название школы, университета или организации',

      teamSize: 'Размер команды',
      teamSizePlaceholder: 'Сколько человек в вашей команде?',

      proposal: 'Предложение отделения',
      proposalPlaceholder:
        'Опишите ваше видение отделения, планируемые мероприятия, целевую аудиторию и как вы будете поддерживать миссию...',

      partnerTitle: 'Запрос на партнёрство',
      partnerSuccess: 'Запрос отправлен!',
      partnerSuccessMessage:
        'Спасибо за интерес к партнёрству! Мы скоро свяжемся с вами.',

      companyName: 'Название компании',
      companyNamePlaceholder: 'Название вашей компании',

      contactName: 'Контактное лицо',
      contactNamePlaceholder: 'Ваше полное имя',

      companyType: 'Тип компании',
      selectCompanyType: 'Выберите тип компании',

      corporate: 'Корпоративный/Крупный бизнес',
      smallBusiness: 'Малый бизнес',
      ngo: 'НПО/Некомерческая организация',
      government: 'Государственная организация',
      educational: 'Образовательное учреждение',
      other: 'Другое',

      message: 'Сообщение',
      messagePlaceholder:
        'Расскажите о вашей организации и в каком формате хотите сотрудничать...',
    },

    donate: {
      subtitle:
        'Каждый вклад помогает нам предоставлять бесплатные менструальные продукты и образование по вопросам здоровья для женщин по всей Центральной Азии.',
      yourImpact: 'Ваше влияние',
      impact: {
        amount1: '1,000 ₸ (~$2)',
        desc1: 'Обеспечивает одну девушку средствами гигиены',
        amount2: '20,000 ₸ (~$42)',
        desc2:
          'Покрывает одну терапевтическую сессию при послеродовой депрессии',
      },
      bankDetails: {
        title: 'Банковские реквизиты',
        name: 'Umai Nury Public Foundation',
        bin: '251040003661',
        iban: 'KZ20 601A 8710 5883 7751',
        bic: 'HSBKKZKX',
        currency: 'KZT (Тенге)',
        purpose: 'Пожертвование Umai Nury',
      },
      message: 'Даже самый маленький вклад может изменить чью-то жизнь.',
    },
    getAccess: {
      title: 'Получить доступ',
      subtitle:
        'Чтобы получить помощь, Вам придется скачать приложение Umai Nury, где сможете получить и менструальные продукты, и помощь по послеродовой депрессии.',
      appInfo:
        'Скачайте приложение Umai Nury, чтобы получить доступ к менструальным продуктам и психологической поддержке при послеродовой депрессии',
      downloadButton: 'Скачать приложение',
    },
    events: {
      title: 'События',
      subtitle:
        'Примите участие в предстоящих Umai Talks и общественных мероприятиях',
      noEvents: 'Сейчас нет предстоящих событий. Загляните позже!',
    },
    footer: {
      about: 'О нас',
      getInvolved: 'Присоединиться',
      support: 'Поддержать',
      partner: 'Партнёрство',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия использования',
      contact: 'Контакты',
      email: 'umainury@outlook.com',
      instagram: '@umainury_org',
      copyright: '© 2024 Umai Nury. Все права защищены.',
    },
    signin: {
      title: 'Вход',
      email: 'Электронная почта',
      password: 'Пароль',
      emailPlaceholder: 'your@email.com',
      passwordPlaceholder: '••••••••',
      submit: 'Войти',
      loading: 'Загрузка...',
      noAccount: 'Нет аккаунта?',
      signUp: 'Зарегистрируйтесь',
      error: 'Не удалось войти',
    },
    signup: {
      title: 'Регистрация',
      fullName: 'Полное имя',
      email: 'Электронная почта',
      password: 'Пароль',
      fullNamePlaceholder: 'Введите полное имя',
      emailPlaceholder: 'your@email.com',
      passwordPlaceholder: '••••••••',
      submit: 'Зарегистрироваться',
      loading: 'Загрузка...',
      haveAccount: 'Уже есть аккаунт?',
      signIn: 'Войти',
      error: 'Не удалось зарегистрироваться',
      enterFullName: 'Пожалуйста, введите полное имя',
    },
  },
  kk: {
    header: {
      signIn: 'Кіру',
      signUp: 'Тіркелу',
    },
    nav: {
      home: 'Басты бет',
      about: 'Біз туралы',
      getInvolved: 'Қосылу',
      support: 'Қолдау',
      partner: 'Серіктестік',
      events: 'Іс-шаралар',
      donate: 'Көмектесу',
      getAccess: 'Қолжетімділік алу',
    },
    home: {
      hero: {
        title: 'Қадір-қасиет осы жерден өз бойын табады',
        subtitle:
          'Орталық Азияда менструалдық денсаулық және туыттан кейінгі депрессия туралы үнсіздікті бұзу',
        description:
          'Umai Nury — Қазақстанда және жалпы Орталық Азия аймағында әлеуметтік-экономикалық тұрмысы төмен әйелдердің етеккір кезіне арналған тауарларға қолжетімділігін қамтамасыз ететін алғашқы және әзірге жалғыз коммерциялық емес ұйым.',
        getAccess: 'Қолжетімділік алу',
        donate: 'Миссияны қолдау',
      },
      mission: {
        title: 'Біздің миссиямыз',
        problem: 'Мәселе',
        problemText:
          'Қазақстан мен Орталық Азиядағы мыңдаған әйелдер менструалдық кедейшілікпен бетпе-бет келеді және гигиена құралдарына қолжетімділігі жоқ. Көптеген әйелдер туыттан кейінгі депрессиядан тиісті қолдаусыз үнсіз зардап шегеді.',
        solution: 'Біздің шешім',
        solutionText:
          'Біз тегін менструалдық гигиена құралдарын береміз және әйелдерді кәсіби психологиялық қолдаумен байланыстырамыз, табуларды бұзып, барлығына қадір-қасиетті қамтамасыз етеміз.',
      },
      partner: {
        title: 'Біздің негізгі серіктесіміз',
        name: 'Saby Қайырымдылық қоры',
        description:
          '2002 жылдан бастап Saby қоры Қазақстан бойынша әлеуметтік бастамаларды қолдап келеді. Біздің негізгі серіктесіміз ретінде олар көмекке мұқтаж әйелдерге қажетті менструалдық гигиена құралдары мен психологиялық қолдау көрсетуге көмектеседі.',
      },
      howItWorks: {
        title: 'Біз қалай көмектесеміз',
        psychSupport: 'Туыттан кейінгі депрессияға психологиялық қолдау',
        psychStep1:
          '1. «Umai Nury» қосымшасы арқылы немесе осы сайттағы форманы толтыру арқылы қолдау сұраңыз',
        psychStep2: '2. Қажетті құжаттарды ұсыныңыз',
        psychStep2Link: 'Кім көмек алады',
        menstrualProducts: 'Менструалдық өнімдерді қалай алуға болады',
        menstrualStep1: '1. Жақын орталықта «Umai Nury» қосымшасына тіркеліңіз',
        menstrualStep2: '2. Орталықта қажетті құжаттарыңызды көрсетіңіз',
        menstrualStep2Link: 'Кім көмек алады',
        menstrualStep3: '3. QR кодын сканерлеп, өнімдеріңізді алыңыз!',
      },
      eligibility: {
        title: 'Кім біздің көмегімізді алады',
        subtitle: 'Біз келесі санаттағы әйелдерге қолдау көрсетеміз:',
        category1: 'Көпбалалы отбасылар (3+ бала)',
        category2: 'Жалғызбасты аналар',
        category3: 'Аз қамтылған отбасылар',
        category4: 'Мүгедектер (I, II, III дәрежесі)',
      },
      cta: {
        title: 'Өзгеріс жасауға қосылыңыз',
        subtitle:
          'Сіздің қолдауыңыз әйелдерге қажетті өнімдер мен психикалық денсаулық қызметтеріне қолжетімділік алуға көмектеседі',
        button: 'Қазір көмектесу',
      },
    },
    about: {
      title: 'Ұйым туралы',
      intro:
        'Umai Nury — Қазақстанда және жалпы Орталық Азия аймағында әлеуметтік-экономикалық тұрмысы төмен әйелдердің етеккір кезіне арналған тауарларға қолжетімділігін қамтамасыз ететін алғашқы және әзірге жалғыз коммерциялық емес ұйым. Біз сондай-ақ туыттан кейінгі кезеңде жиі кездесетін депрессиямен күресуге атсалысып, әйелдерге қолжетімді және сапалы психологиялық көмек көрсетеміз.',
      whyWeExist: {
        title: 'Біз не үшін қызмет етеміз?',
        text1:
          'Қазақстанда шамамен 5.1% халық (шамамен 1 миллион адам) тақыр кедейлікте өмір сүреді. Олардың 60%-нан астамы — әйелдер, яғни 600–700 мың әйел ең қарапайым гигиеналық құралдарға қол жеткізе алмайды.',
        text2:
          'Ең төменгі жалақы 85 000 теңге болса, бір қорап гигиеналық өнімнің бағасы шамамен 1 000 теңге. Көптеген әйелдер ай сайын тек осы қажеттілікке 2 000 теңгеден артық жұмсайды (жалақының 2.3%). Тіршілік үшін күресіп жатқан отбасылар үшін бұл үлкен физикалық және эмоционалды ауыртпалық.',
        text3:
          'Umai Nury ұйымы ретінде біз әрбір әйел толықтай азат болмай, барлық әйел азат бола алмайтынына сенеміз. Біздің өмір сүру себебіміз — осы сенім.',
      },
      team: {
        title: 'Біздің команда',
        founder: 'Айзат Серікбек — негізін қалаушы және атқарушы директор',
        cofounder:
          'Алима Оразалы — серіктес-негізін қалаушы және операциялық директор',
        digital: 'Мұстафа Қасым — цифрлық даму директоры',
        tech: 'Әлімжан Қадырұлы — технология және инновация директоры',
      },
      work: {
        title: 'Біздің жұмысымыз',
        app: {
          title: 'Umai Nury қосымшасы',
          description:
            'Қолданушылар қосымша арқылы тіркеуден өтіп, гигиеналық өнімдерді алып кету пункттерінен алып кетіп, психологиялық көмек алып, Umai Talks іс-шараларына жазылып, қайырымдылық жасай алады. Бәрі бір жерде!',
        },
        talks: {
          title: 'Umai Talks',
          description:
            'Менструалдық денсаулық, жалпы әйел денсаулығы мен құқықтары жайлы, әр түрлі өз салаларының мықтыларымен өтетін кездесулер.',
        },
        outreach: {
          title: 'Қауымдастықпен жұмыс',
          description:
            'Біз ауылды-мекендерге барып, қайырымдылық акцияларын ұйымдастырып, ақпараттандыру науқандарын өткізіп, мектептермен серіктестік орнатамыз. Мақсатымыз ешкімді назардан тыс қалдырмау.',
        },
      },
    },
    support: {
      title: 'Бізді қолдаңыз',
      subtitle: 'Өзіңізше қаражат жинаңыз',
      intro:
        'Студент, кәсіпкер, мектеп оқушысы боласыз ба, әрбір адам өз көмегін көрсете алады. Өзіңізге жақын істі таңдаңыз да, соны ізгі іске айналдырыңыз.',
      creative: {
        title: 'Егер сіз шығармашыл жан болсаңыз',
        ideas: [
          'Өз өнер туындыларыңызды сатыңыз',
          'Арт-жәрмеңке ұйымдастырыңыз',
          '«Sip & Paint» кешін өткізіңіз',
          'Ақылы шеберлік сабағы',
        ],
      },
      host: {
        title: 'Егер сіз қонақжай жан болсаңыз',
        ideas: [
          'Қайырымдылық кешкі асы',
          'Кино, караоке немесе ойын кеші',
          'Мереке — қайырымдылыққа арналсын',
          'Кафемен бірлескен акция',
          'Пісіру байқауы немесе кешкі ас',
          'Үй концерті, қыз-келіншектер кеші',
        ],
      },
      entrepreneur: {
        title: 'Егер сіз кәсіпкер болсаңыз',
        ideas: [
          'Бір күндік табысты аударыңыз',
          'Қайырымдылық опциясын қосыңыз',
          '«Umai Edition» өнім шығарыңыз',
          'Розыгрыш немесе челлендж',
          '«Sponsor-a-Box» бағдарламасы',
          'Қайырымдылық жәшігі',
        ],
      },
      active: {
        title: 'Егер сіз белсенді болсаңыз',
        ideas: [
          'Қайырымдылық жүгіру немесе велошеру',
          'Йога, фитнес немесе би сабағы',
          'Спорттық матч',
          'Қадам санау жарысы',
          'Тауға шығу «ізгі іс үшін»',
        ],
      },
      student: {
        title: 'Егер сіз студент немесе ұстаз болсаңыз',
        ideas: [
          '«Қамқорлық тиындары» жәшігі',
          'Викторина немесе байқау',
          'Тәтті сату, закладка жәрмеңкесі',
          'Тақырыптық күн',
          'Фотоаймақ немесе аукцион',
          '«Мұғалімдер мен оқушылар» жарысы',
        ],
      },
      community: {
        title: 'Егер сіз қауым белсендісі болсаңыз',
        ideas: [
          'Аудандық лотерея немесе жәрмеңке',
          'Таңғы кофе немесе пикник',
          'Мәдени кеш',
          'Жергілікті музыканттармен концерт',
          'Қауымды біріктіріңіз',
        ],
      },
      impact:
        '1000 тг жинайсыз ба, әлде 100 000 жинайсыз ба, әрбір теңгеңіз игілікке кетеді.',
      contact: 'Идеялармен көмек керек болса: umainury@outlook.com',
    },
    getInvolved: {
      title: 'Бізге қосылыңыз',
      volunteer: {
        title: 'Волонтер болыңыз',
        intro:
          'Мағыналы іспен айналысып, жаңа таныстар табуды қалайсыз ба? Umai Nury еріктілер тобына қосылыңыз!',
        whatYouCanDo: 'Сіз не істей аласыз:',
        duties: [
          'Іс-шаралар ұйымдастыру',
          'Контент дайындау',
          'Жинау және орау жұмыстары',
          'Мектептерде ақпараттық науқандар',
        ],
        howTo: {
          title: 'Қалай қосылуға болады',
          description:
            'Бізге электронды пошта немесе Instagram арқылы хабарлаңыз, өз деректеріңізді әтіңіз және біз келесі қадамдар туралы айтамыз.',
          button: 'Өтініш жіберу',
          step1:
            'umainury@outlook.com немесе Instagram @umainury_org арқылы жазыңыз',
          step2: 'Аты-жөніңізді, жасыңызды және қалаңызды көрсетіңіз',
          step3: 'Командамыз сізбен байланысады',
        },
      },
      psychologist: {
        title: 'Психологтар және мамандар',
        intro:
          'Біз психологтар мен психикалық денсаулық мамандарын туыттан кейінгі депрессиямен күресуге қолдау көрсетуге шақырамыз.',
        opportunitiesLabel: 'Мүмкіндіктер:',
        opportunities: [
          'Қолжетімді психологиялық көмек',
          'Umai Talks семинарлары',
          'Ресурстар жасауға көмек',
        ],
        note: 'Біз шағын сыйақы береміз, бірақ көбісі әйелдерге көмектесу үшін келеді.',
        applyButton: 'Психолог ретінде өтініш жіберу',
      },
      chapter: {
        title: 'Өз аймақтық бөлімшеңізді ашыңыз',
        whatIsChapter: 'Бөлімше дегеніміз не?',
        what: 'Бөлімше — Umai Nury ұйымының жергілікті еріктілер тобы, өз мектебінде, университетінде немесе қаласында біздің миссияны жүзеге асырады.',
        chaptersVsProjects: 'Бөлімшелер vs. Жобалар',
        vs: 'Жоба — қысқа мерзімді іс-шара. Бөлімше — жыл бойы жұмыс істейтін тұрақты топ.',
        whyStartChapter: 'Неге бөлімше ашуға болады?',
        why: [
          'Umai Nury ресурстарына қол жеткізу',
          'Командадан тәлімгерлік',
          'Әйелдерге шынайы көмек көрсететін қозғалыс',
        ],
        readyToStart:
          'Өз қалаңызда бөлімше ашуға дайын ба? Төмендегі форманы толтырыңыз.',
        startButton: 'Бөлімше ашу',
        howTo: {
          title: 'Қалай ашуға болады',
          steps: [
            'Өтініш жіберіңіз',
            'Сұхбаттан өтіңіз',
            'Басшыларды тағайындаңыз',
            'Есептерді жүргізіңіз',
            'Мақсаттарды анықтаңыз',
            'Іс-шаралар жоспарлаңыз',
            'Мүшелер тартыңыз',
          ],
        },
      },
    },
    partner: {
      title: 'Серіктестік',
      forBusiness: 'Бизнестер үшін',
      intro:
        'Инфляция мен экономикалық қиындықтар күшейген кезеңде негізгі қажеттіліктердің өзі көптеген адамдар үшін қолжетімсіз. Ұлттық статистика бюросының деректеріне сәйкес, халықтың 5.1%-ы (924 000 адам) кедейлік шегінен төмен өмір сүреді.',
      impact:
        'Бізбен серіктестік жасап, осы шындықты өзгертуге ат салысыңыз. Сіздің бизнесіңіз әйелдерге гигиена құралдары мен психологиялық қолдауға қолжетімділік бере алады.',
      partnerIntro:
        'Корпоративті серіктес ретінде әйелдер және қыздардың өміріне нақты өзгеріс әкеліңіз.',
      partnerHelps:
        'Сіздің серіктестігіңіз біздің қажеттіліктіде болған адамдарға гигиеналық өнімдер мен қолдау көрсетуге көмектеседі.',
      becomeButton: 'Серіктес болу',
      contact:
        'Серіктестік туралы талқылау үшін umainury@outlook.com бойынша бізге хабарласыңыз.',
    },
    donate: {
      subtitle:
        'Әрбір жарна — Қазақстан мен Орталық Азия әйелдері мен қыздарының тегін гигиеналық өнімдеріне қол жеткізуіне көмектеседі.',
      yourImpact: 'Сіздің ықпалыңыз',
      impact: {
        amount1: '1,000 ₸ (~$2)',
        desc1: 'Бір қызды гигиеналық құралдармен қамтамасыз етеді',
        amount2: '20,000 ₸ (~$42)',
        desc2: 'Туыттан кейінгі депрессияға бір терапия сеансын төлейді',
      },
      bankDetails: {
        title: 'Банк деректері',
        name: 'Umai Nury Public Foundation',
        bin: '251040003661',
        iban: 'KZ20 601A 8710 5883 7751',
        bic: 'HSBKKZKX',
        currency: 'KZT (Теңге)',
        purpose: 'Umai Nury ұйымына қайырымдылық',
      },
      message: 'Ең кіші үлес те біреудің өмірін өзгертуі мүмкін.',
    },
    getAccess: {
      title: 'Қолжетімділік алу',
      subtitle:
        'Көмек алу үшін сізге Umai Nury қосымшасын жүктеп алу қажет, онда менструалдық өнімдерді де және туыттан кейінгі депрессия бойынша көмекті де ала аласыз.',
      appInfo:
        'Umai Nury қосымшасын жүктеп алыңыз, менструалдық өнімдер және туыттан кейінгі депрессияға психологиялық қолдауға қолжетімділік алыңыз',
      downloadButton: 'Қосымшаны жүктеу',
    },
    events: {
      title: 'Іс-шаралар',
      subtitle: 'Алдағы Umai Talks және қоғамдық іс-шараларға қатысыңыз',
      noEvents: 'Қазіргі уақытта алдағы іс-шаралар жоқ. Кейінірек тексеріңіз!',
    },
    footer: {
      about: 'Біз туралы',
      getInvolved: 'Қосылу',
      support: 'Қолдау',
      partner: 'Серіктестік',
      privacy: 'Құпиялылық саясаты',
      terms: 'Пайдалану шарттары',
      contact: 'Байланыс',
      email: 'umainury@outlook.com',
      instagram: '@umainury_org',
      copyright: '© 2024 Umai Nury. Барлық құқықтар қорғалған.',
    },
    auth: {
      signIn: 'Кіру',
      signUp: 'Тіркелу',
      signOut: 'Шығу',
      email: 'Электронды пошта',
      password: 'Пароль',
      fullName: 'Толық аты-жөні',
      resetPassword: 'Парольді қалпына келтіру',
      forgotPassword: 'Парольді ұмыттыңыз ба?',
      noAccount: 'Аккаунтыңыз жоқ па?',
      haveAccount: 'Аккаунтыңыз бар ма?',
      backToSignIn: 'Кіруге қайту',
      sendResetLink: 'Қалпына келтіру сілтемесін жіберу',
      loading: 'Жүктелуде...',
      emailPlaceholder: 'your@email.com',
      fullNamePlaceholder: 'Толық аты-жөніңізді енгізіңіз',
    },
    forms: {
      fullName: 'Толық аты-жөні',
      email: 'Электронды пошта',
      phone: 'Телефон',
      city: 'Қала',
      submit: 'Өтінімді жіберу',
      submitting: 'Жіберілуде...',
      submitAnother: 'Басқа өтінім жіберу',
      fullNamePlaceholder: 'Сіздің толық аты-жөніңіз',
      cityPlaceholder: 'Сіздің қалаңыз',
      motivation: 'Неге волонтёр болғыңыз келеді?',
      motivationPlaceholder: 'Неге көмектесгіңіз келетінін бізге айтыңыз...',
      availability: 'Сіздің ынамдылығыңыз',
      availabilityPlaceholder: 'Қашан ынамды болсаңыз? (күндер, уақыттар)',
      skills: 'Дағдылар және тәжірибе',
      skillsPlaceholder: 'Кез-келген сәйкес дағдылар немесе тәжірибе...',
      volunteerTitle: 'Волонтёр өтінімі',
      volunteerSuccess: 'Өтінім жіберілді!',
      volunteerSuccessMessage:
        'Волонтёр болуға қызығаңызға рахмет! Біз сіздің өтінімді қарап, тезінде сізге хабарласамыз.',
      psychologistTitle: 'Психолог өтінімі',
      psychologistSuccess: 'Өтінім жіберілді!',
      psychologistSuccessMessage:
        'Қызығаңызға рахмет! Біз сіздің құзыреттіліктеріңізді қарап, тезінде сізге хабарласамыз.',
      specialization: 'Мамандану',
      specializationPlaceholder: 'Мас., Клиникалық психология',
      experienceYears: 'Тәжірибе жылдары',
      licenseNumber: 'Лицензия номері',
      licenseNumberPlaceholder: 'Сіздің кәсіби лицензия номері',
      about: 'Сіз туралы',
      aboutPlaceholder:
        'Сіздің тәжірибеңіз, әдісеңіз және неге көмектесгіңіз келетінін айтыңыз...',
      chapterTitle: 'Бөлім өтінімі',
      chapterSuccess: 'Өтінім жіберілді!',
      chapterSuccessMessage:
        'Бөлім ашуға қызығаңызға рахмет! Біз сіздің ұсынысын қарап, тезінде сізге хабарласамыз.',
      institution: 'Институт/Ұйым',
      institutionPlaceholder: 'Мектеп, университет немесе ұйымның аты',
      teamSize: 'Команда саны',
      teamSizePlaceholder: 'Сіздің командада қанша адам?',
      proposal: 'Бөлім ұсынысы',
      proposalPlaceholder:
        'Бөліміңіздің көзқарасын, жоспарланған іс-шараларын, мақсатты аудиториясын және миссияны қалай қолдағыңызды сипаттаңыз...',
      partnerTitle: 'Серіктестік сұрау',
      partnerSuccess: 'Сұрау жіберілді!',
      partnerSuccessMessage:
        'Біздің серіктесіміз болуға қызығаңызға рахмет! Біз тезінде сізге хабарласамыз.',
      companyName: 'Компания аты',
      companyNamePlaceholder: 'Сіздің компания атысы',
      contactName: 'Байланыс адамы',
      contactNamePlaceholder: 'Сіздің толық аты-жөніңіз',
      companyType: 'Компания түрі',
      selectCompanyType: 'Компания түрін таңдаңыз',
      corporate: 'Корпоративті/Ірі бизнес',
      smallBusiness: 'Кіші бизнес',
      ngo: 'БҚҰ/Коммерциялық емес ұйым',
      government: 'Мемлекеттік ұйым',
      educational: 'Білім беру институты',
      other: 'Басқа',
      message: 'Хабарлама',
      messagePlaceholder:
        'Сіздің ұйымыңыз туралы айтыңыз және бізбен қалай серіктестік болғыңыз келетінін...',
    },
    signin: {
      title: 'Кіру',
      email: 'Электронды пошта',
      password: 'Пароль',
      emailPlaceholder: 'your@email.com',
      passwordPlaceholder: '••••••••',
      submit: 'Кіру',
      loading: 'Жүктелуде...',
      noAccount: 'Аккаунтыңыз жоқ па?',
      signUp: 'Тіркелу',
      error: 'Кіре алмадым',
    },
    signup: {
      title: 'Тіркелу',
      fullName: 'Толық аты-жөні',
      email: 'Электронды пошта',
      password: 'Пароль',
      fullNamePlaceholder: 'Толық аты-жөніңізді енгізіңіз',
      emailPlaceholder: 'your@email.com',
      passwordPlaceholder: '••••••••',
      submit: 'Тіркелу',
      loading: 'Жүктелуде...',
      haveAccount: 'Аккаунтыңыз бар ма?',
      signIn: 'Кіру',
      error: 'Тіркеле алмадым',
      enterFullName: 'Толық аты-жөніңізді енгізіңіз',
    },
  },
};

export function useTranslation(lang: Language) {
  return translations[lang];
}
