//scroll top btn
// Get the button:
let mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; //for mob
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("navbar__list");
    if (x.className === "navbar__menu") {
      x.className += " responsive";
    } else {
      x.className = "navbar__menu";
    }
  };
//nav var
const navBarMenu =document.getElementById('navbar__list');
//sections var
const sections =document.querySelectorAll('section');
//built the navigation bar 
const navigation=()=>{
    let navi ='';
    sections.forEach(section=>{sectionID=section.id;
    const secctionDataNav=section.dataset.nav;
    navi +=`<li><a class="menu__link" href="#${sectionID}">${secctionDataNav}</a></li>`;
 });
 navBarMenu.innerHTML=navi;
 navBarMenu.appendChild(navi);

  };
navigation();
// using GetBoundingClintReact
function sectionInViewPort(Element)
{
 const Area =Element.getBoundingClintReact();
 return(Area.top >= 0);
};
//active class
function selectActiveClass()
{
    for(section of sections){ if(sectionInViewPort(section))
        {if(!section.classList.contains('your-active-class')) {section.classList.remove('your-active-class');}
    } else{section.classList.add('your-active-class');}
    }
};
///000