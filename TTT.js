var top0 = 0;
var top1 = 0;
var top2 = 0;
var mid0 = 0;
var mid1 = 0;
var mid2 = 0;
var bot0 = 0;
var bot1 = 0;
var bot2 = 0;
var winner
var track = 0;
var tie = 0;
var rule4Play = 0;
var corner = Math.random() * 10;
var colorX = "rgba(0, 255, 213, .85)";
var colorO = "rgba(162, 0, 255, .9)";

function reset() {
    top0 = 0;
    top1 = 0;
    top2 = 0;
    mid0 = 0;
    mid1 = 0;
    mid2 = 0;
    bot0 = 0;
    bot1 = 0;
    bot2 = 0;
    winner = 0;
    track = 0;
    tie = 0;
    rule4Play = 0;
    tl = document.getElementById("top-left").innerHTML = "";
    tm = document.getElementById("top-mid").innerHTML = "";
    tr = document.getElementById("top-right").innerHTML = "";
    ml = document.getElementById("mid-left").innerHTML = "";
    mm = document.getElementById("mid-mid").innerHTML = "";
    mr = document.getElementById("mid-right").innerHTML = "";
    bl = document.getElementById("bot-left").innerHTML = "";
    bm = document.getElementById("bot-mid").innerHTML = "";
    br = document.getElementById("bot-right").innerHTML = "";
    document.getElementById("winner").innerHTML = "";
}
function goSecond() {
    playO();
}
function topleft() {
    if (top0 == 0) {
        var tl;
        tl = document.getElementById("top-left").innerHTML = "X";
        document.getElementById("top-left").style.color = colorX;
        top0 = 1
        track = 0
        play();
        playO();
    }
}
function topmid() {
    if (top1 == 0) {
        var tm;
        tm = document.getElementById("top-mid").innerHTML = "X";
        document.getElementById("top-mid").style.color = colorX;
        top1 = 1
        track = 0
        play()
        playO()
    }
}
function topright() {
    if (top2 == 0) {
        var tr;
        tr = document.getElementById("top-right").innerHTML = "X";
        document.getElementById("top-right").style.color = colorX;
        top2 = 1
        track = 0
        play()
        playO()
    }
}
function midleft() {
    if (mid0 == 0) {
        var ml;
        ml = document.getElementById("mid-left").innerHTML = "X";
        document.getElementById("mid-left").style.color = colorX;
        mid0 = 1
        track = 0
        play()
        playO()
    }
}
function midmid() {
    if (mid1 == 0) {
        var mm;
        mm = document.getElementById("mid-mid").innerHTML = "X";
        document.getElementById("mid-mid").style.color = colorX;
        mid1 = 1
        track = 0
        play()
        playO()
    }
}
function midright() {
    if (mid2 == 0) {
        var mr;
        mr = document.getElementById("mid-right").innerHTML = "X";
        document.getElementById("mid-right").style.color = colorX;
        mid2 = 1
        track = 0
        play()
        playO()
    }
}
function botleft() {
    if (bot0 == 0) {
        var bl;
        bl = document.getElementById("bot-left").innerHTML = "X";
        document.getElementById("bot-left").style.color = colorX;
        bot0 = 1
        track = 0
        play()
        playO()
    }
}
function botmid() {
    if (bot1 == 0) {
        var bm;
        bm = document.getElementById("bot-mid").innerHTML = "X";
        document.getElementById("bot-mid").style.color = colorX;
        bot1 = 1
        track = 0
        play()
        playO()
    }
}
function botright() {
    if (bot2 == 0) {
        var br;
        br = document.getElementById("bot-right").innerHTML = "X";
        document.getElementById("bot-right").style.color = colorX;
        bot2 = 1
        track = 0
        play()
        playO()
    }
}


function play() {
    if (top0 == 1 && mid0 == 1 && bot0 == 1) {
        winner = 1
        win()
    } else if (top0 == 2 && mid0 == 2 && bot0 == 2) {
        winner = 2
        win()
    } else if (top1 == 1 && mid1 == 1 && bot1 == 1) {
        winner = 1
        win()
    } else if (top1 == 2 && mid1 == 2 && bot1 == 2) {
        winner = 2
        win()
    } else if (top2 == 1 && mid2 == 1 && bot2 == 1) {
        winner = 1
        win()
    } else if (top2 == 2 && mid2 == 2 && bot2 == 2) {
        winner = 2
        win()
    } else if (top0 == 1 && top1 == 1 && top2 == 1) {
        winner = 1
        win()
    } else if (top0 == 2 && top1 == 2 && top2 == 2) {
        winner = 2
        win()
    } else if (mid0 == 1 && mid1 == 1 && mid2 == 1) {
        winner = 1
        win()
    } else if (mid0 == 2 && mid1 == 2 && mid2 == 2) {
        winner = 2
        win()
    } else if (bot0 == 1 && bot1 == 1 && bot2 == 1) {
        winner = 1
        win()
    } else if (bot0 == 2 && bot1 == 2 && bot2 == 2) {
        winner = 2
        win()
    } else if (top0 == 1 && mid1 == 1 && bot2 == 1) {
        winner = 1
        win()
    } else if (top0 == 2 && mid1 == 2 && bot2 == 2) {
        winner = 2
        win()
    } else if (top2 == 1 && mid1 == 1 && bot0 == 1) {
        winner = 1
        win()
    } else if (top2 == 2 && mid1 == 2 && bot0 == 2) {
        winner = 2
        win()
    } else {
        win()
    }
    console.log(top0, top1, top2);
    console.log(mid0, mid1, mid2);
    console.log(bot0, bot1, bot2);
}

function win() {
    if (winner == 1) {
        console.log("X Wins")
        document.getElementById("winner").style.color = colorX;
        document.getElementById("winner").innerHTML = "X WINS";
        track = 1
    } else if (winner == 2) {
        console.log("O Wins")
        document.getElementById("winner").style.color = colorO;
        document.getElementById("winner").innerHTML = "O WINS";
    } else if (tie >= 13) {
        document.getElementById("winner").style.color = "rgba(0, 4, 255, .7)";
        document.getElementById("winner").innerHTML = "IT'S A TIE";
    }
}

function rule1() { 
    console.log(track, 'rule1')
        rule1Top();
        rule1Mid();
        rule1Bot();
        rule1Left();
        rule1MidDown();
        rule1Right();
        rule1CrossLR();
        rule1CrossRL();
    
}
function rule1Top(){
    if (track == 0) {
        if (top0 == 2 && top1 == 2 || top0 == 2 && top2 == 2) {
            if (top1 == 2 && top2 == 0) {
                top2 = 2;
                print(2)
                play()
            } else if (top1 == 0) {
                top1 = 2;
                print(1)
                play()
            }
        } else if (top1 == 2 && top2 == 2 && top0 == 0) {
            top0 = 2
            print(0)
            play()
        } return 0;
    }
}
function rule1Mid() {
    if (track == 0) {
        if (mid0 == 2 && mid1 == 2 || mid0 == 2 && mid2 == 2) {
            if (mid1 == 2 && mid2 == 0) {
                mid2 = 2;
                play()
                print(5)
            } else if (mid1 == 0) {
                mid1 = 2;
                play()
                print(4)
            }
        } else if (mid1 == 2 && mid2 == 2 && mid0 == 0) {
            mid0 = 2
            play()
            print(3)
        } return 0;
    }
}
function rule1Bot() {
    if (track == 0) {
        if (bot0 == 2 && bot1 == 2 || bot0 == 2 && bot2 == 2) {
            if (bot1 == 2 && bot2 == 0) {
                bot2 = 2;
                play()
                print(8)
            } else if (bot1 == 0) {
                bot1 = 2;
                play()
                print(7)
            }
        } else if (bot1 == 2 && bot2 == 2 && bot0 == 0) {
            bot0 = 2
            play()
            print(6)
        } return 0;
    }
}
function rule1Left() {
    if (track == 0) {
        if (top0 == 2 && mid0 == 2 || top0 == 2 && bot0 == 2) {
            if (mid0 == 2 && bot0 == 0) {
                bot0 = 2;
                play()
                print(6)
            } else if (mid0 == 0) {
                mid0 = 2;
                play()
                print(3)
            }
        } else if (mid0 == 2 && bot0 == 2 && top0 == 0) {
            top0 = 2
            play()
            print(0)
        } return 0;
    }
}
function rule1MidDown() {
    if (track == 0) {
        if (top1 == 2 && mid1 == 2 || top1 == 2 && bot1 == 2) {
            if (mid1 == 2 && bot1 == 0) {
                bot1 = 2;
                play()
                print(7)
            } else if (mid1 == 0) {
                mid1 = 2;
                play()
                print(4)
            }
        } else if (mid1 == 2 && bot1 == 2 && top1 == 0) {
            top1 = 2
            play()
            print(1)
        } return 0;
    }
}
function rule1Right() {
    if (track == 0) {
        if (top2 == 2 && mid2 == 2 || top2 == 2 && bot2 == 2) {
            if (mid2 == 2 && bot2 == 0) {
                bot2 = 2;
                play()
                print(8)
            } else if (mid2 == 0) {
                mid2 = 2;
                play()
                print(5)
            }
        } else if (mid2 == 2 && bot2 == 2 && top2 == 0) {
            top2 = 2
            play()
            print(2)
        } return 0;
    }
}
function rule1CrossLR() {
    if (track == 0) {
        if (top0 == 2 && mid1 == 2 || top0 == 2 && bot2 == 2) {
            if (mid1 == 2 && bot2 == 0) {
                bot2 = 2;
                play()
                print(8)
            } else if (mid1 == 0) {
                mid1 = 2;
                play()
                print(4)
            }
        } else if (mid1 == 2 && bot2 == 2 && top0 == 0) {
            top0 = 2
            play()
            print(0)
        } return 0;
    }
}
function rule1CrossRL() {
    if (track == 0) {
        if (top2 == 2 && mid1 == 2 || top2 == 2 && bot0 == 2) {
            if (mid1 == 2 && bot0 == 0) {
                bot0 = 2;
                play()
                print(6)
            } else if (mid1 == 0) {
                mid1 = 2;
                play()
                print(4)
            }
        } else if (mid1 == 2 && bot0 == 2 && top2 == 0) {
            top2 = 2
            play()
            print(2)
        } return 0;
    }
}

function rule2() { 
    console.log(track, 'rule2')
        rule2Top();
        rule2Mid();
        rule2Bot();
        rule2Left();
        rule2MidDown();
        rule2Right();
        rule2CrossLR();
        rule2CrossRL();
     
}
function rule2Top() {
    if (track == 0) {
        if (top0 == 1 && top1 == 1 || top0 == 1 && top2 == 1) {
            if (top1 == 1 && top2 == 0) {
                top2 = 2;
                print(2)
                play()
            } else if (top1 == 0) {
                top1 = 2;
                print(1)
                play()
            }
        } else if (top1 == 1 && top2 == 1 && top0 == 0) {
            top0 = 2
            print(0)
            play()
        } return 0;
    }
}
function rule2Mid() {
    if (track == 0) {
        if (mid0 == 1 && mid1 == 1 || mid0 == 1 && mid2 == 1) {
            if (mid1 == 1 && mid2 == 0) {
                mid2 = 2;
                print(5)
                play()
            } else if (mid1 == 0) {
                mid1 = 2;
                print(4)
                play()
            }
        } else if (mid1 == 1 && mid2 == 1 && mid0 == 0) {
            mid0 = 2
            print(3)
            play()
        } return 0;
    }
}
function rule2Bot() {
    if (track == 0) {
        if (bot0 == 1 && bot1 == 1 || bot0 == 1 && bot2 == 1) {
            if (bot1 == 1 && bot2 == 0) {
                bot2 = 2;
                print(8)
                play()
            } else if (bot1 == 0) {
                bot1 = 2;
                print(7)
                play()
            }
        } else if (bot1 == 1 && bot2 == 1 && bot0 == 0) {
            bot0 = 2
            print(6)
            play()
        } return 0;
    }
}
function rule2Left() {
    if (track == 0) {
        if (top0 == 1 && mid0 == 1 || top0 == 1 && bot0 == 1) {
            if (mid0 == 1 && bot0 == 0) {
                bot0 = 2;
                print(6)
                play()
            } else if (mid0 == 0) {
                mid0 = 2;
                print(3)
                play()
            }
        } else if (mid0 == 1 && bot0 == 1 && top0 == 0) {
            top0 = 2
            print(0)
            play()
        } return 0;
    }
}
function rule2MidDown() {
    if (track == 0) {
        if (top1 == 1 && mid1 == 1 || top1 == 1 && bot1 == 1) {
            if (mid1 == 1 && bot1 == 0) {
                bot1 = 2;
                print(7)
                play()
            } else if (mid1 == 0) {
                mid1 = 2;
                print(4)
                play()
            }
        } else if (mid1 == 1 && bot1 == 1 && top1 == 0) {
            top1 = 2
            print(1)
            play()
        } return 0;
    }
}
function rule2Right() {
    if (track == 0) {
        if (top2 == 1 && mid2 == 1 || top2 == 1 && bot2 == 1) {
            if (mid2 == 1 && bot2 == 0) {
                bot2 = 2;
                print(8)
                play()
            } else if (mid2 == 0) {
                mid2 = 2;
                print(5)
                play()
            }
        } else if (mid2 == 1 && bot2 == 1 && top2 == 0) {
            top2 = 2
            print(2)
            play()
        } return 0;
    }
}
function rule2CrossLR() {
    if (track == 0) {
        if (top0 == 1 && mid1 == 1 || top0 == 1 && bot2 == 1) {
            if (mid1 == 1 && bot2 == 0) {
                bot2 = 2;
                print(8);
                play();
            } else if (mid1 == 0) {
                mid1 = 2;
                print(4);
                play();
            }
        } else if (mid1 == 1 && bot2 == 1 && top0 == 0) {
            top0 = 2
            print(0)
            play()
        } return 0;
    }
}
function rule2CrossRL() {
    if (track == 0) {
        if (top2 == 1 && mid1 == 1 || top2 == 1 && bot0 == 1) {
            if (mid1 == 1 && bot0 == 0) {
                bot0 = 2;
                print(6)
                play()
            } else if (mid1 == 0) {
                mid1 = 2;
                print(4)
                play()
            }
        } else if (mid1 == 1 && bot0 == 1 && top2 == 0) {
            top2 = 2
            print(2)
            play()
        } return 0;
    }
}

function rule3() {
    console.log(track, 'rule 3')
    rule3Top()
    rule3Mid()
    rule3Bot()
    rule3Left()
    rule3MidDown()
    rule3Right()
    rule3CrossLR()
    rule3CrossRL()
}
function rule3Top() {
    if (track == 0) {
        if (top0 == 2 && top1 == 0 && top2 == 0) {
            top2 = 2
            print(2)
            play()
        } else if (top0 == 0 && top1 == 2 && top2 == 0) {
            top2 = 2
            print(2)
            play()
        } else if (top0 == 0 && top1 == 0 && top2 == 2) {
            top0 = 2
            print(0)
            play()
        }
    }
}
function rule3Mid() {
    if (track == 0) {
        if (mid0 == 2 && mid1 == 0 && mid2 == 0) {
            mid2 = 2
            print(5)
            play()
        } else if (mid0 == 0 && mid1 == 2 && mid2 == 0) {
            mid0 = 2
            print(3)
            play()
        } else if (mid0 == 0 && mid1 == 0 && mid2 == 2) {
            mid0 = 2
            print(3)
            play()
        }
    }
}
function rule3Bot() {
    if (track == 0) {
        if (bot0 == 2 && bot1 == 0 && bot2 == 0) {
            bot2 = 2
            print(8)
            play()
        } else if (bot0 == 0 && bot1 == 2 && bot2 == 0) {
            bot0 = 2
            print(6)
            play()
        } else if (bot0 == 0 && bot1 == 0 && bot2 == 2) {
            bot0 = 2
            print(6)
            play()
        }
    }
}
function rule3Left() {
    if (track == 0) {
        if (top0 == 2 && mid0 == 0 && bot0 == 0) {
            bot0 = 2
            print(6)
            play()
        } else if (top0 == 0 && mid0 == 2 && bot0 == 0) {
            top0 = 2
            print(0)
            play()
        } else if (top0 == 0 && mid0 == 0 && bot0 == 2) {
            top0 = 2
            print(0)
            play()
        }
    }
}
function rule3MidDown() {
    if (track == 0) {
        if (top1 == 2 && mid1 == 0 && bot1 == 0) {
            bot1 = 2
            print(7)
            play()
        } else if (top1 == 0 && mid1 == 2 && bot1 == 0) {
            bot1 = 2
            print(7)
            play()
        } else if (top1 == 0 && mid1 == 0 && bot1 == 2) {
            top1 = 2
            print(1)
            play()
        }
    }
}
function rule3Right() {
    if (track == 0) {
        if (top2 == 2 && mid2 == 0 && bot2 == 0) {
            bot2 = 2
            print(8)
            play()
        } else if (top2 == 0 && mid2 == 2 && bot2 == 0) {
            top2 = 2
            print(2)
            play()
        } else if (top2 == 0 && mid2 == 0 && bot2 == 2) {
            top2 = 2
            print(2)
            play()
        }
    }
}
function rule3CrossLR() {
    if (track == 0) {
        if (top0 == 2 && mid1 == 0 && bot2 == 0) {
            bot2 = 2
            print(8)
            play()
        } else if (top0 == 0 && mid1 == 2 && bot2 == 0) {
            if(bot1 == 1 && mid2 == 1){
                bot2 = 2;
                print(8)
                play()
            } else{
                if(mid2 == 1 && bot2 == 0){
                    bot2 = 2;
                    print(8);
                    play()
                } else{
                    top0 = 2
                    print(0)
                    play()
                }
            }
        } else if (top0 == 0 && mid1 == 0 && bot2 == 2) {
            top0 = 2
            print(0)
            play()
        }
    }
}
function rule3CrossRL() { 
    if (track == 0) {
        if (top2 == 2 && mid1 == 0 && bot0 == 0) {
            bot0 = 2
            print(6)
            play()
        } else if (top2 == 0 && mid1 == 2 && bot0 == 0) {
                top2 = 2
                print(2)
                play()
        } else if (top2 == 0 && mid1 == 0 && bot0 == 2) {
            top2 = 2
            print(2)
            play()
        } else if (track == 0 && rule4Play == 1) {
            tie = 13;
            play()
        }
    }
}

function rule4() {
    console.log(track, "rule 4")
    rule4Play = 1;
    if (top0 + top1 + top2 + mid0 + mid1 + mid2 + bot0 + bot1 + bot2 == 1) {
        if (top1 == 1 || mid0 == 1 || mid2 == 1 || bot1 == 1 || top0 == 1 || top2 == 1 || bot0 == 1 || bot2 == 1) {
            mid1 = 2
            print(4)
            play()
        } else if (mid1 == 1) {
            top0 = 2
            print(0)
            play()
        }
    } else if (top0 + top1 + top2 + mid0 + mid1 + mid2 + bot0 + bot1 + bot2 == 0) {
        if (corner <= 10 && corner > 7.4) {
            top0 = 2
            print(0)
            play()
        } else if (corner <= 7.4 && corner > 5) {
            top2 = 2
            print(2)
            play()
        } else if (corner <= 5 && corner > 2.4) {
            bot0 = 2
            print(6)
            play()
        } else {
            bot2 = 2
            print(8)
            play()
        }
    }
}

function playO() {
    console.log('playO()')
    rule1();
    rule2();
    rule3();
    rule4();
    
}

function print(nums) {
    switch (nums) {
        case 0:
            var tl = document.getElementById("top-left").innerHTML = "O";
            document.getElementById("top-left").style.color = colorO;
            break;
        case 1:
            var tm = document.getElementById("top-mid").innerHTML = "O";
            document.getElementById("top-mid").style.color = colorO;
            break;
        case 2:
            var tr = document.getElementById("top-right").innerHTML = "O";
            document.getElementById("top-right").style.color = colorO;
            break;
        case 3:
            var ml = document.getElementById("mid-left").innerHTML = "O";
            document.getElementById("mid-left").style.color = colorO;
            break;
        case 4:
            var mm = document.getElementById("mid-mid").innerHTML = "O";
            document.getElementById("mid-mid").style.color = colorO;
            break;
        case 5:
            var mr = document.getElementById("mid-right").innerHTML = "O";
            document.getElementById("mid-right").style.color = colorO;
            break;
        case 6:
            var bl = document.getElementById("bot-left").innerHTML = "O";
            document.getElementById("bot-left").style.color = colorO;
            break;
        case 7:
            var bm = document.getElementById("bot-mid").innerHTML = "O";
            document.getElementById("bot-mid").style.color = colorO;
            break;
        case 8:
            var br = document.getElementById("bot-right").innerHTML = "O";
            document.getElementById("bot-right").style.color = colorO;
            break;
    } track = 1;
    
}