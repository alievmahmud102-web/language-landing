import type { SectionName } from "@/config/layout";

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string; helper: string };
  trustStats: Array<{ value: string; label: string }>;
  trustBadges: string[];
  visual: {
    title: string;
    subtitle: string;
    imageAlt: string;
    imageHint: string;
  };
};

export type CourseItem = {
  title: string;
  audience: string;
  result: string;
  description: string;
  duration: string;
  format: string;
  highlight?: string;
  isFeatured?: boolean;
};

export type AboutContent = {
  title: string;
  description: string;
  advantages: Array<{
    title: string;
    description: string;
  }>;
  trustBadges: string[];
  stats: Array<{ label: string; value: string }>;
};

export type TeacherItem = {
  name: string;
  role: string;
  experience: string;
  qualification: string;
  specialization: string;
  trustDescription: string;
  certifications: string[];
  photoAlt: string;
  photoHint: string;
};

export type ReviewItem = {
  parentName: string;
  childAge: string;
  course: string;
  timeframe: string;
  result: string;
  story: string;
  metrics: Array<{ label: string; before: string; after: string }>;
  rating?: number;
};

export type CtaContent = {
  title: string;
  subtitle: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string; helper?: string };
  reassurancePoints: string[];
};

export type ContactContent = {
  title: string;
  subtitle: string;
  form: {
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    childAgeLabel: string;
    childAgePlaceholder: string;
    submitLabel: string;
    successMessage: string;
    disclaimer: string;
  };
  trustPoints: string[];
  telegramCta: { label: string; href: string };
  quickContacts: {
    phoneLabel: string;
    phone: string;
    telegramLabel: string;
    telegram: string;
    addressLabel: string;
    address: string;
    hoursLabel: string;
    workHours: string;
  };
};

export type LandingContent = {
  hero: HeroContent;
  courses: {
    title: string;
    subtitle: string;
    cta: { label: string; href: string };
    items: CourseItem[];
  };
  about: AboutContent;
  teachers: { title: string; subtitle: string; items: TeacherItem[] };
  reviews: { title: string; subtitle: string; items: ReviewItem[] };
  cta: CtaContent;
  contact: ContactContent;
};

/**
 * Realistic Russian copy for a language school landing template.
 * Components should receive only this structured data, without hardcoded text.
 */
export const content: LandingContent = {
  hero: {
    eyebrow: "Школа английского для осознанных родителей",
    title: "Ребенок говорит на английском уверенно — без стресса и зубрежки",
    subtitle:
      "Безопасная среда, преподаватели с опытом и прозрачный прогресс: вы понимаете, чему научился ребенок на каждом этапе и за что платите.",
    primaryCta: { label: "Записаться на пробный урок", href: "#contact" },
    secondaryCta: {
      label: "Написать в Telegram",
      href: "https://t.me/language_school_admin",
      helper: "Отвечаем в течение 10 минут в рабочее время",
    },
    trustStats: [
      { value: "1200+", label: "учеников в год" },
      { value: "8 лет", label: "опыта в обучении детей и подростков" },
      { value: "6.5+", label: "средний IELTS у выпускников" },
    ],
    trustBadges: [
      "Мини-группы до 8 человек",
      "Еженедельные отчеты для родителей",
      "Пробный урок с оценкой уровня",
    ],
    visual: {
      title: "Премиальный формат обучения",
      subtitle:
        "Светлые аудитории, структурированные занятия и поддержка куратора для родителей.",
      imageAlt: "Урок английского в современной аудитории",
      imageHint: "Placeholder для фото: преподаватель и ученики на занятии",
    },
  },
  courses: {
    title: "Программы обучения",
    subtitle:
      "Сразу видно, кому подходит курс, какой результат получит ребенок и в каком формате проходят занятия. Выбирайте программу под вашу цель без догадок.",
    cta: { label: "Подобрать программу ребенку", href: "#contact" },
    items: [
      {
        title: "English Kids Start",
        audience: "7-10 лет / начальный уровень",
        result:
          "Через 8-10 недель ребенок уверенно использует базовые фразы, понимает инструкции учителя и не боится говорить на уроке.",
        description:
          "Структурированная программа с разговорной практикой, чтением и лексикой: родители видят прогресс по темам и навыкам.",
        duration: "3 занятия в неделю",
        format: "Офлайн, мини-группа до 8 человек",
      },
      {
        title: "Teens Speaking & School Success",
        audience: "11-15 лет / A1-B1",
        result:
          "Подросток свободнее говорит на английском в классе, улучшает оценки и быстрее выполняет школьные задания.",
        description:
          "Баланс разговорной практики и академической базы: уроки помогают и в реальной коммуникации, и в школе.",
        duration: "4 месяца за уровень",
        format: "Офлайн или онлайн, 2-3 раза в неделю",
        highlight: "Самый популярный курс",
        isFeatured: true,
      },
      {
        title: "IELTS Preparation",
        audience: "15+ / B1 и выше",
        result:
          "Ученик подходит к экзамену с четкой стратегией по каждому модулю и повышает итоговый балл за счет регулярных пробников.",
        description:
          "Диагностика, персональный план и контрольные тесты: вы заранее видите, где сильные стороны и что нужно подтянуть.",
        duration: "12 недель",
        format: "Интенсив + speaking club",
      },
    ],
  },
  about: {
    title: "Центр, которому родители доверяют обучение ребенка",
    description:
      "Перед стартом мы проводим 30-минутную диагностику, определяем текущий уровень и фиксируем учебную цель на 3 месяца. Родители получают понятный план и критерии прогресса с первого дня.",
    advantages: [
      {
        title: "Программа по CEFR с ежемесячным контролем",
        description:
          "Занятия идут по структурированным модулям A1-C1: в конце каждого месяца ученик сдает мини-срез по speaking, grammar и vocabulary.",
      },
      {
        title: "Отчет родителям раз в 4 недели",
        description:
          "Вы получаете краткий отчет: что уже получается, что требует внимания и что делать дома 10-15 минут в день.",
      },
      {
        title: "Комфортная дисциплина без давления",
        description:
          "Группы до 8 человек, преподаватель знает каждого ученика по уровню и характеру, а обратная связь дается спокойно и по делу.",
      },
      {
        title: "Цели: школа, разговорный, IELTS",
        description:
          "Мы не даем общий курс «для всех»: программа подбирается под конкретную задачу ребенка и срок, в который нужен результат.",
      },
    ],
    trustBadges: [
      "Диагностика уровня перед зачислением",
      "Группы до 8 учеников",
      "Ежемесячный отчет для родителей",
    ],
    stats: [
      { label: "Лет работы", value: "8+" },
      { label: "Учеников в год", value: "1200+" },
      { label: "Средний балл IELTS", value: "6.5+" },
    ],
  },
  teachers: {
    title: "Преподаватели, которым можно доверить результат",
    subtitle:
      "В карточке каждого преподавателя — профиль, квалификация и специализация. Вы заранее понимаете, кто и как будет работать с вашим ребенком.",
    items: [
      {
        name: "Мадина Каримова",
        role: "Преподаватель IELTS и Academic English",
        experience: "9 лет опыта",
        qualification: "MA in Applied Linguistics, CELTA",
        specialization: "Подготовка к IELTS, академическое письмо",
        trustDescription:
          "Готовит по экзаменационным критериям IELTS: каждую неделю ученики получают проверку writing и speaking с персональными комментариями.",
        certifications: ["IELTS Teacher Training", "CELTA Cambridge"],
        photoAlt: "Преподаватель английского Мадина Каримова",
        photoHint: "Placeholder фото: преподаватель в аудитории",
      },
      {
        name: "Алексей Ибрагимов",
        role: "Преподаватель подростковых программ",
        experience: "7 лет опыта",
        qualification: "BA in English Philology, TKT Modules 1-3",
        specialization: "Разговорный английский для teens, школьная успеваемость",
        trustDescription:
          "Системно работает с подростками 11-15 лет: убирает языковой барьер и выравнивает школьные темы, которые обычно проседают.",
        certifications: ["TKT 1-3", "Classroom Management for Teens"],
        photoAlt: "Преподаватель английского Алексей Ибрагимов",
        photoHint: "Placeholder фото: преподаватель объясняет тему",
      },
      {
        name: "Наргиза Рахимова",
        role: "Методист и преподаватель детских групп",
        experience: "10 лет опыта",
        qualification: "BA in Pedagogy, TEYL Certificate",
        specialization: "Раннее обучение английскому, методика для младших школьников",
        trustDescription:
          "Запускает английский у детей через понятные короткие задания и повторение: ребенок не теряется на уроке и постепенно начинает говорить.",
        certifications: ["TEYL", "Child Safeguarding in Education"],
        photoAlt: "Методист Наргиза Рахимова",
        photoHint: "Placeholder фото: доброжелательный портрет преподавателя",
      },
    ],
  },
  reviews: {
    title: "Отзывы родителей: как дети показывают результат на практике",
    subtitle:
      "Здесь реальные ситуации: срок, возраст ребенка и конкретный результат, который родители увидели после старта.",
    items: [
      {
        parentName: "Сабина",
        childAge: "9 лет",
        course: "English Kids Start",
        timeframe: "через 3 месяца занятий",
        result: "Перешёл с pre-A1 на A1 и начал отвечать учителю полными фразами.",
        story:
          "До курса сын знал отдельные слова и стеснялся говорить. Сейчас сам рассказывает короткие истории и спокойно выполняет устные задания в школе.",
        metrics: [
          { label: "Уровень", before: "pre-A1", after: "A1" },
          { label: "Активный словарь", before: "~40 слов", after: "~220 слов" },
          { label: "Устные ответы в классе", before: "1-2 за урок", after: "6-8 за урок" },
        ],
        rating: 5,
      },
      {
        parentName: "Нилуфар",
        childAge: "14 лет",
        course: "Teens Speaking & School Success",
        timeframe: "за 4 месяца",
        result:
          "Оценка в школе поднялась с 3-4 до стабильной 5, а разговорный английский стал заметно увереннее.",
        story:
          "Дочь начала активно говорить на уроках и перестала бояться ошибок. Отдельно понравились ежемесячные отчеты: видно, что именно улучшилось.",
        metrics: [
          { label: "Оценка в школе", before: "3-4", after: "5" },
          { label: "Speaking score (внутр.)", before: "58/100", after: "81/100" },
          { label: "Пропуски домашних заданий", before: "2-3 в месяц", after: "0-1 в месяц" },
        ],
        rating: 5,
      },
      {
        parentName: "Отабек",
        childAge: "17 лет",
        course: "IELTS Preparation",
        timeframe: "за 12 недель",
        result: "Сдал IELTS на 6.5 (до старта пробник был 5.5).",
        story:
          "Шли по четкому плану: weekly writing feedback, пробные тесты и разбор слабых мест. На экзамене сын чувствовал себя спокойно и собранно.",
        metrics: [
          { label: "IELTS mock overall", before: "5.5", after: "6.5" },
          { label: "Writing", before: "5.0", after: "6.0" },
          { label: "Speaking", before: "5.5", after: "6.5" },
        ],
        rating: 5,
      },
    ],
  },
  cta: {
    title: "Давайте спокойно подберем группу, в которой ребенку будет комфортно и интересно",
    subtitle:
      "Это быстрый первый шаг без давления: за 5-10 минут поймем ваш запрос, подскажем формат и предложим удобное время пробного урока.",
    primaryCta: { label: "Хочу на пробный урок", href: "#contact" },
    secondaryCta: {
      label: "Удобнее написать в Telegram",
      href: "https://t.me/language_school_admin",
      helper: "Можно просто написать: возраст ребенка и текущий уровень",
    },
    reassurancePoints: [
      "Без обязательств и навязчивых продаж",
      "Сначала слушаем ваш запрос, потом предлагаем решение",
      "Честно расскажем, подойдет ли программа вашему ребенку",
    ],
  },
  contact: {
    title: "Оставьте контакты — мы бережно подберем лучший старт для ребенка",
    subtitle:
      "Никаких длинных анкет: только имя и номер. Мы свяжемся, уточним детали и предложим 2-3 удобных варианта по времени.",
    form: {
      nameLabel: "Ваше имя",
      namePlaceholder: "Например, Анна",
      phoneLabel: "Телефон",
      phonePlaceholder: "+998 90 123 45 67",
      childAgeLabel: "Возраст ребенка (необязательно)",
      childAgePlaceholder: "Например, 10 лет",
      submitLabel: "Подобрать пробный урок",
      successMessage:
        "Отлично, заявку получили! Скоро свяжемся с вами и подберем удобное время для первого занятия.",
      disclaimer: "Нажимая кнопку, вы соглашаетесь на обработку персональных данных.",
    },
    trustPoints: [
      "Обычно отвечаем за 10 минут",
      "Без обязательств",
      "Ваши данные в безопасности",
    ],
    telegramCta: {
      label: "Написать в Telegram за 1 минуту",
      href: "https://t.me/language_school_admin",
    },
    quickContacts: {
      phoneLabel: "Телефон",
      phone: "+998 90 123-45-67",
      telegramLabel: "Telegram",
      telegram: "@language_school_admin",
      addressLabel: "Адрес",
      address: "г. Ташкент, ул. Нукус, 12",
      hoursLabel: "Время работы",
      workHours: "Пн-Сб: 09:00-20:00",
    },
  },
};

export type SectionContentMap = {
  [K in SectionName]: LandingContent[K];
};

