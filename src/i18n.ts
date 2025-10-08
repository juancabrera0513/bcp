import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        drives: 'Drives',
        contact: 'Contact',
        language: 'Language',
        english: 'English',
        spanish: 'Español',
      },
      brand: {
        short: 'BcP',
        welcomeTitle: 'Welcome to Fundación Bendecidos Con Propósitos!',
        heroLead:
          'Fundación Bendecidos Con Propósitos is a small non-profit initiative that aims to support different Bateyes throughout the San Pedro de Macorís area. We conduct two main drives yearly with the goal of serving and reaching those who are underrepresented and often forgotten.',
        cta: 'Make a difference today',
        drivesIntro: 'Our foundation carries out two main drives every year:',
      },
      drives: {
        title: 'Our Drives',
        intro:
          'Every year we organize two major donation campaigns focused on education and food for families in need.',
        school: {
          title: 'School Supply Drive — August',
          desc:
            'Students are provided with backpacks, notebooks, and other essential school supplies.',
          stat: 'We were able to collect 170 backpacks for our drive this past September!',
          tag2023: 'School Delivery 2023',
        },
        christmas: {
          title: 'Christmas Food Baskets — December',
          desc:
            'Families are provided with essential meal items for a Christmas dinner! These include a protein source, carbohydrates, and other essentials.',
        },
        galleryTitle: 'Gallery',
        teamCaption: 'Part of our dedicated team during deliveries.',
      },
      contact: {
        title: 'Contact',
        lead:
          'For more information or details on how you can make a difference today, feel free to contact us:',
        email: 'BpB.bendecidos@gmail.com',
        thanks: 'We are very grateful for your kindness and continued support.',
      },
      buttons: {
        explore: 'Explore Gallery',
        viewMore: 'View More',
      },
      galleryFilters: {
        all: 'All',
        school: 'School',
        christmas: 'Christmas',
      },
      footer: {
        rights: 'All rights reserved.',
      },

      /** Captions for each individual image **/
      img: {
        christmas1: {
          title: 'Christmas Food Basket',
          p1: 'Families are provided with essential meal items for a Christmas dinner!',
          p2: 'Meal items include a protein source, carbohydrates, and other essentials.',
        },
        christmas2: {
          title: 'Christmas Celebration',
          p1: 'Each basket is prepared with care and love to bring joy to local families.',
          p2: 'Our volunteers personally deliver the baskets to ensure they reach those most in need.',
        },
        school1: {
          title: 'School Supply Drive',
          p1: 'Students receive backpacks, notebooks, and other materials to start the year right.',
          p2: 'Education is the foundation for opportunity and hope.',
        },
        school2: {
          title: 'School Drive 2023',
          p1: 'We successfully collected 170 school supply kits last September!',
          p2: 'Thanks to our donors, more children can attend school prepared.',
        },
        school3: {
          title: 'Community Support',
          p1: 'Parents and volunteers work hand in hand to support the students.',
          p2: 'Together, we make a lasting difference in our communities.',
        },
        team: {
          title: 'Our Volunteers',
          p1: 'The heart of our foundation — dedicated people serving with purpose.',
          p2: 'We are grateful for everyone who gives their time and heart to the cause.',
        },
      },
    },
  },

  es: {
    translation: {
      nav: {
        home: 'Inicio',
        drives: 'Campañas',
        contact: 'Contacto',
        language: 'Idioma',
        english: 'English',
        spanish: 'Español',
      },
      brand: {
        short: 'BcP',
        welcomeTitle: '¡Bienvenidos a la Fundación Bendecidos Con Propósitos!',
        heroLead:
          'La Fundación Bendecidos Con Propósitos es una pequeña iniciativa sin fines de lucro que apoya a diferentes Bateyes en el área de San Pedro de Macorís. Llevamos a cabo dos campañas principales cada año con el objetivo de servir y ayudar a quienes están subrepresentados y a menudo olvidados.',
        cta: 'Marca la diferencia hoy',
        drivesIntro: 'Nuestra fundación realiza dos campañas principales cada año:',
      },
      drives: {
        title: 'Nuestras Campañas',
        intro:
          'Cada año organizamos dos campañas de donación principales, enfocadas en educación y alimentación para familias necesitadas.',
        school: {
          title: 'Colecta de Útiles Escolares — Agosto',
          desc:
            'A los estudiantes se les proporcionan mochilas, cuadernos y otros útiles escolares esenciales.',
          stat: '¡Pudimos recolectar 170 mochilas para nuestra campaña del pasado septiembre!',
          tag2023: 'Entrega Escolar 2023',
        },
        christmas: {
          title: 'Cestas de Alimentos Navideños — Diciembre',
          desc:
            '¡A las familias se les proporcionan alimentos esenciales para una cena de Navidad! Las comidas incluyen una fuente de proteínas, carbohidratos y otros básicos.',
        },
        galleryTitle: 'Galería',
        teamCaption: 'Parte de nuestro equipo durante las entregas.',
      },
      contact: {
        title: 'Contacto',
        lead:
          'Para más información o detalles sobre cómo puedes marcar la diferencia hoy, escríbenos a:',
        email: 'BpB.bendecidos@gmail.com',
        thanks: 'Estamos muy agradecidos por tu apoyo y solidaridad.',
      },
      buttons: {
        explore: 'Ver Galería',
        viewMore: 'Ver Más',
      },
      galleryFilters: {
        all: 'Todo',
        school: 'Escolar',
        christmas: 'Navidad',
      },
      footer: {
        rights: 'Todos los derechos reservados.',
      },

      /** Descripciones individuales de las imágenes **/
      img: {
        christmas1: {
          title: 'Cesta de Alimentos Navideños',
          p1: '¡A las familias se les proporcionan alimentos esenciales para una cena de Navidad!',
          p2: 'Las comidas incluyen una fuente de proteínas, carbohidratos y otros productos básicos.',
        },
        christmas2: {
          title: 'Celebración Navideña',
          p1: 'Cada cesta se prepara con cuidado y amor para llevar alegría a las familias locales.',
          p2: 'Nuestros voluntarios entregan las cestas personalmente a quienes más lo necesitan.',
        },
        school1: {
          title: 'Colecta Escolar',
          p1: 'Los estudiantes reciben mochilas, cuadernos y materiales para iniciar bien el año.',
          p2: 'La educación es la base de las oportunidades y la esperanza.',
        },
        school2: {
          title: 'Entrega Escolar 2023',
          p1: '¡Recolectamos 170 kits escolares en la campaña del pasado septiembre!',
          p2: 'Gracias a nuestros donantes, más niños pueden asistir preparados a clases.',
        },
        school3: {
          title: 'Apoyo Comunitario',
          p1: 'Padres y voluntarios colaboran juntos para apoyar a los estudiantes.',
          p2: 'Juntos, creamos un impacto positivo en nuestras comunidades.',
        },
        team: {
          title: 'Nuestros Voluntarios',
          p1: 'El corazón de la fundación: personas dedicadas que sirven con propósito.',
          p2: 'Agradecemos a todos los que entregan su tiempo y corazón a la causa.',
        },
      },
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'es',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
