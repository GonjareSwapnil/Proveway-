// To show/ hide selected option and apply CSS or same
  function show(showDiv, hideDiv1, hideDiv2, borderWrapper, wrapper1, wrapper2){
    document.getElementById(showDiv).style.display = 'block';
    document.getElementById(hideDiv1).style.display ='none';
    document.getElementById(hideDiv2).style.display ='none';
    document.getElementById(borderWrapper).style.border = '2px solid #FF6B82'
    document.getElementById(wrapper1).style.border = '1px solid #C8C8C8'
    document.getElementById(wrapper2).style.border = '1px solid #C8C8C8'
  }