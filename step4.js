$(document).ready(function () {
    var body = $("body");


    $("#btn").click(function () {
        let searchFor = $("#query").val();
        let sortBy = $('input[name="sortBy"]:checked').val();
        let limit = $("#limit").val();
        if(validate(searchFor, limit) === true) {
            fetchData(`https://www.reddit.com/search.json?q=${searchFor}&limit=${limit}&sort=${sortBy}`)
        } else {
            alert("Enter correct details!")
        }

    })


    function validate(searchFor, limit) {
        if (String(searchFor).length > 0 && limit > 0) {
            return true;
        } else {
            return false;
        }
    }

    function fetchData(URL) {
        fetch(URL)
            .then(function (res) {
                return res.json();
            })
            .then(function (data) {
                body.append(
                    $("<table border=2><tr>" +
                        "<th>Title</th>" +
                        "<th>Image</th>" +
                        "<th>Score</th>" +
                        "<th>Subreddit</th>" +
                        "<th>Link</th>" +
                        "<th>Author</th></tr>")
                )
                $.each(data.data.children, function (i, item) {
                    let imageUrl = item.data.thumbnail;
                    let commentUrl = item.data.permalink;
                    let authorName = item.data.author;
                    let score = item.data.score;
                    let title = item.data.title;
                    let subreddit = item.data.subreddit;
                    if (imageUrl === "default" || imageUrl === "self") {
                        imageUrl = `./notFound.png`;
                    } else {
                    }

                    addData(
                        imageUrl,
                        title,
                        commentUrl,
                        subreddit,
                        score,
                        authorName,
                        i
                    );
                });
            });
    }

    function addData(imageUrl, title, commentUrl, subreddit, score, authorName, i) {
        const articleURL = `https://www.reddit.com${commentUrl}`;
        $("table").append(
            $("<tr>" +
                "<td>" + title + "</td>" +
                "<td>" + `<img class = "images" src="${imageUrl}" alt="No Image">` + "</td>" +
                "<td>" + score + "</td>" +
                "<td>" + subreddit + "</td>" +
                "<td>" + `<button class="linkbutton" onclick="location.href='${articleURL}'" target='_blank'>Read More</button>` + "</td>" +
                "<td>" + authorName + "</td>" +
                "</tr>")
        )

    }
})
