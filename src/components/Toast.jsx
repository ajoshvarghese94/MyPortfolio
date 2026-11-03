export default function Toast({ message, isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div
      className="toast-notification"
      role="status"
      aria-live="polite"
      onClick={onClose}
    >
      <div className="toast-icon" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <span className="toast-message">{message}</span>
    </div>
  );
}

