import Score from "./Score";
import Timer from "./Timer";
import UserGuess from "./UserGuess";
import UserGuesses from "./UserGuesses";
import SolveMe from "./SolveMe";
import TextInput from "./TextInput";

function GamePlay (){
    return (
        <div id="ana-play">
                    <Score />
                    <Timer />
                    <hr />
                    <TextInput />
                    <SolveMe />
                    <UserGuess />
                    <UserGuesses />
                </div>
    );
}

export default GamePlay;