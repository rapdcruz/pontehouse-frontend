import React from 'react';
/* import processList from 'data/feature/processList';
 */
import Section from '../../../components/common/Section';
import Process from './Process';
import SectionHeader from './SectionHeader';
import print1 from '../../../assets/img/novos/tutorial/1.png';
import print2 from '../../../assets/img/novos/tutorial/2.png';
import print3 from '../../../assets/img/novos/tutorial/3.png';
import print4 from '../../../assets/img/novos/tutorial/4.png';

const Processes = () => (
  <Section>
    <SectionHeader
      title="A aplicação baseada na organização."
      subtitle="Com a aplicação PonteHouse consegue gerir stocks de forma eficaz"
    />

    <Process
      isFirst={true}
      icon={['fa', 'play']}
      iconText="INSERIR PRODUTOS E USERS"
      color="success"
      description="Um dos privilégios do admin é poder criar produtos e users."
      image={print1}
    />
    <Process
      isFirst={true}
      icon={['fa', 'play']}
      iconText="HISTÓRICO"
      color="success"
      description="Estando loggado como administrador pode consultar o histórico de todas as transações da app, se estiver loggado como abastecedor na página de settings pode consultar o histórico pessoal."
      image={print2} />
    <Process
      isFirst={true}
      icon={['fa', 'play']}
      iconText="PRODUTOS EM FALTA"
      color="success"
      description="Estando loggado como administrador pode consultar na página DASHBOARD a lista de produtos em falta, assim como a quantidade em falta."
      image={print3} />
    <Process
      isFirst={true}
      icon={['fa', 'play']}
      iconText="INSERIR PRODUTOS NO ARMAZÉM"
      color="success"
      description="Inserindo a quantidade na label pode inserir ou remover produtos do armazém."
      image={print4} />

   
  </Section>
);

export default Processes;
