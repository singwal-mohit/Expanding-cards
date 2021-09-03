const panel_class= document.querySelectorAll('.panel');

panel_class.forEach((panel)=>{
    panel.addEventListener('click',()=>{

        remove_active_class();
        panel.classList.add('active');

    })

}

)

function remove_active_class()
{
    panel_class.forEach(  (panel)=>{

        panel.classList.remove('active');
    }
    )
}