import sword from "../../media/swords.png"
import './instructions.css'
const Instruction = () => {
    return (
        <div className="Instruction">
            <h3>How to play</h3>
            <ul>
                <li>
                    <span className="sword"><img src={sword} alt="sword" /></span>
                    You will score when you match same tiles.
                </li>
                <li>
                    <span className="sword"><img src={sword} alt="sword" /></span>
                    For that you have to flip the tiles by clicking on it.
                </li>
                <li>
                    <span className="sword"><img src={sword} alt="sword" /></span>
                    Game will end when all tiles are matched.
                </li>
                <li>
                    <span className="sword"><img src={sword} alt="sword" /></span>
                    Try to match the tiles with least number of flips.
                </li>

            </ul>
        </div>
    );
}

export default Instruction;