
import integrantesEquipo from "../data/integrantes"
import Card from "./card"

function Pagina (){
    return(
        <main className="min-h-screen p-8 max-w-6xl mx-auto font-sans">
            <header className="flex flex-col md:flex-row justify-between mb-20 gap-8">
                <h1 className="text-4xl font-serif font-bold w-full md:w-1/3">
                    The creative crew
                </h1>
                <div className="w-full md:w-1/2">
                    <h2 className="uppercase font-bold text-sm mb-2">Who we are</h2>
                    <p className="text-lg leading-snug max-w-md">
                       We are team of creatively diverse, driven, innovative individuals 
                       working in various locations from the world.
                    </p>
                </div>
            </header>
            <section className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16">
    {integrantesEquipo.map((miembro, indice) => (
        <div 
            key={miembro.nombre}
            className={indice === 1 || indice === 4 ? "translate-y-20 md:translate-y-20" : ""}
        >
            
            <Card 
                nombre={miembro.nombre} 
                cargo={miembro.cargo} 
                foto={miembro.foto} 
            />
        </div>
    ))}
</section>
            <footer className="mt-20 text-center text-gray-500 text-sm">
        creado por {`{Jair}`} 
      </footer>

        </main>
    )
}

export default Pagina