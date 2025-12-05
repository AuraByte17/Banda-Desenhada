import React from 'react';

// Personagens SVG bem desenhados em estilo cartoon
export const characters = [
  {
    id: 'boy1',
    name: 'Rapaz',
    svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <!-- Corpo -->
      <ellipse cx="50" cy="115" rx="25" ry="20" fill="#4A90D9"/>
      <!-- Pescoço -->
      <rect x="45" y="75" width="10" height="10" fill="#FDBF60"/>
      <!-- Cabeça -->
      <circle cx="50" cy="50" r="35" fill="#FDBF60"/>
      <!-- Cabelo -->
      <path d="M20 40 Q30 10 50 15 Q70 10 80 40 Q75 25 50 20 Q25 25 20 40" fill="#5D4037"/>
      <!-- Olhos -->
      <ellipse cx="38" cy="48" rx="6" ry="7" fill="white"/>
      <ellipse cx="62" cy="48" rx="6" ry="7" fill="white"/>
      <circle cx="40" cy="49" r="3" fill="#1a1a2e"/>
      <circle cx="64" cy="49" r="3" fill="#1a1a2e"/>
      <!-- Brilho dos olhos -->
      <circle cx="41" cy="47" r="1.5" fill="white"/>
      <circle cx="65" cy="47" r="1.5" fill="white"/>
      <!-- Sobrancelhas -->
      <path d="M30 40 Q38 37 44 40" stroke="#5D4037" stroke-width="2" fill="none"/>
      <path d="M56 40 Q62 37 70 40" stroke="#5D4037" stroke-width="2" fill="none"/>
      <!-- Nariz -->
      <path d="M50 52 L48 60 L52 60" fill="#E5A955"/>
      <!-- Boca sorridente -->
      <path d="M40 68 Q50 78 60 68" stroke="#1a1a2e" stroke-width="2" fill="none"/>
      <!-- Bochechas -->
      <circle cx="28" cy="58" r="5" fill="#FFB6C1" opacity="0.5"/>
      <circle cx="72" cy="58" r="5" fill="#FFB6C1" opacity="0.5"/>
      <!-- Orelhas -->
      <ellipse cx="15" cy="50" rx="5" ry="8" fill="#FDBF60"/>
      <ellipse cx="85" cy="50" rx="5" ry="8" fill="#FDBF60"/>
    </svg>`
  },
  {
    id: 'girl1',
    name: 'Rapariga',
    svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <!-- Corpo/Vestido -->
      <path d="M30 95 L25 135 L75 135 L70 95 Q50 100 30 95" fill="#E91E63"/>
      <!-- Pescoço -->
      <rect x="45" y="75" width="10" height="10" fill="#FDBF60"/>
      <!-- Cabeça -->
      <circle cx="50" cy="50" r="35" fill="#FDBF60"/>
      <!-- Cabelo longo -->
      <path d="M15 50 Q10 20 50 10 Q90 20 85 50 L85 90 Q70 85 70 50 Q50 55 30 50 L30 90 Q15 85 15 50" fill="#8B4513"/>
      <!-- Franja -->
      <path d="M25 35 Q35 25 50 28 Q65 25 75 35 Q65 40 50 38 Q35 40 25 35" fill="#8B4513"/>
      <!-- Olhos -->
      <ellipse cx="38" cy="48" rx="6" ry="8" fill="white"/>
      <ellipse cx="62" cy="48" rx="6" ry="8" fill="white"/>
      <circle cx="39" cy="50" r="3" fill="#1a1a2e"/>
      <circle cx="63" cy="50" r="3" fill="#1a1a2e"/>
      <!-- Pestanas -->
      <path d="M32 43 L30 40" stroke="#1a1a2e" stroke-width="1"/>
      <path d="M36 41 L35 38" stroke="#1a1a2e" stroke-width="1"/>
      <path d="M68 43 L70 40" stroke="#1a1a2e" stroke-width="1"/>
      <path d="M64 41 L65 38" stroke="#1a1a2e" stroke-width="1"/>
      <!-- Brilho -->
      <circle cx="40" cy="48" r="1.5" fill="white"/>
      <circle cx="64" cy="48" r="1.5" fill="white"/>
      <!-- Nariz -->
      <path d="M50 52 L48 58 L52 58" fill="#E5A955"/>
      <!-- Boca -->
      <path d="M42 67 Q50 73 58 67" stroke="#E91E63" stroke-width="2" fill="none"/>
      <!-- Bochechas -->
      <circle cx="28" cy="58" r="6" fill="#FFB6C1" opacity="0.6"/>
      <circle cx="72" cy="58" r="6" fill="#FFB6C1" opacity="0.6"/>
      <!-- Laço -->
      <circle cx="75" cy="25" r="4" fill="#E91E63"/>
      <path d="M70 20 L75 25 L80 20 L75 28 Z" fill="#E91E63"/>
    </svg>`
  },
  {
    id: 'teacher',
    name: 'Professor',
    svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <!-- Corpo/Camisa -->
      <path d="M25 85 L20 135 L80 135 L75 85 Q50 95 25 85" fill="#2196F3"/>
      <!-- Gravata -->
      <path d="M48 85 L50 115 L52 85 L55 90 L50 120 L45 90 Z" fill="#F44336"/>
      <!-- Pescoço -->
      <rect x="43" y="72" width="14" height="13" fill="#FDBF60"/>
      <!-- Cabeça -->
      <circle cx="50" cy="45" r="32" fill="#FDBF60"/>
      <!-- Cabelo curto -->
      <path d="M22 35 Q25 15 50 12 Q75 15 78 35 Q70 28 50 25 Q30 28 22 35" fill="#424242"/>
      <!-- Óculos -->
      <rect x="28" y="38" rx="3" width="18" height="14" fill="none" stroke="#1a1a2e" stroke-width="2"/>
      <rect x="54" y="38" rx="3" width="18" height="14" fill="none" stroke="#1a1a2e" stroke-width="2"/>
      <line x1="46" y1="45" x2="54" y2="45" stroke="#1a1a2e" stroke-width="2"/>
      <!-- Olhos atrás dos óculos -->
      <circle cx="37" cy="45" r="3" fill="#1a1a2e"/>
      <circle cx="63" cy="45" r="3" fill="#1a1a2e"/>
      <circle cx="38" cy="44" r="1" fill="white"/>
      <circle cx="64" cy="44" r="1" fill="white"/>
      <!-- Sobrancelhas -->
      <path d="M28 35 Q37 32 46 35" stroke="#424242" stroke-width="2" fill="none"/>
      <path d="M54 35 Q63 32 72 35" stroke="#424242" stroke-width="2" fill="none"/>
      <!-- Nariz -->
      <path d="M50 48 L47 56 L53 56" fill="#E5A955"/>
      <!-- Boca/Sorriso simpático -->
      <path d="M40 64 Q50 70 60 64" stroke="#1a1a2e" stroke-width="2" fill="none"/>
      <!-- Orelhas -->
      <ellipse cx="18" cy="45" rx="4" ry="7" fill="#FDBF60"/>
      <ellipse cx="82" cy="45" rx="4" ry="7" fill="#FDBF60"/>
    </svg>`
  },
  {
    id: 'boy2',
    name: 'Rapaz 2',
    svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <!-- Corpo -->
      <ellipse cx="50" cy="115" rx="25" ry="20" fill="#4CAF50"/>
      <!-- Pescoço -->
      <rect x="45" y="75" width="10" height="10" fill="#8D6E63"/>
      <!-- Cabeça -->
      <circle cx="50" cy="50" r="35" fill="#8D6E63"/>
      <!-- Cabelo crespo -->
      <circle cx="35" cy="25" r="12" fill="#1a1a2e"/>
      <circle cx="50" cy="20" r="12" fill="#1a1a2e"/>
      <circle cx="65" cy="25" r="12" fill="#1a1a2e"/>
      <circle cx="28" cy="35" r="10" fill="#1a1a2e"/>
      <circle cx="72" cy="35" r="10" fill="#1a1a2e"/>
      <!-- Olhos -->
      <ellipse cx="38" cy="48" rx="7" ry="8" fill="white"/>
      <ellipse cx="62" cy="48" rx="7" ry="8" fill="white"/>
      <circle cx="40" cy="50" r="4" fill="#4A2C2A"/>
      <circle cx="64" cy="50" r="4" fill="#4A2C2A"/>
      <circle cx="41" cy="48" r="1.5" fill="white"/>
      <circle cx="65" cy="48" r="1.5" fill="white"/>
      <!-- Sobrancelhas -->
      <path d="M30 40 Q38 36 46 40" stroke="#1a1a2e" stroke-width="2.5" fill="none"/>
      <path d="M54 40 Q62 36 70 40" stroke="#1a1a2e" stroke-width="2.5" fill="none"/>
      <!-- Nariz -->
      <ellipse cx="50" cy="58" rx="5" ry="4" fill="#7D5A50"/>
      <!-- Boca grande sorriso -->
      <path d="M38 68 Q50 80 62 68" stroke="#1a1a2e" stroke-width="2" fill="none"/>
      <path d="M42 68 Q50 75 58 68" fill="white"/>
      <!-- Orelhas -->
      <ellipse cx="15" cy="50" rx="5" ry="8" fill="#8D6E63"/>
      <ellipse cx="85" cy="50" rx="5" ry="8" fill="#8D6E63"/>
    </svg>`
  },
  {
    id: 'girl2',
    name: 'Rapariga 2',
    svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <!-- Vestido -->
      <path d="M28 95 L22 135 L78 135 L72 95 Q50 105 28 95" fill="#9C27B0"/>
      <!-- Pescoço -->
      <rect x="45" y="75" width="10" height="10" fill="#FDBF60"/>
      <!-- Cabeça -->
      <circle cx="50" cy="50" r="35" fill="#FDBF60"/>
      <!-- Cabelo em tranças -->
      <path d="M18 45 Q15 15 50 10 Q85 15 82 45" fill="#1a1a2e"/>
      <rect x="12" y="45" width="8" height="40" rx="4" fill="#1a1a2e"/>
      <rect x="80" y="45" width="8" height="40" rx="4" fill="#1a1a2e"/>
      <!-- Laços nas tranças -->
      <circle cx="16" cy="88" r="5" fill="#FFEB3B"/>
      <circle cx="84" cy="88" r="5" fill="#FFEB3B"/>
      <!-- Franja -->
      <path d="M25 38 Q40 30 50 32 Q60 30 75 38" fill="#1a1a2e"/>
      <!-- Olhos grandes -->
      <ellipse cx="38" cy="50" rx="8" ry="9" fill="white"/>
      <ellipse cx="62" cy="50" rx="8" ry="9" fill="white"/>
      <circle cx="40" cy="52" r="4" fill="#4A2C2A"/>
      <circle cx="64" cy="52" r="4" fill="#4A2C2A"/>
      <circle cx="41" cy="50" r="2" fill="white"/>
      <circle cx="65" cy="50" r="2" fill="white"/>
      <!-- Pestanas -->
      <path d="M30 44 L28 41" stroke="#1a1a2e" stroke-width="1.5"/>
      <path d="M34 42 L33 39" stroke="#1a1a2e" stroke-width="1.5"/>
      <path d="M70 44 L72 41" stroke="#1a1a2e" stroke-width="1.5"/>
      <path d="M66 42 L67 39" stroke="#1a1a2e" stroke-width="1.5"/>
      <!-- Nariz pequeno -->
      <circle cx="50" cy="58" r="2" fill="#E5A955"/>
      <!-- Boca -->
      <path d="M44 68 Q50 73 56 68" stroke="#E91E63" stroke-width="2" fill="none"/>
      <!-- Bochechas -->
      <circle cx="26" cy="58" r="5" fill="#FFB6C1" opacity="0.6"/>
      <circle cx="74" cy="58" r="5" fill="#FFB6C1" opacity="0.6"/>
    </svg>`
  },
  {
    id: 'dog',
    name: 'Cão',
    svg: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Corpo -->
      <ellipse cx="50" cy="85" rx="30" ry="25" fill="#D4A574"/>
      <!-- Patas traseiras -->
      <ellipse cx="30" cy="105" rx="8" ry="10" fill="#C4956A"/>
      <ellipse cx="70" cy="105" rx="8" ry="10" fill="#C4956A"/>
      <!-- Patas dianteiras -->
      <ellipse cx="35" cy="100" rx="6" ry="12" fill="#D4A574"/>
      <ellipse cx="65" cy="100" rx="6" ry="12" fill="#D4A574"/>
      <!-- Cabeça -->
      <circle cx="50" cy="45" r="30" fill="#D4A574"/>
      <!-- Orelhas caídas -->
      <ellipse cx="22" cy="35" rx="12" ry="20" fill="#C4956A"/>
      <ellipse cx="78" cy="35" rx="12" ry="20" fill="#C4956A"/>
      <!-- Focinho -->
      <ellipse cx="50" cy="55" rx="15" ry="12" fill="#F5E6D3"/>
      <!-- Nariz -->
      <ellipse cx="50" cy="50" rx="6" ry="5" fill="#1a1a2e"/>
      <ellipse cx="48" cy="48" rx="2" ry="1.5" fill="#4a4a4a"/>
      <!-- Olhos -->
      <circle cx="38" cy="40" r="8" fill="white"/>
      <circle cx="62" cy="40" r="8" fill="white"/>
      <circle cx="40" cy="42" r="4" fill="#4A2C2A"/>
      <circle cx="64" cy="42" r="4" fill="#4A2C2A"/>
      <circle cx="41" cy="40" r="2" fill="white"/>
      <circle cx="65" cy="40" r="2" fill="white"/>
      <!-- Sobrancelhas -->
      <path d="M30 32 Q38 28 46 32" stroke="#C4956A" stroke-width="3" fill="none"/>
      <path d="M54 32 Q62 28 70 32" stroke="#C4956A" stroke-width="3" fill="none"/>
      <!-- Boca -->
      <path d="M42 60 Q50 68 58 60" stroke="#1a1a2e" stroke-width="2" fill="none"/>
      <!-- Língua -->
      <ellipse cx="50" cy="65" rx="5" ry="8" fill="#FF6B6B"/>
      <!-- Cauda -->
      <path d="M80 75 Q95 65 90 50" stroke="#D4A574" stroke-width="8" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'cat',
    name: 'Gato',
    svg: `<svg viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
      <!-- Corpo -->
      <ellipse cx="50" cy="90" rx="25" ry="22" fill="#808080"/>
      <!-- Patas -->
      <ellipse cx="32" cy="108" rx="6" ry="8" fill="#707070"/>
      <ellipse cx="68" cy="108" rx="6" ry="8" fill="#707070"/>
      <!-- Cabeça -->
      <circle cx="50" cy="45" r="28" fill="#808080"/>
      <!-- Orelhas triangulares -->
      <path d="M25 30 L30 5 L45 25 Z" fill="#808080"/>
      <path d="M75 30 L70 5 L55 25 Z" fill="#808080"/>
      <path d="M28 28 L32 12 L42 25 Z" fill="#FFB6C1"/>
      <path d="M72 28 L68 12 L58 25 Z" fill="#FFB6C1"/>
      <!-- Olhos de gato -->
      <ellipse cx="38" cy="42" rx="9" ry="10" fill="#90EE90"/>
      <ellipse cx="62" cy="42" rx="9" ry="10" fill="#90EE90"/>
      <ellipse cx="38" cy="42" rx="3" ry="8" fill="#1a1a2e"/>
      <ellipse cx="62" cy="42" rx="3" ry="8" fill="#1a1a2e"/>
      <circle cx="36" cy="40" r="2" fill="white"/>
      <circle cx="60" cy="40" r="2" fill="white"/>
      <!-- Nariz -->
      <path d="M47 52 L50 48 L53 52 Z" fill="#FFB6C1"/>
      <!-- Bigodes -->
      <line x1="20" y1="50" x2="35" y2="52" stroke="#1a1a2e" stroke-width="1"/>
      <line x1="20" y1="55" x2="35" y2="55" stroke="#1a1a2e" stroke-width="1"/>
      <line x1="20" y1="60" x2="35" y2="58" stroke="#1a1a2e" stroke-width="1"/>
      <line x1="80" y1="50" x2="65" y2="52" stroke="#1a1a2e" stroke-width="1"/>
      <line x1="80" y1="55" x2="65" y2="55" stroke="#1a1a2e" stroke-width="1"/>
      <line x1="80" y1="60" x2="65" y2="58" stroke="#1a1a2e" stroke-width="1"/>
      <!-- Boca -->
      <path d="M45 55 Q50 60 55 55" stroke="#1a1a2e" stroke-width="1.5" fill="none"/>
      <!-- Cauda -->
      <path d="M75 85 Q100 75 95 50 Q92 40 85 45" stroke="#808080" stroke-width="8" fill="none" stroke-linecap="round"/>
    </svg>`
  },
  {
    id: 'superhero',
    name: 'Super-Herói',
    svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <!-- Capa -->
      <path d="M25 75 L10 135 L50 125 L90 135 L75 75" fill="#F44336"/>
      <!-- Corpo -->
      <path d="M30 75 L28 115 L72 115 L70 75 Q50 85 30 75" fill="#2196F3"/>
      <!-- Símbolo no peito -->
      <polygon points="50,80 45,95 55,95" fill="#FFEB3B"/>
      <!-- Pescoço -->
      <rect x="45" y="68" width="10" height="10" fill="#FDBF60"/>
      <!-- Cabeça -->
      <circle cx="50" cy="42" r="30" fill="#FDBF60"/>
      <!-- Máscara -->
      <path d="M20 35 L35 30 L50 35 L65 30 L80 35 L80 50 L65 48 L50 52 L35 48 L20 50 Z" fill="#1a1a2e"/>
      <!-- Olhos na máscara -->
      <ellipse cx="35" cy="42" rx="8" ry="6" fill="white"/>
      <ellipse cx="65" cy="42" rx="8" ry="6" fill="white"/>
      <circle cx="37" cy="42" r="3" fill="#1a1a2e"/>
      <circle cx="67" cy="42" r="3" fill="#1a1a2e"/>
      <!-- Cabelo -->
      <path d="M25 28 Q35 15 50 12 Q65 15 75 28 Q65 20 50 18 Q35 20 25 28" fill="#FFD700"/>
      <!-- Sorriso confiante -->
      <path d="M40 55 Q50 62 60 55" stroke="#1a1a2e" stroke-width="2" fill="none"/>
      <!-- Queixo forte -->
      <path d="M35 58 Q50 70 65 58" fill="#E5A955"/>
    </svg>`
  },
  {
    id: 'robot',
    name: 'Robô',
    svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <!-- Corpo -->
      <rect x="25" y="75" width="50" height="50" rx="5" fill="#78909C"/>
      <!-- Painel do peito -->
      <rect x="35" y="85" width="30" height="20" rx="3" fill="#37474F"/>
      <!-- Luzes no painel -->
      <circle cx="42" cy="92" r="3" fill="#4CAF50"/>
      <circle cx="50" cy="92" r="3" fill="#FFEB3B"/>
      <circle cx="58" cy="92" r="3" fill="#F44336"/>
      <!-- Pescoço -->
      <rect x="42" y="65" width="16" height="12" fill="#546E7A"/>
      <!-- Parafusos do pescoço -->
      <circle cx="45" cy="71" r="2" fill="#37474F"/>
      <circle cx="55" cy="71" r="2" fill="#37474F"/>
      <!-- Cabeça -->
      <rect x="20" y="20" width="60" height="48" rx="8" fill="#90A4AE"/>
      <!-- Antena -->
      <rect x="47" y="5" width="6" height="18" fill="#546E7A"/>
      <circle cx="50" cy="5" r="6" fill="#F44336"/>
      <!-- Olhos de robô -->
      <rect x="28" y="32" width="18" height="14" rx="3" fill="#1a1a2e"/>
      <rect x="54" y="32" width="18" height="14" rx="3" fill="#1a1a2e"/>
      <circle cx="37" cy="39" r="5" fill="#00BCD4"/>
      <circle cx="63" cy="39" r="5" fill="#00BCD4"/>
      <circle cx="35" cy="37" r="2" fill="white"/>
      <circle cx="61" cy="37" r="2" fill="white"/>
      <!-- Boca de robô -->
      <rect x="35" y="52" width="30" height="8" rx="2" fill="#37474F"/>
      <rect x="38" y="54" width="4" height="4" fill="#4CAF50"/>
      <rect x="44" y="54" width="4" height="4" fill="#4CAF50"/>
      <rect x="50" y="54" width="4" height="4" fill="#4CAF50"/>
      <rect x="56" y="54" width="4" height="4" fill="#4CAF50"/>
      <!-- Braços -->
      <rect x="10" y="80" width="12" height="35" rx="4" fill="#78909C"/>
      <rect x="78" y="80" width="12" height="35" rx="4" fill="#78909C"/>
      <!-- Mãos -->
      <circle cx="16" cy="118" r="7" fill="#546E7A"/>
      <circle cx="84" cy="118" r="7" fill="#546E7A"/>
    </svg>`
  },
  {
    id: 'princess',
    name: 'Princesa',
    svg: `<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      <!-- Vestido longo -->
      <path d="M30 90 L15 145 L85 145 L70 90 Q50 100 30 90" fill="#E91E63"/>
      <path d="M35 90 L25 145 L75 145 L65 90" fill="#F48FB1"/>
      <!-- Decoração do vestido -->
      <ellipse cx="50" cy="120" rx="15" ry="8" fill="#AD1457" opacity="0.5"/>
      <!-- Pescoço -->
      <rect x="45" y="75" width="10" height="12" fill="#FDBF60"/>
      <!-- Colar -->
      <ellipse cx="50" cy="82" rx="8" ry="3" fill="#FFD700"/>
      <!-- Cabeça -->
      <circle cx="50" cy="50" r="32" fill="#FDBF60"/>
      <!-- Cabelo longo e ondulado -->
      <path d="M18 50 Q10 20 50 12 Q90 20 82 50" fill="#FFD700"/>
      <path d="M18 50 Q15 80 20 110 Q25 85 25 50" fill="#FFD700"/>
      <path d="M82 50 Q85 80 80 110 Q75 85 75 50" fill="#FFD700"/>
      <!-- Coroa -->
      <path d="M30 18 L35 5 L42 15 L50 0 L58 15 L65 5 L70 18 L68 22 L32 22 Z" fill="#FFD700"/>
      <circle cx="50" cy="12" r="3" fill="#E91E63"/>
      <circle cx="38" cy="15" r="2" fill="#E91E63"/>
      <circle cx="62" cy="15" r="2" fill="#E91E63"/>
      <!-- Olhos -->
      <ellipse cx="38" cy="48" rx="7" ry="8" fill="white"/>
      <ellipse cx="62" cy="48" rx="7" ry="8" fill="white"/>
      <circle cx="40" cy="50" r="4" fill="#4A90D9"/>
      <circle cx="64" cy="50" r="4" fill="#4A90D9"/>
      <circle cx="41" cy="48" r="2" fill="white"/>
      <circle cx="65" cy="48" r="2" fill="white"/>
      <!-- Pestanas -->
      <path d="M31 43 L28 40" stroke="#1a1a2e" stroke-width="1.5"/>
      <path d="M35 41 L34 37" stroke="#1a1a2e" stroke-width="1.5"/>
      <path d="M69 43 L72 40" stroke="#1a1a2e" stroke-width="1.5"/>
      <path d="M65 41 L66 37" stroke="#1a1a2e" stroke-width="1.5"/>
      <!-- Nariz -->
      <path d="M50 52 L48 58 L52 58" fill="#E5A955"/>
      <!-- Boca -->
      <path d="M44 66 Q50 72 56 66" stroke="#E91E63" stroke-width="2" fill="#FFB6C1"/>
      <!-- Bochechas -->
      <circle cx="26" cy="56" r="6" fill="#FFB6C1" opacity="0.6"/>
      <circle cx="74" cy="56" r="6" fill="#FFB6C1" opacity="0.6"/>
    </svg>`
  },
  {
    id: 'wizard',
    name: 'Feiticeiro',
    svg: `<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
      <!-- Manto -->
      <path d="M25 80 L15 145 L85 145 L75 80 Q50 90 25 80" fill="#3F51B5"/>
      <!-- Estrelas no manto -->
      <polygon points="35,100 36,103 39,103 37,105 38,108 35,106 32,108 33,105 31,103 34,103" fill="#FFD700"/>
      <polygon points="60,115 61,118 64,118 62,120 63,123 60,121 57,123 58,120 56,118 59,118" fill="#FFD700"/>
      <polygon points="45,125 46,128 49,128 47,130 48,133 45,131 42,133 43,130 41,128 44,128" fill="#FFD700"/>
      <!-- Pescoço -->
      <rect x="45" y="70" width="10" height="10" fill="#FDBF60"/>
      <!-- Barba -->
      <path d="M30 65 Q35 75 50 78 Q65 75 70 65 L70 85 Q65 105 50 115 Q35 105 30 85 Z" fill="#ECEFF1"/>
      <!-- Cabeça -->
      <circle cx="50" cy="50" r="28" fill="#FDBF60"/>
      <!-- Chapéu de feiticeiro -->
      <path d="M20 52 L50 0 L80 52 Z" fill="#3F51B5"/>
      <ellipse cx="50" cy="52" rx="32" ry="8" fill="#3F51B5"/>
      <!-- Estrela no chapéu -->
      <polygon points="50,20 52,26 58,26 53,30 55,36 50,32 45,36 47,30 42,26 48,26" fill="#FFD700"/>
      <!-- Sobrancelhas grossas -->
      <path d="M28 42 Q38 36 48 42" stroke="#ECEFF1" stroke-width="4" fill="none"/>
      <path d="M52 42 Q62 36 72 42" stroke="#ECEFF1" stroke-width="4" fill="none"/>
      <!-- Olhos -->
      <circle cx="38" cy="50" r="5" fill="white"/>
      <circle cx="62" cy="50" r="5" fill="white"/>
      <circle cx="39" cy="51" r="2.5" fill="#1a1a2e"/>
      <circle cx="63" cy="51" r="2.5" fill="#1a1a2e"/>
      <!-- Nariz grande -->
      <path d="M50 52 L45 62 L55 62 Z" fill="#E5A955"/>
      <!-- Bigode -->
      <path d="M38 65 Q50 60 62 65" stroke="#ECEFF1" stroke-width="4" fill="none"/>
      <!-- Varinha -->
      <rect x="82" y="70" width="4" height="40" fill="#8D6E63" transform="rotate(20, 84, 90)"/>
      <polygon points="90,60 92,55 88,55" fill="#FFD700" transform="rotate(20, 90, 57)"/>
    </svg>`
  },
  {
    id: 'alien',
    name: 'Alien',
    svg: `<svg viewBox="0 0 100 140" xmlns="http://www.w3.org/2000/svg">
      <!-- Corpo -->
      <ellipse cx="50" cy="110" rx="20" ry="25" fill="#8BC34A"/>
      <!-- Pescoço fino -->
      <rect x="46" y="75" width="8" height="15" fill="#9CCC65"/>
      <!-- Cabeça grande -->
      <ellipse cx="50" cy="45" rx="35" ry="40" fill="#8BC34A"/>
      <!-- Olhos enormes -->
      <ellipse cx="35" cy="45" rx="15" ry="18" fill="#1a1a2e"/>
      <ellipse cx="65" cy="45" rx="15" ry="18" fill="#1a1a2e"/>
      <!-- Brilho nos olhos -->
      <ellipse cx="32" cy="40" rx="5" ry="6" fill="#4a4a4a"/>
      <ellipse cx="62" cy="40" rx="5" ry="6" fill="#4a4a4a"/>
      <circle cx="30" cy="38" r="3" fill="white"/>
      <circle cx="60" cy="38" r="3" fill="white"/>
      <!-- Boca pequena -->
      <ellipse cx="50" cy="70" rx="5" ry="3" fill="#558B2F"/>
      <!-- Antenas -->
      <line x1="35" y1="10" x2="30" y2="-5" stroke="#8BC34A" stroke-width="3"/>
      <line x1="65" y1="10" x2="70" y2="-5" stroke="#8BC34A" stroke-width="3"/>
      <circle cx="28" cy="-8" r="5" fill="#CDDC39"/>
      <circle cx="72" cy="-8" r="5" fill="#CDDC39"/>
      <!-- Braços finos -->
      <path d="M30 95 Q10 100 15 115" stroke="#8BC34A" stroke-width="5" fill="none" stroke-linecap="round"/>
      <path d="M70 95 Q90 100 85 115" stroke="#8BC34A" stroke-width="5" fill="none" stroke-linecap="round"/>
      <!-- Mãos com 3 dedos -->
      <circle cx="15" cy="118" r="4" fill="#9CCC65"/>
      <circle cx="85" cy="118" r="4" fill="#9CCC65"/>
    </svg>`
  }
];

export const backgrounds = [
  { id: 'white', name: 'Branco', color: '#ffffff' },
  { id: 'sky', name: 'Céu Azul', gradient: 'linear-gradient(to bottom, #4FC3F7 0%, #81D4FA 50%, #B3E5FC 100%)' },
  { id: 'grass', name: 'Parque', gradient: 'linear-gradient(to bottom, #81D4FA 0%, #81D4FA 60%, #66BB6A 60%, #43A047 100%)' },
  { id: 'sunset', name: 'Pôr do Sol', gradient: 'linear-gradient(to bottom, #FF7043 0%, #FFAB91 30%, #FFE0B2 60%, #8D6E63 100%)' },
  { id: 'night', name: 'Noite', gradient: 'linear-gradient(to bottom, #0D1B2A 0%, #1B263B 50%, #415A77 100%)' },
  { id: 'school', name: 'Sala de Aula', gradient: 'linear-gradient(to bottom, #FFF8E1 0%, #FFF8E1 70%, #8D6E63 70%, #6D4C41 100%)' },
  { id: 'forest', name: 'Floresta', gradient: 'linear-gradient(to bottom, #81D4FA 0%, #81D4FA 35%, #2E7D32 35%, #1B5E20 100%)' },
  { id: 'beach', name: 'Praia', gradient: 'linear-gradient(to bottom, #4FC3F7 0%, #4FC3F7 45%, #29B6F6 45%, #29B6F6 55%, #FFE0B2 55%, #FFCC80 100%)' },
  { id: 'city', name: 'Cidade', gradient: 'linear-gradient(to bottom, #90A4AE 0%, #B0BEC5 40%, #78909C 40%, #546E7A 100%)' },
  { id: 'space', name: 'Espaço', gradient: 'linear-gradient(to bottom, #000000 0%, #0D1B2A 50%, #1B263B 100%)' },
  { id: 'underwater', name: 'Fundo do Mar', gradient: 'linear-gradient(to bottom, #0288D1 0%, #01579B 50%, #004D40 100%)' },
  { id: 'desert', name: 'Deserto', gradient: 'linear-gradient(to bottom, #FFB74D 0%, #FF9800 30%, #FFE0B2 60%, #D7CCC8 100%)' },
  { id: 'snow', name: 'Neve', gradient: 'linear-gradient(to bottom, #E3F2FD 0%, #BBDEFB 40%, #ECEFF1 40%, #FAFAFA 100%)' },
  { id: 'castle', name: 'Castelo', gradient: 'linear-gradient(to bottom, #CE93D8 0%, #AB47BC 30%, #7B1FA2 60%, #4A148C 100%)' },
  { id: 'farm', name: 'Quinta', gradient: 'linear-gradient(to bottom, #81D4FA 0%, #81D4FA 50%, #8BC34A 50%, #689F38 70%, #795548 70%, #5D4037 100%)' },
  { id: 'hospital', name: 'Hospital', gradient: 'linear-gradient(to bottom, #E3F2FD 0%, #E3F2FD 80%, #90CAF9 80%, #64B5F6 100%)' },
  { id: 'stage', name: 'Palco', gradient: 'linear-gradient(to bottom, #1a1a2e 0%, #1a1a2e 20%, #8B0000 20%, #B22222 80%, #5D4037 80%, #3E2723 100%)' },
  { id: 'rainbow', name: 'Arco-íris', gradient: 'linear-gradient(to bottom, #E91E63 0%, #FF9800 17%, #FFEB3B 34%, #4CAF50 51%, #2196F3 68%, #9C27B0 85%, #E8F5E9 100%)' },
];

export default characters;
