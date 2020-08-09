function run(){

    let headlines = Array.from(document.getElementsByTagName("h4"));
    headlines.forEach(element=>
        {   
            if(element.getElementsByTagName('a')[0].text.toUpperCase().includes('TRUMP')){
                element.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
                // element.parentElement.parentElement.parentElement.parentElement.style.display = 'none';
            }        
    });

}
run();
document.addEventListener('DOMNodeInserted', run);