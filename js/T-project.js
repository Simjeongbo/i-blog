let showButton = document.getElementById('file1');
let closeButton = document.getElementById('close_1');
let folder = document.querySelector('.folder');
let tproject1 = document.querySelector('.cards');


showButton.addEventListener('click', showProject);
closeButton.addEventListener('click', closeProject);



function closeProject(e){
  e.preventDefault();
   closeAnimate();
}

function showProject(e){
  e.preventDefault();
   showAnimate();
}



function closeAnimate(){
  folder.style.display = "block";
  tproject1.style.display = "none";
}

function showAnimate(){
  folder.style.display = "none";
  tproject1.style.display = "block";
}
