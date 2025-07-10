import React from 'react'
import Feedback from '../Feedback/Feedbacks'
import Comentarios from '../Aprobar/Comentarios'
import CarouselFeedback from '../CarouselFeedback/CarruselFeedback'
import TableFeedback from '../TableFeedback/TableFeedback'

export default function Combinar() {
  return (
    <>
    <CarouselFeedback />
    <TableFeedback />
    </>
  )
}
