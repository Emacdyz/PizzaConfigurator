// src/compoments/PickBase.jsx
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {pizzaBases} from './PizzaPrices'
import {addBase} from '../actions/PizzaPicker'
import { RadioButtonGroup, RadioButton } from 'material-ui/RadioButton'
import './form.css'


class PickBase extends Component {

    handleRadio = (event) => {
        this.props.addBase(event.target.value)
        
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
                    className="picker"
                    value={pizzaBase.price} 
                    label={`${pizzaBase.name} ----- ${pizzaBase.price} €`} 
                    key={pizzaBase.id} 
                    />))}
                </RadioButtonGroup>
            </form>
        )
    }
}

export default connect(null, {addBase})(PickBase)
