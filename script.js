var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
var id1;
for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        // console.log(this.textContent);
        var targetSection = document.getElementById(targetSectionID);
        // console.log(targetSection);
        var curr=0;
        var targetSectionCoordinates = targetSection.getBoundingClientRect().y;
        //    interval = setInterval(scrollVertically, 20, targetSection);

        function scrollVertically(){
            if (curr >=  targetSectionCoordinates){
                clearInterval(id1);
                return;
            }
            window.scrollBy(0,50);
            curr+=50;
        }
        var id1 = setInterval(scrollVertically,15);

    });
}