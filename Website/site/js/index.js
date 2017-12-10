window.onload = function(){

    document.getElementById("check").onclick=function(){
        if (document.getElementById('formula').value){
            performPostRequest(0);
        }else{
            paragraph(-1);
        }
    }

    document.getElementById("evaluate").onclick=function(){
        if (document.getElementById('formula').value){
            performPostRequest(1);
        }else{
            paragraph(-1);
        }
    }

    function performPostRequest(choice) {
        var form = document.getElementById('formula').value
        axios.post('http://localhost:8081/', {
            formula: form
        })
        .then(function (response) {
            console.log(response);
            if (choice == 0){
                paragraph(0);
            } else{
                //TODO le calcul
                str = document.getElementById('formula');
                answer = calculate(parseCalculationString(str.value));
                paragraph(1);
                result(answer);
            }
        })
        .catch(function (error) {
            console.log(error);
            paragraph(-10);
        });
    }

    function paragraph(err){
        p = document.getElementById('msg');
        if (err == 0){
            p.innerHTML = 'ok!'
            p.style.color = "green";
        }else if (err == 1){
            p.innerHTML = ''
            p.style.color = "green";
        }else if (err == -1){
            p.style.color = "red";
            p.innerHTML = 'Error, enter a formula...';
        }else{
            p.style.color = "red";
            p.innerHTML = 'Error, formula is wrongly written...';
        }
    }

    function result(val){
      p = document.getElementById('postResult');
      p.innerHTML = 'Result:'+val;
      p.style.color = "green";
    }
}
