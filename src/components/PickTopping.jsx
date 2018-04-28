//src/compeonents/PickTopping.jsx
import React, { Component } from 'react'
import {connect} from 'react-redux'
import {pizzaToppings} from './PizzaPrices'
import {ADD_TOPPING} from '../actions/PizzaPicker'
import Checkbox from 'material-ui/Checkbox'
import './form.css'


class PickTopping extends Component {
    state = {
        checked: [1]
    }

    handleToggle = value => {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        console.log(newChecked)
        // if (e.target.checked) {
        //     this.props.dispatch(addTopping(e.target.value))
        // }  
        // // else {
        // //     this.props.dispatch(removeTopping(e.target.value)) 
        // // }
        this.props.dispatch({type:ADD_TOPPING, payload: newChecked})

        // if (this.props.pizzaToppings.length > 3) {
        //     console.log('+ 0,5') 
        // }

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
                onCheck={this.handleToggle}
                
                />))}
            </form>
          
        )
    }
}

const mapStateToProps = function (state) {
    return {
      pizzaToppings: state.pizzaToppingss
    }
  }

export default connect(mapStateToProps)(PickTopping)
