const reactelement={
    type:'a',
    props:{
        href:'https://google.com',
        target :'_blank'
    },
    children : 'click me to visti google'
}

const maincontenaer = document.querySelector('#root')
 customrender(reactelement,maincontenaer)

 function customrender(reactelement,container){
    // const domelement = document.createElement(reactelement.type)
    // domelement.innerHTML = reactelement.children
    // domelement.setAttribute('href',reactelement.props.href)
    // domelement.setAttribute('target',reactelement.props.target)
    // container.appendChild(domelement)

    // dynamic props value getting
    const domelement= document.createElement(reactelement.type)
    domelement.innerHTML=reactelement.children
    for(const prop in reactelement.props){
        if(prop==='children') continue;
        domelement.setAtrribute(prop,reactelement.props[prop])
    }
    container.appendChild(domelement)
 }
