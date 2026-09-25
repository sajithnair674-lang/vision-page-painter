import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, ChevronRight, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import studentsImage from "@/assets/grace-students.jpg";

const navItems = [
  { to: "/" as const, label: "Home" },
  { to: "/about" as const, label: "About Us" },
  { to: "/courses" as const, label: "Courses" },
  { to: "/why-choose-us" as const, label: "Why Choose Us" },
  { to: "/contact" as const, label: "Contact Us" },
];

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" aria-label="Grace Casa de profesores home">
      <span className={inverse ? "brand-mark brand-mark-inverse" : "brand-mark"} aria-hidden="true">
        <BookOpen size={20} strokeWidth={1.8} />
      </span>
      <span className="min-w-0 leading-none">
        <span className={inverse ? "block font-display text-lg font-semibold text-primary-foreground" : "block font-display text-lg font-semibold text-primary"}>Grace Casa</span>
        <span className={inverse ? "mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-primary-foreground/70" : "mt-1 block text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground"}>de profesores · Montessori TTC</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur-md">
      <div className="site-container flex h-20 items-center justify-between gap-5">
        <BrandMark />
        <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} className="nav-link" activeProps={{ className: "nav-link nav-link-active" }}>{item.label}</Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button asChild size="lg"><Link to="/contact">Enquire now <ArrowRight /></Link></Button>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-5 py-5 lg:hidden">
          <nav className="mx-auto flex max-w-xl flex-col" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} activeOptions={{ exact: item.to === "/" }} onClick={() => setOpen(false)} className="border-b border-border py-3.5 font-display text-sm font-semibold text-foreground" activeProps={{ className: "border-b border-border py-3.5 font-display text-sm font-semibold text-primary" }}>{item.label}</Link>
            ))}
            <Button asChild size="lg" className="mt-5"><Link to="/contact" onClick={() => setOpen(false)}>Enquire now <ArrowRight /></Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="site-container grid gap-12 py-16 md:grid-cols-[1.4fr_0.7fr_0.8fr_1fr]">
        <div><BrandMark inverse /><p className="mt-6 max-w-sm text-sm leading-7 text-primary-foreground/72">Empowering women through professional teacher education, practical training, and career-focused learning.</p></div>
        <FooterGroup title="Quick links">{navItems.slice(1).map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}</FooterGroup>
        <FooterGroup title="Courses"><Link to="/courses">Montessori TTC</Link><Link to="/courses">Pre-Primary TTC</Link></FooterGroup>
        <FooterGroup title="Contact"><span>Post Office Road, Star Complex<br />Areekode, Malappuram<br />Kerala – 673639</span><a href="tel:+917034345680">+91 70343 45680</a><a href="mailto:graceareekode@gmail.com">graceareekode@gmail.com</a></FooterGroup>
      </div>
      <div className="border-t border-primary-foreground/15"><div className="site-container py-5 text-xs text-primary-foreground/60">© {new Date().getFullYear()} Grace Casa de profesores Montessori TTC. All Rights Reserved.</div></div>
    </footer>
  );
}

function FooterGroup({ title, children }: { title: string; children: ReactNode }) {
  return <div className="flex flex-col gap-3 text-sm text-primary-foreground/72"><h3 className="font-display text-sm font-semibold text-primary-foreground">{title}</h3>{children}</div>;
}

export function PageHero({ eyebrow, title, description, image = studentsImage }: { eyebrow: string; title: string; description: string; image?: string }) {
  return (
    <section className="relative isolate min-h-[460px] overflow-hidden bg-primary">
      <img src={image} alt="Women preparing for a professional career in teaching" width={1408} height={1056} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="site-container relative flex min-h-[460px] items-end py-16 md:py-20">
        <div className="max-w-3xl animate-rise"><p className="eyebrow text-primary-foreground/75">{eyebrow}</p><h1 className="mt-5 max-w-2xl text-primary-foreground">{title}</h1><p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/82">{description}</p></div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow?: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2 className={eyebrow ? "mt-4" : ""}>{title}</h2>{description && <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>}</div>;
}

export function CTASection({ title = "Your teaching career starts here", description = "Take the first step towards building your future in education." }: { title?: string; description?: string }) {
  return <section className="bg-accent"><div className="site-container flex flex-col items-start justify-between gap-8 py-14 md:flex-row md:items-center"><div><p className="eyebrow">Begin your journey</p><h2 className="mt-3 max-w-2xl text-3xl md:text-4xl">{title}</h2><p className="mt-3 text-muted-foreground">{description}</p></div><div className="flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/contact">Apply now <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/courses">Explore courses</Link></Button></div></div></section>;
}

export function IconCard({ icon, title, children }: { icon: ReactNode; title: string; children: ReactNode }) {
  return <article className="feature-card"><span className="icon-box">{icon}</span><h3 className="mt-6 text-xl">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{children}</p></article>;
}

export function ContactStrip() {
  return <div className="grid gap-5 sm:grid-cols-3"><a className="contact-chip" href="tel:+917034345680"><Phone /> <span><small>Call us</small>+91 70343 45680</span></a><a className="contact-chip" href="mailto:graceareekode@gmail.com"><Mail /> <span><small>Email us</small>graceareekode@gmail.com</span></a><div className="contact-chip"><MapPin /><span><small>Visit us</small>Areekode, Malappuram</span></div></div>;
}

export function TextLink({ to, children }: { to: "/about" | "/courses" | "/contact" | "/why-choose-us"; children: ReactNode }) {
  return <Link to={to} className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-accent-foreground">{children}<ChevronRight size={16} /></Link>;
}
