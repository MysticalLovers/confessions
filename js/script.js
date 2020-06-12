var url = 'https://discord.com/api/webhooks/720343290125221928/PEjzymgRel5rMVWb6o-yIm9MQPwJFid6djIdVG9C8z5Tr40CZ1bSZGLyzJqwxWDTHteH'
var url2 = 'https://discordapp.com/api/webhooks/720895380644036678/-cw5loakzhzMhUwGRRA9NFTUflyMF_4QtMORlE-tAWoIgjLqgEqjtkyWsQrT5EEk94ni'
var blank = ['']
function lower(){
  var f = content;
  f.toLowerCase();
  content.value=f.value;
}
function replaceT(obj){
  obj.value=obj.value.toLowerCase();
  var curses=['nigger','fag','faggot','\'\'\''];
  var i=0, c, r;
  while(c=curses[i++]){
    r=new RegExp(c,'g');
    obj.value=obj.value.replace(r,'***');
  }
};

function noSpam(){
  document.getElementById("submit").disabled = true;
  setTimeout(function(){
    var btn = document.getElementById("submit");
    btn.disabled = false;
  }, 5000);
}
