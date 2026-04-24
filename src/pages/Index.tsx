import { useState } from "react";
import { Heart, ShieldCheck, Download, Sparkles, PawPrint, Stethoscope, Utensils, Home, Syringe, ChevronDown, CheckCircle2, BookOpen, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import logo from "@/assets/logo-refugio.png";
import heroPets from "@/assets/hero-pets.jpg";
import ebookMockup from "@/assets/ebook-mockup.png";
import dogRescue from "@/assets/dog-rescue.jpg";
import catRescue from "@/assets/cat-rescue.jpg";
import shelterCare from "@/assets/shelter-care.jpg";

const CHECKOUT_URL = "#comprar";

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full bg-secondary/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brown ring-1 ring-brown/10">
    <Sparkles className="h-3.5 w-3.5" /> {children}
  </span>
);

const CTAButton = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <a href={CHECKOUT_URL} className={`group inline-flex items-center justify-center gap-2 rounded-full gradient-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-glow transition-all hover:scale-[1.03] hover:shadow-soft sm:text-lg ${className}`}>
    <Heart className="h-5 w-5 transition-transform group-hover:scale-110" fill="currentColor" />
    {children}
  </a>
);

const SectionTitle = ({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) => (
  <div className="mx-auto mb-12 max-w-3xl text-center">
    {eyebrow && <Badge>{eyebrow}</Badge>}
    <h2 className="mt-4 text-3xl font-semibold leading-tight text-balance text-foreground sm:text-4xl md:text-5xl">{title}</h2>
    {sub && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{sub}</p>}
  </div>
);

const Index = () => {
  const impacts = [
    { icon: Utensils, label: "Ração diária" },
    { icon: Stethoscope, label: "Consultas veterinárias" },
    { icon: Syringe, label: "Vacinas e medicamentos" },
    { icon: PawPrint, label: "Castração" },
    { icon: Home, label: "Manutenção do espaço" },
    { icon: Heart, label: "Acolhimento de resgatados" },
  ];

  const ebookTopics = [
    "Cuidados básicos com cães e gatos no dia a dia",
    "Primeiros passos para uma adoção responsável",
    "Alimentação correta e rotina saudável",
    "Bem-estar animal e enriquecimento ambiental",
    "Cuidados especiais com animais resgatados",
    "Orientações práticas para quem ama a causa animal",
  ];

  const benefits = [
    { icon: Heart, title: "Você ajuda uma causa real", desc: "Seu valor vai direto para os cuidados com cães e gatos do Refúgio." },
    { icon: BookOpen, title: "Você recebe um e-book digital", desc: "Material completo, prático e feito para quem ama animais." },
    { icon: Sparkles, title: "Sua compra tem propósito", desc: "Mais que uma compra: um gesto que transforma vidas." },
    { icon: ShieldCheck, title: "Contribuição segura e acessível", desc: "Por apenas R$ 29,90 você gera impacto verdadeiro." },
  ];

  const faqs = [
    { q: "Como recebo o e-book?", a: "Imediatamente após a confirmação do pagamento, você recebe o link de download no seu e-mail." },
    { q: "O e-book é enviado na hora?", a: "Sim! A entrega é 100% digital e automática, em poucos minutos após a compra." },
    { q: "A compra realmente ajuda o Refúgio das Patas?", a: "Sim. O valor arrecadado é destinado integralmente à manutenção dos cuidados com os animais resgatados pela instituição." },
    { q: "O pagamento é seguro?", a: "Totalmente seguro. Utilizamos plataformas reconhecidas, com criptografia e proteção de dados." },
    { q: "Posso comprar mesmo sem conhecer a instituição?", a: "Pode sim. Esta página existe justamente para apresentar o trabalho do Refúgio das Patas e oferecer uma forma simples de apoiar." },
    { q: "O e-book é digital?", a: "Sim, em formato PDF, compatível com celular, tablet e computador." },
    { q: "Como funciona essa campanha solidária?", a: "Você compra o e-book por R$ 29,90, recebe o material em sua caixa de entrada e o valor da venda apoia diretamente o Refúgio das Patas." },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Refúgio das Patas" className="h-12 w-12 rounded-full object-contain sm:h-14 sm:w-14" />
            <div className="hidden sm:block">
              <p className="font-display text-lg font-semibold leading-none text-foreground">Refúgio das Patas</p>
              <p className="text-xs text-muted-foreground">E-book Solidário</p>
            </div>
          </div>
          <a href={CHECKOUT_URL} className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-card transition hover:bg-primary/90 sm:px-5">
            <Heart className="h-4 w-4" fill="currentColor" /> <span className="hidden sm:inline">Quero ajudar</span><span className="sm:hidden">Ajudar</span>
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative gradient-hero">
        <div className="container grid gap-12 py-12 sm:py-20 md:grid-cols-2 md:items-center md:gap-8 lg:py-28">
          <div className="animate-fade-up text-center md:text-left">
            <img src={logo} alt="Logo Refúgio das Patas" className="mx-auto mb-6 h-24 w-24 sm:h-28 sm:w-28 md:mx-0" />
            <Badge>Produto Solidário · Causa Animal</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
              Compre este e-book por <span className="text-primary">R$ 29,90</span> e ajude o Refúgio das Patas a continuar <em className="not-italic text-brown">salvando vidas</em>.
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted-foreground sm:text-lg md:mx-0">
              Sua compra mantém a rotina de cuidado com cães e gatos resgatados — ração, vacinas, consultas e acolhimento. Você apoia uma causa real e ainda recebe um material digital feito com carinho.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:items-start">
              <CTAButton>QUERO MEU E-BOOK E AJUDAR</CTAButton>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <ShieldCheck className="h-5 w-5 text-primary" />
                Compra segura · Entrega imediata
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <div className="rounded-2xl bg-card/80 px-5 py-3 shadow-card">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Apenas</p>
                <p className="font-display text-2xl font-bold text-primary">R$ 29,90</p>
              </div>
              <div className="rounded-2xl bg-card/80 px-5 py-3 shadow-card">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">Formato</p>
                <p className="font-display text-2xl font-bold text-brown">PDF</p>
              </div>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-4 rounded-[3rem] gradient-warm opacity-50 blur-3xl" />
            <div className="relative">
              <img src={ebookMockup} alt="Mockup do e-book Guia do Cuidado e Amor Animal" className="mx-auto w-full max-w-md animate-float drop-shadow-2xl" width={928} height={1152} />
              <div className="absolute -left-2 top-8 hidden rotate-[-8deg] rounded-2xl bg-card px-4 py-2 shadow-soft sm:block">
                <p className="text-xs font-semibold text-primary">★ Compra com propósito</p>
              </div>
              <div className="absolute -right-2 bottom-12 hidden rotate-[6deg] rounded-2xl bg-card px-4 py-2 shadow-soft sm:block">
                <p className="text-xs font-semibold text-brown">♥ Ajude uma causa real</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="container py-20 sm:py-24">
        <SectionTitle
          eyebrow="Por que sua compra faz diferença"
          title="Cada R$ 29,90 vira cuidado real para um animal resgatado"
          sub="O valor da sua compra ajuda o Refúgio das Patas a manter o trabalho diário de cuidado, acolhimento e recuperação de cães e gatos."
        />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3">
          {impacts.map(({ icon: Icon, label }) => (
            <div key={label} className="group flex flex-col items-center rounded-3xl bg-card p-6 text-center shadow-card transition hover:-translate-y-1 hover:shadow-soft sm:p-8">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary text-primary-foreground shadow-glow">
                <Icon className="h-7 w-7" />
              </div>
              <p className="font-display text-base font-semibold text-foreground sm:text-lg">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY EBOOK */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative">
            <img src={shelterCare} alt="Voluntários cuidando dos animais resgatados" loading="lazy" width={1280} height={896} className="rounded-[2rem] object-cover shadow-soft" />
          </div>
          <div>
            <Badge>Por que um e-book solidário?</Badge>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">Uma forma organizada, ética e transparente de apoiar a causa animal.</h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              Esta campanha foi estruturada como um <strong className="text-foreground">produto digital solidário</strong>: você não está apenas contribuindo com o Refúgio — você também recebe um material útil e cuidadosamente preparado em troca.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                "Você apoia o Refúgio das Patas de forma prática e direta",
                "Recebe um e-book útil e bem produzido para o seu dia a dia",
                "Fortalece a campanha e amplia o impacto da arrecadação",
                "Tudo de forma clara, transparente e organizada",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
                  <span className="text-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT EBOOK */}
      <section className="container py-20 sm:py-24">
        <SectionTitle eyebrow="O E-book" title="Guia do Cuidado e Amor Animal" sub="Um material digital criado com carinho para quem ama cães e gatos." />
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute inset-0 gradient-warm rounded-[3rem] opacity-40 blur-2xl" />
            <img src={ebookMockup} alt="Mockup 3D do e-book" loading="lazy" width={928} height={1152} className="relative mx-auto w-full max-w-sm drop-shadow-2xl" />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-display text-2xl font-semibold text-foreground sm:text-3xl">O que você recebe ao comprar:</h3>
            <ul className="mt-6 space-y-4">
              {[
                { icon: BookOpen, t: "E-book completo", d: "Material digital em PDF, leitura fácil em qualquer dispositivo." },
                { icon: Download, t: "Entrega digital imediata", d: "Acesso liberado em poucos minutos após o pagamento." },
                { icon: Heart, t: "Apoio direto à causa", d: "Sua compra ajuda os animais resgatados pelo Refúgio das Patas." },
                { icon: Clock, t: "Acesso vitalício", d: "Baixe quando quiser, leia quantas vezes precisar." },
              ].map(({ icon: Icon, t, d }) => (
                <li key={t} className="flex gap-4 rounded-2xl bg-card p-5 shadow-card">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-secondary text-brown">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground">{t}</p>
                    <p className="text-sm text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TOPICS */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <SectionTitle eyebrow="Conteúdo do e-book" title="O que você vai encontrar dentro" />
          <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
            {ebookTopics.map((t, i) => (
              <div key={t} className="flex items-start gap-4 rounded-2xl bg-card p-5 shadow-card">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full gradient-primary font-display font-bold text-primary-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="pt-1 text-foreground">{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT INSTITUTION */}
      <section className="container py-20 sm:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <Badge>Sobre o Refúgio das Patas</Badge>
            <h2 className="mt-4 font-display text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">Onde cada vida importa, e cada gesto faz diferença.</h2>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              O Refúgio das Patas é dedicado ao acolhimento, cuidado e bem-estar de cães e gatos resgatados. Nossa missão é simples e profunda: oferecer dignidade, saúde e amor a animais que um dia foram esquecidos.
            </p>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              O trabalho diário envolve resgates, alimentação, tratamento veterinário, recuperação emocional e a busca por lares responsáveis. Tudo isso só é possível com o apoio constante da comunidade.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={dogRescue} alt="Cão resgatado" loading="lazy" width={1024} height={1024} className="aspect-[3/4] rounded-3xl object-cover shadow-card" />
            <img src={catRescue} alt="Gato resgatado" loading="lazy" width={1024} height={1024} className="mt-8 aspect-[3/4] rounded-3xl object-cover shadow-card" />
          </div>
        </div>
      </section>

      {/* PAIN */}
      <section className="relative overflow-hidden bg-brown py-20 text-brown-foreground sm:py-24">
        <div className="container relative z-10 grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Badge>A realidade do abrigo</Badge>
            <h2 className="mt-4 font-display text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">Todos os dias, novas vidas dependem de ajuda.</h2>
            <p className="mt-5 text-base opacity-90 sm:text-lg">
              Abandono, superlotação, falta de recursos, despesas veterinárias, alimentação diária, medicações, resgates urgentes. A rotina é intensa — e cada apoio chega como um respiro.
            </p>
            <p className="mt-4 text-base opacity-90 sm:text-lg">
              Comprar este e-book por <strong>R$ 29,90</strong> é uma forma concreta, simples e direta de fazer parte dessa história de cuidado.
            </p>
            <div className="mt-8">
              <CTAButton>QUERO AJUDAR AGORA</CTAButton>
            </div>
          </div>
          <div className="relative">
            <img src={heroPets} alt="Cão e gato resgatados" loading="lazy" width={1536} height={1024} className="rounded-[2rem] object-cover shadow-soft" />
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="container py-20 sm:py-24">
        <SectionTitle eyebrow="Impacto" title="Vidas que já foram transformadas" sub="Números aproximados que refletem o trabalho contínuo do Refúgio das Patas." />
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {[
            { n: "+500", l: "Animais resgatados", icon: PawPrint },
            { n: "+10.000", l: "Refeições servidas", icon: Utensils },
            { n: "+1.200", l: "Atendimentos veterinários", icon: Stethoscope },
            { n: "+200", l: "Adoções concluídas", icon: Users },
          ].map((s) => (
            <div key={s.l} className="rounded-3xl gradient-warm p-6 text-center shadow-card sm:p-8">
              <s.icon className="mx-auto mb-3 h-8 w-8 text-brown" />
              <p className="font-display text-3xl font-bold text-brown sm:text-4xl">{s.n}</p>
              <p className="mt-2 text-sm font-medium text-secondary-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container">
          <SectionTitle eyebrow="Benefícios da sua compra" title="Por que vale a pena participar" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-3xl bg-card p-6 shadow-card transition hover:-translate-y-1 hover:shadow-soft sm:p-7">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl gradient-primary text-primary-foreground">
                  <b.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="comprar" className="container py-20 sm:py-28">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] gradient-primary p-8 text-center text-primary-foreground shadow-glow sm:p-14">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Oferta Solidária
            </span>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-balance sm:text-5xl">
              Guia do Cuidado e Amor Animal
            </h2>
            <p className="mt-4 text-base opacity-95 sm:text-lg">
              Por apenas <strong>R$ 29,90</strong>, você apoia o Refúgio das Patas e ainda recebe este material digital completo.
            </p>
            <div className="mt-8 inline-flex flex-col items-center rounded-3xl bg-white/15 px-8 py-6 backdrop-blur">
              <p className="text-xs uppercase tracking-wider opacity-80">Investimento solidário</p>
              <p className="font-display text-5xl font-bold sm:text-6xl">R$ 29,90</p>
              <p className="text-sm opacity-90">Pagamento único · Acesso imediato</p>
            </div>
            <div className="mt-8 flex flex-col items-center gap-3">
              <a href={CHECKOUT_URL} className="inline-flex items-center justify-center gap-2 rounded-full bg-card px-10 py-5 text-base font-bold text-primary shadow-soft transition hover:scale-[1.03] sm:text-lg">
                <Heart className="h-5 w-5" fill="currentColor" /> COMPRAR AGORA
              </a>
              <p className="flex items-center gap-2 text-xs opacity-90"><ShieldCheck className="h-4 w-4" /> Compra 100% segura · Entrega digital</p>
            </div>
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="container pb-20">
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: ShieldCheck, t: "Compra Segura" },
            { icon: Download, t: "Entrega Digital" },
            { icon: Heart, t: "Propósito Social" },
            { icon: Sparkles, t: "Comunicação Transparente" },
          ].map((g) => (
            <div key={g.t} className="flex items-center gap-3 rounded-2xl bg-card p-5 shadow-card">
              <g.icon className="h-7 w-7 flex-shrink-0 text-primary" />
              <p className="font-display text-sm font-semibold text-foreground">{g.t}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary/40 py-20 sm:py-24">
        <div className="container max-w-3xl">
          <SectionTitle eyebrow="Perguntas frequentes" title="Tire suas dúvidas" />
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`f-${i}`} className="overflow-hidden rounded-2xl border border-border/60 bg-card px-5 shadow-card">
                <AccordionTrigger className="text-left font-display text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden">
        <div className="container py-24 text-center sm:py-32">
          <Badge>Seu gesto transforma vidas</Badge>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-semibold leading-tight text-balance text-foreground sm:text-5xl md:text-6xl">
            Seu gesto pode ajudar a transformar a vida de um animal resgatado.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg">
            Por <strong className="text-primary">R$ 29,90</strong>, você leva um e-book útil para casa e ajuda o Refúgio das Patas a continuar fazendo o que faz de melhor: cuidar.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CTAButton>QUERO AJUDAR COMPRANDO O E-BOOK</CTAButton>
            <p className="text-sm text-muted-foreground">Acesso imediato · Pagamento seguro</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <img src={logo} alt="Refúgio das Patas" className="h-12 w-12" />
                <p className="font-display text-lg font-semibold text-foreground">Refúgio das Patas</p>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Um espaço de acolhimento, cuidado e amor para cães e gatos resgatados. Cada apoio mantém viva essa missão.
              </p>
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">Contato</p>
              <p className="mt-3 text-sm text-muted-foreground">contato@refugiodaspatas.org</p>
              <p className="text-sm text-muted-foreground">@refugiodaspatas</p>
            </div>
            <div>
              <p className="font-display font-semibold text-foreground">Transparência</p>
              <p className="mt-3 text-sm text-muted-foreground">CNPJ: a definir</p>
              <p className="text-sm text-muted-foreground">Campanha solidária ativa</p>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Refúgio das Patas · Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
