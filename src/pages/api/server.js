export const projects = [
  {
    id: 1,
    video: "/video/food.mp4",
    link: "https://github.com/Wojstan/food-app",
    about:
      "Application dedicated to present daily diet. It downloads locale date and adjusts data according to the day of the week. The actual day can be changed in the main menu. After choosing meal, application presents ingridients, recipe and tables with nutritional values and weight. Data are fetched from express.js server. State managment implemented with Redux i Redux-Thunk.",
    cssName: "orange",
    quotes: [
      {
        id: 1,
        name: "Redux",
        memo:
          "State managment was implemented with Redux and Redux-Thunk.",
      },
      {
        id: 2,
        name: "Express.js Server",
        memo:
          "Application has its own API created with express.js and communicates with it using fetch.",
      },
      {
        id: 3,
        name: "React Router",
        memo:
          "Application uses React Router, to jumb between pgaes.",
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
    video: "/video/chelsea.mp4",
    link: "https://github.com/Wojstan/chelsea-fan-app",
    about:
      "Application dedicated to save matches results and their courses. It connects with football API and fetch data related with fixture, resulst and competition. Application has its own express server, which alows user to create matchmaking, set lineup and rate players. User data are saved in MongoDB datebase. ",
    cssName: "blue",
    quotes: [
      {
        id: 1,
        name: "Express server and MongoDB",
        memo:
          "Application uses express server to save and fetch data. Data are stored in MongoDB datebase.",
      },
      {
        id: 2,
        name: "Redux",
        memo:
          "State managment was implemented with Redux.",
      },
      {
        id: 3,
        name: "Football API",
        memo:
          "Application was integrated with Football API to fetch some important data about Chelsea and its season.",
      },
    ],
    technologies: [
      "/img/tech/react.png",
      "/img/tech/redux.png",
      "/img/tech/node.png",
      "/img/tech/git.png",
      "/img/tech/mongodb.png",
      "/img/tech/styled.png",
    ],
  },
  {
    id: 3,
    video: "/video/budget.mp4",
    link: "https://github.com/Wojstan",
    about:
      'This application is implementation of my BSc Thesis. So far application allows to register users, login, adding expenses and income. The backend uses Django and Django REST Framework, frontend is mostly React.js. Eventually, I am going to use some Python extensions to process huge amounts of data and predict expense for months.',
    cssName: "green",
    quotes: [
      {
        id: 1,
        name: "Django",
        memo:
          "Backend implemented with Django Framwework. Data stored in Django ORM. Users are authenticated with Django REST Knox.",
      },
      {
        id: 2,
        name: "Django REST",
        memo:
          "Application uses Django REST Framework to create API.",
      },
      {
        id: 3,
        name: "Redux",
        memo:
          "State managment was implemented with Redux.",
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