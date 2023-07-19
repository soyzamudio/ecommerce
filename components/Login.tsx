"use client";

import { useState } from "react";
import Google from "./icons/Google";
import { Facebook } from "lucide-react";
import { login } from "@lib/account";

const Login = ({ cb }: { cb: any }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: any) {
    e.preventDefault();
    const res = await login({ email, password });
    console.log(res);
    cb();
  }

  return (
    <div className="w-full flex flex-col px-12 pt-8 pb-4 gap-y-2">
      <div className="flex flex-col gap-y-2 text-center mb-8">
        <h1>Guardamos la salud de tu piel</h1>
        <p className="text-sm uppercase text-gray-500">
          Registrate y recibe actualizaciones y ofertas.
        </p>
      </div>
      <form className="flex flex-col gap-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email">Correo electronico</label>
          <input
            className="px-4 py-2 border rounded-sm active:outline-none focus:outline-none"
            name="email"
            id="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="password">Contraseña</label>
          <input
            className="px-4 py-2 border rounded-sm active:outline-none focus:outline-none"
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="py-2 px-4 text-sm uppercase bg-sage text-white rounded shadow-sm hover:shadow"
          onClick={handleSubmit}
        >
          Entrar
        </button>
      </form>
      <div className="flex justify-between gap-x-2">
        <button className="py-2 px-4 border rounded w-full flex items-center justify-center hover:bg-gray-50 shadow-sm hover:shadow">
          <Google />
        </button>
        <button className="py-2 px-4 border rounded w-full flex items-center justify-center hover:bg-gray-50 shadow-sm hover:shadow">
          <Facebook />
        </button>
      </div>
    </div>
  );
};

export default Login;
