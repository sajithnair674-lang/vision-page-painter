import { createFileRoute } from "@tanstack/react-router";
import { Award, BriefcaseBusiness, Languages, Microscope, Palette, Presentation, School, Users } from "lucide-react";
import { CTASection, IconCard, PageHero, SectionHeading } from "@/components/site";
import teachingImage from "@/assets/grace-teaching.jpg";
import labImage from "@/assets/grace-practical-lab.jpg";

export const Route = createFileRoute("/why-choose-us")({ head: () => ({ meta: [
  { title: "Why Choose Grace Casa | Practical Teacher Training" }, { name: "description", content: "Discover Grace Casa's placement assistance, practical lab, teaching practice, language training, faculty, and campus support." }, { property: "og:title", content: "Why Choose Grace Casa de profesores?" }, { property: "og:description", content: "A practical and career-focused approach to teacher education." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: WhyPage });

const reasons = [
  [<BriefcaseBusiness />, "100% Placement Assistance", "Support with recruitment preparation and identifying suitable teaching opportunities."],
  [<School />, "Real Teaching Practice", "Experience classroom environments, student interaction, teaching activities, and classroom management."],
  [<Microscope />, "Montessori Practical Lab", "Bridge theory and classroom application through hands-on Montessori activities and materials."],
  [<Languages />, "Spoken English Training", "Improve confidence when communicating in professional and educational environments."],
  [<Presentation />, "Interview Training", "Develop self-introduction, professional presentation, interview, and workplace confidence."],
  [<Palette />, "Arts & Crafts", "Learn creative activities that can be adapted for engaging early-childhood classrooms."],
  [<Award />, "Globally Valid Certificates", "Approved certificates designed to support professional opportunities and relevant attestation processes."],
  [<Users />, "Experienced Faculty", "Receive guidance from experienced educators throughout your training journey."],
];

function WhyPage() { return <>
  <PageHero eyebrow="The Grace Casa difference" title="Why Choose Grace Casa de profesores?" description="A practical and career-focused approach to teacher education." image={teachingImage} />
  <section className="section-space"><div className="site-container"><SectionHeading eyebrow="Built for your future" title="Professional Preparation at Every Step" description="We combine education, practical experience, communication development, and career preparation." align="center" /><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{reasons.map(([icon,title,copy]) => <IconCard key={title as string} icon={icon} title={title as string}>{copy}</IconCard>)}</div></div></section>
  <section className="section-space bg-secondary"><div className="site-container grid items-center gap-12 lg:grid-cols-2"><div><SectionHeading eyebrow="Practical confidence" title="Experience the Classroom Before Your Career Begins" /><p className="mt-6 leading-8 text-muted-foreground">Real teaching practice familiarises students with classroom environments, student interaction, teaching activities, and practical teaching situations. Arrangements are intended to be convenient for students' residential areas.</p><p className="mt-5 leading-8 text-muted-foreground">The dedicated Montessori Practical Lab further helps turn theoretical knowledge into confident, practical skills.</p></div><img src={labImage} alt="Women learning together in a Montessori practical lab" width={1408} height={1056} loading="lazy" className="aspect-[4/3] rounded-xl object-cover" /></div></section>
  <section className="section-space"><div className="site-container grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"><SectionHeading eyebrow="Beyond the classroom" title="A Student-Friendly Campus" description="A comfortable environment where learners participate, interact, and develop professionally." /><div className="grid grid-cols-2 gap-4 md:grid-cols-3">{["Educational tours","Study camps","Field trips","Site visits","Exhibitions","Seasonal celebrations","Practical teaching sessions","Creative activities","Faculty interaction"].map((item) => <div key={item} className="border-l-2 border-accent bg-surface px-4 py-5 font-display text-sm font-semibold shadow-sm">{item}</div>)}</div></div></section>
  <div className="site-container pb-16"><p className="text-xs leading-6 text-muted-foreground">Certificate validity and attestation requirements may vary by employer, authority, or embassy. Students should confirm applicable requirements directly.</p></div>
  <CTASection title="Your skills today can shape your career tomorrow" description="Join a programme designed to move you towards opportunity with confidence." />
</>; }
