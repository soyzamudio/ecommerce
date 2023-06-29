import Link from "next/link";
import Input from "./Input";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  const newsletterSubmit = () => {
    console.log("submit");
  };

  return (
    <footer>
      <section className="h-[150px] flex items-center justify-center font-fancy text-2xl leading-none">
        <Link href="/">
          <div>ciclo</div>
          <div>dispensary</div>
        </Link>
      </section>
      <section className="bg-footer py-8 pb-28">
        <div className="grid grid-cols-5 container mx-auto">
          <div className="col-span-3 grid grid-cols-3">
            <div className="col-span-1">
              <h2 className="font-fancy text-lg mb-4">Compañía</h2>
              <div className="flex flex-col gap-y-2">
                <div>Acerca de nosotros</div>
                <div className="font-fancy">Dispensary+</div>
                <div>Tarjeta de regalo</div>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="font-fancy text-lg mb-4">Ayuda</h2>
              <div className="flex flex-col gap-y-2">
                <div>Preguntas frecuentes</div>
                <div>Envios y devoluciones</div>
                <div>Facturar pedido</div>
              </div>
            </div>
            <div className="col-span-1">
              <h2 className="font-fancy text-lg mb-4">Contacto</h2>
              <div className="flex flex-col gap-y-2">
                <div>Contactanos</div>
                <div>hola@ciclodispensary.com</div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <div className="flex flex-col items-end justify-center gap-y-4">
              <h2 className="font-fancy text-xl">
                Suscribete para recibir actualizaciones y ofertas
              </h2>
              <Input placeholder="Correo electrónico" type="email">
                <ArrowRight size={20} />
              </Input>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
