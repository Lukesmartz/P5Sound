var mySong, amplitude, play;

function preload(){

mySong = loadSound( 'assets/massiveAttackAngel.mp3')


}

function setup() {
    var canvas = createCanvas(window.innerWidth, window.innerHeight); //expand canvas to window size
    canvas.parent("p5container");
    play = false;
    rectMode(CENTER);


    var button =  createButton(' Play')
    button.center(width/2,height/2 );
    button.addClass('btn'); 

    button.mousePressed(function(){
        play= true;
        mySong.play();
        button.hide();  
    })


    
    
    
    amplitude = new p5.Amplitude();

noStroke();
}

function draw() {
   
var level = amplitude.getLevel();
    console.log(amplitude.getLevel())

    var vol= map ( level,0, 1,0, 1000)

    var col = map (level,0, 1,0,  255)
    
    background(0);

    if(vol> 200){
        fill(col + 10);
        ellipse(width/2, height/2, vol + 100 );
    }

    fill(255, vol, 255);
    ellipse(width/2, height/2, vol ); //center shape

    fill(col, 255, col);
    ellipse(width/2, height/4, vol/2 );

    fill(vol, 255, 200);
    ellipse(width/2, height/3, vol/2 );

    fill(vol, 255, 200);
    ellipse(width/4, height/3, vol/2 );


    fill(vol, 255, 200);
    ellipse(width/1.3, height/3, vol/2 );

    
}