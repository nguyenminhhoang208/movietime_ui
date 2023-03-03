import Home from "~/pages/Home";
import Movie from "~/pages/Movie";
import Search from "~/pages/Search";
import Watch from "~/pages/Watch";
import DefaultLayout from "~/layouts/DefaultLayout";


const publicRoutes = [
  {
    path: "/",
    Component: Home,
    layout: DefaultLayout,
  },
  {
    path: "/movie/:movieID",
    Component: Movie,
    layout: DefaultLayout,
  },
  {
    path: "/search/:searchValue",
    Component: Search,
    layout: DefaultLayout,
  },
  {
    path: "/watch",
    Component: Watch,
    layout: DefaultLayout,

  },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
