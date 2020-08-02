import React, {Component} from 'react';
import MovieList from '../Components/MovieList';

class MovieDatabase extends Component{

constructor(props){
  super(props);
  this.state = {
    upcomingReleases: [
      {
    id: 1,
    name: "Chopping Mall",
    year: "1986",
    about: "A group of young shopping mall employees stay behind for a late night party in one of the stores. When the mall goes on lock-down before they can get out, the robot security system malfunctions, and goes on a killing spree.",
    url: "https://www.imdb.com/title/tt0090837/",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/9c/Choppingmall.jpg"
  },
  {

  id: 2,
  name: "The Stuff",
  year: "1985",
  about: "A delicious, mysterious goo that oozes from the earth is marketed as the newest dessert sensation, but the tasty treat rots more than teeth when zombie-like snackers who only want to consume more of the strange substance at any cost begin infesting the world.",
  url: "https://www.imdb.com/title/tt0090094/",
  poster: "https://upload.wikimedia.org/wikipedia/en/6/60/The-Stuff-poster.jpg"
},
  {
    id: 3,
    name: "Casablanca",
    year: "1942",
    about: "A cynical American expatriate struggles to decide whether or not he should help his former lover and her fugitive husband escape French Morocco.",
    url: "https://www.imdb.com/title/tt0034583/",
    poster: "https://upload.wikimedia.org/wikipedia/commons/b/b3/CasablancaPoster-Gold.jpg"

  },
  {
    id: 4,
    name: "As Good as It Gets",
    year: "1997",
    about: "A single mother and waitress, a misanthropic author, and a gay artist form an unlikely friendship after the artist is assaulted in a robbery.",
    url: "https://www.imdb.com/title/tt0119822/",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/dc/As_good_as_it_gets.jpg"

  },
  {
    id: 5,
    name: "The Wicker Man",
    year: "1973",
    about: "A puritan Police Sergeant is sent to a Scottish island village in search of a missing girl who the townsfolk claim never existed; stranger still are the pagan rites that take place there.",
    url: "https://www.imdb.com/title/tt0070917/",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/11/The_Wicker_Man_%281973_film%29_UK_poster.jpg"

  }
    ]
  }


}

render(){
  return(

      <div className="movie-database">
      <h1>The Movie Database.</h1>
      <MovieList upcomingReleases={this.state.upcomingReleases} />
      </div>

  )
}




}

export default MovieDatabase;
