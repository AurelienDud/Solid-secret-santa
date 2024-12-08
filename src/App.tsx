import type { Component } from 'solid-js';
import './app.css';
import { Game } from './components/Game';

const App: Component = () => {
  return (
    <div class="app">
      <div class="app-main">
        <Game />
      </div>
      <div class="app-footer">
        2024 - Made by AurelienDud
      </div>
    </div>
  );
};

export default App;
