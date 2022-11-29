/* eslint-disable camelcase */
import React, { useState, useEffect } from 'react'; // useEffect()??
import GameContext from './context';

// eslint-disable-next-line react/prop-types
export default function GameProvider({ children }) {
  const [submittedXml, setSubmittedXml] = useState('');
  const [javascriptCodeString, setJavascriptCodeString] = useState('');
  const [javascriptCodeArray, setJavascriptCodeArray] = useState([]);
  const [isReloading, setIsReloading] = useState(false);
  const [token, setToken] = useState(0);
  const [leagueId, setLeagueId] = useState(0);
  const [parson, setParsons] = useState();
  const [pythonNotJS, setPythonNotJS] = useState(true);
  const [pythonCodeString, setPythonCodeString] = useState('');
  const [pythonCodeArray, setPythonCodeArray] = useState([]);
  const [feedback, setFeedback] = useState({});

  const value = React.useMemo(() => ({
    state: {
      pythonNotJS,
      javascriptCodeString,
      javascriptCodeArray,
      pythonCodeString,
      pythonCodeArray,
      submittedXml,
      isReloading,
      token,
      leagueId,
      parson,
      feedback,
    },
    actions: {
      setPythonNotJS,
      setJavascriptCodeString,
      setJavascriptCodeArray,
      setPythonCodeString,
      setPythonCodeArray,
      setSubmittedXml,
      setIsReloading,
      setToken,
      setLeagueId,
      setParsons,
      setFeedback,
    },
  }), [javascriptCodeString,
    setJavascriptCodeString,
    pythonNotJS,
    pythonCodeString,
    feedback,
  ]);

  // initial: put correct solution as python into parsons

  // whenXML() {
  // make python code, put into parsons
  // }

  useEffect(() => {
    setParsons();
  }, [javascriptCodeString, feedback]);

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
}
