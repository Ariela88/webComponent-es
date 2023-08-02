(function(){
  const variables = {"REACT_APP_GTM_ENABLED":"true"};

  window.env = {};

  Object.keys(variables).forEach(function(key){
    window.env[key] = variables[key];
  });
}())
