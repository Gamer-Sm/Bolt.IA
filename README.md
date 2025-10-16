# ⚡ Bolt.IA — Landing para Chat Inteligente en WhatsApp

Landing moderna hecha con **Next.js (App Router) + TypeScript + Tailwind CSS**.
Incluye hero con CTA a WhatsApp, secciones de características, “cómo funciona”, precios,
FAQ y un FAB (botón flotante) de WhatsApp con brillo/pulse.

![Bolt.IA](public/LogoTipoBolt.IA.png)

---

## ✨ Características principales

- **UI moderna**: glassmorphism, degradados y sombras sutiles.
- **Componentes reutilizables**: `Feature`, `Stat`, `FAQ` para armar secciones rápido.
- **WhatsApp listo**: CTA y FAB apuntando a tu número (configurable por env).
- **Responsive**: maquetado con grid y utilidades Tailwind.
- **Rendimiento**: App Router, `next/font` (Geist), y estilos optimizados.

---

## 🛠️ Stack

- [Next.js 14+](https://nextjs.org/) (App Router)
- [React + TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- `next/font` con [Geist](https://vercel.com/font)
- Deploy recomendado: [Vercel](https://vercel.com/)

---

## 📁 Estructura sugerida

```
.
├─ public/
│  ├─ whatsapp.svg
│  ├─ LogoTipoBolt.IA.png           
│  └─ LogoTipoBolt.IA_Blanco.png    
├─ src/
│  └─ app/
│     ├─ globals.css
│     ├─ layout.tsx
│     └─ page.tsx                   
├─ .env.local                        
├─ next.config.mjs
├─ package.json
└─ README.md
```

> _Tip:_ coloca tu logo en `public/` y ajusta el `src` del `<img />` del header.

---

## 🔧 Variables de entorno

Define tu número de WhatsApp en **.env.local**:

```
NEXT_PUBLIC_WHATSAPP=5491234567890
```

- La landing construye automáticamente el enlace:
  `https://wa.me/<NEXT_PUBLIC_WHATSAPP>?text=Hola%20Bolt.IA%20⚡%20Quiero%20activar%20mi%20chat%20inteligente`
- Si no defines la variable, usará `0000000000` por defecto.

---

## 🚀 Puesta en marcha

Instala dependencias y corre el dev server:

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la app.

---

## ☁️ Deploy en Vercel

1. Sube el repo a GitHub/GitLab/Bitbucket.
2. Importa en [Vercel](https://vercel.com/new).
3. En **Project Settings → Environment Variables**, agrega:
   - `NEXT_PUBLIC_WHATSAPP=...`
4. Deploy y listo ⚡

---

## 📄 Licencia

MIT. Puedes adaptarla según tus necesidades.
