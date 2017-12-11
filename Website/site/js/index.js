window.onload = function(){

    // get formula when check
    document.getElementById("check").onclick=function(){
        if (document.getElementById('formula').value){
            performPostRequest(0);
        }else{
            paragraph(-1);
        }
    }

    // Get formula when evaluate
    document.getElementById("evaluate").onclick=function(){
        if (document.getElementById('formula').value){
            performPostRequest(1);
        }else{
            paragraph(-1);
        }
    }

    // Post to the API
    function performPostRequest(choice) {
        form = document.getElementById('formula').value
        axios.post('http://localhost:8081/', {
            formula: form
        })
        .then(function (response) {
            console.log(response);
            str = document.getElementById('formula');
            paragraph(0);
            errCheck = checkingMore(str);
            if (errCheck == 0){
                answer = calculate(parseCalculationString(str.value));
                if (answer == Infinity || answer == -Infinity){
                    paragraph(-2);
                }else if (isNaN(answer)){
                    paragraph(-10);
                }else{
                    if (choice == 0){
                        res = document.getElementById('postResult');
                        res.style.visibility = "hidden";
                    }else{
                        result(answer);
                    }
                }
            }
        })
        .catch(function (error) {
            console.log(error);
            paragraph(-10);
        });
    }

    // Function that add more checkings than the API
    function checkingMore(str){
        str.value = str.value.toString().replace(/\s+/g, '');
        partStr = ['/+', '/-', '/*', '//',
                        '*+', '*-', '**', '*/',
                         '++', '+-', '+*', '+/',
                         '-+', '--', '-*', '-/'];
        for (var word in partStr){
            if(str.value.toString().indexOf(partStr[word] + "") !== -1){
                paragraph(-10);
                return -1;;
            }
        }
        if (str.toString().substring(0, 1) == "*" || str.toString().substring(0, 1) == "/" || str.toString().substring(0, 1) == "+" || str.toString().substring(0, 1) == "-" || str.toString().substring(0, 1) == "=") {
            paragraph(-10);
            return -1;
        } else if (str.toString().indexOf("*", str.length - 1) !== -1 || str.toString().indexOf("/", str.length - 1) !== -1 || str.toString().indexOf("+", str.length - 1) !== -1 || str.toString().indexOf("-", str.length - 1) !== -1 || str.toString().indexOf("=", str.length - 1) !== -1) {
            paragraph(-10);
            return -1;
        }
        return 0;
    }

    // Function to display errors
    function paragraph(err){
        p = document.getElementById('msg');
        p.style.visibility = "visible";
        res = document.getElementById('postResult');
        switch(err) {
          case 0:
            p.innerHTML = 'ok!'
            p.style.color = "green";
            break;
          case -1:
            p.style.color = "red";
            p.innerHTML = 'Error, enter a formula...';
            res.style.visibility = "hidden";
            break;
          case -2:
            p.style.color = "red";
            p.innerHTML = 'MathError...'
            res.style.visibility = "hidden";
              break;
          default:
            p.style.color = "red";
            p.innerHTML = 'Error, formula is wrongly written...';
            res.style.visibility = "hidden";
        }
    }

    // Function to display result
    function result(val){
      p = document.getElementById('postResult');
      p.innerHTML = 'Result : '+val;
      p.style.visibility = "visible";
    }
}