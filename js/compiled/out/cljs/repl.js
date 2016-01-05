// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31359_31373 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31360_31374 = null;
var count__31361_31375 = (0);
var i__31362_31376 = (0);
while(true){
if((i__31362_31376 < count__31361_31375)){
var f_31377 = cljs.core._nth.call(null,chunk__31360_31374,i__31362_31376);
cljs.core.println.call(null,"  ",f_31377);

var G__31378 = seq__31359_31373;
var G__31379 = chunk__31360_31374;
var G__31380 = count__31361_31375;
var G__31381 = (i__31362_31376 + (1));
seq__31359_31373 = G__31378;
chunk__31360_31374 = G__31379;
count__31361_31375 = G__31380;
i__31362_31376 = G__31381;
continue;
} else {
var temp__4425__auto___31382 = cljs.core.seq.call(null,seq__31359_31373);
if(temp__4425__auto___31382){
var seq__31359_31383__$1 = temp__4425__auto___31382;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31359_31383__$1)){
var c__17629__auto___31384 = cljs.core.chunk_first.call(null,seq__31359_31383__$1);
var G__31385 = cljs.core.chunk_rest.call(null,seq__31359_31383__$1);
var G__31386 = c__17629__auto___31384;
var G__31387 = cljs.core.count.call(null,c__17629__auto___31384);
var G__31388 = (0);
seq__31359_31373 = G__31385;
chunk__31360_31374 = G__31386;
count__31361_31375 = G__31387;
i__31362_31376 = G__31388;
continue;
} else {
var f_31389 = cljs.core.first.call(null,seq__31359_31383__$1);
cljs.core.println.call(null,"  ",f_31389);

var G__31390 = cljs.core.next.call(null,seq__31359_31383__$1);
var G__31391 = null;
var G__31392 = (0);
var G__31393 = (0);
seq__31359_31373 = G__31390;
chunk__31360_31374 = G__31391;
count__31361_31375 = G__31392;
i__31362_31376 = G__31393;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31394 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16826__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31394);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31394)))?cljs.core.second.call(null,arglists_31394):arglists_31394));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31363 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31364 = null;
var count__31365 = (0);
var i__31366 = (0);
while(true){
if((i__31366 < count__31365)){
var vec__31367 = cljs.core._nth.call(null,chunk__31364,i__31366);
var name = cljs.core.nth.call(null,vec__31367,(0),null);
var map__31368 = cljs.core.nth.call(null,vec__31367,(1),null);
var map__31368__$1 = ((((!((map__31368 == null)))?((((map__31368.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31368.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31368):map__31368);
var doc = cljs.core.get.call(null,map__31368__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31368__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31395 = seq__31363;
var G__31396 = chunk__31364;
var G__31397 = count__31365;
var G__31398 = (i__31366 + (1));
seq__31363 = G__31395;
chunk__31364 = G__31396;
count__31365 = G__31397;
i__31366 = G__31398;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31363);
if(temp__4425__auto__){
var seq__31363__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31363__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__31363__$1);
var G__31399 = cljs.core.chunk_rest.call(null,seq__31363__$1);
var G__31400 = c__17629__auto__;
var G__31401 = cljs.core.count.call(null,c__17629__auto__);
var G__31402 = (0);
seq__31363 = G__31399;
chunk__31364 = G__31400;
count__31365 = G__31401;
i__31366 = G__31402;
continue;
} else {
var vec__31370 = cljs.core.first.call(null,seq__31363__$1);
var name = cljs.core.nth.call(null,vec__31370,(0),null);
var map__31371 = cljs.core.nth.call(null,vec__31370,(1),null);
var map__31371__$1 = ((((!((map__31371 == null)))?((((map__31371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31371):map__31371);
var doc = cljs.core.get.call(null,map__31371__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31371__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31403 = cljs.core.next.call(null,seq__31363__$1);
var G__31404 = null;
var G__31405 = (0);
var G__31406 = (0);
seq__31363 = G__31403;
chunk__31364 = G__31404;
count__31365 = G__31405;
i__31366 = G__31406;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1451996464825