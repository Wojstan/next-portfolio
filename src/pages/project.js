import Link from "next/link";

class Project extends React.Component {
  state = {
    project: [
      {
        classCss: "yellProject",
        title:
          "I Aplikacja z wykorzystaniem React.js, prezentująca tygodniową dietę",
        header: ["Ekran główny", "Wybrany dzień"],
        imggithub: "/img/pr1/github.png",
        imgCode: "/img/pr1/code.png",
        content: [
          [
            {
              title: "Wybór dnia",
              img: "/img/pr1/1_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Zmiana dnia",
              img: "/img/pr1/1_2.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
          [
            {
              title: "Wartości odżywcze",
              img: "/img/pr1/2_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Miejsce na przepis",
              img: "/img/pr1/2_2.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Tabela produktów i wartości",
              img: "/img/pr1/2_3.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
        ],
      },
      {
        classCss: "blueProject",
        title:
          "Aplikacja z wykorzystaniem React.js, prezentująca tygodniową dietę",
        header: [
          "Ekran główny",
          "Ostatni mecz",
          "Oceny zawodników",
          "Zawodnicy",
          "Terminarz",
        ],
        imggithub: "/img/pr2/github.png",
        imgCode: "/img/pr2/code.png",
        content: [
          [
            {
              title: "Menu",
              img: "/img/pr2/1_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Najbliższe spotkania",
              img: "/img/pr2/1_2.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Najważniejsze statystyki",
              img: "/img/pr2/1_3.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
          [
            {
              title: "Wynik i punktujący",
              img: "/img/pr2/2_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Wybieranie składu",
              img: "/img/pr2/2_2.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Gotowy skład",
              img: "/img/pr2/2_3.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Ławka rezerwowych",
              img: "/img/pr2/2_4.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
          [
            {
              title: "Aktualne notowania",
              img: "/img/pr2/3_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Wpisywanie ocen",
              img: "/img/pr2/3_2.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Wpisane oceny",
              img: "/img/pr2/3_3.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
          [
            {
              title: "Pozycja obrońca",
              img: "/img/pr2/4_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Pozycja pomocnik",
              img: "/img/pr2/4_2.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Zawodnik",
              img: "/img/pr2/4_3.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
          [
            {
              title: "Terminarz",
              img: "/img/pr2/5_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
        ],
      },
      {
        classCss: "redProject",
        title:
          "Aplikacja z wykorzystaniem React.js, prezentująca tygodniową dietę",
        header: [
          "Logowanie",
          "Ekran główny",
          "Zarządzanie wydatkami",
          "Deska rozdzielcza",
        ],
        imggithub: "/img/pr3/github.png",
        imgCode: "/img/pr3/code.png",
        content: [
          [
            {
              title: "Ekran logowania",
              img: "/img/pr3/1_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Rejestracja",
              img: "/img/pr3/1_2.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
          [
            {
              title: "Najważniejsze pozycje",
              img: "/img/pr3/2_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Wykresy",
              img: "/img/pr3/2_2.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Wykresy",
              img: "/img/pr3/2_3.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
          [
            {
              title: "Dodawanie",
              img: "/img/pr3/3_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Tabela",
              img: "/img/pr3/3_2.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
          [
            {
              title: "Wskaźniki",
              img: "/img/pr3/4_1.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Tabela",
              img: "/img/pr3/4_2.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Wykresy",
              img: "/img/pr3/4_3.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
            {
              title: "Wartości",
              img: "/img/pr3/4_4.png",
              about: "Lorem ipsi, essa teges schiller dire straits",
            },
          ],
        ],
      },
    ],
  };

  static async getInitialProps({ query }) {
    return { id: query.id };
  }

  render() {
    const projectID = this.props.id - 1;
    return (
      <div className={`${this.state.project[projectID].classCss} project-main`}>
        <div className="project-back">
          <Link href="/">
            <button>
              <img src="/img/back.png" alt="" />
            </button>
          </Link>
        </div>

        <div className="project-info">
          <div className="container-fluid">
            <h1>{this.state.project[projectID].title}</h1>
            <div className="separator whiteBg"></div>

            {this.state.project[projectID].header.map((block, i) => (
              <div>
                <h3>{block}</h3>
                <div className="row">
                  {this.state.project[projectID].content[i].map((row) => (
                    <div className="col-md-6 col-xl-3">
                      <div className="project-block">
                        <h4>{row.title}</h4>
                        <img src={row.img} class="img-fluid" alt="" />
                        <div
                          className={`${this.state.project[projectID].classCss} separatorSm`}
                        ></div>
                        <p>{row.about}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="row">
              <div className="col-md-6">
                <h3>Github</h3>
                <div className="project-links">
                  <img src={this.state.project[projectID].imggithub} alt="" />
                  <a
                    href="https://github.com/Wojstan/FOOD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://github.com/Wojstan/FOOD
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <h3>Technologie</h3>
                <div className="project-links">
                  <img src={this.state.project[projectID].imgCode} alt="" />
                  <p>React.js, HTML, CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
