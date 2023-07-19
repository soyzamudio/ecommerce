import swell from "swell-js";

// Initialize the client first
swell.init("coracosmetics", "pk_ZUb02oMLQ1vp6XgXTUUUUJWeieKWy4xg", {
  useCamelCase: true,
});

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await swell.account.login(email, password);
}

export async function logout() {
  return await swell.account.logout();
}

export async function getCurrentUser() {
  return await swell.account.get();
}

export async function register({
  email,
  firstName,
  lastName,
  password,
}: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) {
  console.log('register', { email, firstName, lastName, password });
  return await swell.account.create({
    email,
    firstName,
    lastName,
    password,
    emailOptin: true,
    metadata: {
      favorites: [],
    },
  });
}
