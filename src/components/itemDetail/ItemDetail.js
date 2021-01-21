import { Card ,Button } from 'react-bootstrap'
import imagen from '../img_producto.jpg';
const ItemDetail = ({item}) => {
  
 return <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={ imagen } />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
      Nuestro producto tiene un precio de ${item.precio} y lo podes pagar en 18 cuaotas sin interes
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
 </>
}
export default ItemDetail