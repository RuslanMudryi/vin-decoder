import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { getVehicleVariablesList, type VehicleVariable } from '../api/nhtsa';

interface VariablesState {
  variables: VehicleVariable[];
  isLoading: boolean;
  error: string | null;
}

const VariablesContext = createContext<VariablesState | null>(null);

export function VariablesProvider({ children }: { children: ReactNode }) {
  const [variables, setVariables] = useState<VehicleVariable[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getVehicleVariablesList()
      .then((data) => setVariables(data.Results))
      .catch(() => setError('Failed to load variables. Please try again.'))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <VariablesContext.Provider value={{ variables, isLoading, error }}>
      {children}
    </VariablesContext.Provider>
  );
}

export function useVariables(): VariablesState {
  const ctx = useContext(VariablesContext);
  if (!ctx) throw new Error('useVariables must be used inside VariablesProvider');
  return ctx;
}
