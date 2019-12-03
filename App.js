import React from "react";
import { Root } from "native-base";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import LoginPage from "./src/pages/login"; // CONCLUIDO
import MainPage from "./src/pages/main"; // CONCLUIDO
import RegisterPage from "./src/pages/register"; // CONCLUIDO

import DetailEventScreen from "./src/pages/DetailEventScreen";
import DetailEventCalendarScreen from "./src/pages/DetailEventCalendarScreen";


import BiblePage from "./src/pages/biblePage"; //EM ANDAMENTO - JOTTA
import ContactPage from "./src/pages/contactPage"; // EM ANDAMENTO - FER
import EventPage from "./src/pages/eventPage"; //EM ANDAMENTO - JOTTA
import ProfilePage from "./src/pages/profilePage"; //EM ANDAMENTO - FER
import ForgotPasswordPage from "./src/pages/forgotPasswordPage"; // OK
import TermAndPoliticsPage from "./src/pages/termPage"; // PENDENTE
import AdministratorPage from "./src/pages/admPage"; //EM ANDAMENTO - FER
import CorePage from "./src/pages/corePage"; //EM ANDAMENTO - FER
import MenuPage from "./src/pages/menuPage"; //EM ANDAMENTO - FER
import AlterPasswordPage from "./src/pages/alterPassword" //EM ANDAMENTO - FER (TESTE DE ALERTA AQUI)
import PrayPage from "./src/pages/prayPage" //EM ANDAMENTO - FER 
import VersesBibleScreen from "./src/pages/VersesBibleScreen";

import InputEventPage from "./src/pages/inputEventPage.js" // PENDENTE
import InputDevocionalPage from "./src/pages/inputDevocionalPage" //PENDENTE
import MainDevocionalPage from "./src/pages/mainDevocionalPage"; //PENDENTE
import DevocionalPage from "./src/pages/devocionalPage"; // PENDENTE
import NotificationPage from "./src/pages/notificationPage"; // PENDENTE
import UserPage from "./src/pages/userPage.js"; // PENDENTE

import { Router, Stack, Scene } from "react-native-router-flux";
import reducers from './src/store/reducers'; //JOTTA ACHO QUE FALTOU VC COLOCAR ESSA PAGE
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
          <Scene key="users" hideNavBar component={UserPage} />

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