//src/compeonents/PickTopping.jsx
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {pizzaToppings} from './PizzaPrices'
import {addTopping, removeTopping} from '../actions/PizzaPicker'
import Checkbox from 'material-ui/Checkbox'
import './form.css'


class PickTopping extends Component {

    handleCheck = (event) => {
        if (event.target.checked) {
            this.props.addTopping(event.target.value)
        } 
        else  {
            this.props.removeTopping(event.target.value)
        }
    }

    render () {
    //    const numberOfToppings = this.props.toppings.length
       
    //    console.log(numberOfToppings);
        return (
            <form>
                <p> Pick your toppings: </p>
                <span><em>Max. 3 toppings (+ 0,50/extra)</em></span>
                {pizzaToppings.map(pizzaTopping => (
                <Checkbox
                className="picker topping"
                value={pizzaTopping} 
                label={pizzaTopping} 
                key={pizzaTopping} 
                onCheck={this.handleCheck}
                // disabled={numberOfToppings > 3}
                />))}
            </form>
        )
    }
}

// const mapStateToProps = (state) => ({
//     toppings: state.PickTopping
// })

export default connect(null, {addTopping, removeTopping})(PickTopping)
