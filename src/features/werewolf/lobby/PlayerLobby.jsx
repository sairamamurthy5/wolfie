
import { useState } from 'react';
import './PlayerLobby.css';

const initialPlayers = [
  { id: 1, name: 'Player 1', avatar: 'P1', ready: true },
  { id: 2, name: 'Player 2', avatar: 'P2', ready: true },
  { id: 3, name: 'Player 3', avatar: 'P3', ready: false },
  { id: 4, name: 'Player 4', avatar: 'P4', ready: true },
];

function PlayerLobby({ onStartGame }) {
  const [players, setPlayers] = useState(initialPlayers);

  const readyCount = players.filter((player) => player.ready).length;
  const allReady = readyCount === players.length;

  const toggleReady = (playerId) => {
    setPlayers((currentPlayers) =>
      currentPlayers.map((player) =>
        player.id === playerId
          ? { ...player, ready: !player.ready }
          : player
      )
    );
  };

  return (
    <main className="lobby-page">
      <div className="lobby-container">
        <header className="lobby-header">
          <p className="lobby-eyebrow">WOLF AND TREASURE</p>
          <h1>Gather Your Pack</h1>
          <p className="lobby-description">
            The forest is waiting. Prepare your players before the game begins.
          </p>
        </header>

        <section className="lobby-room">
          <div className="room-heading">
            <div>
              <span className="room-label">GAME MODE</span>
              <h2>Classic Wolf Mode</h2>
            </div>
            <span className="room-code">ROOM · WOLF-001</span>
          </div>

          <div className="lobby-progress">
            <div className="progress-information">
              <span>Player readiness</span>
              <strong>{readyCount} / {players.length} Ready</strong>
            </div>

            <div
              className="progress-track"
              role="progressbar"
              aria-valuenow={readyCount}
              aria-valuemin={0}
              aria-valuemax={players.length}
              aria-label="Players ready"
            >
              <div
                className="progress-fill"
                style={{ width: `${(readyCount / players.length) * 100}%` }}
              />
            </div>
          </div>

          <div className="player-grid">
            {players.map((player) => (
              <article className="player-card" key={player.id}>
                <div className="player-avatar">{player.avatar}</div>

                <div className="player-information">
                  <h3>{player.name}</h3>
                  <span className={player.ready ? 'ready-text' : 'waiting-text'}>
                    {player.ready ? 'Ready to play' : 'Waiting for player'}
                  </span>
                </div>

                <button
                  type="button"
                  className={`readiness-button ${
                    player.ready ? 'is-ready' : 'is-not-ready'
                  }`}
                  onClick={() => toggleReady(player.id)}
                  aria-pressed={player.ready}
                  aria-label={`Change ${player.name} readiness`}
                >
                  {player.ready ? 'Ready' : 'Not Ready'}
                </button>
              </article>
            ))}
          </div>

          <div className="lobby-footer">
            <p>
              {allReady
                ? 'All players are ready. Your adventure can begin!'
                : `Waiting for ${players.length - readyCount} player(s) to get ready.`}
            </p>

            <button
              type="button"
              className="start-game-button"
              disabled={!allReady}
              onClick={onStartGame}
            >
              Start Game <span aria-hidden="true">→</span>
            </button>
          </div>
        </section>

        <p className="lobby-note">
          Temporary integration prototype · Sample player data
        </p>
      </div>
    </main>
  );
}

export default PlayerLobby;
