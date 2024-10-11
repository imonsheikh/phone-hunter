const loadAllPhones = async(status, brandName) =>{
    console.log("Hello I come from handle handleSearch() function by load by loadAllPhones() function");
    
    console.log("wow 3 second gone")
document.getElementById('spinner').style.display = 'none'

//async await 
const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName? brandName : "iphone"}`)
const data = await response.json()
// console.log(data.data)
// displayAllPhones(data.data.slice(0,6))

// console.log(status);
if(status){ //when true
displayAllPhones(data.data)

}else{ //when false
displayAllPhones(data.data.slice(0,6))

}


}

//display phones data
const displayAllPhones = (phones) =>{
    // console.log(phones);    
    const phoneContainer = document.getElementById('phones-container')

    phones.forEach(phone => {
        // console.log(phone)
       const {brand, image, slug} = phone

        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-xl m-2">
  <figure class="px-10 pt-10 ">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">
     
      <button onclick ="phoneDetails('${slug}')" class="btn btn-primary">Show Details</button>
    </div>
  </div>
</div>
        `

        phoneContainer.appendChild(div)
    });
}

//handle show all
const handleShowAll = () =>{
    // console.log("hellloooo");
    loadAllPhones(true)
    
}






const handleSearch = () =>{
// console.log("hello");
document.getElementById('spinner').style.display = 'block'

const searchText = document.getElementById('search-box').value


setTimeout(function () {

    loadAllPhones(false, searchText) //when false
    console.log("hello from handle search");
    

},2000)

}


// phone details function 
const phoneDetails = async(slugs) =>{
// console.log(slug);
const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slugs}`)
const data = await response.json()
console.log(data.data);

const {brand, image, slug} = data.data

const modalContainer = document.getElementById('modal-container')
modalContainer.innerHTML = `
<dialog id="my_modal_1" class="modal">
  <div class="modal-box">  
    <h3 class="text-lg font-bold">Hello!</h3>
    <p class="py-4">Press ESC key or click the button below to close</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
`

my_modal_1.showModal();



}










loadAllPhones(false, "iphone")




//