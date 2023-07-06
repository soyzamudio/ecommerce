"use client";

import client from "@lib/client";

const RegisterPage = () => {
  const createAccountAndLogin = async (obj: any) => {
    const { data } = await client.createAccount(obj);
    if (data.createAccount?.email) {
      const { data } = await client.login({
        email: obj.email,
        password: obj.password,
      });
      // if (data.loginAccount) {
      //   localStorage.setItem("token", data.lo.token);
      //   localStorage.setItem("user", JSON.stringify(data.loginAccount.user));
      //   window.location.href = "/";
      // }
    }
  };

  const handleRegister = async (event: any) => {
    event.preventDefault();
    const [firstName, lastName] = event.target.name.value.split(" ");
    let obj: any;
    if (lastName) {
      obj = {
        firstName: firstName,
        lastName: lastName,
        email: event.target.email.value,
        password: event.target.password.value,
      };
    } else {
      obj = {
        firstName: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };
    }

    createAccountAndLogin(obj);
  };

  return (
    <div>
      <form id="form" onSubmit={handleRegister}>
        <label htmlFor="name">name:</label>
        <input type="text" id="name" name="name" />
        <label htmlFor="email">email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">password:</label>
        <input type="password" id="password" name="password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterPage;
