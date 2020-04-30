module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/free-shipping-bar.module.css */ "./pages/styles/free-shipping-bar.module.css");
/* harmony import */ var _styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_free_shipping_bar_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql */ "graphql");
/* harmony import */ var graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql__WEBPACK_IMPORTED_MODULE_3__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 //import dynamic from 'next/dynamic'
// const RcolorPicker = dynamic(
//   () => import('react-input-colorpicker'),
//   { ssr: false }
// )
//import RcolorPicker from 'react-input-colorpicker';





class FreeShippingBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleSubmit", () => {
      this.setState({
        name: this.state.name,
        goal: this.state.goal
      });
      console.log('submission', this.state);
    });

    _defineProperty(this, "handleChange", field => {
      return value => this.setState({
        [field]: value
      });
    });

    this.state = {
      bars: [{
        id: 1,
        name: 'My first shipping bar 1',
        active: 0
      }, {
        id: 2,
        name: 'My first shipping bar 2',
        active: 1
      }],
      templates: [{
        id: 1,
        name: 'My first shipping template 1',
        img: 'template1.png'
      }, {
        id: 2,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 3,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 4,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 5,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }, {
        id: 6,
        name: 'My first shipping template 2',
        img: 'template1.png'
      }],
      position_options: [{
        label: 'Top bar pushes down the rest of the page',
        value: 'top_push_v1'
      }, {
        label: 'Top bar pushes down the rest of the page (always visible while scrolling)',
        value: 'top_push_sticky_v1'
      }, {
        label: 'Top bar overlaps top of the page',
        value: 'top_cover_nonsticky'
      }, {
        label: ' Top bar overlaps top of the page (always visible while scrolling)',
        value: 'top_cover'
      }, {
        label: 'Bottom bar overlaps bottom of the page (always visible while scrolling)',
        value: 'bottom_cover'
      }, {
        label: 'Manual Placement – Allows manual insertion of the bar’s code into your theme.',
        value: 'inserted'
      }],
      currencies: [{
        label: 'United states - USD',
        value: '$'
      }, {
        label: 'Netherland',
        value: 'nzd'
      }],
      name: 'My first free shipping bar',
      goal: '100',
      goal_two: '150',
      init_msg_start: 'Free shipping for orders over',
      init_msg_end: '',
      goal_msg: "Congratulations! You've got free shipping",
      progress_msg_start: 'Only',
      progress_msg_end: ' away from free shipping',
      link_opt: 'off',
      link_url: 'https://apps.shopify.com/partners/me',
      is_link_new: 0,
      is_close_btn: 'no',
      position: 'top_push_sticky_v1',
      currency: 'nzd',
      cur_symbol: 'nzd',
      is_auto_cur: 'on',
      bg_color: '#312e59',
      text_color: '#22222',
      special_color: '#888888',
      bg_color_opacity: 0.5,
      isColorPickerOpen: false,
      font_size: 14,
      padding: 0,
      disp_after: -1,
      delay_before: 0,
      time_fade: 0,
      display_options: [{
        label: 'All pages',
        value: 'all'
      }, {
        label: 'Homepage only',
        value: 'home'
      }, {
        label: "Only on Page with URL (Copy and Paste the URL below)",
        value: 'url'
      }, {
        label: 'All pages',
        value: 'keyword'
      }],
      display_page: 'home',
      exclude_options: [{
        label: 'Do NOT exclude any page',
        value: 'no'
      }, {
        label: 'Homepage',
        value: 'home'
      }, {
        label: "Only exclude Page with URL (Copy and Paste the URL below)",
        value: 'url'
      }, {
        label: 'Only exclude Pages that contain the keyword in their URLs',
        value: 'keyword'
      }],
      exclude_page: 'no',
      dev_target_options: [{
        label: 'Display on both desktop and mobile browsers. On mobile browsers font size will be capped to achieve optimum display',
        value: 'desktop'
      }, {
        label: 'Display only on desktop browsers',
        value: 'desktp'
      }, {
        label: 'HomepageDisplay only on mobile browsers',
        value: 'mobile'
      }],
      dev_target: 'all',
      schedule_options: [{
        label: 'Always Display',
        value: 'yes'
      }, {
        label: 'Only display within the giving period of time',
        value: 'no'
      }],
      schedule: 'yes',
      custom_code: ''
    };
  }

  render() {
    const {
      name,
      goal,
      goal_two,
      init_msg_start,
      init_msg_end,
      progress_msg_start,
      progress_msg_end,
      goal_msg,
      link_opt,
      link_url,
      is_link_new,
      is_close_btn,
      position,
      position_options,
      currencies,
      currency,
      cur_symbol,
      is_auto_cur,
      bg_color,
      text_color,
      special_color,
      bg_color_opacity,
      font_size,
      padding,
      disp_after,
      delay_before,
      time_fade,
      display_page,
      exclude_page,
      dev_target,
      display_options,
      exclude_options,
      dev_target_options,
      schedule_options,
      schedule,
      custom_code
    } = this.state;
    return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
      oneHalf: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, {
      fill: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Heading"], null, "Free Shipping Bar (FSB) Dashboard")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"].Item, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true
    }, "Create New Bar"))), __jsx("div", {
      className: "Polaris-DataTable"
    }, __jsx("div", {
      className: "Polaris-DataTable__ScrollContainer"
    }, __jsx("table", {
      id: "bars",
      className: "Polaris-DataTable__Table"
    }, __jsx("thead", null, __jsx("tr", null, __jsx("th", {
      className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header"
    }, "Name"), __jsx("th", {
      className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop Polaris-DataTable__Cell--firstColumn Polaris-DataTable__Cell--header"
    }, "Actions"))), __jsx("tbody", null, this.renderDashboardTableData()))))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      onSubmit: this.handleSubmit
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
      oneThird: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Basic Template",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx("div", {
      className: "fsb_tp_container"
    }, __jsx("div", {
      className: "fsbStyles.fsb_tb_content",
      style: {
        backgroundColor: "rgb(30, 30, 32)",
        color: "rgb(242, 202, 128)",
        backgroundColor: "rgb(30, 30, 32)",
        color: "rgb(242, 202, 128)",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "normal",
        lineheight: "20px",
        padding: "12px",
        fontFamily: "Helvetica"
      }
    }, "Bold and Clear")), __jsx("div", {
      className: "fsb_tp_container"
    }, __jsx("div", {
      className: "fsb_tb_content",
      style: {
        backgroundColor: "rgb(30, 30, 32)",
        color: "rgb(242, 202, 128)",
        backgroundColor: "rgb(30, 30, 32)",
        color: "rgb(242, 202, 128)",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "normal",
        lineheight: "20px",
        padding: "12px",
        fontFamily: "Helvetica"
      }
    }, "Bold and Clear"))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, {
      oneThird: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Prenium Template",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx("div", {
      className: "fsb_tp_container"
    }, __jsx("div", {
      className: "fsbStyles.fsb_tb_content",
      style: {
        backgroundColor: "rgb(30, 30, 32)",
        color: "rgb(242, 202, 128)",
        backgroundColor: "rgb(30, 30, 32)",
        color: "rgb(242, 202, 128)",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "normal",
        lineheight: "20px",
        padding: "12px",
        fontFamily: "Helvetica"
      }
    }, "Bold and Clear")), __jsx("div", {
      className: "fsb_tp_container"
    }, __jsx("div", {
      className: "fsb_tb_content",
      style: {
        backgroundColor: "rgb(30, 30, 32)",
        color: "rgb(242, 202, 128)",
        backgroundColor: "rgb(30, 30, 32)",
        color: "rgb(242, 202, 128)",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "normal",
        lineheight: "20px",
        padding: "12px",
        fontFamily: "Helvetica"
      }
    }, "Bold and Clear")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Preview",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx("div", {
      className: "fsb_tp_container"
    }, __jsx("div", {
      className: "fsb_tb_content",
      style: {
        backgroundColor: "rgb(30, 30, 32)",
        color: "rgb(242, 202, 128)",
        backgroundColor: "rgb(30, 30, 32)",
        color: "rgb(242, 202, 128)",
        textAlign: "center",
        fontSize: "16px",
        fontWeight: "normal",
        lineheight: "20px",
        padding: "12px",
        fontFamily: "Helvetica"
      }
    }, "My first shipping bar1")))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Content Configuration",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: name,
      onChange: this.handleChange('name'),
      label: "Name: ",
      type: "text",
      helpText: "For your own internal reference - only you can see it"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: goal,
      onChange: this.handleChange('goal'),
      label: "Free Shipping Goal: ",
      type: "number",
      helpText: "If no minimum order value is required, please set goal to 0"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true
    }, "Add Secondary Goal")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: goal_two,
      onChange: this.handleChange('goal_two'),
      label: "Free Shipping Secondary Goal: ",
      type: "number",
      helpText: "Secondary goal needs to be greater than the 1st free shipping goal"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true
    }, "Remove Secondary Goal")), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: init_msg_start,
      onChange: this.handleChange('init_msg_start'),
      label: "Initial Message: ",
      type: "text",
      helpText: "Display when cart is empty"
    }), __jsx("div", {
      className: "fsb_msg_price"
    }, "$100"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: init_msg_end,
      onChange: this.handleChange('init_msg_end'),
      label: " ",
      type: "text"
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: progress_msg_start,
      onChange: this.handleChange('progress_msg_start'),
      label: "Progress Message: ",
      type: "text",
      helpText: "Displays when cart value is less than the goal"
    }), __jsx("div", {
      className: "fsb_msg_price"
    }, "$99"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: progress_msg_end,
      onChange: this.handleChange('progress_msg_end'),
      label: " ",
      type: "text"
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: goal_msg,
      onChange: this.handleChange('goal_msg'),
      label: "Goal Achieved Message:: ",
      type: "text",
      helpText: "Displays when cart value is greater than goal"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      label: "Add Link to the Bar (optional):",
      options: [{
        label: 'ON',
        value: 'on'
      }, {
        label: 'OFF',
        value: 'off'
      }],
      onChange: this.handleChange('link_opt'),
      value: link_opt,
      helpText: "The bar will be clickable after adding a link"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: link_url,
      onChange: this.handleChange('link_url'),
      label: "Link URL:",
      type: "text",
      helpText: "This address will be visited after clicking the bar"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      label: "Open the link in a NEW tab when clicked",
      checked: is_link_new,
      onChange: this.handleChange('is_link_new')
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      label: "Include Close Button:",
      options: [{
        label: 'YES',
        value: 'yes'
      }, {
        label: 'NO',
        value: 'no'
      }],
      onChange: this.handleChange('is_close_btn'),
      value: is_close_btn,
      helpText: "Places an \"x\" button on the bar so that users can close it manually"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
      title: "Select a Display Position:",
      choices: position_options,
      selected: position,
      onChange: this.handleChange('position')
    }))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Currency Configuration",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      label: "Currency:",
      options: currencies,
      onChange: this.handleChange('currency'),
      value: currency,
      helpText: "Places an \"x\" button on the bar so that users can close it manually"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: cur_symbol,
      onChange: this.handleChange('cur_symbol'),
      label: "Currency Symbol::",
      type: "text"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Select"], {
      label: "Auto Currency Conversion::",
      options: [{
        label: 'OFF',
        value: 'on'
      }, {
        label: 'ON',
        value: 'off'
      }],
      onChange: this.handleChange('is_auto_cur'),
      value: is_auto_cur,
      helpText: "NOTE: If native Shopify multi-currencies is configured on your store, this Currency Configuration will be disabled. You can enable this if your website supports auto-currency detection. FSB auto-converts the goal value to the visitors' local currency"
    }))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Style Configuration",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      label: "Background Color: ",
      onChange: this.handleChange('bg_color'),
      color: bg_color
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handleChange('text_color'),
      color: text_color
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
      onChange: this.handleChange('special_color'),
      color: special_color
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["RangeSlider"], {
      label: "Background Color Opacity:",
      value: bg_color_opacity,
      min: 0,
      max: 1,
      step: 0.1,
      onChange: this.handleChange('bg_color_opacity'),
      output: true
    }), "Background Images:", __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"].Group, null, __jsx("a", {
      href: "",
      onClick: "select_background_pic('img/bar_background/20170206_sales_01.png')"
    }, __jsx("div", {
      style: {
        margin: "10px 0",
        padding: "10px",
        textAlign: "center",
        fontSize: "16px",
        color: "#FFFFFF",
        fontFamily: 'Roboto',
        background: "url('https://s3.amazonaws.com/lastsecondcoupon/img/bar_background/20170206_sales_01.png')"
      }
    }, "Sales")), __jsx("a", {
      href: "",
      onClick: "select_background_pic('img/bar_background/20170206_sales_01.png')"
    }, __jsx("div", {
      style: {
        margin: "10px 0",
        padding: "10px",
        textAlign: "center",
        fontSize: "16px",
        color: "#FFFFFF",
        fontFamily: 'Roboto',
        background: "url('https://s3.amazonaws.com/lastsecondcoupon/img/bar_background/20170206_sales_01.png')"
      }
    }, "Sales")), __jsx("a", {
      href: "",
      onClick: "select_background_pic('img/bar_background/20170206_sales_01.png')"
    }, __jsx("div", {
      style: {
        margin: "10px 0",
        padding: "10px",
        textAlign: "center",
        fontSize: "16px",
        color: "#FFFFFF",
        fontFamily: 'Roboto',
        background: "url('https://s3.amazonaws.com/lastsecondcoupon/img/bar_background/20170206_sales_01.png')"
      }
    }, "Sales"))), "Upload Background Image:", __jsx("input", {
      type: "file",
      style: {
        marginBottom: "10px"
      }
    })), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn",
      primary: true
    }, "Helvetica"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      calssName: "fsb_font_btn"
    }, "Lato"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: font_size,
      onChange: this.handleChange('font_size'),
      label: "Font Size:",
      type: "number",
      helperText: "Bar height is determined by Font Size and Bar Padding",
      prefix: "PX"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: padding,
      onChange: this.handleChange('padding'),
      label: "Bar Padding:",
      type: "number",
      helperText: "Space between the text and the upper/lower borders",
      prefix: "PX"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: disp_after,
      onChange: this.handleChange('disp_after'),
      label: "Disappear After:",
      type: "number",
      helperText: "Bar will not disappear if set to 0.",
      prefix: "Seconds"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: delay_before,
      onChange: this.handleChange('delay_before'),
      label: "Delay Before Repeating:",
      type: "number",
      helperText: "Wait this many seconds to show Free Shipping Bar again (unless cart value changes)",
      prefix: "Seconds"
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      value: time_fade,
      onChange: this.handleChange('time_fade'),
      label: "Time to Fade In/Out:",
      type: "number",
      helperText: "Bar will not fade if set to 0",
      prefix: "Seconds"
    }))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Targeting Configuration",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["FormLayout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
      title: "Display on Page:",
      choices: display_options,
      selected: display_page,
      onChange: this.handleChange('display_page')
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
      title: "Exclude Page:",
      choices: exclude_options,
      selected: exclude_page,
      onChange: this.handleChange('exclude_page')
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
      title: "Device Target:",
      choices: dev_target_options,
      selected: dev_target,
      onChange: this.handleChange('dev_target')
    }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["ChoiceList"], {
      title: "Display Schedule:",
      choices: schedule_options,
      selected: schedule,
      onChange: this.handleChange('schedule')
    }))))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"].Section, null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      title: "Custom Code Configuration",
      sectioned: true
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["TextField"], {
      label: "Custom Code:",
      value: custom_code,
      onChange: this.handleChange('custom_code'),
      multiline: true
    }), __jsx("p", null, "Horizontal Zoom: Good for displaying a pattern based background image"), __jsx("p", null, "Vertical Scroll: A Background image scrolled vertically. Good for showing a product image.")))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], {
      distribution: "trailing"
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Cancel"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      primary: true,
      submit: true
    }, "Save"))));
  }

  renderDashboardTableData() {
    return this.state.bars.map((bar, index) => {
      const {
        id,
        name
      } = bar;
      return __jsx("tr", {
        className: "Polaris-DataTable__TableRow",
        key: id
      }, __jsx("td", {
        className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Badge"], {
        status: "success"
      }, "Active"), name)), __jsx("td", {
        className: "Polaris-DataTable__Cell Polaris-DataTable__Cell--verticalAlignTop"
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        primary: true
      }, "Edit"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Duplicate"), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Button"], null, "Activate"))));
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (FreeShippingBar);

/***/ }),

/***/ "./pages/styles/free-shipping-bar.module.css":
/*!***************************************************!*\
  !*** ./pages/styles/free-shipping-bar.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\WORSPACE\shopify\work\shopifyapp-shipping-bar\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map