

const Card = ({nombre, cargo, foto}) => {
    return(
        <div className="flex flex-col">
            <div className="flex gap-2">
                <div className="w-full">
                    <img src={foto} alt="" className="w-full h-auto object-cover" />
                </div>
                <p className="[writing-mode:vertical-lr] text-[10px] uppercase font-serif self-start mt-2 ">{cargo}</p>
            </div>
            <p className="mt-4 font-bold text-lg">{nombre}</p>
        </div>
    )
}

export default Card