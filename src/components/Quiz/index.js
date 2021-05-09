import React,{useState} from 'react';
import '../../pages/App/style.css';
import {Link} from 'react-router-dom';
import { Alert, CustomDialog, useDialog } from 'react-st-modal';
import Choice from '../../assets/quiz/test-multiple-choice-questions.png';
import YesNo from '../../assets/quiz/yes-or-no.jpg';


function CustomDialogContent() {
      const dialog = useDialog();
    
      const [value, setValue] = useState();
    
      return (
            <div className="form-popup" style={{textAlign:"center"}}>
                  <form  className="form-container">  
                        <h2 style={{textTransform:"uppercase", fontWeight: "400", fontSize:"1.2rem"}}>Тестийн төрлийг сонгоно уу</h2>
                        <div className="bottom-line"></div>

                        <div className="grid-row-same">
                              <div>
                                    <button 
                                          onClick={() => {
                                                dialog.close(value);
                                          }}>
                                          <img src={Choice} alt="Choice" />
                                    </button>
                                </div>
                              <div>
                              <button 
                                          onClick={() => {
                                                dialog.close(value);
                                          }}>
                                            <img src={YesNo} alt="YesNo" />
                                    </button>
                           
                              </div>
                        </div>
                   </form>
          </div>
      )};


export default function Quiz() {
      return (
            <div className="quiz-create py-2">
                  <div className="container-fluid">
                        <div className=" card">
                              <div className="grid-row">
                                    <div className="item">
                                          <div className="column">
                                                <div className="quiz-content" style={{height:"420px", border: "1px solid #CFCFE1" , margin: "0 1rem 2rem 0"}}>
                                                      Тестүүдийн жагсаалт
                                                </div>
                                                <div className="quiz-add-finish">
                                                      <Link className="btn" style={{backgroundColor: "#c72727", color: "#fff", width: "9rem", textAlign:"center", marginLeft: "4rem"}}  onClick={async () => {
                                                      const result = await CustomDialog(<CustomDialogContent />, {
                                                            title: '  ',
                                                            showCloseIcon: true,
                                                      });}} >Тест нэмэх</Link>
                                                      <br />
                                                      <Link className="btn" style={{backgroundColor: "#fff", color:"#c72727", border: "#c72727 1px solid", width: "9rem", textAlign:"center",  marginLeft: "4rem", marginTop: "1rem"}}>Дуусгах</Link>
                                                </div>
                                          </div>
                                    </div>
                                    <div className="item" style={{marginTop: "2rem"}}>
                                          <br></br>
                                          <br></br>
                                          <textarea style={{ backgroundColor: "#E6E6FA", border: "none", borderRadius: "15px", padding: "1rem", width: "90%", height: "5rem"}} type="text" placeholder="Тестийн асуулт...." name="email" required></textarea>
                                          <br></br><br></br>
                                          <div className="grid-row-same">
                                                <div className="item" >
                                                       <input style={{margin: "0 0.5rem 0 2rem"}} type="radio" id="answer" name="answer" value="answer" /> 
                                                      <label for="answer">
                                                            <input type="text" type="text" placeholder="Хариулт...." name="email" required style={{border: "4px solid #009cff", width:"80%", height: "3rem", borderRadius: "15px", padding: "0.5rem" }} />
                                                      </label><br /><br />
                                                      <input style={{margin: "0 0.5rem 0 2rem"}} type="radio" id="answer" name="answer" value="answer" />
                                                      <label for="answer">
                                                            <input type="text" type="text" placeholder="Хариулт...." name="email" required style={{border: "4px solid #f99500", width:"80%", height: "3rem", borderRadius: "15px", padding: "0.5rem" }} />
                                                      </label>
                                                      </div>
                                                      <div className="item">
                                                            <input style={{margin: "0 0.5rem 0 2rem"}}  type="radio" id="answer" name="answer" value="answer" />
                                                            <label for="answer">
                                                                  <input type="text" type="text" placeholder="Хариулт...." name="email" required 
                                                                   style={{border: "4px solid #00ff22", width:"80%", height: "3rem", borderRadius: "15px", padding: "0.5rem" }}/>
                                                            </label><br /><br />
                                                            <input style={{margin: "0 0.5rem 0 2rem"}} type="radio" id="answer" name="answer" value="answer" />
                                                            <label for="answer">
                                                                  <input type="text" type="text" placeholder="Хариулт...." name="email" style={{border: "4px solid #a66bbe", width:"80%", height: "3rem", borderRadius: "15px", padding: "0.5rem" }} />
                                                            </label>
                                                      </div>      
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      );
}
