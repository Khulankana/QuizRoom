import React from 'react';
import {Link} from 'react-router-dom'
import '../../pages/App/style.css';

export default function Test() {
      
      return(
                    <div  className="py-2 test-category">
                        <div className="container">
                              <h2> Тестүүд </h2>
                              <div className="bottom-line"></div>
                              <div className="article-container card" style={{padding:"3.5rem 1.5rem 3.5rem 1.5rem "}}>
                                    <article style={{border:"5px solid #f99500", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                         <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Мэдлэгээ шалгаад үзэх үү?</p>
                                          </Link>
                                    </article>
                                    <article style={{ border:"5px solid #009cff", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                          <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Тоо бодох уу?</p>
                                          </Link>
                                    </article>
                                    <article style={{ border:"5px solid #a66bbe", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                           <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Програмчлалын хэлний мэдлэгээ шалгаад үзэх үү?</p>
                                          </Link>
                                    </article>
                                    <article style={{ border:"5px solid #a66bbe", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                          <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Технологийн эрин үетэй хөл нийлүүлэн алхана шүү!</p>
                                          </Link>
                                    </article>
                                    <article  style={{border:"5px solid #f99500", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                          <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Яагаад, Яагаад, Яагаад?</p>
                                          </Link>
                                    </article>
                                    <article style={{ border:"5px solid #009cff", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                          <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Англи хэлний мэдлэгээ шалгаад үзэх үү?</p>
                                          </Link>
                                    </article>
                                    <article style={{ border:"5px solid #009cff", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                           <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Англи хэлний мэдлэгээ </p>
                                          </Link>
                                    </article>
                                    <article style={{ border:"5px solid #a66bbe", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                          <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Технологийн эрин үетэй хөл нийлүүлэн алхана шүү!</p>
                                          </Link>
                                    </article>
                                    <article style={{border:"5px solid #f99500", borderRadius: "15px", height: "13vh", textAlign: "center"}}   >
                                          <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Яагаад, Яагаад, Яагаад?</p>
                                          </Link>
                                    </article>
                                    <article style={{border:"5px solid #f99500", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                           <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Мэдлэгээ шалгаад үзэх үү?</p>
                                          </Link>
                                    </article>
                                    <article style={{ border:"5px solid #009cff", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                          <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Тоо бодох уу?</p>
                                          </Link>
                                    </article>
                                    <article style={{ border:"5px solid #a66bbe", borderRadius: "15px", height: "13vh", textAlign: "center"}} >
                                           <Link to="/test">
                                                <p style={{color: "grey", padding: "1rem"}}>Програмчлалын хэлний мэдлэгээ шалгаад үзэх үү?</p>
                                          </Link>
                                    </article>
                              </div>
                        </div>
                        <br></br>
             </div>
      );
}
