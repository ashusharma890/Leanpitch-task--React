import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout,Typography,Space } from 'antd';

import {NavBar,TopBar,AboutUs,Trainings,Meetups,Webinars,Conference,Videos,PmSpeakSeries,Blog,Podcasts,Homepage,BeASpeaker,BeAVolunteer} from './components'
import './App.css';

const App = () => {
  return (
    <div className='app'>
      <TopBar/>
        <div className="Navbar">
            <NavBar/>
        </div>
          <Switch>
            <Route exact path='/homepage'>
              <Homepage/>
            </Route>
            <Route exact path='/trainings'>
              <Trainings/>
            </Route>
            <Route exact path='/meetups'>
              <Meetups/>
            </Route>
            <Route exact path='/webinars'>
              <Webinars/>
            </Route>
            <Route exact path='/conferences'>
              <Conference/>
            </Route>
            <Route exact path='/videos'>
              <Videos/>
            </Route>
            <Route exact path='/pmspeakseries'>
              <PmSpeakSeries/>
            </Route>
            <Route exact path='/blogs'>
              <Blog/>
            </Route>
            <Route exact path='/podcasts'>
              <Podcasts/>
            </Route>
            <Route exact path='/beaspeaker'>
              <BeASpeaker/>
            </Route>
            <Route exact path='/beavolunteer'>
              <BeAVolunteer/>
            </Route>
          </Switch>
            <div className="abt">
              <AboutUs />
            </div>
    </div>
  )
}

export default App