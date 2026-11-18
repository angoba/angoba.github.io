export const navLinks = [
  { href: '/posts', label: 'Posts' },
  { href: '/materials', label: 'Materials' }
];

export const materialLinks = [
  { href: '/materials/random/', label: 'Random Fun Problems' },
  { href: '/materials/videos/', label: 'Videos' },
  { href: '/materials/olympiads/', label: 'Olympiads' },
  { href: '/materials/nonolympiads/', label: 'Non-Olympiads' },
  { href: '/materials/usta/', label: 'USTA' },
  { href: '/materials/mit/', label: 'MIT' }
];

// Uses the owner of the GitHub repository when deployed via GitHub Actions.
const githubUsername = process.env.GITHUB_REPOSITORY_OWNER || 'goa';
export const socials = [
  { href: `https://github.com/${githubUsername}`, label: 'GitHub', icon: 'github' }
] as const;
