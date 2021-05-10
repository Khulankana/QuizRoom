import React from "react";
import { Link } from "react-router-dom";
import "../../pages/App/style.css";

export default function Showcase() {
  return (
    <div className="home-content">
      <header className="showcase">
        <div className="container">
          <div className="showcase-container">
            <div className="showcase-content">
              <h1>Манай апп-н тухай</h1>
              <p>
                Та гэр бүл, найз нөхдийнхөө хүрээнд хөгжөөнт тэмцээн зохион
                байгуулах болон богино хэмжээний сургалт, лекц гэх мэт бүхий л
                сургалтад ашиглаж болох өөрийн хүссэн тестээ үүсгэх боломжтой.
              </p>
              <br />
              <Link
                style={{ marginLeft: "1rem" }}
                className="btn btn-primary"
                to="/test_lists"
              >
                Эхлэх
              </Link>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
