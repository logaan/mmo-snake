// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16826__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16826__auto__){
return or__16826__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16826__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30335_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30335_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__30340 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30341 = null;
var count__30342 = (0);
var i__30343 = (0);
while(true){
if((i__30343 < count__30342)){
var n = cljs.core._nth.call(null,chunk__30341,i__30343);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30344 = seq__30340;
var G__30345 = chunk__30341;
var G__30346 = count__30342;
var G__30347 = (i__30343 + (1));
seq__30340 = G__30344;
chunk__30341 = G__30345;
count__30342 = G__30346;
i__30343 = G__30347;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30340);
if(temp__4425__auto__){
var seq__30340__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30340__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__30340__$1);
var G__30348 = cljs.core.chunk_rest.call(null,seq__30340__$1);
var G__30349 = c__17629__auto__;
var G__30350 = cljs.core.count.call(null,c__17629__auto__);
var G__30351 = (0);
seq__30340 = G__30348;
chunk__30341 = G__30349;
count__30342 = G__30350;
i__30343 = G__30351;
continue;
} else {
var n = cljs.core.first.call(null,seq__30340__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30352 = cljs.core.next.call(null,seq__30340__$1);
var G__30353 = null;
var G__30354 = (0);
var G__30355 = (0);
seq__30340 = G__30352;
chunk__30341 = G__30353;
count__30342 = G__30354;
i__30343 = G__30355;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__30394_30401 = cljs.core.seq.call(null,deps);
var chunk__30395_30402 = null;
var count__30396_30403 = (0);
var i__30397_30404 = (0);
while(true){
if((i__30397_30404 < count__30396_30403)){
var dep_30405 = cljs.core._nth.call(null,chunk__30395_30402,i__30397_30404);
topo_sort_helper_STAR_.call(null,dep_30405,(depth + (1)),state);

var G__30406 = seq__30394_30401;
var G__30407 = chunk__30395_30402;
var G__30408 = count__30396_30403;
var G__30409 = (i__30397_30404 + (1));
seq__30394_30401 = G__30406;
chunk__30395_30402 = G__30407;
count__30396_30403 = G__30408;
i__30397_30404 = G__30409;
continue;
} else {
var temp__4425__auto___30410 = cljs.core.seq.call(null,seq__30394_30401);
if(temp__4425__auto___30410){
var seq__30394_30411__$1 = temp__4425__auto___30410;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30394_30411__$1)){
var c__17629__auto___30412 = cljs.core.chunk_first.call(null,seq__30394_30411__$1);
var G__30413 = cljs.core.chunk_rest.call(null,seq__30394_30411__$1);
var G__30414 = c__17629__auto___30412;
var G__30415 = cljs.core.count.call(null,c__17629__auto___30412);
var G__30416 = (0);
seq__30394_30401 = G__30413;
chunk__30395_30402 = G__30414;
count__30396_30403 = G__30415;
i__30397_30404 = G__30416;
continue;
} else {
var dep_30417 = cljs.core.first.call(null,seq__30394_30411__$1);
topo_sort_helper_STAR_.call(null,dep_30417,(depth + (1)),state);

var G__30418 = cljs.core.next.call(null,seq__30394_30411__$1);
var G__30419 = null;
var G__30420 = (0);
var G__30421 = (0);
seq__30394_30401 = G__30418;
chunk__30395_30402 = G__30419;
count__30396_30403 = G__30420;
i__30397_30404 = G__30421;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30398){
var vec__30400 = p__30398;
var x = cljs.core.nth.call(null,vec__30400,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30400,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30400,x,xs,get_deps__$1){
return (function (p1__30356_SHARP_){
return clojure.set.difference.call(null,p1__30356_SHARP_,x);
});})(vec__30400,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__30434 = cljs.core.seq.call(null,provides);
var chunk__30435 = null;
var count__30436 = (0);
var i__30437 = (0);
while(true){
if((i__30437 < count__30436)){
var prov = cljs.core._nth.call(null,chunk__30435,i__30437);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30438_30446 = cljs.core.seq.call(null,requires);
var chunk__30439_30447 = null;
var count__30440_30448 = (0);
var i__30441_30449 = (0);
while(true){
if((i__30441_30449 < count__30440_30448)){
var req_30450 = cljs.core._nth.call(null,chunk__30439_30447,i__30441_30449);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30450,prov);

var G__30451 = seq__30438_30446;
var G__30452 = chunk__30439_30447;
var G__30453 = count__30440_30448;
var G__30454 = (i__30441_30449 + (1));
seq__30438_30446 = G__30451;
chunk__30439_30447 = G__30452;
count__30440_30448 = G__30453;
i__30441_30449 = G__30454;
continue;
} else {
var temp__4425__auto___30455 = cljs.core.seq.call(null,seq__30438_30446);
if(temp__4425__auto___30455){
var seq__30438_30456__$1 = temp__4425__auto___30455;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30438_30456__$1)){
var c__17629__auto___30457 = cljs.core.chunk_first.call(null,seq__30438_30456__$1);
var G__30458 = cljs.core.chunk_rest.call(null,seq__30438_30456__$1);
var G__30459 = c__17629__auto___30457;
var G__30460 = cljs.core.count.call(null,c__17629__auto___30457);
var G__30461 = (0);
seq__30438_30446 = G__30458;
chunk__30439_30447 = G__30459;
count__30440_30448 = G__30460;
i__30441_30449 = G__30461;
continue;
} else {
var req_30462 = cljs.core.first.call(null,seq__30438_30456__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30462,prov);

var G__30463 = cljs.core.next.call(null,seq__30438_30456__$1);
var G__30464 = null;
var G__30465 = (0);
var G__30466 = (0);
seq__30438_30446 = G__30463;
chunk__30439_30447 = G__30464;
count__30440_30448 = G__30465;
i__30441_30449 = G__30466;
continue;
}
} else {
}
}
break;
}

var G__30467 = seq__30434;
var G__30468 = chunk__30435;
var G__30469 = count__30436;
var G__30470 = (i__30437 + (1));
seq__30434 = G__30467;
chunk__30435 = G__30468;
count__30436 = G__30469;
i__30437 = G__30470;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30434);
if(temp__4425__auto__){
var seq__30434__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30434__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__30434__$1);
var G__30471 = cljs.core.chunk_rest.call(null,seq__30434__$1);
var G__30472 = c__17629__auto__;
var G__30473 = cljs.core.count.call(null,c__17629__auto__);
var G__30474 = (0);
seq__30434 = G__30471;
chunk__30435 = G__30472;
count__30436 = G__30473;
i__30437 = G__30474;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30434__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30442_30475 = cljs.core.seq.call(null,requires);
var chunk__30443_30476 = null;
var count__30444_30477 = (0);
var i__30445_30478 = (0);
while(true){
if((i__30445_30478 < count__30444_30477)){
var req_30479 = cljs.core._nth.call(null,chunk__30443_30476,i__30445_30478);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30479,prov);

var G__30480 = seq__30442_30475;
var G__30481 = chunk__30443_30476;
var G__30482 = count__30444_30477;
var G__30483 = (i__30445_30478 + (1));
seq__30442_30475 = G__30480;
chunk__30443_30476 = G__30481;
count__30444_30477 = G__30482;
i__30445_30478 = G__30483;
continue;
} else {
var temp__4425__auto___30484__$1 = cljs.core.seq.call(null,seq__30442_30475);
if(temp__4425__auto___30484__$1){
var seq__30442_30485__$1 = temp__4425__auto___30484__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30442_30485__$1)){
var c__17629__auto___30486 = cljs.core.chunk_first.call(null,seq__30442_30485__$1);
var G__30487 = cljs.core.chunk_rest.call(null,seq__30442_30485__$1);
var G__30488 = c__17629__auto___30486;
var G__30489 = cljs.core.count.call(null,c__17629__auto___30486);
var G__30490 = (0);
seq__30442_30475 = G__30487;
chunk__30443_30476 = G__30488;
count__30444_30477 = G__30489;
i__30445_30478 = G__30490;
continue;
} else {
var req_30491 = cljs.core.first.call(null,seq__30442_30485__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30491,prov);

var G__30492 = cljs.core.next.call(null,seq__30442_30485__$1);
var G__30493 = null;
var G__30494 = (0);
var G__30495 = (0);
seq__30442_30475 = G__30492;
chunk__30443_30476 = G__30493;
count__30444_30477 = G__30494;
i__30445_30478 = G__30495;
continue;
}
} else {
}
}
break;
}

var G__30496 = cljs.core.next.call(null,seq__30434__$1);
var G__30497 = null;
var G__30498 = (0);
var G__30499 = (0);
seq__30434 = G__30496;
chunk__30435 = G__30497;
count__30436 = G__30498;
i__30437 = G__30499;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__30504_30508 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30505_30509 = null;
var count__30506_30510 = (0);
var i__30507_30511 = (0);
while(true){
if((i__30507_30511 < count__30506_30510)){
var ns_30512 = cljs.core._nth.call(null,chunk__30505_30509,i__30507_30511);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30512);

var G__30513 = seq__30504_30508;
var G__30514 = chunk__30505_30509;
var G__30515 = count__30506_30510;
var G__30516 = (i__30507_30511 + (1));
seq__30504_30508 = G__30513;
chunk__30505_30509 = G__30514;
count__30506_30510 = G__30515;
i__30507_30511 = G__30516;
continue;
} else {
var temp__4425__auto___30517 = cljs.core.seq.call(null,seq__30504_30508);
if(temp__4425__auto___30517){
var seq__30504_30518__$1 = temp__4425__auto___30517;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30504_30518__$1)){
var c__17629__auto___30519 = cljs.core.chunk_first.call(null,seq__30504_30518__$1);
var G__30520 = cljs.core.chunk_rest.call(null,seq__30504_30518__$1);
var G__30521 = c__17629__auto___30519;
var G__30522 = cljs.core.count.call(null,c__17629__auto___30519);
var G__30523 = (0);
seq__30504_30508 = G__30520;
chunk__30505_30509 = G__30521;
count__30506_30510 = G__30522;
i__30507_30511 = G__30523;
continue;
} else {
var ns_30524 = cljs.core.first.call(null,seq__30504_30518__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30524);

var G__30525 = cljs.core.next.call(null,seq__30504_30518__$1);
var G__30526 = null;
var G__30527 = (0);
var G__30528 = (0);
seq__30504_30508 = G__30525;
chunk__30505_30509 = G__30526;
count__30506_30510 = G__30527;
i__30507_30511 = G__30528;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16826__auto__ = goog.require__;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__30529__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30529 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30530__i = 0, G__30530__a = new Array(arguments.length -  0);
while (G__30530__i < G__30530__a.length) {G__30530__a[G__30530__i] = arguments[G__30530__i + 0]; ++G__30530__i;}
  args = new cljs.core.IndexedSeq(G__30530__a,0);
} 
return G__30529__delegate.call(this,args);};
G__30529.cljs$lang$maxFixedArity = 0;
G__30529.cljs$lang$applyTo = (function (arglist__30531){
var args = cljs.core.seq(arglist__30531);
return G__30529__delegate(args);
});
G__30529.cljs$core$IFn$_invoke$arity$variadic = G__30529__delegate;
return G__30529;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30533 = cljs.core._EQ_;
var expr__30534 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30533.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30534))){
var path_parts = ((function (pred__30533,expr__30534){
return (function (p1__30532_SHARP_){
return clojure.string.split.call(null,p1__30532_SHARP_,/[\/\\]/);
});})(pred__30533,expr__30534))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__30533,expr__30534){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30536){if((e30536 instanceof Error)){
var e = e30536;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30536;

}
}})());
});
;})(path_parts,sep,root,pred__30533,expr__30534))
} else {
if(cljs.core.truth_(pred__30533.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30534))){
return ((function (pred__30533,expr__30534){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30533,expr__30534){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30533,expr__30534))
);

return deferred.addErrback(((function (deferred,pred__30533,expr__30534){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30533,expr__30534))
);
});
;})(pred__30533,expr__30534))
} else {
return ((function (pred__30533,expr__30534){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30533,expr__30534))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30537,callback){
var map__30540 = p__30537;
var map__30540__$1 = ((((!((map__30540 == null)))?((((map__30540.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30540.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30540):map__30540);
var file_msg = map__30540__$1;
var request_url = cljs.core.get.call(null,map__30540__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30540,map__30540__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30540,map__30540__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__){
return (function (state_30564){
var state_val_30565 = (state_30564[(1)]);
if((state_val_30565 === (7))){
var inst_30560 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
var statearr_30566_30586 = state_30564__$1;
(statearr_30566_30586[(2)] = inst_30560);

(statearr_30566_30586[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (1))){
var state_30564__$1 = state_30564;
var statearr_30567_30587 = state_30564__$1;
(statearr_30567_30587[(2)] = null);

(statearr_30567_30587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (4))){
var inst_30544 = (state_30564[(7)]);
var inst_30544__$1 = (state_30564[(2)]);
var state_30564__$1 = (function (){var statearr_30568 = state_30564;
(statearr_30568[(7)] = inst_30544__$1);

return statearr_30568;
})();
if(cljs.core.truth_(inst_30544__$1)){
var statearr_30569_30588 = state_30564__$1;
(statearr_30569_30588[(1)] = (5));

} else {
var statearr_30570_30589 = state_30564__$1;
(statearr_30570_30589[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (6))){
var state_30564__$1 = state_30564;
var statearr_30571_30590 = state_30564__$1;
(statearr_30571_30590[(2)] = null);

(statearr_30571_30590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (3))){
var inst_30562 = (state_30564[(2)]);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30564__$1,inst_30562);
} else {
if((state_val_30565 === (2))){
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30564__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30565 === (11))){
var inst_30556 = (state_30564[(2)]);
var state_30564__$1 = (function (){var statearr_30572 = state_30564;
(statearr_30572[(8)] = inst_30556);

return statearr_30572;
})();
var statearr_30573_30591 = state_30564__$1;
(statearr_30573_30591[(2)] = null);

(statearr_30573_30591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (9))){
var inst_30550 = (state_30564[(9)]);
var inst_30548 = (state_30564[(10)]);
var inst_30552 = inst_30550.call(null,inst_30548);
var state_30564__$1 = state_30564;
var statearr_30574_30592 = state_30564__$1;
(statearr_30574_30592[(2)] = inst_30552);

(statearr_30574_30592[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (5))){
var inst_30544 = (state_30564[(7)]);
var inst_30546 = figwheel.client.file_reloading.blocking_load.call(null,inst_30544);
var state_30564__$1 = state_30564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30564__$1,(8),inst_30546);
} else {
if((state_val_30565 === (10))){
var inst_30548 = (state_30564[(10)]);
var inst_30554 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30548);
var state_30564__$1 = state_30564;
var statearr_30575_30593 = state_30564__$1;
(statearr_30575_30593[(2)] = inst_30554);

(statearr_30575_30593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30565 === (8))){
var inst_30544 = (state_30564[(7)]);
var inst_30550 = (state_30564[(9)]);
var inst_30548 = (state_30564[(2)]);
var inst_30549 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30550__$1 = cljs.core.get.call(null,inst_30549,inst_30544);
var state_30564__$1 = (function (){var statearr_30576 = state_30564;
(statearr_30576[(9)] = inst_30550__$1);

(statearr_30576[(10)] = inst_30548);

return statearr_30576;
})();
if(cljs.core.truth_(inst_30550__$1)){
var statearr_30577_30594 = state_30564__$1;
(statearr_30577_30594[(1)] = (9));

} else {
var statearr_30578_30595 = state_30564__$1;
(statearr_30578_30595[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18851__auto__))
;
return ((function (switch__18830__auto__,c__18851__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18831__auto__ = null;
var figwheel$client$file_reloading$state_machine__18831__auto____0 = (function (){
var statearr_30582 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30582[(0)] = figwheel$client$file_reloading$state_machine__18831__auto__);

(statearr_30582[(1)] = (1));

return statearr_30582;
});
var figwheel$client$file_reloading$state_machine__18831__auto____1 = (function (state_30564){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_30564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e30583){if((e30583 instanceof Object)){
var ex__18834__auto__ = e30583;
var statearr_30584_30596 = state_30564;
(statearr_30584_30596[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30583;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30597 = state_30564;
state_30564 = G__30597;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18831__auto__ = function(state_30564){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18831__auto____1.call(this,state_30564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18831__auto____0;
figwheel$client$file_reloading$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18831__auto____1;
return figwheel$client$file_reloading$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__))
})();
var state__18853__auto__ = (function (){var statearr_30585 = f__18852__auto__.call(null);
(statearr_30585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_30585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__))
);

return c__18851__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30598,callback){
var map__30601 = p__30598;
var map__30601__$1 = ((((!((map__30601 == null)))?((((map__30601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30601):map__30601);
var file_msg = map__30601__$1;
var namespace = cljs.core.get.call(null,map__30601__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30601,map__30601__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30601,map__30601__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30603){
var map__30606 = p__30603;
var map__30606__$1 = ((((!((map__30606 == null)))?((((map__30606.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30606.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30606):map__30606);
var file_msg = map__30606__$1;
var namespace = cljs.core.get.call(null,map__30606__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16814__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16814__auto__){
var or__16826__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
var or__16826__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16826__auto____$1)){
return or__16826__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16814__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30608,callback){
var map__30611 = p__30608;
var map__30611__$1 = ((((!((map__30611 == null)))?((((map__30611.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30611.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30611):map__30611);
var file_msg = map__30611__$1;
var request_url = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30611__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18851__auto___30699 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___30699,out){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___30699,out){
return (function (state_30681){
var state_val_30682 = (state_30681[(1)]);
if((state_val_30682 === (1))){
var inst_30659 = cljs.core.nth.call(null,files,(0),null);
var inst_30660 = cljs.core.nthnext.call(null,files,(1));
var inst_30661 = files;
var state_30681__$1 = (function (){var statearr_30683 = state_30681;
(statearr_30683[(7)] = inst_30661);

(statearr_30683[(8)] = inst_30659);

(statearr_30683[(9)] = inst_30660);

return statearr_30683;
})();
var statearr_30684_30700 = state_30681__$1;
(statearr_30684_30700[(2)] = null);

(statearr_30684_30700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (2))){
var inst_30661 = (state_30681[(7)]);
var inst_30664 = (state_30681[(10)]);
var inst_30664__$1 = cljs.core.nth.call(null,inst_30661,(0),null);
var inst_30665 = cljs.core.nthnext.call(null,inst_30661,(1));
var inst_30666 = (inst_30664__$1 == null);
var inst_30667 = cljs.core.not.call(null,inst_30666);
var state_30681__$1 = (function (){var statearr_30685 = state_30681;
(statearr_30685[(10)] = inst_30664__$1);

(statearr_30685[(11)] = inst_30665);

return statearr_30685;
})();
if(inst_30667){
var statearr_30686_30701 = state_30681__$1;
(statearr_30686_30701[(1)] = (4));

} else {
var statearr_30687_30702 = state_30681__$1;
(statearr_30687_30702[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (3))){
var inst_30679 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30681__$1,inst_30679);
} else {
if((state_val_30682 === (4))){
var inst_30664 = (state_30681[(10)]);
var inst_30669 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30664);
var state_30681__$1 = state_30681;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30681__$1,(7),inst_30669);
} else {
if((state_val_30682 === (5))){
var inst_30675 = cljs.core.async.close_BANG_.call(null,out);
var state_30681__$1 = state_30681;
var statearr_30688_30703 = state_30681__$1;
(statearr_30688_30703[(2)] = inst_30675);

(statearr_30688_30703[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (6))){
var inst_30677 = (state_30681[(2)]);
var state_30681__$1 = state_30681;
var statearr_30689_30704 = state_30681__$1;
(statearr_30689_30704[(2)] = inst_30677);

(statearr_30689_30704[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30682 === (7))){
var inst_30665 = (state_30681[(11)]);
var inst_30671 = (state_30681[(2)]);
var inst_30672 = cljs.core.async.put_BANG_.call(null,out,inst_30671);
var inst_30661 = inst_30665;
var state_30681__$1 = (function (){var statearr_30690 = state_30681;
(statearr_30690[(7)] = inst_30661);

(statearr_30690[(12)] = inst_30672);

return statearr_30690;
})();
var statearr_30691_30705 = state_30681__$1;
(statearr_30691_30705[(2)] = null);

(statearr_30691_30705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18851__auto___30699,out))
;
return ((function (switch__18830__auto__,c__18851__auto___30699,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____0 = (function (){
var statearr_30695 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30695[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__);

(statearr_30695[(1)] = (1));

return statearr_30695;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____1 = (function (state_30681){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_30681);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e30696){if((e30696 instanceof Object)){
var ex__18834__auto__ = e30696;
var statearr_30697_30706 = state_30681;
(statearr_30697_30706[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30681);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30696;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30707 = state_30681;
state_30681 = G__30707;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__ = function(state_30681){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____1.call(this,state_30681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___30699,out))
})();
var state__18853__auto__ = (function (){var statearr_30698 = f__18852__auto__.call(null);
(statearr_30698[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___30699);

return statearr_30698;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___30699,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30708,opts){
var map__30712 = p__30708;
var map__30712__$1 = ((((!((map__30712 == null)))?((((map__30712.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30712.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30712):map__30712);
var eval_body__$1 = cljs.core.get.call(null,map__30712__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30712__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16814__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16814__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16814__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e30714){var e = e30714;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__30715_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30715_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__30720){
var vec__30721 = p__30720;
var k = cljs.core.nth.call(null,vec__30721,(0),null);
var v = cljs.core.nth.call(null,vec__30721,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30722){
var vec__30723 = p__30722;
var k = cljs.core.nth.call(null,vec__30723,(0),null);
var v = cljs.core.nth.call(null,vec__30723,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30727,p__30728){
var map__30975 = p__30727;
var map__30975__$1 = ((((!((map__30975 == null)))?((((map__30975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30975):map__30975);
var opts = map__30975__$1;
var before_jsload = cljs.core.get.call(null,map__30975__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30975__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30975__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30976 = p__30728;
var map__30976__$1 = ((((!((map__30976 == null)))?((((map__30976.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30976.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30976):map__30976);
var msg = map__30976__$1;
var files = cljs.core.get.call(null,map__30976__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30976__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30976__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31129){
var state_val_31130 = (state_31129[(1)]);
if((state_val_31130 === (7))){
var inst_30992 = (state_31129[(7)]);
var inst_30990 = (state_31129[(8)]);
var inst_30991 = (state_31129[(9)]);
var inst_30993 = (state_31129[(10)]);
var inst_30998 = cljs.core._nth.call(null,inst_30991,inst_30993);
var inst_30999 = figwheel.client.file_reloading.eval_body.call(null,inst_30998,opts);
var inst_31000 = (inst_30993 + (1));
var tmp31131 = inst_30992;
var tmp31132 = inst_30990;
var tmp31133 = inst_30991;
var inst_30990__$1 = tmp31132;
var inst_30991__$1 = tmp31133;
var inst_30992__$1 = tmp31131;
var inst_30993__$1 = inst_31000;
var state_31129__$1 = (function (){var statearr_31134 = state_31129;
(statearr_31134[(7)] = inst_30992__$1);

(statearr_31134[(8)] = inst_30990__$1);

(statearr_31134[(9)] = inst_30991__$1);

(statearr_31134[(10)] = inst_30993__$1);

(statearr_31134[(11)] = inst_30999);

return statearr_31134;
})();
var statearr_31135_31221 = state_31129__$1;
(statearr_31135_31221[(2)] = null);

(statearr_31135_31221[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (20))){
var inst_31033 = (state_31129[(12)]);
var inst_31041 = figwheel.client.file_reloading.sort_files.call(null,inst_31033);
var state_31129__$1 = state_31129;
var statearr_31136_31222 = state_31129__$1;
(statearr_31136_31222[(2)] = inst_31041);

(statearr_31136_31222[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (27))){
var state_31129__$1 = state_31129;
var statearr_31137_31223 = state_31129__$1;
(statearr_31137_31223[(2)] = null);

(statearr_31137_31223[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (1))){
var inst_30982 = (state_31129[(13)]);
var inst_30979 = before_jsload.call(null,files);
var inst_30980 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30981 = (function (){return ((function (inst_30982,inst_30979,inst_30980,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30724_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30724_SHARP_);
});
;})(inst_30982,inst_30979,inst_30980,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30982__$1 = cljs.core.filter.call(null,inst_30981,files);
var inst_30983 = cljs.core.not_empty.call(null,inst_30982__$1);
var state_31129__$1 = (function (){var statearr_31138 = state_31129;
(statearr_31138[(14)] = inst_30980);

(statearr_31138[(13)] = inst_30982__$1);

(statearr_31138[(15)] = inst_30979);

return statearr_31138;
})();
if(cljs.core.truth_(inst_30983)){
var statearr_31139_31224 = state_31129__$1;
(statearr_31139_31224[(1)] = (2));

} else {
var statearr_31140_31225 = state_31129__$1;
(statearr_31140_31225[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (24))){
var state_31129__$1 = state_31129;
var statearr_31141_31226 = state_31129__$1;
(statearr_31141_31226[(2)] = null);

(statearr_31141_31226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (39))){
var inst_31083 = (state_31129[(16)]);
var state_31129__$1 = state_31129;
var statearr_31142_31227 = state_31129__$1;
(statearr_31142_31227[(2)] = inst_31083);

(statearr_31142_31227[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (46))){
var inst_31124 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31143_31228 = state_31129__$1;
(statearr_31143_31228[(2)] = inst_31124);

(statearr_31143_31228[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (4))){
var inst_31027 = (state_31129[(2)]);
var inst_31028 = cljs.core.List.EMPTY;
var inst_31029 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31028);
var inst_31030 = (function (){return ((function (inst_31027,inst_31028,inst_31029,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30725_SHARP_){
var and__16814__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30725_SHARP_);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30725_SHARP_));
} else {
return and__16814__auto__;
}
});
;})(inst_31027,inst_31028,inst_31029,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31031 = cljs.core.filter.call(null,inst_31030,files);
var inst_31032 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31033 = cljs.core.concat.call(null,inst_31031,inst_31032);
var state_31129__$1 = (function (){var statearr_31144 = state_31129;
(statearr_31144[(12)] = inst_31033);

(statearr_31144[(17)] = inst_31029);

(statearr_31144[(18)] = inst_31027);

return statearr_31144;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31145_31229 = state_31129__$1;
(statearr_31145_31229[(1)] = (16));

} else {
var statearr_31146_31230 = state_31129__$1;
(statearr_31146_31230[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (15))){
var inst_31017 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31147_31231 = state_31129__$1;
(statearr_31147_31231[(2)] = inst_31017);

(statearr_31147_31231[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (21))){
var inst_31043 = (state_31129[(19)]);
var inst_31043__$1 = (state_31129[(2)]);
var inst_31044 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31043__$1);
var state_31129__$1 = (function (){var statearr_31148 = state_31129;
(statearr_31148[(19)] = inst_31043__$1);

return statearr_31148;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31129__$1,(22),inst_31044);
} else {
if((state_val_31130 === (31))){
var inst_31127 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31129__$1,inst_31127);
} else {
if((state_val_31130 === (32))){
var inst_31083 = (state_31129[(16)]);
var inst_31088 = inst_31083.cljs$lang$protocol_mask$partition0$;
var inst_31089 = (inst_31088 & (64));
var inst_31090 = inst_31083.cljs$core$ISeq$;
var inst_31091 = (inst_31089) || (inst_31090);
var state_31129__$1 = state_31129;
if(cljs.core.truth_(inst_31091)){
var statearr_31149_31232 = state_31129__$1;
(statearr_31149_31232[(1)] = (35));

} else {
var statearr_31150_31233 = state_31129__$1;
(statearr_31150_31233[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (40))){
var inst_31104 = (state_31129[(20)]);
var inst_31103 = (state_31129[(2)]);
var inst_31104__$1 = cljs.core.get.call(null,inst_31103,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31105 = cljs.core.get.call(null,inst_31103,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31106 = cljs.core.not_empty.call(null,inst_31104__$1);
var state_31129__$1 = (function (){var statearr_31151 = state_31129;
(statearr_31151[(20)] = inst_31104__$1);

(statearr_31151[(21)] = inst_31105);

return statearr_31151;
})();
if(cljs.core.truth_(inst_31106)){
var statearr_31152_31234 = state_31129__$1;
(statearr_31152_31234[(1)] = (41));

} else {
var statearr_31153_31235 = state_31129__$1;
(statearr_31153_31235[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (33))){
var state_31129__$1 = state_31129;
var statearr_31154_31236 = state_31129__$1;
(statearr_31154_31236[(2)] = false);

(statearr_31154_31236[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (13))){
var inst_31003 = (state_31129[(22)]);
var inst_31007 = cljs.core.chunk_first.call(null,inst_31003);
var inst_31008 = cljs.core.chunk_rest.call(null,inst_31003);
var inst_31009 = cljs.core.count.call(null,inst_31007);
var inst_30990 = inst_31008;
var inst_30991 = inst_31007;
var inst_30992 = inst_31009;
var inst_30993 = (0);
var state_31129__$1 = (function (){var statearr_31155 = state_31129;
(statearr_31155[(7)] = inst_30992);

(statearr_31155[(8)] = inst_30990);

(statearr_31155[(9)] = inst_30991);

(statearr_31155[(10)] = inst_30993);

return statearr_31155;
})();
var statearr_31156_31237 = state_31129__$1;
(statearr_31156_31237[(2)] = null);

(statearr_31156_31237[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (22))){
var inst_31046 = (state_31129[(23)]);
var inst_31043 = (state_31129[(19)]);
var inst_31051 = (state_31129[(24)]);
var inst_31047 = (state_31129[(25)]);
var inst_31046__$1 = (state_31129[(2)]);
var inst_31047__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31046__$1);
var inst_31048 = (function (){var all_files = inst_31043;
var res_SINGLEQUOTE_ = inst_31046__$1;
var res = inst_31047__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31046,inst_31043,inst_31051,inst_31047,inst_31046__$1,inst_31047__$1,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30726_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30726_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31046,inst_31043,inst_31051,inst_31047,inst_31046__$1,inst_31047__$1,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31049 = cljs.core.filter.call(null,inst_31048,inst_31046__$1);
var inst_31050 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31051__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31050);
var inst_31052 = cljs.core.not_empty.call(null,inst_31051__$1);
var state_31129__$1 = (function (){var statearr_31157 = state_31129;
(statearr_31157[(23)] = inst_31046__$1);

(statearr_31157[(24)] = inst_31051__$1);

(statearr_31157[(25)] = inst_31047__$1);

(statearr_31157[(26)] = inst_31049);

return statearr_31157;
})();
if(cljs.core.truth_(inst_31052)){
var statearr_31158_31238 = state_31129__$1;
(statearr_31158_31238[(1)] = (23));

} else {
var statearr_31159_31239 = state_31129__$1;
(statearr_31159_31239[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (36))){
var state_31129__$1 = state_31129;
var statearr_31160_31240 = state_31129__$1;
(statearr_31160_31240[(2)] = false);

(statearr_31160_31240[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (41))){
var inst_31104 = (state_31129[(20)]);
var inst_31108 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31109 = cljs.core.map.call(null,inst_31108,inst_31104);
var inst_31110 = cljs.core.pr_str.call(null,inst_31109);
var inst_31111 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31110)].join('');
var inst_31112 = figwheel.client.utils.log.call(null,inst_31111);
var state_31129__$1 = state_31129;
var statearr_31161_31241 = state_31129__$1;
(statearr_31161_31241[(2)] = inst_31112);

(statearr_31161_31241[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (43))){
var inst_31105 = (state_31129[(21)]);
var inst_31115 = (state_31129[(2)]);
var inst_31116 = cljs.core.not_empty.call(null,inst_31105);
var state_31129__$1 = (function (){var statearr_31162 = state_31129;
(statearr_31162[(27)] = inst_31115);

return statearr_31162;
})();
if(cljs.core.truth_(inst_31116)){
var statearr_31163_31242 = state_31129__$1;
(statearr_31163_31242[(1)] = (44));

} else {
var statearr_31164_31243 = state_31129__$1;
(statearr_31164_31243[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (29))){
var inst_31046 = (state_31129[(23)]);
var inst_31043 = (state_31129[(19)]);
var inst_31083 = (state_31129[(16)]);
var inst_31051 = (state_31129[(24)]);
var inst_31047 = (state_31129[(25)]);
var inst_31049 = (state_31129[(26)]);
var inst_31079 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31082 = (function (){var all_files = inst_31043;
var res_SINGLEQUOTE_ = inst_31046;
var res = inst_31047;
var files_not_loaded = inst_31049;
var dependencies_that_loaded = inst_31051;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31046,inst_31043,inst_31083,inst_31051,inst_31047,inst_31049,inst_31079,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31081){
var map__31165 = p__31081;
var map__31165__$1 = ((((!((map__31165 == null)))?((((map__31165.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31165.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31165):map__31165);
var namespace = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31046,inst_31043,inst_31083,inst_31051,inst_31047,inst_31049,inst_31079,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31083__$1 = cljs.core.group_by.call(null,inst_31082,inst_31049);
var inst_31085 = (inst_31083__$1 == null);
var inst_31086 = cljs.core.not.call(null,inst_31085);
var state_31129__$1 = (function (){var statearr_31167 = state_31129;
(statearr_31167[(16)] = inst_31083__$1);

(statearr_31167[(28)] = inst_31079);

return statearr_31167;
})();
if(inst_31086){
var statearr_31168_31244 = state_31129__$1;
(statearr_31168_31244[(1)] = (32));

} else {
var statearr_31169_31245 = state_31129__$1;
(statearr_31169_31245[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (44))){
var inst_31105 = (state_31129[(21)]);
var inst_31118 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31105);
var inst_31119 = cljs.core.pr_str.call(null,inst_31118);
var inst_31120 = [cljs.core.str("not required: "),cljs.core.str(inst_31119)].join('');
var inst_31121 = figwheel.client.utils.log.call(null,inst_31120);
var state_31129__$1 = state_31129;
var statearr_31170_31246 = state_31129__$1;
(statearr_31170_31246[(2)] = inst_31121);

(statearr_31170_31246[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (6))){
var inst_31024 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31171_31247 = state_31129__$1;
(statearr_31171_31247[(2)] = inst_31024);

(statearr_31171_31247[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (28))){
var inst_31049 = (state_31129[(26)]);
var inst_31076 = (state_31129[(2)]);
var inst_31077 = cljs.core.not_empty.call(null,inst_31049);
var state_31129__$1 = (function (){var statearr_31172 = state_31129;
(statearr_31172[(29)] = inst_31076);

return statearr_31172;
})();
if(cljs.core.truth_(inst_31077)){
var statearr_31173_31248 = state_31129__$1;
(statearr_31173_31248[(1)] = (29));

} else {
var statearr_31174_31249 = state_31129__$1;
(statearr_31174_31249[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (25))){
var inst_31047 = (state_31129[(25)]);
var inst_31063 = (state_31129[(2)]);
var inst_31064 = cljs.core.not_empty.call(null,inst_31047);
var state_31129__$1 = (function (){var statearr_31175 = state_31129;
(statearr_31175[(30)] = inst_31063);

return statearr_31175;
})();
if(cljs.core.truth_(inst_31064)){
var statearr_31176_31250 = state_31129__$1;
(statearr_31176_31250[(1)] = (26));

} else {
var statearr_31177_31251 = state_31129__$1;
(statearr_31177_31251[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (34))){
var inst_31098 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
if(cljs.core.truth_(inst_31098)){
var statearr_31178_31252 = state_31129__$1;
(statearr_31178_31252[(1)] = (38));

} else {
var statearr_31179_31253 = state_31129__$1;
(statearr_31179_31253[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (17))){
var state_31129__$1 = state_31129;
var statearr_31180_31254 = state_31129__$1;
(statearr_31180_31254[(2)] = recompile_dependents);

(statearr_31180_31254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (3))){
var state_31129__$1 = state_31129;
var statearr_31181_31255 = state_31129__$1;
(statearr_31181_31255[(2)] = null);

(statearr_31181_31255[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (12))){
var inst_31020 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31182_31256 = state_31129__$1;
(statearr_31182_31256[(2)] = inst_31020);

(statearr_31182_31256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (2))){
var inst_30982 = (state_31129[(13)]);
var inst_30989 = cljs.core.seq.call(null,inst_30982);
var inst_30990 = inst_30989;
var inst_30991 = null;
var inst_30992 = (0);
var inst_30993 = (0);
var state_31129__$1 = (function (){var statearr_31183 = state_31129;
(statearr_31183[(7)] = inst_30992);

(statearr_31183[(8)] = inst_30990);

(statearr_31183[(9)] = inst_30991);

(statearr_31183[(10)] = inst_30993);

return statearr_31183;
})();
var statearr_31184_31257 = state_31129__$1;
(statearr_31184_31257[(2)] = null);

(statearr_31184_31257[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (23))){
var inst_31046 = (state_31129[(23)]);
var inst_31043 = (state_31129[(19)]);
var inst_31051 = (state_31129[(24)]);
var inst_31047 = (state_31129[(25)]);
var inst_31049 = (state_31129[(26)]);
var inst_31054 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31056 = (function (){var all_files = inst_31043;
var res_SINGLEQUOTE_ = inst_31046;
var res = inst_31047;
var files_not_loaded = inst_31049;
var dependencies_that_loaded = inst_31051;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31046,inst_31043,inst_31051,inst_31047,inst_31049,inst_31054,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31055){
var map__31185 = p__31055;
var map__31185__$1 = ((((!((map__31185 == null)))?((((map__31185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31185):map__31185);
var request_url = cljs.core.get.call(null,map__31185__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31046,inst_31043,inst_31051,inst_31047,inst_31049,inst_31054,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31057 = cljs.core.reverse.call(null,inst_31051);
var inst_31058 = cljs.core.map.call(null,inst_31056,inst_31057);
var inst_31059 = cljs.core.pr_str.call(null,inst_31058);
var inst_31060 = figwheel.client.utils.log.call(null,inst_31059);
var state_31129__$1 = (function (){var statearr_31187 = state_31129;
(statearr_31187[(31)] = inst_31054);

return statearr_31187;
})();
var statearr_31188_31258 = state_31129__$1;
(statearr_31188_31258[(2)] = inst_31060);

(statearr_31188_31258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (35))){
var state_31129__$1 = state_31129;
var statearr_31189_31259 = state_31129__$1;
(statearr_31189_31259[(2)] = true);

(statearr_31189_31259[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (19))){
var inst_31033 = (state_31129[(12)]);
var inst_31039 = figwheel.client.file_reloading.expand_files.call(null,inst_31033);
var state_31129__$1 = state_31129;
var statearr_31190_31260 = state_31129__$1;
(statearr_31190_31260[(2)] = inst_31039);

(statearr_31190_31260[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (11))){
var state_31129__$1 = state_31129;
var statearr_31191_31261 = state_31129__$1;
(statearr_31191_31261[(2)] = null);

(statearr_31191_31261[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (9))){
var inst_31022 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31192_31262 = state_31129__$1;
(statearr_31192_31262[(2)] = inst_31022);

(statearr_31192_31262[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (5))){
var inst_30992 = (state_31129[(7)]);
var inst_30993 = (state_31129[(10)]);
var inst_30995 = (inst_30993 < inst_30992);
var inst_30996 = inst_30995;
var state_31129__$1 = state_31129;
if(cljs.core.truth_(inst_30996)){
var statearr_31193_31263 = state_31129__$1;
(statearr_31193_31263[(1)] = (7));

} else {
var statearr_31194_31264 = state_31129__$1;
(statearr_31194_31264[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (14))){
var inst_31003 = (state_31129[(22)]);
var inst_31012 = cljs.core.first.call(null,inst_31003);
var inst_31013 = figwheel.client.file_reloading.eval_body.call(null,inst_31012,opts);
var inst_31014 = cljs.core.next.call(null,inst_31003);
var inst_30990 = inst_31014;
var inst_30991 = null;
var inst_30992 = (0);
var inst_30993 = (0);
var state_31129__$1 = (function (){var statearr_31195 = state_31129;
(statearr_31195[(7)] = inst_30992);

(statearr_31195[(8)] = inst_30990);

(statearr_31195[(32)] = inst_31013);

(statearr_31195[(9)] = inst_30991);

(statearr_31195[(10)] = inst_30993);

return statearr_31195;
})();
var statearr_31196_31265 = state_31129__$1;
(statearr_31196_31265[(2)] = null);

(statearr_31196_31265[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (45))){
var state_31129__$1 = state_31129;
var statearr_31197_31266 = state_31129__$1;
(statearr_31197_31266[(2)] = null);

(statearr_31197_31266[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (26))){
var inst_31046 = (state_31129[(23)]);
var inst_31043 = (state_31129[(19)]);
var inst_31051 = (state_31129[(24)]);
var inst_31047 = (state_31129[(25)]);
var inst_31049 = (state_31129[(26)]);
var inst_31066 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31068 = (function (){var all_files = inst_31043;
var res_SINGLEQUOTE_ = inst_31046;
var res = inst_31047;
var files_not_loaded = inst_31049;
var dependencies_that_loaded = inst_31051;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31046,inst_31043,inst_31051,inst_31047,inst_31049,inst_31066,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31067){
var map__31198 = p__31067;
var map__31198__$1 = ((((!((map__31198 == null)))?((((map__31198.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31198.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31198):map__31198);
var namespace = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31198__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31046,inst_31043,inst_31051,inst_31047,inst_31049,inst_31066,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31069 = cljs.core.map.call(null,inst_31068,inst_31047);
var inst_31070 = cljs.core.pr_str.call(null,inst_31069);
var inst_31071 = figwheel.client.utils.log.call(null,inst_31070);
var inst_31072 = (function (){var all_files = inst_31043;
var res_SINGLEQUOTE_ = inst_31046;
var res = inst_31047;
var files_not_loaded = inst_31049;
var dependencies_that_loaded = inst_31051;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31046,inst_31043,inst_31051,inst_31047,inst_31049,inst_31066,inst_31068,inst_31069,inst_31070,inst_31071,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31046,inst_31043,inst_31051,inst_31047,inst_31049,inst_31066,inst_31068,inst_31069,inst_31070,inst_31071,state_val_31130,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31073 = setTimeout(inst_31072,(10));
var state_31129__$1 = (function (){var statearr_31200 = state_31129;
(statearr_31200[(33)] = inst_31071);

(statearr_31200[(34)] = inst_31066);

return statearr_31200;
})();
var statearr_31201_31267 = state_31129__$1;
(statearr_31201_31267[(2)] = inst_31073);

(statearr_31201_31267[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (16))){
var state_31129__$1 = state_31129;
var statearr_31202_31268 = state_31129__$1;
(statearr_31202_31268[(2)] = reload_dependents);

(statearr_31202_31268[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (38))){
var inst_31083 = (state_31129[(16)]);
var inst_31100 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31083);
var state_31129__$1 = state_31129;
var statearr_31203_31269 = state_31129__$1;
(statearr_31203_31269[(2)] = inst_31100);

(statearr_31203_31269[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (30))){
var state_31129__$1 = state_31129;
var statearr_31204_31270 = state_31129__$1;
(statearr_31204_31270[(2)] = null);

(statearr_31204_31270[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (10))){
var inst_31003 = (state_31129[(22)]);
var inst_31005 = cljs.core.chunked_seq_QMARK_.call(null,inst_31003);
var state_31129__$1 = state_31129;
if(inst_31005){
var statearr_31205_31271 = state_31129__$1;
(statearr_31205_31271[(1)] = (13));

} else {
var statearr_31206_31272 = state_31129__$1;
(statearr_31206_31272[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (18))){
var inst_31037 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
if(cljs.core.truth_(inst_31037)){
var statearr_31207_31273 = state_31129__$1;
(statearr_31207_31273[(1)] = (19));

} else {
var statearr_31208_31274 = state_31129__$1;
(statearr_31208_31274[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (42))){
var state_31129__$1 = state_31129;
var statearr_31209_31275 = state_31129__$1;
(statearr_31209_31275[(2)] = null);

(statearr_31209_31275[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (37))){
var inst_31095 = (state_31129[(2)]);
var state_31129__$1 = state_31129;
var statearr_31210_31276 = state_31129__$1;
(statearr_31210_31276[(2)] = inst_31095);

(statearr_31210_31276[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31130 === (8))){
var inst_30990 = (state_31129[(8)]);
var inst_31003 = (state_31129[(22)]);
var inst_31003__$1 = cljs.core.seq.call(null,inst_30990);
var state_31129__$1 = (function (){var statearr_31211 = state_31129;
(statearr_31211[(22)] = inst_31003__$1);

return statearr_31211;
})();
if(inst_31003__$1){
var statearr_31212_31277 = state_31129__$1;
(statearr_31212_31277[(1)] = (10));

} else {
var statearr_31213_31278 = state_31129__$1;
(statearr_31213_31278[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18830__auto__,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____0 = (function (){
var statearr_31217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31217[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__);

(statearr_31217[(1)] = (1));

return statearr_31217;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____1 = (function (state_31129){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_31129);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e31218){if((e31218 instanceof Object)){
var ex__18834__auto__ = e31218;
var statearr_31219_31279 = state_31129;
(statearr_31219_31279[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31129);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31280 = state_31129;
state_31129 = G__31280;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__ = function(state_31129){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____1.call(this,state_31129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18853__auto__ = (function (){var statearr_31220 = f__18852__auto__.call(null);
(statearr_31220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_31220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__,map__30975,map__30975__$1,opts,before_jsload,on_jsload,reload_dependents,map__30976,map__30976__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18851__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31283,link){
var map__31286 = p__31283;
var map__31286__$1 = ((((!((map__31286 == null)))?((((map__31286.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31286.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31286):map__31286);
var file = cljs.core.get.call(null,map__31286__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31286,map__31286__$1,file){
return (function (p1__31281_SHARP_,p2__31282_SHARP_){
if(cljs.core._EQ_.call(null,p1__31281_SHARP_,p2__31282_SHARP_)){
return p1__31281_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31286,map__31286__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31292){
var map__31293 = p__31292;
var map__31293__$1 = ((((!((map__31293 == null)))?((((map__31293.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31293.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31293):map__31293);
var match_length = cljs.core.get.call(null,map__31293__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31293__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31288_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31288_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args31295 = [];
var len__17884__auto___31298 = arguments.length;
var i__17885__auto___31299 = (0);
while(true){
if((i__17885__auto___31299 < len__17884__auto___31298)){
args31295.push((arguments[i__17885__auto___31299]));

var G__31300 = (i__17885__auto___31299 + (1));
i__17885__auto___31299 = G__31300;
continue;
} else {
}
break;
}

var G__31297 = args31295.length;
switch (G__31297) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31295.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31302_SHARP_,p2__31303_SHARP_){
return cljs.core.assoc.call(null,p1__31302_SHARP_,cljs.core.get.call(null,p2__31303_SHARP_,key),p2__31303_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31304){
var map__31307 = p__31304;
var map__31307__$1 = ((((!((map__31307 == null)))?((((map__31307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31307):map__31307);
var f_data = map__31307__$1;
var file = cljs.core.get.call(null,map__31307__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31309,files_msg){
var map__31316 = p__31309;
var map__31316__$1 = ((((!((map__31316 == null)))?((((map__31316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31316):map__31316);
var opts = map__31316__$1;
var on_cssload = cljs.core.get.call(null,map__31316__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31318_31322 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31319_31323 = null;
var count__31320_31324 = (0);
var i__31321_31325 = (0);
while(true){
if((i__31321_31325 < count__31320_31324)){
var f_31326 = cljs.core._nth.call(null,chunk__31319_31323,i__31321_31325);
figwheel.client.file_reloading.reload_css_file.call(null,f_31326);

var G__31327 = seq__31318_31322;
var G__31328 = chunk__31319_31323;
var G__31329 = count__31320_31324;
var G__31330 = (i__31321_31325 + (1));
seq__31318_31322 = G__31327;
chunk__31319_31323 = G__31328;
count__31320_31324 = G__31329;
i__31321_31325 = G__31330;
continue;
} else {
var temp__4425__auto___31331 = cljs.core.seq.call(null,seq__31318_31322);
if(temp__4425__auto___31331){
var seq__31318_31332__$1 = temp__4425__auto___31331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31318_31332__$1)){
var c__17629__auto___31333 = cljs.core.chunk_first.call(null,seq__31318_31332__$1);
var G__31334 = cljs.core.chunk_rest.call(null,seq__31318_31332__$1);
var G__31335 = c__17629__auto___31333;
var G__31336 = cljs.core.count.call(null,c__17629__auto___31333);
var G__31337 = (0);
seq__31318_31322 = G__31334;
chunk__31319_31323 = G__31335;
count__31320_31324 = G__31336;
i__31321_31325 = G__31337;
continue;
} else {
var f_31338 = cljs.core.first.call(null,seq__31318_31332__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31338);

var G__31339 = cljs.core.next.call(null,seq__31318_31332__$1);
var G__31340 = null;
var G__31341 = (0);
var G__31342 = (0);
seq__31318_31322 = G__31339;
chunk__31319_31323 = G__31340;
count__31320_31324 = G__31341;
i__31321_31325 = G__31342;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31316,map__31316__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31316,map__31316__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1451996464739