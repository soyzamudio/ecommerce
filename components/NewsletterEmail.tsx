"use client";

import { ArrowRight } from "lucide-react";
import Input from "./Input";

const NewsletterEmail = () => {
  function handleSubscription(e: any, value: string) {
    e.preventDefault();
    console.log(value);
  }

  return (
    <Input
      placeholder="Correo electrónico"
      type="email"
      handleSubmit={handleSubscription}
    >
      <ArrowRight size={18} />
    </Input>
  );
};

export default NewsletterEmail;
