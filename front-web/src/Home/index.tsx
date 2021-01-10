import './styles.css'
import { ReactComponent as MainIcon } from './main.svg'
import Footer from '../Footer'

function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido <br/> que entregamos <br/> para você!!!
                        </h1>
                        <h3 className="home-subtitle">
                            Escolha seu pedido e em poucos minutos <br/> levaremos na sua porta.
                        </h3>
                        <a href="link" className="home-btn-order">
                            FAZER PEDIDO
                        </a>
                    </div>
                    <div className="home-image">
                        <MainIcon />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;