import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import TaskIcon from './TaskIcon';

const Section = ({ title, icon: Icon, colorClass, dataKey, items, onToggle }) => (
    <div className="mb-4 rounded-2xl bg-white shadow-sm border border-slate-100 overflow-hidden">
        <div className={`px-4 py-3 ${colorClass} flex items-center gap-2`}>
            <Icon size={18} className="text-slate-700" />
            <h3 className="font-bold text-slate-700 text-sm uppercase tracking-wide">{title}</h3>
        </div>
        <div className="p-2">
            {items.map(task => (
                <div
                    key={task.id}
                    onClick={() => onToggle(dataKey, task.id)}
                    className={`flex items-start gap-3 p-3 mb-1 rounded-xl cursor-pointer transition-all duration-200 border ${task.completed ? 'bg-slate-50 border-slate-100 opacity-60' : 'bg-white border-slate-100 hover:border-blue-200 hover:shadow-md'}`}
                >
                    <div className={`mt-1 ${task.completed ? 'text-green-500' : 'text-slate-300'}`}>
                        {task.completed ? <CheckCircle size={22} fill="currentColor" className="text-white" /> : <Circle size={22} />}
                    </div>
                    <div className="flex-1">
                        <p className={`font-medium text-slate-800 ${task.completed ? 'line-through text-slate-500' : ''}`}>{task.text}</p>
                        {task.subtext && <p className={`text-xs mt-0.5 ${task.type === 'grind' ? 'text-purple-600 font-bold' : 'text-slate-500'}`}>{task.subtext}</p>}
                    </div>
                    <div className="opacity-90">
                        <TaskIcon type={task.type} />
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Section;
