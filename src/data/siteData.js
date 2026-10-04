// Centralized content keeps the UI components focused on presentation.
// Developers can change programs, trainers, plans, stats, or FAQs here without
// searching through multiple JSX files.

export const stats = [
  { value: "12+", label: "Years of Excellence" },
  { value: "27K+", label: "Members" },
  { value: "60+", label: "Weekly Classes" },
  { value: "117+", label: "Expert Trainers" },
];

export const services = [
  { icon: "🏋️", title: "Personal Training", desc: "One-to-one coaching built around your goals." },
  { icon: "🔥", title: "Group Classes", desc: "High-energy sessions that keep training social." },
  { icon: "🏊", title: "Swimming", desc: "Low-impact conditioning with coached sessions." },
  { icon: "🧘", title: "Recovery", desc: "Mobility, sauna and recovery options to recharge." },
];

export const features = [
  { title: "State-of-the-Art Equipment", desc: "Premium machines and free weights maintained for reliable training." },
  { title: "Expert Trainers", desc: "Certified coaches guide you with structured, personalized plans." },
  { title: "Wide Range of Classes", desc: "Strength, HIIT, yoga, boxing and more across the week." },
  { title: "Welcoming Community", desc: "A supportive environment where members can train with confidence." },
];

export const plans = [
  {
    name: "Basic", price: 25, desc: "Essential access for regular workouts.",
    features: ["Unlimited gym access", "1 group class per month", "Relaxation areas"],
  },
  {
    name: "Standard", price: 35, desc: "A complete package for consistent training.",
    features: ["Unlimited gym access", "3 group classes per month", "Sauna & pool access", "1 personal training session"],
    popular: true,
  },
  {
    name: "Premium", price: 45, desc: "Maximum benefits for a complete fitness routine.",
    features: ["Everything in Standard", "Unlimited group classes", "2 personal training sessions", "Sauna, pool & spa access"],
  },
];

export const programs = [
  { title: "Power Strength", category: "Strength", img: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1000&auto=format&fit=crop", duration: "60 min", level: "Intermediate", desc: "Barbell-focused strength work with progressive overload." },
  { title: "HIIT Burn", category: "Cardio", img: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1000&auto=format&fit=crop", duration: "45 min", level: "All Levels", desc: "High-intensity intervals designed to challenge your conditioning." },
  { title: "Yoga & Mobility", category: "Classes", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop", duration: "50 min", level: "All Levels", desc: "Guided flows for flexibility, balance and movement quality." },
  { title: "Boxing Conditioning", category: "Cardio", img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1000&auto=format&fit=crop", duration: "60 min", level: "Advanced", desc: "Footwork, technique and conditioning inspired by boxing." },
  { title: "Olympic Lifting", category: "Strength", img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=1000&auto=format&fit=crop", duration: "75 min", level: "Advanced", desc: "Technique-focused Olympic lifting with coach feedback." },
  { title: "Spin Cycle", category: "Classes", img: "https://images.unsplash.com/photo-1520877745935-616158d9cbbb?q=80&w=1000&auto=format&fit=crop", duration: "45 min", level: "All Levels", desc: "Rhythm-based indoor cycling with energetic group sessions." },
  { title: "Sauna & Cold Plunge", category: "Recovery", img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1000&auto=format&fit=crop", duration: "30 min", level: "All Levels", desc: "A dedicated recovery experience after demanding sessions." },
  { title: "CrossFit WOD", category: "Strength", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1000&auto=format&fit=crop", duration: "60 min", level: "Intermediate", desc: "Constantly varied functional training in a community setting." },
  { title: "Swim Training", category: "Cardio", img: "https://images.unsplash.com/photo-1530549387789-4c1017266635?q=80&w=1000&auto=format&fit=crop", duration: "60 min", level: "All Levels", desc: "Coached lap swimming for low-impact full-body conditioning." },
];

export const trainers = [
  { name: "Marcus Steele", role: "Head Coach — Strength & Conditioning", img: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop", exp: "12 yrs", tags: ["Powerlifting", "Olympic Lifting"] },
  { name: "Aisha Rahman", role: "HIIT & Cardio Specialist", img: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop", exp: "8 yrs", tags: ["HIIT", "Cardio"] },
  { name: "Diego Alvarez", role: "Boxing & Combat Coach", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop", exp: "10 yrs", tags: ["Boxing", "Combat"] },
  { name: "Emily Chen", role: "Yoga & Mobility Instructor", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=800&auto=format&fit=crop", exp: "7 yrs", tags: ["Yoga", "Mobility"] },
  { name: "James Okafor", role: "CrossFit & Functional Training", img: "https://images.unsplash.com/photo-1597347343908-2937e7dcc560?q=80&w=800&auto=format&fit=crop", exp: "9 yrs", tags: ["CrossFit", "Functional"] },
  { name: "Sofia Marin", role: "Nutrition & Wellness Coach", img: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?q=80&w=800&auto=format&fit=crop", exp: "6 yrs", tags: ["Nutrition", "Wellness"] },
  { name: "Liam Walker", role: "Swimming & Endurance Coach", img: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=800&auto=format&fit=crop", exp: "11 yrs", tags: ["Swimming", "Endurance"] },
  { name: "Nina Petrova", role: "Spin & Group Class Instructor", img: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?q=80&w=800&auto=format&fit=crop", exp: "5 yrs", tags: ["Spin", "Groups"] },
];

export const faqs = [
  { q: "Do you offer a free trial?", a: "Yes. Contact the team to arrange a one-week trial and explore the facilities before choosing a plan." },
  { q: "Can I freeze my membership?", a: "Membership freezes can be discussed with the front desk based on your plan and circumstances." },
  { q: "Are personal training sessions included?", a: "Standard and Premium plans include coaching sessions as listed in their benefits." },
  { q: "What should I bring for my first visit?", a: "Bring comfortable training clothes, a water bottle and your ID. Towels and lockers are available." },
];

export const contactInfo = [
  { icon: "📍", title: "Location", lines: ["123 Muscle Street", "Fit City, FC 10100"] },
  { icon: "📞", title: "Phone", lines: ["+1 (555) 123-4567", "+1 (555) 987-6543"] },
  { icon: "✉️", title: "Email", lines: ["train@ironforge.com", "support@ironforge.com"] },
  { icon: "🕐", title: "Hours", lines: ["Mon – Fri: 24/7", "Sat – Sun: 6AM – 12AM"] },
];

export const values = [
  { icon: "🔥", title: "Passion", desc: "Energy and enthusiasm are part of every session." },
  { icon: "🤝", title: "Community", desc: "Members train together, support each other and celebrate progress." },
  { icon: "🏆", title: "Excellence", desc: "We focus on quality equipment, coaching and member experience." },
  { icon: "💪", title: "Results", desc: "Progress is the goal, built through consistency and smart training." },
];

export const milestones = [
  { year: "2013", title: "The Beginning", desc: "IronForge opens its doors with 50 members and one mission." },
  { year: "2016", title: "First Expansion", desc: "A larger facility adds a pool, sauna and recovery zone." },
  { year: "2020", title: "Going Digital", desc: "Virtual classes and digital member support launch." },
  { year: "2024", title: "27K Strong", desc: "The community grows to more than 27,000 members." },
];
