
import ItemDetailContainer from '../itemDetailContainer/ItemDetailContainer'
import { useState , useEffect } from "react";
const ItemListContainer = ({}) => {

    const [item , setItem] = useState({})
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
            return (  resolve.length && resolve.map((item) => {
             item.id === 2 && setItem(item)
            }) )
        }).catch((erro)=>  {
 
        return erro
        })
       
},[])
  
useEffect(() =>{
       
console.log(item)
},[item])
  
return <>

<ItemDetailContainer item = { item}></ItemDetailContainer>
</>

}
  export default ItemListContainer