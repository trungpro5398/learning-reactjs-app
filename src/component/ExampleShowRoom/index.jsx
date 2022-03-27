import React, { Component } from "react";

export default class ExampleShowRoom extends Component {
  state = {
    imgSourceCar: "./img/car/products/black-car.jpg",
  }; // khi giá trị state thay đổi thì tự động render lại
  car = "./img/car/products/black-car.jpg";
  handleClick(e, color) {
    e.preventDefault(); // chặn sự kiện của browser
    switch (color) {
      case "black":
        this.car = "./img/car/products/black-car.jpg";
        this.setState({ imgSourceCar: this.car });
        break;
      case "red":
        this.car = "./img/car/products/red-car.jpg";
        this.setState({ imgSourceCar: this.car });
        break;
      case "silver":
        this.car = "./img/car/products/silver-car.jpg";
        this.setState({ imgSourceCar: this.car });
        break;
      case "steel":
        this.car = "./img/car/products/steel-car.jpg";
        this.setState({ imgSourceCar: this.car });
        break;
      default:
        this.car = "./img/car/products/black-car.jpg";
        this.setState({ imgSourceCar: this.car });
        break;
    }
    // this.forceUpdate(); // thường dùng trong vấn đề fix bug: giá trị thay đổi nhung UI k đổi
    console.log(this.car);
  }
  render() {
    return (
      <div>
        <section className="show-room">
          <h2 className="text-center">Bài Tập Chọn Màu Xe</h2>
          <div className="container">
            <div className="chose__color d-flex justify-content-around">
              <button
                className="btn"
                onClick={(e) => this.handleClick(e, "black")}
              >
                <img
                  src="./img/car/icons/icon-black.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={(e) => this.handleClick(e, "red")}
              >
                <img
                  src="./img/car/icons/icon-red.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={(e) => this.handleClick(e, "silver")}
              >
                <img
                  src="./img/car/icons/icon-silver.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
              <button
                className="btn"
                onClick={(e) => this.handleClick(e, "steel")}
              >
                <img
                  src="./img/car/icons/icon-steel.jpg"
                  alt="hinh"
                  style={{ width: 50 }}
                />
              </button>
            </div>
            <h1>forceUpdate</h1>
            <div className="car mt-2">
              <img className="img-thumbnail" src={this.car} alt="hinh" />
            </div>
            <h1>state</h1>
            <div className="car mt-2">
              <img
                className="img-thumbnail"
                src={this.state.imgSourceCar}
                alt="hinh"
              />
            </div>
          </div>
        </section>
        ;
      </div>
    );
  }
}
