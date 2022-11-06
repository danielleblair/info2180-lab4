
window.onload = function(){
    searchLst();
}

// function searchLst() {
//     let searchBtn = document.querySelector('#searchLstBtn');

//     searchBtn.addEventListener('click', function(element) {
//         //element.preventDefault();

//         fetch("superheroes.php")
//             .then(response => {
//                 if (response.ok) {
//                     return response.text()
//                 } else {
//                     return Promise.reject('something went wrong!')
//                 }
//             })
//             .then(data => {
//                 alert(data);

//             })
//             .catch(error => console.log('There was an error: ' + error));
//     });
// }

function searchLst() {
    let searchBtn = document.querySelector('#searchLstBtn');

    searchBtn.addEventListener('click', function(element) {
        //element.preventDefault();

        fetch("superheroes.php")
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    return Promise.reject('something went wrong!');
                }
            })
            // .then(data => {
            //     alert(data);

            // })
            .catch(error => console.log('There was an error: ' + error));
        // $.ajax({
        //     url: "superheroes.php", 
        //     data: document.getElementById("hero").value, 
    
        //     success: function(result){

        //         $s = array(url)
        //         $a=array("a"=>"red","b"=>"green","c"=>"blue");

        //         array_search(data, $a);

        //         $("#div1").html(result);
        //         var message = document.querySelector(".message");

        //     }});
        //http://localhost/info2180-lab4/index.html

        // $.ajax("somepage.php")
        //     .done(function(result) {
        //     $("#weather-temp").html("<strong>" + result + "</strong> degrees");
        //     }).fail(function(result) {
        //     $("#message").html("There seems to be an error.");
        //     });


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

                    console.log(response);
                    console.log(url);


                   // let responseArray = JSON.parse(response);
                    let heroValue = document.getElementById("hero").value;
                    //$.get("superheroes.php", function(response, heroValue){
                    if (response == "No hero"){
                        let result1 = document.getElementById("result");
                        result1.innerHTML = "Superhero not found";
                    }else{
                        //console.log(responseArray);
                        // let find = false;
                        // for (let x of response){
                        //     if ((x[1] || x[2]) == heroValue){
                        //         var alias = document.createElement('h3');
                        //         var name = document.createElement('h2');
                        //         var biography = document.createElement('p');

                        //         alias.textContent = i[2];
                        //         name.textContent = i[1];
                        //         biography.textContent = i[3];
                        //         find = true;
                        //     }
                        //     //array_search("red",$a)
                        // }
                        // if (find==false){
                        //     let result = document.getElementById("result");
                        //     result.textContent = "Superhero not found";
            
                        // }
                        let result1 = document.getElementById("result");
                    
                        result1.innerHTML = response;
                    }
                        
                        
                 } else {
                alert('There was a problem with the request.');
                }
            }



        // let heroValue = document.getElementById("hero").value;
        // $.get("superheroes.php", function(data, heroValue){
        //     for (let x of data){
        //         if ((i[1] || i[2]) == heroValue){
        //             var alias = document.createElement('h3');
        //             var name = document.createElement('h2');
        //             var biography = document.createElement('p');

        //             alias.textContent = i[2];
        //             name.textContent = i[1];
        //             biography.textContent = i[3];
        //         }
        //         else{
        //             let result = getElementById("result");
        //             result.textContent = "Superhero not found";
        //         }
        //         //array_search("red",$a)
        //     }
        //   });
            
           
        }
    });
}
