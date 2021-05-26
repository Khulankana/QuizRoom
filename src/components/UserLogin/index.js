import React from "react";
import "../../pages/App/style.css";
import { Link } from "react-router-dom";

export default function UserLogin() {
  return (
    <div>
      <section className="home-registration py-2">
        <div className="container">
          <h2>Тавтай морилно уу!</h2>
          <div className="bottom-line"></div>
          <div className="card" style={{ width: "500px", margin: "0 auto" }}>
            <form>
              <br></br>
              <label for="name">
                <b>Нэвтрэх нэр:</b>
              </label>
              <br />
              <input
                type="text"
                placeholder="Нэвтрэх нэрээ энд оруулна уу...."
                name="name"
                required
              />
              <br />
              <label for="psw">
                <b>Нууц үг:</b>
              </label>
              <br />
              <input
                type="password"
                placeholder="Нууц үгээ энд оруулна уу...."
                name="psw"
                required
              />
              <Link
                style={{
                  width: "20rem",
                  border: "none",
                  color: "#1B456B",
                  margin: "2rem auto",
                  fontSize: "1rem",
                  backgroundColor: "#fff",
                  paddingLeft: "6.5rem",
                }}
                to="/email"
              >
                Нэвтрэх нэр, нууц үгээ мартсан ...
              </Link>
              <br></br>
              <br></br>
              <Link to="/login">
                <input
                  className="btn btn-register "
                  style={{ marginLeft: "1rem" }}
                  type="submit"
                  value=" Нэвтрэх "
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
