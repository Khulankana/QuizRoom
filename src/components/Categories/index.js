import React from "react";
import "../../pages/App/style.css";

import User from "../../assets/quiz/user_registration.jpg";
import Test from "../../assets/quiz/poll.jpg";
import AnswerTest from "../../assets/quiz/a_test.jpg";

export default function Showcase() {
  return (
    <div>
      <section className="home-articles py-2">
        <div className="container">
          <h2>Ашиглах заавар</h2>
          <div className="bottom-line"></div>

          <div className="article-container">
            <article className="card">
              <img src={User} alt="User" />
              <br />

              <div className="category category-sports">
                Бүртгэлтэй хэрэглэгч
              </div>
              <br />
              <p style={{ textAlign: "justify" }}>
                Бүртгэлтэй хэрэглэгч л тест үүсгэх боломжтой учир та юуны өмнө
                манай апп-д бүргүүлээрэй.
              </p>
            </article>
            <article className="card">
              <div className="category category-art">Тест үүсгэх</div>
              <p style={{ textAlign: "justify" }}>
                Тестийн ерөнхий гарчиг, уг тестэд хариулах хугацаа, үр дүнг
                хэрхэн шалгах талаар сонголт хийж оруулж өгсний дараа уг тест
                маань нийт хэдэн асуулттай вэ гэдгээс та асуулт, хариултууд, зөв
                хөриултын хамт тус тусад нь оруулж өгнө. Та оруулж өгсөн, сонгож
                өгсөн бүхнээ эдит хийх мөн устгаж болно.{" "}
              </p>
              <img
                style={{ width: "90%", margin: "0 auto" }}
                src={Test}
                alt="Test"
              />
            </article>
            <article className="card">
              <img
                style={{ width: "90%", margin: "0 auto" }}
                src={AnswerTest}
                alt="AnswerTest"
              />
              <div className="category category-tech">Тестээ тоглуулах</div>
              <p style={{ textAlign: "justify" }}>
                Тестүүдийн жагсаалтанд таны үүсгэсэн тестүүд харагдана.
                Тоглуулах товч дээр дарахад таньд рандомоор код очих бөгөөд уг
                кодыг та тестэнд хариулах хүмүүсдээ хуваалцна. Хүмүүс маань
                кодын тусламжтайгаар таны үүсгэсэн асуултанд хариулах болно.
                Хугацаа дуусахад хэн ялагч болснийг та харах болно.
              </p>
            </article>
          </div>
        </div>
        <br></br>
      </section>
    </div>
  );
}
