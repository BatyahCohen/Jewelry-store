export function getJewelery()
{
   return fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))
}

export function getElectronics()
{
   return fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(json=>console.log(json))
}
