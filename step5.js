$(document).ready(function() {
    fetch("./dataset_r.xml")
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then((data) =>  {

            let body = $("body");
            body.append(
                $("<table id=table1 border=2><tr>" +
                "<th colspan=2>Category</th>" +
                "<th rowspan=2>Updated</th>" +
                "<th rowspan=2>Icon</th>" +
                "<th rowspan=2>ID</th>" +
                "<th colspan=3>Link 1</th>" +
                "<th colspan=3>Link 2</th>" +
                "<th rowspan=2>Subtitle</th>" +
                "<th rowspan=2>Title</th></tr>" + 
                "<tr><th>Term</th>" +
                "<th>Label</th>" + 
                "<th>rel</th>" + 
                "<th>href</th>" + 
                "<th>type</th>" + 
                "<th>rel</th>" + 
                "<th>href</th>" + 
                "<th>type</th></tr>") 
            )
            let term = data.getElementsByTagName("category")[0].getAttribute("term");
            let label = data.getElementsByTagName("category")[0].getAttribute("label");
            let updated = data.getElementsByTagName("updated")[0].innerHTML;
            let icon = data.getElementsByTagName("icon")[0].innerHTML;
            let id = data.getElementsByTagName("id")[0].innerHTML;
            let rel1 = data.getElementsByTagName("link")[0].getAttribute("rel");
            let href1 = data.getElementsByTagName("link")[0].getAttribute("href");
            let type1 = data.getElementsByTagName("link")[0].getAttribute("type");
            let rel2 = data.getElementsByTagName("link")[1].getAttribute("rel");
            let href2 = data.getElementsByTagName("link")[1].getAttribute("href");
            let type2 = data.getElementsByTagName("link")[1].getAttribute("type");
            let subtitle = data.getElementsByTagName("subtitle")[0].innerHTML;
            let title = data.getElementsByTagName("title")[0].innerHTML;

            $("#table1").append(
                $("<tr>"+
                "<td id='body'>" + term + "</td>" +
                "<td>" + label + "</td>" +
                "<td>" + updated + "</td>" +
                "<td>" + icon + "</td>" +
                "<td>" + id + "</td>" +
                "<td>" + rel1 + "</td>" +
                "<td>" + href1 + "</td>" +
                "<td>" + type1 + "</td>" +
                "<td>" + rel2 + "</td>" +
                "<td>" + href2 + "</td>" +
                "<td>" + type2 + "</td>" +
                "<td>" + subtitle + "</td>" +
                "<td>" + title + "</td>" +
                "</tr>")
            )

            body.append(
                $("</table>")
            )

            body.append(
                $("<table id=table2 border=2><tr>" +
                "<th colspan=2>Author</th>" +
                "<th colspan=2>Category</th>" +
                "<th rowspan=2>Content Type</th>" +
                "<th rowspan=2>Content</th>" +
                "<th rowspan=2>ID</th>" +
                "<th rowspan=2>Link</th>" +
                "<th rowspan=2>Updated</th>" +
                "<th rowspan=2>Published</th>" +
                "<th rowspan=2>Title</th></tr>" + 
                "<tr><th>name</th>" +
                "<th>uri</th>" + 
                "<th>term</th>" + 
                "<th>label</th></tr>") 
            )

            let entry = data.getElementsByTagName("entry");
            for(let i = 0; i < entry.length; i++) {
                $("#table2").append(
                    "<tr>" +
                    "<td>" + data.getElementsByTagName("name")[i].innerHTML + "</td>" +
                    "<td>" + data.getElementsByTagName("uri")[i].innerHTML + "</td>" +
                    "<td>" + data.getElementsByTagName("category")[i + 1].getAttribute("term") + "</td>" +
                    "<td>" + data.getElementsByTagName("category")[i + 1].getAttribute("label") + "</td>" +
                    "<td>" + data.getElementsByTagName("content")[i].getAttribute("type") + "</td>" +
                    "<td>" + data.getElementsByTagName("content")[i].innerHTML + "</td>" +
                    "<td>" + data.getElementsByTagName("id")[i + 1].innerHTML + "</td>" +
                    "<td>" + data.getElementsByTagName("link")[i + 2].getAttribute("href") + "</td>" +
                    "<td>" + data.getElementsByTagName("updated")[i + 1].innerHTML + "</td>" +
                    "<td>" + data.getElementsByTagName("published")[i].innerHTML + "</td>" +
                    "<td>" + data.getElementsByTagName("title")[i + 1].innerHTML + "</td>" +
                    "</tr>"
                ) 
            }



        })
})