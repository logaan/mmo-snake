// Compiled by ClojureScript 1.7.170 {}
goog.provide('mmo_snake.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('cljs.pprint');
goog.require('mmo_snake.controller.game');
goog.require('mmo_snake.view.game');
cljs.core.enable_console_print_BANG_.call(null);
mmo_snake.core.on_js_reload = (function mmo_snake$core$on_js_reload(){
return null;
});
mmo_snake.core.component = (function mmo_snake$core$component(state){
return mmo_snake.view.game.game.call(null,cljs.core.deref.call(null,state),mmo_snake.controller.game.actions.call(null,state));
});
mmo_snake.core.start_game = (function mmo_snake$core$start_game(state){
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mmo_snake.core.component,state], null),document.body);

setInterval((function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882)], null),cljs.core.inc);
}),(100));

return document.getElementById("game").focus();
});
mmo_snake.core.start_game.call(null,reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"snakes","snakes",-1507897357),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),(6),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null),new cljs.core.Keyword(null,"east","east",1189821678)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.Keyword(null,"south","south",1586796293)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(2)], null),new cljs.core.Keyword(null,"east","east",1189821678)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),(3),new cljs.core.Keyword(null,"moves","moves",927465255),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(49),(49)], null),new cljs.core.Keyword(null,"west","west",708776677)], null)], null)], null)], null),new cljs.core.Keyword(null,"time","time",1385887882),(1)], null)));

//# sourceMappingURL=core.js.map?rel=1451996525999