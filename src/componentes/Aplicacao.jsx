import React, { useState } from 'react';
import { ref, set, get, remove } from 'firebase/database';
import { getDatabase } from "firebase/database";
import { app } from "../firebase-config"
import "../componentes/Aplicacao.css"
import { v4 as uuidv4 } from 'uuid';

function Comentarios () {

const database = getDatabase(app)
const [assunto, setAssunto] = useState('');
const [dados, setDados] = useState('');
const [block, setBlock] = useState(false);

function cortina (){
    if(dados != '') {
        setDados('');
        setBlock(true);
    } else {
        leitura();
        setBlock(false);
    }
}

function escrever (assunto) {
    const key = uuidv4();
    set(ref(database, 'Ong Amigos do Campo/'+ key), {
        comentario: assunto
    });
    setAssunto('');
        if(block == false){
    leitura ();
        }
}

function sobreescrever (chave, assunto) {
    set(ref(database, 'Ong Amigos do Campo/'+ chave), {
        comentario: assunto
    });
    setAssunto('');
        if(block == false){
    leitura ();
        }
}

function leitura () {
    
     get(ref(database, 'Ong Amigos do Campo')).then((snapshot) => {
        if (snapshot) {
            console.log(snapshot.val())
            const intermedio = snapshot.val();
            setDados(intermedio);

        }
        else {
            console.log('kd?');
        }

    }).catch((error) => {
        console.error(error)
        console.log('frito')
    });
}

    const atualizar = (e) => {
        setAssunto(e.target.value);
    };

function apagar (descarte) {
    const destruir = ref(database, 'Ong Amigos do Campo/' + descarte)
    remove(destruir)
    leitura();
}

    return (
        <div>
            <div>
            <form className='controle' onSubmit={(e) => e.preventDefault()}>
                <input type="text" className='paraInput' value={assunto} onChange={atualizar} />
                <div className='alinhando'>
                <button className='botao' onClick={cortina}>Mostrar</button>
                <button className='botao' onClick={() => escrever(assunto)}>Escrever</button>
                </div>
                </form>
            </div>
            <div className = 'alinhandoItens'>
            {dados === null ? ( 
                <p>Banco vazio, nenhum dado encontrado.</p> ) :
               ( Object.keys(dados).map(key => (
                <div  key={key} > 
                <li>
                    {dados[key].comentario}
                    <button className= 'botun' onClick={() => apagar(key)}>Excluir</button>
                    <button className= 'botun' onClick={() => sobreescrever(key, assunto)}>Atualizar</button>
                </li>
                </div>
                ))
            )}
            </div>
          </div>
    )
}

export default Comentarios;