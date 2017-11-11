Object.defineProperty(exports, "__esModule", {
  value: true
});


var app = {
  background: '#E9EBEE',
  cardBackground: '#FFFFFF',
  listItemBackground: '#FFFFFF'
};

var brand = {
  brand: {
    primary: '#35afa6',
    secondary: '#17233D'
  }
};

var text = {
  textPrimary: '#222222',
  textSecondary: '#777777',
  headingPrimary: brand.brand.primary,
  headingSecondary: brand.brand.primary
};

var borders = {
  border: '#D0D1D5'
};

var tabbar = {
  tabbar: {
    background: '#ffffff',
    iconDefault: '#BABDC2',
    iconSelected: brand.brand.primary
  }
};

exports.default = babelHelpers.extends({}, app, brand, text, borders, tabbar);