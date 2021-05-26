import React from "react";

import Logout from "../../components/Navbar/logout";
import Showcase from "../../components/Showcase";
import Categories from "../../components/Categories";
import Footer from "../../components/Footer";

export default function Login() {
  return (
    <div>
      <Logout />
      <Showcase />
      <Categories />
      <Footer />
    </div>
  );
}
