import React, { useEffect, useState, useCallback } from 'react';
import Nav from '../../Utils/Nav'
import Api from '../../Services/api'
import { useHistory } from 'react-router-dom';

import './style.css'
import { Table } from 'react-bootstrap';
import { FiTrash2 } from 'react-icons/fi'

export default function Usuario() {
  const [users, setUsers] = useState([])
  const history = useHistory();
  
  const handleDelete = useCallback(
    (id) => {
      console.log(id)
      Api.delete(`/user/${id}`)
      setUsers(users.filter(user => user.id !== id))
    }, [users],
  )

  function getUsers() {
    Api.get('/user').then(response => {
      setUsers(response.data)
    }, function(erro){
      if(erro.response.status === 403){
        localStorage.clear()
        history.push("/")
      }
    })
  }

  useEffect(() => {
    getUsers()
  }, [])


  return (
    <>
      <Nav />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome completo</th>
            <th>Email</th>
            <th>Usuario</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nomeCompleto}</td>
              <td>{user.email}</td>
              <td>{user.usuario}</td>
              <td>
                <button
                  type="button"
                  className="delete-button"
                  onClick={() => handleDelete(user.id)}
                >
                  <FiTrash2 size={20} color="#a8a8b3" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}