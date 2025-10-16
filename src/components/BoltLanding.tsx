"use client";

type FeatureProps = { title: string; desc: string };
const Feature = ({ title, desc }: FeatureProps) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
    <div className="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-white/90 to-white/40 text-black shadow">
      ⚡
    </div>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="mt-1 text-sm text-white/70">{desc}</p>
  </div>
);

const Stat = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
    <div className="bg-gradient-to-br from-white to-white/70 bg-clip-text text-3xl font-extrabold text-transparent">
      {value}
    </div>
    <div className="text-xs uppercase tracking-wide text-white/60">{label}</div>
  </div>
);

const FAQ = ({ q, a }: { q: string; a: string }) => (
  <details className="group rounded-xl border border-white/10 bg-white/[0.04] p-4">
    <summary className="cursor-pointer list-none font-medium text-white/90">
      <span className="mr-2">❓</span>
      {q}
    </summary>
    <p className="mt-2 text-sm text-white/70">{a}</p>
  </details>
);

export default function BoltLanding() {
  const brandBlue = "from-sky-400 to-sky-500";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP ?? "0000000000";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Bolt.IA%20⚡%20Quiero%20activar%20mi%20chat%20inteligente`;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Glow de fondo */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/LogoTipoBolt.IA.png" /* pon también una versión sin fondo si puedes */
              alt="Bolt.IA"
              className="h-14 md:h-20 w-auto object-contain drop-shadow-[0_0_10px_rgba(0,170,255,0.4)]"
            />
          </div>

          {/* Nav */}
          <nav className="hidden gap-4 md:flex">
            <a href="#caracteristicas" className="text-sm text-white/80 hover:text-white">
              Características
            </a>
            <a href="#como" className="text-sm text-white/80 hover:text-white">
              Cómo funciona
            </a>
            <a href="#precios" className="text-sm text-white/80 hover:text-white">
              Precios
            </a>
            <a href="#faq" className="text-sm text-white/80 hover:text-white">
              FAQ
            </a>
          </nav>

          {/* CTA WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-gradient-to-r ${brandBlue} px-4 py-2 text-sm font-bold text-black shadow-lg transition hover:brightness-110`}
          >
            WhatsApp
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-12 pt-16 md:pb-16 md:pt-24">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="text-sky-400">⚡</span> Chat inteligente para WhatsApp
            </span>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight md:text-5xl">
              Convierte conversaciones en clientes con{" "}
              <span className={`bg-gradient-to-r ${brandBlue} bg-clip-text text-transparent`}>
                Bolt.IA
              </span>
            </h1>
            <p className="mt-3 text-white/70">
              Automatiza respuestas, califica leads y agenda citas 24/7 en el canal
              donde todos están. Integra tu negocio en minutos.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={`rounded-full bg-gradient-to-r ${brandBlue} px-5 py-3 font-bold text-black shadow hover:brightness-110`}
              >
                Probar en WhatsApp
              </a>
              <a
                href="#precios"
                className="rounded-full border border-white/15 px-5 py-3 font-semibold text-white/90 hover:bg-white/5"
              >
                Ver precios
              </a>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <Stat value="-75%" label="tiempo de respuesta" />
              <Stat value="x3" label="leads calificados" />
              <Stat value="24/7" label="atención automática" />
            </div>
          </div>

          {/* Mock de chat */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-sky-500/10 blur-2xl" />
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-4">
              <div className="rounded-2xl border border-white/10 bg-black/60 p-4">
                <div className="mb-3 text-xs text-white/60">Demo · WhatsApp</div>
                <div className="space-y-2 text-sm">
                  <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/10 p-3">
                    Hola 👋 ¿En qué podemos ayudarte?
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-none bg-sky-500/20 p-3">
                    Quiero cotizar su servicio para mi e-commerce.
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/10 p-3">
                    ¡Perfecto! Te pido 2 datos: rubro y volumen de consultas/mes.
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-br-none bg-sky-500/20 p-3">
                    Indumentaria · ~1.500 consultas/mes.
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-bl-none bg-white/10 p-3">
                    Listo ⚡ Te derivamos con un asesor para activar tu prueba gratuita.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section id="caracteristicas" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">¿Qué hace Bolt.IA por tu negocio?</h2>
        <p className="mt-1 text-white/70">Automatización pragmática, lista para vender.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <Feature title="Respuestas 24/7" desc="Atención instantánea con IA en WhatsApp, en tono de tu marca." />
          <Feature title="Calificación de leads" desc="Preguntas clave, score automático y derivación al equipo." />
          <Feature title="Agendamiento" desc="Integra Google Calendar/Calendly y cierra reuniones mientras duermes." />
          <Feature title="Integraciones" desc="Conecta CRM (HubSpot, Notion, Sheets) con webhooks rápidos." />
          <Feature title="Entrenamiento fácil" desc="Carga FAQs, PDFs o URLs y aprende en minutos." />
          <Feature title="Analytics" desc="Métricas de conversaciones, tasas de conversión y embudos." />
        </div>
      </section>

      {/* Cómo funciona */}
      <section id="como" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Cómo funciona</h2>
        <ol className="mt-4 grid gap-3 md:grid-cols-3">
          {[
            "Conectamos tu número de WhatsApp Business.",
            "Cargamos tu base de conocimiento y reglas de negocio.",
            "Activamos flujos (ventas, soporte, agendamiento) y medimos.",
          ].map((step, i) => (
            <li key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r ${brandBlue} text-black font-extrabold`}>
                {i + 1}
              </div>
              <p className="mt-2 text-sm text-white/80">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Precios */}
      <section id="precios" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Precios simples</h2>
        <p className="mt-1 text-white/70">Lanza hoy, escala cuando quieras.</p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {[
            { name: "Start", price: "US$ 49", items: ["500 chats/mes", "Entrenamiento básico", "Email soporte"], cta: "Comenzar", highlight: false },
            { name: "Growth", price: "US$ 149", items: ["3.000 chats/mes", "CRM + webhooks", "Soporte prioritario"], cta: "Probar gratis", highlight: true },
            { name: "Pro", price: "A medida", items: ["Volumen alto", "SLA dedicado", "Integraciones avanzadas"], cta: "Hablar ventas", highlight: false },
          ].map((p) => (
            <div key={p.name} className={`relative rounded-2xl border ${p.highlight ? "border-sky-400/50" : "border-white/10"} bg-white/5 p-6`}>
              {p.highlight && (
                <span className={`absolute -top-3 right-4 rounded-full bg-gradient-to-r ${brandBlue} px-2 py-1 text-xs font-bold text-black`}>
                  Recomendado
                </span>
              )}
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl font-extrabold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${brandBlue}`} />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className={`mt-5 inline-flex w-full items-center justify-center rounded-full border ${p.highlight ? "border-sky-400/40" : "border-white/15"} bg-gradient-to-r ${p.highlight ? brandBlue : "from-white/10 to-white/5"} px-4 py-2 font-semibold ${p.highlight ? "text-black" : "text-white"}`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="text-2xl font-bold">Preguntas frecuentes</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          <FAQ q="¿Necesito WhatsApp Business API?" a="Nos encargamos por ti. Si ya lo tienes, conectamos tu instancia; si no, te guiamos para registrarla." />
          <FAQ q="¿La IA aprende de mis documentos?" a="Sí, puedes subir PDFs/URLs y definimos límites y tono. Siempre puedes revisar y editar respuestas maestras." />
          <FAQ q="¿Puedo escalar el volumen?" a="Claro. Cambia de plan cuando quieras o arma uno enterprise con SLA dedicado." />
          <FAQ q="¿Hay soporte humano?" a="Sí, ofrecemos acompañamiento de implementación y soporte prioritario en planes superiores." />
        </div>
      </section>

      {/* CTA final */}
      <section id="contacto" className="mx-auto max-w-3xl px-4 pb-20 text-center">
        <h2 className="text-3xl font-extrabold">Activa tu chat inteligente hoy</h2>
        <p className="mt-2 text-white/70">Te ayudamos a convertir más desde WhatsApp con el poder de Bolt.IA.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className={`rounded-full bg-gradient-to-r ${brandBlue} px-6 py-3 font-bold text-black shadow hover:brightness-110`}
          >
            Quiero mi demo
          </a>
          <a
            href="#precios"
            className="rounded-full border border-white/15 px-6 py-3 font-semibold text-white/90 hover:bg-white/5"
          >
            Ver planes
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 text-center text-sm text-white/60">
        <div className="mx-auto max-w-6xl px-4">
          © {new Date().getFullYear()} Bolt.IA · Chat inteligente para WhatsApp
        </div>
      </footer>

      {/* FAB WhatsApp (brillo + pulse) */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 inline-flex items-center justify-center rounded-full p-0 shadow-2xl transition-transform hover:scale-105"
        aria-label="Abrir WhatsApp"
      >
        {/* halo animado */}
        <span className="pointer-events-none absolute inset-0 rounded-full bg-green-400/30 blur-md animate-ping" />
        {/* contenedor con glow */}
        <span className="relative grid place-items-center rounded-full bg-white/10 p-2 backdrop-blur-sm drop-shadow-[0_0_14px_rgba(37,211,102,0.55)]">
          <img src="/whatsapp.svg" alt="WhatsApp" className="h-12 w-12 object-contain" />
        </span>
      </a>
    </div>
  );
}
