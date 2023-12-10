import { Cpp } from "./questions.js";
const Questions=Cpp;

window.onload = function() {
    document.getElementById("Finish").addEventListener('click', () => {
        Submit();
    });
};

Questions.sort((a, b) => 0.5 - Math.random());

for (var quest in Questions) {
    let divisor = document.createElement("div");
    const q=Questions[quest];
    const question=q.question;
    const options=q.options.sort((a, b) => 0.5 - Math.random());
    divisor.classList.add("child");
    // divisor.innerHTML=question+' '+options+' '+answer;
    document.getElementById('Container').appendChild(divisor);
    
    let questDiv= document.createElement("div");
    questDiv.classList.add("questDiv");
    let QuestionTitle = document.createElement("p");
    QuestionTitle.classList.add("Title");
    QuestionTitle.innerHTML=question;
    questDiv.appendChild(QuestionTitle);
    divisor.appendChild(questDiv);

    let optDiv= document.createElement("div");
    optDiv.classList.add("optDiv");

    for(var opt in options){
        let label=document.createElement('label');
        label.innerHTML=options[opt];
        label.classList.add('clickable')
        let radio= document.createElement('input');
        radio.type='radio';
        radio.name=quest;
        radio.value=label.innerHTML;
        radio.classList.add('clickable')
        label.appendChild(radio);
        optDiv.appendChild(label);
    }
    // radioNames.push(quest);
    divisor.appendChild(optDiv);
}

function Submit(){

    let submission=[]

    for(var q in Questions){
        function ahhhh(){let answer=document.querySelector('input[name="'+q+'"]:checked'); return answer==null?'N/a':answer.value}
        submission.push({
            Question:Questions[q].question,
            Responce:ahhhh(),
            answer:Questions[q].answer
        })
    }

    sessionStorage.setItem('submission',JSON.stringify(submission))    
    window.location.href = 'Result.html';
}

