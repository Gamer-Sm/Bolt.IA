"use client";

import { motion } from "framer-motion";
import Head from "next/head";

// ————————————————————————————
// Pequeños helpers de animación
// ————————————————————————————
const fadeUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = {
  animate: { transition: { staggerChildren: 0.08 } },
};

// ————————————————————————————
// Iconos
// ————————————————————————————
const BlueBoltIcon = ({ className = "h-4 w-4" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={`${className} text-sky-400`}
    fill="currentColor"
  >
    <path d="M13 2L3 14h7l-1 8 12-14h-7l1-6z" />
  </svg>
);

// ————————————————————————————
// UI Reusables
// ————————————————————————————

type FeatureProps = { title: string; desc: string };
const Feature = ({ title, desc }: FeatureProps) => (
  <motion.div
    variants={fadeUp}
    className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm transition-colors hover:border-white/20"
  >
    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 text-black shadow ring-1 ring-sky-400/40">
      <BlueBoltIcon className="h-5 w-5" />
    </div>
    <h3 className="text-lg font-semibold tracking-tight">{title}</h3>
    <p className="mt-2 text-sm text-white/70">{desc}</p>
  </motion.div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <motion.div
    variants={fadeUp}
    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-center"
  >
    <div className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-extrabold tracking-tight text-transparent">
      {value}
    </div>
    <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
  </motion.div>
);

const FAQ = ({ q, a }: { q: string; a: string }) => (
  <motion.details
    variants={fadeUp}
    className="group rounded-xl border border-white/10 bg-white/[0.05] p-4 open:shadow-lg open:shadow-sky-500/10"
  >
    <summary className="cursor-pointer list-none font-medium text-white/90 transition-colors hover:text-white">
      <span className="mr-2 inline-flex"><BlueBoltIcon className="h-4 w-4" /></span>
      {q}
    </summary>
    <p className="mt-2 text-sm text-white/70">{a}</p>
  </motion.details>
);

// ————————————————————————————
// Página
// ————————————————————————————

export default function BoltLanding() {
  const brandBlue = "from-sky-400 to-sky-500";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP ?? "0000000000";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Bolt.IA%20⚡%20Quiero%20activar%20mi%20chat%20inteligente`;

  // Precio
  const priceCOP = 50000;
  const USD_RATE = Number(process.env.NEXT_PUBLIC_USD_RATE ?? 4200);
  const usdApprox = Math.round((priceCOP / USD_RATE) * 100) / 100;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Meta / Icono */}
      <Head>
        <title>Bolt.IA — Chat inteligente</title>
        <link rel="icon" href="/LogoBoltIA.png" />
       <link rel="apple-touch-icon" href="/LogoBoltIA.png.png" />

      </Head>
      {/* Fondo dinámico */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-[28rem] w-[56rem] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-[-10rem] left-[-8rem] h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute right-[-6rem] top-1/3 h-[18rem] w-[18rem] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <img
              src="/LogoTipoBolt.IA-render.png"
              alt="Bolt.IA"
              className="h-8 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,170,255,0.4)] md:h-12"
            />
          </div>

          <nav className="hidden gap-4 md:flex">
            <a href="#caracteristicas" className="text-sm text-white/80 transition hover:text-white">
              Características
            </a>
            <a href="#como" className="text-sm text-white/80 transition hover:text-white">
              Cómo funciona
            </a>
            <a href="#precios" className="text-sm text-white/80 transition hover:text-white">
              Plan
            </a>
            <a href="#faq" className="text-sm text-white/80 transition hover:text-white">
              FAQ
            </a>
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={`group inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-gradient-to-r ${brandBlue} px-4 py-2 text-sm font-bold text-black shadow-lg transition hover:brightness-110`}
          >
            <span className="-ml-1 inline-flex"><BlueBoltIcon className="h-4 w-4" /></span>
            <span className="transition-transform group-hover:-translate-y-0.5">Conversemos</span>
            <span className="text-lg leading-none transition-transform group-hover:translate-x-0.5">→</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 md:pb-16 md:pt-24">
        <motion.div
          variants={stagger}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-center gap-10 md:grid-cols-2"
        >
          <div>
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70"
            >
              <BlueBoltIcon className="h-3 w-3" /> Chat inteligente TODO-INCLUIDO
            </motion.span>
            <motion.h1
              variants={fadeUp}
              className="mt-3 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl"
            >
              Conversaciones que{" "}
              <span className={`bg-gradient-to-r ${brandBlue} bg-clip-text text-transparent`}>
                convierten
              </span>{" "}
              en ventas
            </motion.h1>
            <motion.p variants={fadeUp} className="mt-3 text-white/70">
              Agenda citas, responde 24/7 con IA y cierra ventas automáticamente en WhatsApp.
              Nosotros nos encargamos de todo: conexión, contenido, diseño y soporte.
            </motion.p>
            <motion.div variants={fadeUp} className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={`rounded-full bg-gradient-to-r ${brandBlue} px-5 py-3 font-bold text-black shadow transition-transform hover:scale-[1.02] hover:brightness-110`}
              >
                Habla con un asesor
              </a>
              <a
                href="#como"
                className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white/90 transition hover:bg-white/5"
              >
                Ver cómo funciona
              </a>
            </motion.div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <Stat value="24/7" label="atención automática" />
              <Stat value="Agenda" label="citas integradas" />
              <Stat value="Video" label="personalizado incluido" />
            </div>
          </div>

          {/* Mock de chat */}
          <motion.div variants={fadeUp} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-sky-500/10 blur-2xl" />
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
              <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                <div className="mb-3 text-xs text-white/60">Demo · WhatsApp</div>
                <div className="space-y-2 text-sm">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/10 p-3">
                    Hola 👋 Soy tu asistente 24/7. ¿Quieres agendar una demo?
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-none bg-sky-500/20 p-3">
                    Sí, para mañana a las 10am.
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/10 p-3">
                    <span className="inline-flex items-center gap-1">Listo <BlueBoltIcon className="h-4 w-4" /> </span>
                    Te envié el evento al calendario y un video de bienvenida de tu negocio.
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-none bg-sky-500/20 p-3">
                    Gracias. ¿Aceptan pagos contraentrega?
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/10 p-3">
                    Sí. También PSE y tarjetas. ¿Te derivo con ventas para cerrar?
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Características (MEJORADAS) */}
      <section id="caracteristicas" className="mx-auto max-w-6xl px-4 py-12">
        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <motion.div
            variants={fadeUp}
            className="rounded-3xl border border-sky-400/20 bg-white/[0.04] p-6 shadow-[0_0_40px_rgba(2,132,199,0.08)]"
          >
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-bold">¿Qué hace Bolt.IA por tu negocio?</h2>
                <p className="mt-2 text-white/70">
                  Un único plan, todo lo que necesitas para vender por WhatsApp.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-sm text-white/80">
                  {[
                    "Listo para usar en días",
                    "Sin complicarte con integraciones",
                    "Optimizado para convertir",
                  ].map((b) => (
                    <span key={b} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
                      <BlueBoltIcon className="h-3 w-3" /> {b}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#precios"
                className={`inline-flex items-center gap-2 rounded-full border border-sky-400/40 bg-gradient-to-r ${brandBlue} px-4 py-2 font-semibold text-black shadow hover:brightness-110`}
              >
                Ver plan
                <span>→</span>
              </a>
            </div>

            {/* GRID de features */}
            <motion.div variants={stagger} className="mt-6 grid gap-4 md:grid-cols-3">
              <Feature title="Respuestas 24/7 con IA" desc="Atención instantánea, tono de marca y manejo de FAQs." />
              <Feature title="Cierre de ventas" desc="Detección de intención, derivación a humanos y follow‑up." />
              <Feature title="Agendamiento" desc="Integra Google Calendar y confirma por WhatsApp." />
              <Feature title="Video personalizado" desc="Creamos un video para presentar tu negocio a nuevos leads." />
              <Feature title="Te lo hacemos TODO" desc="Registro de WhatsApp Business, onboarding y puesta en marcha." />
              <Feature title="Marca incluida" desc="¿Sin logo, slogan o guías? Te lo diseñamos y redactamos." />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Plan Único */}
      <section id="precios" className="mx-auto max-w-6xl px-4 py-12">
        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-bold">
            Plan único todo incluido
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-1 text-white/70">
            Lanza hoy. Nosotros lo hacemos por ti.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6 grid gap-4 md:grid-cols-1">
            <div className="relative rounded-2xl border border-sky-400/40 bg-white/[0.06] p-6 pt-8">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
              <span
                className={`absolute top-2 right-3 inline-flex items-center gap-1 rounded-full bg-gradient-to-r ${brandBlue} px-2 py-1 text-xs font-bold text-black ring-1 ring-sky-400/40 shadow`}
              >
                <BlueBoltIcon className="h-3 w-3" /> Recomendado
              </span>

              <h3 className="text-lg font-semibold">Bolt.IA Todo-Incluido</h3>
              <div className="mt-2 flex items-end gap-3">
                <div className="text-3xl font-extrabold tracking-tight">
                  COP ${priceCOP.toLocaleString("es-CO")} <span className="text-base font-semibold text-white/80">/ mes</span>
                </div>
                <div className="text-sm text-white/60">(~ USD ${usdApprox} / mes)</div>
              </div>

              <ul className="mt-4 grid gap-2 text-sm text-white/80 md:grid-cols-2">
                {[
                  "Chat con IA 24/7 para responder preguntas y calificar leads",
                  "Agendamiento de citas integrado (Google Calendar)",
                  "Flujos de cierre de ventas y derivación a asesor humano",
                  "Video personalizado de presentación de tu negocio",
                  "Soporte humano prioritario",
                  "Registro y configuración de WhatsApp Business (nos encargamos)",
                  "Creación de logo, slogan y piezas básicas si las necesitas",
                  "Integraciones con CRM/Sheets vía webhooks",
                  "Entrenamiento con tus PDFs/URLs y respuestas maestras",
                  "Analytics de conversaciones y embudos",
                ].map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <BlueBoltIcon className="h-3 w-3" /> {it}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-col items-stretch gap-3 md:flex-row">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className={`inline-flex w-full items-center justify-center gap-2 rounded-full border border-sky-400/40 bg-gradient-to-r ${brandBlue} px-5 py-3 font-semibold text-black shadow transition-transform hover:scale-[1.01]`}
                >
                  <BlueBoltIcon className="h-4 w-4" /> Activar mi plan por WhatsApp
                  <span className="text-lg">→</span>
                </a>
                <a
                  href="#faq"
                  className="inline-flex w-full items-center justify-center rounded-full border border-white/15 px-5 py-3 font-semibold text-white/90 transition hover:bg-white/5"
                >
                  Ver preguntas frecuentes
                </a>
              </div>

              <p className="mt-3 text-center text-xs text-white/60">
                *Precio mensual en Colombia. El valor en USD es aproximado y puede variar por tasa de cambio.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-12">
        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-2xl font-bold">
            Preguntas frecuentes
          </motion.h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            <FAQ q="¿Necesito WhatsApp Business API?" a="No. Nosotros lo creamos y configuramos por ti. Si ya lo tienes, conectamos tu instancia." />
            <FAQ q="¿La IA aprende de mis documentos?" a="Sí. Entrenamos con tus PDFs/URLs y definimos límites y tono. Puedes editar respuestas maestras." />
            <FAQ q="¿Incluye diseño y video?" a="Sí. Creamos un video de presentación y, si no tienes marca, te hacemos logo y slogan básicos." />
            <FAQ q="¿Hay soporte humano?" a="Sí. Acompañamos la implementación y ofrecemos soporte prioritario para asegurar resultados." />
          </div>
        </motion.div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="mx-auto max-w-3xl px-4 pb-24 text-center">
        <motion.div variants={stagger} initial="initial" whileInView="animate" viewport={{ once: true }}>
          <motion.h2 variants={fadeUp} className="text-3xl font-extrabold tracking-tight">
            Activa tu chat inteligente hoy
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-white/70">
            Un solo plan, todo incluido. Nosotros lo hacemos por ti.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-5 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className={`rounded-full bg-gradient-to-r ${brandBlue} px-6 py-3 font-bold text-black shadow transition-transform hover:scale-[1.02] hover:brightness-110`}
            >
              Quiero mi demo
            </a>
            <a
              href="#precios"
              className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white/90 transition hover:bg-white/5"
            >
              Ver el plan
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        <div className="mx-auto max-w-6xl px-4">© {new Date().getFullYear()} Bolt.IA · Chat inteligente para WhatsApp</div>
      </footer>

      {/* FAB WhatsApp */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 inline-flex items-center justify-center rounded-full p-0 shadow-2xl transition-transform hover:scale-105"
        aria-label="Abrir WhatsApp"
      >
        <span className="pointer-events-none absolute inset-0 rounded-full bg-green-400/30 blur-md animate-ping" />
        <span className="relative grid place-items-center rounded-full bg-white/10 p-2 backdrop-blur-sm drop-shadow-[0_0_14px_rgba(37,211,102,0.55)]">
          <img src="/whatsapp.svg" alt="WhatsApp" className="h-12 w-12 object-contain" />
        </span>
      </a>
    </div>
  );
}
