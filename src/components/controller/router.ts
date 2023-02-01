import { getElement } from '../../utils/utils';
import { loginPage } from '../../pages/login';

type Routes = {
  [key: string]: () => void,
};

const routes: Routes = {
  '/': () => {
    getElement('#content').innerHTML = 'Home';
  },
  '/about': () => {
    getElement('#content').innerHTML = 'About';
  },
  '/contact': () => {
    getElement('#content').innerHTML = 'Contact';
  },
  '/trenagors': () => {
    getElement('#content').innerHTML = 'Trenagors';
  },
  '/login': () => {
    loginPage();
  },
};

// Listen to URL changes
window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  routes[path]();
});

// Function to navigate
type State = {
  link: string;
};

function navigate(state: State, path: string) {
  window.history.pushState(state, path, window.location.origin + path);
  routes[path]();
  // eslint-disable-next-line no-restricted-globals
  console.log(history.state);
}

// Add click listeners to navigation links
document.querySelectorAll('.nav a').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const link = a.getAttribute('href') ?? '';
    navigate({ link: a.innerHTML }, link);
  });
});

// Load the current route
routes[window.location.pathname]();
