// src/compoments/PickBase.jsx
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {pizzaBases} from './PizzaPrices'
import {ADD_BASE} from '../actions/PickBase'
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton'
import './form.css'


class PickBase extends Component {

    handleRadio = (e) => {
        this.props.dispatch({type:ADD_BASE, payload: e.target.value})
        
    }
    
    render () {
        
       
        return (
            <form>
                <p> Pick your pizza base:</p>
                <RadioButtonGroup 
                name="pizza base"
                onChange={this.handleRadio}>
                    {pizzaBases.map(pizzaBase => (
                    <RadioButton
                    className="base"
                    value={[pizzaBase.price]} 
                    label={`${[pizzaBase.name]} ----- ${[pizzaBase.price]} €`} 
                    key={pizzaBase.id} 
                    />))}
                </RadioButtonGroup>
            </form>
          
        )
    }
}

const mapStateToProps = function (state) {
    return {
      pizzaBases: state.pizzaBases
    }
  }

export default connect(mapStateToProps)(PickBase)
