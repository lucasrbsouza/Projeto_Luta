let log = new Log(document.querySelector(`.log`));

let char = new Knight("Lucas");
let monster = new LittleMonster();
let fighter1El = document.querySelector('.fighter1');
let fighter2El = document.querySelector('.fighter2');
const stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster"),
    log


)

stage.start();
