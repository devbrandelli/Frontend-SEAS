import React, { useCallback, useEffect, useState } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi'
import Header from '../../Utils/Header'
import Api from '../../Services/api'

import './style.css'
import api from '../../Services/api';

export default function Main() {
  const [data, setData] = useState([])
  const handleDelete = useCallback(
    (id) => {
    api.delete(`/questionario/${id}`)
    setData(data.filter(data => data.id !== id))
  },[data],
  )
  useEffect(()=>{
    Api.get('/questionario').then(response =>{
      setData(response.data.response)
    })
  },[handleDelete])
  
  return (
    <>
      <Header />
      <div className="container-reports">
        <ul>
          {data.map(quest => (
            <li key={quest._id}>
              <div className="side-iten">
                <strong>Nome do abordado:</strong>
                <div className="side-button">
                  <button 
                    type="button" 
                    className="delete-button"
                    onClick={() => handleDelete(quest._id)}
                  >
                    <FiTrash2 size={20} color="#a8a8b3"/>
                  </button>
                  <button type="button" className="edit-button">
                    <FiEdit size={20} color="#a8a8b3" />
                  </button>
                </div>
              </div>
              <p>{quest.nomeAbordado}</p>

              <strong>Local da abordagem:</strong>
              <p>{quest.localAbordagem}</p>
              <div className="side-iten">
                <div>
                  <strong>Busca qual serviço?</strong>
                  <p>{quest.servicoBusca[0]}</p>
                </div>
                <div>
                  <strong>Responsavel pelo questionario</strong>
                  <p>{quest.responsavel}</p>
                </div>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </>
  );
}