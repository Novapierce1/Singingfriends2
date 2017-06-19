var friend =['Chris','Alex','Jeremy', 'Scott','Ben'] 

var button = document.getElementById('button')
button.addEventListener("click", sing);

function sing () {
        for (var i=0; i<friend.length; i++) {
                var div = document.createElement("div");
                var h3 = document.createElement("h3");

                div.className = "friend";
                h3.innerHTML = friend[i];
                h3.style.color = "white"
                h3.style.fontSize = "26px"
                h3.style.fontFamily = "Helvetica"
                h3.style.borderBottom = "2px solid white"
                document.body.appendChild(div);
                div.appendChild(h3);
                
                for (var j=99; j>0; j--) {
                var Para = document.createElement("p"); 
                Para.style.fontFamily = "Helvetica"
                div.appendChild(Para);  

                        if (j>2) {
                        Para.innerHTML= j + ' lines of code in the file, ' + j + ' lines of code, ' + friend[i] + ' strikes one out, clears it all out, ' + (j-1) + ' lines of code in the file!'
                        } else if (j==2) {
                        Para.innerHTML= j + ' lines of code in the file, ' + j + ' lines of code, ' + friend[i] + ' strikes one out, clears it all out, ' + (j-1) + ' line of code in the file!'
                        } else if (j=1) {
                        Para.innerHTML = j + ' line of code in the file, ' + j + ' line of code, ' + friend[i] + ' strikes one out, clears it all out, no more lines of code in the file!'
                        }
                };    
        };
};

