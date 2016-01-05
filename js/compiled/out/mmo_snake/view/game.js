// Compiled by ClojureScript 1.7.170 {}
goog.provide('mmo_snake.view.game');
goog.require('cljs.core');
goog.require('mmo_snake.model.game');
mmo_snake.view.game.colors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["red","blue","green"], null);
mmo_snake.view.game.snake = (function mmo_snake$view$game$snake(index,coords){
var iter__17598__auto__ = (function mmo_snake$view$game$snake_$_iter__33462(s__33463){
return (new cljs.core.LazySeq(null,(function (){
var s__33463__$1 = s__33463;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33463__$1);
if(temp__4425__auto__){
var s__33463__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33463__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__33463__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__33465 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__33464 = (0);
while(true){
if((i__33464 < size__17597__auto__)){
var vec__33468 = cljs.core._nth.call(null,c__17596__auto__,i__33464);
var x = cljs.core.nth.call(null,vec__33468,(0),null);
var y = cljs.core.nth.call(null,vec__33468,(1),null);
cljs.core.chunk_append.call(null,b__33465,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(x),cljs.core.str(","),cljs.core.str(y)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"x","x",2099068185),(x * (10)),new cljs.core.Keyword(null,"y","y",-1757859776),(y * (10)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),mmo_snake.view.game.colors.call(null,index),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.5], null)], null)], null));

var G__33470 = (i__33464 + (1));
i__33464 = G__33470;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33465),mmo_snake$view$game$snake_$_iter__33462.call(null,cljs.core.chunk_rest.call(null,s__33463__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33465),null);
}
} else {
var vec__33469 = cljs.core.first.call(null,s__33463__$2);
var x = cljs.core.nth.call(null,vec__33469,(0),null);
var y = cljs.core.nth.call(null,vec__33469,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str(x),cljs.core.str(","),cljs.core.str(y)].join(''),new cljs.core.Keyword(null,"width","width",-384071477),(10),new cljs.core.Keyword(null,"height","height",1025178622),(10),new cljs.core.Keyword(null,"x","x",2099068185),(x * (10)),new cljs.core.Keyword(null,"y","y",-1757859776),(y * (10)),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill","fill",883462889),mmo_snake.view.game.colors.call(null,index),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),0.5], null)], null)], null),mmo_snake$view$game$snake_$_iter__33462.call(null,cljs.core.rest.call(null,s__33463__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,coords);
});
mmo_snake.view.game.game = (function mmo_snake$view$game$game(p__33471,p__33472){
var map__33493 = p__33471;
var map__33493__$1 = ((((!((map__33493 == null)))?((((map__33493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33493):map__33493);
var snakes = cljs.core.get.call(null,map__33493__$1,new cljs.core.Keyword(null,"snakes","snakes",-1507897357));
var time = cljs.core.get.call(null,map__33493__$1,new cljs.core.Keyword(null,"time","time",1385887882));
var map__33494 = p__33472;
var map__33494__$1 = ((((!((map__33494 == null)))?((((map__33494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33494):map__33494);
var change_direction = cljs.core.get.call(null,map__33494__$1,new cljs.core.Keyword(null,"change-direction","change-direction",834433716));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"game","game",-441523833),new cljs.core.Keyword(null,"width","width",-384071477),(500),new cljs.core.Keyword(null,"height","height",1025178622),(500),new cljs.core.Keyword(null,"tabIndex","tabIndex",-169286716),(0),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid black"], null),new cljs.core.Keyword(null,"onKeyDown","onKeyDown",648902330),change_direction], null),(function (){var iter__17598__auto__ = ((function (map__33493,map__33493__$1,snakes,time,map__33494,map__33494__$1,change_direction){
return (function mmo_snake$view$game$game_$_iter__33497(s__33498){
return (new cljs.core.LazySeq(null,((function (map__33493,map__33493__$1,snakes,time,map__33494,map__33494__$1,change_direction){
return (function (){
var s__33498__$1 = s__33498;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33498__$1);
if(temp__4425__auto__){
var s__33498__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33498__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__33498__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__33500 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__33499 = (0);
while(true){
if((i__33499 < size__17597__auto__)){
var vec__33507 = cljs.core._nth.call(null,c__17596__auto__,i__33499);
var index = cljs.core.nth.call(null,vec__33507,(0),null);
var map__33508 = cljs.core.nth.call(null,vec__33507,(1),null);
var map__33508__$1 = ((((!((map__33508 == null)))?((((map__33508.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33508.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33508):map__33508);
var length = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"length","length",588987862));
var moves = cljs.core.get.call(null,map__33508__$1,new cljs.core.Keyword(null,"moves","moves",927465255));
cljs.core.chunk_append.call(null,b__33500,mmo_snake.view.game.snake.call(null,index,mmo_snake.model.game.moves__GT_coords.call(null,time,length,moves)));

var G__33513 = (i__33499 + (1));
i__33499 = G__33513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33500),mmo_snake$view$game$game_$_iter__33497.call(null,cljs.core.chunk_rest.call(null,s__33498__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33500),null);
}
} else {
var vec__33510 = cljs.core.first.call(null,s__33498__$2);
var index = cljs.core.nth.call(null,vec__33510,(0),null);
var map__33511 = cljs.core.nth.call(null,vec__33510,(1),null);
var map__33511__$1 = ((((!((map__33511 == null)))?((((map__33511.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33511.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33511):map__33511);
var length = cljs.core.get.call(null,map__33511__$1,new cljs.core.Keyword(null,"length","length",588987862));
var moves = cljs.core.get.call(null,map__33511__$1,new cljs.core.Keyword(null,"moves","moves",927465255));
return cljs.core.cons.call(null,mmo_snake.view.game.snake.call(null,index,mmo_snake.model.game.moves__GT_coords.call(null,time,length,moves)),mmo_snake$view$game$game_$_iter__33497.call(null,cljs.core.rest.call(null,s__33498__$2)));
}
} else {
return null;
}
break;
}
});})(map__33493,map__33493__$1,snakes,time,map__33494,map__33494__$1,change_direction))
,null,null));
});})(map__33493,map__33493__$1,snakes,time,map__33494,map__33494__$1,change_direction))
;
return iter__17598__auto__.call(null,cljs.core.map.call(null,cljs.core.list,cljs.core.range.call(null),snakes));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Controls"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Player 1 - A S"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Player 2 - K L"], null)], null);
});

//# sourceMappingURL=game.js.map?rel=1451996525972