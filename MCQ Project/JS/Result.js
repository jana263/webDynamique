let submission,RightAnswersCount=0;
window.onload = function() {  
    submission=JSON.parse(sessionStorage.getItem('submission'))
 
    for (var index in submission) {    
        let divisor = document.createElement("div");
        const q=submission[index];
        
        const question=q.Question;
        const Responce=q.Responce;
        const answer=q.answer;
    
        divisor.classList.add("child");
        document.getElementById('Container').appendChild(divisor);
    
        let questDiv= document.createElement("div");
        questDiv.classList.add("questDiv");
        let QuestionTitle = document.createElement("p");
        QuestionTitle.classList.add("Title");
        QuestionTitle.innerHTML=question;
        questDiv.appendChild(QuestionTitle);
        divisor.appendChild(questDiv);
    
        
        let comparisionDiv= document.createElement("div");
        comparisionDiv.classList.add("optDiv");
    
            let label=document.createElement('label');
            label.innerHTML="Your Answer: ";
            comparisionDiv.appendChild(label); 
            label.style='flex-direction: initial; align-items: center; justify-content: flex-start;'
            let labelResponce=document.createElement('label');
            labelResponce.innerHTML=Responce;
            label.appendChild(labelResponce);
            labelResponce.style+='flex-direction: row;justify-content: flex-start; align-items: center;'
            let labelAnswer=document.createElement('label');
            labelAnswer.innerHTML="Correct Answer: "+answer;
            comparisionDiv.appendChild(labelAnswer);
            comparisionDiv.style.border='none'
            comparisionDiv.style.overflow='auto'
            labelResponce.style.color=Responce==answer?correct():'red'
            
        divisor.appendChild(comparisionDiv);
    }
    
    const CorrectAnswerLabel=document.createElement('label');
    CorrectAnswerLabel.innerHTML='Score: '+RightAnswersCount+'/'+submission.length;
    CorrectAnswerLabel.classList.add('score');
    document.body.appendChild(CorrectAnswerLabel);
};
function correct(){
    RightAnswersCount++
    return 'green'
}
function Home(){
    sessionStorage.clear
    window.location.href = '../Menu.html'
}