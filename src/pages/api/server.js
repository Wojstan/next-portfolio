export const projects = [
  {
    id: 1,
    video: "/video/food.mp4",
    about:
      "Aplikacja przeznaczona do prezentowania codziennej diety. Pobiera datę lokalnie i w zależności od dnia dostosowuje posiłki na dany dzień. Dni można ręcznie przesuwać w menu głównym. Po przejściu do konkretnego posiłku prezentowane są składniki, przepis i różne tabele z wartościami odżywczymi i gramaturą.",
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
      "Aplikacja służąca do zapisywania przebiegu sezonu oraz przeglądu zawodników Chelesa FC. Na ten moment aplikacja umożliwia przegląd zawodników i terminarzu, wybór składu ostatniego meczu, ustawianie przebiegu ostatniego meczu (skład, bramki, asysty, wynik). Aplikacja posiada formularz do zapisywania ocen piłkarzy po meczu. Docelowo chciałbym zaimplemetnować backend, korzystając z framweworków Django, Django REST, aby umożliwić zapisywanie wyników i przebiegów w bazie danych.",
    cssName: "blue",
    quotes: [
      {
        id: 1,
        name: "t1",
        memo:
          "Aplikacja stworzona z wykorzystaniem Redux, aby umożliwić poprawne zarządzanie stanem aplikacji.",
      },
      {
        id: 2,
        name: "t2",
        memo:
          "Aplikacja posiada własne API stworzone z wykorzystaniem serwera Node.js i komunikuje się z nim przy użyciu fetch.",
      },
      {
        id: 3,
        name: "t3",
        memo:
          "Aplikacja korzysta z React Router, aby poprawnie poruszać się pomiędzy ekranem głównym, a komponentem z konkretnym posiłkiem.",
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
      'Tytuł mojej pracy inżynierskiej brzmi "Projekt i implementacja aplikacji webowej do zarządzania budżetem domowym, z wykorzystaniem metod sztucznej inteligencji". Aplikacja na ten moment posiada backend umożliwiający rejestrację użytkowników, logowanie, dodawanie wydatków i przychodów. Z pomocą React.js i Apexcharts wykonałem liczne wykresy, które będą prezentowały dane z bazy danych. Docelowo zamierzam wykorzystać bibliotekę Prophet, do przewidywania wydatków oraz przychodów.',
    cssName: "green",
    quotes: [
      {
        id: 1,
        name: "Tdo",
        memo:
          "t1",
      },
      {
        id: 2,
        name: "ex",
        memo:
          "t2",
      },
      {
        id: 3,
        name: "t3",
        memo:
          "Aplikacja korzysta z React Router, aby poprawnie poruszać się pomiędzy ekranem głównym, a komponentem z konkretnym posiłkiem.",
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