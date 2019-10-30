import React from "react";
import LoginPage from "./src/pages/login";
import MainPage from "./src/pages/main";
import RegisterPage from "./src/pages/register";
import Register2Page from "./src/pages/register2";

import BiblePage from "./src/pages/biblePage";
import ContactPage from "./src/pages/contactPage";
import EventPage from "./src/pages/eventPage";
import ProfilePage from "./src/pages/profilePage";
import ForgotPasswordPage from "./src/pages/forgotPasswordPage";
import TermAndPoliticsPage from "./src/pages/termPage";
import AdministratorPage from "./src/pages/admPage";

import CorePage from "./src/pages/corePage";


import { Router, Stack, Scene } from "react-native-router-flux";
const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" hideNavBar component={LoginPage} />
      <Scene key="main" hideNavBar component={MainPage} />

      <Scene key="bible" hideNavBar component={BiblePage} />
      <Scene key="contact" hideNavBar component={ContactPage} />
      <Scene key="event" hideNavBar component={EventPage} />
      <Scene key="profile" hideNavBar component={ProfilePage} />
      <Scene key="core" hideNavBar component={CorePage} />

      
      <Scene key="term_politics" hideNavBar component={TermAndPoliticsPage} />
      <Scene key="forgot_password" hideNavBar component={ForgotPasswordPage} />
      <Scene key="administrator" hideNavBar component={AdministratorPage} />

      <Scene key="register" hideNavBar component={RegisterPage} />
      <Scene key="register2" hideNavBar component={Register2Page} />
    </Stack>
  </Router>

)
export default App;