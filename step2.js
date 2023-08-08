$(document).ready(function() {
    var body = $("body");
    body.append(
        $("<h1/>", {"id": "title"}).text("Reddit Search"),
        $("<div/>", {"id" : "search"})        
    )

    $("#search").append(
        $("<button/>", {"id" : "btn", "text" : "Search"}),
        $("<input/>", {"id": "query"})
    )
    

    
    $("#btn").click(function() {
        var searchFor = $("#query").val();
        console.log(searchFor);
        body.append(
            $("<table border=2><tr>" +
            "<th>BODY</th>" +
            "<th>AUTHOR</th>" +
            "<th>SUBREDDIT</th>" +
            "<th>URL</th>" +
            "<th>SCORE</th>" +
            "<th>FLAIR</th></tr>")
        )
        $.getJSON(`https://api.pushshift.io/reddit/search/comment/?q=${searchFor}&sort=relevance&size=100`, function(data){
            $.each(data.data, function(i, item){
                let rBody = String(item.body);
                let author = item.author;
                let subreddit = item.subreddit;
                let url = "https://www.reddit.com/" + JSON.stringify(item.url);
                let score = item.score;
                let flair = item.author_flair_text;
                if(flair === null) {
                    flair = "";
                }

                $("table").append(
                    $("<tr>"+
                    "<td id='body'>" + rBody + "</td>" +
                    "<td>" + author + "</td>" +
                    "<td>" + subreddit + "</td>" +
                    "<td>" + url + "</td>" +
                    "<td>" + score + "</td>" +
                    "<td>" + flair + "</td>" +
                    "</tr>")
                )
            })
        })
        body.append(
            $("</table>")
        )
    })
    
    body.css({"display" : "flex", "flex-direction" : "column", "justify-content" : "center", "align-items" : "center"})
    $("#query").css({"margin-left": "2rem"})

    $("#search").css({"margin-bottom" : "2rem"})
})