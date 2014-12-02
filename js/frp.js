!function(){

var inputEventToVal = function(e){ 
  return $(e.target).val();
};

var floatsFromSlider = function($slider){
  return $slider
    .asEventStream("input",inputEventToVal)
    .toProperty($slider.val())
    .map(parseFloat);
};

$( function(){
  var num = '1';
  var $slider = $('#slider' + num),
      $label = $('#sliderLabel'+ num);

  var values = $slider
    .asEventStream("input",function(e) {return $(e.target).val();})
    .log()
    .visualize('sliderValues',$('#streams' + num));

  //###########################################
  num = '2';
  var $slider = $('#slider' + num),
      $label = $('#sliderLabel'+ num);

  var values2 = $slider
    .asEventStream("input",function(e) {return $(e.target).val();})
    .visualize('sliderValues',$('#streams' + num));

  values2.assign($label,"text");



  //###########################################
  num = '3';
  var $slider = $('#slider' + num),
      $label = $('#sliderLabel'+ num);

  var values3 = $slider
    .asEventStream("input",function(e) {return $(e.target).val();})
    .visualize('sliderValues',$('#streams' + num));


  var floats3 = values3.map( function(x){
    return parseFloat(x);
  });
  floats3.visualize('floats',$('#streams' + num));

  floats3.assign($label, "text");
  //###########################################
  
  num = '4';

  var $slider = $('#slider' + num),
      $label = $('#sliderLabel'+ num);

  var values4 = $slider
    .asEventStream("input",function(e) {return $(e.target).val();})
    .visualize('sliderValues',$('#streams' + num));


  var floats4 = values4.map( function(x){
    return parseFloat(x);
  });
  floats4.visualize('floats',$('#streams' + num));

  /* var percents4 = floats4.map( function(x){
    return Math.round(x*100);
  })
    */

  var formatted4 = floats4.map( function(x){
    return ""+(Math.round(x*100))+"%";
  });

  formatted4.visualize('formatted',$('#streams' + num));
  formatted4.assign($label,"text");

  //#############################################
  num = '5';
  var $sliderA = $("#slider" + num + "A"),
      $labelA = $("#label" + num + "A"),
      $sliderB = $("#slider" + num + "B"),
      $labelB = $("#label" + num + "B"),
      $labelC = $("label" + num + "C");
  
  var values5A = floatsFromSlider($sliderA);
  var values5B = floatsFromSlider($sliderB);

  values5A.visualize('sliderFloatValuesA',$('#streams' + num));
  values5B.visualize('sliderFloatValuesB',$('#streams' + num));

  values5A.assign($labelA,'text');
  values5B.assign($labelB,'text');


  //#############################################
  num = '6';
  var $sliderA = $("#slider" + num + "A"),
      $labelA = $("#label" + num + "A"),
      $sliderB = $("#slider" + num + "B"),
      $labelB = $("#label" + num + "B"),
      $labelC = $("#label" + num + "C");
  
  var values6A = floatsFromSlider($sliderA);
  var values6B = floatsFromSlider($sliderB);

  values6A.visualize('sliderFloatValuesA',$('#streams' + num));
  values6B.visualize('sliderFloatValuesB',$('#streams' + num));

  values6A.assign($labelA,'text');
  values6B.assign($labelB,'text');

  var combined = values6A.combine(values6B, function(a,b){
    return a + b;
  });
  combined.visualize('sumFloatValues',$('#streams' + num));

  combined.assign( $labelC, "text" );
});

}();
