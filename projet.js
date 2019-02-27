

 function validateform()
{
    var a=document.getElementById('name').value;
    var e=document.getElementById('email').value;
    var s=document.getElementById('subject').value;
    var m=document.getElementById('msg').value;
    if (a==''){
        alert("Enter votre nom svp");
/*document.getElementById('resname').textContent="Enter votre nom svp";*/
    }
else if  (e==''){alert("Enter votre mail svp");

   /* document.getElementById('resmail').textContent="Enter votre mail svp";*/
    }
    else if  (s==''){ alert("Enter votre sujet svp");
      /*  document.getElementById('ressubject').textContent="Enter votre sujet svp";*/
    }
        else if  (m==''){ alert("Enter votre message svp");
           /* document.getElementById('resmsg').textContent="Enter votre message svp";*/
        }
            else{ alert("Votre message a été enregistrée");
               /* document.getElementById('result').textContent="Votre message a été enregistrée"*/
            }
            

} 


function validateform2()
{
    var a2=document.getElementById('name2').value;
    var e2=document.getElementById('email2').value;
    var d=document.getElementById('date').value;
    var n=document.getElementById('num').value;
    var c=document.getElementById('code').value;
  
    if (a2==''){
        alert("Enter votre nom svp");
/*document.getElementById('resname').textContent="Enter votre nom svp";*/
    }
else if  (e2==''){alert("Enter votre mail svp");

   /* document.getElementById('resmail').textContent="Enter votre mail svp";*/
    }
    else if  (d==''){alert("Enter une date svp"); 
             }
    
             else if  (n==''){alert("Enter le numéro de la carte bancaire svp!"); 
             }
             else if  (c==''){alert("Enter votre code secret svp"); 
             }

            else{ alert("Votre réservation a été enregistrée"); 
               /* document.getElementById('result').textContent="Votre message a été enregistrée"*/
            }
            
            
} 




function myFunction2() {
    var x = document.getElementById("email").pattern;
    document.getElementById("demo").innerHTML = x;
  }
  
  function sum(){
    var p1=2800;
   // var p2=3150;
  //  var p3=4000;
      var d=document.getElementById('date').value;
      if (d.getDate>=1 && d.getMonth<=4)
      { 
          document.getElementById('total').textContent=p1;
          alert("2800DT")
          console.log("2800");
      }
  }