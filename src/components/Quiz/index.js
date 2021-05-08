import React from 'react';
import '../../pages/App/style.css';

export default function Quiz() {
      return(
            <div className="py-2 answer-quiz">
            <div className="container">
                  <h2>Тестийн нэр</h2>
                  <div className="bottom-line"></div>
                  <div className="card" style={{padding:"3rem 1.5rem 3rem 2.5rem"}}>
                        <label for="answer"><b>Тест 1. Асуулт ???</b></label><br/>
                        <div className="grid-container">
                              <div className="item" style={{marginBottom: "1rem", paddingBottom: "1rem"}}>
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
                                    <label for="answer"><b>Тест 2. Асуулт ???</b></label><br/>
                        <div className="grid-container">
                              <div className="item" style={{marginBottom: "1rem", paddingBottom: "1rem"}}>
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
                                    <a href="result.html"><button type="submit" style={{marginLeft: "28rem", backgroundColor: "#c72727", color: "#fff", padding: "0.5rem 1rem 0.5rem 1rem", borderRadius: "15px", border: "#c72727 solid 1px"
                              }}>Дуусгах</button></a>
                              </div>
                  </div>
            </div>
      );
}
