import { html, Component, render, useState} from '../common/standalone.module.js';

import {Delete, Edit} from '../svg/basicIcons.mjs';

/* global */
let listWebsite;

const listColor = ["#e30000", "#f3388d", "#ff8e00", "#ffdd00",  "#3353e2", "#058143", "#76278b", "#8ec63f", "#a4b8c3"]

/* components */

function cpn_ItemWebsite({objWebsite, numRerender}) {

  function deleteThisItem(event) {
  
  event.stopPropagation();
  
  const btn = event.target;
  
  const item = btn.parentNode.parentNode.parentNode.parentNode.parentNode;
  
  const list = document.getElementsByClassName("divListWebsite")[0];
  
  
  
  listWebsite = listWebsite.filter(function(itemEach) {
    return itemEach.key !== item.id;
  });
  
  saveListWebsite();
    
  item.remove();
  console.log(listWebsite);
  }
  
   return html`
      <div 
  class="itemWebsite"
  id="${objWebsite["key"]}"
  style="background-color:${objWebsite["color"]};"
  >
  
   <div class="leftItem">
   <a 
   href="${objWebsite["url"]}"
   style=""
   >
      ${objWebsite["title"]}
      </a>
   </div>
    
    <div class="rightItem">
    
    <div 
    class="btnDeleteThisItem"
    onClick=${deleteThisItem}> 
    <${Delete} />
    </div>
    
    <div 
    class="btnEditThisItem"
    > 
    <${Edit} />
    </div>
    
    </div>
      
      
      </div>`
}




function cpn_Content() {

  const [numRerender, setRerender] = useState(0);
  function forceRerender() {
   setRerender(numRerender + 1);
}

  function handleAddBookmark(event) {
   event.stopPropagation();
   
   const inputTitle = document.getElementsByClassName("inputTitle")[0];
   const inputUrl = document.getElementsByClassName("inputUrl")[0];
  
  const listInputColor = document.getElementsByName('color')
  
  let numColorAdding = Math.floor(Math.random() * 9) + 1;
  
  for (var i=0;i<listInputColor.length;i++){
  if(listInputColor[i].checked == true){
      numColorAdding = parseInt(listInputColor[i].value);
  }
  }
   
   const objWebsite = {
    title: inputTitle.value,
    url: inputUrl.value, 
    color: listColor[numColorAdding],
    key: (Date.now()).toString()
  };
  
  listWebsite.push(objWebsite);
  saveListWebsite();
  
  forceRerender()
}
  
  return html`
  <div class="divAddBookmark">
  
    <div 
      class="groupInput">
      
        <input class="inputTitle" type="text" placeholder="title" />
        <input class="inputUrl" type="text" placeholder="url" />
        
    </div>
    
  <div 
    class="groupColor">
    
  ${listColor.map((hexColor, index) => html`
  <div
    style="background-color: ${hexColor}"
  >
    <input 
    type="radio" 
    data-color="${hexColor}"
    name="color"
    value="${index + 1}"
    />
  </div>
  
  `)}
    
    
  
  </div>
    
    <div 
    class="btnAddBookmark"
    onClick=${handleAddBookmark}
    > + </div>
    </div>
    
    
    <div class="divListWebsite">
    
  ${listWebsite.map((objWebsite, index)=> html`
      <${cpn_ItemWebsite} 
      objWebsite=${objWebsite}
      numRerender=${numRerender}
      />`
      )}
    
    </div>
  
  `
}




function saveListWebsite() {
localStorage.setItem("listWebsite", JSON.stringify(listWebsite));

}


function loadListWebsite() {
  const loadedListWebsite = localStorage.getItem("listWebsite");
  
  if (loadedListWebsite !== null) {
    const parsedListWebsite = JSON.parse(loadedListWebsite);
    
    listWebsite = parsedListWebsite;
  }
  
  else {
    listWebsite = [];
  }
}

function init() {

  loadListWebsite();
  
  const content = document.getElementsByClassName("content")[0];
  render(html`<${cpn_Content}/>`, content);
  
}

init();




   
