import { MegaMenu } from "@lib/interfaces";

export const MENU_PRODUCTS_ITEMS: MegaMenu = {
    columns: [
      {
        items: [
          { title: 'Todos los productos', href: '/productos' },
          { title: 'Nuevos productos', href: '/productos?tag=nuevos' },
          { title: 'Más vendidos', href: '/productos?tag=populares' },
          // { title: 'Sets', href: '/productos?category=sets' },
          // { title: 'Tarjetas de Regalo', href: '/productos?category=gift-cards' },
          { title: 'Ofertas', href: '/productos?tags=descuento' },
        ],
      },
      {
        header: 'Tipo de Piel',
        items: [
          {
            title: 'Piel Grasa',
            description: 'Piel brillante, poros abiertos, propensa a acné',
            href: '/productos?category=piel-grasa',
          },
          {
            title: 'Piel Seca',
            description: 'Piel opaca, tirante, con tendencia a descamarse',
            href: '/productos?category=piel-seca',
          },
          {
            title: 'Piel Mixta',
            description: 'Piel grasa en la zona T, seca en el resto del rostro',
            href: '/productos?category=piel-mixta',
          },
        ],
      },
      {
        header: 'Tipo de Producto',
        items: [
          { title: 'Limpiadores', href: '/productos?category=limpiadores' },
          { title: 'Exfoliantes', href: '/productos?category=exfoliantes' },
          { title: 'Tónicos', href: '/productos?category=tonicos' },
          { title: 'Sueros', href: '/productos?category=sueros' },
          { title: 'Mascarillas', href: '/productos?category=mascarillas' },
          { title: 'Protección Solar', href: '/productos?category=protector-solar' },
          // { title: 'Hidratantes', href: '/productos?category=hidratantes' },
        ],
      },
    ],
  };
  