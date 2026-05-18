# 🎨 Template Customization Guide

คู่มือแก้ Mellow Brew template ให้กลายเป็นเว็บลูกค้า

> **Template:** `https://github.com/Garagetget/mellow-brew`
> **Live demo:** `https://mellow-brew.vercel.app`
> **Stack:** Next.js 16 + Tailwind v4 + shadcn/ui

---

## 📖 Quick Reference

| ต้องการเปลี่ยน | ไฟล์ที่แก้ |
|---------------|-----------|
| ชื่อเว็บ / metadata | `app/layout.tsx` |
| Logo / brand name | `components/Navbar.tsx` + `Footer.tsx` |
| สี theme | `app/globals.css` |
| รูปภาพ | `public/images/` + components |
| เนื้อหา hero | `components/sections/Hero.tsx` |
| เนื้อหา about | `components/sections/About.tsx` |
| เมนู / รายการ | `components/sections/Menu.tsx` |
| รูป gallery | `components/sections/Gallery.tsx` |
| ที่อยู่ + แผนที่ | `components/sections/Visit.tsx` |
| Footer | `components/Footer.tsx` |
| Favicon | `app/icon.png` |
| OG image | `app/opengraph-image.png` |

---

## 1️⃣ เปลี่ยนชื่อเว็บ (Site Name & Metadata)

### ไฟล์: `app/layout.tsx`

หาบรรทัด:

```typescript
export const metadata: Metadata = {
  title: "Mellow Brew — Slow coffee, warm moments.",
  description: "A neighborhood cafe serving slow-brewed coffee and quiet mornings.",
};
```

เปลี่ยนเป็น:

```typescript
export const metadata: Metadata = {
  title: "ชื่อร้านลูกค้า — tagline สั้นๆ",
  description: "คำอธิบายสำหรับ Google search (150-160 ตัวอักษร)",
  keywords: ["คาเฟ่", "กาแฟ", "เชียงใหม่"], // optional
  openGraph: {
    title: "ชื่อร้านลูกค้า",
    description: "...",
    images: ["/opengraph-image.png"],
    locale: "th_TH",
    type: "website",
  },
};
```

### ทำไมสำคัญ
- **title** → แสดงใน browser tab + Google search
- **description** → แสดงใน Google search result
- **OG tags** → แสดงตอน share link ใน LINE/FB/Twitter

---

## 2️⃣ เปลี่ยน Logo / Brand Name

### Logo เป็น Text

**ไฟล์:** `components/Navbar.tsx`

```typescript
<a href="#top" className="text-xl font-semibold text-brown">
  Mellow Brew
</a>
```

เปลี่ยนเป็น:

```typescript
<a href="#top" className="text-xl font-semibold text-brown">
  ชื่อร้านลูกค้า
</a>
```

### Logo เป็นรูปภาพ

```typescript
import Image from "next/image";

<a href="#top">
  <Image
    src="/images/logo.png"
    alt="Client Brand"
    width={120}
    height={40}
  />
</a>
```

### ต้องแก้ทั้งหมด 3 ที่
1. **Navbar** — บนเว็บ
2. **Footer** — ล่างเว็บ
3. **Metadata** — `app/layout.tsx`

---

## 3️⃣ เปลี่ยน Theme สี

### ไฟล์: `app/globals.css`

หา block นี้:

```css
@theme {
  --color-cream: #FAF6F0;      /* พื้นหลังหลัก */
  --color-brown: #6B4423;       /* ตัวอักษรเข้ม, accent */
  --color-terracotta: #C97B5C;  /* จุดเน้น, ปุ่ม */
  --color-ink: #2A1F1A;         /* ตัวอักษรหลัก */
}
```

### Palette ตัวอย่างพร้อมใช้

**☕ คาเฟ่ Earthy (default)**
```css
--color-cream: #FAF6F0;
--color-brown: #6B4423;
--color-terracotta: #C97B5C;
--color-ink: #2A1F1A;
```

**🍵 ร้านชาเขียว (Matcha)**
```css
--color-cream: #F5F9F2;
--color-brown: #2D5016;
--color-terracotta: #87A878;
--color-ink: #1A2918;
```

**🌸 เบเกอรี่ Pink Pastel**
```css
--color-cream: #FFF5F2;
--color-brown: #8B3A47;
--color-terracotta: #E89BA1;
--color-ink: #3D1A1F;
```

**⚫ Modern Minimalist (B&W + Orange)**
```css
--color-cream: #FAFAFA;
--color-brown: #1A1A1A;
--color-terracotta: #FF6B35;
--color-ink: #0A0A0A;
```

**🌊 Coastal Blue**
```css
--color-cream: #F0F7FA;
--color-brown: #1E3A5F;
--color-terracotta: #5B9EB3;
--color-ink: #0F1F2E;
```

**🌙 Dark Mode Luxe**
```css
--color-cream: #1A1A1A;
--color-brown: #E5C687;
--color-terracotta: #D4A574;
--color-ink: #F5F5F5;
```

### ทำไมระบบสี Mellow Brew ออกแบบมาแบบนี้

- **`cream`** — สีพื้นหลัง (background) ของ section หลัก
- **`brown`** — สี heading + dark text + accent line
- **`terracotta`** — สีเน้น (จุดสนใจ): label, badge, ราคา, ปุ่ม
- **`ink`** — สีตัวอักษร body (อ่านง่ายที่สุด)

> 💡 **กฎ contrast:** ระหว่าง background และ text ต้องห่างพอ
> ใช้ tool: https://webaim.org/resources/contrastchecker/
> เกณฑ์: text ปกติ ratio ≥ 4.5:1, heading ใหญ่ ≥ 3:1

---

## 4️⃣ เปลี่ยนรูปภาพ

### ขนาดมาตรฐาน

| ตำแหน่ง | Aspect Ratio | Recommended Size | Max File Size |
|---------|--------------|------------------|---------------|
| Hero (banner ใหญ่) | 16:9 | 1920 × 1080 px | 300 KB |
| About section | 4:3 หรือ 3:2 | 1200 × 800 px | 200 KB |
| Menu items | 4:3 หรือ 1:1 | 800 × 600 px | 150 KB |
| Gallery | 1:1 (square) | 800 × 800 px | 150 KB |
| Logo | 1:1 หรือ horizontal | 512 × 512 px | 50 KB |
| Favicon | 1:1 | 512 × 512 px | 30 KB |
| OG Image (social share) | 1.91:1 | 1200 × 630 px | 200 KB |

### Workflow เปลี่ยนรูป

**1. รับรูปจากลูกค้า**

```
ลูกค้าส่งรูปมา → save ที่
D:\Work\Fastwork\client-name\public\images\
```

**2. Resize + Compress**

ก่อนใส่ในโปรเจกต์ต้อง:

1. **Resize** ให้พอดีกับขนาดที่ใช้
   - ใช้ Photoshop / Figma / [Squoosh](https://squoosh.app)
   - **อย่าใช้รูป 4000×3000 จาก iPhone โดยตรง**

2. **Compress** ให้ file size เล็กลง
   - [TinyPNG](https://tinypng.com) — ลด 60-80% โดย quality ไม่ลด
   - หรือใช้ format `.webp` (เล็กกว่า `.jpg` ~30%)

**3. ตั้งชื่อไฟล์ให้ดี**

❌ ไม่ดี: `IMG_2384.jpg`, `รูป1.jpg`
✅ ดี: `hero-cafe-interior.jpg`, `menu-iced-latte.jpg`

**4. แก้ใน code**

หา component ที่ใช้รูป เช่น `Hero.tsx`:

```typescript
// เดิม
<Image
  src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?..."
  alt="Cafe interior"
  fill
/>

// ใหม่
<Image
  src="/images/hero-cafe-interior.jpg"
  alt="ภายในร้าน"
  fill
/>
```

### Tips การใช้ Next.js Image

Next.js `<Image>` optimize ให้อัตโนมัติ:
- ✅ Resize ตามขนาดจอ
- ✅ Convert เป็น `.webp` อัตโนมัติ
- ✅ Lazy load (โหลดเมื่อเลื่อนถึง)
- ✅ Blur placeholder (สวยตอนโหลด)

ใช้ `priority` สำหรับรูปใหญ่ที่ผู้ใช้เห็นก่อน (เช่น Hero):

```typescript
<Image src="/images/hero.jpg" priority fill alt="..." />
```

---

## 5️⃣ เปลี่ยนเนื้อหา Section

### Hero Section

**ไฟล์:** `components/sections/Hero.tsx`

แก้ 3 จุดหลัก:
1. **Tagline เล็ก** (label บน): `Est. 2021 · Bangkok`
2. **Headline ใหญ่**: `Slow coffee, warm moments.`
3. **Subheadline**: คำอธิบายสั้นๆ
4. **CTAs**: ปุ่ม "View Menu" / "Visit Us"

### About Section

**ไฟล์:** `components/sections/About.tsx`

แก้:
1. **Label**: `Our Story`
2. **Heading**: `A small place for big quiet.`
3. **3 paragraphs** ของเนื้อหา
4. **รูปภาพ** ทางขวา

### Menu Section

**ไฟล์:** `components/sections/Menu.tsx`

หา array `menuItems`:

```typescript
const menuItems = [
  {
    name: "Pour Over",
    price: "฿130",
    description: "Single-origin beans, hand-poured...",
    image: "https://images.unsplash.com/...",
  },
  // ... อีก 5 items
];
```

**แก้ตามต้องการ:**

```typescript
const menuItems = [
  {
    name: "Espresso",
    price: "฿80",
    description: "เข้มข้น กลมกล่อม",
    image: "/images/menu-espresso.jpg",
  },
  // เพิ่ม/ลด items ตามใจ
];
```

> 💡 ถ้ามี 10+ items → ดู section ด้านล่าง "เมนูเยอะๆ"

### Visit Section (Map + Address)

**ไฟล์:** `components/sections/Visit.tsx`

**1. เปลี่ยน Google Maps embed:**

```typescript
// เดิม - Bangkok
src="https://www.google.com/maps?q=13.7563,100.5018&z=15&output=embed"

// ใหม่ - ใช้ที่อยู่ลูกค้า
src="https://www.google.com/maps?q=ที่อยู่ลูกค้า&z=15&output=embed"
```

**วิธีหา embed code:**
1. ไป Google Maps → search ที่อยู่ร้าน
2. กด **Share** → **Embed a map** → copy iframe code

**2. เปลี่ยนที่อยู่:**

```typescript
<address>
  42 Soi Sukhumvit 24
  Khlong Tan, Khlong Toei,
  Bangkok 10110
</address>
```

**3. เปลี่ยนเวลาเปิด:**

```typescript
<dl>
  <dt>Mon – Fri</dt>
  <dd>7:30 — 18:00</dd>
  ...
</dl>
```

**4. เปลี่ยน Social Links:**

```typescript
<a href="https://instagram.com/client-handle">Instagram</a>
<a href="https://facebook.com/client-page">Facebook</a>
```

---

## 6️⃣ จัดการเมนูเยอะๆ (10+ items)

### Option A: Category Tabs

ถ้ามี 10-20 items → ทำ tabs แบ่งหมวด:

```
[ทั้งหมด] [กาแฟ] [ชา] [ขนม] [อาหาร]
```

**ไอเดียโครงสร้าง:**

```typescript
const categories = [
  { id: "all", name: "ทั้งหมด" },
  { id: "coffee", name: "กาแฟ" },
  { id: "tea", name: "ชา" },
  { id: "dessert", name: "ขนม" },
];

const menuItems = [
  { name: "Espresso", price: "฿80", category: "coffee", image: "..." },
  { name: "Latte", price: "฿100", category: "coffee", image: "..." },
  { name: "Matcha", price: "฿120", category: "tea", image: "..." },
  // ...
];

// State สำหรับ active category
const [activeCategory, setActiveCategory] = useState("all");

// Filter items
const filteredItems = activeCategory === "all"
  ? menuItems
  : menuItems.filter(item => item.category === activeCategory);
```

### Option B: List View แทน Card Grid

ถ้ามี 20-50 items → ทำเป็น list สวยๆ (เหมือนเมนูร้านอาหาร) ไม่ต้องมีรูปทุก item

### Option C: Search + Filter

ถ้ามี 50+ items → ต้องมี search box และ filter

> 💡 **บอกลูกค้า:** ถ้าเมนูเยอะมาก ต้องคิดเพิ่ม (+2,000-5,000 บาท) เพราะ design ซับซ้อนขึ้น

---

## 7️⃣ เพิ่ม Section ใหม่

### Section ที่ลูกค้าขอบ่อย

#### Testimonials (รีวิวลูกค้า)

```typescript
const testimonials = [
  {
    name: "คุณ A",
    text: "กาแฟอร่อย บรรยากาศดี",
    rating: 5,
    image: "/images/customer-1.jpg",
  },
  // ...
];
```

#### FAQ

```typescript
const faqs = [
  {
    question: "เปิดทุกวันไหม?",
    answer: "เปิดทุกวัน เว้นวันที่กำหนดเป็นพิเศษ",
  },
  // ...
];
```

#### Services (สำหรับ salon/clinic/agency)

#### Team (สำหรับ agency/business)

#### Contact Form

ต้องการ backend → ใช้ [Resend](https://resend.com) (3,000 emails/month ฟรี) หรือ [Formspree](https://formspree.io)

---

## 8️⃣ Favicon (รูปใน Browser Tab)

### วิธีง่ายที่สุด

1. ไป [favicon.io](https://favicon.io)
2. เลือก:
   - **Text** — พิมพ์ตัวอักษร (เช่น "M" สำหรับ Mellow)
   - **Emoji** — เลือก emoji (เช่น ☕)
   - **Image** — upload logo
3. Download → ได้ไฟล์ `favicon.ico` + `apple-touch-icon.png`
4. Save ที่:
   - `app/icon.png` (Next.js 14+ ใช้ระบบนี้)
   - หรือ `public/favicon.ico` (แบบเก่า)

---

## 9️⃣ OG Image (รูปตอน Share Link)

### ทำไมต้องมี

ตอน share link ใน LINE / Facebook / Twitter:
- ❌ ไม่มี OG image → กล่องเปล่า ดูไม่น่าเชื่อถือ
- ✅ มี OG image → preview สวย → คนกดเข้ามา

### วิธีทำ

**Option A: Static Image (ง่าย)**

1. ออกแบบใน Canva หรือ Figma — ขนาด **1200 × 630 px**
2. เนื้อหา:
   - Logo / brand name
   - Tagline
   - รูปประกอบ
3. Save เป็น `.png` หรือ `.jpg`
4. ใส่ที่:
   ```
   public/og-image.png
   ```
5. แก้ใน `app/layout.tsx`:
   ```typescript
   openGraph: {
     images: ["/og-image.png"],
   }
   ```

**Option B: Dynamic OG (advance)**

Next.js สร้าง OG image อัตโนมัติจาก data ได้ — ใช้สำหรับ blog/products

ไฟล์: `app/opengraph-image.tsx`

```typescript
import { ImageResponse } from "next/og";

export default async function Image() {
  return new ImageResponse(
    (
      <div style={{ fontSize: 128, background: "white", width: "100%", height: "100%" }}>
        Mellow Brew
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
```

---

## 🔟 Deploy Checklist

ก่อน push ให้ลูกค้าดู:

### Pre-Deploy

- [ ] `npm run build` — ผ่านไม่ error
- [ ] ทดสอบใน DevTools mobile mode
- [ ] กดทุก link + ปุ่ม — ใช้งานได้
- [ ] รูปทั้งหมดโหลดเสร็จ (ไม่มี broken images)
- [ ] เปลี่ยนชื่อ Mellow Brew → ชื่อลูกค้า **ทุกที่**
- [ ] เปลี่ยน social links → ของลูกค้า
- [ ] เปลี่ยน address + map → ของลูกค้า
- [ ] favicon + OG image ใส่แล้ว
- [ ] Metadata (title, description) อัปเดต

### Lighthouse Test

- [ ] Performance ≥ 90
- [ ] Accessibility ≥ 95
- [ ] Best Practices = 100
- [ ] SEO = 100

### Post-Deploy

- [ ] เปิด URL จริง — เช็คอีกครั้ง
- [ ] ส่ง link ใน LINE → ดู OG preview
- [ ] ทดสอบบนมือถือจริง (iOS + Android ถ้าได้)
- [ ] ส่งให้ลูกค้าพร้อม screenshot

---

## 🆘 Troubleshooting

### Build fail บน Vercel แต่ใน local ผ่าน

→ TypeScript strict mode บน Vercel เข้มกว่า — แก้ type errors ทั้งหมด

### รูปไม่โหลดบน production

→ Path ผิด case-sensitive บน Linux (Vercel) แต่ไม่ผิดบน Windows
→ เช็คชื่อไฟล์ทั้ง code + folder ตรงกันเป๊ะ

### Google Maps ไม่ขึ้น

→ เช็ค URL format → ต้องมี `output=embed` ตอนท้าย

### Lighthouse score ต่ำ

→ **Performance ต่ำ** → รูปใหญ่เกิน → compress ใหม่
→ **Accessibility ต่ำ** → ใส่ alt text ทุกรูป, เช็ค color contrast
→ **SEO ต่ำ** → ใส่ meta title + description ครบ

### Custom domain ไม่ทำงาน

→ DNS ยังไม่ update — รอ 24-48 ชั่วโมง
→ เช็ค A record / CNAME ใน Vercel dashboard

---

## 📚 References

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind v4 Docs](https://tailwindcss.com/docs)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel Deployment](https://vercel.com/docs)
- [Web Accessibility (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

---

## 1️⃣1️⃣ Lessons from Mellow Brew v1

บันทึก insights จากการทำ template ตัวแรก — เอาไว้อ้างอิงเวลาทำตัวต่อไป และเวลาคุยกับลูกค้าให้ประเมินเวลา/ราคาได้แม่นขึ้น

### 🖼️ Images: Unsplash ตรงๆ ดีกว่าโหลดมาเอง

**สิ่งที่ทำ:** ใช้ `<Image src="https://images.unsplash.com/..." />` ตรงเข้าไปใน component เลย — ไม่ได้ download มาใส่ `public/` ก่อน

**ทำไมเวิร์ก:**
- Next.js Image optimizer fetch จาก Unsplash → cache → serve เป็น `.webp` ขนาดที่ต้องการ — ผู้ใช้ปลายทางไม่เคยเห็น URL Unsplash จริงๆ
- ประหยัด time + bandwidth ตอน dev (ไม่ต้องเลือก, download, rename, compress)
- เปลี่ยนรูปง่าย — แก้ URL บรรทัดเดียว
- 14 รูปทั่วเว็บ (Hero 1, About 1, Menu 6, Gallery 6) ทั้งหมดเป็น remote — ไม่มีรูปใน `public/`

**ข้อแม้:**
- ต้อง whitelist domain ใน `next.config.ts`:
  ```typescript
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  }
  ```
- **โปรเจกต์ลูกค้าจริงให้ใช้ local image** — Unsplash อาจลบรูป + license อาจไม่ครอบคลุมการใช้เชิงพาณิชย์ของลูกค้าเฉพาะราย

### 🎨 Tailwind v4: `@theme` block แทน `tailwind.config.ts`

**v3 (เก่า):** กำหนด token ใน `tailwind.config.ts` → import config → restart dev server

**v4 (ที่ใช้ในโปรเจกต์นี้):** กำหนดใน CSS ตรงๆ
```css
@import "tailwindcss";

@theme {
  --color-cream: #FAF6F0;
  --color-brown: #6B4423;
  /* ... */
}
```

**ผลลัพธ์ที่ได้:**
- ไม่มี `tailwind.config.ts` ในโปรเจกต์เลย — config อยู่ใน `app/globals.css` ทั้งหมด
- Class `bg-cream`, `text-brown` ใช้ได้เลย — Tailwind generate utility จาก `--color-*` อัตโนมัติ
- HMR เร็วกว่าเดิม (ไม่ต้อง re-evaluate JS config)

**ที่ต้องระวัง:**
- หลายๆ tutorial บนเน็ตยังเป็น v3 — `theme.extend.colors.{...}` ใช้ไม่ได้แล้ว
- shadcn CLI v3 generate config เก่ามาด้วย → ต้องลบทิ้งแล้วย้ายเข้า `@theme`

### 🧩 shadcn/ui: ใช้แค่ที่จำเป็น

**ที่ใช้จริง:**
- ✅ `Button` — Navbar CTA, Hero CTAs, 404 page
- ✅ `Card` — Menu items

**ที่ติดมาด้วย add แต่สุดท้ายไม่ได้ใช้:**
- ❌ `Dialog`, `Sheet`, `Tabs`, `Accordion` — landing page ไม่มี state interaction พวกนี้

**Takeaway:** สำหรับ landing page นิ่งๆ shadcn 2 components ก็พอ — ไม่ต้อง `npx shadcn add` เผื่อทุกอย่างตั้งแต่แรก ลูกค้าจ่ายไม่ได้แพงขึ้นเพราะ bundle ใหญ่ขึ้น

### ⏱️ เวลาจริงที่ใช้ทำแต่ละ section

> ⚠️ ตัวเลขนี้สำหรับ Get คนเดียว — ลูกค้าใหม่/มือใหม่กว่าให้คูณ 1.5-2x

| Section | เวลา | หมายเหตุ |
|---------|------|---------|
| Setup (Next.js + Tailwind v4 + shadcn) | ~30 นาที | scaffold + theme tokens |
| Navbar | ~45 นาที | mobile menu กินเวลาเยอะกว่าคาด |
| HeroSection | ~30 นาที | full-bleed image + overlay + CTAs |
| AboutSection | ~25 นาที | 2-column copy + image |
| MenuSection | ~60 นาที | card grid + 6 items + price formatting |
| GallerySection | ~20 นาที | 6-image grid, responsive columns |
| VisitSection | ~40 นาที | Google Maps embed + address + hours |
| Footer | ~20 นาที | links + social + copyright |
| Metadata + OG + 404 | ~30 นาที | layout.tsx + not-found.tsx |
| **รวม v1** | **~5 ชั่วโมง** | ไม่นับ design decision + content writing |

**เทียบกับที่ quote ลูกค้า:** ปกติ quote 2-3 วันทำงาน → buffer สำหรับ revisions 2-3 รอบ + content จากลูกค้าที่ส่งช้า

### 🐛 ปัญหาที่เจอจริง

**1. Mobile nav: hamburger ปิดไม่ได้ตอนแรก**
- เปิด menu แล้ว tap ปุ่มเดิมไม่ปิด — เพราะ state stuck
- แก้: ใช้ `toggle` pattern แทน `setOpen(true)` ตายตัว + ปิด menu อัตโนมัติเมื่อ click link

**2. "Order" button ใน Navbar: ลิงก์ไปไหน?**
- ตอนแรกทำเป็น `<Button>Order</Button>` ลอยๆ — ไม่มี link
- ตัดสินใจ: ชี้ไป `#menu` (anchor ไป Menu section) แทน → consistency กับ "View Menu" ใน Hero
- บทเรียน: **ทุก CTA ต้องมีปลายทาง** — ห้ามมีปุ่ม dead-end แม้แต่ตัวเดียว

**3. Tailwind v4: `bg-cream/80` ไม่ทำงาน**
- ใส่ opacity เข้าไปกับ custom color ตอนแรกไม่ render
- สาเหตุ: ต้อง define color ด้วย `oklch()` หรือ HEX → Tailwind ถึงจะ generate alpha variants ให้
- แก้: เปลี่ยน HEX เป็น HEX 6 digit (ไม่ใช่ 3) → ใช้ `/80`, `/40` ได้ปกติ

**4. Hero image LCP สูงเกินไป**
- LCP เริ่มต้น ~3.2s — เกิน threshold "good"
- แก้:
  - ใส่ `priority` บน `<Image>` ใน Hero
  - ใส่ `sizes="100vw"` ให้ Next ส่งขนาดที่ตรง viewport
  - ลด overlay `bg-black/40` ไม่ต้อง heavy effect

**5. Smooth scroll สะดุดบน iOS Safari**
- `scroll-behavior: smooth` มีปัญหากับ iOS เก่าๆ
- แก้: wrap ใน `@media (prefers-reduced-motion: no-preference)` — ผู้ใช้ที่ตั้ง reduce motion จะไม่โดน scroll animation

### 📊 Lighthouse Final Score (mobile, production build)

| Metric | Score |
|--------|-------|
| Performance | **98** |
| Accessibility | **96** |
| Best Practices | **100** |
| SEO | **100** |

**Core Web Vitals:**
- FCP: 0.8s
- LCP: 2.1s
- CLS: 0.00
- TBT: 80ms

**ที่ทำให้ Accessibility ไม่ถึง 100:**
- Contrast ratio ของ subtitle text บน Hero ต่ำกว่า 4.5:1 เล็กน้อย (cream/85 บน dark image)
- ตั้งใจให้เป็นแบบนี้ — design priority ชนะ a11y score 4 คะแนน
- v2 จะแก้: เพิ่ม overlay opacity หรือเปลี่ยน text เป็น cream 100%

### 🎯 สิ่งที่จะทำต่างในเวอร์ชันต่อไป

1. **Content first** — เขียน copy ทั้งหมดก่อนเริ่ม code (v1 เขียนไปด้วย code ไปด้วย → กลับมา rewrite หลายรอบ)
2. **เริ่มจาก Footer** — Footer เป็น section ที่ลูกค้าให้ feedback น้อยที่สุด → ทำให้เสร็จก่อน lock ได้เร็ว
3. **Animation library** — v1 ไม่มี animation เลย → v2 ลอง Framer Motion สำหรับ scroll reveal
4. **CMS integration option** — บาง client อยากแก้ content เองหลัง deploy → ทำ adapter สำหรับ Sanity/Contentful ไว้ optional

---
