export function loadMenuPage(){
    const contentDiv=document.getElementById('content');

    contentDiv.innerHTML='';

    const menuBackdrop=document.createElement('div');
    menuBackdrop.id='menuBackdrop';

    for(let i=0;i<6;i++){
        const menuItem= document.createElement('div');
        menuItem.classList.add('menuItem');

        const recipeName = document.createElement('h1');
        recipeName.classList.add('recipeName');
        recipeName.textContent = 'Recipe Name'; 

        const recipeIngredients = document.createElement('p');
        recipeIngredients.textContent = 'recipe ingredients recipe ingredients recipe ingredients'; 

        menuItem.appendChild(recipeName);
        menuItem.appendChild(recipeIngredients);

        menuBackdrop.appendChild(menuItem);
    }
    contentDiv.appendChild(menuBackdrop);
}