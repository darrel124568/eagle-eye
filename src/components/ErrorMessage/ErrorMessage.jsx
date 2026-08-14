export default function ErrorMessage({ message, onRetry }) {
  return (
    <div role="alert">
      <p>{message || 'Unable to load birds. Please try again.'}</p>
      <button type="button" onClick={onRetry}>Retry</button>
    </div>
  )
}
