'use client';
import dynamic from 'next/dynamic';

const HikingMap = dynamic(() => import('./HikingMap'), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Memuat peta pendakian...</p>
      </div>
    </div>
  )
});

export default function DynamicMap() {
  return <HikingMap />;
}