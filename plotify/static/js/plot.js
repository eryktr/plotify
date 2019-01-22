"use strict"
let chart = require('chart.js');


$(document).ready(() => {
    let plotBtn = $("#plot_btn");
    plotBtn.click(function () {
        let expression = $("#function1").val();
        let points = [];

        $.ajax({
            url: "/rest/"+expression, success: function (result) {
                points = result;
                points.forEach((point) => console.log(point));

                let ctx = document.getElementById("plot_canvas");
                let myChart = new Chart(ctx, {
                    type: 'scatter',
                    data: {
                        datasets: [{
                            label: expression,
                            data: points
                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                type: 'linear',
                                position: 'bottom'
                            }]
                        }
                    }
                });

            }
        });

    });
})
;