// Compiled by ClojureScript 1.7.170 {}
goog.provide('mmo_snake.controller.game');
goog.require('cljs.core');
goog.require('mmo_snake.model.game');
mmo_snake.controller.game.key_codes = new cljs.core.PersistentArrayMap(null, 4, [(65),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"ccw","ccw",-1676880533)], null),(83),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),new cljs.core.Keyword(null,"cw","cw",1918771037)], null),(75),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"ccw","ccw",-1676880533)], null),(76),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"cw","cw",1918771037)], null)], null);
mmo_snake.controller.game.change_direction = (function mmo_snake$controller$game$change_direction(state){
return (function (e){
var temp__4423__auto__ = mmo_snake.controller.game.key_codes.call(null,e.keyCode);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__33443 = temp__4423__auto__;
var player_no = cljs.core.nth.call(null,vec__33443,(0),null);
var rotation = cljs.core.nth.call(null,vec__33443,(1),null);
return cljs.core.swap_BANG_.call(null,state,mmo_snake.model.game.add_move,player_no,rotation);
} else {
return null;
}
});
});
mmo_snake.controller.game.actions = (function mmo_snake$controller$game$actions(state){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"change-direction","change-direction",834433716),mmo_snake.controller.game.change_direction.call(null,state)], null);
});

//# sourceMappingURL=game.js.map?rel=1451996466858