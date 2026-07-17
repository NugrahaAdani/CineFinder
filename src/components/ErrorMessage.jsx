import { CircleAlert } from "lucide-react";

export default function ErrorMessage({ message = "Terjadi kesalahan. Silakan coba lagi.",}) {
    return (
        <div
        role="alert"
        className="flex min-h-60 flex-col items-center justify-center gap-3 px-6 text-center"
        >
        <div className="flex size-12 items-center justify-center rounded-full bg-red-500/10">
            <CircleAlert
            size={26}
            className="text-red-500"
            />
        </div>

        <div>
            <h2 className="font-semibold text-white">
            Gagal memuat data
            </h2>

            <p className="mt-1 max-w-md text-sm text-zinc-400">
            {message}
            </p>
        </div>
        </div>
    );
}