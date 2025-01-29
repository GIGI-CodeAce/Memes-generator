import React from "react"
import Header from "./components/header"
import Meme from "./components/meme"
import Settings from './components/fontSettings.tsx'
import FooterPage from './components/footer.tsx'
import './styles/style.css'
import './styles/headFoot.css'
import './styles/mobile.css'

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
