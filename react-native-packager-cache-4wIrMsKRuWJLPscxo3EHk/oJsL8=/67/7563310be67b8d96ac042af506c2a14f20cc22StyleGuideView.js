Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/home/qendrim/Desktop/Fin/src/containers/StyleGuideView.js';

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeTabView = require('react-native-tab-view');

var _reactNativeElements = require('react-native-elements');

var _reactNativeRouterFlux = require('react-native-router-flux');

var _theme = require('@theme/');

var _ui = require('@components/ui/');

var dummyData1 = [{ title: 'Settings', icon: 'build' }, { title: 'Alarms', icon: 'alarm' }, { title: 'Cards', icon: 'card-membership' }, { title: 'Favourites', icon: 'grade' }, { title: 'Help', icon: 'help' }];

var dummyData2 = [{
  title: 'Hajrush Lenjani',
  role: 'CEO',
  avatar: 'https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_smart_guy-512.png'
}, {
  title: 'Kemajl Nuredini',
  role: 'CTO',
  avatar: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png'
}, {
  title: 'Gezim Veliu',
  role: 'Software engineer',
  avatar: 'https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAA3hAAAAJGFlMzIzNTc0LTFjNDYtNGRkNC05Y2MyLWRiOWZlM2M4YzcwYw.jpg'
}, {
  title: 'Egzon Bahtiri',
  role: 'Software developer',
  avatar: 'https://pbs.twimg.com/profile_images/880953747106607104/vXLpU3KQ_400x400.jpg'
}, {
  title: 'Qendrim Sadiku',
  role: 'IOS Developer',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/jina/128.jpg'
}];

var styles = _reactNative.StyleSheet.create({
  tabContainer: {
    flex: 1
  },
  tabbar: {
    backgroundColor: _theme.AppColors.brand.primary
  },
  tabbarIndicator: {
    backgroundColor: '#FFF'
  },
  tabbar_text: {
    color: '#FFF'
  }
});

var StyleGuide = function (_Component) {
  babelHelpers.inherits(StyleGuide, _Component);

  function StyleGuide(props) {
    babelHelpers.classCallCheck(this, StyleGuide);

    var _this = babelHelpers.possibleConstructorReturn(this, (StyleGuide.__proto__ || Object.getPrototypeOf(StyleGuide)).call(this, props));

    _initialiseProps.call(_this);

    var ds = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
        return r1 !== r2;
      } });
    var ds2 = new _reactNative.ListView.DataSource({ rowHasChanged: function rowHasChanged(r1, r2) {
        return r1 !== r2;
      } });

    _this.state = {
      navigation: {
        index: 0,
        routes: [{ key: '0', title: 'Lists' }, { key: '1', title: 'Buttons' }, { key: '2', title: 'Basics' }, { key: '3', title: 'Cards' }, { key: '4', title: 'Form' }]
      },
      dataSource: ds.cloneWithRows(dummyData1),
      dataSource2: ds2.cloneWithRows(dummyData2)
    };
    return _this;
  }

  return StyleGuide;
}(_react.Component);

StyleGuide.componentName = 'StyleGuide';

var _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.handleChangeTab = function (index) {
    _this2.setState({
      navigation: babelHelpers.extends({}, _this2.state.navigation, { index: index })
    });
  };

  this.renderRow = function (data, sectionID) {
    return _react2.default.createElement(_ui.ListItem, {
      key: 'list-row-' + sectionID,
      onPress: _reactNativeRouterFlux.Actions.comingSoon,
      title: data.title,
      subtitle: data.role || null,
      leftIcon: data.icon ? { name: data.icon } : null,
      avatar: data.avatar ? { uri: data.avatar } : null,
      roundAvatar: !!data.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      }
    });
  };

  this.renderScene = function (_ref) {
    var route = _ref.route;

    switch (route.key) {
      case '0':
        return _react2.default.createElement(
          _reactNative.View,
          { style: styles.tabContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            }
          },
          _react2.default.createElement(
            _reactNative.ScrollView,
            {
              automaticallyAdjustContentInsets: false,
              style: [_theme.AppStyles.container],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 149
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: [_theme.AppStyles.paddingHorizontal], __source: {
                  fileName: _jsxFileName,
                  lineNumber: 153
                }
              },
              _react2.default.createElement(_ui.Spacer, { size: 15, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 154
                }
              }),
              _react2.default.createElement(
                _ui.Text,
                { h2: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 155
                  }
                },
                'List Rows'
              ),
              _react2.default.createElement(_ui.Spacer, { size: -10, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 156
                }
              })
            ),
            _react2.default.createElement(
              _ui.List,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 158
                }
              },
              _react2.default.createElement(_reactNative.ListView, {
                renderRow: _this2.renderRow,
                dataSource: _this2.state.dataSource,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 159
                }
              })
            ),
            _react2.default.createElement(
              _ui.List,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 164
                }
              },
              _react2.default.createElement(_reactNative.ListView, {
                renderRow: _this2.renderRow,
                dataSource: _this2.state.dataSource2,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 165
                }
              })
            )
          )
        );
      case '1':
        return _react2.default.createElement(
          _reactNative.View,
          { style: styles.tabContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            }
          },
          _react2.default.createElement(
            _reactNative.ScrollView,
            {
              automaticallyAdjustContentInsets: false,
              style: [_theme.AppStyles.container],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 176
              }
            },
            _react2.default.createElement(
              _ui.Card,
              { title: 'Buttons', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 180
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 181
                  }
                },
                _react2.default.createElement(_ui.Button, {
                  large: true,
                  title: 'Large',
                  onPress: _reactNativeRouterFlux.Actions.comingSoon,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 182
                  }
                }),
                _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 187
                  }
                }),
                _react2.default.createElement(_ui.Button, {
                  large: true,
                  title: 'W/ Icon',
                  backgroundColor: '#33BB76',
                  icon: { name: 'code' },
                  onPress: _reactNativeRouterFlux.Actions.comingSoon,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 189
                  }
                }),
                _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 196
                  }
                }),
                _react2.default.createElement(_ui.Button, {
                  title: 'Default',
                  onPress: _reactNativeRouterFlux.Actions.comingSoon,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 198
                  }
                }),
                _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 202
                  }
                }),
                _react2.default.createElement(_ui.Button, {
                  title: 'Colored',
                  backgroundColor: '#FB6567',
                  onPress: _reactNativeRouterFlux.Actions.comingSoon,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 204
                  }
                }),
                _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 209
                  }
                }),
                _react2.default.createElement(_ui.Button, {
                  small: true,
                  title: 'Small',
                  onPress: _reactNativeRouterFlux.Actions.comingSoon,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 211
                  }
                }),
                _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 216
                  }
                }),
                _react2.default.createElement(_ui.Button, {
                  small: true,
                  outlined: true,
                  iconRight: true,
                  title: 'Outlined',
                  icon: { name: 'cached' },
                  onPress: _reactNativeRouterFlux.Actions.comingSoon,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 218
                  }
                })
              )
            ),
            _react2.default.createElement(_ui.Spacer, { size: 20, __source: {
                fileName: _jsxFileName,
                lineNumber: 229
              }
            }),
            _react2.default.createElement(
              _ui.Card,
              { title: 'Socials', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 231
                }
              },
              _react2.default.createElement(_reactNativeElements.SocialIcon, { button: true, type: 'facebook', title: 'Login with Facebook', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 232
                }
              }),
              _react2.default.createElement(_reactNativeElements.SocialIcon, { button: true, type: 'instagram', light: true, title: 'Connect to Instagram', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 233
                }
              }),
              _react2.default.createElement(_reactNativeElements.SocialIcon, { button: true, type: 'twitter', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 234
                }
              }),
              _react2.default.createElement(_reactNativeElements.SocialIcon, { button: true, type: 'medium', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 235
                }
              }),
              _react2.default.createElement(
                _reactNative.View,
                { style: [_theme.AppStyles.row, _theme.AppStyles.centerAligned], __source: {
                    fileName: _jsxFileName,
                    lineNumber: 237
                  }
                },
                _react2.default.createElement(_reactNativeElements.SocialIcon, { type: 'facebook', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 238
                  }
                }),
                _react2.default.createElement(_reactNativeElements.SocialIcon, { type: 'instagram', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 239
                  }
                }),
                _react2.default.createElement(_reactNativeElements.SocialIcon, { type: 'twitter', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 240
                  }
                }),
                _react2.default.createElement(_reactNativeElements.SocialIcon, { type: 'medium', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 241
                  }
                })
              )
            )
          )
        );
      case '2':
        return _react2.default.createElement(
          _reactNative.View,
          { style: styles.tabContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 249
            }
          },
          _react2.default.createElement(
            _reactNative.ScrollView,
            {
              automaticallyAdjustContentInsets: false,
              style: [_theme.AppStyles.container],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 250
              }
            },
            _react2.default.createElement(
              _ui.Card,
              { title: 'Typography', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 254
                }
              },
              _react2.default.createElement(
                _reactNative.View,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 255
                  }
                },
                _react2.default.createElement(
                  _ui.Text,
                  { h1: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 256
                    }
                  },
                  'Heading 1'
                ),
                _react2.default.createElement(
                  _ui.Text,
                  { h2: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 257
                    }
                  },
                  'Heading 2'
                ),
                _react2.default.createElement(
                  _ui.Text,
                  { h3: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 258
                    }
                  },
                  'Heading 3'
                ),
                _react2.default.createElement(
                  _ui.Text,
                  { h3: true, onPress: function onPress() {
                      return _reactNative.Alert.alert('hey');
                    }, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 259
                    }
                  },
                  'Heading 3 with Link'
                ),
                _react2.default.createElement(
                  _ui.Text,
                  { h4: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 260
                    }
                  },
                  'Heading 4'
                ),
                _react2.default.createElement(
                  _ui.Text,
                  { h5: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 261
                    }
                  },
                  'Heading 5'
                ),
                _react2.default.createElement(
                  _ui.Text,
                  { p: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 262
                    }
                  },
                  'Mus ac nostra lobortis sapien a erat in risus purus odio egestas a donec fringilla scelerisque congue parturient condimentum penatibus neque urna magna. ',
                  _react2.default.createElement(
                    _ui.Text,
                    { onPress: function onPress() {
                        return _reactNative.Alert.alert('hey');
                      }, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 265
                      }
                    },
                    'Leo dictumst'
                  ),
                  ' senectus inceptos parturient pharetra.'
                ),
                _react2.default.createElement(
                  _ui.Text,
                  { p: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 268
                    }
                  },
                  'Mus ac nostra lobortis sapien a erat in risus purus odio egestas a donec fringilla scelerisque congue parturient condimentum penatibus neque urna magna. Leo dictumst senectus inceptos parturient pharetra.'
                )
              )
            ),
            _react2.default.createElement(
              _ui.Card,
              { title: 'Alerts', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 277
                }
              },
              _react2.default.createElement(_ui.Alerts, {
                status: 'Something\'s happening...',
                success: 'Hello Success',
                error: 'Error hey',
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 278
                }
              })
            )
          )
        );
      case '3':
        return _react2.default.createElement(
          _reactNative.View,
          { style: styles.tabContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 289
            }
          },
          _react2.default.createElement(
            _reactNative.ScrollView,
            {
              automaticallyAdjustContentInsets: false,
              style: [_theme.AppStyles.container],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 290
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: [_theme.AppStyles.paddingHorizontal], __source: {
                  fileName: _jsxFileName,
                  lineNumber: 294
                }
              },
              _react2.default.createElement(_ui.Spacer, { size: 15, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 295
                }
              }),
              _react2.default.createElement(
                _ui.Text,
                { h2: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 296
                  }
                },
                'Cards'
              )
            ),
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              {
                activeOpacity: 0.8,
                onPress: _reactNativeRouterFlux.Actions.comingSoon,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 299
                }
              },
              _react2.default.createElement(
                _ui.Card,
                {
                  image: { uri: 'http://wp-api.mcnam.ee/wp-content/uploads/2016/10/brekkie-crumble-33651_l.jpeg' },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 303
                  }
                },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: [_theme.AppStyles.paddingLeftSml, _theme.AppStyles.paddingBottomSml], __source: {
                      fileName: _jsxFileName,
                      lineNumber: 306
                    }
                  },
                  _react2.default.createElement(
                    _ui.Text,
                    { h3: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 307
                      }
                    },
                    'Title of post'
                  ),
                  _react2.default.createElement(
                    _ui.Text,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 308
                      }
                    },
                    'Lorem ipsum diem or seckt original de pingdo of the lespec.'
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactNative.TouchableOpacity,
              {
                activeOpacity: 0.8,
                onPress: _reactNativeRouterFlux.Actions.comingSoon,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 315
                }
              },
              _react2.default.createElement(
                _ui.Card,
                {
                  image: { uri: 'http://wp-api.mcnam.ee/wp-content/uploads/2016/10/brekkie-crumble-33651_l.jpeg' },
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 319
                  }
                },
                _react2.default.createElement(
                  _reactNative.View,
                  { style: [_theme.AppStyles.paddingLeftSml, _theme.AppStyles.paddingBottomSml], __source: {
                      fileName: _jsxFileName,
                      lineNumber: 322
                    }
                  },
                  _react2.default.createElement(
                    _ui.Text,
                    { h3: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 323
                      }
                    },
                    'Another Post'
                  ),
                  _react2.default.createElement(
                    _ui.Text,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 324
                      }
                    },
                    'Lorem ipsum diem or seckt original de pingdo of the lespec.'
                  )
                )
              )
            )
          )
        );
      case '4':
        return _react2.default.createElement(
          _reactNative.View,
          { style: styles.tabContainer, __source: {
              fileName: _jsxFileName,
              lineNumber: 335
            }
          },
          _react2.default.createElement(
            _reactNative.ScrollView,
            {
              automaticallyAdjustContentInsets: false,
              style: [_theme.AppStyles.container],
              __source: {
                fileName: _jsxFileName,
                lineNumber: 336
              }
            },
            _react2.default.createElement(
              _reactNative.View,
              { style: [_theme.AppStyles.paddingHorizontal], __source: {
                  fileName: _jsxFileName,
                  lineNumber: 340
                }
              },
              _react2.default.createElement(
                _ui.FormLabel,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 341
                  }
                },
                'First Name'
              ),
              _react2.default.createElement(_ui.FormInput, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 342
                }
              }),
              _react2.default.createElement(_ui.Spacer, { size: 10, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 344
                }
              }),
              _react2.default.createElement(
                _ui.FormLabel,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 346
                  }
                },
                'Last Name'
              ),
              _react2.default.createElement(_ui.FormInput, {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 347
                }
              })
            )
          )
        );
      default:
        return _react2.default.createElement(_reactNative.View, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          }
        });
    }
  };

  this.renderHeader = function (props) {
    return _react2.default.createElement(_reactNativeTabView.TabBar, babelHelpers.extends({}, props, {
      style: styles.tabbar,
      indicatorStyle: styles.tabbarIndicator,
      renderLabel: function renderLabel(scene) {
        return _react2.default.createElement(
          _ui.Text,
          { style: [styles.tabbar_text], __source: {
              fileName: _jsxFileName,
              lineNumber: 368
            }
          },
          scene.route.title
        );
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363
      }
    }));
  };

  this.render = function () {
    return _react2.default.createElement(_reactNativeTabView.TabViewAnimated, {
      style: [styles.tabContainer],
      renderScene: _this2.renderScene,
      renderHeader: _this2.renderHeader,
      navigationState: _this2.state.navigation,
      onRequestChangeTab: _this2.handleChangeTab,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 374
      }
    });
  };
};

exports.default = StyleGuide;