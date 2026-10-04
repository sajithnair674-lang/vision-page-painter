import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Globe2, GraduationCap, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, SectionHeading } from "@/components/site";
import heroImage from "@/assets/grace-hero.jpg";
import labImage from "@/assets/grace-practical-lab.jpg";
import teachingImage from "@/assets/grace-teaching.jpg";
import anzilaAsset from "@/assets/placement-anzila-majida.jpg.asset.json";
import fathimaAsset from "@/assets/placement-fathima.jpg.asset.json";
import nusaibaAsset from "@/assets/placement-nusaiba-ahsana.jpg.asset.json";
import swethaAsset from "@/assets/placement-swetha.jpg.asset.json";
import indhuAsset from "@/assets/placement-indhu.jpg.asset.json";
import habeebaAsset from "@/assets/placement-habeeba.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Grace Casa de profesores | Premium Montessori Teacher Training" },
    { name: "description", content: "Professional Montessori and Pre-Primary teacher training for women, with practical learning and placement support in Areekode." },
    { property: "og:title", content: "Grace Casa de profesores | Teacher Training for Women" },
    { property: "og:description", content: "A practical path from aspiring educator to confident teacher." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: HomePage,
});

const placements = [
  { image: anzilaAsset.url, names: "Anzila & Majida", school: "NICT English School", place: "Moothedam, Nilambur" },
  { image: fathimaAsset.url, names: "Fathima Meharban", school: "Apple Garden School", place: "Al-Jubail, Saudi Arabia" },
  { image: nusaibaAsset.url, names: "Nusaiba & Ahsana", school: "Al Irshad English School", place: "Trippanachi, Malappuram" },
  { image: swethaAsset.url, names: "Swetha Sasidharan", school: "Woodlem Park School", place: "Al Hamidiya, Ajman, UAE" },
  { image: indhuAsset.url, names: "Indhu Manu", school: "Indian Public High School", place: "Ras Al Khaimah, UAE" },
  { image: habeebaAsset.url, names: "Habeeba", school: "Tiny Star Nursery", place: "Musaffah, Abu Dhabi, UAE" },
];

function HomePage() {
  return <>
    <section className="editorial-hero">
      <img src={heroImage} alt="Montessori teacher guiding a child through a classroom activity" width={1920} height={1200} fetchPriority="high" />
      <div className="editorial-hero-shade" />
      <div className="site-container relative z-10 flex min-h-[calc(100svh-5rem)] items-end pb-16 pt-28 md:pb-24">
        <div className="max-w-3xl animate-rise">
          <p className="eyebrow text-primary-foreground/75">Montessori TTC · Areekode</p>
          <h1 className="mt-5 max-w-3xl text-primary-foreground">Where passion becomes <em>profession.</em></h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/80">Practical teacher education for women ready to lead, nurture and inspire.</p>
          <div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/courses">Explore courses <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-primary-foreground/45 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/contact">Enquire now</Link></Button></div>
        </div>
      </div>
      <div className="hero-index" aria-hidden="true">01</div>
    </section>

    <section className="section-space overflow-hidden bg-background" id="placements">
      <div className="site-container">
        <div className="grid items-end gap-8 md:grid-cols-[1fr_auto]"><SectionHeading eyebrow="Student success" title="Defining Grace." description="Our graduates are building meaningful teaching careers in India and abroad." /><div className="hidden items-center gap-3 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary md:flex"><span className="h-px w-12 bg-primary" /> Real outcomes</div></div>
        <article className="mt-14 grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="placement-feature group lg:col-span-7"><div className="placement-frame" /><img src={placements[0].image} alt="Placement announcement for Anzila and Majida" className="relative aspect-[4/5] w-full object-cover shadow-2xl" /><span className="placement-tag">Success spotlight</span><div className="placement-name"><small>Grace alumnae</small><strong>{placements[0].names}</strong></div></div>
          <div className="lg:col-span-5"><p className="eyebrow">Career milestone</p><h2 className="mt-5 text-5xl leading-none md:text-6xl">Dreams, now in <em className="text-primary">motion.</em></h2><div className="mt-9 border-l border-border pl-7"><small className="uppercase text-muted-foreground">Appointed at</small><h3 className="mt-3 text-2xl">{placements[0].school}</h3><p className="mt-1 text-muted-foreground">{placements[0].place}</p><p className="mt-7 leading-8 text-muted-foreground">Confident teachers shaped through practical learning, personal guidance and professional preparation.</p></div></div>
        </article>
        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-5">{placements.slice(1).map((item) => <article key={item.names} className="group overflow-hidden bg-surface"><div className="overflow-hidden"><img src={item.image} alt={`Placement announcement for ${item.names}`} loading="lazy" className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-[1.03]" /></div><div className="p-4"><h3 className="text-lg">{item.names}</h3><p className="mt-1 text-xs leading-5 text-muted-foreground">{item.school}<br />{item.place}</p></div></article>)}</div>
      </div>
    </section>

    <section className="section-space bg-primary text-primary-foreground"><div className="site-container grid items-center gap-12 lg:grid-cols-2"><div className="relative"><img src={labImage} alt="Teacher trainees learning with Montessori materials" loading="lazy" className="aspect-[5/4] w-full object-cover" /><span className="image-caption">Learning by doing</span></div><div className="lg:pl-10"><p className="eyebrow">Two professional pathways</p><h2 className="mt-5 text-primary-foreground">Learn the craft of teaching.</h2><p className="mt-6 max-w-lg leading-8 text-primary-foreground/70">Choose Montessori TTC or Pre-Primary TTC. Both programmes unite child-centred knowledge with practical classroom confidence.</p><div className="mt-9 divide-y divide-primary-foreground/15 border-y border-primary-foreground/15">{["Montessori TTC", "Pre-Primary TTC"].map((course, index) => <Link key={course} to="/courses" className="group flex items-center justify-between py-6"><span><small className="mr-5 text-accent">0{index + 1}</small><strong className="font-display text-2xl font-normal">{course}</strong></span><ArrowRight className="transition-transform group-hover:translate-x-1" /></Link>)}</div></div></div></section>

    <section className="section-space"><div className="site-container"><div className="grid items-end gap-10 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading eyebrow="The Grace approach" title="Prepared for the real classroom." /><div className="grid gap-px bg-border sm:grid-cols-3">{[[<GraduationCap />,"Practical","Hands-on Montessori learning"],[<Globe2 />,"Professional","Communication and career support"],[<Sparkles />,"Personal","A supportive place to grow"]].map(([icon,title,copy]) => <div key={title as string} className="bg-background p-7"><span className="text-accent">{icon}</span><h3 className="mt-6 text-2xl">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{copy as string}</p></div>)}</div></div><div className="mt-16 grid items-center gap-10 border-t border-border pt-12 lg:grid-cols-[1.1fr_0.9fr]"><img src={teachingImage} alt="A teacher trainee leading a creative classroom activity" loading="lazy" className="aspect-[16/9] w-full object-cover" /><div><p className="eyebrow">Your next chapter</p><h2 className="mt-4 text-4xl">Ready to become an educator?</h2><p className="mt-5 leading-7 text-muted-foreground">Take the first step towards a confident, rewarding career.</p><Button asChild size="lg" className="mt-7"><Link to="/contact">Begin your enquiry <ArrowRight /></Link></Button></div></div></div></section>
    <CTASection title="A future shaped with confidence." description="Admissions enquiries are now welcome." />
  </>;
}