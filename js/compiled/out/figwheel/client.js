// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__31663 = cljs.core._EQ_;
var expr__31664 = (function (){var or__16826__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__31663.call(null,"true",expr__31664))){
return true;
} else {
if(cljs.core.truth_(pred__31663.call(null,"false",expr__31664))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__31664)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__31666__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31666 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31667__i = 0, G__31667__a = new Array(arguments.length -  0);
while (G__31667__i < G__31667__a.length) {G__31667__a[G__31667__i] = arguments[G__31667__i + 0]; ++G__31667__i;}
  args = new cljs.core.IndexedSeq(G__31667__a,0);
} 
return G__31666__delegate.call(this,args);};
G__31666.cljs$lang$maxFixedArity = 0;
G__31666.cljs$lang$applyTo = (function (arglist__31668){
var args = cljs.core.seq(arglist__31668);
return G__31666__delegate(args);
});
G__31666.cljs$core$IFn$_invoke$arity$variadic = G__31666__delegate;
return G__31666;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31669){
var map__31672 = p__31669;
var map__31672__$1 = ((((!((map__31672 == null)))?((((map__31672.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31672.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31672):map__31672);
var message = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31672__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16826__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16826__auto__)){
return or__16826__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16814__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16814__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16814__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18851__auto___31834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___31834,ch){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___31834,ch){
return (function (state_31803){
var state_val_31804 = (state_31803[(1)]);
if((state_val_31804 === (7))){
var inst_31799 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
var statearr_31805_31835 = state_31803__$1;
(statearr_31805_31835[(2)] = inst_31799);

(statearr_31805_31835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (1))){
var state_31803__$1 = state_31803;
var statearr_31806_31836 = state_31803__$1;
(statearr_31806_31836[(2)] = null);

(statearr_31806_31836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (4))){
var inst_31756 = (state_31803[(7)]);
var inst_31756__$1 = (state_31803[(2)]);
var state_31803__$1 = (function (){var statearr_31807 = state_31803;
(statearr_31807[(7)] = inst_31756__$1);

return statearr_31807;
})();
if(cljs.core.truth_(inst_31756__$1)){
var statearr_31808_31837 = state_31803__$1;
(statearr_31808_31837[(1)] = (5));

} else {
var statearr_31809_31838 = state_31803__$1;
(statearr_31809_31838[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (15))){
var inst_31763 = (state_31803[(8)]);
var inst_31778 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31763);
var inst_31779 = cljs.core.first.call(null,inst_31778);
var inst_31780 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31779);
var inst_31781 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_31780)].join('');
var inst_31782 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31781);
var state_31803__$1 = state_31803;
var statearr_31810_31839 = state_31803__$1;
(statearr_31810_31839[(2)] = inst_31782);

(statearr_31810_31839[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (13))){
var inst_31787 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
var statearr_31811_31840 = state_31803__$1;
(statearr_31811_31840[(2)] = inst_31787);

(statearr_31811_31840[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (6))){
var state_31803__$1 = state_31803;
var statearr_31812_31841 = state_31803__$1;
(statearr_31812_31841[(2)] = null);

(statearr_31812_31841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (17))){
var inst_31785 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
var statearr_31813_31842 = state_31803__$1;
(statearr_31813_31842[(2)] = inst_31785);

(statearr_31813_31842[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (3))){
var inst_31801 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31803__$1,inst_31801);
} else {
if((state_val_31804 === (12))){
var inst_31762 = (state_31803[(9)]);
var inst_31776 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31762,opts);
var state_31803__$1 = state_31803;
if(cljs.core.truth_(inst_31776)){
var statearr_31814_31843 = state_31803__$1;
(statearr_31814_31843[(1)] = (15));

} else {
var statearr_31815_31844 = state_31803__$1;
(statearr_31815_31844[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (2))){
var state_31803__$1 = state_31803;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31803__$1,(4),ch);
} else {
if((state_val_31804 === (11))){
var inst_31763 = (state_31803[(8)]);
var inst_31768 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31769 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31763);
var inst_31770 = cljs.core.async.timeout.call(null,(1000));
var inst_31771 = [inst_31769,inst_31770];
var inst_31772 = (new cljs.core.PersistentVector(null,2,(5),inst_31768,inst_31771,null));
var state_31803__$1 = state_31803;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31803__$1,(14),inst_31772);
} else {
if((state_val_31804 === (9))){
var inst_31763 = (state_31803[(8)]);
var inst_31789 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31790 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31763);
var inst_31791 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31790);
var inst_31792 = [cljs.core.str("Not loading: "),cljs.core.str(inst_31791)].join('');
var inst_31793 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31792);
var state_31803__$1 = (function (){var statearr_31816 = state_31803;
(statearr_31816[(10)] = inst_31789);

return statearr_31816;
})();
var statearr_31817_31845 = state_31803__$1;
(statearr_31817_31845[(2)] = inst_31793);

(statearr_31817_31845[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (5))){
var inst_31756 = (state_31803[(7)]);
var inst_31758 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31759 = (new cljs.core.PersistentArrayMap(null,2,inst_31758,null));
var inst_31760 = (new cljs.core.PersistentHashSet(null,inst_31759,null));
var inst_31761 = figwheel.client.focus_msgs.call(null,inst_31760,inst_31756);
var inst_31762 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31761);
var inst_31763 = cljs.core.first.call(null,inst_31761);
var inst_31764 = figwheel.client.autoload_QMARK_.call(null);
var state_31803__$1 = (function (){var statearr_31818 = state_31803;
(statearr_31818[(8)] = inst_31763);

(statearr_31818[(9)] = inst_31762);

return statearr_31818;
})();
if(cljs.core.truth_(inst_31764)){
var statearr_31819_31846 = state_31803__$1;
(statearr_31819_31846[(1)] = (8));

} else {
var statearr_31820_31847 = state_31803__$1;
(statearr_31820_31847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (14))){
var inst_31774 = (state_31803[(2)]);
var state_31803__$1 = state_31803;
var statearr_31821_31848 = state_31803__$1;
(statearr_31821_31848[(2)] = inst_31774);

(statearr_31821_31848[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (16))){
var state_31803__$1 = state_31803;
var statearr_31822_31849 = state_31803__$1;
(statearr_31822_31849[(2)] = null);

(statearr_31822_31849[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (10))){
var inst_31795 = (state_31803[(2)]);
var state_31803__$1 = (function (){var statearr_31823 = state_31803;
(statearr_31823[(11)] = inst_31795);

return statearr_31823;
})();
var statearr_31824_31850 = state_31803__$1;
(statearr_31824_31850[(2)] = null);

(statearr_31824_31850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31804 === (8))){
var inst_31762 = (state_31803[(9)]);
var inst_31766 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31762,opts);
var state_31803__$1 = state_31803;
if(cljs.core.truth_(inst_31766)){
var statearr_31825_31851 = state_31803__$1;
(statearr_31825_31851[(1)] = (11));

} else {
var statearr_31826_31852 = state_31803__$1;
(statearr_31826_31852[(1)] = (12));

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
});})(c__18851__auto___31834,ch))
;
return ((function (switch__18830__auto__,c__18851__auto___31834,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____0 = (function (){
var statearr_31830 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31830[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__);

(statearr_31830[(1)] = (1));

return statearr_31830;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____1 = (function (state_31803){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_31803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e31831){if((e31831 instanceof Object)){
var ex__18834__auto__ = e31831;
var statearr_31832_31853 = state_31803;
(statearr_31832_31853[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31854 = state_31803;
state_31803 = G__31854;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__ = function(state_31803){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____1.call(this,state_31803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18831__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___31834,ch))
})();
var state__18853__auto__ = (function (){var statearr_31833 = f__18852__auto__.call(null);
(statearr_31833[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___31834);

return statearr_31833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___31834,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31855_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31855_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31862 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_31862){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_31860 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_31861 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_31860,_STAR_print_newline_STAR_31861,base_path_31862){
return (function() { 
var G__31863__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__31863 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31864__i = 0, G__31864__a = new Array(arguments.length -  0);
while (G__31864__i < G__31864__a.length) {G__31864__a[G__31864__i] = arguments[G__31864__i + 0]; ++G__31864__i;}
  args = new cljs.core.IndexedSeq(G__31864__a,0);
} 
return G__31863__delegate.call(this,args);};
G__31863.cljs$lang$maxFixedArity = 0;
G__31863.cljs$lang$applyTo = (function (arglist__31865){
var args = cljs.core.seq(arglist__31865);
return G__31863__delegate(args);
});
G__31863.cljs$core$IFn$_invoke$arity$variadic = G__31863__delegate;
return G__31863;
})()
;})(_STAR_print_fn_STAR_31860,_STAR_print_newline_STAR_31861,base_path_31862))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_31861;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_31860;
}}catch (e31859){if((e31859 instanceof Error)){
var e = e31859;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31862], null));
} else {
var e = e31859;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_31862))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31866){
var map__31873 = p__31866;
var map__31873__$1 = ((((!((map__31873 == null)))?((((map__31873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31873):map__31873);
var opts = map__31873__$1;
var build_id = cljs.core.get.call(null,map__31873__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__31873,map__31873__$1,opts,build_id){
return (function (p__31875){
var vec__31876 = p__31875;
var map__31877 = cljs.core.nth.call(null,vec__31876,(0),null);
var map__31877__$1 = ((((!((map__31877 == null)))?((((map__31877.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31877.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31877):map__31877);
var msg = map__31877__$1;
var msg_name = cljs.core.get.call(null,map__31877__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31876,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__31876,map__31877,map__31877__$1,msg,msg_name,_,map__31873,map__31873__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__31876,map__31877,map__31877__$1,msg,msg_name,_,map__31873,map__31873__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__31873,map__31873__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31883){
var vec__31884 = p__31883;
var map__31885 = cljs.core.nth.call(null,vec__31884,(0),null);
var map__31885__$1 = ((((!((map__31885 == null)))?((((map__31885.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31885.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31885):map__31885);
var msg = map__31885__$1;
var msg_name = cljs.core.get.call(null,map__31885__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31884,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31887){
var map__31897 = p__31887;
var map__31897__$1 = ((((!((map__31897 == null)))?((((map__31897.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31897.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31897):map__31897);
var on_compile_warning = cljs.core.get.call(null,map__31897__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31897__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__31897,map__31897__$1,on_compile_warning,on_compile_fail){
return (function (p__31899){
var vec__31900 = p__31899;
var map__31901 = cljs.core.nth.call(null,vec__31900,(0),null);
var map__31901__$1 = ((((!((map__31901 == null)))?((((map__31901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31901):map__31901);
var msg = map__31901__$1;
var msg_name = cljs.core.get.call(null,map__31901__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__31900,(1));
var pred__31903 = cljs.core._EQ_;
var expr__31904 = msg_name;
if(cljs.core.truth_(pred__31903.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31904))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31903.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31904))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__31897,map__31897__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__,msg_hist,msg_names,msg){
return (function (state_32120){
var state_val_32121 = (state_32120[(1)]);
if((state_val_32121 === (7))){
var inst_32044 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
if(cljs.core.truth_(inst_32044)){
var statearr_32122_32168 = state_32120__$1;
(statearr_32122_32168[(1)] = (8));

} else {
var statearr_32123_32169 = state_32120__$1;
(statearr_32123_32169[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (20))){
var inst_32114 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32124_32170 = state_32120__$1;
(statearr_32124_32170[(2)] = inst_32114);

(statearr_32124_32170[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (27))){
var inst_32110 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32125_32171 = state_32120__$1;
(statearr_32125_32171[(2)] = inst_32110);

(statearr_32125_32171[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (1))){
var inst_32037 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_32120__$1 = state_32120;
if(cljs.core.truth_(inst_32037)){
var statearr_32126_32172 = state_32120__$1;
(statearr_32126_32172[(1)] = (2));

} else {
var statearr_32127_32173 = state_32120__$1;
(statearr_32127_32173[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (24))){
var inst_32112 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32128_32174 = state_32120__$1;
(statearr_32128_32174[(2)] = inst_32112);

(statearr_32128_32174[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (4))){
var inst_32118 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32120__$1,inst_32118);
} else {
if((state_val_32121 === (15))){
var inst_32116 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32129_32175 = state_32120__$1;
(statearr_32129_32175[(2)] = inst_32116);

(statearr_32129_32175[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (21))){
var inst_32075 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32130_32176 = state_32120__$1;
(statearr_32130_32176[(2)] = inst_32075);

(statearr_32130_32176[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (31))){
var inst_32099 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_32120__$1 = state_32120;
if(cljs.core.truth_(inst_32099)){
var statearr_32131_32177 = state_32120__$1;
(statearr_32131_32177[(1)] = (34));

} else {
var statearr_32132_32178 = state_32120__$1;
(statearr_32132_32178[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (32))){
var inst_32108 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32133_32179 = state_32120__$1;
(statearr_32133_32179[(2)] = inst_32108);

(statearr_32133_32179[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (33))){
var inst_32097 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32134_32180 = state_32120__$1;
(statearr_32134_32180[(2)] = inst_32097);

(statearr_32134_32180[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (13))){
var inst_32058 = figwheel.client.heads_up.clear.call(null);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32120__$1,(16),inst_32058);
} else {
if((state_val_32121 === (22))){
var inst_32079 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32080 = figwheel.client.heads_up.append_message.call(null,inst_32079);
var state_32120__$1 = state_32120;
var statearr_32135_32181 = state_32120__$1;
(statearr_32135_32181[(2)] = inst_32080);

(statearr_32135_32181[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (36))){
var inst_32106 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32136_32182 = state_32120__$1;
(statearr_32136_32182[(2)] = inst_32106);

(statearr_32136_32182[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (29))){
var inst_32090 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32137_32183 = state_32120__$1;
(statearr_32137_32183[(2)] = inst_32090);

(statearr_32137_32183[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (6))){
var inst_32039 = (state_32120[(7)]);
var state_32120__$1 = state_32120;
var statearr_32138_32184 = state_32120__$1;
(statearr_32138_32184[(2)] = inst_32039);

(statearr_32138_32184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (28))){
var inst_32086 = (state_32120[(2)]);
var inst_32087 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32088 = figwheel.client.heads_up.display_warning.call(null,inst_32087);
var state_32120__$1 = (function (){var statearr_32139 = state_32120;
(statearr_32139[(8)] = inst_32086);

return statearr_32139;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32120__$1,(29),inst_32088);
} else {
if((state_val_32121 === (25))){
var inst_32084 = figwheel.client.heads_up.clear.call(null);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32120__$1,(28),inst_32084);
} else {
if((state_val_32121 === (34))){
var inst_32101 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32120__$1,(37),inst_32101);
} else {
if((state_val_32121 === (17))){
var inst_32066 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32140_32185 = state_32120__$1;
(statearr_32140_32185[(2)] = inst_32066);

(statearr_32140_32185[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (3))){
var inst_32056 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_32120__$1 = state_32120;
if(cljs.core.truth_(inst_32056)){
var statearr_32141_32186 = state_32120__$1;
(statearr_32141_32186[(1)] = (13));

} else {
var statearr_32142_32187 = state_32120__$1;
(statearr_32142_32187[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (12))){
var inst_32052 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32143_32188 = state_32120__$1;
(statearr_32143_32188[(2)] = inst_32052);

(statearr_32143_32188[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (2))){
var inst_32039 = (state_32120[(7)]);
var inst_32039__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_32120__$1 = (function (){var statearr_32144 = state_32120;
(statearr_32144[(7)] = inst_32039__$1);

return statearr_32144;
})();
if(cljs.core.truth_(inst_32039__$1)){
var statearr_32145_32189 = state_32120__$1;
(statearr_32145_32189[(1)] = (5));

} else {
var statearr_32146_32190 = state_32120__$1;
(statearr_32146_32190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (23))){
var inst_32082 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_32120__$1 = state_32120;
if(cljs.core.truth_(inst_32082)){
var statearr_32147_32191 = state_32120__$1;
(statearr_32147_32191[(1)] = (25));

} else {
var statearr_32148_32192 = state_32120__$1;
(statearr_32148_32192[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (35))){
var state_32120__$1 = state_32120;
var statearr_32149_32193 = state_32120__$1;
(statearr_32149_32193[(2)] = null);

(statearr_32149_32193[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (19))){
var inst_32077 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_32120__$1 = state_32120;
if(cljs.core.truth_(inst_32077)){
var statearr_32150_32194 = state_32120__$1;
(statearr_32150_32194[(1)] = (22));

} else {
var statearr_32151_32195 = state_32120__$1;
(statearr_32151_32195[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (11))){
var inst_32048 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32152_32196 = state_32120__$1;
(statearr_32152_32196[(2)] = inst_32048);

(statearr_32152_32196[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (9))){
var inst_32050 = figwheel.client.heads_up.clear.call(null);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32120__$1,(12),inst_32050);
} else {
if((state_val_32121 === (5))){
var inst_32041 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_32120__$1 = state_32120;
var statearr_32153_32197 = state_32120__$1;
(statearr_32153_32197[(2)] = inst_32041);

(statearr_32153_32197[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (14))){
var inst_32068 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_32120__$1 = state_32120;
if(cljs.core.truth_(inst_32068)){
var statearr_32154_32198 = state_32120__$1;
(statearr_32154_32198[(1)] = (18));

} else {
var statearr_32155_32199 = state_32120__$1;
(statearr_32155_32199[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (26))){
var inst_32092 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_32120__$1 = state_32120;
if(cljs.core.truth_(inst_32092)){
var statearr_32156_32200 = state_32120__$1;
(statearr_32156_32200[(1)] = (30));

} else {
var statearr_32157_32201 = state_32120__$1;
(statearr_32157_32201[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (16))){
var inst_32060 = (state_32120[(2)]);
var inst_32061 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32062 = figwheel.client.format_messages.call(null,inst_32061);
var inst_32063 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32064 = figwheel.client.heads_up.display_error.call(null,inst_32062,inst_32063);
var state_32120__$1 = (function (){var statearr_32158 = state_32120;
(statearr_32158[(9)] = inst_32060);

return statearr_32158;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32120__$1,(17),inst_32064);
} else {
if((state_val_32121 === (30))){
var inst_32094 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32095 = figwheel.client.heads_up.display_warning.call(null,inst_32094);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32120__$1,(33),inst_32095);
} else {
if((state_val_32121 === (10))){
var inst_32054 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32159_32202 = state_32120__$1;
(statearr_32159_32202[(2)] = inst_32054);

(statearr_32159_32202[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (18))){
var inst_32070 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32071 = figwheel.client.format_messages.call(null,inst_32070);
var inst_32072 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_32073 = figwheel.client.heads_up.display_error.call(null,inst_32071,inst_32072);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32120__$1,(21),inst_32073);
} else {
if((state_val_32121 === (37))){
var inst_32103 = (state_32120[(2)]);
var state_32120__$1 = state_32120;
var statearr_32160_32203 = state_32120__$1;
(statearr_32160_32203[(2)] = inst_32103);

(statearr_32160_32203[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32121 === (8))){
var inst_32046 = figwheel.client.heads_up.flash_loaded.call(null);
var state_32120__$1 = state_32120;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32120__$1,(11),inst_32046);
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
});})(c__18851__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18830__auto__,c__18851__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____0 = (function (){
var statearr_32164 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32164[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__);

(statearr_32164[(1)] = (1));

return statearr_32164;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____1 = (function (state_32120){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_32120);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e32165){if((e32165 instanceof Object)){
var ex__18834__auto__ = e32165;
var statearr_32166_32204 = state_32120;
(statearr_32166_32204[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32120);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32165;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32205 = state_32120;
state_32120 = G__32205;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__ = function(state_32120){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____1.call(this,state_32120);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__,msg_hist,msg_names,msg))
})();
var state__18853__auto__ = (function (){var statearr_32167 = f__18852__auto__.call(null);
(statearr_32167[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_32167;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__,msg_hist,msg_names,msg))
);

return c__18851__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18851__auto___32268 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto___32268,ch){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto___32268,ch){
return (function (state_32251){
var state_val_32252 = (state_32251[(1)]);
if((state_val_32252 === (1))){
var state_32251__$1 = state_32251;
var statearr_32253_32269 = state_32251__$1;
(statearr_32253_32269[(2)] = null);

(statearr_32253_32269[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (2))){
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32251__$1,(4),ch);
} else {
if((state_val_32252 === (3))){
var inst_32249 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32251__$1,inst_32249);
} else {
if((state_val_32252 === (4))){
var inst_32239 = (state_32251[(7)]);
var inst_32239__$1 = (state_32251[(2)]);
var state_32251__$1 = (function (){var statearr_32254 = state_32251;
(statearr_32254[(7)] = inst_32239__$1);

return statearr_32254;
})();
if(cljs.core.truth_(inst_32239__$1)){
var statearr_32255_32270 = state_32251__$1;
(statearr_32255_32270[(1)] = (5));

} else {
var statearr_32256_32271 = state_32251__$1;
(statearr_32256_32271[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (5))){
var inst_32239 = (state_32251[(7)]);
var inst_32241 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_32239);
var state_32251__$1 = state_32251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32251__$1,(8),inst_32241);
} else {
if((state_val_32252 === (6))){
var state_32251__$1 = state_32251;
var statearr_32257_32272 = state_32251__$1;
(statearr_32257_32272[(2)] = null);

(statearr_32257_32272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (7))){
var inst_32247 = (state_32251[(2)]);
var state_32251__$1 = state_32251;
var statearr_32258_32273 = state_32251__$1;
(statearr_32258_32273[(2)] = inst_32247);

(statearr_32258_32273[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32252 === (8))){
var inst_32243 = (state_32251[(2)]);
var state_32251__$1 = (function (){var statearr_32259 = state_32251;
(statearr_32259[(8)] = inst_32243);

return statearr_32259;
})();
var statearr_32260_32274 = state_32251__$1;
(statearr_32260_32274[(2)] = null);

(statearr_32260_32274[(1)] = (2));


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
});})(c__18851__auto___32268,ch))
;
return ((function (switch__18830__auto__,c__18851__auto___32268,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18831__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18831__auto____0 = (function (){
var statearr_32264 = [null,null,null,null,null,null,null,null,null];
(statearr_32264[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18831__auto__);

(statearr_32264[(1)] = (1));

return statearr_32264;
});
var figwheel$client$heads_up_plugin_$_state_machine__18831__auto____1 = (function (state_32251){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_32251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e32265){if((e32265 instanceof Object)){
var ex__18834__auto__ = e32265;
var statearr_32266_32275 = state_32251;
(statearr_32266_32275[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32265;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32276 = state_32251;
state_32251 = G__32276;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18831__auto__ = function(state_32251){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18831__auto____1.call(this,state_32251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18831__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18831__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto___32268,ch))
})();
var state__18853__auto__ = (function (){var statearr_32267 = f__18852__auto__.call(null);
(statearr_32267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto___32268);

return statearr_32267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto___32268,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18851__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18851__auto__){
return (function (){
var f__18852__auto__ = (function (){var switch__18830__auto__ = ((function (c__18851__auto__){
return (function (state_32297){
var state_val_32298 = (state_32297[(1)]);
if((state_val_32298 === (1))){
var inst_32292 = cljs.core.async.timeout.call(null,(3000));
var state_32297__$1 = state_32297;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32297__$1,(2),inst_32292);
} else {
if((state_val_32298 === (2))){
var inst_32294 = (state_32297[(2)]);
var inst_32295 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_32297__$1 = (function (){var statearr_32299 = state_32297;
(statearr_32299[(7)] = inst_32294);

return statearr_32299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32297__$1,inst_32295);
} else {
return null;
}
}
});})(c__18851__auto__))
;
return ((function (switch__18830__auto__,c__18851__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____0 = (function (){
var statearr_32303 = [null,null,null,null,null,null,null,null];
(statearr_32303[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__);

(statearr_32303[(1)] = (1));

return statearr_32303;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____1 = (function (state_32297){
while(true){
var ret_value__18832__auto__ = (function (){try{while(true){
var result__18833__auto__ = switch__18830__auto__.call(null,state_32297);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18833__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18833__auto__;
}
break;
}
}catch (e32304){if((e32304 instanceof Object)){
var ex__18834__auto__ = e32304;
var statearr_32305_32307 = state_32297;
(statearr_32305_32307[(5)] = ex__18834__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32297);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32304;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18832__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32308 = state_32297;
state_32297 = G__32308;
continue;
} else {
return ret_value__18832__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__ = function(state_32297){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____1.call(this,state_32297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18831__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18831__auto__;
})()
;})(switch__18830__auto__,c__18851__auto__))
})();
var state__18853__auto__ = (function (){var statearr_32306 = f__18852__auto__.call(null);
(statearr_32306[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18851__auto__);

return statearr_32306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18853__auto__);
});})(c__18851__auto__))
);

return c__18851__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__32309){
var map__32316 = p__32309;
var map__32316__$1 = ((((!((map__32316 == null)))?((((map__32316.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32316.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32316):map__32316);
var ed = map__32316__$1;
var formatted_exception = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__32316__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__32318_32322 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__32319_32323 = null;
var count__32320_32324 = (0);
var i__32321_32325 = (0);
while(true){
if((i__32321_32325 < count__32320_32324)){
var msg_32326 = cljs.core._nth.call(null,chunk__32319_32323,i__32321_32325);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32326);

var G__32327 = seq__32318_32322;
var G__32328 = chunk__32319_32323;
var G__32329 = count__32320_32324;
var G__32330 = (i__32321_32325 + (1));
seq__32318_32322 = G__32327;
chunk__32319_32323 = G__32328;
count__32320_32324 = G__32329;
i__32321_32325 = G__32330;
continue;
} else {
var temp__4425__auto___32331 = cljs.core.seq.call(null,seq__32318_32322);
if(temp__4425__auto___32331){
var seq__32318_32332__$1 = temp__4425__auto___32331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32318_32332__$1)){
var c__17629__auto___32333 = cljs.core.chunk_first.call(null,seq__32318_32332__$1);
var G__32334 = cljs.core.chunk_rest.call(null,seq__32318_32332__$1);
var G__32335 = c__17629__auto___32333;
var G__32336 = cljs.core.count.call(null,c__17629__auto___32333);
var G__32337 = (0);
seq__32318_32322 = G__32334;
chunk__32319_32323 = G__32335;
count__32320_32324 = G__32336;
i__32321_32325 = G__32337;
continue;
} else {
var msg_32338 = cljs.core.first.call(null,seq__32318_32332__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_32338);

var G__32339 = cljs.core.next.call(null,seq__32318_32332__$1);
var G__32340 = null;
var G__32341 = (0);
var G__32342 = (0);
seq__32318_32322 = G__32339;
chunk__32319_32323 = G__32340;
count__32320_32324 = G__32341;
i__32321_32325 = G__32342;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__32343){
var map__32346 = p__32343;
var map__32346__$1 = ((((!((map__32346 == null)))?((((map__32346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32346):map__32346);
var w = map__32346__$1;
var message = cljs.core.get.call(null,map__32346__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16814__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16814__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16814__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__32354 = cljs.core.seq.call(null,plugins);
var chunk__32355 = null;
var count__32356 = (0);
var i__32357 = (0);
while(true){
if((i__32357 < count__32356)){
var vec__32358 = cljs.core._nth.call(null,chunk__32355,i__32357);
var k = cljs.core.nth.call(null,vec__32358,(0),null);
var plugin = cljs.core.nth.call(null,vec__32358,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32360 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32354,chunk__32355,count__32356,i__32357,pl_32360,vec__32358,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_32360.call(null,msg_hist);
});})(seq__32354,chunk__32355,count__32356,i__32357,pl_32360,vec__32358,k,plugin))
);
} else {
}

var G__32361 = seq__32354;
var G__32362 = chunk__32355;
var G__32363 = count__32356;
var G__32364 = (i__32357 + (1));
seq__32354 = G__32361;
chunk__32355 = G__32362;
count__32356 = G__32363;
i__32357 = G__32364;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32354);
if(temp__4425__auto__){
var seq__32354__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32354__$1)){
var c__17629__auto__ = cljs.core.chunk_first.call(null,seq__32354__$1);
var G__32365 = cljs.core.chunk_rest.call(null,seq__32354__$1);
var G__32366 = c__17629__auto__;
var G__32367 = cljs.core.count.call(null,c__17629__auto__);
var G__32368 = (0);
seq__32354 = G__32365;
chunk__32355 = G__32366;
count__32356 = G__32367;
i__32357 = G__32368;
continue;
} else {
var vec__32359 = cljs.core.first.call(null,seq__32354__$1);
var k = cljs.core.nth.call(null,vec__32359,(0),null);
var plugin = cljs.core.nth.call(null,vec__32359,(1),null);
if(cljs.core.truth_(plugin)){
var pl_32369 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__32354,chunk__32355,count__32356,i__32357,pl_32369,vec__32359,k,plugin,seq__32354__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_32369.call(null,msg_hist);
});})(seq__32354,chunk__32355,count__32356,i__32357,pl_32369,vec__32359,k,plugin,seq__32354__$1,temp__4425__auto__))
);
} else {
}

var G__32370 = cljs.core.next.call(null,seq__32354__$1);
var G__32371 = null;
var G__32372 = (0);
var G__32373 = (0);
seq__32354 = G__32370;
chunk__32355 = G__32371;
count__32356 = G__32372;
i__32357 = G__32373;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args32374 = [];
var len__17884__auto___32377 = arguments.length;
var i__17885__auto___32378 = (0);
while(true){
if((i__17885__auto___32378 < len__17884__auto___32377)){
args32374.push((arguments[i__17885__auto___32378]));

var G__32379 = (i__17885__auto___32378 + (1));
i__17885__auto___32378 = G__32379;
continue;
} else {
}
break;
}

var G__32376 = args32374.length;
switch (G__32376) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32374.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17891__auto__ = [];
var len__17884__auto___32385 = arguments.length;
var i__17885__auto___32386 = (0);
while(true){
if((i__17885__auto___32386 < len__17884__auto___32385)){
args__17891__auto__.push((arguments[i__17885__auto___32386]));

var G__32387 = (i__17885__auto___32386 + (1));
i__17885__auto___32386 = G__32387;
continue;
} else {
}
break;
}

var argseq__17892__auto__ = ((((0) < args__17891__auto__.length))?(new cljs.core.IndexedSeq(args__17891__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17892__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__32382){
var map__32383 = p__32382;
var map__32383__$1 = ((((!((map__32383 == null)))?((((map__32383.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32383.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32383):map__32383);
var opts = map__32383__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq32381){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32381));
});

//# sourceMappingURL=client.js.map?rel=1451996465228