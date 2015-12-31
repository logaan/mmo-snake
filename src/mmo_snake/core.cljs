(ns mmo-snake.core
  (:require [reagent.core :as r]))

(enable-console-print!)

(defn on-js-reload [] nil)

(defn snake [coords]
  (for [[x y] coords]
    [:rect {:key (str x "," y)
            :width 10
            :height 10
            :x x
            :y y
            :style {:fill "#369"}}]))

(defn simple-component [state]
  [:svg {:width 500 :height 500}
   (for [coords (:snakes @state)]
     (snake coords))])

(defn render-simple [state]
  (r/render-component [simple-component state]
                      (.-body js/document)))

(def state
  (atom {:snakes [[[20 10] [10 0]]
                  [[100 10] [110 10]]]}))

(render-simple state)
