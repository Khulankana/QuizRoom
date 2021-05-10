import React from "react";

import Navbar from "../../components/Navbar/withoutRegisterNav";
import Testlist from "../../components/TestList";
import Footer from "../../components/Footer";

export default function YourTests() {
  return (
    <div>
      <Navbar />
      <Testlist />
      <Footer />
    </div>
  );
}
