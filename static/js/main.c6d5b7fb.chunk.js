(this["webpackJsonpscores-app"]=this["webpackJsonpscores-app"]||[]).push([[0],{32:function(e,t,a){e.exports=a(46)},45:function(e,t,a){},46:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(19),l=a.n(o),s=a(2),c=a(3),i=a(5),u=a(4),p=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null," ",r.a.createElement("a",{href:""},"Football Scores")))}}]),a}(n.Component),m=a(16),h=a(17),d=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleSwitch=function(e){e.preventDefault(),n.setState({switchValue:"sun"===n.state.switchValue?"moon":"sun",mode:"Dark"===n.state.mode?"Light":"Dark"}),n.props.switch(),localStorage.setItem("switch",JSON.stringify("sun"===n.state.switchValue?"moon":"sun")),localStorage.setItem("mode",JSON.stringify("Dark"===n.state.mode?"Light":"Dark"))},n.state={switchValue:localStorage.getItem("switch")?JSON.parse(localStorage.getItem("switch")):"sun",mode:localStorage.getItem("mode")?JSON.parse(localStorage.getItem("mode")):"Dark"},n}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"header-container_nav"},r.a.createElement("ul",{className:"header-container_nav_ul"},r.a.createElement("li",null,r.a.createElement("a",{href:"none",onClick:function(t){return e.handleSwitch(t)}},"sun"===this.state.switchValue&&r.a.createElement(m.a,{icon:h.c,style:{color:"#FBDB48"}}),"   ",this.state.mode," mode","   ","moon"===this.state.switchValue&&r.a.createElement(m.a,{icon:h.b,style:{color:"#EAEAEA"}}))),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Settings")),r.a.createElement("li",null,r.a.createElement("a",{href:"#"},"Login / Register"))))}}]),a}(n.Component),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"header-container"},r.a.createElement(p,null),r.a.createElement(d,{switch:this.props.switch}))}}]),a}(n.Component),g=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return{type:"UPDATE_STATE",payload:{arr:e,isLoaded:t}}},y=function(e){return{type:"CREATE_COUNTRIES",payload:e}},E=function(e){return function(t){fetch(e,{method:"GET",headers:{"x-rapidapi-host":"api-football-v1.p.rapidapi.com","x-rapidapi-key":"05da0dc747msh09150755268e421p148c8djsna768d3fd2802"}}).then((function(e){return e.json()})).then((function(e){var a=[];e.api.fixtures.forEach((function(e){"Match Postponed"!==e.status&&"Match Cancelled"!==e.status&&a.push(e)})),t(g(a)),t(y(a))})).catch((function(e){return console.log(e)}))}},v=a(14),b=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("li",{style:{display:this.props.visibility}},this.props.leagues.map((function(t){return r.a.createElement("a",{className:"leagues-for-country",style:{display:"block",margin:"0.75rem",lineHeight:"1rem",cursor:"pointer"},onClick:function(){return e.props.fetch(t.league_id)}},t.name)})))}}]),a}(n.Component),O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.setState({visibility:"none"===n.state.visibility?"block":"none"}),n.fetchLeagues()},n.state={visibility:"none",leagues:[]},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.fetchLeagues=function(){fetch("https://api-football-v1.p.rapidapi.com/v2/leagues/country/".concat(e.props.country.country,"/2019"),{method:"GET",headers:{"x-rapidapi-host":"api-football-v1.p.rapidapi.com","x-rapidapi-key":"05da0dc747msh09150755268e421p148c8djsna768d3fd2802"}}).then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({leagues:t.api.leagues})})).catch((function(e){console.log(e)}))}}},{key:"render",value:function(){return r.a.createElement("li",{style:{display:"block"}},r.a.createElement("img",{src:"World"===this.props.country.country?"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/International_Flag_of_Planet_Earth.svg/350px-International_Flag_of_Planet_Earth.svg.png":this.props.country.flag,alt:"flag"}),r.a.createElement("span",{onClick:this.handleClick,style:{cursor:"pointer"}},this.props.country.country),r.a.createElement("ul",{style:{display:this.state.visibility}},this.state.leagues&&r.a.createElement(b,{country:this.props.country.country,leagues:this.state.leagues,visibility:this.state.visibility,fetch:this.props.fetch})))}}]),a}(n.Component),k=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleToClose=function(){e.props.handleToClosed()},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("table",{className:"show-next-games",style:{display:this.props.games.length>0?"block":"none"}},r.a.createElement("thead",{style:{textAlign:"center"}},r.a.createElement("tr",{style:{fontSize:"1.5rem",textShadow:"0 0 0 #a06664"}},"Next Games ",r.a.createElement("span",{style:{position:"absolute",right:"2rem",cursor:"pointer"},onClick:this.handleToClose},"X")),r.a.createElement("tr",null,r.a.createElement("td",null,"Home Team - Away Team"),r.a.createElement("td",null,"Time"))),r.a.createElement("tbody",null,this.props.games.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:e.homeTeam.logo}),e.homeTeam.team_name," - ",e.awayTeam.team_name," ",r.a.createElement("img",{src:e.awayTeam.logo})),r.a.createElement("td",null,e.event_date.slice(0,10)," ",e.event_date.slice(11,16)))}))))}}]),a}(n.Component),j=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).fetchNextGames=function(e){fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/league/".concat(e,"/next/10?timezone=Europe/Warsaw"),{method:"GET",headers:{"x-rapidapi-host":"api-football-v1.p.rapidapi.com","x-rapidapi-key":"05da0dc747msh09150755268e421p148c8djsna768d3fd2802"}}).then((function(e){return e.json()})).then((function(e){console.log(e),n.setState({arrLeagues:e.api.fixtures,isShowed:!0})})).catch((function(e){console.log(e)}))},n.handleToClosed=function(){n.setState({isShowed:!1})},n.state={arrLeagues:[],isShowed:!1},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.props.fetchApiListCountries("https://api-football-v1.p.rapidapi.com/v2/countries")}},{key:"render",value:function(){var e=this;return this.props.list?r.a.createElement(r.a.Fragment,null,r.a.createElement("section",{className:"main-content_countries"},r.a.createElement("ul",{className:"main-content_countries_list"},this.props.list.map((function(t){return r.a.createElement(O,{key:t.id,country:t,fetch:e.fetchNextGames})})))),this.state.isShowed&&r.a.createElement(k,{handleToClosed:this.handleToClosed,style:{display:this.state.isShowed?"block":"none"},games:this.state.arrLeagues})):r.a.createElement("section",{className:"main-content_countries"})}}]),a}(n.Component),w=Object(v.b)((function(e){return{list:e.reducerList}}),(function(e){return{fetchApiListCountries:function(t){return e(function(e){return function(t){fetch(e,{method:"GET",headers:{"x-rapidapi-host":"api-football-v1.p.rapidapi.com","x-rapidapi-key":"05da0dc747msh09150755268e421p148c8djsna768d3fd2802"}}).then((function(e){return e.json()})).then((function(e){var a=e.api.countries;t({type:"CREATE_LIST",payload:a}),console.log(a)})).catch((function(e){return console.log(e)}))}}(t))}}}))(j),S=a(13),C=a(7),x=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=this.props.game,a=new Date(1e3*t.event_timestamp),n=a.getHours(),o="0"+a.getMinutes();return"Match Finished"===t.status?r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",style:{marginRight:"0.5rem"},defaultChecked:!!t.isLiked,onClick:function(a){return e.props.toggle(t,a.target.checked)}}),r.a.createElement("span",{style:{color:"green",fontWeight:"bold"}},"Finished")," ",r.a.createElement("span",{style:{opacity:0}},"-----------")," "),r.a.createElement("span",null,r.a.createElement("span",{style:{fontWeight:t.goalsHomeTeam>t.goalsAwayTeam?"bold":""}},t.homeTeam.team_name," ")," - ",r.a.createElement("span",{style:{fontWeight:t.goalsHomeTeam<t.goalsAwayTeam?"bold":""}},t.awayTeam.team_name))," ",r.a.createElement("span",{style:{fontWeight:"bold"}},t.score.fulltime)):"Not Started"===t.status?r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",style:{marginRight:"0.5rem"},defaultChecked:!!t.isLiked,onClick:function(a){return e.props.toggle(t,a.target.checked)}}),r.a.createElement("span",{style:{fontStyle:"italic"}},"Not started "),r.a.createElement("span",{style:{opacity:0}},"-----------"),r.a.createElement("span",null,n+":"+o.substr(-2)))," ",r.a.createElement("span",null,r.a.createElement("span",null,t.homeTeam.team_name," ")," - ",r.a.createElement("span",null,t.awayTeam.team_name))," ",r.a.createElement("span",{style:{fontWeight:"bold"}},"?-?")):"First Half"===t.status||"Second Half"===t.status?r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",style:{marginRight:"0.5rem"},defaultChecked:!!t.isLiked,onClick:function(a){return e.props.toggle(t,a.target.checked)}}),r.a.createElement("span",{style:{color:"red",fontStyle:"italic"}},"Live"),r.a.createElement("span",{style:{opacity:0}},"----------------------"),r.a.createElement("span",{style:{color:"red"}}," ",t.elapsed,"'"))," ",r.a.createElement("span",null,r.a.createElement("span",null,t.homeTeam.team_name," ")," - ",r.a.createElement("span",null,t.awayTeam.team_name))," ",r.a.createElement("span",{style:{fontWeight:"bold"}},t.goalsHomeTeam,"-",t.goalsAwayTeam)):"Halftime"===t.status?r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("input",{type:"checkbox",style:{marginRight:"0.5rem"},defaultChecked:!!t.isLiked,onClick:function(a){return e.props.toggle(t,a.target.checked)}}),r.a.createElement("span",{style:{color:"red",fontStyle:"italic"}},"Live"),r.a.createElement("span",{style:{opacity:0}},"----------------------"),r.a.createElement("span",{style:{color:"red"}}," ",t.statusShort))," ",r.a.createElement("span",null,r.a.createElement("span",null,t.homeTeam.team_name," ")," - ",r.a.createElement("span",null,t.awayTeam.team_name))," ",r.a.createElement("span",{style:{fontWeight:"bold"}},t.goalsHomeTeam,"-",t.goalsAwayTeam)):r.a.createElement("li",null,r.a.createElement("span",null,t.status))}}]),a}(n.Component),T=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.handleSortByWins=function(t){e.props.sortByWins(t)},this.handleSortByPoints=function(t){e.props.sortByPoints(t)},this.handleSortByGoals=function(t){e.props.sortByGoals(t)}}},{key:"render",value:function(){var e=this,t=this.props,a=t.arr,n=t.display;return a?r.a.createElement("div",{className:"show-table",style:{display:n}},r.a.createElement("button",{onClick:function(){return e.handleSortByPoints(a)}},"Sort by points"),r.a.createElement("button",{onClick:function(){return e.handleSortByWins(a)}},"Sort by wins"),r.a.createElement("button",{onClick:function(){return e.handleSortByGoals(a)}},"sort by +goals"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",{style:{fontWeight:"bold"}},r.a.createElement("td",null,"Position"),r.a.createElement("td",null,"Team name"),r.a.createElement("td",null,"Total points"),r.a.createElement("td",null,"Total games"),r.a.createElement("td",null,"Win-Draw-Lost"),r.a.createElement("td",null,"Goals scored"),r.a.createElement("td",null,"Goals lost"),r.a.createElement("td",null,"Goal difference"))),r.a.createElement("tbody",null,a.map((function(e){return r.a.createElement("tr",{key:e.team_id},r.a.createElement("td",null,e.rank),r.a.createElement("td",null,e.teamName),r.a.createElement("td",null,e.points),r.a.createElement("td",null,e.all.matchsPlayed),r.a.createElement("td",null,e.all.win,"-",e.all.draw,"-",e.all.lose),r.a.createElement("td",null,e.all.goalsFor),r.a.createElement("td",null,e.all.goalsAgainst),r.a.createElement("td",null,e.goalsDiff))}))))):null}}]),a}(n.Component),N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={arr:[],display:"none",standings:"Standings"},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.sortByWins=function(t){e.setState({arr:t.sort((function(e,t){return t.all.win-e.all.win}))})},this.sortByPoints=function(t){e.setState({arr:t.sort((function(e,t){return e.rank-t.rank}))})},this.sortByGoals=function(t){e.setState({arr:t.sort((function(e,t){return t.goalsDiff-e.goalsDiff}))})},this.handle=function(t){fetch("https://api-football-v1.p.rapidapi.com/v2/leagueTable/".concat(t),{method:"GET",headers:{"x-rapidapi-host":"api-football-v1.p.rapidapi.com","x-rapidapi-key":"05da0dc747msh09150755268e421p148c8djsna768d3fd2802"}}).then((function(e){return e.json()})).then((function(t){console.log(t.api);var a=t.api.standings[0];e.addToArr(a)})).catch((function(e){console.log(e)}))},this.addToArr=function(t){e.setState({arr:t,display:"none"===e.state.display?"":"none",standings:"Standings"===e.state.standings?"Close":"Standings"})}}},{key:"render",value:function(){var e=this;return this.props.fixtures.length&&this.props.fixtures.filter((function(t){return t.league.country===e.props.country.country})).length&&this.props.fixtures.filter((function(t){return t.league.name===e.props.country.name})).length?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,r.a.createElement("div",null,r.a.createElement("div",{className:"show-country-league"},r.a.createElement("img",{className:"show-country-league_img",src:this.props.country.flag?this.props.country.flag:this.props.country.logo,alt:"flag"}),r.a.createElement("h4",{className:"show-country-league_header"}," ",this.props.country.country," - ",this.props.country.name),r.a.createElement("span",{onClick:function(){return e.handle(e.props.country.id)}},this.state.standings," ")),r.a.createElement(T,{key:this.props.country.id,display:this.state.display,arr:this.state.arr,sortByWins:this.sortByWins,sortByPoints:this.sortByPoints,sortByGoals:this.sortByGoals}),this.props.fixtures.map((function(t){if(e.props.country.country===t.league.country&&e.props.country.name===t.league.name)return r.a.createElement(x,{key:t.homeTeam.team_id,game:t,toggle:e.props.toggle})}))))):null}}]),a}(n.Component),_=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("ul",{className:"show-scores"},this.props.countries.map((function(t){return r.a.createElement(N,{key:"".concat(t.country," - ").concat(t.name),country:t,fixtures:e.props.fixtures.arr,toggle:e.props.toggle})}))))}}]),a}(n.Component),L=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.props.fixtures.arr.filter((function(e){return"First Half"===e.status||"Second Half"===e.status||"Halftime"===e.status})).length?r.a.createElement("div",null,r.a.createElement("ul",{className:"show-scores"},this.props.countries.map((function(t){return r.a.createElement(N,{country:t,fixtures:e.props.fixtures.arr.filter((function(e){return"First Half"===e.status||"Second Half"===e.status||"Halftime"===e.status})),toggle:e.props.toggle})})))):r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"center",lineHeight:"50vh"}},"No live games now..."))}}]),a}(n.Component),A=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.props.fixtures.arr.filter((function(e){return e.isLiked})).length?r.a.createElement("div",null,r.a.createElement("ul",{className:"show-scores"},this.props.countries.map((function(t){return r.a.createElement(N,{country:t,fixtures:e.props.fixtures.arr.filter((function(e){return e.isLiked})),toggle:e.props.toggle})})))):r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"center",lineHeight:"50vh"}},"Not yet added liked games!"))}}]),a}(n.Component),D=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.props.fixtures.arr.filter((function(e){return"Not Started"===e.status})).length?r.a.createElement("div",null,r.a.createElement("ul",{className:"show-scores"},this.props.countries.map((function(t){return r.a.createElement(N,{country:t,fixtures:e.props.fixtures.arr.filter((function(e){return"Not Started"===e.status})),toggle:e.props.toggle})})))):r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"center",lineHeight:"50vh"}},"No scheduled games now..."))}}]),a}(n.Component),H=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){var e=this;return this.props.fixtures.arr.filter((function(e){return"Match Finished"===e.status})).length?r.a.createElement("div",null,r.a.createElement("ul",{className:"show-scores"},this.props.countries.map((function(t){return r.a.createElement(N,{country:t,fixtures:e.props.fixtures.arr.filter((function(e){return"Match Finished"===e.status})),toggle:e.props.toggle})})))):r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"center",lineHeight:"50vh"}},"No finished games now..."))}}]),a}(n.Component),B=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h3",{style:{textAlign:"center",lineHeight:"50vh"}},"Error 404, please return to main page!"))}}]),a}(n.Component),W=a(30),G=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).onChange=function(e){n.setState({date:e}),n.props.createToday(e)},n.state={date:new Date},n}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"show-calendar_content",style:{display:this.props.display}},r.a.createElement(W.a,{onChange:this.onChange,value:this.state.date}))}}]),a}(n.Component),I=new Date,F=I.getDate(),M=I.getMonth()+1,P=I.getFullYear(),J=function(e,t,a){return t<10&&(t="0"+t),a<10&&(a="0"+a),"".concat(e,"-").concat(t,"-").concat(a)},R=J(P,M,F),U=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={showHide:"show",display:"none",dateUrl:R},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.props.fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/date/".concat(this.state.dateUrl,"?timezone=Europe/Warsaw")),this.createToday=function(t){var a=t.getDate(),n=t.getMonth()+1,r=t.getFullYear(),o=J(r,n,a);e.props.fetch("https://api-football-v1.p.rapidapi.com/v2/fixtures/date/".concat(o,"?timezone=Europe/Warsaw")),e.setState({dateUrl:o})}}},{key:"render",value:function(){var e=this;return r.a.createElement("section",{className:"main-content_scores"},r.a.createElement(S.a,null,r.a.createElement("nav",{className:"main-content_scores_nav"},r.a.createElement("ul",{className:"main-content_scores_nav_list"},r.a.createElement("li",null,r.a.createElement(S.b,{exact:!0,to:"/",activeClassName:"actived-navlink"},"All scores")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/live",activeClassName:"actived-navlink"},"Live scores")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/finished",activeClassName:"actived-navlink"},"Finished")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/scheduled",activeClassName:"actived-navlink"},"Scheduled")),r.a.createElement("li",null,r.a.createElement(S.b,{to:"/myscores",activeClassName:"actived-navlink"},"My scores"))),r.a.createElement("div",{className:"show-calendar"}," ",r.a.createElement("span",{onClick:function(){return e.setState({showHide:"show"===e.state.showHide?"hide":"show",display:"none"===e.state.display?"":"none"})}},this.state.showHide," calendar"),r.a.createElement(G,{createToday:this.createToday,display:this.state.display}))),this.props.state.isLoaded&&this.props.countries&&r.a.createElement(C.c,null,r.a.createElement(C.a,{exact:!0,path:"/",component:function(){return r.a.createElement(_,{fixtures:e.props.state,countries:e.props.countries,toggle:e.props.toggle})}}),r.a.createElement(C.a,{path:"/live",component:function(){return r.a.createElement(L,{fixtures:e.props.state,countries:e.props.countries,toggle:e.props.toggle})}}),r.a.createElement(C.a,{path:"/finished",component:function(){return r.a.createElement(H,{fixtures:e.props.state,countries:e.props.countries,toggle:e.props.toggle})}}),r.a.createElement(C.a,{path:"/scheduled",component:function(){return r.a.createElement(D,{fixtures:e.props.state,countries:e.props.countries,toggle:e.props.toggle})}}),r.a.createElement(C.a,{path:"/myscores",component:function(){return r.a.createElement(A,{countries:e.props.countries,fixtures:e.props.state,toggle:e.props.toggle})}}),r.a.createElement(C.a,{component:B}))))}}]),a}(n.Component),V=Object(v.b)((function(e){return{state:e.reducerScores,countries:e.reducerCountries}}),(function(e){return{fetch:function(t){return e(E(t))},update:function(t){return e(g(t))},createCountries:function(t){return e(y(t))},toggle:function(t,a){return e(function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:"TOGGLE",payload:{game:e,isLiked:t}}}(t,a))}}}))(U),z=r.a.createElement(m.a,{icon:h.a}),Y=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).toTop=function(){window.scrollTo(0,0)},e}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("button",{className:"to-top",onClick:this.toTop},z)}}]),a}(n.Component),K=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={button:""},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.handleScroll=function(){e.setState({button:window.pageYOffset})},window.addEventListener("scroll",this.handleScroll)}},{key:"render",value:function(){return r.a.createElement("main",{className:"main-content"},r.a.createElement(w,null),r.a.createElement(V,null),this.state.button>150&&r.a.createElement(Y,null))}}]),a}(n.Component),X=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer-container"},r.a.createElement("div",null,"Football Scores App"),r.a.createElement("div",{style:{fontStyle:"italic"}},"by Kamil Wojtas 2020"))}}]),a}(n.Component),$=a(12),q=a(29),Q=a(31),Z=Object($.c)({reducerScores:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"UPDATE_STATE"===t.type?(localStorage.getItem("fixtures")&&t.payload.arr.forEach((function(e){console.log(JSON.parse(localStorage.getItem("fixtures"))),JSON.parse(localStorage.getItem("fixtures")).arr.forEach((function(t){t.fixture_id===e.fixture_id&&t.isLiked&&(e.isLiked=!0)}))})),t.payload):"TOGGLE"===t.type?(e.arr.forEach((function(e){e.fixture_id===t.payload.game.fixture_id&&(e.isLiked=t.payload.isLiked)})),localStorage.setItem("fixtures",JSON.stringify(e)),e):e},reducerCountries:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;if("CREATE_COUNTRIES"===t.type){var a=[],n=[];return t.payload.forEach((function(e){-1===n.indexOf(e.league_id)&&(e.league.id=e.league_id,a=[].concat(Object(Q.a)(a),[e.league])),n.push(e.league_id)})),a}return e},reducerList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"CREATE_LIST"===t.type?t.payload:e}}),ee=Object($.d)(Z,Object($.a)(q.a)),te=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).switchMode=function(){n.setState({switchClass:"dark"===n.state.switchClass?"":"dark"}),localStorage.setItem("whichTheme",JSON.stringify("dark"===n.state.switchClass?"":"dark"))},n.state={switchClass:localStorage.getItem("whichTheme")?JSON.parse(localStorage.getItem("whichTheme")):"",bodyBackground:""},n}return Object(c.a)(a,[{key:"componentDidUpdate",value:function(){document.body.style.backgroundColor="dark"===this.state.switchClass?"#363434":""}},{key:"render",value:function(){return r.a.createElement(v.a,{store:ee},r.a.createElement("div",{className:"main-wrapper ".concat(this.state.switchClass)},r.a.createElement(f,{switch:this.switchMode}),r.a.createElement(K,null),r.a.createElement(X,null)))}}]),a}(n.Component),ae=(a(45),function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(te,null)}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ae,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.c6d5b7fb.chunk.js.map