// =============================================
// Mira Screen Admin - Supabase Client (Server-side)
// =============================================

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Tipos úteis
export interface Content {
  id: string;
  title: string;
  type: string;
  description?: string;
  poster_url?: string;
  backdrop_url?: string;
  rating: number;
  release_year?: number;
  duration_minutes?: number;
  genres?: string[];
  is_active: boolean;
  created_at: string;
}