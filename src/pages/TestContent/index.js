import React from "react";

import Logout from "../../components/Navbar/logout";
import TestContent from "../../components/TestContent";
import Footer from "../../components/Footer";

export default function TestContentPage() {
  return (
    <div>
      <Logout />
      <TestContent />
      <Footer />
    </div>
  );
}
