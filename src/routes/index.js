const { Router } = require('express');

// Routes
const mapRoute = require("./map.route")

const router = Router();

const setRoutes = (routes) => {
  routes.forEach((route) => {
    if (Array.isArray(route.middlewares) && route.middlewares.length) {
      router.use(route.path, ...route.middlewares, route.route);
    } else {
      router.use(route.path, route.route);
    }
  });
};

const defaultRoutes = [
  {
    path: '/map',
    route: mapRoute,
  },
  /*   {
    path: '/route',
    route: routeFile,
    middlewares: [middleware],
  }, */
];

const devRoutes = [];

setRoutes(defaultRoutes);

if (process.env.NODE_ENV !== 'production') {
  setRoutes(devRoutes);
}

module.exports = router;
