import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, BarChart3, Gamepad2, Users, Handshake, Search, Layers, LineChart, Mail, Send, Menu, X } from "lucide-react";
import eagle from "@/assets/eagle.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "KJ Agency — Marketing de Influência em Games e iGaming" },
      { name: "description", content: "A KJ Agency estrutura parcerias entre marcas e influenciadores de games, entretenimento e iGaming." },
      { property: "og:title", content: "KJ Agency — Marketing de Influência" },
      { property: "og:description", content: "Parcerias estruturadas entre marcas e criadores de games, entretenimento e iGaming." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const partners = [
  ["Melbet", "melbet.png"], ["JonBet", "jonbet.png"], ["Skin.Club", "skinclub.jpg"],
  ["CSGO Skins", "csgoskins.png"], ["RainGG", "raingg.png"], ["Dixy", "dixy.png"],
  ["ClashGG", "clashgg.png"],
];

const services = [
  { icon: Search, t: "Prospecção", d: "Criadores com audiência alinhada ao público da sua marca — encaixe real, não só volume." },
  { icon: Handshake, t: "Negociação", d: "Formato, valores e prazos definidos direto com o criador, em proposta pronta." },
  { icon: Layers, t: "Formato", d: "Lives, vídeo dedicado, posts, stories ou código promocional." },
  { icon: LineChart, t: "Acompanhamento", d: "Monitoramos a execução e reportamos o que a parceria entregou." },
];

const nav = [["Início", "#top"], ["Sobre", "#sobre"], ["Atuação", "#atuacao"], ["Parceiros", "#parceiros"], ["Contato", "#contato"]];

function GoldButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="bg-gold text-primary-foreground inline-flex items-center gap-4 rounded-full p-1.5 pr-7 font-semibold shadow-[0_0_30px_-8px_var(--primary)] transition hover:brightness-110">
      <span className="bg-background text-primary grid h-10 w-10 place-items-center rounded-full"><ArrowRight size={18} /></span>
      {children}
    </a>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-primary mb-3 text-xs font-semibold tracking-[0.25em] uppercase">{children}</p>;
}

function Index() {
  const [open, setOpen] = useState(false);
  return (
    <div id="top" className="bg-background min-h-screen overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
        <div className="bg-background/80 border-border mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-2 backdrop-blur">
          <a href="#top" className="flex items-center gap-2">
            <img src={eagle} alt="" width={40} height={40} className="h-10 w-10" />
            <span className="font-display text-gold text-xl leading-none">KJ<span className="block text-[8px] tracking-[0.4em]">AGENCY</span></span>
          </a>
          <nav className="hidden gap-7 text-sm md:flex">
            {nav.map(([l, h]) => <a key={h} href={h} className="text-muted-foreground hover:text-primary transition">{l}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contato" className="bg-gold text-primary-foreground hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold sm:inline-flex"><ArrowUpRight size={16} />Fale com a gente</a>
            <button className="text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="bg-card border-border mx-auto mt-2 flex max-w-6xl flex-col rounded-2xl border p-4 md:hidden">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="py-2">{l}</a>)}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative px-4 pt-28 pb-10 text-center">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary)_0%,transparent_55%)] opacity-15" />
        <div className="relative mx-auto max-w-4xl">
          <div className="relative mx-auto w-64 md:w-80">
            <div className="border-primary/30 absolute inset-6 rounded-full border" />
            <img src={eagle} alt="Águia KJ Agency" width={1024} height={1024} className="relative drop-shadow-[0_0_40px_var(--primary)]" />
          </div>
          <h2 className="font-display text-gold -mt-2 text-6xl md:text-7xl">KJ</h2>
          <p className="font-display text-foreground mt-1 text-xl tracking-[0.5em]">AGENCY</p>
          <p className="text-muted-foreground mt-6 text-xs tracking-[0.3em] uppercase">Games · Entretenimento · iGaming</p>
          <h1 className="mt-5 text-4xl font-bold md:text-6xl">Agência de<br />Marketing de <span className="text-gold">Influência</span></h1>
          <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg">A KJ Agency estrutura parcerias entre empresas e influenciadores de games, entretenimento e iGaming.</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GoldButton href="#contato">Quero uma parceria</GoldButton>
            <a href="#atuacao" className="border-border hover:border-primary inline-flex items-center gap-4 rounded-full border p-1.5 pr-7 font-medium transition">
              <span className="border-border text-primary grid h-10 w-10 place-items-center rounded-full border"><BarChart3 size={18} /></span>Ver como atuamos
            </a>
          </div>
          <div className="border-border mt-14 grid grid-cols-3 border-t pt-6">
            {[[Gamepad2, "Games"], [Users, "Influenciadores"], [Handshake, "Parcerias"]].map(([I, l], i) => {
              const Icon = I as typeof Gamepad2;
              return <div key={i} className={`flex flex-col items-center gap-2 ${i ? "border-border border-l" : ""}`}><Icon className="text-primary" size={30} strokeWidth={1.4} /><span className="text-muted-foreground text-[10px] tracking-[0.2em] uppercase md:text-xs">{l as string}</span></div>;
            })}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="border-border border-t px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div>
            <Label>Sobre nós</Label>
            <h2 className="text-3xl font-bold md:text-4xl">Menos negociação dispersa.<br /><span className="text-gold">Mais parceria estruturada.</span></h2>
            <p className="text-muted-foreground mt-6">A KJ Agency nasceu para simplificar o encontro entre marcas e influenciadores digitais. Cuidamos de toda a ponte: prospecção, negociação, formato e resultado.</p>
            <p className="text-muted-foreground mt-4">Criadores com audiência engajada em games, entretenimento e iGaming — e histórico real de campanhas de conversão nesse segmento.</p>
            <div className="mt-8"><GoldButton href="#atuacao">Conheça como atuamos</GoldButton></div>
          </div>
        </div>
      </section>

      {/* Atuação */}
      <section id="atuacao" className="border-border border-t px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Label>Como atuamos</Label>
          <h2 className="max-w-xl text-3xl font-bold md:text-4xl">Do primeiro contato <span className="text-gold">ao resultado</span></h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, t, d }) => (
              <div key={t} className="bg-card border-border hover:border-primary/60 rounded-2xl border p-6 text-center transition">
                <Icon className="text-primary mx-auto" size={36} strokeWidth={1.4} />
                <h3 className="mt-4 text-lg font-semibold">{t}</h3>
                <p className="text-muted-foreground mt-2 text-sm">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section id="parceiros" className="border-border border-t px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <Label>Parceiros</Label>
          <h2 className="max-w-xl text-3xl font-bold md:text-4xl">Marcas que já confiaram <span className="text-gold">nas nossas parcerias</span></h2>
          <div className="bg-card border-border mt-8 flex flex-col items-start gap-2 rounded-3xl border p-7 md:p-10">
            <p className="font-display text-gold text-5xl font-bold md:text-6xl">+11</p>
            <p className="text-muted-foreground text-sm">Parcerias firmadas</p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map(([n, f]) => (
              <div key={n} className="bg-card/80 border-border flex items-center gap-3 rounded-xl border p-3 backdrop-blur">
                <img src={`/partners/${f}`} alt={n} loading="lazy" className="bg-background h-10 w-10 rounded-lg object-contain" />
                <span className="font-medium">{n}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="px-4 pb-16">
        <div className="bg-card border-primary/30 mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-3xl border p-8 text-center md:flex-row md:p-10 md:text-left">
          <div>
            <h2 className="text-2xl font-bold md:text-3xl">Vamos estruturar a próxima parceria <span className="text-gold">da sua marca?</span></h2>
            <div className="text-muted-foreground mt-4 flex flex-col gap-2 sm:flex-row sm:gap-6">
              <a href="mailto:contato@kjagency.com.br" className="hover:text-primary inline-flex items-center gap-2"><Mail size={16} />contato@kjagency.com.br</a>
              <a href="https://t.me/agencykj" target="_blank" rel="noreferrer" className="hover:text-primary inline-flex items-center gap-2"><Send size={16} />@agencykj</a>
            </div>
          </div>
          <GoldButton href="https://t.me/agencykj">Fale com a gente</GoldButton>
        </div>
        <p className="text-muted-foreground mt-10 text-center text-xs">© 2026 KJ Agency · kjagency.com.br</p>
      </section>
    </div>
  );
}
