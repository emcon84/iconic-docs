
'use client'
export default function Home() {
  return (

    <main className="p-5 text-white bg-slate-600 rounded-md">
        <h1 className="text-3xl flex justify-center">Iconic Components</h1>
        <hr />
        <br />
        <p>Bienvenido a la documentación oficial de nuestra Librería de Componentes para React, diseñada y desarrollada con TypeScript. Esta librería es una herramienta poderosa que simplifica y acelera el proceso de construcción de aplicaciones web en React, proporcionando una amplia gama de componentes reutilizables, altamente personalizables y fáciles de integrar en tus proyectos.</p>
        <br />
        <div>
          <strong>
          Estado de Desarrollo: Esta librería se encuentra actualmente en desarrollo activo, y estamos trabajando diligentemente para agregar nuevas características, mejorar la estabilidad y la documentación, y abordar cualquier problema que surja durante este proceso. Agradecemos tu paciencia y colaboración a medida que avanzamos hacia una versión estable.
          </strong>
        </div>
        <br />
        <br />
        <h1 className="text-xl font-bold">Componentes Reutilizables:</h1>
        <p className='p-2 bg-slate-500 rounded-lg m-2'>
          Nuestra librería ofrece una colección de componentes listos para usar que abarcan desde botones y formularios hasta elementos de navegación y gráficos.
        </p>
        <br />
        <h1 className="text-xl font-bold">Integración sin Esfuerzo:</h1>
        <p className='p-2 bg-slate-500 rounded-lg m-2'>
          La integración de nuestros componentes en tu aplicación React es sencilla y rápida, gracias a una documentación clara y ejemplos de código.
        </p>
        <br />
        <h1 className="text-xl font-bold">Escrito en TypeScript:</h1>
        <p className='p-2 bg-slate-500 rounded-lg m-2'>
          desarrollada en TypeScript, lo que garantiza una experiencia de desarrollo más segura y productiva, con detección de errores estáticos y autocompletado en tu editor.
        </p>
        <br />
        <h1 className="text-xl font-bold">Compatibilidad con React:</h1>
        <p className='p-2 bg-slate-500 rounded-lg m-2'>
        Nuestra librería es compatible con las últimas versiones de React y se integra perfectamente en tus proyectos existentes.
        </p>
        <br />

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
        <br />
        <br />
        <strong>
        Agradecemos tu interés en nuestra Librería de Componentes para React con TypeScript. Esperamos que esta documentación te ayude a aprovechar al máximo las capacidades de la librería y a construir aplicaciones web impresionantes de manera eficiente. Si tienes alguna pregunta o comentario, no dudes en ponerte en contacto con nosotros. ¡Feliz desarrollo!
        </strong>
    
    </main>
  )
}
