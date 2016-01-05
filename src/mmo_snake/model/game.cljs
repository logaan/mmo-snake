(ns mmo-snake.model.game)

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
