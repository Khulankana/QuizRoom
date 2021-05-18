import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import "../../pages/App/style.css";
import { UserContext } from "../../contexts/UserContext";

export default function NewUserForm() {
  const { dispatch } = useContext(UserContext);

  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (password !== passwordConfirm) {
      setError("Нууц үгээ зөв давтана уу!");
      return;
    }

    console.log(name, email, password);
    dispatch({
      type: "ADD_USER",
      user: {
        name,
        email,
        password,
      },
    });
    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirm("");

    let path = `/login`;
    history.push(path);
  };

  return (
    <div>
      <section className="home-registration py-2">
        <div className="container">
          <h2>Хэрэглэгчийн бүртгэл</h2>
          <div className="bottom-line"></div>
          <div className="card" style={{ width: "500px", margin: "0 auto" }}>
            <div style={{ color: "red" }}>{error}</div>
            <form onSubmit={handleSubmit}>
              <div className="item">
                <label for="name">
                  <b>Нэвтрэх нэр:</b>
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Нэвтрэх нэрээ энд оруулна уу...."
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <br />
                <label for="email">
                  <b>Имэйл хаяг:</b>
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Имэйл хаягаа энд оруулна уу...."
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="item">
                <label for="psw">
                  <b>Нууц үг:</b>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Нууц үгээ энд оруулна уу...."
                  name="psw"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <br />
                <label for="psw">
                  <b>Нууц үг давтах :</b>
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Нууц үгээ давтан оруулна уу...."
                  name="psw"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                />
              </div>
              <input
                className="btn btn-register "
                style={{ marginLeft: "1rem" }}
                type="submit"
                value=" Бүртгүүлэх"
              />
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
