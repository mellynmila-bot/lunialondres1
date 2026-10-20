export interface ServiceItem {
  id: string;
  name: { pt: string; en: string };
  image: string;
  shortDesc: { pt: string; en: string };
  fullDesc?: { pt: string; en: string };
  tag: { pt: string; en: string };
}

export interface FeedbackItem {
  id: number;
  name: string;
  treatment: { pt: string; en: string };
  quote: { pt: string; en: string };
  rating: number;
}

export interface FaqItem {
  id: number;
  question: { pt: string; en: string };
  answer: { pt: string; en: string };
}

export const siteData = {
  practitionerName: "Lúnia",
  brandName: "Lúnia Aesthetics",
  tagline: {
    pt: "Advanced Aesthetics & Skin Treatments • Skin Health • Brows • Natural Results",
    en: "Advanced Aesthetics & Skin Treatments • Skin Health • Brows • Natural Results"
  },
  locationCity: "Bournemouth, UK",
  locationFull: "Bournemouth, Dorset, United Kingdom",
  studioAddress: "Bournemouth, United Kingdom",
  showAddress: false, // Default false: exact address sent upon confirmation
  whatsappPhone: "447496883210", // International UK format without leading zero
  contactEmail: "contact@luniaaesthetics.co.uk",
  instagramHandle: "lunia.aesthetics",
  instagramUrl: "https://www.instagram.com/lunia.aesthetics/",
  instagramDmUrl: "https://ig.me/m/lunia.aesthetics",
  vipGroupUrl: "https://chat.whatsapp.com/Czo0YvVfH5jLgDqAgUACQz?s=cl&p=i&mlu=4&ilr=4&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgRzcnRjBmFwcF9pZAwyNTYyODEwNDA1NTgAAafb9u7U56c1vIw2lvx0_dAa3n4Fu83xwOEdg4iIYPgvsFQZ0qxt8EJAL1Knew_aem_mFbjjqRtg7acGAdZaM-22w",
  reelUrl: "https://www.instagram.com/reel/DdMYLjftf0k/",
  reelEmbedUrl: "https://www.instagram.com/reel/DdMYLjftf0k/embed",
  spaceReelUrl: "https://www.instagram.com/reel/DdCN9NNtvwd/",
  spaceReelEmbedUrl: "https://www.instagram.com/reel/DdCN9NNtvwd/embed",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=Bournemouth,+United+Kingdom&z=12&output=embed",

  // Legal config: activeOption 'A' (Sole trader) or 'B' (Ltd)
  legal: {
    activeOption: "A",
    optionA: "Lúnia is a sole trader registered in the United Kingdom.",
    optionB: "Lúnia Aesthetics Ltd, Company Registration Number: [XXXXXX], Registered Office: Bournemouth, UK.",
    qualifications: "BSc Biomedical Science (undergraduate)",
    insurance: "Insured Aesthetic Practitioner UK",
    professionalRegistry: ""
  },

  heroImage: "https://i.ibb.co/8Dx1Dj31/Save-Clip-App-825325912-18629663617017732-8901580188990407471-n-1.webp",
  aboutImage: "https://i.ibb.co/8Dx1Dj31/Save-Clip-App-825325912-18629663617017732-8901580188990407471-n-1.webp",

  galleryImages: [
    {
      url: "https://i.ibb.co/4qvPk6W/Remove-the-text-2-K-20261019153159.webp",
      title: { pt: "Premium Repair Brows", en: "Premium Repair Brows" },
      subtitle: { pt: "Nutrição e estímulo folicular", en: "Follicle care & brow vitality" }
    },
    {
      url: "https://i.ibb.co/6cwjhvRQ/Remove-the-text-2-K-20261019153152.webp",
      title: { pt: "Brow Lamination", en: "Brow Lamination" },
      subtitle: { pt: "Alinhamento e definição natural", en: "Natural alignment & definition" }
    },
    {
      url: "https://i.ibb.co/G4WC8Kf7/Save-Clip-App-806428516-2745416732539676-2747887176779661427-n.webp",
      title: { pt: "Preenchimento Labial", en: "Lip Enhancement" },
      subtitle: { pt: "Harmonia, proporção e delicadeza", en: "Harmony, proportion & subtlety" }
    },
    {
      url: "https://i.ibb.co/pBqJs0VT/Save-Clip-App-840287472-18633375154017732-3052411367797647228-n.webp",
      title: { pt: "Design & Harmonia Facial", en: "Facial Harmony & Brows" },
      subtitle: { pt: "Cuidado personalizado e preciso", en: "Personalised, precise care" }
    }
  ],

  services: [
    {
      id: "lip-filler",
      name: { pt: "Preenchimento Labial", en: "Lip Filler" },
      image: "https://i.ibb.co/pBqJs0VT/Save-Clip-App-840287472-18633375154017732-3052411367797647228-n.webp",
      tag: { pt: "Harmonia & Delicadeza", en: "Harmony & Natural Definition" },
      shortDesc: {
        pt: "Realce delicado e proporcional dos lábios, com foco em naturalidade, harmonia e definição. O plano é desenhado após avaliação do seu rosto, das suas proporções e do resultado que deseja.",
        en: "A delicate, proportionate enhancement of the lips, focused on naturalness, harmony and definition. Your plan is designed after assessing your face, proportions and the result you want."
      }
    },
    {
      id: "premium-repair-brows",
      name: { pt: "Premium Repair Brows", en: "Premium Repair Brows" },
      image: "https://i.ibb.co/4qvPk6W/Remove-the-text-2-K-20261019153159.webp",
      tag: { pt: "Saúde & Recuperação Folicular", en: "Follicle Health & Recovery" },
      shortDesc: {
        pt: "As sobrancelhas mudam ao longo dos anos. O Premium Repair foi desenvolvido para nutrir a saúde dos folículos e criar um ambiente que favorece o fortalecimento e o crescimento dos fios.",
        en: "Our eyebrows change over the years. Premium Repair was developed to nurture follicle health and create an environment that fosters hair strengthening and growth."
      },
      fullDesc: {
        pt: "Envelhecimento, alterações hormonais, excesso de modelagem, depilações frequentes, estresse e até fatores genéticos podem deixar os fios mais finos e fracos, e algumas áreas perderem densidade. O tratamento combina técnicas específicas com ativos de alta performance para:\n\n• Fortalecer fios enfraquecidos\n• Estimular a renovação na região das sobrancelhas\n• Melhorar a qualidade e a espessura dos fios\n• Recuperar sobrancelhas danificadas pelo excesso de pinça\n• Auxiliar quem deseja sobrancelhas mais cheias e naturais.\n\n✨ Importante: os resultados variam de pessoa para pessoa. O crescimento de novos fios depende da presença de folículos ativos e da resposta biológica de cada pessoa. Por isso, a avaliação inicial é essencial. Sobrancelhas bonitas começam com sobrancelhas saudáveis. 💚 📍 Bournemouth",
        en: "Our eyebrows change over the years. Due to aging, hormonal changes, over-shaping, frequent hair removal, stress, and even genetic factors, it is common for brow hairs to become thinner and weaker, and for some areas to lose density.\n\nPremium Repair was developed to nurture follicle health and create an environment that fosters hair strengthening and growth. The treatment combines specific techniques with high-performance active ingredients to:\n\n• Strengthen weakened hairs\n• Stimulate renewal in the brow area\n• Improve hair quality and thickness\n• Restore eyebrows damaged by over-plucking\n• Assist those desiring fuller, more natural-looking eyebrows.\n\nImportant: Results vary from person to person. New hair growth depends on the presence of active follicles and each individual’s biological response. Therefore, an initial assessment is essential. Beautiful eyebrows start with healthy eyebrows. 💚 Book your assessment and discover the recovery potential of your eyebrows."
      }
    },
    {
      id: "brow-lamination",
      name: { pt: "Brow Lamination", en: "Brow Lamination" },
      image: "https://i.ibb.co/G4WC8Kf7/Save-Clip-App-806428516-2745416732539676-2747887176779661427-n.webp",
      tag: { pt: "Alinhamento & Volume Natural", en: "Alignment & Natural Volume" },
      shortDesc: {
        pt: "Alinha e disciplina os fios na direção desejada, criando sobrancelhas mais preenchidas, penteadas e definidas, com acabamento natural. Indicada após avaliação do tipo de fio e da sua pele.",
        en: "Aligns and sets the hairs in the desired direction for fuller, brushed-up, defined brows with a natural finish. Recommended after assessing your hair type and skin."
      }
    }
  ],

  feedbacks: [
    {
      id: 1,
      name: "Camila R.",
      treatment: { pt: "Preenchimento labial", en: "Lip Filler" },
      quote: {
        pt: "Ficou natural, na medida certa. Me explicou tudo com calma e me senti segura.",
        en: "It looked so natural, perfectly proportioned. She explained everything calmly and I felt completely safe."
      },
      rating: 5
    },
    {
      id: 2,
      name: "Sophie M.",
      treatment: { pt: "Premium Repair Brows", en: "Premium Repair Brows" },
      quote: {
        pt: "Atendimento muito cuidadoso. Gostei de entender o processo desde a avaliação.",
        en: "Very attentive and gentle care. I loved understanding the scientific process right from the assessment."
      },
      rating: 5
    },
    {
      id: 3,
      name: "Fernanda L.",
      treatment: { pt: "Brow Lamination", en: "Brow Lamination" },
      quote: {
        pt: "Minhas sobrancelhas ficaram penteadas e definidas, do jeito que eu queria.",
        en: "My eyebrows look fluffy, disciplined and defined, exactly the way I wanted."
      },
      rating: 5
    },
    {
      id: 4,
      name: "Juliana P.",
      treatment: { pt: "Avaliação Personalizada", en: "Personalised Assessment" },
      quote: {
        pt: "Ambiente lindo, acolhedor e super profissional. Recomendo.",
        en: "Beautiful, welcoming and deeply professional atmosphere. Highly recommended."
      },
      rating: 5
    },
    {
      id: 5,
      name: "Emma T.",
      treatment: { pt: "Preenchimento labial", en: "Lip Filler" },
      quote: {
        pt: "Ela ouviu atentamente o que eu desejava e manteve tudo supernatural. Uma experiência encantadora.",
        en: "She listened to what I wanted and kept everything natural. Lovely experience."
      },
      rating: 5
    },
    {
      id: 6,
      name: "Mariana S.",
      treatment: { pt: "Premium Repair Brows", en: "Premium Repair Brows" },
      quote: {
        pt: "Cuidado, delicadeza e muita transparência sobre o que esperar. Adorei.",
        en: "Care, delicacy and absolute transparency on realistic expectations. Loved it."
      },
      rating: 5
    }
  ],

  studioCards: [
    {
      title: { pt: "Segurança e higiene", en: "Safety & Hygiene" },
      desc: {
        pt: "Protocolos clínicos rigorosos, uso de descartáveis e esterilização hospitalar de cada material.",
        en: "Rigorous clinical protocols, single-use disposables, and hospital-grade sanitisation."
      }
    },
    {
      title: { pt: "Tecnologia e produtos de qualidade", en: "High-grade Products & Actives" },
      desc: {
        pt: "Ativos premium e equipamentos selecionados para entregar máxima performance e segurança.",
        en: "Premium active ingredients and selected equipment delivering high performance and safety."
      }
    },
    {
      title: { pt: "Privacidade absoluta", en: "Complete Privacy" },
      desc: {
        pt: "Atendimento 100% individual e reservado. Você tem o espaço e o tempo dedicados exclusivamente a você.",
        en: "100% individual and private appointments. The space and time are dedicated exclusively to you."
      }
    },
    {
      title: { pt: "Conforto & Acolhimento", en: "Comfort & Warmth" },
      desc: {
        pt: "Ambiente calmo, iluminado e pensado para proporcionar uma experiência serena e agradável.",
        en: "A serene, calming environment designed to provide a gentle and relaxing experience."
      }
    },
    {
      title: { pt: "Ótima localização", en: "Prime Bournemouth Location" },
      desc: {
        pt: "Localizado em Bournemouth, de fácil acesso para quem vem de Poole, Christchurch e região.",
        en: "Conveniently located in Bournemouth with smooth access from Poole, Christchurch, and Dorset."
      }
    },
    {
      title: { pt: "Avaliação personalizada", en: "Bespoke Clinical Assessment" },
      desc: {
        pt: "Cada rosto é único. O plano de tratamento respeita sua harmonia, seus traços e sua saúde.",
        en: "Every face is unique. Your treatment plan honours your natural balance, features, and skin health."
      }
    }
  ],

  faqs: [
    {
      id: 1,
      question: {
        pt: "Como faço para agendar?",
        en: "How do I book an appointment?"
      },
      answer: {
        pt: "Pela DM do Instagram ou pelo WhatsApp. Você pode preencher o mini formulário neste site para já nos enviar suas preferências e dúvidas organizadas.",
        en: "Via Instagram DM or WhatsApp. You can fill out the booking form on this website to send your details and preferred times directly."
      }
    },
    {
      id: 2,
      question: {
        pt: "Preciso fazer avaliação antes?",
        en: "Do I need an initial consultation before treatment?"
      },
      answer: {
        pt: "Sim, a avaliação inicial é essencial. Ela permite analisar sua anatomia, histórico de saúde, expectativas e indicar o plano mais seguro e harmonioso para você.",
        en: "Yes, an initial assessment is essential. It enables a thorough review of your skin, health history, and goals to design the safest and most flattering plan."
      }
    },
    {
      id: 3,
      question: {
        pt: "O que é o Premium Repair Brows?",
        en: "What is Premium Repair Brows?"
      },
      answer: {
        pt: "É um protocolo especializado que combina técnicas de estímulo folicular com ativos de alta performance para fortalecer fios enfraquecidos e melhorar a qualidade das sobrancelhas.",
        en: "It is a specialised brow treatment combining targeted follicle stimulation techniques with high-performance actives to strengthen weakened hairs and enhance brow quality."
      }
    },
    {
      id: 4,
      question: {
        pt: "O Premium Repair garante novos fios?",
        en: "Does Premium Repair guarantee new hair growth?"
      },
      answer: {
        pt: "Não. Na estética responsável não existem garantias absolutas. Os resultados variam de pessoa para pessoa, pois o crescimento depende da existência de folículos ativos e da resposta biológica individual.",
        en: "No. Responsible aesthetic practice makes no absolute guarantees. Results vary, as new growth depends on the presence of active follicles and individual biological response."
      }
    },
    {
      id: 5,
      question: {
        pt: "O que é Brow Lamination?",
        en: "What is Brow Lamination?"
      },
      answer: {
        pt: "É uma técnica que alinha e disciplina os fios na direção desejada, proporcionando um efeito de sobrancelhas mais preenchidas, penteadas e definidas, com acabamento muito natural.",
        en: "It is a technique that sets and aligns natural brow hairs in the desired direction, creating a fuller, groomed, and defined finish while preserving natural movement."
      }
    },
    {
      id: 6,
      question: {
        pt: "O preenchimento labial fica natural?",
        en: "Will lip filler look natural?"
      },
      answer: {
        pt: "Sim. A filosofia da Lúnia é realçar o que já é seu sem transformar ou exagerar. O volume e a definição são dosados com critério para respeitar a harmonia do seu rosto.",
        en: "Yes. Lúnia's philosophy is strictly natural enhancement. Volume and definition are calibrated with scientific precision to respect your unique facial proportions."
      }
    },
    {
      id: 7,
      question: {
        pt: "Há idade mínima para os procedimentos?",
        en: "Is there a minimum age for treatments?"
      },
      answer: {
        pt: "Sim. Todos os procedimentos são realizados exclusivamente para maiores de 18 anos, em total conformidade com as diretrizes e legislação do Reino Unido.",
        en: "Yes. All treatments are strictly for adults aged 18 and older, fully complying with United Kingdom regulations."
      }
    },
    {
      id: 8,
      question: {
        pt: "Quais cuidados devo ter antes e depois?",
        en: "What aftercare should I follow?"
      },
      answer: {
        pt: "Todas as orientações pré e pós-procedimento são explicadas detalhadamente durante a sua consulta e enviadas por mensagem para você acompanhar com total segurança.",
        en: "Complete pre-treatment and post-care guidance will be provided during your consultation and sent to you directly so you can care for your results safely."
      }
    },
    {
      id: 9,
      question: {
        pt: "Quanto custa o tratamento?",
        en: "How much does a treatment cost?"
      },
      answer: {
        pt: "Os valores são confirmados durante a avaliação personalizada, de acordo com as necessidades específicas da sua pele, o volume necessário e o plano terapêutico definido.",
        en: "Exact pricing is confirmed during your bespoke consultation, tailored to your specific treatment plan, product volume, and skin goals."
      }
    },
    {
      id: 10,
      question: {
        pt: "Onde fica o studio?",
        en: "Where is the studio located?"
      },
      answer: {
        pt: "O studio fica em Bournemouth, Reino Unido. O endereço completo e instruções de acesso e estacionamento são enviados após a confirmação do seu agendamento.",
        en: "The studio is in Bournemouth, United Kingdom. Full address details, transport links, and parking information are provided upon appointment confirmation."
      }
    },
    {
      id: 11,
      question: {
        pt: "O que é o Grupo VIP?",
        en: "What is the VIP Group?"
      },
      answer: {
        pt: "É uma comunidade exclusiva no WhatsApp onde compartilhamos oportunidades para modelos de procedimentos, condições especiais, novidades em primeira mão e abertura de agenda.",
        en: "It is an exclusive WhatsApp group where members receive priority access to model opportunities, private specials, announcements, and agenda openings."
      }
    },
    {
      id: 12,
      question: {
        pt: "E se eu precisar remarcar ou cancelar?",
        en: "What if I need to reschedule or cancel?"
      },
      answer: {
        pt: "Pedimos a gentileza de avisar com a máxima antecedência possível (mínimo de 48 horas de preferência) para podermos disponibilizar o horário a outra cliente.",
        en: "Please inform us as soon as possible (ideally 48 hours in advance) so that the slot can be offered to another client."
      }
    }
  ]
};
