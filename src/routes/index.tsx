import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BriefcaseBusiness, Check, Languages, Lightbulb, MessageSquareText, Palette, School } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection, IconCard, SectionHeading, TextLink } from "@/components/site";
import heroImage from "@/assets/grace-hero.jpg";
import labImage from "@/assets/grace-practical-lab.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Grace Casa de profesores | Montessori Teacher Training in Areekode" },
    { name: "description", content: "Build your teaching career with professional Montessori and Pre-Primary teacher training, practical learning, and placement support." },
    { property: "og:title", content: "Grace Casa de profesores | Teacher Training for Women" },
    { property: "og:description", content: "Professional teacher education, practical learning, career guidance, and placement support in Areekode." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: HomePage,
});

const benefits = [
  [<Lightbulb />, "Practical learning", "Gain hands-on experience through practical activities and teaching practice."],
  [<BriefcaseBusiness />, "Placement assistance", "Receive guidance while preparing for teaching opportunities."],
  [<Languages />, "Spoken English", "Build communication skills and confidence for professional environments."],
  [<MessageSquareText />, "Interview training", "Learn to present yourself confidently during recruitment."],
  [<School />, "Experienced faculty", "Learn under experienced educators in a supportive environment."],
  [<Palette />, "Creative activities", "Develop classroom creativity through arts, crafts, and activities."],
];

function HomePage() {
  return <>
    <section className="relative isolate min-h-[calc(100vh-5rem)] overflow-hidden bg-primary">
      <img src={heroImage} alt="Montessori teacher guiding children through a classroom activity" width={1920} height={1200} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="site-container relative flex min-h-[calc(100vh-5rem)] items-center py-16">
        <div className="max-w-[680px] animate-rise"><p className="eyebrow text-primary-foreground/75">Montessori TTC · Areekode</p><h1 className="mt-5 max-w-2xl text-primary-foreground">Empowering Women Through Quality Teacher Education</h1><p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/82">Build your future in education with professional Montessori and Pre-Primary teacher training, practical learning, career guidance, and placement support.</p><div className="mt-9 flex flex-wrap gap-3"><Button asChild size="lg"><Link to="/courses">Explore our courses <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline" className="border-primary-foreground/35 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary"><Link to="/contact">Enquire now</Link></Button></div></div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 hidden border-t border-primary-foreground/20 bg-primary/75 backdrop-blur-sm md:block"><div className="site-container grid grid-cols-3 divide-x divide-primary-foreground/20 py-5 text-primary-foreground"><div className="px-6 first:pl-0"><b className="font-display text-lg">Career-focused</b><small className="mt-1 block text-primary-foreground/65">Professional training</small></div><div className="px-6"><b className="font-display text-lg">Hands-on</b><small className="mt-1 block text-primary-foreground/65">Practical lab learning</small></div><div className="px-6"><b className="font-display text-lg">Supportive</b><small className="mt-1 block text-primary-foreground/65">Placement assistance</small></div></div></div>
    </section>

    <section className="section-space"><div className="site-container grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]"><div><SectionHeading eyebrow="Welcome to Grace Casa" title="Building Confident Teachers for a Better Tomorrow" /><div className="mt-7 space-y-5 leading-8 text-muted-foreground"><p>Grace Casa de profesores Montessori TTC, Areekode, provides professional teacher training opportunities for women who aspire to build a career in education.</p><p>Our programmes combine academic learning with practical training, communication development, professional grooming, and real teaching experience.</p></div><div className="mt-8"><TextLink to="/about">Discover our approach</TextLink></div></div><div className="relative"><img src={labImage} alt="Teacher trainees learning with Montessori materials" width={1408} height={1056} loading="lazy" className="aspect-[4/3] w-full rounded-xl object-cover" /><div className="absolute -bottom-5 -left-5 hidden rounded-lg bg-accent px-6 py-5 text-accent-foreground shadow-lg md:block"><b className="block font-display text-2xl">Learn. Practise.</b><span className="text-sm">Grow. Succeed.</span></div></div></div></section>

    <section className="section-space bg-secondary"><div className="site-container"><SectionHeading eyebrow="Our courses" title="Choose Your Path Into Education" description="Professional programmes combining knowledge, practical skills, communication, and career preparation." align="center" /><div className="mt-12 grid gap-6 lg:grid-cols-2">{[
      { n: "01", title: "Montessori TTC", desc: "Professional training for aspiring Montessori educators, with practical lab access and real teaching experience.", eligible: "SSLC / Plus Two / Degree", items: ["Montessori practical training", "Spoken English", "Teaching practice", "Placement assistance"] },
      { n: "02", title: "Pre-Primary TTC", desc: "Develop the essential classroom and early-childhood skills needed to teach and nurture young learners.", eligible: "SSLC", items: ["Early childhood teaching", "Classroom activities", "Interview preparation", "Placement support"] },
    ].map((course) => <article key={course.title} className="rounded-xl border border-border bg-surface p-7 md:p-9"><div className="flex items-start justify-between gap-4"><span className="eyebrow">Programme {course.n}</span><span className="rounded-full bg-sand px-3 py-1 text-xs font-semibold text-primary">Eligibility: {course.eligible}</span></div><h3 className="mt-5 text-2xl">{course.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{course.desc}</p><ul className="my-7 grid gap-3 sm:grid-cols-2">{course.items.map((item) => <li key={item} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-accent" />{item}</li>)}</ul><TextLink to="/courses">Explore {course.title}</TextLink></article>)}</div></div></section>

    <section className="section-space"><div className="site-container"><SectionHeading eyebrow="Why Grace Casa" title="Education That Prepares You for the Real Classroom" description="Our training develops students academically, practically, and professionally." align="center" /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{benefits.map(([icon, title, copy]) => <IconCard key={title as string} icon={icon} title={title as string}>{copy}</IconCard>)}</div></div></section>

    <section className="section-space bg-primary text-primary-foreground"><div className="site-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><SectionHeading eyebrow="Career support" title="Prepare for Your Future Career" description="Our programmes help students prepare for employment opportunities across the education sector." /><div className="grid grid-cols-2 gap-x-8 gap-y-4 md:grid-cols-3">{["International Schools", "CBSE Schools", "Montessori Schools", "English Medium Schools", "Play Schools", "Nurseries", "Kindergartens", "Early Education Centres", "Teaching Assistant Roles"].map((item) => <div key={item} className="flex items-start gap-2 border-b border-primary-foreground/15 pb-3 text-sm text-primary-foreground/80"><Check className="mt-0.5 h-4 w-4 flex-none text-accent" />{item}</div>)}</div></div></section>
    <CTASection title="Start learning. Build confidence. Become an educator." />
  </>;
}
