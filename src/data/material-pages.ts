// The original material categories are preserved. Empty sections are intentional;
// only link to pages that already have notes available.
export const materialPages = {
  random: {
    title: 'Random Fun Problems',
    sections: []
  },
  videos: {
    title: 'Videos',
    sections: []
  },
  olympiads: {
    title: 'Olympiads',
    sections: []
  },
  nonolympiads: {
    title: 'Non-Olympiads',
    sections: []
  },
  usta: {
    title: 'USTA',
    sections: [
      {
        title: 'Statistics',
        items: [
          { label: 'Inferencia Estadística', href: '/materials/usta/inferencia-estadistica/' },
          { label: 'Modelos Lineales', href: '/materials/usta/modelos-lineales/' },
          { label: 'Estadística Multivariada', href: '/materials/usta/estadistica-multivariada/' },
          { label: 'Estadística No Paramétrica', href: '/materials/usta/estadistica-no-parametrica/' }
        ]
      }
    ]
  },
  mit: {
    title: 'MIT',
    sections: [
      {
        title: 'Computer Science',
        items: [
          { label: 'Mathematics for Computer Science (6.042J)', href: '/materials/mit/mathematics-for-cs/' },
          { label: 'Introduction to Algorithms (6.006)', href: '/materials/mit/intro-to-algorithms/' }
        ]
      }
    ]
  }
} as const;

export type MaterialPageKey = keyof typeof materialPages;
