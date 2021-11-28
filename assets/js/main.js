const humberger = document.getElementById("humberger");
const overlay   = document.querySelector('.navMobile');
const cancelIcon = document.querySelector('.navMobile #cancelIcon')

humberger.addEventListener("click", ()=> {
   overlay.classList.add('show')
});
cancelIcon.addEventListener("click", ()=> {
    overlay.classList.remove('show')
 });
 


// load page transition

// window.onload = () => {

//    const transition_el = document.querySelector('.transition');

//    setTimeout(() => {
//        transition_el.classList.remove('is-active');
//    },500)
// }

 //popUpChat
 const containerPopupChat = document.getElementById("container-popupChat");
 const iconMessage = document.getElementById("iconMessage");
 const iconCancelChat = document.getElementById("iconCancelChat");
 const containerChat = document.getElementById("containerChat");

 iconMessage.addEventListener("click", function() {
    containerChat.classList.add("activeChat");
 });
 iconCancelChat.addEventListener("click", function() {
   containerChat.classList.remove("activeChat");
})

window.addEventListener('scroll',function(){
   containerPopupChat.classList.add("activeChatPopup", window.scrollY < 0);
});