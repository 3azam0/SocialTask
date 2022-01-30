//Original Colors from DSM
const palette = {
    Brand: '#00B35E', //'#2f80e.d',
    Branda: '#rgba(0,179,94,0.3)', //'rgba(47, 128, 237, 0.16)', //#2f80ed
    Secondary: '#3267AF',
    Secondaryhover: 'rgba(50, 103, 175, 0.24)', //#3267af
    Red: '#EB5757' /*danger*/,
    RedDark: '#CE4242' /*dangerHover*/,
    Reda: 'rgba(235, 87, 87, 0.1)', //'#eb5757',/*danger2*/
    RedDarka: 'rgba(206, 66, 66, 0.24)', //'#ce4242',/*danger2Hover*/
    Yellow: '#FFE24F' /*warning*/,
    Yellow2: '#FFDE4F' /*warningHover*/,
    Yellowa: 'rgba(255, 222, 79, 0.16)', //'#ffe24f',/*warning2*/
    Yellow2a: 'rgba(255, 226, 79, 0.24)', //'#ffde4f',/*warning2Hover*/
    Green: '#3DCC79' /*success*/,
    Greena: 'rgba(61, 204, 121, 0.24)', //'#3dcc79',/*successHover*/
    Greena2: 'rgba(61, 204, 121, 0.16)', //'#3dcc79',/*success2*/
    Blue: '#2F80ED',
    Blue2: '#3267AF',
    Blue3: '#1D429C',
    // success2Hover:
    Gray1: '#333333', //darkest
    Gray2: '#4F4F4F',
    Gray3: '#828282',
    Gray4: '#BDBDBD',
    Gray5: '#E0E0E0',
    Gray6: '#F2F2F2', //>>appMeduimGrey
    Gray7: '#F8F8F8', //lightest
    Gray8: '#8D8D94',
    Gray9: '#525252', //
    Black: '#272729',
    White: '#FFFFFF',
    // End of Invision List
  };
  /* Globally Color */
  export const colorText = '#FFFFFF';
  export const primarycolor = '#2F80ED';
  export const dangercolor = '#EB5757';
  export const boldTextColor = '#525252';
  // backgroundColors //
  export const bg_white = '#FFFFFF';
  //  TextFileds Colors  //
  export const placeholderinputtextColor = '#8D8D94';
  export const bottombordercolor = '#F2F2F2';
  export const lightgreyColor = '#BDBDBD';
  
  const colors = {
    primary: palette.Brand,
    secondary: palette.Secondary,
    success: palette.Green,
    danger: palette.Red,
    //warning: palette.yellow,
    iosShadow: palette.Gray4,
    activityIndicator: palette.Brand,
    foreground: palette.Black,
  
    background: palette.White,
    backgroundBlack: palette.Black,
    backgroundPrimary: palette.Brand,
    backgroundGray: '#fdfdfd', // reply msge background
    backgroundGray2: palette.Gray4, // coach filter slider
    backgroundGray3: palette.Gray5, // conversationCardMoreMenuActionButtonStyle
    backgroundGray4: palette.Gray7, // conversationCardMoreMenuActionButtonStyle
    backgroundBlue: palette.Blue, //inbox messages
    backgroundBlue2: palette.Blue3, //inbox messages
    backgrounfDanger: palette.Red,
    backgroundGreen: '#e0f7e9', //palette.Greena,
    backgroundYellow: '#fffae5', //palette.Yellow,
    backgroundYellow2: palette.Yellow2, //palette.Yellow,
    backgroundOrange: '#ffb800', //palette.Yellow,
    backgroundWarning: 'rgba(255,222,79,0.16)',
    backgroundLightGray: 'rgba(142,142,147,0.12)',
    // disabled: palette.Gray4,
    containerBorder: '#C8C8C8',
    containerBorderBlack: palette.Black,
    containerBorderGray: palette.Gray5,
    containerBorderGray2: palette.Gray6,
    containerBorderPrimary: palette.Brand,
    containerBorderWhite: palette.White,
    containerBorderDanger: palette.Red,
    //--------------------
    txtBorder: '#C8C8C8',
    txtBorderFocused: palette.Brand,
    txtBorderDanger: palette.Red,
    // separator:,
    btnBackground: palette.Brand,
    btnBackgroundGray: palette.Gray6,
    btnBackgroundGrayDark: palette.Gray5,
    btnBackgroundDisabled: palette.Gray4,
    btnBlackBackground: palette.Black,
    btnBackgroundSuccess: palette.Green,
    btnBackgroundDanger: palette.Red,
    btnBackgroundWhite: palette.White,
    btnBackgroundStripe: '#018CDD',
    btnBackgroundBlue: palette.Blue3,
    // btnUnderlayColor: palette.Brand,
    btnUnderlayColor: palette.Gray6,
    btnUnderlayColorWhite: palette.White,
    btnUnderlayColorGray: palette.Gray6,
    btnUnderlayTransparent: 'transparent',
  
    iconFill: palette.Brand,
    iconStroke: palette.Brand,
    iconFillGray: palette.Gray4,
  
    txtWhite: palette.White,
    txtBlack: palette.Black,
    txtDefault: palette.Gray9,
    txtGray: palette.Gray8,
    txtGray2: palette.Gray2,
    txtGray3: palette.Gray4,
    txtGray4: palette.Gray7,
    txtPrimary: palette.Brand, //TODO:check if it was assigned to links
    txtSuccess: palette.Green,
    txtLinks: palette.Blue2,
    txtDanger: palette.Red,
    txtPlaceHolder: palette.Gray8,
    txtDarkBlue: palette.Blue3,
  
    txtInput: palette.Gray8,
    // dimmed:,
    calendarActive: palette.Blue,
    calendarAvailable: palette.Green,
    calendarDeactivate: palette.Gray7, //'#F8F8F8',
    calendarBlocked: palette.Red,
    calendarDimmed: 'rgba(12,12,12,.05)',
  
    userActive: palette.Green,
    userIdle: palette.Red,
    userOffline: palette.Gray4,
  
    white: 'white',
    appLightGrey: 'rgba(142,142,147,0.12)',
    appMeduimGrey: '#F2F2F2',
    appGrey: '#BDBDBD',
    lightRed: '#EB5757',
    appDarkGray: '#525252',
    warning: 'rgba(255,222,79,0.16)',
    placeholderinputtextColor: '#8D8D94',
    bg_gray: '#f8f8f8',
    profileDefaultColor: '#828282',
    lightGreen: '#3DCC79',
    darkBlue: '#1D429C',
    bgCatTabsGray: '#E0E0E0',
  };
  
  export { colors };
  