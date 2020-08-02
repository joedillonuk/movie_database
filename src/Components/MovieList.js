import React, {Component} from 'react';
import UpcomingRelease from './UpcomingRelease';

class MovieList extends Component{

render(){

  const upcomingReleasesNodes = this.props.upcomingReleases.map(upcomingRelease => {
    return(
    <UpcomingRelease name={upcomingRelease.name} about={upcomingRelease.about} poster={upcomingRelease.poster} year={upcomingRelease.year} url={upcomingRelease.url} key={upcomingRelease.id}> </UpcomingRelease>

// about={upcomingRelease.about}
// imgUrl{upcomingRelease.imgUrl}

  )
  })

  return(
    <div className ="movie-list">
    <h4>Upcoming Releases:</h4>
    {upcomingReleasesNodes}
    <a href="https://www.imdb.com/calendar/?region=gb">See more upcoming releases</a>

    </div>



  )


}


}

export default MovieList;
