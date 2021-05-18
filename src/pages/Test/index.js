import React from "react";

import Logout from "../../components/Navbar/logout";
import TestContentWithTest from "../../components/TestContentWithTest";
import Footer from "../../components/Footer";

export default function AnswerQuiz() {
  return (
    <div>
      <Logout />
      <TestContentWithTest />
      <Footer />
    </div>
  );
}
