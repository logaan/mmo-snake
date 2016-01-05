(ns mmo-snake.view.game
  (:require [mmo-snake.model.game :refer [moves->coords]]))

(def colors
  ["red" "blue" "green"])

(defn snake [index coords]
  (for [[x y] coords]
    [:rect {:key (str x "," y)
            :width 10
            :height 10
            :x (* x 10)
            :y (* y 10)
            :style {:fill (colors index)
                    :fill-opacity 0.5}}]))

(defn game [{:keys [snakes time]} {:keys [change-direction]}]
  [:div
   [:svg {:id :game :width 500 :height 500 :tabIndex 0
         :style {:border "1px solid black"}
         :onKeyDown change-direction}
   (for [[index {:keys [length moves]}] (map list (range) snakes)]
     (snake index (moves->coords time length moves)))]
   [:p "Controls"]
   [:p "Player 1 - A S"]
   [:p "Player 2 - K L"]])
