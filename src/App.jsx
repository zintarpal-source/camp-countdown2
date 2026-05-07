import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  Flame,
  Hourglass,
  MapPin,
  Mountain,
  Navigation,
  Sparkles,
  Timer,
  Trees,
} from "lucide-react";

const sessions = [
  {
    id: 1,
    title: "I заїзд",
    dates: "8.06 – 21.06",
    subtitle: "Перший заїзд уже скоро",
    start: "2026-06-08T09:00:00+03:00",
    accent: "emerald",
    icon: Trees,
    scene: "sunrise",
  },
  {
    id: 2,
    title: "II заїзд",
    dates: "27.06 – 10.07",
    subtitle: "До другого заїзду ще трошки",
    start: "2026-06-27T09:00:00+03:00",
    accent: "sky",
    icon: Flame,
    scene: "blue",
  },
  {
    id: 3,
    title: "III заїзд",
    dates: "16.07 – 29.07",
    subtitle: "Найкрутіша подія цього літа — третій заїзд",
    start: "2026-07-16T09:00:00+03:00",
    accent: "violet",
    icon: Mountain,
    scene: "violet",
  },
];

const teams = [
  { name: "Синій ведмідь", animal: "bear", color: "blue", title: "Синій" },
  { name: "Зелений лис", animal: "fox", color: "green", title: "Зелений" },
  { name: "Помаранчевий крук", animal: "raven", color: "orange", title: "Крук" },
  { name: "Жовтий кріт", animal: "mole", color: "yellow", title: "Кріт" },
  { name: "Червоний лебідь", animal: "swan", color: "red", title: "Лебідь" },
];

export default function CampZelemiankaSite() {
  const [screen, setScreen] = useState({ page: "home" });
  const activeSession = screen.page === "session" ? sessions.find((s) => s.id === screen.id) || sessions[0] : sessions[0];

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-slate-950 text-white selection:bg-teal-300 selection:text-slate-950">
      <Atmosphere />
      {screen.page === "home" ? (
        <HomePage onOpenSession={(id) => setScreen({ page: "session", id })} />
      ) : (
        <SessionPage session={activeSession} onBack={() => setScreen({ page: "home" })} />
      )}
    </main>
  );
}

function Atmosphere() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#06111f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(45,212,191,.34),transparent_30%),radial-gradient(circle_at_86%_74%,rgba(59,130,246,.24),transparent_38%),linear-gradient(180deg,#08223f_0%,#06111f_62%,#020617_100%)]" />
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle,rgba(255,255,255,.85)_1px,transparent_1.7px)] [background-size:88px_88px]" />
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,rgba(125,211,252,.8)_1px,transparent_1.5px)] [background-size:147px_147px] [background-position:40px_20px]" />
      <div className="absolute left-1/2 top-16 h-[35rem] w-[35rem] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="absolute bottom-[-6rem] right-[-7rem] h-[28rem] w-[28rem] rounded-full bg-teal-300/15 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-[28rem] bg-[linear-gradient(to_top,rgba(2,6,23,1),rgba(2,6,23,.35),transparent)]" />
      <MountainSilhouette className="absolute inset-x-0 bottom-0 h-72 w-full opacity-95" />
    </div>
  );
}

function Header({ onBack, compact = false }) {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 md:px-8 lg:px-10">
      <button onClick={onBack} className="group flex items-center gap-4 text-left">
        <div className="relative grid h-14 w-14 place-items-center rounded-2xl border border-teal-200/25 bg-teal-300/10 shadow-[0_0_35px_rgba(45,212,191,.16)] backdrop-blur-xl transition group-hover:bg-teal-300/15">
          <CampLogo />
        </div>
        <div>
          <div className="text-2xl font-black tracking-[-0.035em] md:text-3xl">Табір Зелем’янка</div>
          <div className="mt-1 text-xs font-bold uppercase tracking-[0.28em] text-teal-100/65">с. Гребенів</div>
        </div>
      </button>

      {compact ? (
        <button onClick={onBack} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2.5 text-sm font-black text-white shadow-2xl backdrop-blur-xl transition hover:bg-white/15">
          <ArrowLeft className="h-4 w-4" />
          На головну
        </button>
      ) : (
        <div className="hidden items-center gap-3 rounded-full border border-white/12 bg-white/7 px-4 py-2.5 text-sm font-bold text-slate-100 shadow-2xl backdrop-blur-xl md:inline-flex">
          <MapPin className="h-5 w-5 text-teal-200" />
          с. Гребенів
        </div>
      )}
    </header>
  );
}

function HomePage({ onOpenSession }) {
  return (
    <div className="relative z-10 min-h-screen">
      <Header />
      <section className="mx-auto flex min-h-[calc(100vh-104px)] max-w-7xl flex-col justify-center px-5 pb-14 md:px-8 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_320px]">
          <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200/20 bg-teal-300/10 px-4 py-2 text-sm font-black text-teal-100 backdrop-blur-xl">
              <Sparkles className="h-4 w-4" />
              Табірне літо 2026
            </div>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.93] tracking-[-0.07em] text-white md:text-7xl lg:text-8xl">
              Літо. Карпати. Друзі.
            </h1>
            <p className="mt-4 text-3xl italic leading-tight text-teal-200 drop-shadow-[0_0_28px_rgba(45,212,191,.45)] md:text-5xl">
              Пригоди, що залишаться назавжди
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200/85 md:text-xl">
              Табір Зелем’янка — місце, де народжуються спогади, знаходяться друзі та відкривається справжній ти.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="hidden rounded-[2rem] border border-white/12 bg-white/8 p-5 shadow-2xl backdrop-blur-xl lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-2xl border border-teal-200/25 bg-teal-300/10 text-teal-100">
                <Navigation className="h-7 w-7" />
              </div>
              <div>
                <div className="text-lg font-black">с. Гребенів</div>
                <div className="mt-1 text-sm text-slate-300">Карпатський табір</div>
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {sessions.map((session, index) => (
            <SessionCard key={session.id} session={session} index={index} onClick={() => onOpenSession(session.id)} />
          ))}
        </div>
      </section>
    </div>
  );
}

function SessionCard({ session, index, onClick }) {
  const Icon = session.icon;
  const styles = getAccent(session.accent);

  return (
    <motion.button
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, delay: 0.16 + index * 0.12 }}
      onClick={onClick}
      className="group relative min-h-[350px] overflow-hidden rounded-[2.2rem] border border-white/20 bg-white/10 p-7 text-left shadow-[0_30px_100px_rgba(0,0,0,.38)] backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-white/35 hover:bg-white/15"
    >
      <CardLandscape scene={session.scene} />
      <div className={`absolute inset-0 bg-gradient-to-br ${styles.glow} via-transparent to-transparent opacity-90`} />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
      <div className="relative z-10">
        <div className={`mb-7 grid h-16 w-16 place-items-center rounded-full border-2 bg-white/7 ${styles.border} ${styles.text} shadow-[0_0_30px_rgba(255,255,255,.08)]`}>
          <Icon className="h-8 w-8" />
        </div>
        <div className={`text-2xl font-black ${styles.text}`}>{session.title}</div>
        <div className="mt-5 text-5xl font-black leading-none tracking-[-0.05em] text-white drop-shadow-lg">{session.dates}</div>
        <div className={`my-5 h-[2px] w-12 rounded-full ${styles.bg}`} />
        <div className="max-w-[18rem] text-xl leading-8 text-white/90">{session.subtitle}</div>
      </div>
      <div className={`absolute bottom-7 left-7 z-10 inline-flex items-center gap-3 rounded-full border bg-black/22 px-5 py-3 text-base font-black text-white backdrop-blur-xl transition group-hover:bg-white/15 ${styles.borderSoft}`}>
        Детальніше <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
      </div>
    </motion.button>
  );
}

function SessionPage({ session, onBack }) {
  const targetDate = useMemo(() => new Date(session.start), [session.start]);
  const countdown = useCountdown(targetDate);

  return (
    <div className="relative z-10 min-h-screen">
      <Header onBack={onBack} compact />
      <section className="mx-auto flex min-h-[calc(100vh-104px)] max-w-7xl flex-col justify-center px-5 pb-16 md:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.68 }}>
          <div className="text-6xl font-black leading-none tracking-[-0.07em] md:text-8xl lg:text-9xl">{session.title}</div>
          <div className="mt-3 text-5xl font-black leading-none tracking-[-0.05em] text-teal-200 md:text-7xl">{session.dates}</div>
          <p className="mt-6 text-xl text-slate-200/90">Відлік до початку заїзду.</p>
          <p className="mt-3 text-3xl italic text-teal-200 drop-shadow-[0_0_28px_rgba(45,212,191,.45)]">Найкращі пригоди починаються тут!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.68, delay: 0.1 }}
          className="mt-10 grid overflow-hidden rounded-[2.2rem] border border-white/20 bg-white/10 shadow-[0_30px_100px_rgba(0,0,0,.35)] backdrop-blur-2xl md:grid-cols-4"
        >
          <Counter icon={<CalendarDays />} value={countdown.days} label="днів" />
          <Counter icon={<Clock3 />} value={countdown.hours} label="годин" />
          <Counter icon={<Hourglass />} value={countdown.minutes} label="хвилин" />
          <Counter icon={<Timer />} value={countdown.seconds} label="секунд" last />
        </motion.div>

        <div className="mt-7 flex justify-center text-teal-200">
          <ChevronDown className="h-9 w-9 animate-bounce" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 lg:px-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black tracking-[-0.04em] md:text-6xl">Команди заїзду</h2>
          <div className="mx-auto mt-5 flex w-64 items-center justify-center gap-4">
            <div className="h-[2px] flex-1 rounded-full bg-gradient-to-r from-transparent to-teal-200" />
            <Mountain className="h-5 w-5 text-teal-200" />
            <div className="h-[2px] flex-1 rounded-full bg-gradient-to-l from-transparent to-teal-200" />
          </div>
        </div>

        <div className="grid gap-7 md:grid-cols-3">
          {teams.slice(0, 3).map((team, index) => (
            <TeamCard key={team.name} team={team} index={index} />
          ))}
        </div>
        <div className="mx-auto mt-7 grid max-w-3xl gap-7 md:grid-cols-2">
          {teams.slice(3).map((team, index) => (
            <TeamCard key={team.name} team={team} index={index + 3} />
          ))}
        </div>
      </section>
    </div>
  );
}

function Counter({ icon, value, label, last = false }) {
  return (
    <div className={`p-7 text-center ${last ? "" : "border-b border-white/12 md:border-b-0 md:border-r"}`}>
      <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full border border-teal-200/35 bg-teal-300/10 text-teal-200">
        {React.cloneElement(icon, { className: "h-7 w-7" })}
      </div>
      <div className="text-6xl font-black leading-none tabular-nums text-teal-200 md:text-7xl">{String(value).padStart(2, "0")}</div>
      <div className="mt-3 text-lg text-white/85">{label}</div>
    </div>
  );
}

function TeamCard({ team, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="rounded-[2.1rem] border border-white/15 bg-white/10 p-6 text-center shadow-[0_25px_80px_rgba(0,0,0,.28)] backdrop-blur-xl"
    >
      <Medallion team={team} />
      <div className="mt-5 text-2xl font-black text-white">{team.name}</div>
    </motion.article>
  );
}

function Medallion({ team }) {
  return (
    <div className={`relative mx-auto grid h-56 w-56 place-items-center rounded-full ${team.color}-aura`}>
      <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_22deg,#b45309,#fde68a,#92400e,#facc15,#b45309)] shadow-[inset_0_0_24px_rgba(0,0,0,.35)]" />
      <div className="absolute inset-[9px] rounded-full border-[8px] border-amber-300/80 bg-[radial-gradient(circle_at_32%_22%,rgba(255,255,255,.32),transparent_22%),radial-gradient(circle_at_center,var(--team-main),rgba(2,6,23,.72)_62%,rgba(2,6,23,.9))] shadow-inner" />
      <div className="absolute inset-[22px] rounded-full border border-amber-100/30" />
      <GemRing color={team.color} />
      <AnimalGlyph type={team.animal} />
      <div className="absolute bottom-8 rounded-full border border-amber-100/30 bg-black/20 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-amber-100/85 backdrop-blur">{team.title}</div>
    </div>
  );
}

function GemRing({ color }) {
  const gems = Array.from({ length: 8 });
  return (
    <div className="absolute inset-0">
      {gems.map((_, i) => (
        <div
          key={i}
          className={`absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-amber-100/50 ${color}-gem`}
          style={{ transform: `rotate(${i * 45}deg) translateY(-94px) rotate(45deg)` }}
        />
      ))}
    </div>
  );
}

function AnimalGlyph({ type }) {
  const common = "absolute h-32 w-32 drop-shadow-[0_14px_22px_rgba(0,0,0,.55)]";
  if (type === "bear") {
    return (
      <svg className={common} viewBox="0 0 120 120" fill="none">
        <circle cx="35" cy="35" r="17" fill="#0f172a" stroke="#93c5fd" strokeWidth="4" />
        <circle cx="85" cy="35" r="17" fill="#0f172a" stroke="#93c5fd" strokeWidth="4" />
        <path d="M28 66c0-24 18-42 32-42s32 18 32 42c0 21-16 35-32 35S28 87 28 66Z" fill="#1d4ed8" stroke="#bfdbfe" strokeWidth="4" />
        <circle cx="49" cy="61" r="4" fill="#fff" />
        <circle cx="71" cy="61" r="4" fill="#fff" />
        <path d="M51 78c7 7 12 7 18 0" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        <path d="M57 70h6l-3 5-3-5Z" fill="#020617" stroke="#fff" strokeWidth="2" />
      </svg>
    );
  }
  if (type === "fox") {
    return (
      <svg className={common} viewBox="0 0 120 120" fill="none">
        <path d="M23 28l23 22 14-12 14 12 23-22-12 55c-3 17-17 27-25 27S38 100 35 83L23 28Z" fill="#16a34a" stroke="#bbf7d0" strokeWidth="4" />
        <path d="M44 60l16 17 16-17" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="47" cy="65" r="4" fill="#fff" />
        <circle cx="73" cy="65" r="4" fill="#fff" />
        <path d="M56 83h8l-4 6-4-6Z" fill="#020617" />
      </svg>
    );
  }
  if (type === "raven") {
    return (
      <svg className={common} viewBox="0 0 120 120" fill="none">
        <path d="M23 71c14-33 43-48 73-33-17 5-21 12-21 20 11 2 18 9 20 19-17-8-33-5-43 12-7 12-22 16-36 9 13-4 20-11 21-20-5 1-10-1-14-7Z" fill="#111827" stroke="#fed7aa" strokeWidth="4" />
        <path d="M76 49l29-7-22 17" fill="#f97316" stroke="#fed7aa" strokeWidth="3" />
        <circle cx="70" cy="49" r="4" fill="#fde68a" />
        <path d="M35 83c12-2 25-9 34-21" stroke="#f97316" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === "mole") {
    return (
      <svg className={common} viewBox="0 0 120 120" fill="none">
        <path d="M24 75c0-22 18-38 39-38 18 0 33 12 33 30 0 22-19 38-42 38-17 0-30-11-30-30Z" fill="#3f3f46" stroke="#fef3c7" strokeWidth="4" />
        <path d="M44 38c1-12 10-20 21-20 10 0 18 7 19 18" stroke="#facc15" strokeWidth="6" strokeLinecap="round" />
        <circle cx="54" cy="63" r="4" fill="#fff" />
        <path d="M77 65c-6-2-12 1-15 8" stroke="#fef3c7" strokeWidth="4" strokeLinecap="round" />
        <path d="M32 88c9-2 16-8 18-17" stroke="#facc15" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className={common} viewBox="0 0 120 120" fill="none">
      <path d="M42 90c24 12 50 1 55-20-14 7-30 1-38-12-7-12 3-26 19-24-8-11-24-13-34-4-12 11-8 28 1 39-11 0-20-3-28-9 2 14 11 24 25 30Z" fill="#fee2e2" stroke="#fecaca" strokeWidth="4" />
      <path d="M65 32c13-17 29-19 39-8-14 0-22 4-28 15" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
      <path d="M48 79c12-2 24-7 34-18" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
      <circle cx="78" cy="38" r="3" fill="#020617" />
    </svg>
  );
}

function CardLandscape({ scene }) {
  const overlay = scene === "sunrise" ? "from-amber-300/28 via-emerald-400/10" : scene === "blue" ? "from-sky-300/20 via-blue-500/10" : "from-violet-300/24 via-fuchsia-400/10";
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-br ${overlay} to-transparent`} />
      <div className="absolute inset-x-0 bottom-0 h-48">
        <MountainSilhouette className="h-full w-full opacity-70" compact />
      </div>
      {scene === "violet" && (
        <div className="absolute bottom-10 right-10 h-10 w-24 rounded-full bg-amber-300/20 blur-xl" />
      )}
    </div>
  );
}

function MountainSilhouette({ className = "", compact = false }) {
  return (
    <svg className={className} viewBox="0 0 1440 300" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 300V160l150-80 120 95 160-132 170 150 150-92 175 126 150-145 165 135 200-115v198H0z" fill={compact ? "rgba(255,255,255,.08)" : "rgba(2,6,23,.58)"} />
      <path d="M0 300v-86l125-48 110 62 150-96 165 112 138-70 152 92 168-125 132 92 176-86 124 76v77H0z" fill={compact ? "rgba(2,6,23,.65)" : "rgba(2,6,23,.86)"} />
      <path d="M0 300v-42c45-24 81-27 124-16 44 12 76 10 122-11 49-22 105-26 162-8 54 17 91 18 139 0 72-27 128-24 192 5 58 26 100 26 160 0 65-28 138-28 202 3 42 21 86 20 132-1 61-28 132-20 207 26v44H0z" fill="rgba(2,6,23,.95)" />
    </svg>
  );
}

function CampLogo() {
  return (
    <svg className="h-9 w-9 text-teal-200" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M7 48L23 18l9 16 8-12 17 26H7Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 48V36l7 12M46 48V34l9 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10 54c10-5 34 5 44-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function getAccent(accent) {
  if (accent === "emerald") {
    return {
      text: "text-emerald-300",
      bg: "bg-emerald-300",
      border: "border-emerald-200/45",
      borderSoft: "border-emerald-200/25",
      glow: "from-emerald-400/28",
    };
  }
  if (accent === "sky") {
    return {
      text: "text-sky-300",
      bg: "bg-sky-300",
      border: "border-sky-200/45",
      borderSoft: "border-sky-200/25",
      glow: "from-sky-400/28",
    };
  }
  return {
    text: "text-violet-300",
    bg: "bg-violet-300",
    border: "border-violet-200/45",
    borderSoft: "border-violet-200/25",
    glow: "from-violet-400/30",
  };
}

function useCountdown(targetDate) {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const diff = Math.max(targetDate.getTime() - now.getTime(), 0);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}
