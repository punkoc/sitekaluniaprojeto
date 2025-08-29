import React from "react";
import "./SobrePage.css"; // Arquivo CSS para estilização

const SobrePage = () => {
  return (
    <div className="sobre-container">
      <div className="sobre-content"> {/* Adicionado para criar a área branca */}
        <h2>Sobre o Coletivo Kalúnia</h2>
        <p>
          HISTÓRICO  
          Em 2017 um grupo de amigos se reunia na cidade de Atibaia, interior de São Paulo para fundar um coletivo literário com um nome bem sugestivo: Kalúnia. A escolha se deu, como protesto às normatizações e aos esquemas sempre redondinhos nos quais a literatura “deve” se equilibrar. E não! Definitivamente não somos caluniadores. Nem com c e nem com K. Somos sim, palavras caminhantes que se afinam com um mundo em constante mudança. 
Nosso objetivo é caminhar ao encontro das boas histórias, dos poemas escondidos, perdidos e sem chance. Encontramos na literatura, uma espécie de alento para as dores do mundo, mas também é através dela que denunciamos as mazelas da atualidade. Por ela e com ela sorrimos, choramos, saboreamos as contradições tão presentes na vida das pessoas.
Por isso, somos um grupo ligado aos movimentos da nossa época, na tentativa de estabelecer conexões profundas com a realidade e, principalmente com a arte em seu processo de ebulição.
Somos a favor da vida e do respeito a tudo que se relaciona a esta. Nossas propostas estabelecem-se pela via democrática em consonância com a emancipação humana.
A arte nos transborda, nos move, e, sobretudo alimenta nossas esperanças. Clamamos pela sociedade leitora. Confiamos no futuro e no apelo da palavra como uma grande alavanca na transformação do planeta.
          [...]
          <br /><br />
          Juliana Gobbe  
          Coordenadora  
          Coletivo Literário Kalúnia  
        </p>
      </div>
    </div>
  );
};

export default SobrePage;