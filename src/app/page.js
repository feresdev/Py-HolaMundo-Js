export default async function Home() {

  // SOLICITUD A MI BACKEND
  const respuesta = await fetch("http://localhost:3000/api/holamundo", {
    headers: {
      'Context-Type': 'application/json'
    }
  })
  const mensaje = await respuesta.json()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>{mensaje}</h1>
      </main>
    </div>
  );
}
