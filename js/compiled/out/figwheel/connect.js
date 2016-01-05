// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('mmo_snake.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__33518__delegate = function (x){
if(cljs.core.truth_(mmo_snake.core.on_js_reload)){
return cljs.core.apply.call(null,mmo_snake.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'mmo-snake.core/on-js-reload' is missing");
}
};
var G__33518 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__33519__i = 0, G__33519__a = new Array(arguments.length -  0);
while (G__33519__i < G__33519__a.length) {G__33519__a[G__33519__i] = arguments[G__33519__i + 0]; ++G__33519__i;}
  x = new cljs.core.IndexedSeq(G__33519__a,0);
} 
return G__33518__delegate.call(this,x);};
G__33518.cljs$lang$maxFixedArity = 0;
G__33518.cljs$lang$applyTo = (function (arglist__33520){
var x = cljs.core.seq(arglist__33520);
return G__33518__delegate(x);
});
G__33518.cljs$core$IFn$_invoke$arity$variadic = G__33518__delegate;
return G__33518;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1451996526003