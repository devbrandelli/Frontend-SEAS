import React, { useEffect, useState } from 'react';
import Popup from 'reactjs-popup';
import { useForm } from "react-hook-form";

import api from '../../Services/api';
import { Button, Col, Form, Row } from 'react-bootstrap';

export default function PopupCreateCidadao() {
  const [sexoList, setSexoList] = useState([])
  const [corList, setCorList] = useState([])
  const [estadoList, setEstadoList] = useState([])
  const [cidadeList, setCidadeList] = useState([{
    "id": 1,
    "nome": "RESENDE",
    "estado": 2
  }, {
    "id": 2,
    "nome": "JUNDIAÍ",
    "estado": 1
  }, {
    "id": 3,
    "nome": "ITUPEVA",
    "estado": 1
  }, {
    "id": 11,
    "nome": "Baixo Guandu",
    "estado": 8
  }])
  const [rendaList, setRendaList] = useState([])
  const [motivoList, setMotivoList] = useState([])
  const [casosEspecialList, setCasosEspecialList] = useState([])
  const [beneficioList, setBeneficioList] = useState([])

  const setFields = async () => {
    api.get("/sexo").then(response => {
      setSexoList(response.data)
    })
    api.get("/cor").then(response => {
      setCorList(response.data)
    })
    api.get("/fontederenda").then(response => {
      setRendaList(response.data)
    })
    api.get("/motivo").then(response => {
      setMotivoList(response.data)
    })
    api.get("/beneficio").then(response => {
      setBeneficioList(response.data)
    })
    api.get("/casoespecial").then(response => {
      setCasosEspecialList(response.data)
    })
    api.get("/estado").then(response => {
      setEstadoList(response.data)
    })
  }

  useEffect(() => {
    setFields()
  }, [])
  const onSubmit = async (cidadao) => {
    console.log(cidadao)
    cidadao.nome = cidadao.nome.toUpperCase()
    cidadao.sexo = sexoList.filter(sexo => sexo.nomeclatura === cidadao.sexo)[0]
    cidadao.cor = corList.filter(cor => cor.nomeclatura === cidadao.cor)[0]
    cidadao.cidadeNascimento = cidadeList.filter(cidade => cidade.nome === cidadao.cidadeNascimento)[0]
    cidadao.cidadeNascimento.estado = estadoList.filter(estado => estado.id === cidadao.cidadeNascimento.estado)[0]
    cidadao.fonteDeRenda = rendaList.filter(renda => renda.nomeclatura === cidadao.fonteDeRenda)[0]
    let motivosSelecionados = cidadao.motivos;
    cidadao.motivos = []
    motivosSelecionados.map(motivoSelecionado =>
      cidadao.motivos.push(motivoList.filter(motivo =>
        motivo.descricao === motivoSelecionado
      )[0]))

    let beneficiosSelecionados = cidadao.beneficios;
    cidadao.beneficios = []
    beneficiosSelecionados.map(beneficioSelecionado =>
      cidadao.beneficios.push(beneficioList.filter(beneficio =>
        beneficio.nomeclatura === beneficioSelecionado
      )[0]))

    let casosEspeciaisSelecionados = cidadao.casosEspeciais;
    cidadao.casosEspeciais = []
    casosEspeciaisSelecionados.map(casoEspecialSelecionado =>
      cidadao.casosEspeciais.push(casosEspecialList.filter(casoEspecial =>
        casoEspecial.nomeclatura === casoEspecialSelecionado
      )[0]))
    console.log(cidadao);
    await api.post("/cidadao", cidadao)
    alert("Cadastro realizado com sucesso.")
    window.location.reload();
  }
  const { register, handleSubmit } = useForm();

  return (
    <Popup
      trigger={<button className="button"> Novo cadastro </button>}
      modal
      nested
    >
      <div className="popup-create">
        <Form onSubmit={handleSubmit(onSubmit)} className="pt-3 m-3">
          <Row >
            <Col>
              <Form.Label>Nome</Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                type="text"
                name="nome" ref={register} />
            </Col><Col xs="auto">
              <Form.Label>Data Nascimento</Form.Label>
              <Form.Control
                className="mb-2"
                id="inlineFormInput"
                type="date"
                name="dataNascimento" ref={register} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label>Sexo</Form.Label>
              <Form.Control as="select" name="sexo" ref={register}>
                {sexoList.map((sexo) => <option key={sexo.id}>{sexo.nomeclatura}</option>)}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Cor</Form.Label>
              <Form.Control as="select" name="cor" ref={register}>
                {corList.map((cor) => <option key={cor.id}>{cor.nomeclatura}</option>)}
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col xs="auto">
              <Form.Label>Estado</Form.Label>
              <Form.Control as="select" ref={register}>
                {estadoList.map((estado) => <option key={estado.id}>{estado.uf}</option>)}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Cidade</Form.Label>
              <Form.Control as="select" name="cidadeNascimento" ref={register}>
                {cidadeList.map((cidade) => <option key={cidade.id}>{cidade.nome}</option>)}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Fonte de renda</Form.Label>
              <Form.Control as="select" name="fonteDeRenda" ref={register}>
                {rendaList.map((renda) => <option key={renda.id}>{renda.nomeclatura}</option>)}
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="mt-3 mb-3">
                <Form.Check type="switch" id="querSairDasRuas" name="querSairDasRuas" label="Quer sair das ruas ?" ref={register} />
              </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col>
              <Form.Label>Motivos que levaram a rua</Form.Label>
              <Form.Control as="select" multiple name="motivos" ref={register}>
                {motivoList.map((motivo) => <option key={motivo.id}>{motivo.descricao}</option>)}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Casos Especiais</Form.Label>
              <Form.Control as="select" multiple name="casosEspeciais" ref={register}>
                {casosEspecialList.map((casosEspeciais) => <option key={casosEspeciais.id}>{casosEspeciais.nomeclatura}</option>)}
              </Form.Control>
            </Col>
            <Col>
              <Form.Label>Beneficios</Form.Label>
              <Form.Control as="select" multiple name="beneficios" ref={register}>
                {beneficioList.map((beneficios) => <option key={beneficios.id}>{beneficios.nomeclatura}</option>)}
              </Form.Control>
            </Col>
          </Row>
          <Button className="save-button">Salvar</Button>
        </Form>
      </div>
    </Popup>
  )
}