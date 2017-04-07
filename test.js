   tempsRestan('06/08/2017 03:1 PM', 'countdown');

    function tempsRestan(deadline, id)
    {
        //initialisation de dealine avec la variable end
        var end = new Date(deadline);

        //initialisation des valeurs pour calculer le temps;
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        //timer sert a définir le temps d'appel de la fonction
        var timer;
        //Pour ne pas avoir de temps d'attente d'une seconde
        showRemaining();
        
        //Calcul la difference entre temps actuelle et temps avenir
        function showRemaining() {
            var now = new Date();
            //soustraction du temps 
            var distance = end - now;
            //Condition si distance est inférieur à 0

            if (distance < 0) {
                //Stop l'appel de la fonction
                clearInterval(timer);
                //On écrit c'est fini;
                document.getElementById(id).innerHTML = 'C\'est fini!';
                return;
            }
            //Remets les bonnes valeur en arrondissant grace a math.foor
            var days = Math.floor(distance / day);
            var hours = Math.floor((distance % day) / hour);
            var minutes = Math.floor((distance % hour) / minute);
            var seconds = Math.floor((distance % minute) / second);

            //ajout à la div jour/heure/minute/secondes le += ajout àprès
            document.getElementById("days").innerHTML = days;
            document.getElementById("hours").innerHTML = hours;
            document.getElementById("minutes").innerHTML = minutes;
            document.getElementById("seconds").innerHTML = seconds;
        }

        timer = setInterval(showRemaining, 1000);
    }


  
document.addEventListener('DOMContentLoaded', function() 
{
  window.onscroll = function(ev) 
  {
    document.getElementById("cRetour").className = (window.pageXOffset > 100) ? "cVisible" : "cInvisible";
  };
}
);



document.addEventListener('DOMContentLoaded', function() 
{
  var aLiens = document.querySelectorAll('a[href*="#"]');
 
   for(i = 0; i < aLiens.length; i++)
   {
    aLiens[i].onclick = function () 
    {
        var target = this.getAttribute("href").slice(1);
        if (target.length) 
        {
          scrollTo(document.getElementById(target).offsetLeft, 1000);
          return false;
        }
    };
   }
}
);

function scrollTo(element, duration)
 {
	var e = document.documentElement;
	if(e.scrollLeft === 0)
  {

		var t = e.scrollLeft;

		++e.scrollLeft;

		e = document.body;
	}
	scrollToC(e, e.scrollLeft, element, duration);
}

function scrollToC(element, from, to, duration) 
{
	scrollToX(element, from, to, 0, 1/duration, 10, easeOutCuaic);
}

function scrollToX(element, x1, x2, t, v, step, operacion)
 {
  
	if (t < 0 || t > 1 || v <= 0)
  {
    return;
  } 

	element.scrollLeft = x1 - (x1-x2)*operacion(t);
	t += v * step;
	
	setTimeout(function() 
  {
		scrollToX(element, x1, x2, t, v, step, operacion);
	}, step);
}

function easeOutCuaic(t)
{
	t--;
	return t*t*t+1;
}



function scrollWin(x, y) {
    window.scrollBy(x, y);
}