

export default function Profile({params}: {params: {id: string}}){
  return <h1>Usuario: {params.id}</h1>
}