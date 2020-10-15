import Link from "next/link";

class Index extends React.Component {
  state = {
    transform: "0px",
    transformed: false,
    left: "-35%",
  };

  render() {
    const openMenu = () => {
      if (this.state.transformed === false) {
        this.setState({ transform: "35%" });
        this.setState({ transformed: true });
        this.setState({ left: "0" });
      } else {
        this.setState({ transform: "0px" });
        this.setState({ left: "-35%" });
        this.setState({ transformed: false });
      }
    };

    return (
      <div>
        <div className="menu" style={{ left: this.state.left }}>
          <div className="link-row-1">
            <Link href="/project?id=1" style={{ textDecoration: "none" }}>
              <div className="hexagon redBg mv-3">
                <h1>I</h1>
                <p>project</p>
              </div>
            </Link>

            <Link href="/project?id=2" style={{ textDecoration: "none" }}>
              <div className="hexagon blueBg">
                <h1>II</h1>
                <p>project</p>
              </div>
            </Link>
          </div>

          <div className="link-row-2">
            <Link href="/project?id=3" style={{ textDecoration: "none" }}>
              <div className="hexagon blackBg">
                <h1>III</h1>
                <p>project</p>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="main-container"
          style={{ transform: `translateX(${this.state.transform})` }}
        >
          <div className="main-burger">
            <button onClick={openMenu}>
              <img src="/img/burger.png" alt="" />
            </button>
          </div>
          <div className="main-info">
            <div className="main-name">
              <div className="age">
                <h2>22 lata</h2>
              </div>
              <span>
                <p>
                  <strong>Wojciech Staniszewski</strong>
                </p>
                <p>
                  <small>Warszawa, Polska</small>
                </p>
              </span>
            </div>

            <h1>Jestem Wojtek - student czwartego roku inforamtyki.</h1>
            <div className="separator redBg"></div>
            <p>
              Czuję, że posiadam dobry zmysł eststeyczny, co pomaga mi w
              projektowaniu UI/UX. W przyszłości chciałbym pracować jako
              Frontend developer i rozwijać się przede wszystkim w React.js.
              Pasjonuję się tworzeniem projektów stron i aplikacji
              internetowych. Mam dużo chęci do pracy i bardzo chciałbym zdobyć
              doświadczenie zawodowe.
            </p>

            <div className="contact">
              <span>
                <img src="/img/mail.png" alt="" />
                <p>wpstaniszewski@gmail.com</p>
              </span>
              <span>
                <img src="/img/phone.png" alt="" />
                <p>+48 723 643 871</p>
              </span>
            </div>
          </div>
          <div className="main-photo">
            <img src="/img/megraphic.png" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
