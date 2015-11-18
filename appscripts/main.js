require(
   // Use this library to "fix" some annoying things about Raphel paper and graphical elements:
    //     a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
    //     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
    ["../jslibs/raphael.lonce"],  // include a custom-built library

    function () {

        console.log("Yo, I am alive!");

        // Grab the div where we will put our Raphael paper
        var centerDiv = document.getElementById("centerDiv");

        // Create the Raphael paper that we will use for drawing and creating graphical objects
        var paper = new Raphael(centerDiv);

        // put the width and heigth of the canvas into variables for our own convenience
        var pWidth = paper.canvas.offsetWidth;
        var pHeight = paper.canvas.offsetHeight;
        console.log("pWidth is " + pWidth + ", and pHeight is " + pHeight);


});