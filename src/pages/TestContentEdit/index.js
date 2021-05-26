import React from "react";

import Logout from "../../components/Navbar/logout";
import TestForm from "../../components/TestForm/edit";
import Footer from "../../components/Footer";

export default function TestContentEdit() {
  return (
    <div>
      <Logout />
      <TestForm />
      <Footer />
    </div>
  );
}
