const sound = "https://f000.backblazeb2.com/b2api/v1/b2_download_file_by_id?fileId=4_z9b2a7e929faa13a473850510_f10306c64124d325b_d20210310_m062616_c000_v0001079_t0021";
const sound2 = "audio/Outkast_-_Hey_Ya.mp3"
let player;
let status = 0;
let buffer = ["", "", ""];

let style1 = `body {
                background-image: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.tenor.com%2Fimages%2Fd402d8aa749ae0863b689d3f06b1dbde%2Ftenor.gif&f=1&nofb=1);
              }`;

let styleSheet = document.createElement("style");




/**
 * listen for keystroke patterns
 *
 * @param event key event
 */




function keyEvent(event) {
    buffer.shift();
    buffer.push(event.key);

    if (buffer.join("") === "sus") {
        if (status !== 1) {
            console.log('Sus mode activated!');
            player.src = sound;
            player.loop = true;
            player.load();
            player.play();
            styleSheet.innerText = style1;
            document.head.appendChild(styleSheet);
            buffer = ["", "", ""];
            status = 1;
        } else {
            console.log('Sus mode deactivated!');
            player.pause();
            player.src = sound2;
            player.load();
            player.play();
            document.head.removeChild(styleSheet);
            buffer = ["", "", ""];
            status = 0;
        }
    } 
}

/**
 * initialize the listener
 */
function scriptInit() {
    player = document.querySelector("#player");
    document.addEventListener("keypress", keyEvent);
}

/**
 * load script on load, as well as resize script
 */
window.onload = () => {
    scriptInit();
    var i = 1;                  

    function myLoop() {        
      setTimeout(function() { 
        player.src = sound2;
        player.loop = true;
        player.load();
        player.play();   
        i++;                  
        if (i < 10) {          
        }                      
    }, 2000)
    }

    myLoop();  

}