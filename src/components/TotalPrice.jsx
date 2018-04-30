//src/components/totalprice.jsx
import React, { Component } from 'react'
import {connect} from 'react-redux'


class TotalPrice extends Component {

    // getSum (total, num) {
    //     return total + num;
    // }

    render () {
        const {base, sauce, toppings} = this.props
        console.log(toppings)
        //const totalarray = base.concat(sauce)
        //const reducer = (accumulator, currentValue) => accumulator + currentValue;
        //const Total = Number(totalarray.reduce(reducer))
        // const pizza = this.props.PizzaPicker
        // console.log(pizza)
        
        // let pizzaPrice = Number(base[0])+Number(sauce[0])
        
        
        return (
            <p> Price: {Number(base) + Number(sauce) + toppings.length * 0.5 } </p>
            
        )
    }

}

const mapStateToProps = (state) => ({
    // pizza: state.PizzaPicker
    base: state.PickBase,
    sauce: state.PickSauce,
    toppings: state.PickTopping
})

export default connect(mapStateToProps)(TotalPrice)

