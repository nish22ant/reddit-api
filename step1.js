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
            "<th>TITLE</th>" +
            "<th>AUTHOR</th>" +
            "<th>SUBREDDIT</th>" +
            "<th>URL</th>" +
            "<th>SCORE</th>" +
            "<th>FLAIR</th></tr>")
        )
        $.getJSON(`https://www.reddit.com/search.json?q=${searchFor}&limit=100&sort_type=title&sort=relevance`, function(data){
            $.each(data.data.children, function(i, item){
                console.log(item);
                let title = item.data.title;
                let author = item.data.author;
                let subreddit = item.data.subreddit;
                let url = JSON.stringify(item.data.url);
                let score = item.data.score;
                let flair = item.data.link_flair_text;
                if(flair === null) {
                    flair = "";
                }

                $("table").append(
                    $("<tr>"+
                    "<td>" + title + "</td>" +
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