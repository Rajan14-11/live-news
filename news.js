console.log("hello")
const apikey = 'ab59e393211b453cb9d238bd03ffb719';
let source = 'bbc-news'
let proxy = `https://cors-anywhere.herokuapp.com/`;
const xhr = new XMLHttpRequest();
let contentnews;
xhr.open('GET', `http://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`, true);


xhr.onload = function () {
    let news = JSON.parse(this.responseText)
    let articles = news.articles;
    if (articles.content == null) {
        contentnews = articles.description;
    }
    else {
        contentnews = articles.content;
    }
    // console.log(articles);
    let newsaccordion = document.getElementById("newsaccordion");
    let str = "";
    articles.forEach(element => {
        str +=
              `  <div class="accordion-item ">
               <h2 class="accordion-header" id="headingOne">
                   <button class="accordion-button collapsed newssearch" type="button" data-bs-toggle="collapse"
                       data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <p> ${element["title"]}</p>
                   </button>
               </h2>
               <div id="collapseOne" class="accordion-collapse collapse " aria-labelledby="headingOne"
                   data-bs-parent="#accordionExample">
                   <div class="accordion-body">
                   <strong>${element["description"]}</strong><br>
                      ${element["content"]}. <a href ="${element["url"]} " target = _blank>Read more here </a>
                   </div>
               </div>
               </div>


           
`
    });
    newsaccordion.innerHTML = str;
}

xhr.send()

searchtxt = document.getElementById("searchtxt")
searchtxt.addEventListener('input',()=>{
    console.log("input")
    let inputval = searchtxt.value.toLowerCase()
    console.log(inputval)
    let newssearch = document.getElementsByClassName("newssearch")
    console.log(newssearch)
    Array.from(newssearch).forEach(function(element){
   newstit = document.getElementsByTagName('p')[0].innerText
   if(newstit.includes(inputval)){
       element.style.display = "block";
   }
   else{
       element.style.display = 'none'
   }
    })
})