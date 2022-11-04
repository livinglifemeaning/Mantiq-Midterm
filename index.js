const graphs = document.querySelectorAll(".graph")
graphs.forEach(graph => {
    const button = graph.querySelector("button")
    button.addEventListener("click", ()=> {
        const visibility = graph.getAttribute("data-open")
        if(visibility === "false"){
            graph.setAttribute("data-open", true)
        } else{
            graph.setAttribute("data-open", false)
        }
        console.log(visibility)
    })
})
