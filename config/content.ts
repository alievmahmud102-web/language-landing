import type { SectionName } from "@/config/layout";
import type { Locale } from "@/config/i18n";

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
    submitSendingLabel: string;
    submitErrorMessage: string;
    /** Shown when Telegram returns 403 / chat has not started the bot */
    telegramNeedStartHint: string;
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
export const content: Record<Locale, LandingContent> = {
  ru: {
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
        submitSendingLabel: "Отправляем…",
        submitErrorMessage:
          "Не удалось отправить заявку. Попробуйте ещё раз или напишите нам в Telegram.",
        telegramNeedStartHint:
          "Откройте вашего бота в Telegram, нажмите «Start» (или «Запустить»), затем снова отправьте форму — иначе бот не может прислать вам сообщение.",
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
  },
  en: {
    hero: {
      eyebrow: "English school trusted by parents",
      title: "Your child speaks English with confidence — without stress",
      subtitle:
        "A safe learning environment, experienced teachers, and transparent progress reporting, so parents clearly see real results.",
      primaryCta: { label: "Book a trial lesson", href: "#contact" },
      secondaryCta: {
        label: "Message us on Telegram",
        href: "https://t.me/language_school_admin",
        helper: "We usually reply within 10 minutes during working hours",
      },
      trustStats: [
        { value: "1200+", label: "students per year" },
        { value: "8 years", label: "teaching kids and teens" },
        { value: "6.5+", label: "average IELTS score" },
      ],
      trustBadges: [
        "Small groups up to 8 students",
        "Weekly parent progress updates",
        "Trial lesson with level assessment",
      ],
      visual: {
        title: "Premium learning experience",
        subtitle:
          "Bright classrooms, structured lessons, and ongoing support for parents.",
        imageAlt: "English lesson in a modern classroom",
        imageHint: "Placeholder image: teacher and students during class",
      },
    },
    courses: {
      title: "Programs",
      subtitle:
        "It is clear who each course is for, what outcome to expect, and how classes are delivered.",
      cta: { label: "Find the best program", href: "#contact" },
      items: [
        {
          title: "English Kids Start",
          audience: "Ages 7-10 / beginner",
          result:
            "Within 8-10 weeks, children use basic phrases confidently and understand classroom instructions.",
          description:
            "Structured lessons with speaking, reading, and vocabulary practice. Parents can track progress by skill.",
          duration: "3 lessons per week",
          format: "Offline, mini-group up to 8",
        },
        {
          title: "Teens Speaking & School Success",
          audience: "Ages 11-15 / A1-B1",
          result:
            "Teens speak more confidently, improve school grades, and complete assignments faster.",
          description:
            "Balanced speaking practice and academic foundation to support both communication and school performance.",
          duration: "4 months per level",
          format: "Offline or online, 2-3 times per week",
          highlight: "Most popular",
          isFeatured: true,
        },
        {
          title: "IELTS Preparation",
          audience: "15+ / B1 and above",
          result:
            "Students approach the exam with a clear strategy and improve scores through regular mock tests.",
          description:
            "Diagnostic start, personal study plan, and steady feedback on weak points.",
          duration: "12 weeks",
          format: "Intensive + speaking club",
        },
      ],
    },
    about: {
      title: "A center parents can trust",
      description:
        "Before enrollment, we run a 30-minute assessment, define the current level, and set a clear 3-month goal.",
      advantages: [
        {
          title: "CEFR-aligned curriculum",
          description:
            "Lessons follow structured A1-C1 modules with monthly mini-checks in speaking, grammar, and vocabulary.",
        },
        {
          title: "Parent report every 4 weeks",
          description:
            "You get a concise update: what improved, what needs attention, and simple home practice tips.",
        },
        {
          title: "Supportive classroom discipline",
          description:
            "Groups up to 8 students. Teachers know each learner and provide calm, constructive feedback.",
        },
        {
          title: "Goal-based learning",
          description:
            "School support, speaking confidence, or IELTS — each child gets a focused path.",
        },
      ],
      trustBadges: [
        "Pre-enrollment assessment",
        "Groups up to 8 students",
        "Monthly parent report",
      ],
      stats: [
        { label: "Years of practice", value: "8+" },
        { label: "Students per year", value: "1200+" },
        { label: "Average IELTS score", value: "6.5+" },
      ],
    },
    teachers: {
      title: "Teachers you can trust",
      subtitle:
        "Each profile includes role, qualifications, and specialization so parents clearly know who teaches their child.",
      items: [
        {
          name: "Madina Karimova",
          role: "IELTS & Academic English Teacher",
          experience: "9 years of experience",
          qualification: "MA in Applied Linguistics, CELTA",
          specialization: "IELTS prep, academic writing",
          trustDescription:
            "Weekly speaking and writing feedback helps students improve with clear exam criteria.",
          certifications: ["IELTS Teacher Training", "CELTA Cambridge"],
          photoAlt: "English teacher Madina Karimova",
          photoHint: "Placeholder photo: teacher in a classroom",
        },
        {
          name: "Alexey Ibragimov",
          role: "Teens Program Teacher",
          experience: "7 years of experience",
          qualification: "BA in English Philology, TKT Modules 1-3",
          specialization: "Teen speaking, school performance support",
          trustDescription:
            "Helps teens remove speaking anxiety and close school gaps with structured practice.",
          certifications: ["TKT 1-3", "Classroom Management for Teens"],
          photoAlt: "English teacher Alexey Ibragimov",
          photoHint: "Placeholder photo: teacher explaining material",
        },
        {
          name: "Nargiza Rakhimova",
          role: "Methodologist, Kids Program Teacher",
          experience: "10 years of experience",
          qualification: "BA in Pedagogy, TEYL Certificate",
          specialization: "Early English, primary school methodology",
          trustDescription:
            "Introduces children to English with clear short tasks and steady repetition.",
          certifications: ["TEYL", "Child Safeguarding in Education"],
          photoAlt: "Methodologist Nargiza Rakhimova",
          photoHint: "Placeholder photo: friendly teacher portrait",
        },
      ],
    },
    reviews: {
      title: "Parent reviews with real outcomes",
      subtitle:
        "Each story includes timeline, age, and measurable progress seen after joining.",
      items: [
        {
          parentName: "Sabina",
          childAge: "9 years old",
          course: "English Kids Start",
          timeframe: "after 3 months",
          result: "Moved from pre-A1 to A1 and started answering in full sentences.",
          story:
            "Before the course, my son knew only separate words. Now he speaks more freely and handles oral school tasks.",
          metrics: [
            { label: "Level", before: "pre-A1", after: "A1" },
            { label: "Active vocabulary", before: "~40 words", after: "~220 words" },
            { label: "Oral answers in class", before: "1-2 per lesson", after: "6-8 per lesson" },
          ],
          rating: 5,
        },
        {
          parentName: "Nilufar",
          childAge: "14 years old",
          course: "Teens Speaking & School Success",
          timeframe: "in 4 months",
          result: "School grade improved from 3-4 to stable 5.",
          story:
            "My daughter started speaking more actively and stopped being afraid of mistakes.",
          metrics: [
            { label: "School grade", before: "3-4", after: "5" },
            { label: "Speaking score (internal)", before: "58/100", after: "81/100" },
            { label: "Missed homework", before: "2-3 per month", after: "0-1 per month" },
          ],
          rating: 5,
        },
        {
          parentName: "Otabek",
          childAge: "17 years old",
          course: "IELTS Preparation",
          timeframe: "in 12 weeks",
          result: "Scored IELTS 6.5 (mock score before start was 5.5).",
          story:
            "The plan was clear: weekly writing feedback, mock tests, and targeted correction.",
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
      title: "Let’s choose the right group for your child",
      subtitle:
        "A quick first step with no pressure. In 5-10 minutes we understand your goal and suggest the right format.",
      primaryCta: { label: "Book a trial lesson", href: "#contact" },
      secondaryCta: {
        label: "Prefer Telegram?",
        href: "https://t.me/language_school_admin",
        helper: "Just send your child’s age and current level",
      },
      reassurancePoints: [
        "No obligations",
        "We listen first, then advise",
        "Honest recommendation for your child",
      ],
    },
    contact: {
      title: "Share your contacts and we’ll help you start smoothly",
      subtitle:
        "No long forms. Just name and phone number, and we’ll suggest 2-3 convenient trial slots.",
      form: {
        nameLabel: "Your name",
        namePlaceholder: "For example, Anna",
        phoneLabel: "Phone number",
        phonePlaceholder: "+998 90 123 45 67",
        childAgeLabel: "Child age (optional)",
        childAgePlaceholder: "For example, 10 years old",
        submitLabel: "Find a trial lesson",
        submitSendingLabel: "Sending…",
        submitErrorMessage:
          "We could not send your request. Please try again or message us on Telegram.",
        telegramNeedStartHint:
          "Open your bot in Telegram, tap «Start», then submit the form again — otherwise the bot cannot message you.",
        successMessage:
          "Great! We received your request and will contact you shortly to confirm a convenient time.",
        disclaimer: "By clicking the button, you agree to personal data processing.",
      },
      trustPoints: [
        "Usually reply within 10 minutes",
        "No obligations",
        "Your data is safe",
      ],
      telegramCta: {
        label: "Message in Telegram in 1 minute",
        href: "https://t.me/language_school_admin",
      },
      quickContacts: {
        phoneLabel: "Phone",
        phone: "+998 90 123-45-67",
        telegramLabel: "Telegram",
        telegram: "@language_school_admin",
        addressLabel: "Address",
        address: "12 Nukus Street, Tashkent",
        hoursLabel: "Working hours",
        workHours: "Mon-Sat: 09:00-20:00",
      },
    },
  },
  uz: {
    hero: {
      eyebrow: "Ota-onalar ishonadigan ingliz tili markazi",
      title: "Farzandingiz ingliz tilida ishonch bilan gapira boshlaydi",
      subtitle:
        "Xavfsiz muhit, tajribali ustozlar va aniq progress: ota-onalar har bosqichda natijani ko'rib boradi.",
      primaryCta: { label: "Sinov darsiga yozilish", href: "#contact" },
      secondaryCta: {
        label: "Telegram orqali yozish",
        href: "https://t.me/language_school_admin",
        helper: "Ish vaqtida odatda 10 daqiqada javob beramiz",
      },
      trustStats: [
        { value: "1200+", label: "bir yilda o'qiydigan o'quvchilar" },
        { value: "8 yil", label: "bolalar va o'smirlar bilan tajriba" },
        { value: "6.5+", label: "o'rtacha IELTS natijasi" },
      ],
      trustBadges: [
        "8 nafargacha mini-guruhlar",
        "Ota-onalar uchun haftalik hisobot",
        "Sinov darsida daraja bahosi",
      ],
      visual: {
        title: "Premium ta'lim muhiti",
        subtitle:
          "Yorug' sinfxonalar, tizimli darslar va ota-onalar uchun doimiy aloqa.",
        imageAlt: "Zamonaviy sinfda ingliz tili darsi",
        imageHint: "Placeholder rasm: o'qituvchi va o'quvchilar darsda",
      },
    },
    courses: {
      title: "O'quv dasturlari",
      subtitle:
        "Har kurs kimga mosligi, natijasi va formati aniq ko'rsatilgan. Farzandingizga mos variantni osongina tanlaysiz.",
      cta: { label: "Farzandimga mos kurs tanlash", href: "#contact" },
      items: [
        {
          title: "English Kids Start",
          audience: "7-10 yosh / boshlang'ich",
          result:
            "8-10 haftada bola oddiy gaplarni ishonch bilan ishlata boshlaydi va o'qituvchi ko'rsatmalarini tushunadi.",
          description:
            "Gapirish, o'qish va lug'at ustida tizimli mashqlar. Ota-ona progressni mavzu va ko'nikma bo'yicha kuzatadi.",
          duration: "Haftasiga 3 ta dars",
          format: "Offline, 8 nafargacha mini-guruh",
        },
        {
          title: "Teens Speaking & School Success",
          audience: "11-15 yosh / A1-B1",
          result:
            "O'smir inglizcha erkinroq gapiradi, maktab baholari yaxshilanadi va vazifalarni tezroq bajaradi.",
          description:
            "Gapirish amaliyoti va akademik baza uyg'unlashgan: darslar muloqotda ham, maktabda ham foyda beradi.",
          duration: "Har bir daraja uchun 4 oy",
          format: "Offline yoki online, haftasiga 2-3 marta",
          highlight: "Eng mashhur kurs",
          isFeatured: true,
        },
        {
          title: "IELTS Preparation",
          audience: "15+ / B1 va yuqori",
          result:
            "O'quvchi imtihonga aniq strategiya bilan kiradi va muntazam mock testlar orqali ballini oshiradi.",
          description:
            "Boshlang'ich diagnostika, shaxsiy reja va zaif nuqtalarga yo'naltirilgan doimiy feedback.",
          duration: "12 hafta",
          format: "Intensiv + speaking club",
        },
      ],
    },
    about: {
      title: "Ota-onalar ishonadigan markaz",
      description:
        "Boshlashdan oldin 30 daqiqalik diagnostika o'tkazamiz, darajani aniqlaymiz va 3 oylik aniq maqsadni belgilaymiz.",
      advantages: [
        {
          title: "CEFR asosidagi dastur",
          description:
            "Darslar A1-C1 modul tizimi bo'yicha olib boriladi, har oy speaking, grammar va vocabulary bo'yicha mini-check bor.",
        },
        {
          title: "Har 4 haftada ota-onaga hisobot",
          description:
            "Nima o'sdi, nimani mustahkamlash kerakligi va uyda 10-15 daqiqalik tavsiyalarni olasiz.",
        },
        {
          title: "Bosimsiz, qo'llab-quvvatlovchi muhit",
          description:
            "8 nafargacha guruhlar, har bir bolaga individual e'tibor va xotirjam feedback.",
        },
        {
          title: "Maqsadga yo'naltirilgan o'qish",
          description:
            "Maktab, speaking yoki IELTS — har bir bola uchun mos yo'nalish tanlanadi.",
        },
      ],
      trustBadges: [
        "Qabuldan oldin daraja diagnostikasi",
        "8 nafargacha guruh",
        "Oyma-oy ota-onaga hisobot",
      ],
      stats: [
        { label: "Tajriba", value: "8+" },
        { label: "Yiliga o'quvchilar", value: "1200+" },
        { label: "O'rtacha IELTS", value: "6.5+" },
      ],
    },
    teachers: {
      title: "Natijaga olib boradigan ustozlar",
      subtitle:
        "Har ustoz kartasida yo'nalish, malaka va ixtisoslik bor — farzandingiz kim bilan ishlashini oldindan bilasiz.",
      items: [
        {
          name: "Madina Karimova",
          role: "IELTS va Academic English o'qituvchisi",
          experience: "9 yillik tajriba",
          qualification: "MA in Applied Linguistics, CELTA",
          specialization: "IELTS tayyorlov, academic writing",
          trustDescription:
            "Har hafta writing va speaking bo'yicha aniq feedback beradi, imtihon mezonlarini tushuntirib boradi.",
          certifications: ["IELTS Teacher Training", "CELTA Cambridge"],
          photoAlt: "Ingliz tili o'qituvchisi Madina Karimova",
          photoHint: "Placeholder rasm: o'qituvchi sinfxonada",
        },
        {
          name: "Aleksey Ibragimov",
          role: "O'smirlar dasturi o'qituvchisi",
          experience: "7 yillik tajriba",
          qualification: "BA in English Philology, TKT Modules 1-3",
          specialization: "Teens speaking, maktab natijalari",
          trustDescription:
            "11-15 yosh bilan tizimli ishlaydi: gapirishdagi qo'rquvni kamaytiradi va maktabdagi bo'shliqlarni yopadi.",
          certifications: ["TKT 1-3", "Classroom Management for Teens"],
          photoAlt: "Ingliz tili o'qituvchisi Aleksey Ibragimov",
          photoHint: "Placeholder rasm: o'qituvchi mavzuni tushuntirmoqda",
        },
        {
          name: "Nargiza Rahimova",
          role: "Metodist, bolalar guruhi o'qituvchisi",
          experience: "10 yillik tajriba",
          qualification: "BA in Pedagogy, TEYL Certificate",
          specialization: "Erta yoshda ingliz tili, boshlang'ich metodika",
          trustDescription:
            "Bolalarga ingliz tilini sodda va qiziqarli topshiriqlar bilan bosqichma-bosqich ochib beradi.",
          certifications: ["TEYL", "Child Safeguarding in Education"],
          photoAlt: "Metodist Nargiza Rahimova",
          photoHint: "Placeholder rasm: do'stona o'qituvchi portreti",
        },
      ],
    },
    reviews: {
      title: "Ota-onalar fikri: real natijalar",
      subtitle:
        "Har fikrda muddat, yosh va ko'zga ko'rinadigan natija ko'rsatilgan.",
      items: [
        {
          parentName: "Sabina",
          childAge: "9 yosh",
          course: "English Kids Start",
          timeframe: "3 oy ichida",
          result: "pre-A1 darajadan A1 ga o'tdi va to'liq gaplarda javob bera boshladi.",
          story:
            "Avval faqat ayrim so'zlarni bilardi. Hozir qisqa hikoyalarni ayta oladi va maktabdagi og'zaki topshiriqlarda erkinroq.",
          metrics: [
            { label: "Daraja", before: "pre-A1", after: "A1" },
            { label: "Faol lug'at", before: "~40 so'z", after: "~220 so'z" },
            { label: "Darsda og'zaki javob", before: "1-2 marta", after: "6-8 marta" },
          ],
          rating: 5,
        },
        {
          parentName: "Nilufar",
          childAge: "14 yosh",
          course: "Teens Speaking & School Success",
          timeframe: "4 oy ichida",
          result: "Maktab bahosi 3-4 dan barqaror 5 ga ko'tarildi.",
          story:
            "Qizim darsda faolroq gapira boshladi va xato qilishdan qo'rqmay qoldi.",
          metrics: [
            { label: "Maktab bahosi", before: "3-4", after: "5" },
            { label: "Speaking score (ichki)", before: "58/100", after: "81/100" },
            { label: "Uy vazifasi o'tkazish", before: "2-3 oyiga", after: "0-1 oyiga" },
          ],
          rating: 5,
        },
        {
          parentName: "Otabek",
          childAge: "17 yosh",
          course: "IELTS Preparation",
          timeframe: "12 hafta ichida",
          result: "IELTS 6.5 oldi (boshlang'ich mock 5.5 edi).",
          story:
            "Reja aniq edi: weekly writing feedback, mock testlar va zaif tomonlar ustida aniq ishlash.",
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
      title: "Farzandingizga mos guruhni birga tanlaymiz",
      subtitle:
        "Bu bosimsiz birinchi qadam: 5-10 daqiqada holatingizni tushunib, qulay formatni taklif qilamiz.",
      primaryCta: { label: "Sinov darsiga yozilish", href: "#contact" },
      secondaryCta: {
        label: "Telegram orqali yozish qulayroq",
        href: "https://t.me/language_school_admin",
        helper: "Bolaning yoshi va hozirgi darajasini yozib yuboring",
      },
      reassurancePoints: [
        "Hech qanday majburiyat yo'q",
        "Avval sizni tinglaymiz, keyin tavsiya beramiz",
        "Farzandingizga mosligini ochiq aytamiz",
      ],
    },
    contact: {
      title: "Kontakt qoldiring — boshlashni yengil qilamiz",
      subtitle:
        "Uzun anketalar yo'q: faqat ism va telefon. Sizga 2-3 ta qulay sinov dars vaqtini taklif qilamiz.",
      form: {
        nameLabel: "Ismingiz",
        namePlaceholder: "Masalan, Anna",
        phoneLabel: "Telefon raqamingiz",
        phonePlaceholder: "+998 90 123 45 67",
        childAgeLabel: "Bola yoshi (ixtiyoriy)",
        childAgePlaceholder: "Masalan, 10 yosh",
        submitLabel: "Sinov dars tanlash",
        submitSendingLabel: "Yuborilmoqda…",
        submitErrorMessage:
          "So'rovni yuborib bo'lmadi. Qayta urinib ko'ring yoki Telegram orqali yozing.",
        telegramNeedStartHint:
          "Telegramda botingizni ochib, «Start» tugmasini bosing, keyin formani qayta yuboring — aks holda bot sizga xabar yubora olmaydi.",
        successMessage:
          "Ajoyib! So'rovingiz qabul qilindi. Tez orada bog'lanib, qulay vaqtni belgilaymiz.",
        disclaimer: "Tugmani bosish orqali shaxsiy ma'lumotlar qayta ishlanishiga rozilik bildirasiz.",
      },
      trustPoints: [
        "Odatda 10 daqiqada javob beramiz",
        "Majburiyatsiz",
        "Ma'lumotlaringiz himoyalangan",
      ],
      telegramCta: {
        label: "Telegramga 1 daqiqada yozish",
        href: "https://t.me/language_school_admin",
      },
      quickContacts: {
        phoneLabel: "Telefon",
        phone: "+998 90 123-45-67",
        telegramLabel: "Telegram",
        telegram: "@language_school_admin",
        addressLabel: "Manzil",
        address: "Toshkent shahri, Nukus ko'chasi 12",
        hoursLabel: "Ish vaqti",
        workHours: "Dush-Shan: 09:00-20:00",
      },
    },
  },
};

export type SectionContentMap = {
  [K in SectionName]: LandingContent[K];
};

