'use client';

import { useEffect, useState } from 'react';

interface Simulator {
  id: number;
  title: string;
  slug: string;
  description: string;
  accessLevel: string;
}


export default function DashboardPage() {
  const [simulators, setSimulators] = useState<Simulator[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
  const fetchSimulators = async () => {
    const token = localStorage.getItem('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjcsImVtYWlsIjoidGVzdHVzZXJAZXhhbXBsZS5jb20iLCJyb2xlcyI6WyJ1c2VyIl0sImFjY2Vzc0xldmVsIjoiRlJFRSIsImlhdCI6MTc0NzMzMjc1OCwiZXhwIjoxNzQ3NDE5MTU4fQ.JElBJIYiYndaON5LE9FMlGXOkWPg5MbVEiIa-2TJzbE');
    const res = await fetch('http://localhost:3001/simulators/user-simulators', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await res.json();
    console.log('✅ API response:', data);

    if (Array.isArray(data)) {
      setSimulators(data);
    } else {
      console.error('❌ Expected array, got:', data);
      setSimulators([]);
    }

    setLoading(false);
  };

  fetchSimulators();
}, []);


  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">🎛 داشبورد شبیه‌سازها</h1>
      {loading ? (
        <p>در حال دریافت اطلاعات...</p>
      ) : (
        <ul className="space-y-3">
          {simulators.map((sim) => (
            <li key={sim.id} className="p-4 bg-gray-100 rounded shadow">
              <h2 className="text-lg font-semibold">{sim.title}</h2>
              <p className="text-sm text-gray-600">{sim.description}</p>
              <span className="text-xs text-blue-600">دسترسی: {sim.accessLevel}</span>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
