export type ServiceCategory = 
  | 'psicoterapia-individual'
  | 'neuropsicologia'
  | 'ansiedade-estresse'
  | 'depressao-humor'
  | 'terapia-casal'
  | 'reabilitacao-cognitiva';

export interface ClinicalArea {
  id: string;
  category: ServiceCategory;
  title: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string;
  keyBenefits: string[];
  approach: string;
  duration: string;
  modality: 'Online e Presencial' | 'Presencial (Exames)' | 'Online';
  badge: string;
  iconName: string;
}

export interface MetricStat {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  patientProfile: string; // e.g. "Paciente em Psicoterapia Online, 34 anos"
  duration: string;
  focusArea: string;
  verified: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'primeira-sessao' | 'online' | 'neuropsicologia' | 'valores-convenio';
}

export interface AppointmentSimulation {
  modality: 'online' | 'presencial';
  areaOfInterest: string;
  preferredPeriod: 'manha' | 'tarde' | 'noite';
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  patientNote?: string;
}
