export const projects = [
  {
    id: 1,
    video: "/video/food.mp4",
    about:
      "Aplikacja przeznaczona do prezentowania codziennej diety. Pobiera datę lokalnie i w zależności od dnia dostosowuje posiłki na dany dzień. Dni można ręcznie przesuwać w menu głównym. Po przejściu do konkretnego posiłku prezentowane są składniki, przepis i różne tabele z wartościami odżywczymi i gramaturą. Dane pobierane są z API korzystającego z express.js. Projekt posiada zarządzanie stanem, zaimplementowane z użyciem Redux i Redux-Thunk.",
    cssName: "orange",
    quotes: [
      {
        id: 1,
        name: "Wykorzystanie reduxa",
        memo:
          "Aplikacja stworzona z wykorzystaniem Redux, aby umożliwić poprawne zarządzanie stanem aplikacji.",
      },
      {
        id: 2,
        name: "Własne API",
        memo:
          "Aplikacja posiada własne API stworzone z wykorzystaniem serwera Node.js i komunikuje się z nim przy użyciu fetch.",
      },
      {
        id: 3,
        name: "React Router",
        memo:
          "Aplikacja korzysta z React Router, aby poprawnie poruszać się pomiędzy ekranem głównym, a komponentem z konkretnym posiłkiem.",
      },
    ],
    technologies: [
      "/img/tech/react.png",
      "/img/tech/redux.png",
      "/img/tech/node.png",
      "/img/tech/sass.png",
      "/img/tech/git.png",
    ],
  },
  {
    id: 2,
    video: "/video/food.mp4",
    about:
      "Aplikacja służąca do zapisywania przebiegu sezonu oraz przeglądu zawodników Chelesa FC. Na ten moment projekt umożliwia przegląd zawodników i terminarzu, wybór składu ostatniego meczu, ustawianie przebiegu ostatniego meczu (skład, bramki, asysty, wynik). Aplikacja posiada formularz do zapisywania ocen piłkarzy po meczu. Docelowo chciałbym zaimplemetnować backend, aby umożliwić zapisywanie wyników i przebiegów w bazie danych. Na ten moment dane znajdują się w części fronted.",
    cssName: "blue",
    quotes: [
      {
        id: 1,
        name: "Arkusze SCSS",
        memo:
          "Aplikacja współpracuje z arkuszami stylów preprocesora SCSS.",
      },
      {
        id: 2,
        name: "Wykorzystanie Bootstrap",
        memo:
          "Responsywność strony z wykorzystaniem siatki Bootsrap.",
      },
      {
        id: 3,
        name: "React Router",
        memo:
          "Aplikacja korzysta z React Router, aby poprawnie poruszać się pomiędzy komponentami.",
      },
    ],
    technologies: [
      "/img/tech/react.png",
      "/img/tech/sass.png",
      "/img/tech/git.png",
    ],
  },
  {
    id: 3,
    video: "/video/food.mp4",
    about:
      'Tytuł mojej pracy inżynierskiej brzmi "Projekt i implementacja aplikacji webowej do zarządzania budżetem domowym, z wykorzystaniem metod sztucznej inteligencji". Aplikacja na ten moment posiada backend umożliwiający rejestrację użytkowników, logowanie, dodawanie wydatków i przychodów. Z pomocą React.js i Apexcharts wykonałem liczne wykresy, które będą prezentowały dane z bazy danych. Docelowo zamierzam wykorzystać bibliotekę Prophet, do przewidywania wydatków oraz przychodów. Projekt wykorzystuje Redux i Redux Thunk do zarządzania stanem.',
    cssName: "green",
    quotes: [
      {
        id: 1,
        name: "Backend w DJANGO",
        memo:
          "Backend zaimplementowany przy pomocy frameworku Django. Dane przechowywane w Django ORM. Autoryzacja użytkowników z wykorzystaniem Django Knox.",
      },
      {
        id: 2,
        name: "DJANGO REST FRAMEWORK",
        memo:
          "Wykorzystanie DJANGO REST do stworzenia API, z którym frontend komunikuje się poprzez axios. Seriazlizacja danych z DJAGNO ORM.",
      },
      {
        id: 3,
        name: "Zarządzanie stanem Redux",
        memo:
          "Wykorzystanie Redux i Redux Thunk do zarządzania stanem aplikacji.",
      },
    ],
    technologies: [
      "/img/tech/react.png",
      "/img/tech/redux.png",
      "/img/tech/sass.png",
      "/img/tech/git.png",
    ],
  },
]