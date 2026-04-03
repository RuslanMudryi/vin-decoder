// VIN uses only letters A-Z (except I, O, Q) and digits 0-9
const VIN_PATTERN = /^[A-HJ-NPR-Z0-9]+$/i;

export interface ValidationResult {
  valid: boolean;
  error: string | null;
}

export function validateVin(value: string): ValidationResult {
  if (!value.trim()) {
    return { valid: false, error: 'VIN code is required' };
  }
  if (value.length > 17) {
    return { valid: false, error: 'VIN code must not exceed 17 characters' };
  }
  if (!VIN_PATTERN.test(value)) {
    return { valid: false, error: 'VIN code contains invalid characters (I, O, Q are not allowed)' };
  }
  return { valid: true, error: null };
}
