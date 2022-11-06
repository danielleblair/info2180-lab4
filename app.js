
window.onload = function(){
    searchLst();
}

function searchLst() {
    let searchBtn = document.querySelector('#searchLstBtn');

    searchBtn.addEventListener('click', function(element) {

        // fetch("superheroes.php")
        //     .then(response => {
        //         if (response.ok) {
        //             return response.text();
        //         } else {
        //             return Promise.reject('something went wrong!');
        //         }
        //     })
        //     .catch(error => console.log('There was an error: ' + error));


        const httpRequest = new XMLHttpRequest();
        var heroValue = document.getElementById("hero").value;
        let url = "superheroes.php?query="+heroValue;
        httpRequest.onreadystatechange = doSomething;
        httpRequest.open('GET', url,true);
        httpRequest.send();

        function doSomething() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
                if (httpRequest.status === 200) {
                    let response = httpRequest.responseText;

                    if (response == "No hero"){
                        let result1 = document.getElementById("result");
                        result1.innerHTML = "Superhero not found";
                    }else{

                        let result1 = document.getElementById("result");
                    
                        result1.innerHTML = response;
                    }
                        
                        
                 } else {
                alert('There was a problem with the request.');
                }
            }
            
           
        }
    });
}
