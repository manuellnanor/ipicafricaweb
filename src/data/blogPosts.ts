import { BlogPost } from "../types";
import teamCollaborationImage from "../assets/hero/ipic-team-collaboration.jpg";
import financialStrategyImage from "../assets/hero/ipic-financial-strategy.jpg";
import womanLeadershipImage from "../assets/hero/ipic-woman-leadership.jpg";
import menstrualHealthHeroImage from "../assets/news/menstrual-health-policy-hero.jpeg";
import menstrualHealthTeamImage from "../assets/news/menstrual-health-policy-team.jpeg";
import menstrualHealthParticipantsImage from "../assets/news/menstrual-health-policy-participants.jpeg";

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-menstrual-health-policy-action",
    slug: "ipic-africa-menstrual-health-research-policy-action",
    title: "IPiC Africa Supports Translation of Menstrual Health Research into Policy Action",
    dateDay: "25",
    dateMonth: "Jun",
    dateLabel: "June 25, 2026",
    author: "IPiC Africa",
    category: "Policy Action",
    image: menstrualHealthHeroImage,
    excerpt:
      "IPiC Africa supported knowledge translation for menstrual health research examining links between menstrual management challenges and adolescent girls' mental health in Ghana.",
    gallery: [menstrualHealthTeamImage, menstrualHealthParticipantsImage],
    briefUrl: "/downloads/menstrual-health-policy-brief.pdf",
    tags: ["Menstrual Health", "Mental Health", "Knowledge Translation"],
    content: [
      "A growing body of evidence linking menstrual health challenges to poor mental health outcomes among adolescent girls is prompting renewed calls for policy action in Ghana, with knowledge translation experts emphasizing the need to move research findings beyond academic circles and into practical decision-making.",
      "Stakeholders from academia, government, health institutions, schools, and development organisations convened at the Hohoe Campus of the University of Health and Allied Sciences (UHAS) for a dissemination forum organised by the University with funding support from the Reckitt Global Hygiene Institute (RGHI) and Plan International Ghana. The forum examined findings from a study involving 1,161 senior high school girls across five districts in the Volta Region.",
      "The research revealed significant levels of psychological distress associated with menstrual management challenges, including depression, anxiety, stress, shame, and social isolation among adolescent girls.",
      "While the event highlighted the scientific findings, a parallel effort focused on ensuring that the evidence reaches policymakers in a format that can drive change. The Africa Institute for Policy and Impact Communication (IPiC Africa) supported the initiative through knowledge translation and the development of a policy brief that distilled the research findings into practical recommendations for government agencies, schools, communities, and development partners.",
      "Speaking on the sidelines of the event, Dr. Evelyn Acquah, Director of Research and Programmes at IPiC Africa, said generating evidence alone is not enough to improve outcomes for girls.",
      '"Research creates knowledge, but knowledge only creates impact when it is understood, communicated effectively, and used to inform decisions. Our role was to help translate the evidence into a form that policymakers, practitioners, and community leaders can readily use," she said.',
      "The policy brief highlights the strong relationship between inadequate menstrual hygiene management and poor mental health outcomes among adolescent girls. It identifies several drivers of the problem, including inadequate school sanitation facilities, menstrual stigma, limited menstrual health education, and the high cost of menstrual products.",
      "According to Dr. Acquah, the findings demonstrate that menstrual health should no longer be treated solely as a sanitation issue.",
      '"The evidence clearly shows that menstrual health is also a mental health issue. When girls face anxiety about leakage, lack privacy, experience stigma, or miss school because they cannot manage their periods safely and with dignity, the consequences extend beyond physical discomfort and affect their wellbeing, confidence, and educational outcomes," she noted.',
      "The policy brief outlines several recommendations, including integrating menstrual health indicators into school health and counselling programmes, improving water, sanitation and hygiene facilities in schools, expanding menstrual health education to include boys and parents, increasing access to affordable menstrual products, and engaging traditional and faith leaders to challenge harmful social norms.",
      "Dr. Acquah stressed that effective policy communication is essential if research investments are to generate measurable social impact.",
      '"Too often, important research findings remain within academic publications. Knowledge translation bridges the gap between evidence and action by making complex findings accessible to decision-makers and the public. That is how research contributes to real-world change," she said.',
      "The dissemination forum was held under the theme, 'Breaking the Silence: Menstrual Hygiene Management and Adolescent Mental Health in Ghana.' During the event, Professor Lydia Aziato, Vice-Chancellor of UHAS, called for an end to the stigma and discrimination surrounding menstruation, describing it as a normal biological process that should never be a basis for exclusion or shame.",
      "The knowledge translation initiative was based on research led by Dr. Sitsofe Gbogbo of University of Health and Allied Sciences (UHAS) with funding from the Reckitt Global Hygiene Institute (RGHI).",
    ],
  },
  {
    id: "blog-1",
    slug: "bridging-science-to-policy-gap-local-governance",
    title: "Bridging the Science-to-Policy Gap in Local Governance",
    dateDay: "14",
    dateMonth: "Jun",
    dateLabel: "June 14, 2026",
    author: "Ama Boateng",
    category: "Civic Policy",
    image: teamCollaborationImage,
    excerpt:
      "Practical approaches for turning research evidence into local governance decisions that communities can understand and monitor.",
    content: [
      "IPiC Africa works with public institutions and civic partners to make research findings clearer, more usable, and more responsive to the needs of local communities.",
      "The work focuses on evidence packaging, stakeholder engagement, and communication products that help decision-makers act with confidence.",
    ],
  },
  {
    id: "blog-2",
    slug: "inclusive-ai-digital-rights-blueprints-west-africa",
    title: "Inclusive AI & Digital Rights Blueprints for West Africa",
    dateDay: "24",
    dateMonth: "Jun",
    dateLabel: "June 24, 2026",
    author: "Ebenezer Kwabena",
    category: "Tech Ethics",
    image: womanLeadershipImage,
    excerpt:
      "A regional look at responsible technology governance, rights-based digital systems, and inclusive AI policy communication.",
    content: [
      "Responsible digital transformation requires public communication that explains rights, risks, and accountability in practical language.",
      "IPiC Africa supports partners to design governance materials that keep inclusion and public trust at the centre of technology adoption.",
    ],
  },
  {
    id: "blog-3",
    slug: "transformative-me-tracking-community-policy-actions",
    title: "Transformative M&E: Tracking Community Policy Actions",
    dateDay: "29",
    dateMonth: "Jun",
    dateLabel: "June 29, 2026",
    author: "Dr. Yao Mensah",
    category: "M&E Strategy",
    image: financialStrategyImage,
    excerpt:
      "How monitoring, evaluation, and learning systems can trace the community-level impact of evidence-informed policy action.",
    content: [
      "Monitoring and evaluation systems become more useful when they connect policy commitments to practical change in people's lives.",
      "IPiC Africa helps institutions define indicators, communicate progress, and adapt strategies through evidence-based learning.",
    ],
  },
];

export const getBlogPostBySlug = (slug: string) =>
  BLOG_POSTS.find((post) => post.slug === slug);
