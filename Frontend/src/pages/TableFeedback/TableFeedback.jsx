import React, { useState } from 'react'
import './styles/TableStyle.css'
import imagen10 from './images/imagen1.jpg'

export default function TableFeedback() {
  const [Usuarios, setUsuarioss] = useState([
    { name: "Arnold Perez", imagen: imagen10, comentarios: "Excelente", reseñas: "★★★★★" },
    { name: "Antonio Sanchez", imagen: imagen10, comentarios: "Casi no me gustó, Faltó emoción", reseñas: "★☆☆☆☆" },
    { name: "Ana Maria López", imagen: imagen10, comentarios: "Me gustó", reseñas: "★★★☆☆" }
  ])

  const [newComment, setNewComment] = useState("") //Esto no es. Aqui lo unico que se hizo fue realizar un ejemplo de como debe funcionar la maqueta

  const añadirComentario = () => {
    if (newComment.trim() !== "") {
      setUsuarioss(prevUsuarios => [ //Son ejemplos de como queda, mas no veo la necesidad de esto Debido a que no se ha realizado el consumo de la Api
        ...prevUsuarios,
        { name: "New User", imagen: imagen10, comentarios: newComment, reseñas: "☆☆☆☆☆" }
      ])
      setNewComment("")
    }
  }

  return (
    <>
      <h1 className="tabla-title">Comentarios</h1>

      <div className='scroll-table'>
        <table className="contenedor-tabla">
          <thead className='thead'>
            <tr className='tr'>
              <th className='th'>Usuarios</th>
              <th className='th'>Comentarios</th>
              <th className='th'>Reseñas</th>
            </tr>
          </thead>
          <tbody className='tbody'>
            {Usuarios.map((usuario, index) => (
              <tr key={index} className='tr'>
                <td className='user-cell td'>
                  {usuario.imagen ? (
                    <img src={usuario.imagen} alt={usuario.name} className='perfil-img' />
                  ) : (
                    <img src="" alt="perfil imagen" />
                  )}
                  <span>{usuario.name}</span>
                </td>
                <td className='td texto-comentario'>{usuario.comentarios}</td>
                <td className='td'>{usuario.reseñas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className='center-input'>
        <input
          type="text"
          placeholder='Escriba un Comentario de la Actividad'
          className='input-texto'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button className='button-submit' onClick={añadirComentario}>
          Subir Comentario
        </button>
      </div>
    </>
  )
}
