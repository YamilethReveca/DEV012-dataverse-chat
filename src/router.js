let ROUTES = {};

let rootElement = "";

export const setRootElement = (newRootElementValue) => {
  rootElement = newRootElementValue;
};

export const setRoutes = (newRoutesValue) => {
  ROUTES = newRoutesValue;
};

const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = "";

  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES[`/error`](props));
  }
};

export const navigateTo = (pathname, props = {}) => {
  if (window) {
    const URLVisited = window.location.origin + pathname;
    history.pushState({}, "", URLVisited);
  }
  renderView(pathname, props);
};

export const onURLChange = () => {
  if (window) {
    renderView(pathname);
  }
  const pathname = window.location.pathname
};
if (window) {
  window.onpopstate = onURLChange;
}
