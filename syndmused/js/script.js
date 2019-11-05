 $(function () {
     $("#btn-click").click(function () {
         alert("Vajutasid nuppu.");

     });

 });

 $(function () {
     var redBox = $(".red-box");
     var greenBox = $(".green-box");
     var blueBox = $(".blue-box");
     redBox.click(function () {
         $(this).fadeTo(500, 0.2);
     });
     greenBox.click(function () {
         $(this).fadeTo(500, 0.5);
     });
     blueBox.click(function () {
         $(this).fadeTo(500, 0.8);
     });
 });