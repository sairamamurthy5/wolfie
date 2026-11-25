
import "./StatusBadge.css";

function StatusBadge({ status = "Waiting" }) {
  const statusClass = status.toLowerCase().replace(/\s+/g, "-");

  return (
    <span className={`wt-status-badge wt-status-badge--${statusClass}`}>
      {status}
    </span>
  );
}

export default StatusBadge;
