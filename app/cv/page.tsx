import NavBar from "@/components/NavBar";
import Image from "next/image";

export default function page() {
  return (
    <div className="min-h-screen bg-slate-900 p-3 md:p-10 text-white">
      <div className="lg:block hidden">
        <NavBar />
      </div>
      <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-slate-800 border border-white/10">
        <div className=" relative  lg:hidden">
          <NavBar />
        </div>
        {/* Banner */}
        <div className="flex items-center justify-between p-5  md:p-10 h-55 gap-1 bg-linear-to-r from-cyan-400 via-blue-500 to-purple-600">
          <div>
            <h1 className="text-3xl font-bold drop-shadow-lg">
               Yaser ashraf <p className=" inline-block">el-nagar</p> 
            </h1>
            <p className="text-[12px] md:text-lg text-white/80 mt-3">
              GP dentist / Video Montage Editor / Full stack Web-developer
            </p>
          </div>

          {/* Profile Picture */}
          <div className="">
            <div className=" select-none w-30 h-30 md:w-40 md:h-40 relative pt-4  object-cover rounded-full border-4   border-black/40 overflow-hidden shadow-xl">
              <Image
                className="bg-zinc-300"
                src="/cvPic.png"
                alt="Profile"
                // width={1000}
                // height={1000}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="absolute inset-0"></div>
            </div>
          </div>
        </div>

        <div className="p-10 space-y-10">
          {/* Contact Info */}
          <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white/5 p-6 rounded-2xl border border-white/10">
            <p className="text-sm flex gap-2 flex-col  ">
              <span className="font-semibold text-cyan-300">Email:</span>{" "}
              <span>yaseryaser1999@gmail.com</span>
            </p>
            <p className="text-sm flex gap-2 flex-col  ">
              <span className="font-semibold text-cyan-300">Phone:</span>{" "}
              <span>01096660304</span>
            </p>
            <p className="text-sm flex gap-2 flex-col ">
              <span className="font-semibold text-cyan-300">Location:</span>{" "}
              <span>Elmenofia - shebin el-kom</span>
            </p>
          </section>

          {/* Summary */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-cyan-300">About Me</h2>
            <div className="text-sm text-white/80 leading-6 bg-white/5 p-6 rounded-2xl border border-white/10">
              <p>
                Very calm person , trying always to push my limits and learn new
                things , hard working , orgnized , respnsible and faithful .
              </p>
              <p>Lived in KSA for more than 18 years .</p>
              <p>Finshed my military service .</p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-purple-300">
              Experience
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg">Current Position</h3>
                <p className="text-white/60 text-sm mb-2">2025 - Present</p>
                <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                  <li className="">
                    Deputy of Oral Medicine and Periodontology in General
                    Organization for teaching Hospitals and Institutes - Shebin
                    Elkom teaching hospital{" "}
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg">Internships</h3>
                <p className="text-white/60 text-sm mb-2">2022 - 2023</p>
                <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                  <li>8 months of internship in HUE </li>
                  <li>
                    4 months of internship in The General Organization for
                    teaching Hospitals and Institutes - Shebin Elkom teaching
                    hospital
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg">Trainning</h3>
                <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                  <p className="text-white/60 text-sm mb-2">2021 - 2022</p>
                  <li>
                    in{" "}
                    <a
                      className=" text-blue-500"
                      target="_blank"
                      href="https://www.facebook.com/Dentist.Mohammad.Alwarraky/?locale=ar_AR"
                    >
                      Swan Dental Clinic
                    </a>{" "}
                    with{" "}
                    <span className=" inline-block">
                      Dr / Mohamed Alwarraky
                    </span>{" "}
                    , <span className=" inline-block">Dr / Mohamed Hadida</span>{" "}
                    and{" "}
                    <span className=" inline-block">Dr / ayman hussein</span>
                  </li>
                  <br />
                  <p className="text-white/60 text-sm mb-2">2020 - 2021</p>
                  <li>
                    in{" "}
                    <a
                      className=" text-blue-500"
                      target="_blank"
                      href="https://www.facebook.com/profile.php?id=100085179618233"
                    >
                      International Dental Center
                    </a>{" "}
                    with{" "}
                    <span className=" inline-block">Dr / Hesham Hegazy</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg">Full Stack Developer</h3>
                <p className="text-white/60 text-sm mb-2">2022</p>
                <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                  <li>
                    Building user-friendly and mobile-friendly web applications.
                  </li>
                  <li>Connecting to databases and APIs.</li>
                  <li>Implementing responsive design.</li>
                </ul>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg">Graphic design</h3>
                <p className="text-white/60 text-sm mb-2">2018</p>
                <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                  <li>have some experience in Graphic designing.</li>
                </ul>
              </div>

              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg">Images Editing</h3>
                <p className="text-white/60 text-sm mb-2">2017</p>
                <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                  <li>
                    have some experience in editing Images with photoshop.
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                <h3 className="font-semibold text-lg">Video Montage Editor</h3>
                <p className="text-white/60 text-sm mb-2">2016</p>

                <ul className="text-sm text-white/80 space-y-1 list-disc list-inside">
                  <li>Very good experience in editing videos.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-blue-300">Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Next.js",
                "React",
                "TailwindCSS",
                "Node.js",
                "MongoDB",
                "TypeScript",
                "Photoshop",
                "Illustrator",
                "Sony Vegas",
                "Canva pro",
                "Endodontics",
                "Oral Surgery",
                "Periodontics",
                "Cosmetic Dentistry",
                "pedontics",
              ].map((skill, i) => (
                <div
                  key={i}
                  className="p-3 bg-white/5 border border-white/10 rounded-xl text-center text-sm font-medium text-white/90"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-yellow-300">
              Education
            </h2>
            <div className="p-6 bg-white/5 rounded-2xl text-center md:text-left border border-white/10 text-sm text-white/80">
              B.Sc. in General Dentistry -{" "}
              <a
                className=" text-blue-500"
                target="_blank"
                href="https://www.facebook.com/hue.eg/?locale=ar_AR"
              >
                HUE{" "}
              </a>{" "}
              <span className=" inline-block">( 2017 – 2022 )</span>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-2xl font-bold mb-3 text-green-300">
              Languages
            </h2>
            <ul className="text-sm text-white/80 space-y-1 p-6 bg-white/5 rounded-2xl border border-white/10">
              <li>Arabic — Native</li>
              <li>English — Very good</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
