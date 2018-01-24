phina.globalize();
// 定数
var SCREEN_WIDTH    = 640;
var PARTICLE_NUM    = 1024;
var FRICTION        = 0.96;
var TO_DIST         = SCREEN_WIDTH*0.86;
var STIR_DIST       = SCREEN_WIDTH*0.125;
var BLOW_DIST       = SCREEN_WIDTH*0.4;
/* * パーティクル */
phina.define('Particle', {
 superClass: 'StarShape',
 init: function(color) {
 this.superInit({
 fill: color,     
 stroke: null,      
 radius: 4,   
 });      
 this.v = Vector2(0, 0);   
 this.blendMode = 'lighter'; 
 },   
 update: function(app) {  
 var p  = app.pointer;  
 var dv = Vector2.sub(this, p);  
 var d  = dv.length() || 0.001;  
 // 継承  superClass: 'DisplayScene',
  // 初期化  init: function() {  
  // super init    this.superInit();
    // 背景色    this.backgroundColor = '#222';
    // パーティクルを生成    (PARTICLE_NUM).times(function() {   
    var color = "hsla({0}, 75%, 50%, 1)".format(Math.randint(0, 360)); 
    var p = Particle(color).addChildTo(this);    
    p.x = Math.randint(0, this.gridX.width);    
    p.y = Math.randint(0, this.gridY.width);    },
    this); 
    },
  onkeydown: function(e) {  
  // space if push space  
  if (e.keyCode === 32) {   
  this.app.stop();    }  },});
/* * メイン処理 */
phina.main(function() {  
// アプリケーションを生成 
var app = GameApp({    startLabel: 'main', // MainScene から開始  });

  app.enableStats();
  
  // 実行  app.run();
  });
