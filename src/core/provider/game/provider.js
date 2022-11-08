import React, { useState, useEffect } from 'react';
import GameContext from './context';

export default function GameProvider({ children }) {
    const [submittedXml, setSubmittedXml] = useState('');
    const [isReloading, setIsReloading] = useState(false);
    const [token, setToken] = useState(0);
    const [leagueId, setLeagueId] = useState(0);
    const [playersOnMarket, setPlayersOnMarket] = useState([]);

    const value = {
        state: {
            submittedXml,
            isReloading,
            token,
            leagueId,
            playersOnMarket,
        },
        actions: {
            setSubmittedXml,
            setIsReloading,
            setToken,
            setLeagueId,
            setPlayersOnMarket,
        },
    };

    useEffect(() => {
    }, [isReloading, token, leagueId]);

    return (
        <GameContext.Provider value={value}>
            {children}
        </GameContext.Provider>
    );
}