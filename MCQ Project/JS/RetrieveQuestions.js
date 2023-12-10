import { Cpp } from "./questions.js";

let ArrOfQuest

function loadQuestion(){
    for(var index in Cpp){
        let div = document.createElement("div");
        const QuestionData=Cpp[index];
        let QuestionText= document.createElement("p");
        QuestionText.classList.add("QuestionText");
        div.classList.add("QuestionDiv");
        QuestionText.innerHTML=QuestionData.question;
        div.appendChild(QuestionText);

        let AnswerText=document.createElement("p");
        AnswerText.classList.add("AnswerText");
        AnswerText.innerHTML="Reponse: "+QuestionData.answer;
        AnswerText.style.display='none';
        div.appendChild(AnswerText);

        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.title="Click to toggle answer";

        let bubble2 = document.createElement("div");
        bubble2.classList.add("bubble2");
        bubble2.title="Copy and paste in filter"
        let medalTxt= document.createElement("p");
        medalTxt.innerHTML=QuestionData.Level==3?"🥇":QuestionData.Level==2?"🥈":"🥉";
        medalTxt.style.display="flex";
        medalTxt.style.alignItems="center";
        medalTxt.classList.add("medalTxt");
        bubble2.appendChild(medalTxt);
        

        let image= document.createElement("img");
        image.src="../images/logo1.png";
        image.classList.add("miniPanda");

        let image2= document.createElement("img");
        image2.src="../images/logo2.png";
        image2.classList.add("miniPanda");
        image2.style.display='none';
        image2.style.display='none';

        bubble.addEventListener('click', () => {
            SwitchDisplayState(image.style.display!='none',image,image2,AnswerText)
            // image.style.display=='none'?SwitchPanda(image2,image):SwitchPanda(image,image2,AnswerText);
        });
        // bubble.onclick=SwitchPanda(image,image2);
        bubble.appendChild(image);
        bubble.appendChild(image2);
        div.appendChild(bubble);
        div.appendChild(bubble2);
        document.body.appendChild(div);
        
    }
}

function SwitchDisplayState(ShowAnswer,panda1,panda2,AnswerText){
    if(ShowAnswer){
        panda1.style.display='none';
        panda2.style.display='block';
        AnswerText.style.display='block';
    }
    else{
        panda1.style.display='block';
        panda2.style.display='none';
        AnswerText.style.display='none';
    }
    
}

window.onload= function(){
    loadQuestion();
    ArrOfQuest=[...document.getElementsByClassName('QuestionDiv')];
    let Filter=document.getElementById("Filter");
    
    Filter.placeholder=`Filter...🥇🥈🥉`;
    Filter.addEventListener('input', (e) => {
        filter(e.target)
     });
    document.getElementById("backButton").addEventListener('click', () => {
        window.location.href = '/Menu.html'
    });

}
function filter(target){
    if (target.value==''){
        ArrOfQuest.map((div)=>{
            div.style.display='block';
            return });
    }
    else{
        ArrOfQuest.map((div)=>{
            // console.log(div.getElementsByClassName("QuestionText")[0].innerHTML)
            if(target.value=="🥇"&&div.getElementsByClassName("medalTxt")[0].innerHTML=='🥇'){
                div.style.display='block';
            }
            else if(target.value=="🥈"&&div.getElementsByClassName("medalTxt")[0].innerHTML=='🥈'){
                div.style.display='block';
            }
            else if(target.value=="🥉"&&div.getElementsByClassName("medalTxt")[0].innerHTML=='🥉'){
                div.style.display='block';
            }
            else if(div.getElementsByClassName("QuestionText")[0].innerHTML.toLowerCase().replace(/ /g,'').includes(target.value.toLowerCase().replace(/ /g,''))==1){
                div.style.display='block';
            }
            else{
                div.style.display='none';
            }
            return });
    }
}

