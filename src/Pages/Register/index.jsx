import React from "react";
import { useForm } from "react-hook-form";
import Header from "../../Utils/Header";
import "./style.css";

export default function Register() {
  const onSubmit = (data) => console.log(data);
  const { register, handleSubmit } = useForm();

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>Pagina de cadastro</div>
        <label id="data">
          Data:
          <input type="date" name="data" ref={register} />
        </label>
        <label id="hora">
          Hora:
          <input type="time" name="hora" ref={register} />
        </label>
        <br />
        <label>Local da abordagem: </label>
        <input type="text" name="localAbordagem" ref={register} />
        <label>Motivo da abordagem: </label>
        <input type="text" name="motivoAbordagem" />
        <label>Nome do abordado</label>
        <input type="text" name="nomeAbordado" ref={register} />
        <label>
          Data de nascimento:
          <input type="date" name="dataNascimento" />
        </label>
        <br />
        <label className="mainLabel">Gênero: </label>
        <div id="sexoInput">
          <div className="radioLine">
            <input
              type="radio"
              id="masc"
              name="sexo"
              value="masculino"
              className="radioInput"
              ref={register}
            />
            <label>Masculino</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="fem"
              name="sexo"
              value="feminino"
              className="radioInput"
              ref={register}
            />
            <label>Feminino</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="masc-trans"
              name="sexo"
              value="homem-trans"
              className="radioInput"
              ref={register}
            />
            <label>Homem-trans</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="fem-trans"
              name="sexo"
              value="mulher-trans"
              className="radioInput"
              ref={register}
            />
            <label>Mulher-trans</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="fem"
              name="sexo"
              value="outros"
              className="radioInput"
              ref={register}
            />
            <label>Outros</label>
          </div>
        </div>
        <label className="mainLabel">Cor: </label>
        <div id="corInput">
          <div className="radioLine">
            <input
              type="radio"
              id="branco"
              name="cor"
              value="branco"
              className="radioInput"
              ref={register}
            />
            <label>Branco</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="preta"
              name="cor"
              value="preta"
              className="radioInput"
              ref={register}
            />
            <label>Preta</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="parda"
              name="cor"
              value="parda"
              className="radioInput"
              ref={register}
            />
            <label>Parda</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="amarela"
              name="cor"
              value="amarela"
              className="radioInput"
              ref={register}
            />
            <label>Amarela</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="indígena"
              name="cor"
              value="indígena"
              className="radioInput"
              ref={register}
            />
            <label>Indígena</label>
          </div>
        </div>
        <label>Local de Nascimento: </label>
        <input type="text" name="localNascimento" ref={register} />
        <label>Local de Origem: </label>
        <input type="text" name="localOrigem" ref={register} />
        <label className="mainLabel">Tempo em Jundiaí: </label>
        <div id="tempoJundiaiInput">
          <div className="radioLine">
            <input
              type="radio"
              id="ate6m"
              name="tempoJund"
              value="ate6m"
              className="radioInput"
              ref={register}
            />
            <label>Ate 6 meses</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="6mA1a"
              name="tempoJund"
              value="6mA1a"
              className="radioInput"
              ref={register}
            />
            <label>De 6 meses a 1 ano</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="1aA2a"
              name="tempoJund"
              value="1aA2a"
              className="radioInput"
              ref={register}
            />
            <label>De 1 ano a 2 anos</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="2aOU+"
              name="tempoJund"
              value="2aOU+"
              className="radioInput"
              ref={register}
            />
            <label>2 anos ou mais</label>
          </div>
        </div>
        <label>Tempo em situação de rua: </label>
        <div id="tempoRuaInput">
          <div className="radioLine">
            <input
              type="radio"
              id="ate6m"
              name="tempoRua"
              value="ate6m"
              className="radioInput"
              ref={register}
            />
            <label>Ate 6 meses</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="6mA1a"
              name="tempoRua"
              value="6mA1a"
              className="radioInput"
              ref={register}
            />
            <label>De 6 meses a 1 ano</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="1aA2a"
              name="tempoRua"
              value="1aA2a"
              className="radioInput"
              ref={register}
            />
            <label>De 1 ano a 2 anos</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="2aOU+"
              name="tempoRua"
              value="2aOU+"
              className="radioInput"
              ref={register}
            />
            <label>2 anos ou mais</label>
          </div>
        </div>
        <label>Motivo que levou para a rua: </label>
        <div id="motivoRuaInput">
          <div className="radioLine">
            <input
              type="checkbox"
              id="alcool"
              name="motivo"
              value="alcool"
              className="radioInput"
              ref={register}
            />
            <label>Alcool</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="drogas"
              name="motivo"
              value="drogas"
              className="radioInput"
              ref={register}
            />
            <label>Multiplas Drogas</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="familiar"
              name="motivo"
              value="familiar"
              className="radioInput"
              ref={register}
            />
            <label>Conflito Familiar</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="renda"
              name="motivo"
              value="renda"
              className="radioInput"
              ref={register}
            />
            <label>Ausencia de renda</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="prisao"
              name="motivo"
              value="prisao"
              className="radioInput"
              ref={register}
            />
            <label>Regresso prisional</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="outros"
              name="motivo"
              value="outros"
              className="radioInput"
              ref={register}
            />
            <label>Outros</label>
          </div>
        </div>
        <label>Tem interesse em sair da rua: </label>
        <div id="sairRuaInput">
          <div className="radioLine">
            <input
              type="radio"
              id="sim"
              name="sairRua"
              value="sim"
              className="radioInput"
              ref={register}
            />
            <label>Sim</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="não"
              name="sairRua"
              value="não"
              className="radioInput"
              ref={register}
            />
            <label>Não</label>
          </div>
        </div>
        <label>O que precisa para sair da rua: </label>
        <input type="text" name="oquePrecisaSairRua" ref={register} />
        <label>Qual serviço busca: </label>
        <div id="motivoRuaInput">
          <div className="radioLine">
            <input
              type="checkbox"
              id="pernoite"
              name="servicoBusca"
              value="pernoite"
              className="radioInput"
              ref={register}
            />
            <label>Pernoite, Banho e Alimentação</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="abrigo"
              name="servicoBusca"
              value="abrigo"
              className="radioInput"
              ref={register}
            />
            <label>Vaga em abrigo</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="tratamento"
              name="servicoBusca"
              value="tratamento"
              className="radioInput"
              ref={register}
            />
            <label>Tratamento de saúde</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="pernoite"
              name="servicoBusca"
              value="pernoite"
              className="radioInput"
              ref={register}
            />
            <label>Pernoite, Banho e Alimentação</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="pernoite"
              name="servicoBusca"
              value="pernoite"
              className="radioInput"
              ref={register}
            />
            <label>Pernoite, Banho e Alimentação</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="pernoite"
              name="servicoBusca"
              value="pernoite"
              className="radioInput"
              ref={register}
            />
            <label>Pernoite, Banho e Alimentação</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="pernoite"
              name="servicoBusca"
              value="pernoite"
              className="radioInput"
              ref={register}
            />
            <label>Pernoite, Banho e Alimentação</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="pernoite"
              name="servicoBusca"
              value="pernoite"
              className="radioInput"
              ref={register}
            />
            <label>Pernoite, Banho e Alimentação</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="pernoite"
              name="servicoBusca"
              value="pernoite"
              className="radioInput"
              ref={register}
            />
            <label>Pernoite, Banho e Alimentação</label>
          </div>
          <div className="radioLine">
            <input
              type="checkbox"
              id="pernoite"
              name="servicoBusca"
              value="pernoite"
              className="radioInput"
              ref={register}
            />
            <label>Pernoite, Banho e Alimentação</label>
          </div>
        </div>
        <label>Qual meio de sobrevivencia: </label>
        <div id="motivoRuaInput">
          <div className="radioLine">
            <input
              type="radio"
              id="trabalhoInformal"
              name="meioSobrevivencia"
              value="trabalhoInformal"
              className="radioInput"
              ref={register}
            />
            <label>Trabalho informal</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="trabalhoFormal"
              name="meioSobrevivencia"
              value="trabalhoFormal"
              className="radioInput"
              ref={register}
            />
            <label>Trabalho formal</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="pedeDinheiro"
              name="meioSobrevivencia"
              value="pedeDinheiro"
              className="radioInput"
              ref={register}
            />
            <label>Pede dinheiro</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="beneficio"
              name="meioSobrevivencia"
              value="beneficio"
              className="radioInput"
              ref={register}
            />
            <label>Beneficio</label>
          </div>
          <div className="radioLine">
            <input
              type="radio"
              id="exploracaoSexual"
              name="meioSobrevivencia"
              value="exploracaoSexual"
              className="radioInput"
              ref={register}
            />
            <label>Exploração sexual</label>
          </div>
        </div>
        <label>Recebe beneficio: </label>
        <div className="radioLine">
          <input
            type="radio"
            id="naoBeneficio"
            name="naoBeneficio"
            value="naoBeneficio"
            className="radioInput"
            ref={register}
          />
          <label>Não</label>
        </div>
        <label>Observações geral: </label>
        <input type="text" />
        <label>Responsavel: </label>
        <input type="text" />
        <input type="submit" value="Salvar" className="formButton" />
      </form>
    </div>
  );
}
