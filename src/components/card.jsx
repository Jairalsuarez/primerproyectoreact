const Card = ({ nombre, cargo, foto }) => {
  return (
    <div className="flex flex-col mb-8 md:mb-0">
      <div className="flex items-start gap-4">
        
        <div className="flex-1">
          <img 
            src={foto} 
            alt={nombre} 
            className="w-full aspect-[3/4] object-cover shadow-sm" 
          />
        </div>
        
       
        <p className="[writing-mode:vertical-lr] text-[12px] md:text-[10px] uppercase tracking-widest pt-2 font-medium">
          {cargo}
        </p>
      </div>
      
     
      <p className="mt-4 font-bold text-xl md:text-lg">{nombre}</p>
    </div>
  )
}

export default Card