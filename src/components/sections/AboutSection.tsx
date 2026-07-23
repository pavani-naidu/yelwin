import React from 'react';

export const AboutSection: React.FC = () => {
  const values = [
    { title: 'THINK BEYOND', desc: 'Look past current paradigms to engineer what comes next.' },
    { title: 'BUILD BOLD', desc: 'Craft production-ready systems without taking shortcuts.' },
    { title: 'MOVE FAST', desc: 'Translate strategy into shipping products with momentum.' },
    { title: 'GROW TOGETHER', desc: 'Cultivate enduring alignment with client leadership.' },
  ];

  return (
    <section id="about" className="bg-black text-white py-28 px-6 md:px-12 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Manifesto */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
              ABOUT YELWIN
            </div>
            <h2 className="font-mono font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
              WE DON’T JUST BUILD DIGITAL.
              <br />
              WE BUILD WHAT’S NEXT.
            </h2>

            <div className="space-y-4 text-neutral-300 text-lg font-sans leading-relaxed pt-2">
              <p>
                YELWIN exists to help ambitious people and businesses turn ideas into meaningful technology, digital experiences, and brands.
              </p>
              <p>
                We believe great ideas deserve more than attention. They deserve the right strategy, the right technology, and the courage to become real.
              </p>
              <p>
                YELWIN brings creativity and technology together to help businesses move forward.
              </p>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-neutral-950 border border-neutral-800 p-8">
              <div className="text-xs font-mono font-bold text-neutral-400 tracking-widest uppercase mb-2">
                OUR VISION
              </div>
              <p className="font-sans text-xl text-white font-medium">
                To help ambitious ideas become meaningful realities.
              </p>
            </div>

            <div className="bg-neutral-950 border border-neutral-800 p-8">
              <div className="text-xs font-mono font-bold text-neutral-400 tracking-widest uppercase mb-2">
                OUR MISSION
              </div>
              <p className="font-sans text-xl text-white font-medium">
                To combine technology, creativity, and strategy to build solutions that move businesses forward.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mt-20 pt-16 border-t border-neutral-900">
          <div className="text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase mb-8">
            OUR CORE VALUES
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-neutral-950 border border-neutral-800 p-6">
                <h3 className="font-mono font-bold text-lg text-white uppercase tracking-wider mb-2">
                  {v.title}
                </h3>
                <p className="text-neutral-400 text-xs font-sans leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
