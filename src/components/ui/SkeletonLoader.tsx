// src/components/ui/SkeletonLoader.tsx
export default function SkeletonLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`animate-pulse bg-gray-300 rounded ${className}`}></div>
  );
}
