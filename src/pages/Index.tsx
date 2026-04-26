import { useState, useEffect } from "react";
import {
  Heart, ShieldCheck, Sparkles, PawPrint, Stethoscope, Utensils, Home, Syringe,
  CheckCircle2, BookOpen, Clock, Users, AlertTriangle, Share2, Mail, Instagram,
  Phone, MapPin, Lock, Download, Star, ChevronRight, Menu, X
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import logo from "@/assets/logo-refugio.png";
import heroPets from "@/assets/hero-pets.jpg";
import ebookMockup from "@/assets/ebook-capa.png";
import dogRescue from "@/assets/dog-rescue.jpg";
import catRescue from "@/assets/cat-rescue.jpg";
import shelterCare from "@/assets/shelter-care.jpg";
import storyBento from "@/assets/story-bento.jpg";
import storyLuna from "@/assets/story-luna.jpg";
import storyThor from "@/assets/story-thor.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import vslBg from "@/assets/vsl-bg.png";
import upBento from "@/assets/up-bento.png";
import upLuna from "@/assets/up-luna.png";
import upThor from "@/assets/up-thor.png";
import upRecuperacao from "@/assets/up-recuperacao.png";
import upCuidado from "@/assets/up-cuidado.png";
import upVeterinario from "@/assets/up-veterinario.png";
import upFamilia from "@/assets/up-familia.png";
import upFilhotes from "@/assets/up-filhotes.png";
import upRefeicao from "@/assets/up-refeicao.png";
import upRacaoGrupo from "@/assets/up-racao-grupo.png";
import upFilhotes4 from "@/assets/up-filhotes-4.png";
import upAbraco from "@/assets/up-abraco.png";
import upGatoRua from "@/assets/up-gato-rua.png";
import upCaoMagro from "@/assets/up-cao-magro.png";
import upCaoFerido from "@/assets/up-cao-ferido.png";
import upFilhoteMato from "@/assets/up-filhote-mato.png";
import upSituacao from "@/assets/up-situacao.png";
import upPrecisamos from "@/assets/up-precisamos.png";
import upAntesDepois from "@/assets/up-antesdepois.png";
import up4Filhotes from "@/assets/up-4filhotes.png";
import galAbracoGato from "@/assets/gal-abraco-gato.png";
import galComendo from "@/assets/gal-comendo.png";
import galCorredor from "@/assets/gal-corredor.png";
import galVet from "@/assets/gal-vet.png";
import galGatos from "@/assets/gal-gatos.png";
import galMatilha from "@/assets/gal-matilha.png";

const CHECKOUT_URL = "https://pay.kiwify.com.br/eqAb4HY";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const trackInitiateCheckout = () => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout");
  }
};

/* ---------- Building blocks ---------- */
const Cta = ({ children, className = "", size = "md" }: { children: React.ReactNode; className?: string; size?: "md" | "lg" | "xl" }) => {
  const sizes = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
    xl: "px-10 py-5 text-lg",
  };
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackInitiateCheckout}
      className={`group inline-flex w-full items-center justify-center gap-2 rounded-full bg-urgent font-bold uppercase tracking-wide text-urgent-foreground shadow-glow transition-all hover:scale-[1.02] hover:bg-urgent/90 sm:w-auto ${sizes[size]} ${className}`}
    >
      <Heart className="h-5 w-5" fill="currentColor" />
      {children}
    </a>
  );
};

const SectionTitle = ({ eyebrow, title, sub, center = true }: { eyebrow?: string; title: string; sub?: string; center?: boolean }) => (
  <div className={`mb-10 max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
    {eyebrow && (
      <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary">
        <PawPrint className="h-3.5 w-3.5" /> {eyebrow}
      </span>
    )}
    <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-balance text-brown sm:text-4xl md:text-5xl">{title}</h2>
    {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
  </div>
);

/* ---------- Live counter ---------- */
const useCounter = (target: number, start = 0) => {
  const [value, setValue] = useState(start);
  useEffect(() => {
    const duration = 1800;
    const steps = 60;
    const inc = (target - start) / steps;
    let curr = start;
    const id = setInterval(() => {
      curr += inc;
      if (curr >= target) { setValue(target); clearInterval(id); }
      else setValue(Math.floor(curr));
    }, duration / steps);
    return () => clearInterval(id);
  }, [target, start]);
  return value;
};

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const supporters = useCounter(1247);
  const ebooks = useCounter(892);
  const goal = 2500;
  const progress = Math.round((ebooks / goal) * 100);
  const [showVslCta, setShowVslCta] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowVslCta(true), 50000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("track", "ViewContent", {
        content_name: "E-book Guia do Cuidado e Amor Animal",
        content_category: "ebook",
        content_ids: ["ebook-refugio-das-patas"],
        content_type: "product",
        value: 29.9,
        currency: "BRL",
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* ============ TOP STRIP ============ */}
      <div className="bg-brown py-2 text-center text-xs font-medium text-brown-foreground sm:text-sm">
        <div className="container flex items-center justify-center gap-2">
          <Heart className="h-3.5 w-3.5 animate-pulse" fill="currentColor" />
          <span>Campanha solidária ativa — sua compra salva vidas hoje</span>
        </div>
      </div>

      {/* ============ HEADER ============ */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between sm:h-20">
          <a href="#topo" className="flex items-center gap-2">
            <img src={logo} alt="Refúgio das Patas" className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12" />
            <div className="leading-tight">
              <p className="font-display text-base font-bold text-brown sm:text-lg">Refúgio das Patas</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">Campanha solidária</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-foreground lg:flex">
            <a href="#como-ajudar" className="hover:text-primary">Como ajudar</a>
            <a href="#ebook" className="hover:text-primary">Sobre o e-book</a>
            <a href="#causa" className="hover:text-primary">A causa</a>
            <a href="#contato" className="hover:text-primary">Contato</a>
          </nav>

          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackInitiateCheckout}
            className="hidden rounded-full bg-urgent px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-urgent-foreground shadow-soft transition hover:bg-urgent/90 md:inline-flex"
          >
            Quero ajudar comprando
          </a>

          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background lg:hidden">
            <nav className="container flex flex-col gap-1 py-4 text-sm font-medium">
              <a href="#como-ajudar" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-muted">Como ajudar</a>
              <a href="#ebook" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-muted">Sobre o e-book</a>
              <a href="#causa" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-muted">A causa</a>
              <a href="#contato" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-muted">Contato</a>
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={() => { setMenuOpen(false); trackInitiateCheckout(); }} className="mt-2 rounded-full bg-urgent px-5 py-3 text-center text-xs font-bold uppercase text-urgent-foreground">
                Quero ajudar comprando
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* ============ VSL HERO ============ */}
      <section
        aria-label="Vídeo da campanha"
        className="relative border-b border-border bg-brown"
        style={{
          backgroundImage: `url(${vslBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay escuro para legibilidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-brown/80 via-brown/60 to-brown/85" aria-hidden="true" />

        <div className="container relative z-10 py-10 sm:py-16 md:py-20">
          {/* Chamada */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-urgent/20 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white ring-1 ring-urgent/40">
              <Heart className="h-3 w-3" fill="currentColor" /> Campanha solidária
            </span>
            <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight text-balance text-white drop-shadow-lg sm:text-3xl md:text-4xl">
              SOMOS UM ABRIGO <span className="text-urgent">INDEPENDENTE</span> CUIDANDO DE MAIS DE <span className="text-urgent">100 VIDAS</span>
            </h2>
            <p className="mt-3 text-sm font-medium text-white/90 sm:text-base md:text-lg">
              Cada compra ajuda a manter nossos animais alimentados, protegidos e cuidados.
            </p>
          </div>

          {/* Vídeo VSL */}
          <div className="mx-auto mt-8 w-full max-w-[680px] sm:mt-10">
            <div
              className="relative overflow-hidden rounded-2xl border-2 border-urgent bg-black shadow-2xl"
              style={{ aspectRatio: "4 / 3" }}
            >
              <iframe
                src="https://player.vimeo.com/video/1186664326?title=0&byline=0&portrait=0"
                title="VSL Refúgio das Patas"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="absolute inset-0 h-full w-full"
                frameBorder={0}
              />
            </div>
          </div>

          {/* CTA */}
          <div
            className={`mt-8 flex justify-center transition-all duration-700 ease-out sm:mt-10 ${
              showVslCta ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
            }`}
            aria-hidden={!showVslCta}
          >
            {showVslCta && (
              <a
                href="#produto-solidario"
                className="group inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-urgent px-8 py-4 text-base font-bold uppercase tracking-wide text-urgent-foreground shadow-glow transition-all hover:scale-[1.02] hover:bg-urgent/90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              >
                <Heart className="h-5 w-5" fill="currentColor" />
                Quero ajudar comprando
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ============ 1. OFFER BLOCK (acima do hero) ============ */}
      <section id="topo" className="bg-gradient-to-b from-secondary/40 to-background py-8 sm:py-12">
        <div id="produto-solidario" className="-mt-20 pt-20" aria-hidden="true" />
        <div className="container">
          <div className="mx-auto max-w-5xl rounded-3xl bg-card p-5 shadow-soft ring-1 ring-border sm:p-8">
            <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
              <div className="text-center md:text-left">
                <span className="inline-flex items-center gap-2 rounded-full bg-urgent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-urgent">
                  <Sparkles className="h-3 w-3" /> Produto solidário
                </span>
                <h1 className="mt-3 font-display text-2xl font-bold leading-tight text-brown sm:text-3xl md:text-4xl">
                  Ajude comprando o e-book solidário
                </h1>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  Adquira o e-book por <strong className="text-brown">R$ 29,90</strong> e ajude o Refúgio das Patas a continuar salvando vidas.
                </p>

                <div className="mt-5 flex flex-col items-center gap-3 sm:flex-row sm:items-center md:items-start md:justify-start">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-muted-foreground line-through">R$ 49,90</span>
                    <span className="font-display text-4xl font-extrabold text-urgent sm:text-5xl">R$ 29,90</span>
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">à vista no Pix ou cartão</span>
                </div>

                <Cta size="lg" className="mt-5">Comprar agora</Cta>
                <p className="mt-3 flex items-center justify-center gap-3 text-[11px] text-muted-foreground md:justify-start">
                  <span className="inline-flex items-center gap-1"><Lock className="h-3 w-3" /> compra segura</span>
                  <span className="inline-flex items-center gap-1"><Download className="h-3 w-3" /> entrega imediata</span>
                </p>
              </div>

              <div className="relative mx-auto w-44 sm:w-56 md:w-64">
                <div className="absolute -inset-4 rounded-full bg-primary-soft/30 blur-2xl" />
                <img src={ebookMockup} alt="E-book Refúgio das Patas" className="relative animate-float drop-shadow-2xl" width={400} height={520} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 2. HERO ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroPets} alt="" className="h-full w-full object-cover opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/85 to-background" />
        </div>
        <div className="container py-12 sm:py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">Organizado por</p>
            <p className="mt-1 font-display text-lg font-bold text-brown sm:text-xl">Refúgio das Patas — iniciativa de proteção animal</p>

            <h2 className="mt-6 font-display text-4xl font-extrabold leading-[1.05] text-brown text-balance sm:text-5xl md:text-6xl">
              Cada e-book vendido é uma <span className="text-urgent">tigela cheia</span> e uma vida que continua.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Mais de 180 cães e gatos resgatados dependem do nosso abrigo. Por apenas R$ 29,90 você recebe um e-book útil e mantém viva a missão de quem não pode pedir ajuda.
            </p>

            {/* meta + counters */}
            <div className="mx-auto mt-8 max-w-2xl rounded-2xl bg-card p-5 shadow-card ring-1 ring-border sm:p-6">
              <div className="flex items-center justify-between text-xs font-semibold text-muted-foreground sm:text-sm">
                <span>Meta da campanha: {goal} e-books</span>
                <span className="text-primary">{progress}%</span>
              </div>
              <div className="mt-2 h-3 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-gradient-to-r from-primary-soft to-primary transition-all" style={{ width: `${progress}%` }} />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3 text-center">
                <div className="rounded-xl bg-secondary/40 p-3">
                  <p className="font-display text-2xl font-bold text-brown sm:text-3xl">{supporters.toLocaleString("pt-BR")}</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">pessoas apoiando</p>
                </div>
                <div className="rounded-xl bg-secondary/40 p-3">
                  <p className="font-display text-2xl font-bold text-brown sm:text-3xl">{ebooks.toLocaleString("pt-BR")}</p>
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground sm:text-xs">e-books vendidos</p>
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Cta size="xl">Quero meu e-book</Cta>
              <a href="#causa" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                Conhecer a causa <ChevronRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 3. ABAS ============ */}
      <section className="container py-10 sm:py-14">
        <Tabs defaultValue="campanha" className="mx-auto max-w-5xl">
          <TabsList className="mx-auto grid w-full max-w-md grid-cols-2 rounded-full bg-secondary/50 p-1.5">
            <TabsTrigger value="campanha" className="rounded-full text-xs font-bold uppercase tracking-wide sm:text-sm">Sobre a campanha</TabsTrigger>
            <TabsTrigger value="galeria" className="rounded-full text-xs font-bold uppercase tracking-wide sm:text-sm">Galeria</TabsTrigger>
          </TabsList>

          <TabsContent value="campanha" className="mt-8">
            <div className="rounded-3xl bg-card p-6 shadow-card ring-1 ring-border sm:p-10">
              <h3 className="font-display text-2xl font-bold text-brown sm:text-3xl">Uma campanha que une propósito e cuidado</h3>
              <p className="mt-3 text-base text-muted-foreground">
                Estruturamos esta campanha através da venda de um e-book solidário porque acreditamos que ajudar pode ser também receber. Você apoia o trabalho do Refúgio das Patas e leva pra casa um material útil sobre cuidados com cães e gatos.
              </p>
              <p className="mt-3 text-base text-muted-foreground">
                Cada compra de R$ 29,90 vai diretamente para alimentação, medicamentos, vacinas, castração e a manutenção do espaço onde abrigamos animais resgatados das ruas. É uma forma simples, transparente e prática de fazer parte dessa corrente do bem.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="galeria" className="mt-8">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
              {[galAbracoGato, galCorredor, galVet, galGatos, galComendo, galMatilha].map((img, i) => (
                <div key={i} className="aspect-square overflow-hidden rounded-2xl bg-muted shadow-card flex items-center justify-center">
                  <img src={img} alt={`Animal resgatado ${i + 1}`} loading="lazy" className="h-full w-full object-cover transition-transform hover:scale-105" />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* ============ 4. URGÊNCIA ============ */}
      <section id="como-ajudar" className="bg-gradient-to-br from-urgent/10 via-background to-secondary/30 py-14 sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-urgent px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-urgent-foreground animate-pulse">
              <AlertTriangle className="h-3.5 w-3.5" /> Urgente
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-brown sm:text-4xl md:text-5xl">
              Os animais do abrigo precisam da nossa ajuda <span className="text-urgent">agora</span>.
            </h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Todos os dias chegam novos resgates: filhotes abandonados em sacolas, gatos atropelados, cães idosos largados na chuva. Nossa estrutura está no limite, e o custo com ração, remédios e atendimento veterinário cresce mês após mês.
            </p>
            <p className="mt-3 text-base text-muted-foreground sm:text-lg">
              Sem o apoio de pessoas como você, não conseguiremos manter essas vidas em pé. <strong className="text-brown">Comprar o e-book hoje</strong> é a forma mais rápida e concreta de fazer diferença <strong>ainda esta semana</strong>.
            </p>
            <div className="mt-7">
              <Cta size="lg">Comprar e ajudar agora</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 5. TRÊS BLOCOS EXPLICATIVOS ============ */}
      <section className="container py-14 sm:py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { img: upSituacao, title: "A situação", text: "O abrigo está superlotado. Mais de 180 animais convivem em um espaço pensado para metade disso, com despesas mensais que ultrapassam o que arrecadamos." },
            { img: upPrecisamos, title: "Por que precisamos de você", text: "Sem novas fontes de apoio, faltarão ração, vacinas e atendimento veterinário. Cada compra significa um dia a mais de cuidado garantido para um animal." },
            { img: upAntesDepois, title: "Como sua compra ajuda", text: "Os R$ 29,90 do e-book são revertidos integralmente para a manutenção do refúgio: alimentação, saúde, castração e resgates de emergência." },
          ].map((b, i) => (
            <article key={i} className="overflow-hidden rounded-3xl bg-card shadow-card ring-1 ring-border transition hover:shadow-soft">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={b.img} alt={b.title} loading="lazy" width={600} height={450} className="h-full w-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-brown">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ 6. OFERTA REPETIDA ============ */}
      <section className="bg-gradient-to-br from-primary to-primary-soft py-14 text-primary-foreground sm:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div className="relative mx-auto w-52 sm:w-64 md:w-full md:max-w-sm">
              <div className="absolute -inset-6 rounded-full bg-white/15 blur-3xl" />
              <img src={ebookMockup} alt="E-book solidário" loading="lazy" width={500} height={650} className="relative animate-float drop-shadow-2xl" />
            </div>
            <div className="text-center md:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
                Oferta solidária
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">
                Por R$ 29,90 você muda a história de um animal resgatado.
              </h2>
              <p className="mt-3 text-base text-primary-foreground/90">
                Receba o e-book digital agora e seja parte concreta dessa corrente. Cada cópia adquirida é mais um prato de comida, uma consulta veterinária ou uma vacina.
              </p>
              <div className="mt-5 flex items-baseline justify-center gap-3 md:justify-start">
                <span className="text-sm line-through opacity-70">R$ 49,90</span>
                <span className="font-display text-5xl font-extrabold">R$ 29,90</span>
              </div>
              <Cta size="lg" className="mt-6">Comprar agora</Cta>
              <p className="mt-4 inline-flex items-center gap-2 text-sm text-primary-foreground/90">
                <Share2 className="h-4 w-4" /> Compartilhe a campanha e amplie o impacto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 7. GALERIA ============ */}
      <section className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow="Galeria"
          title="Alguns dos animais resgatados pelo nosso projeto"
          sub="Cada rosto aqui já passou por dor, abandono e fome. Hoje, graças a quem apoia, têm comida, abrigo e a chance de uma nova família."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {[
            { img: upVeterinario, name: "Família feliz" },
            { img: upFilhotes4, name: "Filhotes acolhidos" },
            { img: upRefeicao, name: "Tratamento veterinário" },
            { img: upFilhotes, name: "Hora da refeição" },
            { img: upGatoRua, name: "Resgate de rua" },
            { img: upCaoFerido, name: "Cuidado especial" },
            { img: upCaoMagro, name: "Recuperação" },
            { img: upAbraco, name: "Carinho diário" },
          ].map((g, i) => (
            <figure key={i} className="group overflow-hidden rounded-2xl bg-card shadow-card ring-1 ring-border">
              <div className="aspect-[4/5] overflow-hidden bg-muted flex items-center justify-center">
                <img src={g.img} alt={g.name} loading="lazy" className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105" />
              </div>
              <figcaption className="p-2 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:p-3 sm:text-xs">{g.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ============ 8. VEJA COMO SUA COMPRA AJUDA ============ */}
      <section className="bg-secondary/40 py-14 sm:py-20">
        <div className="container">
          <SectionTitle
            eyebrow="Sua compra em ação"
            title="Veja como cada R$ 29,90 transforma vidas"
            sub="Total transparência: cada centavo arrecadado vira cuidado, comida e atendimento."
          />
          <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Utensils, title: "Alimentação", text: "Ração de qualidade todos os dias para cães e gatos do abrigo." },
              { icon: Syringe, title: "Vacinas", text: "Imunização completa para evitar doenças comuns em ambientes coletivos." },
              { icon: Stethoscope, title: "Consultas veterinárias", text: "Atendimento clínico, exames e cirurgias para animais doentes ou feridos." },
              { icon: PawPrint, title: "Castração", text: "Controle populacional responsável e prevenção de doenças." },
              { icon: Heart, title: "Resgates urgentes", text: "Combustível, transporte e equipamentos para resgates de emergência." },
              { icon: Home, title: "Manutenção do espaço", text: "Higiene, reformas, baias, camas e estrutura segura para os animais." },
            ].map((b, i) => (
              <div key={i} className="rounded-2xl bg-card p-6 shadow-card ring-1 ring-border transition hover:-translate-y-1 hover:shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-brown">{b.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ 9. HISTÓRIAS REAIS ============ */}
      <section id="causa" className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow="Histórias reais"
          title="Eles estão vivos porque alguém decidiu ajudar"
          sub="Conheça três das centenas de vidas que passaram pelo Refúgio das Patas."
        />
        <div className="grid gap-8 md:gap-10">
          {[
            { name: "Bento", img: upBento, text: "Encontrado dentro de uma caixa de papelão na chuva, com apenas dois meses de vida e desnutrido. Bento foi resgatado, tratado e hoje espera por uma família que o ame para sempre." },
            { name: "Luna", img: upLuna, text: "Vítima de maus-tratos, Luna chegou ao abrigo arisca e desconfiada. Após meses de tratamento, vacinas e muito carinho, voltou a confiar nas pessoas." },
            { name: "Thor", img: upThor, text: "Idoso e abandonado quando mais precisava de cuidados, Thor passou por cirurgia e tratamento prolongado. Hoje descansa em um lar temporário, com a dignidade que sempre mereceu." },
          ].map((s, i) => (
            <article key={s.name} className={`grid items-center gap-6 md:grid-cols-2 md:gap-10 ${i % 2 ? "md:[&>div:first-child]:order-2" : ""}`}>
              <div className="overflow-hidden rounded-3xl shadow-card ring-1 ring-border bg-muted flex items-center justify-center">
                <img src={s.img} alt={`História de ${s.name}`} loading="lazy" className="aspect-[4/3] w-full object-contain" />
              </div>
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                  <PawPrint className="h-3 w-3" /> História de {s.name}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-brown sm:text-3xl">{s.name}</h3>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.text}</p>
                <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" onClick={trackInitiateCheckout} className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-urgent hover:underline">
                  Ajude o próximo a ser resgatado <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ 10. INSTITUCIONAL ============ */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-14 sm:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
            <div className="overflow-hidden rounded-3xl shadow-soft bg-muted flex items-center justify-center">
              <img src={up4Filhotes} alt="Filhotes acolhidos pelo Refúgio das Patas" loading="lazy" width={800} height={600} className="aspect-[4/3] w-full object-contain" />
            </div>
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
                Quem somos
              </span>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-brown sm:text-4xl">
                Refúgio das Patas: amor que vira ação todos os dias
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Somos um projeto independente dedicado ao resgate, tratamento e adoção responsável de cães e gatos em situação de risco. Atuamos com transparência, prestação de contas e total compromisso com o bem-estar animal.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-foreground">
                {[
                  "Mais de 8 anos de atuação contínua na causa animal",
                  "Mais de 600 adoções responsáveis concluídas",
                  "Equipe veterinária parceira para casos críticos",
                  "Prestação de contas pública e relatórios mensais",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 11. SOBRE O E-BOOK ============ */}
      <section id="ebook" className="container py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div className="relative mx-auto w-56 sm:w-72 md:w-full md:max-w-md">
            <div className="absolute -inset-6 rounded-full bg-primary-soft/30 blur-3xl" />
            <img src={ebookMockup} alt="E-book Guia do Cuidado e Amor Animal" loading="lazy" width={600} height={780} className="relative animate-float drop-shadow-2xl" />
          </div>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary">
              <BookOpen className="h-3 w-3" /> O que você recebe
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight text-brown sm:text-4xl">
              Guia do Cuidado e Amor Animal
            </h2>
            <p className="mt-2 text-base text-muted-foreground">Um material digital prático, ilustrado e cheio de orientações úteis para quem ama cães e gatos.</p>

            <ul className="mt-5 space-y-2 text-sm">
              {[
                "Cuidados básicos do dia a dia com cães e gatos",
                "Adoção responsável: o que considerar antes",
                "Alimentação correta e rotina saudável",
                "Bem-estar e enriquecimento ambiental",
                "Cuidados especiais com animais resgatados",
                "Sinais de alerta e quando procurar o veterinário",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-2 text-center text-[11px] font-semibold uppercase tracking-wider text-muted-foreground sm:text-xs">
              <div className="rounded-xl bg-secondary/40 p-3"><Download className="mx-auto mb-1 h-4 w-4 text-primary" />PDF Digital</div>
              <div className="rounded-xl bg-secondary/40 p-3"><Clock className="mx-auto mb-1 h-4 w-4 text-primary" />Entrega imediata</div>
              <div className="rounded-xl bg-secondary/40 p-3"><BookOpen className="mx-auto mb-1 h-4 w-4 text-primary" />+ 60 páginas</div>
            </div>

            <Cta size="lg" className="mt-6">Quero comprar</Cta>
          </div>
        </div>
      </section>

      {/* ============ 12. BLOCO FINAL DE COMPRA ============ */}
      <section id="comprar" className="bg-urgent py-14 text-urgent-foreground sm:py-20">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest">
              <Heart className="h-3 w-3" fill="currentColor" /> Sua chance de ajudar
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              R$ 29,90 que viram comida, remédio e abrigo.
            </h2>
            <p className="mt-3 text-base text-urgent-foreground/90 sm:text-lg">
              Receba o e-book digital agora mesmo, com pagamento seguro e entrega imediata por e-mail.
            </p>

            <div className="mx-auto mt-8 max-w-md rounded-3xl bg-card p-6 text-center text-foreground shadow-glow ring-1 ring-white/30 sm:p-8">
              <img src={ebookMockup} alt="E-book" loading="lazy" width={200} height={260} className="mx-auto h-40 w-auto drop-shadow-xl" />
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="text-sm text-muted-foreground line-through">R$ 49,90</span>
                <span className="font-display text-5xl font-extrabold text-urgent">R$ 29,90</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">100% revertido para o Refúgio das Patas</p>
              <Cta size="xl" className="mt-5">Comprar agora</Cta>
              <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1"><Lock className="h-3 w-3" /> compra segura</span>
                <span className="inline-flex items-center gap-1"><Download className="h-3 w-3" /> entrega digital</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ 13. PROVA SOCIAL ============ */}
      <section className="container py-14 sm:py-20">
        <SectionTitle
          eyebrow="Quem já apoiou"
          title="Mensagens de quem comprou e ajudou"
          sub="Apoiadores reais que escolheram fazer parte da causa."
        />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "Mariana S.", date: "há 2 dias", text: "Comprei sem pensar duas vezes. Além de ajudar, recebi um material lindo e útil. Recomendo demais!" },
            { name: "João P.", date: "há 4 dias", text: "Projeto sério e transparente. Acompanho o trabalho do Refúgio das Patas e fico feliz em poder contribuir." },
            { name: "Carla R.", date: "há 1 semana", text: "Que iniciativa linda! O e-book está cheio de dicas, e ainda estou ajudando os bichinhos. Top demais." },
            { name: "Felipe A.", date: "há 1 semana", text: "Comprei pra mim e presenteei minha mãe. Ela amou e ainda fez parte de uma causa do bem." },
            { name: "Beatriz L.", date: "há 2 semanas", text: "Pagamento simples, recebi na hora por e-mail. Conteúdo muito bem feito, vale cada centavo." },
            { name: "Rodrigo T.", date: "há 3 semanas", text: "Adotei minha cachorra do refúgio anos atrás. Comprar o e-book foi minha forma de retribuir tudo." },
          ].map((c) => (
            <article key={c.name} className="rounded-2xl bg-card p-5 shadow-card ring-1 ring-border">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                  {c.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-bold text-brown">{c.name}</p>
                  <p className="text-[11px] text-muted-foreground">{c.date}</p>
                </div>
                <div className="ml-auto flex gap-0.5 text-urgent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5" fill="currentColor" />)}
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{c.text}"</p>
            </article>
          ))}
        </div>
      </section>

      {/* ============ 14. FAQ ============ */}
      <section className="bg-secondary/30 py-14 sm:py-20">
        <div className="container">
          <SectionTitle eyebrow="FAQ" title="Perguntas frequentes" />
          <Accordion type="single" collapsible className="mx-auto max-w-3xl space-y-3">
            {[
              { q: "Como recebo o e-book?", a: "Após a confirmação do pagamento, você recebe o link de download imediatamente no seu e-mail cadastrado." },
              { q: "O e-book é enviado na hora?", a: "Sim. A entrega é digital e automática. Em poucos instantes o material chega no seu e-mail." },
              { q: "A compra realmente ajuda o Refúgio das Patas?", a: "Sim. O valor arrecadado é integralmente destinado às despesas do abrigo: ração, vacinas, medicamentos, castração e estrutura." },
              { q: "O pagamento é seguro?", a: "Totalmente. Utilizamos plataforma de pagamento criptografada, com aceite via Pix e principais cartões de crédito." },
              { q: "Posso comprar mesmo sem conhecer a instituição?", a: "Pode sim. Mantemos transparência total no nosso trabalho e você pode acompanhar pelas redes sociais e relatórios mensais." },
              { q: "O e-book é em formato digital?", a: "Sim, é um PDF leve, otimizado para celular, tablet e computador. Você pode ler quando quiser, sem internet." },
              { q: "Como funciona essa campanha solidária?", a: "É simples: você compra um e-book útil por R$ 29,90 e o valor vira cuidado para os animais resgatados pelo refúgio. Apoio com propósito e entrega real." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="rounded-2xl border border-border bg-card px-5 shadow-card">
                <AccordionTrigger className="py-4 text-left text-sm font-bold text-brown hover:no-underline sm:text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-5 text-sm text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ============ 15. CTA FINAL ============ */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 -z-10">
          <img src={heroPets} alt="" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/95 to-background" />
        </div>
        <div className="container text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-urgent/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-urgent">
            Última chamada
          </span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-brown text-balance sm:text-5xl">
            Seu gesto pode transformar a vida de um animal resgatado hoje.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Por apenas R$ 29,90, você leva um e-book útil pra casa e mantém viva a missão do Refúgio das Patas.
          </p>
          <div className="mt-8">
            <Cta size="xl">Ajudar com R$ 29,90</Cta>
          </div>
        </div>
      </section>

      {/* ============ 16. FOOTER ============ */}
      <footer id="contato" className="border-t border-border bg-brown text-brown-foreground">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img src={logo} alt="Refúgio das Patas" className="h-12 w-12 rounded-full ring-2 ring-brown-foreground/20" />
                <div>
                  <p className="font-display text-lg font-bold">Refúgio das Patas</p>
                  <p className="text-xs opacity-80">Amor pelos animais em ação</p>
                </div>
              </div>
              <p className="mt-4 text-sm opacity-80">
                Projeto de proteção e resgate animal. Sua compra solidária mantém viva a esperança de cães e gatos resgatados.
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Links úteis</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li><a href="#topo" className="hover:underline">Início</a></li>
                <li><a href="#ebook" className="hover:underline">Sobre o e-book</a></li>
                <li><a href="#causa" className="hover:underline">A causa</a></li>
                <li><a href="#comprar" className="hover:underline">Comprar agora</a></li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest opacity-80">Contato</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> contato@refugiodaspatas.org</li>
                <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> (00) 00000-0000</li>
                <li className="flex items-center gap-2"><Instagram className="h-4 w-4" /> @refugiodaspatas</li>
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Brasil</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 border-t border-brown-foreground/20 pt-6 text-center text-xs opacity-80">
            © {new Date().getFullYear()} Refúgio das Patas — Todos os direitos reservados. Campanha solidária com propósito social.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
