
import { useState } from 'react';

import Button from './components/ui/Button';
import Card from './components/ui/Card';
import StatusBadge from './components/ui/StatusBadge';

import PlayerLobby from './features/werewolf/lobby/PlayerLobby';
import RoleReveal from './features/werewolf/roles/RoleReveal';
import GamePhasePanel from './features/werewolf/phases/GamePhasePanel';
import VotingPanel from './features/werewolf/voting/VotingPanel';

type Screen =
  | 'preview'
  | 'lobby'
  | 'roles'
  | 'phase'
  | 'voting'
  | 'complete';

function App() {
  const [screen, setScreen] = useState<Screen>('preview');

  const navigationItems: { id: Screen; label: string }[] = [
    { id: 'preview', label: 'Overview' },
    { id: 'lobby', label: 'Lobby' },
    { id: 'roles', label: 'Roles' },
    { id: 'phase', label: 'Game Phase' },
    { id: 'voting', label: 'Voting' },
    { id: 'complete', label: 'Complete' },
  ];

  const renderHeader = () => (
    <header
      style={{
        padding: '24px',
        background: '#111827',
        borderBottom: '1px solid #374151',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <p
          style={{
            color: '#fbbf24',
            fontSize: '12px',
            letterSpacing: '3px',
            margin: '0 0 8px',
          }}
        >
          WOLF AND TREASURE
        </p>

        <h1 style={{ color: '#f9fafb', margin: 0 }}>
          Classic Wolf Mode
        </h1>

        <p style={{ color: '#9ca3af', marginBottom: 0 }}>
          A social deduction game prototype
        </p>
      </div>
    </header>
  );

  const renderNavigation = () => (
    <nav
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '10px',
        padding: '18px',
        background: '#1f2937',
      }}
    >
      {navigationItems.map((item) => (
        <button
          key={item.id}
          type="button"
          onClick={() => setScreen(item.id)}
          style={{
            padding: '10px 16px',
            borderRadius: '8px',
            border: '1px solid #4b5563',
            background: screen === item.id ? '#92400e' : '#111827',
            color: '#f9fafb',
            cursor: 'pointer',
          }}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );

  const renderPreview = () => (
    <div style={{ maxWidth: '900px', margin: '40px auto', padding: '20px' }}>
      <Card title="Welcome to Classic Wolf Mode">
        <p style={{ color: '#9ca3af', lineHeight: 1.7 }}>
          Enter the game lobby, prepare your players, reveal roles, experience
          the day and night phases, and participate in voting.
        </p>

        <div style={{ marginTop: '24px' }}>
          <Button onClick={() => setScreen('lobby')}>
            Enter Game Lobby
          </Button>
        </div>
      </Card>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '16px',
          marginTop: '24px',
        }}
      >
        <Card title="Lobby">
          <StatusBadge status="Ready" />
          <p style={{ color: '#9ca3af' }}>Prepare players.</p>
        </Card>

        <Card title="Roles">
          <StatusBadge status="Waiting" />
          <p style={{ color: '#9ca3af' }}>Explore character roles.</p>
        </Card>

        <Card title="Game Phase">
          <StatusBadge status="Waiting" />
          <p style={{ color: '#9ca3af' }}>Switch between day and night.</p>
        </Card>

        <Card title="Voting">
          <StatusBadge status="Waiting" />
          <p style={{ color: '#9ca3af' }}>Select a candidate.</p>
        </Card>
      </div>
    </div>
  );

  // Temporary integration-side lobby implementation.
  const renderLobby = () => (
    <PlayerLobby
      onStartGame={() => setScreen('roles')}
    />
  );

  const renderRoles = () => (
    <div style={{ maxWidth: '1000px', margin: '40px auto', padding: '20px' }}>
      <Card title="Character Roles">
        <p style={{ color: '#9ca3af' }}>
          Explore the roles available in Classic Wolf Mode.
        </p>

        <RoleReveal />

        <div style={{ marginTop: '24px' }}>
          <Button onClick={() => setScreen('phase')}>
            Continue to Game Phase
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderPhase = () => (
    <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '20px' }}>
      <Card title="Day and Night Phase">
        <GamePhasePanel />

        <div style={{ marginTop: '24px' }}>
          <Button onClick={() => setScreen('voting')}>
            Continue to Voting
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderVoting = () => (
    <div style={{ maxWidth: '1100px', margin: '40px auto', padding: '20px' }}>
      <Card title="Player Voting">
        <VotingPanel />

        <div style={{ marginTop: '24px' }}>
          <Button onClick={() => setScreen('complete')}>
            Complete Prototype Flow
          </Button>
        </div>
      </Card>
    </div>
  );

  const renderComplete = () => (
    <div style={{ maxWidth: '800px', margin: '60px auto', padding: '20px' }}>
      <Card title="Prototype Flow Completed">
        <p style={{ color: '#9ca3af', lineHeight: 1.7 }}>
          You have reached the end of the current Classic Wolf Mode UI
          navigation prototype.
        </p>

        <Button onClick={() => setScreen('preview')}>
          Return to Overview
        </Button>
      </Card>
    </div>
  );

  const renderScreen = () => {
    switch (screen) {
      case 'preview':
        return renderPreview();
      case 'lobby':
        return renderLobby();
      case 'roles':
        return renderRoles();
      case 'phase':
        return renderPhase();
      case 'voting':
        return renderVoting();
      case 'complete':
        return renderComplete();
      default:
        return renderPreview();
    }
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#030712',
        color: '#f9fafb',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {renderHeader()}
      {renderNavigation()}
      <main>{renderScreen()}</main>
    </div>
  );
}

export default App;
