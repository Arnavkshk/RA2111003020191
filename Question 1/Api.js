const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;
const companies = ["AKZ", "FLP", "SNP", "HYN", "AZO"];


companyProducts = {
  "AKZ": {
    "Phone": [
      {
        "productName": "Laptop 48",
        "price": 958,
        "rating": 1.6,
        "availability": "no",
        "discount": 4
      },
      {
        "productName": "TV 6",
        "price": 265,
        "rating": 4.1,
        "availability": "no",
        "discount": 18
      },
      {
        "productName": "Tablet 22",
        "price": 565,
        "rating": 2.0,
        "availability": "yes",
        "discount": 4
      },
      {
        "productName": "Speaker 78",
        "price": 898,
        "rating": 4.5,
        "availability": "yes",
        "discount": 32
      },
      {
        "productName": "Computer 30",
        "price": 159,
        "rating": 2.7,
        "availability": "yes",
        "discount": 25
      },
      {
        "productName": "Charger 73",
        "price": 440,
        "rating": 2.6,
        "availability": "no",
        "discount": 20
      },
      {
        "productName": "Speaker 29",
        "price": 705,
        "rating": 3.4,
        "availability": "no",
        "discount": 48
      },
      {
        "productName": "Headset 75",
        "price": 677,
        "rating": 2.7,
        "availability": "no",
        "discount": 31
      },
      {
        "productName": "Pendrive 87",
        "price": 405,
        "rating": 3.1,
        "availability": "no",
        "discount": 46
      },
      {
        "productName": "Earphone 61",
        "price": 544,
        "rating": 2.7,
        "availability": "yes",
        "discount": 12
      }
    ],
    "Computer": [
      {
        "productName": "Phone 57",
        "price": 947,
        "rating": 3.1,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "Speaker 6",
        "price": 343,
        "rating": 3.3,
        "availability": "no",
        "discount": 48
      },
      {
        "productName": "Remote 30",
        "price": 430,
        "rating": 2.4,
        "availability": "yes",
        "discount": 22
      },
      {
        "productName": "Phone 86",
        "price": 858,
        "rating": 1.2,
        "availability": "no",
        "discount": 14
      },
      {
        "productName": "TV 91",
        "price": 870,
        "rating": 1.2,
        "availability": "yes",
        "discount": 26
      },
      {
        "productName": "Headset 50",
        "price": 172,
        "rating": 2.2,
        "availability": "yes",
        "discount": 18
      },
      {
        "productName": "House 49",
        "price": 160,
        "rating": 2.0,
        "availability": "yes",
        "discount": 17
      },
      {
        "productName": "Bluetooth 24",
        "price": 765,
        "rating": 2.4,
        "availability": "yes",
        "discount": 3
      },
      {
        "productName": "Remote 17",
        "price": 111,
        "rating": 2.9,
        "availability": "no",
        "discount": 50
      },
      {
        "productName": "Laptop 12",
        "price": 317,
        "rating": 2.4,
        "availability": "yes",
        "discount": 15
      }
    ],
    "TV": [
      {
        "productName": "TV 96",
        "price": 542,
        "rating": 1.7,
        "availability": "yes",
        "discount": 49
      },
      {
        "productName": "Keypad 3",
        "price": 444,
        "rating": 3.7,
        "availability": "no",
        "discount": 40
      },
      {
        "productName": "Charger 46",
        "price": 169,
        "rating": 4.3,
        "availability": "no",
        "discount": 30
      },
      {
        "productName": "Speaker 29",
        "price": 393,
        "rating": 2.3,
        "availability": "no",
        "discount": 17
      },
      {
        "productName": "Remote 27",
        "price": 973,
        "rating": 2.8,
        "availability": "yes",
        "discount": 36
      },
      {
        "productName": "Pendrive 81",
        "price": 909,
        "rating": 1.8,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "Laptop 67",
        "price": 384,
        "rating": 2.3,
        "availability": "no",
        "discount": 38
      },
      {
        "productName": "Bluetooth 72",
        "price": 802,
        "rating": 1.7,
        "availability": "no",
        "discount": 7
      },
      {
        "productName": "Earphone 55",
        "price": 733,
        "rating": 1.6,
        "availability": "yes",
        "discount": 35
      },
      {
        "productName": "Speaker 62",
        "price": 959,
        "rating": 2.7,
        "availability": "no",
        "discount": 17
      }
    ],
    "Earphone": [
      {
        "productName": "Keypad 67",
        "price": 804,
        "rating": 4.8,
        "availability": "yes",
        "discount": 0
      },
      {
        "productName": "Speaker 20",
        "price": 658,
        "rating": 1.7,
        "availability": "yes",
        "discount": 38
      },
      {
        "productName": "Bluetooth 93",
        "price": 263,
        "rating": 1.7,
        "availability": "yes",
        "discount": 33
      },
      {
        "productName": "Phone 24",
        "price": 138,
        "rating": 3.2,
        "availability": "no",
        "discount": 41
      },
      {
        "productName": "Pendrive 1",
        "price": 777,
        "rating": 2.4,
        "availability": "no",
        "discount": 19
      },
      {
        "productName": "PC 62",
        "price": 255,
        "rating": 3.8,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "House 40",
        "price": 209,
        "rating": 3.2,
        "availability": "yes",
        "discount": 35
      },
      {
        "productName": "Remote 34",
        "price": 622,
        "rating": 4.2,
        "availability": "no",
        "discount": 19
      },
      {
        "productName": "Speaker 72",
        "price": 809,
        "rating": 4.9,
        "availability": "no",
        "discount": 1
      },
      {
        "productName": "Tablet 47",
        "price": 623,
        "rating": 2.1,
        "availability": "no",
        "discount": 0
      }
    ],
    "Tablet": [
      {
        "productName": "Phone 99",
        "price": 722,
        "rating": 2.9,
        "availability": "yes",
        "discount": 1
      },
      {
        "productName": "Laptop 88",
        "price": 753,
        "rating": 3.0,
        "availability": "no",
        "discount": 6
      },
      {
        "productName": "Tablet 86",
        "price": 556,
        "rating": 2.6,
        "availability": "yes",
        "discount": 25
      },
      {
        "productName": "Keypad 7",
        "price": 126,
        "rating": 4.2,
        "availability": "yes",
        "discount": 26
      },
      {
        "productName": "Keypad 8",
        "price": 260,
        "rating": 2.5,
        "availability": "yes",
        "discount": 44
      },
      {
        "productName": "Headset 76",
        "price": 352,
        "rating": 1.9,
        "availability": "yes",
        "discount": 37
      },
      {
        "productName": "Keypad 51",
        "price": 879,
        "rating": 2.0,
        "availability": "yes",
        "discount": 4
      },
      {
        "productName": "Speaker 69",
        "price": 489,
        "rating": 3.2,
        "availability": "yes",
        "discount": 19
      },
      {
        "productName": "Earphone 69",
        "price": 373,
        "rating": 4.2,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "Keypad 13",
        "price": 143,
        "rating": 4.5,
        "availability": "yes",
        "discount": 3
      }
    ],
    "Charger": [
      {
        "productName": "TV 22",
        "price": 900,
        "rating": 1.7,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "PC 34",
        "price": 680,
        "rating": 2.1,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "Pendrive 55",
        "price": 244,
        "rating": 3.2,
        "availability": "no",
        "discount": 39
      },
      {
        "productName": "Speaker 62",
        "price": 997,
        "rating": 1.3,
        "availability": "no",
        "discount": 42
      },
      {
        "productName": "Laptop 77",
        "price": 585,
        "rating": 4.8,
        "availability": "yes",
        "discount": 40
      },
      {
        "productName": "TV 88",
        "price": 870,
        "rating": 1.8,
        "availability": "yes",
        "discount": 39
      },
      {
        "productName": "Headset 27",
        "price": 916,
        "rating": 4.4,
        "availability": "no",
        "discount": 46
      },
      {
        "productName": "Earphone 76",
        "price": 106,
        "rating": 2.6,
        "availability": "yes",
        "discount": 9
      },
      {
        "productName": "Charger 66",
        "price": 166,
        "rating": 4.4,
        "availability": "no",
        "discount": 32
      },
      {
        "productName": "PC 68",
        "price": 215,
        "rating": 2.4,
        "availability": "no",
        "discount": 48
      }
    ],
    "House": [
      {
        "productName": "Remote 3",
        "price": 642,
        "rating": 3.2,
        "availability": "no",
        "discount": 7
      },
      {
        "productName": "TV 83",
        "price": 904,
        "rating": 2.7,
        "availability": "no",
        "discount": 41
      },
      {
        "productName": "Phone 48",
        "price": 255,
        "rating": 1.9,
        "availability": "yes",
        "discount": 25
      },
      {
        "productName": "Earphone 57",
        "price": 284,
        "rating": 2.8,
        "availability": "yes",
        "discount": 5
      },
      {
        "productName": "Computer 17",
        "price": 870,
        "rating": 4.9,
        "availability": "no",
        "discount": 31
      },
      {
        "productName": "Charger 68",
        "price": 760,
        "rating": 4.8,
        "availability": "no",
        "discount": 13
      },
      {
        "productName": "TV 76",
        "price": 209,
        "rating": 1.4,
        "availability": "yes",
        "discount": 25
      },
      {
        "productName": "Speaker 49",
        "price": 803,
        "rating": 4.4,
        "availability": "no",
        "discount": 32
      },
      {
        "productName": "Headset 52",
        "price": 427,
        "rating": 1.2,
        "availability": "yes",
        "discount": 4
      },
      {
        "productName": "Speaker 70",
        "price": 462,
        "rating": 4.8,
        "availability": "yes",
        "discount": 32
      }
    ],
    "Keypad": [
      {
        "productName": "Headset 34",
        "price": 986,
        "rating": 1.8,
        "availability": "yes",
        "discount": 24
      },
      {
        "productName": "Charger 45",
        "price": 448,
        "rating": 2.5,
        "availability": "no",
        "discount": 18
      },
      {
        "productName": "Laptop 52",
        "price": 116,
        "rating": 1.8,
        "availability": "no",
        "discount": 5
      },
      {
        "productName": "PC 14",
        "price": 640,
        "rating": 3.7,
        "availability": "no",
        "discount": 12
      },
      {
        "productName": "Bluetooth 77",
        "price": 292,
        "rating": 2.6,
        "availability": "no",
        "discount": 17
      },
      {
        "productName": "TV 61",
        "price": 443,
        "rating": 2.2,
        "availability": "yes",
        "discount": 7
      },
      {
        "productName": "Pendrive 76",
        "price": 644,
        "rating": 4.0,
        "availability": "yes",
        "discount": 32
      },
      {
        "productName": "Phone 84",
        "price": 833,
        "rating": 2.8,
        "availability": "no",
        "discount": 19
      },
      {
        "productName": "Headset 75",
        "price": 761,
        "rating": 4.7,
        "availability": "no",
        "discount": 36
      },
      {
        "productName": "Speaker 47",
        "price": 853,
        "rating": 2.1,
        "availability": "no",
        "discount": 44
      }
    ],
    "Bluetooth": [
      {
        "productName": "Charger 34",
        "price": 505,
        "rating": 3.7,
        "availability": "no",
        "discount": 18
      },
      {
        "productName": "Charger 25",
        "price": 350,
        "rating": 2.1,
        "availability": "no",
        "discount": 8
      },
      {
        "productName": "House 64",
        "price": 571,
        "rating": 3.7,
        "availability": "yes",
        "discount": 34
      },
      {
        "productName": "Computer 30",
        "price": 544,
        "rating": 1.4,
        "availability": "no",
        "discount": 12
      },
      {
        "productName": "Earphone 73",
        "price": 565,
        "rating": 3.6,
        "availability": "no",
        "discount": 47
      },
      {
        "productName": "House 45",
        "price": 842,
        "rating": 1.5,
        "availability": "yes",
        "discount": 13
      },
      {
        "productName": "Pendrive 7",
        "price": 694,
        "rating": 3.5,
        "availability": "yes",
        "discount": 33
      },
      {
        "productName": "PC 53",
        "price": 456,
        "rating": 2.7,
        "availability": "yes",
        "discount": 48
      },
      {
        "productName": "Computer 20",
        "price": 129,
        "rating": 3.2,
        "availability": "yes",
        "discount": 12
      },
      {
        "productName": "Computer 38",
        "price": 389,
        "rating": 2.6,
        "availability": "no",
        "discount": 48
      }
    ],
    "Pendrive": [
      {
        "productName": "Bluetooth 71",
        "price": 440,
        "rating": 2.6,
        "availability": "no",
        "discount": 50
      },
      {
        "productName": "TV 39",
        "price": 209,
        "rating": 3.0,
        "availability": "no",
        "discount": 10
      },
      {
        "productName": "PC 37",
        "price": 526,
        "rating": 1.1,
        "availability": "yes",
        "discount": 46
      },
      {
        "productName": "House 76",
        "price": 461,
        "rating": 3.5,
        "availability": "yes",
        "discount": 22
      },
      {
        "productName": "Remote 97",
        "price": 672,
        "rating": 1.0,
        "availability": "yes",
        "discount": 22
      },
      {
        "productName": "PC 31",
        "price": 825,
        "rating": 3.9,
        "availability": "yes",
        "discount": 38
      },
      {
        "productName": "House 25",
        "price": 743,
        "rating": 4.1,
        "availability": "no",
        "discount": 26
      },
      {
        "productName": "Laptop 97",
        "price": 973,
        "rating": 4.5,
        "availability": "no",
        "discount": 47
      },
      {
        "productName": "PC 13",
        "price": 449,
        "rating": 4.1,
        "availability": "no",
        "discount": 27
      },
      {
        "productName": "Headset 35",
        "price": 971,
        "rating": 1.6,
        "availability": "yes",
        "discount": 45
      }
    ],
    "Remote": [
      {
        "productName": "PC 4",
        "price": 756,
        "rating": 4.8,
        "availability": "no",
        "discount": 6
      },
      {
        "productName": "Phone 38",
        "price": 154,
        "rating": 3.1,
        "availability": "yes",
        "discount": 34
      },
      {
        "productName": "Charger 17",
        "price": 867,
        "rating": 3.5,
        "availability": "no",
        "discount": 7
      },
      {
        "productName": "Bluetooth 32",
        "price": 844,
        "rating": 1.2,
        "availability": "no",
        "discount": 22
      },
      {
        "productName": "Pendrive 45",
        "price": 606,
        "rating": 1.9,
        "availability": "yes",
        "discount": 38
      },
      {
        "productName": "Speaker 83",
        "price": 104,
        "rating": 2.2,
        "availability": "no",
        "discount": 8
      },
      {
        "productName": "Tablet 16",
        "price": 116,
        "rating": 1.3,
        "availability": "yes",
        "discount": 46
      },
      {
        "productName": "Bluetooth 78",
        "price": 746,
        "rating": 2.5,
        "availability": "no",
        "discount": 8
      },
      {
        "productName": "Phone 50",
        "price": 691,
        "rating": 3.9,
        "availability": "no",
        "discount": 26
      },
      {
        "productName": "Phone 23",
        "price": 426,
        "rating": 3.5,
        "availability": "yes",
        "discount": 44
      }
    ],
    "Speaker": [
      {
        "productName": "House 59",
        "price": 815,
        "rating": 1.5,
        "availability": "yes",
        "discount": 50
      },
      {
        "productName": "Earphone 44",
        "price": 192,
        "rating": 4.9,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "Bluetooth 25",
        "price": 570,
        "rating": 2.9,
        "availability": "no",
        "discount": 10
      },
      {
        "productName": "Earphone 98",
        "price": 330,
        "rating": 1.6,
        "availability": "no",
        "discount": 36
      },
      {
        "productName": "Computer 3",
        "price": 299,
        "rating": 1.6,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "Speaker 57",
        "price": 944,
        "rating": 4.5,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "Keypad 99",
        "price": 288,
        "rating": 3.5,
        "availability": "no",
        "discount": 31
      },
      {
        "productName": "Computer 3",
        "price": 249,
        "rating": 4.4,
        "availability": "no",
        "discount": 46
      },
      {
        "productName": "PC 26",
        "price": 669,
        "rating": 2.2,
        "availability": "yes",
        "discount": 15
      },
      {
        "productName": "Earphone 65",
        "price": 237,
        "rating": 2.0,
        "availability": "no",
        "discount": 50
      }
    ],
    "Headset": [
      {
        "productName": "Pendrive 48",
        "price": 764,
        "rating": 5.0,
        "availability": "yes",
        "discount": 12
      },
      {
        "productName": "Headset 55",
        "price": 957,
        "rating": 1.7,
        "availability": "no",
        "discount": 0
      },
      {
        "productName": "Remote 51",
        "price": 786,
        "rating": 3.5,
        "availability": "yes",
        "discount": 50
      },
      {
        "productName": "Tablet 82",
        "price": 844,
        "rating": 3.9,
        "availability": "no",
        "discount": 15
      },
      {
        "productName": "Earphone 98",
        "price": 495,
        "rating": 4.0,
        "availability": "yes",
        "discount": 10
      },
      {
        "productName": "Speaker 89",
        "price": 928,
        "rating": 2.8,
        "availability": "yes",
        "discount": 42
      },
      {
        "productName": "House 71",
        "price": 583,
        "rating": 2.7,
        "availability": "yes",
        "discount": 11
      },
      {
        "productName": "Laptop 97",
        "price": 799,
        "rating": 3.5,
        "availability": "no",
        "discount": 18
      },
      {
        "productName": "Charger 20",
        "price": 509,
        "rating": 3.1,
        "availability": "no",
        "discount": 11
      },
      {
        "productName": "House 65",
        "price": 904,
        "rating": 3.1,
        "availability": "no",
        "discount": 34
      }
    ],
    "Laptop": [
      {
        "productName": "TV 32",
        "price": 205,
        "rating": 2.7,
        "availability": "no",
        "discount": 21
      },
      {
        "productName": "House 40",
        "price": 293,
        "rating": 4.9,
        "availability": "no",
        "discount": 12
      },
      {
        "productName": "Bluetooth 84",
        "price": 541,
        "rating": 4.9,
        "availability": "yes",
        "discount": 18
      },
      {
        "productName": "Laptop 78",
        "price": 579,
        "rating": 3.7,
        "availability": "no",
        "discount": 17
      },
      {
        "productName": "Tablet 91",
        "price": 264,
        "rating": 4.6,
        "availability": "no",
        "discount": 39
      },
      {
        "productName": "Charger 5",
        "price": 390,
        "rating": 3.0,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "Phone 69",
        "price": 696,
        "rating": 3.3,
        "availability": "yes",
        "discount": 4
      },
      {
        "productName": "PC 22",
        "price": 744,
        "rating": 1.3,
        "availability": "no",
        "discount": 19
      },
      {
        "productName": "Tablet 34",
        "price": 684,
        "rating": 1.5,
        "availability": "yes",
        "discount": 16
      },
      {
        "productName": "Headset 72",
        "price": 895,
        "rating": 3.2,
        "availability": "no",
        "discount": 25
      }
    ],
    "PC": [
      {
        "productName": "TV 36",
        "price": 490,
        "rating": 4.0,
        "availability": "no",
        "discount": 5
      },
      {
        "productName": "Phone 99",
        "price": 152,
        "rating": 2.1,
        "availability": "yes",
        "discount": 2
      },
      {
        "productName": "Remote 6",
        "price": 215,
        "rating": 4.3,
        "availability": "no",
        "discount": 3
      },
      {
        "productName": "Bluetooth 54",
        "price": 663,
        "rating": 4.5,
        "availability": "yes",
        "discount": 13
      },
      {
        "productName": "Bluetooth 97",
        "price": 844,
        "rating": 4.4,
        "availability": "no",
        "discount": 14
      },
      {
        "productName": "Speaker 76",
        "price": 317,
        "rating": 1.5,
        "availability": "yes",
        "discount": 32
      },
      {
        "productName": "Earphone 35",
        "price": 176,
        "rating": 2.4,
        "availability": "no",
        "discount": 8
      },
      {
        "productName": "House 5",
        "price": 593,
        "rating": 2.4,
        "availability": "yes",
        "discount": 10
      },
      {
        "productName": "Headset 11",
        "price": 439,
        "rating": 3.3,
        "availability": "yes",
        "discount": 21
      },
      {
        "productName": "House 38",
        "price": 535,
        "rating": 4.1,
        "availability": "no",
        "discount": 12
      }
    ]
  },
  "FLP": {
    "Phone": [
      {
        "productName": "PC 8",
        "price": 855,
        "rating": 4.4,
        "availability": "no",
        "discount": 45
      },
      {
        "productName": "Headset 92",
        "price": 454,
        "rating": 4.9,
        "availability": "yes",
        "discount": 27
      },
      {
        "productName": "House 90",
        "price": 208,
        "rating": 4.9,
        "availability": "no",
        "discount": 36
      },
      {
        "productName": "Laptop 3",
        "price": 114,
        "rating": 1.9,
        "availability": "no",
        "discount": 0
      },
      {
        "productName": "Headset 94",
        "price": 513,
        "rating": 4.1,
        "availability": "yes",
        "discount": 16
      },
      {
        "productName": "Earphone 89",
        "price": 663,
        "rating": 1.3,
        "availability": "no",
        "discount": 17
      },
      {
        "productName": "Computer 68",
        "price": 349,
        "rating": 2.2,
        "availability": "no",
        "discount": 12
      },
      {
        "productName": "House 83",
        "price": 843,
        "rating": 4.7,
        "availability": "no",
        "discount": 15
      },
      {
        "productName": "Speaker 63",
        "price": 155,
        "rating": 4.4,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "Speaker 97",
        "price": 681,
        "rating": 2.7,
        "availability": "no",
        "discount": 30
      }
    ],
    "Computer": [
      {
        "productName": "TV 61",
        "price": 560,
        "rating": 4.6,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "Bluetooth 59",
        "price": 456,
        "rating": 3.4,
        "availability": "yes",
        "discount": 49
      },
      {
        "productName": "House 23",
        "price": 483,
        "rating": 2.9,
        "availability": "no",
        "discount": 0
      },
      {
        "productName": "TV 78",
        "price": 778,
        "rating": 2.0,
        "availability": "no",
        "discount": 11
      },
      {
        "productName": "Headset 20",
        "price": 468,
        "rating": 2.0,
        "availability": "yes",
        "discount": 19
      },
      {
        "productName": "Laptop 66",
        "price": 859,
        "rating": 1.4,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "Laptop 82",
        "price": 893,
        "rating": 1.4,
        "availability": "no",
        "discount": 24
      },
      {
        "productName": "Speaker 77",
        "price": 719,
        "rating": 2.1,
        "availability": "no",
        "discount": 35
      },
      {
        "productName": "Earphone 43",
        "price": 265,
        "rating": 3.9,
        "availability": "yes",
        "discount": 13
      },
      {
        "productName": "Remote 74",
        "price": 598,
        "rating": 4.3,
        "availability": "yes",
        "discount": 19
      }
    ],
    "TV": [
      {
        "productName": "Speaker 91",
        "price": 529,
        "rating": 1.7,
        "availability": "no",
        "discount": 20
      },
      {
        "productName": "TV 17",
        "price": 357,
        "rating": 4.9,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "Charger 7",
        "price": 736,
        "rating": 2.8,
        "availability": "no",
        "discount": 14
      },
      {
        "productName": "TV 79",
        "price": 192,
        "rating": 4.3,
        "availability": "no",
        "discount": 5
      },
      {
        "productName": "Charger 25",
        "price": 981,
        "rating": 2.9,
        "availability": "yes",
        "discount": 25
      },
      {
        "productName": "Laptop 83",
        "price": 800,
        "rating": 1.5,
        "availability": "yes",
        "discount": 4
      },
      {
        "productName": "Charger 12",
        "price": 305,
        "rating": 4.0,
        "availability": "no",
        "discount": 49
      },
      {
        "productName": "Computer 15",
        "price": 672,
        "rating": 2.7,
        "availability": "no",
        "discount": 48
      },
      {
        "productName": "Charger 27",
        "price": 880,
        "rating": 4.9,
        "availability": "yes",
        "discount": 12
      },
      {
        "productName": "Earphone 30",
        "price": 559,
        "rating": 4.7,
        "availability": "yes",
        "discount": 14
      }
    ],
    "Earphone": [
      {
        "productName": "Phone 61",
        "price": 625,
        "rating": 4.6,
        "availability": "no",
        "discount": 18
      },
      {
        "productName": "Keypad 22",
        "price": 318,
        "rating": 3.3,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "Pendrive 39",
        "price": 662,
        "rating": 4.9,
        "availability": "no",
        "discount": 20
      },
      {
        "productName": "Computer 78",
        "price": 515,
        "rating": 1.6,
        "availability": "no",
        "discount": 4
      },
      {
        "productName": "Remote 3",
        "price": 397,
        "rating": 2.7,
        "availability": "no",
        "discount": 43
      },
      {
        "productName": "Remote 62",
        "price": 797,
        "rating": 3.3,
        "availability": "yes",
        "discount": 7
      },
      {
        "productName": "Pendrive 38",
        "price": 639,
        "rating": 2.7,
        "availability": "no",
        "discount": 40
      },
      {
        "productName": "Keypad 34",
        "price": 587,
        "rating": 3.4,
        "availability": "yes",
        "discount": 31
      },
      {
        "productName": "Laptop 79",
        "price": 541,
        "rating": 3.4,
        "availability": "yes",
        "discount": 15
      },
      {
        "productName": "Remote 78",
        "price": 107,
        "rating": 4.9,
        "availability": "yes",
        "discount": 37
      }
    ],
    "Tablet": [
      {
        "productName": "Earphone 15",
        "price": 751,
        "rating": 1.9,
        "availability": "yes",
        "discount": 41
      },
      {
        "productName": "Computer 94",
        "price": 136,
        "rating": 2.7,
        "availability": "no",
        "discount": 46
      },
      {
        "productName": "TV 98",
        "price": 773,
        "rating": 3.5,
        "availability": "no",
        "discount": 12
      },
      {
        "productName": "Headset 89",
        "price": 498,
        "rating": 4.3,
        "availability": "no",
        "discount": 23
      },
      {
        "productName": "Charger 35",
        "price": 533,
        "rating": 1.9,
        "availability": "no",
        "discount": 41
      },
      {
        "productName": "Earphone 15",
        "price": 642,
        "rating": 5.0,
        "availability": "yes",
        "discount": 48
      },
      {
        "productName": "Tablet 69",
        "price": 859,
        "rating": 3.2,
        "availability": "no",
        "discount": 40
      },
      {
        "productName": "Bluetooth 60",
        "price": 457,
        "rating": 4.6,
        "availability": "no",
        "discount": 25
      },
      {
        "productName": "Keypad 85",
        "price": 235,
        "rating": 4.8,
        "availability": "yes",
        "discount": 24
      },
      {
        "productName": "Earphone 40",
        "price": 957,
        "rating": 2.5,
        "availability": "yes",
        "discount": 44
      }
    ],
    "Charger": [
      {
        "productName": "Keypad 46",
        "price": 939,
        "rating": 1.4,
        "availability": "no",
        "discount": 37
      },
      {
        "productName": "Pendrive 98",
        "price": 490,
        "rating": 2.7,
        "availability": "no",
        "discount": 0
      },
      {
        "productName": "TV 16",
        "price": 719,
        "rating": 4.3,
        "availability": "no",
        "discount": 27
      },
      {
        "productName": "Laptop 50",
        "price": 991,
        "rating": 3.2,
        "availability": "no",
        "discount": 22
      },
      {
        "productName": "Earphone 92",
        "price": 697,
        "rating": 3.5,
        "availability": "no",
        "discount": 7
      },
      {
        "productName": "Keypad 13",
        "price": 159,
        "rating": 2.0,
        "availability": "no",
        "discount": 35
      },
      {
        "productName": "House 44",
        "price": 595,
        "rating": 1.6,
        "availability": "yes",
        "discount": 34
      },
      {
        "productName": "Keypad 3",
        "price": 524,
        "rating": 1.5,
        "availability": "no",
        "discount": 33
      },
      {
        "productName": "Speaker 66",
        "price": 659,
        "rating": 3.0,
        "availability": "yes",
        "discount": 26
      },
      {
        "productName": "Speaker 97",
        "price": 726,
        "rating": 5.0,
        "availability": "yes",
        "discount": 18
      }
    ],
    "House": [
      {
        "productName": "Computer 56",
        "price": 360,
        "rating": 4.4,
        "availability": "no",
        "discount": 15
      },
      {
        "productName": "Pendrive 31",
        "price": 251,
        "rating": 1.3,
        "availability": "yes",
        "discount": 45
      },
      {
        "productName": "Speaker 57",
        "price": 112,
        "rating": 2.3,
        "availability": "no",
        "discount": 12
      },
      {
        "productName": "PC 14",
        "price": 828,
        "rating": 4.7,
        "availability": "no",
        "discount": 30
      },
      {
        "productName": "Phone 21",
        "price": 290,
        "rating": 1.5,
        "availability": "yes",
        "discount": 33
      },
      {
        "productName": "Computer 82",
        "price": 227,
        "rating": 4.1,
        "availability": "no",
        "discount": 9
      },
      {
        "productName": "Charger 17",
        "price": 789,
        "rating": 1.3,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "Tablet 69",
        "price": 601,
        "rating": 3.8,
        "availability": "no",
        "discount": 40
      },
      {
        "productName": "House 9",
        "price": 281,
        "rating": 4.0,
        "availability": "no",
        "discount": 42
      },
      {
        "productName": "Headset 36",
        "price": 950,
        "rating": 1.6,
        "availability": "no",
        "discount": 35
      }
    ],
    "Keypad": [
      {
        "productName": "Keypad 29",
        "price": 180,
        "rating": 1.4,
        "availability": "no",
        "discount": 30
      },
      {
        "productName": "House 59",
        "price": 387,
        "rating": 2.7,
        "availability": "yes",
        "discount": 41
      },
      {
        "productName": "Remote 83",
        "price": 539,
        "rating": 4.8,
        "availability": "yes",
        "discount": 19
      },
      {
        "productName": "Speaker 48",
        "price": 756,
        "rating": 2.8,
        "availability": "yes",
        "discount": 5
      },
      {
        "productName": "Charger 74",
        "price": 520,
        "rating": 4.6,
        "availability": "no",
        "discount": 21
      },
      {
        "productName": "PC 18",
        "price": 145,
        "rating": 3.7,
        "availability": "no",
        "discount": 47
      },
      {
        "productName": "Headset 31",
        "price": 572,
        "rating": 4.1,
        "availability": "no",
        "discount": 5
      },
      {
        "productName": "Headset 91",
        "price": 183,
        "rating": 2.3,
        "availability": "yes",
        "discount": 25
      },
      {
        "productName": "Keypad 8",
        "price": 996,
        "rating": 4.4,
        "availability": "yes",
        "discount": 4
      },
      {
        "productName": "Speaker 79",
        "price": 985,
        "rating": 3.4,
        "availability": "no",
        "discount": 30
      }
    ],
    "Bluetooth": [
      {
        "productName": "Charger 16",
        "price": 992,
        "rating": 1.7,
        "availability": "yes",
        "discount": 48
      },
      {
        "productName": "Charger 18",
        "price": 303,
        "rating": 4.5,
        "availability": "no",
        "discount": 27
      },
      {
        "productName": "Earphone 6",
        "price": 430,
        "rating": 2.2,
        "availability": "yes",
        "discount": 36
      },
      {
        "productName": "Laptop 55",
        "price": 628,
        "rating": 4.1,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "Laptop 10",
        "price": 878,
        "rating": 3.1,
        "availability": "no",
        "discount": 40
      },
      {
        "productName": "Charger 19",
        "price": 291,
        "rating": 4.9,
        "availability": "yes",
        "discount": 19
      },
      {
        "productName": "Phone 80",
        "price": 702,
        "rating": 4.5,
        "availability": "no",
        "discount": 39
      },
      {
        "productName": "Pendrive 8",
        "price": 779,
        "rating": 2.7,
        "availability": "yes",
        "discount": 8
      },
      {
        "productName": "Headset 57",
        "price": 199,
        "rating": 3.9,
        "availability": "no",
        "discount": 4
      },
      {
        "productName": "House 37",
        "price": 668,
        "rating": 2.7,
        "availability": "yes",
        "discount": 43
      }
    ],
    "Pendrive": [
      {
        "productName": "House 29",
        "price": 529,
        "rating": 2.7,
        "availability": "yes",
        "discount": 31
      },
      {
        "productName": "Speaker 17",
        "price": 182,
        "rating": 2.3,
        "availability": "yes",
        "discount": 47
      },
      {
        "productName": "Computer 21",
        "price": 359,
        "rating": 3.7,
        "availability": "no",
        "discount": 5
      },
      {
        "productName": "Remote 7",
        "price": 664,
        "rating": 2.4,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "PC 41",
        "price": 874,
        "rating": 2.1,
        "availability": "yes",
        "discount": 12
      },
      {
        "productName": "Tablet 61",
        "price": 448,
        "rating": 4.7,
        "availability": "yes",
        "discount": 24
      },
      {
        "productName": "Charger 11",
        "price": 100,
        "rating": 5.0,
        "availability": "yes",
        "discount": 37
      },
      {
        "productName": "Headset 4",
        "price": 805,
        "rating": 3.5,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "Bluetooth 47",
        "price": 396,
        "rating": 4.8,
        "availability": "yes",
        "discount": 42
      },
      {
        "productName": "Speaker 37",
        "price": 181,
        "rating": 4.2,
        "availability": "no",
        "discount": 25
      }
    ],
    "Remote": [
      {
        "productName": "Phone 80",
        "price": 564,
        "rating": 4.9,
        "availability": "no",
        "discount": 17
      },
      {
        "productName": "PC 38",
        "price": 410,
        "rating": 2.4,
        "availability": "yes",
        "discount": 49
      },
      {
        "productName": "Bluetooth 86",
        "price": 757,
        "rating": 2.5,
        "availability": "yes",
        "discount": 30
      },
      {
        "productName": "House 65",
        "price": 136,
        "rating": 2.3,
        "availability": "yes",
        "discount": 35
      },
      {
        "productName": "TV 71",
        "price": 522,
        "rating": 2.7,
        "availability": "yes",
        "discount": 45
      },
      {
        "productName": "Earphone 21",
        "price": 844,
        "rating": 4.9,
        "availability": "no",
        "discount": 36
      },
      {
        "productName": "TV 48",
        "price": 759,
        "rating": 4.1,
        "availability": "yes",
        "discount": 47
      },
      {
        "productName": "TV 26",
        "price": 984,
        "rating": 4.9,
        "availability": "yes",
        "discount": 30
      },
      {
        "productName": "Speaker 20",
        "price": 434,
        "rating": 3.9,
        "availability": "yes",
        "discount": 25
      },
      {
        "productName": "Tablet 64",
        "price": 445,
        "rating": 2.8,
        "availability": "yes",
        "discount": 28
      }
    ],
    "Speaker": [
      {
        "productName": "Earphone 51",
        "price": 964,
        "rating": 2.9,
        "availability": "yes",
        "discount": 30
      },
      {
        "productName": "Earphone 1",
        "price": 380,
        "rating": 1.8,
        "availability": "no",
        "discount": 35
      },
      {
        "productName": "Remote 32",
        "price": 508,
        "rating": 4.8,
        "availability": "no",
        "discount": 25
      },
      {
        "productName": "Remote 16",
        "price": 756,
        "rating": 3.0,
        "availability": "no",
        "discount": 7
      },
      {
        "productName": "Laptop 26",
        "price": 376,
        "rating": 2.3,
        "availability": "no",
        "discount": 45
      },
      {
        "productName": "Computer 33",
        "price": 665,
        "rating": 4.1,
        "availability": "no",
        "discount": 21
      },
      {
        "productName": "Keypad 96",
        "price": 738,
        "rating": 3.3,
        "availability": "no",
        "discount": 47
      },
      {
        "productName": "Charger 66",
        "price": 129,
        "rating": 1.1,
        "availability": "no",
        "discount": 15
      },
      {
        "productName": "Pendrive 70",
        "price": 364,
        "rating": 2.1,
        "availability": "yes",
        "discount": 33
      },
      {
        "productName": "Pendrive 63",
        "price": 786,
        "rating": 2.4,
        "availability": "yes",
        "discount": 47
      }
    ],
    "Headset": [
      {
        "productName": "Remote 98",
        "price": 748,
        "rating": 2.7,
        "availability": "no",
        "discount": 1
      },
      {
        "productName": "Computer 36",
        "price": 397,
        "rating": 3.8,
        "availability": "no",
        "discount": 2
      },
      {
        "productName": "Laptop 18",
        "price": 431,
        "rating": 4.4,
        "availability": "no",
        "discount": 14
      },
      {
        "productName": "PC 74",
        "price": 348,
        "rating": 1.6,
        "availability": "no",
        "discount": 17
      },
      {
        "productName": "Earphone 58",
        "price": 272,
        "rating": 2.5,
        "availability": "no",
        "discount": 7
      },
      {
        "productName": "PC 80",
        "price": 1000,
        "rating": 3.3,
        "availability": "no",
        "discount": 40
      },
      {
        "productName": "TV 74",
        "price": 808,
        "rating": 4.8,
        "availability": "no",
        "discount": 31
      },
      {
        "productName": "TV 71",
        "price": 486,
        "rating": 3.7,
        "availability": "no",
        "discount": 11
      },
      {
        "productName": "PC 85",
        "price": 944,
        "rating": 4.4,
        "availability": "no",
        "discount": 50
      },
      {
        "productName": "Earphone 40",
        "price": 391,
        "rating": 4.6,
        "availability": "no",
        "discount": 39
      }
    ],
    "Laptop": [
      {
        "productName": "Computer 3",
        "price": 671,
        "rating": 3.3,
        "availability": "no",
        "discount": 35
      },
      {
        "productName": "Bluetooth 16",
        "price": 154,
        "rating": 2.5,
        "availability": "no",
        "discount": 0
      },
      {
        "productName": "Bluetooth 5",
        "price": 230,
        "rating": 1.8,
        "availability": "yes",
        "discount": 50
      },
      {
        "productName": "Bluetooth 86",
        "price": 160,
        "rating": 3.9,
        "availability": "no",
        "discount": 38
      },
      {
        "productName": "Phone 72",
        "price": 497,
        "rating": 1.8,
        "availability": "no",
        "discount": 40
      },
      {
        "productName": "Headset 47",
        "price": 700,
        "rating": 4.9,
        "availability": "yes",
        "discount": 36
      },
      {
        "productName": "House 1",
        "price": 854,
        "rating": 4.3,
        "availability": "no",
        "discount": 30
      },
      {
        "productName": "PC 5",
        "price": 617,
        "rating": 4.5,
        "availability": "yes",
        "discount": 29
      },
      {
        "productName": "Remote 8",
        "price": 914,
        "rating": 3.5,
        "availability": "no",
        "discount": 25
      },
      {
        "productName": "Phone 14",
        "price": 216,
        "rating": 1.0,
        "availability": "no",
        "discount": 20
      }
    ],
    "PC": [
      {
        "productName": "Charger 55",
        "price": 870,
        "rating": 3.0,
        "availability": "yes",
        "discount": 18
      },
      {
        "productName": "Charger 31",
        "price": 713,
        "rating": 3.6,
        "availability": "no",
        "discount": 35
      },
      {
        "productName": "Phone 64",
        "price": 212,
        "rating": 2.7,
        "availability": "yes",
        "discount": 39
      },
      {
        "productName": "Remote 94",
        "price": 769,
        "rating": 1.7,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "Pendrive 76",
        "price": 402,
        "rating": 4.8,
        "availability": "no",
        "discount": 2
      },
      {
        "productName": "House 99",
        "price": 760,
        "rating": 1.3,
        "availability": "no",
        "discount": 35
      },
      {
        "productName": "Charger 22",
        "price": 256,
        "rating": 2.9,
        "availability": "yes",
        "discount": 49
      },
      {
        "productName": "PC 79",
        "price": 940,
        "rating": 2.4,
        "availability": "no",
        "discount": 11
      },
      {
        "productName": "Earphone 63",
        "price": 197,
        "rating": 4.2,
        "availability": "yes",
        "discount": 18
      },
      {
        "productName": "Keypad 7",
        "price": 491,
        "rating": 4.4,
        "availability": "no",
        "discount": 38
      }
    ]
  },
  "SNP": {
    "Phone": [
      {
        "productName": "Computer 16",
        "price": 573,
        "rating": 2.1,
        "availability": "no",
        "discount": 12
      },
      {
        "productName": "Computer 11",
        "price": 252,
        "rating": 1.3,
        "availability": "no",
        "discount": 36
      },
      {
        "productName": "Phone 2",
        "price": 159,
        "rating": 5.0,
        "availability": "yes",
        "discount": 49
      },
      {
        "productName": "Bluetooth 56",
        "price": 554,
        "rating": 4.2,
        "availability": "yes",
        "discount": 35
      },
      {
        "productName": "Laptop 66",
        "price": 138,
        "rating": 2.9,
        "availability": "no",
        "discount": 38
      },
      {
        "productName": "House 47",
        "price": 462,
        "rating": 2.3,
        "availability": "yes",
        "discount": 4
      },
      {
        "productName": "Phone 10",
        "price": 905,
        "rating": 1.3,
        "availability": "no",
        "discount": 50
      },
      {
        "productName": "Earphone 16",
        "price": 320,
        "rating": 4.6,
        "availability": "no",
        "discount": 28
      },
      {
        "productName": "Keypad 76",
        "price": 656,
        "rating": 3.0,
        "availability": "no",
        "discount": 14
      },
      {
        "productName": "Tablet 74",
        "price": 756,
        "rating": 4.2,
        "availability": "no",
        "discount": 5
      }
    ],
    "Computer": [
      {
        "productName": "Earphone 14",
        "price": 696,
        "rating": 3.0,
        "availability": "no",
        "discount": 7
      },
      {
        "productName": "Charger 12",
        "price": 401,
        "rating": 2.3,
        "availability": "no",
        "discount": 45
      },
      {
        "productName": "House 24",
        "price": 291,
        "rating": 3.8,
        "availability": "yes",
        "discount": 35
      },
      {
        "productName": "Remote 47",
        "price": 558,
        "rating": 2.5,
        "availability": "no",
        "discount": 23
      },
      {
        "productName": "Pendrive 30",
        "price": 116,
        "rating": 4.5,
        "availability": "yes",
        "discount": 45
      },
      {
        "productName": "Bluetooth 82",
        "price": 385,
        "rating": 3.4,
        "availability": "yes",
        "discount": 47
      },
      {
        "productName": "TV 29",
        "price": 949,
        "rating": 4.4,
        "availability": "no",
        "discount": 35
      },
      {
        "productName": "Bluetooth 71",
        "price": 585,
        "rating": 1.6,
        "availability": "no",
        "discount": 34
      },
      {
        "productName": "PC 34",
        "price": 238,
        "rating": 2.0,
        "availability": "yes",
        "discount": 42
      },
      {
        "productName": "Speaker 40",
        "price": 925,
        "rating": 4.2,
        "availability": "no",
        "discount": 44
      }
    ],
    "TV": [
      {
        "productName": "Phone 21",
        "price": 301,
        "rating": 1.2,
        "availability": "no",
        "discount": 1
      },
      {
        "productName": "House 59",
        "price": 157,
        "rating": 3.3,
        "availability": "yes",
        "discount": 1
      },
      {
        "productName": "House 12",
        "price": 333,
        "rating": 2.3,
        "availability": "no",
        "discount": 2
      },
      {
        "productName": "Laptop 84",
        "price": 401,
        "rating": 3.0,
        "availability": "no",
        "discount": 17
      },
      {
        "productName": "TV 58",
        "price": 837,
        "rating": 3.6,
        "availability": "no",
        "discount": 0
      },
      {
        "productName": "Bluetooth 56",
        "price": 481,
        "rating": 1.6,
        "availability": "yes",
        "discount": 6
      },
      {
        "productName": "Headset 42",
        "price": 811,
        "rating": 3.2,
        "availability": "no",
        "discount": 15
      },
      {
        "productName": "Phone 88",
        "price": 529,
        "rating": 4.7,
        "availability": "no",
        "discount": 1
      },
      {
        "productName": "Charger 54",
        "price": 675,
        "rating": 4.5,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "House 88",
        "price": 624,
        "rating": 2.7,
        "availability": "yes",
        "discount": 24
      }
    ],
    "Earphone": [
      {
        "productName": "Laptop 55",
        "price": 155,
        "rating": 3.2,
        "availability": "yes",
        "discount": 25
      },
      {
        "productName": "Phone 20",
        "price": 322,
        "rating": 2.8,
        "availability": "yes",
        "discount": 12
      },
      {
        "productName": "Laptop 33",
        "price": 400,
        "rating": 2.7,
        "availability": "no",
        "discount": 35
      },
      {
        "productName": "TV 77",
        "price": 379,
        "rating": 4.8,
        "availability": "yes",
        "discount": 13
      },
      {
        "productName": "Tablet 22",
        "price": 432,
        "rating": 1.9,
        "availability": "no",
        "discount": 30
      },
      {
        "productName": "Pendrive 51",
        "price": 623,
        "rating": 2.3,
        "availability": "yes",
        "discount": 44
      },
      {
        "productName": "Charger 5",
        "price": 657,
        "rating": 2.0,
        "availability": "yes",
        "discount": 44
      },
      {
        "productName": "Laptop 8",
        "price": 171,
        "rating": 2.7,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "Phone 70",
        "price": 403,
        "rating": 4.7,
        "availability": "yes",
        "discount": 50
      },
      {
        "productName": "Headset 89",
        "price": 154,
        "rating": 3.9,
        "availability": "no",
        "discount": 22
      }
    ],
    "Tablet": [
      {
        "productName": "Tablet 68",
        "price": 697,
        "rating": 1.8,
        "availability": "yes",
        "discount": 18
      },
      {
        "productName": "Remote 55",
        "price": 974,
        "rating": 1.7,
        "availability": "yes",
        "discount": 13
      },
      {
        "productName": "TV 11",
        "price": 732,
        "rating": 2.2,
        "availability": "no",
        "discount": 23
      },
      {
        "productName": "Speaker 9",
        "price": 893,
        "rating": 2.3,
        "availability": "no",
        "discount": 28
      },
      {
        "productName": "Pendrive 22",
        "price": 636,
        "rating": 1.4,
        "availability": "yes",
        "discount": 6
      },
      {
        "productName": "Keypad 97",
        "price": 370,
        "rating": 3.0,
        "availability": "yes",
        "discount": 45
      },
      {
        "productName": "Earphone 32",
        "price": 122,
        "rating": 1.6,
        "availability": "no",
        "discount": 16
      },
      {
        "productName": "TV 55",
        "price": 263,
        "rating": 4.3,
        "availability": "yes",
        "discount": 18
      },
      {
        "productName": "Remote 11",
        "price": 499,
        "rating": 1.7,
        "availability": "no",
        "discount": 50
      },
      {
        "productName": "Tablet 93",
        "price": 812,
        "rating": 3.1,
        "availability": "yes",
        "discount": 14
      }
    ],
    "Charger": [
      {
        "productName": "Speaker 60",
        "price": 728,
        "rating": 4.9,
        "availability": "no",
        "discount": 42
      },
      {
        "productName": "Speaker 9",
        "price": 669,
        "rating": 2.3,
        "availability": "yes",
        "discount": 33
      },
      {
        "productName": "TV 47",
        "price": 278,
        "rating": 2.1,
        "availability": "yes",
        "discount": 19
      },
      {
        "productName": "Laptop 31",
        "price": 627,
        "rating": 4.1,
        "availability": "no",
        "discount": 1
      },
      {
        "productName": "TV 90",
        "price": 801,
        "rating": 4.5,
        "availability": "yes",
        "discount": 11
      },
      {
        "productName": "Speaker 26",
        "price": 471,
        "rating": 4.8,
        "availability": "yes",
        "discount": 49
      },
      {
        "productName": "Computer 92",
        "price": 712,
        "rating": 4.8,
        "availability": "no",
        "discount": 36
      },
      {
        "productName": "Laptop 46",
        "price": 934,
        "rating": 2.0,
        "availability": "no",
        "discount": 48
      },
      {
        "productName": "Charger 89",
        "price": 479,
        "rating": 2.3,
        "availability": "yes",
        "discount": 25
      },
      {
        "productName": "Tablet 62",
        "price": 872,
        "rating": 3.0,
        "availability": "yes",
        "discount": 46
      }
    ],
    "House": [
      {
        "productName": "Pendrive 13",
        "price": 536,
        "rating": 3.6,
        "availability": "yes",
        "discount": 11
      },
      {
        "productName": "Charger 100",
        "price": 771,
        "rating": 2.0,
        "availability": "no",
        "discount": 36
      },
      {
        "productName": "Speaker 80",
        "price": 455,
        "rating": 1.3,
        "availability": "yes",
        "discount": 22
      },
      {
        "productName": "Headset 51",
        "price": 315,
        "rating": 2.7,
        "availability": "no",
        "discount": 4
      },
      {
        "productName": "Laptop 8",
        "price": 962,
        "rating": 2.3,
        "availability": "no",
        "discount": 36
      },
      {
        "productName": "Remote 76",
        "price": 285,
        "rating": 2.6,
        "availability": "yes",
        "discount": 30
      },
      {
        "productName": "PC 5",
        "price": 790,
        "rating": 4.5,
        "availability": "no",
        "discount": 46
      },
      {
        "productName": "Bluetooth 16",
        "price": 757,
        "rating": 2.2,
        "availability": "yes",
        "discount": 10
      },
      {
        "productName": "Pendrive 88",
        "price": 329,
        "rating": 3.8,
        "availability": "yes",
        "discount": 42
      },
      {
        "productName": "Tablet 58",
        "price": 797,
        "rating": 4.7,
        "availability": "no",
        "discount": 22
      }
    ],
    "Keypad": [
      {
        "productName": "Speaker 27",
        "price": 360,
        "rating": 1.9,
        "availability": "yes",
        "discount": 31
      },
      {
        "productName": "PC 57",
        "price": 460,
        "rating": 3.0,
        "availability": "no",
        "discount": 38
      },
      {
        "productName": "Keypad 10",
        "price": 892,
        "rating": 4.7,
        "availability": "yes",
        "discount": 15
      },
      {
        "productName": "Remote 96",
        "price": 551,
        "rating": 4.8,
        "availability": "no",
        "discount": 6
      },
      {
        "productName": "House 24",
        "price": 454,
        "rating": 4.7,
        "availability": "yes",
        "discount": 29
      },
      {
        "productName": "House 4",
        "price": 645,
        "rating": 3.2,
        "availability": "yes",
        "discount": 13
      },
      {
        "productName": "Bluetooth 60",
        "price": 302,
        "rating": 3.0,
        "availability": "yes",
        "discount": 27
      },
      {
        "productName": "House 80",
        "price": 226,
        "rating": 1.6,
        "availability": "no",
        "discount": 28
      },
      {
        "productName": "Tablet 70",
        "price": 983,
        "rating": 4.8,
        "availability": "yes",
        "discount": 41
      },
      {
        "productName": "Bluetooth 26",
        "price": 888,
        "rating": 1.9,
        "availability": "no",
        "discount": 25
      }
    ],
    "Bluetooth": [
      {
        "productName": "House 79",
        "price": 299,
        "rating": 4.1,
        "availability": "yes",
        "discount": 29
      },
      {
        "productName": "Phone 21",
        "price": 857,
        "rating": 1.2,
        "availability": "no",
        "discount": 28
      },
      {
        "productName": "Charger 65",
        "price": 116,
        "rating": 4.4,
        "availability": "yes",
        "discount": 13
      },
      {
        "productName": "Laptop 14",
        "price": 475,
        "rating": 2.4,
        "availability": "yes",
        "discount": 19
      },
      {
        "productName": "Charger 23",
        "price": 826,
        "rating": 4.9,
        "availability": "yes",
        "discount": 48
      },
      {
        "productName": "Computer 28",
        "price": 235,
        "rating": 4.8,
        "availability": "no",
        "discount": 18
      },
      {
        "productName": "PC 89",
        "price": 868,
        "rating": 2.9,
        "availability": "yes",
        "discount": 9
      },
      {
        "productName": "TV 66",
        "price": 464,
        "rating": 3.0,
        "availability": "no",
        "discount": 19
      },
      {
        "productName": "Earphone 44",
        "price": 161,
        "rating": 4.0,
        "availability": "no",
        "discount": 39
      },
      {
        "productName": "PC 80",
        "price": 973,
        "rating": 3.7,
        "availability": "yes",
        "discount": 33
      }
    ],
    "Pendrive": [
      {
        "productName": "PC 87",
        "price": 433,
        "rating": 1.8,
        "availability": "no",
        "discount": 37
      },
      {
        "productName": "Phone 25",
        "price": 524,
        "rating": 4.0,
        "availability": "no",
        "discount": 37
      },
      {
        "productName": "Bluetooth 45",
        "price": 897,
        "rating": 2.5,
        "availability": "no",
        "discount": 2
      },
      {
        "productName": "House 28",
        "price": 360,
        "rating": 4.6,
        "availability": "no",
        "discount": 39
      },
      {
        "productName": "Tablet 96",
        "price": 921,
        "rating": 1.7,
        "availability": "yes",
        "discount": 19
      },
      {
        "productName": "Bluetooth 96",
        "price": 132,
        "rating": 4.4,
        "availability": "yes",
        "discount": 26
      },
      {
        "productName": "Phone 43",
        "price": 140,
        "rating": 4.0,
        "availability": "yes",
        "discount": 9
      },
      {
        "productName": "Pendrive 5",
        "price": 946,
        "rating": 1.4,
        "availability": "no",
        "discount": 9
      },
      {
        "productName": "Bluetooth 70",
        "price": 372,
        "rating": 2.2,
        "availability": "no",
        "discount": 15
      },
      {
        "productName": "Charger 55",
        "price": 816,
        "rating": 4.0,
        "availability": "no",
        "discount": 4
      }
    ],
    "Remote": [
      {
        "productName": "PC 60",
        "price": 584,
        "rating": 1.8,
        "availability": "yes",
        "discount": 39
      },
      {
        "productName": "Computer 95",
        "price": 144,
        "rating": 1.1,
        "availability": "yes",
        "discount": 35
      },
      {
        "productName": "Keypad 51",
        "price": 199,
        "rating": 4.0,
        "availability": "yes",
        "discount": 29
      },
      {
        "productName": "Keypad 45",
        "price": 146,
        "rating": 4.2,
        "availability": "yes",
        "discount": 6
      },
      {
        "productName": "Tablet 15",
        "price": 882,
        "rating": 2.5,
        "availability": "no",
        "discount": 22
      },
      {
        "productName": "Bluetooth 1",
        "price": 460,
        "rating": 4.6,
        "availability": "no",
        "discount": 33
      },
      {
        "productName": "PC 65",
        "price": 671,
        "rating": 3.5,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "Headset 51",
        "price": 164,
        "rating": 4.6,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "House 16",
        "price": 263,
        "rating": 2.9,
        "availability": "yes",
        "discount": 20
      },
      {
        "productName": "PC 88",
        "price": 357,
        "rating": 3.7,
        "availability": "no",
        "discount": 4
      }
    ],
    "Speaker": [
      {
        "productName": "TV 50",
        "price": 774,
        "rating": 1.3,
        "availability": "yes",
        "discount": 24
      },
      {
        "productName": "Bluetooth 23",
        "price": 689,
        "rating": 4.8,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "Pendrive 7",
        "price": 402,
        "rating": 1.1,
        "availability": "no",
        "discount": 42
      },
      {
        "productName": "Tablet 99",
        "price": 394,
        "rating": 4.3,
        "availability": "no",
        "discount": 16
      },
      {
        "productName": "Remote 53",
        "price": 403,
        "rating": 2.5,
        "availability": "no",
        "discount": 50
      },
      {
        "productName": "Headset 7",
        "price": 415,
        "rating": 1.2,
        "availability": "no",
        "discount": 26
      },
      {
        "productName": "Charger 89",
        "price": 833,
        "rating": 3.1,
        "availability": "yes",
        "discount": 35
      },
      {
        "productName": "Earphone 71",
        "price": 241,
        "rating": 4.3,
        "availability": "yes",
        "discount": 1
      },
      {
        "productName": "Tablet 25",
        "price": 577,
        "rating": 4.5,
        "availability": "no",
        "discount": 16
      },
      {
        "productName": "PC 17",
        "price": 811,
        "rating": 2.4,
        "availability": "yes",
        "discount": 33
      }
    ],
    "Headset": [
      {
        "productName": "Laptop 27",
        "price": 465,
        "rating": 1.5,
        "availability": "no",
        "discount": 4
      },
      {
        "productName": "Phone 52",
        "price": 349,
        "rating": 3.1,
        "availability": "no",
        "discount": 50
      },
      {
        "productName": "PC 98",
        "price": 366,
        "rating": 1.5,
        "availability": "no",
        "discount": 23
      },
      {
        "productName": "Phone 8",
        "price": 933,
        "rating": 3.8,
        "availability": "no",
        "discount": 50
      },
      {
        "productName": "PC 11",
        "price": 771,
        "rating": 4.2,
        "availability": "yes",
        "discount": 37
      },
      {
        "productName": "Tablet 92",
        "price": 386,
        "rating": 2.5,
        "availability": "no",
        "discount": 25
      },
      {
        "productName": "Charger 35",
        "price": 570,
        "rating": 3.0,
        "availability": "yes",
        "discount": 44
      },
      {
        "productName": "Earphone 79",
        "price": 470,
        "rating": 3.3,
        "availability": "yes",
        "discount": 1
      },
      {
        "productName": "Earphone 90",
        "price": 588,
        "rating": 3.3,
        "availability": "yes",
        "discount": 38
      },
      {
        "productName": "Remote 99",
        "price": 633,
        "rating": 4.1,
        "availability": "yes",
        "discount": 12
      }
    ],
    "Laptop": [
      {
        "productName": "Remote 16",
        "price": 144,
        "rating": 4.3,
        "availability": "no",
        "discount": 3
      },
      {
        "productName": "Pendrive 31",
        "price": 146,
        "rating": 3.3,
        "availability": "yes",
        "discount": 24
      },
      {
        "productName": "House 86",
        "price": 361,
        "rating": 4.3,
        "availability": "yes",
        "discount": 19
      },
      {
        "productName": "House 100",
        "price": 245,
        "rating": 2.9,
        "availability": "no",
        "discount": 8
      },
      {
        "productName": "Laptop 41",
        "price": 848,
        "rating": 1.8,
        "availability": "no",
        "discount": 19
      },
      {
        "productName": "Earphone 64",
        "price": 830,
        "rating": 3.8,
        "availability": "yes",
        "discount": 41
      },
      {
        "productName": "Tablet 46",
        "price": 674,
        "rating": 3.5,
        "availability": "yes",
        "discount": 2
      },
      {
        "productName": "Computer 42",
        "price": 186,
        "rating": 2.9,
        "availability": "yes",
        "discount": 8
      },
      {
        "productName": "Laptop 33",
        "price": 512,
        "rating": 3.0,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "TV 4",
        "price": 782,
        "rating": 4.7,
        "availability": "yes",
        "discount": 17
      }
    ],
    "PC": [
      {
        "productName": "PC 45",
        "price": 963,
        "rating": 4.4,
        "availability": "yes",
        "discount": 32
      },
      {
        "productName": "TV 38",
        "price": 130,
        "rating": 3.1,
        "availability": "no",
        "discount": 3
      },
      {
        "productName": "Charger 78",
        "price": 370,
        "rating": 4.1,
        "availability": "no",
        "discount": 12
      },
      {
        "productName": "Charger 22",
        "price": 804,
        "rating": 3.1,
        "availability": "yes",
        "discount": 41
      },
      {
        "productName": "Computer 14",
        "price": 458,
        "rating": 4.1,
        "availability": "yes",
        "discount": 30
      },
      {
        "productName": "Remote 11",
        "price": 712,
        "rating": 4.2,
        "availability": "no",
        "discount": 24
      },
      {
        "productName": "PC 61",
        "price": 984,
        "rating": 3.2,
        "availability": "no",
        "discount": 13
      },
      {
        "productName": "Headset 40",
        "price": 371,
        "rating": 4.9,
        "availability": "yes",
        "discount": 1
      },
      {
        "productName": "Pendrive 93",
        "price": 618,
        "rating": 3.9,
        "availability": "yes",
        "discount": 46
      },
      {
        "productName": "Keypad 42",
        "price": 343,
        "rating": 1.2,
        "availability": "no",
        "discount": 47
      }
    ]
  },
  "HYN": {
    "Phone": [
      {
        "productName": "Pendrive 94",
        "price": 895,
        "rating": 3.1,
        "availability": "no",
        "discount": 28
      },
      {
        "productName": "Headset 96",
        "price": 191,
        "rating": 2.4,
        "availability": "no",
        "discount": 22
      },
      {
        "productName": "Earphone 10",
        "price": 416,
        "rating": 4.1,
        "availability": "no",
        "discount": 42
      },
      {
        "productName": "Computer 91",
        "price": 651,
        "rating": 2.9,
        "availability": "no",
        "discount": 21
      },
      {
        "productName": "Pendrive 78",
        "price": 617,
        "rating": 2.7,
        "availability": "yes",
        "discount": 1
      },
      {
        "productName": "Charger 56",
        "price": 239,
        "rating": 3.8,
        "availability": "yes",
        "discount": 8
      },
      {
        "productName": "Charger 85",
        "price": 864,
        "rating": 4.0,
        "availability": "no",
        "discount": 33
      },
      {
        "productName": "PC 91",
        "price": 886,
        "rating": 2.5,
        "availability": "no",
        "discount": 43
      },
      {
        "productName": "Pendrive 16",
        "price": 380,
        "rating": 4.3,
        "availability": "no",
        "discount": 0
      },
      {
        "productName": "Headset 11",
        "price": 353,
        "rating": 2.4,
        "availability": "yes",
        "discount": 35
      }
    ],
    "Computer": [
      {
        "productName": "House 80",
        "price": 396,
        "rating": 1.7,
        "availability": "yes",
        "discount": 32
      },
      {
        "productName": "Computer 89",
        "price": 241,
        "rating": 1.3,
        "availability": "yes",
        "discount": 11
      },
      {
        "productName": "Earphone 85",
        "price": 690,
        "rating": 1.1,
        "availability": "yes",
        "discount": 0
      },
      {
        "productName": "Computer 38",
        "price": 429,
        "rating": 2.6,
        "availability": "yes",
        "discount": 13
      },
      {
        "productName": "Remote 67",
        "price": 893,
        "rating": 1.6,
        "availability": "yes",
        "discount": 20
      },
      {
        "productName": "Headset 39",
        "price": 183,
        "rating": 3.6,
        "availability": "yes",
        "discount": 46
      },
      {
        "productName": "TV 13",
        "price": 257,
        "rating": 1.1,
        "availability": "no",
        "discount": 0
      },
      {
        "productName": "Laptop 65",
        "price": 157,
        "rating": 2.4,
        "availability": "yes",
        "discount": 46
      },
      {
        "productName": "Tablet 59",
        "price": 731,
        "rating": 4.1,
        "availability": "yes",
        "discount": 0
      },
      {
        "productName": "Earphone 91",
        "price": 312,
        "rating": 2.5,
        "availability": "no",
        "discount": 32
      }
    ],
    "TV": [
      {
        "productName": "Pendrive 68",
        "price": 614,
        "rating": 3.2,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "Headset 99",
        "price": 953,
        "rating": 1.4,
        "availability": "no",
        "discount": 42
      },
      {
        "productName": "Speaker 4",
        "price": 181,
        "rating": 1.7,
        "availability": "no",
        "discount": 41
      },
      {
        "productName": "Earphone 94",
        "price": 210,
        "rating": 4.1,
        "availability": "yes",
        "discount": 0
      },
      {
        "productName": "Earphone 32",
        "price": 335,
        "rating": 3.9,
        "availability": "no",
        "discount": 45
      },
      {
        "productName": "Earphone 89",
        "price": 320,
        "rating": 4.1,
        "availability": "yes",
        "discount": 21
      },
      {
        "productName": "Phone 77",
        "price": 156,
        "rating": 2.8,
        "availability": "yes",
        "discount": 36
      },
      {
        "productName": "Charger 7",
        "price": 792,
        "rating": 2.1,
        "availability": "yes",
        "discount": 29
      },
      {
        "productName": "Pendrive 72",
        "price": 663,
        "rating": 3.3,
        "availability": "yes",
        "discount": 10
      },
      {
        "productName": "TV 94",
        "price": 695,
        "rating": 2.3,
        "availability": "yes",
        "discount": 30
      }
    ],
    "Earphone": [
      {
        "productName": "Charger 42",
        "price": 239,
        "rating": 4.6,
        "availability": "yes",
        "discount": 50
      },
      {
        "productName": "Remote 46",
        "price": 509,
        "rating": 4.1,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "Phone 60",
        "price": 177,
        "rating": 4.4,
        "availability": "yes",
        "discount": 44
      },
      {
        "productName": "Phone 45",
        "price": 159,
        "rating": 2.2,
        "availability": "yes",
        "discount": 32
      },
      {
        "productName": "PC 23",
        "price": 117,
        "rating": 2.8,
        "availability": "yes",
        "discount": 22
      },
      {
        "productName": "Computer 1",
        "price": 651,
        "rating": 3.6,
        "availability": "no",
        "discount": 14
      },
      {
        "productName": "Speaker 16",
        "price": 797,
        "rating": 5.0,
        "availability": "yes",
        "discount": 26
      },
      {
        "productName": "House 34",
        "price": 494,
        "rating": 1.7,
        "availability": "no",
        "discount": 50
      },
      {
        "productName": "Charger 56",
        "price": 348,
        "rating": 3.4,
        "availability": "yes",
        "discount": 22
      },
      {
        "productName": "House 43",
        "price": 937,
        "rating": 3.8,
        "availability": "yes",
        "discount": 5
      }
    ],
    "Tablet": [
      {
        "productName": "Remote 53",
        "price": 635,
        "rating": 1.4,
        "availability": "no",
        "discount": 13
      },
      {
        "productName": "Charger 32",
        "price": 601,
        "rating": 4.7,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "Keypad 54",
        "price": 523,
        "rating": 1.1,
        "availability": "yes",
        "discount": 21
      },
      {
        "productName": "Keypad 5",
        "price": 295,
        "rating": 1.3,
        "availability": "no",
        "discount": 37
      },
      {
        "productName": "Computer 53",
        "price": 715,
        "rating": 4.4,
        "availability": "no",
        "discount": 24
      },
      {
        "productName": "Phone 99",
        "price": 958,
        "rating": 3.8,
        "availability": "yes",
        "discount": 21
      },
      {
        "productName": "Remote 94",
        "price": 998,
        "rating": 2.2,
        "availability": "no",
        "discount": 32
      },
      {
        "productName": "Keypad 7",
        "price": 457,
        "rating": 1.7,
        "availability": "yes",
        "discount": 22
      },
      {
        "productName": "Speaker 12",
        "price": 220,
        "rating": 3.7,
        "availability": "yes",
        "discount": 34
      },
      {
        "productName": "Speaker 15",
        "price": 231,
        "rating": 4.3,
        "availability": "no",
        "discount": 36
      }
    ],
    "Charger": [
      {
        "productName": "House 2",
        "price": 920,
        "rating": 4.9,
        "availability": "yes",
        "discount": 45
      },
      {
        "productName": "PC 10",
        "price": 525,
        "rating": 3.6,
        "availability": "no",
        "discount": 46
      },
      {
        "productName": "Laptop 85",
        "price": 633,
        "rating": 4.6,
        "availability": "no",
        "discount": 45
      },
      {
        "productName": "House 68",
        "price": 435,
        "rating": 3.2,
        "availability": "no",
        "discount": 27
      },
      {
        "productName": "Charger 2",
        "price": 693,
        "rating": 1.5,
        "availability": "yes",
        "discount": 2
      },
      {
        "productName": "TV 31",
        "price": 978,
        "rating": 3.8,
        "availability": "no",
        "discount": 21
      },
      {
        "productName": "Speaker 46",
        "price": 454,
        "rating": 3.2,
        "availability": "no",
        "discount": 49
      },
      {
        "productName": "Laptop 89",
        "price": 833,
        "rating": 1.6,
        "availability": "yes",
        "discount": 24
      },
      {
        "productName": "Bluetooth 39",
        "price": 659,
        "rating": 4.8,
        "availability": "no",
        "discount": 40
      },
      {
        "productName": "Charger 19",
        "price": 594,
        "rating": 4.6,
        "availability": "no",
        "discount": 20
      }
    ],
    "House": [
      {
        "productName": "Pendrive 7",
        "price": 768,
        "rating": 4.7,
        "availability": "no",
        "discount": 21
      },
      {
        "productName": "Bluetooth 32",
        "price": 500,
        "rating": 4.2,
        "availability": "no",
        "discount": 50
      },
      {
        "productName": "Remote 24",
        "price": 463,
        "rating": 2.3,
        "availability": "yes",
        "discount": 12
      },
      {
        "productName": "House 54",
        "price": 593,
        "rating": 4.8,
        "availability": "no",
        "discount": 33
      },
      {
        "productName": "PC 32",
        "price": 694,
        "rating": 2.5,
        "availability": "no",
        "discount": 36
      },
      {
        "productName": "Keypad 23",
        "price": 975,
        "rating": 4.0,
        "availability": "no",
        "discount": 35
      },
      {
        "productName": "Earphone 31",
        "price": 219,
        "rating": 3.1,
        "availability": "no",
        "discount": 22
      },
      {
        "productName": "Laptop 28",
        "price": 618,
        "rating": 4.9,
        "availability": "yes",
        "discount": 46
      },
      {
        "productName": "Keypad 18",
        "price": 194,
        "rating": 2.8,
        "availability": "yes",
        "discount": 31
      },
      {
        "productName": "Remote 4",
        "price": 736,
        "rating": 4.9,
        "availability": "yes",
        "discount": 9
      }
    ],
    "Keypad": [
      {
        "productName": "Keypad 29",
        "price": 567,
        "rating": 3.8,
        "availability": "yes",
        "discount": 24
      },
      {
        "productName": "Speaker 84",
        "price": 173,
        "rating": 4.5,
        "availability": "yes",
        "discount": 4
      },
      {
        "productName": "Speaker 55",
        "price": 597,
        "rating": 4.4,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "Earphone 37",
        "price": 199,
        "rating": 1.9,
        "availability": "yes",
        "discount": 31
      },
      {
        "productName": "Remote 70",
        "price": 357,
        "rating": 2.4,
        "availability": "no",
        "discount": 34
      },
      {
        "productName": "Tablet 61",
        "price": 321,
        "rating": 4.2,
        "availability": "no",
        "discount": 29
      },
      {
        "productName": "Speaker 57",
        "price": 840,
        "rating": 4.7,
        "availability": "no",
        "discount": 30
      },
      {
        "productName": "TV 92",
        "price": 802,
        "rating": 4.8,
        "availability": "no",
        "discount": 20
      },
      {
        "productName": "Remote 52",
        "price": 202,
        "rating": 4.2,
        "availability": "no",
        "discount": 30
      },
      {
        "productName": "Phone 96",
        "price": 827,
        "rating": 4.3,
        "availability": "yes",
        "discount": 18
      }
    ],
    "Bluetooth": [
      {
        "productName": "PC 52",
        "price": 703,
        "rating": 3.2,
        "availability": "yes",
        "discount": 27
      },
      {
        "productName": "Keypad 78",
        "price": 991,
        "rating": 2.5,
        "availability": "yes",
        "discount": 45
      },
      {
        "productName": "Keypad 8",
        "price": 599,
        "rating": 4.0,
        "availability": "yes",
        "discount": 9
      },
      {
        "productName": "Bluetooth 1",
        "price": 847,
        "rating": 4.9,
        "availability": "yes",
        "discount": 31
      },
      {
        "productName": "Remote 53",
        "price": 146,
        "rating": 3.6,
        "availability": "yes",
        "discount": 9
      },
      {
        "productName": "Speaker 42",
        "price": 322,
        "rating": 2.5,
        "availability": "yes",
        "discount": 13
      },
      {
        "productName": "Phone 12",
        "price": 628,
        "rating": 4.3,
        "availability": "no",
        "discount": 36
      },
      {
        "productName": "Earphone 43",
        "price": 685,
        "rating": 3.8,
        "availability": "yes",
        "discount": 42
      },
      {
        "productName": "Pendrive 62",
        "price": 495,
        "rating": 2.5,
        "availability": "yes",
        "discount": 37
      },
      {
        "productName": "Phone 18",
        "price": 923,
        "rating": 1.6,
        "availability": "yes",
        "discount": 34
      }
    ],
    "Pendrive": [
      {
        "productName": "Bluetooth 74",
        "price": 591,
        "rating": 2.2,
        "availability": "yes",
        "discount": 9
      },
      {
        "productName": "Laptop 47",
        "price": 884,
        "rating": 3.5,
        "availability": "no",
        "discount": 39
      },
      {
        "productName": "Phone 93",
        "price": 157,
        "rating": 2.2,
        "availability": "yes",
        "discount": 44
      },
      {
        "productName": "House 71",
        "price": 277,
        "rating": 4.8,
        "availability": "no",
        "discount": 3
      },
      {
        "productName": "TV 2",
        "price": 261,
        "rating": 3.5,
        "availability": "no",
        "discount": 42
      },
      {
        "productName": "Speaker 70",
        "price": 539,
        "rating": 1.8,
        "availability": "yes",
        "discount": 0
      },
      {
        "productName": "TV 30",
        "price": 785,
        "rating": 5.0,
        "availability": "no",
        "discount": 11
      },
      {
        "productName": "Charger 27",
        "price": 835,
        "rating": 4.3,
        "availability": "no",
        "discount": 20
      },
      {
        "productName": "Bluetooth 84",
        "price": 248,
        "rating": 4.3,
        "availability": "yes",
        "discount": 34
      },
      {
        "productName": "Keypad 19",
        "price": 768,
        "rating": 1.4,
        "availability": "no",
        "discount": 39
      }
    ],
    "Remote": [
      {
        "productName": "Tablet 69",
        "price": 451,
        "rating": 3.8,
        "availability": "yes",
        "discount": 45
      },
      {
        "productName": "TV 8",
        "price": 113,
        "rating": 4.1,
        "availability": "no",
        "discount": 27
      },
      {
        "productName": "Tablet 3",
        "price": 442,
        "rating": 1.5,
        "availability": "no",
        "discount": 27
      },
      {
        "productName": "Earphone 29",
        "price": 912,
        "rating": 4.6,
        "availability": "no",
        "discount": 16
      },
      {
        "productName": "Earphone 74",
        "price": 169,
        "rating": 3.1,
        "availability": "yes",
        "discount": 21
      },
      {
        "productName": "Phone 85",
        "price": 500,
        "rating": 2.3,
        "availability": "no",
        "discount": 22
      },
      {
        "productName": "TV 60",
        "price": 752,
        "rating": 3.6,
        "availability": "no",
        "discount": 42
      },
      {
        "productName": "TV 30",
        "price": 537,
        "rating": 1.0,
        "availability": "no",
        "discount": 26
      },
      {
        "productName": "Speaker 18",
        "price": 935,
        "rating": 4.7,
        "availability": "no",
        "discount": 47
      },
      {
        "productName": "Earphone 65",
        "price": 204,
        "rating": 2.9,
        "availability": "no",
        "discount": 9
      }
    ],
    "Speaker": [
      {
        "productName": "TV 11",
        "price": 111,
        "rating": 2.0,
        "availability": "yes",
        "discount": 30
      },
      {
        "productName": "Headset 48",
        "price": 989,
        "rating": 3.5,
        "availability": "no",
        "discount": 48
      },
      {
        "productName": "Headset 54",
        "price": 853,
        "rating": 1.9,
        "availability": "yes",
        "discount": 47
      },
      {
        "productName": "Headset 1",
        "price": 523,
        "rating": 4.5,
        "availability": "no",
        "discount": 25
      },
      {
        "productName": "Pendrive 78",
        "price": 789,
        "rating": 2.8,
        "availability": "yes",
        "discount": 34
      },
      {
        "productName": "TV 31",
        "price": 142,
        "rating": 1.2,
        "availability": "yes",
        "discount": 40
      },
      {
        "productName": "Remote 39",
        "price": 633,
        "rating": 3.8,
        "availability": "yes",
        "discount": 22
      },
      {
        "productName": "Tablet 75",
        "price": 296,
        "rating": 3.5,
        "availability": "yes",
        "discount": 11
      },
      {
        "productName": "Bluetooth 75",
        "price": 946,
        "rating": 1.8,
        "availability": "yes",
        "discount": 12
      },
      {
        "productName": "Pendrive 90",
        "price": 561,
        "rating": 4.0,
        "availability": "yes",
        "discount": 46
      }
    ],
    "Headset": [
      {
        "productName": "Headset 56",
        "price": 416,
        "rating": 3.0,
        "availability": "no",
        "discount": 28
      },
      {
        "productName": "Earphone 53",
        "price": 790,
        "rating": 1.6,
        "availability": "no",
        "discount": 31
      },
      {
        "productName": "Keypad 34",
        "price": 286,
        "rating": 4.4,
        "availability": "yes",
        "discount": 26
      },
      {
        "productName": "PC 13",
        "price": 658,
        "rating": 5.0,
        "availability": "yes",
        "discount": 12
      },
      {
        "productName": "TV 89",
        "price": 602,
        "rating": 3.6,
        "availability": "no",
        "discount": 5
      },
      {
        "productName": "Phone 50",
        "price": 430,
        "rating": 4.4,
        "availability": "yes",
        "discount": 40
      },
      {
        "productName": "Pendrive 78",
        "price": 995,
        "rating": 1.2,
        "availability": "yes",
        "discount": 20
      },
      {
        "productName": "Headset 77",
        "price": 524,
        "rating": 4.2,
        "availability": "no",
        "discount": 42
      },
      {
        "productName": "Phone 25",
        "price": 300,
        "rating": 4.4,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "Computer 48",
        "price": 890,
        "rating": 2.7,
        "availability": "no",
        "discount": 7
      }
    ],
    "Laptop": [
      {
        "productName": "Speaker 14",
        "price": 184,
        "rating": 4.0,
        "availability": "yes",
        "discount": 8
      },
      {
        "productName": "Speaker 66",
        "price": 798,
        "rating": 2.0,
        "availability": "yes",
        "discount": 49
      },
      {
        "productName": "Phone 9",
        "price": 235,
        "rating": 2.9,
        "availability": "no",
        "discount": 44
      },
      {
        "productName": "PC 82",
        "price": 214,
        "rating": 1.8,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "Speaker 40",
        "price": 356,
        "rating": 4.8,
        "availability": "yes",
        "discount": 8
      },
      {
        "productName": "Earphone 53",
        "price": 267,
        "rating": 3.7,
        "availability": "no",
        "discount": 37
      },
      {
        "productName": "Keypad 97",
        "price": 477,
        "rating": 4.8,
        "availability": "no",
        "discount": 4
      },
      {
        "productName": "Speaker 61",
        "price": 324,
        "rating": 3.3,
        "availability": "yes",
        "discount": 5
      },
      {
        "productName": "Headset 2",
        "price": 327,
        "rating": 1.7,
        "availability": "yes",
        "discount": 5
      },
      {
        "productName": "Tablet 6",
        "price": 523,
        "rating": 4.8,
        "availability": "no",
        "discount": 23
      }
    ],
    "PC": [
      {
        "productName": "Speaker 48",
        "price": 351,
        "rating": 2.7,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "TV 45",
        "price": 287,
        "rating": 3.5,
        "availability": "no",
        "discount": 37
      },
      {
        "productName": "Laptop 89",
        "price": 375,
        "rating": 1.9,
        "availability": "yes",
        "discount": 27
      },
      {
        "productName": "Phone 75",
        "price": 656,
        "rating": 3.7,
        "availability": "yes",
        "discount": 32
      },
      {
        "productName": "Remote 98",
        "price": 142,
        "rating": 1.0,
        "availability": "no",
        "discount": 24
      },
      {
        "productName": "TV 27",
        "price": 802,
        "rating": 4.5,
        "availability": "yes",
        "discount": 45
      },
      {
        "productName": "Headset 96",
        "price": 198,
        "rating": 3.8,
        "availability": "no",
        "discount": 13
      },
      {
        "productName": "Keypad 71",
        "price": 525,
        "rating": 2.9,
        "availability": "yes",
        "discount": 8
      },
      {
        "productName": "Tablet 63",
        "price": 489,
        "rating": 3.6,
        "availability": "no",
        "discount": 47
      },
      {
        "productName": "TV 13",
        "price": 594,
        "rating": 3.4,
        "availability": "no",
        "discount": 2
      }
    ]
  },
  "AZO": {
    "Phone": [
      {
        "productName": "Headset 34",
        "price": 193,
        "rating": 1.1,
        "availability": "yes",
        "discount": 20
      },
      {
        "productName": "TV 83",
        "price": 911,
        "rating": 1.5,
        "availability": "no",
        "discount": 11
      },
      {
        "productName": "Earphone 45",
        "price": 217,
        "rating": 3.5,
        "availability": "yes",
        "discount": 41
      },
      {
        "productName": "Laptop 13",
        "price": 436,
        "rating": 1.1,
        "availability": "no",
        "discount": 18
      },
      {
        "productName": "Speaker 11",
        "price": 919,
        "rating": 4.5,
        "availability": "yes",
        "discount": 14
      },
      {
        "productName": "Earphone 34",
        "price": 792,
        "rating": 3.6,
        "availability": "yes",
        "discount": 28
      },
      {
        "productName": "Laptop 98",
        "price": 503,
        "rating": 1.2,
        "availability": "no",
        "discount": 26
      },
      {
        "productName": "Computer 10",
        "price": 746,
        "rating": 2.1,
        "availability": "no",
        "discount": 33
      },
      {
        "productName": "Bluetooth 32",
        "price": 401,
        "rating": 2.0,
        "availability": "no",
        "discount": 25
      },
      {
        "productName": "Laptop 27",
        "price": 845,
        "rating": 1.1,
        "availability": "no",
        "discount": 49
      }
    ],
    "Computer": [
      {
        "productName": "House 74",
        "price": 999,
        "rating": 3.4,
        "availability": "no",
        "discount": 46
      },
      {
        "productName": "Headset 47",
        "price": 250,
        "rating": 1.0,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "Keypad 16",
        "price": 206,
        "rating": 3.3,
        "availability": "no",
        "discount": 46
      },
      {
        "productName": "House 89",
        "price": 465,
        "rating": 1.7,
        "availability": "yes",
        "discount": 46
      },
      {
        "productName": "Phone 25",
        "price": 930,
        "rating": 3.4,
        "availability": "no",
        "discount": 23
      },
      {
        "productName": "TV 17",
        "price": 770,
        "rating": 4.6,
        "availability": "no",
        "discount": 21
      },
      {
        "productName": "Speaker 56",
        "price": 121,
        "rating": 2.4,
        "availability": "yes",
        "discount": 7
      },
      {
        "productName": "PC 18",
        "price": 203,
        "rating": 1.2,
        "availability": "yes",
        "discount": 20
      },
      {
        "productName": "Headset 11",
        "price": 670,
        "rating": 1.1,
        "availability": "no",
        "discount": 30
      },
      {
        "productName": "Charger 98",
        "price": 556,
        "rating": 3.4,
        "availability": "no",
        "discount": 44
      }
    ],
    "TV": [
      {
        "productName": "Computer 17",
        "price": 263,
        "rating": 2.3,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "Tablet 50",
        "price": 313,
        "rating": 3.2,
        "availability": "no",
        "discount": 0
      },
      {
        "productName": "Tablet 70",
        "price": 989,
        "rating": 4.4,
        "availability": "no",
        "discount": 30
      },
      {
        "productName": "TV 17",
        "price": 958,
        "rating": 5.0,
        "availability": "yes",
        "discount": 1
      },
      {
        "productName": "Pendrive 25",
        "price": 608,
        "rating": 2.3,
        "availability": "no",
        "discount": 10
      },
      {
        "productName": "Bluetooth 73",
        "price": 119,
        "rating": 3.9,
        "availability": "no",
        "discount": 13
      },
      {
        "productName": "Laptop 37",
        "price": 125,
        "rating": 2.7,
        "availability": "no",
        "discount": 39
      },
      {
        "productName": "Charger 69",
        "price": 617,
        "rating": 1.2,
        "availability": "no",
        "discount": 21
      },
      {
        "productName": "Phone 99",
        "price": 165,
        "rating": 4.5,
        "availability": "no",
        "discount": 17
      },
      {
        "productName": "Tablet 95",
        "price": 559,
        "rating": 1.8,
        "availability": "no",
        "discount": 18
      }
    ],
    "Earphone": [
      {
        "productName": "PC 96",
        "price": 494,
        "rating": 1.4,
        "availability": "no",
        "discount": 3
      },
      {
        "productName": "Pendrive 90",
        "price": 714,
        "rating": 1.2,
        "availability": "yes",
        "discount": 31
      },
      {
        "productName": "Remote 58",
        "price": 565,
        "rating": 3.4,
        "availability": "yes",
        "discount": 8
      },
      {
        "productName": "Pendrive 65",
        "price": 884,
        "rating": 3.6,
        "availability": "no",
        "discount": 4
      },
      {
        "productName": "Keypad 59",
        "price": 264,
        "rating": 2.5,
        "availability": "no",
        "discount": 17
      },
      {
        "productName": "Remote 16",
        "price": 481,
        "rating": 3.6,
        "availability": "no",
        "discount": 6
      },
      {
        "productName": "Phone 67",
        "price": 207,
        "rating": 3.6,
        "availability": "no",
        "discount": 2
      },
      {
        "productName": "Charger 39",
        "price": 183,
        "rating": 3.0,
        "availability": "no",
        "discount": 48
      },
      {
        "productName": "Charger 3",
        "price": 893,
        "rating": 2.6,
        "availability": "no",
        "discount": 26
      },
      {
        "productName": "Pendrive 91",
        "price": 823,
        "rating": 2.7,
        "availability": "no",
        "discount": 31
      }
    ],
    "Tablet": [
      {
        "productName": "Keypad 17",
        "price": 836,
        "rating": 1.4,
        "availability": "yes",
        "discount": 34
      },
      {
        "productName": "Earphone 92",
        "price": 347,
        "rating": 2.9,
        "availability": "yes",
        "discount": 0
      },
      {
        "productName": "PC 91",
        "price": 241,
        "rating": 1.1,
        "availability": "yes",
        "discount": 40
      },
      {
        "productName": "PC 31",
        "price": 584,
        "rating": 3.2,
        "availability": "no",
        "discount": 46
      },
      {
        "productName": "Pendrive 61",
        "price": 715,
        "rating": 2.9,
        "availability": "yes",
        "discount": 30
      },
      {
        "productName": "TV 14",
        "price": 288,
        "rating": 3.3,
        "availability": "yes",
        "discount": 42
      },
      {
        "productName": "Keypad 33",
        "price": 840,
        "rating": 4.5,
        "availability": "yes",
        "discount": 20
      },
      {
        "productName": "Charger 85",
        "price": 828,
        "rating": 1.2,
        "availability": "yes",
        "discount": 27
      },
      {
        "productName": "Remote 71",
        "price": 873,
        "rating": 4.1,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "Bluetooth 95",
        "price": 114,
        "rating": 2.8,
        "availability": "yes",
        "discount": 37
      }
    ],
    "Charger": [
      {
        "productName": "Keypad 97",
        "price": 361,
        "rating": 3.4,
        "availability": "no",
        "discount": 18
      },
      {
        "productName": "Laptop 1",
        "price": 484,
        "rating": 2.6,
        "availability": "no",
        "discount": 3
      },
      {
        "productName": "Headset 59",
        "price": 748,
        "rating": 2.0,
        "availability": "no",
        "discount": 8
      },
      {
        "productName": "Tablet 30",
        "price": 117,
        "rating": 1.6,
        "availability": "no",
        "discount": 27
      },
      {
        "productName": "PC 82",
        "price": 746,
        "rating": 2.0,
        "availability": "yes",
        "discount": 15
      },
      {
        "productName": "Pendrive 67",
        "price": 162,
        "rating": 3.6,
        "availability": "yes",
        "discount": 5
      },
      {
        "productName": "Bluetooth 68",
        "price": 398,
        "rating": 2.3,
        "availability": "no",
        "discount": 18
      },
      {
        "productName": "Laptop 39",
        "price": 378,
        "rating": 2.1,
        "availability": "yes",
        "discount": 37
      },
      {
        "productName": "Tablet 95",
        "price": 536,
        "rating": 1.9,
        "availability": "no",
        "discount": 9
      },
      {
        "productName": "PC 79",
        "price": 143,
        "rating": 3.7,
        "availability": "no",
        "discount": 11
      }
    ],
    "House": [
      {
        "productName": "Computer 96",
        "price": 126,
        "rating": 3.3,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "Computer 44",
        "price": 307,
        "rating": 3.8,
        "availability": "yes",
        "discount": 9
      },
      {
        "productName": "Earphone 44",
        "price": 688,
        "rating": 3.1,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "Keypad 63",
        "price": 738,
        "rating": 3.9,
        "availability": "yes",
        "discount": 2
      },
      {
        "productName": "TV 100",
        "price": 982,
        "rating": 4.7,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "Charger 26",
        "price": 331,
        "rating": 2.8,
        "availability": "no",
        "discount": 29
      },
      {
        "productName": "Pendrive 6",
        "price": 553,
        "rating": 4.4,
        "availability": "yes",
        "discount": 10
      },
      {
        "productName": "Speaker 16",
        "price": 837,
        "rating": 2.8,
        "availability": "no",
        "discount": 39
      },
      {
        "productName": "Pendrive 36",
        "price": 956,
        "rating": 4.1,
        "availability": "no",
        "discount": 49
      },
      {
        "productName": "Laptop 88",
        "price": 981,
        "rating": 3.2,
        "availability": "no",
        "discount": 46
      }
    ],
    "Keypad": [
      {
        "productName": "Computer 82",
        "price": 937,
        "rating": 5.0,
        "availability": "no",
        "discount": 14
      },
      {
        "productName": "PC 58",
        "price": 971,
        "rating": 2.0,
        "availability": "yes",
        "discount": 17
      },
      {
        "productName": "Phone 13",
        "price": 852,
        "rating": 2.2,
        "availability": "yes",
        "discount": 39
      },
      {
        "productName": "Bluetooth 28",
        "price": 128,
        "rating": 4.7,
        "availability": "no",
        "discount": 9
      },
      {
        "productName": "Keypad 16",
        "price": 819,
        "rating": 4.5,
        "availability": "yes",
        "discount": 49
      },
      {
        "productName": "Speaker 54",
        "price": 868,
        "rating": 3.0,
        "availability": "no",
        "discount": 16
      },
      {
        "productName": "Remote 98",
        "price": 386,
        "rating": 2.4,
        "availability": "yes",
        "discount": 18
      },
      {
        "productName": "Laptop 71",
        "price": 178,
        "rating": 3.1,
        "availability": "yes",
        "discount": 7
      },
      {
        "productName": "Pendrive 22",
        "price": 233,
        "rating": 4.2,
        "availability": "yes",
        "discount": 38
      },
      {
        "productName": "Laptop 30",
        "price": 795,
        "rating": 3.4,
        "availability": "yes",
        "discount": 41
      }
    ],
    "Bluetooth": [
      {
        "productName": "House 77",
        "price": 996,
        "rating": 4.4,
        "availability": "no",
        "discount": 25
      },
      {
        "productName": "Headset 90",
        "price": 763,
        "rating": 2.0,
        "availability": "no",
        "discount": 32
      },
      {
        "productName": "Tablet 24",
        "price": 854,
        "rating": 4.9,
        "availability": "yes",
        "discount": 26
      },
      {
        "productName": "Computer 94",
        "price": 851,
        "rating": 2.5,
        "availability": "yes",
        "discount": 6
      },
      {
        "productName": "Keypad 32",
        "price": 123,
        "rating": 1.2,
        "availability": "yes",
        "discount": 13
      },
      {
        "productName": "Charger 42",
        "price": 767,
        "rating": 2.6,
        "availability": "yes",
        "discount": 47
      },
      {
        "productName": "Pendrive 91",
        "price": 324,
        "rating": 4.6,
        "availability": "no",
        "discount": 29
      },
      {
        "productName": "Earphone 83",
        "price": 152,
        "rating": 2.1,
        "availability": "no",
        "discount": 19
      },
      {
        "productName": "Pendrive 63",
        "price": 143,
        "rating": 3.7,
        "availability": "no",
        "discount": 15
      },
      {
        "productName": "Keypad 80",
        "price": 506,
        "rating": 2.9,
        "availability": "yes",
        "discount": 38
      }
    ],
    "Pendrive": [
      {
        "productName": "Laptop 12",
        "price": 836,
        "rating": 3.3,
        "availability": "no",
        "discount": 48
      },
      {
        "productName": "Earphone 62",
        "price": 477,
        "rating": 3.7,
        "availability": "no",
        "discount": 9
      },
      {
        "productName": "Computer 67",
        "price": 323,
        "rating": 1.5,
        "availability": "no",
        "discount": 43
      },
      {
        "productName": "Charger 7",
        "price": 199,
        "rating": 3.4,
        "availability": "no",
        "discount": 5
      },
      {
        "productName": "Remote 76",
        "price": 826,
        "rating": 3.1,
        "availability": "yes",
        "discount": 4
      },
      {
        "productName": "TV 39",
        "price": 469,
        "rating": 2.6,
        "availability": "no",
        "discount": 27
      },
      {
        "productName": "Speaker 81",
        "price": 856,
        "rating": 4.1,
        "availability": "yes",
        "discount": 1
      },
      {
        "productName": "Keypad 6",
        "price": 568,
        "rating": 4.6,
        "availability": "no",
        "discount": 24
      },
      {
        "productName": "Earphone 62",
        "price": 648,
        "rating": 3.4,
        "availability": "yes",
        "discount": 9
      },
      {
        "productName": "Phone 57",
        "price": 930,
        "rating": 4.9,
        "availability": "no",
        "discount": 23
      }
    ],
    "Remote": [
      {
        "productName": "Phone 68",
        "price": 852,
        "rating": 2.3,
        "availability": "no",
        "discount": 25
      },
      {
        "productName": "Remote 22",
        "price": 299,
        "rating": 2.2,
        "availability": "yes",
        "discount": 32
      },
      {
        "productName": "Pendrive 16",
        "price": 159,
        "rating": 4.0,
        "availability": "yes",
        "discount": 43
      },
      {
        "productName": "TV 52",
        "price": 774,
        "rating": 4.3,
        "availability": "yes",
        "discount": 2
      },
      {
        "productName": "House 59",
        "price": 760,
        "rating": 4.2,
        "availability": "yes",
        "discount": 46
      },
      {
        "productName": "Earphone 75",
        "price": 891,
        "rating": 2.1,
        "availability": "yes",
        "discount": 28
      },
      {
        "productName": "Bluetooth 86",
        "price": 941,
        "rating": 3.0,
        "availability": "yes",
        "discount": 22
      },
      {
        "productName": "Charger 90",
        "price": 788,
        "rating": 4.9,
        "availability": "no",
        "discount": 13
      },
      {
        "productName": "Headset 18",
        "price": 501,
        "rating": 3.0,
        "availability": "no",
        "discount": 34
      },
      {
        "productName": "Pendrive 48",
        "price": 679,
        "rating": 4.2,
        "availability": "no",
        "discount": 13
      }
    ],
    "Speaker": [
      {
        "productName": "Keypad 83",
        "price": 375,
        "rating": 2.5,
        "availability": "no",
        "discount": 3
      },
      {
        "productName": "PC 36",
        "price": 519,
        "rating": 2.2,
        "availability": "no",
        "discount": 16
      },
      {
        "productName": "Keypad 41",
        "price": 253,
        "rating": 2.3,
        "availability": "yes",
        "discount": 9
      },
      {
        "productName": "Headset 59",
        "price": 179,
        "rating": 4.7,
        "availability": "no",
        "discount": 15
      },
      {
        "productName": "Charger 90",
        "price": 677,
        "rating": 2.0,
        "availability": "yes",
        "discount": 21
      },
      {
        "productName": "PC 33",
        "price": 830,
        "rating": 1.0,
        "availability": "yes",
        "discount": 49
      },
      {
        "productName": "Remote 86",
        "price": 873,
        "rating": 2.6,
        "availability": "yes",
        "discount": 41
      },
      {
        "productName": "Speaker 69",
        "price": 636,
        "rating": 1.3,
        "availability": "yes",
        "discount": 37
      },
      {
        "productName": "Pendrive 15",
        "price": 598,
        "rating": 3.1,
        "availability": "yes",
        "discount": 45
      },
      {
        "productName": "Computer 97",
        "price": 958,
        "rating": 4.9,
        "availability": "no",
        "discount": 31
      }
    ],
    "Headset": [
      {
        "productName": "Pendrive 20",
        "price": 421,
        "rating": 1.3,
        "availability": "no",
        "discount": 49
      },
      {
        "productName": "Headset 45",
        "price": 383,
        "rating": 3.7,
        "availability": "yes",
        "discount": 2
      },
      {
        "productName": "Laptop 31",
        "price": 147,
        "rating": 1.2,
        "availability": "no",
        "discount": 11
      },
      {
        "productName": "Computer 54",
        "price": 281,
        "rating": 4.1,
        "availability": "no",
        "discount": 27
      },
      {
        "productName": "Pendrive 27",
        "price": 463,
        "rating": 4.1,
        "availability": "no",
        "discount": 21
      },
      {
        "productName": "Bluetooth 92",
        "price": 507,
        "rating": 3.1,
        "availability": "no",
        "discount": 7
      },
      {
        "productName": "PC 92",
        "price": 831,
        "rating": 1.4,
        "availability": "yes",
        "discount": 18
      },
      {
        "productName": "Computer 25",
        "price": 699,
        "rating": 2.8,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "PC 18",
        "price": 169,
        "rating": 2.9,
        "availability": "no",
        "discount": 7
      },
      {
        "productName": "House 58",
        "price": 827,
        "rating": 1.4,
        "availability": "yes",
        "discount": 26
      }
    ],
    "Laptop": [
      {
        "productName": "Headset 21",
        "price": 708,
        "rating": 3.9,
        "availability": "no",
        "discount": 49
      },
      {
        "productName": "Phone 63",
        "price": 254,
        "rating": 2.7,
        "availability": "yes",
        "discount": 42
      },
      {
        "productName": "TV 46",
        "price": 667,
        "rating": 1.7,
        "availability": "yes",
        "discount": 33
      },
      {
        "productName": "Keypad 68",
        "price": 940,
        "rating": 4.2,
        "availability": "no",
        "discount": 26
      },
      {
        "productName": "Bluetooth 47",
        "price": 841,
        "rating": 1.1,
        "availability": "yes",
        "discount": 25
      },
      {
        "productName": "Remote 67",
        "price": 339,
        "rating": 2.7,
        "availability": "yes",
        "discount": 34
      },
      {
        "productName": "Pendrive 83",
        "price": 116,
        "rating": 3.5,
        "availability": "no",
        "discount": 14
      },
      {
        "productName": "Charger 7",
        "price": 227,
        "rating": 4.3,
        "availability": "yes",
        "discount": 18
      },
      {
        "productName": "Keypad 32",
        "price": 654,
        "rating": 3.5,
        "availability": "yes",
        "discount": 29
      },
      {
        "productName": "Laptop 46",
        "price": 463,
        "rating": 4.0,
        "availability": "no",
        "discount": 24
      }
    ],
    "PC": [
      {
        "productName": "Pendrive 63",
        "price": 485,
        "rating": 4.1,
        "availability": "yes",
        "discount": 19
      },
      {
        "productName": "Pendrive 66",
        "price": 827,
        "rating": 1.8,
        "availability": "yes",
        "discount": 18
      },
      {
        "productName": "Computer 19",
        "price": 280,
        "rating": 1.3,
        "availability": "no",
        "discount": 32
      },
      {
        "productName": "Headset 17",
        "price": 432,
        "rating": 3.3,
        "availability": "yes",
        "discount": 34
      },
      {
        "productName": "Computer 29",
        "price": 649,
        "rating": 4.8,
        "availability": "no",
        "discount": 9
      },
      {
        "productName": "Laptop 98",
        "price": 526,
        "rating": 2.1,
        "availability": "yes",
        "discount": 23
      },
      {
        "productName": "Headset 83",
        "price": 688,
        "rating": 1.3,
        "availability": "yes",
        "discount": 10
      },
      {
        "productName": "Keypad 69",
        "price": 387,
        "rating": 2.5,
        "availability": "yes",
        "discount": 27
      },
      {
        "productName": "Pendrive 96",
        "price": 148,
        "rating": 4.3,
        "availability": "yes",
        "discount": 5
      },
      {
        "productName": "Pendrive 72",
        "price": 370,
        "rating": 1.5,
        "availability": "no",
        "discount": 14
      }
    ]
  }
}

app.use(express.json());

app.get("/categories/:categoryname/products", (req, res) => {
    try {
      const { categoryname } = req.params;
      const n = parseInt(req.query.n) || 10; 
      const page = parseInt(req.query.page) || 1;
  
       const sortedProducts = [];
  for (const company in companyProducts) {
    if (companyProducts.hasOwnProperty(company)) {
      const products = companyProducts[company][categoryname];
      if (products) {
        sortedProducts.push(...products);
      }
    }
  }
  
      const sortBy = req.query.sortBy || "price"; 
      switch (sortBy) {
        case "price":
          sortedProducts.sort((a, b) => a.price - b.price); 
          break;
        case "rating":
          sortedProducts.sort((a, b) => b.rating - a.rating); 
          break;
        case "company":
          sortedProducts.sort((a, b) => a.company.localeCompare(b.company)); 
          break;
        case "discount":
          sortedProducts.sort((a, b) => b.discount - a.discount); 
          break;
        default:
          return res.status(400).json({ error: "Invalid sortBy parameter" });
      }
  
      const startIdx = (page - 1) * n;
      const endIdx = startIdx + n;
      const paginatedProducts = sortedProducts.slice(startIdx, endIdx);
  
      res.status(200).json(paginatedProducts);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

app.get("/categories/:categoryname/products/:productid", async (req, res) => {
  try {
    const { categoryname, productid } = req.params;

    const response = await axios.get(
      `${baseUrl}/categories/${categoryname}/products/${productid}`,
      {
        headers: {
          "x-api-key": apiKey,
        }
      }
    );

    const product = response.data;

    if (!product) {
      res.status(404).json({ error: "Product not found" });
    } else {
      res.status(200).json(product);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


  
  