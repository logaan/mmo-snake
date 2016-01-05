(ns mmo-snake.core
  (:require [reagent.core :as r]
            [cljs.pprint :refer [pprint]]
            [mmo-snake.model.game :refer [add-move]]
            [mmo-snake.view.game :refer [game]]))

(enable-console-print!)

(defn on-js-reload [] nil)

(def key-codes
  {65 [0 :ccw]
   83 [0 :cw]
   75 [1 :ccw]
   76 [1 :cw]})

(defn change-direction [state]
  (fn [e]
    (if-let [[player-no rotation] (key-codes e.keyCode)]
      (swap! state add-move player-no rotation))))

(defn simple-component [state]
  (game @state {:change-direction (change-direction state)}))

(defn render-simple [state]
  (r/render-component [simple-component state] (.-body js/document))
  (js/setInterval (fn [] (swap! state update-in [:time] inc)) 100)
  (.focus (.getElementById js/document "game")))

(render-simple
 (r/atom {:snakes [{:length 6
                    :moves [[[0 0] :east]
                            [[1 0] :south]
                            [[1 2] :east]]}
                   {:length 3
                    :moves [[[49 49] :west]]}]
          :time 1}) )
