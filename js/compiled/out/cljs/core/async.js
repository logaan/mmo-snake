// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27518 = [];
var len__17884__auto___27524 = arguments.length;
var i__17885__auto___27525 = (0);
while(true){
if((i__17885__auto___27525 < len__17884__auto___27524)){
args27518.push((arguments[i__17885__auto___27525]));

var G__27526 = (i__17885__auto___27525 + (1));
i__17885__auto___27525 = G__27526;
continue;
} else {
}
break;
}

var G__27520 = args27518.length;
switch (G__27520) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27518.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27521 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27521 = (function (f,blockable,meta27522){
this.f = f;
this.blockable = blockable;
this.meta27522 = meta27522;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27523,meta27522__$1){
var self__ = this;
var _27523__$1 = this;
return (new cljs.core.async.t_cljs$core$async27521(self__.f,self__.blockable,meta27522__$1));
});

cljs.core.async.t_cljs$core$async27521.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27523){
var self__ = this;
var _27523__$1 = this;
return self__.meta27522;
});

cljs.core.async.t_cljs$core$async27521.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27521.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27521.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27521.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27521.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27522","meta27522",1159643543,null)], null);
});

cljs.core.async.t_cljs$core$async27521.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27521.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27521";

cljs.core.async.t_cljs$core$async27521.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async27521");
});

cljs.core.async.__GT_t_cljs$core$async27521 = (function cljs$core$async$__GT_t_cljs$core$async27521(f__$1,blockable__$1,meta27522){
return (new cljs.core.async.t_cljs$core$async27521(f__$1,blockable__$1,meta27522));
});

}

return (new cljs.core.async.t_cljs$core$async27521(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27530 = [];
var len__17884__auto___27533 = arguments.length;
var i__17885__auto___27534 = (0);
while(true){
if((i__17885__auto___27534 < len__17884__auto___27533)){
args27530.push((arguments[i__17885__auto___27534]));

var G__27535 = (i__17885__auto___27534 + (1));
i__17885__auto___27534 = G__27535;
continue;
} else {
}
break;
}

var G__27532 = args27530.length;
switch (G__27532) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27530.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27537 = [];
var len__17884__auto___27540 = arguments.length;
var i__17885__auto___27541 = (0);
while(true){
if((i__17885__auto___27541 < len__17884__auto___27540)){
args27537.push((arguments[i__17885__auto___27541]));

var G__27542 = (i__17885__auto___27541 + (1));
i__17885__auto___27541 = G__27542;
continue;
} else {
}
break;
}

var G__27539 = args27537.length;
switch (G__27539) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27537.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27544 = [];
var len__17884__auto___27547 = arguments.length;
var i__17885__auto___27548 = (0);
while(true){
if((i__17885__auto___27548 < len__17884__auto___27547)){
args27544.push((arguments[i__17885__auto___27548]));

var G__27549 = (i__17885__auto___27548 + (1));
i__17885__auto___27548 = G__27549;
continue;
} else {
}
break;
}

var G__27546 = args27544.length;
switch (G__27546) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27544.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27551 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27551);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27551,ret){
return (function (){
return fn1.call(null,val_27551);
});})(val_27551,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27552 = [];
var len__17884__auto___27555 = arguments.length;
var i__17885__auto___27556 = (0);
while(true){
if((i__17885__auto___27556 < len__17884__auto___27555)){
args27552.push((arguments[i__17885__auto___27556]));

var G__27557 = (i__17885__auto___27556 + (1));
i__17885__auto___27556 = G__27557;
continue;
} else {
}
break;
}

var G__27554 = args27552.length;
switch (G__27554) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27552.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17729__auto___27559 = n;
var x_27560 = (0);
while(true){
if((x_27560 < n__17729__auto___27559)){
(a[x_27560] = (0));

var G__27561 = (x_27560 + (1));
x_27560 = G__27561;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27562 = (i + (1));
i = G__27562;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27566 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27566 = (function (alt_flag,flag,meta27567){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27567 = meta27567;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27568,meta27567__$1){
var self__ = this;
var _27568__$1 = this;
return (new cljs.core.async.t_cljs$core$async27566(self__.alt_flag,self__.flag,meta27567__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27568){
var self__ = this;
var _27568__$1 = this;
return self__.meta27567;
});})(flag))
;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27566.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27567","meta27567",-1670196783,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27566.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27566.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27566";

cljs.core.async.t_cljs$core$async27566.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async27566");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27566 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27566(alt_flag__$1,flag__$1,meta27567){
return (new cljs.core.async.t_cljs$core$async27566(alt_flag__$1,flag__$1,meta27567));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27566(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27572 = (function (alt_handler,flag,cb,meta27573){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27573 = meta27573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27574,meta27573__$1){
var self__ = this;
var _27574__$1 = this;
return (new cljs.core.async.t_cljs$core$async27572(self__.alt_handler,self__.flag,self__.cb,meta27573__$1));
});

cljs.core.async.t_cljs$core$async27572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27574){
var self__ = this;
var _27574__$1 = this;
return self__.meta27573;
});

cljs.core.async.t_cljs$core$async27572.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27573","meta27573",1498389224,null)], null);
});

cljs.core.async.t_cljs$core$async27572.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27572";

cljs.core.async.t_cljs$core$async27572.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async27572");
});

cljs.core.async.__GT_t_cljs$core$async27572 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27572(alt_handler__$1,flag__$1,cb__$1,meta27573){
return (new cljs.core.async.t_cljs$core$async27572(alt_handler__$1,flag__$1,cb__$1,meta27573));
});

}

return (new cljs.core.async.t_cljs$core$async27572(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27575_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27575_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27576_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27576_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16826__auto__ = wport;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27577 = (i + (1));
i = G__27577;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16826__auto__ = ret;
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16814__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16814__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16814__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___27583 = arguments.length;
var i__17885__auto___27584 = (0);
while(true){
if((i__17885__auto___27584 < len__17884__auto___27583)){
args__17891__auto__.push((arguments[i__17885__auto___27584]));

var G__27585 = (i__17885__auto___27584 + (1));
i__17885__auto___27584 = G__27585;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((1) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17892__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27580){
var map__27581 = p__27580;
var map__27581__$1 = ((((!((map__27581 == null)))?((((map__27581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27581):map__27581);
var opts = map__27581__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27578){
var G__27579 = cljs.core.first.call(null,seq27578);
var seq27578__$1 = cljs.core.next.call(null,seq27578);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27579,seq27578__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27586 = [];
var len__17884__auto___27636 = arguments.length;
var i__17885__auto___27637 = (0);
while(true){
if((i__17885__auto___27637 < len__17884__auto___27636)){
args27586.push((arguments[i__17885__auto___27637]));

var G__27638 = (i__17885__auto___27637 + (1));
i__17885__auto___27637 = G__27638;
continue;
} else {
}
break;
}

var G__27588 = args27586.length;
switch (G__27588) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27586.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18851__auto___27640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___27640){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___27640){
return (function (state_27612){
var state_val_27613 = (state_27612[(1)]);
if((state_val_27613 === (7))){
var inst_27608 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27614_27641 = state_27612__$1;
(statearr_27614_27641[(2)] = inst_27608);

(statearr_27614_27641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (1))){
var state_27612__$1 = state_27612;
var statearr_27615_27642 = state_27612__$1;
(statearr_27615_27642[(2)] = null);

(statearr_27615_27642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (4))){
var inst_27591 = (state_27612[(7)]);
var inst_27591__$1 = (state_27612[(2)]);
var inst_27592 = (inst_27591__$1 == null);
var state_27612__$1 = (function (){var statearr_27616 = state_27612;
(statearr_27616[(7)] = inst_27591__$1);

return statearr_27616;
})();
if(cljs.core.truth_(inst_27592)){
var statearr_27617_27643 = state_27612__$1;
(statearr_27617_27643[(1)] = (5));

} else {
var statearr_27618_27644 = state_27612__$1;
(statearr_27618_27644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (13))){
var state_27612__$1 = state_27612;
var statearr_27619_27645 = state_27612__$1;
(statearr_27619_27645[(2)] = null);

(statearr_27619_27645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (6))){
var inst_27591 = (state_27612[(7)]);
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27612__$1,(11),to,inst_27591);
} else {
if((state_val_27613 === (3))){
var inst_27610 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27612__$1,inst_27610);
} else {
if((state_val_27613 === (12))){
var state_27612__$1 = state_27612;
var statearr_27620_27646 = state_27612__$1;
(statearr_27620_27646[(2)] = null);

(statearr_27620_27646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (2))){
var state_27612__$1 = state_27612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27612__$1,(4),from);
} else {
if((state_val_27613 === (11))){
var inst_27601 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
if(cljs.core.truth_(inst_27601)){
var statearr_27621_27647 = state_27612__$1;
(statearr_27621_27647[(1)] = (12));

} else {
var statearr_27622_27648 = state_27612__$1;
(statearr_27622_27648[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (9))){
var state_27612__$1 = state_27612;
var statearr_27623_27649 = state_27612__$1;
(statearr_27623_27649[(2)] = null);

(statearr_27623_27649[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (5))){
var state_27612__$1 = state_27612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27624_27650 = state_27612__$1;
(statearr_27624_27650[(1)] = (8));

} else {
var statearr_27625_27651 = state_27612__$1;
(statearr_27625_27651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (14))){
var inst_27606 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27626_27652 = state_27612__$1;
(statearr_27626_27652[(2)] = inst_27606);

(statearr_27626_27652[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (10))){
var inst_27598 = (state_27612[(2)]);
var state_27612__$1 = state_27612;
var statearr_27627_27653 = state_27612__$1;
(statearr_27627_27653[(2)] = inst_27598);

(statearr_27627_27653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27613 === (8))){
var inst_27595 = cljs.core.async.close_BANG_.call(null,to);
var state_27612__$1 = state_27612;
var statearr_27628_27654 = state_27612__$1;
(statearr_27628_27654[(2)] = inst_27595);

(statearr_27628_27654[(1)] = (10));


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
});})(c__18851__auto___27640))
;
return ((function (switch__18830__auto__,c__18851__auto___27640){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_27632 = [null,null,null,null,null,null,null,null];
(statearr_27632[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_27632[(1)] = (1));

return statearr_27632;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_27612){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_27612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e27633){if((e27633 instanceof Object)){
var ex__18834__auto__ = e27633;
var statearr_27634_27655 = state_27612;
(statearr_27634_27655[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27656 = state_27612;
state_27612 = G__27656;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_27612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_27612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___27640))
})();
var state__18853__auto__ = (function (){var statearr_27635 = f__18852__auto__.call(null);
(statearr_27635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___27640);

return statearr_27635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___27640))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27840){
var vec__27841 = p__27840;
var v = cljs.core.nth.call(null,vec__27841,(0),null);
var p = cljs.core.nth.call(null,vec__27841,(1),null);
var job = vec__27841;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18851__auto___28023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___28023,res,vec__27841,v,p,job,jobs,results){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___28023,res,vec__27841,v,p,job,jobs,results){
return (function (state_27846){
var state_val_27847 = (state_27846[(1)]);
if((state_val_27847 === (1))){
var state_27846__$1 = state_27846;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27846__$1,(2),res,v);
} else {
if((state_val_27847 === (2))){
var inst_27843 = (state_27846[(2)]);
var inst_27844 = cljs.core.async.close_BANG_.call(null,res);
var state_27846__$1 = (function (){var statearr_27848 = state_27846;
(statearr_27848[(7)] = inst_27843);

return statearr_27848;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27846__$1,inst_27844);
} else {
return null;
}
}
});})(c__18851__auto___28023,res,vec__27841,v,p,job,jobs,results))
;
return ((function (switch__18830__auto__,c__18851__auto___28023,res,vec__27841,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0 = (function (){
var statearr_27852 = [null,null,null,null,null,null,null,null];
(statearr_27852[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__);

(statearr_27852[(1)] = (1));

return statearr_27852;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1 = (function (state_27846){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_27846);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e27853){if((e27853 instanceof Object)){
var ex__18834__auto__ = e27853;
var statearr_27854_28024 = state_27846;
(statearr_27854_28024[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27846);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28025 = state_27846;
state_27846 = G__28025;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__ = function(state_27846){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1.call(this,state_27846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___28023,res,vec__27841,v,p,job,jobs,results))
})();
var state__18853__auto__ = (function (){var statearr_27855 = f__18852__auto__.call(null);
(statearr_27855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___28023);

return statearr_27855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___28023,res,vec__27841,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27856){
var vec__27857 = p__27856;
var v = cljs.core.nth.call(null,vec__27857,(0),null);
var p = cljs.core.nth.call(null,vec__27857,(1),null);
var job = vec__27857;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17729__auto___28026 = n;
var __28027 = (0);
while(true){
if((__28027 < n__17729__auto___28026)){
var G__27858_28028 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__27858_28028) {
case "compute":
var c__18851__auto___28030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28027,c__18851__auto___28030,G__27858_28028,n__17729__auto___28026,jobs,results,process,async){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (__28027,c__18851__auto___28030,G__27858_28028,n__17729__auto___28026,jobs,results,process,async){
return (function (state_27871){
var state_val_27872 = (state_27871[(1)]);
if((state_val_27872 === (1))){
var state_27871__$1 = state_27871;
var statearr_27873_28031 = state_27871__$1;
(statearr_27873_28031[(2)] = null);

(statearr_27873_28031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (2))){
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27871__$1,(4),jobs);
} else {
if((state_val_27872 === (3))){
var inst_27869 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27871__$1,inst_27869);
} else {
if((state_val_27872 === (4))){
var inst_27861 = (state_27871[(2)]);
var inst_27862 = process.call(null,inst_27861);
var state_27871__$1 = state_27871;
if(cljs.core.truth_(inst_27862)){
var statearr_27874_28032 = state_27871__$1;
(statearr_27874_28032[(1)] = (5));

} else {
var statearr_27875_28033 = state_27871__$1;
(statearr_27875_28033[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (5))){
var state_27871__$1 = state_27871;
var statearr_27876_28034 = state_27871__$1;
(statearr_27876_28034[(2)] = null);

(statearr_27876_28034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (6))){
var state_27871__$1 = state_27871;
var statearr_27877_28035 = state_27871__$1;
(statearr_27877_28035[(2)] = null);

(statearr_27877_28035[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27872 === (7))){
var inst_27867 = (state_27871[(2)]);
var state_27871__$1 = state_27871;
var statearr_27878_28036 = state_27871__$1;
(statearr_27878_28036[(2)] = inst_27867);

(statearr_27878_28036[(1)] = (3));


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
});})(__28027,c__18851__auto___28030,G__27858_28028,n__17729__auto___28026,jobs,results,process,async))
;
return ((function (__28027,switch__18830__auto__,c__18851__auto___28030,G__27858_28028,n__17729__auto___28026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0 = (function (){
var statearr_27882 = [null,null,null,null,null,null,null];
(statearr_27882[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__);

(statearr_27882[(1)] = (1));

return statearr_27882;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1 = (function (state_27871){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_27871);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e27883){if((e27883 instanceof Object)){
var ex__18834__auto__ = e27883;
var statearr_27884_28037 = state_27871;
(statearr_27884_28037[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27871);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27883;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28038 = state_27871;
state_27871 = G__28038;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__ = function(state_27871){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1.call(this,state_27871);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__;
})()
;})(__28027,switch__18830__auto__,c__18851__auto___28030,G__27858_28028,n__17729__auto___28026,jobs,results,process,async))
})();
var state__18853__auto__ = (function (){var statearr_27885 = f__18852__auto__.call(null);
(statearr_27885[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___28030);

return statearr_27885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(__28027,c__18851__auto___28030,G__27858_28028,n__17729__auto___28026,jobs,results,process,async))
);


break;
case "async":
var c__18851__auto___28039 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28027,c__18851__auto___28039,G__27858_28028,n__17729__auto___28026,jobs,results,process,async){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (__28027,c__18851__auto___28039,G__27858_28028,n__17729__auto___28026,jobs,results,process,async){
return (function (state_27898){
var state_val_27899 = (state_27898[(1)]);
if((state_val_27899 === (1))){
var state_27898__$1 = state_27898;
var statearr_27900_28040 = state_27898__$1;
(statearr_27900_28040[(2)] = null);

(statearr_27900_28040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (2))){
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27898__$1,(4),jobs);
} else {
if((state_val_27899 === (3))){
var inst_27896 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27898__$1,inst_27896);
} else {
if((state_val_27899 === (4))){
var inst_27888 = (state_27898[(2)]);
var inst_27889 = async.call(null,inst_27888);
var state_27898__$1 = state_27898;
if(cljs.core.truth_(inst_27889)){
var statearr_27901_28041 = state_27898__$1;
(statearr_27901_28041[(1)] = (5));

} else {
var statearr_27902_28042 = state_27898__$1;
(statearr_27902_28042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (5))){
var state_27898__$1 = state_27898;
var statearr_27903_28043 = state_27898__$1;
(statearr_27903_28043[(2)] = null);

(statearr_27903_28043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (6))){
var state_27898__$1 = state_27898;
var statearr_27904_28044 = state_27898__$1;
(statearr_27904_28044[(2)] = null);

(statearr_27904_28044[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27899 === (7))){
var inst_27894 = (state_27898[(2)]);
var state_27898__$1 = state_27898;
var statearr_27905_28045 = state_27898__$1;
(statearr_27905_28045[(2)] = inst_27894);

(statearr_27905_28045[(1)] = (3));


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
});})(__28027,c__18851__auto___28039,G__27858_28028,n__17729__auto___28026,jobs,results,process,async))
;
return ((function (__28027,switch__18830__auto__,c__18851__auto___28039,G__27858_28028,n__17729__auto___28026,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0 = (function (){
var statearr_27909 = [null,null,null,null,null,null,null];
(statearr_27909[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__);

(statearr_27909[(1)] = (1));

return statearr_27909;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1 = (function (state_27898){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_27898);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e27910){if((e27910 instanceof Object)){
var ex__18834__auto__ = e27910;
var statearr_27911_28046 = state_27898;
(statearr_27911_28046[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27898);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28047 = state_27898;
state_27898 = G__28047;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__ = function(state_27898){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1.call(this,state_27898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__;
})()
;})(__28027,switch__18830__auto__,c__18851__auto___28039,G__27858_28028,n__17729__auto___28026,jobs,results,process,async))
})();
var state__18853__auto__ = (function (){var statearr_27912 = f__18852__auto__.call(null);
(statearr_27912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___28039);

return statearr_27912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(__28027,c__18851__auto___28039,G__27858_28028,n__17729__auto___28026,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28048 = (__28027 + (1));
__28027 = G__28048;
continue;
} else {
}
break;
}

var c__18851__auto___28049 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___28049,jobs,results,process,async){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___28049,jobs,results,process,async){
return (function (state_27934){
var state_val_27935 = (state_27934[(1)]);
if((state_val_27935 === (1))){
var state_27934__$1 = state_27934;
var statearr_27936_28050 = state_27934__$1;
(statearr_27936_28050[(2)] = null);

(statearr_27936_28050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (2))){
var state_27934__$1 = state_27934;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27934__$1,(4),from);
} else {
if((state_val_27935 === (3))){
var inst_27932 = (state_27934[(2)]);
var state_27934__$1 = state_27934;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27934__$1,inst_27932);
} else {
if((state_val_27935 === (4))){
var inst_27915 = (state_27934[(7)]);
var inst_27915__$1 = (state_27934[(2)]);
var inst_27916 = (inst_27915__$1 == null);
var state_27934__$1 = (function (){var statearr_27937 = state_27934;
(statearr_27937[(7)] = inst_27915__$1);

return statearr_27937;
})();
if(cljs.core.truth_(inst_27916)){
var statearr_27938_28051 = state_27934__$1;
(statearr_27938_28051[(1)] = (5));

} else {
var statearr_27939_28052 = state_27934__$1;
(statearr_27939_28052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (5))){
var inst_27918 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27934__$1 = state_27934;
var statearr_27940_28053 = state_27934__$1;
(statearr_27940_28053[(2)] = inst_27918);

(statearr_27940_28053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (6))){
var inst_27920 = (state_27934[(8)]);
var inst_27915 = (state_27934[(7)]);
var inst_27920__$1 = cljs.core.async.chan.call(null,(1));
var inst_27921 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27922 = [inst_27915,inst_27920__$1];
var inst_27923 = (new cljs.core.PersistentVector(null,2,(5),inst_27921,inst_27922,null));
var state_27934__$1 = (function (){var statearr_27941 = state_27934;
(statearr_27941[(8)] = inst_27920__$1);

return statearr_27941;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27934__$1,(8),jobs,inst_27923);
} else {
if((state_val_27935 === (7))){
var inst_27930 = (state_27934[(2)]);
var state_27934__$1 = state_27934;
var statearr_27942_28054 = state_27934__$1;
(statearr_27942_28054[(2)] = inst_27930);

(statearr_27942_28054[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27935 === (8))){
var inst_27920 = (state_27934[(8)]);
var inst_27925 = (state_27934[(2)]);
var state_27934__$1 = (function (){var statearr_27943 = state_27934;
(statearr_27943[(9)] = inst_27925);

return statearr_27943;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27934__$1,(9),results,inst_27920);
} else {
if((state_val_27935 === (9))){
var inst_27927 = (state_27934[(2)]);
var state_27934__$1 = (function (){var statearr_27944 = state_27934;
(statearr_27944[(10)] = inst_27927);

return statearr_27944;
})();
var statearr_27945_28055 = state_27934__$1;
(statearr_27945_28055[(2)] = null);

(statearr_27945_28055[(1)] = (2));


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
});})(c__18851__auto___28049,jobs,results,process,async))
;
return ((function (switch__18830__auto__,c__18851__auto___28049,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0 = (function (){
var statearr_27949 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27949[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__);

(statearr_27949[(1)] = (1));

return statearr_27949;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1 = (function (state_27934){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_27934);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e27950){if((e27950 instanceof Object)){
var ex__18834__auto__ = e27950;
var statearr_27951_28056 = state_27934;
(statearr_27951_28056[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27934);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27950;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28057 = state_27934;
state_27934 = G__28057;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__ = function(state_27934){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1.call(this,state_27934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___28049,jobs,results,process,async))
})();
var state__18853__auto__ = (function (){var statearr_27952 = f__18852__auto__.call(null);
(statearr_27952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___28049);

return statearr_27952;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___28049,jobs,results,process,async))
);


var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__,jobs,results,process,async){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__,jobs,results,process,async){
return (function (state_27990){
var state_val_27991 = (state_27990[(1)]);
if((state_val_27991 === (7))){
var inst_27986 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
var statearr_27992_28058 = state_27990__$1;
(statearr_27992_28058[(2)] = inst_27986);

(statearr_27992_28058[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (20))){
var state_27990__$1 = state_27990;
var statearr_27993_28059 = state_27990__$1;
(statearr_27993_28059[(2)] = null);

(statearr_27993_28059[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (1))){
var state_27990__$1 = state_27990;
var statearr_27994_28060 = state_27990__$1;
(statearr_27994_28060[(2)] = null);

(statearr_27994_28060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (4))){
var inst_27955 = (state_27990[(7)]);
var inst_27955__$1 = (state_27990[(2)]);
var inst_27956 = (inst_27955__$1 == null);
var state_27990__$1 = (function (){var statearr_27995 = state_27990;
(statearr_27995[(7)] = inst_27955__$1);

return statearr_27995;
})();
if(cljs.core.truth_(inst_27956)){
var statearr_27996_28061 = state_27990__$1;
(statearr_27996_28061[(1)] = (5));

} else {
var statearr_27997_28062 = state_27990__$1;
(statearr_27997_28062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (15))){
var inst_27968 = (state_27990[(8)]);
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27990__$1,(18),to,inst_27968);
} else {
if((state_val_27991 === (21))){
var inst_27981 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
var statearr_27998_28063 = state_27990__$1;
(statearr_27998_28063[(2)] = inst_27981);

(statearr_27998_28063[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (13))){
var inst_27983 = (state_27990[(2)]);
var state_27990__$1 = (function (){var statearr_27999 = state_27990;
(statearr_27999[(9)] = inst_27983);

return statearr_27999;
})();
var statearr_28000_28064 = state_27990__$1;
(statearr_28000_28064[(2)] = null);

(statearr_28000_28064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (6))){
var inst_27955 = (state_27990[(7)]);
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27990__$1,(11),inst_27955);
} else {
if((state_val_27991 === (17))){
var inst_27976 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
if(cljs.core.truth_(inst_27976)){
var statearr_28001_28065 = state_27990__$1;
(statearr_28001_28065[(1)] = (19));

} else {
var statearr_28002_28066 = state_27990__$1;
(statearr_28002_28066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (3))){
var inst_27988 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27990__$1,inst_27988);
} else {
if((state_val_27991 === (12))){
var inst_27965 = (state_27990[(10)]);
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27990__$1,(14),inst_27965);
} else {
if((state_val_27991 === (2))){
var state_27990__$1 = state_27990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27990__$1,(4),results);
} else {
if((state_val_27991 === (19))){
var state_27990__$1 = state_27990;
var statearr_28003_28067 = state_27990__$1;
(statearr_28003_28067[(2)] = null);

(statearr_28003_28067[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (11))){
var inst_27965 = (state_27990[(2)]);
var state_27990__$1 = (function (){var statearr_28004 = state_27990;
(statearr_28004[(10)] = inst_27965);

return statearr_28004;
})();
var statearr_28005_28068 = state_27990__$1;
(statearr_28005_28068[(2)] = null);

(statearr_28005_28068[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (9))){
var state_27990__$1 = state_27990;
var statearr_28006_28069 = state_27990__$1;
(statearr_28006_28069[(2)] = null);

(statearr_28006_28069[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (5))){
var state_27990__$1 = state_27990;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28007_28070 = state_27990__$1;
(statearr_28007_28070[(1)] = (8));

} else {
var statearr_28008_28071 = state_27990__$1;
(statearr_28008_28071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (14))){
var inst_27970 = (state_27990[(11)]);
var inst_27968 = (state_27990[(8)]);
var inst_27968__$1 = (state_27990[(2)]);
var inst_27969 = (inst_27968__$1 == null);
var inst_27970__$1 = cljs.core.not.call(null,inst_27969);
var state_27990__$1 = (function (){var statearr_28009 = state_27990;
(statearr_28009[(11)] = inst_27970__$1);

(statearr_28009[(8)] = inst_27968__$1);

return statearr_28009;
})();
if(inst_27970__$1){
var statearr_28010_28072 = state_27990__$1;
(statearr_28010_28072[(1)] = (15));

} else {
var statearr_28011_28073 = state_27990__$1;
(statearr_28011_28073[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (16))){
var inst_27970 = (state_27990[(11)]);
var state_27990__$1 = state_27990;
var statearr_28012_28074 = state_27990__$1;
(statearr_28012_28074[(2)] = inst_27970);

(statearr_28012_28074[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (10))){
var inst_27962 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
var statearr_28013_28075 = state_27990__$1;
(statearr_28013_28075[(2)] = inst_27962);

(statearr_28013_28075[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (18))){
var inst_27973 = (state_27990[(2)]);
var state_27990__$1 = state_27990;
var statearr_28014_28076 = state_27990__$1;
(statearr_28014_28076[(2)] = inst_27973);

(statearr_28014_28076[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27991 === (8))){
var inst_27959 = cljs.core.async.close_BANG_.call(null,to);
var state_27990__$1 = state_27990;
var statearr_28015_28077 = state_27990__$1;
(statearr_28015_28077[(2)] = inst_27959);

(statearr_28015_28077[(1)] = (10));


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
});})(c__18851__auto__,jobs,results,process,async))
;
return ((function (switch__18830__auto__,c__18851__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0 = (function (){
var statearr_28019 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28019[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__);

(statearr_28019[(1)] = (1));

return statearr_28019;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1 = (function (state_27990){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_27990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e28020){if((e28020 instanceof Object)){
var ex__18834__auto__ = e28020;
var statearr_28021_28078 = state_27990;
(statearr_28021_28078[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28020;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28079 = state_27990;
state_27990 = G__28079;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__ = function(state_27990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1.call(this,state_27990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18831__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__,jobs,results,process,async))
})();
var state__18853__auto__ = (function (){var statearr_28022 = f__18852__auto__.call(null);
(statearr_28022[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_28022;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__,jobs,results,process,async))
);

return c__18851__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28080 = [];
var len__17884__auto___28083 = arguments.length;
var i__17885__auto___28084 = (0);
while(true){
if((i__17885__auto___28084 < len__17884__auto___28083)){
args28080.push((arguments[i__17885__auto___28084]));

var G__28085 = (i__17885__auto___28084 + (1));
i__17885__auto___28084 = G__28085;
continue;
} else {
}
break;
}

var G__28082 = args28080.length;
switch (G__28082) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28080.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28087 = [];
var len__17884__auto___28090 = arguments.length;
var i__17885__auto___28091 = (0);
while(true){
if((i__17885__auto___28091 < len__17884__auto___28090)){
args28087.push((arguments[i__17885__auto___28091]));

var G__28092 = (i__17885__auto___28091 + (1));
i__17885__auto___28091 = G__28092;
continue;
} else {
}
break;
}

var G__28089 = args28087.length;
switch (G__28089) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28087.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28094 = [];
var len__17884__auto___28147 = arguments.length;
var i__17885__auto___28148 = (0);
while(true){
if((i__17885__auto___28148 < len__17884__auto___28147)){
args28094.push((arguments[i__17885__auto___28148]));

var G__28149 = (i__17885__auto___28148 + (1));
i__17885__auto___28148 = G__28149;
continue;
} else {
}
break;
}

var G__28096 = args28094.length;
switch (G__28096) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28094.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18851__auto___28151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___28151,tc,fc){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___28151,tc,fc){
return (function (state_28122){
var state_val_28123 = (state_28122[(1)]);
if((state_val_28123 === (7))){
var inst_28118 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28124_28152 = state_28122__$1;
(statearr_28124_28152[(2)] = inst_28118);

(statearr_28124_28152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (1))){
var state_28122__$1 = state_28122;
var statearr_28125_28153 = state_28122__$1;
(statearr_28125_28153[(2)] = null);

(statearr_28125_28153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (4))){
var inst_28099 = (state_28122[(7)]);
var inst_28099__$1 = (state_28122[(2)]);
var inst_28100 = (inst_28099__$1 == null);
var state_28122__$1 = (function (){var statearr_28126 = state_28122;
(statearr_28126[(7)] = inst_28099__$1);

return statearr_28126;
})();
if(cljs.core.truth_(inst_28100)){
var statearr_28127_28154 = state_28122__$1;
(statearr_28127_28154[(1)] = (5));

} else {
var statearr_28128_28155 = state_28122__$1;
(statearr_28128_28155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (13))){
var state_28122__$1 = state_28122;
var statearr_28129_28156 = state_28122__$1;
(statearr_28129_28156[(2)] = null);

(statearr_28129_28156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (6))){
var inst_28099 = (state_28122[(7)]);
var inst_28105 = p.call(null,inst_28099);
var state_28122__$1 = state_28122;
if(cljs.core.truth_(inst_28105)){
var statearr_28130_28157 = state_28122__$1;
(statearr_28130_28157[(1)] = (9));

} else {
var statearr_28131_28158 = state_28122__$1;
(statearr_28131_28158[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (3))){
var inst_28120 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28122__$1,inst_28120);
} else {
if((state_val_28123 === (12))){
var state_28122__$1 = state_28122;
var statearr_28132_28159 = state_28122__$1;
(statearr_28132_28159[(2)] = null);

(statearr_28132_28159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (2))){
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28122__$1,(4),ch);
} else {
if((state_val_28123 === (11))){
var inst_28099 = (state_28122[(7)]);
var inst_28109 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28122__$1,(8),inst_28109,inst_28099);
} else {
if((state_val_28123 === (9))){
var state_28122__$1 = state_28122;
var statearr_28133_28160 = state_28122__$1;
(statearr_28133_28160[(2)] = tc);

(statearr_28133_28160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (5))){
var inst_28102 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28103 = cljs.core.async.close_BANG_.call(null,fc);
var state_28122__$1 = (function (){var statearr_28134 = state_28122;
(statearr_28134[(8)] = inst_28102);

return statearr_28134;
})();
var statearr_28135_28161 = state_28122__$1;
(statearr_28135_28161[(2)] = inst_28103);

(statearr_28135_28161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (14))){
var inst_28116 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
var statearr_28136_28162 = state_28122__$1;
(statearr_28136_28162[(2)] = inst_28116);

(statearr_28136_28162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (10))){
var state_28122__$1 = state_28122;
var statearr_28137_28163 = state_28122__$1;
(statearr_28137_28163[(2)] = fc);

(statearr_28137_28163[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28123 === (8))){
var inst_28111 = (state_28122[(2)]);
var state_28122__$1 = state_28122;
if(cljs.core.truth_(inst_28111)){
var statearr_28138_28164 = state_28122__$1;
(statearr_28138_28164[(1)] = (12));

} else {
var statearr_28139_28165 = state_28122__$1;
(statearr_28139_28165[(1)] = (13));

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
});})(c__18851__auto___28151,tc,fc))
;
return ((function (switch__18830__auto__,c__18851__auto___28151,tc,fc){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_28143 = [null,null,null,null,null,null,null,null,null];
(statearr_28143[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_28143[(1)] = (1));

return statearr_28143;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_28122){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_28122);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e28144){if((e28144 instanceof Object)){
var ex__18834__auto__ = e28144;
var statearr_28145_28166 = state_28122;
(statearr_28145_28166[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28122);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28144;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28167 = state_28122;
state_28122 = G__28167;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_28122){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_28122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___28151,tc,fc))
})();
var state__18853__auto__ = (function (){var statearr_28146 = f__18852__auto__.call(null);
(statearr_28146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___28151);

return statearr_28146;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___28151,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__){
return (function (state_28231){
var state_val_28232 = (state_28231[(1)]);
if((state_val_28232 === (7))){
var inst_28227 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28233_28254 = state_28231__$1;
(statearr_28233_28254[(2)] = inst_28227);

(statearr_28233_28254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (1))){
var inst_28211 = init;
var state_28231__$1 = (function (){var statearr_28234 = state_28231;
(statearr_28234[(7)] = inst_28211);

return statearr_28234;
})();
var statearr_28235_28255 = state_28231__$1;
(statearr_28235_28255[(2)] = null);

(statearr_28235_28255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (4))){
var inst_28214 = (state_28231[(8)]);
var inst_28214__$1 = (state_28231[(2)]);
var inst_28215 = (inst_28214__$1 == null);
var state_28231__$1 = (function (){var statearr_28236 = state_28231;
(statearr_28236[(8)] = inst_28214__$1);

return statearr_28236;
})();
if(cljs.core.truth_(inst_28215)){
var statearr_28237_28256 = state_28231__$1;
(statearr_28237_28256[(1)] = (5));

} else {
var statearr_28238_28257 = state_28231__$1;
(statearr_28238_28257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (6))){
var inst_28218 = (state_28231[(9)]);
var inst_28214 = (state_28231[(8)]);
var inst_28211 = (state_28231[(7)]);
var inst_28218__$1 = f.call(null,inst_28211,inst_28214);
var inst_28219 = cljs.core.reduced_QMARK_.call(null,inst_28218__$1);
var state_28231__$1 = (function (){var statearr_28239 = state_28231;
(statearr_28239[(9)] = inst_28218__$1);

return statearr_28239;
})();
if(inst_28219){
var statearr_28240_28258 = state_28231__$1;
(statearr_28240_28258[(1)] = (8));

} else {
var statearr_28241_28259 = state_28231__$1;
(statearr_28241_28259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (3))){
var inst_28229 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28231__$1,inst_28229);
} else {
if((state_val_28232 === (2))){
var state_28231__$1 = state_28231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28231__$1,(4),ch);
} else {
if((state_val_28232 === (9))){
var inst_28218 = (state_28231[(9)]);
var inst_28211 = inst_28218;
var state_28231__$1 = (function (){var statearr_28242 = state_28231;
(statearr_28242[(7)] = inst_28211);

return statearr_28242;
})();
var statearr_28243_28260 = state_28231__$1;
(statearr_28243_28260[(2)] = null);

(statearr_28243_28260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (5))){
var inst_28211 = (state_28231[(7)]);
var state_28231__$1 = state_28231;
var statearr_28244_28261 = state_28231__$1;
(statearr_28244_28261[(2)] = inst_28211);

(statearr_28244_28261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (10))){
var inst_28225 = (state_28231[(2)]);
var state_28231__$1 = state_28231;
var statearr_28245_28262 = state_28231__$1;
(statearr_28245_28262[(2)] = inst_28225);

(statearr_28245_28262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28232 === (8))){
var inst_28218 = (state_28231[(9)]);
var inst_28221 = cljs.core.deref.call(null,inst_28218);
var state_28231__$1 = state_28231;
var statearr_28246_28263 = state_28231__$1;
(statearr_28246_28263[(2)] = inst_28221);

(statearr_28246_28263[(1)] = (10));


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
});})(c__18851__auto__))
;
return ((function (switch__18830__auto__,c__18851__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18831__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18831__auto____0 = (function (){
var statearr_28250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28250[(0)] = cljs$core$async$reduce_$_state_machine__18831__auto__);

(statearr_28250[(1)] = (1));

return statearr_28250;
});
var cljs$core$async$reduce_$_state_machine__18831__auto____1 = (function (state_28231){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_28231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e28251){if((e28251 instanceof Object)){
var ex__18834__auto__ = e28251;
var statearr_28252_28264 = state_28231;
(statearr_28252_28264[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28265 = state_28231;
state_28231 = G__28265;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18831__auto__ = function(state_28231){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18831__auto____1.call(this,state_28231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18831__auto____0;
cljs$core$async$reduce_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18831__auto____1;
return cljs$core$async$reduce_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__))
})();
var state__18853__auto__ = (function (){var statearr_28253 = f__18852__auto__.call(null);
(statearr_28253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_28253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__))
);

return c__18851__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28266 = [];
var len__17884__auto___28318 = arguments.length;
var i__17885__auto___28319 = (0);
while(true){
if((i__17885__auto___28319 < len__17884__auto___28318)){
args28266.push((arguments[i__17885__auto___28319]));

var G__28320 = (i__17885__auto___28319 + (1));
i__17885__auto___28319 = G__28320;
continue;
} else {
}
break;
}

var G__28268 = args28266.length;
switch (G__28268) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28266.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__){
return (function (state_28293){
var state_val_28294 = (state_28293[(1)]);
if((state_val_28294 === (7))){
var inst_28275 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28295_28322 = state_28293__$1;
(statearr_28295_28322[(2)] = inst_28275);

(statearr_28295_28322[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (1))){
var inst_28269 = cljs.core.seq.call(null,coll);
var inst_28270 = inst_28269;
var state_28293__$1 = (function (){var statearr_28296 = state_28293;
(statearr_28296[(7)] = inst_28270);

return statearr_28296;
})();
var statearr_28297_28323 = state_28293__$1;
(statearr_28297_28323[(2)] = null);

(statearr_28297_28323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (4))){
var inst_28270 = (state_28293[(7)]);
var inst_28273 = cljs.core.first.call(null,inst_28270);
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28293__$1,(7),ch,inst_28273);
} else {
if((state_val_28294 === (13))){
var inst_28287 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28298_28324 = state_28293__$1;
(statearr_28298_28324[(2)] = inst_28287);

(statearr_28298_28324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (6))){
var inst_28278 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
if(cljs.core.truth_(inst_28278)){
var statearr_28299_28325 = state_28293__$1;
(statearr_28299_28325[(1)] = (8));

} else {
var statearr_28300_28326 = state_28293__$1;
(statearr_28300_28326[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (3))){
var inst_28291 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28293__$1,inst_28291);
} else {
if((state_val_28294 === (12))){
var state_28293__$1 = state_28293;
var statearr_28301_28327 = state_28293__$1;
(statearr_28301_28327[(2)] = null);

(statearr_28301_28327[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (2))){
var inst_28270 = (state_28293[(7)]);
var state_28293__$1 = state_28293;
if(cljs.core.truth_(inst_28270)){
var statearr_28302_28328 = state_28293__$1;
(statearr_28302_28328[(1)] = (4));

} else {
var statearr_28303_28329 = state_28293__$1;
(statearr_28303_28329[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (11))){
var inst_28284 = cljs.core.async.close_BANG_.call(null,ch);
var state_28293__$1 = state_28293;
var statearr_28304_28330 = state_28293__$1;
(statearr_28304_28330[(2)] = inst_28284);

(statearr_28304_28330[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (9))){
var state_28293__$1 = state_28293;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28305_28331 = state_28293__$1;
(statearr_28305_28331[(1)] = (11));

} else {
var statearr_28306_28332 = state_28293__$1;
(statearr_28306_28332[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (5))){
var inst_28270 = (state_28293[(7)]);
var state_28293__$1 = state_28293;
var statearr_28307_28333 = state_28293__$1;
(statearr_28307_28333[(2)] = inst_28270);

(statearr_28307_28333[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (10))){
var inst_28289 = (state_28293[(2)]);
var state_28293__$1 = state_28293;
var statearr_28308_28334 = state_28293__$1;
(statearr_28308_28334[(2)] = inst_28289);

(statearr_28308_28334[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28294 === (8))){
var inst_28270 = (state_28293[(7)]);
var inst_28280 = cljs.core.next.call(null,inst_28270);
var inst_28270__$1 = inst_28280;
var state_28293__$1 = (function (){var statearr_28309 = state_28293;
(statearr_28309[(7)] = inst_28270__$1);

return statearr_28309;
})();
var statearr_28310_28335 = state_28293__$1;
(statearr_28310_28335[(2)] = null);

(statearr_28310_28335[(1)] = (2));


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
});})(c__18851__auto__))
;
return ((function (switch__18830__auto__,c__18851__auto__){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_28314 = [null,null,null,null,null,null,null,null];
(statearr_28314[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_28314[(1)] = (1));

return statearr_28314;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_28293){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_28293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e28315){if((e28315 instanceof Object)){
var ex__18834__auto__ = e28315;
var statearr_28316_28336 = state_28293;
(statearr_28316_28336[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28337 = state_28293;
state_28293 = G__28337;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_28293){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_28293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__))
})();
var state__18853__auto__ = (function (){var statearr_28317 = f__18852__auto__.call(null);
(statearr_28317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_28317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__))
);

return c__18851__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17481__auto__ = (((_ == null))?null:_);
var m__17482__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,_);
} else {
var m__17482__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28559 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28559 = (function (mult,ch,cs,meta28560){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28560 = meta28560;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28561,meta28560__$1){
var self__ = this;
var _28561__$1 = this;
return (new cljs.core.async.t_cljs$core$async28559(self__.mult,self__.ch,self__.cs,meta28560__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28561){
var self__ = this;
var _28561__$1 = this;
return self__.meta28560;
});})(cs))
;

cljs.core.async.t_cljs$core$async28559.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28559.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28559.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28559.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28559.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28559.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28559.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28560","meta28560",1171845365,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28559.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28559.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28559";

cljs.core.async.t_cljs$core$async28559.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async28559");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28559 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28559(mult__$1,ch__$1,cs__$1,meta28560){
return (new cljs.core.async.t_cljs$core$async28559(mult__$1,ch__$1,cs__$1,meta28560));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28559(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18851__auto___28780 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___28780,cs,m,dchan,dctr,done){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___28780,cs,m,dchan,dctr,done){
return (function (state_28692){
var state_val_28693 = (state_28692[(1)]);
if((state_val_28693 === (7))){
var inst_28688 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28694_28781 = state_28692__$1;
(statearr_28694_28781[(2)] = inst_28688);

(statearr_28694_28781[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (20))){
var inst_28593 = (state_28692[(7)]);
var inst_28603 = cljs.core.first.call(null,inst_28593);
var inst_28604 = cljs.core.nth.call(null,inst_28603,(0),null);
var inst_28605 = cljs.core.nth.call(null,inst_28603,(1),null);
var state_28692__$1 = (function (){var statearr_28695 = state_28692;
(statearr_28695[(8)] = inst_28604);

return statearr_28695;
})();
if(cljs.core.truth_(inst_28605)){
var statearr_28696_28782 = state_28692__$1;
(statearr_28696_28782[(1)] = (22));

} else {
var statearr_28697_28783 = state_28692__$1;
(statearr_28697_28783[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (27))){
var inst_28640 = (state_28692[(9)]);
var inst_28564 = (state_28692[(10)]);
var inst_28635 = (state_28692[(11)]);
var inst_28633 = (state_28692[(12)]);
var inst_28640__$1 = cljs.core._nth.call(null,inst_28633,inst_28635);
var inst_28641 = cljs.core.async.put_BANG_.call(null,inst_28640__$1,inst_28564,done);
var state_28692__$1 = (function (){var statearr_28698 = state_28692;
(statearr_28698[(9)] = inst_28640__$1);

return statearr_28698;
})();
if(cljs.core.truth_(inst_28641)){
var statearr_28699_28784 = state_28692__$1;
(statearr_28699_28784[(1)] = (30));

} else {
var statearr_28700_28785 = state_28692__$1;
(statearr_28700_28785[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (1))){
var state_28692__$1 = state_28692;
var statearr_28701_28786 = state_28692__$1;
(statearr_28701_28786[(2)] = null);

(statearr_28701_28786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (24))){
var inst_28593 = (state_28692[(7)]);
var inst_28610 = (state_28692[(2)]);
var inst_28611 = cljs.core.next.call(null,inst_28593);
var inst_28573 = inst_28611;
var inst_28574 = null;
var inst_28575 = (0);
var inst_28576 = (0);
var state_28692__$1 = (function (){var statearr_28702 = state_28692;
(statearr_28702[(13)] = inst_28576);

(statearr_28702[(14)] = inst_28574);

(statearr_28702[(15)] = inst_28610);

(statearr_28702[(16)] = inst_28573);

(statearr_28702[(17)] = inst_28575);

return statearr_28702;
})();
var statearr_28703_28787 = state_28692__$1;
(statearr_28703_28787[(2)] = null);

(statearr_28703_28787[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (39))){
var state_28692__$1 = state_28692;
var statearr_28707_28788 = state_28692__$1;
(statearr_28707_28788[(2)] = null);

(statearr_28707_28788[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (4))){
var inst_28564 = (state_28692[(10)]);
var inst_28564__$1 = (state_28692[(2)]);
var inst_28565 = (inst_28564__$1 == null);
var state_28692__$1 = (function (){var statearr_28708 = state_28692;
(statearr_28708[(10)] = inst_28564__$1);

return statearr_28708;
})();
if(cljs.core.truth_(inst_28565)){
var statearr_28709_28789 = state_28692__$1;
(statearr_28709_28789[(1)] = (5));

} else {
var statearr_28710_28790 = state_28692__$1;
(statearr_28710_28790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (15))){
var inst_28576 = (state_28692[(13)]);
var inst_28574 = (state_28692[(14)]);
var inst_28573 = (state_28692[(16)]);
var inst_28575 = (state_28692[(17)]);
var inst_28589 = (state_28692[(2)]);
var inst_28590 = (inst_28576 + (1));
var tmp28704 = inst_28574;
var tmp28705 = inst_28573;
var tmp28706 = inst_28575;
var inst_28573__$1 = tmp28705;
var inst_28574__$1 = tmp28704;
var inst_28575__$1 = tmp28706;
var inst_28576__$1 = inst_28590;
var state_28692__$1 = (function (){var statearr_28711 = state_28692;
(statearr_28711[(13)] = inst_28576__$1);

(statearr_28711[(14)] = inst_28574__$1);

(statearr_28711[(18)] = inst_28589);

(statearr_28711[(16)] = inst_28573__$1);

(statearr_28711[(17)] = inst_28575__$1);

return statearr_28711;
})();
var statearr_28712_28791 = state_28692__$1;
(statearr_28712_28791[(2)] = null);

(statearr_28712_28791[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (21))){
var inst_28614 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28716_28792 = state_28692__$1;
(statearr_28716_28792[(2)] = inst_28614);

(statearr_28716_28792[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (31))){
var inst_28640 = (state_28692[(9)]);
var inst_28644 = done.call(null,null);
var inst_28645 = cljs.core.async.untap_STAR_.call(null,m,inst_28640);
var state_28692__$1 = (function (){var statearr_28717 = state_28692;
(statearr_28717[(19)] = inst_28644);

return statearr_28717;
})();
var statearr_28718_28793 = state_28692__$1;
(statearr_28718_28793[(2)] = inst_28645);

(statearr_28718_28793[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (32))){
var inst_28632 = (state_28692[(20)]);
var inst_28635 = (state_28692[(11)]);
var inst_28634 = (state_28692[(21)]);
var inst_28633 = (state_28692[(12)]);
var inst_28647 = (state_28692[(2)]);
var inst_28648 = (inst_28635 + (1));
var tmp28713 = inst_28632;
var tmp28714 = inst_28634;
var tmp28715 = inst_28633;
var inst_28632__$1 = tmp28713;
var inst_28633__$1 = tmp28715;
var inst_28634__$1 = tmp28714;
var inst_28635__$1 = inst_28648;
var state_28692__$1 = (function (){var statearr_28719 = state_28692;
(statearr_28719[(20)] = inst_28632__$1);

(statearr_28719[(11)] = inst_28635__$1);

(statearr_28719[(22)] = inst_28647);

(statearr_28719[(21)] = inst_28634__$1);

(statearr_28719[(12)] = inst_28633__$1);

return statearr_28719;
})();
var statearr_28720_28794 = state_28692__$1;
(statearr_28720_28794[(2)] = null);

(statearr_28720_28794[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (40))){
var inst_28660 = (state_28692[(23)]);
var inst_28664 = done.call(null,null);
var inst_28665 = cljs.core.async.untap_STAR_.call(null,m,inst_28660);
var state_28692__$1 = (function (){var statearr_28721 = state_28692;
(statearr_28721[(24)] = inst_28664);

return statearr_28721;
})();
var statearr_28722_28795 = state_28692__$1;
(statearr_28722_28795[(2)] = inst_28665);

(statearr_28722_28795[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (33))){
var inst_28651 = (state_28692[(25)]);
var inst_28653 = cljs.core.chunked_seq_QMARK_.call(null,inst_28651);
var state_28692__$1 = state_28692;
if(inst_28653){
var statearr_28723_28796 = state_28692__$1;
(statearr_28723_28796[(1)] = (36));

} else {
var statearr_28724_28797 = state_28692__$1;
(statearr_28724_28797[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (13))){
var inst_28583 = (state_28692[(26)]);
var inst_28586 = cljs.core.async.close_BANG_.call(null,inst_28583);
var state_28692__$1 = state_28692;
var statearr_28725_28798 = state_28692__$1;
(statearr_28725_28798[(2)] = inst_28586);

(statearr_28725_28798[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (22))){
var inst_28604 = (state_28692[(8)]);
var inst_28607 = cljs.core.async.close_BANG_.call(null,inst_28604);
var state_28692__$1 = state_28692;
var statearr_28726_28799 = state_28692__$1;
(statearr_28726_28799[(2)] = inst_28607);

(statearr_28726_28799[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (36))){
var inst_28651 = (state_28692[(25)]);
var inst_28655 = cljs.core.chunk_first.call(null,inst_28651);
var inst_28656 = cljs.core.chunk_rest.call(null,inst_28651);
var inst_28657 = cljs.core.count.call(null,inst_28655);
var inst_28632 = inst_28656;
var inst_28633 = inst_28655;
var inst_28634 = inst_28657;
var inst_28635 = (0);
var state_28692__$1 = (function (){var statearr_28727 = state_28692;
(statearr_28727[(20)] = inst_28632);

(statearr_28727[(11)] = inst_28635);

(statearr_28727[(21)] = inst_28634);

(statearr_28727[(12)] = inst_28633);

return statearr_28727;
})();
var statearr_28728_28800 = state_28692__$1;
(statearr_28728_28800[(2)] = null);

(statearr_28728_28800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (41))){
var inst_28651 = (state_28692[(25)]);
var inst_28667 = (state_28692[(2)]);
var inst_28668 = cljs.core.next.call(null,inst_28651);
var inst_28632 = inst_28668;
var inst_28633 = null;
var inst_28634 = (0);
var inst_28635 = (0);
var state_28692__$1 = (function (){var statearr_28729 = state_28692;
(statearr_28729[(27)] = inst_28667);

(statearr_28729[(20)] = inst_28632);

(statearr_28729[(11)] = inst_28635);

(statearr_28729[(21)] = inst_28634);

(statearr_28729[(12)] = inst_28633);

return statearr_28729;
})();
var statearr_28730_28801 = state_28692__$1;
(statearr_28730_28801[(2)] = null);

(statearr_28730_28801[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (43))){
var state_28692__$1 = state_28692;
var statearr_28731_28802 = state_28692__$1;
(statearr_28731_28802[(2)] = null);

(statearr_28731_28802[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (29))){
var inst_28676 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28732_28803 = state_28692__$1;
(statearr_28732_28803[(2)] = inst_28676);

(statearr_28732_28803[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (44))){
var inst_28685 = (state_28692[(2)]);
var state_28692__$1 = (function (){var statearr_28733 = state_28692;
(statearr_28733[(28)] = inst_28685);

return statearr_28733;
})();
var statearr_28734_28804 = state_28692__$1;
(statearr_28734_28804[(2)] = null);

(statearr_28734_28804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (6))){
var inst_28624 = (state_28692[(29)]);
var inst_28623 = cljs.core.deref.call(null,cs);
var inst_28624__$1 = cljs.core.keys.call(null,inst_28623);
var inst_28625 = cljs.core.count.call(null,inst_28624__$1);
var inst_28626 = cljs.core.reset_BANG_.call(null,dctr,inst_28625);
var inst_28631 = cljs.core.seq.call(null,inst_28624__$1);
var inst_28632 = inst_28631;
var inst_28633 = null;
var inst_28634 = (0);
var inst_28635 = (0);
var state_28692__$1 = (function (){var statearr_28735 = state_28692;
(statearr_28735[(30)] = inst_28626);

(statearr_28735[(20)] = inst_28632);

(statearr_28735[(11)] = inst_28635);

(statearr_28735[(29)] = inst_28624__$1);

(statearr_28735[(21)] = inst_28634);

(statearr_28735[(12)] = inst_28633);

return statearr_28735;
})();
var statearr_28736_28805 = state_28692__$1;
(statearr_28736_28805[(2)] = null);

(statearr_28736_28805[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (28))){
var inst_28632 = (state_28692[(20)]);
var inst_28651 = (state_28692[(25)]);
var inst_28651__$1 = cljs.core.seq.call(null,inst_28632);
var state_28692__$1 = (function (){var statearr_28737 = state_28692;
(statearr_28737[(25)] = inst_28651__$1);

return statearr_28737;
})();
if(inst_28651__$1){
var statearr_28738_28806 = state_28692__$1;
(statearr_28738_28806[(1)] = (33));

} else {
var statearr_28739_28807 = state_28692__$1;
(statearr_28739_28807[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (25))){
var inst_28635 = (state_28692[(11)]);
var inst_28634 = (state_28692[(21)]);
var inst_28637 = (inst_28635 < inst_28634);
var inst_28638 = inst_28637;
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28638)){
var statearr_28740_28808 = state_28692__$1;
(statearr_28740_28808[(1)] = (27));

} else {
var statearr_28741_28809 = state_28692__$1;
(statearr_28741_28809[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (34))){
var state_28692__$1 = state_28692;
var statearr_28742_28810 = state_28692__$1;
(statearr_28742_28810[(2)] = null);

(statearr_28742_28810[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (17))){
var state_28692__$1 = state_28692;
var statearr_28743_28811 = state_28692__$1;
(statearr_28743_28811[(2)] = null);

(statearr_28743_28811[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (3))){
var inst_28690 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28692__$1,inst_28690);
} else {
if((state_val_28693 === (12))){
var inst_28619 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28744_28812 = state_28692__$1;
(statearr_28744_28812[(2)] = inst_28619);

(statearr_28744_28812[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (2))){
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28692__$1,(4),ch);
} else {
if((state_val_28693 === (23))){
var state_28692__$1 = state_28692;
var statearr_28745_28813 = state_28692__$1;
(statearr_28745_28813[(2)] = null);

(statearr_28745_28813[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (35))){
var inst_28674 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28746_28814 = state_28692__$1;
(statearr_28746_28814[(2)] = inst_28674);

(statearr_28746_28814[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (19))){
var inst_28593 = (state_28692[(7)]);
var inst_28597 = cljs.core.chunk_first.call(null,inst_28593);
var inst_28598 = cljs.core.chunk_rest.call(null,inst_28593);
var inst_28599 = cljs.core.count.call(null,inst_28597);
var inst_28573 = inst_28598;
var inst_28574 = inst_28597;
var inst_28575 = inst_28599;
var inst_28576 = (0);
var state_28692__$1 = (function (){var statearr_28747 = state_28692;
(statearr_28747[(13)] = inst_28576);

(statearr_28747[(14)] = inst_28574);

(statearr_28747[(16)] = inst_28573);

(statearr_28747[(17)] = inst_28575);

return statearr_28747;
})();
var statearr_28748_28815 = state_28692__$1;
(statearr_28748_28815[(2)] = null);

(statearr_28748_28815[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (11))){
var inst_28573 = (state_28692[(16)]);
var inst_28593 = (state_28692[(7)]);
var inst_28593__$1 = cljs.core.seq.call(null,inst_28573);
var state_28692__$1 = (function (){var statearr_28749 = state_28692;
(statearr_28749[(7)] = inst_28593__$1);

return statearr_28749;
})();
if(inst_28593__$1){
var statearr_28750_28816 = state_28692__$1;
(statearr_28750_28816[(1)] = (16));

} else {
var statearr_28751_28817 = state_28692__$1;
(statearr_28751_28817[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (9))){
var inst_28621 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28752_28818 = state_28692__$1;
(statearr_28752_28818[(2)] = inst_28621);

(statearr_28752_28818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (5))){
var inst_28571 = cljs.core.deref.call(null,cs);
var inst_28572 = cljs.core.seq.call(null,inst_28571);
var inst_28573 = inst_28572;
var inst_28574 = null;
var inst_28575 = (0);
var inst_28576 = (0);
var state_28692__$1 = (function (){var statearr_28753 = state_28692;
(statearr_28753[(13)] = inst_28576);

(statearr_28753[(14)] = inst_28574);

(statearr_28753[(16)] = inst_28573);

(statearr_28753[(17)] = inst_28575);

return statearr_28753;
})();
var statearr_28754_28819 = state_28692__$1;
(statearr_28754_28819[(2)] = null);

(statearr_28754_28819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (14))){
var state_28692__$1 = state_28692;
var statearr_28755_28820 = state_28692__$1;
(statearr_28755_28820[(2)] = null);

(statearr_28755_28820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (45))){
var inst_28682 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28756_28821 = state_28692__$1;
(statearr_28756_28821[(2)] = inst_28682);

(statearr_28756_28821[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (26))){
var inst_28624 = (state_28692[(29)]);
var inst_28678 = (state_28692[(2)]);
var inst_28679 = cljs.core.seq.call(null,inst_28624);
var state_28692__$1 = (function (){var statearr_28757 = state_28692;
(statearr_28757[(31)] = inst_28678);

return statearr_28757;
})();
if(inst_28679){
var statearr_28758_28822 = state_28692__$1;
(statearr_28758_28822[(1)] = (42));

} else {
var statearr_28759_28823 = state_28692__$1;
(statearr_28759_28823[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (16))){
var inst_28593 = (state_28692[(7)]);
var inst_28595 = cljs.core.chunked_seq_QMARK_.call(null,inst_28593);
var state_28692__$1 = state_28692;
if(inst_28595){
var statearr_28760_28824 = state_28692__$1;
(statearr_28760_28824[(1)] = (19));

} else {
var statearr_28761_28825 = state_28692__$1;
(statearr_28761_28825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (38))){
var inst_28671 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28762_28826 = state_28692__$1;
(statearr_28762_28826[(2)] = inst_28671);

(statearr_28762_28826[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (30))){
var state_28692__$1 = state_28692;
var statearr_28763_28827 = state_28692__$1;
(statearr_28763_28827[(2)] = null);

(statearr_28763_28827[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (10))){
var inst_28576 = (state_28692[(13)]);
var inst_28574 = (state_28692[(14)]);
var inst_28582 = cljs.core._nth.call(null,inst_28574,inst_28576);
var inst_28583 = cljs.core.nth.call(null,inst_28582,(0),null);
var inst_28584 = cljs.core.nth.call(null,inst_28582,(1),null);
var state_28692__$1 = (function (){var statearr_28764 = state_28692;
(statearr_28764[(26)] = inst_28583);

return statearr_28764;
})();
if(cljs.core.truth_(inst_28584)){
var statearr_28765_28828 = state_28692__$1;
(statearr_28765_28828[(1)] = (13));

} else {
var statearr_28766_28829 = state_28692__$1;
(statearr_28766_28829[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (18))){
var inst_28617 = (state_28692[(2)]);
var state_28692__$1 = state_28692;
var statearr_28767_28830 = state_28692__$1;
(statearr_28767_28830[(2)] = inst_28617);

(statearr_28767_28830[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (42))){
var state_28692__$1 = state_28692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28692__$1,(45),dchan);
} else {
if((state_val_28693 === (37))){
var inst_28564 = (state_28692[(10)]);
var inst_28651 = (state_28692[(25)]);
var inst_28660 = (state_28692[(23)]);
var inst_28660__$1 = cljs.core.first.call(null,inst_28651);
var inst_28661 = cljs.core.async.put_BANG_.call(null,inst_28660__$1,inst_28564,done);
var state_28692__$1 = (function (){var statearr_28768 = state_28692;
(statearr_28768[(23)] = inst_28660__$1);

return statearr_28768;
})();
if(cljs.core.truth_(inst_28661)){
var statearr_28769_28831 = state_28692__$1;
(statearr_28769_28831[(1)] = (39));

} else {
var statearr_28770_28832 = state_28692__$1;
(statearr_28770_28832[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28693 === (8))){
var inst_28576 = (state_28692[(13)]);
var inst_28575 = (state_28692[(17)]);
var inst_28578 = (inst_28576 < inst_28575);
var inst_28579 = inst_28578;
var state_28692__$1 = state_28692;
if(cljs.core.truth_(inst_28579)){
var statearr_28771_28833 = state_28692__$1;
(statearr_28771_28833[(1)] = (10));

} else {
var statearr_28772_28834 = state_28692__$1;
(statearr_28772_28834[(1)] = (11));

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
});})(c__18851__auto___28780,cs,m,dchan,dctr,done))
;
return ((function (switch__18830__auto__,c__18851__auto___28780,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18831__auto__ = null;
var cljs$core$async$mult_$_state_machine__18831__auto____0 = (function (){
var statearr_28776 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28776[(0)] = cljs$core$async$mult_$_state_machine__18831__auto__);

(statearr_28776[(1)] = (1));

return statearr_28776;
});
var cljs$core$async$mult_$_state_machine__18831__auto____1 = (function (state_28692){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_28692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e28777){if((e28777 instanceof Object)){
var ex__18834__auto__ = e28777;
var statearr_28778_28835 = state_28692;
(statearr_28778_28835[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28836 = state_28692;
state_28692 = G__28836;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18831__auto__ = function(state_28692){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18831__auto____1.call(this,state_28692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18831__auto____0;
cljs$core$async$mult_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18831__auto____1;
return cljs$core$async$mult_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___28780,cs,m,dchan,dctr,done))
})();
var state__18853__auto__ = (function (){var statearr_28779 = f__18852__auto__.call(null);
(statearr_28779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___28780);

return statearr_28779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___28780,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args28837 = [];
var len__17884__auto___28840 = arguments.length;
var i__17885__auto___28841 = (0);
while(true){
if((i__17885__auto___28841 < len__17884__auto___28840)){
args28837.push((arguments[i__17885__auto___28841]));

var G__28842 = (i__17885__auto___28841 + (1));
i__17885__auto___28841 = G__28842;
continue;
} else {
}
break;
}

var G__28839 = args28837.length;
switch (G__28839) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28837.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m);
} else {
var m__17482__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,state_map);
} else {
var m__17482__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17481__auto__ = (((m == null))?null:m);
var m__17482__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,m,mode);
} else {
var m__17482__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17891__auto__ = [];
var len__17884__auto___28854 = arguments.length;
var i__17885__auto___28855 = (0);
while(true){
if((i__17885__auto___28855 < len__17884__auto___28854)){
args__17891__auto__.push((arguments[i__17885__auto___28855]));

var G__28856 = (i__17885__auto___28855 + (1));
i__17885__auto___28855 = G__28856;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((3) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17892__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28848){
var map__28849 = p__28848;
var map__28849__$1 = ((((!((map__28849 == null)))?((((map__28849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28849):map__28849);
var opts = map__28849__$1;
var statearr_28851_28857 = state;
(statearr_28851_28857[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__28849,map__28849__$1,opts){
return (function (val){
var statearr_28852_28858 = state;
(statearr_28852_28858[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__28849,map__28849__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_28853_28859 = state;
(statearr_28853_28859[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28844){
var G__28845 = cljs.core.first.call(null,seq28844);
var seq28844__$1 = cljs.core.next.call(null,seq28844);
var G__28846 = cljs.core.first.call(null,seq28844__$1);
var seq28844__$2 = cljs.core.next.call(null,seq28844__$1);
var G__28847 = cljs.core.first.call(null,seq28844__$2);
var seq28844__$3 = cljs.core.next.call(null,seq28844__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28845,G__28846,G__28847,seq28844__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29023 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29023 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29024){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29024 = meta29024;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29025,meta29024__$1){
var self__ = this;
var _29025__$1 = this;
return (new cljs.core.async.t_cljs$core$async29023(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29024__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29025){
var self__ = this;
var _29025__$1 = this;
return self__.meta29024;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29023.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29023.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29024","meta29024",-1425765296,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29023.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29023.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29023";

cljs.core.async.t_cljs$core$async29023.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async29023");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29023 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29023(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29024){
return (new cljs.core.async.t_cljs$core$async29023(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29024));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29023(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18851__auto___29186 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___29186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___29186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29123){
var state_val_29124 = (state_29123[(1)]);
if((state_val_29124 === (7))){
var inst_29041 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29125_29187 = state_29123__$1;
(statearr_29125_29187[(2)] = inst_29041);

(statearr_29125_29187[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (20))){
var inst_29053 = (state_29123[(7)]);
var state_29123__$1 = state_29123;
var statearr_29126_29188 = state_29123__$1;
(statearr_29126_29188[(2)] = inst_29053);

(statearr_29126_29188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (27))){
var state_29123__$1 = state_29123;
var statearr_29127_29189 = state_29123__$1;
(statearr_29127_29189[(2)] = null);

(statearr_29127_29189[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (1))){
var inst_29029 = (state_29123[(8)]);
var inst_29029__$1 = calc_state.call(null);
var inst_29031 = (inst_29029__$1 == null);
var inst_29032 = cljs.core.not.call(null,inst_29031);
var state_29123__$1 = (function (){var statearr_29128 = state_29123;
(statearr_29128[(8)] = inst_29029__$1);

return statearr_29128;
})();
if(inst_29032){
var statearr_29129_29190 = state_29123__$1;
(statearr_29129_29190[(1)] = (2));

} else {
var statearr_29130_29191 = state_29123__$1;
(statearr_29130_29191[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (24))){
var inst_29083 = (state_29123[(9)]);
var inst_29076 = (state_29123[(10)]);
var inst_29097 = (state_29123[(11)]);
var inst_29097__$1 = inst_29076.call(null,inst_29083);
var state_29123__$1 = (function (){var statearr_29131 = state_29123;
(statearr_29131[(11)] = inst_29097__$1);

return statearr_29131;
})();
if(cljs.core.truth_(inst_29097__$1)){
var statearr_29132_29192 = state_29123__$1;
(statearr_29132_29192[(1)] = (29));

} else {
var statearr_29133_29193 = state_29123__$1;
(statearr_29133_29193[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (4))){
var inst_29044 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
if(cljs.core.truth_(inst_29044)){
var statearr_29134_29194 = state_29123__$1;
(statearr_29134_29194[(1)] = (8));

} else {
var statearr_29135_29195 = state_29123__$1;
(statearr_29135_29195[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (15))){
var inst_29070 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
if(cljs.core.truth_(inst_29070)){
var statearr_29136_29196 = state_29123__$1;
(statearr_29136_29196[(1)] = (19));

} else {
var statearr_29137_29197 = state_29123__$1;
(statearr_29137_29197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (21))){
var inst_29075 = (state_29123[(12)]);
var inst_29075__$1 = (state_29123[(2)]);
var inst_29076 = cljs.core.get.call(null,inst_29075__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29077 = cljs.core.get.call(null,inst_29075__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29078 = cljs.core.get.call(null,inst_29075__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29123__$1 = (function (){var statearr_29138 = state_29123;
(statearr_29138[(10)] = inst_29076);

(statearr_29138[(12)] = inst_29075__$1);

(statearr_29138[(13)] = inst_29077);

return statearr_29138;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29123__$1,(22),inst_29078);
} else {
if((state_val_29124 === (31))){
var inst_29105 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
if(cljs.core.truth_(inst_29105)){
var statearr_29139_29198 = state_29123__$1;
(statearr_29139_29198[(1)] = (32));

} else {
var statearr_29140_29199 = state_29123__$1;
(statearr_29140_29199[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (32))){
var inst_29082 = (state_29123[(14)]);
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29123__$1,(35),out,inst_29082);
} else {
if((state_val_29124 === (33))){
var inst_29075 = (state_29123[(12)]);
var inst_29053 = inst_29075;
var state_29123__$1 = (function (){var statearr_29141 = state_29123;
(statearr_29141[(7)] = inst_29053);

return statearr_29141;
})();
var statearr_29142_29200 = state_29123__$1;
(statearr_29142_29200[(2)] = null);

(statearr_29142_29200[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (13))){
var inst_29053 = (state_29123[(7)]);
var inst_29060 = inst_29053.cljs$lang$protocol_mask$partition0$;
var inst_29061 = (inst_29060 & (64));
var inst_29062 = inst_29053.cljs$core$ISeq$;
var inst_29063 = (inst_29061) || (inst_29062);
var state_29123__$1 = state_29123;
if(cljs.core.truth_(inst_29063)){
var statearr_29143_29201 = state_29123__$1;
(statearr_29143_29201[(1)] = (16));

} else {
var statearr_29144_29202 = state_29123__$1;
(statearr_29144_29202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (22))){
var inst_29083 = (state_29123[(9)]);
var inst_29082 = (state_29123[(14)]);
var inst_29081 = (state_29123[(2)]);
var inst_29082__$1 = cljs.core.nth.call(null,inst_29081,(0),null);
var inst_29083__$1 = cljs.core.nth.call(null,inst_29081,(1),null);
var inst_29084 = (inst_29082__$1 == null);
var inst_29085 = cljs.core._EQ_.call(null,inst_29083__$1,change);
var inst_29086 = (inst_29084) || (inst_29085);
var state_29123__$1 = (function (){var statearr_29145 = state_29123;
(statearr_29145[(9)] = inst_29083__$1);

(statearr_29145[(14)] = inst_29082__$1);

return statearr_29145;
})();
if(cljs.core.truth_(inst_29086)){
var statearr_29146_29203 = state_29123__$1;
(statearr_29146_29203[(1)] = (23));

} else {
var statearr_29147_29204 = state_29123__$1;
(statearr_29147_29204[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (36))){
var inst_29075 = (state_29123[(12)]);
var inst_29053 = inst_29075;
var state_29123__$1 = (function (){var statearr_29148 = state_29123;
(statearr_29148[(7)] = inst_29053);

return statearr_29148;
})();
var statearr_29149_29205 = state_29123__$1;
(statearr_29149_29205[(2)] = null);

(statearr_29149_29205[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (29))){
var inst_29097 = (state_29123[(11)]);
var state_29123__$1 = state_29123;
var statearr_29150_29206 = state_29123__$1;
(statearr_29150_29206[(2)] = inst_29097);

(statearr_29150_29206[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (6))){
var state_29123__$1 = state_29123;
var statearr_29151_29207 = state_29123__$1;
(statearr_29151_29207[(2)] = false);

(statearr_29151_29207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (28))){
var inst_29093 = (state_29123[(2)]);
var inst_29094 = calc_state.call(null);
var inst_29053 = inst_29094;
var state_29123__$1 = (function (){var statearr_29152 = state_29123;
(statearr_29152[(15)] = inst_29093);

(statearr_29152[(7)] = inst_29053);

return statearr_29152;
})();
var statearr_29153_29208 = state_29123__$1;
(statearr_29153_29208[(2)] = null);

(statearr_29153_29208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (25))){
var inst_29119 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29154_29209 = state_29123__$1;
(statearr_29154_29209[(2)] = inst_29119);

(statearr_29154_29209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (34))){
var inst_29117 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29155_29210 = state_29123__$1;
(statearr_29155_29210[(2)] = inst_29117);

(statearr_29155_29210[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (17))){
var state_29123__$1 = state_29123;
var statearr_29156_29211 = state_29123__$1;
(statearr_29156_29211[(2)] = false);

(statearr_29156_29211[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (3))){
var state_29123__$1 = state_29123;
var statearr_29157_29212 = state_29123__$1;
(statearr_29157_29212[(2)] = false);

(statearr_29157_29212[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (12))){
var inst_29121 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29123__$1,inst_29121);
} else {
if((state_val_29124 === (2))){
var inst_29029 = (state_29123[(8)]);
var inst_29034 = inst_29029.cljs$lang$protocol_mask$partition0$;
var inst_29035 = (inst_29034 & (64));
var inst_29036 = inst_29029.cljs$core$ISeq$;
var inst_29037 = (inst_29035) || (inst_29036);
var state_29123__$1 = state_29123;
if(cljs.core.truth_(inst_29037)){
var statearr_29158_29213 = state_29123__$1;
(statearr_29158_29213[(1)] = (5));

} else {
var statearr_29159_29214 = state_29123__$1;
(statearr_29159_29214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (23))){
var inst_29082 = (state_29123[(14)]);
var inst_29088 = (inst_29082 == null);
var state_29123__$1 = state_29123;
if(cljs.core.truth_(inst_29088)){
var statearr_29160_29215 = state_29123__$1;
(statearr_29160_29215[(1)] = (26));

} else {
var statearr_29161_29216 = state_29123__$1;
(statearr_29161_29216[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (35))){
var inst_29108 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
if(cljs.core.truth_(inst_29108)){
var statearr_29162_29217 = state_29123__$1;
(statearr_29162_29217[(1)] = (36));

} else {
var statearr_29163_29218 = state_29123__$1;
(statearr_29163_29218[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (19))){
var inst_29053 = (state_29123[(7)]);
var inst_29072 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29053);
var state_29123__$1 = state_29123;
var statearr_29164_29219 = state_29123__$1;
(statearr_29164_29219[(2)] = inst_29072);

(statearr_29164_29219[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (11))){
var inst_29053 = (state_29123[(7)]);
var inst_29057 = (inst_29053 == null);
var inst_29058 = cljs.core.not.call(null,inst_29057);
var state_29123__$1 = state_29123;
if(inst_29058){
var statearr_29165_29220 = state_29123__$1;
(statearr_29165_29220[(1)] = (13));

} else {
var statearr_29166_29221 = state_29123__$1;
(statearr_29166_29221[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (9))){
var inst_29029 = (state_29123[(8)]);
var state_29123__$1 = state_29123;
var statearr_29167_29222 = state_29123__$1;
(statearr_29167_29222[(2)] = inst_29029);

(statearr_29167_29222[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (5))){
var state_29123__$1 = state_29123;
var statearr_29168_29223 = state_29123__$1;
(statearr_29168_29223[(2)] = true);

(statearr_29168_29223[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (14))){
var state_29123__$1 = state_29123;
var statearr_29169_29224 = state_29123__$1;
(statearr_29169_29224[(2)] = false);

(statearr_29169_29224[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (26))){
var inst_29083 = (state_29123[(9)]);
var inst_29090 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29083);
var state_29123__$1 = state_29123;
var statearr_29170_29225 = state_29123__$1;
(statearr_29170_29225[(2)] = inst_29090);

(statearr_29170_29225[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (16))){
var state_29123__$1 = state_29123;
var statearr_29171_29226 = state_29123__$1;
(statearr_29171_29226[(2)] = true);

(statearr_29171_29226[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (38))){
var inst_29113 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29172_29227 = state_29123__$1;
(statearr_29172_29227[(2)] = inst_29113);

(statearr_29172_29227[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (30))){
var inst_29083 = (state_29123[(9)]);
var inst_29076 = (state_29123[(10)]);
var inst_29077 = (state_29123[(13)]);
var inst_29100 = cljs.core.empty_QMARK_.call(null,inst_29076);
var inst_29101 = inst_29077.call(null,inst_29083);
var inst_29102 = cljs.core.not.call(null,inst_29101);
var inst_29103 = (inst_29100) && (inst_29102);
var state_29123__$1 = state_29123;
var statearr_29173_29228 = state_29123__$1;
(statearr_29173_29228[(2)] = inst_29103);

(statearr_29173_29228[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (10))){
var inst_29029 = (state_29123[(8)]);
var inst_29049 = (state_29123[(2)]);
var inst_29050 = cljs.core.get.call(null,inst_29049,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29051 = cljs.core.get.call(null,inst_29049,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29052 = cljs.core.get.call(null,inst_29049,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29053 = inst_29029;
var state_29123__$1 = (function (){var statearr_29174 = state_29123;
(statearr_29174[(16)] = inst_29051);

(statearr_29174[(17)] = inst_29050);

(statearr_29174[(18)] = inst_29052);

(statearr_29174[(7)] = inst_29053);

return statearr_29174;
})();
var statearr_29175_29229 = state_29123__$1;
(statearr_29175_29229[(2)] = null);

(statearr_29175_29229[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (18))){
var inst_29067 = (state_29123[(2)]);
var state_29123__$1 = state_29123;
var statearr_29176_29230 = state_29123__$1;
(statearr_29176_29230[(2)] = inst_29067);

(statearr_29176_29230[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (37))){
var state_29123__$1 = state_29123;
var statearr_29177_29231 = state_29123__$1;
(statearr_29177_29231[(2)] = null);

(statearr_29177_29231[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29124 === (8))){
var inst_29029 = (state_29123[(8)]);
var inst_29046 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29029);
var state_29123__$1 = state_29123;
var statearr_29178_29232 = state_29123__$1;
(statearr_29178_29232[(2)] = inst_29046);

(statearr_29178_29232[(1)] = (10));


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
});})(c__18851__auto___29186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18830__auto__,c__18851__auto___29186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18831__auto__ = null;
var cljs$core$async$mix_$_state_machine__18831__auto____0 = (function (){
var statearr_29182 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29182[(0)] = cljs$core$async$mix_$_state_machine__18831__auto__);

(statearr_29182[(1)] = (1));

return statearr_29182;
});
var cljs$core$async$mix_$_state_machine__18831__auto____1 = (function (state_29123){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_29123);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e29183){if((e29183 instanceof Object)){
var ex__18834__auto__ = e29183;
var statearr_29184_29233 = state_29123;
(statearr_29184_29233[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29123);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29183;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29234 = state_29123;
state_29123 = G__29234;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18831__auto__ = function(state_29123){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18831__auto____1.call(this,state_29123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18831__auto____0;
cljs$core$async$mix_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18831__auto____1;
return cljs$core$async$mix_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___29186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18853__auto__ = (function (){var statearr_29185 = f__18852__auto__.call(null);
(statearr_29185[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___29186);

return statearr_29185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___29186,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17482__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v,ch);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29235 = [];
var len__17884__auto___29238 = arguments.length;
var i__17885__auto___29239 = (0);
while(true){
if((i__17885__auto___29239 < len__17884__auto___29238)){
args29235.push((arguments[i__17885__auto___29239]));

var G__29240 = (i__17885__auto___29239 + (1));
i__17885__auto___29239 = G__29240;
continue;
} else {
}
break;
}

var G__29237 = args29235.length;
switch (G__29237) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29235.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17481__auto__ = (((p == null))?null:p);
var m__17482__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17481__auto__)]);
if(!((m__17482__auto__ == null))){
return m__17482__auto__.call(null,p,v);
} else {
var m__17482__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17482__auto____$1 == null))){
return m__17482__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29243 = [];
var len__17884__auto___29368 = arguments.length;
var i__17885__auto___29369 = (0);
while(true){
if((i__17885__auto___29369 < len__17884__auto___29368)){
args29243.push((arguments[i__17885__auto___29369]));

var G__29370 = (i__17885__auto___29369 + (1));
i__17885__auto___29369 = G__29370;
continue;
} else {
}
break;
}

var G__29245 = args29243.length;
switch (G__29245) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29243.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16826__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16826__auto__,mults){
return (function (p1__29242_SHARP_){
if(cljs.core.truth_(p1__29242_SHARP_.call(null,topic))){
return p1__29242_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29242_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16826__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29246 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29246 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29247){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29247 = meta29247;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29246.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29248,meta29247__$1){
var self__ = this;
var _29248__$1 = this;
return (new cljs.core.async.t_cljs$core$async29246(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29247__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29246.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29248){
var self__ = this;
var _29248__$1 = this;
return self__.meta29247;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29246.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29246.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29246.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29246.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29246.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29246.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29246.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29246.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29247","meta29247",-1732386263,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29246.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29246.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29246";

cljs.core.async.t_cljs$core$async29246.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async29246");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29246 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29246(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29247){
return (new cljs.core.async.t_cljs$core$async29246(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29247));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29246(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18851__auto___29372 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___29372,mults,ensure_mult,p){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___29372,mults,ensure_mult,p){
return (function (state_29320){
var state_val_29321 = (state_29320[(1)]);
if((state_val_29321 === (7))){
var inst_29316 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29322_29373 = state_29320__$1;
(statearr_29322_29373[(2)] = inst_29316);

(statearr_29322_29373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (20))){
var state_29320__$1 = state_29320;
var statearr_29323_29374 = state_29320__$1;
(statearr_29323_29374[(2)] = null);

(statearr_29323_29374[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (1))){
var state_29320__$1 = state_29320;
var statearr_29324_29375 = state_29320__$1;
(statearr_29324_29375[(2)] = null);

(statearr_29324_29375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (24))){
var inst_29299 = (state_29320[(7)]);
var inst_29308 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29299);
var state_29320__$1 = state_29320;
var statearr_29325_29376 = state_29320__$1;
(statearr_29325_29376[(2)] = inst_29308);

(statearr_29325_29376[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (4))){
var inst_29251 = (state_29320[(8)]);
var inst_29251__$1 = (state_29320[(2)]);
var inst_29252 = (inst_29251__$1 == null);
var state_29320__$1 = (function (){var statearr_29326 = state_29320;
(statearr_29326[(8)] = inst_29251__$1);

return statearr_29326;
})();
if(cljs.core.truth_(inst_29252)){
var statearr_29327_29377 = state_29320__$1;
(statearr_29327_29377[(1)] = (5));

} else {
var statearr_29328_29378 = state_29320__$1;
(statearr_29328_29378[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (15))){
var inst_29293 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29329_29379 = state_29320__$1;
(statearr_29329_29379[(2)] = inst_29293);

(statearr_29329_29379[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (21))){
var inst_29313 = (state_29320[(2)]);
var state_29320__$1 = (function (){var statearr_29330 = state_29320;
(statearr_29330[(9)] = inst_29313);

return statearr_29330;
})();
var statearr_29331_29380 = state_29320__$1;
(statearr_29331_29380[(2)] = null);

(statearr_29331_29380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (13))){
var inst_29275 = (state_29320[(10)]);
var inst_29277 = cljs.core.chunked_seq_QMARK_.call(null,inst_29275);
var state_29320__$1 = state_29320;
if(inst_29277){
var statearr_29332_29381 = state_29320__$1;
(statearr_29332_29381[(1)] = (16));

} else {
var statearr_29333_29382 = state_29320__$1;
(statearr_29333_29382[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (22))){
var inst_29305 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
if(cljs.core.truth_(inst_29305)){
var statearr_29334_29383 = state_29320__$1;
(statearr_29334_29383[(1)] = (23));

} else {
var statearr_29335_29384 = state_29320__$1;
(statearr_29335_29384[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (6))){
var inst_29301 = (state_29320[(11)]);
var inst_29251 = (state_29320[(8)]);
var inst_29299 = (state_29320[(7)]);
var inst_29299__$1 = topic_fn.call(null,inst_29251);
var inst_29300 = cljs.core.deref.call(null,mults);
var inst_29301__$1 = cljs.core.get.call(null,inst_29300,inst_29299__$1);
var state_29320__$1 = (function (){var statearr_29336 = state_29320;
(statearr_29336[(11)] = inst_29301__$1);

(statearr_29336[(7)] = inst_29299__$1);

return statearr_29336;
})();
if(cljs.core.truth_(inst_29301__$1)){
var statearr_29337_29385 = state_29320__$1;
(statearr_29337_29385[(1)] = (19));

} else {
var statearr_29338_29386 = state_29320__$1;
(statearr_29338_29386[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (25))){
var inst_29310 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29339_29387 = state_29320__$1;
(statearr_29339_29387[(2)] = inst_29310);

(statearr_29339_29387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (17))){
var inst_29275 = (state_29320[(10)]);
var inst_29284 = cljs.core.first.call(null,inst_29275);
var inst_29285 = cljs.core.async.muxch_STAR_.call(null,inst_29284);
var inst_29286 = cljs.core.async.close_BANG_.call(null,inst_29285);
var inst_29287 = cljs.core.next.call(null,inst_29275);
var inst_29261 = inst_29287;
var inst_29262 = null;
var inst_29263 = (0);
var inst_29264 = (0);
var state_29320__$1 = (function (){var statearr_29340 = state_29320;
(statearr_29340[(12)] = inst_29262);

(statearr_29340[(13)] = inst_29263);

(statearr_29340[(14)] = inst_29264);

(statearr_29340[(15)] = inst_29286);

(statearr_29340[(16)] = inst_29261);

return statearr_29340;
})();
var statearr_29341_29388 = state_29320__$1;
(statearr_29341_29388[(2)] = null);

(statearr_29341_29388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (3))){
var inst_29318 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29320__$1,inst_29318);
} else {
if((state_val_29321 === (12))){
var inst_29295 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29342_29389 = state_29320__$1;
(statearr_29342_29389[(2)] = inst_29295);

(statearr_29342_29389[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (2))){
var state_29320__$1 = state_29320;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29320__$1,(4),ch);
} else {
if((state_val_29321 === (23))){
var state_29320__$1 = state_29320;
var statearr_29343_29390 = state_29320__$1;
(statearr_29343_29390[(2)] = null);

(statearr_29343_29390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (19))){
var inst_29301 = (state_29320[(11)]);
var inst_29251 = (state_29320[(8)]);
var inst_29303 = cljs.core.async.muxch_STAR_.call(null,inst_29301);
var state_29320__$1 = state_29320;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29320__$1,(22),inst_29303,inst_29251);
} else {
if((state_val_29321 === (11))){
var inst_29275 = (state_29320[(10)]);
var inst_29261 = (state_29320[(16)]);
var inst_29275__$1 = cljs.core.seq.call(null,inst_29261);
var state_29320__$1 = (function (){var statearr_29344 = state_29320;
(statearr_29344[(10)] = inst_29275__$1);

return statearr_29344;
})();
if(inst_29275__$1){
var statearr_29345_29391 = state_29320__$1;
(statearr_29345_29391[(1)] = (13));

} else {
var statearr_29346_29392 = state_29320__$1;
(statearr_29346_29392[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (9))){
var inst_29297 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29347_29393 = state_29320__$1;
(statearr_29347_29393[(2)] = inst_29297);

(statearr_29347_29393[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (5))){
var inst_29258 = cljs.core.deref.call(null,mults);
var inst_29259 = cljs.core.vals.call(null,inst_29258);
var inst_29260 = cljs.core.seq.call(null,inst_29259);
var inst_29261 = inst_29260;
var inst_29262 = null;
var inst_29263 = (0);
var inst_29264 = (0);
var state_29320__$1 = (function (){var statearr_29348 = state_29320;
(statearr_29348[(12)] = inst_29262);

(statearr_29348[(13)] = inst_29263);

(statearr_29348[(14)] = inst_29264);

(statearr_29348[(16)] = inst_29261);

return statearr_29348;
})();
var statearr_29349_29394 = state_29320__$1;
(statearr_29349_29394[(2)] = null);

(statearr_29349_29394[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (14))){
var state_29320__$1 = state_29320;
var statearr_29353_29395 = state_29320__$1;
(statearr_29353_29395[(2)] = null);

(statearr_29353_29395[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (16))){
var inst_29275 = (state_29320[(10)]);
var inst_29279 = cljs.core.chunk_first.call(null,inst_29275);
var inst_29280 = cljs.core.chunk_rest.call(null,inst_29275);
var inst_29281 = cljs.core.count.call(null,inst_29279);
var inst_29261 = inst_29280;
var inst_29262 = inst_29279;
var inst_29263 = inst_29281;
var inst_29264 = (0);
var state_29320__$1 = (function (){var statearr_29354 = state_29320;
(statearr_29354[(12)] = inst_29262);

(statearr_29354[(13)] = inst_29263);

(statearr_29354[(14)] = inst_29264);

(statearr_29354[(16)] = inst_29261);

return statearr_29354;
})();
var statearr_29355_29396 = state_29320__$1;
(statearr_29355_29396[(2)] = null);

(statearr_29355_29396[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (10))){
var inst_29262 = (state_29320[(12)]);
var inst_29263 = (state_29320[(13)]);
var inst_29264 = (state_29320[(14)]);
var inst_29261 = (state_29320[(16)]);
var inst_29269 = cljs.core._nth.call(null,inst_29262,inst_29264);
var inst_29270 = cljs.core.async.muxch_STAR_.call(null,inst_29269);
var inst_29271 = cljs.core.async.close_BANG_.call(null,inst_29270);
var inst_29272 = (inst_29264 + (1));
var tmp29350 = inst_29262;
var tmp29351 = inst_29263;
var tmp29352 = inst_29261;
var inst_29261__$1 = tmp29352;
var inst_29262__$1 = tmp29350;
var inst_29263__$1 = tmp29351;
var inst_29264__$1 = inst_29272;
var state_29320__$1 = (function (){var statearr_29356 = state_29320;
(statearr_29356[(12)] = inst_29262__$1);

(statearr_29356[(13)] = inst_29263__$1);

(statearr_29356[(14)] = inst_29264__$1);

(statearr_29356[(17)] = inst_29271);

(statearr_29356[(16)] = inst_29261__$1);

return statearr_29356;
})();
var statearr_29357_29397 = state_29320__$1;
(statearr_29357_29397[(2)] = null);

(statearr_29357_29397[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (18))){
var inst_29290 = (state_29320[(2)]);
var state_29320__$1 = state_29320;
var statearr_29358_29398 = state_29320__$1;
(statearr_29358_29398[(2)] = inst_29290);

(statearr_29358_29398[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29321 === (8))){
var inst_29263 = (state_29320[(13)]);
var inst_29264 = (state_29320[(14)]);
var inst_29266 = (inst_29264 < inst_29263);
var inst_29267 = inst_29266;
var state_29320__$1 = state_29320;
if(cljs.core.truth_(inst_29267)){
var statearr_29359_29399 = state_29320__$1;
(statearr_29359_29399[(1)] = (10));

} else {
var statearr_29360_29400 = state_29320__$1;
(statearr_29360_29400[(1)] = (11));

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
});})(c__18851__auto___29372,mults,ensure_mult,p))
;
return ((function (switch__18830__auto__,c__18851__auto___29372,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_29364 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29364[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_29364[(1)] = (1));

return statearr_29364;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_29320){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_29320);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e29365){if((e29365 instanceof Object)){
var ex__18834__auto__ = e29365;
var statearr_29366_29401 = state_29320;
(statearr_29366_29401[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29320);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29365;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29402 = state_29320;
state_29320 = G__29402;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_29320){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_29320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___29372,mults,ensure_mult,p))
})();
var state__18853__auto__ = (function (){var statearr_29367 = f__18852__auto__.call(null);
(statearr_29367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___29372);

return statearr_29367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___29372,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29403 = [];
var len__17884__auto___29406 = arguments.length;
var i__17885__auto___29407 = (0);
while(true){
if((i__17885__auto___29407 < len__17884__auto___29406)){
args29403.push((arguments[i__17885__auto___29407]));

var G__29408 = (i__17885__auto___29407 + (1));
i__17885__auto___29407 = G__29408;
continue;
} else {
}
break;
}

var G__29405 = args29403.length;
switch (G__29405) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29403.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29410 = [];
var len__17884__auto___29413 = arguments.length;
var i__17885__auto___29414 = (0);
while(true){
if((i__17885__auto___29414 < len__17884__auto___29413)){
args29410.push((arguments[i__17885__auto___29414]));

var G__29415 = (i__17885__auto___29414 + (1));
i__17885__auto___29414 = G__29415;
continue;
} else {
}
break;
}

var G__29412 = args29410.length;
switch (G__29412) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29410.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29417 = [];
var len__17884__auto___29488 = arguments.length;
var i__17885__auto___29489 = (0);
while(true){
if((i__17885__auto___29489 < len__17884__auto___29488)){
args29417.push((arguments[i__17885__auto___29489]));

var G__29490 = (i__17885__auto___29489 + (1));
i__17885__auto___29489 = G__29490;
continue;
} else {
}
break;
}

var G__29419 = args29417.length;
switch (G__29419) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29417.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18851__auto___29492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___29492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___29492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29458){
var state_val_29459 = (state_29458[(1)]);
if((state_val_29459 === (7))){
var state_29458__$1 = state_29458;
var statearr_29460_29493 = state_29458__$1;
(statearr_29460_29493[(2)] = null);

(statearr_29460_29493[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (1))){
var state_29458__$1 = state_29458;
var statearr_29461_29494 = state_29458__$1;
(statearr_29461_29494[(2)] = null);

(statearr_29461_29494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (4))){
var inst_29422 = (state_29458[(7)]);
var inst_29424 = (inst_29422 < cnt);
var state_29458__$1 = state_29458;
if(cljs.core.truth_(inst_29424)){
var statearr_29462_29495 = state_29458__$1;
(statearr_29462_29495[(1)] = (6));

} else {
var statearr_29463_29496 = state_29458__$1;
(statearr_29463_29496[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (15))){
var inst_29454 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
var statearr_29464_29497 = state_29458__$1;
(statearr_29464_29497[(2)] = inst_29454);

(statearr_29464_29497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (13))){
var inst_29447 = cljs.core.async.close_BANG_.call(null,out);
var state_29458__$1 = state_29458;
var statearr_29465_29498 = state_29458__$1;
(statearr_29465_29498[(2)] = inst_29447);

(statearr_29465_29498[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (6))){
var state_29458__$1 = state_29458;
var statearr_29466_29499 = state_29458__$1;
(statearr_29466_29499[(2)] = null);

(statearr_29466_29499[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (3))){
var inst_29456 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29458__$1,inst_29456);
} else {
if((state_val_29459 === (12))){
var inst_29444 = (state_29458[(8)]);
var inst_29444__$1 = (state_29458[(2)]);
var inst_29445 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29444__$1);
var state_29458__$1 = (function (){var statearr_29467 = state_29458;
(statearr_29467[(8)] = inst_29444__$1);

return statearr_29467;
})();
if(cljs.core.truth_(inst_29445)){
var statearr_29468_29500 = state_29458__$1;
(statearr_29468_29500[(1)] = (13));

} else {
var statearr_29469_29501 = state_29458__$1;
(statearr_29469_29501[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (2))){
var inst_29421 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29422 = (0);
var state_29458__$1 = (function (){var statearr_29470 = state_29458;
(statearr_29470[(7)] = inst_29422);

(statearr_29470[(9)] = inst_29421);

return statearr_29470;
})();
var statearr_29471_29502 = state_29458__$1;
(statearr_29471_29502[(2)] = null);

(statearr_29471_29502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (11))){
var inst_29422 = (state_29458[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29458,(10),Object,null,(9));
var inst_29431 = chs__$1.call(null,inst_29422);
var inst_29432 = done.call(null,inst_29422);
var inst_29433 = cljs.core.async.take_BANG_.call(null,inst_29431,inst_29432);
var state_29458__$1 = state_29458;
var statearr_29472_29503 = state_29458__$1;
(statearr_29472_29503[(2)] = inst_29433);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (9))){
var inst_29422 = (state_29458[(7)]);
var inst_29435 = (state_29458[(2)]);
var inst_29436 = (inst_29422 + (1));
var inst_29422__$1 = inst_29436;
var state_29458__$1 = (function (){var statearr_29473 = state_29458;
(statearr_29473[(7)] = inst_29422__$1);

(statearr_29473[(10)] = inst_29435);

return statearr_29473;
})();
var statearr_29474_29504 = state_29458__$1;
(statearr_29474_29504[(2)] = null);

(statearr_29474_29504[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (5))){
var inst_29442 = (state_29458[(2)]);
var state_29458__$1 = (function (){var statearr_29475 = state_29458;
(statearr_29475[(11)] = inst_29442);

return statearr_29475;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29458__$1,(12),dchan);
} else {
if((state_val_29459 === (14))){
var inst_29444 = (state_29458[(8)]);
var inst_29449 = cljs.core.apply.call(null,f,inst_29444);
var state_29458__$1 = state_29458;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29458__$1,(16),out,inst_29449);
} else {
if((state_val_29459 === (16))){
var inst_29451 = (state_29458[(2)]);
var state_29458__$1 = (function (){var statearr_29476 = state_29458;
(statearr_29476[(12)] = inst_29451);

return statearr_29476;
})();
var statearr_29477_29505 = state_29458__$1;
(statearr_29477_29505[(2)] = null);

(statearr_29477_29505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (10))){
var inst_29426 = (state_29458[(2)]);
var inst_29427 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29458__$1 = (function (){var statearr_29478 = state_29458;
(statearr_29478[(13)] = inst_29426);

return statearr_29478;
})();
var statearr_29479_29506 = state_29458__$1;
(statearr_29479_29506[(2)] = inst_29427);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29458__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29459 === (8))){
var inst_29440 = (state_29458[(2)]);
var state_29458__$1 = state_29458;
var statearr_29480_29507 = state_29458__$1;
(statearr_29480_29507[(2)] = inst_29440);

(statearr_29480_29507[(1)] = (5));


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
});})(c__18851__auto___29492,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18830__auto__,c__18851__auto___29492,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_29484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29484[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_29484[(1)] = (1));

return statearr_29484;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_29458){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_29458);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e29485){if((e29485 instanceof Object)){
var ex__18834__auto__ = e29485;
var statearr_29486_29508 = state_29458;
(statearr_29486_29508[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29458);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29509 = state_29458;
state_29458 = G__29509;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_29458){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_29458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___29492,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18853__auto__ = (function (){var statearr_29487 = f__18852__auto__.call(null);
(statearr_29487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___29492);

return statearr_29487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___29492,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29511 = [];
var len__17884__auto___29567 = arguments.length;
var i__17885__auto___29568 = (0);
while(true){
if((i__17885__auto___29568 < len__17884__auto___29567)){
args29511.push((arguments[i__17885__auto___29568]));

var G__29569 = (i__17885__auto___29568 + (1));
i__17885__auto___29568 = G__29569;
continue;
} else {
}
break;
}

var G__29513 = args29511.length;
switch (G__29513) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29511.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18851__auto___29571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___29571,out){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___29571,out){
return (function (state_29543){
var state_val_29544 = (state_29543[(1)]);
if((state_val_29544 === (7))){
var inst_29522 = (state_29543[(7)]);
var inst_29523 = (state_29543[(8)]);
var inst_29522__$1 = (state_29543[(2)]);
var inst_29523__$1 = cljs.core.nth.call(null,inst_29522__$1,(0),null);
var inst_29524 = cljs.core.nth.call(null,inst_29522__$1,(1),null);
var inst_29525 = (inst_29523__$1 == null);
var state_29543__$1 = (function (){var statearr_29545 = state_29543;
(statearr_29545[(9)] = inst_29524);

(statearr_29545[(7)] = inst_29522__$1);

(statearr_29545[(8)] = inst_29523__$1);

return statearr_29545;
})();
if(cljs.core.truth_(inst_29525)){
var statearr_29546_29572 = state_29543__$1;
(statearr_29546_29572[(1)] = (8));

} else {
var statearr_29547_29573 = state_29543__$1;
(statearr_29547_29573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (1))){
var inst_29514 = cljs.core.vec.call(null,chs);
var inst_29515 = inst_29514;
var state_29543__$1 = (function (){var statearr_29548 = state_29543;
(statearr_29548[(10)] = inst_29515);

return statearr_29548;
})();
var statearr_29549_29574 = state_29543__$1;
(statearr_29549_29574[(2)] = null);

(statearr_29549_29574[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (4))){
var inst_29515 = (state_29543[(10)]);
var state_29543__$1 = state_29543;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29543__$1,(7),inst_29515);
} else {
if((state_val_29544 === (6))){
var inst_29539 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29550_29575 = state_29543__$1;
(statearr_29550_29575[(2)] = inst_29539);

(statearr_29550_29575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (3))){
var inst_29541 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29543__$1,inst_29541);
} else {
if((state_val_29544 === (2))){
var inst_29515 = (state_29543[(10)]);
var inst_29517 = cljs.core.count.call(null,inst_29515);
var inst_29518 = (inst_29517 > (0));
var state_29543__$1 = state_29543;
if(cljs.core.truth_(inst_29518)){
var statearr_29552_29576 = state_29543__$1;
(statearr_29552_29576[(1)] = (4));

} else {
var statearr_29553_29577 = state_29543__$1;
(statearr_29553_29577[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (11))){
var inst_29515 = (state_29543[(10)]);
var inst_29532 = (state_29543[(2)]);
var tmp29551 = inst_29515;
var inst_29515__$1 = tmp29551;
var state_29543__$1 = (function (){var statearr_29554 = state_29543;
(statearr_29554[(11)] = inst_29532);

(statearr_29554[(10)] = inst_29515__$1);

return statearr_29554;
})();
var statearr_29555_29578 = state_29543__$1;
(statearr_29555_29578[(2)] = null);

(statearr_29555_29578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (9))){
var inst_29523 = (state_29543[(8)]);
var state_29543__$1 = state_29543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29543__$1,(11),out,inst_29523);
} else {
if((state_val_29544 === (5))){
var inst_29537 = cljs.core.async.close_BANG_.call(null,out);
var state_29543__$1 = state_29543;
var statearr_29556_29579 = state_29543__$1;
(statearr_29556_29579[(2)] = inst_29537);

(statearr_29556_29579[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (10))){
var inst_29535 = (state_29543[(2)]);
var state_29543__$1 = state_29543;
var statearr_29557_29580 = state_29543__$1;
(statearr_29557_29580[(2)] = inst_29535);

(statearr_29557_29580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29544 === (8))){
var inst_29524 = (state_29543[(9)]);
var inst_29522 = (state_29543[(7)]);
var inst_29523 = (state_29543[(8)]);
var inst_29515 = (state_29543[(10)]);
var inst_29527 = (function (){var cs = inst_29515;
var vec__29520 = inst_29522;
var v = inst_29523;
var c = inst_29524;
return ((function (cs,vec__29520,v,c,inst_29524,inst_29522,inst_29523,inst_29515,state_val_29544,c__18851__auto___29571,out){
return (function (p1__29510_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29510_SHARP_);
});
;})(cs,vec__29520,v,c,inst_29524,inst_29522,inst_29523,inst_29515,state_val_29544,c__18851__auto___29571,out))
})();
var inst_29528 = cljs.core.filterv.call(null,inst_29527,inst_29515);
var inst_29515__$1 = inst_29528;
var state_29543__$1 = (function (){var statearr_29558 = state_29543;
(statearr_29558[(10)] = inst_29515__$1);

return statearr_29558;
})();
var statearr_29559_29581 = state_29543__$1;
(statearr_29559_29581[(2)] = null);

(statearr_29559_29581[(1)] = (2));


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
});})(c__18851__auto___29571,out))
;
return ((function (switch__18830__auto__,c__18851__auto___29571,out){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_29563 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29563[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_29563[(1)] = (1));

return statearr_29563;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_29543){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_29543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e29564){if((e29564 instanceof Object)){
var ex__18834__auto__ = e29564;
var statearr_29565_29582 = state_29543;
(statearr_29565_29582[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29583 = state_29543;
state_29543 = G__29583;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_29543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_29543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___29571,out))
})();
var state__18853__auto__ = (function (){var statearr_29566 = f__18852__auto__.call(null);
(statearr_29566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___29571);

return statearr_29566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___29571,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29584 = [];
var len__17884__auto___29633 = arguments.length;
var i__17885__auto___29634 = (0);
while(true){
if((i__17885__auto___29634 < len__17884__auto___29633)){
args29584.push((arguments[i__17885__auto___29634]));

var G__29635 = (i__17885__auto___29634 + (1));
i__17885__auto___29634 = G__29635;
continue;
} else {
}
break;
}

var G__29586 = args29584.length;
switch (G__29586) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29584.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18851__auto___29637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___29637,out){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___29637,out){
return (function (state_29610){
var state_val_29611 = (state_29610[(1)]);
if((state_val_29611 === (7))){
var inst_29592 = (state_29610[(7)]);
var inst_29592__$1 = (state_29610[(2)]);
var inst_29593 = (inst_29592__$1 == null);
var inst_29594 = cljs.core.not.call(null,inst_29593);
var state_29610__$1 = (function (){var statearr_29612 = state_29610;
(statearr_29612[(7)] = inst_29592__$1);

return statearr_29612;
})();
if(inst_29594){
var statearr_29613_29638 = state_29610__$1;
(statearr_29613_29638[(1)] = (8));

} else {
var statearr_29614_29639 = state_29610__$1;
(statearr_29614_29639[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (1))){
var inst_29587 = (0);
var state_29610__$1 = (function (){var statearr_29615 = state_29610;
(statearr_29615[(8)] = inst_29587);

return statearr_29615;
})();
var statearr_29616_29640 = state_29610__$1;
(statearr_29616_29640[(2)] = null);

(statearr_29616_29640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (4))){
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29610__$1,(7),ch);
} else {
if((state_val_29611 === (6))){
var inst_29605 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29617_29641 = state_29610__$1;
(statearr_29617_29641[(2)] = inst_29605);

(statearr_29617_29641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (3))){
var inst_29607 = (state_29610[(2)]);
var inst_29608 = cljs.core.async.close_BANG_.call(null,out);
var state_29610__$1 = (function (){var statearr_29618 = state_29610;
(statearr_29618[(9)] = inst_29607);

return statearr_29618;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29610__$1,inst_29608);
} else {
if((state_val_29611 === (2))){
var inst_29587 = (state_29610[(8)]);
var inst_29589 = (inst_29587 < n);
var state_29610__$1 = state_29610;
if(cljs.core.truth_(inst_29589)){
var statearr_29619_29642 = state_29610__$1;
(statearr_29619_29642[(1)] = (4));

} else {
var statearr_29620_29643 = state_29610__$1;
(statearr_29620_29643[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (11))){
var inst_29587 = (state_29610[(8)]);
var inst_29597 = (state_29610[(2)]);
var inst_29598 = (inst_29587 + (1));
var inst_29587__$1 = inst_29598;
var state_29610__$1 = (function (){var statearr_29621 = state_29610;
(statearr_29621[(8)] = inst_29587__$1);

(statearr_29621[(10)] = inst_29597);

return statearr_29621;
})();
var statearr_29622_29644 = state_29610__$1;
(statearr_29622_29644[(2)] = null);

(statearr_29622_29644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (9))){
var state_29610__$1 = state_29610;
var statearr_29623_29645 = state_29610__$1;
(statearr_29623_29645[(2)] = null);

(statearr_29623_29645[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (5))){
var state_29610__$1 = state_29610;
var statearr_29624_29646 = state_29610__$1;
(statearr_29624_29646[(2)] = null);

(statearr_29624_29646[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (10))){
var inst_29602 = (state_29610[(2)]);
var state_29610__$1 = state_29610;
var statearr_29625_29647 = state_29610__$1;
(statearr_29625_29647[(2)] = inst_29602);

(statearr_29625_29647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29611 === (8))){
var inst_29592 = (state_29610[(7)]);
var state_29610__$1 = state_29610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29610__$1,(11),out,inst_29592);
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
});})(c__18851__auto___29637,out))
;
return ((function (switch__18830__auto__,c__18851__auto___29637,out){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_29629 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29629[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_29629[(1)] = (1));

return statearr_29629;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_29610){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_29610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e29630){if((e29630 instanceof Object)){
var ex__18834__auto__ = e29630;
var statearr_29631_29648 = state_29610;
(statearr_29631_29648[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29649 = state_29610;
state_29610 = G__29649;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_29610){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_29610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___29637,out))
})();
var state__18853__auto__ = (function (){var statearr_29632 = f__18852__auto__.call(null);
(statearr_29632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___29637);

return statearr_29632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___29637,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29657 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29657 = (function (map_LT_,f,ch,meta29658){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29658 = meta29658;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29657.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29659,meta29658__$1){
var self__ = this;
var _29659__$1 = this;
return (new cljs.core.async.t_cljs$core$async29657(self__.map_LT_,self__.f,self__.ch,meta29658__$1));
});

cljs.core.async.t_cljs$core$async29657.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29659){
var self__ = this;
var _29659__$1 = this;
return self__.meta29658;
});

cljs.core.async.t_cljs$core$async29657.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29657.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29657.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29657.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29657.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29660 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29660 = (function (map_LT_,f,ch,meta29658,_,fn1,meta29661){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29658 = meta29658;
this._ = _;
this.fn1 = fn1;
this.meta29661 = meta29661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29662,meta29661__$1){
var self__ = this;
var _29662__$1 = this;
return (new cljs.core.async.t_cljs$core$async29660(self__.map_LT_,self__.f,self__.ch,self__.meta29658,self__._,self__.fn1,meta29661__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29662){
var self__ = this;
var _29662__$1 = this;
return self__.meta29661;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29660.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29650_SHARP_){
return f1.call(null,(((p1__29650_SHARP_ == null))?null:self__.f.call(null,p1__29650_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29660.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29658","meta29658",-771248820,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29657","cljs.core.async/t_cljs$core$async29657",501645133,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29661","meta29661",1555836631,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29660.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29660.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29660";

cljs.core.async.t_cljs$core$async29660.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async29660");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29660 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29660(map_LT___$1,f__$1,ch__$1,meta29658__$1,___$2,fn1__$1,meta29661){
return (new cljs.core.async.t_cljs$core$async29660(map_LT___$1,f__$1,ch__$1,meta29658__$1,___$2,fn1__$1,meta29661));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29660(self__.map_LT_,self__.f,self__.ch,self__.meta29658,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16814__auto__ = ret;
if(cljs.core.truth_(and__16814__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16814__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29657.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29657.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29657.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29658","meta29658",-771248820,null)], null);
});

cljs.core.async.t_cljs$core$async29657.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29657.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29657";

cljs.core.async.t_cljs$core$async29657.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async29657");
});

cljs.core.async.__GT_t_cljs$core$async29657 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29657(map_LT___$1,f__$1,ch__$1,meta29658){
return (new cljs.core.async.t_cljs$core$async29657(map_LT___$1,f__$1,ch__$1,meta29658));
});

}

return (new cljs.core.async.t_cljs$core$async29657(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29666 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29666 = (function (map_GT_,f,ch,meta29667){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29667 = meta29667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29668,meta29667__$1){
var self__ = this;
var _29668__$1 = this;
return (new cljs.core.async.t_cljs$core$async29666(self__.map_GT_,self__.f,self__.ch,meta29667__$1));
});

cljs.core.async.t_cljs$core$async29666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29668){
var self__ = this;
var _29668__$1 = this;
return self__.meta29667;
});

cljs.core.async.t_cljs$core$async29666.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29666.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29666.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29666.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29666.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29666.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29667","meta29667",1133533025,null)], null);
});

cljs.core.async.t_cljs$core$async29666.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29666";

cljs.core.async.t_cljs$core$async29666.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async29666");
});

cljs.core.async.__GT_t_cljs$core$async29666 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29666(map_GT___$1,f__$1,ch__$1,meta29667){
return (new cljs.core.async.t_cljs$core$async29666(map_GT___$1,f__$1,ch__$1,meta29667));
});

}

return (new cljs.core.async.t_cljs$core$async29666(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29672 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29672 = (function (filter_GT_,p,ch,meta29673){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29673 = meta29673;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29672.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29674,meta29673__$1){
var self__ = this;
var _29674__$1 = this;
return (new cljs.core.async.t_cljs$core$async29672(self__.filter_GT_,self__.p,self__.ch,meta29673__$1));
});

cljs.core.async.t_cljs$core$async29672.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29674){
var self__ = this;
var _29674__$1 = this;
return self__.meta29673;
});

cljs.core.async.t_cljs$core$async29672.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29672.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29672.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29672.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29672.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29672.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29672.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29672.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29673","meta29673",-312286538,null)], null);
});

cljs.core.async.t_cljs$core$async29672.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29672.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29672";

cljs.core.async.t_cljs$core$async29672.cljs$lang$ctorPrWriter = (function (this__17424__auto__,writer__17425__auto__,opt__17426__auto__){
return cljs.core._write.call(null,writer__17425__auto__,"cljs.core.async/t_cljs$core$async29672");
});

cljs.core.async.__GT_t_cljs$core$async29672 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29672(filter_GT___$1,p__$1,ch__$1,meta29673){
return (new cljs.core.async.t_cljs$core$async29672(filter_GT___$1,p__$1,ch__$1,meta29673));
});

}

return (new cljs.core.async.t_cljs$core$async29672(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29675 = [];
var len__17884__auto___29719 = arguments.length;
var i__17885__auto___29720 = (0);
while(true){
if((i__17885__auto___29720 < len__17884__auto___29719)){
args29675.push((arguments[i__17885__auto___29720]));

var G__29721 = (i__17885__auto___29720 + (1));
i__17885__auto___29720 = G__29721;
continue;
} else {
}
break;
}

var G__29677 = args29675.length;
switch (G__29677) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29675.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18851__auto___29723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___29723,out){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___29723,out){
return (function (state_29698){
var state_val_29699 = (state_29698[(1)]);
if((state_val_29699 === (7))){
var inst_29694 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29700_29724 = state_29698__$1;
(statearr_29700_29724[(2)] = inst_29694);

(statearr_29700_29724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (1))){
var state_29698__$1 = state_29698;
var statearr_29701_29725 = state_29698__$1;
(statearr_29701_29725[(2)] = null);

(statearr_29701_29725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (4))){
var inst_29680 = (state_29698[(7)]);
var inst_29680__$1 = (state_29698[(2)]);
var inst_29681 = (inst_29680__$1 == null);
var state_29698__$1 = (function (){var statearr_29702 = state_29698;
(statearr_29702[(7)] = inst_29680__$1);

return statearr_29702;
})();
if(cljs.core.truth_(inst_29681)){
var statearr_29703_29726 = state_29698__$1;
(statearr_29703_29726[(1)] = (5));

} else {
var statearr_29704_29727 = state_29698__$1;
(statearr_29704_29727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (6))){
var inst_29680 = (state_29698[(7)]);
var inst_29685 = p.call(null,inst_29680);
var state_29698__$1 = state_29698;
if(cljs.core.truth_(inst_29685)){
var statearr_29705_29728 = state_29698__$1;
(statearr_29705_29728[(1)] = (8));

} else {
var statearr_29706_29729 = state_29698__$1;
(statearr_29706_29729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (3))){
var inst_29696 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29698__$1,inst_29696);
} else {
if((state_val_29699 === (2))){
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29698__$1,(4),ch);
} else {
if((state_val_29699 === (11))){
var inst_29688 = (state_29698[(2)]);
var state_29698__$1 = state_29698;
var statearr_29707_29730 = state_29698__$1;
(statearr_29707_29730[(2)] = inst_29688);

(statearr_29707_29730[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (9))){
var state_29698__$1 = state_29698;
var statearr_29708_29731 = state_29698__$1;
(statearr_29708_29731[(2)] = null);

(statearr_29708_29731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (5))){
var inst_29683 = cljs.core.async.close_BANG_.call(null,out);
var state_29698__$1 = state_29698;
var statearr_29709_29732 = state_29698__$1;
(statearr_29709_29732[(2)] = inst_29683);

(statearr_29709_29732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (10))){
var inst_29691 = (state_29698[(2)]);
var state_29698__$1 = (function (){var statearr_29710 = state_29698;
(statearr_29710[(8)] = inst_29691);

return statearr_29710;
})();
var statearr_29711_29733 = state_29698__$1;
(statearr_29711_29733[(2)] = null);

(statearr_29711_29733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29699 === (8))){
var inst_29680 = (state_29698[(7)]);
var state_29698__$1 = state_29698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29698__$1,(11),out,inst_29680);
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
});})(c__18851__auto___29723,out))
;
return ((function (switch__18830__auto__,c__18851__auto___29723,out){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_29715 = [null,null,null,null,null,null,null,null,null];
(statearr_29715[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_29715[(1)] = (1));

return statearr_29715;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_29698){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_29698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e29716){if((e29716 instanceof Object)){
var ex__18834__auto__ = e29716;
var statearr_29717_29734 = state_29698;
(statearr_29717_29734[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29735 = state_29698;
state_29698 = G__29735;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_29698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_29698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___29723,out))
})();
var state__18853__auto__ = (function (){var statearr_29718 = f__18852__auto__.call(null);
(statearr_29718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___29723);

return statearr_29718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___29723,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29736 = [];
var len__17884__auto___29739 = arguments.length;
var i__17885__auto___29740 = (0);
while(true){
if((i__17885__auto___29740 < len__17884__auto___29739)){
args29736.push((arguments[i__17885__auto___29740]));

var G__29741 = (i__17885__auto___29740 + (1));
i__17885__auto___29740 = G__29741;
continue;
} else {
}
break;
}

var G__29738 = args29736.length;
switch (G__29738) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29736.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__){
return (function (state_29908){
var state_val_29909 = (state_29908[(1)]);
if((state_val_29909 === (7))){
var inst_29904 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29910_29951 = state_29908__$1;
(statearr_29910_29951[(2)] = inst_29904);

(statearr_29910_29951[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (20))){
var inst_29874 = (state_29908[(7)]);
var inst_29885 = (state_29908[(2)]);
var inst_29886 = cljs.core.next.call(null,inst_29874);
var inst_29860 = inst_29886;
var inst_29861 = null;
var inst_29862 = (0);
var inst_29863 = (0);
var state_29908__$1 = (function (){var statearr_29911 = state_29908;
(statearr_29911[(8)] = inst_29861);

(statearr_29911[(9)] = inst_29863);

(statearr_29911[(10)] = inst_29860);

(statearr_29911[(11)] = inst_29885);

(statearr_29911[(12)] = inst_29862);

return statearr_29911;
})();
var statearr_29912_29952 = state_29908__$1;
(statearr_29912_29952[(2)] = null);

(statearr_29912_29952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (1))){
var state_29908__$1 = state_29908;
var statearr_29913_29953 = state_29908__$1;
(statearr_29913_29953[(2)] = null);

(statearr_29913_29953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (4))){
var inst_29849 = (state_29908[(13)]);
var inst_29849__$1 = (state_29908[(2)]);
var inst_29850 = (inst_29849__$1 == null);
var state_29908__$1 = (function (){var statearr_29914 = state_29908;
(statearr_29914[(13)] = inst_29849__$1);

return statearr_29914;
})();
if(cljs.core.truth_(inst_29850)){
var statearr_29915_29954 = state_29908__$1;
(statearr_29915_29954[(1)] = (5));

} else {
var statearr_29916_29955 = state_29908__$1;
(statearr_29916_29955[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (15))){
var state_29908__$1 = state_29908;
var statearr_29920_29956 = state_29908__$1;
(statearr_29920_29956[(2)] = null);

(statearr_29920_29956[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (21))){
var state_29908__$1 = state_29908;
var statearr_29921_29957 = state_29908__$1;
(statearr_29921_29957[(2)] = null);

(statearr_29921_29957[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (13))){
var inst_29861 = (state_29908[(8)]);
var inst_29863 = (state_29908[(9)]);
var inst_29860 = (state_29908[(10)]);
var inst_29862 = (state_29908[(12)]);
var inst_29870 = (state_29908[(2)]);
var inst_29871 = (inst_29863 + (1));
var tmp29917 = inst_29861;
var tmp29918 = inst_29860;
var tmp29919 = inst_29862;
var inst_29860__$1 = tmp29918;
var inst_29861__$1 = tmp29917;
var inst_29862__$1 = tmp29919;
var inst_29863__$1 = inst_29871;
var state_29908__$1 = (function (){var statearr_29922 = state_29908;
(statearr_29922[(8)] = inst_29861__$1);

(statearr_29922[(9)] = inst_29863__$1);

(statearr_29922[(14)] = inst_29870);

(statearr_29922[(10)] = inst_29860__$1);

(statearr_29922[(12)] = inst_29862__$1);

return statearr_29922;
})();
var statearr_29923_29958 = state_29908__$1;
(statearr_29923_29958[(2)] = null);

(statearr_29923_29958[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (22))){
var state_29908__$1 = state_29908;
var statearr_29924_29959 = state_29908__$1;
(statearr_29924_29959[(2)] = null);

(statearr_29924_29959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (6))){
var inst_29849 = (state_29908[(13)]);
var inst_29858 = f.call(null,inst_29849);
var inst_29859 = cljs.core.seq.call(null,inst_29858);
var inst_29860 = inst_29859;
var inst_29861 = null;
var inst_29862 = (0);
var inst_29863 = (0);
var state_29908__$1 = (function (){var statearr_29925 = state_29908;
(statearr_29925[(8)] = inst_29861);

(statearr_29925[(9)] = inst_29863);

(statearr_29925[(10)] = inst_29860);

(statearr_29925[(12)] = inst_29862);

return statearr_29925;
})();
var statearr_29926_29960 = state_29908__$1;
(statearr_29926_29960[(2)] = null);

(statearr_29926_29960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (17))){
var inst_29874 = (state_29908[(7)]);
var inst_29878 = cljs.core.chunk_first.call(null,inst_29874);
var inst_29879 = cljs.core.chunk_rest.call(null,inst_29874);
var inst_29880 = cljs.core.count.call(null,inst_29878);
var inst_29860 = inst_29879;
var inst_29861 = inst_29878;
var inst_29862 = inst_29880;
var inst_29863 = (0);
var state_29908__$1 = (function (){var statearr_29927 = state_29908;
(statearr_29927[(8)] = inst_29861);

(statearr_29927[(9)] = inst_29863);

(statearr_29927[(10)] = inst_29860);

(statearr_29927[(12)] = inst_29862);

return statearr_29927;
})();
var statearr_29928_29961 = state_29908__$1;
(statearr_29928_29961[(2)] = null);

(statearr_29928_29961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (3))){
var inst_29906 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29908__$1,inst_29906);
} else {
if((state_val_29909 === (12))){
var inst_29894 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29929_29962 = state_29908__$1;
(statearr_29929_29962[(2)] = inst_29894);

(statearr_29929_29962[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (2))){
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29908__$1,(4),in$);
} else {
if((state_val_29909 === (23))){
var inst_29902 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29930_29963 = state_29908__$1;
(statearr_29930_29963[(2)] = inst_29902);

(statearr_29930_29963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (19))){
var inst_29889 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29931_29964 = state_29908__$1;
(statearr_29931_29964[(2)] = inst_29889);

(statearr_29931_29964[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (11))){
var inst_29860 = (state_29908[(10)]);
var inst_29874 = (state_29908[(7)]);
var inst_29874__$1 = cljs.core.seq.call(null,inst_29860);
var state_29908__$1 = (function (){var statearr_29932 = state_29908;
(statearr_29932[(7)] = inst_29874__$1);

return statearr_29932;
})();
if(inst_29874__$1){
var statearr_29933_29965 = state_29908__$1;
(statearr_29933_29965[(1)] = (14));

} else {
var statearr_29934_29966 = state_29908__$1;
(statearr_29934_29966[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (9))){
var inst_29896 = (state_29908[(2)]);
var inst_29897 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_29908__$1 = (function (){var statearr_29935 = state_29908;
(statearr_29935[(15)] = inst_29896);

return statearr_29935;
})();
if(cljs.core.truth_(inst_29897)){
var statearr_29936_29967 = state_29908__$1;
(statearr_29936_29967[(1)] = (21));

} else {
var statearr_29937_29968 = state_29908__$1;
(statearr_29937_29968[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (5))){
var inst_29852 = cljs.core.async.close_BANG_.call(null,out);
var state_29908__$1 = state_29908;
var statearr_29938_29969 = state_29908__$1;
(statearr_29938_29969[(2)] = inst_29852);

(statearr_29938_29969[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (14))){
var inst_29874 = (state_29908[(7)]);
var inst_29876 = cljs.core.chunked_seq_QMARK_.call(null,inst_29874);
var state_29908__$1 = state_29908;
if(inst_29876){
var statearr_29939_29970 = state_29908__$1;
(statearr_29939_29970[(1)] = (17));

} else {
var statearr_29940_29971 = state_29908__$1;
(statearr_29940_29971[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (16))){
var inst_29892 = (state_29908[(2)]);
var state_29908__$1 = state_29908;
var statearr_29941_29972 = state_29908__$1;
(statearr_29941_29972[(2)] = inst_29892);

(statearr_29941_29972[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29909 === (10))){
var inst_29861 = (state_29908[(8)]);
var inst_29863 = (state_29908[(9)]);
var inst_29868 = cljs.core._nth.call(null,inst_29861,inst_29863);
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29908__$1,(13),out,inst_29868);
} else {
if((state_val_29909 === (18))){
var inst_29874 = (state_29908[(7)]);
var inst_29883 = cljs.core.first.call(null,inst_29874);
var state_29908__$1 = state_29908;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29908__$1,(20),out,inst_29883);
} else {
if((state_val_29909 === (8))){
var inst_29863 = (state_29908[(9)]);
var inst_29862 = (state_29908[(12)]);
var inst_29865 = (inst_29863 < inst_29862);
var inst_29866 = inst_29865;
var state_29908__$1 = state_29908;
if(cljs.core.truth_(inst_29866)){
var statearr_29942_29973 = state_29908__$1;
(statearr_29942_29973[(1)] = (10));

} else {
var statearr_29943_29974 = state_29908__$1;
(statearr_29943_29974[(1)] = (11));

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
});})(c__18851__auto__))
;
return ((function (switch__18830__auto__,c__18851__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18831__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18831__auto____0 = (function (){
var statearr_29947 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29947[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18831__auto__);

(statearr_29947[(1)] = (1));

return statearr_29947;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18831__auto____1 = (function (state_29908){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_29908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e29948){if((e29948 instanceof Object)){
var ex__18834__auto__ = e29948;
var statearr_29949_29975 = state_29908;
(statearr_29949_29975[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29976 = state_29908;
state_29908 = G__29976;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18831__auto__ = function(state_29908){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18831__auto____1.call(this,state_29908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18831__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18831__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__))
})();
var state__18853__auto__ = (function (){var statearr_29950 = f__18852__auto__.call(null);
(statearr_29950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_29950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__))
);

return c__18851__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args29977 = [];
var len__17884__auto___29980 = arguments.length;
var i__17885__auto___29981 = (0);
while(true){
if((i__17885__auto___29981 < len__17884__auto___29980)){
args29977.push((arguments[i__17885__auto___29981]));

var G__29982 = (i__17885__auto___29981 + (1));
i__17885__auto___29981 = G__29982;
continue;
} else {
}
break;
}

var G__29979 = args29977.length;
switch (G__29979) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29977.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args29984 = [];
var len__17884__auto___29987 = arguments.length;
var i__17885__auto___29988 = (0);
while(true){
if((i__17885__auto___29988 < len__17884__auto___29987)){
args29984.push((arguments[i__17885__auto___29988]));

var G__29989 = (i__17885__auto___29988 + (1));
i__17885__auto___29988 = G__29989;
continue;
} else {
}
break;
}

var G__29986 = args29984.length;
switch (G__29986) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29984.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args29991 = [];
var len__17884__auto___30042 = arguments.length;
var i__17885__auto___30043 = (0);
while(true){
if((i__17885__auto___30043 < len__17884__auto___30042)){
args29991.push((arguments[i__17885__auto___30043]));

var G__30044 = (i__17885__auto___30043 + (1));
i__17885__auto___30043 = G__30044;
continue;
} else {
}
break;
}

var G__29993 = args29991.length;
switch (G__29993) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29991.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18851__auto___30046 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___30046,out){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___30046,out){
return (function (state_30017){
var state_val_30018 = (state_30017[(1)]);
if((state_val_30018 === (7))){
var inst_30012 = (state_30017[(2)]);
var state_30017__$1 = state_30017;
var statearr_30019_30047 = state_30017__$1;
(statearr_30019_30047[(2)] = inst_30012);

(statearr_30019_30047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (1))){
var inst_29994 = null;
var state_30017__$1 = (function (){var statearr_30020 = state_30017;
(statearr_30020[(7)] = inst_29994);

return statearr_30020;
})();
var statearr_30021_30048 = state_30017__$1;
(statearr_30021_30048[(2)] = null);

(statearr_30021_30048[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (4))){
var inst_29997 = (state_30017[(8)]);
var inst_29997__$1 = (state_30017[(2)]);
var inst_29998 = (inst_29997__$1 == null);
var inst_29999 = cljs.core.not.call(null,inst_29998);
var state_30017__$1 = (function (){var statearr_30022 = state_30017;
(statearr_30022[(8)] = inst_29997__$1);

return statearr_30022;
})();
if(inst_29999){
var statearr_30023_30049 = state_30017__$1;
(statearr_30023_30049[(1)] = (5));

} else {
var statearr_30024_30050 = state_30017__$1;
(statearr_30024_30050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (6))){
var state_30017__$1 = state_30017;
var statearr_30025_30051 = state_30017__$1;
(statearr_30025_30051[(2)] = null);

(statearr_30025_30051[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (3))){
var inst_30014 = (state_30017[(2)]);
var inst_30015 = cljs.core.async.close_BANG_.call(null,out);
var state_30017__$1 = (function (){var statearr_30026 = state_30017;
(statearr_30026[(9)] = inst_30014);

return statearr_30026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30017__$1,inst_30015);
} else {
if((state_val_30018 === (2))){
var state_30017__$1 = state_30017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30017__$1,(4),ch);
} else {
if((state_val_30018 === (11))){
var inst_29997 = (state_30017[(8)]);
var inst_30006 = (state_30017[(2)]);
var inst_29994 = inst_29997;
var state_30017__$1 = (function (){var statearr_30027 = state_30017;
(statearr_30027[(7)] = inst_29994);

(statearr_30027[(10)] = inst_30006);

return statearr_30027;
})();
var statearr_30028_30052 = state_30017__$1;
(statearr_30028_30052[(2)] = null);

(statearr_30028_30052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (9))){
var inst_29997 = (state_30017[(8)]);
var state_30017__$1 = state_30017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30017__$1,(11),out,inst_29997);
} else {
if((state_val_30018 === (5))){
var inst_29994 = (state_30017[(7)]);
var inst_29997 = (state_30017[(8)]);
var inst_30001 = cljs.core._EQ_.call(null,inst_29997,inst_29994);
var state_30017__$1 = state_30017;
if(inst_30001){
var statearr_30030_30053 = state_30017__$1;
(statearr_30030_30053[(1)] = (8));

} else {
var statearr_30031_30054 = state_30017__$1;
(statearr_30031_30054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (10))){
var inst_30009 = (state_30017[(2)]);
var state_30017__$1 = state_30017;
var statearr_30032_30055 = state_30017__$1;
(statearr_30032_30055[(2)] = inst_30009);

(statearr_30032_30055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30018 === (8))){
var inst_29994 = (state_30017[(7)]);
var tmp30029 = inst_29994;
var inst_29994__$1 = tmp30029;
var state_30017__$1 = (function (){var statearr_30033 = state_30017;
(statearr_30033[(7)] = inst_29994__$1);

return statearr_30033;
})();
var statearr_30034_30056 = state_30017__$1;
(statearr_30034_30056[(2)] = null);

(statearr_30034_30056[(1)] = (2));


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
});})(c__18851__auto___30046,out))
;
return ((function (switch__18830__auto__,c__18851__auto___30046,out){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_30038 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30038[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_30038[(1)] = (1));

return statearr_30038;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_30017){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_30017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e30039){if((e30039 instanceof Object)){
var ex__18834__auto__ = e30039;
var statearr_30040_30057 = state_30017;
(statearr_30040_30057[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30039;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30058 = state_30017;
state_30017 = G__30058;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_30017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_30017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___30046,out))
})();
var state__18853__auto__ = (function (){var statearr_30041 = f__18852__auto__.call(null);
(statearr_30041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___30046);

return statearr_30041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___30046,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30059 = [];
var len__17884__auto___30129 = arguments.length;
var i__17885__auto___30130 = (0);
while(true){
if((i__17885__auto___30130 < len__17884__auto___30129)){
args30059.push((arguments[i__17885__auto___30130]));

var G__30131 = (i__17885__auto___30130 + (1));
i__17885__auto___30130 = G__30131;
continue;
} else {
}
break;
}

var G__30061 = args30059.length;
switch (G__30061) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30059.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18851__auto___30133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___30133,out){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___30133,out){
return (function (state_30099){
var state_val_30100 = (state_30099[(1)]);
if((state_val_30100 === (7))){
var inst_30095 = (state_30099[(2)]);
var state_30099__$1 = state_30099;
var statearr_30101_30134 = state_30099__$1;
(statearr_30101_30134[(2)] = inst_30095);

(statearr_30101_30134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (1))){
var inst_30062 = (new Array(n));
var inst_30063 = inst_30062;
var inst_30064 = (0);
var state_30099__$1 = (function (){var statearr_30102 = state_30099;
(statearr_30102[(7)] = inst_30063);

(statearr_30102[(8)] = inst_30064);

return statearr_30102;
})();
var statearr_30103_30135 = state_30099__$1;
(statearr_30103_30135[(2)] = null);

(statearr_30103_30135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (4))){
var inst_30067 = (state_30099[(9)]);
var inst_30067__$1 = (state_30099[(2)]);
var inst_30068 = (inst_30067__$1 == null);
var inst_30069 = cljs.core.not.call(null,inst_30068);
var state_30099__$1 = (function (){var statearr_30104 = state_30099;
(statearr_30104[(9)] = inst_30067__$1);

return statearr_30104;
})();
if(inst_30069){
var statearr_30105_30136 = state_30099__$1;
(statearr_30105_30136[(1)] = (5));

} else {
var statearr_30106_30137 = state_30099__$1;
(statearr_30106_30137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (15))){
var inst_30089 = (state_30099[(2)]);
var state_30099__$1 = state_30099;
var statearr_30107_30138 = state_30099__$1;
(statearr_30107_30138[(2)] = inst_30089);

(statearr_30107_30138[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (13))){
var state_30099__$1 = state_30099;
var statearr_30108_30139 = state_30099__$1;
(statearr_30108_30139[(2)] = null);

(statearr_30108_30139[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (6))){
var inst_30064 = (state_30099[(8)]);
var inst_30085 = (inst_30064 > (0));
var state_30099__$1 = state_30099;
if(cljs.core.truth_(inst_30085)){
var statearr_30109_30140 = state_30099__$1;
(statearr_30109_30140[(1)] = (12));

} else {
var statearr_30110_30141 = state_30099__$1;
(statearr_30110_30141[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (3))){
var inst_30097 = (state_30099[(2)]);
var state_30099__$1 = state_30099;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30099__$1,inst_30097);
} else {
if((state_val_30100 === (12))){
var inst_30063 = (state_30099[(7)]);
var inst_30087 = cljs.core.vec.call(null,inst_30063);
var state_30099__$1 = state_30099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30099__$1,(15),out,inst_30087);
} else {
if((state_val_30100 === (2))){
var state_30099__$1 = state_30099;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30099__$1,(4),ch);
} else {
if((state_val_30100 === (11))){
var inst_30079 = (state_30099[(2)]);
var inst_30080 = (new Array(n));
var inst_30063 = inst_30080;
var inst_30064 = (0);
var state_30099__$1 = (function (){var statearr_30111 = state_30099;
(statearr_30111[(7)] = inst_30063);

(statearr_30111[(8)] = inst_30064);

(statearr_30111[(10)] = inst_30079);

return statearr_30111;
})();
var statearr_30112_30142 = state_30099__$1;
(statearr_30112_30142[(2)] = null);

(statearr_30112_30142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (9))){
var inst_30063 = (state_30099[(7)]);
var inst_30077 = cljs.core.vec.call(null,inst_30063);
var state_30099__$1 = state_30099;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30099__$1,(11),out,inst_30077);
} else {
if((state_val_30100 === (5))){
var inst_30063 = (state_30099[(7)]);
var inst_30072 = (state_30099[(11)]);
var inst_30067 = (state_30099[(9)]);
var inst_30064 = (state_30099[(8)]);
var inst_30071 = (inst_30063[inst_30064] = inst_30067);
var inst_30072__$1 = (inst_30064 + (1));
var inst_30073 = (inst_30072__$1 < n);
var state_30099__$1 = (function (){var statearr_30113 = state_30099;
(statearr_30113[(12)] = inst_30071);

(statearr_30113[(11)] = inst_30072__$1);

return statearr_30113;
})();
if(cljs.core.truth_(inst_30073)){
var statearr_30114_30143 = state_30099__$1;
(statearr_30114_30143[(1)] = (8));

} else {
var statearr_30115_30144 = state_30099__$1;
(statearr_30115_30144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (14))){
var inst_30092 = (state_30099[(2)]);
var inst_30093 = cljs.core.async.close_BANG_.call(null,out);
var state_30099__$1 = (function (){var statearr_30117 = state_30099;
(statearr_30117[(13)] = inst_30092);

return statearr_30117;
})();
var statearr_30118_30145 = state_30099__$1;
(statearr_30118_30145[(2)] = inst_30093);

(statearr_30118_30145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (10))){
var inst_30083 = (state_30099[(2)]);
var state_30099__$1 = state_30099;
var statearr_30119_30146 = state_30099__$1;
(statearr_30119_30146[(2)] = inst_30083);

(statearr_30119_30146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30100 === (8))){
var inst_30063 = (state_30099[(7)]);
var inst_30072 = (state_30099[(11)]);
var tmp30116 = inst_30063;
var inst_30063__$1 = tmp30116;
var inst_30064 = inst_30072;
var state_30099__$1 = (function (){var statearr_30120 = state_30099;
(statearr_30120[(7)] = inst_30063__$1);

(statearr_30120[(8)] = inst_30064);

return statearr_30120;
})();
var statearr_30121_30147 = state_30099__$1;
(statearr_30121_30147[(2)] = null);

(statearr_30121_30147[(1)] = (2));


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
});})(c__18851__auto___30133,out))
;
return ((function (switch__18830__auto__,c__18851__auto___30133,out){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_30125 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30125[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_30125[(1)] = (1));

return statearr_30125;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_30099){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_30099);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e30126){if((e30126 instanceof Object)){
var ex__18834__auto__ = e30126;
var statearr_30127_30148 = state_30099;
(statearr_30127_30148[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30099);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30149 = state_30099;
state_30099 = G__30149;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_30099){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_30099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___30133,out))
})();
var state__18853__auto__ = (function (){var statearr_30128 = f__18852__auto__.call(null);
(statearr_30128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___30133);

return statearr_30128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___30133,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30150 = [];
var len__17884__auto___30224 = arguments.length;
var i__17885__auto___30225 = (0);
while(true){
if((i__17885__auto___30225 < len__17884__auto___30224)){
args30150.push((arguments[i__17885__auto___30225]));

var G__30226 = (i__17885__auto___30225 + (1));
i__17885__auto___30225 = G__30226;
continue;
} else {
}
break;
}

var G__30152 = args30150.length;
switch (G__30152) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30150.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18851__auto___30228 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___30228,out){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___30228,out){
return (function (state_30194){
var state_val_30195 = (state_30194[(1)]);
if((state_val_30195 === (7))){
var inst_30190 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30196_30229 = state_30194__$1;
(statearr_30196_30229[(2)] = inst_30190);

(statearr_30196_30229[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (1))){
var inst_30153 = [];
var inst_30154 = inst_30153;
var inst_30155 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30194__$1 = (function (){var statearr_30197 = state_30194;
(statearr_30197[(7)] = inst_30154);

(statearr_30197[(8)] = inst_30155);

return statearr_30197;
})();
var statearr_30198_30230 = state_30194__$1;
(statearr_30198_30230[(2)] = null);

(statearr_30198_30230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (4))){
var inst_30158 = (state_30194[(9)]);
var inst_30158__$1 = (state_30194[(2)]);
var inst_30159 = (inst_30158__$1 == null);
var inst_30160 = cljs.core.not.call(null,inst_30159);
var state_30194__$1 = (function (){var statearr_30199 = state_30194;
(statearr_30199[(9)] = inst_30158__$1);

return statearr_30199;
})();
if(inst_30160){
var statearr_30200_30231 = state_30194__$1;
(statearr_30200_30231[(1)] = (5));

} else {
var statearr_30201_30232 = state_30194__$1;
(statearr_30201_30232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (15))){
var inst_30184 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30202_30233 = state_30194__$1;
(statearr_30202_30233[(2)] = inst_30184);

(statearr_30202_30233[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (13))){
var state_30194__$1 = state_30194;
var statearr_30203_30234 = state_30194__$1;
(statearr_30203_30234[(2)] = null);

(statearr_30203_30234[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (6))){
var inst_30154 = (state_30194[(7)]);
var inst_30179 = inst_30154.length;
var inst_30180 = (inst_30179 > (0));
var state_30194__$1 = state_30194;
if(cljs.core.truth_(inst_30180)){
var statearr_30204_30235 = state_30194__$1;
(statearr_30204_30235[(1)] = (12));

} else {
var statearr_30205_30236 = state_30194__$1;
(statearr_30205_30236[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (3))){
var inst_30192 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30194__$1,inst_30192);
} else {
if((state_val_30195 === (12))){
var inst_30154 = (state_30194[(7)]);
var inst_30182 = cljs.core.vec.call(null,inst_30154);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30194__$1,(15),out,inst_30182);
} else {
if((state_val_30195 === (2))){
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30194__$1,(4),ch);
} else {
if((state_val_30195 === (11))){
var inst_30158 = (state_30194[(9)]);
var inst_30162 = (state_30194[(10)]);
var inst_30172 = (state_30194[(2)]);
var inst_30173 = [];
var inst_30174 = inst_30173.push(inst_30158);
var inst_30154 = inst_30173;
var inst_30155 = inst_30162;
var state_30194__$1 = (function (){var statearr_30206 = state_30194;
(statearr_30206[(11)] = inst_30174);

(statearr_30206[(7)] = inst_30154);

(statearr_30206[(12)] = inst_30172);

(statearr_30206[(8)] = inst_30155);

return statearr_30206;
})();
var statearr_30207_30237 = state_30194__$1;
(statearr_30207_30237[(2)] = null);

(statearr_30207_30237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (9))){
var inst_30154 = (state_30194[(7)]);
var inst_30170 = cljs.core.vec.call(null,inst_30154);
var state_30194__$1 = state_30194;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30194__$1,(11),out,inst_30170);
} else {
if((state_val_30195 === (5))){
var inst_30158 = (state_30194[(9)]);
var inst_30155 = (state_30194[(8)]);
var inst_30162 = (state_30194[(10)]);
var inst_30162__$1 = f.call(null,inst_30158);
var inst_30163 = cljs.core._EQ_.call(null,inst_30162__$1,inst_30155);
var inst_30164 = cljs.core.keyword_identical_QMARK_.call(null,inst_30155,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30165 = (inst_30163) || (inst_30164);
var state_30194__$1 = (function (){var statearr_30208 = state_30194;
(statearr_30208[(10)] = inst_30162__$1);

return statearr_30208;
})();
if(cljs.core.truth_(inst_30165)){
var statearr_30209_30238 = state_30194__$1;
(statearr_30209_30238[(1)] = (8));

} else {
var statearr_30210_30239 = state_30194__$1;
(statearr_30210_30239[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (14))){
var inst_30187 = (state_30194[(2)]);
var inst_30188 = cljs.core.async.close_BANG_.call(null,out);
var state_30194__$1 = (function (){var statearr_30212 = state_30194;
(statearr_30212[(13)] = inst_30187);

return statearr_30212;
})();
var statearr_30213_30240 = state_30194__$1;
(statearr_30213_30240[(2)] = inst_30188);

(statearr_30213_30240[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (10))){
var inst_30177 = (state_30194[(2)]);
var state_30194__$1 = state_30194;
var statearr_30214_30241 = state_30194__$1;
(statearr_30214_30241[(2)] = inst_30177);

(statearr_30214_30241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30195 === (8))){
var inst_30158 = (state_30194[(9)]);
var inst_30154 = (state_30194[(7)]);
var inst_30162 = (state_30194[(10)]);
var inst_30167 = inst_30154.push(inst_30158);
var tmp30211 = inst_30154;
var inst_30154__$1 = tmp30211;
var inst_30155 = inst_30162;
var state_30194__$1 = (function (){var statearr_30215 = state_30194;
(statearr_30215[(7)] = inst_30154__$1);

(statearr_30215[(14)] = inst_30167);

(statearr_30215[(8)] = inst_30155);

return statearr_30215;
})();
var statearr_30216_30242 = state_30194__$1;
(statearr_30216_30242[(2)] = null);

(statearr_30216_30242[(1)] = (2));


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
});})(c__18851__auto___30228,out))
;
return ((function (switch__18830__auto__,c__18851__auto___30228,out){
return (function() {
var cljs$core$async$state_machine__18831__auto__ = null;
var cljs$core$async$state_machine__18831__auto____0 = (function (){
var statearr_30220 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30220[(0)] = cljs$core$async$state_machine__18831__auto__);

(statearr_30220[(1)] = (1));

return statearr_30220;
});
var cljs$core$async$state_machine__18831__auto____1 = (function (state_30194){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_30194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e30221){if((e30221 instanceof Object)){
var ex__18834__auto__ = e30221;
var statearr_30222_30243 = state_30194;
(statearr_30222_30243[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30244 = state_30194;
state_30194 = G__30244;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
cljs$core$async$state_machine__18831__auto__ = function(state_30194){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18831__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18831__auto____1.call(this,state_30194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18831__auto____0;
cljs$core$async$state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18831__auto____1;
return cljs$core$async$state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___30228,out))
})();
var state__18853__auto__ = (function (){var statearr_30223 = f__18852__auto__.call(null);
(statearr_30223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___30228);

return statearr_30223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___30228,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1451996464092