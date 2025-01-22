import { Loader2 } from 'lucide-react';

interface LoadingSectionProps {
  message?: string;
}

export function LoadingSection({ message = 'Loading...' }: LoadingSectionProps) {
  return (
    <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center gap-4 p-4">
      <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      <p className="text-sm text-gray-500">{message}</p>
    </div>
  );
}