function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5iHsei9yXks":
        Script1();
        break;
      case "5lP4ZMKmr3H":
        Script2();
        break;
      case "6fgtJlVUHGS":
        Script3();
        break;
      case "5WH0xa2KsQa":
        Script4();
        break;
      case "6alurSPtzFJ":
        Script5();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound_carefree.mp3";
audio.load();
audio.play();
audio.volume=0.35;

}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound_carefree.mp3";
audio.play();
audio.volume=0.35;
}

function Script3()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound_carefree.mp3";
audio.pause();
audio.volume=0.35;
}

function Script4()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound_carefree.mp3";
audio.pause();
audio.volume=0.35;
}

function Script5()
{
  var audio = document.getElementById('bgSongku');
audio.src="backsound_carefree.mp3";
audio.play();
audio.volume=0.35;
}

