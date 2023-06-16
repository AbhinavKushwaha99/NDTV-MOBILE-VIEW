function loding(){
    document.getElementById('shadow').style.backgroundColor="#fff";
    for (i=0;i<document.getElementsByTagName("a").length;i++){
        document.getElementsByTagName("a")[i].style.color="black";
    }
}








function redirect(){
    document.getElementById('menutime').style.display="block";
    document.getElementById('navpanal').style.display="none";
    document.getElementById('footer').style.display="none";
    // document.getElementById('menutime').style.transition="2s";    
    document.getElementById('scroll').style.display="none";    
    document.getElementById('bottomnavbar').style.display="none";  
    window.scrollTo({top: 0, behavior: "smooth"});  
}
function menuclose(){
    document.getElementById('menutime').style.display="none";
    document.getElementById('navpanal').style.display="block";
    document.getElementById('footer').style.display="block";
    document.getElementById('bottomnavbar').style.display="block";    
    document.getElementById('scroll').style.display="block";    
}
function bell(){
    alert("News alerts are turned off.")
    
}
// document.getElementById('dark').addEventListener("click",dark())
function dark(){
    // document.getElementsByTagName("a")[0].style.color="#fff";
    document.getElementById('shadow').style.backgroundColor="black";
    document.getElementById('bottomnavbar').style.backgroundColor="black";
    document.getElementsByTagName('*')[0].style.backgroundColor="black";
    document.getElementsByTagName('*')[0].style.color="#fff";
    document.getElementById("logowhite").style.display="block";
    // document.getElementById("logoblack").style.display="none";
    for (i=0;i<document.getElementsByTagName("a").length;i++){
        document.getElementsByTagName("a")[i].style.color="white";
    }

}


function light(){
    document.getElementById('test').style.background="white";
    document.getElementById('test').style.color="black";
    document.getElementById('shadow').style.backgroundColor="#fff";
    document.getElementById('bottomnavbar').style.backgroundColor="#fff";
    document.getElementById('logowhite').style.display="none";
    // document.getElementById("logoblack").style.display="block";
    for (i=0;i<document.getElementsByTagName("a").length;i++){
        document.getElementsByTagName("a")[i].style.color="black";
    }
}

function login(){
    document.getElementById('signin').style.display="block";
}
function signinclose(){
    document.getElementById('signin').style.display="none";
}
function loginpage(){
    document.getElementById('signin').style.display="none";
    document.getElementById('login').style.display="block";
// document.getElementById('menutime').style.display="block";
}
function loginclose(){
    document.getElementById('login').style.display="none";
}





// if(window.scroll({top: 50})){
//     document.getElementById('scroll').style.display="none";      
// }


// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// if (prefersDarkScheme.matches) {
//   document.body.classList.add("dark-theme");
// } else {
//   document.body.classList.remove("dark-theme");
// }



// -----------------------------Scroll Hide----------------------------------------

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("bottomnavbar").style.bottom = "0";
//   } else {
//     document.getElementById("bottomnavbar").style.bottom = "-100px";
//   }
//   prevScrollpos = currentScrollPos;
// }










//scroll
function scrollWin() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.getElementById("scroll").addEventListener("click",scrollWin);
}