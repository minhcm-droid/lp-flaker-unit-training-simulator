'use client';

import React, { useEffect } from 'react';
import { useSimulationStore } from '@/store/simulationStore';
import { ProcessTrendDisplay } from '@/components/trends/ProcessTrendDisplay';

export default function DcsOperatorPage() {
  const store = useSimulationStore();
  useEffect(() => {
    store.setRole('DCS');
  }, [store]);

  return (
    <div className="space-y-4">
      <h1 className="text-lg font-bold text-sky-400">Chế độ DCS Operator (Boardman Console)</h1>
      <div className="flex flex-wrap gap-3">
        <button onClick={store.pressDcsFlakerPermissive} className="rounded bg-sky-600 px-4 py-2 text-xs font-bold text-white">
          Nhấn PERMISSIVE (Flaker A)
        </button>
        <button onClick={store.pressDcsAutoStopA} className="rounded bg-amber-600 px-4 py-2 text-xs font-bold text-slate-950">
          Nhấn AUTO STOP (Flaker A)
        </button>
        <button onClick={store.toggleTzi797Oos} className="rounded bg-purple-600 px-4 py-2 text-xs font-bold text-white">
          Chuyển đổi OOS cho TZA-797A LL
        </button>
      </div>
      <ProcessTrendDisplay history={store.trendHistory} />
    </div>
  );
}
