import React from 'react'
import { useParams } from 'react-router-dom';

const CardDetails = () => {
    let { id } = useParams();
  return (
    <div>
        The details of the cards are here - {id}
    </div>
  )
}

export default CardDetails