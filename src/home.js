export function loadHomePage(){
    const contentDiv=document.getElementById('content');
    //clears the content div between tabs
    contentDiv.innerHTML='';

    const homeBackdrop=document.createElement('div');
    homeBackdrop.id='homeBackdrop';

    const header=document.createElement('h1');
    header.textContent= 'Some Food Place';

    const description=document.createElement('p');
    description.textContent='Lorem Blorem and Shlorum Decorum Lorem Blorem and Shlorum Decorum Lorem Blorem and Shlorum Decorum Lorem Blorem and Shlorum Decorum';


    homeBackdrop.appendChild(header);
    homeBackdrop.appendChild(description);

    contentDiv.appendChild(homeBackdrop);
}

