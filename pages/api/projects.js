const projects = [
  {
    title: "Ip Locator",
    video:
      "https://res.cloudinary.com/dt0v5nlzm/video/upload/v1643481929/Ip_Locator_-_Brave_2022-01-27_19-48-00_p5vjot.mp4",
    description:
      "An API based application that provides geo details about an Ip address, that includes country, state, time zones and also co-ordinates that links to google maps.",
    techstack: ["React Js", "RapidAPI", "Api"],
    github: {
      link: "https://github.com/Mehul208/Ip-Locator",
    },
    demo: {
      link: "https://iplocator.vercel.app/",
    },
  },
  {
    title: "Convo App - Chat App using chat engine",
    video:
      "https://res.cloudinary.com/dt0v5nlzm/video/upload/v1643480714/chat_app_hltrri.mp4",
    description:
      "It’s a real time chat application where users can register using Google or Facebook, create channels and chat with other users online.",
    techstack: ["React Js", "Chat Engine", "Firebase"],
    github: {
      link: "https://github.com/Mehul208/Convo-App",
    },
    demo: {
      link: "https://convo-app.vercel.app/",
    },
  },
  {
    title: "FeedHub - A Social Blogging Site",
    video:
      "https://res.cloudinary.com/dt0v5nlzm/video/upload/v1643481183/feedhub_zd35yb.mp4",
    description:
      "FeedHub is a social blogging site (i.e. like  Medium.com).It is a full stack application with all CRUD funtionalities",
    techstack: ["Django", "Python", "MySQL"],
    github: {
      link: "https://github.com/Mehul208/Feedhub",
    },
    demo: {
      link: "https://feedhubpr.herokuapp.com/",
    },
  },
  {
    title: "A Realtime chat app - Using Socket.io",
    video:
      "https://res.cloudinary.com/dt0v5nlzm/video/upload/v1643481182/chat2_xxkruk.mp4",
    description:
      "When it comes to realtime its always socket.io that works amazing every time.",
    techstack: ["NodeJs", "React Js", "Socket.io"],
    github: {
      link: "https://github.com/Mehul208/client/",
    },
    demo: {
      link: "https://realtimechatroom.vercel.app/",
    },
  },
  {
    title: "Travel Site - Using Js Oops",
    video:
      "https://res.cloudinary.com/dt0v5nlzm/video/upload/v1643353768/Design_Your_Tour_-_Google_Chrome_2022-01-27_20-01-15_cgolhz.mp4",
    description:
      "Its a basic site with nice UI that shows travel budget based on predefined data using js objects.",
    techstack: ["HTML", "CSS", "JavaScript", "Objects&Classes"],
    github: {
      link: "#",
    },
    demo: {
      link: "#",
    },
  },
  {
    title: "Love Calculator - A Fun Game",
    video:
      "https://res.cloudinary.com/dt0v5nlzm/video/upload/v1643353744/Love_Calculator_-_Brave_2022-01-27_19-49-19_wngrdj.mp4",
    description:
      "It is an implementation of a basic game that calculates love percentage two names.",
    techstack: ["HTML& CSS", "JavaScript"],
    github: {
      link: "https://github.com/Mehul208/LoveCalculatorApp",
    },
    demo: {
      link: "http://love-calculator-app.vercel.app/",
    },
  },
];

export default (req, res) => {
  res.status(200).json(projects);
};
