// TODO: add code here


window.addEventListener('load', function () {
    
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function (response) {
        //console.log(response);
        response.json().then(function (data) {
            //console.log(data);
            data.sort(function (a, b) { return b.hoursInSpace - a.hoursInSpace });
            for (i = 0; i < data.length; i++) {
                let astronaut = data[i];
                if (astronaut.active === true) {
                    container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>${astronaut.hoursInSpace}</li>
                        <li style="color:green">${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>
            `} else {
                    container.innerHTML += `
                <div class="astronaut">
                <div class="bio">
                    <h3>${astronaut.firstName} ${astronaut.lastName}</h3>
                    <ul>
                        <li>${astronaut.hoursInSpace}</li>
                        <li id="active">${astronaut.active}</li>
                        <li>Skills: ${astronaut.skills}</li>
                    </ul>
                </div>
                <img class="avatar" src="${astronaut.picture}">
            </div>`;
                };
            };

           let count = document.getElementById('count');
           count.innerHTML = `Astronauts: ${data.length}`;
           
        });
    });
});







