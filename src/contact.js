import locationImageSrc from './randomLocation.png';

export function loadContactPage(){
    const contentDiv=document.getElementById('content');

    contentDiv.innerHTML='';

    const contactBackdrop=document.createElement('div');
    contactBackdrop.id='contactBackdrop';

    const phoneNum=document.createElement('p');
    phoneNum.textContent='+1 123 123 1234';
    
    const address=document.createElement('p');
    address.textContent='123 Wayfinder Pathway, Place, Country';

    const locationImage=document.createElement('img');
    locationImage.id='locationImg'
    locationImage.src= locationImageSrc
    locationImage.alt='location on maps';
    
    contactBackdrop.appendChild(phoneNum);
    contactBackdrop.appendChild(address);
    contactBackdrop.appendChild(locationImage);

    contentDiv.appendChild(contactBackdrop);

}