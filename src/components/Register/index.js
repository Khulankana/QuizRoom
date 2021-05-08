import React from 'react';
import {useHistory} from 'react-router-dom';
import '../../pages/App/style.css';

export default function Register() {
      let history = useHistory();

      function handleClick() {
        history.push("/");
      }

      return(
            <div>
                   <section className="home-registration py-2">
                        <div className="container">
                              <h2>Хэрэглэгчийн бүртгэл</h2>
                              <div className="bottom-line"></div>
                              <div className="card">
                                    <div className="grid-container">
                                          <div className="item">
                                                <label for="email"><b>Нэвтрэх нэр:</b></label><br />
                                                <input type="text" placeholder="Нэвтрэх нэрээ энд оруулна уу...." name="email" required /><br />
                                                <label for="email"><b>Имэйл хаяг:</b></label>
                                                <br />
                                                <input type="email" placeholder="Имэйл хаягаа энд оруулна уу...." name="email" required />
                                          </div>
                                          <div className="item">
                                                <label for="psw"><b>Нууц үг:</b></label><br />
                                                <input type="password" placeholder="Нууц үгээ энд оруулна уу...." name="psw" required /><br />
                                                <label for="psw"><b>Нууц үг баталгаажуулах:</b></label><br />
                                                <input type="password" placeholder="Нууц үгээ давтан оруулна уу...." name="psw" required />
                                          </div>
                                    </div>
                              <button type="submit" onClick={handleClick} className="btn btn-register">Бүртгүүлэх</button>
                              </div>
                         </div>
                  </section>
                  <br />
                  <br />
                  <br />
            </div>
      );
}