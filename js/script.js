/*
document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  */
  const titleClickHandler = function(event){
    console.log('Link was clicked!');
  
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    /*  add class 'active' to the clicked link */
    event.preventDefault();
    console.log('clickedElement:', clickedElement);
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.add('active');
    /* remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.titles a.active');

for(let activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}



  
    /* get 'href' attribute from the clicked link */
    articleSelector = element.getAttribute(clickedElement)

    /* find the correct article using the selector (value of 'href' attribute) */
    targetArticle.querySelector(clickedElement)
    


    /* add class 'active' to the correct article */
    event.preventDefault();
    console.log('clickedElement:', clickedElement);
    const activeLinks = targetArticle.querySelectorAll('.titles a.active');

  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }