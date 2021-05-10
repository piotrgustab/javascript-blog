use strict';
const titleClickHandler = function(event){
    event.preventDefault();

    const clickedElement = this;
    console.log('Link was clicked!');

    /* remove class 'active' from all article links  */
    const activeLink = document.querySelector('.titles a.active');
    if(activeLink) activeLink.classList.remove('active');

    /*  add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    /* find active article and hide it*/
    const activeArticle = document.querySelector('.post.active');
    if(activeArticle) activeArticle.classList.remove('active');

    /* get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href'); //#article-1

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    targetArticle.classList.add('active');
  }
  
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
  function generateTags(){
    /* find all articles */
  
    /* START LOOP: for every article: */
  
      /* find tags wrapper */
  
      /* make html variable with empty string */
  
      /* get tags from data-tags attribute */
  
      /* split tags into array */
  
      /* START LOOP: for each tag */
  
        /* generate HTML of the link */
  
        /* add generated code to html variable */
  
      /* END LOOP: for each tag */
  
      /* insert HTML of all the links into the tags wrapper */
  
    /* END LOOP: for every article: */
  }
  
  generateTags();