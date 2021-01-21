import ItemDetail from '../itemDetail/ItemDetail'

const ItemList= ({item}) => {

    return <>
   <ItemDetail key = {item.id} item = {item} > </ItemDetail>
</>
  }
  
  export default ItemList 
  