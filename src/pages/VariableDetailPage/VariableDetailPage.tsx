import { useParams, Link } from 'react-router-dom';
import './VariableDetailPage.css';
import { useVariables } from '../../context/VariablesContext';
import { Loader, ErrorMessage } from '../../components';

export function VariableDetailPage() {
  const { variableId } = useParams<{ variableId: string }>();
  const { variables, isLoading, error } = useVariables();

  const variable = variables.find((v) => v.ID === Number(variableId));

  return (
    <main className="page-content">
      <Link to="/variables" className="back-link">
        ← Back to Variables
      </Link>

      {isLoading && <Loader label="Loading variable…" />}
      {error && <ErrorMessage message={error} />}

      {!isLoading && !error && !variable && (
        <ErrorMessage message={`Variable with ID "${variableId}" was not found.`} />
      )}

      {variable && (
        <article className="variable-detail">
          <h1 className="variable-detail__name">{variable.Name}</h1>

          <dl className="variable-detail__meta">
            <div className="variable-detail__meta-row">
              <dt>ID</dt>
              <dd>{variable.ID}</dd>
            </div>
            <div className="variable-detail__meta-row">
              <dt>Data Type</dt>
              <dd>{variable.DataType}</dd>
            </div>
            {variable.GroupName && (
              <div className="variable-detail__meta-row">
                <dt>Group</dt>
                <dd>{variable.GroupName}</dd>
              </div>
            )}
          </dl>

          {variable.Description && (
            <section className="variable-detail__description">
              <h2>Description</h2>
              <p>{variable.Description}</p>
            </section>
          )}
        </article>
      )}
    </main>
  );
}
