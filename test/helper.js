/* global Promise, fixture */
var RamlRequestTestHelper = {};
RamlRequestTestHelper.getTestRaml = function(file, returnRaml) {
  return new Promise(function(resolve, reject) {
    var baseUrl = location.href.substr(0, location.href.lastIndexOf('/') + 1);
    var parser = fixture('parser');
    var enhancer = fixture('enhancer');
    enhancer.addEventListener('raml-json-enhance-ready', function(e) {
      var raml = e.detail.json;
      var result;
      if (returnRaml) {
        result = raml;
      } else {
        result = {
          query: raml.resources[0].methods[0].queryParameters,
          uri: raml.resources[0].methods[0].allUriParameters
        };
      }
      resolve(result);
    });
    parser.loadApi(baseUrl + file)
    .then(function(data) {
      enhancer.json = data.json.specification;
    })
    .catch(function(e) {
      reject(new Error('Parser error: ' + (e.message || 'Some error happened...')));
    });
  });
};

RamlRequestTestHelper.fire = function(type, detail) {
  var event = new CustomEvent(type, {
    detail: detail,
    bubbles: true
  });
  document.body.dispatchEvent(event);
};
RamlRequestTestHelper.setupModel = function(element, model, uri, query) {
  model.queryParameters = query;
  model.uriParameters = uri;
  element.queryModel = model.queryModel;
  element.uriModel = model.uriModel;
  element.hasQueryParameters = model.hasQueryParameters;
  element.hasUriParameters = model.hasUriParameters;
  element.hasParameters = model.hasParameters;
};
