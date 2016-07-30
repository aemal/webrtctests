<script>
function gotStream(stream) {
	window.AudioContext = window.AudioContext || window.webkitAudioContext;
	var audioContext = new AudioContext();

	// Create an AudioNode from the stream
	var mediaStreamSource = audioContext.createMediaStreamSource(stream);

	// Connect it to destination to hear yourself
	// or any other node for processing!
	mediaStreamSource.connect(audioContext.destination);
}
	
function error(err) {
	console.error(err);
}

navigator.getUserMedia = ( navigator.getUserMedia ||
			   navigator.webkitGetUserMedia ||
			   navigator.mozGetUserMedia ||
			   navigator.msGetUserMedia);

navigator.getUserMedia({audio:true}, gotStream, error);
	

</script>