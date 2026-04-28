import { useState, useEffect, useRef } from "react";
import {
  Heart, ShieldCheck, Sparkles, PawPrint, Stethoscope, Utensils, Home, Syringe,
  CheckCircle2, BookOpen, Clock, Users, AlertTriangle, Share2, Mail, Instagram,
  Phone, MapPin, Lock, Download, Star, ChevronRight, ChevronLeft, Menu, X
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
import marianaFundadora from "@/assets/mariana-fundadora.jpg";
import upLuna from "@/assets/up-luna.png";
import upThor from "@/assets/up-thor.png";
import upRecuperacao from "@/assets/up-recuperacao.png";
import upCuidado from "@/assets/up-cuidado.png";
import upVeterinario from "@/assets/up-veterinario.png";
import adotadaLexie from "@/assets/adotados/lexie.jpg";
import adotadoScott from "@/assets/adotados/scott.jpg";
import adotadaMaya from "@/assets/adotados/maya.jpg";
import adotadaGrazi from "@/assets/adotados/grazi.jpg";
import adotadaLiza from "@/assets/adotados/liza.jpg";
import adotadoTed from "@/assets/adotados/ted.jpg";
import adotadoFrank from "@/assets/adotados/frank.jpg";
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

const CHECKOUT_URL = "https://pay.kiwify.com.br/eqAb4HY?utm_source=facebook&utm_medium=cpc&utm_campaign={{campaign.name}}&utm_content={{ad.name}}&utm_term={{adset.name}}";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    utmify?: (...args: unknown[]) => void;
    utmifyPixel?: { track?: (...args: unknown[]) => void };
    pixelId?: string;
    dataLayer?: unknown[];
    __utmifyCheckoutListener?: boolean;
  }
}

const trackInitiateCheckout = () => {
  if (typeof window === "undefined") return;

  // Meta Pixel
  if (typeof window.fbq === "function") {
    window.fbq("track", "InitiateCheckout");
  }

  // UTMify Pixel — dispara em todas as APIs conhecidas para garantir captura
  try {
    if (typeof window.utmify === "function") {
      window.utmify("track", "InitiateCheckout");
    }
    if (window.utmifyPixel && typeof window.utmifyPixel.track === "function") {
      window.utmifyPixel.track("InitiateCheckout");
    }
    // dataLayer (caso UTMify escute via GTM)
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "InitiateCheckout" });
    // Evento DOM customizado
    window.dispatchEvent(new CustomEvent("InitiateCheckout"));
  } catch {
    /* noop */
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

/* ---------- Adotados Coverflow Carousel ---------- */
const AdotadosCarousel = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [active, setActive] = useState(0);
  const total = images.length;
  const next = () => setActive((i) => (i + 1) % total);
  const prev = () => setActive((i) => (i - 1 + total) % total);

  // Swipe/drag handling (touch + mouse)
  const dragState = useRef<{ startX: number; active: boolean; moved: boolean }>({
    startX: 0,
    active: false,
    moved: false,
  });
  const SWIPE_THRESHOLD = 40;

  const handlePointerDown = (clientX: number) => {
    dragState.current = { startX: clientX, active: true, moved: false };
  };
  const handlePointerMove = (clientX: number) => {
    if (!dragState.current.active) return;
    if (Math.abs(clientX - dragState.current.startX) > 8) {
      dragState.current.moved = true;
    }
  };
  const handlePointerEnd = (clientX: number) => {
    if (!dragState.current.active) return;
    const delta = clientX - dragState.current.startX;
    dragState.current.active = false;
    if (Math.abs(delta) >= SWIPE_THRESHOLD) {
      if (delta < 0) next();
      else prev();
    }
  };

  return (
    <div className="relative w-full">
      {/* Linha verde decorativa atrás */}
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/60 to-transparent" aria-hidden="true" />

      <div
        className="relative mx-auto flex h-[300px] touch-pan-y select-none items-center justify-center sm:h-[380px] md:h-[440px]"
        onTouchStart={(e) => handlePointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => handlePointerMove(e.touches[0].clientX)}
        onTouchEnd={(e) => handlePointerEnd(e.changedTouches[0].clientX)}
        onMouseDown={(e) => handlePointerDown(e.clientX)}
        onMouseMove={(e) => {
          if (dragState.current.active) handlePointerMove(e.clientX);
        }}
        onMouseUp={(e) => handlePointerEnd(e.clientX)}
        onMouseLeave={(e) => {
          if (dragState.current.active) handlePointerEnd(e.clientX);
        }}
      >
        {images.map((img, i) => {
          let offset = i - active;
          if (offset > total / 2) offset -= total;
          if (offset < -total / 2) offset += total;
          const abs = Math.abs(offset);
          if (abs > 2) return null;

          const translate = offset * 110; // px
          const scale = abs === 0 ? 1 : abs === 1 ? 0.78 : 0.6;
          const z = 50 - abs;
          const opacity = abs === 0 ? 1 : abs === 1 ? 0.85 : 0.5;

          return (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                if (dragState.current.moved) {
                  e.preventDefault();
                  e.stopPropagation();
                  return;
                }
                setActive(i);
              }}
              aria-label={`Ver foto ${i + 1}`}
              className="absolute transition-all duration-500 ease-out focus:outline-none"
              style={{
                transform: `translateX(${translate}px) scale(${scale})`,
                zIndex: z,
                opacity,
              }}
            >
              <div className="relative overflow-hidden rounded-2xl border-2 border-primary/70 bg-muted shadow-soft ring-1 ring-primary/20">
                {/* Fundo blur com a própria imagem para preencher laterais */}
                <img
                  src={img.src}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl opacity-50"
                />
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="relative block h-[260px] w-[200px] object-contain sm:h-[320px] sm:w-[250px] md:h-[380px] md:w-[300px]"
                />
              </div>
            </button>
          );
        })}

        {/* Setas */}
        <button
          type="button"
          onClick={prev}
          aria-label="Imagem anterior"
          className="absolute left-1 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:scale-110 hover:bg-primary/90 sm:left-3 sm:h-12 sm:w-12"
        >
          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próxima imagem"
          className="absolute right-1 z-[60] flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft transition hover:scale-110 hover:bg-primary/90 sm:right-3 sm:h-12 sm:w-12"
        >
          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </div>

      {/* Indicadores */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Ir para imagem ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? "w-8 bg-primary" : "w-2.5 bg-primary/30 hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
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

  // Fallback global: dispara InitiateCheckout para QUALQUER clique em link
  // que aponte para o checkout da Kiwify (pay.kiwify.com.br/eqAb4HY),
  // garantindo a captura mesmo se algum CTA for adicionado sem o handler.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.__utmifyCheckoutListener) return;
    window.__utmifyCheckoutListener = true;

    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const anchor = target.closest("a") as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href") || "";
      if (href.includes("pay.kiwify.com.br/eqAb4HY")) {
        trackInitiateCheckout();
      }
    };

    document.addEventListener("click", handler, true);
    return () => {
      document.removeEventListener("click", handler, true);
      window.__utmifyCheckoutListener = false;
    };
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
          <a href="#" className="flex items-center gap-2">
            <img src={logo} alt="Refúgio das Patas" className="h-10 w-10 rounded-full object-cover sm:h-12 sm:w-12" />
            <div className="leading-tight">
              <p className="font-display text-base font-bold text-brown sm:text-lg">Refúgio das Patas</p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground sm:text-xs">Campanha solidária</p>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-foreground lg:flex">
            <a href="#como-ajudar" className="hover:text-primary">Como ajudar</a>
            <a href="#causa" className="hover:text-primary">A causa</a>
            <a href="#comprar" className="hover:text-primary">Apoiar</a>
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
              <a href="#causa" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-muted">A causa</a>
              <a href="#comprar" onClick={() => setMenuOpen(false)} className="rounded-md px-3 py-2 hover:bg-muted">Apoiar</a>
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
              SOMOS UM ABRIGO <span className="text-highlight">INDEPENDENTE</span> CUIDANDO DE MAIS DE <span className="text-highlight">100 VIDAS</span>
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
                href={CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackInitiateCheckout}
                className="group inline-flex w-[88%] max-w-md items-center justify-center gap-2 whitespace-nowrap rounded-full bg-urgent px-5 py-3 text-[15px] font-bold uppercase tracking-wide text-urgent-foreground shadow-glow transition-all hover:scale-[1.02] hover:bg-urgent/90 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
              >
                <Heart className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" />
                Quero ajudar comprando
              </a>
            )}
          </div>
        </div>
      </section>

      {/* ============ FUNDADORA ============ */}
      <section id="quem-somos" aria-label="Fundadora do Refúgio das Patas" className="bg-gradient-to-b from-background via-secondary/20 to-background py-14 sm:py-20">
        <div className="container">
          <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-14">
            {/* Foto da fundadora — visível apenas no DESKTOP (no mobile aparece entre os parágrafos abaixo) */}
            <div className="hidden md:order-1 md:block">
              <div className="relative mx-auto w-full max-w-sm md:max-w-md">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-urgent/20 via-urgent/5 to-transparent blur-2xl" aria-hidden="true" />
                <div className="relative overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border">
                  <div className="relative w-full" style={{ paddingTop: "125%" }}>
                    <img
                      src={marianaFundadora}
                      alt="Mariana, fundadora do Refúgio das Patas, segurando três filhotes resgatados"
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 hidden h-20 w-20 items-center justify-center rounded-2xl bg-urgent text-urgent-foreground shadow-soft sm:flex">
                  <Heart className="h-9 w-9" fill="currentColor" />
                </div>
              </div>
            </div>

            {/* Storytelling */}
            <div className="order-2 md:order-2">
              <div className="md:border-l-2 md:border-urgent/40 md:pl-8">
                <span className="inline-block rounded-full bg-urgent/10 px-4 py-1 text-xs font-bold uppercase tracking-widest text-urgent">
                  Nossa História
                </span>
                <h2 className="mt-4 text-3xl font-extrabold leading-tight text-foreground sm:text-4xl md:text-[2.65rem]">
                  FUNDADORA DO <span className="text-urgent">REFÚGIO DAS PATAS</span>
                </h2>
                <p className="mt-4 text-lg italic leading-relaxed text-foreground/80 sm:text-xl">
                  “Nós, como você, acreditamos no amor e no cuidado com cada vida.”
                </p>
                <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-[1.05rem]">
                  <p>
                    <strong className="text-foreground">Mariana</strong>, de 29 anos, é formada em Letras.
                    Apesar da formação, sua verdadeira paixão sempre foi cuidar dos animais.
                  </p>
                  <p>
                    Há pouco menos de um ano, em uma cidade no interior de
                    <strong className="text-foreground"> Minas Gerais</strong>, ela decidiu transformar
                    essa paixão em propósito.
                  </p>
                  <p>
                    Tudo começou quando encontrou
                    <strong className="text-foreground"> três filhotes abandonados dentro de uma caixa de papelão</strong>,
                    à beira de uma estrada. Naquela noite, prometeu que nenhuma outra patinha precisaria
                    passar por aquilo sozinha.
                  </p>
                  {/* Foto da fundadora — visível apenas no MOBILE, entre os parágrafos */}
                  <div className="md:hidden">
                    <div className="relative mx-auto my-2 w-full max-w-sm">
                      <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-urgent/20 via-urgent/5 to-transparent blur-2xl" aria-hidden="true" />
                      <div className="relative overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border">
                        <div className="relative w-full" style={{ paddingTop: "125%" }}>
                          <img
                            src={marianaFundadora}
                            alt="Mariana, fundadora do Refúgio das Patas, segurando três filhotes resgatados"
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <p>
                    Foi assim que nasceu o <strong className="text-urgent">Refúgio das Patas</strong> —
                    um abrigo independente, <strong className="text-foreground">pequeno em estrutura, mas imenso em amor</strong>.
                  </p>
                  <p>
                    Mesmo com poucos recursos, Mariana já ajudou a salvar
                    <strong className="text-foreground"> diversas vidas</strong>, dedicando seus dias a
                    cuidar de animais que antes não tinham nenhuma chance.
                  </p>
                  <p>
                    Não há patrocínio, nem grandes apoios. Faltam ração, remédios, espaço… e até descanso.
                  </p>
                  <p>
                    Mas o que nunca faltou foi
                    <strong className="text-foreground"> dedicação, fé e a luta diária</strong> para que
                    cada animal acolhido tenha um lar, um prato de comida e alguém que o ame de verdade.
                  </p>
                  <p className="text-foreground">
                    Hoje, o abrigo segue de pé graças à força dela… e à ajuda de pessoas que, assim como
                    você, se importam. 💛
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ADOTADOS NO REFÚGIO ============ */}
      <section id="adotados" aria-label="Adotados no Refúgio das Patas" className="bg-gradient-to-b from-background via-secondary/30 to-background py-14 sm:py-20">
        <div className="container">
          <div className="relative mx-auto max-w-5xl">
            {/* Detalhe decorativo: filhote espiando por cima do card */}
            <div className="pointer-events-none absolute left-1/2 top-0 z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-card bg-card shadow-soft ring-2 ring-primary/40 sm:h-28 sm:w-28">
                <img
                  src={upFilhotes}
                  alt="Filhote espiando"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="relative rounded-[2rem] bg-card px-5 pb-10 pt-20 shadow-soft ring-1 ring-border sm:px-10 sm:pb-12 sm:pt-24">
              <div className="mx-auto max-w-2xl text-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-primary">
                  <PawPrint className="h-3.5 w-3.5" /> Histórias felizes
                </span>
                <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight text-brown sm:text-4xl md:text-5xl">
                  ADOTADOS NO <span className="text-primary">REFÚGIO</span>
                </h2>
                <p className="mt-3 text-base text-muted-foreground sm:text-lg">
                  Veja as fotos de alguns dos nossos peludos que encontraram lares cheios de amor.
                </p>
              </div>

              <div className="mt-10">
                <AdotadosCarousel
                  images={[
                    { src: adotadaLexie, alt: "Lexie, adotada e amada por sua nova família" },
                    { src: adotadoScott, alt: "Scott aproveitando um dia na praia com sua família" },
                    { src: adotadaMaya, alt: "Maya, adaptada e feliz no novo lar" },
                    { src: adotadaGrazi, alt: "Grazi, adotada em 2025, amada para sempre" },
                    { src: adotadaLiza, alt: "Liza, recuperada e em novo lar cheio de amor" },
                    { src: adotadoTed, alt: "Ted, transformado pelo amor e adotado por sua nova família" },
                    { src: adotadoFrank, alt: "Frank, ganhando um novo lar cheio de carinho" },
                  ]}
                />
              </div>

              <div className="mt-10 flex flex-col items-center gap-3">
                <Cta size="lg">Quero ajudar</Cta>
                <p className="text-sm text-muted-foreground">
                  Juntos, podemos fazer a diferença! 🐾✨
                </p>
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
            { name: "Liza", img: upThor, text: "Liza foi resgatada em estado crítico, com a pele gravemente machucada por um quadro avançado de sarna, já comprometido por infecções. Precisou de cuidados intensivos, tratamento prolongado e muito carinho para começar a se recuperar. Hoje, ela descansa em um lar temporário, finalmente recebendo o cuidado e a dignidade que sempre mereceu." },
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
                <li><a href="#" className="hover:underline">Início</a></li>
                <li><a href="#causa" className="hover:underline">A causa</a></li>
                <li><a href="#como-ajudar" className="hover:underline">Como ajudar</a></li>
                <li><a href="#comprar" className="hover:underline">Apoiar agora</a></li>
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
