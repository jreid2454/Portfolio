const mysql = require("mysql");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

//          **Connects to MySQL database**
// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "hsoj1234",
//     //port: 8000
// });
// con.connect(function (err) {
//     if (err) throw err;
//     console.log("Connected to Database!");
// });
// con.query("USE resume");


//          **Makes server on port 80**
app.listen(80);
console.log("The server is working");

//      **Get request**
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/" + "redirect.html")
});
    //start for new page
app.get("/Index", (req, res) => {
    res.sendFile(__dirname + "/" + "newIndex.html")
});
app.get("/newIndexStyle", (req, res) => {
    res.sendFile(__dirname + "/" + "newIndex.css")
});
app.get("/newIndexScript", (req, res) => {
    res.sendFile(__dirname + "/" + "newIndex.js")
});
app.get("/mountainPic", (req, res) => {
    res.sendFile(__dirname + "/" + "mountainRange.jpg")
});
app.get("/portfolioPic", (req, res) => {
    res.sendFile(__dirname + "/" + "portfolioPic.jpg")
});
app.get("/contactPic", (req, res) => {
    res.sendFile(__dirname + "/" + "contact.jpg")
});
app.get("/groceryPic", (req, res) => {
    res.sendFile(__dirname + "/" + "./groceryPic.png")
});
    //for three.js
    app.get("/three", (req, res) => {
        res.sendFile(__dirname + "/" + "./node_modules/three/build/three.js")
    });
    app.get("/orbit", (req, res) => {
        res.sendFile(__dirname + "/" + "./node_modules/three/examples/js/controls/OrbitControls.js")
    });
    app.get("/threeDomEvents", (req, res) => {
        res.sendFile(__dirname + "/" + "./threeDomEvents.js")
    });
    app.get("/cube1", (req, res) => {
        res.sendFile(__dirname + "/" + "./project1Cube.png")
    });
    app.get("/cube2", (req, res) => {
        res.sendFile(__dirname + "/" + "./project2Cube.png")
    });
    app.get("/cube3", (req, res) => {
        res.sendFile(__dirname + "/" + "./project3Cube.png")
    });
    app.get("/cube4", (req, res) => {
        res.sendFile(__dirname + "/" + "./project4Cube.png")
    });
    app.get("/cube5", (req, res) => {
        res.sendFile(__dirname + "/" + "./project5Cube.png")
    });
    // end new page
app.get("/oldIndex", (req, res) => {
    res.sendFile(__dirname + "/" + "index.html")
});
app.get("/indexStyle", (req, res) => {
    res.sendFile(__dirname + "/" + "indexStyle.css")
})
app.get("/htmlPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/html.png")
})
app.get("/cssPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/css.png")
})
app.get("/jsPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/js.png")
})
app.get("/ticTacPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/ticTac.png")
})
app.get("/reidAutoPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/reidAuto.png")
})
app.get("/projectsPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/projects.png")
})
app.get("/nodePic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/node.png")
})
app.get("/mysqlPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/mysql.png")
})
app.get("/mobilePic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/mobile.png")
})
app.get("/jqueryPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/jquery.png")
})
app.get("/frontEndPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/frontEnd.png")
})
app.get("/expressPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/express.png")
})
app.get("/dynamicPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/dynamic.png")
})
app.get("/blogPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/blog.png")
})
app.get("/backEndPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/backEnd.png")
})
app.get("/reactPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/react.png")
})
app.get("/tribalPic", (req, res) =>{
    res.sendFile(__dirname + "/landingPageImg/tribal.png")
})
app.get("/jquery", (req, res) => {
    res.sendFile(__dirname + "/" + "jquery.js")
})
app.get("/tic_tac", (req, res) => {
    res.sendFile(__dirname + "/" + "tic_tac.html")
})
app.get("/tic_tac/script", (req, res) => {
    res.sendFile(__dirname + "/" + "TTT.js")
})
app.get("/tic_tac/style", (req, res) => {
    res.sendFile(__dirname + "/" + "TTTstyleSheet.css")
})
app.get("/blog", (req, res) => {
    res.sendFile(__dirname + "/" + "blogIndex.html")
})
app.get("/blog/blogStyle", (req, res) => {
    res.sendFile(__dirname + "/" + "blogStyle.css")
})
app.get("/blog/blogScript", (req, res) => {
    res.sendFile(__dirname + "/" + "blogWebpage.js")
})
app.get("/blog/signUp", (req, res) => {
    res.sendFile(__dirname + "/" + "blogSignUp.html")
})
app.get("/blog/logIn", (req, res) => {
    res.sendFile(__dirname + "/" + "blogLogIn.html")
})
app.get("/blog/topics", (req, res) => {
    res.sendFile(__dirname + "/" + "blogTopics.html")
})
app.get("/blog/topics/interview", (req, res) => {
    res.sendFile(__dirname + "/topic_img/" + "interview.jpg");
})
app.get("/blog/topics/resume", (req, res) => {
    res.sendFile(__dirname + "/topic_img/" + "resume_pic.jpg");
})
app.get("/blog/topics/coding", (req, res) => {
    res.sendFile(__dirname + "/topic_img/" + "coding.jpg");
})
app.get("/blog/topics/working", (req, res) => {
    res.sendFile(__dirname + "/topic_img/" + "working.jpg");
})
app.get("/blog/topics/other", (req, res) => {
    res.sendFile(__dirname + "/topic_img/" + "other.jpg");
})
app.get("/blog/topics/postInterview", (req, res) => {
    res.sendFile(__dirname + "/blogPostInterview.html");
})
app.get("/blog/topics/postInterview/post", (req, res) => {
    con.query("SELECT post_user_name, post_date, title, post, post_user_id FROM interview_post;", function (err, result){
        if(err) throw err;
        res.send(result);
    })
})
app.get("/blog/topics/postResume", (req, res) => {
    res.sendFile(__dirname + "/blogPostResume.html");
})
app.get("/blog/topics/postResume/post", (req, res) => {
    con.query("SELECT post_user_name, post_date, title, post,post_user_id FROM resume_post;", function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})
app.get("/blog/topics/postSelfTeaching", (req, res) => {
    res.sendFile(__dirname + "/blogPostSelfTeaching.html");
})
app.get("/blog/topics/postSelfTeaching/post", (req, res) => {
    con.query("SELECT post_user_name, post_date, title, post, post_user_id FROM selfTeaching_post;", function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})
app.get("/blog/topics/postTheJob", (req, res) => {
    res.sendFile(__dirname + "/blogPostTheJob.html");
})
app.get("/blog/topics/postTheJob/post", (req, res) => {
    con.query("SELECT post_user_name, post_date, title, post, post_user_id FROM theJob_post;", function (err, result) {
        res.send(result);
    })
})
app.get("/blog/topics/postOther", (req, res) => {
    res.sendFile(__dirname + "/blogPostOther.html");
})
app.get("/blog/topics/postOther/post", (req, res) => {
    con.query("SELECT post_user_name, post_date, title, post, post_user_id FROM other_post;", function (err, result) {
        if (err) throw err;
        res.send(result);
    })
})
/*
app.get("/blog/userProfile", (req, res) => {
    res.sendFile(__dirname + "/blogProfile.html");
})
app.get("/blog/defaultPic", (req, res) => {
    res.sendFile(__dirname + "/default.png");
})
*/
//          **GET request for topic pictures
/*var maxId;
var topicPic = new Array;
var topicGet = new Array;
var i = 1;
var a = 1;
function topics() {
    var maxId;
    var topicPic = new Array;
    con.query("SELECT id FROM topics WHERE id = (SELECT MAX(id) FROM topics)", (err, result) => {
        if (err) throw err;
        maxId = result[0].id;
        console.log("maxid is: " + maxId)
        go()
    })
    function go() {
        if (i <= maxId) {
            con.query("SELECT img, text FROM topics WHERE id = " + i + ";", (err, result) => {
                if (err) throw err;
                topicPic[i] = result;
                console.log(topicPic[i][0].img)
                topicGet[i] = topicPic[i][0].img;
                console.log("topicGet : " + topicGet[i]);
                i++
                if (i <= maxId) {
                    go();
                } else {
                    gets();
                    test();
                }
            });
        }
    } 
    var testarr = ["coding.jpg", "resume_pic.jpg", "interview.jpg", "working.jpg"]
    function test() { console.log("topicPic length - 1: " + topicPic.length - 1)}
    function gets() {
        if (a < topicPic.length - 1) {
            app.get("/blog/topics/" + topicGet[a], (req, res) => {
                console.log("getting : " + testarr[a]);
                res.sendFile(__dirname + "/topic_img/" + testarr[a]);
            }) 
            console.log("is a : " + a)
            a++;
            gets();
        } 
    }
}
topics();
*/
//          **Post Request**
app.post("/blog/signUp", (req, res) => {
    var userName = req.body.userName;
    var email = req.body.email;
    var password = req.body.password;
    var confirmPass = req.body.confirmPass;
    if (password != confirmPass) {
        console.log("password error");
        res.send("Passwords Did Not Match");
    } else {
        res.send(true);
        let newUser = { user_name: userName, email: email, password: password }
        let sql = "INSERT INTO blog SET ?";
        con.query(sql, newUser);
    }
})

app.post("/blog/login", (req, res) => {
    // save email and password into variable, query database "select email where password equals, 
    // make object query username and id where email and password equals, res.send object
    var email = req.body.email;
    var password = req.body.password;
    con.query("SELECT id, user_name FROM blog WHERE email = '" + email + "' AND password = '" + password + "';", function (err, result) {
        if (err) res.send(false);
        res.send(result);
        console.log(result);
    })
})

app.post("/blog/topics/postInterview", (req, res) => {
    var title = req.body.title;
    var post = req.body.post;
    var post_user_name = req.body.post_user_name;
    var post_user_id = req.body.post_user_id;
    var post_date = new Date().toLocaleString()
    let postObj = { title: title, post: post, post_user_name: post_user_name, post_user_id: post_user_id, post_date: post_date}
   // con.query("INSERT INTO interview_post (title, post, post_user_name, post_user_id, post_date) VALUES (" + title + "','" + post + "','" + post_user_name + "','" + post_user_id + "','" + post_date + "');") 
    let sql = "INSERT INTO interview_post SET ?";
    con.query(sql, postObj);
    res.send(true);
})

app.post("/blog/topics/postResume", (req, res) => {
    var title = req.body.title;
    var post = req.body.post;
    var post_user_name = req.body.post_user_name;
    var post_user_id = req.body.post_user_id;
    var post_date = new Date().toLocaleString()
    let postObj = { title: title, post: post, post_user_name: post_user_name, post_user_id: post_user_id, post_date: post_date }
    let sql = "INSERT INTO resume_post SET ?";
    con.query(sql, postObj);
    res.send(true);
})

app.post("/blog/topics/postSelfTeaching", (req, res) => {
    var title = req.body.title;
    var post = req.body.post;
    var post_user_name = req.body.post_user_name;
    var post_user_id = req.body.post_user_id;
    var post_date = new Date().toLocaleString()
    let postObj = { title: title, post: post, post_user_name: post_user_name, post_user_id: post_user_id, post_date: post_date }
    let sql = "INSERT INTO selfTeaching_post SET ?";
    con.query(sql, postObj);
    res.send(true);
})

app.post("/blog/topics/postTheJob", (req, res) => {
    var title = req.body.title;
    var post = req.body.post;
    var post_user_name = req.body.post_user_name;
    var post_user_id = req.body.post_user_id;
    var post_date = new Date().toLocaleString()
    let postObj = { title: title, post: post, post_user_name: post_user_name, post_user_id: post_user_id, post_date: post_date }
    let sql = "INSERT INTO theJob_post SET ?";
    con.query(sql, postObj);
    res.send(true);
})

app.post("/blog/topics/postOther", (req, res) => {
    var title = req.body.title;
    var post = req.body.post;
    var post_user_name = req.body.post_user_name;
    var post_user_id = req.body.post_user_id;
    var post_date = new Date().toLocaleString()
    let postObj = { title: title, post: post, post_user_name: post_user_name, post_user_id: post_user_id, post_date: post_date }
    let sql = "INSERT INTO other_post SET ?";
    con.query(sql, postObj);
    res.send(true);
})
/*
app.post("/blog/userProfile", (req, res) => {
    con.query("SELECT img, about FROM blog WHERE id = " + req.body.id + ";", (err, result) => {
        if (err) throw err;
        if (result[0].img == null) {
            res.send(result[0]);
        } else {
            getProfilePic(req.body.id, result[0].img);
            res.send(result[0])
        }
    })

})

function getProfilePic(id, path) {
    app.get("/blog/userProfile/" + id, (req, res) => {
        res.sendFile(__dirname + "/blogProfilePic/" + path);
    })
};

app.post("/blog/userProfile/pic", (req, res) => {
    var img = req.body.img;
    console.log(img);
})
*/