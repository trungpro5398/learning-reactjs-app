import React, { Component } from "react";

export default class ServiceItem extends Component {
  render() {
    return (
      <div className="card bg-light border-0 h-100">
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4">
            <i className="bi bi-collection" />
          </div>
          <h2 className="fs-4 fw-bold">{this.props.tieuDe}</h2>
          <p className="mb-0">{this.props.noidung}</p>
        </div>
      </div>
    );
  }
}
