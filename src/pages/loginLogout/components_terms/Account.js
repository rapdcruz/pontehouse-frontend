import React, { forwardRef } from 'react';
import { Card } from 'react-bootstrap';

const Account = forwardRef((props, ref) => {
  return (
    <div>

      <hr className="my-4" />

      <p className="mb-0 ps-3">
        Estes termos e condições definem as regras e regulamentos para a utilização do Website da PonteHouse.<br></br>
        PonteHouse encontra-se localizada em: Rua do Futuro n.423, 0000-000 Lisboa.<br></br>
        Ao aceder a este site, presumimos que aceita estes termos e condições na totalidade. Não continue a utilizar o site da PonteHouse se não aceitar todos os termos e serviços referidos nesta página.<br></br>
        A terminologia seguinte aplica-se as estes Termos e Condições, Declaração de Privacidade e Aviso de Isenção de Responsabilidade, assim como a todo e qualquer Acordo: Cliente, Você e Seu referem-se a si, a pessoa que está a aceder a este site para aceitar os termos e condições da Empresa. A Empresa, Nós e Nosso, referem-se à nossa Empresa. Entidade, Entidades, ou Nós, referem-se tanto ao Cliente como a nós, ou só ao cliente ou a nós.<br></br>
        Todos os termos referem-se à oferta, aceitação e consideração do pagamento necessário para levar a cabo o processo da nossa assistência ao Cliente da forma mais apropriada, seja através de reuniões formais de duração fixa, ou qualquer outro meio, com o objetivo expresso de cumprir as necessidades do Cliente no que diz respeito ao fornecimento dos serviços/produtos da Empresa, de acordo com, e sujeito à lei.<br></br>
        Qualquer uso da terminologia acima ou outras palavras no singular, plural, em maiúscula/minúscula e/ou ele/ela ou eles/elas são tomados como intermutáveis e, portanto, referem-se ao mesmo.<br></br>
      </p>
      <hr className="my-4" />



      <h6 className="text-primary">Licença</h6>
      < p className="mb-0 ps-3"> Excetuando referência em contrário, a DevDash e/ou os seus
        licenciantes são proprietários dos direitos de propriedade intelectual
        para todo o material em PonteHouse.
        <br></br>
        Todos os direitos de propriedade
        intelectual são reservados.
        <br></br>
        Pode visualizar e/ou imprimir páginas de da PonteHouse para o seu uso pessoal, sujeito às restrições definidas nestes termos e condições.</p>
      <br></br>
      <h6 className="text-primary">Não deve:</h6>

      <ol type="1">
        <li>
          Republicar material;
        </li>
        <li>
          Vender, alugar ou sub-licenciar material;
        </li>
        <li>
          Reproduzir, duplicar ou copiar material;
        </li>
        <li>
          Redistribuir conteúdo da PonteHouse (a não ser que o conteúdo seja feito especificamente para redistribuição);
        </li>



      </ol>
    </div>
  );
});

export default Account;
