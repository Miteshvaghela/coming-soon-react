import React from 'react';
import { ReactComponent as IconFacebook } from './assets/icons/facebook.svg';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import Logo from './assets/logo.png';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href="https://www.funtecstic.com">
              <img src={Logo} className="logo img"/>
            </a>
          </div>
          <div className="social">
            <a href="https://facebook.com" title="Facebook" target="_blank" rel="noopener noreferrer">
              <IconFacebook className="icon" />
            </a>
            <a href="https://twitter.com" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/miteshvaghela/coming-soon" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Freeads site is coming soon.</h1>
            <p>Please check back to know more. Shoot us an email if you're curious.</p>
          </div>
          <a href="mailto:vaghela_miteshk@yahoo.com">
            <div className="cta">Send us an email</div>
          </a>
        </div>
        <div className="footer">
          <span>Made by <a className="underlined" href="https://github.com/Miteshvaghela" target="_blank" rel="noopener noreferrer">Mitesh Vaghela</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a> | <a className="underlined" href="https://github.com/Miteshvaghela" title="GitHub repo" target="_blank" rel="noopener noreferrer">GitHub</a></span>
        </div>
      </div>
    );
  }
}

export default App;