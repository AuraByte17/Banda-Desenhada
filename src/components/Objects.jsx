// Objetos e Props para enriquecer as cenas
export const objects = [
  {
    id: 'tree',
    name: 'Árvore',
    svg: `<svg viewBox="0 0 80 120" xmlns="http://www.w3.org/2000/svg">
      <rect x="32" y="70" width="16" height="45" fill="#8D6E63"/>
      <rect x="30" y="110" width="20" height="8" rx="2" fill="#6D4C41"/>
      <circle cx="40" cy="35" r="30" fill="#4CAF50"/>
      <circle cx="25" cy="50" r="22" fill="#388E3C"/>
      <circle cx="55" cy="50" r="22" fill="#388E3C"/>
      <circle cx="40" cy="55" r="25" fill="#2E7D32"/>
      <circle cx="30" cy="40" r="5" fill="#81C784"/>
    </svg>`
  },
  {
    id: 'house',
    name: 'Casa',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="45" width="70" height="50" fill="#FFCC80"/>
      <path d="M10 48 L50 15 L90 48 Z" fill="#D32F2F"/>
      <rect x="40" y="60" width="20" height="35" fill="#8D6E63"/>
      <circle cx="55" cy="80" r="2" fill="#FFD700"/>
      <rect x="22" y="55" width="15" height="15" fill="#BBDEFB"/>
      <rect x="63" y="55" width="15" height="15" fill="#BBDEFB"/>
      <rect x="65" y="20" width="12" height="20" fill="#D32F2F"/>
    </svg>`
  },
  {
    id: 'car',
    name: 'Carro',
    svg: `<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M15 40 L20 25 L45 25 L55 15 L85 15 L95 25 L110 25 L110 45 L15 45 Z" fill="#F44336"/>
      <path d="M50 18 L58 26 L82 26 L88 18 Z" fill="#BBDEFB"/>
      <path d="M25 28 L45 28 L45 38 L22 38 Z" fill="#BBDEFB"/>
      <circle cx="30" cy="48" r="10" fill="#37474F"/>
      <circle cx="30" cy="48" r="5" fill="#78909C"/>
      <circle cx="90" cy="48" r="10" fill="#37474F"/>
      <circle cx="90" cy="48" r="5" fill="#78909C"/>
      <ellipse cx="108" cy="35" rx="4" ry="6" fill="#FFEB3B"/>
    </svg>`
  },
  {
    id: 'sun',
    name: 'Sol',
    svg: `<svg viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
      <line x1="40" y1="5" x2="40" y2="18" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
      <line x1="40" y1="62" x2="40" y2="75" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
      <line x1="5" y1="40" x2="18" y2="40" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
      <line x1="62" y1="40" x2="75" y2="40" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
      <line x1="15" y1="15" x2="24" y2="24" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
      <line x1="56" y1="56" x2="65" y2="65" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
      <line x1="15" y1="65" x2="24" y2="56" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
      <line x1="56" y1="24" x2="65" y2="15" stroke="#FFC107" stroke-width="4" stroke-linecap="round"/>
      <circle cx="40" cy="40" r="18" fill="#FFEB3B"/>
      <circle cx="34" cy="38" r="2" fill="#FF9800"/>
      <circle cx="46" cy="38" r="2" fill="#FF9800"/>
      <path d="M34 46 Q40 50 46 46" stroke="#FF9800" stroke-width="2" fill="none"/>
    </svg>`
  },
  {
    id: 'cloud',
    name: 'Nuvem',
    svg: `<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="30" cy="40" rx="25" ry="18" fill="white"/>
      <ellipse cx="55" cy="35" rx="28" ry="22" fill="white"/>
      <ellipse cx="75" cy="42" rx="20" ry="15" fill="white"/>
      <ellipse cx="45" cy="25" rx="18" ry="15" fill="white"/>
    </svg>`
  },
  {
    id: 'star',
    name: 'Estrela',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="30,5 36,22 54,22 40,33 46,50 30,40 14,50 20,33 6,22 24,22" fill="#FFD700"/>
      <polygon points="30,12 34,22 45,22 36,29 40,40 30,34 20,40 24,29 15,22 26,22" fill="#FFEB3B"/>
    </svg>`
  },
  {
    id: 'flower',
    name: 'Flor',
    svg: `<svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 35 L30 75" stroke="#4CAF50" stroke-width="4"/>
      <ellipse cx="22" cy="55" rx="8" ry="4" fill="#4CAF50" transform="rotate(-30, 22, 55)"/>
      <ellipse cx="38" cy="60" rx="8" ry="4" fill="#4CAF50" transform="rotate(30, 38, 60)"/>
      <ellipse cx="30" cy="12" rx="8" ry="12" fill="#E91E63"/>
      <ellipse cx="18" cy="22" rx="8" ry="12" fill="#E91E63" transform="rotate(-60, 18, 22)"/>
      <ellipse cx="42" cy="22" rx="8" ry="12" fill="#E91E63" transform="rotate(60, 42, 22)"/>
      <circle cx="30" cy="25" r="8" fill="#FFEB3B"/>
    </svg>`
  },
  {
    id: 'book',
    name: 'Livro',
    svg: `<svg viewBox="0 0 70 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="55" height="45" rx="2" fill="#1565C0"/>
      <rect x="12" y="10" width="48" height="40" fill="#FAFAFA"/>
      <line x1="15" y1="18" x2="55" y2="18" stroke="#E0E0E0"/>
      <line x1="15" y1="25" x2="55" y2="25" stroke="#E0E0E0"/>
      <line x1="15" y1="32" x2="55" y2="32" stroke="#E0E0E0"/>
      <rect x="5" y="5" width="8" height="50" rx="2" fill="#0D47A1"/>
    </svg>`
  },
  {
    id: 'ball',
    name: 'Bola',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="25" fill="#FF5722"/>
      <path d="M10 20 Q30 30 50 20" stroke="white" stroke-width="3" fill="none"/>
      <path d="M10 40 Q30 30 50 40" stroke="white" stroke-width="3" fill="none"/>
      <line x1="30" y1="5" x2="30" y2="55" stroke="white" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'heart',
    name: 'Coração',
    svg: `<svg viewBox="0 0 60 55" xmlns="http://www.w3.org/2000/svg">
      <path d="M30 50 C10 35 0 20 10 10 C20 0 30 10 30 15 C30 10 40 0 50 10 C60 20 50 35 30 50" fill="#E91E63"/>
      <path d="M20 15 Q25 12 22 18" fill="#F48FB1"/>
    </svg>`
  },
  {
    id: 'lightning',
    name: 'Relâmpago',
    svg: `<svg viewBox="0 0 50 80" xmlns="http://www.w3.org/2000/svg">
      <polygon points="28,0 10,35 22,35 15,80 45,30 30,30 40,0" fill="#FFEB3B"/>
      <polygon points="26,5 15,32 24,32 20,65 38,32 28,32 35,5" fill="#FFF9C4"/>
    </svg>`
  },
  {
    id: 'explosion',
    name: 'Explosão',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <polygon points="50,5 58,30 85,20 68,42 95,50 68,58 85,80 58,70 50,95 42,70 15,80 32,58 5,50 32,42 15,20 42,30" fill="#FF5722"/>
      <polygon points="50,20 55,35 72,30 62,45 80,50 62,55 72,70 55,65 50,80 45,65 28,70 38,55 20,50 38,45 28,30 45,35" fill="#FFEB3B"/>
    </svg>`
  },
  {
    id: 'school',
    name: 'Escola',
    svg: `<svg viewBox="0 0 120 90" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="35" width="100" height="50" fill="#FFF3E0"/>
      <rect x="45" y="50" width="30" height="35" fill="#8D6E63"/>
      <circle cx="70" cy="70" r="2" fill="#FFD700"/>
      <path d="M5 38 L60 10 L115 38 Z" fill="#D32F2F"/>
      <rect x="50" y="15" width="20" height="15" fill="#D32F2F"/>
      <circle cx="60" cy="22" r="5" fill="#FFEB3B"/>
      <rect x="15" y="45" width="20" height="15" fill="#BBDEFB"/>
      <rect x="85" y="45" width="20" height="15" fill="#BBDEFB"/>
      <rect x="15" y="65" width="20" height="15" fill="#BBDEFB"/>
      <rect x="85" y="65" width="20" height="15" fill="#BBDEFB"/>
    </svg>`
  },
  {
    id: 'desk',
    name: 'Secretária',
    svg: `<svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="20" width="90" height="8" fill="#8D6E63"/>
      <rect x="10" y="28" width="30" height="35" fill="#A1887F"/>
      <rect x="15" y="33" width="20" height="10" fill="#6D4C41"/>
      <rect x="15" y="48" width="20" height="10" fill="#6D4C41"/>
      <rect x="10" y="28" width="4" height="40" fill="#6D4C41"/>
      <rect x="86" y="28" width="4" height="40" fill="#6D4C41"/>
      <rect x="55" y="5" width="25" height="18" fill="#90A4AE"/>
      <rect x="58" y="8" width="19" height="12" fill="#B0BEC5"/>
    </svg>`
  },
  {
    id: 'bicycle',
    name: 'Bicicleta',
    svg: `<svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="50" r="15" fill="none" stroke="#37474F" stroke-width="3"/>
      <circle cx="80" cy="50" r="15" fill="none" stroke="#37474F" stroke-width="3"/>
      <circle cx="20" cy="50" r="3" fill="#37474F"/>
      <circle cx="80" cy="50" r="3" fill="#37474F"/>
      <path d="M20 50 L45 25 L55 25 L80 50" stroke="#F44336" stroke-width="3" fill="none"/>
      <path d="M45 25 L35 50" stroke="#F44336" stroke-width="3"/>
      <path d="M55 25 L55 50 L45 50" stroke="#F44336" stroke-width="3" fill="none"/>
      <line x1="50" y1="25" x2="50" y2="15" stroke="#37474F" stroke-width="2"/>
      <line x1="45" y1="15" x2="55" y2="15" stroke="#37474F" stroke-width="2"/>
      <ellipse cx="55" cy="50" rx="8" ry="3" fill="none" stroke="#37474F" stroke-width="2"/>
    </svg>`
  },
  {
    id: 'moon',
    name: 'Lua',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="25" fill="#FFF9C4"/>
      <circle cx="40" cy="30" r="20" fill="#1a1a2e"/>
      <circle cx="22" cy="22" r="4" fill="#FFF59D" opacity="0.5"/>
      <circle cx="18" cy="35" r="3" fill="#FFF59D" opacity="0.5"/>
    </svg>`
  },
  {
    id: 'rainbow',
    name: 'Arco-íris',
    svg: `<svg viewBox="0 0 120 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 60 A50 50 0 0 1 110 60" fill="none" stroke="#F44336" stroke-width="8"/>
      <path d="M18 60 A42 42 0 0 1 102 60" fill="none" stroke="#FF9800" stroke-width="8"/>
      <path d="M26 60 A34 34 0 0 1 94 60" fill="none" stroke="#FFEB3B" stroke-width="8"/>
      <path d="M34 60 A26 26 0 0 1 86 60" fill="none" stroke="#4CAF50" stroke-width="8"/>
      <path d="M42 60 A18 18 0 0 1 78 60" fill="none" stroke="#2196F3" stroke-width="8"/>
      <path d="M50 60 A10 10 0 0 1 70 60" fill="none" stroke="#9C27B0" stroke-width="8"/>
    </svg>`
  },
  {
    id: 'present',
    name: 'Presente',
    svg: `<svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="20" width="50" height="45" fill="#E91E63"/>
      <rect x="5" y="15" width="50" height="10" fill="#AD1457"/>
      <rect x="25" y="15" width="10" height="50" fill="#FFD700"/>
      <rect x="5" y="35" width="50" height="8" fill="#FFD700"/>
      <path d="M20 15 Q15 5 25 5 Q30 5 30 15" fill="none" stroke="#FFD700" stroke-width="4"/>
      <path d="M40 15 Q45 5 35 5 Q30 5 30 15" fill="none" stroke="#FFD700" stroke-width="4"/>
    </svg>`
  },
  {
    id: 'rocket',
    name: 'Foguetão',
    svg: `<svg viewBox="0 0 50 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 5 Q10 30 10 60 L40 60 Q40 30 25 5" fill="#ECEFF1"/>
      <ellipse cx="25" cy="45" rx="10" ry="12" fill="#BBDEFB"/>
      <path d="M10 60 L5 80 L15 70 L10 60" fill="#F44336"/>
      <path d="M40 60 L45 80 L35 70 L40 60" fill="#F44336"/>
      <rect x="15" y="60" width="20" height="15" fill="#ECEFF1"/>
      <path d="M15 75 L10 95 L25 85 L40 95 L35 75" fill="#FF5722"/>
      <path d="M18 75 L15 90 L25 82 L35 90 L32 75" fill="#FFEB3B"/>
    </svg>`
  },
  {
    id: 'flag',
    name: 'Bandeira',
    svg: `<svg viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="5" width="4" height="70" fill="#8D6E63"/>
      <path d="M12 8 L55 8 L45 25 L55 42 L12 42 Z" fill="#4CAF50"/>
      <circle cx="12" cy="5" r="4" fill="#FFD700"/>
    </svg>`
  },
  {
    id: 'computer',
    name: 'Computador',
    svg: `<svg viewBox="0 0 80 70" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="70" height="45" rx="3" fill="#37474F"/>
      <rect x="10" y="10" width="60" height="35" fill="#4FC3F7"/>
      <rect x="30" y="50" width="20" height="8" fill="#546E7A"/>
      <rect x="20" y="58" width="40" height="5" rx="2" fill="#455A64"/>
    </svg>`
  },
  {
    id: 'phone',
    name: 'Telemóvel',
    svg: `<svg viewBox="0 0 40 70" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="2" width="30" height="66" rx="4" fill="#37474F"/>
      <rect x="8" y="8" width="24" height="48" fill="#81D4FA"/>
      <circle cx="20" cy="62" r="3" fill="#546E7A"/>
    </svg>`
  },
  {
    id: 'tv',
    name: 'Televisão',
    svg: `<svg viewBox="0 0 90 70" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="10" width="80" height="50" rx="3" fill="#212121"/>
      <rect x="10" y="15" width="70" height="40" fill="#64B5F6"/>
      <rect x="35" y="60" width="20" height="5" fill="#424242"/>
      <rect x="25" y="65" width="40" height="3" fill="#616161"/>
    </svg>`
  },
  {
    id: 'table',
    name: 'Mesa',
    svg: `<svg viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="15" width="90" height="8" fill="#8D6E63"/>
      <rect x="10" y="23" width="6" height="35" fill="#6D4C41"/>
      <rect x="84" y="23" width="6" height="35" fill="#6D4C41"/>
    </svg>`
  },
  {
    id: 'chair',
    name: 'Cadeira',
    svg: `<svg viewBox="0 0 50 70" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="5" width="34" height="30" rx="2" fill="#1565C0"/>
      <rect x="8" y="35" width="34" height="8" fill="#0D47A1"/>
      <rect x="10" y="43" width="4" height="25" fill="#5D4037"/>
      <rect x="36" y="43" width="4" height="25" fill="#5D4037"/>
    </svg>`
  },
  {
    id: 'door',
    name: 'Porta',
    svg: `<svg viewBox="0 0 50 80" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="40" height="70" fill="#8D6E63"/>
      <rect x="10" y="10" width="30" height="25" fill="#6D4C41"/>
      <rect x="10" y="40" width="30" height="25" fill="#6D4C41"/>
      <circle cx="38" cy="45" r="3" fill="#FFD700"/>
    </svg>`
  },
  {
    id: 'window',
    name: 'Janela',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="5" width="50" height="50" fill="#4FC3F7"/>
      <rect x="5" y="5" width="50" height="50" fill="none" stroke="#8D6E63" stroke-width="4"/>
      <line x1="30" y1="5" x2="30" y2="55" stroke="#8D6E63" stroke-width="3"/>
      <line x1="5" y1="30" x2="55" y2="30" stroke="#8D6E63" stroke-width="3"/>
    </svg>`
  },
  {
    id: 'tree2',
    name: 'Pinheiro',
    svg: `<svg viewBox="0 0 60 100" xmlns="http://www.w3.org/2000/svg">
      <rect x="25" y="70" width="10" height="25" fill="#5D4037"/>
      <polygon points="30,5 5,40 15,40 0,65 20,65 10,85 50,85 40,65 60,65 45,40 55,40" fill="#2E7D32"/>
    </svg>`
  },
  {
    id: 'bush',
    name: 'Arbusto',
    svg: `<svg viewBox="0 0 80 50" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="20" cy="35" rx="18" ry="14" fill="#388E3C"/>
      <ellipse cx="40" cy="30" rx="22" ry="18" fill="#43A047"/>
      <ellipse cx="60" cy="35" rx="18" ry="14" fill="#388E3C"/>
    </svg>`
  },
  {
    id: 'apple',
    name: 'Maçã',
    svg: `<svg viewBox="0 0 50 55" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="25" cy="32" rx="20" ry="22" fill="#F44336"/>
      <ellipse cx="18" cy="28" rx="5" ry="6" fill="#FFCDD2" opacity="0.5"/>
      <rect x="23" y="5" width="4" height="10" fill="#5D4037"/>
      <ellipse cx="32" cy="10" rx="6" ry="4" fill="#4CAF50"/>
    </svg>`
  },
  {
    id: 'banana',
    name: 'Banana',
    svg: `<svg viewBox="0 0 60 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 40 Q5 20 25 10 Q45 5 55 15 Q50 20 35 25 Q20 30 15 40 Z" fill="#FFEB3B"/>
      <path d="M10 40 Q15 35 20 38" stroke="#F9A825" stroke-width="2" fill="none"/>
    </svg>`
  },
  {
    id: 'pizza',
    name: 'Pizza',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" fill="#FFCC80"/>
      <circle cx="30" cy="30" r="24" fill="#FF7043"/>
      <circle cx="20" cy="22" r="5" fill="#F44336"/>
      <circle cx="38" cy="28" r="5" fill="#F44336"/>
      <circle cx="25" cy="38" r="5" fill="#F44336"/>
      <circle cx="30" cy="30" r="3" fill="#FDD835"/>
    </svg>`
  },
  {
    id: 'icecream',
    name: 'Gelado',
    svg: `<svg viewBox="0 0 40 70" xmlns="http://www.w3.org/2000/svg">
      <polygon points="20,70 8,30 32,30" fill="#FFCC80"/>
      <circle cx="20" cy="22" r="14" fill="#F48FB1"/>
      <circle cx="20" cy="12" r="10" fill="#CE93D8"/>
      <circle cx="20" cy="5" r="6" fill="#EF5350"/>
    </svg>`
  },
  {
    id: 'cake',
    name: 'Bolo',
    svg: `<svg viewBox="0 0 70 60" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="35" cy="50" rx="32" ry="8" fill="#8D6E63"/>
      <rect x="5" y="25" width="60" height="25" fill="#FFCC80"/>
      <rect x="5" y="25" width="60" height="8" fill="#E91E63"/>
      <rect x="33" y="10" width="4" height="18" fill="#FFB74D"/>
      <ellipse cx="35" cy="8" rx="4" ry="5" fill="#FF9800"/>
    </svg>`
  },
  {
    id: 'backpack',
    name: 'Mochila',
    svg: `<svg viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="15" width="34" height="42" rx="5" fill="#2196F3"/>
      <rect x="15" y="25" width="20" height="15" rx="3" fill="#1565C0"/>
      <rect x="18" y="5" width="14" height="15" rx="3" fill="#1976D2"/>
      <path d="M5 25 Q0 35 5 45" stroke="#1565C0" stroke-width="4" fill="none"/>
      <path d="M45 25 Q50 35 45 45" stroke="#1565C0" stroke-width="4" fill="none"/>
    </svg>`
  },
  {
    id: 'pencil',
    name: 'Lápis',
    svg: `<svg viewBox="0 0 15 80" xmlns="http://www.w3.org/2000/svg">
      <polygon points="7.5,80 2,65 13,65" fill="#FFE082"/>
      <rect x="2" y="10" width="11" height="55" fill="#FFC107"/>
      <rect x="2" y="10" width="11" height="8" fill="#F48FB1"/>
      <rect x="2" y="18" width="11" height="3" fill="#90A4AE"/>
      <polygon points="7.5,80 5,72 10,72" fill="#4E342E"/>
    </svg>`
  },
  {
    id: 'soccer',
    name: 'Bola Futebol',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" fill="white" stroke="#1a1a2e" stroke-width="2"/>
      <path d="M30 5 L38 18 L30 25 L22 18 Z" fill="#1a1a2e"/>
      <path d="M50 22 L55 35 L48 42 L38 35 Z" fill="#1a1a2e"/>
      <path d="M10 22 L5 35 L12 42 L22 35 Z" fill="#1a1a2e"/>
      <path d="M20 50 L30 55 L40 50 L38 42 L22 42 Z" fill="#1a1a2e"/>
    </svg>`
  },
  {
    id: 'trophy',
    name: 'Troféu',
    svg: `<svg viewBox="0 0 60 70" xmlns="http://www.w3.org/2000/svg">
      <rect x="22" y="45" width="16" height="12" fill="#FFC107"/>
      <rect x="18" y="57" width="24" height="8" fill="#FFB300"/>
      <path d="M15 8 L15 30 Q15 45 30 45 Q45 45 45 30 L45 8 Z" fill="#FFD54F"/>
      <path d="M15 15 Q5 15 5 25 Q5 35 15 35" fill="none" stroke="#FFD54F" stroke-width="5"/>
      <path d="M45 15 Q55 15 55 25 Q55 35 45 35" fill="none" stroke="#FFD54F" stroke-width="5"/>
      <polygon points="30,18 32,24 38,24 33,28 35,34 30,30 25,34 27,28 22,24 28,24" fill="#FFF9C4"/>
    </svg>`
  },
  {
    id: 'bird',
    name: 'Pássaro',
    svg: `<svg viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="35" cy="25" rx="18" ry="12" fill="#42A5F5"/>
      <circle cx="20" cy="22" r="10" fill="#42A5F5"/>
      <polygon points="8,22 15,20 15,24" fill="#FF9800"/>
      <circle cx="17" cy="20" r="3" fill="white"/>
      <circle cx="18" cy="20" r="1.5" fill="#1a1a2e"/>
      <path d="M40 15 Q50 5 55 10" stroke="#42A5F5" stroke-width="4" fill="none"/>
      <path d="M45 25 Q55 30 50 35" stroke="#42A5F5" stroke-width="3" fill="none"/>
    </svg>`
  },
  {
    id: 'butterfly',
    name: 'Borboleta',
    svg: `<svg viewBox="0 0 70 50" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="35" cy="25" rx="4" ry="15" fill="#5D4037"/>
      <ellipse cx="20" cy="15" rx="15" ry="12" fill="#E91E63"/>
      <ellipse cx="50" cy="15" rx="15" ry="12" fill="#E91E63"/>
      <ellipse cx="18" cy="35" rx="12" ry="10" fill="#9C27B0"/>
      <ellipse cx="52" cy="35" rx="12" ry="10" fill="#9C27B0"/>
      <circle cx="20" cy="15" r="4" fill="#FCE4EC"/>
      <circle cx="50" cy="15" r="4" fill="#FCE4EC"/>
      <line x1="33" y1="10" x2="28" y2="2" stroke="#5D4037" stroke-width="2"/>
      <line x1="37" y1="10" x2="42" y2="2" stroke="#5D4037" stroke-width="2"/>
      <circle cx="28" cy="2" r="2" fill="#5D4037"/>
      <circle cx="42" cy="2" r="2" fill="#5D4037"/>
    </svg>`
  },
  {
    id: 'fish',
    name: 'Peixe',
    svg: `<svg viewBox="0 0 70 40" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="35" cy="20" rx="25" ry="15" fill="#FF9800"/>
      <polygon points="60,20 75,8 75,32" fill="#FF9800"/>
      <circle cx="20" cy="18" r="5" fill="white"/>
      <circle cx="21" cy="18" r="2.5" fill="#1a1a2e"/>
      <path d="M35 8 Q40 12 35 16" stroke="#F57C00" stroke-width="2" fill="none"/>
      <path d="M40 10 Q45 14 40 18" stroke="#F57C00" stroke-width="2" fill="none"/>
    </svg>`
  },
  {
    id: 'crown',
    name: 'Coroa',
    svg: `<svg viewBox="0 0 60 45" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 40 L5 20 L15 30 L30 10 L45 30 L55 20 L55 40 Z" fill="#FFD700"/>
      <rect x="5" y="35" width="50" height="8" fill="#FFC107"/>
      <circle cx="15" cy="20" r="4" fill="#E91E63"/>
      <circle cx="30" cy="10" r="4" fill="#E91E63"/>
      <circle cx="45" cy="20" r="4" fill="#E91E63"/>
    </svg>`
  },
  {
    id: 'sword',
    name: 'Espada',
    svg: `<svg viewBox="0 0 20 80" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="5" width="4" height="50" fill="#B0BEC5"/>
      <polygon points="10,0 6,10 14,10" fill="#B0BEC5"/>
      <rect x="3" y="52" width="14" height="6" fill="#FFD700"/>
      <rect x="7" y="58" width="6" height="18" fill="#8D6E63"/>
      <ellipse cx="10" cy="76" rx="5" ry="3" fill="#FFD700"/>
    </svg>`
  },
  {
    id: 'shield',
    name: 'Escudo',
    svg: `<svg viewBox="0 0 50 60" xmlns="http://www.w3.org/2000/svg">
      <path d="M25 5 L5 15 L5 35 Q5 55 25 58 Q45 55 45 35 L45 15 Z" fill="#1565C0"/>
      <path d="M25 10 L10 18 L10 33 Q10 50 25 53 Q40 50 40 33 L40 18 Z" fill="#1976D2"/>
      <polygon points="25,18 28,28 38,28 30,34 33,44 25,38 17,44 20,34 12,28 22,28" fill="#FFD700"/>
    </svg>`
  },
  {
    id: 'tent',
    name: 'Tenda',
    svg: `<svg viewBox="0 0 80 60" xmlns="http://www.w3.org/2000/svg">
      <polygon points="40,5 5,55 75,55" fill="#FF7043"/>
      <polygon points="40,5 25,55 55,55" fill="#FF5722"/>
      <polygon points="40,35 35,55 45,55" fill="#3E2723"/>
    </svg>`
  },
  {
    id: 'campfire',
    name: 'Fogueira',
    svg: `<svg viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="45" width="44" height="6" rx="3" fill="#5D4037" transform="rotate(-20, 30, 48)"/>
      <rect x="8" y="45" width="44" height="6" rx="3" fill="#5D4037" transform="rotate(20, 30, 48)"/>
      <ellipse cx="30" cy="35" rx="12" ry="20" fill="#FF9800"/>
      <ellipse cx="30" cy="32" rx="8" ry="15" fill="#FFEB3B"/>
      <ellipse cx="30" cy="30" rx="4" ry="8" fill="#FFF9C4"/>
    </svg>`
  }
];

export default objects;
