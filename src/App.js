import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import PizzaForm from './components/PizzaForm'

class App extends Component {

  render() {
    return (
      <div>
        <nav>
          <AppBar title="New Age Pizza" />
        </nav>
        <PizzaForm/>
     </div>
    );
  }
}

export default App;
