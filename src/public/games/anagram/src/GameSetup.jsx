import anagrams from "../../../../../src/assets/anagramsArray.js"
import SelectInput from "./SelectInput"
import Directions from "./Directions"
import Button from "./Button"

function GameSetup (){
    console.log(Object.keys(anagrams));
    return (
        <div id="ana-setup">
                    <SelectInput />
                    <Directions />
                    <Button />
        </div>
    )   
}

export default GameSetup