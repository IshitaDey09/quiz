function check(){
   
    var i=0;
    
    /* 1 marks questions */
    
    {
        var q1=document.quiz.question1.value;
        if (q1=="intersecting or coincident") {i=i+1}
    }
    
    {
        var q2=document.quiz.question2.value;
        if (q2=="y-axis") {i=i+1}
    
    }
    
    {
        var q3=document.quiz.question3.value;
        if (q3=="3/5")  {i=i+1}
        
    }
    
    {
        var q4=document.quiz.question4.value;  
        if (q4=="Atmospheric Pressure") {i=i+1}
        

    }
    
    {
        var q5=document.quiz.question5.value;
         if (q5=="Barometer") {i=i+1}
          
    }
    
    {
        var q6=document.quiz.question6.value;
        if (q6=="Friction") {i=i+1}
    }
    
    /* 2 marks questions */
    
    {
        var q7=document.quiz.question7.value;
        if (q7=="Granddaughter") {i=i+2}
        
    }
    
    {
        var q8=document.quiz.question8.value;
        if (q8=="4% of a") {i=i+2}
       
    }
    
    /* 5 marks questions */
    
    {
        var q9=document.quiz.question9.value;
        if (q9=="2/91") {i=i+5}
    
    }
    
    {
        var q10=document.quiz.question10.value; 
        if (q10=="24 liters") {i=i+5}
    }
    
    {
        
        var q11=document.quiz.question11.value;
        if (q11=="all of the above") {i=i+5}
    }
    

    document.write("Your result out of 25 is:::",i);

       
    
}



    