<a name="0.1.21"></a>
## [0.1.21](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.20...v0.1.21) (2017-05-12)




<a name="0.1.20"></a>
## [0.1.20](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.19...v0.1.20) (2017-05-12)


### Fix

* Fixed issue when the help wasn't opening because of error ([d3cf5e9179365f44e6a80a56abdbf6e34e31f490](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/d3cf5e9179365f44e6a80a56abdbf6e34e31f490))



<a name="0.1.19"></a>
## [0.1.19](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.18...v0.1.19) (2017-04-27)




<a name="0.1.18"></a>
## [0.1.18](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.17...v0.1.18) (2017-04-27)




<a name="0.1.17"></a>
## [0.1.17](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.16...v0.1.17) (2017-04-27)




<a name="0.1.16"></a>
## [0.1.16](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.15...v0.1.16) (2017-04-27)


### Update

* Added support for custom event driven communication when setting an URL value ([1b65f4a275925d7064c0e2c2120c307ef603512d](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/1b65f4a275925d7064c0e2c2120c307ef603512d))
* Added tests for new logic ([85db171f7130c999e9bc947bbc206ea08c4781c8](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/85db171f7130c999e9bc947bbc206ea08c4781c8))
* Removed _eventTarget property and the element will listen for events on the window object ([ed000503f6be42d2ed704d403ee014f35b0ba122](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/ed000503f6be42d2ed704d403ee014f35b0ba122))
* Removed adding a new parameter if previously hasn't existed in the form ([e9fc1283499dd66b9754bb270860b80b98c74a16](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/e9fc1283499dd66b9754bb270860b80b98c74a16))
* Updated mixin name to match ARC styling maixins ([af94fe5a2036d3cd9e6b4d54cd60c9d3c68daff5](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/af94fe5a2036d3cd9e6b4d54cd60c9d3c68daff5))



<a name="0.1.15"></a>
## [0.1.15](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.14...v0.1.15) (2017-04-27)


### Update

* Minor performance improvements ([edab4a4148497deda421362855e752b7135dada9](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/edab4a4148497deda421362855e752b7135dada9))
* Now produced URL will not contain parameters that doesn't have value ([58bc47d3cceaf99d9c28df667a32c1b94c49a29a](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/58bc47d3cceaf99d9c28df667a32c1b94c49a29a))
* Replace lit command for Travis with package lint command ([0fbce48d7a52887a3d39f2584e97b76ef7ee1e46](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/0fbce48d7a52887a3d39f2584e97b76ef7ee1e46))



<a name="0.1.14"></a>
## [0.1.14](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.13...v0.1.14) (2017-04-12)




<a name="0.1.13"></a>
## [0.1.13](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.11...v0.1.13) (2017-04-12)


### New

* Added empty message info and CSS mixins to style it ([ea6f0045c82243ccaf57568ac83582e8d73d2662](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/ea6f0045c82243ccaf57568ac83582e8d73d2662))

### Update

* Updated raml-js-parser version ([202c8144ababeadb60c05424f31599c41b4fead0](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/202c8144ababeadb60c05424f31599c41b4fead0))
* Updated test to work with new parser ([8ade2387d95613c07dc800cc961f99666e017993](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/8ade2387d95613c07dc800cc961f99666e017993))



<a name="0.1.12"></a>
## [0.1.12](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.11...v0.1.12) (2017-04-12)




<a name="0.1.11"></a>
## [0.1.11](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.7...v0.1.11) (2017-03-13)


### Fix

* Fixed an issue when examples in the placeholder properies contained property name which was missleading users ([bd226b106f26518fffd3439268f209e4cfa27bff](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/bd226b106f26518fffd3439268f209e4cfa27bff))

### Update

* Updated test ([32761a7fc8023bae2aee92da92ce364d213217ce](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/32761a7fc8023bae2aee92da92ce364d213217ce))
* Updated the help icon button to be more recognizable ([524d9e1c145544141cbdf6019e9e554160f3098b](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/524d9e1c145544141cbdf6019e9e554160f3098b))
* Updated the way of showing optional parameters in the parameters table. Now parent app / element controls the parameter and the form elemenet does not contain any controls to change parameters visibility ([778bdde8037d8f10be500e930e7f589ec8fabf31](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/778bdde8037d8f10be500e930e7f589ec8fabf31))



<a name="0.1.10"></a>
## [0.1.10](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.7...v0.1.10) (2017-03-13)


### Fix

* Fixed an issue when examples in the placeholder properies contained property name which was missleading users ([bd226b106f26518fffd3439268f209e4cfa27bff](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/bd226b106f26518fffd3439268f209e4cfa27bff))

### Update

* Updated test ([32761a7fc8023bae2aee92da92ce364d213217ce](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/32761a7fc8023bae2aee92da92ce364d213217ce))
* Updated the help icon button to be more recognizable ([524d9e1c145544141cbdf6019e9e554160f3098b](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/524d9e1c145544141cbdf6019e9e554160f3098b))
* Updated the way of showing optional parameters in the parameters table. Now parent app / element controls the parameter and the form elemenet does not contain any controls to change parameters visibility ([778bdde8037d8f10be500e930e7f589ec8fabf31](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/778bdde8037d8f10be500e930e7f589ec8fabf31))



<a name="0.1.9"></a>
## [0.1.9](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.7...v0.1.9) (2017-03-07)


### Fix

* Fixed an issue when examples in the placeholder properies contained property name which was missleading users ([bd226b106f26518fffd3439268f209e4cfa27bff](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/bd226b106f26518fffd3439268f209e4cfa27bff))

### Update

* Updated the help icon button to be more recognizable ([524d9e1c145544141cbdf6019e9e554160f3098b](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/524d9e1c145544141cbdf6019e9e554160f3098b))
* Updated the way of showing optional parameters in the parameters table. Now parent app / element controls the parameter and the form elemenet does not contain any controls to change parameters visibility ([778bdde8037d8f10be500e930e7f589ec8fabf31](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/778bdde8037d8f10be500e930e7f589ec8fabf31))



<a name="0.1.8"></a>
## [0.1.8](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.7...v0.1.8) (2017-01-30)




<a name="0.1.7"></a>
## [0.1.7](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.5...v0.1.7) (2017-01-30)


### Update

* Added new test cases ([68792b3507168326058c348d7244270e5a9846db](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/68792b3507168326058c348d7244270e5a9846db))
* added the optional class name for optional property ([a652e4f424c81bf86bcb0796041dec7aa4f971f6](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/a652e4f424c81bf86bcb0796041dec7aa4f971f6))
* Exposed properties transformation function outside the element so the test cases could use it ([d93dc9ea9cb50b776fbe5b77f07e058dad97d913](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/d93dc9ea9cb50b776fbe5b77f07e058dad97d913))
* now the optional parameters are hidden by default. Added a property to display optional parameters and added a button to the view ([ecfec7ffb189daa49a4748a1ac82081f6bbaae34](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/ecfec7ffb189daa49a4748a1ac82081f6bbaae34))
* now the optional parameters are hidden by default. Added a property to display optional parameters and added a button to the view ([3f35cf371711b0bbb4101edb5f28bc3740fec7f5](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/3f35cf371711b0bbb4101edb5f28bc3740fec7f5))
* Replaced the display:initial directive with display:block on a form row which IE10 don't understand ([c4bf021c8d37ca5ed9b6e6b97f5bbfd37a454335](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/c4bf021c8d37ca5ed9b6e6b97f5bbfd37a454335))



<a name="0.1.6"></a>
## [0.1.6](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.5...v0.1.6) (2017-01-30)




<a name="0.1.5"></a>
## [0.1.5](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.4...v0.1.5) (2017-01-13)




<a name="0.1.4"></a>
## [0.1.4](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.2...v0.1.4) (2017-01-13)


### Breaking

* Redesigned parameters form. Now the form will not use separate label. It will use paper-input label. Therefore it's responsive by design and 'narrow' property is no longer required ([19fd8734fa5d5586a4bb5585d54c35a265b95233](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/19fd8734fa5d5586a4bb5585d54c35a265b95233))
* Redesigned parameters form. Now the form will not use separate label. It will use paper-input label. Therefore it's responsive by design and 'narrow' property is no longer required ([7511b7f01991bf160d6da03f9e867320560fa5c3](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/7511b7f01991bf160d6da03f9e867320560fa5c3))

### Docs

* Updated docs for the styles ([81766c78847915aab44836bcd66915d00489ce14](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/81766c78847915aab44836bcd66915d00489ce14))
* Updated documentation for methods ([f41b148bd286eaf18681d55a836e550aaf8d6c40](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/f41b148bd286eaf18681d55a836e550aaf8d6c40))

### Fix

* Fix #1 Parameters are not encoded properly ([eabcd3450e581d33c3454cbd395fd9491ba617d2](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/eabcd3450e581d33c3454cbd395fd9491ba617d2)), closes [#1](https://github.com/advanced-rest-client/raml-request-parameters-editor/issues/1)
* Fix #2 Decode example from RAML ([888f301cbee8590c9c7224d5a7e7a7cf3ef950e0](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/888f301cbee8590c9c7224d5a7e7a7cf3ef950e0)), closes [#2](https://github.com/advanced-rest-client/raml-request-parameters-editor/issues/2)

### New

* Added maxlength attribute to the input ([31d2545869d03ef4af0b527b00f797e1f3d1f410](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/31d2545869d03ef4af0b527b00f797e1f3d1f410))

### Update

* Added tests ([99db5f26673d577888e3fbc4d0ab114506e70635](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/99db5f26673d577888e3fbc4d0ab114506e70635))
* Removed the --raml-request-parameters-editor-docs-color mixin in order to keep consistency with mixin names for theming. Replcaed it with the --inline-documentation-color mixin ([ab2ebbb0f51ff9a06e90370f0048045cd258c590](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/ab2ebbb0f51ff9a06e90370f0048045cd258c590))
* Updated travis config - added sauce scripts ([7853b4851bace44c7305f68123d9bb5b8402a306](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/7853b4851bace44c7305f68123d9bb5b8402a306))



<a name="0.1.3"></a>
## [0.1.3](https://github.com/advanced-rest-client/raml-request-parameters-editor/compare/0.1.2...v0.1.3) (2017-01-13)




<a name="0.1.2"></a>
## 0.1.2 (2017-01-10)


### Update

* Updated element to work with new parser output ([ca9158f4a6cb27d9885b3424c34e05f63553aa05](https://github.com/advanced-rest-client/raml-request-parameters-editor/commit/ca9158f4a6cb27d9885b3424c34e05f63553aa05))



<a name="0.1.1"></a>
## 0.1.1 (2016-12-11)




