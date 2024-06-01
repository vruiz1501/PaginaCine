import { Injectable } from '@angular/core';
import { Movie } from '../movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    { 
      name: 'Alerta Roja', 
      description: 'Un criminólogo del FBI y el ladrón de arte más buscado del mundo se hacen compinches para atrapar a una escurridiza estafadora que siempre va un paso por delante.', 
      image: 'assets/AlertaRoja.jpg' 
    },
    { 
      name: 'A todos los chicos que enamore', 
      description: 'Cuando sus cartas de amor secretas llegan inexplicablemente a los cinco chicos de los que se ha enamorado, la apacible vida estudiantil de Lara Jean se pone patas arriba. Ve todo lo que quieras. Lana Condor y Noah Centineo protagonizan esta comedia romántica basada en la exitosa novela para jóvenes de Jenny Han.', 
      image: 'assets/Atodosloschicosqueenamore.jpg' 
    },
    { 
      name: 'endgame', 
      description: 'Está ambientada después de los catastróficos sucesos de Avengers: Infinity War, en los que Thanos eliminó deliberadamente a la mitad del universo al usar las gemas del infinito. Los que no se fueron, están desesperados por hacer algo (lo que sea) para traer de vuelta a sus seres queridos.', 
      image: 'assets/endgame.jpg' 
    },
    { 
      name: 'Era de Ultron', 
      description: 'Ultrón es aterrador y fruto de un programa piloto dañado creado por Tony Stark y Bruce Banner para lograr la paz en la Tierra. Cuando la programación se volvió loca, Ultrón regresó a la vida con el objetivo de salvar al planeta eliminando su mayor amenaza: la humanidad.', 
      image: 'assets/EradeUltron.jpg' 
    },
    { 
      name: 'Infinity', 
      description: 'Un nuevo peligro acecha procedente de las sombras del cosmos. Thanos, el infame tirano intergaláctico, tiene como objetivo reunir las seis Gemas del Infinito, artefactos de poder inimaginable, y usarlas para imponer su perversa voluntad a toda la existencia.', 
      image: 'assets/Infinity.jpg' 
    },
    { 
      name: 'Mulan', 
      description: 'Es una joven bella, valiente, autosuficiente, en busca Siempre de un bienestar para su familia en el futuro . Asimismo, no se ajusta a las expectativas de una muchacha china de la época: elegante, discreta, y tranquila. En lugar de eso, es torpe,franca e independiente.', 
      image: 'assets/Mulan.jpg' 
    },
    { 
      name: 'Raya', 
      description: 'Raya es la protagonista del largometraje de animación de 2021 de Disney, Raya y el Último Dragón. La hija del jefe Benja de la Tierra del Corazón de Kumandra, es una princesa guerrera en busca del último dragón para salvar su mundo de una fuerza maligna.', 
      image: 'assets/raya.jpg' 
    },
    { 
      name: 'El que se enamora pierde', 
      description: 'Cuando una fotógrafa que se acaba de quedar sin pareja se ve obligada a trabajar con un antiguo rival, su batalla de egos se convierte en una oportunidad para el amor.', 
      image: 'assets/Siteenamoraspierdes.jpg' 
    },
    { 
      name: 'Son como niños 2', 
      description: 'Después de mudarse con su familia de vuelta a su pueblo natal para estar con sus amigos y sus hijos, Lenny (Adam Sandler) se da cuenta de que entre antiguos abusones, nuevos abusones, conductores de autobús esquizofrénicos, policías ebrios en esquíes y 400 infiltrados disfrazados en la fiesta.', 
      image: 'assets/SonComoNiños.jpg' 
    },
    
  ];

  constructor() { }

  getMovies(): Movie[] {
    return this.movies;
  }

  filterMovies(query: string): Movie[] {
    return this.movies.filter(movie => movie.name.toLowerCase().includes(query.toLowerCase()));
  }
}
