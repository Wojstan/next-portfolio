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
          <div className="hexa-location-1">
            <Link href="/project?id=1" style={{ textDecoration: "none" }}>
              <div className="hexagon redBg">
                <h1>I</h1>
                <p>project</p>
              </div>
            </Link>
          </div>
          <div className="hexa-location-2">
            <Link href="/project?id=2" style={{ textDecoration: "none" }}>
              <div className="hexagon blueBg">
                <h1>II</h1>
                <p>project</p>
              </div>
            </Link>
          </div>
          <div className="hexa-location-3">
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
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi nesciunt. “
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
            <img src="/img/megraphic.png" class="img-fluid" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

export default Index;
