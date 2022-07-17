import React from 'react';

import PageHeader from '../../components/common/PageHeader';
import ProdutoTable from '../../components/ProdutoTable/ProdutoTable';


const Produtos = () => {



  return (
    <>
      <PageHeader
        title="Produtos"
        description="Aqui podes consultar, editar, e remover produtos da API."
        className="mb-3"
      />

      <ProdutoTable mode="ProdutoTableModeList"> </ProdutoTable>

    </>
  );
};

export default Produtos;
