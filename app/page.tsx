import Button from "@components/Button";
import Hero from "@components/Hero";
import Popular from "@components/Popular";
import Image from "next/image";

const Home = async () => {
  return (
    <>
      <section className="relative hero">
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
      <section className="w-full bg-sage h-[500px]"></section>
    </>
  );
};

export default Home;
