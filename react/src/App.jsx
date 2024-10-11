import { useState } from 'react'; // imports useState hook from React for state management
import { Routes, Route } from 'react-router-dom'; // imports Routes and Route for setting up routing
import About from './components/About'; // imports the About component
import Contact from './components/Contact';
import anagrams from "./components/anagramhunt/anagramsArray.js"; // imports an anagrams
import Footer from "./components/Footer"; // imports Footer component
import GamePlay from './components/anagramhunt/GamePlay'; // imports GamePlay component for the game
import GameScore from './components/anagramhunt/GameScore'; // imports GameScore component to display scores
import GameSetup from './components/anagramhunt/GameSetup'; // imports GameSetup component for initial setup
import Header from "./components/Header"; // imports Header component
import Homepage from './components/Homepage'; // imports Homepage component
import Login from './components/Login'; // imports Login component
import Mathfacts from './components/Mathfacts'; // imports Mathfacts component
import Register from './components/Register'; // imports Register component
import './anaApp.css'; // imports CSS for styling

//generating some logic for use within children.. and passing in the routes here

function App() { 

  // find random index in an array, useful throughout the project
  function findRandom(array) {
    // check if array is defined
    if (array) { 
      // generate a random index
      const random = Math.floor(Math.random() * array.length)
      // select the item from the index
      const randomSelected = array[random];

      return randomSelected;
    }
      return 0; // if array undefined, return 0
  }

  // useState- set the initial wordlength -default set to 5 
  const [wordLength, setWordLength] = useState('5');
  // set the first block of anagram words to a random block of 5 characters
  const [wordAnswers, setWordAnswer] = findRandom(anagrams[wordLength]);
  // set the initial score to 0 - need the score to persist in GamePlay and GameScore - so set in parent to avoid change
  const [score, setScore] = useState(0);
  // get length of anagram block and subtract 1 because we will show the user one of the words as a hint
  const [wordsLeft, setWordsLeft] = useState(wordAnswers.length - 1);
  // Logic for displaying correct answers in the final score view of anagram game
  const [correctAnswers, setCorrectAnswers] = useState([]);
  // keep track of correct 'block' / length of words
  const[blockCorrect, setBlockCorrect]= useState([]);
  // hold all word variables for the current word length 
  const [allWords, setAllWords] = useState(anagrams[wordLength]);
   // list of possible answers in anagram block
   const[possibleWords, setPossibleWords] = useState(findRandom(allWords));
   // find the starting word in that anagram block, from the possible words
   const [wordHint, setWordHint] = useState(findRandom(possibleWords));
   // filter word array to remove the word hint or keyword
   const [filteredPossible, setFilteredPossible] = useState(() => { 
      // define possibleWords & wordHint
      if (possibleWords && wordHint) {
          // filter out the word hint
          return possibleWords.filter((item) => item !== wordHint);
       } else {
          return []; // Return an empty array if either possibleWords or wordHint is undefined 
       }
   });


   return (
    <>
      {/* Render all components / routed components below*/}
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} /> 
        <Route exact path="/about" element={<About />} />
        <Route exact path="/anagramhunt" element={
          <GameSetup
            wordLength={wordLength} // pass the current word length to GameSetup
            setWordLength={setWordLength} // pass the function to update word length
          />
        }>
        </Route>
        <Route exact path="/play" element={
          <GamePlay 
            score={score} // pass the current score to GamePlay
            setScore={setScore} // pass the function to update score
            wordAnswers={wordAnswers} // pass the word answers for the game
            wordLength={wordLength} // pass the word length
            wordsLeft={wordsLeft} // pass the remaining words
            findRandom={findRandom} // pass the random selection function
            correctAnswers={correctAnswers} // pass correct answers
            setCorrectAnswers={setCorrectAnswers} // pass function to update correct answers
            blockCorrect={blockCorrect} // pass correct blocks
            setBlockCorrect={setBlockCorrect} // pass function to update correct blocks
            filteredPossible={filteredPossible} // pass the filtered possible words
            setFilteredPossible={setFilteredPossible} // pass function to update filtered words
            allWords={allWords} // pass all words available for the current word length
            setAllWords={setAllWords} // pass function to update all words
            possibleWords={possibleWords} // pass possible words
            setPossibleWords={setPossibleWords} // pass function to update possible words
            wordHint={wordHint} // pass the current word hint
            setWordHint={setWordHint} // pass function to update word hint
          />
        }>
        </Route>
        <Route exact path="/score" element={
          <GameScore 
            score={score} // Pass the current score to GameScore
            correctAnswers={correctAnswers} // Pass correct answers to display
            blockCorrect={blockCorrect} // Pass correct blocks
            filteredPossible={filteredPossible} // Pass filtered possible words
            wordHint={wordHint} // Pass the word hint
          />
        }>          
        </Route>
        <Route exact path="/mathfacts" element={<Mathfacts />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}
// export the component (as always)
export default App
