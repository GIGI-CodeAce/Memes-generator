import Header from "./components/header"
import Meme from "./components/meme"
import Settings from './components/fontSettings'
import FooterPage from './components/footer'
import './styles/style.scss'
import './styles/headFoot.scss'
import './styles/mobile.scss'

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
