// src/components/PickSauce.js
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {pizzaSauces} from './PizzaPrices'
import {ADD_SAUCE} from '../actions/PizzaPicker'
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton'
import './form.css'


class PickSauce extends Component {

    handleRadio = (e) => {
        this.props.dispatch({type:ADD_SAUCE, payload: e.target.value})
        
    }
    
    render () {
        
       
        return (
            <form>
                <p> Pick your sauce:</p>
                <RadioButtonGroup 
                name="pizza sauce"
                onChange={this.handleRadio}>
                    {pizzaSauces.map(pizzaSauce => (
                    <RadioButton
                    className="picker"
                    value={[pizzaSauce.price]} 
                    label={`${[pizzaSauce.name]} ----- ${[pizzaSauce.price]} €`} 
                    key={pizzaSauce.id} 
                    />))}
                </RadioButtonGroup>
            </form>
          
        )
    }
}

const mapStateToProps = function (state) {
    return {
      pizzaSauces: state.pizzaSauces
    }
  }

export default connect(mapStateToProps)(PickSauce)