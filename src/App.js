import React from "react"
import Header from "./components/header"
import Meme from "./components/meme"
import Settings from './components/fontSettings.js'
import './style.css'

export default function App() {
    return (
        <div>
            <Header />
            <Meme />
            <Settings/>
        </div>
    )
}
