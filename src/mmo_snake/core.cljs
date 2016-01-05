(ns mmo-snake.core
  (:require [reagent.core :as r]
            [cljs.pprint :refer [pprint]]
            [mmo-snake.controller.game :refer [actions]]
            [mmo-snake.view.game :refer [game]]))

(enable-console-print!)

(defn on-js-reload [] nil)

(defn component [state]
  (game @state (actions state)))

(defn start-game [state]
  (r/render-component [component state] (.-body js/document))
  (js/setInterval (fn [] (swap! state update-in [:time] inc)) 100)
  (.focus (.getElementById js/document "game")))

(start-game
 (r/atom {:snakes [{:length 6
                    :moves [[[0 0] :east]
                            [[1 0] :south]
                            [[1 2] :east]]}
                   {:length 3
                    :moves [[[49 49] :west]]}]
          :time 1}) )
