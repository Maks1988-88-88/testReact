(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),i=a.n(c);a(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(1),o=a(2),l=a(4),u=a(3),h=a(5),m=a(6),p=a.n(m),d=(a(20),a(22),["newLogin","newBrowse","newAbout"]),_=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).navName=d.map(function(e){return r.a.createElement("li",{className:"Navigation__item",key:p()()},r.a.createElement("a",{href:"http://localhost:3000/",className:"Navigation__link"},e))}),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.headerLogo;return r.a.createElement("header",{className:"Header"},r.a.createElement("h1",{className:"Header__logo"},e),r.a.createElement("ul",{className:"Navigation"},this.navName))}}]),t}(r.a.Component),f=a(7),v=(a(24),a(26),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.tittle,a=e.descr,n=e.rating,c=e.onClickAddWatchlist,i=e.img,s=e.release_date;return r.a.createElement("div",{className:"MovieCard"},r.a.createElement("div",null,r.a.createElement("span",{className:"MovieInfo__rating"},n),r.a.createElement("img",{src:i,alt:"img",className:"MovieCard__poster"}),r.a.createElement("h2",{className:"MovieInfo__title"},t),r.a.createElement("p",{className:"MovieInfo__descr"},a," "),r.a.createElement("p",{className:"MovieInfo__release"},"Release date: ",s)),r.a.createElement("button",{className:"MovieCard__btn ",onClick:c},"+"))}}]),t}(r.a.Component)),b=(a(28),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.children;return r.a.createElement("div",{className:"MovieList"},e)}}]),t}(r.a.Component)),g=a(10),E=(a(30),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={InputValues:""},a._searchValues=function(e){var t=e.target.name;a.props.Categories__btn(t)},a._searchInputValues=function(e){var t=e.target.value,n=e.target.name;a.setState(Object(g.a)({},n,t))},a._searchInputValuesonSubmit=function(e){e.preventDefault();var t=a.state.InputValues;a.props.SearchForm(t),a.setState({InputValues:""})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.InputValues,t=this.props.children;return r.a.createElement("div",{className:"App__sidebar"},r.a.createElement("form",{className:"SearchForm",onSubmit:this._searchInputValuesonSubmit},r.a.createElement("input",{type:"text",className:"SearchForm__input",name:"InputValues",value:e,onChange:this._searchInputValues,placeholder:"Search for movies by name..."}),r.a.createElement("button",{className:"SearchForm__btn",type:"submit"},"search")),r.a.createElement("div",{className:"SearchCategories"},r.a.createElement("button",{className:"SearchCategories__btn",name:"popular",onClick:this._searchValues},"popular"),r.a.createElement("button",{className:"SearchCategories__btn",name:"top_rated",onClick:this._searchValues},"top rated"),r.a.createElement("button",{className:"SearchCategories__btn",name:"upcoming",onClick:this._searchValues},"upcoming")),r.a.createElement("div",{className:"Watchlist"},r.a.createElement("h2",{className:"Watchlist__title"},"Watchlist"),t))}}]),t}(r.a.Component)),j=(a(32),function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.rating,a=e.img,n=e.tittle,c=e.release_date,i=e.onClick;return r.a.createElement("div",{className:"WatchlistCard"},r.a.createElement("img",{className:"WatchlistCard__img",src:a,alt:"img"}),r.a.createElement("div",{className:"WatchlistCard__body"},r.a.createElement("h3",{className:"WatchlistCard__title"},n),r.a.createElement("p",{className:"WatchlistCard__release"},"Released:",c),r.a.createElement("p",{className:"WatchlistCard__rating"},"Rating:",t),r.a.createElement("button",{className:"WatchlistCard__btn",onClick:i},"-")))}}]),t}(n.Component)),w=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={post:[],watchList:JSON.parse(localStorage.getItem("movie-mate-watchlist"))||[],checkId:[]},a.SearchCategories__btn=function(e){fetch("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false")).then(function(e){if(e.ok)return e.json();throw new Error("Error"+e.statusText)}).then(function(e){var t=e.results.map(function(e){return{id:e.id,release_date:e.release_date.slice(0,4),descr:e.overview.slice(0,100)+"...",tittle:e.title,rating:e.vote_average,poster_path:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+e.poster_path}});a.setState({post:t})}).catch(function(e){return console.error(e)})},a.SearchForm__input=function(e){fetch("https://api.themoviedb.org/3/search/movie?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=".concat(e,"&include_adult=false")).then(function(e){if(e.ok)return e.json();throw new Error("Error"+e.statusText)}).then(function(e){var t=e.results.map(function(e){return{id:e.id,release_date:e.release_date.slice(0,4),descr:e.overview.slice(0,100)+"...",tittle:e.title,rating:e.vote_average,poster_path:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+e.poster_path}});a.setState({post:t})}).catch(function(e){return console.error(e)})},a.onAddWatchlist=function(e,t,n,r,c){var i={id:e,rating:t,poster_path:n,tittle:r,release_date:c},s=e;a.setState({checkId:Object(f.a)(a.state.checkId).concat([s])}),a.state.checkId.includes(e)||a.setState({watchList:Object(f.a)(a.state.watchList).concat([i])})},a.onDeleteWatchlist=function(e){a.setState({watchList:a.state.watchList.filter(function(t){return t.id!==e}),checkId:a.state.checkId.filter(function(t){return t!==e})})},a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://api.themoviedb.org/3/movie/popular?api_key=680d1c453082be4c031bb516ed6208df&page=1&query=1&include_adult=false").then(function(e){if(e.ok)return e.json();throw new Error("Error"+e.statusText)}).then(function(t){var a=t.results.map(function(e){return{id:e.id,release_date:e.release_date.slice(0,4),descr:e.overview.slice(0,100)+"...",tittle:e.title,rating:e.vote_average,poster_path:"https://image.tmdb.org/t/p/w300_and_h450_bestv2"+e.poster_path}});e.setState({post:a})}).catch(function(e){return console.error(e)})}},{key:"render",value:function(){var e=this,t=this.state,a=t.post,n=t.watchList;return localStorage.setItem("movie-mate-watchlist",JSON.stringify(this.state.watchList)),a.length>0?r.a.createElement("div",{className:"App__body"},r.a.createElement(E,{Categories__btn:this.SearchCategories__btn,SearchForm:this.SearchForm__input},n.map(function(t){return r.a.createElement(j,{img:t.poster_path,tittle:t.tittle,rating:t.rating,key:t.id,release_date:t.release_date,onClick:function(){e.onDeleteWatchlist(t.id)}})})),r.a.createElement(b,null,a.map(function(t){return r.a.createElement(v,{img:t.poster_path,tittle:t.tittle,descr:t.descr,rating:t.rating,key:t.id,release_date:t.release_date,onClickAddWatchlist:function(){e.onAddWatchlist(t.id,t.rating,t.poster_path,t.tittle,t.release_date)}})}))):r.a.createElement("div",{className:"App__body"},r.a.createElement(E,{Categories__btn:this.SearchCategories__btn,SearchForm:this.SearchForm__input},n.map(function(t){return r.a.createElement(j,{img:t.poster_path,tittle:t.tittle,rating:t.rating,key:t.id,release_date:t.release_date,onClick:function(){e.onDeleteWatchlist(t.id)}})})),r.a.createElement(b,null,r.a.createElement("p",{className:"MovieCardCollection__msg"},"sorry, we did't find anything")))}}]),t}(r.a.Component),N=function(e){function t(){return Object(s.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App",id:p()()},r.a.createElement(_,{headerLogo:"Movie Mate"}),r.a.createElement(w,null))}}]),t}(r.a.Component),C=document.querySelector("#root");i.a.render(r.a.createElement(N,null),C),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,2,1]]]);
//# sourceMappingURL=main.673d1b8c.chunk.js.map