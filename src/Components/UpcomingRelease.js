import React, {Component} from 'react';


class UpcomingRelease extends Component{

render(){


  return(

    <div className="upcoming-release">


    <img className="upcoming-release__poster" src={this.props.poster} alt="Italian Trulli" ></img>


    <div className="upcoming-release__text">
    <h1>{this.props.name} </h1>
    <p><b>({this.props.year})</b></p>
    <br/>
    <p>{this.props.about}</p>
    <a href={this.props.url}>more detail</a>
    </div>


    </div>


  )
}


}

export default UpcomingRelease;
