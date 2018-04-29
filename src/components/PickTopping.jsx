//src/compeonents/PickTopping.jsx
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {pizzaToppings} from './PizzaPrices'
import {addTopping, removeTopping} from '../actions/PizzaPicker'
import Checkbox from 'material-ui/Checkbox'
import './form.css'


class PickTopping extends Component {

    handleCheck = (event) => {
        this.props.addTopping(event.target.value)
    }

    handleUncheck = (event) => {
        this.props.removeTopping(event.target.value)
    }

    render () {
       
        return (
            <form>
                <p> Pick your toppings: </p>
                <span><em>Max. 3 toppings (+ 0,50 /extra)</em></span>
                {pizzaToppings.map(pizzaTopping => (
                <Checkbox
                className="picker"
                value={[pizzaTopping.price]} 
                label={[pizzaTopping.name]} 
                key={pizzaTopping.id} 
                onCheck={this.handleCheck || this.handleUncheck}
                />))}
            </form>
        )
    }
}

export default connect(null, {addTopping, removeTopping})(PickTopping)
