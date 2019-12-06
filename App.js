import React from "react";
import { Root } from "native-base";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import LoginPage from "./src/pages/login"; // CONCLUIDO
import MainPage from "./src/pages/main"; // CONCLUIDO
import RegisterPage from "./src/pages/register"; // CONCLUIDO

import DetailEventScreen from "./src/pages/DetailEventScreen";
import DetailEventCalendarScreen from "./src/pages/DetailEventCalendarScreen";


import BiblePage from "./src/pages/biblePage"; 
import ContactPage from "./src/pages/contactPage"; 
import EventPage from "./src/pages/eventPage"; 
import ProfilePage from "./src/pages/profilePage"; 
import ForgotPasswordPage from "./src/pages/forgotPasswordPage"; 
import TermAndPoliticsPage from "./src/pages/termPage"; 
import AdministratorPage from "./src/pages/admPage"; 
import CorePage from "./src/pages/corePage"; 
import MenuPage from "./src/pages/menuPage"; 
import AlterPasswordPage from "./src/pages/alterPassword";
import PrayPage from "./src/pages/prayPage";
import VersesBibleScreen from "./src/pages/VersesBibleScreen";

import InputEventPage from "./src/pages/inputEventPage.js";
import InputDevocionalPage from "./src/pages/inputDevocionalPage";
import MainDevocionalPage from "./src/pages/mainDevocionalPage"; 
import DevocionalPage from "./src/pages/devocionalPage"; 
import NotificationPage from "./src/pages/notificationPage"; 
import PrayAdmPage from "./src/pages/prayAdmPage"; 

import { Router, Stack, Scene } from "react-native-router-flux";
import reducers from './src/store/reducers'; 
const App = () => (
  <Provider store={createStore(reducers, {})}>
    <Root>

      <Router>
        <Stack key="root">
          <Scene initial key="login" hideNavBar component={LoginPage} />
          <Scene key="main" hideNavBar component={MainPage} />

          <Scene key="bible" hideNavBar component={BiblePage} />
          <Scene key="contact" hideNavBar component={ContactPage} />
          <Scene key="event" hideNavBar component={EventPage} />
          <Scene key="profile" hideNavBar component={ProfilePage} />
          <Scene key="core" hideNavBar component={CorePage} />
          <Scene key="menu" hideNavBar component={MenuPage} />
          <Scene key="alter_page" hideNavBar component={AlterPasswordPage} />
          <Scene key="pray" hideNavBar component={PrayPage} />
          <Scene key="verse_bible" component={VersesBibleScreen} />

          <Scene key="input_event" hideNavBar component={InputEventPage} />
          <Scene key="input_devocional" hideNavBar component={InputDevocionalPage} />
          <Scene key="main_devocional" hideNavBar component={MainDevocionalPage} />
          <Scene key="devocional" hideNavBar component={DevocionalPage} />
          <Scene key="notification" hideNavBar component={NotificationPage} />
          <Scene key="pray_adm" hideNavBar component={PrayAdmPage} />

          <Scene key="detail_calendar" component={DetailEventCalendarScreen} />
          <Scene key="detail_event" component={DetailEventScreen} />

          <Scene key="term_politics" hideNavBar component={TermAndPoliticsPage} />
          <Scene key="forgot_password" hideNavBar component={ForgotPasswordPage} />
          <Scene key="administrator" hideNavBar component={AdministratorPage} />

          <Scene key="register" hideNavBar component={RegisterPage} />

        </Stack>
      </Router>
    </Root>
  </Provider>

)
export default App;