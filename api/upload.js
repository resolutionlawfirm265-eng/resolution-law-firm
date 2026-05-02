import supabase from './_supabase.js';
import { randomUUID } from 'crypto';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '5mb',
    },
  },
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data: base64Data, filename, contentType } = req.body;
    if (!base64Data || !filename) {
      return res.status(400).json({ error: 'Missing data or filename' });
    }

    const buffer = Buffer.from(base64Data, 'base64');
    const ext = filename.split('.').pop() || 'png';
    const uniqueName = `${randomUUID()}.${ext}`;
    const filePath = `uploads/${uniqueName}`;

    const { data, error } = await supabase.storage
      .from('images')
      .upload(filePath, buffer, {
        contentType: contentType || 'image/png',
        upsert: false,
      });

    if (error) {
      // If bucket doesn't exist, store as base64 data URL fallback
      const dataUrl = `data:${contentType || 'image/png'};base64,${base64Data}`;
      return res.status(200).json({ url: dataUrl, fallback: true });
    }

    const { data: urlData } = supabase.storage
      .from('images')
      .getPublicUrl(filePath);

    return res.status(200).json({ url: urlData.publicUrl });
  } catch (err) {
    console.error('Upload error:', err);
    res.status(500).json({ error: err.message });
  }
}
