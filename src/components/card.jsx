const Card = ({ nombre, cargo, foto }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-start gap-2">
        <div className="flex-1">
          <img 
            src={foto} 
            alt={nombre} 
            className="w-full aspect-[3/4] object-cover" 
          />
        </div>
        <p className="[writing-mode:vertical-lr] text-[10px] uppercase tracking-widest pt-2 font-medium">
          {cargo}
        </p>
      </div>
      <p className="mt-4 font-bold text-lg">{nombre}</p>
    </div>
  )
}

export default Card