import { createFileRoute } from "@tanstack/react-router";
import nurseHero from "@/assets/nurse-hero.jpg";
import { Mail, Phone, MapPin, Heart, Stethoscope, GraduationCap, Award, Briefcase, Languages, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nimra Noor" },
      { name: "description", content: "Professional Portfolio" },
      { property: "og:title", content: "Nimra Noor" },
      { property: "og:description", content: "Professional Portfolio" },
    ],
  }),
  component: Index,
});

function useFadeIn(delay = 0) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, isInView, delay };
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const, delay },
  }),
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: (delay: number) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="sticky top-0 z-30 backdrop-blur-md bg-background/70 border-b border-border/60"
      >
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2 font-display text-xl text-plum hover:scale-105 transition-transform duration-300">
            <Heart className="w-5 h-5 text-rose fill-rose" /> Nimra Noor
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {[
              { href: "#about", label: "About" },
              { href: "#experience", label: "Experience" },
              { href: "#education", label: "Education" },
              { href: "#skills", label: "Skills" },
              { href: "#contact", label: "Contact" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative hover:text-rose transition-colors duration-300 after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-px after:bottom-0 after:left-0 after:bg-rose after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blush via-background to-cream" />
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-rose-soft/40 blur-3xl -z-10 animate-pulse" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-accent/30 blur-3xl -z-10 animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="mx-auto max-w-6xl px-6 pt-20 pb-24 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={staggerItem} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-soft/40 text-plum text-xs font-medium tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" /> Registered Nurse · ICU & BMT
            </motion.span>
            <motion.h1 variants={staggerItem} className="mt-6 font-display text-5xl md:text-7xl font-medium leading-[1.05] text-plum">
              Caring hands,<br />
              <em className="text-rose">steady heart.</em>
            </motion.h1>
            <motion.p variants={staggerItem} className="mt-6 text-lg text-muted-foreground max-w-md leading-relaxed">
              I'm Nimra — a self-driven Registered Nurse with over two years of critical care experience in Neuro ICU and Bone Marrow Transplant units, devoted to compassionate, evidence-based patient care.
            </motion.p>
            <motion.div variants={staggerItem} className="mt-8 flex flex-wrap gap-3">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-full bg-rose text-primary-foreground text-sm font-medium hover:bg-plum transition shadow-lg shadow-rose/20"
              >
                Get in touch
              </motion.a>
              <motion.a
                href="#experience"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-3 rounded-full border border-rose/30 text-plum text-sm font-medium hover:bg-rose-soft/30 transition"
              >
                View experience
              </motion.a>
            </motion.div>

            <motion.div variants={staggerItem} className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "2+", l: "Years in ICU" },
                { n: "3", l: "Diplomas" },
                { n: "6+", l: "Specialty trainings" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease: "easeOut" as const }}
                >
                  <motion.div
                    className="font-display text-3xl text-rose"
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.15, type: "spring", stiffness: 200, damping: 15 }}
                  >
                    {s.n}
                  </motion.div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" as const, delay: 0.3 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-rose/20 to-transparent rounded-[2.5rem] rotate-3"
              animate={{ rotate: [3, 1, 3] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="relative rounded-[2.5rem] overflow-hidden border-4 border-card shadow-2xl shadow-rose/20"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={nurseHero}
                alt="Illustrated portrait of Nimra Noor, Registered Nurse"
                width={1280}
                height={1600}
                className="w-full h-auto"
              />
            </motion.div>
            <motion.div
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl px-5 py-4 shadow-xl border border-border flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" as const }}
            >
              <div className="w-10 h-10 rounded-full bg-rose-soft/50 flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-rose" />
              </div>
              <div>
                <div className="text-sm font-medium text-plum">Nursing Officer</div>
                <div className="text-xs text-muted-foreground">Pakistan Institute of Neurosciences</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-card">
        <div className="mx-auto max-w-4xl px-6">
          <AnimatedSection>
            <SectionLabel icon={<Heart className="w-3.5 h-3.5" />} text="About" />
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-plum leading-tight">
              A nurse devoted to <em className="text-rose">precision and presence</em> at the bedside.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              With proven success delivering swift, precise assessments and maintaining composure under pressure, I collaborate closely with physicians and multidisciplinary teams to uphold the highest healthcare standards. I adapt to meet diverse patient needs in complex, evolving conditions — especially for Bone Marrow Transplant patients — bringing strong clinical knowledge, critical thinking, and a quality-focused approach to every shift.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <SectionLabel icon={<Briefcase className="w-3.5 h-3.5" />} text="Experience" />
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-plum">Where I've served.</h2>
          </AnimatedSection>

          <div className="mt-12 space-y-8">
            <AnimatedCard delay={0}>
              <ExperienceCard
                role="Nursing Officer — Neuro ICU"
                org="Pakistan Institute of Neurosciences, Lahore"
                period="Dec 2023 — Present"
                points={[
                  "Specialized nursing care for critically ill patients with traumatic brain injuries, strokes, and neurosurgical interventions.",
                  "Managed patients on mechanical ventilation, continuous EEG, and invasive monitoring systems.",
                  "Administered medications, titrated drips, and performed advanced nursing procedures.",
                  "Collaborated with neurologists, neurosurgeons, respiratory and physical therapists.",
                  "Assisted with lumbar punctures, ventriculostomies, and brain monitoring devices.",
                  "Educated and supported patients' families with empathy and clarity.",
                ]}
              />
            </AnimatedCard>
            <AnimatedCard delay={0.15}>
              <ExperienceCard
                role="Nursing Officer — Bone Marrow Transplant"
                org="Pakistan Kidney and Liver Institute & Research Centre, Lahore"
                period="Sep 2022 — Jan 2024"
                points={[
                  "Coordinated care with physicians to deliver high-dose chemotherapy and stem-cell infusion protocols safely.",
                  "Monitored and documented vital signs, medication side effects, and recovery progress.",
                  "Maintained composure and efficiency during rapid response situations and emergency codes.",
                  "Performed blood product transfusions and acute symptom management.",
                  "Assisted bedside bone marrow biopsies, lumbar punctures with intrathecal chemo, and skin biopsies.",
                  "Fierce patient and caregiver advocate — emotional, psychological, and spiritual support.",
                ]}
              />
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-blush/40">
        <div className="mx-auto max-w-5xl px-6">
          <AnimatedSection>
            <SectionLabel icon={<GraduationCap className="w-3.5 h-3.5" />} text="Education" />
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-plum">Qualifications & training.</h2>
          </AnimatedSection>

          <motion.div
            className="mt-12 grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {[
              { t: "B.Sc. — Associate Degree Program", s: "Punjab University, Lahore", n: "Completed" },
              { t: "Diploma in General Nursing", s: "Children Hospital, Lahore", n: "3 years full-time" },
              { t: "Diploma in Midwifery Nursing", s: "Lady Willingdon Hospital, Lahore", n: "1 year, Gynecology" },
              { t: "F.Sc. Pre-Engineering", s: "Major in Biology", n: "Completed" },
            ].map((e) => (
              <motion.div
                key={e.t}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-rose/40 hover:shadow-lg hover:shadow-rose/10 transition-shadow duration-300"
              >
                <div className="text-xs uppercase tracking-wider text-rose font-medium">{e.n}</div>
                <div className="mt-2 font-display text-xl text-plum">{e.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{e.s}</div>
              </motion.div>
            ))}
          </motion.div>

          <AnimatedSection delay={0.2}>
            <h3 className="mt-16 font-display text-2xl text-plum">Specialty Trainings</h3>
          </AnimatedSection>
          <motion.div
            className="mt-6 grid md:grid-cols-3 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            {[
              { t: "Bone Marrow Transplant", o: "AFBMTC, Rawalpindi", d: "Nov–Dec 2022 · 2 months" },
              { t: "Intensive Care Unit Nursing", o: "PKLI & RC", d: "Jan–Mar 2023 · 3 months" },
              { t: "Infection Prevention & Control", o: "PKLI & RC", d: "May 2023 · 1 month" },
            ].map((tr) => (
              <motion.div
                key={tr.t}
                variants={staggerItem}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="bg-card/70 rounded-xl p-5 border border-border transition-shadow duration-300 hover:shadow-md"
              >
                <div className="font-medium text-plum">{tr.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{tr.o}</div>
                <div className="text-xs text-rose mt-2">{tr.d}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills & Courses */}
      <section id="skills" className="py-24">
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-2 gap-12">
          <AnimatedSection>
            <SectionLabel icon={<Sparkles className="w-3.5 h-3.5" />} text="Key Skills" />
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-plum">Clinical strengths.</h2>
            <motion.ul
              className="mt-8 space-y-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {[
                "Inpatient and outpatient care",
                "Nursing staff leadership",
                "Excellent assessment skills",
                "Strong patient management & relations",
                "Central Venous Catheter management",
                "Respectful team player",
                "Patient education from admission to discharge",
                "Adaptable across diverse environments",
              ].map((s) => (
                <motion.li key={s} variants={staggerItem} className="flex items-start gap-3 group">
                  <motion.span
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-rose flex-shrink-0 group-hover:scale-150 transition-transform duration-300"
                  />
                  <span className="text-foreground/80">{s}</span>
                </motion.li>
              ))}
            </motion.ul>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <SectionLabel icon={<Award className="w-3.5 h-3.5" />} text="Courses & Workshops" />
            <h2 className="mt-4 font-display text-3xl md:text-4xl text-plum">Continued learning.</h2>
            <motion.div
              className="mt-8 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={staggerContainer}
            >
              {[
                { t: "Basic Life Support (BLS)", d: "PKLI & RC · 1-day workshop · 2022" },
                { t: "Workplace Violence", d: "PKLI & RC · 1-day course · 2023" },
                { t: "Second Victim Support", d: "PKLI & RC · 1-day course · 2023" },
              ].map((c) => (
                <motion.div key={c.t} variants={staggerItem} className="border-l-2 border-rose pl-5 py-1 hover:pl-6 transition-all duration-300">
                  <div className="font-medium text-plum">{c.t}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{c.d}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="mt-10 p-6 rounded-2xl bg-blush/50 border border-rose-soft/40"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" as const }}
            >
              <div className="flex items-center gap-2 text-plum mb-3">
                <Languages className="w-4 h-4" />
                <span className="text-sm font-medium uppercase tracking-wider">Languages</span>
              </div>
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {["English", "Urdu", "Punjabi"].map((l) => (
                  <motion.span
                    key={l}
                    variants={staggerItem}
                    whileHover={{ scale: 1.08, y: -2 }}
                    className="px-3 py-1 rounded-full bg-card text-sm text-plum border border-border cursor-default"
                  >
                    {l}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-to-br from-plum to-rose text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <AnimatedSection>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 text-xs font-medium tracking-wider uppercase">
              <Heart className="w-3.5 h-3.5" /> Get in touch
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-6xl leading-tight">
              Let's connect — <em className="text-rose-soft">I'd love to hear from you.</em>
            </h2>
            <p className="mt-4 text-white/80 max-w-xl mx-auto">
              Available for nursing roles, collaborations, and professional opportunities across critical care and transplant nursing.
            </p>
          </AnimatedSection>

          <motion.div
            className="mt-12 grid sm:grid-cols-3 gap-4 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerItem}>
              <ContactCard icon={<MapPin className="w-5 h-5" />} label="Location" value="Lahore, Pakistan" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <ContactCard icon={<Phone className="w-5 h-5" />} label="Phone" value="+92 304 3005080" href="tel:+923043005080" />
            </motion.div>
            <motion.div variants={staggerItem}>
              <ContactCard icon={<Mail className="w-5 h-5" />} label="Email" value="nimranoor888@gmail.com" href="mailto:nimranoor888@gmail.com" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-8 bg-plum text-white/60 text-center text-sm"
      >
        © {new Date().getFullYear()} Nimra Noor · Registered Nurse · Crafted with care.
      </motion.footer>
    </div>
  );
}

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, ease: "easeOut" as const, delay }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.97 }}
      transition={{ duration: 0.7, ease: "easeOut" as const, delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionLabel({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-soft/30 text-rose text-xs font-medium tracking-wider uppercase">
      {icon} {text}
    </span>
  );
}

function ExperienceCard({ role, org, period, points }: { role: string; org: string; period: string; points: string[] }) {
  return (
    <motion.div
      className="bg-card rounded-3xl p-8 border border-border transition-shadow duration-300"
      whileHover={{ boxShadow: "0 20px 40px -15px rgba(225, 120, 120, 0.15)", y: -2 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="font-display text-2xl text-plum">{role}</h3>
          <div className="text-sm text-muted-foreground mt-1">{org}</div>
        </div>
        <span className="text-xs px-3 py-1.5 rounded-full bg-rose-soft/30 text-rose font-medium whitespace-nowrap">{period}</span>
      </div>
      <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-3">
        {points.map((p) => (
          <li key={p} className="flex gap-3 text-sm text-foreground/80 leading-relaxed">
            <span className="mt-1.5 w-1 h-1 rounded-full bg-rose flex-shrink-0" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const inner = (
    <motion.div
      className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/15 h-full"
      whileHover={{ backgroundColor: "rgba(255,255,255,0.18)", scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 text-rose-soft">{icon}<span className="text-xs uppercase tracking-wider">{label}</span></div>
      <div className="mt-2 font-display text-xl">{value}</div>
    </motion.div>
  );
  return href ? <a href={href}>{inner}</a> : inner;
}
