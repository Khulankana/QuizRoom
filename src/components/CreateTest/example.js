import React from 'react';
import '../../pages/App/style.css';

export default function CreateTest() {
      return (
            <div className="quiz-create py-2">
                  <div className="container">
                        <h2>Тест үүсгэх</h2>
                        <div className="bottom-line"></div>
                        <div className="card">
                              <div className="quiz-create-form p-2">
                                    <form action="/action_page.php">
                                          <label for="quistion"><b> Тестийн ерөнхий гарчгийг оруулна уу.</b></label><br />
                                          <textarea type="text" placeholder="Гарчиг...." name="email" required></textarea>
                                          <br />

                                          <div className="grid">
                                                <div className="item">
                                                      <label for="nuutslal"><b>Тестийн нууцлалыг сонгоно уу.</b></label><br />
                                                      <select id="test-nuutslal" name="test-nuutslal">
                                                            <option value="private"> Private</option>
                                                            <option value="public"> Public</option>
                                                      </select>
                                                </div>

                                                <div class="item">
                                                <label for="angilal"><b>Тестийн ангилал сонгоно уу.</b></label><br/>
                                                <select id="test-angilal" name="test-angilal">
                                                      <option value="tanin-medehui"> Танин мэдэхүй</option>
                                                      <option value="programchlal"> Програмчлал</option>
                                                      <option value="english"> Англи хэл</option>
                                                      <option value="tech"> Технологи</option>
                                                      <option value="science"> Шинжлэх ухаан</option>
                                                      <option value="art"> Соёл урлаг</option>
                                                </select>
                                          </div>
                                          </div>
                                          <br />

                                          <h1 style={{textAlign:"center", marginTop:"1.5rem", fontWeight: "300", fontSize: "1.5rem"}}>Тест 1</h1>
                                          <div className="bottom-line-sub" ></div>

                                          <label for="quistion"><b>Тестийн асуултаа оруулна уу.</b></label><br />
                                          <textarea type="text" placeholder="Асуулт...." name="email" required></textarea>
                                          <br />

                                          <label for="answer"><b>Тестийн хариултуудыг энд бичиж өгөх бөгөөд хамгийн багадаа 2 хариултыг оруулж өгнө. Хариултуудаа бичиж дууссаны дараа зөв хариултаа сонгоно уу. </b></label><br />
                                          <div className="grid-container">
                                                <div className="item">
                                                      <input type="radio" id="answer" name="answer" value="answer" />
                                                      <label for="answer">
                                                            <input type="text" type="text" placeholder="Хариулт...." name="email" required />
                                                      </label><br />
                                                      <input type="radio" id="answer" name="answer" value="answer" />
                                                      <label for="answer">
                                                            <input type="text" type="text" placeholder="Хариулт...." name="email" required />
                                                      </label>
                                                </div>
                                                <div className="item">
                                                      <input type="radio" id="answer" name="answer" value="answer" />
                                                      <label for="answer">
                                                            <input type="text" type="text" placeholder="Хариулт...." name="email" required />
                                                      </label><br />
                                                      <input type="radio" id="answer" name="answer" value="answer" />
                                                      <label for="answer">
                                                            <input type="text" type="text" placeholder="Хариулт...." name="email" required />
                                                      </label>
                                                </div>
                                          </div>

                                          <div className="grid">
                                                <div className="item">
                                                      <label for="time"><b>Уг тестийн хугацааг сонгоно уу.</b></label><br />
                                                      <select id="test-time" name="test-time">
                                                            <option value="30"> 30 секунд</option>
                                                            <option value="45"> 45 секунд</option>
                                                            <option value="60"> 60 секунд</option>
                                                            <option value="90"> 90 секунд</option>
                                                            <option value="120"> 120 секунд</option>
                                                      </select>
                                                </div>
                                                <div className="item">
                                                      <label for="onoo"><b>Уг тестийн оноог сонгоно уу.</b></label><br />
                                                      <select id="test-onoo" name="test-onoo">
                                                            <option value="1"> 1 оноо</option>
                                                            <option value="2"> 2 оноо</option>
                                                            <option value="3"> 3 оноо</option>
                                                            <option value="4"> 4 оноо</option>
                                                            <option value="5"> 5 оноо</option>
                                                            <option value="6"> 6 оноо</option>
                                                            <option value="7"> 7 оноо</option>
                                                            <option value="8"> 8 оноо</option>
                                                            <option value="9"> 9 оноо</option>
                                                            <option value="10"> 10 оноо</option>
                                                      </select>
                                                </div>
                                          </div>

                                          <br/>
                                          <br/>

                                          <ul >
                                                <li><a className="next btn-next" style={{marginLeft:"30rem",backgroundColor: "#fff", color: "#c72727", border: "#c72727 solid 1px", borderRadius: "15px", padding:"0.8rem" }} >Дараагийн тест үүсгэх</a></li>
                                                <li><a className="finish btn-finish"  style={{marginLeft:"1.5rem",backgroundColor: "#c72727", color: "#fff", borderRadius: "15px", padding:"0.8rem" }}>Тест үүсгэж дуусгах</a></li>
                                          </ul>
                                    </form>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
