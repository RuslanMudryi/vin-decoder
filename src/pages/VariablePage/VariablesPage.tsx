import { Link } from 'react-router-dom';
import './VariablesPage.css';
import { useVariables } from '../../context/VariablesContext';
import { Loader, ErrorMessage } from '../../components';

export function VariablesPage() {
  const { variables, isLoading, error } = useVariables();

  return (
    <main className="page-content">
      <h1 className="page-title">Vehicle Variables</h1>
      <p className="page-description">
        All available variables returned by the NHTSA VIN decoder.
      </p>

      {isLoading && <Loader label="Loading variables…" />}
      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && (
        <ul className="variable-list">
          {variables.map((v) => (
            <li key={v.ID} className="variable-list__item">
              <Link to={`/variables/${v.ID}`} className="variable-list__link">
                {v.Name}
              </Link>
              {v.GroupName && (
                <span className="variable-list__group">{v.GroupName}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
