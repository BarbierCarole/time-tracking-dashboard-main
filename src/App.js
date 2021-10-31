
import jeremy from './images/image-jeremy.png';

import './styles/_reset.css'
import './styles/App.css';

function App() {
  return (
    <div className="App">
       {/*
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      
      <div className="main">
        <div className="report">
          <div className="header">
            <img src={jeremy} className ="profil-img" alt="Jérémy" />
            <div className="profil-name">
              <h2>Report for</h2>
              <h1>Jeremy Robson</h1>
            </div>
            
          </div>
          <div className="content">
            Daily
            Weekly
            Monthly  
          </div>
        </div>
        <div className="boxes">
          <div className="work">
            <div className="header">
              {/* <img src={work} className="icon" alt="icone" />  */}
              <span className="icon"></span>
            </div>
            <div className="content">
              5hrs {/* <!-- daily--> */}
              Previous - 7hrs {/* <!-- daily--> */}
              32hrs {/* <!-- weekly--> */}
              Previous - 36hrs {/* <!-- weekly--> */}
              103hrs {/* <!-- monthly--> */}
              Previous - 128hrs {/* <!-- monthly--> */}
            </div>            
          </div>
          <div className="play">
            <div className="header">
            </div>
            <div className="content">
              1hr {/* <!-- daily--> */}
              Previous - 2hrs {/* <!-- daily--> */}
              10hrs {/* <!-- weekly--> */}
              Previous - 8hrs {/* <!-- weekly--> */}
              23hrs {/* <!-- monthly--> */}
              Previous - 29hrs {/* <!-- monthly--> */} 
            </div>
          </div>
          <div className="study">
            <div className="header">
            </div>
            <div className="content">
              0hrs {/* <!-- daily--> */}
              Previous - 1hr {/* <!-- daily--> */}
              4hrs {/* <!-- weekly--> */}
              Previous - 7hrs {/* <!-- weekly--> */}
              13hrs {/* <!-- monthly--> */}
              Previous - 19hrs {/* <!-- monthly--> */} 
            </div>   
          </div>
          <div className="exercise">
            <div className="header">
            </div>
            <div className="content">
              1hr {/* <!-- daily--> */}
            Previous - 1hr {/* <!-- daily--> */}
            4hrs {/* <!-- weekly--> */}
            Previous - 5hrs {/* <!-- weekly--> */}
            11hrs {/* <!-- monthly--> */}
            Previous - 18hrs {/* <!-- monthly--> */} 
            </div>
            
          </div>
          <div className="social">
            <div className="header">
            </div>
            <div className="content">
              1hr {/* <!-- daily--> */}
            Previous - 3hrs {/* <!-- daily--> */}
            5hrs {/* <!-- weekly--> */}
            Previous - 10hrs {/* <!-- weekly--> */}
            21hrs {/* <!-- monthly--> */}
            Previous - 23hrs {/* <!-- monthly--> */} 
            </div>
            
          </div>
          <div className="selfcare">
            <div className="header">
            </div>
            <div className="content">
              0hrs {/* <!-- daily--> */}
            Previous - 1hr {/* <!-- daily--> */}
            2hrs {/* <!-- weekly--> */}
            Previous - 2hrs {/* <!-- weekly--> */}
            7hrs {/* <!-- monthly--> */}
            Previous - 11hrs {/* <!-- monthly--> */}
            </div>
    
          </div>
        </div>
      </div>
      

      <div className="App-attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer" >Frontend Mentor</a>. 
        Coded by <a href="https://carolebarbier.com">Carole Barbier</a>.
      </div>
    </div>
  );
}

export default App;
