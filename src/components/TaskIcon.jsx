import React from 'react';
import { MapPin, Users, MessageCircleHeart, Phone, Briefcase, Zap, Code, Gamepad2, Film, BookOpen, Flame, Utensils, Home } from 'lucide-react';

const TaskIcon = ({ type }) => {
    if (type === 'prayer') return <div className="text-[10px] font-bold border border-slate-300 rounded px-1 text-slate-500">PRAY</div>;
    if (type === 'mosque') return <div className="flex items-center gap-1 text-[10px] font-bold bg-green-50 text-green-700 border border-green-200 rounded px-1"><MapPin size={10} /> MOSQUE</div>;
    if (type === 'social') return <Users size={16} className="text-pink-400" />;
    if (type === 'heart-sm') return <MessageCircleHeart size={16} className="text-pink-500" />;
    if (type === 'social-call') return <div className="flex items-center gap-1"><Phone size={14} className="text-pink-400" /><Users size={14} className="text-pink-400" /></div>;
    if (type === 'work') return <Briefcase size={16} className="text-slate-400" />;
    if (type === 'grind') return <div className="flex items-center gap-1 text-[10px] font-bold bg-purple-100 text-purple-700 border border-purple-200 rounded px-1"><Zap size={10} /> GRIND</div>;
    if (type === 'code') return <Code size={16} className="text-indigo-400" />;
    if (type === 'chill') return <Gamepad2 size={16} className="text-purple-400" />;
    if (type === 'film') return <div className="flex items-center gap-1 text-[10px] font-bold bg-purple-50 text-purple-600 border border-purple-200 rounded px-1"><Film size={10} /> FILM</div>;
    if (type === 'spirit') return <BookOpen size={16} className="text-amber-500" />;
    if (type === 'fitness') return <div className="text-[10px] font-bold bg-orange-50 text-orange-600 border border-orange-200 rounded px-1">RUN</div>;
    if (type === 'fitness-hard') return <div className="flex items-center gap-1 text-[10px] font-bold bg-red-50 text-red-600 border border-red-200 rounded px-1"><Flame size={10} /> HARD</div>;
    if (type === 'food') return <Utensils size={16} className="text-orange-400" />;
    if (type === 'home') return <Home size={16} className="text-slate-400" />;
    return null;
};

export default TaskIcon;
