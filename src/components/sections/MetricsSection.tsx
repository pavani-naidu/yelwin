import React from 'react';
import { Box, Users, TrendingUp, Globe } from 'lucide-react';

export const MetricsSection: React.FC = () => {
  const metrics = [
    {
      id: 'projects',
      value: '40+',
      label: 'PROJECTS DELIVERED',
      icon: Box,
    },
    {
      id: 'clients',
      value: '25+',
      label: 'HAPPY CLIENTS',
      icon: Users,
    },
    {
      id: 'industries',
      value: '10+',
      label: 'INDUSTRIES SERVED',
      icon: TrendingUp,
    },
    {
      id: 'countries',
      value: '5+',
      label: 'COUNTRIES',
      icon: Globe,
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-12 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="bg-neutral-950 border border-neutral-900 rounded-xl p-8 sm:p-10 grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-neutral-900">
          {metrics.map((m, i) => {
            const IconComp = m.icon;
            return (
              <div
                key={m.id}
                className={`flex items-center gap-5 ${i > 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''}`}
              >
                <div className="w-12 h-12 rounded-lg bg-black border border-neutral-800 flex items-center justify-center shrink-0 text-white">
                  <IconComp className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-mono font-bold text-3xl sm:text-4xl text-white tracking-tight">
                    {m.value}
                  </span>
                  <span className="font-mono text-[10px] tracking-widest text-neutral-400 font-semibold uppercase mt-0.5">
                    {m.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
