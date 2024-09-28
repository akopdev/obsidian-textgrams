 ```textgram

  +- -+  -+ +-  |   |   | |   -+-  |    /  \  \     /  +-  -+  +- -+    +   \ /   \   /
  |   |   | |   +- -+  -+ +-   |  -+-  +-  -+  +- -+    \  /  /     \  / \   +     + +
                                                                                  /   \

  .- -.  -. .-  |   |   | |   -.-  |    /  \  \     /  .-  -.  .- -.    .   \ /   \   / 
  |   |   | |   '- -'  -' '-   |  -'-  '-  -'  '- -'    \  /  /     \  / \   '     . .  
                                                                                  /   \   

   _ _   _   _                ___                       _  _   __ __    _         \   /
  |   |   | |   |_ _|  _| |_   |  _|_  /_  _\  \_  _/   \  /  /     \  / \  \_/   |   |
                                                                                  /   \

                                                                                          
  +~ ~+  ~+ +~  :   :   : :   ~+~  : 
  :   :   : :   +~ ~+  ~+ +~   :  ~+~

           /    \
   /\  \/  \    /

  -.   .-  -. .-. .-  .-.
   '- -'    '-' '-'   '-'
```

## Dots

```textgram
  o-o   *-o   #-o   |  |  |  \ /    \   /     \ / \   /     \ / \   /
  o-*   *-*   #-*   o  *  #   o  o   o o    *  *   * *    #  #   # #
  o-#   *-#   #-#   |  |  |     / \ /   \  / \    /   \  / \    /   \
```


## Arrows

```textgram
          |  ^   ^  ^    /  \ 
  ->  <-  v  |  /    \  v    v

  ->|  |<- ->o  o<-  ->* *<-  -># #<-           

  -   _   *   o   #
  ^   ^   ^   ^   ^     
  |   |   |   |   |     

  |   |   |   |   |
  v   v   v   v   v
  -   _   *   o   #   

                                  ----
  \ |  | /     ^|  |^   \    /    ^  ^
   v|  |v     / |  | \   v  v    /    \
                         ----    
```

## Protocols

```textgram
+-----+            +-----+
|  A  |            |  B  |
+--+--+            +--+--+
   | foo              |
   |----------------->|
   | hello            |
   |----------------->|--+
   |           world  |  | prompts the user
   |<-----------------|--+
   |                  |
 --+--              --+--
```

## Mocks

```textgram
.------------------------.
|.----------------------.|
||"https://example.com" ||
|'----------------------'|
| ______________________ |
||                      ||
||   Welcome!           ||
||                      ||
||                      ||
||  .----------------.  ||
||  | username       |  ||
||  '----------------'  ||
||  .----------------.  ||
||  |"*******"       |  ||
||  '----------------'  ||
||                      ||
||  .----------------.  ||
||  |   "Sign-up"    |  ||
||  '----------------'  ||
||                      ||
|+----------------------+|
.------------------------.
```


## Architecture

```textgram
    Sender                Mail Server              Receiver
                             _____
  .---------.    SMTP       |=====|      POP      .---------.
  |         |-------------->|     |<--------------|         |
  |  Alice  |               |     |               |   Bob   |
  +---------+               |  o  |               +---------+
 /// _____ \\\              |_____|              /// _____ \\\
'-------------'                                 '-------------'
                    +---------------------+
                    |"To: bob@bar.com"    |
                    |"From: alice@foo.com"|
                    |"Body: Hi!"          |
                    +---------------------+
```   

### Layers

```textgram
 .---.  .---. .---.  .---.    .---.  .---.
 '---'  '---' '---'  '---'    '---'  '---'
   |      |     |      |        |      |
   v      v     |      v        |      v
 .------------. | .-----------. |  .-----.
 | Filesystem | | | Scheduler | |  | MMU |
 '------------' | '-----------' |  '-----'
        |       |      |        |
        v       |      |        v
     .----.     |      |    .~~~~~~~~~.
     | IO |<----'      |    : Network :
     '----'            |    '~~~~~~~~~'
        |              |         |
        v              v         v
 .---------------------------------------.
 |                  HAL                  |
 '---------------------------------------'
```

## Tables

```textgram
+-----+---------+---------+~~~  ~~~+----------+
| ID  | First   | Last    :        : Lang     |
+-----+---------+---------+~~~  ~~~+----------+
| 1   | Joe     | Doe     :        : en-US    |
+-----+---------+---------+~~~  ~~~+----------+
| 2   | Rick    | Russel  :        : en-US    |
+-----+---------+---------+~~~  ~~~+----------+
:     :         :         :        :          :

:     :         :         :        :          :
+-----+---------+---------+~~~  ~~~+----------+
| 999 | Anna    | Merkle  :        : pt-BR    |
+-----+---------+---------+~~~  ~~~+----------+
```   

## Flow charts

```textgram
  .-------.                   +
  | START |                  / \       
  '---+---'                 /   \      +-+---------+-+    ___________
      |        .-----.     /     \     | | COMPLEX | |   /           \
      v        | END |<---+CHOICE +--->| |         | |->+ PREPARATION +-> X
   +-------+   '-----'     \     /     | | PROCESS | |   \___________/
  / INPUT /                 \   /      +-+---------+-+ 
 +-------+                   \ /
      |                       +
      v                       ^
 +---------+             +----+----+
 | PROCESS |------------>| PROCESS |<----- x
 +---------+             +---------+
```

## Trees

```textgram
      +              +              +-- 1        .-- 1     / 1
     / \             |           +--+         .--+        + 
    /   \        +---+---+       |  +-- 2     |  '-- 2   / \ 2
   +     +       |       |     --+          --+         +  
  / \   / \    +-+-+   +-+-+     |  +-- 3     |  .-- 3   \ / 3
 /   \ /   \   |   |   |   |     +--+         '--+        +  
1    2 3    4  1   2   3   4        +-- 4        '-- 4     \ 4


Linux
 +--Android
 +--Debian
 |   +--Ubuntu
 |   |   +--Lubuntu
 |   |   +--Kubuntu
 |   |   `--Xubuntu
 |   `--Mint
 +--Centos
 `--Fedora

      
    X            Y
   / \          / \
  A   Y   ->   X   C
     / \      / \
    B   C    A   B

```

## Shapes

```textgram
  +---------+  +  +------+       .-----.  +~~~~~+     +----+       +----+
   \       /  / \  \      \      |     |  :     :    /      \     /      \
    \     /  /   \  \      \     |     |  :     :   /        \   |        |
     \   /  /     \  \      \    |     |  :     :   \        /   |        |
      \ /  /       \  \      \   |     |  :     :    \      /     \      /
       +  +---------+  +------+  '-----'  +~~~~~+     +----+       +----+
```   

### Small Shapes

```textgram
   __        ____     ___                     .---.     __        +-+  +-+
  /  \   /\  \  /  +  \ /  /\   +-+  +-+ +-+  |   | ++ |  |  _   / /    \ \
  \__/  /__\  \/  /_\  +  /  \  +-+ /_/   \_\ '---' ++ |__| |_| +-+      +-+
                         +----+
```   

### Overlaps and intersections

```textgram                                                                                           
      .---.         .---.         .---.         .---.         .---.           
      |   |         |   |         |   |         |   |         |   |          
   .--+---+--.   .--+---+--.   .--|   |--.   .--+   +--.   .----  |---.       
   |         |   |  |   |  |   |  |   |  |   |         |   |          |      
   '--+---+--'   '--+---+--'   '--|   |--'   '--+   +--'   '--|  -----'       
      |   |         |   |         |   |         |   |         |   |          
      '---'         '---'         '---'         '---'         '---'           
```

## Grids

```textgram
    +----+        +----+                                                                                                         
   /      \      /      \            .-----+-----+-----.                                                                         
  +        +----+        +----+      |     |     |     |          .-----+-----+-----+-----+                                      
   \      /      \      /      \     |     |     |     |         /     /     /     /     /                                       
    +----+        +----+        +    +-----+-----+-----+        +-----+-----+-----+-----+                                        
   /      \      /      \      /     |     |     |     |       /     /     /     /     /
  +        +----+        +----+      |     |     |     |      +-----+-----+-----+-----+
   \      /      \      /      \     +-----+-----+-----+     /     /     /     /     /
    +----+        +----+        +    |     |     |     |    +-----+-----+-----+-----+
          \      /      \      /     |     |     |     |   /     /     /     /     /
           +----+        +----+      '-----+-----+-----'  '-----+-----+-----+-----+
```   

### Small grids

```textgram
       ___     ___      .---+---+---+---+---.     .---+---+---+---.  .---.   .---. 
   ___/   \___/   \     |   |   |   |   |   |    / \ / \ / \ / \ /   |   +---+   |
  /   \___/   \___/     +---+---+---+---+---+   +---+---+---+---+    +---+   +---+
  \___/   \___/   \     |   |   |   |   |   |    \ / \ / \ / \ / \   |   +---+   |
  /   \___/   \___/     +---+---+---+---+---+     +---+---+---+---+  +---+   +---+
  \___/   \___/   \     |   |   |   |   |   |    / \ / \ / \ / \ /   |   +---+   |
      \___/   \___/     '---+---+---+---+---'   '---+---+---+---'    '---'   '---'
```   

### Dot grids

```textgram
  o o o o o    * * * * *    o * * * o     o o o       * * *    . * . . .
  o o o o o    * * * * *    * o o o *    o o o o     * * * *   . o . . .
  o o o o o    * * * * *    o o o o *   o o o o o   * * * * *  . . . . .
  o o o o o    * * * * *    * * * o o    o o o o     * * * *   . o o * .
  o o o o o    * * * * *    o o o * *     o o o       * * *    . o o o o
```   

## Time series

```textgram

  85.67 ┤                                       ╭╮
  78.20 ┤                                       ││                  ╭╮
  70.73 ┤                                       ││  ╭╮ ╭╮ ╭╮   ╭╮  ╭╯╰─╮
  63.27 ┤                        ╭╮         ╭─╮ ││ ╭╯╰╮│╰─╯╰╮╭╮│╰──╯   │╭
  55.80 ┤   ╭╮                 ╭╮││╭╮ ╭╮╭╮  │ ╰─╯╰─╯  ││    ││││       ╰╯
  48.33 ┤   │╰╮      ╭──╮      │││││╰╮│╰╯│  │         ╰╯    ╰╯╰╯
  40.87 ┤╭╮ │ ╰╮╭╮  ╭╯  ╰─╮╭╮╭─╯╰╯╰╯ ╰╯  ╰──╯
  33.40 ┤││ │  ╰╯╰╮╭╯     ││╰╯
  25.93 ┤││╭╯     ╰╯      ╰╯
  18.47 ┼╯││
  11.00 ┤ ╰╯
        └───────────┴───────────┴───────────┴───────────┴───────────┴────
      2011        2012        2013        2014        2015        2016

    E +-------------------------*--+     E |                         o
    D |-------------------*--*--|--*     D |                   o  o  |  o
    C |-------------*--*  |  |  |  |     C |             o  o  |  |  |  |
    B |-------*--*  |  |  |  |  |  |     B |       o  o  |  |  |  |  |  |
    A +-*--*--+--+--+--+--+--+--+--+     A +-o--o--|--|--|--|--|--|--|--|
        5 10 15 20 25 30 35 40 45 50         5 10 15 20 25 30 35 40 45 50
      
        ▲
    Uin :   .------------------------
        :   |
        :   |
        *---'~~~~~~~~~~~~~~~~~~~~~~~~▶

     Udc▲
Udc_OK  :      .---------------------
        :     /  :       :
        :    /   :       :
        *---'~~~~:~~~~~~~:~~~~~~~~~~~▶
                 :<----->:
                   500ms
        ▲
        :
Cpu.Qon :~~~~~~~~~~~~~~~~.-----------
        :                | Inactive
        :     Active     |
        *----------------'~~~~~~~~~~~▶
 ```   

## Chips

```textgram
                                  +-----+
     +----[PWR]-------------------| USB |--+
     |                            +-----+  |
     |        "GND/RST2" [ ][ ]            |
     |     "MOSI2/SCK2"  [ ][ ]"A5/SCL"[ ] |   C5 
     |        "5V/MISO2" [ ][ ]"A4/SDA"[ ] |   C4 
     |                            AREF [ ] |
     |                             GND [ ] |
     | [ ]"N/C"                "SCK/13"[ ] |   B5 
     | [ ] IOREF              "MISO/12"[ ] |  "." 
     | [ ] RST                "MOSI/11"[ ]~|  "." 
     | [ ] 3V3   +---+              10 [ ]~|  "." 
     | [ ] 5v    | A |               9 [ ]~|  "." 
     | [ ] GND  -| R |-              8 [ ] |   B0 
     | [ ] GND  -| D |-                    |
     | [ ] Vin  -| U |-              7 [ ] |   D7 
     |          -| I |-              6 [ ]~|  "." 
     | [ ] A0   -| N |-              5 [ ]~|  "." 
     | [ ] A1   -| O |-              4 [ ] |  "." 
     | [ ] A2    +---+         "INT1/3"[ ]~|  "." 
     | [ ] A3                  "INT0/2"[ ] |  "." 
     | [ ]"A4/SDA"RST SCK MISO   "TX>1"[ ] |  "." 
     | [ ]"A5/SCL"[ ] [ ] [ ]    "RX<0"[ ] |   D0 
     |            [ ] [ ] [ ]              |
     | "UNO_R3"   GND MOSI 5V   ___________|
     |_________________________| 
```

## Circuits

```textgram
      "+10-15V"          ___0,047R
      *---------o-----o-|___|-o--o---------o----o-------.
   "+"|         |     |       |  |         |    |       |
    -===-      _|_    |       | .+.        |    |       |
    -===-      .-.    |       | | | 2k2    |    |       |
    -===-    470|"+"  |       | | |        |    |      _|_
   "-"|       uF|     '--.    | '+'       .+.   |      \ / LED
      +---------o        |6   |7 |8    1k | |   |      -+-
             ___|___   .-+----+--+--.     | |   |       |
              -═══-    |            |     '+'   |       |
                -      |            |1     |  |/  BC    |
               GND     |            +------o--+   547   |
                       |            |      |  |`>       |
                       |            |     .+.   |       |
               .-------+            | 220R| |   o----||-+  IRF9Z34
               |       |            |     | |   |    |+->
               |       |  MC34063   | `+'   |    ||-+
               |       |            |      |    |       |  BYV29     -12V6
               |       |            |      '----'       o--|<-o----o--X OUT
 6000 micro "-"|"+"    |            |2                  |     |    |
 Farad, 40V ___|_____  |            |--o                C|    |    |
 Capacitor  ~ ~ ~ ~ ~  |            | GND         30uH  C|    |   --- 470
               |       |            |3      1nF         C|    |   ###  uF
               |       |            |-------||--.       |     |    | +
               |       '-----+----+-'           |      GND    |   GND
               |            5|   4|             |             |
               |             |    '-------------o-------------o
               |             |                           ___  |
           `-------------*------/\/\/------------o--|___|-'
                                     2k              |       1k0
                                                    .+.
                                                    | | 5k6 + 3k3
                                                    | | in Serie
                                                    '+'
                                                     |
                                                    GND
```

## Mindmaps

```textgram
                                            .-->  Alpha
                                           /
                                          .---->  Initial Release
          Planning *-------.             /         \
                            \           /           '---> Patch 1
      Initial research       \         /             \
                *             \       /               '-->  Patch 2
                 \             \     /---------> Beta
                  \             \   /
                   \             o o                     _______
                    \          .---. *-----.            /       \
                     '------>  |   |       '------o->  . Release .
                           `---' o                  \_______/
                               o  o o \
                              /    \ \ \
                          .--'      \ \ \
                         /           \ \ '----+->  Push backs
                        /             \ \      \
                       /|              \ \      '----> Setbacks
                      / |               \ \
                     V /|                \ '-----> Reception
                Team  / |                 \
                     v /|                  \
             Worklaod / .                   '-->> Career change
                     V /
                 PTO  /
                     V
                 Bug
```

## Scribbles

```textgram
          +----+     o    |          o       *      *   .----------.
  *-+---. '-* -+-    |    v         ^         \    /    |.--------.|
    |   '--->   +----+  ->*<-      /   .-+->*<-o--+     |'------> ||
  <-'       *---+     |<----->|   +----' |  ^   \       '---------'|
                                         |__|    v      *----------'

                                   .--->  F
          A       B      C  D     /
          *-------*-----*---*----*----->  E
                   \            ^ \
                    \          /   '--->  G
                     B --> C -+
                                         
```

### Line ends

```textgram
 o-o *-o   /  /  * o  o o o o  * * * *  o o o o  * * * *     o o o o  * * * * 
 o-* *-*  v  v   ^ ^  | | | |  | | | |   \ \ \ \  \ \ \ \   / / / /  / / / /
 o-> *-> *  o    | |  o * v    o * v      o * v    o * v   o * v    o * v  
 o-  *-              

 ^ ^  * o  |  |                           ^ ^ ^ ^             ^ ^ ^
 | |  ^ ^  v  v   *  o   ^ ^ ^ ^  | | | |  \ \ \ \  \ \ \ \  / / /  / / / /
 * o       *  o   ^  ^  o * v     o * v     o * v    o * v  o * v  o * v 
  
 <-o <-* <-> <-                   -o -* -> -- *<- o<- ->o ->*

    \ | /
 \   vvv   /           \ | /
  v+-----+v             vvv
 ->|     |<-           ->*<-
  ^+-----+^             ^^^
 /   ^^^   \           / | \
    / | \
  
```

### Graph with small nodes

```textgram
 A   1    2   4                 8
 *-->o<-->o<--o---------.       o
          ^   ^         |       ^
          |   |         v       |
          o<->*<-->o--->*-->o-->o<-->*
          3   B    5    C   6   7    D
```

### Graphic diagrams

```textgram
     0       3                         P *              Eye /         ^     /
     *-------*      +y                    \                +)          \   /  Reflection
  1 /|    2 /|       ^                     \                \           \ v
   *-+-----* |       |                v0    \       v3           --------*--------
   | |4    | |7      | ◄╮               *----\-----*
   | *-----|-*     ⤹ +-----> +x        /      v X   \                o
   |/      |/       / ⤴               /        o     \              / \
   *-------*       v                 /                \            /   \
  5       6      +z              v1 *------------------* v2       o-----o
```   

