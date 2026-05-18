# 🚀 Client Workflow Guide

คู่มือรับงาน Fastwork สำหรับเว็บไซต์ Template-based (เริ่มจาก Mellow Brew)

---

## 📋 ก่อนรับงาน — Checklist สิ่งที่ต้องถามลูกค้า

### 1. ข้อมูลพื้นฐาน

- [ ] **ชื่อร้าน / business name** (ไทย + อังกฤษ ถ้ามี)
- [ ] **Tagline / slogan** (สั้นๆ 5-10 คำ บอกว่าร้านขายอะไร)
- [ ] **คำอธิบายร้าน** (2-3 ย่อหน้า สำหรับ About section)
- [ ] **ติดต่อ:** เบอร์โทร, email, LINE, address
- [ ] **เวลาเปิด-ปิด** (แต่ละวัน)
- [ ] **Social media:** Instagram, Facebook, TikTok URLs

### 2. Content

- [ ] **เมนู / สินค้า** — จำนวนกี่ items? มี category ไหม? ราคาเท่าไหร่?
- [ ] **รูปภาพ** — มีเองไหม? ถ้าไม่มีจะใช้ stock photo (Unsplash) หรือถ่ายให้?
- [ ] **โลโก้** — มีไฟล์ไหม? format อะไร (PNG/SVG)?

### 3. Branding

- [ ] **สี brand** — มี color code ไหม? ถ้าไม่มี → ดู logo / เสนอ palette ให้
- [ ] **Font preference** — มี font ที่ชอบไหม? (ส่วนมากใช้ default ได้)
- [ ] **Style:** Modern / Vintage / Minimalist / Playful?

### 4. Features

- [ ] **เว็บแค่ landing page** หรือต้องการ:
  - [ ] ระบบจอง / booking
  - [ ] Online ordering / shopping cart
  - [ ] Blog / news
  - [ ] Multilingual (ไทย/อังกฤษ)
  - [ ] Contact form (ส่ง email)
  - [ ] Google Maps embed
  - [ ] LINE OA integration
  - [ ] Admin panel (ลูกค้าแก้ content เอง)

### 5. Technical

- [ ] **Domain** — มีเองไหม? ถ้าไม่มี Get ช่วยซื้อ/setup ได้หรือใช้ Vercel subdomain ฟรี (`xxx.vercel.app`)?
- [ ] **Hosting** — Vercel free tier พอไหม? หรือต้องการ custom hosting?
- [ ] **Email** — ใช้ Gmail / business email?
- [ ] **Analytics** — ต้องการ Google Analytics ไหม?

---

## 💰 ราคาแนะนำ (Fastwork Thailand 2026)

### Tier 1: Basic Landing Page

**ราคา:** 3,000 - 5,000 บาท
**เวลา:** 2-3 วัน
**Scope:**
- 1 หน้า เว็บ landing
- 5-6 sections (Hero, About, Menu/Service, Gallery, Contact, Footer)
- Mobile responsive
- Deploy บน Vercel + custom URL (subdomain ฟรี)
- ลูกค้าส่งรูป + content เอง

### Tier 2: Standard Business Website

**ราคา:** 8,000 - 15,000 บาท
**เวลา:** 5-7 วัน
**Scope:**
- ทุกอย่างใน Tier 1
- หลายหน้า (Home, About, Services, Contact)
- Contact form ส่ง email ได้
- Custom color theme + favicon + OG image
- SEO optimization (meta tags, sitemap)
- Lighthouse score 90+
- Domain setup (ลูกค้าซื้อเอง, Get setup ให้)

### Tier 3: Advanced Website

**ราคา:** 20,000 - 50,000 บาท
**เวลา:** 2-4 สัปดาห์
**Scope:**
- ทุกอย่างใน Tier 2
- Booking system / online ordering
- Database integration (Firebase / Supabase)
- Admin panel (ลูกค้าแก้ content เองได้)
- Multilingual
- Payment integration (Stripe / Omise)
- LINE OA integration

### 💡 Pricing Tips

- **อย่ารับงานต่ำกว่า 3,000 บาท** — ไม่คุ้มเวลา, ทำให้ตลาดเสีย
- **เก็บค่ามัดจำ 50% ก่อนเริ่ม** — กันลูกค้าหายตอนทำเสร็จ
- **กำหนด revision จำนวนครั้ง** — เช่น "แก้ฟรี 2 ครั้ง, หลังจากนั้นครั้งละ 500 บาท"
- **คิดเพิ่มสำหรับ:**
  - Rush job (เร่ง < 3 วัน) +30%
  - Translation (ไทย→อังกฤษ) +1,000 บาท
  - Stock photo (Get หาให้) +500 บาท
  - Logo design (ถ้าไม่มี) +1,500 บาท
  - LINE OA setup +1,000 บาท

---

## 🔄 Workflow ทำงานกับลูกค้า (5 Steps)

### Step 1: Brief & Quote (วันที่ 0)

1. คุยกับลูกค้าใน Fastwork chat
2. ส่ง **Brief form** ให้กรอก (ใช้ checklist ด้านบน)
3. ถ้า scope ไม่ชัด → นัด video call 15 นาที
4. เสนอราคา + timeline
5. ลูกค้าตกลง → ลูกค้าจ่ายมัดจำ 50%

### Step 2: Setup & Content Collection (วันที่ 1)

1. Clone template repo:
   ```cmd
   cd D:\Work\Fastwork
   git clone https://github.com/Garagetget/mellow-brew client-name
   cd client-name
   rm -rf .git
   git init
   ```
2. Rename project:
   - แก้ `package.json` → `"name": "client-name"`
   - สร้าง repo ใหม่บน GitHub (private)
3. Deploy preview บน Vercel (preview URL ส่งลูกค้า)
4. ส่ง **content checklist** ให้ลูกค้า:
   - รูปภาพ (zip ส่งมา หรือ Google Drive link)
   - ข้อความทุก section
   - เมนู/ราคา (Excel หรือ Google Sheets)
   - Social media links

### Step 3: Development (วันที่ 2-4)

1. แก้ content ตามที่ลูกค้าส่งมา
2. แก้สี theme + รูป + ชื่อ
3. แก้ component ถ้าจำเป็น (เพิ่ม section, modify layout)
4. Test ใน DevTools mobile mode
5. Run Lighthouse → ต้อง 90+ ทุกตัว
6. Push to GitHub → Vercel auto-deploy
7. ส่ง preview URL ให้ลูกค้าดู

### Step 4: Revision (วันที่ 5-6)

1. ลูกค้าให้ feedback
2. แก้ตาม feedback (max 2 รอบ)
3. แก้เสร็จ → ส่ง URL ใหม่
4. ลูกค้า approve

### Step 5: Launch & Handover (วันที่ 7)

1. ลูกค้าจ่ายเงินส่วนที่เหลือ
2. Setup custom domain (ถ้ามี)
3. ส่งของให้ลูกค้า:
   - URL เว็บไซต์ (live)
   - GitHub repo (ถ้าตกลงให้ — แล้วแต่ดีล)
   - Admin credentials (ถ้ามี admin panel)
   - คู่มือใช้งาน (ถ้าจำเป็น)
4. ปิดงานใน Fastwork → ขอ review

---

## 📦 Content Collection Form (ส่งให้ลูกค้ากรอก)

ใช้ Google Form หรือ copy เป็น email/LINE message ส่งให้ลูกค้า:

```
ขอข้อมูลสำหรับทำเว็บไซต์ครับ 🙏

=== 1. ข้อมูลร้าน ===
• ชื่อร้าน:
• Tagline (สั้นๆ 1 ประโยค):
• เกี่ยวกับร้าน (2-3 ย่อหน้า):

=== 2. ข้อมูลติดต่อ ===
• ที่อยู่:
• โทรศัพท์:
• Email:
• LINE ID:
• Instagram:
• Facebook:

=== 3. เวลาเปิด-ปิด ===
• จันทร์-ศุกร์:
• เสาร์:
• อาทิตย์:

=== 4. เมนู / สินค้า ===
ส่งเป็น Excel หรือพิมพ์ในนี้ก็ได้:
• ชื่อเมนู | ราคา | คำอธิบายสั้นๆ
• เช่น: Espresso | 80 บาท | เข้มข้น กลมกล่อม

=== 5. รูปภาพ ===
ส่งเป็น zip หรือ Google Drive link:
• รูป hero (banner ใหญ่หน้าแรก) — 1 รูป
• รูปบรรยากาศร้าน — 4-6 รูป
• รูปเมนู/สินค้า — แต่ละ item 1 รูป

=== 6. Branding ===
• โลโก้ (ส่งไฟล์มา ถ้ามี):
• สี brand (ถ้ามี):
• Reference เว็บที่ชอบ (URL):
```

---

## 🛠 Tools & Resources

### Stock Photos (ฟรี)
- [Unsplash](https://unsplash.com) — ภาพถ่ายมืออาชีพ
- [Pexels](https://pexels.com) — ภาพ + วิดีโอ
- [Pixabay](https://pixabay.com) — รูป + illustration

### Image Optimization
- [TinyPNG](https://tinypng.com) — compress PNG/JPG ฟรี
- [Squoosh](https://squoosh.app) — Google tool, แปลง webp ได้

### Color Tools
- [Coolors](https://coolors.co) — generate palette
- [ColorHunt](https://colorhunt.co) — palette สวยๆ
- [Realtime Colors](https://realtimecolors.com) — ทดสอบบน UI จริง

### Logo (ฟรี / ราคาถูก)
- [LogoMakr](https://logomakr.com) — ทำเองง่ายๆ
- [Canva](https://canva.com) — logo + brand kit
- [Fiverr](https://fiverr.com) — จ้างจริงจัง $20-100

### Favicon
- [favicon.io](https://favicon.io) — สร้าง favicon จาก text/emoji/image

### OG Image
- [og-image.vercel.app](https://og-image.vercel.app) — generate dynamic OG
- [Canva](https://canva.com) — template OG (1200x630)

### Domain
- [Namecheap](https://namecheap.com) — โดเมนถูก ($10-15/year)
- [Cloudflare](https://cloudflare.com) — โดเมน + DNS + CDN ฟรี

---

## ⚠️ ข้อควรระวัง

### Legal & Safety

1. **ห้ามใช้รูปจาก Google โดยตรง** — ละเมิดลิขสิทธิ์
   - ใช้ Unsplash/Pexels (license ฟรี) หรือลูกค้าส่งมาเอง
2. **ห้ามใช้ logo brand อื่น** (Starbucks, McDonald's) เป็น placeholder
3. **เก็บ contract ทุกงาน** — Fastwork มี protection แต่ควรมี chat log ครบ
4. **อย่าให้ source code ฟรี** — ถ้าลูกค้าต้องการ ต้องคิดเพิ่ม (อย่างน้อย 2x ราคา)

### Technical

1. **ห้าม commit secrets** — API keys, passwords ใส่ใน `.env.local` (gitignored)
2. **ทดสอบ mobile ทุกครั้ง** — DevTools → iPhone size
3. **Lighthouse ต้องผ่าน 90+** ก่อนส่งลูกค้า — เป็นมาตรฐาน Get
4. **Backup ก่อน deploy** — git push ก่อนเสมอ
5. **อย่า deploy โดยไม่ test build** — `npm run build` ก่อน push

### Client Management

1. **ตอบเร็ว** — Fastwork rating ขึ้นกับ response time
2. **ใส่ deadline ในใจ** — ส่งงานเร็วกว่ากำหนด 1 วัน = ลูกค้าประทับใจ
3. **ถ่ายรูป screenshot ตอน demo** — แทนคำพูดยาวๆ
4. **อย่าตอบ "ทำได้ครับ" ถ้าไม่แน่ใจ** — ค่อยๆ ถามให้ชัด
5. **เก็บ portfolio ทุกงาน** (ขอ permission ลูกค้าก่อน)

---

## 📊 Tracking Template Usage

ใช้ Mellow Brew template กี่ครั้งแล้ว เพื่อ track ROI:

| # | วันที่ | ลูกค้า | ประเภทธุรกิจ | ราคา | เวลาทำ | URL |
|---|--------|--------|--------------|------|--------|-----|
| 1 | - | (portfolio) | Cafe | - | - | mellow-brew.vercel.app |
| 2 | TBD | - | - | - | - | - |
| 3 | TBD | - | - | - | - | - |

---

## 🚀 Continuous Improvement

หลังทำงาน 3-5 ครั้ง — อัปเดต template ให้ดีขึ้น:

- [ ] เพิ่ม section ที่ลูกค้าขอบ่อย (FAQ, Testimonials, etc.)
- [ ] สร้าง variant theme เพิ่ม (ร้านอาหาร, salon, clinic)
- [ ] สร้าง template ใหม่ที่ไม่ใช่ cafe (e.g., portfolio, agency)
- [ ] ทำ video demo ของ template (ใช้ pitch ลูกค้า)
- [ ] เขียน case study (ใส่ใน portfolio website)
