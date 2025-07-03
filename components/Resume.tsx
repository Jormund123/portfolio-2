import React, {useState, useEffect} from 'react';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet';
import {Badge} from '@/components/ui/badge';
import {Separator} from '@/components/ui/separator';
import {
    GraduationCap,
    Code,
    Briefcase,
    Lightbulb,
    Users,
    Phone,
    Mail,
    Github,
    Linkedin,
    Globe,
    ArrowUpRight
} from 'lucide-react';
import {resumeData} from "@/lib/resumeContent";

// --- Prop Types for Helper Components ---

interface SectionProps {
    title: string;
    icon: React.ElementType; // Allows passing Lucide icons as a component
    children: React.ReactNode;
}

interface SocialLinkProps {
    href: string;
    icon: React.ElementType;
    children: React.ReactNode;
}

// --- Helper Components with Strong Types ---

// Helper component for consistent section styling
const Section: React.FC<SectionProps> = ({title, icon: Icon, children}) => (
    <section className="space-y-4">
        <p className="flex items-center text-xl font-semibold text-foreground">
            <Icon className="mr-3 h-5 w-5 text-muted-foreground"/>
            {title}
        </p>
        <div className="pl-8">
            {children}
        </div>
    </section>
);

// Helper component for social/contact links in the header
const SocialLink: React.FC<SocialLinkProps> = ({href, icon: Icon, children}) => (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
        <Icon className="h-4 w-4"/>
        {children}
    </a>
);


export default function AnandResumeSheet() {
    const [isDesktop, setIsDesktop] = useState<boolean>(false);

    useEffect(() => {
        const checkScreenSize = () => setIsDesktop(window.innerWidth >= 768);
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    // This component conditionally renders a button (for desktop) or a link (for mobile).
    // The props are typed to accept standard HTML attributes which are passed down.
    const ResumeLink = ({children, className, ...props}: React.PropsWithChildren<{
        className?: string
    } & React.HTMLAttributes<HTMLElement>>) => {
        if (isDesktop) {
            return (
                <SheetTrigger asChild>
                    <button className={className} {...props}>
                        {children}
                    </button>
                </SheetTrigger>
            );
        }

        return (
            <a
                href="https://drive.google.com/file/d/1GruW888KRvqtxT6lYj_1DMfIfrRFofv-/view"
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                {...props}
            >
                {children}
            </a>
        );
    };

    return (
        <Sheet>
            <ResumeLink
                className="px-4 py-2 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground relative inline-block before:absolute before:content-[''] before:w-0 before:h-[2px] before:bg-foreground before:transition-all before:duration-300 before:top-full before:left-0 hover:before:w-full">
                <div className="flex flex-row items-center">
                    My Resume
                    {!isDesktop && <ArrowUpRight className="ml-2" size={18}/>}
                </div>
            </ResumeLink>

            <SheetContent className="w-full sm:max-w-3xl overflow-y-auto bg-background border-border p-0">
                <div className="p-8 sm:p-12 space-y-8">
                    {/* --- HEADER --- */}
                    <SheetHeader className="text-left space-y-2">
                        <SheetTitle className="text-4xl font-bold text-foreground">
                            {resumeData.name}
                        </SheetTitle>
                        <SheetDescription className="text-sm text-muted-foreground">
                            {resumeData.summary}
                        </SheetDescription>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 pt-2">
                            <SocialLink href={`tel:${resumeData.contact.phone}`} icon={Phone}>
                                {resumeData.contact.phone}
                            </SocialLink>
                            <SocialLink href={`mailto:${resumeData.contact.email}`} icon={Mail}>
                                {resumeData.contact.email}
                            </SocialLink>
                            <SocialLink href={resumeData.contact.linkedin} icon={Linkedin}>
                                anand-karna
                            </SocialLink>
                            <SocialLink href={resumeData.contact.github} icon={Github}>
                                anand-karna
                            </SocialLink>
                        </div>
                    </SheetHeader>

                    <Separator className="bg-border/50"/>

                    {/* --- EDUCATION --- */}
                    <Section title="Education" icon={GraduationCap}>
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-lg font-semibold text-foreground">{resumeData.education.school}</p>
                                <p className="text-muted-foreground">{resumeData.education.degree}</p>
                            </div>
                            <div className="text-right flex-shrink-0 ml-4">
                                <p className="text-sm text-muted-foreground">{resumeData.education.period}</p>
                                <p className="text-sm font-medium text-foreground">{resumeData.education.gpa}</p>
                            </div>
                        </div>
                    </Section>

                    {/* --- EXPERIENCE --- */}
                    <Section title="Experience" icon={Briefcase}>
                        <div className="space-y-6">
                            {resumeData.experiences.map((exp, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-6">
                                    <p className="text-sm text-muted-foreground mb-2 md:mb-0">{exp.period}</p>
                                    <div>
                                        <p className="text-lg font-semibold text-foreground">{exp.title}</p>
                                        <p className="text-sm italic text-muted-foreground">{exp.company} • {exp.location}</p>
                                        <ul className="mt-2 space-y-1 list-disc list-inside text-sm text-muted-foreground">
                                            {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                                        </ul>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {exp.technologies.split(', ').map((tech, i) => (
                                                <Badge key={i} variant="secondary"
                                                       className="text-xs font-normal">{tech}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* --- SKILLS --- */}
                    <Section title="Skills" icon={Code}>
                        <div className="space-y-3">
                            {Object.entries(resumeData.skills).map(([category, skills]) => (
                                <div key={category} className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-start">
                                    <h4 className="font-medium text-sm text-foreground capitalize mb-2 md:mb-0">{category}</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill, index) => (
                                            <Badge key={index} variant="secondary" className="text-xs font-normal">
                                                {skill}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* --- RESEARCH --- */}
                    <Section title="Academic Research" icon={Lightbulb}>
                        <div className="space-y-6">
                            {resumeData.research.map((item, index) => (
                                <div key={index} className="grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-6">
                                    <p className="text-sm text-muted-foreground mb-2 md:mb-0">{item.period}</p>
                                    <div>
                                        <p className="text-lg font-semibold text-foreground">{item.title}</p>
                                        <p className="text-sm italic text-muted-foreground">{item.institution}</p>
                                        <p className="text-sm mt-2 text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* --- PROJECTS --- */}
                    <Section title="Projects" icon={Code}>
                        <div className="space-y-6">
                            {resumeData.projects.map((item, index) => (
                                <div key={index}
                                     className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-baseline gap-x-6">
                                    <p className="text-sm text-muted-foreground mb-2 md:mb-0">{item.period}</p>
                                    <div>
                                        <p className="text-lg font-semibold text-foreground">{item.title}</p>
                                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                        <div className="mt-3 flex flex-wrap gap-2">
                                            {item.technologies.split(', ').map((tech, i) => (
                                                <Badge key={i} variant="secondary"
                                                       className="text-xs font-normal">{tech}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                    {/* --- ACTIVITIES --- */}
                    <Section title="Extra-curricular Activities" icon={Users}>
                        <div className="space-y-6">
                            {resumeData.activities.map((item, index) => (
                                <div key={index}
                                     className="grid grid-cols-1 md:grid-cols-[120px_1fr] items-baseline gap-x-6">
                                    <p className="text-sm text-muted-foreground mb-2 md:mb-0">{item.period}</p>
                                    <div>
                                        <p className="text-lg font-semibold text-foreground">{item.title}</p>
                                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                                        {item.technologies && (
                                            <div className="mt-3 flex flex-wrap gap-2">
                                                {item.technologies.split(', ').map((tech, i) => (
                                                    <Badge key={i} variant="secondary"
                                                           className="text-xs font-normal">{tech}</Badge>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Section>

                </div>
            </SheetContent>
        </Sheet>
    );
}