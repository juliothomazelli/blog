import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 sm:px-8 px-5 py-16">
      <Item Links={PRODUCTS} title="CARREIRA" />
      <Item Links={RESOURCES} title="PROJETOS" />
      <Item Links={SUPPORT} title="SUPORTE E APOIO" />
    </div>
  );
};

export default ItemsContainer;
