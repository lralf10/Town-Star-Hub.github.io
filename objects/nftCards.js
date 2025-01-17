const nftCards = {
  // Ornaments
    "Ornament_One_Holiday_Tree_Card": {
        "Group": "Ornament_Wages",
        "Description": "ENCHANTED ORNAMENT - 1 (REDUCED WAGE -8%)",
        "Name": "Ornament_One_Holiday_Tree_Card",
        "EffectType": "Wages",
        "Utility": {
          "laborCost": {
            "Effect": 0.08 //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_1.png"
      },
      "Ornament_Two_Holiday_Tree_Card": {
        "Group": "Ornament_Wages",
        "Description": "ENCHANTED ORNAMENT - 2 (REDUCED WAGE -3.5%)",
        "Name": "Ornament_Two_Holiday_Tree_Card",
        "EffectType": "Wages",
        "Utility": {
          "laborCost": {
            "Effect": 0.035 //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_2.png"
      },
      "Ornament_Three_Holiday_Tree_Card": {
        "Group": "Ornament_Cost",
        "Description": "ENCHANTED ORNAMENT - 3 (REDUCED COST -2%)",
        "Name": "Ornament_Three_Holiday_Tree_Card",
        "EffectType": "Cost",
        "Utility": {
          "buildCost": {
            "Effect": 0.02  //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_3.png"
      },
      "Ornament_Four_Holiday_Tree_Card": {
        "Group": "Ornament_Wages",
        "Description": "ENCHANTED ORNAMENT - 4 (REDUCED WAGE -1.5%)",
        "Name": "Ornament_Four_Holiday_Tree_Card",
        "EffectType": "Wages",
        "Utility": {
          "laborCost": {
            "Effect": 0.015  //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_4.png"
      },
      "Ornament_Five_Holiday_Tree_Card": {
        "Group": "Ornament_Cost",
        "Description": "ENCHANTED ORNAMENT - 5 (REDUCED COST -9%)",
        "Name": "Ornament_Five_Holiday_Tree_Card",
        "EffectType": "Cost",
        "Utility": {
          "buildCost": {
            "Effect": 0.09  //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_5.png"
      },
      "Ornament_Six_Holiday_Tree_Card": {
        "Group": "Ornament_Cost",
        "Description": "ENCHANTED ORNAMENT - 6 (REDUCED COST -5%)",
        "Name": "Ornament_Six_Holiday_Tree_Card",
        "EffectType": "Cost",
        "Utility": {
          "buildCost": {
            "Effect": 0.05  //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_6.png"
      },
      "Ornament_Seven_Holiday_Tree_Card": {
        "Group": "Ornament_Wages",
        "Description": "ENCHANTED ORNAMENT - 7 (REDUCED WAGE -1.5%)",
        "Name": "Ornament_Seven_Holiday_Tree_Card",
        "EffectType": "Wages",
        "Utility": {
          "laborCost": {
            "Effect": 0.015  //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_7.png"
      },
      "Ornament_Eight_Holiday_Tree_Card": {
        "Group": "Ornament_Cost",
        "Description": "ENCHANTED ORNAMENT - 8 (REDUCED COST -2%)",
        "Name": "Ornament_Eight_Holiday_Tree_Card",
        "EffectType": "Cost",
        "Utility": {
          "buildCost": {
            "Effect": 0.02  //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_8.png"
      },
      "Ornament_Nine_Holiday_Tree_Card": {
        "Group": "Ornament_Cost",
        "Description": "ENCHANTED ORNAMENT - 9 (REDUCED COST -5%)",
        "Name": "Ornament_Nine_Holiday_Tree_Card",
        "EffectType": "Cost",
        "Utility": {
          "buildCost": {
            "Effect": 0.05  //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_9.png"
      },
      "Ornament_Ten_Holiday_Tree_Card": {
        "Group": "Ornament_Wages",
        "Description": "ENCHANTED ORNAMENT - 10 (REDUCED WAGE -4%)",
        "Name": "Ornament_Ten_Holiday_Tree_Card",
        "EffectType": "Wages",
        "Utility": {
          "laborCost": {
            "Effect": 0.04  //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_10.png"
      },
      "Ornament_Eleven_Holiday_Tree_Card": {
        "Group": "Ornament_Cost",
        "Description": "ENCHANTED ORNAMENT - 11 (REDUCED COST -2%)",
        "Name": "Ornament_Eleven_Holiday_Tree_Card",
        "EffectType": "Cost",
        "Utility": {
          "buildCost": {
            "Effect": 0.02  //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_11.png"
      },
      "Ornament_Twelve_Holiday_Tree_Card": {
        "Group": "Ornament_Wages",
        "Description": "ENCHANTED ORNAMENT - 12 (REDUCED WAGE -1.5%)",
        "Name": "Ornament_Twelve_Holiday_Tree_Card",
        "EffectType": "Wages",
        "Utility": {
          "laborCost": {
            "Effect": 0.015  //reduced %
          }
        },
        "FileUrl": "images/Enchanted_Ornament_12.png"
      },
      // End of ornaments
      // Gustly Wind
      "Common_Gustly_Wind": {
        "Group": "Gustly_Wind",
        "Description": "COMMON GUSTY WIND (CRAFT TIME -2.5%)",
        "Name": "Common_Gustly_Wind",
        "EffectType": "CraftTime",
        "Building": {
          "Windmill": {
            "Time0": 0.025,
            "Time1": 0.025,
            "Time2": 0.025,
            "Time3": 0.025,
          }
        },
        "FileUrl": "images/card_gusty_wind.png"
      },
      "Uncommon_Gustly_Wind": {
        "Group": "Gustly_Wind",
        "Description": "Uncommon GUSTY WIND (CRAFT TIME -5.0%)",
        "Name": "Uncommon_Gustly_Wind",
        "EffectType": "CraftTime",
        "Building": {
          "Windmill": {
            "Time0": 0.05,  //reduced %
            "Time1": 0.05,  //reduced %
            "Time2": 0.05,  //reduced %
            "Time3": 0.05,  //reduced %
          }
        },
        "FileUrl": "images/card_gusty_wind.png"
      },
      "Rare_Gustly_Wind": {
        "Group": "Gustly_Wind",
        "Description": "Rare GUSTY WIND (CRAFT TIME -7.5%)",
        "Name": "Rare_Gustly_Wind",
        "EffectType": "CraftTime",
        "Building": {
          "Windmill": {
            "Time0": 0.075,  //reduced %
            "Time1": 0.075,  //reduced %
            "Time2": 0.075,  //reduced %
            "Time3": 0.075,  //reduced %
          }
        },
        "FileUrl": "images/card_gusty_wind.png"
      },
      "Epic_Gustly_Wind": {
        "Group": "Gustly_Wind",
        "Description": "Epic GUSTY WIND (CRAFT TIME -10%)",
        "Name": "Epic_Gustly_Wind",
        "EffectType": "CraftTime",
        "Building": {
          "Windmill": {
            "Time0": 0.1,  //reduced %
            "Time1": 0.1,  //reduced %
            "Time2": 0.1,  //reduced %
            "Time3": 0.1,  //reduced %
          }
        },
        "FileUrl": "images/card_gusty_wind.png"
      },
      "Legendary_Gustly_Wind": {
        "Group": "Gustly_Wind",
        "Description": "Legendary GUSTY WIND (CRAFT TIME -13%)",
        "Name": "Legendary_Gustly_Wind",
        "EffectType": "CraftTime",
        "Building": {
          "Windmill": {
            "Time0": 0.13,  //reduced %
            "Time1": 0.13,  //reduced %
            "Time2": 0.13,  //reduced %
            "Time3": 0.13,  //reduced %
          }
        },
        "FileUrl": "images/card_gusty_wind.png"
      },
      "Ancient_Gustly_Wind": {
        "Group": "Gustly_Wind",
        "EffectType": "CraftTime",
        "Description": "Ancient GUSTY WIND (CRAFT TIME -16%)",
        "Name": "Ancient_Gustly_Wind",
        "Building": {
          "Windmill": {
            "Time0": 0.16,  //reduced %
            "Time1": 0.16,  //reduced %
            "Time2": 0.16,  //reduced %
            "Time3": 0.16,  //reduced %
          }
        },
        "FileUrl": "images/card_gusty_wind.png"
      }
      // End of Gustly Wind
};