"use client";

import { questions } from "@lib/constants/test";
import { getResults } from "@lib/utils";
import { useEffect, useState } from "react";
import NewsletterEmail from "./NewsletterEmail";
import { getProducts } from "@lib/products";
import ProductCard from "./ProductCard";
import { get } from "http";
import Link from "next/link";

const Test = () => {
  const test = questions;
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showNewsletter, setShowNewsletter] = useState(true);
  const [result, setResult] = useState<string>("");
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [answers, setAnswers] = useState({
    a: 0,
    b: 0,
    c: 0,
  });

  function moveQuestion(index: number) {
    if (index === test.length) {
      showResults();
    } else {
      document.getElementById(index.toString())?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      setCurrentQuestionIndex(index);
    }
  }

  function showResults() {
    const result = getResults(answers);
    setResult(result);
    getIdealProducts();
  }

  async function getIdealProducts() {
    const cat = result.replace(/\s+/g, "-").toLowerCase();
    const products = await getProducts({ category: cat });
    setRecommendations(() => [...products.results]);
  }

  return (
    <div className="w-full flex flex-col gap-y-12 h-[500px] items-center justify-center transition-all">
      {!result ? (
        <div className="flex flex-nowrap whitespace-nowrap w-full overflow-hidden">
          {test.map((question, key) => (
            <div key={key} className="flex flex-[1_0_100%] flex-col gap-y-8">
              <div className="flex flex-col gap-y-8 justify-center">
                <h1 className="text-3xl" id={key.toString()}>
                  {question.question}
                </h1>
                <div className="flex flex-col gap-y-2">
                  {question.options.map((option, key) => (
                    <button
                      key={key}
                      className="bg-white rounded-full shadow-sm py-3 px-6 tex-left flex-1 min-w-[600px] text-black flex items-start hover:bg-gray-100 hover:shadow transition-all"
                      onClick={() => {
                        setCurrentAnswer(option.value);
                        setAnswers((a: any) => {
                          return {
                            ...a,
                            [currentAnswer]: a[currentAnswer] + 1,
                          };
                        });
                        moveQuestion(currentQuestionIndex + 1);
                      }}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex">
          {showNewsletter ? (
            <div className="flex flex-col px-96 gap-y-4">
              <h1>¡Terminaste!</h1>
              <div className="flex">
                <p>
                  ¡Compártenos tu correo para enviarte recomendaciones
                  personalizadas y un 15% de descuento en tu primera compra!
                </p>
              </div>
              <div className="flex text-black">
                <NewsletterEmail />
              </div>
              <button
                className="text-sm text-gray-100 text-left underline"
                onClick={() => {
                  setShowNewsletter(false);
                }}
              >
                No quiero un descuento, solo muestrame mis resultados.
              </button>
            </div>
          ) : (
            <div className="flex flex-col px-96 gap-y-4">
              <h1>Tienes {result}</h1>
              <Link
                className="text-1xl text-white underline hover:text-gray-100"
                href={`/productos?category=${result
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                Te recomendamos estos productos
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Test;
