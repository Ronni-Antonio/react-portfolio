

function EducCard({ item }){
    return(
        <div className="flex flex-col gap-5 rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] md:flex-row md:items-center">
            <img className="h-36 w-full rounded-3xl object-cover md:h-40 md:w-48" src={item.path} alt={item.name} />
            <div className="space-y-3">
                <h1 className="text-xl font-bold text-slate-950">{item.name}</h1>
                {item.subtitle && <p className="text-sm font-medium text-slate-600">{item.subtitle}</p>}
                <div className="text-sm text-slate-500">
                    {item.period && <p>{item.period}</p>}
                    {item.details && <p>{item.details}</p>}
                </div>
            </div>
        </div>
    );
}

export default EducCard