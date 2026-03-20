
function addTitle(){
    let heading = document.querySelector("h1");
    heading.textContent = "Naruto Character Selection";
}
addTitle();

function flexIt(){
    let flexDiv = document.querySelector(".needFlex");
    flexDiv.classList.toggle("flexIt");
}
flexIt();



 const addGroups = () =>{
    const newName = document.querySelectorAll("p.description");
    newName[0].setAttribute("class", "Team-7");
    newName[1].setAttribute("class", "Akatsuki");
    newName[2].setAttribute("class", "Hokage");
//  console.log(newName);
 }
addGroups();


const emphasize = group =>{
    let getStyled = document.getElementsByClassName(group);
    // getStyled.forEach((style) =>{
    //     style.classList.toggle("emphasis");
    // })
    for(let i = 0; i < getStyled.length; i++){
        getStyled[i].classList.toggle("emphasis");
    }
};
emphasize();

function hideThePain(){
        document.getElementById("golden").classList.toggle("almighty-push");

}
