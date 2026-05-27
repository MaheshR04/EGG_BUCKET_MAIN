import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";

const API_URL = import.meta.env.VITE_API_URL;

export default function ViewerData() {
  // small count-up helper
  const useCountUp = (target, duration = 1000) => {
    const [value, setValue] = useState(0);
    useEffect(() => {
      let start = 0;
      const steps = Math.max(Math.floor(duration / 16), 1);
      const increment = target / steps;
      const iv = setInterval(() => {
        start += increment;
        if (start >= target) {
          setValue(Math.round(target));
          clearInterval(iv);
        } else setValue(Math.round(start));
      }, 16);
      return () => clearInterval(iv);
    }, [target, duration]);
    return value;
  };

  const salesCount = useCountUp(14250, 1100);
  const paymentsCount = useCountUp(8730, 1200);
  const damagesCount = useCountUp(28, 900);

  return (
    <div className="min-h-screen bg-eggBg flex relative overflow-hidden">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="p-8">
          {/* Decorative floating eggs */}
          <svg className="egg-fall" style={{ left: '6%', top: '-40px', width: 36, animationDuration: '10s' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="8" ry="10" fill="#F7E6D6" stroke="#E8B77A" strokeWidth="1" />
          </svg>
          <svg className="egg-fall" style={{ left: '86%', top: '-20px', width: 28, animationDuration: '12s', animationDelay: '2s' }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="12" cy="12" rx="7" ry="9" fill="#FFF6E8" stroke="#F0C68A" strokeWidth="1" />
          </svg>

          {/* Welcome Section */}
          <div className="mb-8">
            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-50 to-white shadow-md animate-fade-in">
              <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-500">
                Welcome to Egg Bucket 🥚
              </h1>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Explore view-only reports: sales, payments, damages, and NECC
                rates — curated for clarity and quick insights.
              </p>
            </div>
          </div>

          {/* Animated Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-slide-up">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">📊 Total Sales</h3>
                  <p className="mt-2 text-2xl font-bold text-gray-900">₹ {salesCount.toLocaleString()}</p>
                </div>
                <div className="text-4xl">💰</div>
              </div>
              <p className="mt-3 text-sm text-gray-500">Daily aggregated sales across outlets.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-slide-up" style={{animationDelay:'120ms'}}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">💳 Payments</h3>
                  <p className="mt-2 text-2xl font-bold text-gray-900">{paymentsCount.toLocaleString()}</p>
                </div>
                <div className="text-4xl">📲</div>
              </div>
              <p className="mt-3 text-sm text-gray-500">UPI, online and cash payment totals.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 animate-slide-up" style={{animationDelay:'240ms'}}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-gray-600">🧾 Damages</h3>
                  <p className="mt-2 text-2xl font-bold text-gray-900">{damagesCount}</p>
                </div>
                <div className="text-4xl">🥚</div>
              </div>
              <p className="mt-3 text-sm text-gray-500">Recorded egg damages across outlets.</p>
            </div>
          </div>

          {/* Guidance Section */}
          <div className="mt-10 bg-gradient-to-r from-orange-50 to-white border border-orange-200 rounded-2xl p-6 shadow-sm animate-fade-in">
            <h4 className="text-lg font-semibold text-orange-800">How to use this dashboard</h4>
            <ul className="mt-3 text-sm text-orange-700 space-y-2 list-disc list-inside">
              <li>Use the sidebar to navigate between different reports</li>
              <li>All data is view-only for your role</li>
              <li>You can download reports from individual pages</li>
              <li>No data entry or editing access is enabled</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
