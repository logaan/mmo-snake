(ns mmo-snake.core
  (:require [reagent.core :as r]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(defn on-js-reload [] nil)

(def directions
  {:east  [1 0]
   :west  [-1 0]
   :north [0 -1]
   :south [0 1]})

(defn move [[dx dy] [cx cy]]
  [(+ cx dx) (+ cy dy)])

(defn infinite-lines [moves]
  (for [[coord d] moves]
    (iterate (partial move (directions d)) coord)))

(defn moves->coords [game-length snake-length moves]
  (let [ilines (infinite-lines moves)
        history (->> ilines
                     (partition 2 1)
                     (mapcat (fn [[line [bend & _]]]
                               (take-while #(not= bend %) line))))
        future (last ilines)
        full-history (take game-length (concat history future))]
    (drop (- game-length snake-length) full-history)))

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
  [:svg {:id :game :width 500 :height 500 :tabIndex 0
         :style {:border "1px solid black"}
         :onKeyDown change-direction}
   (for [[index {:keys [length moves]}] (map list (range) snakes)]
     (snake index (moves->coords time length moves)))])

(def keys
  {65 :p1-left
   83 :p1-right
   75 :p2-left
   76 :p2-right})

(defn change-direction [state]
  (fn [e]
    (println (keys e.keyCode))))

(defn simple-component [state]
  (game @state {:change-direction (change-direction state)}))

(defn render-simple [state]
  (r/render-component [simple-component state] (.-body js/document))
  (js/setInterval (fn [] (swap! state update-in [:time] inc)) 100)
  (.focus (.getElementById js/document "game")))

(render-simple
 (r/atom {:snakes [{:length 3
                    :moves [[[49 49] :west]]}
                   {:length 6
                    :moves [[[0 0] :east]
                            [[1 0] :south]
                            [[1 2] :east]]}]
          :time 1}) )
