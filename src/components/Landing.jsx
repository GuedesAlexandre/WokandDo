import '../styles/Landing.css'
import Main from '../assets/main.png'

function Landing(){
    return(
        <div className='LandingContainer'>
            <div class="red-box">
                <div class="red-box-int">
                    <div className="title-landing">
                        <h1>Voyagez au cœur des ruelles animées d'Asie, <br></br>
une épopée culinaire inoubliable !</h1>
<div className="button-container"><button class="btn-1">
                            Réserver
                        </button>
                        <button class="btn-2">
                            En savoir plus...
                        </button>
                        </div>
                        
                    </div>
                    <div className="Landing-img">
                        <img className='main-img'src={Main}></img>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Landing