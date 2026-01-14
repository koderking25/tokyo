
import React, { useState } from 'react';
import { AIRBNBS } from './constants';
import { Card } from './components/Card';
import { TabType } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('STAY');

  return (
    <div className="min-h-screen bg-black text-white selection:bg-pink-500 selection:text-white">
      {/* Hero Section */}
      <header className="relative h-[75vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549693578-d683be217e58?q=80&w=1477&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className="w-full h-full object-cover opacity-25 grayscale hover:grayscale-0 transition-all duration-1000"
            alt="Tokyo Night Skyline"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/70 to-black" />
        </div>

        <div className="relative z-10 space-y-6 max-w-5xl animate-[fadeIn_1s_ease-out]">
          <div className="inline-block border border-pink-500/50 bg-pink-500/10 px-4 py-1 rounded-full mb-2">
            <span className="text-pink-500 font-bold tracking-widest text-xs uppercase">No Adults Allowed • Sept 2026</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black font-heading tracking-tighter leading-none italic uppercase">
            THE TOKYO <span className="text-pink-500">TRIP ITINERARY</span>
          </h1>
          <div className="space-y-4">
            <p className="text-pink-500 text-xl md:text-2xl font-bold tracking-tight">
              The Tokyo Trip Itinerary
            </p>
            <p className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto">
              Hello Will, Lucas, Sam, Rayan, and Neil. Welcome to the September 2026 Tokyo Trip Itinerary!
            </p>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-y border-zinc-800 py-4 px-6">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-4 md:gap-12">
          {(['STAY', 'EXPLORE', 'VIBE-CHECK'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm md:text-base font-bold tracking-widest uppercase transition-all duration-300 relative py-2 ${
                activeTab === tab ? 'text-pink-500' : 'text-zinc-500 hover:text-white'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-500 animate-[widthIn_0.3s_ease-out]" />
              )}
            </button>
          ))}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-20 min-h-screen">
        {activeTab === 'STAY' && (
          <div className="animate-[fadeIn_0.5s_ease-out]">
            <div className="mb-12">
              <h2 className="text-4xl font-bold font-heading mb-4 text-white">Basecamp Selection</h2>
              <p className="text-zinc-500">Choosing where to sleep so we don't have to walk too far when our feet die.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {AIRBNBS.map((option) => (
                <Card key={option.id} item={option} />
              ))}
            </div>
          </div>
        )}

        {activeTab === 'EXPLORE' && (
          <div className="animate-[fadeIn_0.5s_ease-out] max-w-4xl mx-auto text-center py-20">
            <div className="bg-zinc-900/50 border border-dashed border-zinc-700 p-12 rounded-3xl">
              <span className="text-6xl mb-6 block">⛩️</span>
              <h2 className="text-3xl font-bold font-heading mb-4 text-white">Under Construction</h2>
              <p className="text-zinc-500 italic mb-8">
                "We haven't planned the actual activities yet, but we know Akihabara and Shinjuku are non-negotiable."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800">
                  <h4 className="text-pink-500 font-bold mb-2">Akihabara</h4>
                  <p className="text-xs text-zinc-400">Buying things we don't need with money we don't have.</p>
                </div>
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800">
                  <h4 className="text-pink-500 font-bold mb-2">Shibuya</h4>
                  <p className="text-xs text-zinc-400">Crossing the road for the clout.</p>
                </div>
                <div className="p-4 bg-zinc-900 rounded-2xl border border-zinc-800">
                  <h4 className="text-pink-500 font-bold mb-2">Shinjuku</h4>
                  <p className="text-xs text-zinc-400">Getting lost for 3 hours in the station.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'VIBE-CHECK' && (
          <div className="animate-[fadeIn_0.5s_ease-out] max-w-4xl mx-auto">
             <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold font-heading mb-4 text-white">The Survival Guide</h2>
              <p className="text-zinc-500 italic">Rules for teens without supervision.</p>
            </div>
            
            <div className="space-y-6">
              {[
                { q: "Can we handle the trains?", a: "No. Download Google Maps or we will end up in Osaka." },
                { q: "Is the food good?", a: "It's Japan. Even the gas station sandwiches are S-tier." },
                { q: "How much money?", a: "Whatever you think you need, double it. Those crane games are rigged." },
                { q: "Are we going to be loud?", a: "Probably. But let's try not to get kicked out of the Airbnb on night one." }
              ].map((faq, i) => (
                <div key={i} className="bg-zinc-900/40 border border-zinc-800 p-6 rounded-2xl hover:border-pink-500/30 transition-colors">
                  <h4 className="text-zinc-300 font-bold text-lg mb-2">Q: {faq.q}</h4>
                  <p className="text-pink-500 italic font-medium">A: {faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-900 py-12 px-6 text-center text-zinc-600">
        <p className="text-xs tracking-widest uppercase mb-4">Stay Safe • Stay Sleek • Tokyo '26</p>
        <p className="italic font-light">"Wait, who has the passports?"</p>
      </footer>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes widthIn {
          from { width: 0; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  );
};

export default App;
