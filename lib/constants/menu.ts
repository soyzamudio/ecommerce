import { MegaMenu } from "@lib/interfaces";

export const MENU_PRODUCTS_ITEMS: MegaMenu = {
    columns: [
      {
        items: [
          { title: 'Todos los productos', href: '/productos' },
          { title: 'Nuevos productos', href: '/productos?tags=nuevos' },
          { title: 'Más vendidos', href: '/productos?tags=populares' },
          { title: 'Sets', href: '/productos?cat=sets' },
          { title: 'Tarjetas de Regalo', href: '/productos?cat=tarjetas-de-regalo' },
          { title: 'Ofertas', href: '/productos?tags=descuento' },
        ],
      },
      {
        header: 'Tipo de Piel',
        items: [
          {
            title: 'Piel Grasa',
            description: 'Piel brillante, poros abiertos, propensa a acné',
            href: '/productos?pieles=grasa',
          },
          {
            title: 'Piel Seca',
            description: 'Piel opaca, tirante, con tendencia a descamarse',
            href: '/productos?pieles=seca',
          },
          {
            title: 'Piel Mixta',
            description: 'Piel grasa en la zona T, seca en el resto del rostro',
            href: '/productos?pieles=mixta',
          },
          {
            title: 'Piel Sensible',
            description: 'Piel que se irrita fácilmente',
            href: '/productos?pieles=sensible',
          },
          {
            title: 'Rutina Express',
            description:
              'Limpieza, tonificación, serum, hidratación, protección solar',
            href: '/productos?tags=rutina-express',
          },
        ],
      },
      {
        header: 'Tipo de Producto',
        items: [
          { title: 'Limpiadores', href: '/productos?cat=limpiadores' },
          { title: 'Exfoliantes', href: '/productos?cat=exfoliantes' },
          { title: 'Tónicos', href: '/productos?cat=tonicos' },
          { title: 'Cremas', href: '/productos?cat=cremas' },
          { title: 'Sueros', href: '/productos?cat=sueros' },
          { title: 'Mascarillas', href: '/productos?cat=mascarillas' },
          { title: 'Protección Solar', href: '/productos?cat=proteccion-solar' },
          { title: 'Hidratantes', href: '/productos?cat=hidratantes' },
        ],
      },
    ],
  };
  