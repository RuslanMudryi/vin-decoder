import './VinHistory.css';

interface VinHistoryProps {
  history: string[];
  onSelect: (vin: string) => void;
}

export function VinHistory({ history, onSelect }: VinHistoryProps) {
  if (history.length === 0) return null;

  return (
    <section className="vin-history" aria-label="Recent searches">
      <h2 className="vin-history__title">Recent</h2>
      <ul className="vin-history__list">
        {history.map((vin) => (
          <li key={vin}>
            <button
              type="button"
              className="vin-history__item"
              onClick={() => onSelect(vin)}
            >
              {vin}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
