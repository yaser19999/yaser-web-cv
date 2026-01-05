import Link from "next/link";


export default function PremiumGlassButton() {
  return (
    <>
      <style>{`
        @keyframes gradient-move {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%) rotate(45deg);
          }
          100% {
            transform: translateX(100%) translateY(100%) rotate(45deg);
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-move {
          animation: gradient-move 4s ease infinite;
        }

        .animate-shine {
          animation: shine 3s linear infinite;
        }

        .animate-gradient-shift {
          animation: gradient-shift 3s ease infinite;
        }

        .glass-button {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        

        .glass-button:active {
          transform: translateY(0);
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }

        .gradient-bg {
          background: linear-gradient(45deg, #ff0080, #ff8c00, #00ff88, #00d4ff, #9d00ff, #ff0080);
          background-size: 400% 400%;
        }

        .button-gradient {
          background: linear-gradient(135deg, #ff0080 0%, #7928ca 20%, #00d4ff 40%, #00ff88 60%, #ff8c00 80%, #ff0080 100%);
          background-size: 300% 300%;
        }

        .shine-effect {
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
        }
      `}</style>

      <Link href="/plans" className="flex  justify-center  items-center relative overflow-hidden rounded-bl-2xl rounded-br-2xl" 
           style={{ background: 'linear-gradient(to bottom right, #1a1a2e, #16213e, #0f3460)' }}>
        
        <div className="absolute inset-0 w-[200%] h-[200%] opacity-50 gradient-bg animate-gradient-move"></div>
        
        <button 
        className="glass-button relative px-5 py-2 text-2xl flex items-center justify-center font-semibold text-white  w-full  cursor-pointer transition-all duration-300 z-10 group overflow-hidden">
          
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] rotate-45 shine-effect animate-shine pointer-events-none"></div>
          <div className="absolute inset-0  opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10 button-gradient animate-gradient-shift"></div>
          
          <span className="relative z-20 text-lg">Get A Website like This Now !!</span>
        </button>
      </Link>
    </>
  );
}