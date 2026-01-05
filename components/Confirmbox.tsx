"use client";

export default function ConfirmDialog({
  open,
  title = "Are you sure?",
  message = "This action cannot be undone.",
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[9999] animate-fadeIn">
      <div className="bg-[#0e0e11] text-white rounded-2xl p-7 w-[90%] max-w-md border border-white/10 shadow-[0_0_40px_rgba(0,255,255,0.1)] relative">
        
        {/* Glow Line */}
        <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/20 pointer-events-none" />

        <h2 className="text-xl font-bold mb-3 tracking-wide text-cyan-300">
          {title}
        </h2>

        <p className="text-white/70 mb-8 leading-relaxed">
          {message}
        </p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="px-5 py-2.5 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-5 py-2.5 rounded-xl bg-red-600/80 text-white hover:bg-red-600 transition shadow-[0_0_20px_rgba(255,0,0,0.2)] border border-red-400/40"
          >
            Yes, Delete
          </button>
        </div>
      </div>

      {/* animations */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}
