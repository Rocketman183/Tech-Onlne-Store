"use strict";

var _Helper = _interopRequireDefault(require("Helper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Settings = function Settings(selector) {
  var _this = this;

  _classCallCheck(this, Settings);

  _defineProperty(this, "events", function () {
    _this.$buttonOpenClose.click(function () {
      _this.$component.toggleClass('_open');
    });
  });

  _defineProperty(this, "customEvents", function () {
    _this.$component.find('input[name=header_class]').change(function () {
      var $checkbox = $(this);
      var dataClass = $checkbox.data('class');
      var header = $('header');
      $checkbox.is(':checked') ? header.addClass(dataClass) : header.removeClass(dataClass);
    });
  });

  _Helper["default"].testFunction();

  this.selector = selector;
  this.$component = $(selector);
  this.$buttonOpenClose = this.$component.find('button');
  this.events();
  this.customEvents();
};

document.addEventListener('DOMContentLoaded', function () {
  new Settings('.js-settings');
});

function openInfo() {
  var button = document.querySelector('.header-contacts__work-hours');
  var infoWindow = document.querySelector('.shop-info');
  document.addEventListener("click", function () {
    if (infoWindow.style.display = 'none') {
      infoWindow.style.display = 'block';
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNldHRpbmdzIiwic2VsZWN0b3IiLCIkYnV0dG9uT3BlbkNsb3NlIiwiY2xpY2siLCIkY29tcG9uZW50IiwidG9nZ2xlQ2xhc3MiLCJmaW5kIiwiY2hhbmdlIiwiJGNoZWNrYm94IiwiJCIsImRhdGFDbGFzcyIsImRhdGEiLCJoZWFkZXIiLCJpcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJIZWxwZXIiLCJ0ZXN0RnVuY3Rpb24iLCJldmVudHMiLCJjdXN0b21FdmVudHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuSW5mbyIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJpbmZvV2luZG93Iiwic3R5bGUiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOztBQUNBOzs7Ozs7OztJQUVNQSxRLEdBQ0Ysa0JBQVlDLFFBQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxrQ0FVWixZQUFNO0FBQ1gsSUFBQSxLQUFJLENBQUNDLGdCQUFMLENBQXNCQyxLQUF0QixDQUE0QixZQUFNO0FBQzlCLE1BQUEsS0FBSSxDQUFDQyxVQUFMLENBQWdCQyxXQUFoQixDQUE0QixPQUE1QjtBQUNILEtBRkQ7QUFHSCxHQWRvQjs7QUFBQSx3Q0FnQk4sWUFBTTtBQUNqQixJQUFBLEtBQUksQ0FBQ0QsVUFBTCxDQUFnQkUsSUFBaEIsQ0FBcUIsMEJBQXJCLEVBQWlEQyxNQUFqRCxDQUF3RCxZQUFZO0FBQ2hFLFVBQU1DLFNBQVMsR0FBR0MsQ0FBQyxDQUFDLElBQUQsQ0FBbkI7QUFDQSxVQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0csSUFBVixDQUFlLE9BQWYsQ0FBbEI7QUFDQSxVQUFNQyxNQUFNLEdBQUdILENBQUMsQ0FBQyxRQUFELENBQWhCO0FBQ0FELE1BQUFBLFNBQVMsQ0FBQ0ssRUFBVixDQUFhLFVBQWIsSUFBMkJELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkosU0FBaEIsQ0FBM0IsR0FBd0RFLE1BQU0sQ0FBQ0csV0FBUCxDQUFtQkwsU0FBbkIsQ0FBeEQ7QUFDSCxLQUxEO0FBTUgsR0F2Qm9COztBQUNqQk0scUJBQU9DLFlBQVA7O0FBQ0EsT0FBS2hCLFFBQUwsR0FBaUJBLFFBQWpCO0FBQ0EsT0FBS0csVUFBTCxHQUFrQkssQ0FBQyxDQUFDUixRQUFELENBQW5CO0FBQ0EsT0FBS0MsZ0JBQUwsR0FBd0IsS0FBS0UsVUFBTCxDQUFnQkUsSUFBaEIsQ0FBcUIsUUFBckIsQ0FBeEI7QUFFQSxPQUFLWSxNQUFMO0FBQ0EsT0FBS0MsWUFBTDtBQUNILEM7O0FBa0JMQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFVO0FBQ3BELE1BQUlyQixRQUFKLENBQWEsY0FBYjtBQUNILENBRkQ7O0FBR0EsU0FBU3NCLFFBQVQsR0FBb0I7QUFDbkIsTUFBSUMsTUFBTSxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsOEJBQXZCLENBQWI7QUFDQSxNQUFJQyxVQUFVLEdBQUdMLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixZQUF2QixDQUFqQjtBQUVBSixFQUFBQSxRQUFRLENBQUNDLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFlBQU07QUFDeEMsUUFBSUksVUFBVSxDQUFDQyxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEvQixFQUF1QztBQUN0Q0YsTUFBQUEsVUFBVSxDQUFDQyxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixPQUEzQjtBQUNBO0FBQ0QsR0FKRDtBQU1BIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgSGVscGVyIGZyb20gJ0hlbHBlcic7XHJcblxyXG5jbGFzcyBTZXR0aW5ncyB7XHJcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3Rvcil7XHJcbiAgICAgICAgSGVscGVyLnRlc3RGdW5jdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0b3IgID0gc2VsZWN0b3I7XHJcbiAgICAgICAgdGhpcy4kY29tcG9uZW50ID0gJChzZWxlY3Rvcik7XHJcbiAgICAgICAgdGhpcy4kYnV0dG9uT3BlbkNsb3NlID0gdGhpcy4kY29tcG9uZW50LmZpbmQoJ2J1dHRvbicpO1xyXG5cclxuICAgICAgICB0aGlzLmV2ZW50cyggKTtcclxuICAgICAgICB0aGlzLmN1c3RvbUV2ZW50cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50cyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiRidXR0b25PcGVuQ2xvc2UuY2xpY2soKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjb21wb25lbnQudG9nZ2xlQ2xhc3MoJ19vcGVuJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGN1c3RvbUV2ZW50cyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLiRjb21wb25lbnQuZmluZCgnaW5wdXRbbmFtZT1oZWFkZXJfY2xhc3NdJykuY2hhbmdlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgY29uc3QgJGNoZWNrYm94ID0gJCh0aGlzKTtcclxuICAgICAgICAgICAgY29uc3QgZGF0YUNsYXNzID0gJGNoZWNrYm94LmRhdGEoJ2NsYXNzJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlciA9ICQoJ2hlYWRlcicpO1xyXG4gICAgICAgICAgICAkY2hlY2tib3guaXMoJzpjaGVja2VkJykgPyBoZWFkZXIuYWRkQ2xhc3MoZGF0YUNsYXNzKSA6IGhlYWRlci5yZW1vdmVDbGFzcyhkYXRhQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxufVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XHJcbiAgICBuZXcgU2V0dGluZ3MoJy5qcy1zZXR0aW5ncycpO1xyXG59KTtcclxuZnVuY3Rpb24gb3BlbkluZm8oKSB7XHJcblx0bGV0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXItY29udGFjdHNfX3dvcmstaG91cnMnKTtcclxuXHRsZXQgaW5mb1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWluZm8nKTtcclxuXHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuXHRcdGlmIChpbmZvV2luZG93LnN0eWxlLmRpc3BsYXkgPSAnbm9uZScpIHtcclxuXHRcdFx0aW5mb1dpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHRcdH1cclxuXHR9KVxyXG5cclxufSJdfQ==
