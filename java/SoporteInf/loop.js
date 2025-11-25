(function(){
	'use strict';
	const video = document.getElementById('hero-video');
	if(!video) return;
	const START = 6; // segundos
	const END = 19;  // segundos

	// Asegurarse de que el segmento se reproduzca en bucle entre START y END
	function seekToStart(){
		try{
			video.currentTime = START;
		}catch(e){
			// algunos navegadores requieren que el video tenga metadata cargada
		}
	}

	// Cuando los metadatos estén listos, posicionar y reproducir
	video.addEventListener('loadedmetadata', function(){
		if(video.duration && video.duration > START){
			seekToStart();
			video.play().catch(function(){});
		}
	});

	// control de tiempo para reiniciar cuando llegue al END
	video.addEventListener('timeupdate', function(){
		if(video.currentTime >= END){
			video.pause();
			seekToStart();
			video.play().catch(function(){});
		}
	});

	// fallback por si llega a ended
	video.addEventListener('ended', function(){
		seekToStart();
		video.play().catch(function(){});
	});

	// Si el archivo ya tenía metadata cargada (carga rápida), inicializar
	if(video.readyState >= 1){
		seekToStart();
		video.play().catch(function(){});
	}
})();