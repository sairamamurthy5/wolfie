
import Button from './Button';
import Card from './Card';
import StatusBadge from './StatusBadge';

function SharedUIPreview() {
  return (
    <div style={{ padding: '30px', background: '#111827', minHeight: '100vh', color: 'white' }}>
      <h1>Wolf and Treasure — Shared UI Test</h1>

      <Card title="Component Preview">
        <h3>Button Components</h3>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button onClick={() => alert('Primary clicked')}>
            Primary
          </Button>

          <Button variant="secondary">
            Secondary
          </Button>

          <Button variant="danger">
            Danger
          </Button>

          <Button disabled>
            Disabled
          </Button>
        </div>

        <h3 style={{ marginTop: '25px' }}>Status Components</h3>

        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <StatusBadge status="Ready" />
          <StatusBadge status="Not Ready" />
          <StatusBadge status="Waiting" />
        </div>
      </Card>
    </div>
  );
}

export default SharedUIPreview;
