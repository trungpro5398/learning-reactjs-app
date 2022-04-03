import React, { Component } from "react";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import ProductList from "./ProductList";

export default class ShoopingCart extends Component {
  state = {
    cardList: [],
    proDetail: {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img/meizuphone.jpg",
    },
  };
  handleSetProDetail = (product) => {
    this.setState({ proDetail: product });
  };
  handleAddCart = (product) => {
    let newCartList = this.state.cardList;
    let index = newCartList.findIndex((item) => item.maSP === product.maSP);
    if (index !== -1) {
      newCartList[index].soLuong += 1;
    } else {
      newCartList.push({ ...product, soLuong: 1 });
    }
    this.setState({ cardList: newCartList });
  };
  handleQuantity = (status, maSP) => {
    let cartList = this.state.cardList;
    const index = cartList.findIndex((cart) => cart.maSP === maSP);
    if (index !== -1) {
      if (status) {
        cartList[index].soLuong += 1;
      } else {
        if (cartList[index].soLuong > 1) {
          cartList[index].soLuong -= 1;
        } else {
          cartList.splice(index, 1);
        }
      }
    }
    this.setState({ cardList: cartList });
  };
  handleRemove = (maSP) => {
    let cartList = this.state.cardList;
    const index = cartList.findIndex((cart) => cart.maSP === maSP);
    if (index !== -1) {
      cartList.splice(index, 1);
    }
    this.setState({ cardList: cartList });
  };

  totalCartList = () => {
    return this.state.cardList.reduce(
      (total, item) => (total += item.soLuong),
      0
    );
  };
  render() {
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàngs</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng ({this.totalCartList()})
          </button>
        </div>
        <ProductList
          handleSetProDetail={this.handleSetProDetail}
          handleAddCart={this.handleAddCart}
        />
        <Cart
          cardList={this.state.cardList}
          handleQuantity={this.handleQuantity}
          handleRemove={this.handleRemove}
        />
        <ProductDetail proDetail={this.state.proDetail} />
      </section>
    );
  }
}
