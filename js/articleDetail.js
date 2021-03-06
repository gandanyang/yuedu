window.onload = function() {
    //动态加载文章名至页面名称
    var id = localStorage.author_id;
    ajaxXHR("GET", url + "posts/details?id=" + id, function(data) {
        if (data.code != "SUCCESS") {
            console.log(data.message);
            return false;
        }
        console.log(data);
        dataa = data.data.article;
        console.log(dataa.author.avatar);
        document.getElementsByClassName("author-icon")[0].src = "image/1.jpg";
        document.getElementsByClassName("authorName")[0].innerHTML = dataa.author.name;
        document.getElementsByClassName("publishTime")[0].innerHTML = moment(dataa.create_time).format('YYYY-MM-DD HH:mm:ss');
        document.getElementsByClassName("praisecount")[0].innerHTML = dataa.praise_sum;
        document.getElementsByClassName("visitcount")[0].innerHTML = dataa.look_sum;

        console.log(dataa.pic);
        document.getElementsByClassName("titile")[0].innerHTML = dataa.title;
        document.getElementsByClassName("essayAbstract")[0].innerHTML = dataa.abstract;
        document.getElementsByClassName("essayBody")[0].innerHTML = dataa.body;
    })

    ajaxXHR("GET", url + "comment/list?page=1&limit=3&article=" + id, function(data) {
        // if (data.code != "SUCCESS" || data.data.comments.length == 0) {
        //     document.getElementsByClassName("commentListTitle")[0].innerHTML = "无法加载更多评论！";
        //     console.log(data.message);
        //     return false;
        // }
        console.log(data);
        commentdata = data.data.comments;

        var comment = "";
        for (let i = 0; i < commentdata.length; i++) {
            // console.log(commentdata.length);
            const e = commentdata[i];
            comment += '<div class="commentUnit">< div class = "user"><a href = "homePage.html">';
            preimgsrc = "image/success.jpg";
            comment += '<img class = "user-icon" src = "' + preimgsrc + '">< p class = "userName" >' + e.author.name + '</p></a>';
            comment += '<p class = "commentTime" >' + e.create_time + '</p><a class="commentPCount"><i> </i><span class="commentpcount">' + e.praise_sum + ' < /span></a></div>';
            comment += '<p class="commentContent"> ' + e.body + '</p></div>';
            console.log(e.author.avatar);
        }
        document.getElementsByClassName("commentList")[0].insertAdjacentHTML('beforeend', comment);





    })
}