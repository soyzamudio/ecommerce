import Test from "@components/Test";

const TestPage = () => {
  return (
    <section className="relative pattern--green py-12">
      <div className="relative container mx-auto flex flex-col gap-y-8 text-white items-center justify-center z-10">
        <Test />
      </div>
      <div className="gradient absolute bottom-0 bg-gradient-to-bl from-sage via-transparent to-sage h-full w-full z-0"></div>
      <div className="gradient absolute bottom-0 bg-gradient-to-br from-transparent via-sage to-transparent opacity-90 h-full w-full z-0"></div>
    </section>
  );
};

export default TestPage;
