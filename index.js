var elementosduvidas=document.querySelectorAll('.duvidas')

elementosduvidas.forEach(function (duvidas)
{duvidas.addEventListener('click',function()
    {duvidas.classList.toggle("ative")} )})

