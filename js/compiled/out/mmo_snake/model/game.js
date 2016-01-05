// Compiled by ClojureScript 1.7.170 {}
goog.provide('mmo_snake.model.game');
goog.require('cljs.core');
mmo_snake.model.game.directions = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null)], null);
mmo_snake.model.game.move = (function mmo_snake$model$game$move(p__27061,p__27062){
var vec__27065 = p__27061;
var dx = cljs.core.nth.call(null,vec__27065,(0),null);
var dy = cljs.core.nth.call(null,vec__27065,(1),null);
var vec__27066 = p__27062;
var cx = cljs.core.nth.call(null,vec__27066,(0),null);
var cy = cljs.core.nth.call(null,vec__27066,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx + dx),(cy + dy)], null);
});
mmo_snake.model.game.infinite_lines = (function mmo_snake$model$game$infinite_lines(moves){
var iter__17598__auto__ = (function mmo_snake$model$game$infinite_lines_$_iter__27075(s__27076){
return (new cljs.core.LazySeq(null,(function (){
var s__27076__$1 = s__27076;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27076__$1);
if(temp__4425__auto__){
var s__27076__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27076__$2)){
var c__17596__auto__ = cljs.core.chunk_first.call(null,s__27076__$2);
var size__17597__auto__ = cljs.core.count.call(null,c__17596__auto__);
var b__27078 = cljs.core.chunk_buffer.call(null,size__17597__auto__);
if((function (){var i__27077 = (0);
while(true){
if((i__27077 < size__17597__auto__)){
var vec__27081 = cljs.core._nth.call(null,c__17596__auto__,i__27077);
var coord = cljs.core.nth.call(null,vec__27081,(0),null);
var d = cljs.core.nth.call(null,vec__27081,(1),null);
cljs.core.chunk_append.call(null,b__27078,cljs.core.iterate.call(null,cljs.core.partial.call(null,mmo_snake.model.game.move,mmo_snake.model.game.directions.call(null,d)),coord));

var G__27083 = (i__27077 + (1));
i__27077 = G__27083;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27078),mmo_snake$model$game$infinite_lines_$_iter__27075.call(null,cljs.core.chunk_rest.call(null,s__27076__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27078),null);
}
} else {
var vec__27082 = cljs.core.first.call(null,s__27076__$2);
var coord = cljs.core.nth.call(null,vec__27082,(0),null);
var d = cljs.core.nth.call(null,vec__27082,(1),null);
return cljs.core.cons.call(null,cljs.core.iterate.call(null,cljs.core.partial.call(null,mmo_snake.model.game.move,mmo_snake.model.game.directions.call(null,d)),coord),mmo_snake$model$game$infinite_lines_$_iter__27075.call(null,cljs.core.rest.call(null,s__27076__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17598__auto__.call(null,moves);
});
mmo_snake.model.game.moves__GT_coords = (function mmo_snake$model$game$moves__GT_coords(game_length,snake_length,moves){
var ilines = mmo_snake.model.game.infinite_lines.call(null,moves);
var history = cljs.core.mapcat.call(null,((function (ilines){
return (function (p__27088){
var vec__27089 = p__27088;
var line = cljs.core.nth.call(null,vec__27089,(0),null);
var vec__27090 = cljs.core.nth.call(null,vec__27089,(1),null);
var bend = cljs.core.nth.call(null,vec__27090,(0),null);
var _ = cljs.core.nthnext.call(null,vec__27090,(1));
return cljs.core.take_while.call(null,((function (vec__27089,line,vec__27090,bend,_,ilines){
return (function (p1__27084_SHARP_){
return cljs.core.not_EQ_.call(null,bend,p1__27084_SHARP_);
});})(vec__27089,line,vec__27090,bend,_,ilines))
,line);
});})(ilines))
,cljs.core.partition.call(null,(2),(1),ilines));
var future = cljs.core.last.call(null,ilines);
var full_history = cljs.core.take.call(null,game_length,cljs.core.concat.call(null,history,future));
return cljs.core.drop.call(null,(game_length - snake_length),full_history);
});
mmo_snake.model.game.rotations = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cw","cw",1918771037),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"north","north",651323902)], null),new cljs.core.Keyword(null,"ccw","ccw",-1676880533),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"north","north",651323902),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"west","west",708776677),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"south","south",1586796293),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"east","east",1189821678),new cljs.core.Keyword(null,"north","north",651323902)], null)], null);
mmo_snake.model.game.add_move = (function mmo_snake$model$game$add_move(state,player_no,rotation){
var snake = cljs.core.get_in.call(null,state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snakes","snakes",-1507897357),player_no], null));
var moves = new cljs.core.Keyword(null,"moves","moves",927465255).cljs$core$IFn$_invoke$arity$1(snake);
var vec__27093 = cljs.core.last.call(null,moves);
var _ = cljs.core.nth.call(null,vec__27093,(0),null);
var direction = cljs.core.nth.call(null,vec__27093,(1),null);
var head = cljs.core.last.call(null,mmo_snake.model.game.moves__GT_coords.call(null,new cljs.core.Keyword(null,"time","time",1385887882).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$1(snake),moves));
var new_direction = cljs.core.get_in.call(null,mmo_snake.model.game.rotations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rotation,direction], null));
var new_move = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [head,new_direction], null);
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"snakes","snakes",-1507897357),player_no,new cljs.core.Keyword(null,"moves","moves",927465255)], null),((function (snake,moves,vec__27093,_,direction,head,new_direction,new_move){
return (function (p1__27091_SHARP_){
return cljs.core.conj.call(null,p1__27091_SHARP_,new_move);
});})(snake,moves,vec__27093,_,direction,head,new_direction,new_move))
);
});

//# sourceMappingURL=game.js.map?rel=1451996462245