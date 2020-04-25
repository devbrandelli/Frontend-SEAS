import React from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi'
import Header from '../../Utils/Header'

import './style.css'

export default function Main() {
  const teste = [{
    "data": "10-04-2020",
    "localAbordagem": "Centro de jundiai",
    "motivoAbordagem": "Ronda",
    "nomeAbordado": "Joao da Silva Sauro",
    "dataNascimento": "02-02-1985",
    "sexo": "Masculino",
    "cor": "Branco",
    "localNascimento": {
      "cidade": "Sorocaba",
      "uf": "SP"
    },
    "localOrigem": {
      "cidade": "Sorocaba",
      "uf": "SP"
    },
    "tempoEmJundiai": "Até 3 meses",
    "tempoSituacaoDeRua": "Até 3 meses",
    "motivoLevouParaRua": "Conflito Familiar",
    "interesseSairDaRua": true,
    "precisaParaSairDaRua": "Forca Foco e Fé",
    "buscaQualServico": "Vaga em abrigo",
    "meioSobrevivencia": "Trabalho",
    "recebeBeneficio": false,
    "observacaoGeral": "Aparentemente esta sobrio, e precisa de ajuda e roupas...",
    "responsavel": "Chico"
  },
  {
    "data": "10-04-2020",
    "localAbordagem": "Centro de jundiai",
    "motivoAbordagem": "Ronda",
    "nomeAbordado": "Joao da Silva Sauro",
    "dataNascimento": "02-02-1985",
    "sexo": "Masculino",
    "cor": "Branco",
    "localNascimento": {
      "cidade": "Sorocaba",
      "uf": "SP"
    },
    "localOrigem": {
      "cidade": "Sorocaba",
      "uf": "SP"
    },
    "tempoEmJundiai": "Até 3 meses",
    "tempoSituacaoDeRua": "Até 3 meses",
    "motivoLevouParaRua": "Conflito Familiar",
    "interesseSairDaRua": true,
    "precisaParaSairDaRua": "Forca Foco e Fé",
    "buscaQualServico": "Vaga em abrigo",
    "meioSobrevivencia": "Trabalho",
    "recebeBeneficio": false,
    "observacaoGeral": "Aparentemente esta sobrio, e precisa de ajuda e roupas...",
    "responsavel": "Chico"
  },
  {
    "data": "10-04-2020",
    "localAbordagem": "Centro de jundiai",
    "motivoAbordagem": "Ronda",
    "nomeAbordado": "Joao da Silva Sauro",
    "dataNascimento": "02-02-1985",
    "sexo": "Masculino",
    "cor": "Branco",
    "localNascimento": {
      "cidade": "Sorocaba",
      "uf": "SP"
    },
    "localOrigem": {
      "cidade": "Sorocaba",
      "uf": "SP"
    },
    "tempoEmJundiai": "Até 3 meses",
    "tempoSituacaoDeRua": "Até 3 meses",
    "motivoLevouParaRua": "Conflito Familiar",
    "interesseSairDaRua": true,
    "precisaParaSairDaRua": "Forca Foco e Fé",
    "buscaQualServico": "Vaga em abrigo",
    "meioSobrevivencia": "Trabalho",
    "recebeBeneficio": false,
    "observacaoGeral": "Aparentemente esta sobrio, e precisa de ajuda e roupas...",
    "responsavel": "Chico"
  }]
  return (
    <>
      <Header />
      <div className="container-reports">
        <ul>
          {teste.map(quest => (
            <li key={quest.id}>
              <div className="side-iten">
                <strong>Nome do abordado:</strong>
                <div className="side-button">
                  <button type="button" className="delete-button">
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
                  <p>{quest.buscaQualServico}</p>
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
