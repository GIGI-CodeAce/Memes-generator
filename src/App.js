import React from "react"
import Header from "./components/header"
import Meme from "./components/meme"
import Settings from './components/fontSettings.js'
import FooterPage from './components/footer.js'
import './styles/style.css'
import './styles/headFoot.css'

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
            <Settings/>
            <FooterPage/>
        </div>
    )
}
