const myButton=document.querySelector("#open-menu")
const navBar=document.querySelector("nav.mainMenu")
const mainNavBar=document.querySelectorAll(".mainMenu ul li a")
const mainNav=document.querySelectorAll(".subMenuList")

myButton.addEventListener("click",function () {

    navBar.classList.toggle("showNavBar")

})

mainNav.forEach(singleMenu =>{

    singleMenu.closest("li").querySelector("a").innerHTML+='<i class="fa fa-caret-down" style="float:right"></i>'
         console.log(singleMenu)
 
});



 mainNavBar.forEach((singlei) =>{
    singlei.addEventListener("click",function(){
    singlei.closest ("li").querySelector("ul").classList.toggle("subMenuListitem")
        console.log(singlei.closest ("li"))
   })
});





















//  mainNavBar.forEach((singlei) =>{
//     singlei.addEventListener("click",function(){
//     singlei.closest ("li").querySelector(".menuList .subMenuList").classList.toggle("subMenuListitem")
//         console.log(singlei.closest ("li"))
//    })
// });













