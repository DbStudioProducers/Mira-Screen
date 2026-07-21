'use client';

import { useEffect, useState } from 'react';

interface Content {
  id: string;
  title: string;
  type: string;
  rating: number;
  release_year: number;
  poster_url: string;
}

export default function ContentManager() {
  const [contents, setContents] = useState<Content[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editing, setEditing] = useState<any>(null);

  const fetchContents = () => {
    fetch('http://localhost:3000/api/v1/admin/contents')
      .then(res => res.json())
      .then(setContents);
  };

  useEffect(() => {
    fetchContents();
  }, []);

  const deleteContent = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este conteúdo?')) return;
    await fetch(`http://localhost:3000/api/v1/admin/contents/${id}`, { method: 'DELETE' });
    fetchContents();
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="flex justify-between mb-8">
        <h1 className="text-4xl font-bold">Gerenciar Conteúdo</h1>
        <button 
          onClick={() => { setEditing(null); setShowForm(true); }}
          className="bg-red-600 px-6 py-3 rounded-lg font-medium hover:bg-red-700"
        >
          + Adicionar Conteúdo
        </button>
      </div>

      <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden">
        <table className="w-full">
          <thead className="bg-zinc-950">
            <tr>
              <th className="text-left p-5">Título</th>
              <th>Tipo</th>
              <th>Ano</th>
              <th>Nota</th>
              <th className="text-right pr-6">Ações</th>
            </tr>
          </thead>
          <tbody>
            {contents.map((content) => (
              <tr key={content.id} className="border-t border-zinc-800 hover:bg-zinc-950">
                <td className="p-5 flex items-center gap-4">
                  <img src={content.poster_url} className="w-12 h-16 object-cover rounded" alt="" />
                  <div>{content.title}</div>
                </td>
                <td className="text-center capitalize">{content.type}</td>
                <td className="text-center">{content.release_year}</td>
                <td className="text-center font-mono">{content.rating}</td>
                <td className="text-right pr-6">
                  <button 
                    onClick={() => { setEditing(content); setShowForm(true); }}
                    className="text-blue-400 hover:text-blue-300 mr-4"
                  >
                    Editar
                  </button>
                  <button 
                    onClick={() => deleteContent(content.id)}
                    className="text-red-400 hover:text-red-300"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showForm && (
        <ContentForm 
          initialData={editing} 
          onClose={() => { setShowForm(false); setEditing(null); }}
          onSuccess={fetchContents} 
        />
      )}
    </div>
  );
}

function ContentForm({ initialData, onClose, onSuccess }: any) {
  const [form, setForm] = useState(initialData || {
    title: '', type: 'movie', rating: 8.0, release_year: 2025, poster_url: '', description: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const method = initialData ? 'PUT' : 'POST';
    const url = initialData 
      ? `http://localhost:3000/api/v1/admin/contents/${initialData.id}`
      : 'http://localhost:3000/api/v1/admin/contents';

    await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    onSuccess();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
      <div className="bg-zinc-900 p-8 rounded-2xl w-full max-w-lg">
        <h2 className="text-2xl mb-6">{initialData ? 'Editar' : 'Novo'} Conteúdo</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" placeholder="Título" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full p-3 bg-zinc-800 rounded" required />
          <div className="grid grid-cols-2 gap-4">
            <select value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="p-3 bg-zinc-800 rounded">
              <option value="movie">Filme</option>
              <option value="series">Série</option>
            </select>
            <input type="number" placeholder="Ano" value={form.release_year} onChange={e => setForm({...form, release_year: parseInt(e.target.value)})} className="p-3 bg-zinc-800 rounded" />
          </div>
          <input type="text" placeholder="URL do Poster" value={form.poster_url} onChange={e => setForm({...form, poster_url: e.target.value})} className="w-full p-3 bg-zinc-800 rounded" />
          <textarea placeholder="Descrição" value={form.description} onChange={e => setForm({...form, description: e.target.value})} className="w-full p-3 bg-zinc-800 rounded h-24" />
          <div className="flex gap-3 pt-4">
            <button type="button" onClick={onClose} className="flex-1 py-3 bg-zinc-700 rounded">Cancelar</button>
            <button type="submit" className="flex-1 py-3 bg-red-600 rounded font-medium">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  );
}