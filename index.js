const loadAllPhones = async(status) =>{
    console.log("wow 3 second gone")
document.getElementById('spinner').style.display = 'none'

//async await 
const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`)
const data = await response.json()
// console.log(data.data)
displayAllPhones(data.data.slice(0,6))

// console.log(status);
if(status){
displayAllPhones(data.data)

}else{
displayAllPhones(data.data.slice(0,6))

}


}

//display phones data
const displayAllPhones = (phones) =>{
    console.log(phones);    
}

//handle show all
const handleShowAll = () =>{
    // console.log("hellloooo");
    loadAllPhones(true)
    
}






const handleSearch = () =>{
// console.log("hello");
document.getElementById('spinner').style.display = 'block'


setTimeout(function () {

    loadAllPhones()
    console.log("hello from handle search");
    

},3000)

}
