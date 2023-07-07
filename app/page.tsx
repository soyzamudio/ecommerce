import Button from "@components/Button";
import Hero from "@components/Hero";
import Popular from "@components/Popular";
import { SKIN_TYPES } from "@lib/constants/global";
import Image from "next/image";
import Link from "next/link";

const Home = async () => {
  return (
    <>
      <section className="relative pattern--white">
        <div className="z-10 relative">
          <Hero />
        </div>
        <div className="gradient absolute bottom-0 bg-gradient-to-bl from-off-white via-transparent to-off-white h-full w-full z-0"></div>
        <div className="gradient absolute bottom-0 bg-gradient-to-br from-transparent via-off-white to-transparent opacity-90 h-full w-full z-0"></div>
      </section>

      <Popular />

      {/* Diferentes */}
      <section className="h-[400px] md:h-[500px] flex items-center justify-center">
        <div className="container mx-auto grid grid-cols-2 gap-x-32">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <h1>¿Que nos hace diferentes?</h1>
              <p>
                Nuestra misión es empoderarte para que abraces tu belleza única
                y te expreses con confianza. Ya seas un aficionado del cuidado
                de la piel, o alguien en busca de un momento de mimo personal.
              </p>
            </div>
            <Button label="Ver Productos" href="/productos" rotation={-45} />
          </div>
          <div className="hidden md:col-span-1 md:flex items-center justify-end object-contain">
            <div className="relative h-[350px] w-full md:w-[550px]">
              <Image
                className="rounded-4xl"
                src="/images/img-1.jpg"
                fill
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="relative pattern--green h-[500px]">
        <div className="gradient absolute bottom-0 bg-gradient-to-bl from-sage via-transparent to-sage h-full w-full z-0"></div>
        <div className="gradient absolute bottom-0 bg-gradient-to-br from-transparent via-sage to-transparent opacity-90 h-full w-full z-0"></div>
      </section>

      <section className="flex items-center justify-center w-full py-12 md:py-24">
        <div className="container mx-auto flex flex-col gap-y-12">
          <div className="flex justify-center items-center">
            <h1 className="text-4xl md:text-5xl">Tipos de Piel</h1>
          </div>
          <div className="flex gap-x-8 w-full overflow-auto justify-start md:justify-evenly">
            {SKIN_TYPES.map((type, key) => (
              <Link
                href={type.url}
                key={key}
                className="flex flex-col w-[240px] min-w-[240px] items-center gap-y-2"
              >
                <div className="relative object-contain h-[300px] w-full rounded-lg aspect-auto">
                  <Image
                    src={"https://placehold.co/600x400.png"}
                    fill
                    className="object-cover rounded-3xl"
                    alt="product_iamge"
                  />
                </div>
                <h1 className="text-2xl">{type.label}</h1>
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center">
            <Button label="Ver todos" href="/productos" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
