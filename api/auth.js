import supabase from './_supabase.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      // Simple admin auth check
      if (email === 'admin@resolutionlaw.pk' && password === 'Resolution@2024') {
        return res.status(200).json({ success: true, token: 'admin-token-' + Date.now() });
      }
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}
