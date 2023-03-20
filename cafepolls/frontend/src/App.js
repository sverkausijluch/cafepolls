import React, { Component } from 'react'
import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Profile_wrap from './components/wraps/Profile_wrap'
import Main_wrap from './components/wraps/Main_wrap'
import Register from './components/user/Register'
import ProfileCreate from './components/user/ProfileCreate'
import { Provider } from 'react-redux'
import store from './store/store.js'
import './App.css'
import Room from "./components/Room"
import SocialMenu from './components/socialpages/SocialMenu'
import RegistrationCode from './components/user/RegistrationCode'
import WalkPage from "./components/WalkPage"
import Settings from "./components/user/Settings"
import ProfileSettings from "./components/user/ProfileSettings"

class App extends Component {
  constructor(props) {
    super(props)
  }
    render() {
    return (
      <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="" element={<Main_wrap />} />
                    <Route path="room/:id" element={<Room />} />
                    <Route path="profile/:id" element={<Profile_wrap />} />
                    <Route path="signup" element={<Register />} />
                    <Route path="profile-create" element={<ProfileCreate />} />
                    <Route path="social-menu" element={<SocialMenu />} />
                    <Route path="hello-i-invite-you" element={<RegistrationCode />} />
                    <Route path="walk-page" element={<WalkPage />} />
                    <Route path="settings" element={<Settings />} />
                    <Route path="profile-settings" element={<ProfileSettings />} />
                </Routes>
            </Provider>
        </BrowserRouter>
      </React.StrictMode>
    )
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container)