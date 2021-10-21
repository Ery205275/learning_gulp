(() =>{

    const  theTeam = document.querySelector("#teamSection"),
           theTemplate = document.querySelector("#bio-template").content;



//set up a Fetch function and get some data
  function getData(){
    //retrieve our data object
    fetch("./data.json") //go and get data
       .then(res => res.json()) //(convert the data to plain object)
       .then(data => {
        console.log(data);

        buildTeam(data);
       })
    .catch(error => console.error(error));
  }

  function buildTeam(info){
// grab key drom data object 
     const people = Object.keys(info);
     people.forEach(person => {
         let panel = theTemplate.cloneNode(true); //make a copy of the template conetnt
         let containers = panel.firstElementChild.children; // get a reference to the template content

         //cycle through child element in the <secion> tag in the <template> tag
        // and update their attributes

        // add the images
         containers[0].querySelector("img").scr = `images/${info[person].biopic}`;

         //update the text
         containers[1].textContent = info[person].name;
         containers[2].textContent = info[person].role;
         containers[3].textContent = info[person].nickname;

         theTeam.appendChild(panel);
     })
  }

  getData();
})();