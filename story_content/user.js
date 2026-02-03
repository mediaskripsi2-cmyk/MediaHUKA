function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6JCr5qRFGrJ":
        Script1();
        break;
      case "6EN5wNjfgMS":
        Script2();
        break;
      case "6MKnnL8op80":
        Script3();
        break;
      case "5ml2OD7OpES":
        Script4();
        break;
      case "6bBKQUMEQGk":
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

