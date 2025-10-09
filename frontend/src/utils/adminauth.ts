export const saveToken = (token: string) => {
  localStorage.setItem("token", token);
  const payload = JSON.parse(atob(token.split(".")[1]));
  localStorage.setItem("isAdmin", payload.isAdmin);
};

export const getToken = () => localStorage.getItem("token");

export const isAdmin = () => localStorage.getItem("isAdmin") === "true";

export const logout = () => localStorage.clear();
