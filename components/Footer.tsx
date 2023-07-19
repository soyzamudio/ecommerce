import Link from "next/link";
import NewsletterEmail from "./NewsletterEmail";

const Footer = () => {
  return (
    <footer>
      <section className="h-[150px] flex items-center justify-center font-fancy text-2xl leading-none">
        <Link href="/" className="hover:text-black">
          <div>ciclo</div>
          <div>dispensary</div>
        </Link>
      </section>
      <section className="bg-footer py-8 pb-28">
        <div className="grid grid-cols-5 container mx-auto gap-y-8">
          <div className="col-span-5 md:col-span-3 grid grid-cols-2 md:grid-cols-3 order-2 md:order-1 gap-y-6">
            <div className="col-span-1">
              <h2 className="font-fancy text-lg mb-4">Compañía</h2>
              <div className="flex flex-col gap-y-2">
                <Link href="/nosotros">Acerca de nosotros</Link>
                <Link href="/dispensary-plus" className="font-fancy">
                  Dispensary+
                </Link>
                <Link href="/">Tarjeta de regalo</Link>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="font-fancy text-lg mb-4">Ayuda</h2>
              <div className="flex flex-col gap-y-2">
                <Link href="/">Preguntas frecuentes</Link>
                <Link href="/">Envios y devoluciones</Link>
                <Link href="/">Facturar pedido</Link>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="font-fancy text-lg mb-4">Contacto</h2>
              <div className="flex flex-col gap-y-2">
                <Link href="/">Contactanos</Link>
                <div>hola@ciclodispensary.com</div>
              </div>
            </div>
          </div>
          <div className="col-span-5 md:col-span-2 order-1 md:order-2">
            <div className="flex flex-col items-start md:items-end justify-center gap-y-4">
              <h2 className="font-fancy text-xl">
                Suscribete para recibir actualizaciones y ofertas
              </h2>
              <NewsletterEmail />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
