
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer'
import { useState , useEffect } from "react";
const ItemListContainer = ({}) => {

    const [items , setItems] = useState({})
    const arreglo = [
        {
            id: 0,
            name: 'zapatilla',
            precio: 2700, 
            stock: 55 },
         {
            id: 1, 
            name: 'Remera',
            precio: 700, 
            stock: 67 },
        {
            id: 2, 
            name: 'Jean',
            precio: 3700, 
            stock: 71 
        }
    ]
    

useEffect(() =>{
    
    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => {
            
            arreglo.length ? resolve(arreglo) : resolve("no hay items")
        }, 2000)
})


    getItems.then((resolve) => {
        console.log(resolve)
            return setItems(resolve) 
        }).catch((erro)=>  {
 
        return erro
        })
       
},[])
  
useEffect(() =>{
       
console.log(items)
},[items])
  
return <>

<ItemDetailContainer items = { items }></ItemDetailContainer>
</>

}
  export default ItemListContainer