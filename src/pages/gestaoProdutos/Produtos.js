import "./Produtos.css";
import React from 'react';
import PageHeader from '../../components/common/PageHeader';
import ProdutoTable from "../../components/ProdutoTable/ProdutoTable";

const Produtos = () => {

  return (
    <>
      <PageHeader
        title="Produtos"
        description="Aqui podes consultar, retirar e abastecer produtos no armazém."
        className="mb-3">
      </PageHeader>

      <ProdutoTable mode="ProdutoTableModeManage"></ProdutoTable>
    </>
  );
};
export default Produtos;
