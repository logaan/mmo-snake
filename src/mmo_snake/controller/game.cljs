(ns mmo-snake.controller.game
  (:require [mmo-snake.model.game :refer [add-move]]))

(def key-codes
  {65 [0 :ccw]
   83 [0 :cw]
   75 [1 :ccw]
   76 [1 :cw]})

(defn change-direction [state]
  (fn [e]
    (if-let [[player-no rotation] (key-codes e.keyCode)]
      (swap! state add-move player-no rotation))))

(defn actions [state]
  {:change-direction (change-direction state)})
