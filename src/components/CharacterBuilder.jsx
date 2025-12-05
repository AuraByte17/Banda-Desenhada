// Sistema de personagens modulares - corpo base + acessórios
export const skinTones = [
  { id: 'light1', name: 'Muito Claro', color: '#FFE4C4' },
  { id: 'light2', name: 'Claro', color: '#FDBF60' },
  { id: 'medium1', name: 'Médio Claro', color: '#E8B87D' },
  { id: 'medium2', name: 'Médio', color: '#DDA15E' },
  { id: 'tan', name: 'Bronzeado', color: '#BC6C25' },
  { id: 'dark1', name: 'Escuro', color: '#8B5A2B' },
  { id: 'dark2', name: 'Muito Escuro', color: '#5C4033' },
  { id: 'deep', name: 'Profundo', color: '#3D2314' },
];

export const hairStyles = [
  { id: 'none', name: 'Careca', svg: () => '' },
  { id: 'short', name: 'Curto', svg: (color) => `<path d="M22 40 Q22 18 50 15 Q78 18 78 40 L75 42 Q65 32 50 30 Q35 32 25 42 Z" fill="${color}"/>` },
  { id: 'spiky', name: 'Espetado', svg: (color) => `<path d="M25 42 L28 18 L35 32 L42 10 L50 28 L58 10 L65 32 L72 18 L75 42 Q60 35 50 33 Q40 35 25 42" fill="${color}"/>` },
  { id: 'long', name: 'Comprido', svg: (color) => `<path d="M20 40 Q20 18 50 12 Q80 18 80 40 L82 80 Q75 85 72 75 L74 50 Q50 48 26 50 L28 75 Q25 85 18 80 Z" fill="${color}"/>` },
  { id: 'ponytail', name: 'Rabo Cavalo', svg: (color) => `<path d="M22 40 Q22 18 50 15 Q78 18 78 40 Q65 32 50 30 Q35 32 22 40" fill="${color}"/><ellipse cx="82" cy="55" rx="6" ry="25" fill="${color}"/>` },
  { id: 'curly', name: 'Caracóis', svg: (color) => `<circle cx="28" cy="28" r="12" fill="${color}"/><circle cx="50" cy="20" r="14" fill="${color}"/><circle cx="72" cy="28" r="12" fill="${color}"/><circle cx="22" cy="42" r="10" fill="${color}"/><circle cx="78" cy="42" r="10" fill="${color}"/>` },
  { id: 'bun', name: 'Coque', svg: (color) => `<path d="M22 40 Q22 18 50 15 Q78 18 78 40 Q65 32 50 30 Q35 32 22 40" fill="${color}"/><circle cx="50" cy="10" r="14" fill="${color}"/>` },
  { id: 'mohawk', name: 'Moicano', svg: (color) => `<path d="M42 42 L44 8 L50 20 L56 8 L58 42 Q52 38 50 38 Q48 38 42 42" fill="${color}"/>` },
  { id: 'pigtails', name: 'Maria-Chiquinha', svg: (color) => `<path d="M22 40 Q22 18 50 15 Q78 18 78 40 Q65 32 50 30 Q35 32 22 40" fill="${color}"/><ellipse cx="15" cy="50" rx="8" ry="18" fill="${color}"/><ellipse cx="85" cy="50" rx="8" ry="18" fill="${color}"/>` },
  { id: 'afro', name: 'Afro', svg: (color) => `<circle cx="50" cy="35" r="38" fill="${color}"/>` },
  { id: 'wavy', name: 'Ondulado', svg: (color) => `<path d="M18 45 Q15 20 50 12 Q85 20 82 45 Q80 55 75 70 Q72 80 65 75 Q68 60 70 50 Q50 48 30 50 Q32 60 35 75 Q28 80 25 70 Q20 55 18 45" fill="${color}"/>` },
  { id: 'bob', name: 'Chanel', svg: (color) => `<path d="M18 42 Q18 18 50 12 Q82 18 82 42 L85 65 Q75 70 70 60 L70 48 Q50 45 30 48 L30 60 Q25 70 15 65 Z" fill="${color}"/>` },
];

export const hairColors = [
  { id: 'black', name: 'Preto', color: '#1a1a2e' },
  { id: 'brown', name: 'Castanho', color: '#5D4037' },
  { id: 'blonde', name: 'Loiro', color: '#FFD54F' },
  { id: 'red', name: 'Ruivo', color: '#BF360C' },
  { id: 'gray', name: 'Grisalho', color: '#9E9E9E' },
  { id: 'white', name: 'Branco', color: '#EEEEEE' },
  { id: 'blue', name: 'Azul', color: '#1976D2' },
  { id: 'pink', name: 'Rosa', color: '#E91E63' },
  { id: 'purple', name: 'Roxo', color: '#7B1FA2' },
  { id: 'green', name: 'Verde', color: '#388E3C' },
];

export const outfits = [
  { 
    id: 'casual', 
    name: 'Casual', 
    svg: (color1, color2) => `
      <path d="M25 78 L22 135 L40 135 L42 100 L58 100 L60 135 L78 135 L75 78 Q50 88 25 78" fill="${color2}"/>
      <path d="M25 78 L12 88 L18 100 L25 95 L25 105 L75 105 L75 95 L82 100 L88 88 L75 78 Q50 88 25 78" fill="${color1}"/>
    `
  },
  { 
    id: 'tshirt', 
    name: 'T-Shirt', 
    svg: (color1, color2) => `
      <path d="M25 78 L22 135 L40 135 L42 100 L58 100 L60 135 L78 135 L75 78 Q50 88 25 78" fill="${color2}"/>
      <path d="M25 78 L8 90 L15 105 L25 98 L25 115 L75 115 L75 98 L85 105 L92 90 L75 78 Q50 88 25 78" fill="${color1}"/>
    `
  },
  { 
    id: 'dress', 
    name: 'Vestido', 
    svg: (color1) => `
      <path d="M25 78 L10 135 L90 135 L75 78 Q50 88 25 78" fill="${color1}"/>
      <path d="M25 78 L12 88 L20 95 L28 90 L72 90 L80 95 L88 88 L75 78 Q50 88 25 78" fill="${color1}"/>
      <ellipse cx="50" cy="95" rx="18" ry="3" fill="${color1}" style="filter: brightness(0.85)"/>
    `
  },
  { 
    id: 'suit', 
    name: 'Fato', 
    svg: (color1, color2) => `
      <path d="M25 78 L22 135 L40 135 L42 105 L58 105 L60 135 L78 135 L75 78 Q50 88 25 78" fill="${color1}"/>
      <path d="M40 78 L50 105 L60 78" fill="${color2}"/>
      <path d="M44 88 L50 100 L56 88" fill="${color1}"/>
      <circle cx="50" cy="108" r="3" fill="${color2}"/>
      <circle cx="50" cy="118" r="3" fill="${color2}"/>
    `
  },
  { 
    id: 'hoodie', 
    name: 'Capuz', 
    svg: (color1) => `
      <path d="M25 78 L22 135 L78 135 L75 78 Q50 88 25 78" fill="${color1}"/>
      <path d="M25 78 L12 90 L18 105 L25 98 L75 98 L82 105 L88 90 L75 78 Q50 88 25 78" fill="${color1}"/>
      <ellipse cx="50" cy="110" rx="12" ry="8" fill="${color1}" style="filter: brightness(0.9)"/>
      <path d="M38 110 L38 125 M62 110 L62 125" stroke="${color1}" stroke-width="6" style="filter: brightness(0.8)"/>
    `
  },
  { 
    id: 'doctor', 
    name: 'Médico', 
    svg: () => `
      <path d="M25 78 L22 135 L78 135 L75 78 Q50 88 25 78" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1"/>
      <path d="M25 78 L12 88 L18 100 L25 95 L75 95 L82 100 L88 88 L75 78 Q50 88 25 78" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1"/>
      <path d="M38 82 Q30 92 33 108" stroke="#1565C0" stroke-width="3" fill="none"/>
      <circle cx="33" cy="112" r="5" fill="#1565C0"/>
    `
  },
  { 
    id: 'police', 
    name: 'Polícia', 
    svg: () => `
      <path d="M25 78 L22 135 L78 135 L75 78 Q50 88 25 78" fill="#1565C0"/>
      <path d="M25 78 L12 88 L18 100 L25 95 L75 95 L82 100 L88 88 L75 78 Q50 88 25 78" fill="#1565C0"/>
      <polygon points="50,88 44,100 50,106 56,100" fill="#FFD700"/>
      <rect x="30" y="110" width="40" height="5" fill="#0D47A1"/>
    `
  },
  { 
    id: 'firefighter', 
    name: 'Bombeiro', 
    svg: () => `
      <path d="M25 78 L22 135 L78 135 L75 78 Q50 88 25 78" fill="#D84315"/>
      <path d="M25 78 L12 88 L18 100 L25 95 L75 95 L82 100 L88 88 L75 78 Q50 88 25 78" fill="#D84315"/>
      <rect x="28" y="100" width="44" height="6" fill="#FFD54F"/>
      <rect x="28" y="118" width="44" height="6" fill="#FFD54F"/>
    `
  },
  { 
    id: 'chef', 
    name: 'Cozinheiro', 
    svg: () => `
      <path d="M25 78 L22 135 L78 135 L75 78 Q50 88 25 78" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="1"/>
      <circle cx="38" cy="98" r="3" fill="#1a1a2e"/>
      <circle cx="50" cy="98" r="3" fill="#1a1a2e"/>
      <circle cx="62" cy="98" r="3" fill="#1a1a2e"/>
      <path d="M38 80 L50 92 L62 80" fill="#D32F2F"/>
    `
  },
  { 
    id: 'superhero', 
    name: 'Super-herói', 
    svg: (color1, color2) => `
      <path d="M25 78 L22 135 L78 135 L75 78 Q50 88 25 78" fill="${color1}"/>
      <path d="M25 78 L12 88 L18 100 L25 95 L75 95 L82 100 L88 88 L75 78 Q50 88 25 78" fill="${color1}"/>
      <path d="M30 135 L20 150 Q50 160 80 150 L70 135" fill="${color1}"/>
      <polygon points="50,88 43,105 50,112 57,105" fill="#FFD700"/>
      <path d="M35 85 L25 78 M65 85 L75 78" stroke="${color1}" stroke-width="5"/>
    `
  },
  { 
    id: 'student', 
    name: 'Estudante', 
    svg: (color1, color2) => `
      <path d="M25 78 L22 135 L78 135 L75 78 Q50 88 25 78" fill="${color2}"/>
      <path d="M25 78 L15 88 L22 98 L25 95 L75 95 L78 98 L85 88 L75 78 Q50 88 25 78" fill="#FFFFFF" stroke="#E0E0E0"/>
      <path d="M45 78 L50 95 L55 78" fill="${color1}"/>
      <rect x="42" y="95" width="16" height="40" fill="${color1}"/>
    `
  },
  { 
    id: 'athlete', 
    name: 'Atleta', 
    svg: (color1, color2) => `
      <path d="M25 78 L22 120 L78 120 L75 78 Q50 88 25 78" fill="${color1}"/>
      <path d="M22 120 L20 135 L38 135 L40 120" fill="${color2}"/>
      <path d="M60 120 L62 135 L80 135 L78 120" fill="${color2}"/>
      <text x="50" y="105" font-size="18" font-weight="bold" fill="${color2}" text-anchor="middle">10</text>
    `
  },
];

export const outfitColors = [
  { id: 'red', name: 'Vermelho', color: '#F44336' },
  { id: 'blue', name: 'Azul', color: '#2196F3' },
  { id: 'green', name: 'Verde', color: '#4CAF50' },
  { id: 'yellow', name: 'Amarelo', color: '#FFEB3B' },
  { id: 'purple', name: 'Roxo', color: '#9C27B0' },
  { id: 'orange', name: 'Laranja', color: '#FF9800' },
  { id: 'pink', name: 'Rosa', color: '#E91E63' },
  { id: 'teal', name: 'Verde-azulado', color: '#009688' },
  { id: 'brown', name: 'Castanho', color: '#795548' },
  { id: 'gray', name: 'Cinzento', color: '#607D8B' },
  { id: 'black', name: 'Preto', color: '#212121' },
  { id: 'white', name: 'Branco', color: '#FAFAFA' },
];

export const accessories = [
  { id: 'none', name: 'Nenhum', svg: '' },
  { id: 'glasses', name: 'Óculos', svg: `<rect x="30" y="40" rx="4" width="16" height="12" fill="none" stroke="#1a1a2e" stroke-width="2.5"/><rect x="54" y="40" rx="4" width="16" height="12" fill="none" stroke="#1a1a2e" stroke-width="2.5"/><line x1="46" y1="46" x2="54" y2="46" stroke="#1a1a2e" stroke-width="2.5"/><line x1="22" y1="46" x2="30" y2="46" stroke="#1a1a2e" stroke-width="2"/><line x1="70" y1="46" x2="78" y2="46" stroke="#1a1a2e" stroke-width="2"/>` },
  { id: 'sunglasses', name: 'Óculos Sol', svg: `<path d="M28 40 L46 40 L44 54 L30 54 Z" fill="#1a1a2e"/><path d="M54 40 L72 40 L70 54 L56 54 Z" fill="#1a1a2e"/><line x1="46" y1="46" x2="54" y2="46" stroke="#1a1a2e" stroke-width="3"/><line x1="20" y1="44" x2="28" y2="44" stroke="#1a1a2e" stroke-width="2"/><line x1="72" y1="44" x2="80" y2="44" stroke="#1a1a2e" stroke-width="2"/>` },
  { id: 'roundglasses', name: 'Óculos Redondos', svg: `<circle cx="38" cy="46" r="10" fill="none" stroke="#8B4513" stroke-width="2.5"/><circle cx="62" cy="46" r="10" fill="none" stroke="#8B4513" stroke-width="2.5"/><line x1="48" y1="46" x2="52" y2="46" stroke="#8B4513" stroke-width="2.5"/><line x1="20" y1="44" x2="28" y2="46" stroke="#8B4513" stroke-width="2"/><line x1="72" y1="46" x2="80" y2="44" stroke="#8B4513" stroke-width="2"/>` },
  { id: 'hat', name: 'Chapéu', svg: `<ellipse cx="50" cy="20" rx="32" ry="6" fill="#5D4037"/><path d="M32 20 Q32 2 50 2 Q68 2 68 20" fill="#5D4037"/><rect x="32" y="16" width="36" height="6" fill="#3E2723"/>` },
  { id: 'cap', name: 'Boné', svg: `<path d="M22 32 Q28 12 50 10 Q72 12 78 32 L78 38 L22 38 Z" fill="#F44336"/><path d="M22 35 L5 42 L8 35 L22 32" fill="#C62828"/><ellipse cx="50" cy="15" rx="8" ry="5" fill="#F44336"/>` },
  { id: 'crown', name: 'Coroa', svg: `<path d="M28 22 L28 8 L36 18 L50 2 L64 18 L72 8 L72 22 Z" fill="#FFD700"/><rect x="28" y="18" width="44" height="8" fill="#FFC107"/><circle cx="36" cy="8" r="3" fill="#E91E63"/><circle cx="50" cy="2" r="3" fill="#E91E63"/><circle cx="64" cy="8" r="3" fill="#E91E63"/>` },
  { id: 'bow', name: 'Laço', svg: `<ellipse cx="30" cy="18" rx="12" ry="8" fill="#E91E63"/><ellipse cx="70" cy="18" rx="12" ry="8" fill="#E91E63"/><circle cx="50" cy="18" r="6" fill="#C2185B"/>` },
  { id: 'headphones', name: 'Auscultadores', svg: `<path d="M20 48 Q18 25 50 18 Q82 25 80 48" stroke="#37474F" stroke-width="5" fill="none"/><rect x="12" y="42" width="12" height="20" rx="4" fill="#37474F"/><rect x="76" y="42" width="12" height="20" rx="4" fill="#37474F"/><rect x="14" y="46" width="8" height="12" rx="2" fill="#E0E0E0"/>` },
  { id: 'earrings', name: 'Brincos', svg: `<circle cx="18" cy="55" r="5" fill="#FFD700"/><circle cx="82" cy="55" r="5" fill="#FFD700"/><path d="M18 60 L18 68 L16 72 L18 68 L20 72 L18 68" stroke="#FFD700" stroke-width="2" fill="none"/>` },
  { id: 'beard', name: 'Barba', svg: `<path d="M28 58 Q32 78 50 82 Q68 78 72 58 Q68 65 50 68 Q32 65 28 58" fill="#5D4037"/><path d="M35 58 Q50 62 65 58 Q60 55 50 56 Q40 55 35 58" fill="#5D4037"/>` },
  { id: 'mustache', name: 'Bigode', svg: `<path d="M32 60 Q38 65 50 62 Q62 65 68 60 Q62 68 50 66 Q38 68 32 60" fill="#5D4037"/>` },
  { id: 'goatee', name: 'Pera', svg: `<path d="M42 62 Q50 60 58 62 L58 72 Q50 78 42 72 Z" fill="#5D4037"/>` },
  { id: 'scarf', name: 'Cachecol', svg: `<path d="M20 72 Q50 80 80 72 L82 78 Q50 88 18 78 Z" fill="#E91E63"/><rect x="72" y="78" width="10" height="25" rx="3" fill="#E91E63"/>` },
  { id: 'mask', name: 'Máscara', svg: `<path d="M25 42 L50 35 L75 42 L75 52 L50 58 L25 52 Z" fill="#1a1a2e"/><ellipse cx="38" cy="46" rx="8" ry="5" fill="white"/><ellipse cx="62" cy="46" rx="8" ry="5" fill="white"/>` },
];

export const expressions = [
  { 
    id: 'happy', 
    name: 'Feliz', 
    eyes: `<ellipse cx="38" cy="45" rx="6" ry="7" fill="white"/><ellipse cx="62" cy="45" rx="6" ry="7" fill="white"/><circle cx="39" cy="46" r="3" fill="#1a1a2e"/><circle cx="63" cy="46" r="3" fill="#1a1a2e"/>`,
    mouth: `<path d="M38 60 Q50 72 62 60" stroke="#1a1a2e" stroke-width="2" fill="none"/>`
  },
  { 
    id: 'sad', 
    name: 'Triste', 
    eyes: `<ellipse cx="38" cy="45" rx="6" ry="7" fill="white"/><ellipse cx="62" cy="45" rx="6" ry="7" fill="white"/><circle cx="39" cy="46" r="3" fill="#1a1a2e"/><circle cx="63" cy="46" r="3" fill="#1a1a2e"/>`,
    mouth: `<path d="M38 68 Q50 58 62 68" stroke="#1a1a2e" stroke-width="2" fill="none"/>`
  },
  { 
    id: 'angry', 
    name: 'Zangado', 
    eyes: `<ellipse cx="38" cy="45" rx="6" ry="7" fill="white"/><ellipse cx="62" cy="45" rx="6" ry="7" fill="white"/><circle cx="39" cy="46" r="3" fill="#1a1a2e"/><circle cx="63" cy="46" r="3" fill="#1a1a2e"/><line x1="30" y1="38" x2="45" y2="42" stroke="#1a1a2e" stroke-width="2"/><line x1="70" y1="38" x2="55" y2="42" stroke="#1a1a2e" stroke-width="2"/>`,
    mouth: `<path d="M38 65 L62 65" stroke="#1a1a2e" stroke-width="2"/>`
  },
  { 
    id: 'surprised', 
    name: 'Surpreendido', 
    eyes: `<ellipse cx="38" cy="45" rx="8" ry="9" fill="white"/><ellipse cx="62" cy="45" rx="8" ry="9" fill="white"/><circle cx="38" cy="45" r="4" fill="#1a1a2e"/><circle cx="62" cy="45" r="4" fill="#1a1a2e"/>`,
    mouth: `<ellipse cx="50" cy="65" rx="6" ry="8" fill="#1a1a2e"/>`
  },
  { 
    id: 'wink', 
    name: 'Piscar', 
    eyes: `<ellipse cx="38" cy="45" rx="6" ry="7" fill="white"/><circle cx="39" cy="46" r="3" fill="#1a1a2e"/><path d="M56 45 Q62 42 68 45" stroke="#1a1a2e" stroke-width="2" fill="none"/>`,
    mouth: `<path d="M38 60 Q50 70 62 60" stroke="#1a1a2e" stroke-width="2" fill="none"/>`
  },
  { 
    id: 'laughing', 
    name: 'A rir', 
    eyes: `<path d="M32 42 Q38 48 44 42" stroke="#1a1a2e" stroke-width="2" fill="none"/><path d="M56 42 Q62 48 68 42" stroke="#1a1a2e" stroke-width="2" fill="none"/>`,
    mouth: `<path d="M35 60 Q50 78 65 60" fill="#1a1a2e"/><path d="M40 65 Q50 60 60 65" fill="#E91E63"/>`
  },
  { 
    id: 'crying', 
    name: 'A chorar', 
    eyes: `<ellipse cx="38" cy="45" rx="6" ry="7" fill="white"/><ellipse cx="62" cy="45" rx="6" ry="7" fill="white"/><circle cx="39" cy="46" r="3" fill="#1a1a2e"/><circle cx="63" cy="46" r="3" fill="#1a1a2e"/><path d="M32 50 Q30 60 35 70" stroke="#4FC3F7" stroke-width="3" fill="none"/><path d="M68 50 Q70 60 65 70" stroke="#4FC3F7" stroke-width="3" fill="none"/>`,
    mouth: `<path d="M38 68 Q50 58 62 68" stroke="#1a1a2e" stroke-width="2" fill="none"/>`
  },
  { 
    id: 'thinking', 
    name: 'A pensar', 
    eyes: `<ellipse cx="38" cy="45" rx="6" ry="7" fill="white"/><ellipse cx="62" cy="45" rx="6" ry="7" fill="white"/><circle cx="41" cy="46" r="3" fill="#1a1a2e"/><circle cx="65" cy="46" r="3" fill="#1a1a2e"/>`,
    mouth: `<path d="M45 63 Q52 60 58 65" stroke="#1a1a2e" stroke-width="2" fill="none"/>`
  },
];

// Gerar SVG completo do personagem
export const generateCharacterSVG = (config) => {
  const {
    skinTone = '#FDBF60',
    hairStyle = 'short',
    hairColor = '#5D4037',
    outfit = 'casual',
    outfitColor1 = '#2196F3',
    outfitColor2 = '#1565C0',
    accessory = 'none',
    expression = 'happy'
  } = config;

  const hairSvg = hairStyles.find(h => h.id === hairStyle);
  const outfitSvg = outfits.find(o => o.id === outfit);
  const accessorySvg = accessories.find(a => a.id === accessory);
  const expressionData = expressions.find(e => e.id === expression);

  // Determinar se o acessório cobre a cabeça (desenhar cabelo por baixo)
  const headAccessories = ['hat', 'cap', 'crown', 'bow', 'headphones', 'mask'];
  const isHeadAccessory = headAccessories.includes(accessory);

  return `<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
    <!-- Corpo/Roupa -->
    ${outfitSvg ? outfitSvg.svg(outfitColor1, outfitColor2) : ''}
    
    <!-- Pescoço -->
    <rect x="42" y="68" width="16" height="14" fill="${skinTone}"/>
    
    <!-- Orelhas -->
    <ellipse cx="20" cy="48" rx="6" ry="8" fill="${skinTone}"/>
    <ellipse cx="80" cy="48" rx="6" ry="8" fill="${skinTone}"/>
    
    <!-- Cabeça -->
    <circle cx="50" cy="45" r="30" fill="${skinTone}"/>
    
    <!-- Cabelo (por baixo de acessórios de cabeça) -->
    ${!isHeadAccessory && hairSvg && hairSvg.svg ? (typeof hairSvg.svg === 'function' ? hairSvg.svg(hairColor) : '') : ''}
    
    <!-- Expressão (olhos) -->
    ${expressionData ? expressionData.eyes : ''}
    
    <!-- Expressão (boca) -->
    ${expressionData ? expressionData.mouth : ''}
    
    <!-- Nariz -->
    <ellipse cx="50" cy="52" rx="3" ry="2" fill="${skinTone}" style="filter: brightness(0.92)"/>
    
    <!-- Bochechas -->
    <ellipse cx="32" cy="54" rx="5" ry="3" fill="#FFCDD2" opacity="0.4"/>
    <ellipse cx="68" cy="54" rx="5" ry="3" fill="#FFCDD2" opacity="0.4"/>
    
    <!-- Cabelo (por cima se não houver acessório de cabeça) -->
    ${isHeadAccessory && hairSvg && hairSvg.svg ? (typeof hairSvg.svg === 'function' ? hairSvg.svg(hairColor) : '') : ''}
    
    <!-- Acessório -->
    ${accessorySvg && accessorySvg.svg ? accessorySvg.svg : ''}
  </svg>`;
};

export default {
  skinTones,
  hairStyles,
  hairColors,
  outfits,
  outfitColors,
  accessories,
  expressions,
  generateCharacterSVG
};
