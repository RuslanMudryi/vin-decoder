import { useState } from 'react';
import { validateVin } from '../../utils/validateVin';
import './VinForm.css';

interface VinFormProps {
  onSubmit: (vin: string) => void;
  isLoading: boolean;
}

export function VinForm({ onSubmit, isLoading }: VinFormProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = validateVin(value);
    if (!result.valid) {
      setError(result.error);
      return;
    }
    setError(null);
    onSubmit(value.toUpperCase());
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (error) setError(null);
  };

  return (
    <form className="vin-form" onSubmit={handleSubmit} noValidate>
      <div className="vin-form__field">
        <label htmlFor="vin-input" className="vin-form__label">
          Enter VIN Code
        </label>
        <div className="vin-form__input-row">
          <input
            id="vin-input"
            type="text"
            className={`vin-form__input${error ? ' vin-form__input--error' : ''}`}
            value={value}
            onChange={handleChange}
            placeholder="e.g. 1FTFW1CT5DFC10312"
            maxLength={17}
            autoComplete="off"
            spellCheck={false}
            aria-describedby={error ? 'vin-error' : undefined}
            aria-invalid={!!error}
          />
          <button
            type="submit"
            className="vin-form__button"
            disabled={isLoading}
          >
            {isLoading ? 'Decoding…' : 'Decode'}
          </button>
        </div>
        {error && (
          <p id="vin-error" className="vin-form__error" role="alert">
            {error}
          </p>
        )}
      </div>
    </form>
  );
}
