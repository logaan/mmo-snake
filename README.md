# mmo-snake

FIXME: Write a one-line description of your library/project.

## Overview

FIXME: Write a paragraph about the library/project and highlight its goals.

## Design

Goals of a representation:
- Minimise communication between clients.
- Allow for errors to be identified.
  - A message is dropped or arrives out of order.
  - Is this actually a concern with tcp?
- Not cause compound issues in the case of errors.
  - Probably not an issue with tcp either.
- Able to drop old states/messages if desired in order to only show the head of
  the snake.
- Be able to determine who 'knew' what in order to resolve winner in the case
  of actions frome each user causing death.
- Allow for predictive movement in the case of network latency.
- Allow for an unlimited number of players

Ways that you could structure the snake game:
- (players-vector (moves-vector (map vector-clock action)))

    {:alice [(action [10 8] :left) (action [11 8] :right)]
     :bob   [(action [0 8] :right) (action [10 11] :right)]}

  Here Bob has seen that Alice turned her snake left at T10. So if turning
  right caused Bob to crash into Alice then bob would lose. Bob also
  potentially crashed at T11, however Bob was not aware of Alices actions at
  T11 that could have caused him to crash into her.

  Perhaps we allow snakes to cross in the case that there was no barrier that
  you were aware of at the time of collision. That still means that someone
  could 'pop' in front of you after a late message and their predicted position
  was incorrect.

  Perhaps you have a kind of action that's just 'I am here' that gets fired
  every few spaces. Clients color predicted positions differently so that it's
  clear that they might be re-drawn.

  It would be convenient if the coord at which you turned was included so that
  we could work backwards rather than needing to maintain some state from when
  you first started the game. Might also help with error checking.
- (players-vector (positions-vector x-y-coord))
  Have each client report death if they see their player crash. If not then
  just allow the overlap. Relies on trusting the clients. In the case of
  constant latency then the snake will be slightly behind it's actual position
  and will probably look fine. If you have a slow down in delivery of messages
  and then they all come together then the snake will jump forward after having
  stood still for a while. Will cause a lot of packets to be sent.

## Setup

To get an interactive development environment run:

    lein figwheel

and open your browser at [localhost:3449](http://localhost:3449/).
This will auto compile and send all changes to the browser without the
need to reload. After the compilation process is complete, you will
get a Browser Connected REPL. An easy way to try it is:

    (js/alert "Am I connected?")

and you should see an alert in the browser window.

To clean all compiled files:

    lein clean

To create a production build run:

    lein cljsbuild once min

And open your browser in `resources/public/index.html`. You will not
get live reloading, nor a REPL. 

## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at your option) any later version.
