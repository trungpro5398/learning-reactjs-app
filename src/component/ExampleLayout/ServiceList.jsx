import React, { Component } from "react";
import ServiceItem from "./ServiceItem";
export default class ServiceList extends Component {
  servicesList = [
    {
      title: "Fresh new layout",
      content:
        "With Bootstrap 5, we've created a fresh new layout for this template!",
    },
    {
      title: "Free to download",
      content:
        "As always, Start Bootstrap has a powerful collectin of free templates.",
    },
    {
      title: "Jumbotron hero header",
      content: "The heroic part of this template is the jumbotron hero header!",
    },
    {
      title: "Feature boxes",
      content: "We've created some custom feature boxes using Bootstrap icons!",
    },
    {
      title: "Simple clean code",
      content:
        "We keep our dependencies up to date and squash bugs as they come!",
    },
    {
      title: "A name you trust",
      content:
        "Start Bootstrap has been the leader in free Bootstrap templates since 2013!",
    },
  ];
  renderServiceList() {
    return this.servicesList.map((item, index) => {
      return (
        <div className="col-lg-6 col-xxl-4 mb-5" key={index}>
          <ServiceItem tieuDe={item.title} noidung={item.content}></ServiceItem>
        </div>
      );
    });
  }
  render() {
    return (
      <section className="pt-4">
        <div className="container px-lg-5">
          {/* Page Features*/}
          <div className="row gx-lg-5">{this.renderServiceList()}</div>
        </div>
      </section>
    );
  }
}
