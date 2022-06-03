const questions=document.querySelectorAll('.q-a');
questions.forEach(function(q1){
    const btn=q1.querySelector('.ans1');
    btn.addEventListener("click",function(){
        q1.classList.toggle("text-show");
    })
})