'use client';

import { useState } from 'react';

export default function ContentManager() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('movie');
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('type', type);
    formData.append('file', file);

    setStatus('Enviando...');

    // Simulate upload to backend
    const res = await fetch('http://localhost:3000/api/v1/admin/contents/upload', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) {
      setStatus('✅ Conteúdo enviado com sucesso!');
      setTitle('');
      setFile(null);
    } else {
      setStatus('❌ Erro no upload');
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <h1 className="text-3xl font-bold mb-8">Upload de Conteúdo</h1>

      <form onSubmit={handleSubmit} className="max-w-lg space-y-6 bg-zinc-900 p-8 rounded-xl border border-zinc-800">
        <div>
          <label className="block mb-2 text-sm">Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-2 text-sm">Tipo</label>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full bg-zinc-800 border border-zinc-700 p-3 rounded"
          >
            <option value="movie">Filme</option>
            <option value="series">Série</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm">Arquivo de Vídeo</label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-red-600 file:text-white"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-700 rounded font-medium"
        >
          Enviar Conteúdo
        </button>

        {status && <p className="text-center text-sm mt-4">{status}</p>}
      </form>
    </div>
  );
}