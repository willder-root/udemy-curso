const paragrafo = document.querySelector('.paragrafo')

const paragrafos = document.querySelectorAll('p')


const estilosBody = getComputedStyle(document.body)
const backgroundColorBody = estilosBody.backgroundColor
for (let p of paragrafos){
    p.style.backgroundColor = backgroundColorBody
    p.style.color = "#fff"
    p.style.borderRadius = '15px'
    p.style.fontSize ='16px'
    p.style.textAlign ='center'
}