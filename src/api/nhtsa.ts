const BASE_URL = 'https://vpic.nhtsa.dot.gov/api/vehicles';

export interface DecodeResult {
  Variable: string;
  VariableId: number;
  Value: string | null;
  ValueId: string | null;
}

export interface DecodeVinResponse {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: DecodeResult[];
}

export interface VehicleVariable {
  DataType: string;
  Description: string;
  GroupName: string | null;
  ID: number;
  Name: string;
}

export interface VariablesListResponse {
  Count: number;
  Message: string;
  Results: VehicleVariable[];
}

export async function decodeVin(vin: string): Promise<DecodeVinResponse> {
  const response = await fetch(`${BASE_URL}/decodevin/${vin}?format=json`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
}

export async function getVehicleVariablesList(): Promise<VariablesListResponse> {
  const response = await fetch(`${BASE_URL}/getvehiclevariablelist?format=json`);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response.json();
}
