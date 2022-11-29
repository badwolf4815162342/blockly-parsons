import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GameScreen from './ui/screens/game/game.screen';
import GameProvider from './core/provider/game/provider';
import Layout from './Layout';
import Exercises from './ui/screens/exercises/exercises.screen';
import NoPage from './ui/screens/page404/page404.screen';
import ExercisesProvider from './core/provider/exercises/provider';

export default function App() {
  return (
    <ExercisesProvider>
      <GameProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Exercises />} />
              <Route
                path="gamescreen"
                element={(
                  <GameScreen />
)}
              />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GameProvider>
    </ExercisesProvider>
  );
}
