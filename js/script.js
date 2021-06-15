use strict';

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  const optArticleSelector = '.post-tags .list',
  

function generateTitleLinks(){
  /* remove contents of titleList */

  const titleList = document.querySelectorAll(optTitleListSelector).innerHTML = '';


  /* find all the articles and save them to variable: articles */
 const articles = document.optArticleSelector;
 
 
 

  let html = '';

  for(let article of articles){
    /* get the article id */
    const articleId = Id;

    /* find the title element */
    /* ... */

    /* get the title from the title element */
    /* ... */

    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

    linkHTML.insertAdjacentHTML(beforebegin, linkHTML);
    html = html + linkHTML;
  }

  titleList.innerHTML = html;
}

generateTitleLinks();


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
   console.log(links);
  const links = document.querySelectorAll('.titles a');
  
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }


  const optTagsListSelector = .tags.list 

  function generateTags(){

    /* [NEW] create a new variable allTags with an empty object */
    let allTags = {};
      /* find all articles */
      const articles = document.querySelectorAll('article');
    
      /* START LOOP: for every article: */
      for(let article of articles) {

      /* find tags wrapper */
      const TagWrapper = article.querySelector(optArticleTagsSelector);
  
      /* make html variable with empty string */
      let html = '';
  
      /* get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');
  
      /* split tags into array */
      const articleTagsArray = articleTags.split(' ');
  
      /* START LOOP: for each tag */
      for(let tag of articleTagsArray) {
  
        /* generate HTML of the link */
        let LinkHTML = '<li><a href="#tag-' + tag + '">' + tag + '</a></li>';
  
        /* add generated code to html variable */
        html = html + ' ' + LinkHTML

        /* [NEW] check if this link is NOT already in allTags */
        if(!allTags[tag]) {
        /* [NEW] add tag to allTags object */
        allTags[tag] = 1;
        } else {
        allTags[tag]++;
}
  }
      /* END LOOP: for each tag */
    }
      /* insert HTML of all the links into the tags wrapper */
      TagWrapper.innerHTML = html;
    /* END LOOP: for every article: */
    }
    /* find list of tags in right column */
  const tagList = document.querySelector('.tags');

  const tagsParams = calculateTagsParams(allTags);
  console.log('tagsParams:', tagsParams)3
 /* [NEW] create variable for all links HTML code */
let allTagsHTML = '';

/* [NEW] START LOOP: for each tag in allTags: */
for(let tag in allTags){
  /* [NEW] generate code of a link and add it to allTagsHTML */
  allTagsHTML += tag + ' (' + allTags[tag] + ') ';
}
/* [NEW] END LOOP: for each tag in allTags: */

/*[NEW] add HTML from allTagsHTML to tagList */
tagList.innerHTML = allTagsHTML;
  }
  
  generateTags();





  function tagClickHandler(event){
    /* prevent default action for this event */
      event.preventDefault();

    /* make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;
  
    /* make a new constant "href" and read the attribute "href" of the clicked element */
    const href = this.getAttribute('href');
  
    /* make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', '');
  
    /* find all tag links with class active */
    const ActiveLinks = document.querySelectorAll('a.active[href^="#tag-"]');
  
    /* START LOOP: for each active tag link */
    for(ActiveLink of ActiveLinks) {
  
      /* remove class active */
      ActiveLink.classList.remove('active')
  
    /* END LOOP: for each active tag link */
   }
    /* find all tag links with "href" attribute equal to the "href" constant */
    let TagEquals = document.querySelectorAll(href);
  
    /* START LOOP: for each found tag link */
    for (let TagEqual of TagEquals) {
  
      /* add class active */
      TagEqual.classList.add('active')
  
    /* END LOOP: for each found tag link */
  }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]');
  }
  

  function addClickListenersToTags(){

    /* find all links to tags */
      const tags = document.querySelectorAll('.list-horizontal a');

    /* START LOOP: for each link */
    for (let tag of tags) {
  
    /* add tagClickHandler as event listener for that link */
    tag.addEventListener('click', tagClickHandler);
  
    /* END LOOP: for each link */
    }
  }
  
  addClickListenersToTags();


  function generateAuthors() {
    const articles = document.querySelectorAll('article');
    for(let article of articles) {
        let html = '';
        const authorWrapper = article.querySelectorAll(optArticleAuthorSelector);
        const articleAttribute = article.getAttribute('data-author');
        for (let authorWrap of authorWrapper) {
        let authorTag = '<a href="#' + articleAttribute + '">' + articleAttribute + '</a';
        authorWrap.innerHTML = html + authorTag
        }
    }
  }
const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

  const opts = {
    articleSelector: '.post',
    titleSelector: '.post-title',
    titleListSelector: '.titles'
  };


  const opts = {
    tagSizes: {
      count: 5,
      classPrefix: 'tag-size-',
    },
  };
  
  const select = {
    all: {
      articles: '.post',
      linksTo: {
        tags: 'a[href^="#tag-"]',
        authors: 'a[href^="#author-"]',
      },
    },
    article: {
      tags: '.post-tags .list',
      author: '.post-author',
    },
    listOf: {
      titles: '.titles',
      tags: '.tags.list',
      authors: '.authors.list',
    },
  };
  