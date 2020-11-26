(function(){

console.clear();

/*for channel*/ let vids = document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-grid-video-renderer")
// /*for homepage*/let vids = document.querySelectorAll(".yt-simple-endpoint.style-scope.ytd-video-renderer");

console.log("Total videos found: ",vids.length)

for(let i=0; i<vids.length;i++){
    
    console.log(vids[i].href);
    
}
})();
