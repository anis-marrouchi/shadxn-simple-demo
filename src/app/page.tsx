// app/page.tsx
import {SnarkyButton} from '@/components/ui/snarky-button';

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Your Next.js App
        </h1>
        <p className="mt-3 text-2xl">
          Get started by pressing the snarky button below:
        </p>
        
        <div className="mt-6">
          {/* Use your SnarkyButton component with some Tailwind CSS for styling */}
          <SnarkyButton />
        </div>
      </main>
    </div>
  );
}
