export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
}

export const services: Service[] = [
  {
    id: "rheumatoid-arthritis",
    title: "Rheumatoid Arthritis",
    description: "Comprehensive care for managing rheumatoid arthritis with advanced biologic therapies and disease monitoring.",
    icon: "Activity",
    details: [
      "Early diagnosis and intervention",
      "Biologic and DMARD therapies",
      "Disease activity monitoring",
      "Joint preservation strategies",
    ],
  },
  {
    id: "osteoarthritis",
    title: "Osteoarthritis",
    description: "Expert management of osteoarthritis through conservative treatments and innovative therapies.",
    icon: "Bone",
    details: [
      "Conservative management",
      "Injection therapies",
      "Joint preservation strategies",
      "Pain management",
    ],
  },
  {
    id: "lupus",
    title: "Lupus (SLE)",
    description: "Specialized care for systemic lupus erythematosus with multi-organ monitoring and treatment optimization.",
    icon: "Heart",
    details: [
      "Comprehensive lupus care",
      "Multi-organ monitoring",
      "Treatment optimization",
      "Lifestyle counseling",
    ],
  },
  {
    id: "psoriatic-arthritis",
    title: "Psoriatic Arthritis",
    description: "Coordinated treatment for both joint and skin manifestations of psoriatic arthritis.",
    icon: "Droplet",
    details: [
      "Joint and skin coordination",
      "Advanced biologics",
      "Lifestyle management",
      "Symptom control",
    ],
  },
  {
    id: "gout",
    title: "Gout Management",
    description: "Comprehensive gout treatment including acute flare management and long-term uric acid control.",
    icon: "Zap",
    details: [
      "Acute flare treatment",
      "Long-term uric acid control",
      "Dietary counseling",
      "Prevention strategies",
    ],
  },
  {
    id: "osteoporosis",
    title: "Osteoporosis",
    description: "Bone health management with density assessment and medication optimization.",
    icon: "Shield",
    details: [
      "Bone density assessment",
      "Fall prevention",
      "Medication management",
      "Lifestyle modifications",
    ],
  },
  {
    id: "vasculitis",
    title: "Vasculitis",
    description: "Specialized diagnosis and treatment of various forms of vasculitis.",
    icon: "GitBranch",
    details: [
      "Specialized diagnosis",
      "Immunosuppressive therapy",
      "Monitoring protocols",
      "Multi-system care",
    ],
  },
  {
    id: "sjogrens",
    title: "Sjögren's Syndrome",
    description: "Management of Sjögren's syndrome symptoms and multi-system complications.",
    icon: "Eye",
    details: [
      "Symptom management",
      "Multi-system care",
      "Dryness treatments",
      "Fatigue management",
    ],
  },
];
