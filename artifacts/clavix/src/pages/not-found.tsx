import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <div className="w-full max-w-md mx-4 p-8 rounded-2xl bg-white/[0.02] border border-white/5">
        <div className="flex mb-4 gap-3 items-center">
          <AlertCircle className="h-8 w-8 text-red-500 shrink-0" />
          <h1 className="text-2xl font-bold text-white">404 Page Not Found</h1>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}
