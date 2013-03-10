
$(document).ready(function(){
   
    function life_up(selector){
        
        //obtener string del div
        var life_text = $(selector+" .player_life").text();  
        
        //convertir a Int
        var life_total= parseInt(life_text,10);

        var new_total_life=life_total+1;
        
        var texto=$(selector+" .player_life").text(new_total_life);
        //console.log(selector+':'+texto.text()+' vidas.');
    }

    function life_down(selector){

        //obtener string del div
        var life_text = $(selector + " .player_life").text();        
        //convertir a Int
        var life_total= parseInt(life_text,10);

        var new_total_life=life_total-1;
        
        var texto =$(selector + " .player_life").text(new_total_life);
        //console.log(selector+':'+texto.text()+' vidas.');
    }
    
    function reset_game(selector1, selector2){
        $(selector1 +' .player_life').text('20');
        $(selector2 +' .player_life').text('20');
        //console.log('Juego reiniciado');
    }

    $('.p1 .plus_btn').click(
        function(){
            life_up('.p1');
        }
    );

    $('.p1 .minus_btn').click(
        function(){
            life_down('.p1');
       }
    );
    
    $('.p2 .plus_btn').click(
        function(){
            life_up('.p2');
        }
    );

    $('.p2 .minus_btn').click(
        function(){
            life_down('.p2');
       }
    );
    
    $('.reset_btn').click(
        function(){
            reset_game('.p1','.p2');
       }
    );
                
 });

        