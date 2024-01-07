var colors=['green','red','yellow','blue'];
var random=[]
var user=[]
var started='T'
var level=0
var col='red'


function resolveAfter2Seconds(x) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}
function color(){
  var r_number=Math.floor(Math.random()*colors.length);
  col=colors[r_number]
}

function flash(){
  $('.'+col).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
  random.push(col)
  console.log('random '+random)

}


$(document).keypress(function(){
  $("#level-title").text("Game Started")
  flash();
if(started==='T'){
  $('.btn').click(function(event){
    var click_color=event.target.id
    $(this).addClass("pressed")
    setTimeout(function(){
      $('.btn').removeClass("pressed")
    },100)
    user.push($(this).attr('id'))
    console.log('user '+user.length)



  if(user[user.length-1]===random[user.length-1]){
    if(user.length==random.length){
      user=[]
      console.log('h')
      $('#level-title').text('level'+" "+level)
      level++;
      color();
      flash();
    }
      }else{
          started="F"
          console.log('wrong')
          $('body').css('background-color','red');
          $('body').addClass('pressed')
          $('h1').text('Game Over')
          setTimeout(function(){
            $('body').removeClass('pressed')
          },100)
      }
    })
    }
  })
