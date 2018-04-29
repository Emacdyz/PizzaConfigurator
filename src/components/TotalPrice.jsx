//src/components/totalprice.jsx
import React, { Component } from 'react'
import {connect} from 'react-redux'


class TotalPrice extends Component {

    render () {
        const {pizza} = this.props
        const total = pizza.base + pizza.sauce
        console.log(total)
        
        return (
            <p> Price: {this.total} </p>
        )
    }

}

const mapStateToProps = (state) => ({
    pizza: state.pizza
})

export default connect(mapStateToProps)(TotalPrice)

