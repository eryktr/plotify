from flask import Flask
from flask import render_template, redirect, url_for, jsonify
from flask_bootstrap import Bootstrap
from calculator import RPNCalculator

app = Flask(__name__, static_folder="static", static_url_path="/static")
Bootstrap(app)
calculator = RPNCalculator()

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/rest/<expression>')
def eval(expression):
    LOWER = -10
    UPPER = 10
    STEP = 0.01
    CURRENT = LOWER
    plot_points = []
    while CURRENT <= UPPER:
        try:
            plot_points.append({'x':CURRENT, 'y':calculator.evaluate(expression, CURRENT)})
        except ValueError:
            pass
        finally:
            CURRENT += STEP

    return jsonify(plot_points)

if __name__ == '__main__':
    app.run()
