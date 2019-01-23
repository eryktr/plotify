# plotify
plotify is a simple web application allowing the user to graph XY-plots of analytical functions.
The project was implemented using Flask, my own Reverse Polish Notation library (https://github.com/eryktrzeciakiewicz/expression-calculator) and the Chart.js library.

# Installation
To properly build this project, you need to have `pip`, `npm` and `browserify` installed.

1. To quickly install required Python dependencies, run:
  pip install -r requirements.txt

2. Now, to install all the javascript dependencies, run:
  cd static
  npm install
  
3. Now, we need to build the front: 
  cd static
  cd js
  browserify plot.js -o bundle.js
 
4. Now, it't time to run the server:
  python -m flask run
  
  
