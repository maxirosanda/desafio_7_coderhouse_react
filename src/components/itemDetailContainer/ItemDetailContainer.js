import ItemDetail from '../itemDetail/ItemDetail'
import { useState , useEffect } from "react";

const ItemList= ({items}) => {
  
  const [producto , setProducto] = useState({})

  useEffect(() =>{
    
  items.length && items.map((item) => {
   return item.id === 2 && setProducto(item)
   })
  },[items])
  
  useEffect(() =>{
    console.log(producto)
    },[producto])

    return <>
   <ItemDetail key = {producto.id} item = {producto} > </ItemDetail>
</>
  }
  
  export default ItemList 
  