import React from 'react';

function BookFormPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <main className="container mx-auto">
        <section className="mt-8">
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/4 ml-4"> {/* Portada: 1/4 del ancho */}
              <img
                src= "../src/assets/IMG/Portadas/Quiubole.png"// portada
                alt="Portada del libro"
                className="w-full h-auto rounded-lg shadow-md"
                style={{
                  aspectRatio: '329 / 466',
                }}
              />
            </div>

            <div className="md:w-1/2 space-y-4 mr-4"> {/* Información: 1/2 del ancho */}
              <h4 className="text-xl font-medium">Quiubole Con...Tu Cuerpo, El Ligue, Tus Cuates, El Sexo, Tu Familia, Las Drogas Y Todo Lo Demas...</h4>
              <p className="text-gray-600">
                <span className="font-semibold">Autor:</span> Gaby Vargas, Yordi Rosado
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Fecha de publicación:</span> 30 junio 2006
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">Editorial:</span> Aguilar; Edición PRIMERA EDICION. SEGUNDA IMPRESION
              </p>
              <p className="text-gray-700">
              Seguro has pasado por todo esto. Es normal. Bienvenido al mundo de la adolescencia. Ahora tendrás en tu vida miles de cambios. Pero para que no te agarren desprevenido tienes al QUIÚBOLE CON…, el libro que te dice la neta sobre todo lo que debes saber para entrar a las grandes ligas del noviazgo, la sexualidad, las broncas con las drogas y el alcohol, cómo comunicarte con tus papás, así como lo bueno y lo malo del internet y las redes sociales.
Gaby Vargas y Yordi Rosado te entregan este libro corregido y aumentado, con un diseño increíble y la información de reconocidos expertos, para que tomes mejores decisiones y hagas de tu adolescencia la etapa más divertida e inolvidable de tu vida .
              </p>
            </div>

            <div className="md:w-1/4 flex items-start justify-center"> {/* Botón: 1/4 del ancho */}
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Añadir al carrito
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default BookFormPage;
