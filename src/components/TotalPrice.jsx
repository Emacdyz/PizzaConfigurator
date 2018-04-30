//src/components/totalprice.jsx
import React, { Component } from 'react'
import {connect} from 'react-redux'
import './TotalPrice.css'


class TotalPrice extends Component {

    onClick () {
        document.write("Thank you for your ordered at New Age Pizza!")
    }

    render () {
        const {base, sauce, toppings, turboDelivery} = this.props
        const subTotal = Number(base) + Number(sauce) + toppings.length * 0.5
        const Total = (subTotal + (subTotal * Number(turboDelivery))).toFixed(2)

        return (
            <div className="price-box">
                <p>{Total} € </p>
                <button onClick={this.onClick}> Order </button>
            </div>
            
        )
    }

}

const mapStateToProps = (state) => ({
    base: state.PickBase,
    sauce: state.PickSauce,
    toppings: state.PickTopping,
    turboDelivery: state.TurboDelivery
})

export default connect(mapStateToProps)(TotalPrice)

