import React, { useState } from 'react';
import logo from './assets/logo.png';
import './App.css';

const landmarks = {
  ru: [
    {
      id: "place-de-la-bourse",
      title: "Площадь Биржи",
      shortDescription: "Одна из самых красивых площадей Франции XVIII века",
      image: "bourse.jpg"
    },
    {
      id: "grand-theatre",
      title: "Большой театр",
      shortDescription: "Великолепный образец неоклассической архитектуры",
      image: "theatre.jpg"
    },
    {
      id: "cathedral",
      title: "Кафедральный собор",
      shortDescription: "Готический собор XI века, объект Всемирного наследия ЮНЕСКО",
      image: "cathedral.jpg"
    },
    {
      id: "city",
      title: "Город вина",
      shortDescription: "Экспозиционное пространство в Бордо, посвящённое истории и экономике города, тесно связанных с этим напитком, а также виноделию, виноторговле и культуре потребления вина в целом.",
      image: "city.jpg"
    },
    {
      id: "matmut",
      title: "Матмют Атлантик",
      shortDescription: "Футбольный стадион в городе Бордо, Франция. Является домашней ареной футбольного клуба Бордо.",
      image: "matmut.jpg"
    },
    {
      id: "port",
      title: "Порт Луны",
      shortDescription: "Устоявшееся название излучины Гаронны, на левом берегу которой находится исторический центр города Бордо (Франция). Название произошло от сходства изгиба реки с дугой полумесяца.",
      image: "port.jpg"
    }
  ],
  en: [
    {
      id: "place-de-la-bourse",
      title: "Place de la Bourse",
      shortDescription: "One of the most beautiful 18th century squares in France",
      image: "bourse.jpg"
    },
    {
      id: "grand-theatre",
      title: "Grand Théâtre",
      shortDescription: "Magnificent example of neoclassical architecture",
      image: "theatre.jpg"
    },
    {
      id: "cathedral",
      title: "Bordeaux Cathedral",
      shortDescription: "11th century Gothic cathedral, UNESCO World Heritage Site",
      image: "cathedral.jpg"
    },
    {
          id: "city",
      title: "City of Wine",
      shortDescription: "An exhibition space in Bordeaux dedicated to the history and economy of the city, closely connected with this drink, as well as winemaking, wine trade and the culture of wine consumption in general.",
      image: "city.jpg"
    },
    {
      id: "matmut",
      title: "Matmut Atlantique.",
      shortDescription: "A football stadium in the city of Bordeaux, France. It is the home arena of the football club Bordeaux.",
      image: "matmut.jpg"
    },
    {
      id: "port",
      title: "Port of the Moon",
      shortDescription: " The established name of the bend of the Garonne, on the left bank of which is located the historical center of the city of Bordeaux (France). The name comes from the similarity of the bend of the river with the arc of a crescent moon.",
      image: "port.jpg"
    }
  ]
};

const services = {
  ru: {
    tours: [
      {
        title: "Винный тур по Бордо",
        address: "Отправление от Place de la Bourse",
        hours: "10:00-18:00 ежедневно",
        price: "€75 с человека",
        image: "wine_tour.jpg"
      },
      {
        title: "Исторический тур",
        address: "Отправление от Кафедрального собора",
        hours: "11:00-15:00 ежедневно",
        price: "€50 с человека",
        image: "history_tour.jpg"
      },
      {
        title: "Гастрономический тур",
        address: "Отправление от Grand Théâtre",
        hours: "12:00-16:00 по выходным",
        price: "€90 с человека",
        image: "food_tour.jpg"
      },
      {
        title: "Архитектурный тур",
        address: "Отправление от Porte Cailhau",
        hours: "14:00-17:00 по средам и субботам",
        price: "€60 с человека",
        image: "arch_tour.jpg"
      }
    ],
    restaurants: [
      {
        title: "Le Petit Commerce",
        address: "22 Rue Parlement Saint-Pierre",
        hours: "12:00-23:00 ежедневно",
        price: "€30-€50",
        image: "le_petit.jpg"
      },
      {
        title: "La Tupina",
        address: "6 Rue Porte de la Monnaie",
        hours: "12:00-14:30, 19:30-22:30",
        price: "€40-€70",
        image: "la_tupina.jpg"
      },
      {
        title: "Miles",
        address: "33 Rue du Cancera",
        hours: "19:00-23:00 (закрыт по воскресеньям)",
        price: "€50-€80",
        image: "miles.jpg"
      },
      {
        title: "Garopapilles",
        address: "62 Rue Abbé de l'Épée",
        hours: "12:00-14:00, 19:30-22:00",
        price: "€60-€100",
        image: "garopapilles.jpg"
      }
    ]
  },
  en: {
    tours: [
      {
        title: "Bordeaux Wine Tour",
        address: "Departure from Place de la Bourse",
        hours: "10:00-18:00 daily",
        price: "€75 per person",
        image: "wine_tour.jpg"
      },
      {
        title: "Historical Tour",
        address: "Departure from Cathedral",
        hours: "11:00-15:00 daily",
        price: "€50 per person",
        image: "history_tour.jpg"
      },
      {
        title: "Gastronomic Tour",
        address: "Departure from Grand Théâtre",
        hours: "12:00-16:00 on weekends",
        price: "€90 per person",
        image: "food_tour.jpg"
      },
      {
        title: "Architectural Tour",
        address: "Departure from Porte Cailhau",
        hours: "14:00-17:00 Wed & Sat",
        price: "€60 per person",
        image: "arch_tour.jpg"
      }
    ],
    restaurants: [
      {
        title: "Le Petit Commerce",
        address: "22 Rue Parlement Saint-Pierre",
        hours: "12:00-23:00 daily",
        price: "€30-€50",
        image: "le_petit.jpg"
      },
      {
        title: "La Tupina",
        address: "6 Rue Porte de la Monnaie",
        hours: "12:00-14:30, 19:30-22:30",
        price: "€40-€70",
        image: "la_tupina.jpg"
      },
      {
        title: "Miles",
        address: "33 Rue du Cancera",
        hours: "19:00-23:00 (closed Sun)",
        price: "€50-€80",
        image: "miles.jpg"
      },
      {
        title: "Garopapilles",
        address: "62 Rue Abbé de l'Épée",
        hours: "12:00-14:00, 19:30-22:00",
        price: "€60-€100",
        image: "garopapilles.jpg"
      }
    ]
  }
};

function App() {
  const [language, setLanguage] = useState('ru');
  const [activeTab, setActiveTab] = useState('news');
  const [activeModal, setActiveModal] = useState(null);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'ru' ? 'en' : 'ru');
  };


  const texts = {
    ru: {
      logo: "Бордо",
      navLinks: [
        { id: 'news', title: "Новости" },
        { id: 'about', title: "О городе" },
        { id: 'catalog', title: "Каталог достопримечательностей" },
        { id: 'contacts', title: "Контакты" },
        { id: 'services', title: "Услуги" }
      ],
      newsContent: {
        title: "Последние новости Бордо",
        articles: [
          "Бордоский винный фестиваль — 19–22 июня 2025 г.",
          "Новый музей открывает двери",
          "В Бордо автомобили, конфискованные во время родео, продаются «до суда»",
          "Бордо: Стадион «Матмют Атлантик» переходит под контроль метрополии",
          "Реконструкция исторического центра",
          "Прощай, облик 1970-х и «устаревание» университетской больницы Бордо благодаря плану стоимостью 1,4 млрд евро",
          "Июнь отлично подходит не только для посещения музеев и театров, но и для осмотра природных объектов. Для планирования досуга вы можете воспользоваться нашим каталогом достопримечательностей Бордо."
        ]
      },
      aboutContent: {
        title: "О Бордо",
        sections: [
        {
          title: "Местоположение",
          text: "Бордо — город и коммуна на юго-западе Франции, центр исторической области Аквитания и современного департамента Жиронда. Расположен на берегах Гаронны, известной своими традициями и успехами в области виноделия",
        },
        {
          title: "Климат",
          text: "Мягкий, умеренно тёплый, влажный. Зима мягкая, дождливая, лето солнечное и умеренно жаркое.",
        },
        {
          title: "Почвы",
          text: "Состоят в основном из гальки, известняка и глины, богаты минералами.",
        }
      ],
      facts: [
        "Население: ~250,000 человек",
        "Площадь: 49,36 км²",
        "Часовой пояс: CET (UTC+1)"
      ]
      },
      catalogContent: (
      <div className="catalog-grid">
        {landmarks.ru.map((landmark, index) => (
          <div key={index} className="landmark-card">
            <img src={require(`./assets/${landmark.image}`)} alt={landmark.title} />
            <h3>{landmark.title}</h3>
            <p>{landmark.shortDescription}</p>
          </div>
        ))}
      </div>
      ),
      contactsContent: (
      <div className="contacts-container">
        <h2>Наша команда</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={require('./assets/sklyarov.jpg')} alt="Скляров Максим" />
            <h3>Скляров Максим</h3>
            <p>Менеджер</p>
          </div>
          <div className="team-member">
            <img src={require('./assets/zhilina.jpg')} alt="Жилина Александра" />
            <h3>Жилина Александра</h3>
            <p>Дизайнер</p>
          </div>
          <div className="team-member">
            <img src={require('./assets/morozova.jpg')} alt="Морозова Алина" />
            <h3>Морозова Алина</h3>
            <p>Разработчик</p>
          </div>
        </div>
      </div>
    ),
    footerContacts: "Контактная информация: sfedu.ru",

    servicesContent: (
      <div className="services-container">
        <div className="services-section">
          <h2>Туры по Бордо</h2>
          <div className="services-grid">
            {services.ru.tours.map((tour, index) => (
              <div key={index} className="service-card">
                <img src={require(`./assets/${tour.image}`)} alt={tour.title} />
                <h3>{tour.title}</h3>
                <p><strong>Адрес:</strong> {tour.address}</p>
                <p><strong>Часы работы:</strong> {tour.hours}</p>
                <p><strong>Стоимость:</strong> {tour.price}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="services-section">
          <h2>Рестораны в Бордо</h2>
          <div className="services-grid">
            {services.ru.restaurants.map((restaurant, index) => (
              <div key={index} className="service-card">
                <img src={require(`./assets/${restaurant.image}`)} alt={restaurant.title} />
                <h3>{restaurant.title}</h3>
                <p><strong>Адрес:</strong> {restaurant.address}</p>
                <p><strong>Часы работы:</strong> {restaurant.hours}</p>
                <p><strong>Средний чек:</strong> {restaurant.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    
    tags: {
      news: ["события", "фестивали", "мероприятия"],
      about: ["история", "архитектура", "вино"],
      catalog: ["Площадь Биржи","Большой театр","Кафедральный собор", "Город вина", "Матмют Атлантик", "Порт Луны"],
      contacts: ["адрес", "email", "телефон"],
      services: [
    "винные туры", 
    "гастротуры", 
    "исторические экскурсии", 
    "мишленовские рестораны",
    "местная кухня",
    "авторские маршруты"] },
      bannerText: "Рекламное место",
      footer: "© LES TROIS BORDO by Sklyarov, Zhilina, Morozova"
    },
    en: {
      logo: "Bordeaux",
      navLinks: [
        { id: 'news', title: "News" },
        { id: 'about', title: "About" },
        { id: 'catalog', title: "Catalog of attractions" },
        { id: 'contacts', title: "Contacts" },
        { id: 'services', title: "Services" }
      ],
      newsContent: {
        title: "Latest Bordeaux News",
        articles: [
          "Bordeaux Wine Festival - June 19-22, 2025",
          "New Museum Opens Its Doors",
          "Bordeaux: Cars Confiscated During Rodeos Sold 'Before Trial'",
          "Bordeaux: Metropolitan Control of Matmut Atlantique Stadium",
          "Renovation of the Historic Center",
          "Farewell to the 1970s Look and the 'Obsoleteness' of the Bordeaux University Hospital Thanks to a €1.4 Billion Plan",
          "June is a great month for visiting museums and theaters, but also for exploring natural sites. Use our directory of Bordeaux attractions to plan your leisure time."
        ]
      },
      aboutContent: {
        title: "About Bordeaux",
        sections: [
        {
          title: "Location",
          text: "Bordeaux is a city and commune in southwestern France, the center of the historical region of Aquitaine and the modern department of Gironde. Situated on the banks of the Garonne, famous for its traditions and success in winemaking",
        },
        {
          title: "Climate",
          text: "Soft, moderately warm, humid. Winters are mild, rainy, summers are sunny and moderately hot.",
        },
        {
          title: "Soils",
          text: "Consists mainly of pebbles, limestone and clay, rich in minerals.",
        }
      ],
      facts: [
        "Population: ~250,000",
        "Area: 49.36 km²",
        "Time zone: CET (UTC+1)"
      ]
      },
      catalogContent: (
        <div className="catalog-grid">
        {landmarks.en.map((landmark, index) => (
          <div key={index} className="landmark-card">
            <img src={require(`./assets/${landmark.image}`)} alt={landmark.title} />
            <h3>{landmark.title}</h3>
            <p>{landmark.shortDescription}</p>
          </div>
        ))}
      </div>
      ),
      contactsContent: (
      <div className="contacts-container">
        <h2>Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={require('./assets/sklyarov.jpg')} alt="Maksim Sklyarov" />
            <h3>Maksim Sklyarov</h3>
            <p> Manager</p>
          </div>
          <div className="team-member">
            <img src={require('./assets/zhilina.jpg')} alt="Alexandra Zhilina" />
            <h3>Alexandra Zhilina</h3>
            <p>Designer</p>
          </div>
          <div className="team-member">
            <img src={require('./assets/morozova.jpg')} alt="Alina Morozova" />
            <h3>Alina Morozova</h3>
            <p>Developer</p>
          </div>
        </div>
      </div>
    ),
      servicesContent: (
      <div className="services-container">
        <div className="services-section">
          <h2>Bordeaux Tours</h2>
          <div className="services-grid">
            {services.en.tours.map((tour, index) => (
              <div key={index} className="service-card">
                <img src={require(`./assets/${tour.image}`)} alt={tour.title} />
                <h3>{tour.title}</h3>
                <p><strong>Address:</strong> {tour.address}</p>
                <p><strong>Hours:</strong> {tour.hours}</p>
                <p><strong>Price:</strong> {tour.price}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="services-section">
          <h2>Bordeaux Restaurants</h2>
          <div className="services-grid">
            {services.en.restaurants.map((restaurant, index) => (
              <div key={index} className="service-card">
                <img src={require(`./assets/${restaurant.image}`)} alt={restaurant.title} />
                <h3>{restaurant.title}</h3>
                <p><strong>Address:</strong> {restaurant.address}</p>
                <p><strong>Hours:</strong> {restaurant.hours}</p>
                <p><strong>Average bill:</strong> {restaurant.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
      tags: {
      news: ["events", "festivals", "announcements"],
      about: ["history", "architecture", "wine"],
      catalog: ["Place de la Bourse", "Grand Théâtre", "Bordeaux Cathedral", "City of Wine", "Matmut Atlantic", "Port of the Moon"],
      contacts: ["address", "email", "phone"],
      services: [ 
      "wine tours", 
      "gastronomic tours", 
      "historical excursions", 
      "michelin restaurants",
      "local cuisine",
      "signature routes"] },
      bannerText: "Advertisement space",
      footer: "© LES TROIS BORDO by Sklyarov, Zhilina, Morozova"
    }
  };

const renderContent = () => {
  const content = {
    news: (
      <div className="news-content">
        <h2>{texts[language].newsContent.title}</h2>
        <ul className="news-list">
          {texts[language].newsContent.articles.map((article, index) => (
            <li key={index}>{article}</li>
          ))}
        </ul>
      </div>
    ),
    about: (
      <div className="about-content">
        <h2>{texts[language].aboutContent.title}</h2>
        
        {texts[language].aboutContent.sections.map((section, index) => (
          <div key={index} className="about-section">
            <div className="about-text">
              <h3>{section.title}</h3>
              <p>{section.text}</p>
            </div>
            {section.image && (
              <div className="about-image">
                <img 
                  src={require(`./assets/${section.image}`)} 
                  alt={section.title} 
                />
              </div>
            )}
          </div>
        ))}

        <div className="about-facts">
          <h3>{language === 'ru' ? "Ключевые факты" : "Key Facts"}</h3>
          <ul>
            {texts[language].aboutContent.facts.map((fact, index) => (
              <li key={index}>{fact}</li>
            ))}
          </ul>
        </div>

        <div className="about-map">
          <iframe
          title="Bordeaux Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45230.11526538971!2d-0.612554!3d44.840440!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5527e8f751ca81%3A0x796386037b397a89!2sBordeaux%2C%20France!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{border:0}}
          allowFullScreen
          loading="lazy"></iframe>
        </div>
      </div>
    ),
      catalog: texts[language].catalogContent,
      contacts: texts[language].contactsContent,
      services: texts[language].servicesContent
    };

    return content[activeTab] || content.news;
  };

const tagModals = {
  events: {
    title: { ru: "Событие дня в Бордо", en: "Events of day in Bordeaux" },
    content: { ru: "Открылся Рынок Сент-Аман. В самом сердце района Кодеран этот органический рынок работает по субботам с 07:00 до 13:00 на площади Мучеников Сопротивления.", en: "Market is open Market Saint-Amand. In the heart of the Cauderan district, this organic market is open every Saturday from 7am to 1pm on the Place des Martyrs de la Resistance." },
    images: ["events1.jpg"]
  },
  festivals: {
    title: { ru: "Фестиваль в Бордо", en: "Bordeaux Festivals" },
    content: { ru: "Праздник Бордо в честь вина. На набережную в сердце города Мирового Достояния ЮНЕСКО приглашаются все любители вина, гастрономии, архитектуры и праздника.", en: "Bordeaux Wine Festival. All lovers of wine, gastronomy, architecture and festivities are invited to the waterfront in the heart of the UNESCO World Heritage city." },
    images: ["festival1.png"]
  },
  announcements: {
    title: { ru: "Мероприятия в Бордо", en: "Activities in Bordeaux" },
    content: { ru: "Медокский марафон начнётся в середине сентября", en: "The Medoc Marathon will start in mid-September" },
    images: ["activity1.jpg"]
  },
  history: {
    title: { ru: "История Бордо", en: "History of Bordeaux" },
    content: { ru: "Истоки Бордо уходят корнями в кельтскую эпоху. В I веке до н. э. территорию современного города заселило племя битуригов-вибисков, которые основали здесь свой административный центр — Бурдигалу. Переломным моментом в развитии города стало его вхождение в состав Аквитанского герцогства. Этот период ознаменовался масштабным строительством и становлением виноделия как ключевой отрасли экономики. С конца XIX до середины XX века Бордо неоднократно становился временной столицей Франции. В 1870, 1914 и 1940 годах французское правительство находило здесь убежище от наступающих германских войск.", en: "The origins of Bordeaux go back to the Celtic era. In the 1st century BC, the territory of the modern city was inhabited by the Bituriges-Vibisci tribe, who founded their administrative center here - Burdigala. A turning point in the development of the city was its incorporation into the Duchy of Aquitaine. This period was marked by large-scale construction and the establishment of winemaking as a key sector of the economy. From the end of the 19th to the middle of the 20th century, Bordeaux repeatedly became the temporary capital of France. In 1870, 1914 and 1940, the French government found refuge here from the advancing German troops." },
    images: ["history1.jpg", "history2.jpg", "history3.jpg"],
  },
  architecture: {
    title: { ru: "Архитектура", en: "Architecture" },
    content: { ru: "Бордо известен своей неоклассической архитектурой. Для неё характерны симметричные формы, высокие колонны, фасады с каменной резьбой. Окна расположены равномерно, а крыши обычно плоские или с небольшим уклоном.", en: "Bordeaux is known for its neoclassical architecture. It is characterized by symmetrical forms, tall columns, facades with stone carvings. Windows are evenly spaced, and roofs are usually flat or slightly sloped." },
    images: ["architecture1.JPG", "architecture2.jpg", "architecture3.jpg"]
  },
  wine: {
    title: { ru: "Виноделие", en: "Winemaking" },
    content: { ru: "Особенности вин Бордо связаны с использованием определённых сортов винограда, технологией производства и классификацией вин. Для красных вин Бордо традиционно используют купаж сортов. Белые вина Бордо также купажированные. В основном используют сорта Семильон и Совиньон Блан", en: "The characteristics of Bordeaux wines are related to the use of certain grape varieties, production technology and wine classification. For red Bordeaux wines, a blend of varieties is traditionally used. White Bordeaux wines are also blended. The varieties Semillon and Sauvignon Blanc are mainly used." },
    images: ["wine1.jpg", "wine2.jpg", "wine3.jpg"]
  },
  address: {
    title: { ru:"Адрес организации", en: "Organization address"},
    content: { ru: "Южный Федеральный Университет, Институт Истории и Международных отношений", en: "Southern Federal University, Institute of History and International Relations"},
    images: ["sfedu.jpg"]
  },
  email: {
    title: { ru:"Email адрес разработчиков", en: "Email address developer"},
    content: { ru:"Скляров Максим: maskliarov@sfedu.ru; Жилина Александра: azhilina@sfedu.ru; Морозова Алина:alimorozo@sfedu.ru", en: "Sklyarov Maxim: maskliarov@sfedu.ru; Zhilina Alexandra: azhilina@sfedu.ru; Morozova Alina: alimorozo@sfedu.ru" },
    images: []
  },
    phone: {
    title: { ru:"Номера телефонов разработчиков", en: "Developers phone numbers"},
    content: { ru:"Скляров Максим: 89604705677; Жилина Александра: 89515302663; Морозова Алина: 89381284626", en: "Sklyarov Maxim: 89604705677; Zhilina Alexandra: 89515302663; Morozova Alina: 89381284626" },
    images: []
  },
    // Для туров
  "винные туры": {
    title: { 
      ru: "Винные туры по Бордо", 
      en: "Wine Tours in Bordeaux" 
    },
    content: { 
      ru: "Популярные винные туры включают посещение виноделен Медока, Сент-Эмильона и Грав. Включают дегустацию 5-7 вин с объяснением технологий производства.", 
      en: "Popular wine tours include visits to Médoc, Saint-Émilion and Graves wineries. Include tasting of 5-7 wines with explanation of production technologies." 
    },
    images: ["wine_tour1.jpg"]
  },
  
  "гастротуры": {
    title: { 
      ru: "Гастрономические туры", 
      en: "Gastronomic Tours" 
    },
    content: { 
      ru: "Туры с дегустацией местных специалитетов: устриц Аркашона, фуа-гра, канеле и бордоских сыров. Включают посещение рынков и мастер-классы.", 
      en: "Tours with tasting of local specialties: Arcachon oysters, foie gras, canelés and Bordeaux cheeses. Include market visits and workshops." 
    },
    images: ["food_tour1.jpg"]
  },
  
  "исторические экскурсии": {
    title: { 
      ru: "Исторические экскурсии", 
      en: "Historical Excursions" 
    },
    content: { 
      ru: "Маршруты по средневековому Бордо с посещением Кафедрального собора, Ворот Кайо и квартала Сен-Пьер. Рассказ о римском периоде и Средневековье.", 
      en: "Routes through medieval Bordeaux with visits to the Cathedral, Porte Cailhau and Saint-Pierre district. Story about Roman period and Middle Ages." 
    },
    images: ["history_tour1.jpg"]
  },
  
  // Для ресторанов
  "мишленовские рестораны": {
    title: { 
      ru: "Рестораны с мишленовскими звездами", 
      en: "Michelin Star Restaurants" 
    },
    content: { 
      ru: "В Бордо 8 ресторанов отмечены гидом Мишлен. Мы сотрудничаем с 3 из них, предлагая бронирование столиков с эксклюзивными дегустационными меню.", 
      en: "Bordeaux has 8 Michelin-starred restaurants. We partner with 3 of them, offering table reservations with exclusive tasting menus." 
    },
    images: ["michelin1.jpg"]
  },
  
  "местная кухня": {
    title: { 
      ru: "Традиционная кухня Бордо", 
      en: "Bordeaux Traditional Cuisine" 
    },
    content: { 
      ru: "Рекомендуем попробовать: entrecôte à la bordelaise (стейк с винным соусом), устрицы с белым вином, утиную грудку с фигами.", 
      en: "We recommend trying: entrecôte à la bordelaise (steak with wine sauce), oysters with white wine, duck breast with figs." 
    },
    images: ["local_food1.jpg"]
  },
  
  "авторские маршруты": {
    title: { 
      ru: "Авторские гастрономические маршруты", 
      en: "Signature Gastronomic Routes" 
    },
    content: { 
      ru: "Эксклюзивные маршруты от наших сомелье: 'Бордо для гурманов', 'Тайные винные погреба', 'Десертный Бордо'.", 
      en: "Exclusive routes from our sommeliers: 'Bordeaux for Gourmets', 'Secret Wine Cellars', 'Dessert Bordeaux'." 
    },
    images: ["custom_tour1.jpg"]
  }
};

const landmarkModals = {
    "place-de-la-bourse": {
      title: {
        ru: "Площадь Биржи",
        en: "Place de la Bourse"
      },
      content: {
        ru: {
          address: "Place de la Bourse, 33000 Bordeaux, Франция",
          hours: "Круглосуточно",
          details: "Построена в 1749 году, зеркало воды перед площадью создает эффект бесконечности"
        },
        en: {
          address: "Place de la Bourse, 33000 Bordeaux, France",
          hours: "24/7",
          details: "Built in 1749, the water mirror creates an infinity effect"
        }
      },
      images: ["bourse1.jpg", "bourse2.jpg"]
    },
  "grand-theatre": {
    title: {
      ru: "Большой театр",
      en: "Grand Théâtre"
    },
    content: {
      ru: {
        address: "Place de la Comédie, 33000 Bordeaux, Франция",
        hours: "10:00–18:00",
        details: "Построен в 1780 году, шедевр неоклассической архитектуры"
      },
      en: {
        address: "Place de la Comédie, 33000 Bordeaux, France",
        hours: "10:00 AM–6:00 PM",
        details: "Built in 1780, a masterpiece of neoclassical architecture"
      }
    },
    images: ["theatre1.jpg", "theatre2.jpg"]
  },
  "cathedral": {
    title: {
      ru: "Кафедральный собор",
      en: "Bordeaux Cathedral"
    },
    content: {
      ru: {
        address: "Place Pey-Berland, 33000 Bordeaux, Франция",
        hours: "8:00–19:00",
        details: "Из-за большого количества перепланировок внутренний интерьер собора выглядит разнородным. Единство стиля наблюдается только в оформлении хора."
      },
      en: {
        address: "Place Pey-Berland, 33000 Bordeaux, France",
        hours: "8:00 AM–7:00 PM",
        details: "Due to the large number of redevelopments, the interior of the cathedral looks heterogeneous. Unity of style is observed only in the design of the choir."
      }
    },
    images: ["cathedral1.jpg", "cathedral2.jpg"]
  },
  "city": {
    title: {
      ru: "Город вина",
      en: "City of Wine"
    },
    content: {
      ru: {
        address: "134-150 Quai de Bacalan, 33300 Bordeaux, Франция",
        hours: "10:00–18:00",
        details: "Современный музейный комплекс, открытый в 2016 году. Включает в себя интерактивные экспозиции, дегустационные залы и смотровую площадку с панорамным видом на Бордо."
      },
      en: {
        address: "134-150 Quai de Bacalan, 33300 Bordeaux, France",
        hours: "10:00 AM–6:00 PM",
        details: "Modern museum complex opened in 2016. Includes interactive exhibitions, tasting rooms and an observation deck with panoramic views of Bordeaux."
      }
    },
    images: ["city1.jpg", "city2.jpg"]
  },
  "matmut": {
    title: {
      ru: "Матмют Атлантик",
      en: "Matmut Atlantique"
    },
    content: {
      ru: {
        address: "Cours Jules Ladoumegue, 33300 Bordeaux, Франция",
        hours: "По расписанию мероприятий",
        details: "Ультрасовременный стадион, открытый в 2015 году. Вмещает 42 115 зрителей. Помимо футбольных матчей здесь проводятся концерты и другие крупные мероприятия."
      },
      en: {
        address: "Cours Jules Ladoumegue, 33300 Bordeaux, France",
        hours: "According to event schedule",
        details: "State-of-the-art stadium opened in 2015. Capacity of 42,115 spectators. In addition to football matches, concerts and other major events are held here."
      }
    },
    images: ["matmut1.jpg", "matmut2.jpg"]
  },
  "port": {
    title: {
      ru: "Порт Луны",
      en: "Port of the Moon"
    },
    content: {
      ru: {
        address: "Набережная реки Гаронна, 33000 Bordeaux, Франция",
        hours: "Круглосуточно",
        details: "Исторический центр Бордо, включенный в список Всемирного наследия ЮНЕСКО. Название происходит от серповидного изгиба реки, напоминающего полумесяц."
      },
      en: {
        address: "Garonne River Embankment, 33000 Bordeaux, France",
        hours: "24/7",
        details: "Historic center of Bordeaux, listed as a UNESCO World Heritage Site. The name comes from the crescent-shaped bend of the river."
      }
    },
    images: ["port1.jpg", "port2.jpg", "port3.jpg"]
  }
  };

const openTagModal = (tagId) => {
  const tagMapping = {
    'история': 'history',
    'архитектура': 'architecture',
    'вино': 'wine',
    'события': 'events',
    'фестивали': 'festivals',
    'мероприятия': 'announcements',
    'Площадь Биржи': 'place-de-la-bourse',
    'Большой театр': 'grand-theatre',
    'Кафедральный собор': 'cathedral',
    'Place de la Bourse': 'place-de-la-bourse',
    'Grand Théâtre': 'grand-theatre',
    'Bordeaux Cathedral': 'cathedral',
    'Город вина': 'city',
    'Матмют Атлантик': 'matmut',
    'Порт Луны': 'port',
    'City of Wine': 'city',
    'Matmut Atlantique': 'matmut',
    'Port of the Moon': 'port',
    'адрес': 'address',
    'email': 'email',
    'телефон': 'phone',
    'винные туры': 'винные туры',
    'гастротуры': 'гастротуры',
    'исторические экскурсии': 'исторические экскурсии',
    'мишленовские рестораны': 'мишленовские рестораны',
    'местная кухня': 'местная кухня',
    'авторские маршруты': 'авторские маршруты',
    'wine tours': 'винные туры',
    'gastrotours': 'гастротуры',
    'historical excursions': 'исторические экскурсии',
    'michelin restaurants': 'мишленовские рестораны',
    'local cuisine': 'местная кухня',
    'signature routes': 'авторские маршруты'
  };

const modalId = tagMapping[tagId] || tagId;
  setActiveModal(modalId);
};

const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo-container">
          <img 
            src={logo} 
            alt={texts[language].logo} 
            className="logo-image"
          />
          <span className="logo-text">{texts[language].logo}</span>
        </div>
        <button onClick={toggleLanguage} className="language-toggle">
          {language === 'ru' ? 'EN' : 'RU'}
        </button>
      </header>

      <main className="main">
        <section className="section">
          <nav className="nav-links">
            <ul>
              {texts[language].navLinks.map((link) => (
                <li 
                  key={link.id}
                  className={activeTab === link.id ? 'active' : ''}
                  onClick={() => setActiveTab(link.id)}
                >
                  {link.title}
                </li>
              ))}
            </ul>
          </nav>
          <div className="banner">{texts[language].bannerText}</div>
        </section>

        <article className="article">
          {renderContent()}
        </article>

<aside className="aside">
  <div className="tags">
    <h3>{language === 'ru' ? "Теги" : "Tags"}</h3>
    <div className="tag-cloud">
      {texts[language].tags[activeTab].map((tag, index) => (
        tag && (
          <button
            key={index}
            className="tag-button"
            onClick={() => openTagModal(tag)}
          >
            {tag}
          </button>
        )
      ))}
    </div>
  </div>
  <div className="banner">{texts[language].bannerText}</div>
</aside>
      </main>

{activeModal && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <button className="modal-close" onClick={closeModal}>×</button>
      
      {/* Проверяем, является ли активная модалка достопримечательностью */}
      {landmarkModals[activeModal] ? (
        <>
          <h2>{landmarkModals[activeModal].title[language]}</h2>
          <div className="modal-body">
            <p><strong>{language === 'ru' ? "Адрес:" : "Address:"}</strong> {landmarkModals[activeModal].content[language].address}</p>
            <p><strong>{language === 'ru' ? "Часы работы:" : "Hours:"}</strong> {landmarkModals[activeModal].content[language].hours}</p>
            <p>{landmarkModals[activeModal].content[language].details}</p>
            <div className="modal-gallery">
              {landmarkModals[activeModal].images.map((img, index) => (
                <img 
                  key={index}
                  src={require(`./assets/${img}`)}
                  alt={`${activeModal} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <>
          {}
          <h2>{tagModals[activeModal]?.title[language]}</h2>
          <div className="modal-body">
            <p>{tagModals[activeModal]?.content[language]}</p>
            <div className="modal-gallery">
              {tagModals[activeModal]?.images.map((img, index) => (
                <img 
                  key={index}
                  src={require(`./assets/${img}`)}
                  alt={`${activeModal} ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  </div>
)}

      <footer className="footer">
  <p>{texts[language].footerContacts}</p>
  <p>{texts[language].footer}</p>
</footer>
    </div>
  );
}

export default App;