export default function Loading({ message = "Memuat data..." }) {
    return (
        <div
        role="status"
        aria-live="polite"
        className="flex min-h-60 flex-col items-center justify-center gap-4"
        >
        <div className="size-10 animate-spin rounded-full border-4 border-zinc-700 border-t-red-600" />

        <p className="text-sm font-medium text-zinc-300">
            {message}
        </p>
        </div>
    );
}