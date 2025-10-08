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
        welcomeTitle: 'Welcome to BcP Project!',
        heroLead:
          'Bendecidos Con Propositos Project is a small initiative that aims to support different Bateyes throughout the San Pedro de Macoris area. We conduct 2 main drives on a yearly basis; our goal is to serve and seek out those who are underrepresented and often forgotten.',
        cta: 'Make a difference today',
        drivesIntro: 'BcP conducts two main drives yearly',
      },
      drives: {
        title: 'Our Drives',
        school: {
          title: 'School Supply Drive — August',
          desc:
            'Students are provided with backpacks, notebooks and other school supplies.',
          stat: 'We were able to collect 170 for our drive this past September!',
          tag2023: 'School Delivery 2023',
        },
        christmas: {
          title: 'Christmas Baskets — December',
          desc:
            'Families are provided with essential meal items for a Christmas dinner! Meal items include a protein source, carbs, and more.',
        },
        galleryTitle: 'Gallery',
        teamCaption: 'Part of the team gathered.',
      },
      contact: {
        title: 'Contact',
        lead:
          'For more information and details on how you can make a difference today, feel free to email us:',
        email: 'BpB.bendecidos@gmail.com',
        thanks: 'We are so grateful for you and for your support.',
      },
      buttons: {
        explore: 'Explore Gallery',
        viewMore: 'View more',
      },
      galleryFilters: {
        all: 'All',
        school: 'School',
        christmas: 'Christmas',
      },
      footer: { rights: 'All rights reserved.' },
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
        welcomeTitle: '¡Bienvenidos a Proyecto BcP!',
        heroLead:
          'BCP Project es una pequeña iniciativa sin fines de lucro que apoya a diferentes Bateyes en el área de San Pedro de Macorís. Llevamos a cabo 2 campañas principales al año; nuestro objetivo es servir y buscar a quienes están subrepresentados y a menudo olvidados.',
        cta: 'Marca la diferencia hoy',
        drivesIntro: 'BcP realiza dos campañas principales al año',
      },
      drives: {
        title: 'Nuestras Campañas',
        school: {
          title: 'Colecta de Útiles Escolares — Agosto',
          desc:
            'A los estudiantes se les proporcionan mochilas, cuadernos y otros útiles escolares.',
          stat: '¡Pudimos recolectar 170 para nuestra campaña el pasado mes de septiembre!',
          tag2023: 'Entrega Escolar 2023',
        },
        christmas: {
          title: 'Cestas de Navidad — Diciembre',
          desc:
            '¡A las familias se les proporcionan alimentos esenciales para una cena de Navidad! Las comidas incluyen una fuente de proteínas, carbohidratos, etc.',
        },
        galleryTitle: 'Galería',
        teamCaption: 'Parte del equipo reunido.',
      },
      contact: {
        title: 'Contacto',
        lead:
          'Para más información y detalles sobre cómo marcar la diferencia hoy, escríbenos a:',
        email: 'BpB.bendecidos@gmail.com',
        thanks: 'Estamos muy agradecidos por ustedes y por su apoyo.',
      },
      buttons: {
        explore: 'Ver Galería',
        viewMore: 'Ver más',
      },
      galleryFilters: {
        all: 'Todo',
        school: 'Escolar',
        christmas: 'Navidad',
      },
      footer: { rights: 'Todos los derechos reservados.' },
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
