import * as React from 'react';
import Header from './components/Header/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header title="E-List"/>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
