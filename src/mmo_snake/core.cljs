(ns mmo-snake.core
  (:require [reagent.core :as r]
            [cljs.pprint :refer [pprint]]))

(enable-console-print!)

(defn on-js-reload [] nil)

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

(defn simple-component [state]
  [:svg {:width 500 :height 500}
   (for [[index coords] (map list (range) (:snakes @state))]
     (snake index coords))])

(defn render-simple [state]
  (r/render-component [simple-component state]
                      (.-body js/document)))

(def blue-moves
  [[[0 0] :east]
   [[1 0] :south]
   [[1 2] :east]])

(def directions
  {:east [1 0]
   :west [-1 0]
   :north [0 -1]
   :south [0 1]})

(defn move [[dx dy] [cx cy]]
  [(+ cx dx) (+ cy dy)])

(def red-coords
  [[0 0] [1 0] [1 1] [1 2] [2 2] [3 2]])

(defn infinite-lines [moves]
  (for [[coord d] moves]
    (take 10 (iterate (partial move (directions d)) coord))))

(defn moves->coords [game-length moves]
  (let [ilines (infinite-lines moves)
        history (->> ilines
                     (partition 2 1)
                     (mapcat (fn [[line [bend & _]]]
                               (take-while #(not= bend %) line))))
        future (last ilines)]
    (take game-length (concat history future))))

(def state
  (atom {:snakes [red-coords
                  (moves->coords 6 blue-moves)]}))

(render-simple state)
