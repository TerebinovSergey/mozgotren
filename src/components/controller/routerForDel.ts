import { getElement } from '../../utils/utils';

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
};

window.addEventListener('popstate', () => {
  const path = window.location.pathname;
  routes[path]();
});

type State = {
  link: string;
};

function navigate(state: State, path: string) {
  window.history.pushState(state, path, window.location.origin + path);
  routes[path]();
}

// Add click listeners to navigation links
document.querySelectorAll('.nav a').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const link = a.getAttribute('href') ?? '';
    navigate({ link: a.innerHTML }, link);
  });
});

routes[window.location.pathname]();
