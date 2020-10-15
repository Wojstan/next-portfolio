import Link from "next/link";

class Project extends React.Component {
  state = {
    project: [
      {
        technologies: [
          { name: "React.js", img: "/img/react.png" },
          { name: "Python", img: "/img/python.png" },
          { name: "SASS", img: "/img/sass.png" },
        ],
        circle1: "/img/pr1/circle1.png",
        circle2: "/img/pr1/circle2.png",
        link: "https://github.com/Wojstan/food-app",
        classCss: "yellow",
        title: "I Aplikacja prezentująca dietę",
        header: ["Ekran główny", "Wybrany dzień"],
        imggithub: "/img/pr1/github.png",
        imgCode: "/img/pr1/code.png",
        content: [
          [
            {
              title: "Wybór dania",
              img: "/img/pr1/1_1.png",
              about: "Menu główne umożliwiające wybór dania lub zmianę dnia.",
            },
            {
              title: "Zmiana dnia",
              img: "/img/pr1/1_2.png",
              about:
                "Menu dostosowuje się w zależności od ustawionego dnia tygodnia.",
            },
          ],
          [
            {
              title: "Wartości odżywcze",
              img: "/img/pr1/2_1.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Miejsce na przepis",
              img: "/img/pr1/2_2.png",
              about:
                "Możliwe jest rozwinięcie przepisu na danie oraz listy składników.",
            },
            {
              title: "Tabela produktów i wartości",
              img: "/img/pr1/2_3.png",
              about:
                "Tabela posiłku, zawierająca podział na produkty. Każda pozycja zawiera wartości takie jak: kalorie, białko, cukry, tłuszcze, błonnik, gramatura.",
            },
          ],
        ],
      },
      {
        classCss: "bluee",
        technologies: [
          { name: "React.js", img: "/img/react.png" },
          { name: "Python", img: "/img/python.png" },
          { name: "SASS", img: "/img/sass.png" },
        ],
        circle1: "/img/pr2/circle1.png",
        circle2: "/img/pr2/circle2.png",
        link: "https://github.com/Wojstan/chelsea-app",
        title: "II Aplikacja kibica Chelsea FC",
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
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Najbliższe spotkania",
              img: "/img/pr2/1_2.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Najważniejsze statystyki",
              img: "/img/pr2/1_3.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
          ],
          [
            {
              title: "Wynik i punktujący",
              img: "/img/pr2/2_1.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Wybieranie składu",
              img: "/img/pr2/2_2.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Gotowy skład",
              img: "/img/pr2/2_3.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Ławka rezerwowych",
              img: "/img/pr2/2_4.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
          ],
          [
            {
              title: "Aktualne notowania",
              img: "/img/pr2/3_1.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Wpisywanie ocen",
              img: "/img/pr2/3_2.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Wpisane oceny",
              img: "/img/pr2/3_3.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
          ],
          [
            {
              title: "Pozycja obrońca",
              img: "/img/pr2/4_1.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Pozycja pomocnik",
              img: "/img/pr2/4_2.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Zawodnik",
              img: "/img/pr2/4_3.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
          ],
          [
            {
              title: "Terminarz",
              img: "/img/pr2/5_1.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
          ],
        ],
      },
      {
        classCss: "green",
        technologies: [
          { name: "React.js", img: "/img/react.png" },
          { name: "Python", img: "/img/python.png" },
          { name: "SASS", img: "/img/sass.png" },
        ],
        circle1: "/img/pr3/circle1.png",
        circle2: "/img/pr3/circle2.png",
        link: "https://github.com/Wojstan/chelsea-app",
        title: "III Fragmenty pracy inżynierskiej",
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
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Rejestracja",
              img: "/img/pr3/1_2.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
          ],
          [
            {
              title: "Najważniejsze pozycje",
              img: "/img/pr3/2_1.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Wykresy",
              img: "/img/pr3/2_2.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Wykresy",
              img: "/img/pr3/2_3.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
          ],
          [
            {
              title: "Dodawanie",
              img: "/img/pr3/3_1.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Tabela",
              img: "/img/pr3/3_2.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
          ],
          [
            {
              title: "Wskaźniki",
              img: "/img/pr3/4_1.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Tabela",
              img: "/img/pr3/4_2.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Wykresy",
              img: "/img/pr3/4_3.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
            },
            {
              title: "Wartości",
              img: "/img/pr3/4_4.png",
              about:
                "Po wyborze konkretnego posiłku załadowana zostaje strona prezentująca wartości odżywcze posiłku, liczbę składników, miejsce na przepis, tabelę ze składnikami.",
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
      <div className="project-full">
        <nav className={`${this.state.project[projectID].classCss}Bg`}>
          <Link href="/">
            <a>
              <img src="/img/back.png" alt="" />
              <p>return to home</p>
            </a>
          </Link>
        </nav>

        <div
          className={`${this.state.project[projectID].classCss}Project project-header`}
        >
          <div className="header-circles">
            <div
              className={`${this.state.project[projectID].classCss}Bg circle`}
            >
              <img src={this.state.project[projectID].circle1} alt="" />
            </div>
            <div
              className={`${this.state.project[projectID].classCss}Bg circle`}
            >
              <img src={this.state.project[projectID].circle2} alt="" />
            </div>
          </div>
          <div className="header-info">
            <h1>{this.state.project[projectID].title}</h1>
            <div
              className={`${this.state.project[projectID].classCss}Bg separator`}
            ></div>
            <a href={this.state.project[projectID].link}>
              <img src={this.state.project[projectID].imggithub} alt="" />
              <p>{this.state.project[projectID].link}</p>
            </a>
          </div>
        </div>

        <div className="project-main">
          <div
            className={`${this.state.project[projectID].classCss}Project project-tech`}
          >
            <div
              className={`${this.state.project[projectID].classCss}Bg project-about`}
            >
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>

            <h2>Technologies</h2>
            <ul>
              {this.state.project[projectID].technologies.map((row, i) => (
                <li key={i}>
                  <img src={row.img} alt="" />
                  <p>{row.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="project-blocks">
            <div className="container-fluid">
              {this.state.project[projectID].header.map((block, i) => (
                <div
                  className={`${this.state.project[projectID].classCss}Project full-row`}
                >
                  <h2>{block}</h2>
                  <div className="row">
                    {this.state.project[projectID].content[i].map((row, i) => (
                      <div key={i} className="col-md-6 col-xl-4">
                        <div
                          className={`${this.state.project[projectID].classCss}Bg project-block`}
                        >
                          <h4>{row.title}</h4>
                          <img src={row.img} className="img-fluid" alt="" />
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
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
