import Link from "next/link";
import { useState, useEffect } from "react";

function Index() {
  const [date, setDate] = useState(new Date());

  const getMonthName = (key) => {
    switch (key) {
      case 0:
        return "Styczeń";
      case 1:
        return "Luty";
      case 2:
        return "Marzec";
      case 3:
        return "Kwiecień";
      case 4:
        return "Maj";
      case 5:
        return "Czerwiec";
      case 6:
        return "Lipiec";
      case 7:
        return "Sierpień";
      case 8:
        return "Wrzesień";
      case 9:
        return "Październik";
      case 10:
        return "Listopad";
      case 11:
        return "";
      default:
        break;
    }
  };

  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  function tick() {
    setDate(new Date());
  }

  return (
    <div className="main-container">
      <header>
        <div>
          <h5>{date.toLocaleTimeString()}</h5>
          <p>
            {getMonthName(date.getMonth())}, {date.getDate()}{" "}
            {date.getFullYear()}
          </p>
        </div>

        <div className="my-links">
          <a href={"https://github.com/Wojstan"}>
            <img src={"/img/github.png"} alt="" />
          </a>
          <a href={"https://github.com/Wojstan"}>
            <img src={"/img/facebook.png"} alt="" />
          </a>
        </div>
      </header>
      <main>
        <article>
          <img src={"/img/myImg.png"} alt="" />
          <h1>Jestem Wojtek</h1>
          <p>
            Posiadam dobry zmysł estetyczny, co pomaga mi w projektowaniu UI/UX.
            W przyszłości chciałbym pracować jako Frontend developer i rozwijać
            się przede wszystkim w React.js. Pasjonuję się tworzeniem projektów
            stron i aplikacji internetowych. Mam dużo chęci do pracy i bardzo
            chciałbym zdobyć doświadczenie zawodowe.
          </p>
        </article>
        <nav>
          <Link href="/project?id=1">
            <div class="hexagon hexagon2 ">
              <div class="hexagon-in1">
                <div class="hexagon-in2 bgPr1">
                  <div>
                    <h3>I</h3>
                    <p>project</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/project?id=2">
            <div class="hexagon hexagon2 ">
              <div class="hexagon-in1">
                <div class="hexagon-in2 bgPr2">
                  <div>
                    <h3>II</h3>
                    <p>project</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link href="/project?id=3">
            <div class="hexagon hexagon2 ">
              <div class="hexagon-in1">
                <div class="hexagon-in2 bgPr3">
                  <div>
                    <h3>III</h3>
                    <p>project</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </nav>
        <div className="separator-sm"></div>
        <section>
          <div className="mr-big">
            <img src={"/img/mail.png"} alt="" />
            <p>wpstaniszewski@gmail.com</p>
          </div>
          <div>
            <img src={"/img/phone.png"} alt="" />
            <p>+48 723 643 871</p>
          </div>
        </section>
      </main>
      <footer>
        <p>
          Copyright © 2006 - 2020 Wojciech Staniszewski. Wszelkie prawa
          zastrzeżone.
        </p>
      </footer>
    </div>
  );
}

export default Index;
