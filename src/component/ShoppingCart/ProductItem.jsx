import React, { Component } from "react";

export default class ProductItem extends Component {
  handleClick = () => {
    this.props.handleSetProDetail(this.props.product);
  };
  handleAdd = () => {
    this.props.handleAddCart(this.props.product);
  };
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src="./img/vsphone.jpg" alt />
        <div className="card-body">
          <h4 className="card-title">{this.props.product.tenSP}</h4>
          <button className="btn btn-success" onClick={this.handleClick}>
            Chi tiết
          </button>
          <button className="btn btn-danger" onClick={this.handleAdd}>
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
