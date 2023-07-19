"use client";

import { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Auth = ({ cb }: { cb: any }) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>
      {isLogin ? <Login cb={cb} /> : <Register cb={cb} />}
      {isLogin ? (
        <div className="justify-center gap-x-2 px-12 pt-0 pb-8">
          <p>
            Aún no tienes cuenta?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => setIsLogin(false)}
            >
              Registrate
            </span>
          </p>
        </div>
      ) : (
        <div className="justify-center gap-x-2">
          <p>
            Ya tienes cuenta?{" "}
            <span
              className="font-bold cursor-pointer"
              onClick={() => setIsLogin(true)}
            >
              Inicia sesión
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Auth;
