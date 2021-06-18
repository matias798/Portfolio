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
      description:
        " Proyecto realizado en NodeJs y express utilizando metodologias agiles en curso de digital house." +
        " Esta pagina tiene como propuesta para el usuario el diseño de su hogar y la compra de articulos para este." +
        " El sitio cuenta con diferentes tipos usuarios y en caso de ser el administrador, se dispondra de la posibilidad" +
        " de un CRUD para modificar los productos de la pagina",
      image:
        "https://res.cloudinary.com/dsoeo0zhi/image/upload/v1623893156/ramedeco_of5clf.png",
      urlWeb: "https://ramedeco.herokuapp.com",
      urlGit: "https://github.com/matias798/rame-deco-deploy",
      dullerColor: true,//Boolean used for having different colors in the background of the image in the portfolio component
    },
    {
      title: "Zanni inmobiliaria",
      description:
        " Pagina de inmobiliaria realizada individualmente en Reactjs, " +
        " la cual tiene su informacion almacenada en base de datos de mysql y sus imagenes en cloudinary." +
        " El proyecto consume una api la cual me permitira realizar un CRUD de las propiedades y el consumo para mostrar las mismas.",
      image:
        "https://res.cloudinary.com/dsoeo0zhi/image/upload/v1623893163/zanni_qeduio.jpg",
      urlWeb: "https://zanni-f8324.web.app/",
      urlGit: "https://github.com/matias798/zani-react",
      dullerColor: true,//Boolean used for having different colors in the background of the image in the portfolio component
    },
    {
      title: "Crud inmobiliaria",
      description:
        " Proyecto el cual genera un json que sera consumido por " +
        " la pagina de la inmobiliaria, este cuenta con una validacion de usuarios" +
        " y la posibilidad de crear, leer, editar y borrar propiedades.",
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
