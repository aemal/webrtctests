<script>
var streamToAttach;
navigator.mozGetUserMedia({ audio: true, video: true }, function (stream) {
    video.mozSrcObject = stream;
    video.play();
    streamToAttach = stream;
}, function(error) {
    alert(error);
});
</script>