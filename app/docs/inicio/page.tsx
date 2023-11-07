const Inicio = () => {
    return (
        <div className="p-5 bg-slate-600 rounded-md text-white">
            <h1 className="text-3xl">Instalar</h1>
            <br />
            <p>Se puede ingresar a la url en npm desde aqui: <a href="https://www.npmjs.com/package/iconic-components?activeTab=readme" className="text-blue-400">Iconic Components</a></p>
            <p>o podes simplemente copiar este comando para instalar</p>
            <pre className="bg-slate-500 flex p-4 my-3 rounded-lg ">
                <code>
                    npm i iconic-components
                </code>
            </pre>
        </div>
    )
}

export default Inicio;