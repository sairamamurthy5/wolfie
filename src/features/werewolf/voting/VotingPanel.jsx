
function VotingPanel() {
  return (
    <section className="w-full">
      <iframe
        src="/voting.html"
        title="Wolfie Voting Interface"
        style={{
          width: '100%',
          minHeight: '850px',
          border: 'none',
          borderRadius: '12px',
          display: 'block',
        }}
      />
    </section>
  );
}

export default VotingPanel;
