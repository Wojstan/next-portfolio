import Header from "../Components/Header";
import NavLink from "../Components/NavLink"
import Footer from "../Components/Footer"

function Index() {
  return (
    <div className="main-container">
      <Header link="https://github.com/Wojstan" />
      <main>

        <article>
          <img src={"/img/myImg.png"} alt="" />
          <h1>I'm Wojtek</h1>
          <p>
            I am constantly developing in the latest frontend technologies. In the future I would like to work as frontend developer and specialize in React.js. I am passionate about creating and implementing web projects, I work well in a group and really want to get some professional experience. Besides, I love Premier League games, good music and Tarrantino movies.
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
