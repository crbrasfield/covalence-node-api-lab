var rp = require("request-promise");
var fs = require("fs");

var redditUrl = "https://reddit.com/r/popular.json";

rp(redditUrl)
  .then(() => {
    var res = JSON.parse(json);

    const articles = res.data.children.map(article => ({
      title: article.data.title,
      author: article.data.author_fullname,
      url: article.data.url
    }));

    var articlesJSON = JSON.stringify(articles);

    fs.writeFile("message.json", articlesJSON, "utf8", () => {
      console.log("done!");
    });
  })
  .catch(function(err) {
    console.log("err:", err);
  });
