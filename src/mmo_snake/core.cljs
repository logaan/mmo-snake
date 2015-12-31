(ns mmo-snake.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(defn on-js-reload [] nil)

(def colors
  ["red" "blue" "green"])

(defn snake [index coords]
  (for [[x y] coords]
    [:rect {:key (str x "," y)
            :width 10
            :height 10
            :x x
            :y y
            :style {:fill (colors index)}}]))

(defn simple-component [state]
  [:svg {:width 500 :height 500}
   (for [[index coords] (map list (range) (:snakes @state))]
     (snake index coords))])

(defn render-simple [state]
  (r/render-component [simple-component state]
                      (.-body js/document)))

(def state
  (atom {:snakes [[[20 10] [10 0]]
                  [[100 10] [110 10]]]}))

(render-simple state)
