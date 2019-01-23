import React, { Component ,Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from './NavBar.js'
import InfoBar from './InfoBar.js'

import DinosaurListContainer from "./Containers/dinosaurs/DinosaurListContainer.js"
import PaddockListContainer from "./Containers/paddocks/PaddockListContainer.js"
import VisitorListContainer from "./Containers/visitors/VisitorListContainer.js"
import ZoneListContainer from "./Containers/zones/ZoneListContainer.js"

import DinosaurFormContainer from "./Containers/dinosaurs/DinosaurFormContainer.js"
import PaddockFormContainer from "./Containers/paddocks/PaddockFormContainer.js"
import DinosaurEditContainer from "./Containers/dinosaurs/DinosaurEditContainer.js"
import DinosaurSingleContainer from "./Containers/dinosaurs/DinosaurSingleContainer.js"
import PaddockSingleContainer from "./Containers/paddocks/PaddockSingleContainer.js"
import HomeContainer from "./Containers/Home/HomeContainer.js"
import './App.css';

class App extends Component {




  render() {
    return (
      <Router >
        <Fragment>
          <>
          <NavBar />
          <InfoBar/>
          </>
          <Switch>
            <Route exact path= "/"
            component={HomeContainer}/>
            <Route exact path = '/dinosaurs' component={DinosaurListContainer}/>
            <Route exact path = '/dinosaurs/new' component={DinosaurFormContainer}/>
            <Route exact path = '/paddocks' component={PaddockListContainer}/>
            <Route exact path = '/paddocks/new' component={PaddockFormContainer}/>
            <Route exact path = '/visitors' component={VisitorListContainer}/>
            <Route exact path = '/zones' component={ZoneListContainer}/>
            <Route exact path="/dinosaurs/:id" render = {(props) =>{
              const id = props.match.params.id;
              return <DinosaurSingleContainer id = {id} />
            }}
            />
            <Route exact path="/paddocks/:id" render = {(props) =>{
              const id = props.match.params.id;
              return <PaddockSingleContainer id = {id} />
            }}
            />
            <Route exact path="/dinosaurs/edit/:id" render = {(props) =>{
            const id = props.match.params.id;
            return <DinosaurEditContainer id = {id} />
            }}
          />
          </Switch>
          </Fragment>
    </Router>
    );
  }
}

export default App;
