
import integrantesEquipo from "../data/integrantes"
import Card from "./card"

function Pagina (){
    return(
        <main>
            <header>
                <h1>
                    The creative crew
                </h1>
                <div>
                    <h2>Who we are</h2>
                    <p>
                       We are team of creatively diverse, driven, innovative individuals 
                       working in various locations from the world.
                    </p>
                </div>
            </header>
            <section className="grid grid.cols-2 md-grid-cols-3 gap-x-8 gap-y-16">
                {integrantesEquipo.map((miembro, indice) => (

                    <div 
            key={miembro.nombre}
            className={indice === 1 || indice === 4 ? "md:mt-24" : ""}
          >
            <TarjetaMiembro 
              nombre={miembro.nombre} 
              cargo={miembro.cargo} 
              foto={miembro.foto} 
            />
          </div>
        ))}
                
            </section>
            <footer className="mt-20 text-center text-gray-500 text-sm">
        creado por {`{tu-usuario}`} - devChallenges.io
      </footer>

        </main>
    )
}

export default Pagina