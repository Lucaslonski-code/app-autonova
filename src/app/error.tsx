
"use client";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="space-y-4 text-center">
        <h1>Ocorreu um erro</h1>

        <p>{error.message}</p>

        <button onClick={reset}>
          Tentar novamente
        </button>
      </div>
    </div>
  );
}

