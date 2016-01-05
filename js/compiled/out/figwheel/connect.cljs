(ns figwheel.connect (:require [figwheel.client] [mmo-snake.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/mmo-snake.core.on-js-reload (apply js/mmo-snake.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'mmo-snake.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

