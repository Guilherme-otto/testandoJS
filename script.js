



function adicionarTarefa(){
    let input = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = valorDoInput + "<span>@</span>"

    document.querySelector("ul").appenChild(li)
}