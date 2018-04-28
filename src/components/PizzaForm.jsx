// src/compoments/PizzaForm.jsx
import React, { Component } from 'react'
import PickBase from './PickBase'
import PickSauce from './PickSauce'
import PickTopping from './PickTopping';
import Paper from 'material-ui/Paper'
import './PizzaForm.css'

class PizzaForm extends Component {
    render () {
        return (
            <Paper className="paper">
                <div>
                    <img src={'../pizzaform.jpg'} alt='make your pizza'/>
                    
                </div>
                
                <PickBase/>
                <PickSauce/>
                <PickTopping/>
            </Paper>
        )

    }
}

export default PizzaForm
