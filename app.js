
function tableTester() {
    var xumber = 72;
    while (xumber > 50){
        const n1 = Math.floor(Math.random()*20)+1;
    
    const n2 = Math.floor(Math.random()*10)+1;
    
    const solution = (n1*n2)
    
    questions = [];
    correct = 0;
    
    function keepPoint() {
        questions++;
        output.push(questions);
        console.log(questions);
    }
        
    function start() {
        var answer = prompt("What is " + n1 + " times " + n2 );
        questions = questions++;
        if(answer == solution) {
            correct = correct++;
            alert("Correct!");
        } else {
            alert("Incorrect. Streak Lost");
            xumber = 1;
        }
    }
    start();
    }
}