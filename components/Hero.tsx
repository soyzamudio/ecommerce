import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="container mx-auto h-[635px] z-30">
      <div className="col-span-1 flex flex-col justify-center items-end gap-y-12 h-full bg-none md:bg-hero-background bg-no-repeat">
        <div className="flex flex-col text-right">
          <h1 className="text-4xl md:text-7xl">Cuida tu piel</h1>
          <h1 className="text-4xl md:text-7xl">Sin Preocupaciones.</h1>
          <h1 className="text-4xl md:text-7xl">Dispensary+</h1>
        </div>
        <Button
          label="Mas Información"
          href="/dispensary-plus"
          rotation={-45}
        />
      </div>
    </section>
  );
};

export default Hero;
