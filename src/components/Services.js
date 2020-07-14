import React , { Component } from 'react';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';
import Title from './Title';


class Services extends Component {
  state = {
    services:[
      {
        icon:<FaCocktail />,
        title:"Free Cocktails",
        info:"This is a free cocktail for you to enjoy yourself, but while you are enjoying dont forget Jehovah!"
      },
      {
        icon:<FaHiking />,
        title:"Endless Hiking",
        info:"This is a free cocktail for you to enjoy yourself, but while you are enjoying dont forget Jehovah!"
  
      },
      {
        icon:<FaShuttleVan />,
        title:"Free Shuttle",
        info:"This is a free cocktail for you to enjoy yourself, but while you are enjoying dont forget Jehovah!"
  
      },
      {
        icon:<FaBeer />,
        title:"Refined Beer",
        info:"This is a free cocktail for you to enjoy yourself, but while you are enjoying dont forget Jehovah!"
  
      }
    ]
      
    
  
  }
  render(){
    return(
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map( (item, index)  => {
            return <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          })}
        </div>
      </section>
    );
  }
}

export default Services;