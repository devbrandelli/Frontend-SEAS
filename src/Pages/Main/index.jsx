import React, { useCallback, useEffect, useState } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi'
import Nav from '../../Utils/Nav'

import './style.css'
import api from '../../Services/api';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Main() {
  const [data, setData] = useState([])
  const [page,setPage] = useState(0)
  const [loading,setLoading] = useState(true)
  const [lastPage,setLastPage] = useState(false)
  
  const handleDelete = useCallback(
    (id) => {
      api.delete(`/questionario/${id}`)
      setData(data.filter(data => data.id !== id))
    }, [data],
  )

  function getQuestionario() {
    console.log(page)
    api.get(`/questionario?page=${page}&size=10`).then(response => {
      setData(data.concat(response.data.content))
      setPage(page + 1)
      setLastPage(response.data.last)
      setLoading(false)
    })
    console.log(lastPage)
  }

  useEffect(() => {
    getQuestionario()
    console.log("Chamou useffect")
  },[])

  if (loading){
    return (
      <h4>Carregandoooooo ...</h4>
    )
  }
  return (
    <>
      <Nav />
      <InfiniteScroll
        dataLength={data.length}
        next={getQuestionario}
        hasMore={!lastPage}
        loader={<h4>Carregando ...</h4>}
        endMessage={
          <p style={{ textAlign: 'center' }}>
            <b>Inicio dos cadastros.</b>
          </p>
        }
      >
        <div className="container-reports">
          <ul>
            {console.log(data)}
            {data.map(quest => (
              <li key={quest.id}>
                <div className="side-iten">
                  <strong>Nome do abordado:</strong>
                  <div className="side-button">
                    <button
                      type="button"
                      className="delete-button"
                      onClick={() => handleDelete(quest._id)}
                    >
                      <FiTrash2 size={20} color="#a8a8b3" />
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
      </InfiniteScroll>
    </>
  );
}
