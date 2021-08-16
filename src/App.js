import React from 'react';
import './App.css';
import {Home} from './Home.jsx';
import {About} from './About.jsx';
import {Profile} from './Profile.jsx';


const PAGES = {
  home: <Home></Home>,
  about: <About></About>,
  profile: <Profile></Profile>
}

class App extends React.Component {

  state = { currentPage: 'home' }

  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li>
                <button onClick={() => {this.navigateTo("home")}}>
                  Карта
                </button>
              </li>
              <li>
                <button onClick={() => {this.navigateTo("about")}}>
                  Профиль
                </button>
              </li>
              <li>
                <button onClick={() => {this.navigateTo("profile")}}>
                  Выйти
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {PAGES[this.state.currentPage]}
          </section>
        </main>
      </>
    );
  }
}

export default App;
