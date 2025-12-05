import React from 'react';
import { Minus, Plus } from 'lucide-react';

const SkillSlider = ({ label, value, onChange }) => (
    <div className="mb-5">
        <div className="flex justify-between text-xs font-bold text-slate-600 mb-2">
            <span>{label}</span>
            <span>{value}%</span>
        </div>
        <div className="flex items-center gap-3">
            <button onClick={() => onChange(Math.max(0, value - 1))} className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-lg text-slate-600 font-bold hover:bg-slate-200 active:scale-95 transition-all">
                <Minus size={14} />
            </button>
            <div className="flex-1 h-4 bg-slate-100 rounded-full overflow-hidden relative">
                <div className="h-full bg-indigo-500 transition-all duration-300 ease-out" style={{ width: `${value}%` }} />
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                />
            </div>
            <button onClick={() => onChange(Math.min(100, value + 1))} className="w-8 h-8 flex items-center justify-center bg-slate-100 rounded-lg text-slate-600 font-bold hover:bg-slate-200 active:scale-95 transition-all">
                <Plus size={14} />
            </button>
        </div>
    </div>
);

export default SkillSlider;
