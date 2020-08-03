var row_num = 3;
var order_sum = [];
var k = 0;
distraction_figure(document.getElementById('figure1'));
distraction_figure(document.getElementById('figure2'));

$('#d-done').click(function() {
    if (validCheck3()) {
        $('#distraction').css("display", "none");
        $('#finish').css("display", "block");
        }
    else
        alert("답이 틀렸습니다. 다시 시도해보세요.");

});



function distraction_figure (target) {

    for (var i=0; i<row_num; i++) {

        var figure_order  = []
        for (var j=0; j<10; j++)
            figure_order[j] = Math.round(Math.random());

        var array = figure_order;
        var sum = array.reduce(function(a, b){
        return a + b;
        }, 0);
       order_sum[k] = sum;
       k++;
        new_row = document.getElementById('dummy_row').cloneNode(true)
        row = draw_figure(figure_order, new_row);
        target.appendChild(row);
    }
}


function draw_figure(figure_order, row) {


    //console.log(figure_order);
    for (i=0; i< figure_order.length; i++) {
        if (figure_order[i] == 1){
            row.children[i].innerHTML = "<img src='r_square.png' class = 'img-responsive' width = '100%/'>";
        }
        else {
            row.children[i].innerHTML = "<img src='b_circle.png' class = 'img-responsive' width = '100%/'>";
            }

    }
    row.children[11].innerHTML = "<input type='text' style='width:30px'>";

    return row;
}

function validCheck3 ()  {
    var table1 = document.getElementById ('figure1');
    var table2 = document.getElementById ('figure2');
    for (var i=0; i<row_num; i++)
    {
       var ans = table1.children[i+1].children[11].children[0].value;
       if (ans != order_sum[i])
            return false;
    }
    for (var i=0; i<row_num; i++)
    {
       var ans = table2.children[i].children[11].children[0].value;
       if (ans != order_sum[i+row_num])
            return false;
    }

    return true;
}
