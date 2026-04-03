import { useState } from 'react';
import './HomePage.css';
import { VinForm, VinHistory, DecodeResults, Loader, ErrorMessage } from '../../components';
import { decodeVin, type DecodeVinResponse } from '../../api/nhtsa';
import { useVinHistory } from '../../hooks/useVinHistory';

export function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentVin, setCurrentVin] = useState<string | null>(null);
  const [decodeData, setDecodeData] = useState<DecodeVinResponse | null>(null);
  const { history, addToHistory } = useVinHistory();

  const handleDecode = async (vin: string) => {
    setIsLoading(true);
    setError(null);
    setDecodeData(null);
    setCurrentVin(vin);

    try {
      const data = await decodeVin(vin);
      addToHistory(vin);
      setDecodeData(data);
    } catch {
      setError('Failed to fetch data. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="page-content">
      <section className="decoder-section">
        <h1 className="decoder-section__title">VIN Decoder</h1>
        <p className="decoder-section__description">
          Enter a 17-character Vehicle Identification Number to decode vehicle information.
        </p>

        <VinForm onSubmit={handleDecode} isLoading={isLoading} />

        <VinHistory history={history} onSelect={handleDecode} />
      </section>

      {isLoading && <Loader label="Decoding VIN…" />}

      {error && <ErrorMessage message={error} />}

      {decodeData && currentVin && !isLoading && (
        <DecodeResults
          vin={currentVin}
          results={decodeData.Results}
          apiMessage={decodeData.Message}
        />
      )}
    </main>
  );
}
