// Penny settings. Upload this file once; app updates won't replace it.
window.PENNY_CONFIG = {
  // Your Apps Script web app URL (ends in /exec)
  apiUrl: 'https://script.google.com/macros/s/AKfycbwkPazp1swt1zhdXQXhXLEPk5axVvo4Goy7JvfqDeomWCfsVnS5v3JbdyDznOMlRlu4/exec',

  // First month the savings estimate counts (December is skipped as unusual)
  savingsStart: '2027-01',

  // Colour theme for each person: 'ink' (dark beige) or 'rose' (dark pink).
  // Names must match the People list exactly (capitals don't matter, accents do).
  themes: { 'Joao': 'ink', 'Rita': 'rose' }
};
