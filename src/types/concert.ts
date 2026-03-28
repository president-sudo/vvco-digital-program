export interface Concert {
  id: string;
  title: string;
  subtitle: string | null;
  venue: string;
  date: string;
  description: string | null;
  created_at: string;
}

export interface ProgramItem {
  id: string;
  concert_id: string;
  order_index: number;
  type: 'piece' | 'intermission' | 'section';
  composer: string | null;
  title: string;
  duration: string | null;
  notes: string | null;
  created_at: string;
}

export interface Performer {
  id: string;
  concert_id: string;
  name: string;
  role: string;
  bio: string | null;
  order_index: number;
  created_at: string;
}
