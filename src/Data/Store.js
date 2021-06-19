import { createStore } from "redux";

const initialState = {
  Portfolio: [
    {
      title: "Rame deco dashboard ",
       image:
        "https://res.cloudinary.com/dsoeo0zhi/image/upload/v1623893161/rameDecoReact_ykxdp2.png",
      urlWeb: "https://rame-deco-react-portfolio.herokuapp.com",
      urlGit: "https://github.com/matias798/rame-deco-react-portfolio",
      dullerColor: false, //Boolean used for having different colors in the background of the image in the portfolio component

    },
    {
      title: "Rame deco",
      image:
        "https://res.cloudinary.com/dsoeo0zhi/image/upload/v1623893156/ramedeco_of5clf.png",
      urlWeb: "https://ramedeco.herokuapp.com",
      urlGit: "https://github.com/matias798/rame-deco-deploy",
      dullerColor: true,//Boolean used for having different colors in the background of the image in the portfolio component
    },
    {
      title: "Zanni inmobiliaria",
      image:
        "https://res.cloudinary.com/dsoeo0zhi/image/upload/v1623893163/zanni_qeduio.jpg",
      urlWeb: "https://zanni-f8324.web.app/",
      urlGit: "https://github.com/matias798/zani-react",
      dullerColor: true,//Boolean used for having different colors in the background of the image in the portfolio component
    },
    {
      title: "Crud inmobiliaria",
      image:
        "https://res.cloudinary.com/dsoeo0zhi/image/upload/v1623893165/zannidashboard_gogpvu.png",
      urlWeb: "https://api-zanni.herokuapp.com/admin/incia-sesion",
      urlGit: "https://github.com/matias798/zanni-inmobiliaria",
      dullerColor: false,//Boolean used for having different colors in the background of the image in the portfolio component
    },
  ],
};

const reducerPortfolio = (state = initialState, action) => {
  return state;
};

export default createStore(reducerPortfolio);
