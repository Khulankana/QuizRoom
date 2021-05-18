import React from "react";
import "../../pages/App/style.css";

import Knowledge from "../../assets/articles/knowledge.png";
import Math from "../../assets/articles/math.png";
import Ent2 from "../../assets/articles/ent2.jpg";

export default function Showcase() {
  return (
    <div>
      <section className="home-articles py-2">
        <div className="container">
          <h2>Манай апп-ыг яагаад хэрэглэх вэ?</h2>
          <div className="bottom-line"></div>
          <div className="article-container">
            <article className="card">
              <img src={Knowledge} alt="knowledge" />
              <div className="category category-sports">
                Сонирхолтой, хөгжилтэй
              </div>
              <p>Мэдлэгээ шалгаад үзэх үү?</p>
            </article>
            <article className="card">
              <div className="category category-art">Хэрэглэхэд хялбар</div>
              <p>Тоо бодох уу?</p>
              <img
                style={{ width: "80%", margin: "0 auto" }}
                src={Math}
                alt="Math"
              />
            </article>
            <article className="card">
              <img src={Ent2} alt="Ent2" />
              <div className="category category-tech">Мэдлэгээ сорих</div>
              <p>Програмчлалын хэлний мэдлэгээ шалгаад үзэх үү?</p>
            </article>
          </div>
        </div>
        <br></br>
      </section>
    </div>
  );
}
