export const dynamic = "force-dynamic";

export async function GET(req) {
    const mensaje = "Hola Mundo"
    return Response.json(mensaje)
}