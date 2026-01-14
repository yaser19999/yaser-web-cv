import NavBar from "@/components/NavBar";
import PromiseButton from "@/components/PromiseButton";
import { handleSubmit } from "@/utils/actions";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-900 p-3 md:p-10 text-white">
      <NavBar />
      <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-800 border border-white/10">
        {/* Banner */}
        <div className="p-6 md:p-10 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">
          <h1 className="text-3xl font-bold drop-shadow-lg">Contact Me</h1>
          <p className="text-white/80 mt-2 text-sm md:text-base">
            Feel free to reach out anytime.
          </p>
        </div>

        <div className="p-10 space-y-10">
          {/* Contact Info */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-300 mb-3">
              Contact Information
            </h2>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
          <div className="space-y-3">
              <p className="text-sm">
                <span className="font-semibold text-cyan-300">Email:</span>{" "}
                yaseryaser1999@gmail.com
              </p>

              <p className="text-sm">
                <span className="font-semibold text-cyan-300">Phone:</span>{" "}
                01096660304
              </p>

              <p className="text-sm">
                <span className="font-semibold text-cyan-300">Location:</span>{" "}
                Elmenofia — Shebin El-Kom
              </p>
            </div>
          </div>
            
          </section>



          {/* Social Media */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-green-300">
              Social Links
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/yasser.ashraf.569982"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <svg
                  className="w-7 h-7 text-blue-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.01 3.66 9.17 8.44 9.93v-7.03H8.08v-2.9h2.36V9.41c0-2.33 1.38-3.62 3.5-3.62 1.02 0 2.09.18 2.09.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.75h2.6l-.41 2.9h-2.19V22c4.78-.76 8.44-4.92 8.44-9.93z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Facebook</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yaser-elnagar-34750b25b/"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <svg
                  className="w-7 h-7 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.47 20h-3v-11h3v11zm-1.5-12.27c-.96 0-1.73-.78-1.73-1.73s.78-1.73 1.73-1.73c.96 0 1.73.78 1.73 1.73s-.77 1.73-1.73 1.73zm13.97 12.27h-3v-5.61c0-1.34-.03-3.06-1.87-3.06-1.88 0-2.17 1.46-2.17 2.96v5.71h-3v-11h2.88v1.5h.04c.4-.76 1.38-1.56 2.83-1.56 3.03 0 3.59 2 3.59 4.59v6.47z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">LinkedIn</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/yaser19999"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <svg
                  className="w-7 h-7 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.44c.6.11.82-.26.82-.58v-2.17c-3.34.73-4.05-1.61-4.05-1.61-.55-1.41-1.34-1.79-1.34-1.79-1.09-.74.08-.73.08-.73 1.21.09 1.85 1.25 1.85 1.25 1.07 1.85 2.8 1.32 3.48 1.01.11-.78.42-1.32.76-1.63-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.63-5.49 5.93.43.37.82 1.1.82 2.22v3.29c0 .32.22.7.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">GitHub</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/yaser_1_9_9_9"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <svg
                  className="w-7 h-7 text-pink-500"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.65 0 3 1.35 3 3v10c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Instagram</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/201096660304?text=Hello%20Yaser"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <svg
                  className="w-7 h-7 text-green-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12.04 2C6.53 2 2.1 6.43 2.1 11.94c0 2.1.62 4.05 1.79 5.74L2 22l4.43-1.84a10.06 10.06 0 005.62 1.72h.02c5.51 0 9.94-4.43 9.94-9.94C22 6.43 17.57 2 12.04 2zm5.72 14.27c-.24.67-1.38 1.31-1.9 1.39-.49.08-1.12.11-1.81-.11-.42-.13-.96-.31-1.65-.61-2.92-1.26-4.82-4.16-4.97-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.74-2.13 1.01-2.42.24-.28.63-.41 1.01-.41.12 0 .23.01.33.02.29.01.44.03.63.49.24.58.82 2 0.89 2.14.07.14.12.3.02.48-.09.19-.14.3-.27.47-.14.17-.28.37-.4.5-.14.14-.29.29-.13.56.16.27.72 1.18 1.54 1.9.84.75 1.54.98 1.81 1.09.28.11.44.09.61-.05.19-.14.79-.92 1-1.24.21-.33.42-.28.7-.17.28.11 1.77.83 2.07.98.3.14.5.22.57.34.07.11.07.64-.17 1.31z" />
                </svg>
                <div>
                  <p className="font-semibold text-white">WhatsApp</p>
                </div>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/yaser199999"
                target="_blank"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition"
              >
                <svg
                  className="w-7 h-7 text-sky-400"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9.04 15.39l-.34 4.8c.49 0 .7-.21.95-.46l2.28-2.18 4.72 3.46c.87.48 1.49.23 1.71-.81l3.11-14.56c.27-1.29-.46-1.79-1.3-1.48L1.96 9.63c-1.26.49-1.24 1.2-.21 1.53l4.96 1.55 11.53-7.25c.54-.35 1.03-.16.63.22" />
                </svg>
                <div>
                  <p className="font-semibold text-white">Telegram</p>
                </div>
              </a>
            </div>
          </section>

                    {/* Form */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-purple-300">
              Send a Message
            </h2>
            <form
              action={handleSubmit}
              className="space-y-4 bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <div>
                <label className="block mb-1 text-sm text-white/70">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl bg-slate-700 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Your name"
                  name="name"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-white/70">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full p-3 rounded-xl bg-slate-700 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Your email"
                  name="email"
                />
              </div>

              <div>
                <label className="block mb-1 text-sm text-white/70">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full p-3 rounded-xl bg-slate-700 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  placeholder="Your message..."
                  name="text"
                ></textarea>
              </div>
              <PromiseButton msg={"Send Message"}/>
            
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
