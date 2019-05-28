import React from "react";
// import v4 from "uuid/v4";
// import posts from "../../posts";
import "./style.css";
import MovieCard from "../MovieCard";
import MovieCardCollection from "../MovieCardCollection";
import AppSidebar from "../AppSidebar";
import WatchlistCard from "../WatchlistCard";

class AppBody extends React.Component {
  state = {
    post: [],
    watchList: JSON.parse(localStorage.getItem("movie-mate-watchlist")) || [],
    checkId: []
  };

  SearchCategories__btn = query => {
    fetch(
      `https://api.themoviedb.org/3/movie/${query}?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error" + response.statusText);
      })
      .then(data => {
        const films = data.results.map(film => ({
          id: film.id,
          release_date: film.release_date.slice(0, 4),
          descr: film.overview.slice(0, 100) + "...",
          tittle: film.title,
          rating: film.vote_average,
          poster_path:
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + film.poster_path
        }));
        this.setState({
          post: films
        });
      })
      .catch(err => console.error(err));
  };

  SearchForm__input = query => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=${query}&include_adult=false`
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error" + response.statusText);
      })
      .then(data => {
        const films = data.results.map(film => ({
          id: film.id,
          release_date: film.release_date.slice(0, 4),
          descr: film.overview.slice(0, 100) + "...",
          tittle: film.title,
          rating: film.vote_average,
          poster_path:
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + film.poster_path
        }));
        this.setState({
          post: films
        });
      })
      .catch(err => console.error(err));
  };

  componentWillMount() {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false"
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Error" + response.statusText);
      })
      .then(data => {
        const films = data.results.map(film => ({
          id: film.id,
          release_date: film.release_date.slice(0, 4),
          descr: film.overview.slice(0, 100) + "...",
          tittle: film.title,
          rating: film.vote_average,
          poster_path:
            "https://image.tmdb.org/t/p/w300_and_h450_bestv2" + film.poster_path
        }));
        // console.log(films.length);
        this.setState({
          post: films
        });
      })
      .catch(err => console.error(err));
  }

  // componentWillMount(){
  //   fetch(`https://api.themoviedb.org/3/search/movie?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false`)
  //     .then(response => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Error" + response.statusText);
  //     })
  //   .then(data => console.log(data))
  //   .catch (err => console.error(err));
  // }

  onAddWatchlist = (id, rating, poster_path, tittle, release_date) => {
    const newWatchList = {
      id: id,
      rating: rating,
      poster_path: poster_path,
      tittle: tittle,
      release_date: release_date
    };
    const newId = id;
    this.setState({
      checkId: [...this.state.checkId, newId]
    });
    const { checkId } = this.state;
    if (!checkId.includes(id)) {
      this.setState({
        watchList: [...this.state.watchList, newWatchList]
      });
    }
  };

  onDeleteWatchlist = id => {
    this.setState({
      watchList: this.state.watchList.filter(
        currentPost => currentPost.id !== id
      ),
      checkId: this.state.checkId.filter(
        currentcheckId => currentcheckId !== id
      )
    });
  };

  render() {
    const { post, watchList } = this.state;
    localStorage.setItem(
      "movie-mate-watchlist",
      JSON.stringify(this.state.watchList)
    );
    if (post.length > 0) {
      return (
        <div className="App__body">
          <AppSidebar
            Categories__btn={this.SearchCategories__btn}
            SearchForm={this.SearchForm__input}
          >
            {watchList.map(watchList => (
              <WatchlistCard
                img={watchList.poster_path}
                tittle={watchList.tittle}
                rating={watchList.rating}
                key={watchList.id}
                release_date={watchList.release_date}
                onClick={() => {
                  this.onDeleteWatchlist(watchList.id);
                }}
              />
            ))}
          </AppSidebar>

          <MovieCardCollection>
            {post.map(post => (
              <MovieCard
                img={post.poster_path}
                tittle={post.tittle}
                descr={post.descr}
                rating={post.rating}
                key={post.id}
                release_date={post.release_date}
                onClickAddWatchlist={() => {
                  this.onAddWatchlist(
                    post.id,
                    post.rating,
                    post.poster_path,
                    post.tittle,
                    post.release_date
                  );
                }}
              />
            ))}
          </MovieCardCollection>
        </div>
      );
    } else {
      return (
        <div className="App__body">
          <AppSidebar
            Categories__btn={this.SearchCategories__btn}
            SearchForm={this.SearchForm__input}
          >
            {watchList.map(watchList => (
              <WatchlistCard
                img={watchList.poster_path}
                tittle={watchList.tittle}
                rating={watchList.rating}
                key={watchList.id}
                release_date={watchList.release_date}
                onClick={() => {
                  this.onDeleteWatchlist(watchList.id);
                }}
              />
            ))}
          </AppSidebar>
          <MovieCardCollection>
            <p className="MovieCardCollection__msg">
              sorry, we did't find anything
            </p>
          </MovieCardCollection>
        </div>
      );
    }
  }
}

export default AppBody;
