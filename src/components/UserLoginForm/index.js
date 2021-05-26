import React, { useContext, useState, useEffect } from "react";
import "../../pages/App/style.css";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserLoginContext } from "../../contexts/UserLoginContext";

export default function UserLoginForm() {
  const ctx = useContext(UserLoginContext);

  const [error, setError] = useState("");
  const [loginName, setLoginName] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(loginName, password);
    ctx.login(loginName, password);

    setLoginName("");
    setPassword("");

    // if (ctx.state.error) {
    //   console.error(ctx.state.error);
    // } else {
    //   console.log(
    //     ">>>> User in state: " +
    //       ctx.state.user.firstName +
    //       " " +
    //       ctx.state.user.lastName
    //   );
    // }

    // let path = `/login`;
    // history.push(path);
  };

  useEffect(() => {
    if (ctx.state.error) {
      console.error(ctx.state.error);
    } else {
      let path = `/login`;
      history.push(path);
    }
  });

  return (
    <div>
      <section className="home-registration py-2">
        <div className="container">
          <h2>Тавтай морилно уу!</h2>
          <div className="bottom-line"></div>
          <div className="card" style={{ width: "500px", margin: "0 auto" }}>
            <div style={{ color: "red" }}>{error}</div>
            {ctx.state.error && (
              <div style={{ color: "red" }}>{ctx.state.error}</div>
            )}
            <form onSubmit={handleSubmit}>
              <br></br>
              <label htmlFor="name">
                <b>Нэвтрэх нэр:</b>
              </label>
              <br />
              <input
                type="text"
                placeholder="Нэвтрэх нэрээ энд оруулна уу...."
                name="name"
                value={loginName}
                onChange={(e) => setLoginName(e.target.value)}
                required
              />
              <br />
              <label htmlFor="psw">
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

              <input
                className="btn btn-register "
                style={{ marginLeft: "1rem" }}
                type="submit"
                value=" Нэвтрэх "
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
