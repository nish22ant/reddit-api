$(document).ready(function () {
    var body = $("body");
    
    // loadDoc(url, 1)
    // loadDoc(url, 2)
    // loadDoc(url, 3)
    $("#btn").click(function() {
        var searchFor = $("#query").val();
        let url = `https://www.reddit.com/subreddits/search.json?q=${searchFor}`;
        
        if(validate(searchFor) === true) {
            loadDoc(url, 1)
        } else {
            alert("Enter correct details!")
        }
    // loadDoc(url, 2)
    // loadDoc(url, 3)
    })

    function loadDoc(url, index) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                myFunction(this, index);
            }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    }
    // fetchData(URL)

    function myFunction(json, index) {
        var jsonDoc = json.responseText;
        var data = JSON.parse(jsonDoc);
        console.log(data)
        body.append(
            $(`<table id='table${index}' border=2>`)
        )
        let item = data.data.children[index];
        title = item.data.title;
        $(`#table${index}`).append(
            $(`<tr><th colspan=14 class="title">Sub Reddit: ${title}</th></tr><tr>` +
                "<th rowspan=2>Post</th>" +
                "<th rowspan=2>Author</th>" +
                "<th rowspan=2>Score</th>" +
                "<th rowspan=2>Image</th>" +
                "<th rowspan=2>Flair</th>" +
                "<th colspan=2>Comment 1</th>" +
                "<th colspan=2>Comment 2</th>" +
                "<th colspan=2>Comment 3</th></tr><tr>" +
                "<th>Author</th>" +
                "<th>Body</th>" +
                "<th>Author</th>" +
                "<th>Body</th>" +
                "<th>Author</th>" +
                "<th>Body</th>" +
                "</tr>")
        )
        var subR = String(item.data.url).substring(0, String(item.data.url).length - 1);
        let newURL = "https://www.reddit.com/" + subR + ".json";
        console.log(newURL)
        fetch(newURL)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                $.each(data.data.children, function (i, item) {
                    if (i == 3) {
                        return false;
                    }
                    let title = item.data.title;
                    let author = item.data.author;
                    let score = item.data.score;
                    let imageUrl = item.data.thumbnail;
                    if (imageUrl === "default" || imageUrl === "self" || imageUrl === "") {
                        imageUrl = `./notFound.png`;
                    }
                    let flair = item.data.link_flair_type;
                    var id = item.data.id;
                    var commentUrl = "http://www.reddit.com" + subR + "/comments/" + id + ".json?sort=top";
                    var html = "<tr>" +
                    "<td>" + title + "</td>" +
                    "<td>" + author + "</td>" +
                    "<td>" + score + "</td>" +
                    "<td>" + `<img class = "images" src="${imageUrl}" alt="No Image">` + "</td>" +
                    "<td>" + flair + "</td>";
                    
                    let nishant;
                    $.getJSON(commentUrl, function (data) {
                        let comm;
                        console.log(data);
                        for(let i = 0; i < 3 ; i++) {
                            
                            comm += "<td>" + data[1].data.children[i].data.author + "</td>"
                            comm += "<td>" + data[1].data.children[i].data.body + "</td></tr>"
                            console.log(html)
                            
                        }
                        html = html.substring(0, html.length - 5) + comm;
                        $(`#table${index}`).append(
                            html
                        )

                    })
                    
                    
                })
            })





    }

    function appendComment(url, index, j) {


        fetch(url)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {

                var item = data[1].data.children[j].data

                author = item.author;
                comment = item.body;
                $(index).append(
                    `<td>${data[1].data.children[j].data.author}</td><td>${comment}</td>`
                )
                console.log(comment)
            })

    }

    function validate(searchFor) {
        if (String(searchFor).length > 0) {
            return true;
        } else {
            return false;
        }
    }
})