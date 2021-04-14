let miMapa=new Map()

let miArray=new Array()


miArray.push(300)
miArray.push(400)

//A map le pusheo con set una clave, que sería como el índice del array y su valor
miMapa.set('luis', 300)
miMapa.set('Juan', 400)

miArray.forEach(elem=>{
    console.log(elem)
})

miMapa.forEach(elem=>{ //veré por consola lo mismo que en el array, no me muestra el "índice"
    console.log(elem)
})


console.log(miArray[0])
console.log(miMapa.get('Juan'))


/* for (let [key, value] of miMapa) {
    console.log(key +"="+value)
} Lo hago con un forEach*/

miMapa.forEach((value,key)=>{
    console.log(`${key}=${value}`)
})

//lo lanzo con node map.js dentro de src (cd src)
