var siteNameInput=document.getElementById("siteName");
var siteURLInput=document.getElementById("siteURL");
var ArrContainer=[];
if(localStorage.getItem("items")!=null){
    ArrContainer=JSON.parse(localStorage.getItem("items"));
    displaySites();
}

function sitesAdd(){
   sitesObj={
    name:siteNameInput.value,
    url:siteURLInput.value
   }
   ArrContainer.unshift(sitesObj)
   localStorage.setItem("items",JSON.stringify(ArrContainer));
   displaySites();
   clear();
}

function displaySites(){
    var x=``
    for(i=0;i<ArrContainer.length;i++){
        x+=`
      <div class="my-3 p-4 content d-flex justify-content-around align-items-center">
      <h3 class="d-inline me-auto">${ArrContainer[i].name}</h3>
      <button class="btn btn-primary mx-2" ><a href="${ArrContainer[i].url}" target="_blank" class="text-white text-decoration-none">Visit</a></button>
      <button class="btn btn-danger" onclick="DeleteItem(${i})">Delete</button>
      </div>
       
        `
    }
    document.getElementById("table").innerHTML=x;
}

function clear(){
    siteNameInput.value="";
    siteURLInput.value="";
}

function DeleteItem(index){
ArrContainer.splice(index,1);
localStorage.setItem("items",JSON.stringify(ArrContainer));
displaySites();

}