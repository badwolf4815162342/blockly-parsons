/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'; // useEffect()??
import ExercisesContext from './context';

import find_max_and_even_odd_blocklibrary from '../../../exercise/blocklibraries/find_max_and_even_odd';
import guessing_game_blocklibrary from '../../../exercise/blocklibraries/guessing_game';
import even_odd_blocklibrary from '../../../exercise/blocklibraries/even_odd';
import reverse_word_and_wordlist_blocklibrary from '../../../exercise/blocklibraries/reverse_word_and_wordlist';
import find_max_and_even_odd_unittest from '../../../exercise/python_unittest/find_max_and_even_odd';
import guessing_game_unittest from '../../../exercise/python_unittest/guessing_game';
import even_odd_unittest from '../../../exercise/python_unittest/even_odd';
import reverse_word_and_wordlist_unittest from '../../../exercise/python_unittest/reverse_word_and_wordlist';

// eslint-disable-next-line react/prop-types
export default function ExercisesProvider({ children }) {
  const [exerciseList, setExerciseList] = useState([
    {
      name: 'Find even or odd and maximum in list.',
      baseXml: find_max_and_even_odd_blocklibrary,
      unittest: find_max_and_even_odd_unittest,
      trys: 0,
      text: `Write a program that takes numbers of a list 
      and firstly outputs if the number is even or odd and 
      afterwards whether it is the current maximum.`,
    },
    {
      name: 'Guessing game.',
      baseXml: guessing_game_blocklibrary,
      unittest: guessing_game_unittest,
      trys: 0,
      text: `The problem sets a guess number (in this case 7) and a 
      list of input values and checks for this list of guesses
      if it matches the guess number. It also gives feedback if the
      inputs are too loe or two high and finishes when the value
      -1 is found in the list of inputs.`,
    },
    {
      name: 'Even or odd.',
      baseXml: even_odd_blocklibrary,
      unittest: even_odd_unittest,
      trys: 0,
      text: 'Report wether an input number is even or odd.',
    },
    {
      name: 'Reverse word and wordlist.',
      baseXml: reverse_word_and_wordlist_blocklibrary,
      unittest: reverse_word_and_wordlist_unittest,
      trys: 0,
      text: `Given an array of whords which make up sentence,
      generate and print out a new array with the words in
      reverse order and each word eversed.`,
    },
  ]);
  const [currentExerciseNumber, setCurrentExerciseNumber] = useState(null);

  const value = React.useMemo(() => ({
    state: {
      exerciseList,
      currentExerciseNumber,
    },
    actions: {
      setExerciseList,
      setCurrentExerciseNumber,
    },
  }), [currentExerciseNumber, setCurrentExerciseNumber]);

  useEffect(() => {
  }, [currentExerciseNumber, setCurrentExerciseNumber]);

  return (
    <ExercisesContext.Provider value={value}>
      {children}
    </ExercisesContext.Provider>
  );
}
