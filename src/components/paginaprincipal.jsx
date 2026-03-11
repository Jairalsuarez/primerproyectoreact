import { useState } from "react"
import integrantesEquipo from "../data/integrantes"
import Card from "./card"

function Pagina() {
  const [oscuro, setOscuro] = useState(false)

  const toggleTema = () => {
    setOscuro(!oscuro)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <main className="min-h-screen p-6 md:p-12 max-w-6xl mx-auto">
      
      <div className="flex justify-end mb-8">
        <button 
          onClick={toggleTema}
          className="px-4 py-2 border rounded-lg font-bold text-sm uppercase tracking-tighter cursor-pointer"
        >
          {oscuro ? '☀️ Claro' : '🌙 Oscuro'}
        </button>
      </div>

      {/* Encabezado */}
      <header className="flex flex-col md:flex-row justify-between mb-16 md:mb-24 gap-8">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          The creative crew
        </h1>
        <div className="md:w-1/3">
          <h2 className="uppercase font-bold text-sm mb-4">Who we are</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            We are team of creatively diverse, driven, innovative individuals 
            working in various locations from the world.
          </p>
        </div>
      </header>

      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-12 md:gap-y-32">
        {integrantesEquipo.map((miembro, indice) => (
          <div 
            key={miembro.nombre}
            className={indice === 1 || indice === 4 ? "md:mt-32" : ""}
          >
            <Card 
              nombre={miembro.nombre} 
              cargo={miembro.cargo} 
              foto={miembro.foto} 
            />
          </div>
        ))}
      </section>

      <footer className="mt-24 pb-8 text-center text-gray-500 text-sm font-medium">
        creado por Jair 
      </footer>
    </main>
  )
}

export default Pagina