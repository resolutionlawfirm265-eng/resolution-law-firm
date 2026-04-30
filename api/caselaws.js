import supabase from './_supabase.js';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.status(204).end();

  try {
    if (req.method === 'GET') {
      const { slug, id } = req.query;
      if (slug) {
        const { data, error } = await supabase
          .from('caselaws')
          .select('*')
          .eq('slug', slug)
          .single();
        if (error) throw error;
        return res.status(200).json(data);
      }
      if (id) {
        const { data, error } = await supabase
          .from('caselaws')
          .select('*')
          .eq('id', parseInt(id))
          .single();
        if (error) throw error;
        return res.status(200).json(data);
      }
      const { published } = req.query;
      let query = supabase.from('caselaws').select('*').order('created_at', { ascending: false });
      if (published === 'true') {
        query = query.eq('published', true);
      }
      const { data, error } = await query;
      if (error) throw error;
      return res.status(200).json(data);
    }
    if (req.method === 'POST') {
      const { title, slug, excerpt, content, category, court, year, citation, published } = req.body;
      const { data, error } = await supabase
        .from('caselaws')
        .insert({ title, slug, excerpt, content, category, court, year, citation, published: published || false })
        .select()
        .single();
      if (error) throw error;
      return res.status(201).json(data);
    }
    if (req.method === 'PUT') {
      const { id, title, slug, excerpt, content, category, court, year, citation, published } = req.body;
      const { data, error } = await supabase
        .from('caselaws')
        .update({ title, slug, excerpt, content, category, court, year, citation, published })
        .eq('id', id)
        .select()
        .single();
      if (error) throw error;
      return res.status(200).json(data);
    }
    if (req.method === 'DELETE') {
      const { id } = req.body;
      const { error } = await supabase
        .from('caselaws')
        .delete()
        .eq('id', id);
      if (error) throw error;
      return res.status(200).json({ ok: true });
    }
    res.status(405).json({ error: 'Method not allowed' });
  } catch (err) {
    console.error('API error:', err);
    res.status(500).json({ error: err.message });
  }
}
