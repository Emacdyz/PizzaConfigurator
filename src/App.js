import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PizzaForm from './components/PizzaForm'

class App extends Component {
  render() {
    return (
      <MuiThemeProvider  >
        <nav>
          <AppBar title="New Age Pizza" />
        </nav>
        <main>
        <PizzaForm/>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default App;
