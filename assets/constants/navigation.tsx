const customers = {
  name: "Customers",
  href: "/dashboard/customers",
};

const invoices = {
  name: "Invoices",
  href: "/dashboard/invoices",
};

export const home = { name: "Home", href: "/" };
export const dashboard = {
  name: "Dashboard",
  href: "/dashboard",
  customers,
  invoices,
};

export const login = { name: "Login", href: "/login" };
export const register = { name: "Register", href: "/register" };

const pages = {
  home,
  dashboard,
  login,
  register,
};

export default pages;
