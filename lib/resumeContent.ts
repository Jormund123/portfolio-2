// src/lib/resumeContent.ts

// --- TYPE DEFINITIONS ---

interface Experience {
    title: string;
    company: string;
    location: string;
    period: string;
    technologies: string;
    achievements: string[];
}

interface Research {
    title: string;
    institution: string;
    location: string;
    period: string;
    description: string;
}

interface Project {
    title: string;
    technologies: string;
    period: string;
    description: string;
}

interface Activity {
    title: string;
    technologies: string;
    period: string;
    description: string;
}

// Corrected top-level interface to include all data needed by the component
interface ResumeData {
    name: string; // <-- ADDED
    summary: string; // <-- ADDED
    contact: { // <-- ADDED
        phone: string;
        email: string;
        linkedin: string;
        github: string;
    };
    education: { // <-- ADDED
        school: string;
        degree: string;
        period: string;
        gpa: string;
    };
    skills: {
        languages: string[];
        technologies: string[];
        coursework: string[];
        other: string[];
    };
    experiences: Experience[];
    research: Research[];
    projects: Project[];
    activities: Activity[];
}


// --- RESUME DATA ---

// Export a single, typed constant containing all your data
export const resumeData: ResumeData = {
    // Added header information
    name: "Anand Karna",
    summary: "Software Developer specializing in Fullstack, AI/ML, and creative digital solutions. Passionate about building efficient, scalable applications and automated systems.",
    contact: {
        phone: "+918969606675",
        email: "krn.anand100@gmail.com", // Replace with your actual email
        linkedin: "https://www.linkedin.com/in/anand-karna-769007202/", // Replace with your actual profile
        github: "https://github.com/Jormund123", // Replace with your actual profile
    },
    education: {
        school: "Delhi Technological University",
        degree: "Bachelor of Technology in Computer Engineering",
        period: "Dec 2020 - May 2024",
        gpa: "8.96/10 CGPA"
    },
    // Your existing data remains unchanged
    skills: {
        languages: ['Python', 'JavaScript', 'TypeScript', 'ABAP', 'HTML/CSS', 'C/C++'],
        technologies: ['React.js', 'Next.js', 'Material-UI', 'Bootstrap', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Supabase', 'Django'],
        coursework: ['AI/ML', 'Web Development', 'Data Structures & Algorithms', 'Engineering Economics', 'Distributed Systems', 'Compiler Design', 'Computer Architecture'],
        other: ['Ableton Live', 'Premiere Pro', 'After Effects', 'Photoshop', 'DaVinci Resolve', 'Canva', 'LaTeX', 'Digital Marketing']
    },
    experiences: [
        {
            title: 'Software Developer',
            company: 'Cosmo First Ltd.',
            location: 'Aurangabad, India',
            period: 'Jul 2024 - Present',
            technologies: 'ABAP, AI/ML, TypeScript, React.js, React Native, Node.js, Supabase',
            achievements: [
                'Automated invoice uploads to SF CRM, reducing upload time by 300%; achieved 95% accuracy in data extraction from POs and invoices using Gemini API and integrated it with SAP',
                'Developed a part of Vendor Portal that minimized vendor on-boarding downtime by 87.5%, reduced vendor follow-ups by 98% via real-time tracking',
                'Developed an app that reduced batch and pallet processing by 7x in speed compared to the previous solution thereby saving $115,000',
                'Created ALV reports, ABAP APIs, implemented migration of data warehouse from SAP BW/BO to Snowflake'
            ]
        },
        {
            title: 'Web Developer Intern',
            company: 'Innovativebiz Technologies Pvt. Ltd.',
            location: 'Remote',
            period: 'Jun 2023 - Aug 2023',
            technologies: 'Next.js, Tailwind, SEO',
            achievements: [
                'Used react-slick for carousel along with Tailwind for compact yet clean presentation of the company\'s projects',
                'Next.js enabled server-side rendering that improved the application\'s performance and SEO, resulting in 63% increment in leads'
            ]
        }
    ],
    research: [
        {
            title: 'Parkinson\'s disease detection',
            institution: 'Delhi Technological University',
            location: 'Delhi, India',
            period: 'Mar 2024 - May 2024',
            description: 'Combined PCA, replication dependence (mixed-effect models), Fourier & wavelet transforms, and standard scaling normalization for replication-aware feature engineering. In 10-fold cross-validation, MLP outperformed all other methods with a 95% accuracy whereas in train-test split RF and MLP had 100% accuracies.'
        },
        {
            title: 'Chronic liver disease detection',
            institution: 'Delhi Technological University',
            location: 'Delhi, India',
            period: 'Nov 2023 - Jan 2024',
            description: 'Applied a combination of linear and non-linear dimensionality reduction techniques (LDA, FA, t-SNE and UMAP) to form a comprehensive feature set. Conducted train-test split and 10-fold cross validation evaluation for Logistic Regression, KNN, Random Forest and MLP which improved the accuracy (98.31% for RF) of the models outperforming recent state-of-art studies.'
        }
    ],
    projects: [
        {
            title: 'Spotify Clone',
            technologies: 'Next.js, Supabase, TypeScript, Tailwind, Stripe',
            period: 'Jul 2023',
            description: 'Created a sleek frontend design whilst integrating TypeScript types via Supabase CLI for type-safe interactions and optimizing database storage with Supabase for media files.'
        },
        {
            title: 'Amazon Clone',
            technologies: 'React, Firebase, Stripe',
            period: 'Sept 2022',
            description: 'Created Redux actions for diverse user interactions and efficient state management, alongside Firebase Authentication for secure user account handling, ensuring a responsive interface with smooth login and registration processes.'
        }
    ],
    activities: [
        {
            title: 'Co-Founder at The Now Factor',
            technologies: 'Next.js, Supabase, TypeScript, DaVinci Resolve',
            period: 'Feb 2025 - Present',
            description: 'Designed and developed the entire website using Next.js and Supabase, and authored thought-provoking, insight-driven articles that were later adapted into narrative-style YouTube videos which I edited entirely.',
        },
        {
            title: 'Volunteer at Duttaji Bhale Blood Donation Program',
            technologies: 'Community Service, Healthcare Awareness',
            period: 'Dec 2024',
            description: 'Participated in a community-driven blood donation initiative aimed at supporting local healthcare infrastructure and promoting the importance of voluntary blood donation.',
        },
        {
            title: 'Co-Founder at Yuorloph',
            technologies: 'Operations, Web, Analytics & Forecasting, Marketing',
            period: 'Apr 2024 - Jun 2024',
            description: 'Oversaw all aspects of the venture, from website maintenance and demand forecasting using ML analytics to marketing, procurement, distribution, and delivery time estimation. Generated NPR 60,000 in revenue within 20 days of launch, validating early product-market fit.',
        },
        {
            title: "Mentor in Madhurima, DTU's Music Society",
            technologies: 'Leadership, Team Building, Performing Arts',
            period: 'Jun 2022',
            description: 'Mentored first-year students for Cadence, an annual intra-society music competition, fostering creativity, teamwork, and performance skills within the society.',
        },
    ],
};