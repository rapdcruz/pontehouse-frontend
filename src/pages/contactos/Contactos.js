import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import ContactosItem from './components/ContactosItem';


const Contactos = () => {
  return (
    <>
      <PageHeader
        title="Contactos"
        description="Entra em contacto com a equipa de apoio pelos seguintes canais para alguma duvida que possa surgir."
        className="mb-3">
      </PageHeader>
      <ContactosItem />
    </>
  );
};

export default Contactos;
