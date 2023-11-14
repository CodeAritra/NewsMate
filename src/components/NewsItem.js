import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imgurl, url,author , date } = this.props;
    return (
      <div>
        <div className="card my-3" style={{ width: "18rem" }}>
          <img
            src={
              !imgurl
                ? "https://timesofindia.indiatimes.com/thumb/msid-81560824,width-1200,height-900,resizemode-4/81560824.jpg"
                : imgurl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a href={url} target="_blank" className="btn btn-primary">
              Read More
            </a>
            <p className="card-text"><small className="text-body-secondary">By {author} published on {new Date(date).toGMTString()}</small></p>
          </div>
        </div>
        
      </div>
    );
  }
}
