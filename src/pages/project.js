import Link from "next/link";

class Project extends React.Component {
  state = {
    project: [
      {
        technologies: [
          { name: "React.js", img: "/img/react.png" },
          { name: "SASS", img: "/img/sass.png" },
          { name: "Git", img: "/img/git.png" },
        ],
        circle1: "/img/pr1/circle1.png",
        circle2: "/img/pr1/circle2.png",
        link: "https://github.com/Wojstan/food-app",
        classCss: "yellow",
        title: "I Aplikacja prezentująca dietę",
        header: ["Ekran główny", "Wybrany dzień"],
        imggithub: "/img/pr1/github.png",
        imgCode: "/img/pr1/code.png",
        info:
          "Aplikacja przeznaczona do prezentowania codziennej diety. Pobiera datę lokalnie i w zależności od dnia dostosowuje posiłki na dany dzień. Dni można ręcznie przesuwać w menu głównym. Po przejściu do konkretnego posiłku prezentowane są składniki, przepis i różne tabele z wartościami odżywczymi i gramaturą.",
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
          { name: "SASS", img: "/img/sass.png" },
          { name: "Git", img: "/img/git.png" },
        ],
        circle1: "/img/pr2/circle1.png",
        circle2: "/img/pr2/circle2.png",
        link: "https://github.com/Wojstan/chelsea-app",
        title: "II Aplikacja kibica Chelsea FC",
        info:
          "Aplikacja służąca do zapisywania przebiegu sezonu oraz przeglądu zawodników Chelesa FC. Na ten moment aplikacja umożliwia przegląd zawodników i terminarzu, wybór składu ostatniego meczu, ustawianie przebiegu ostatniego meczu (skład, bramki, asysty, wynik). Aplikacja posiada formularz do zapisywania ocen piłkarzy po meczu. Docelowo chciałbym zaimplemetnować backend, korzystając z framweworków Django, Django REST, aby umożliwić zapisywanie wyników i przebiegów w bazie danych.",
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
              about: "Menu zawierające linki do każdej z sekcji.",
            },
            {
              title: "Najbliższe spotkania",
              img: "/img/pr2/1_2.png",
              about:
                "Strona główna zawiera licznik odliczający czas do następnego meczu. Dalej widać bloki z ostatnim oraz nadchodzącym spotkaniem (wyniki, daty, miejsce, rozgrywki).",
            },
            {
              title: "Najważniejsze statystyki",
              img: "/img/pr2/1_3.png",
              about:
                "Ostatnią z sekcji jest prezentacja najważniejszych statystyk w zespole.",
            },
          ],
          [
            {
              title: "Wynik i punktujący",
              img: "/img/pr2/2_1.png",
              about:
                "Ta sekcja służy do ustawiania przebiegu ostatniego meczu, rozpoczynając od wpisania wyniku. Dalej po wybraniu składu należy określić strzelców oraz asystentów.",
            },
            {
              title: "Wybieranie składu",
              img: "/img/pr2/2_2.png",
              about:
                "Kolejna sekcja przeznaczona do wyboru składu ostatniego spotkania.",
            },
            {
              title: "Gotowy skład",
              img: "/img/pr2/2_3.png",
              about: "Końcowy skład - 11 podstawowych zawodników i 7 zmian.",
            },
            {
              title: "Ławka rezerwowych",
              img: "/img/pr2/2_4.png",
              about: "Uzupełniona ławka rezerwowych.",
            },
          ],
          [
            {
              title: "Aktualne notowania",
              img: "/img/pr2/3_1.png",
              about:
                "Sekcja przeznaczona do uzupełnienia ocen zawodników po ostatnim meczu. Prezentowane są notowania najlepszego i najgorszego zawodnika. Widoczna również tabela z aktualnym notowaniem każdego z zawodników",
            },
            {
              title: "Wpisywanie ocen",
              img: "/img/pr2/3_2.png",
              about:
                "Poniżej sekcja do wpisywania ocen zawodników po meczu. 4 kolumny na redaktorów z grupy chelsea24news.pl i 1 jedna na oceny użytkownika.",
            },
            {
              title: "Wpisane oceny",
              img: "/img/pr2/3_3.png",
              about: "Wpisane oceny, gotowe do zatwierdzenia.",
            },
          ],
          [
            {
              title: "Pozycja obrońca",
              img: "/img/pr2/4_1.png",
              about:
                "Sekcja zawodników umożliwiająca przejście do danego zawodnika.",
            },
            {
              title: "Pozycja pomocnik",
              img: "/img/pr2/4_2.png",
              about: "Pomocnicy.",
            },
            {
              title: "Zawodnik",
              img: "/img/pr2/4_3.png",
              about:
                "Sekcja konkretnego zawodnika, zawierająca metrykę i statystyki oraz notkę personalną na jego temat.",
            },
          ],
          [
            {
              title: "Terminarz",
              img: "/img/pr2/5_1.png",
              about:
                "Ostatnia z sekcji zawierająca najbliższy terminarz zespołu.",
            },
          ],
        ],
      },
      {
        classCss: "green",
        technologies: [
          { name: "React.js", img: "/img/react.png" },
          { name: "Django", img: "/img/django.png" },
          { name: "Django REST", img: "/img/drf.png" },
          { name: "Webpack", img: "/img/webpack.png" },
          { name: "SASS", img: "/img/sass.png" },
          { name: "Git", img: "/img/git.png" },
        ],
        info:
          'Tytuł mojej pracy inżynierskiej brzmi "Projekt i implementacja aplikacji webowej do zarządzania budżetem domowym, z wykorzystaniem metod sztucznej inteligencji". Aplikacja na ten moment posiada backend umożliwiający rejestrację użytkowników, logowanie, dodawanie wydatków i przychodów. Z pomocą React.js i Apexcharts wykonałem liczne wykresy, które będą prezentowały dane z bazy danych. Docelowo zamierzam wykorzystać bibliotekę Prophet, do przewidywania wydatków oraz przychodów.',
        circle1: "/img/pr3/circle1.png",
        circle2: "/img/pr3/circle2.png",
        link: "-",
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
              about: "Formularz przeznaczony do zalogowania do systemu.",
            },
            {
              title: "Rejestracja",
              img: "/img/pr3/1_2.png",
              about:
                "Formularz przeznaczony do rejestracji nowego konta w bazie danych.",
            },
          ],
          [
            {
              title: "Najważniejsze pozycje",
              img: "/img/pr3/2_1.png",
              about:
                "Ekran główny zawierający najważniejsze z pozycji dostępnych w aplikacji.",
            },
            {
              title: "Wykresy",
              img: "/img/pr3/2_2.png",
              about:
                "Wykresy kołowe przychodów i wydatków zaimplemetnowane z wykorzystaniem ApexCharts.",
            },
            {
              title: "Wykresy",
              img: "/img/pr3/2_3.png",
              about:
                "Wykres liniowy i paski progresu prezentujące niektóre z wartości.",
            },
          ],
          [
            {
              title: "Dodawanie",
              img: "/img/pr3/3_1.png",
              about:
                "Sekcja przeznaczona do dodawania przychodów i wydatków do bazy danych.",
            },
            {
              title: "Tabela",
              img: "/img/pr3/3_2.png",
              about:
                "Wszystkie pozycje pobierane z bazy danych, z opcją usunięcia i modyfikacji.",
            },
          ],
          [
            {
              title: "Wskaźniki",
              img: "/img/pr3/4_1.png",
              about: "Deska rozdzielcza prezentująca ważne statystyki budżetu.",
            },
            {
              title: "Tabela",
              img: "/img/pr3/4_2.png",
              about:
                "Tabela z podziałem na kategorie i części przewidywane, aktualne i planowane.",
            },
            {
              title: "Wykresy",
              img: "/img/pr3/4_3.png",
              about:
                "Wykresy kolumnowe i paski progresu, prezentujące dane z tabeli.",
            },
            {
              title: "Wartości",
              img: "/img/pr3/4_4.png",
              about: "Listy wydatków z poprzednich miesięcy oraz ich wykres.",
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
              <p>strona główna</p>
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
              <p>{this.state.project[projectID].info}</p>
            </div>

            <h2>Technologie</h2>
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
                  key={i}
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
                          <div className="separatorSm"></div>
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
        <footer className={`${this.state.project[projectID].classCss}Bg`}>
          <p>Copyright © 2020 Wojciech Staniszewski</p>
        </footer>
      </div>
    );
  }
}

export default Project;
