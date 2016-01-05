(ns mmo-snake.core
  (:require [reagent.core :as r]
            [cljs.pprint :refer [pprint]]
            [mmo-snake.model.game :refer [moves->coords]]))

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

(defn game [{:keys [snakes time]} {:keys [change-direction]}]
  [:svg {:id :game :width 500 :height 500 :tabIndex 0
         :style {:border "1px solid black"}
         :onKeyDown change-direction}
   (for [[index {:keys [length moves]}] (map list (range) snakes)]
     (snake index (moves->coords time length moves)))])

(def key-codes
  {65 [0 :ccw]
   83 [0 :cw]
   75 [1 :ccw]
   76 [1 :cw]})

(def rotations
  {:cw {:north :east
        :east :south
        :south :west
        :west :north}
   :ccw {:north :west
         :west :south
         :south :east
         :east :north}})

(defn change-direction [state]
  (fn [e]
    (if-let [[player-no rotation] (key-codes e.keyCode)]
      (let [snake (get-in @state [:snakes player-no])
            moves (:moves snake)
            [_ direction] (last moves)
            head (last (moves->coords (:time @state) (:length snake) moves))
            new-direction (get-in rotations [rotation direction])
            new-move [head new-direction]]
        (swap! state update-in [:snakes player-no :moves] #(conj % new-move))))))

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
