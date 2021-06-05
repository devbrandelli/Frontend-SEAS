import React, {useEffect, useState } from 'react';
import Nav from '../../Utils/Nav'

import './style.css'
import Api from '../../Services/api';
import { Table } from 'react-bootstrap';
import PopupCadastro from '../Cadastro/popupCadastro';

export default function Main() {
  const [data, setData] = useState([])
  const [page,setPage] = useState(0)
  const [loading,setLoading] = useState(true)
  
  // const handleDelete = useCallback(
  //   (id) => {
  //     console.log(id)
  //     Api.delete(`/questionario/${id}`)
  //     setData(data.filter(data => data.id !== id))    
  //   }, [data],
  // )

  function getQuestionario() {
    Api.get(`/cidadao`).then(response => {
      setData(data.concat(response.data))
      setPage(page + 1)
      setLoading(false)
    })
  }

  useEffect(() => {
    getQuestionario()
  },[])

  if (loading){
    return (
      <>
        <Nav></Nav>
        <h4>Carregando ...</h4>
      </>
    )
  }
  return (
    <>
    <Nav></Nav>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Cidade origem</th>
          <th>Sexo</th>
        </tr>
      </thead>
      <tbody>
        {data.map(cidadao => (
            <tr key={cidadao.id}>
            <td>{cidadao.id}</td>
            <td>{cidadao.nome}</td>
            <td>{cidadao.cidadeNascimento.nome}</td>
            <td>{cidadao.sexo.nomeclatura}</td>
          </tr>
        ))}
      </tbody>
    </Table>
    <PopupCadastro/>
    </>
  );
}
