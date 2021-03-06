window.onload = function() {
    // ifLoged();
    loadArticle(1);
    window.addEventListener('scroll', _.throttle(lazyLoad(), 100));
    window.addEventListener('scroll', _.throttle(checkImg, 100));
}

function lazyLoad() {
    if (pageIndex === undefined) {
        var pageIndex = 2;
    }
    // var timestamp = (new Date()).valueOf();
    // console.log(loading.getBoundingClientRect().top);
    // console.log(loading.offsetHeight);
    // console.log(document.documentElement.clientHeight);
    // console.log("------------------------------------");
    return function() {
        var loading = document.getElementById("loading");
        if (loading.getBoundingClientRect().top + loading.offsetHeight < document.documentElement.clientHeight) {
            // var timestampnow = (new Date()).valueOf();
            // console.log(timestamp);
            // console.log(timestampnow);
            // if (timestampnow - timestamp <= 1000 && timestampnow - timestamp > 100) {}
            loadArticle(pageIndex++);
            // 当正在加载图标出现在视窗中时，请求下一页文章列表。
        }
    }
}

function checkImg() {
    var imgs = document.getElementsByClassName("cover");
    for (var index = 0; index < imgs.length; index++) {
        var imageHeight = imgs[index].offsetTop;
        if (imageHeight < document.documentElement.clientHeight + document.documentElement.scrollTop) {
            preload_images(imgs[index]);
            // imgs[index].classList.remove("cover");
            imgs[index].className = imgs[index].className.replace('cover', '');
        }
    }
};

function preload_images(img) {
    var temp_img = new Image();
    //预加载图片
    // temp_img.src = url_file + img.dataset.src;
    temp_img.src = img.dataset.src;
    // temp_img.src = "images/1.jpg";
    //图片加载成功后，替换临时图片
    temp_img.onload = function() {
            console.log(img.src);
            // img.src = url_file + img.dataset.src;
            img.src = "image/2.jpg";
        }
        //加载失败
    temp_img.onerror = function() {
        console.log(img.src);
        img.src = "image/loadfail.jpg";
    }
}

function loadArticle(pageIndex) {
    // 请求文章列表接口。
    var data = {
        "code": "SUCCESS",
        "data": {
            "articles": [{
                "_id": "5a17f9d0396c3149ac92aef1",
                "title": "怎样的食物才是好零食？",
                "cover": "cover/8052f5d11e28254871009d7f5e4fd969",
                "abstract": "婴儿出生前，营养物质的摄入，通过一根脐带，从母亲体内直接获取。婴儿出生，哭声意味着呼吸系统开始启动，剪短脐带的那一刻开始，营养的吸收和利用，就要依靠婴儿自己消化吸收系统。婴儿...",
                "create_time": 1511511004000,
                "author": {
                    "_id": "5a17f9c9396c3149ac92ae79",
                    "name": "小王子的鞋",
                    "gender": "woman",
                    "constellations": "处女座",
                    "avatar": "avatar/63c632ee37ca94f094a98a0363c0f36f",
                    "city": ["新疆维吾尔自治区 博尔塔拉蒙古自治州"]
                },
                "look_sum": 8,
                "praise_sum": 0
            }, {
                "_id": "5a17f9ce396c3149ac92aeb8",
                "title": "别特么每次一出事，就让我教孩子学会自保",
                "cover": "cover/fd6e446c0fcf8b7ba0c14d8e2f69d27e",
                "abstract": "最近听到最多的一句话是：“这世界怎么了？” 最发达的几个城市，幼儿园接二连三成为焦点的原因，竟是在刷新对人性下限的认识。 “宝贝，芥末是什么味道？” “疼……” “都什么时候...",
                "create_time": 1511509988000,
                "author": {
                    "_id": "5a17f9c9396c3149ac92ae6e",
                    "name": "槽值",
                    "gender": "man",
                    "constellations": "摩羯座",
                    "avatar": "avatar/c166b26c480b42c315234131712b68c8",
                    "city": ["上海 上海市"]
                },
                "look_sum": 2061,
                "praise_sum": 114
            }, {
                "_id": "5a17f9da396c3149ac92af81",
                "title": "郦波解读李瑞《听筝》",
                "cover": "cover/1692b5f9fc74b788f31c6532df71e761",
                "abstract": "上一回我们讲了叶上题诗和衣上题诗的红叶传情。今天呢，我们来讲一首和乐器有关的情诗，这就是被称为是“大历十才子”之一的李端，他的名作《听筝》，诗云： 鸣筝金粟柱，素手玉房前。 ...",
                "create_time": 1511507890000,
                "author": {
                    "_id": "5a17f9c9396c3149ac92ae9d",
                    "name": "流星雨儿下",
                    "gender": "man",
                    "constellations": "处女座",
                    "avatar": "avatar/947ea47096a1fbc5763f2275b2818222",
                    "city": ["西藏自治区 林芝地区"]
                },
                "look_sum": 109,
                "praise_sum": 8
            }, {
                "_id": "5a17f9d5396c3149ac92af40",
                "title": "Raúl Garreta大神教你5步搭建机器学习文本分类器：MonkeyLearn",
                "cover": "cover/d737310bc777504fde808ea4a1741b3e",
                "abstract": "摘要：Raúl Garreta，《Learning scikit-learn: Machine Learning in Python》一书作者，手把手教你5步搭建机器学习文本...",
                "create_time": 1511507739000,
                "author": {
                    "_id": "5a17f9c9396c3149ac92ae91",
                    "name": "阿里云云栖社区",
                    "gender": "woman",
                    "constellations": "双鱼座",
                    "avatar": "avatar/fa50f47d5dac7fa4f590f863283c145f",
                    "city": ["山西省 朔州市"]
                },
                "look_sum": 44,
                "praise_sum": 1
            }]
        },
        "count": 232
    }
    var essayData = data.data.articles;
    var essay = "";
    for (let i = 0; i < essayData.length; i++) {
        essay += '<div class="essayList-item">';
        essay += '<a class="openArticle" data-id="' + essayData[i]._id + '" href="articleDetail.html">';
        // preloadImages

        loadpath = "image/loading.gif";
        realpath = "image/success.jpg";
        // realpath = url_file + essayData[i].cover;
        essay += '<img class="essay-pic cover" data-src="' + realpath + '" src="' + loadpath + '">';
        essay += '</a><div class = "essaySummary"><div class="title"><a class="openArticle" data-id="' + essayData[i]._id + '" data-abstract="' + essayData[i].abstract + '" href="articleDetail.html" ><p class="font18">';
        essay += essayData[i].title + '</p></a></div>';
        essay += '<p class="abstract">' + essayData[i].abstract + '</p>';
        //使用本地图片以节约资源
        preavatar = "image/3.jpg";
        avatarpath = url_file + essayData[i].author.avatar;
        essay += '<div class ="meta"><div class ="author">   ' + '<img class = "author-icon" src ="' + preavatar + '">';
        essay += '<p class="authorName">' + essayData[i].author.name + '</p>';
        // moment.js 格式化时间戳
        essay += '<p class="publishTime">' + moment(essayData[i].create_time).format('YYYY-MM-DD HH:mm:ss') + '</p>'
        essay += '</div> <span class = "praiseCount" > <i> </i>' + essayData[i].praise_sum + '</span>';
        essay += '<span class="visitCount"><i> </i>' + essayData[i].look_sum + '</span></div></div></div>';
    }
    document.getElementById("loading").insertAdjacentHTML('beforebegin', essay);
    // document.getElementsByClassName("essayList-main")[0].insertAdjacentHTML('afterbegin', essay);
    // ajaxXHR('GET', url + "posts/list?page=" + pageIndex + "&limit=4", function(data) {
    //     if (data.code != "SUCCESS" || data.data.articles.length == 0) {
    //         document.getElementById("loading").innerHTML = "<strong>没有更多文章！</strong>"
    //         return false;
    //     }
    //     var essayData = data.data.articles;
    //     var essay = "";
    //     for (let i = 0; i < essayData.length; i++) {
    //         essay += '<div class="essayList-item">';
    //         essay += '<a class="openArticle"  href="articleDetail.html?_id=' + essayData[i]._id + '">';
    //         // preloadImages
    //         loadpath = "image/icon-loading.gif";
    //         realpath = url_file + essayData[i].cover;
    //         essay += '<img class="essay-pic cover" data-src="' + realpath + '" src="' + loadpath + '">';
    //         essay += '</a><div class = "essaySummary"><div class="title"><a class="openArticle"  href="articleDetail.html?data-id=' + essayData[i]._id + '" >'
    //         essay += essayData[i].title + '</a></div>'
    //         essay += '<p class="abstract">' + essayData[i].abstract + '</p>'
    //         preavatar = "image/3.jpg";
    //         avatarpath = url_file + essayData[i].author.avatar;
    //         essay += '<div class ="meta"><div class ="author">' + '<img class = "author-icon" src ="' + preavatar + '">'
    //         essay += '<p class="authorName">' + essayData[i].author.name + '</p>'
    //             // moment.js 格式化时间戳
    //         essay += '<p class="publishTime">' + moment(essayData[i].create_time).format('YYYY-MM-DD HH:mm:ss') + '</p>'
    //         essay += '</div> <span class = "praiseCount" > <i> </i>' + essayData[i].praise_sum + '</span>';
    //         essay += '<span class="visitCount"><i> </i>' + essayData[i].look_sum + '</span></div></div></div>';
    //     }
    //     document.getElementById("loading").insertAdjacentHTML('beforebegin', essay);
    // })
    checkImg();
    listenDetailHref();
}


function listenDetailHref() {
    var hrefToDetail = document.getElementsByClassName("openArticle");
    for (let i = 0; i < hrefToDetail.length; i++) {
        hrefToDetail[i].onclick = function() {
            localStorage.author_id = hrefToDetail[i].dataset.id;
        }

    }
}