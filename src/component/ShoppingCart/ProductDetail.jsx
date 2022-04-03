import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    // const proDetail = this.props.proDetail; es5
    const { proDetail } = this.props;
    return (
      <div className="row">
        <div className="col-sm-5">
          <img className="img-fluid" src={proDetail.hinhAnh} alt="asdas" />
        </div>
        <div className="col-sm-7">
          <h3>Thông số kỹ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{proDetail.manHinh}</td>
              </tr>
              <tr>
                <td>Hệ Điều Hành</td>
                <td>{proDetail.heDieuHanh}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{proDetail.cameraTruoc}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{proDetail.cameraSau}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{proDetail.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{proDetail.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
