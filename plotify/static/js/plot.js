"use strict"
let chart = require('chart.js');


$(document).ready(() => {
    let plotBtn = $("#plot_btn");
    let myChart = null;
    plotBtn.click(function () {
        let expression = $("#function1").val();
        let xfrom = $("#xfrom").val();
        let xto = $("#xto").val();
        let points = [];

        $.ajax({
            url: "/rest/"+expression.replace('/',':')+"/"+xfrom+"/"+xto, success: function (result) {
                points = result;
                points.forEach((point) => console.log(point));
                $('#plot_canvas').remove();
                $('#canvas_container').append("<canvas id=\"plot_canvas\" style=\"height:80vh;width:100%;border:2px solid black\">" +
                    "</canvas>");
                let ctx = document.getElementById("plot_canvas");
                myChart = new Chart(ctx, {
                    type: 'scatter',
                    data: {
                        datasets: [{
                            label: "y="+expression,
                            data: points,
                            borderWidth: 1,
                            pointRadius: 1,

                        }]
                    },
                    options: {
                        scales: {
                            xAxes: [{
                                type: 'linear',
                                position: 'bottom',
                                scaleLabel: {
                                    display: true,
                                    scaleString: 'x'
                                }
                            }],
                            yAxes: [ {
                               labelString: 'y'
                            }]
                        }
                    }
                });

            }
        });

    });
})
;