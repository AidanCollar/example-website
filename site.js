const h1=document.querySelector('H1')
h1.textContent="Ryan's awesome webpage"


const copyright = document.querySelector('footer p')
copyright.textContent = "MONKEY"

const link = document.querySelector('.active')
link.style.color="#ff4900"
link.style.textDecoration="underline"

const thing = document.querySelector('#contact')
thing.style.borderStyle="dotted"

const links = document.querySelectorAll('nav a')
links.forEach(link => link.style.display='none')
 