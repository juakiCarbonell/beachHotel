import React, { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

import Title from './Title';

class Services extends Component {

  state = {
    services: [
      {
        icon: <FaCocktail/>,
        title: "Free conctails",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, iste!"
      },
      {
        icon: <FaHiking/>,
        title: "Endless Hicking",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, iste!"
      },
      {
        icon: <FaShuttleVan/>,
        title: "Free shuttle",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, iste!"
      },
      {
        icon: <FaBeer/>,
        title: "Strongest beer",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, iste!"
      }
    ]
  }

  render() {
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
              )
          })}
        </div>
        
      </section>
    );
  }
}

export default Services;