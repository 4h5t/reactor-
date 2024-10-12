export const GAME_CONFIG = {
  enemies: [
    { name: 'Zombi Radiactivo', health: 50, damage: 10, radiationResistance: 80 },
    { name: 'Esqueleto Luminoso', health: 30, damage: 15, radiationResistance: 100 },
    { name: 'Mutante Colosal', health: 200, damage: 30, radiationResistance: 50 },
    { name: 'Enjambre de Insectos Radiactivos', health: 60, damage: 5, radiationResistance: 90 },
    { name: 'Humano Enloquecido', health: 40, damage: 20, radiationResistance: 20 }
  ],
  npcs: [
    { name: 'Comerciante Errante', type: 'trader' },
    { name: 'Científico Superviviente', type: 'quest_giver' },
    { name: 'Líder de Asentamiento', type: 'faction_leader' },
    { name: 'Niño Perdido', type: 'quest_giver' },
    { name: 'Mecánico Experto', type: 'craftsman' }
  ],
  structures: [
    'Casa Abandonada',
    'Rascacielos en Ruinas',
    'Búnker Subterráneo',
    'Estación de Metro Colapsada',
    'Hospital Desolado',
    'Fábrica Abandonada',
    'Centro Comercial Invadido por la Naturaleza',
    'Parque de Atracciones Oxidado',
    'Laboratorio Secreto',
    'Cueva Radiactiva'
  ],
  items: [
    { name: 'Detector de Radiación', type: 'tool' },
    { name: 'Traje Anti-radiación', type: 'armor' },
    { name: 'Pistola de Plasma', type: 'weapon' },
    { name: 'Kit Médico Avanzado', type: 'consumable' },
    { name: 'Purificador de Agua Portátil', type: 'tool' },
    { name: 'Jetpack Improvisado', type: 'equipment' },
    { name: 'Escudo de Energía', type: 'equipment' },
    { name: 'Dron de Exploración', type: 'tool' },
    { name: 'Cápsula de Descontaminación', type: 'consumable' },
    { name: 'Generador de Campo de Fuerza', type: 'placeable' }
  ],
  minigames: [
    'Hackeo de Terminales',
    'Carreras de Vehículos Improvisados',
    'Desactivación de Bombas',
    'Caza de Mutantes',
    'Exploración de Ruinas'
  ]
};