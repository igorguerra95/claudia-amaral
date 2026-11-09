import { ClinicalArea, MetricStat, TestimonialItem, FaqItem } from '../types';

export const CLINICAL_AREAS: ClinicalArea[] = [
  {
    id: 'ansiedade-panico',
    category: 'ansiedade-estresse',
    title: 'Ansiedade, Pânico & Estresse Crônico',
    shortDescription: 'Técnicas com evidência científica para desacelerar pensamentos intrusivos, aliviar sintomas físicos e restaurar a serenidade.',
    fullDescription: 'A ansiedade não é um sinal de fraqueza, mas um alarme do sistema nervoso que perdeu a regulação. Trabalhamos na identificação de gatilhos inconscientes, reestruturação de crenças limitantes e regulação do eixo neurofisiológico de estresse através de respiração guiada, TCC e mindfulness.',
    targetAudience: 'Adultos que sentem aperto no peito, insônia, ruminações constantes ou medo paralisante.',
    keyBenefits: [
      'Alívio gradual das crises de pânico e agorafobia',
      'Domínio de estratégias de desativação fisiológica do medo',
      'Recuperação do sono restaurador e da energia vital',
      'Clareza para tomada de decisões sem a pressão do desespero'
    ],
    approach: 'TCC e Protocolos de Redução do Estresse Baseados em Mindfulness',
    duration: 'Sessões de 50 minutos',
    modality: 'Online e Presencial',
    badge: 'Alta Procura',
    iconName: 'Wind'
  },
  {
    id: 'neuropsicologia-diagnostico',
    category: 'neuropsicologia',
    title: 'Avaliação Neuropsicológica Completa',
    shortDescription: 'Mapeamento minucioso do funcionamento cognitivo para investigação de TDAH, TEA, memória e altas habilidades.',
    fullDescription: 'Um procedimento estruturado com baterias de testes psicométricos validados pelo SATEPSI. Analisamos atenção, funções executivas, velocidade de processamento, raciocínio lógico e aspectos emocionais para emissão de laudo técnico detalhado que orienta médicos, escolas e a própria pessoa.',
    targetAudience: 'Adultos e jovens com queixas de desatenção, procrastinação severa, lapsos de memória ou suspeita diagnóstica.',
    keyBenefits: [
      'Laudo técnico conclusivo e detalhado para fins médicos e terapêuticos',
      'Mapeamento claro de potenciais cognitivos e pontos a desenvolver',
      'Direcionamento assertivo de tratamentos medicamentosos ou intervenções',
      'Sessão de devolutiva humanizada com orientações práticas para a vida'
    ],
    approach: 'Baterias Psicométricas Padronizadas e Protocolos Neurocognitivos',
    duration: 'Processo de 5 a 7 sessões com laudo',
    modality: 'Presencial (Exames)',
    badge: 'Especialidade de Destaque',
    iconName: 'Brain'
  },
  {
    id: 'psicoterapia-adultos',
    category: 'psicoterapia-individual',
    title: 'Psicoterapia Individual & Autoconhecimento',
    shortDescription: 'Um refúgio seguro de escuta acolhedora para ressignificar traumas, fortalecer a autoestima e construir uma vida com propósito.',
    fullDescription: 'Um espaço livre de julgamentos morais, onde você é ouvido em sua totalidade. Investigamos padrões relacionais repetitivos, feridas emocionais e mecanismos de autossabotagem, construindo recursos internos sólidos para que você assuma o protagonismo da sua própria história.',
    targetAudience: 'Pessoas em momentos de transição de vida, luto, crises de identidade ou busca por crescimento pessoal.',
    keyBenefits: [
      'Construção de limites saudáveis nas relações pessoais e profissionais',
      'Fortalecimento da autocompaixão e segurança interna',
      'Superação de bloqueios emocionais arraigados na história de vida',
      'Alinhamento entre seus valores essenciais e suas escolhas diárias'
    ],
    approach: 'Psicoterapia Humanizada Integrativa & Terapias Contextuais',
    duration: 'Sessões de 50 minutos',
    modality: 'Online e Presencial',
    badge: 'Essencial',
    iconName: 'HeartHandshake'
  },
  {
    id: 'depressao-humor',
    category: 'depressao-humor',
    title: 'Depressão & Transtornos do Humor',
    shortDescription: 'Acolhimento empático e protocolos clínicos para resgatar o prazer de viver, a esperança e o significado no cotidiano.',
    fullDescription: 'Quando o mundo parece cinza e até levantar da cama custa uma energia imensa, você não precisa enfrentar isso sozinho. Desenvolvemos passos gentis e estruturados de ativação comportamental, validação emocional e identificação de pensamentos automáticos de desesperança.',
    targetAudience: 'Indivíduos enfrentando tristeza persistente, perda de interesse em atividades, fadiga crônica ou vazio emocional.',
    keyBenefits: [
      'Retomada gradual da motivação e do prazer em pequenas conquistas',
      'Ruptura do ciclo de autocrítica destrutiva e culpa excessiva',
      'Criação de uma rede de suporte e autocuidado sustentável',
      'Trabalho conjunto e responsável com médicos psiquiatras quando necessário'
    ],
    approach: 'Ativação Comportamental e Terapia Focada na Compaixão',
    duration: 'Sessões de 50 minutos',
    modality: 'Online e Presencial',
    badge: 'Cuidado Intensivo',
    iconName: 'SunMedium'
  },
  {
    id: 'terapia-casal',
    category: 'terapia-casal',
    title: 'Terapia de Casal & Relações Saudáveis',
    shortDescription: 'Mediação sensível para restaurar o diálogo afetivo, curar quebras de confiança e alinhar expectativas a dois.',
    fullDescription: 'Relacionamentos duradouros não são aqueles sem conflitos, mas aqueles com maturidade para repará-los. Auxiliamos os parceiros a saírem de ciclos acusatórios de ataque e defesa, reconstruindo a intimidade, a parceria e a segurança emocional compartilhada.',
    targetAudience: 'Casais em crise de comunicação, transições de fase (casamento, filhos) ou desgaste da convivência.',
    keyBenefits: [
      'Cessação de discussões destrutivas e reativas',
      'Compreensão profunda das necessidades não atendidas do outro',
      'Reconstrução do pacto de lealdade, afeto e cumplicidade',
      'Clareza para decisões conjuntas sobre o futuro da relação'
    ],
    approach: 'Terapia Focada nas Emoções (EFT) para Casais',
    duration: 'Sessões de 60 a 75 minutos',
    modality: 'Online e Presencial',
    badge: 'Vínculos Afetivos',
    iconName: 'Users'
  },
  {
    id: 'reabilitacao-cognitiva',
    category: 'reabilitacao-cognitiva',
    title: 'Reabilitação Cognitiva & Neuroproteção',
    shortDescription: 'Treinamento funcional personalizado para potencializar memória, foco e autonomia no dia a dia.',
    fullDescription: 'Especialmente indicada pós-diagnóstico neuropsicológico, sequelas neurológicas (como AVC ou pós-Covid) ou para quem deseja manter o cérebro afiado. Utilizamos exercícios de neuroplasticidade, adaptação ambiental e estratégias compensatórias.',
    targetAudience: 'Adultos, idosos ou profissionais que exigem máxima performance e preservação mental.',
    keyBenefits: [
      'Desenvolvimento de estratégias compensatórias de memória e rotina',
      'Aumento da capacidade de concentração e foco sustentado',
      'Preservação da autonomia funcional e qualidade de vida',
      'Estimulação de novas vias neurais e reserva cognitiva'
    ],
    approach: 'Treinamento de Funções Executivas e Neuroplasticidade Dirigida',
    duration: 'Sessões de 50 minutos',
    modality: 'Online e Presencial',
    badge: 'Neurociência Aplicada',
    iconName: 'Sparkles'
  }
];

export const CLINICAL_METRICS: MetricStat[] = [
  {
    value: 12,
    suffix: '+ anos',
    label: 'Prática Clínica',
    sublabel: 'Dedicada exclusivamente à saúde mental e neurociência'
  },
  {
    value: 2800,
    suffix: '+',
    label: 'Sessões Realizadas',
    sublabel: 'Com rigor ético, sigilo absoluto e empatia'
  },
  {
    value: 450,
    suffix: '+',
    label: 'Laudos Emitidos',
    sublabel: 'Avaliações neuropsicológicas completas e assertivas'
  },
  {
    value: 99,
    suffix: '%',
    label: 'Conformidade Ética',
    sublabel: 'Inscrita e ativa no Conselho Regional de Psicologia'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'dep-1',
    quote: 'Comecei a terapia quando as crises de pânico me impediam até de dirigir até o trabalho. A sensibilidade da Claudia combinada com a explicação científica de como meu cérebro reagia fez toda a diferença. Hoje sinto que retomei as rédeas da minha vida.',
    patientProfile: 'M. S., 36 anos • Engenheira de Software',
    duration: '1 ano e 2 meses de acompanhamento',
    focusArea: 'Ansiedade e Pânico',
    verified: true
  },
  {
    id: 'dep-2',
    quote: 'A avaliação neuropsicológica foi um divisor de águas. Durante 30 anos convivi com o rótulo de preguiçoso e desatento, sem entender meus lapsos. O laudo da Claudia, com tanta clareza e empatia na devolutiva, me permitiu finalmente iniciar o tratamento certo para TDAH.',
    patientProfile: 'R. G., 32 anos • Advogado',
    duration: 'Avaliação Neuropsicológica Concluída',
    focusArea: 'Diagnóstico de TDAH em Adulto',
    verified: true
  },
  {
    id: 'dep-3',
    quote: 'Eu e meu marido estávamos à beira da separação, nos comunicando apenas por ofensas e cansaço. A terapia de casal com a Claudia nos ensinou a nos enxergarmos novamente com ternura e a resolver conflitos sem nos ferirmos. Salvou a nossa família.',
    patientProfile: 'L. & P., 42 e 45 anos • Casados há 14 anos',
    duration: '8 meses de acompanhamento',
    focusArea: 'Terapia de Casal',
    verified: true
  },
  {
    id: 'dep-4',
    quote: 'Fazer terapia online com a Claudia me transmitiu a mesma segurança e calor humano de estar em seu consultório. A delicadeza na escuta e as provocações reflexivas me ajudaram a superar um luto muito doloroso e a reencontrar sentido.',
    patientProfile: 'C. V., 29 anos • Designer e Nômade Digital',
    duration: 'Atendimento Online no Brasil e Exterior',
    focusArea: 'Psicoterapia Humanizada',
    verified: true
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'primeira-sessao',
    question: 'Como funciona a primeira sessão de psicoterapia?',
    answer: 'A primeira consulta é uma conversa inicial de acolhimento e escuta diagnóstica. É o momento em que você compartilha suas queixas, angústias e o que o trouxe à terapia, em um ambiente seguro e sem julgamentos. Eu explicarei como trabalho, alinharemos os objetivos terapêuticos e você poderá sentir se a relação terapêutica ressoa com você, sem nenhum compromisso prévio.'
  },
  {
    id: 'faq-2',
    category: 'online',
    question: 'A terapia online tem a mesma eficácia que a presencial?',
    answer: 'Sim, com respaldo científico e autorização formal do Conselho Federal de Psicologia (CFP). Estudos internacionais demonstram que a psicoterapia online via videoconferência segura possui eficácia idêntica à modalidade presencial para a vasta maioria das demandas, proporcionando a vantagem do conforto do seu próprio espaço, sem estresse de deslocamento no trânsito.'
  },
  {
    id: 'faq-3',
    category: 'neuropsicologia',
    question: 'Quando é indicada uma Avaliação Neuropsicológica?',
    answer: 'A avaliação é recomendada sempre que há suspeita de transtornos do neurodesenvolvimento (como TDAH e Autismo em adultos), dificuldades persistentes de memória, atenção ou planejamento, queda no rendimento acadêmico/profissional, ou após lesões neurológicas. O processo dura entre 5 e 7 sessões estruturadas e resulta em um laudo técnico robusto para você e sua equipe médica.'
  },
  {
    id: 'faq-4',
    category: 'valores-convenio',
    question: 'Você atende por convênio médico ou fornece recibo para reembolso?',
    answer: 'Os atendimentos são particulares para garantir total dedicação de tempo, sigilo irrestrito e cuidado personalizado sem as pressões de tempo dos planos de saúde. No entanto, emitimos nota fiscal e recibo com todos os dados exigidos pelo Conselho e pela Receita Federal, permitindo que você solicite o reembolso integral ou parcial junto ao seu plano de saúde.'
  },
  {
    id: 'faq-5',
    category: 'primeira-sessao',
    question: 'Qual a frequência das sessões e o tempo de duração?',
    answer: 'As sessões de psicoterapia têm duração média de 50 minutos e ocorrem habitualmente uma vez por semana, sempre em um horário fixo reservado exclusivamente para você. Conforme você alcança maior estabilidade e autonomia emocional, o espaçamento para quinzenal é planejado em conjunto.'
  },
  {
    id: 'faq-6',
    category: 'valores-convenio',
    question: 'Como é garantido o sigilo sobre tudo o que eu disser?',
    answer: 'O sigilo profissional é um dever ético inegociável, resguardado pelo Artigo 9º do Código de Ética Profissional do Psicólogo. Absolutamente nada do que é compartilhado em sessão — seja verbal, escrito ou durante testes — é revelado a terceiros, empregadores ou familiares sem o seu consentimento explícito por escrito.'
  }
];
