import React, { useDebugValue } from 'react';
import '../../pages/App/style.css';
import {Link} from 'react-router-dom'

import Knowledge from '../../assets/articles/knowledge.png';
import Math from '../../assets/articles/math.png';
import Ent2 from '../../assets/articles/ent2.jpg';
import Tech from '../../assets/articles/Technology.jpg';
import English from '../../assets/articles/english.jpg';
import Science from '../../assets/articles/science.jpg';

export default function Showcase() {
      return(
            <div>
                  <section className="home-articles py-2">
                         <div className="container">
                              <h2>Онцлог, давуу тал</h2>
                              <div className="bottom-line"></div>
                              <div className="article-container">
                                    <article className="card">
                                          <Link to="/category">
                                                <img src={Knowledge} alt="knowledge" />
                                                <div className="category category-sports">Танин мэдэхүй</div>
                                                <p>Мэдлэгээ шалгаад үзэх үү?</p>
                                         </Link>
                                    </article>
                                    <article className="card">
                                         <Link to="/category">
                                          <div className="category category-art">Математик</div>
                                                <p>Тоо бодох уу?</p>
                                                <img src={Math} alt="Math" />
                                         </Link>
                                    </article>
                                    <article className="card">
                                           <Link to="/category"> 
                                                <img src={Ent2} alt="Ent2" />
                                                <div className="category category-tech">Програмчлал</div>
                                                <p>Програмчлалын хэлний мэдлэгээ шалгаад үзэх үү?</p>
                                          </Link>
                                    </article>
                                    <article className="card">
                                           <Link to="/category">
                                                <div className="category category-tech">Технологи</div>
                                                <p>Технологийн эрин үетэй хөл нийлүүлэн алхана шүү!</p>
                                                <img src={Tech} alt="Tech " /> 
                                          </Link> 
                                    </article>
                                    <article className="card">
                                          <Link to="/category">
                                                <img src={English} alt="Englsih" />
                                                <div className="category category-art">Англи хэл</div>
                                                <p>Англи хэлний мэдлэгээ шалгаад үзэх үү?</p>
                                           </Link>
                                    </article>
                                    <article className="card">
                                           <Link to="/category">
                                                <div className="category category-sports">Шинжлэх ухаан</div>
                                                <p>Яагаад, Яагаад, Яагаад?</p>
                                                <img src={Science} alt="Science" />
                                          </Link>
                                    </article>
                              </div>
                        </div>
                  </section>
            </div>
      );
}