
//src/components/landing/perf-metrics.ts
'use client';

// ثبت سادهٔ LCP/CLS/FID (نزدیک به TTI) در کنسول + window.__monjiPerf
export function initPerfMetrics() {
  if (typeof window === 'undefined') return;
  type MonjiPerf = {
    LCP?: number;
    CLS?: number;
    FID?: number;
  };

  interface MonjiPerfWindow extends Window {
    __monjiPerf?: MonjiPerf;
  }

  const win = window as MonjiPerfWindow;
  const perf: MonjiPerf = win.__monjiPerf || {};
  win.__monjiPerf = perf;

  const register = () => {
    try {
      // CLS
      let clsValue = 0;
      type LayoutShiftLike = PerformanceEntry & {
        value: number;
        hadRecentInput: boolean;
      };
      const clsObserver = new PerformanceObserver((list: PerformanceObserverEntryList) => {
        for (const entry of list.getEntries() as LayoutShiftLike[]) {
          if (!entry.hadRecentInput) clsValue += entry.value;
        }
        perf.CLS = Number(clsValue.toFixed(4));
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });

      // LCP
      let lcp = 0;
      type LcpEntryLike = PerformanceEntry & {
        renderTime?: number;
        loadTime?: number;
      };
      const lcpObserver = new PerformanceObserver((list: PerformanceObserverEntryList) => {
        const entries = list.getEntries() as LcpEntryLike[];
        const last = entries[entries.length - 1];
        lcp = last?.renderTime || last?.loadTime || last?.startTime || 0;
        perf.LCP = Number((lcp / 1000).toFixed(2)); // ثانیه
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // FID (تقریب TTI)
      type FirstInputLike = PerformanceEntry & {
        processingStart: number;
        startTime: number;
      };
      const fidObserver = new PerformanceObserver((list: PerformanceObserverEntryList) => {
        const first = list.getEntries()[0] as FirstInputLike | undefined;
        if (!first) return;
        const fidMs = first.processingStart - first.startTime;
        perf.FID = Number(fidMs.toFixed(0));
      });
      fidObserver.observe({ type: 'first-input', buffered: true });

      // گزارش نهایی هنگام آرام شدن صفحه
      window.addEventListener('load', () => {
        setTimeout(() => {
          console.log('%cMONJI PERF', 'background:#0ea5e9;color:#fff;padding:2px 6px;border-radius:4px',
            { LCP_s: perf.LCP, CLS: perf.CLS, FID_ms: perf.FID });
          if (perf.LCP !== undefined && perf.LCP < 2.5) {
            console.log('✅ LCP هدف پاس شد (<2.5s).');
          } else {
            console.warn('⚠️ LCP بالاتر از 2.5s است — پوستر ویدئو/بهینه‌سازی بیشتر پیشنهاد می‌شود.');
          }
        }, 1500);
      });
    } catch {
      // هیچ
    }
  };

   // ↓ ثبت مشاهده‌گرها را به بعد از idle منتقل می‌کنیم تا رندر اولیه خلوت بماند
  if ('requestIdleCallback' in window) {
    (window as Window & {
      requestIdleCallback(
        callback: IdleRequestCallback,
        options?: IdleRequestOptions,
      ): number;
    }).requestIdleCallback(register);
  } else {
    setTimeout(register, 1000);
  }
}


