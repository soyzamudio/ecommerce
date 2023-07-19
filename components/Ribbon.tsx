import Link from "next/link";

const Ribbon = () => {
  return (
    <Link
      href="/productos?tags=descuento"
      className="bg-sage text-white font-semibold text-sm py-2 text-center hover:text-gray-100 -z-40 hidden md:block"
    >
      <div className="container mx-auto">
        🔥 🔥 🔥 ¡Haz click y aprovecha nuestras ofertas! Descuentos increíbles
        en tus productos de cuidado facial favoritos. 🔥 🔥 🔥
      </div>
    </Link>
  );
};

export default Ribbon;
