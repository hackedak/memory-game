import './Arena.css';
import aryaStark from "../../media/characters/aryaStark.png"
const Arena = () => {

    const myArray = [];
    for (let index = 0; index < 24; index++) {
        myArray[index] = index

    }
    return (
        <div className="Arena">
            <div className='full-width'>

                <div className="game-board">
                    {myArray.map(element => (
                        <div className="card"><img src={aryaStark} /></div>
                    ))}


                </div>


            </div>
            {/* <div className="stats">
                <div className="cards-count">
                    Remaining cards:<span>0</span>
                </div>

                <div className="score ">
                    Score<span>0</span>
                </div>
            </div> */}
        </div>
    );
}

export default Arena;