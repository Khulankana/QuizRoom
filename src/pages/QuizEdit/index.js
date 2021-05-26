import React from "react";

import Logout from "../../components/Navbar/logout";
import QuizForm from "../../components/ContentWithTest/edit";
import Footer from "../../components/Footer";

export default function QuizEdit() {
  return (
    <div>
      <Logout />
      <QuizForm />
      <Footer />
    </div>
  );
}
