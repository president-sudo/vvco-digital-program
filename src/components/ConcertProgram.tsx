import { useEffect, useState } from 'react';
import { Calendar, MapPin, Clock, Music, Users } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Concert, ProgramItem, Performer } from '../types/concert';

export function ConcertProgram() {
  const [concert, setConcert] = useState<Concert | null>(null);
  const [programItems, setProgramItems] = useState<ProgramItem[]>([]);
  const [performers, setPerformers] = useState<Performer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchConcertData();
  }, []);

  async function fetchConcertData() {
    try {
      const { data: concertData } = await supabase
        .from('concerts')
        .select('*')
        .order('date', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (concertData) {
        setConcert(concertData);

        const { data: itemsData } = await supabase
          .from('program_items')
          .select('*')
          .eq('concert_id', concertData.id)
          .order('order_index', { ascending: true });

        const { data: performersData } = await supabase
          .from('performers')
          .select('*')
          .eq('concert_id', concertData.id)
          .order('order_index', { ascending: true });

        setProgramItems(itemsData || []);
        setPerformers(performersData || []);
      }
    } catch (error) {
      console.error('Error fetching concert data:', error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-amber-400 text-lg">Loading...</div>
      </div>
    );
  }

  if (!concert) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
        <div className="text-slate-400 text-center">No concert program available</div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-2xl mx-auto px-6 py-8 pb-12">
        <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-slate-700/50">
          <div className="relative bg-gradient-to-br from-amber-600/20 via-amber-700/10 to-transparent p-8 border-b border-slate-700/50">
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl"></div>
            <div className="relative">
              <div className="inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full mb-4">
                <span className="text-amber-400 text-sm font-medium tracking-wide">{concert.subtitle}</span>
              </div>
              <h1 className="text-3xl font-bold text-white mb-6 leading-tight">{concert.title}</h1>

              <div className="space-y-3 text-slate-300">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-base">{formatDate(concert.date)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-base">{formatTime(concert.date)}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span className="text-base">{concert.venue}</span>
                </div>
              </div>

              {concert.description && (
                <p className="mt-6 text-slate-300 leading-relaxed text-base">{concert.description}</p>
              )}
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <Music className="w-6 h-6 text-amber-400" />
              <h2 className="text-2xl font-bold text-white">Program</h2>
            </div>

            <div className="space-y-6">
              {programItems.map((item, index) => (
                <div key={item.id}>
                  {item.type === 'intermission' ? (
                    <div className="flex items-center justify-center py-6">
                      <div className="flex items-center gap-4 px-6 py-3 bg-slate-700/30 rounded-full border border-slate-600/50">
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
                        <span className="text-slate-400 font-medium uppercase text-sm tracking-wider">
                          {item.title}
                        </span>
                        {item.duration && (
                          <span className="text-slate-500 text-sm">({item.duration})</span>
                        )}
                        <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
                      </div>
                    </div>
                  ) : (
                    <div className="group">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-amber-500/10 border border-amber-500/20 rounded-full text-amber-400 text-sm font-semibold">
                          {index + 1 - programItems.slice(0, index).filter(i => i.type === 'intermission').length}
                        </div>
                        <div className="flex-1 min-w-0">
                          {item.composer && (
                            <div className="text-amber-400 font-semibold text-sm uppercase tracking-wide mb-1">
                              {item.composer}
                            </div>
                          )}
                          <div className="text-white font-medium text-lg leading-snug mb-1">
                            {item.title}
                          </div>
                          {item.duration && (
                            <div className="text-slate-400 text-sm mb-2">
                              Duration: {item.duration}
                            </div>
                          )}
                          {item.notes && (
                            <div className="text-slate-400 text-sm leading-relaxed whitespace-pre-line mt-2 pl-4 border-l-2 border-slate-700">
                              {item.notes}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {performers.length > 0 && (
            <div className="px-8 pb-8">
              <div className="border-t border-slate-700/50 pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-amber-400" />
                  <h2 className="text-2xl font-bold text-white">Performers</h2>
                </div>
                <div className="space-y-6">
                  {performers.map((performer) => (
                    <div key={performer.id} className="group">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 flex-shrink-0 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-full flex items-center justify-center">
                          <span className="text-amber-400 font-bold text-lg">
                            {performer.name.charAt(0)}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-white font-semibold text-lg leading-tight">
                            {performer.name}
                          </h3>
                          <div className="text-amber-400 text-sm font-medium mt-1">
                            {performer.role}
                          </div>
                          {performer.bio && (
                            <p className="text-slate-400 text-sm leading-relaxed mt-2">
                              {performer.bio}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8 text-slate-500 text-sm">
          <p>Thank you for attending</p>
        </div>
      </div>
    </div>
  );
}
