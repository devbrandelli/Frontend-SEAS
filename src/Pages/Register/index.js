import React from 'react';
import Header from '../../Utils/Header'
import './style.css';

function Register() {
    
    return <div>
        <Header />
        <form>
            <div>Pagina de cadastro</div>
            <label>Data:</label>
            <input type="date" />
            <label>Local da abordagem: </label>
            <input type="text" />
            <label>Motivo da abordagem: </label>
            <input type="text" />
            <label>Data de nascimento: </label>
            <input type="date" />
            <label className="mainLabel">Gênero: </label>
            <div id="sexoInput">
                <div className="radioLine">
                    <input type="radio" id="masc" name="sexo" value="masculino" className="radioInput" />
                    <label>Masculino</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="fem" name="sexo" value="feminino" className="radioInput" />
                    <label>Feminino</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="masc-trans" name="sexo" value="homem-trans" className="radioInput" />
                    <label>Homem-trans</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="fem-trans" name="sexo" value="mulher-trans" className="radioInput" />
                    <label>Mulher-trans</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="fem" name="sexo" value="outros" className="radioInput" />
                    <label>Outros</label>
                </div>
            </div>
            <label className="mainLabel">Cor: </label>
            <div id="corInput">
                <div className="radioLine">
                    <input type="radio" id="branco" name="cor" value="branco" className="radioInput" />
                    <label>Branco</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="preta" name="cor" value="preta" className="radioInput" />
                    <label>Preta</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="parda" name="cor" value="parda" className="radioInput" />
                    <label>Parda</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="amarela" name="cor" value="amarela" className="radioInput" />
                    <label>Amarela</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="indígena" name="cor" value="indígena" className="radioInput" />
                    <label>Indígena</label>
                </div>
            </div>
            <label>Local de Nascimento: </label>
            <input type="text" />
            <label>Local de Origem: </label>
            <input type="text" />
            <label className="mainLabel">Tempo em Jundiaí: </label>
            <div id="tempoJundiaiInput">
                <div className="radioLine">
                    <input type="radio" id="ate6m" name="tempoJund" value="ate6m" className="radioInput" />
                    <label>Ate 6 meses</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="6mA1a" name="tempoJund" value="6mA1a" className="radioInput" />
                    <label>De 6 meses a 1 ano</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="1aA2a" name="tempoJund" value="1aA2a" className="radioInput" />
                    <label>De 1 ano a 2 anos</label>
                </div>
                <div className="radioLine">
                    <input type="radio" id="2aOU+" name="tempoJund" value="2aOU+" className="radioInput" />
                    <label>2 anos ou mais</label>
                </div>
            </div>
            <label>Tempo em situação de rua: </label>
            <input type="text" />
            <label>Motivo que levou para a rua: </label>
            <input type="text" />
            <label>Local de Origem: </label>
            <input type="text" />
            <label>Tem interesse em sair da rua: </label>
            <input type="text" />
            <label>O que precisa para sair da rua: </label>
            <input type="text" />
            <label>Qual serviço busca: </label>
            <input type="text" />
            <label>Qual meio de sobrevivencia: </label>
            <input type="text" />
            <label>Recebe beneficio: </label>
            <input type="text" />
            <label>Observações geral: </label>
            <input type="text" />
            <label>Responsavel: </label>
            <input type="text" />
            <input type="submit" value="Salvar" className="formButton" />
        </form>
    </div>;
}

export default Register;