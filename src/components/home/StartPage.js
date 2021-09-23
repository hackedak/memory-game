import Instruction from "../instructions/Instructions";

const StartPage = () => {
    return (
        <div className="start-page layout-col">
            <header className="App-header">Memory Game</header>
            <Instruction />
            <div className="content">
                <div className='fire dark'>
                    <button className="Start-game-btn"><span className="Blazing">START</span></button>
                </div>
            </div>
        </div>
    );
}

export default StartPage;