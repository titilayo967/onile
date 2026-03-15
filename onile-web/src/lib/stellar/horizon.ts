export const HORIZON_URL = process.env.STELLAR_HORIZON_URL || 'https://horizon.stellar.org';

export function getHorizonInfo() {
  return { url: HORIZON_URL };
}
