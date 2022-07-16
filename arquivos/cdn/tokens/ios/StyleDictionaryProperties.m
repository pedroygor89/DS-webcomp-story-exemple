
//
// StyleDictionaryProperties.m
//
// Do not edit directly
// Generated on Fri, 16 Jul 2021 05:58:58 GMT
//

#import "StyleDictionaryProperties.h"

@implementation StyleDictionaryProperties

+ (NSDictionary *)getProperty:(NSString *)keyPath {
  return [[self properties] valueForKeyPath:keyPath];
}

+ (nonnull)getValue:(NSString *)keyPath {
  return [[self properties] valueForKeyPath:[NSString stringWithFormat:@"%@.value", keyPath]];
}

+ (NSDictionary *)properties {
  static NSDictionary * dictionary;
  static dispatch_once_t onceToken;

  dispatch_once(&onceToken, ^{
    dictionary = @{
  @"colors": @{
    @"default": @{
      @"neutral": @{
        @"0": @{
          @"value": #ffffff,
          @"name": @"ColorsDefaultNeutral0",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"0"
          },
        @"10": @{
          @"value": #f5f8fa,
          @"name": @"ColorsDefaultNeutral10",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"10"
          },
        @"20": @{
          @"value": #e1e8ed,
          @"name": @"ColorsDefaultNeutral20",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"20"
          },
        @"30": @{
          @"value": #d8e1e8,
          @"name": @"ColorsDefaultNeutral30",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"30"
          },
        @"40": @{
          @"value": #bfccd6,
          @"name": @"ColorsDefaultNeutral40",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"40"
          },
        @"50": @{
          @"value": #8a9ba8,
          @"name": @"ColorsDefaultNeutral50",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"50"
          },
        @"60": @{
          @"value": #738694,
          @"name": @"ColorsDefaultNeutral60",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"60"
          },
        @"70": @{
          @"value": #5c7080,
          @"name": @"ColorsDefaultNeutral70",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"70"
          },
        @"80": @{
          @"value": #394b59,
          @"name": @"ColorsDefaultNeutral80",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"80"
          },
        @"90": @{
          @"value": #30404d,
          @"name": @"ColorsDefaultNeutral90",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"90"
          },
        @"100": @{
          @"value": #000000,
          @"name": @"ColorsDefaultNeutral100",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"neutral",
          @"subitem": @"100"
          }
        },
      @"error": @{
        @"30": @{
          @"value": #FFEAEA,
          @"name": @"ColorsDefaultError30",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"error",
          @"subitem": @"30"
          },
        @"60": @{
          @"value": #ff7373,
          @"name": @"ColorsDefaultError60",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"error",
          @"subitem": @"60"
          },
        @"90": @{
          @"value": #a82a2a,
          @"name": @"ColorsDefaultError90",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"error",
          @"subitem": @"90"
          }
        },
      @"warning": @{
        @"30": @{
          @"value": #FFF4E8,
          @"name": @"ColorsDefaultWarning30",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"warning",
          @"subitem": @"30"
          },
        @"60": @{
          @"value": #ffb366,
          @"name": @"ColorsDefaultWarning60",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"warning",
          @"subitem": @"60"
          },
        @"90": @{
          @"value": #914C07,
          @"name": @"ColorsDefaultWarning90",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"warning",
          @"subitem": @"90"
          }
        },
      @"success": @{
        @"30": @{
          @"value": #E2F7EF,
          @"name": @"ColorsDefaultSuccess30",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"success",
          @"subitem": @"30"
          },
        @"60": @{
          @"value": #3dcc91,
          @"name": @"ColorsDefaultSuccess60",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"success",
          @"subitem": @"60"
          },
        @"90": @{
          @"value": #0a6640,
          @"name": @"ColorsDefaultSuccess90",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"success",
          @"subitem": @"90"
          }
        },
      @"informational": @{
        @"30": @{
          @"value": #E6F0FF,
          @"name": @"ColorsDefaultInformational30",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"informational",
          @"subitem": @"30"
          },
        @"60": @{
          @"value": #5799ff,
          @"name": @"ColorsDefaultInformational60",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"informational",
          @"subitem": @"60"
          },
        @"90": @{
          @"value": #10489d,
          @"name": @"ColorsDefaultInformational90",
          @"category": @"colors",
          @"type": @"default",
          @"item": @"informational",
          @"subitem": @"90"
          }
        }
      },
    @"tema": @{
      @"primary": @{
        @"30": @{
          @"value": #F9F3F6,
          @"name": @"ColorsTemaPrimary30",
          @"category": @"colors",
          @"type": @"tema",
          @"item": @"primary",
          @"subitem": @"30"
          },
        @"40": @{
          @"value": #E2D8E8,
          @"name": @"ColorsTemaPrimary40",
          @"category": @"colors",
          @"type": @"tema",
          @"item": @"primary",
          @"subitem": @"40"
          },
        @"50": @{
          @"value": #C4B3CF,
          @"name": @"ColorsTemaPrimary50",
          @"category": @"colors",
          @"type": @"tema",
          @"item": @"primary",
          @"subitem": @"50"
          },
        @"60": @{
          @"value": #A992B9,
          @"name": @"ColorsTemaPrimary60",
          @"category": @"colors",
          @"type": @"tema",
          @"item": @"primary",
          @"subitem": @"60"
          },
        @"70": @{
          @"value": #6A5684,
          @"name": @"ColorsTemaPrimary70",
          @"category": @"colors",
          @"type": @"tema",
          @"item": @"primary",
          @"subitem": @"70"
          },
        @"90": @{
          @"value": #372D5F,
          @"name": @"ColorsTemaPrimary90",
          @"category": @"colors",
          @"type": @"tema",
          @"item": @"primary",
          @"subitem": @"90"
          }
        },
      @"accent": @{
        @"30": @{
          @"value": #ffffff,
          @"name": @"ColorsTemaAccent30",
          @"category": @"colors",
          @"type": @"tema",
          @"item": @"accent",
          @"subitem": @"30"
          },
        @"60": @{
          @"value": #00a3cc,
          @"name": @"ColorsTemaAccent60",
          @"category": @"colors",
          @"type": @"tema",
          @"item": @"accent",
          @"subitem": @"60"
          },
        @"70": @{
          @"value": #007e9e,
          @"name": @"ColorsTemaAccent70",
          @"category": @"colors",
          @"type": @"tema",
          @"item": @"accent",
          @"subitem": @"70"
          },
        @"90": @{
          @"value": #005266,
          @"name": @"ColorsTemaAccent90",
          @"category": @"colors",
          @"type": @"tema",
          @"item": @"accent",
          @"subitem": @"90"
          }
        }
      }
    },
  @"fontFamilies": @{
    @"tema-font-1": @{
      @"value": Barlow Condensed,
      @"name": @"FontFamiliesTemaFont1",
      @"category": @"fontFamilies",
      @"type": @"tema-font-1"
      },
    @"tema-font-2": @{
      @"value": Charter,
      @"name": @"FontFamiliesTemaFont2",
      @"category": @"fontFamilies",
      @"type": @"tema-font-2"
      },
    @"tema-font-3": @{
      @"value": Inconsolata,
      @"name": @"FontFamiliesTemaFont3",
      @"category": @"fontFamilies",
      @"type": @"tema-font-3"
      },
    @"tema-font-4": @{
      @"value": Playfair Display,
      @"name": @"FontFamiliesTemaFont4",
      @"category": @"fontFamilies",
      @"type": @"tema-font-4"
      },
    @"tema-font-5": @{
      @"value": Changa,
      @"name": @"FontFamiliesTemaFont5",
      @"category": @"fontFamilies",
      @"type": @"tema-font-5"
      },
    @"default-font": @{
      @"value": Roboto,
      @"name": @"FontFamiliesDefaultFont",
      @"category": @"fontFamilies",
      @"type": @"default-font"
      }
    },
  @"lineHeights": @{
    @"xsmall": @{
      @"value": 115%,
      @"name": @"LineHeightsXsmall",
      @"category": @"lineHeights",
      @"type": @"xsmall"
      },
    @"small": @{
      @"value": 130%,
      @"name": @"LineHeightsSmall",
      @"category": @"lineHeights",
      @"type": @"small"
      },
    @"medium": @{
      @"value": 145%,
      @"name": @"LineHeightsMedium",
      @"category": @"lineHeights",
      @"type": @"medium"
      },
    @"large": @{
      @"value": 160%,
      @"name": @"LineHeightsLarge",
      @"category": @"lineHeights",
      @"type": @"large"
      },
    @"xlarge": @{
      @"value": 175%,
      @"name": @"LineHeightsXlarge",
      @"category": @"lineHeights",
      @"type": @"xlarge"
      }
    },
  @"fontWeights": @{
    @"1": @{
      @"value": Regular,
      @"name": @"FontWeights1",
      @"category": @"fontWeights",
      @"type": @"1"
      },
    @"2": @{
      @"value": Medium,
      @"name": @"FontWeights2",
      @"category": @"fontWeights",
      @"type": @"2"
      },
    @"3": @{
      @"value": Italic,
      @"name": @"FontWeights3",
      @"category": @"fontWeights",
      @"type": @"3"
      },
    @"4": @{
      @"value": Medium Italic,
      @"name": @"FontWeights4",
      @"category": @"fontWeights",
      @"type": @"4"
      }
    },
  @"fontSizes": @{
    @"text-small": @{
      @"value": 14px,
      @"name": @"FontSizesTextSmall",
      @"category": @"fontSizes",
      @"type": @"text-small"
      },
    @"text-medium": @{
      @"value": 16px,
      @"name": @"FontSizesTextMedium",
      @"category": @"fontSizes",
      @"type": @"text-medium"
      },
    @"text-large": @{
      @"value": 20px,
      @"name": @"FontSizesTextLarge",
      @"category": @"fontSizes",
      @"type": @"text-large"
      },
    @"display-10": @{
      @"value": 16px,
      @"name": @"FontSizesDisplay10",
      @"category": @"fontSizes",
      @"type": @"display-10"
      },
    @"display-20": @{
      @"value": 20px,
      @"name": @"FontSizesDisplay20",
      @"category": @"fontSizes",
      @"type": @"display-20"
      },
    @"display-30": @{
      @"value": 24px,
      @"name": @"FontSizesDisplay30",
      @"category": @"fontSizes",
      @"type": @"display-30"
      },
    @"display-40": @{
      @"value": 32px,
      @"name": @"FontSizesDisplay40",
      @"category": @"fontSizes",
      @"type": @"display-40"
      },
    @"display-50": @{
      @"value": 40px,
      @"name": @"FontSizesDisplay50",
      @"category": @"fontSizes",
      @"type": @"display-50"
      },
    @"display-60": @{
      @"value": 48px,
      @"name": @"FontSizesDisplay60",
      @"category": @"fontSizes",
      @"type": @"display-60"
      },
    @"display-70": @{
      @"value": 56px,
      @"name": @"FontSizesDisplay70",
      @"category": @"fontSizes",
      @"type": @"display-70"
      },
    @"display-80": @{
      @"value": 64px,
      @"name": @"FontSizesDisplay80",
      @"category": @"fontSizes",
      @"type": @"display-80"
      },
    @"display-90": @{
      @"value": 80px,
      @"name": @"FontSizesDisplay90",
      @"category": @"fontSizes",
      @"type": @"display-90"
      }
    },
  @"letterSpacing": @{
    @"0": @{
      @"value": 0%,
      @"name": @"LetterSpacing0",
      @"category": @"letterSpacing",
      @"type": @"0"
      },
    @"1": @
      }
    },
  @"paragraphSpacing": @{
    @"large": @{
      @"value": 32px,
      @"name": @"ParagraphSpacingLarge",
      @"category": @"paragraphSpacing",
      @"type": @"large"
      },
    @"none": @{
      @"value": 0,
      @"name": @"ParagraphSpacingNone",
      @"category": @"paragraphSpacing",
      @"type": @"none"
      },
    @"small": @{
      @"value": 24px,
      @"name": @"ParagraphSpacingSmall",
      @"category": @"paragraphSpacing",
      @"type": @"small"
      },
    @"medium": @{
      @"value": 28px,
      @"name": @"ParagraphSpacingMedium",
      @"category": @"paragraphSpacing",
      @"type": @"medium"
      }
    },
  @"borderWidth": @{
    @"xsmall": @{
      @"value": 1px,
      @"name": @"BorderWidthXsmall",
      @"category": @"borderWidth",
      @"type": @"xsmall"
      },
    @"small": @{
      @"value": 2px,
      @"name": @"BorderWidthSmall",
      @"category": @"borderWidth",
      @"type": @"small"
      },
    @"medium": @{
      @"value": 3px,
      @"name": @"BorderWidthMedium",
      @"category": @"borderWidth",
      @"type": @"medium"
      },
    @"large": @{
      @"value": 4px,
      @"name": @"BorderWidthLarge",
      @"category": @"borderWidth",
      @"type": @"large"
      }
    },
  @"borderRadius": @{
    @"none": @{
      @"value": 0,
      @"name": @"BorderRadiusNone",
      @"category": @"borderRadius",
      @"type": @"none"
      },
    @"xsmall": @{
      @"value": 2px,
      @"name": @"BorderRadiusXsmall",
      @"category": @"borderRadius",
      @"type": @"xsmall"
      },
    @"small": @{
      @"value": 4px,
      @"name": @"BorderRadiusSmall",
      @"category": @"borderRadius",
      @"type": @"small"
      },
    @"medium": @{
      @"value": 6px,
      @"name": @"BorderRadiusMedium",
      @"category": @"borderRadius",
      @"type": @"medium"
      },
    @"large": @{
      @"value": 8px,
      @"name": @"BorderRadiusLarge",
      @"category": @"borderRadius",
      @"type": @"large"
      },
    @"full": @{
      @"value": 100%,
      @"name": @"BorderRadiusFull",
      @"category": @"borderRadius",
      @"type": @"full"
      }
    },
  @"system-border": @{
    @"width": @{
      @"xlarge": @{
        @"value": 4px,
        @"name": @"SystemBorderWidthXlarge",
        @"category": @"system-border",
        @"type": @"width",
        @"item": @"xlarge"
        },
      @"large": @{
        @"value": 3px,
        @"name": @"SystemBorderWidthLarge",
        @"category": @"system-border",
        @"type": @"width",
        @"item": @"large"
        },
      @"medium": @{
        @"value": 2px,
        @"name": @"SystemBorderWidthMedium",
        @"category": @"system-border",
        @"type": @"width",
        @"item": @"medium"
        },
      @"small": @{
        @"value": 1px,
        @"name": @"SystemBorderWidthSmall",
        @"category": @"system-border",
        @"type": @"width",
        @"item": @"small"
        }
      },
    @"style": @{
      @"value": solid,
      @"name": @"SystemBorderStyle",
      @"category": @"system-border",
      @"type": @"style"
      },
    @"color": @{
      @"value": #007E9E,
      @"name": @"SystemBorderColor",
      @"category": @"system-border",
      @"type": @"color"
      },
    @"radius": @{
      @"none": @{
        @"value": 0,
        @"name": @"SystemBorderRadiusNone",
        @"category": @"system-border",
        @"type": @"radius",
        @"item": @"none"
        },
      @"xsmall": @{
        @"value": 2px,
        @"name": @"SystemBorderRadiusXsmall",
        @"category": @"system-border",
        @"type": @"radius",
        @"item": @"xsmall"
        },
      @"small": @{
        @"value": 4px,
        @"name": @"SystemBorderRadiusSmall",
        @"category": @"system-border",
        @"type": @"radius",
        @"item": @"small"
        },
      @"medium": @{
        @"value": 6px,
        @"name": @"SystemBorderRadiusMedium",
        @"category": @"system-border",
        @"type": @"radius",
        @"item": @"medium"
        },
      @"large": @{
        @"value": 8px,
        @"name": @"SystemBorderRadiusLarge",
        @"category": @"system-border",
        @"type": @"radius",
        @"item": @"large"
        }
      },
    @"radius-rounded": @{
      @"value": 30em,
      @"name": @"SystemBorderRadiusRounded",
      @"category": @"system-border",
      @"type": @"radius-rounded"
      }
    },
  @"system-box-shadow": @{
    @"default": @{
      @"value": 0 0 5px 0 rgba(0, 0, 0, 0.2),
      @"name": @"SystemBoxShadowDefault",
      @"category": @"system-box-shadow",
      @"type": @"default"
      },
    @"high": @{
      @"value": 0 5px 10px -3px rgba(0, 0, 0, 0.2),
      @"name": @"SystemBoxShadowHigh",
      @"category": @"system-box-shadow",
      @"type": @"high"
      },
    @"higher": @{
      @"value": 0 10px 25px -4px rgba(0, 0, 0, 0.2),
      @"name": @"SystemBoxShadowHigher",
      @"category": @"system-box-shadow",
      @"type": @"higher"
      },
    @"highest": @{
      @"value": 0 20px 55px -8px rgba(0, 0, 0, 0.2),
      @"name": @"SystemBoxShadowHighest",
      @"category": @"system-box-shadow",
      @"type": @"highest"
      }
    },
  @"system-color": @{
    @"default": @{
      @"value": #005266,
      @"name": @"SystemColorDefault",
      @"category": @"system-color",
      @"type": @"default"
      },
    @"quiet": @{
      @"value": #F9F3F6,
      @"name": @"SystemColorQuiet",
      @"category": @"system-color",
      @"type": @"quiet"
      },
    @"text": @{
      @"value": #5C7080,
      @"name": @"SystemColorText",
      @"category": @"system-color",
      @"type": @"text"
      },
    @"dark": @{
      @"value": #fffff,
      @"name": @"SystemColorDark",
      @"category": @"system-color",
      @"type": @"dark"
      },
    @"background": @{
      @"value": #E2D8E8,
      @"name": @"SystemColorBackground",
      @"category": @"system-color",
      @"type": @"background"
      },
    @"light": @{
      @"value": #005266,
      @"name": @"SystemColorLight",
      @"category": @"system-color",
      @"type": @"light"
      },
    @"link": @{
      @"value": #005266,
      @"name": @"SystemColorLink",
      @"category": @"system-color",
      @"type": @"link"
      },
    @"outline": @{
      @"value": #00A3CC,
      @"name": @"SystemColorOutline",
      @"category": @"system-color",
      @"type": @"outline"
      },
    @"brand": @{
      @"value": #372D5F,
      @"name": @"SystemColorBrand",
      @"category": @"system-color",
      @"type": @"brand"
      },
    @"info": @{
      @"value": #10489D,
      @"name": @"SystemColorInfo",
      @"category": @"system-color",
      @"type": @"info"
      },
    @"warning": @{
      @"value": #A66321,
      @"name": @"SystemColorWarning",
      @"category": @"system-color",
      @"type": @"warning"
      },
    @"success": @{
      @"value": #0A6640,
      @"name": @"SystemColorSuccess",
      @"category": @"system-color",
      @"type": @"success"
      },
    @"error": @{
      @"value": #A82A2A,
      @"name": @"SystemColorError",
      @"category": @"system-color",
      @"type": @"error"
      },
    @"highlight": @{
      @"value": #005266,
      @"name": @"SystemColorHighlight",
      @"category": @"system-color",
      @"type": @"highlight"
      },
    @"disabled": @{
      @"value": rgba(245,248,249,0.5),
      @"name": @"SystemColorDisabled",
      @"category": @"system-color",
      @"type": @"disabled"
      },
    @"disabled-background": @{
      @"value": rgba(245, 248, 250, 0.2),
      @"name": @"SystemColorDisabledBackground",
      @"category": @"system-color",
      @"type": @"disabled-background"
      },
    @"transparent": @{
      @"value": transparent,
      @"name": @"SystemColorTransparent",
      @"category": @"system-color",
      @"type": @"transparent"
      }
    },
  @"system-screen": @{
    @"limit": @{
      @"xsmall": @{
        @"value": 20em,
        @"name": @"SystemScreenLimitXsmall",
        @"category": @"system-screen",
        @"type": @"limit",
        @"item": @"xsmall"
        },
      @"small": @{
        @"value": 30em,
        @"name": @"SystemScreenLimitSmall",
        @"category": @"system-screen",
        @"type": @"limit",
        @"item": @"small"
        },
      @"medium": @{
        @"value": 48em,
        @"name": @"SystemScreenLimitMedium",
        @"category": @"system-screen",
        @"type": @"limit",
        @"item": @"medium"
        },
      @"large": @{
        @"value": 64em,
        @"name": @"SystemScreenLimitLarge",
        @"category": @"system-screen",
        @"type": @"limit",
        @"item": @"large"
        },
      @"xlarge": @{
        @"value": 78em,
        @"name": @"SystemScreenLimitXlarge",
        @"category": @"system-screen",
        @"type": @"limit",
        @"item": @"xlarge"
        },
      @"super": @{
        @"value": 116em,
        @"name": @"SystemScreenLimitSuper",
        @"category": @"system-screen",
        @"type": @"limit",
        @"item": @"super"
        }
      }
    },
  @"system-spacing": @{
    @"super": @{
      @"value": 3em,
      @"name": @"SystemSpacingSuper",
      @"category": @"system-spacing",
      @"type": @"super"
      },
    @"xlarge": @{
      @"value": 2em,
      @"name": @"SystemSpacingXlarge",
      @"category": @"system-spacing",
      @"type": @"xlarge"
      },
    @"large": @{
      @"value": 1.5em,
      @"name": @"SystemSpacingLarge",
      @"category": @"system-spacing",
      @"type": @"large"
      },
    @"medium": @{
      @"value": 1em,
      @"name": @"SystemSpacingMedium",
      @"category": @"system-spacing",
      @"type": @"medium"
      },
    @"small": @{
      @"value": 0.625em,
      @"name": @"SystemSpacingSmall",
      @"category": @"system-spacing",
      @"type": @"small"
      },
    @"xsmall": @{
      @"value": 0.5em,
      @"name": @"SystemSpacingXsmall",
      @"category": @"system-spacing",
      @"type": @"xsmall"
      },
    @"tiny": @{
      @"value": 0.25em,
      @"name": @"SystemSpacingTiny",
      @"category": @"system-spacing",
      @"type": @"tiny"
      }
    },
  @"system-text": @{
    @"font": @{
      @"family": @{
        @"heading": @{
          @"value": Barlow Condensed, Helvetica,
          @"name": @"SystemTextFontFamilyHeading",
          @"category": @"system-text",
          @"type": @"font",
          @"item": @"family",
          @"subitem": @"heading"
          },
        @"sans-serif": @{
          @"value": Roboto, Helvetica,
          @"name": @"SystemTextFontFamilySansSerif",
          @"category": @"system-text",
          @"type": @"font",
          @"item": @"family",
          @"subitem": @"sans-serif"
          },
        @"serif": @{
          @"value": serif,
          @"name": @"SystemTextFontFamilySerif",
          @"category": @"system-text",
          @"type": @"font",
          @"item": @"family",
          @"subitem": @"serif"
          },
        @"mono": @{
          @"value": monospace,
          @"name": @"SystemTextFontFamilyMono",
          @"category": @"system-text",
          @"type": @"font",
          @"item": @"family",
          @"subitem": @"mono"
          }
        },
      @"size": @{
        @"super": @{
          @"value": 2.5em,
          @"name": @"SystemTextFontSizeSuper",
          @"category": @"system-text",
          @"type": @"font",
          @"item": @"size",
          @"subitem": @"super"
          },
        @"xlarge": @{
          @"value": 2em,
          @"name": @"SystemTextFontSizeXlarge",
          @"category": @"system-text",
          @"type": @"font",
          @"item": @"size",
          @"subitem": @"xlarge"
          },
        @"large": @{
          @"value": 1.5em,
          @"name": @"SystemTextFontSizeLarge",
          @"category": @"system-text",
          @"type": @"font",
          @"item": @"size",
          @"subitem": @"large"
          },
        @"medium": @{
          @"value": 1.25em,
          @"name": @"SystemTextFontSizeMedium",
          @"category": @"system-text",
          @"type": @"font",
          @"item": @"size",
          @"subitem": @"medium"
          },
        @"small": @{
          @"value": 1em,
          @"name": @"SystemTextFontSizeSmall",
          @"category": @"system-text",
          @"type": @"font",
          @"item": @"size",
          @"subitem": @"small"
          },
        @"xsmall": @{
          @"value": 0.875em,
          @"name": @"SystemTextFontSizeXsmall",
          @"category": @"system-text",
          @"type": @"font",
          @"item": @"size",
          @"subitem": @"xsmall"
          }
        },
      @"weight": @{
        @"value": normal,
        @"name": @"SystemTextFontWeight",
        @"category": @"system-text",
        @"type": @"font",
        @"item": @"weight"
        },
      @"weight-heavy": @{
        @"value": bold,
        @"name": @"SystemTextFontWeightHeavy",
        @"category": @"system-text",
        @"type": @"font",
        @"item": @"weight-heavy"
        }
      },
    @"title-font": @{
      @"size": @{
        @"super": @{
          @"value": 4.5em,
          @"name": @"SystemTextTitleFontSizeSuper",
          @"category": @"system-text",
          @"type": @"title-font",
          @"item": @"size",
          @"subitem": @"super"
          },
        @"xlarge": @{
          @"value": 4em,
          @"name": @"SystemTextTitleFontSizeXlarge",
          @"category": @"system-text",
          @"type": @"title-font",
          @"item": @"size",
          @"subitem": @"xlarge"
          },
        @"large": @{
          @"value": 3.5em,
          @"name": @"SystemTextTitleFontSizeLarge",
          @"category": @"system-text",
          @"type": @"title-font",
          @"item": @"size",
          @"subitem": @"large"
          },
        @"medium": @{
          @"value": 3em,
          @"name": @"SystemTextTitleFontSizeMedium",
          @"category": @"system-text",
          @"type": @"title-font",
          @"item": @"size",
          @"subitem": @"medium"
          },
        @"small": @{
          @"value": 2.5em,
          @"name": @"SystemTextTitleFontSizeSmall",
          @"category": @"system-text",
          @"type": @"title-font",
          @"item": @"size",
          @"subitem": @"small"
          },
        @"xsmall": @{
          @"value": 2em,
          @"name": @"SystemTextTitleFontSizeXsmall",
          @"category": @"system-text",
          @"type": @"title-font",
          @"item": @"size",
          @"subitem": @"xsmall"
          }
        }
      },
    @"line-height": @{
      @"value": 1.75,
      @"name": @"SystemTextLineHeight",
      @"category": @"system-text",
      @"type": @"line-height"
      }
    },
  @"system-z": @{
    @"over": @{
      @"content": @{
        @"value": 100,
        @"name": @"SystemZOverContent",
        @"category": @"system-z",
        @"type": @"over",
        @"item": @"content"
        },
      @"control": @{
        @"value": 200,
        @"name": @"SystemZOverControl",
        @"category": @"system-z",
        @"type": @"over",
        @"item": @"control"
        },
      @"page": @{
        @"value": 300,
        @"name": @"SystemZOverPage",
        @"category": @"system-z",
        @"type": @"over",
        @"item": @"page"
        },
      @"screen": @{
        @"value": 400,
        @"name": @"SystemZOverScreen",
        @"category": @"system-z",
        @"type": @"over",
        @"item": @"screen"
        },
      @"everything": @{
        @"value": 500,
        @"name": @"SystemZOverEverything",
        @"category": @"system-z",
        @"type": @"over",
        @"item": @"everything"
        }
      }
    }
  };
  });

  return dictionary;
}

@end


