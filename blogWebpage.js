$(document).ready(function () {
    //      **Creates variables for session storage to be used throughout code**
    var loggedIn = sessionStorage.getItem("loggedIn");
    var sessionUserName = sessionStorage.getItem("userName");
    var sessionId = sessionStorage.getItem("userId");

    //      **Checks to see if they had just made an account**
    if (sessionStorage.getItem("fromSignUp") == "yes") {
        $("#fromSignUp").show();
    }
    //      **If logged in, changes header to say hello username
    if (loggedIn == "yes") {
        $("#loggedInUser").html("Hello " + sessionUserName)
        $("#profileUser").html(sessionUserName);
        $("#logOut_header > a").html("Log Out");
        $(".logIn_signUp_header").hide();
    }
    //      **Log out function, sets session to loggedIn = no, removes user info from session**
    $("#logOut_header").on("click", function () {
        sessionStorage.removeItem("userName");
        sessionStorage.removeItem("userId");
        sessionStorage.setItem("loggedIn", "no");
        window.location.replace("/blog");
    })
    //         **gets data from sign up fields**
    var $userName = $("#userName");
    var $email = $("#email");
    var $password = $("#password");
    var $confirmPass = $("#confirmPass");

    //      **Makes new user**
    $("#submit").on("click", function () {
        var newUser = {
            userName: $userName.val(),
            email: $email.val(),
            password: $password.val(),
            confirmPass: $confirmPass.val()
        }
        $.ajax({
            type: "POST",
            url: "/blog/signUp",
            data: newUser,
            success: function (data) {
                if (data === "Passwords Did Not Match") {
                    $("#wrongPass").html(data);
                } else if (data == true) {
                    window.location.replace("/blog/login")
                    sessionStorage.setItem("fromSignUp", "yes")
                }
            }
        })
    })
    //        **Logs in and redirects to Main page, also saves sessionstorage of username, id and logged in**
    $("#logIn").on("click", function () {
        var logInUser = {
            email: $email.val(),
            password: $password.val(),
        }
        $.ajax({
            type: "POST",
            url: "/blog/login",
            data: logInUser,
            success: function (data) {
                if (data == false) {
                    $("#fromSignUp").show().html("Email address or Password is Incorrect");
                } else {
                    sessionStorage.setItem("userName", data[0].user_name);
                    sessionStorage.setItem("userId", data[0].id);
                    sessionStorage.setItem("loggedIn", "yes");
                    sessionStorage.removeItem("fromSignUp");
                    window.location.replace("/blog");
                }
            }
        })
    })
    //      **Topics Slide**
    var $slider = $("#slider");
    var $slides = $slider.find("#slides");
    var $slide = $slides.find(".slide");
    var $nextPrev = $("#slide_buttons");
    var $next = $nextPrev.find("#next");
    var $prev = $nextPrev.find("#prev");
    var count = 0;
    $next.on("click", function () {
        var input = this;
        input.disabled = true;
        setTimeout(function () {
            input.disabled = false;
        }, 750);
        count++
        if (count == $slide.length) {
            $slides.css("margin-left", 0);
            count = 1;
        }
        $slides.animate({ "margin-left": "-=600" }, 750);
    })

    $prev.on("click", function () {
        var input = this;
        input.disabled = true;
        setTimeout(function () {
            input.disabled = false;
        }, 750);
        count--
        console.log(count)
        if (count == -1) {
            $slides.css("margin-left", -3000);
            count = 4;
            console.log(count)
        }
        $slides.animate({ "margin-left": "+=600" }, 750);
    })

    //      **shows 'make post' box**
    var postBoxDisplay = false;
    $("#postHeader > h3").on("click", function () {
        if (postBoxDisplay == false) {
            $("#makePost").show();
            postBoxDisplay = true;
        } else {
            $("#makePost").hide();
            postBoxDisplay = false;
        }
    })

    //      **Makes Post**
    var $title = $("#postTitle");
    var $postInput = $("#postInput");
    var $postSubmit = $("#postSubmit");
    var $nameAttr = $postSubmit.attr('name');
    var url;
    var content;
    //      **Changes url for post request and id of div for page based on name attr of div**
    switch ($nameAttr) {
        case "interview":
            url = "/blog/topics/postInterview";
            content = "#interviewContent";
            break;
        case "resume":
            url = "/blog/topics/postResume";
            content = "#resumeContent";
            break;
        case "selfTeaching":
            url = "/blog/topics/postSelfTeaching";
            content = "#selfTeachingContent";
            break;
        case "TheJob":
            url = "/blog/topics/postTheJob";
            content = "#theJobContent";
            break;
        case "other":
            url = "/blog/topics/postOther";
            content = "#otherContent";
            break;
        default:
            break;
    }
    //      **Post request for post, changes automatically for what page your on
    $postSubmit.on("click", () => {
        if (loggedIn == "no" || loggedIn == null) {
            alert("Please login to create a post.")
        } else {
            var newPost = {
                title: $title.val(),
                post: $postInput.val(),
                post_user_name: sessionUserName,
                post_user_id: sessionId
            }

            $.ajax({
                type: "POST",
                url: url,
                data: newPost,
                success: function () {
                    alert("Your post has been created succesfully!");
                    window.location.reload();
                }

            })
        }


    })

    //      **template for adding post to page**
    function getPost(topic, data) {
        $(topic).append(
            `<div class="content">
                <div class="container">
                    <div class="post">
                        <div class="post-author" class="postUser" name=` + data.post_user_id + `>
                            <span><strong><a>` + data.post_user_name + `</a></strong></span>
                        </div>
                        <p class="post-date">` + data.post_date + `</p>
                        <h3 class="post-title">` + data.title + `</h3>
                        <div class="post-content">
                            <p>
                                ` + data.post + `
                            </p>
                        </div>
                    </div>


            </div >
        </div >`
        )
    }
    //      gets post for each page from post url, switches auto based on switch statement**
    $.ajax({
        type: "GET",
        url: url + "/post",
        success: function (results) {
            for (i = results.length - 1; i >= 0; i--) {
                getPost(content, results[i]);
            }
        }
    })

    //      **On load of profile page, post user id to server, gets back img and about data
    //          then sets img src to new url with pic, and sets about data to <p>**
    //$("#loggedInUser").on("click", function () {
    $("#profile").load("click", function () {
        getProfile(sessionId)
    })
    //})
    function getProfile(user_id) {
        var profileId = { id: user_id };
        $.ajax({
            type: "POST",
            url: "/blog/userProfile",
            data: profileId,
            success: function (profileData) {
                if (profileData.img == null) {
                    $("#profilePic").attr("src", "/blog/defaultPic");
                } else {
                    $("#profilePic").attr("src", "/blog/userProfile/" + sessionId)
                };
                if (profileData.about == null) {
                    $("#aboutMeP").html("No description.")
                } else {
                    $("#aboutMeP").html(profileData.about)
                };
            }

        })
    }

    //      **makes it so if you click user name on post, get name attr (id) and then run getprofile(id)**
/*
        $(".postUser").on("click", () => {
            //console.log($(this > ".postUser"))
            console.log("working");
            //var id = this.attr("name");
            //window.location.replace("/blog/userProfile");
            //getProfile(id);
        })  */
    
    

    //      **Shows and hide edit box for about**
    var aboutBoxDisplay = false;
    $(".about-title").on("click", function () {
        if (aboutBoxDisplay == false) {
            $("#aboutMeP").hide();
            $("#aboutMeText").show();
            aboutBoxDisplay = true;
        } else {
            $("#aboutMeP").show();
            $("#aboutMeText").hide();
            aboutBoxDisplay = false;
        }
    })

    //      **Uploads profile pic**
    var $file = { img: $("#picUpload").val()}
    var $sendPic = $("#submitPic");

    $sendPic.on("click", () => {
        $.ajax({
            type: "POST",
            url: "/blog/userProfile/pic",
            data: $file,
            success: function () {
                console.log("it worked")
            }

        })
    })









    })
