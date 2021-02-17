/**
 * Theme:  Simple - Responsive Bootstrap 4 Admin & Dashboard
 * Author: Coderthemes
 * File:   sweet alerts
 */

!(function ($) {
  "use strict";

  var SweetAlert = function () {};

  //examples
  (SweetAlert.prototype.init = function () {
    //Basic
    $("#sa-basic").on("click", function () {
      Swal.fire({
        title: "Any fool can use a computer!",
        confirmButtonColor: "#458bc4",
      });
    });

    //A title with a text under
    $("#sa-title").click(function () {
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        type: "question",
        confirmButtonColor: "#458bc4",
      });
    });

    //Success Message
    $("#sa-success").click(function () {
      Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
        type: "success",
        confirmButtonColor: "#458bc4",
      });
    });

    //Error Message
    $("#sa-error").click(function () {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonColor: "#458bc4",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    });

    //Long content image
    $("#sa-long-content").click(function () {
      Swal.fire({
        imageUrl: "https://placeholder.pics/svg/300x1500",
        imageHeight: 1500,
        imageAlt: "A tall image",
        confirmButtonColor: "#458bc4",
      });
    });

    //Custom Position
    $("#sa-custom-position").click(function () {
      Swal.fire({
        position: "top-end",
        type: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
    });

    //Warning Message
    $("#sa-warning").click(function () {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#458bc4",
        cancelButtonColor: "#6c757d",
        confirmButtonText: "Yes, delete it!",
      }).then(function (result) {
        if (result.value) {
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    });

    //Parameter
    $("#sa-params").click(function () {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        confirmButtonClass: "btn btn-success mt-2",
        cancelButtonClass: "btn btn-danger ml-2 mt-2",
        buttonsStyling: false,
      }).then(function (result) {
        if (result.value) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            type: "success",
          });
        } else if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.cancel
        ) {
          Swal.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            type: "error",
          });
        }
      });
    });

    //Custom Image
    $("#sa-image").click(function () {
      Swal.fire({
        title: "Simple",
        text: "Responsive Bootstrap 4 Admin Dashboard",
        imageUrl: "assets/images/logo-sm.png",
        imageHeight: 50,
        animation: false,
        confirmButtonColor: "#458bc4",
      });
    });

    var timerInterval;

    //Auto Close Timer
    $("#sa-close").click(function () {
      var timerInterval;
      Swal.fire({
        title: "Auto close alert!",
        html: "I will close in <strong></strong> seconds.",
        timer: 2000,
        onBeforeOpen: function () {
          Swal.showLoading();
          timerInterval = setInterval(function () {
            Swal.getContent().querySelector(
              "strong"
            ).textContent = Swal.getTimerLeft();
          }, 100);
        },
        onClose: function () {
          clearInterval(timerInterval);
        },
      }).then(function (result) {
        if (
          // Read more about handling dismissals
          result.dismiss === Swal.DismissReason.timer
        ) {
          console.log("I was closed by the timer");
        }
      });
    });

    //custom html alert
    $("#custom-html-alert").click(function () {
      Swal.fire({
        title: "<i>HTML</i> <u>example</u>",
        type: "info",
        html:
          "You can use <b>bold text</b>, " +
          '<a href="#">links</a> ' +
          "and other HTML tags",
        showCloseButton: true,
        showCancelButton: true,
        confirmButtonColor: "#458bc4",
        cancelButtonColor: "#f1556c",
        confirmButtonText: '<i class="mdi mdi-thumb-up-outline"></i> Great!',
        cancelButtonText: '<i class="mdi mdi-thumb-down-outline"></i>',
      });
    });

    //Custom width padding
    $("#custom-padding-width-alert").click(function () {
      Swal.fire({
        title: "Custom width, padding, background.",
        width: 600,
        padding: 100,
        confirmButtonColor: "#458bc4",
        background:
          "#fff url(//subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/geometry.png)",
      });
    });

    //Ajax
    $("#ajax-alert").click(function () {
      Swal.fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        confirmButtonColor: "#458bc4",
        cancelButtonColor: "#6c757d",
        showLoaderOnConfirm: true,
        preConfirm: function (login) {
          return fetch("//api.github.com/users/" + login)
            .then(function (response) {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch(function (error) {
              Swal.showValidationMessage("Request failed: " + error);
            });
        },
        allowOutsideClick: function () {
          !Swal.isLoading();
        },
      }).then(function (result) {
        if (result.value) {
          Swal.fire({
            title: result.value.login + "'s avatar",
            imageUrl: result.value.avatar_url,
          });
        }
      });
    });

    //chaining modal alert
    $("#chaining-alert").click(function () {
      Swal.mixin({
        input: "text",
        confirmButtonText: "Next &rarr;",
        showCancelButton: true,
        confirmButtonColor: "#458bc4",
        cancelButtonColor: "#6c757d",
        progressSteps: ["1", "2", "3"],
      })
        .queue([
          {
            title: "Question 1",
            text: "Chaining swal2 modals is easy",
          },
          "Question 2",
          "Question 3",
        ])
        .then(function (result) {
          if (result.value) {
            Swal.fire({
              title: "All done!",
              html:
                "Your answers: <pre><code>" +
                JSON.stringify(result.value) +
                "</code></pre>",
              confirmButtonText: "Lovely!",
            });
          }
        });
    });

    //Danger
    $("#dynamic-alert").click(function () {
      swal.queue([
        {
          title: "Your public IP",
          confirmButtonText: "Show my public IP",
          confirmButtonColor: "#458bc4",
          text: "Your public IP will be received " + "via AJAX request",
          showLoaderOnConfirm: true,
          preConfirm: function () {
            return new Promise(function (resolve) {
              $.get("https://api.ipify.org?format=json").done(function (data) {
                swal.insertQueueStep(data.ip);
                resolve();
              });
            });
          },
        },
      ]);
    });
  }),
    //init
    ($.SweetAlert = new SweetAlert()),
    ($.SweetAlert.Constructor = SweetAlert);
})(window.jQuery),
  //initializing
  (function ($) {
    "use strict";
    $.SweetAlert.init();
  })(window.jQuery);
