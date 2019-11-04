import { Header } from './componets/Header'

const App = document.createElement('div');

App.className = "main";
App.appendChild(Header);

module.exports = { App }