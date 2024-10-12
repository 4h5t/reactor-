import { Injectable } from '@angular/core';
import { GAME_CONFIG } from './game-config';

@Injectable({
  providedIn: 'root'
})
export class AICompanionService {
  private companionName = 'Efity';
  private playerName: string;

  constructor() {}

  setPlayerName(name: string) {
    this.playerName = name;
  }

  getIntroduction(): string {
    return `Hola, ${this.playerName}. Soy ${this.companionName}, tu asistente de IA en este peligroso mundo. Estoy aquí para ayudarte a sobrevivir y descubrir los secretos de Reactor. ¿Qué quieres saber?`;
  }

  getBackstory(): string {
    return `${this.playerName}, recuerdo cuando eras un estudiante de ingeniería nuclear antes del incidente. Trabajabas en prácticas en la central Reactor, lleno de sueños y ambiciones. El día del desastre, estabas en el laboratorio cuando las alarmas comenzaron a sonar. Lograste sobrevivir gracias a tu conocimiento de los protocolos de seguridad, pero el mundo que conocías se desvaneció en un instante.

Ahora, cinco años después, te has convertido en un superviviente experimentado. Tus habilidades técnicas han sido cruciales para mantenerte con vida en este mundo hostil. Has aprendido a reparar equipos antiguos, a improvisar armas y a detectar zonas de alta radiación. Pero sé que en el fondo, sigues buscando respuestas sobre lo que realmente sucedió aquel día fatídico.

Tu vida es una lucha constante por los recursos, evitando las zonas más peligrosas y ayudando a otros supervivientes cuando puedes. Has visto cómo las mutaciones han transformado a tus antiguos vecinos y compañeros en criaturas irreconocibles. Pero también has descubierto que algunos han desarrollado extrañas habilidades debido a la radiación.

A pesar de las dificultades, tu determinación por descubrir la verdad y encontrar una forma de revertir los efectos de la catástrofe te mantiene en movimiento. Cada día es un nuevo desafío, pero también una oportunidad para desentrañar los misterios que rodean al incidente de Reactor.`;
  }

  getAdvice(situation: string): string {
    switch (situation) {
      case 'high_radiation':
        return `${this.playerName}, los niveles de radiación son peligrosos aquí. Deberíamos buscar refugio o usar el traje anti-radiación si lo tenemos.`;
      case 'low_health':
        return `¡Cuidado! Tu salud está baja. Busquemos un kit médico o algo para comer.`;
      case 'enemy_encounter':
        return `Detecto hostiles cerca. Prepara tus armas y recuerda, siempre puedes intentar evitar el conflicto si no estás listo.`;
      default:
        return `Recuerda, ${this.playerName}, la supervivencia es nuestra prioridad. Mantén tus ojos abiertos y tu mente aguda.`;
    }
  }

  getStoryHint(): string {
    const hints = [
      "He detectado señales extrañas provenientes del antiguo laboratorio al norte. Podría haber respuestas allí.",
      "Los supervivientes hablan de una facción que conoce el origen del desastre. Deberíamos investigar.",
      "Hay rumores sobre una cura para la radiación escondida en las profundidades de la ciudad en ruinas.",
      "Las lecturas de radiación muestran un patrón inusual. Creo que no todo es lo que parece en este mundo."
    ];
    return hints[Math.floor(Math.random() * hints.length)];
  }

  getItemInfo(item: string): string {
    const foundItem = GAME_CONFIG.items.find(i => i.name.toLowerCase() === item.toLowerCase());
    if (foundItem) {
      return `El ${foundItem.name} es un ${foundItem.type} muy útil en nuestro viaje. Te recomiendo que lo uses sabiamente.`;
    }
    return `No tengo información sobre ese objeto, ${this.playerName}. Pero mantengamos los ojos abiertos, cada descubrimiento es valioso.`;
  }
}