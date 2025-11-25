// src/components/modian/ui/date/ModianJalaliDatePicker.tsx
'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  jalaliNow, gDateFromJalali, monthLength,
  JALALI_MONTH_NAMES, toFa,
} from '@/components/modian/common';

const WEEK = ['شنبه','یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنجشنبه','جمعه'] as const;
const normalizeWeekday = (s: string) => s.replace(/\u200c/g, '');
const WEEK_NORM = WEEK.map(normalizeWeekday);

type PickerProps = {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  onPick: (jalaliString: string) => void; // "1404/07/23"
};

export default function ModianJalaliDatePicker({ anchorEl, open, onClose, onPick }: PickerProps) {
  const today = useMemo(() => jalaliNow(), []);
  const [view, setView] = useState<'days'|'years'>('days');
  const [jy, setJy] = useState<number>(today.jy);
  const [jm, setJm] = useState<number>(today.jm);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node) && !anchorEl?.contains(e.target as Node)) onClose();
    };
    if (open) document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [open, onClose, anchorEl]);

  const days = Array.from({ length: monthLength(jy, jm) }, (_, i) => i + 1);
  const firstWeekdayIndex = useMemo(() => {
    const gd = gDateFromJalali(jy, jm, 1);
    const weekdayFa = new Intl.DateTimeFormat('fa-IR-u-ca-persian', {
      weekday: 'long',
    }).format(gd);
    const normalized = normalizeWeekday(weekdayFa);
    return WEEK_NORM.indexOf(normalized);
  }, [jy, jm]);

  if (!open || !anchorEl) return null;
  const rect = anchorEl.getBoundingClientRect();
  const style: React.CSSProperties = {
    position: 'fixed', top: rect.bottom + 8, right: window.innerWidth - rect.right, zIndex: 50,
  };

  return (
    <div ref={ref} style={style}
         className="w-72 rounded-lg border border-gray-200 bg-white shadow-xl text-gray-700 select-none">
      <div className="flex items-center justify-between px-3 py-2 border-b">
        <button
          type="button"
          className="font-medium text-right inline-flex items-center gap-2"
          onClick={()=>setView(view==='days'?'years':'days')}
        >
          {JALALI_MONTH_NAMES[jm-1]} {toFa(jy)}
          <span className="text-xs leading-none">▼</span>
        </button>
        <div className="flex items-center gap-4">
          <button
            type="button"
            className="px-2 py-1 text-4xl font-bold leading-none"
            onClick={()=>{
              setJm((p)=> {
                if (p===1) { setJy(y=>y-1); return 12; }
                return p-1;
              });
            }}
            aria-label="ماه قبل"
          >{'‹'}</button>
          <button
            type="button"
            className="px-2 py-1 text-4xl font-bold leading-none"
            onClick={()=>{
              setJm((p)=> {
                if (p===12) { setJy(y=>y+1); return 1; }
                return p+1;
              });
            }}
            aria-label="ماه بعد"
          >{'›'}</button>
        </div>
      </div>

      {view==='days' ? (
        <>
          <div className="grid grid-cols-7 gap-1 px-3 pt-3 text-center text-xs text-gray-600">
            {['ش','ی','د','س','چ','پ','ج'].map(k=>(<div key={k} className="py-1">{k}</div>))}
          </div>
          <div className="grid grid-cols-7 gap-1 p-3 pt-2">
          {Array.from({length: firstWeekdayIndex}).map((_,i)=><div key={'b'+i} />)}
          {days.map((d)=>(
            <button key={d}
              type="button"
              onClick={()=>{ onPick(`${jy}/${String(jm).padStart(2,'0')}/${String(d).padStart(2,'0')}`); onClose(); }}
              className={
                "h-8 w-8 rounded-full hover:bg-gray-100 flex items-center justify-center " +
                ((jy===today.jy && jm===today.jm && d===today.jd) ? "outline outline-2 outline-black" : "")
              }
            >
              {toFa(d)}
            </button>
          ))}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-4 gap-2 p-3 max-h-64 overflow-auto">
          {Array.from({length: (1450-1360+1)}, (_,i)=>1360+i).map((y)=>( // با JALALI_YEARS هم می‌شود، ولی این‌جا سبک‌وزن نگه می‌داریم
            <button key={y} type="button" onClick={()=>{ setJy(y); setView('days'); }}
              className={`h-9 rounded border ${y===jy?'bg-green-600 text-white':'hover:bg-gray-100'}`}>
              {toFa(y)}
            </button>
          ))}
        </div>
      )}

      <div className="flex items-center justify-between px-3 py-2 border-t">
        <button type="button" className="text-gray-700" onClick={onClose}>بستن</button>
        <button
          type="button"
          className="text-green-700 hover:text-green-800"
          onClick={()=>{ onPick(`${today.jy}/${String(today.jm).padStart(2,'0')}/${String(today.jd).padStart(2,'0')}`); onClose(); }}
        >
          برو به امروز
        </button>
      </div>
    </div>
  );
}
