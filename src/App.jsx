import React, { useState, useRef, useCallback, useEffect } from 'react';
import {
  Plus,
  Trash2,
  MessageCircle,
  Cloud,
  Download,
  Image,
  Palette,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Move,
  Type,
  FlipHorizontal,
  ZoomIn,
  ZoomOut,
  Copy,
  Layers,
  BookOpen,
  User,
  Sparkles,
  Save,
  FolderOpen,
  FileText,
  FileImage
} from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { characters, backgrounds } from './components/Characters';
import { moreCharacters } from './components/MoreCharacters';
import { objects } from './components/Objects';
import { 
  skinTones, 
  hairStyles, 
  hairColors, 
  outfits, 
  outfitColors, 
  accessories, 
  expressions,
  generateCharacterSVG 
} from './components/CharacterBuilder';

// Combinar todos os personagens
const allCharacters = [...characters, ...moreCharacters];

function App() {
  // Estado dos painéis da banda desenhada
  const [panels, setPanels] = useState([
    { id: 1, elements: [], background: 'white' }
  ]);
  const [currentPanel, setCurrentPanel] = useState(0);
  const [selectedElement, setSelectedElement] = useState(null);
  const [activeTab, setActiveTab] = useState('characters');
  const [comicTitle, setComicTitle] = useState('A Minha Banda Desenhada');
  const [showTitleEdit, setShowTitleEdit] = useState(false);
  
  // Estado do criador de personagens
  const [showCharacterBuilder, setShowCharacterBuilder] = useState(false);
  const [characterConfig, setCharacterConfig] = useState({
    skinTone: skinTones[0].color,
    hairStyle: 'short',
    hairColor: hairColors[1].color,
    outfit: 'casual',
    outfitColor1: outfitColors[1].color,
    outfitColor2: outfitColors[10].color,
    accessory: 'none',
    expression: 'happy'
  });
  
  // Estado para exportação e guardar
  const [showExportModal, setShowExportModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [savedProjects, setSavedProjects] = useState([]);
  const [isExporting, setIsExporting] = useState(false);
  
  const panelRef = useRef(null);
  const exportRef = useRef(null);

  // Carregar projetos guardados ao iniciar
  useEffect(() => {
    const saved = localStorage.getItem('comicProjects');
    if (saved) {
      setSavedProjects(JSON.parse(saved));
    }
  }, []);
  const dragRef = useRef({ isDragging: false, startX: 0, startY: 0, elementId: null });

  // Adicionar personagem ao painel
  const addCharacter = (character) => {
    const newElement = {
      id: Date.now(),
      type: 'character',
      characterId: character.id,
      svg: character.svg,
      x: 50,
      y: 50,
      scale: 1,
      flipped: false,
      zIndex: panels[currentPanel].elements.length
    };

    setPanels(prev => prev.map((panel, idx) => 
      idx === currentPanel 
        ? { ...panel, elements: [...panel.elements, newElement] }
        : panel
    ));
  };

  // Adicionar objeto ao painel
  const addObject = (object) => {
    const newElement = {
      id: Date.now(),
      type: 'object',
      objectId: object.id,
      svg: object.svg,
      x: 150,
      y: 100,
      scale: 0.8,
      flipped: false,
      zIndex: panels[currentPanel].elements.length
    };

    setPanels(prev => prev.map((panel, idx) => 
      idx === currentPanel 
        ? { ...panel, elements: [...panel.elements, newElement] }
        : panel
    ));
  };

  // Adicionar personagem customizado ao painel
  const addCustomCharacter = () => {
    const svg = generateCharacterSVG(characterConfig);
    const newElement = {
      id: Date.now(),
      type: 'character',
      characterId: 'custom-' + Date.now(),
      svg: svg,
      x: 150,
      y: 120,
      scale: 1,
      flipped: false,
      zIndex: panels[currentPanel].elements.length
    };

    setPanels(prev => prev.map((panel, idx) => 
      idx === currentPanel 
        ? { ...panel, elements: [...panel.elements, newElement] }
        : panel
    ));
    setShowCharacterBuilder(false);
  };

  // Adicionar balão de fala ou pensamento
  const addBubble = (type) => {
    const newElement = {
      id: Date.now(),
      type: type, // 'speech' ou 'thought'
      text: type === 'speech' ? 'Olá!' : 'Hmm...',
      x: 100,
      y: 50,
      scale: 1,
      zIndex: panels[currentPanel].elements.length
    };

    setPanels(prev => prev.map((panel, idx) => 
      idx === currentPanel 
        ? { ...panel, elements: [...panel.elements, newElement] }
        : panel
    ));
  };

  // Adicionar texto simples
  const addText = () => {
    const newElement = {
      id: Date.now(),
      type: 'text',
      text: 'Texto',
      x: 100,
      y: 50,
      fontSize: 18,
      color: '#1a1a2e',
      zIndex: panels[currentPanel].elements.length
    };

    setPanels(prev => prev.map((panel, idx) => 
      idx === currentPanel 
        ? { ...panel, elements: [...panel.elements, newElement] }
        : panel
    ));
  };

  // Mudar fundo do painel
  const setBackground = (bgId) => {
    setPanels(prev => prev.map((panel, idx) => 
      idx === currentPanel 
        ? { ...panel, background: bgId }
        : panel
    ));
  };

  // Adicionar novo painel
  const addPanel = () => {
    setPanels(prev => [...prev, { id: Date.now(), elements: [], background: 'white' }]);
    setCurrentPanel(panels.length);
  };

  // Duplicar painel
  const duplicatePanel = () => {
    const currentPanelData = panels[currentPanel];
    const newPanel = {
      ...currentPanelData,
      id: Date.now(),
      elements: currentPanelData.elements.map(el => ({ ...el, id: Date.now() + Math.random() }))
    };
    setPanels(prev => [...prev, newPanel]);
    setCurrentPanel(panels.length);
  };

  // Remover painel
  const removePanel = () => {
    if (panels.length > 1) {
      setPanels(prev => prev.filter((_, idx) => idx !== currentPanel));
      setCurrentPanel(Math.max(0, currentPanel - 1));
    }
  };

  // Remover elemento selecionado
  const removeElement = () => {
    if (selectedElement !== null) {
      setPanels(prev => prev.map((panel, idx) => 
        idx === currentPanel 
          ? { ...panel, elements: panel.elements.filter(el => el.id !== selectedElement) }
          : panel
      ));
      setSelectedElement(null);
    }
  };

  // Atualizar elemento
  const updateElement = (elementId, updates) => {
    setPanels(prev => prev.map((panel, idx) => 
      idx === currentPanel 
        ? { 
            ...panel, 
            elements: panel.elements.map(el => 
              el.id === elementId ? { ...el, ...updates } : el
            )
          }
        : panel
    ));
  };

  // Flip horizontal do personagem ou objeto
  const flipCharacter = () => {
    if (selectedElement !== null) {
      const element = panels[currentPanel].elements.find(el => el.id === selectedElement);
      if (element && (element.type === 'character' || element.type === 'object')) {
        updateElement(selectedElement, { flipped: !element.flipped });
      }
    }
  };

  // Aumentar/diminuir escala
  const scaleElement = (delta) => {
    if (selectedElement !== null) {
      const element = panels[currentPanel].elements.find(el => el.id === selectedElement);
      if (element) {
        const newScale = Math.max(0.3, Math.min(3, element.scale + delta));
        updateElement(selectedElement, { scale: newScale });
      }
    }
  };

  // Trazer para frente / enviar para trás
  const changeZIndex = (direction) => {
    if (selectedElement !== null) {
      const element = panels[currentPanel].elements.find(el => el.id === selectedElement);
      if (element) {
        const maxZ = Math.max(...panels[currentPanel].elements.map(el => el.zIndex));
        const newZ = direction === 'up' 
          ? Math.min(maxZ + 1, 100) 
          : Math.max(0, element.zIndex - 1);
        updateElement(selectedElement, { zIndex: newZ });
      }
    }
  };

  // Handlers de drag
  const handleMouseDown = (e, elementId) => {
    e.preventDefault();
    e.stopPropagation();
    const rect = panelRef.current.getBoundingClientRect();
    dragRef.current = {
      isDragging: true,
      startX: e.clientX - rect.left,
      startY: e.clientY - rect.top,
      elementId: elementId
    };
    setSelectedElement(elementId);
  };

  // Handler para click em elemento (selecionar sem arrastar)
  const handleElementClick = (e, elementId) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedElement(elementId);
  };

  const handleMouseMove = useCallback((e) => {
    if (!dragRef.current.isDragging || !panelRef.current) return;
    
    const rect = panelRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    updateElement(dragRef.current.elementId, { x, y });
  }, [currentPanel]);

  const handleMouseUp = useCallback(() => {
    dragRef.current.isDragging = false;
  }, []);

  // Obter estilo do fundo
  const getBackgroundStyle = (bgId) => {
    const bg = backgrounds.find(b => b.id === bgId);
    if (!bg) return { background: '#ffffff' };
    if (bg.gradient) return { background: bg.gradient };
    return { background: bg.color };
  };

  // Exportar como imagem usando html2canvas
  const exportAsImage = async () => {
    // Criar container temporário para a exportação
    const exportContainer = document.createElement('div');
    exportContainer.style.cssText = 'position: fixed; left: -9999px; top: 0; background: white; padding: 20px;';
    document.body.appendChild(exportContainer);

    // Título
    const title = document.createElement('h1');
    title.textContent = comicTitle;
    title.style.cssText = 'font-family: "Comic Sans MS", cursive; font-size: 32px; text-align: center; margin-bottom: 20px; color: #1a1a2e;';
    exportContainer.appendChild(title);

    // Grid de painéis
    const grid = document.createElement('div');
    const cols = Math.min(panels.length, 2);
    grid.style.cssText = `display: grid; grid-template-columns: repeat(${cols}, 400px); gap: 10px; justify-content: center;`;
    exportContainer.appendChild(grid);

    // Criar cada painel
    for (const panel of panels) {
      const panelDiv = document.createElement('div');
      const bg = backgrounds.find(b => b.id === panel.background);
      const bgStyle = bg?.gradient || bg?.color || '#ffffff';
      panelDiv.style.cssText = `width: 400px; height: 267px; position: relative; border: 3px solid #1a1a2e; border-radius: 8px; overflow: hidden; background: ${bgStyle};`;
      
      // Elementos do painel
      for (const el of panel.elements) {
        const elDiv = document.createElement('div');
        elDiv.style.cssText = `position: absolute; left: ${el.x * 400/600}px; top: ${el.y * 267/400}px; transform: translate(-50%, -50%) scale(${el.scale * 0.67}) ${el.flipped ? 'scaleX(-1)' : ''};`;
        
        if (el.type === 'character' || el.type === 'object') {
          elDiv.innerHTML = el.svg;
          elDiv.style.width = el.type === 'character' ? '67px' : '53px';
        } else if (el.type === 'speech' || el.type === 'thought') {
          elDiv.style.cssText += `background: white; padding: 8px 12px; border-radius: ${el.type === 'thought' ? '50%' : '12px'}; border: 2px solid #1a1a2e; font-family: "Comic Sans MS", cursive; font-size: 11px; max-width: 100px; text-align: center;`;
          elDiv.textContent = el.text;
        }
        panelDiv.appendChild(elDiv);
      }
      grid.appendChild(panelDiv);
    }

    // Usar canvas nativo para captura
    await new Promise(resolve => setTimeout(resolve, 100));
    
    try {
      const canvas = document.createElement('canvas');
      const width = cols * 410 + 40;
      const height = Math.ceil(panels.length / cols) * 277 + 100;
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      
      // Fundo branco
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, width, height);
      
      // Título
      ctx.fillStyle = '#1a1a2e';
      ctx.font = 'bold 28px "Comic Sans MS", cursive';
      ctx.textAlign = 'center';
      ctx.fillText(comicTitle, width / 2, 40);
      
      // Desenhar bordas dos painéis
      ctx.strokeStyle = '#1a1a2e';
      ctx.lineWidth = 3;
      
      panels.forEach((panel, idx) => {
        const col = idx % cols;
        const row = Math.floor(idx / cols);
        const x = 20 + col * 410;
        const y = 60 + row * 277;
        
        // Fundo do painel
        const bg = backgrounds.find(b => b.id === panel.background);
        if (bg?.color) {
          ctx.fillStyle = bg.color;
          ctx.fillRect(x, y, 400, 267);
        } else {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(x, y, 400, 267);
        }
        
        // Borda
        ctx.strokeRect(x, y, 400, 267);
        
        // Número do painel
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.textAlign = 'right';
        ctx.fillText(`${idx + 1}`, x + 395, y + 262);
      });
      
      // Download
      const link = document.createElement('a');
      link.download = `${comicTitle.replace(/\s+/g, '_')}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      
    } catch (error) {
      console.error('Erro na exportação:', error);
      // Fallback: captura de ecrã
      alert('Para melhor resultado, use Ctrl+Shift+S (ou Cmd+Shift+4 no Mac) para capturar o ecrã da banda desenhada.');
    }
    
    document.body.removeChild(exportContainer);
  };

  // Exportar como PDF
  const exportAsPDF = async () => {
    setIsExporting(true);
    try {
      const pdf = new jsPDF('l', 'mm', 'a4'); // landscape
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Título
      pdf.setFontSize(24);
      pdf.setFont('helvetica', 'bold');
      pdf.text(comicTitle, pageWidth / 2, 15, { align: 'center' });
      
      const panelWidth = (pageWidth - 30) / 2;
      const panelHeight = (pageHeight - 40) / 2;
      let currentPage = 0;
      
      for (let i = 0; i < panels.length; i++) {
        const col = i % 2;
        const row = Math.floor((i % 4) / 2);
        
        if (i > 0 && i % 4 === 0) {
          pdf.addPage();
          currentPage++;
          pdf.setFontSize(12);
          pdf.text(`${comicTitle} - Página ${currentPage + 1}`, pageWidth / 2, 10, { align: 'center' });
        }
        
        const x = 10 + col * (panelWidth + 5);
        const y = 25 + row * (panelHeight + 5);
        
        // Desenhar borda do painel
        pdf.setDrawColor(30, 30, 46);
        pdf.setLineWidth(0.5);
        pdf.rect(x, y, panelWidth, panelHeight);
        
        // Número do painel
        pdf.setFontSize(10);
        pdf.setFont('helvetica', 'normal');
        pdf.text(`${i + 1}`, x + panelWidth - 5, y + panelHeight - 3);
      }
      
      pdf.save(`${comicTitle.replace(/\s+/g, '_')}.pdf`);
    } catch (error) {
      console.error('Erro ao exportar PDF:', error);
      alert('Erro ao exportar PDF. Tenta novamente.');
    }
    setIsExporting(false);
    setShowExportModal(false);
  };

  // Guardar projeto
  const saveProject = (name) => {
    const project = {
      id: Date.now(),
      name: name || comicTitle,
      title: comicTitle,
      panels: panels,
      savedAt: new Date().toISOString()
    };
    
    const updated = [...savedProjects.filter(p => p.name !== name), project];
    setSavedProjects(updated);
    localStorage.setItem('comicProjects', JSON.stringify(updated));
    setShowSaveModal(false);
    alert('Projeto guardado com sucesso!');
  };

  // Carregar projeto
  const loadProject = (project) => {
    setComicTitle(project.title);
    setPanels(project.panels);
    setCurrentPanel(0);
    setSelectedElement(null);
    setShowSaveModal(false);
  };

  // Eliminar projeto guardado
  const deleteProject = (projectId) => {
    const updated = savedProjects.filter(p => p.id !== projectId);
    setSavedProjects(updated);
    localStorage.setItem('comicProjects', JSON.stringify(updated));
  };

  // Exportar projeto como ficheiro JSON
  const exportProjectFile = () => {
    const project = {
      title: comicTitle,
      panels: panels,
      exportedAt: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(project, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${comicTitle.replace(/\s+/g, '_')}.comic.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  // Importar projeto de ficheiro JSON
  const importProjectFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const project = JSON.parse(e.target.result);
        if (project.panels && project.title) {
          setComicTitle(project.title);
          setPanels(project.panels);
          setCurrentPanel(0);
          setSelectedElement(null);
          setShowSaveModal(false);
          alert('Projeto importado com sucesso!');
        } else {
          alert('Ficheiro inválido.');
        }
      } catch (error) {
        alert('Erro ao ler o ficheiro.');
      }
    };
    reader.readAsText(file);
  };

  // Obter elemento selecionado
  const selectedEl = selectedElement !== null 
    ? panels[currentPanel].elements.find(el => el.id === selectedElement)
    : null;

  return (
    <div 
      className="min-h-screen p-4"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-indigo-600" />
            {showTitleEdit ? (
              <input
                type="text"
                value={comicTitle}
                onChange={(e) => setComicTitle(e.target.value)}
                onBlur={() => setShowTitleEdit(false)}
                onKeyDown={(e) => e.key === 'Enter' && setShowTitleEdit(false)}
                className="text-2xl font-bold text-gray-800 border-b-2 border-indigo-500 outline-none bg-transparent"
                autoFocus
              />
            ) : (
              <h1 
                className="text-2xl font-bold text-gray-800 cursor-pointer hover:text-indigo-600 transition-colors"
                onClick={() => setShowTitleEdit(true)}
                title="Clica para editar o título"
              >
                {comicTitle}
              </h1>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSaveModal(true)}
              className="toolbar-btn bg-blue-500 text-white hover:bg-blue-600"
            >
              <Save size={18} />
              <span className="hidden sm:inline">Guardar</span>
            </button>
            <button
              onClick={() => setShowExportModal(true)}
              className="toolbar-btn bg-green-500 text-white hover:bg-green-600"
            >
              <Download size={18} />
              <span className="hidden sm:inline">Exportar</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Sidebar - Ferramentas */}
        <div className="lg:col-span-1 space-y-4">
          {/* Botão Criar Personagem */}
          <button
            onClick={() => setShowCharacterBuilder(true)}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-lg p-3 flex items-center justify-center gap-2 hover:from-purple-600 hover:to-pink-600 transition-all font-medium"
          >
            <Sparkles size={20} />
            Criar Personagem
          </button>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-lg p-2 grid grid-cols-2 gap-1">
            <button
              onClick={() => setActiveTab('characters')}
              className={`py-2.5 px-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1 ${
                activeTab === 'characters' 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <User size={14} /> Personagens
            </button>
            <button
              onClick={() => setActiveTab('objects')}
              className={`py-2.5 px-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1 ${
                activeTab === 'objects' 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Layers size={14} /> Objetos
            </button>
            <button
              onClick={() => setActiveTab('bubbles')}
              className={`py-2.5 px-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1 ${
                activeTab === 'bubbles' 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <MessageCircle size={14} /> Balões
            </button>
            <button
              onClick={() => setActiveTab('backgrounds')}
              className={`py-2.5 px-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1 ${
                activeTab === 'backgrounds' 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-md' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Palette size={14} /> Fundos
            </button>
          </div>

          {/* Content based on tab */}
          <div className="bg-white rounded-xl shadow-lg p-4 max-h-96 overflow-y-auto">
            {activeTab === 'characters' && (
              <div className="grid grid-cols-3 gap-2">
                {allCharacters.map(char => (
                  <button
                    key={char.id}
                    onClick={() => addCharacter(char)}
                    className="p-2 rounded-lg hover:bg-indigo-50 transition-all character-preview border-2 border-transparent hover:border-indigo-300"
                    title={char.name}
                  >
                    <div 
                      className="w-full aspect-square"
                      dangerouslySetInnerHTML={{ __html: char.svg }}
                    />
                    <p className="text-xs text-center mt-1 text-gray-600 truncate">{char.name}</p>
                  </button>
                ))}
              </div>
            )}

            {activeTab === 'objects' && (
              <div className="grid grid-cols-3 gap-2">
                {objects.map(obj => (
                  <button
                    key={obj.id}
                    onClick={() => addObject(obj)}
                    className="p-2 rounded-lg hover:bg-indigo-50 transition-all character-preview border-2 border-transparent hover:border-indigo-300"
                    title={obj.name}
                  >
                    <div 
                      className="w-full aspect-square flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: obj.svg }}
                    />
                    <p className="text-xs text-center mt-1 text-gray-600 truncate">{obj.name}</p>
                  </button>
                ))}
              </div>
            )}

            {activeTab === 'bubbles' && (
              <div className="space-y-3">
                <button
                  onClick={() => addBubble('speech')}
                  className="w-full p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 transition-all flex items-center gap-3"
                >
                  <MessageCircle className="text-indigo-500" size={24} />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Balão de Fala</p>
                    <p className="text-xs text-gray-500">Para diálogos</p>
                  </div>
                </button>
                <button
                  onClick={() => addBubble('thought')}
                  className="w-full p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 transition-all flex items-center gap-3"
                >
                  <Cloud className="text-indigo-500" size={24} />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Balão de Pensamento</p>
                    <p className="text-xs text-gray-500">Para pensamentos</p>
                  </div>
                </button>
                <button
                  onClick={addText}
                  className="w-full p-4 rounded-lg border-2 border-dashed border-gray-300 hover:border-indigo-400 hover:bg-indigo-50 transition-all flex items-center gap-3"
                >
                  <Type className="text-indigo-500" size={24} />
                  <div className="text-left">
                    <p className="font-medium text-gray-800">Texto</p>
                    <p className="text-xs text-gray-500">Narração ou onomatopeias</p>
                  </div>
                </button>
              </div>
            )}

            {activeTab === 'backgrounds' && (
              <div className="grid grid-cols-2 gap-2">
                {backgrounds.map(bg => (
                  <button
                    key={bg.id}
                    onClick={() => setBackground(bg.id)}
                    className={`p-2 rounded-lg border-2 transition-all ${
                      panels[currentPanel].background === bg.id 
                        ? 'border-indigo-500' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <div 
                      className="w-full h-16 rounded"
                      style={getBackgroundStyle(bg.id)}
                    />
                    <p className="text-xs text-center mt-1 text-gray-600">{bg.name}</p>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Ferramentas de edição do elemento selecionado */}
          {selectedEl && (
            <div className="bg-white rounded-xl shadow-lg p-4">
              <h3 className="font-medium text-gray-700 mb-3 flex items-center gap-2">
                <Move size={16} />
                Editar Elemento
              </h3>
              
              {(selectedEl.type === 'speech' || selectedEl.type === 'thought' || selectedEl.type === 'text') && (
                <div className="mb-3">
                  <label className="text-xs text-gray-500 block mb-1">Texto:</label>
                  <textarea
                    value={selectedEl.text}
                    onChange={(e) => updateElement(selectedEl.id, { text: e.target.value })}
                    className="w-full p-2 border rounded-lg text-sm resize-none"
                    rows={2}
                  />
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {(selectedEl.type === 'character' || selectedEl.type === 'object') && (
                  <button
                    onClick={flipCharacter}
                    className="flex-1 p-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
                    title="Virar horizontalmente"
                  >
                    <FlipHorizontal size={18} className="mx-auto" />
                  </button>
                )}
                <button
                  onClick={() => scaleElement(0.1)}
                  className="flex-1 p-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Aumentar"
                >
                  <ZoomIn size={18} className="mx-auto" />
                </button>
                <button
                  onClick={() => scaleElement(-0.1)}
                  className="flex-1 p-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Diminuir"
                >
                  <ZoomOut size={18} className="mx-auto" />
                </button>
                <button
                  onClick={() => changeZIndex('up')}
                  className="flex-1 p-2 rounded bg-gray-100 hover:bg-gray-200 transition-colors"
                  title="Trazer para frente"
                >
                  <Layers size={18} className="mx-auto" />
                </button>
                <button
                  onClick={removeElement}
                  className="flex-1 p-2 rounded bg-red-100 hover:bg-red-200 text-red-600 transition-colors"
                  title="Eliminar"
                >
                  <Trash2 size={18} className="mx-auto" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Main Panel Area */}
        <div className="lg:col-span-3 space-y-4">
          {/* Panel controls */}
          <div className="bg-white rounded-xl shadow-lg p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPanel(Math.max(0, currentPanel - 1))}
                disabled={currentPanel === 0}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-medium text-gray-700">
                Painel {currentPanel + 1} de {panels.length}
              </span>
              <button
                onClick={() => setCurrentPanel(Math.min(panels.length - 1, currentPanel + 1))}
                disabled={currentPanel === panels.length - 1}
                className="p-2 rounded-lg hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={addPanel}
                className="toolbar-btn text-sm"
              >
                <Plus size={16} />
                Novo Painel
              </button>
              <button
                onClick={duplicatePanel}
                className="toolbar-btn text-sm"
              >
                <Copy size={16} />
                Duplicar
              </button>
              <button
                onClick={removePanel}
                disabled={panels.length <= 1}
                className="toolbar-btn text-sm text-red-600 hover:bg-red-50 disabled:opacity-30"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>

          {/* Comic Panel */}
          <div 
            ref={panelRef}
            className="comic-panel w-full aspect-[3/2] relative cursor-crosshair"
            style={getBackgroundStyle(panels[currentPanel].background)}
            onClick={() => setSelectedElement(null)}
          >
            {panels[currentPanel].elements.map(element => {
              if (element.type === 'character') {
                return (
                  <div
                    key={element.id}
                    className={`absolute draggable ${selectedElement === element.id ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
                    style={{
                      left: element.x,
                      top: element.y,
                      transform: `translate(-50%, -50%) scale(${element.scale}) ${element.flipped ? 'scaleX(-1)' : ''}`,
                      width: '100px',
                      zIndex: element.zIndex
                    }}
                    onClick={(e) => handleElementClick(e, element.id)}
                    onMouseDown={(e) => handleMouseDown(e, element.id)}
                    dangerouslySetInnerHTML={{ __html: element.svg }}
                  />
                );
              }

              if (element.type === 'object') {
                return (
                  <div
                    key={element.id}
                    className={`absolute draggable ${selectedElement === element.id ? 'ring-2 ring-indigo-500 ring-offset-2' : ''}`}
                    style={{
                      left: element.x,
                      top: element.y,
                      transform: `translate(-50%, -50%) scale(${element.scale}) ${element.flipped ? 'scaleX(-1)' : ''}`,
                      width: '80px',
                      zIndex: element.zIndex
                    }}
                    onClick={(e) => handleElementClick(e, element.id)}
                    onMouseDown={(e) => handleMouseDown(e, element.id)}
                    dangerouslySetInnerHTML={{ __html: element.svg }}
                  />
                );
              }
              
              if (element.type === 'speech') {
                return (
                  <div
                    key={element.id}
                    className={`speech-bubble ${selectedElement === element.id ? 'ring-2 ring-indigo-500' : ''}`}
                    style={{
                      left: element.x,
                      top: element.y,
                      transform: `translate(-50%, -50%) scale(${element.scale})`,
                      zIndex: element.zIndex
                    }}
                    onClick={(e) => handleElementClick(e, element.id)}
                    onMouseDown={(e) => handleMouseDown(e, element.id)}
                  >
                    {element.text}
                  </div>
                );
              }
              
              if (element.type === 'thought') {
                return (
                  <div
                    key={element.id}
                    className={`thought-bubble ${selectedElement === element.id ? 'ring-2 ring-indigo-500' : ''}`}
                    style={{
                      left: element.x,
                      top: element.y,
                      transform: `translate(-50%, -50%) scale(${element.scale})`,
                      zIndex: element.zIndex
                    }}
                    onClick={(e) => handleElementClick(e, element.id)}
                    onMouseDown={(e) => handleMouseDown(e, element.id)}
                  >
                    {element.text}
                  </div>
                );
              }
              
              if (element.type === 'text') {
                return (
                  <div
                    key={element.id}
                    className={`absolute draggable font-bold ${selectedElement === element.id ? 'ring-2 ring-indigo-500' : ''}`}
                    style={{
                      left: element.x,
                      top: element.y,
                      transform: 'translate(-50%, -50%)',
                      fontSize: `${element.fontSize}px`,
                      color: element.color,
                      fontFamily: 'Comic Sans MS, cursive',
                      zIndex: element.zIndex,
                      textShadow: '1px 1px 0 white, -1px -1px 0 white, 1px -1px 0 white, -1px 1px 0 white'
                    }}
                    onClick={(e) => handleElementClick(e, element.id)}
                    onMouseDown={(e) => handleMouseDown(e, element.id)}
                  >
                    {element.text}
                  </div>
                );
              }
              
              return null;
            })}
            
            {/* Dica quando o painel está vazio */}
            {panels[currentPanel].elements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-center text-gray-400">
                  <Image size={48} className="mx-auto mb-2 opacity-50" />
                  <p className="text-lg">Arrasta personagens e balões para aqui!</p>
                  <p className="text-sm">Clica nos elementos à esquerda para adicionar</p>
                </div>
              </div>
            )}
          </div>

          {/* Mini panels preview */}
          <div className="bg-white rounded-xl shadow-lg p-4">
            <h3 className="font-medium text-gray-700 mb-3">Pré-visualização da História</h3>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {panels.map((panel, idx) => (
                <button
                  key={panel.id}
                  onClick={() => setCurrentPanel(idx)}
                  className={`flex-shrink-0 w-32 aspect-[3/2] comic-panel overflow-hidden ${
                    idx === currentPanel ? 'ring-2 ring-indigo-500' : ''
                  }`}
                  style={getBackgroundStyle(panel.background)}
                >
                  <div className="relative w-full h-full transform scale-[0.2] origin-top-left" style={{ width: '500%', height: '500%' }}>
                    {panel.elements.map(element => {
                      if (element.type === 'character') {
                        return (
                          <div
                            key={element.id}
                            className="absolute"
                            style={{
                              left: element.x,
                              top: element.y,
                              transform: `translate(-50%, -50%) scale(${element.scale}) ${element.flipped ? 'scaleX(-1)' : ''}`,
                              width: '100px'
                            }}
                            dangerouslySetInnerHTML={{ __html: element.svg }}
                          />
                        );
                      }
                      if (element.type === 'object') {
                        return (
                          <div
                            key={element.id}
                            className="absolute"
                            style={{
                              left: element.x,
                              top: element.y,
                              transform: `translate(-50%, -50%) scale(${element.scale}) ${element.flipped ? 'scaleX(-1)' : ''}`,
                              width: '80px'
                            }}
                            dangerouslySetInnerHTML={{ __html: element.svg }}
                          />
                        );
                      }
                      if (element.type === 'speech' || element.type === 'thought') {
                        return (
                          <div
                            key={element.id}
                            className={element.type === 'speech' ? 'speech-bubble' : 'thought-bubble'}
                            style={{
                              left: element.x,
                              top: element.y,
                              transform: `translate(-50%, -50%) scale(${element.scale})`,
                              fontSize: '10px',
                              padding: '5px 8px',
                              minWidth: '40px'
                            }}
                          >
                            {element.text}
                          </div>
                        );
                      }
                      return null;
                    })}
                  </div>
                  <div className="absolute bottom-1 right-1 bg-black bg-opacity-50 text-white text-xs px-1.5 rounded">
                    {idx + 1}
                  </div>
                </button>
              ))}
              <button
                onClick={addPanel}
                className="flex-shrink-0 w-32 aspect-[3/2] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 hover:border-indigo-400 hover:text-indigo-500 transition-colors"
              >
                <Plus size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Instruções */}
      <div className="max-w-7xl mx-auto mt-4">
        <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-4">
          <h3 className="font-bold text-gray-700 mb-2">📝 Como usar:</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-sm text-gray-600">
            <div>
              <strong>1. Criar personagens:</strong>
              <p>Usa o botão "Criar Personagem" para customizar!</p>
            </div>
            <div>
              <strong>2. Mover elementos:</strong>
              <p>Arrasta os elementos para os posicionar.</p>
            </div>
            <div>
              <strong>3. Adicionar diálogos:</strong>
              <p>Usa os balões de fala e pensamento.</p>
            </div>
            <div>
              <strong>4. Guardar projeto:</strong>
              <p>Exporta como .json para usar noutro dispositivo!</p>
            </div>
            <div>
              <strong>5. Exportar:</strong>
              <p>Guarda como PNG ou PDF para partilhar!</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal do Criador de Personagens */}
      {showCharacterBuilder && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles size={24} />
                Criar Personagem
              </h2>
              <button
                onClick={() => setShowCharacterBuilder(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-all"
              >
                ✕
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[70vh] overflow-y-auto">
              {/* Preview do personagem */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-64 bg-gradient-to-b from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mb-4 shadow-inner">
                  <div 
                    className="w-36"
                    dangerouslySetInnerHTML={{ __html: generateCharacterSVG(characterConfig) }}
                  />
                </div>
                <button
                  onClick={addCustomCharacter}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-xl font-medium hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Plus size={20} />
                  Adicionar ao Painel
                </button>
              </div>

              {/* Opções de customização */}
              <div className="space-y-4">
                {/* Tom de pele */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tom de Pele</label>
                  <div className="flex gap-2 flex-wrap">
                    {skinTones.map(tone => (
                      <button
                        key={tone.id}
                        onClick={() => setCharacterConfig(prev => ({ ...prev, skinTone: tone.color }))}
                        className={`w-10 h-10 rounded-full border-4 transition-all ${characterConfig.skinTone === tone.color ? 'border-purple-500 scale-110' : 'border-gray-200'}`}
                        style={{ backgroundColor: tone.color }}
                        title={tone.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Estilo de cabelo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estilo de Cabelo</label>
                  <div className="grid grid-cols-3 gap-2">
                    {hairStyles.map(style => (
                      <button
                        key={style.id}
                        onClick={() => setCharacterConfig(prev => ({ ...prev, hairStyle: style.id }))}
                        className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${characterConfig.hairStyle === style.id ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        {style.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cor do cabelo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cor do Cabelo</label>
                  <div className="flex gap-2 flex-wrap">
                    {hairColors.map(color => (
                      <button
                        key={color.id}
                        onClick={() => setCharacterConfig(prev => ({ ...prev, hairColor: color.color }))}
                        className={`w-8 h-8 rounded-full border-3 transition-all ${characterConfig.hairColor === color.color ? 'border-purple-500 scale-110 ring-2 ring-purple-300' : 'border-gray-200'}`}
                        style={{ backgroundColor: color.color }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Roupa */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Roupa</label>
                  <div className="grid grid-cols-3 gap-2">
                    {outfits.map(outfit => (
                      <button
                        key={outfit.id}
                        onClick={() => setCharacterConfig(prev => ({ ...prev, outfit: outfit.id }))}
                        className={`py-2 px-3 rounded-lg text-xs font-medium transition-all ${characterConfig.outfit === outfit.id ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        {outfit.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Cor da roupa */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cor da Roupa</label>
                  <div className="flex gap-2 flex-wrap">
                    {outfitColors.slice(0, 8).map(color => (
                      <button
                        key={color.id}
                        onClick={() => setCharacterConfig(prev => ({ ...prev, outfitColor1: color.color }))}
                        className={`w-8 h-8 rounded-full border-3 transition-all ${characterConfig.outfitColor1 === color.color ? 'border-purple-500 scale-110 ring-2 ring-purple-300' : 'border-gray-200'}`}
                        style={{ backgroundColor: color.color }}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>

                {/* Expressão */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expressão</label>
                  <div className="grid grid-cols-4 gap-2">
                    {expressions.map(expr => (
                      <button
                        key={expr.id}
                        onClick={() => setCharacterConfig(prev => ({ ...prev, expression: expr.id }))}
                        className={`py-2 px-2 rounded-lg text-xs font-medium transition-all ${characterConfig.expression === expr.id ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        {expr.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Acessórios */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Acessórios</label>
                  <div className="grid grid-cols-3 gap-2">
                    {accessories.map(acc => (
                      <button
                        key={acc.id}
                        onClick={() => setCharacterConfig(prev => ({ ...prev, accessory: acc.id }))}
                        className={`py-2 px-2 rounded-lg text-xs font-medium transition-all ${characterConfig.accessory === acc.id ? 'bg-purple-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                      >
                        {acc.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Exportação */}
      {showExportModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Download size={24} />
                Exportar Banda Desenhada
              </h2>
              <button
                onClick={() => setShowExportModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-all"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              <button
                onClick={() => { exportAsImage(); setShowExportModal(false); }}
                disabled={isExporting}
                className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-blue-400 hover:bg-blue-50 transition-all flex items-center gap-4 disabled:opacity-50"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <FileImage className="text-blue-600" size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Exportar como PNG</p>
                  <p className="text-sm text-gray-500">Imagem de alta qualidade</p>
                </div>
              </button>
              
              <button
                onClick={exportAsPDF}
                disabled={isExporting}
                className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-red-400 hover:bg-red-50 transition-all flex items-center gap-4 disabled:opacity-50"
              >
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                  <FileText className="text-red-600" size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Exportar como PDF</p>
                  <p className="text-sm text-gray-500">Ideal para imprimir</p>
                </div>
              </button>

              <button
                onClick={() => { exportProjectFile(); setShowExportModal(false); }}
                className="w-full p-4 rounded-xl border-2 border-gray-200 hover:border-purple-400 hover:bg-purple-50 transition-all flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Save className="text-purple-600" size={24} />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-gray-800">Guardar Projeto (.json)</p>
                  <p className="text-sm text-gray-500">Para continuar mais tarde</p>
                </div>
              </button>

              {isExporting && (
                <div className="text-center text-gray-500 py-2">
                  <div className="animate-spin inline-block w-6 h-6 border-2 border-gray-300 border-t-green-500 rounded-full mr-2"></div>
                  A exportar...
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Modal de Guardar/Carregar */}
      {showSaveModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-indigo-500 p-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <FolderOpen size={24} />
                Projetos
              </h2>
              <button
                onClick={() => setShowSaveModal(false)}
                className="text-white hover:bg-white hover:bg-opacity-20 rounded-lg p-2 transition-all"
              >
                ✕
              </button>
            </div>
            <div className="p-6 space-y-4">
              {/* Ações principais */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => saveProject(comicTitle)}
                  className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-medium hover:from-blue-600 hover:to-indigo-600 transition-all flex items-center justify-center gap-2"
                >
                  <Save size={18} />
                  Guardar Atual
                </button>
                <label className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-medium hover:from-green-600 hover:to-emerald-600 transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <FolderOpen size={18} />
                  Importar Ficheiro
                  <input
                    type="file"
                    accept=".json,.comic.json"
                    onChange={importProjectFile}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Lista de projetos guardados */}
              <div>
                <h3 className="font-medium text-gray-700 mb-2">Projetos Guardados</h3>
                {savedProjects.length === 0 ? (
                  <p className="text-gray-400 text-sm text-center py-4">Nenhum projeto guardado</p>
                ) : (
                  <div className="space-y-2 max-h-60 overflow-y-auto">
                    {savedProjects.map(project => (
                      <div
                        key={project.id}
                        className="p-3 rounded-xl border-2 border-gray-200 hover:border-blue-400 transition-all flex items-center justify-between"
                      >
                        <div>
                          <p className="font-medium text-gray-800">{project.name}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(project.savedAt).toLocaleDateString('pt-PT')} - {project.panels.length} painéis
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => loadProject(project)}
                            className="px-3 py-1 rounded-lg bg-blue-100 text-blue-600 text-sm font-medium hover:bg-blue-200 transition-all"
                          >
                            Abrir
                          </button>
                          <button
                            onClick={() => deleteProject(project.id)}
                            className="px-2 py-1 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-all"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
