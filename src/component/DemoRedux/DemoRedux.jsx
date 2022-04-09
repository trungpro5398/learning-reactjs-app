import React, { Component } from 'react'

import { connect } from 'react-redux'
class DemoRedux extends Component {
    render() {
        return (
            <div className='container text-center my-5'>
                <h1>Show data tu store</h1>
                <p>Count: {this.props.count} </p>
                <button className='btn btn-success' onClick={this.props.increase}>+</button>
                <button className='btn btn-danger' onClick={this.props.decrease}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // y nghua cua ham nay la : lay cac state o tren store ve lam props cua component
    return {
        // key la props cua component ; value la state o tren store
        count: state.demo.count
    }
};

const mapDispatchToProps = (dispatch) => {
    // y nghua cua ham nay la : tao ra cac phuong thuc giup thay doi gia tri tren store
    return {
        // key la props cua component ; value la phuong thuc thay doi gia tri tren store
        increase: () => {
            const action = {
                type: 'INCREMENT'
            }
            // gui tin hieu len store( vd: gui tien hieu INCREMENT thi store se nhan tin hieu va thuc thi tang gia tri count len 1)
            dispatch(action);
        },
        decrease: () => {
            const action = {
                type: 'DECREMENT'
            }
            dispatch(action);
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(DemoRedux);