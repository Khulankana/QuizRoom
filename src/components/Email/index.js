import React from "react";
import "../../pages/App/style.css";
import { Link } from "react-router-dom";

export default function Email() {
  return (
    <div>
      <section className="home-registration py-2">
        <div className="container">
          <h2>!</h2>
          <div className="bottom-line"></div>
          <div
            className="card"
            style={{ width: "500px", margin: "0 auto", height: "350px" }}
          >
            <form>
              <br></br>
              <label for="name">
                <b>Имэйл хаяг:</b>
              </label>
              <br />
              <input
                type="email"
                placeholder="Имэйл хаягаа энд оруулна уу...."
                name="email"
                required
              />
              <br />

              <Link to="/login">
                <input
                  className="btn btn-register "
                  style={{ marginLeft: "1rem" }}
                  type="submit"
                  value=" Код илгээх"
                />
              </Link>
            </form>
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
}
