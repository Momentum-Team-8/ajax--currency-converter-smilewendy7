const url = "http://api.exchangeratesapi.io/v1/latest?access_key=0747206a61fa73f43e789b782ab268c4" 

const rootElement = document.querySelector('.container')
const rootElement_2 = document.querySelector('.container_2')


// M1: make option menu  *** quote from Sara :) 

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     let h2 = document.createElement("h2");
//     h2.setAttribute("id", "convert_from")
//     h2.innerText = "Convert from";
//     rootElement.appendChild(h2);

//     let allCur = document.createElement("select");
//     allCur.setAttribute("id", "select_1")
    
//     rootElement.appendChild(allCur);
//     for(let cur of currencies) {
//     const optionItem = document.createElement("option");
//     optionItem.innerText= cur;
//     allCur.appendChild(optionItem);
//     }
// })

// M2: make option menu  

// fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     let h2 = document.createElement("h2");
//     h2.setAttribute("id", "convert_to")
//     h2.innerText = "Convert to";
//     rootElement.appendChild(h2);

//     let allCur = document.createElement("select");
//     allCur.setAttribute("id", "select_2")
    
//     rootElement.appendChild(allCur);
//     for(let cur of currencies) {
//     const optionItem = document.createElement("option");
//     optionItem.innerText= cur;
//     allCur.appendChild(optionItem);
//     }
// })


//country list 1 
fetch(url)
// .then(res=> { console.log(res.json())})
.then(res => res.json())
.then(data=> {
    console.log(data)
    let h2 = document.createElement('h2')
    h2.setAttribute("id", "base")
    h2.innerText = "Select Convert from"
    rootElement.appendChild(h2)
    
// below are data presentation ... 
// let in --- use for dictionary
for(let country in data.rates){
   const listItem = document.createElement('button')
    listItem.textContent = country
    //  + "," +  " " + "Rate: " + " " +  data.rates[country] 
    rootElement.appendChild(listItem)
  
}

fetch(url)
// .then(res=> { console.log(res.json())})
.then(res => res.json())
.then(data=> {
    console.log(data)
    let h2 = document.createElement('h2')
    h2.setAttribute("id", "base_2")
    h2.innerText = "Select Convert to "
    rootElement_2.appendChild(h2)
    
// below are data presentation ... 
// let in --- use for dictionary
for(let country in data.rates){
   const listItem = document.createElement('button')
    listItem.textContent = country
    //  + "," +  " " + "Rate: " + " " +  data.rates[country] 
    rootElement_2.appendChild(listItem)
  
        }
    })

    let button_country_1= document. querySelector('.container')
    let button_country_2= document. querySelector('.container_2')
    let button_3= document. querySelector('.submit')

    numberOfCu= document.querySelector('#input_num')
    inputConFrom= document.querySelector('#input_convert_from')
    outputConTo= document.querySelector('#output_convert_to')
    cuResults = document.querySelector('#output_value')

    //select convert from country 
    button_country_1.addEventListener('click', function(event){
    console.log (event.target)
    inputConFrom.value = event.target.innerText
    })

    //select convert to country 
    button_country_2.addEventListener('click', function(event){
    console.log (event.target)
    outputConTo.value = event.target.innerText
    })

    // add submit listener
    // y/x 
    button_3.addEventListener('click', function (event) {
        cuResults.value=  eval(data.rates[outputConTo.value]/data.rates[inputConFrom.value]*numberOfCu.value)
                
        
    })

})


// //country list 2 
// fetch(url)
// // .then(res=> { console.log(res.json())})
// .then(res => res.json())
// .then(data=> {
//     console.log(data)
//     let h2 = document.createElement('h2')
//     h2.setAttribute("id", "base_2")
//     h2.innerText = "Select Convert to "
//     rootElement_2.appendChild(h2)
    
// // below are data presentation ... 
// // let in --- use for dictionary
// for(let country in data.rates){
//    const listItem = document.createElement('button')
//     listItem.textContent = "Country: " + country
//     //  + "," +  " " + "Rate: " + " " +  data.rates[country] 
//     rootElement_2.appendChild(listItem)
  
// }
// })

// // add divs under input, 
//     // number of money id = input_eurNum
//     inputEurNum = document.createElement('input')
//     inputEurNum.setAttribute("id", "input_eurNum")
//     document.querySelector(".input").appendChild(inputEurNum)
//     // country 
//     inputCountry= document.createElement('input')
//     inputCountry.setAttribute("id", "input_country")
//     document.querySelector(".input").appendChild(inputCountry)



// //add a div under output, id = output_curency
// outputCurency= document.createElement('input')
// outputCurency.setAttribute("id", "output_curency")
// document.querySelector(".output").appendChild(outputCurency)


// add event listenner to select contry
// let button_country_1= document. querySelector('.container')
// let button_country_2= document. querySelector('.container_2')

// //select convert from country 
// button_country_1.addEventListener('click', function(event){
// console.log (event.target)
// document.querySelector('#input_convert_from').value = event.target.innerText

// })
// //select convert to country 
// button_country_2.addEventListener('click', function(event){
//     console.log (event.target)
//     document.querySelector('#output_convert_to').value = event.target.innerText
    
//     })

// add submit !!!


// form.addEventListener('submit', function (event) {
//     event.preventDefault();
//     checkAllFields();
    
// })










