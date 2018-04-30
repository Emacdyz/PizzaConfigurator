//src/components/TurboDelivery.jsx
import React, { Component } from 'react'
import Toggle from 'material-ui/Toggle'
import {connect} from 'react-redux'
import {addTurboDelivery, removeTurboDelivery} from '../actions/PizzaPicker'
import './TurboDelivery.css'

class TurboDelivery extends Component {
    
    handleSwitch = (event) => {
        if (event.target.checked) {
            this.props.addTurboDelivery()
        } else {
            this.props.removeTurboDelivery()
        }
    }
    
    render () {
        return (
            <div className="delivery">
                <span>Turbo Delivery <em>+10% on the price</em></span>
                <Toggle
                className="switch"
                onToggle={this.handleSwitch}
                />
                
            </div>
        )
    }
}

export default connect(null, {addTurboDelivery, removeTurboDelivery})(TurboDelivery)
