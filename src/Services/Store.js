export function getProductsFromServer(type)
{    
   return fetch(`https://fakestoreapi.com/products/category/${type}`)
}
