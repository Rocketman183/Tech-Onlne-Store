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
  var infoWindow = document.querySelector('.shop-info');

  if (infoWindow.style.display = 'none') {
    infoWindow.style.display = 'block';
  } else {
    infoWindow.style.display = 'none';
  }
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNldHRpbmdzIiwic2VsZWN0b3IiLCIkYnV0dG9uT3BlbkNsb3NlIiwiY2xpY2siLCIkY29tcG9uZW50IiwidG9nZ2xlQ2xhc3MiLCJmaW5kIiwiY2hhbmdlIiwiJGNoZWNrYm94IiwiJCIsImRhdGFDbGFzcyIsImRhdGEiLCJoZWFkZXIiLCJpcyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJIZWxwZXIiLCJ0ZXN0RnVuY3Rpb24iLCJldmVudHMiLCJjdXN0b21FdmVudHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuSW5mbyIsImluZm9XaW5kb3ciLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJkaXNwbGF5Il0sIm1hcHBpbmdzIjoiOztBQUNBOzs7Ozs7OztJQUVNQSxRLEdBQ0Ysa0JBQVlDLFFBQVosRUFBcUI7QUFBQTs7QUFBQTs7QUFBQSxrQ0FVWixZQUFNO0FBQ1gsSUFBQSxLQUFJLENBQUNDLGdCQUFMLENBQXNCQyxLQUF0QixDQUE0QixZQUFNO0FBQzlCLE1BQUEsS0FBSSxDQUFDQyxVQUFMLENBQWdCQyxXQUFoQixDQUE0QixPQUE1QjtBQUNILEtBRkQ7QUFHSCxHQWRvQjs7QUFBQSx3Q0FnQk4sWUFBTTtBQUNqQixJQUFBLEtBQUksQ0FBQ0QsVUFBTCxDQUFnQkUsSUFBaEIsQ0FBcUIsMEJBQXJCLEVBQWlEQyxNQUFqRCxDQUF3RCxZQUFZO0FBQ2hFLFVBQU1DLFNBQVMsR0FBR0MsQ0FBQyxDQUFDLElBQUQsQ0FBbkI7QUFDQSxVQUFNQyxTQUFTLEdBQUdGLFNBQVMsQ0FBQ0csSUFBVixDQUFlLE9BQWYsQ0FBbEI7QUFDQSxVQUFNQyxNQUFNLEdBQUdILENBQUMsQ0FBQyxRQUFELENBQWhCO0FBQ0FELE1BQUFBLFNBQVMsQ0FBQ0ssRUFBVixDQUFhLFVBQWIsSUFBMkJELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQkosU0FBaEIsQ0FBM0IsR0FBd0RFLE1BQU0sQ0FBQ0csV0FBUCxDQUFtQkwsU0FBbkIsQ0FBeEQ7QUFDSCxLQUxEO0FBTUgsR0F2Qm9COztBQUNqQk0scUJBQU9DLFlBQVA7O0FBQ0EsT0FBS2hCLFFBQUwsR0FBaUJBLFFBQWpCO0FBQ0EsT0FBS0csVUFBTCxHQUFrQkssQ0FBQyxDQUFDUixRQUFELENBQW5CO0FBQ0EsT0FBS0MsZ0JBQUwsR0FBd0IsS0FBS0UsVUFBTCxDQUFnQkUsSUFBaEIsQ0FBcUIsUUFBckIsQ0FBeEI7QUFFQSxPQUFLWSxNQUFMO0FBQ0EsT0FBS0MsWUFBTDtBQUNILEM7O0FBa0JMQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFVO0FBQ3BELE1BQUlyQixRQUFKLENBQWEsY0FBYjtBQUNILENBRkQ7O0FBR0EsU0FBU3NCLFFBQVQsR0FBb0I7QUFFbkIsTUFBSUMsVUFBVSxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBakI7O0FBRUEsTUFBSUQsVUFBVSxDQUFDRSxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixNQUEvQixFQUF1QztBQUN0Q0gsSUFBQUEsVUFBVSxDQUFDRSxLQUFYLENBQWlCQyxPQUFqQixHQUEyQixPQUEzQjtBQUNBLEdBRkQsTUFFTztBQUNOSCxJQUFBQSxVQUFVLENBQUNFLEtBQVgsQ0FBaUJDLE9BQWpCLEdBQTJCLE1BQTNCO0FBQ0E7QUFFRCIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IEhlbHBlciBmcm9tICdIZWxwZXInO1xyXG5cclxuY2xhc3MgU2V0dGluZ3Mge1xyXG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3Ipe1xyXG4gICAgICAgIEhlbHBlci50ZXN0RnVuY3Rpb24oKTtcclxuICAgICAgICB0aGlzLnNlbGVjdG9yICA9IHNlbGVjdG9yO1xyXG4gICAgICAgIHRoaXMuJGNvbXBvbmVudCA9ICQoc2VsZWN0b3IpO1xyXG4gICAgICAgIHRoaXMuJGJ1dHRvbk9wZW5DbG9zZSA9IHRoaXMuJGNvbXBvbmVudC5maW5kKCdidXR0b24nKTtcclxuXHJcbiAgICAgICAgdGhpcy5ldmVudHMoICk7XHJcbiAgICAgICAgdGhpcy5jdXN0b21FdmVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4kYnV0dG9uT3BlbkNsb3NlLmNsaWNrKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LnRvZ2dsZUNsYXNzKCdfb3BlbicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjdXN0b21FdmVudHMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy4kY29tcG9uZW50LmZpbmQoJ2lucHV0W25hbWU9aGVhZGVyX2NsYXNzXScpLmNoYW5nZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0ICRjaGVja2JveCA9ICQodGhpcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFDbGFzcyA9ICRjaGVja2JveC5kYXRhKCdjbGFzcycpO1xyXG4gICAgICAgICAgICBjb25zdCBoZWFkZXIgPSAkKCdoZWFkZXInKTtcclxuICAgICAgICAgICAgJGNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpID8gaGVhZGVyLmFkZENsYXNzKGRhdGFDbGFzcykgOiBoZWFkZXIucmVtb3ZlQ2xhc3MoZGF0YUNsYXNzKTtcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4gICAgbmV3IFNldHRpbmdzKCcuanMtc2V0dGluZ3MnKTtcclxufSk7XHJcbmZ1bmN0aW9uIG9wZW5JbmZvKCkge1xyXG5cclxuXHRsZXQgaW5mb1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaG9wLWluZm8nKTtcclxuXHJcblx0aWYgKGluZm9XaW5kb3cuc3R5bGUuZGlzcGxheSA9ICdub25lJykge1xyXG5cdFx0aW5mb1dpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuXHR9IGVsc2Uge1xyXG5cdFx0aW5mb1dpbmRvdy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdH1cclxuXHJcbn0iXX0=
