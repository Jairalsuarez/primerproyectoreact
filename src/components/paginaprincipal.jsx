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
    <main className="min-h-screen p-4 md:p-12 max-w-9xl mx-auto bg-white text-black dark:bg-[#181719] dark:text-white transition-colors duration-300">
      <div className="flex justify-end mb-8">
        <button 
          onClick={toggleTema}
          className="px-4 py-2 border border-black dark:border-white rounded-md font-bold text-xs uppercase cursor-pointer"
        >
          {oscuro ? '☀️' : '🌙'}
        </button>
      </div>

      <header className="flex flex-col md:flex-row justify-between mb-24 gap-8">
        <h1 className="text-4xl md:text-5xl font-bold w-full md:w-1/3 font-serif">
          The creative crew
        </h1>
        <div className="w-full md:w-1/3">
          <h2 className="uppercase font-bold text-sm mb-4">Who we are</h2>
          <p className="text-lg leading-relaxed">
            We are team of creatively diverse, driven, innovative individuals 
            working in various locations from the world.
          </p>
        </div>
      </header>

      <section className="grid grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-16 gap-y-16 md:gap-y-32">
        {integrantesEquipo.map((miembro, indice) => (
          <div 
            key={miembro.nombre}
            className={`
              ${indice % 2 === 1 ? "mt-16 md:mt-0" : ""} 
              ${(indice === 1 || indice === 4) ? "md:mt-32" : ""}
            `}
          >
            <Card 
              nombre={miembro.nombre} 
              cargo={miembro.cargo} 
              foto={miembro.foto} 
            />
          </div>
        ))}
      </section>

      <footer className="mt-32 pb-8 text-center text-gray-500 dark:text-gray-400 text-sm font-semibold">
        creado por Jair - devChallenges.io
      </footer>
    </main>
  )
}

export default Pagina