import Link from "next/link";

class Index extends React.Component {
  render() {
    return (
      <div className="main-container">
        <header>
          <p>
            <strong>22:13:53</strong>
            Październik, 10 2020
          </p>
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
              Posiadam dobry zmysł eststeyczny, co pomaga mi w projektowaniu
              UI/UX. W przyszłości chciałbym pracować jako Frontend developer i
              rozwijać się przede wszystkim w React.js. Pasjonuję się tworzeniem
              projektów stron i aplikacji internetowych. Mam dużo chęci do pracy
              i bardzo chciałbym zdobyć doświadczenie zawodowe.
            </p>
          </article>
          <nav>
            <Link href="/project?id=1">
              <div class="hexagon hexagon2 ">
                <div class="hexagon-in1">
                  <div class="hexagon-in2 bgPr1">
                    <h3>I</h3>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/project?id=2">
              <div class="hexagon hexagon2 ">
                <div class="hexagon-in1">
                  <div class="hexagon-in2 bgPr2">
                    <h3>II</h3>
                  </div>
                </div>
              </div>
            </Link>
            <Link href="/project?id=3">
              <div class="hexagon hexagon2 ">
                <div class="hexagon-in1">
                  <div class="hexagon-in2 bgPr3">
                    <h3>III</h3>
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
}

export default Index;
