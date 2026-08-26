"use client";

const MONTHS = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];
const WEEKDAYS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

// PROXIMOS_EVENTOS=['dd;mm', 'dd;mm', ...] → Set of "mm-dd"
function parseEvents(raw: string | undefined): Set<string> {
  const set = new Set<string>();
  if (!raw) return set;
  const re = /(\d{2})\s*;\s*(\d{2})/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(raw)) !== null) set.add(`${m[2]}-${m[1]}`); // mm-dd
  return set;
}

function MonthCard({
  year, month, today, events,
}: { year: number; month: number; today: Date; events: Set<string> }) {
  const firstWeekday = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const mm = String(month + 1).padStart(2, "0");

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="rounded-2xl border border-accent/50 bg-bg-dark-2/50 p-5 shadow-[0_8px_32px_rgba(0,0,0,0.45)]">
      <h3 className="font-heading text-lg font-bold text-offwhite mb-4 flex items-baseline justify-between">
        <span>{MONTHS[month]}</span>
        <span className="text-current/70 font-medium">{year}</span>
      </h3>

      <div className="grid grid-cols-7 gap-y-1.5 text-center">
        {WEEKDAYS.map((w) => (
          <div key={w} className="text-[10px] font-semibold uppercase tracking-wide text-current/50 pb-1">
            {w}
          </div>
        ))}

        {cells.map((d, i) => {
          if (d === null) return <div key={i} />;
          const dd = String(d).padStart(2, "0");
          const isEvent = events.has(`${mm}-${dd}`);
          const isPast = new Date(year, month, d) < today;

          return (
            <div key={i} className="flex items-center justify-center py-0.5">
              {isEvent ? (
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-semibold text-bg-dark shadow-[0_2px_10px_rgba(142,221,101,0.55)]">
                  {d}
                </span>
              ) : (
                <span className={`text-sm ${isPast ? "text-current/50" : "text-current/70"}`}>
                  {d}
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function EditionsCalendar() {
  const events = parseEvents(process.env.PROXIMOS_EVENTOS);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const year = Number(process.env.ANO_CALENDARIO) || today.getFullYear();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 12 }, (_, month) => (
        <MonthCard key={month} year={year} month={month} today={today} events={events} />
      ))}
    </div>
  );
}
