import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ContactStrip, PageHero, SectionHeading } from "@/components/site";
import studentsImage from "@/assets/grace-students.jpg";

export const Route = createFileRoute("/contact")({ head: () => ({ meta: [
  { title: "Contact Grace Casa de profesores | Admissions & Enquiries" }, { name: "description", content: "Contact Grace Casa in Areekode for course eligibility, fees, admissions, practical training, and career opportunities." }, { property: "og:title", content: "Contact Grace Casa de profesores" }, { property: "og:description", content: "Get answers about courses, eligibility, admissions, and career opportunities." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
] }), component: ContactPage });

function ContactPage() {
  const [sent, setSent] = useState(false);
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setSent(true); event.currentTarget.reset(); }
  return <>
    <PageHero eyebrow="Contact us" title="Get in Touch With Grace Casa" description="Have questions about courses, eligibility, admissions, or career opportunities? Contact us today." image={studentsImage} />
    <section className="section-space"><div className="site-container"><ContactStrip /><div className="mt-14 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><SectionHeading eyebrow="Visit our campus" title="We’re Here to Help" /><div className="mt-8 space-y-7">
      <ContactItem icon={<MapPin />} title="Grace Casa de profesores"><p>Post Office Road, Star Complex<br />Areekode, Malappuram District<br />Kerala – 673639</p></ContactItem>
      <ContactItem icon={<Phone />} title="Phone"><p><a href="tel:+917034345680">+91 70343 45680</a><br /><a href="tel:+917306298600">+91 73062 98600</a><br /><a href="tel:+916238714005">+91 62387 14005</a></p></ContactItem>
      <ContactItem icon={<Mail />} title="Email"><a href="mailto:graceareekode@gmail.com">graceareekode@gmail.com</a></ContactItem>
      <ContactItem icon={<Clock3 />} title="Office hours"><p>Monday – Saturday: 10:00 AM – 3:30 PM<br />Sunday: Closed</p></ContactItem>
    </div></div>
    <div className="rounded-xl border border-border bg-surface p-6 shadow-lg md:p-9"><p className="eyebrow">Have an enquiry?</p><h2 className="mt-4 text-3xl">Send Us a Message</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">Ask about eligibility, fees, admissions, training, placement assistance, or career opportunities.</p>
      {sent ? <div role="status" className="mt-8 rounded-lg bg-secondary p-6"><h3 className="text-xl">Thank you for your enquiry.</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">Your message is ready for our admissions team. For an immediate response, please call one of the numbers listed.</p><Button variant="outline" className="mt-5" onClick={() => setSent(false)}>Send another enquiry</Button></div> :
      <form className="mt-8 grid gap-5" onSubmit={submit}><div className="grid gap-5 sm:grid-cols-2"><Field label="Name"><Input name="name" required placeholder="Enter your full name" className="h-12 bg-background" /></Field><Field label="Phone number"><Input name="phone" type="tel" required placeholder="Enter your phone number" className="h-12 bg-background" /></Field></div><Field label="Email address"><Input name="email" type="email" placeholder="Enter your email address" className="h-12 bg-background" /></Field><div className="grid gap-5 sm:grid-cols-2"><Field label="Course interested in"><select required name="course" defaultValue="" className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"><option value="" disabled>Select course</option><option>Montessori TTC</option><option>Pre-Primary TTC</option><option>General Enquiry</option></select></Field><Field label="Qualification"><select required name="qualification" defaultValue="" className="h-12 w-full rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"><option value="" disabled>Select qualification</option><option>SSLC</option><option>Plus Two</option><option>Degree</option><option>Other</option></select></Field></div><Field label="Message"><Textarea name="message" rows={5} placeholder="Tell us what you would like to know." className="bg-background" /></Field><Button type="submit" size="lg" className="mt-2 w-full">Submit enquiry <ArrowRight /></Button></form>}
    </div></div></div></section>
    <section className="bg-secondary"><div className="site-container flex flex-col items-start justify-between gap-7 py-14 md:flex-row md:items-center"><div><h2 className="text-3xl">Ready to Begin Your Teaching Journey?</h2><p className="mt-3 text-muted-foreground">Take the first step towards building your career in education.</p></div><Button asChild variant="outline" size="lg"><Link to="/courses">Explore our courses <ArrowRight /></Link></Button></div></section>
  </>;
}
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <label className="grid gap-2 font-display text-sm font-semibold text-foreground">{label}{children}</label>; }
function ContactItem({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) { return <div className="flex gap-4"><span className="icon-box">{icon}</span><div><h3 className="text-base">{title}</h3><div className="mt-2 text-sm leading-7 text-muted-foreground">{children}</div></div></div>; }
