// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// $(function() {
//   console.log('document is ready!', new Date());
// });

// ----------------------------------------------------------------------------

// $(function() {
//   console.log('document is ready!', new Date()); // this logging is optional
//   $('#task_name').focus();
// });

// ----------------------------------------------------------------------------

$(document).on('turbolinks:load', function() {
  console.log('document is ready!', new Date()); // this logging is optional
  $('#task_name').focus();
});
