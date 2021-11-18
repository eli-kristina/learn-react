export const setUser = (user) => {
  sessionStorage.setItem("user", user);
};

export const getUser = () => {
  return sessionStorage.getItem("user") || "{}";
};

export const removeUser = () => {
  return sessionStorage.removeItem("user");
};