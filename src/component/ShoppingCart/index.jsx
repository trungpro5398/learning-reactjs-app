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
  render() {
    return (
      <section className="container">
        <h3 className="title text-center">Bài tập giỏ hàng</h3>
        <div className="container text-center my-2">
          <button
            className="btn btn-danger "
            data-toggle="modal"
            data-target="#modelId"
          >
            Giỏ hàng (8)
          </button>
        </div>
        <ProductList
          handleSetProDetail={this.handleSetProDetail}
          handleAddCart={this.handleAddCart}
        />
        <Cart cardList={this.state.cardList} />
        <ProductDetail proDetail={this.state.proDetail} />
      </section>
    );
  }
}
