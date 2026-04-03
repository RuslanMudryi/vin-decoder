import { Link } from 'react-router-dom';
import type { DecodeResult } from '../../api/nhtsa';
import './DecodeResults.css';

interface DecodeResultsProps {
  vin: string;
  results: DecodeResult[];
  apiMessage: string;
}

export function DecodeResults({ vin, results, apiMessage }: DecodeResultsProps) {
  const filledResults = results.filter(
    (r) => r.Value !== null && r.Value !== '' && r.Variable !== 'Error Code' && r.Variable !== 'Suggested VIN',
  );

  return (
    <section className="decode-results" aria-label={`Decode results for ${vin}`}>
      <h2 className="decode-results__title">
        Results for <span className="decode-results__vin">{vin}</span>
      </h2>

      {apiMessage && (
        <p className="decode-results__message">{apiMessage}</p>
      )}

      {filledResults.length === 0 ? (
        <p className="decode-results__empty">No data found for this VIN.</p>
      ) : (
        <table className="decode-results__table">
          <thead>
            <tr>
              <th scope="col">Variable</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            {filledResults.map((r) => (
              <tr key={r.VariableId}>
                <td>
                  <Link to={`/variables/${r.VariableId}`} className="decode-results__link">
                    {r.Variable}
                  </Link>
                </td>
                <td>{r.Value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
}
