import Header from "../Components/Header";
import NavLink from "../Components/NavLink"
import Footer from "../Components/Footer"

function Index() {
  return (
    <div className="main-container">
      <Header />
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
          <NavLink title="I" bgClass="bgPr1" id={1} />
          <NavLink title="II" bgClass="bgPr2" id={2} />
          <NavLink title="III" bgClass="bgPr3" id={3} />
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
      <Footer />
    </div>
  );
}

export default Index;
