import React from 'react';

const GoalCard = ({ label, value, inputValue, max, unit, onInputChange }) => (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 mb-3">
        <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-slate-700">{label}</span>
            <div className="flex items-center gap-1 bg-slate-50 px-2 py-1 rounded-lg border border-slate-200">
                <span className="text-xs font-bold text-slate-400">{unit}</span>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => onInputChange(e.target.value)}
                    className="w-20 text-right font-bold text-slate-700 bg-transparent outline-none p-0 m-0"
                    inputMode="numeric"
                />
                {max && <span className="text-xs font-medium text-slate-400 ml-1">/ {max}</span>}
            </div>
        </div>
        {max && (
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden mb-2 relative">
                <div className="h-full bg-emerald-500 transition-all" style={{ width: `${Math.min(100, (value / max) * 100)}%` }} />
            </div>
        )}
    </div>
);

export default GoalCard;
