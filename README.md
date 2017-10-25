[![Build Status](https://travis-ci.org/advanced-rest-client/raml-request-parameters-editor.svg?branch=stage)](https://travis-ci.org/advanced-rest-client/raml-request-parameters-editor)  

# raml-request-parameters-editor

`<raml-request-parameters-editor>`

An element that renders query/uri parameters forms based on RAML data.

The element is to be used with combination with `raml-request-parameteres-model`
element that produces data model used internally by this view.

The same data model is used by the `raml-request-url-editor` so it can be shared
to reduce number of comutations.

The element is a form element and it validates user input. If the model items
are marked as required then the fields are automatically validated.

The element fires `uri-parameter-changed` and `query-parameter-changed`
custom event to notify about change in the parameters list.
The events are also fired when model change to notify about default values loaded
into the model. Because of that event notifying about a change to a parameter
with the same value can be fired more than once.

Unlike previous version of the element, it doesn't produce the final URL.

### Example for Polymer powered application

```html
<raml-request-parameters-editor
  query-model="[[qm]]"
  uri-model="[[um]]"
  has-query-parameters="[[hqp]]"
  has-uri-parameters="[[hup]]"
  has-parameters="[[hp]]"></raml-request-parameters-editor>

<raml-request-parameteres-model
  query-parameters="[[raml.queryParameters]]"
  uri-parameters="[[raml.allUriParameters]]"
  query-model="{{qm}}"
  uri-model="{{um}}"
  has-query-parameters="{{hqp}}"
  has-uri-parameters="{{hup}}"
  has-parameters="{{hp}}"></raml-request-parameteres-model>
```

### Example for vanilla JavaScript

```html
<raml-request-parameters-editor id="editor"></raml-request-parameters-editor>
<raml-request-parameteres-model id="model"></raml-request-parameteres-model>

<script>
var model = document.getElementById('model');
var view = document.getElementById('editor');

function passDataToView(e) {
  var type = e.type;
  type = type.replace('-changed', '');
  var property = type.replace(/-[a-z]/g, function(m) {
    return m[1].toUpperCase();
  });
  view[property] = e.detail.value;
}

model.addEventListener('query-model-changed', passDataToView);
model.addEventListener('uri-model-changed', passDataToView);
model.addEventListener('has-query-parameters-changed', passDataToView);
model.addEventListener('has-uri-parameters-changed', passDataToView);
model.addEventListener('has-parameters-changed', passDataToView);

var raml = await getRamlSomehow();
model.queryParameters = raml.queryParameters;
model.uriParameters = raml.allUriParameters;
</script>
```

Note: the `allUriParameters` property used in the example is not a standard
RAML JS parser property. It should be computed value of all URI parameters
from traits and security schemes.

### Validation

This element implements `Polymer.IronValidatableBehavior`. You can call `validate()`
function to check if the form is valid.
An attribute `invalid` will be set if the form is invalid. It can be used for
styling.

URI parameters are always required since they are part of the main URL.
Query parameters validation criteria are set according to the RAML spec.

### Styling
`<raml-request-parameters-editor>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--raml-request-parameters-editor` | Mixin applied to the element | `{}`
`--raml-request-parameters-editor-subheader` | Mixin applied to section's subheader | `--paper-font-subhead`
`--raml-request-parameters-editor-input-label-color` | Color of the paper input's labels | `rgba(0, 0, 0, 0.48)`
`--inline-documentation-color` | Color of the documentation string below the input field. Note that it will appy also `marked-element` styles to this element | `rgba(0, 0, 0, 0.87)`
`--raml-request-parameters-editor-row` | Mixin applied to each row of the form | `{}`
`--raml-request-parameters-editor-no-params` | Mixin applied to the empty info section | `{}`
`--raml-request-parameters-editor-no-params-message` | Mixin applied to the empty info paragraph (the message) | `{}`

Also, use variables and misins defined for `paper-input` to style inputs, and
`paper-dropdown-menu`, `paper-listbox`, `paper-item` to style dropdown menus.



### Events
| Name | Description | Params |
| --- | --- | --- |
| query-parameter-changed | Fired when a query parameter value change in this editor. | name **String** - The name of the parameter |
value **String** - The value of the parameter |
| uri-parameter-changed | Fired when an URI parameter value change in this editor. | name **String** - The name of the parameter |
value **String** - The value of the parameter |
# raml-request-parameters-form

The `raml-request-parameters-form` element is responsible for displaying the form od URI / query
parameters. It is meant to work with the `raml-request-parameters-editor`. See its docs to
learn how to use this element.

### Styling
`<raml-request-parameters-form>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--raml-request-parameters-form` | Mixin applied to the element | `{}`
`--raml-request-parameters-editor-input-label-color` | Color of the paper input's labels | `rgba(0, 0, 0, 0.48)`
`--inline-documentation-color` | Color of the documentation string below the input field. Note that it will appy also `marked-element` styles to this element | `rgba(0, 0, 0, 0.87)`
`--raml-request-parameters-editor-row` | Mixin applied to each row of the form | `{}`
`--raml-request-parameters-form-optional-toggle-button` | Mixin applied to a "toggle optional parameters" button | `{}`

# raml-request-parameters-model

An element that produces model from RAML Uri/Query properties.
The model is used by `raml-request-parameters-editor` to generate the form view
for the user.

Also, model should be propagated to elements responsible for supporting
URL computation (like an `url-editor`).

The model generator dispatches `uri-parameter-changed` and `uri-parameter-changed`
custom events when a model changes. It is to force inform the application about the
change. When RAML values change but result with the same model value (when
switching between methods of the same endpoint for example) editor dosn't Notifies
about the change because there's no change in the view.

The element caches comnputed model properties in the memory. This way when the
user enters a value for a property it will be restored when the user load an
endpoint with the same property name.

The same model is used by the `raml-request-url-editor` so this element can be
reused to produce the same model. Because of that this element is not included
into the editor element.

### Example of use (Polymer app)

```html
<raml-request-url-editor auto-validate required value="{{url}}"
  base-uri="[[raml.baseUri]]"
  endpoint-uri="[[raml.selectedMethod.relativeUri]]"
  query-model="[[qm]]"
  uri-model="[[um]]"></raml-request-url-editor>

<raml-request-parameters-editor
  query-model="[[qm]]"
  uri-model="[[um]]"
  has-query-parameters="[[hqp]]"
  has-uri-parameters="[[hup]]"
  has-parameters="[[hp]]"></raml-request-parameters-editor>

<raml-request-parameteres-model
  query-parameters="[[raml.queryParameters]]"
  uri-parameters="[[raml.allUriParameters]]"
  query-model="{{qm}}"
  uri-model="{{um}}"
  has-query-parameters="{{hqp}}"
  has-uri-parameters="{{hup}}"
  has-parameters="{{hp}}"></raml-request-parameteres-model>
```

### Example for vanilla JavaScript

```html
<raml-request-url-editor auto-validate required id="url"></raml-request-url-editor>
<raml-request-parameters-editor id="editor"></raml-request-parameters-editor>
<raml-request-parameteres-model id="model"></raml-request-parameteres-model>

<script>
var model = document.getElementById('model');
var paramsEditor = document.getElementById('editor');
var urlEditor = document.getElementById('url');

function passDataToView(e) {
  var type = e.type;
  type = type.replace('-changed', '');
  var property = type.replace(/-[a-z]/g, function(m) {
    return m[1].toUpperCase();
  });
  paramsEditor[property] = e.detail.value;
  urlEditor[property] = e.detail.value;
}

model.addEventListener('query-model-changed', passDataToView);
model.addEventListener('uri-model-changed', passDataToView);
model.addEventListener('has-query-parameters-changed', passDataToView);
model.addEventListener('has-uri-parameters-changed', passDataToView);
model.addEventListener('has-parameters-changed', passDataToView);

urlEditor.addEventListener('value-changed', function(e) {
  console.log(e.detail.value);
});

var raml = await getRamlSomehow();
var selected = raml.resources[0].methods[0];
model.queryParameters = selected.queryParameters;
model.uriParameters = selected.allUriParameters;
urlEditor.baseUri = raml.baseUri;
urlEditor.endpointUri = selected.relativeUri;
</script>
```



### Events
| Name | Description | Params |
| --- | --- | --- |
| query-parameter-changed | Fired when a query parameter value change in this editor. | name **String** - The name of the parameter |
value **String** - The value of the parameter |
| uri-parameter-changed | Fired when an URI parameter value change in this editor. | name **String** - The name of the parameter |
value **String** - The value of the parameter |
