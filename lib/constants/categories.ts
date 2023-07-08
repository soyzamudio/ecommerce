import { CategoryTree } from "@lib/interfaces";

export const categoryTree: CategoryTree[] = [
  {
    header: 'Tipo de Producto',
    items: [
        {
            label: 'Limpiadores',
            value: 'limpiadores',
        },
        {
            label: 'Exfoliantes',
            value: 'exfoliantes',
        },

        {
            label: 'Sueros',
            value: 'sueros',
        },
        {
            label: 'Mascarillas',
            value: 'mascarillas',
        },
        {
            label: 'Protección Solar',
            value: 'protector-solar',
        },
        {
            label: 'Aceites Faciales',
            value: 'aceites-faciales',
        },
        {
            label: 'Tónicos',
            value: 'tonicos',
        },
    ],
  },
  {
    header: 'Tipo de Piel',
    items: [
        {
            label: 'Piel Grasa',
            value: 'piel-grasa',
        },
        {
            label: 'Piel Seca',
            value: 'piel-seca',
        },
        {
            label: 'Piel Mixta',
            value: 'piel-mixta',
        },
    ],
  },
  {
    header: 'Momento de Uso',
    items: [
        {
            label: '1º: Limpieza',
            value: 'limpiadores',
        },
        {
            label: '2º: Hidratación',
            value: 'hidratantes',
        },
        {
            label: '3º: Humectación',
            value: 'humectacion',
        },
        {
            label: '4º: Protección Solar',
            value: 'protector-solar',
        },
    ],
  }
];

export const categoryShortDescription: { [key: string]: string } = {
  limpiadores: 'Nuestros Limpiadores Faciales son esenciales para mantener una piel saludable y radiante. Formulados para diferentes tipos de piel, estos limpiadores eliminan eficazmente las impurezas y el exceso de grasa, dejando la piel fresca y preparada para los siguientes pasos de tu rutina de cuidado de la piel.',
  exfoliantes: 'Nuestros Exfoliantes Faciales son clave para una piel radiante y saludable. Diseñados para eliminar suavemente las células muertas de la piel, nuestros exfoliantes revelan una tez más suave, más brillante y de aspecto más joven.',
  sueros: 'Nuestro Suero Revitalizante es un imprescindible para cualquier rutina de cuidado de la piel, formulado para proporcionar una hidratación intensa y mejorar la textura y el tono de la piel. Este suero penetra profundamente para revitalizar la piel cansada, dejándola con un aspecto fresco y juvenil.',
  mascarillas: 'Nuestras Mascarillas Faciales son el tratamiento perfecto para tu piel, proporcionando una nutrición intensa y beneficios específicos según tus necesidades. Desde hidratación profunda hasta limpieza de poros, nuestras mascarillas faciales te ayudarán a lograr una piel saludable y radiante.',
  'protector-solar': 'Nuestro Protector Solar Facial es tu aliado perfecto para proteger tu piel de los daños del sol. Con una fórmula ligera y de rápida absorción, ofrece protección de amplio espectro contra los rayos UVA y UVB, manteniendo tu piel saludable y preveniendo el envejecimiento prematuro.',
  'aceites-faciales': 'Nuestros Aceites Faciales son una adición lujosa a cualquier rutina de cuidado de la piel. Formulados para nutrir e hidratar, estos aceites penetran profundamente para suavizar, revitalizar y dar un brillo saludable a tu piel.',
  tonicos: 'Nuestros Tónicos Faciales son el paso perfecto después de la limpieza para equilibrar y refrescar tu piel. Estos tónicos eliminan cualquier residuo restante, preparando tu piel para los tratamientos posteriores y dejándola con una sensación de frescura y limpieza.',
  'piel-grasa': 'Controla el brillo y equilibra tu piel con nuestros productos especialmente diseñados para la piel grasa. Experimenta una piel más suave y menos grasa con cada uso.',
  'piel-seca': 'Descubre el alivio y la hidratación intensiva con nuestros productos para el cuidado de la piel seca. Diseñados para nutrir y reparar, devuelven la vitalidad a tu piel, dejándola suave y radiante.',
  'piel-mixta': 'Para aquellos con piel mixta, encontrar el equilibrio perfecto en su rutina de cuidado de la piel puede ser un desafío. Nuestros productos están diseñados para hidratar las áreas secas y controlar el brillo en las zonas grasas, proporcionando un cutis equilibrado y radiante.',
  humectacion: 'Nuestros productos de humectación son esenciales para mantener una piel saludable y radiante. Formulados para diferentes tipos de piel, estos productos hidratan profundamente, dejando la piel suave y flexible.',
  default: 'Descubre la gama completa de nuestros productos de cuidado facial, diseñados para nutrir, proteger y mejorar tu piel. Desde limpiadores y tónicos hasta sueros y protectores solares, tenemos todo lo que necesitas para una piel saludable y radiante'
};

export const categoryTitle: { [key: string]: string } = {
  limpiadores: 'Limpiadores',
  exfoliantes: 'Exfoliantes',
  sueros: 'Sueros',
  mascarillas: 'Mascarillas',
  'protector-solar': 'Protector Solar',
  'aceites-faciales': 'Aceites Faciales',
  tonicos: 'Tónicos',
  humectacion: 'Humectación',
  'piel-grasa': 'Piel Grasa',
  'piel-seca': 'Piel Seca',
  'piel-mixta': 'Piel Mixta',
};


export const categorySEOText: { [key: string]: string } = {
  limpiadores: `
    <p>
    Bienvenido a nuestra categoría de 
    <a
      class="font-bold underline text-gray-700"
      href="/productos?category=limpiadores"
    >
      Limpiadores Faciales
    </a>
    . Aquí encontrarás una variedad de productos diseñados específicamente
    para diferentes tipos de piel.
  </p>

  <p>
    Para aquellos con piel grasa, nuestro 
    <a
      class="font-bold underline text-gray-700"
      href="/detalles/limpiador-facial-piel-grasa"
    >
      Limpiador Facial para Piel Grasa
    </a> 
    es una excelente opción. Este producto es uno de nuestros limpiadores
    faciales para piel grasa más populares, y ha sido especialmente
    formulado para ayudar a controlar el exceso de sebo sin resecar la
    piel.
  </p>

  <p>
    Si tienes piel mixta, te recomendamos nuestro 
    <a
      class="font-bold underline text-gray-700"
      href="/detalles/limpiador-facial-piel-mixta"
    >
      Limpiador Facial para Piel Mixta
    </a>
    . Este limpiador facial ha sido diseñado para equilibrar las áreas
    grasas y secas de tu piel, proporcionando una limpieza suave pero
    efectiva.
  </p>

  <p>
    Para aquellos con piel seca, nuestro 
    <a
      class="font-bold underline text-gray-700"
      href="/detalles/limpiador-facial-piel-seca"
    >
      Limpiador Facial para Piel Seca
    </a> 
    es la elección perfecta. Este limpiador facial proporciona una
    limpieza profunda sin eliminar los aceites naturales de la piel,
    dejándola suave y nutrida.
  </p>

  <p>
    Además, muchos de nuestros limpiadores faciales contienen ácido
    salicílico, un ingrediente conocido por su capacidad para penetrar en
    los poros y disolver el exceso de grasa. Esto puede ser especialmente
    útil para aquellos que luchan contra los brotes de acné.
  </p>

  <p>
    Explora nuestra gama completa de limpiadores faciales y encuentra el
    producto perfecto para tu tipo de piel.
  </p>
    `,
  sueros: `
  <p>Bienvenido a nuestra categoría de <a class="font-bold underline text-gray-700" href="/productos?category=sueros">Sueros Faciales</a>. Aquí encontrarás productos de alta calidad diseñados para revitalizar y mejorar tu piel.</p>
  
  <p>Nuestro <a class="font-bold underline text-gray-700" href="/detalles/suero-revitalizante/">Suero Revitalizante</a> es uno de los favoritos entre nuestros clientes. Este suero facial ha sido formulado para proporcionar una hidratación intensa, ayudando a revitalizar la piel y darle un aspecto fresco y juvenil.</p>
  
  <p>Los sueros faciales son una parte esencial de cualquier rutina de cuidado de la piel. Estos productos están diseñados para proporcionar a tu piel una dosis concentrada de ingredientes activos, que pueden ayudar a mejorar la textura y el tono de tu piel.</p>
  
  <p>Para obtener los mejores resultados, recomendamos usar nuestro suero en combinación con nuestros <a class="font-bold underline text-gray-700" href="/categoria/limpiadores-faciales">Limpiadores Faciales</a> y <a class="font-bold underline text-gray-700" href="/productos?category=aceites-faciales">Aceites Faciales</a>. Por ejemplo, puedes comenzar tu rutina con nuestro <a class="font-bold underline text-gray-700" href="/detalles/limpiador-piel-mixta">Limpiador Facial para Piel Mixta</a>, seguido de nuestro Suero Revitalizante, y terminar con nuestro <a href="/detalles/aceite-facial-piel-mixta">Aceite Facial para Piel Mixta</a> para una hidratación adicional.</p>
  
  <p>Además, no olvides proteger tu piel del sol con nuestro <a class="font-bold underline text-gray-700" href="/detalles/protector-facial-spf-50">Protector Solar SPF 50</a>. Este producto es esencial para proteger tu piel de los dañinos rayos UV, que pueden causar envejecimiento prematuro y daño en la piel.</p>
  
  <p>Explora nuestra gama completa de sueros faciales y encuentra el producto perfecto para tu rutina de cuidado de la piel.</p>
  `,
  tonicos: `
  <p>Bienvenido a nuestra categoría de <a class="font-bold underline text-gray-700" href="/productos?category=tonicos">Tónicos Faciales</a>. Aquí encontrarás productos de alta calidad diseñados para tonificar y refrescar tu piel.</p>
  
  <p>Nuestro <a class="font-bold underline text-gray-700" href="/detalles/tonico-de-agua-micelar">Tónico de Agua Micelar</a> es uno de los favoritos entre nuestros clientes. Este tónico facial ha sido formulado para limpiar, tonificar y refrescar la piel, dejándola lista para los siguientes pasos de tu rutina de cuidado de la piel.</p>
  
  <p>Los tónicos faciales son una parte esencial de cualquier rutina de cuidado de la piel. Estos productos están diseñados para eliminar cualquier residuo que quede después de la limpieza, equilibrar el pH de tu piel y prepararla para los productos de cuidado de la piel que se aplicarán a continuación.</p>
  
  <p>Para obtener los mejores resultados, recomendamos usar nuestro tónico en combinación con nuestros <a class="font-bold underline text-gray-700" href="/productos?category=limpiadores">Limpiadores Faciales</a> y <a class="font-bold underline text-gray-700" href="/productos?categoy=sueros">Sueros Faciales</a>. Por ejemplo, puedes comenzar tu rutina con nuestro <a class="font-bold underline text-gray-700" href="/detalles/limpiador-piel-mixta">Limpiador Facial para Piel Mixta</a>, seguido de nuestro <a class="font-bold underline text-gray-700" href="/detalles/tonico-de-agua-micelar">Tónico de Agua Micelar</a>, y terminar con nuestro <a class="font-bold underline text-gray-700" href="/detalles/suero-revitalizante/">Suero Revitalizante</a> para una hidratación intensa.</p>
  
  <p>Además, no olvides proteger tu piel del sol con nuestro <a class="font-bold underline text-gray-700" href="/detalles/protector-facial-spf-50">Protector Solar SPF 50</a>. Este producto es esencial para proteger tu piel de los dañinos rayos UV, que pueden causar envejecimiento prematuro y daño en la piel.</p>
  
  <p>Explora nuestra gama completa de tónicos faciales y encuentra el producto perfecto para tu rutina de cuidado de la piel.</p>
  `,
};
