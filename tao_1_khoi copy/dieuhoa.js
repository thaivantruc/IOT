


function dieuhoa_a(div_name){

    const containera = document.createElement('div');
    containera.className = "container";


    const div_box = document.createElement('div');
    div_box.className = "dieuhoa";
    containera.appendChild(div_box);

        const div_khung = document.createElement('div');
        div_khung.className = "khung";
        div_box.appendChild(div_khung);

            const div1 = document.createElement('div');
            const  h5a = document.createElement('h5');
            const txh5 = document.createTextNode("OFF");
            h5a.appendChild(txh5);
            h5a.className = "on_off";
            div1.appendChild(h5a);
            div_khung.appendChild(div1);

            const div2 = document.createElement('div');
            div_khung.appendChild(div2);
            const ikhung = document.createElement('i');
            div2.appendChild(ikhung);
            ikhung.className = "fa fa-temperature-low air";
            // ikhung.className = "air";

            const div3 = document.createElement('div');
            div_khung.appendChild(div3);
            const h5b = document.createElement('h5');
            div3.appendChild(h5b);
            const txh5b = document.createTextNode("Ari Conditionner");
            h5b.appendChild(txh5b);
            h5b.className = "chu";
        
        const div4 = document.createElement('div');
        div_box.appendChild(div4);
            
            const lablea = document.createElement('label');
            div4.appendChild(lablea);
            lablea.className = "switch";

                const inputa = document.createElement('input');
                lablea.appendChild(inputa);
                inputa.type = "checkbox";
                inputa.onclick = function(){changeMode()};

                const spana = document.createElement('span');
                lablea.appendChild(spana);
                spana.className = "slider";
   
    const div_contain = document.querySelector(div_name);
    div_contain.appendChild(containera);


    function changeMode()
    {
        var element= document.querySelector(div_name + " .container"); 
        var air = document.querySelector(div_name + " .air");
        element.classList.toggle("dark-mode");
        var on_off = document.querySelector(div_name + " .on_off")
        var chu = document.querySelector( div_name + " .chu");
        if(element.classList.contains("dark-mode"))
        {
            on_off.innerHTML = "ON";
            on_off.style.color = "white";
            chu.style.color = "white";
            air.style.color = "white";
        }
        else
        {
            on_off.innerHTML = "OFF";
            on_off.style.color = "black";
            chu.style.color = "black";
            air.style.color = "#5f2076";
        }
    }

}
