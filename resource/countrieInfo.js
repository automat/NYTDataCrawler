//
//
// .
//
//  Created by henryk Wollik on 22.10.12.
//  Copyright (c) 2012 henryk Wollik. All rights reserved.
//
//

var COUNTRY_INFO = [
    {
        "code":"AD",
        "name":"Andorra",
        "isoNumeric":"020",
        "isoAlpha3":"AND",
        "fipsCode":"AN",
        "continentName":"Europe",
        "capital":"Andorra la Vella",
        "areaInSqKm":468,
        "population":84000,
        "currencyCode":"EUR",
        "languages":["ca"],
        "geoNameId":"3041565",
        "direction":{
            "west":1.4071867141112762,
            "east":42.65604389629997,
            "north":1.7865427778319827,
            "south":42.42849259876837
        },
        "continent":"EU"
    },
    {
        "code":"AE",
        "name":"United Arab Emirates",
        "isoNumeric":"784",
        "isoAlpha3":"ARE",
        "fipsCode":"AE",
        "continentName":"Asia",
        "capital":"Abu Dhabi",
        "areaInSqKm":82880,
        "population":4975593,
        "currencyCode":"AED",
        "languages":["ar-AE", "fa", "en", "hi", "ur"],
        "geoNameId":"290557",
        "direction":{
            "west":51.58332824707031,
            "east":26.08415985107422,
            "north":56.38166046142578,
            "south":22.633329391479492
        },
        "continent":"AS"
    },
    {
        "code":"AF",
        "name":"Afghanistan",
        "isoNumeric":"004",
        "isoAlpha3":"AFG",
        "fipsCode":"AF",
        "continentName":"Asia",
        "capital":"Kabul",
        "areaInSqKm":647500,
        "population":29121286,
        "currencyCode":"AFN",
        "languages":["fa-AF", "ps", "uz-AF", "tk"],
        "geoNameId":"1149361",
        "direction":{
            "west":60.478443,
            "east":38.483418,
            "north":74.879448,
            "south":29.377472
        },
        "continent":"AS"
    },
    {
        "code":"AG",
        "name":"Antigua and Barbuda",
        "isoNumeric":"028",
        "isoAlpha3":"ATG",
        "fipsCode":"AC",
        "continentName":"North America",
        "capital":"St. John's",
        "areaInSqKm":443,
        "population":86754,
        "currencyCode":"XCD",
        "languages":["en-AG"],
        "geoNameId":"3576396",
        "direction":{
            "west":-61.906425,
            "east":17.729387,
            "north":-61.672421,
            "south":16.996979
        },
        "continent":"NA"
    },
    {
        "code":"AI",
        "name":"Anguilla",
        "isoNumeric":"660",
        "isoAlpha3":"AIA",
        "fipsCode":"AV",
        "continentName":"North America",
        "capital":"The Valley",
        "areaInSqKm":102,
        "population":13254,
        "currencyCode":"XCD",
        "languages":["en-AI"],
        "geoNameId":"3573511",
        "direction":{
            "west":-63.172901,
            "east":18.283424,
            "north":-62.971359,
            "south":18.166815
        },
        "continent":"NA"
    },
    {
        "code":"AL",
        "name":"Albania",
        "isoNumeric":"008",
        "isoAlpha3":"ALB",
        "fipsCode":"AL",
        "continentName":"Europe",
        "capital":"Tirana",
        "areaInSqKm":28748,
        "population":2986952,
        "currencyCode":"ALL",
        "languages":["sq", "el"],
        "geoNameId":"783754",
        "direction":{
            "west":19.293972,
            "east":42.665611,
            "north":21.068472,
            "south":39.648361
        },
        "continent":"EU"
    },
    {
        "code":"AM",
        "name":"Armenia",
        "isoNumeric":"051",
        "isoAlpha3":"ARM",
        "fipsCode":"AM",
        "continentName":"Asia",
        "capital":"Yerevan",
        "areaInSqKm":29800,
        "population":2968000,
        "currencyCode":"AMD",
        "languages":["hy"],
        "geoNameId":"174982",
        "direction":{
            "west":43.44978,
            "east":41.301834,
            "north":46.772435045159995,
            "south":38.830528
        },
        "continent":"AS"
    },
    {
        "code":"AO",
        "name":"Angola",
        "isoNumeric":"024",
        "isoAlpha3":"AGO",
        "fipsCode":"AO",
        "continentName":"Africa",
        "capital":"Luanda",
        "areaInSqKm":1246700,
        "population":13068161,
        "currencyCode":"AOA",
        "languages":["pt-AO"],
        "geoNameId":"3351879",
        "direction":{
            "west":11.679219,
            "east":-4.376826,
            "north":24.082119,
            "south":-18.042076
        },
        "continent":"AF"
    },
    {
        "code":"AQ",
        "name":"Antarctica",
        "isoNumeric":"010",
        "isoAlpha3":"ATA",
        "fipsCode":"AY",
        "continentName":"Antarctica",
        "capital":"",
        "areaInSqKm":14000000,
        "population":0,
        "currencyCode":"",
        "languages":[""],
        "geoNameId":"6697173",
        "direction":{
            "west":-179.9999,
            "east":-60.515533,
            "north":179.9999,
            "south":-89.9999
        },
        "continent":"AN"
    },
    {
        "code":"AR",
        "name":"Argentina",
        "isoNumeric":"032",
        "isoAlpha3":"ARG",
        "fipsCode":"AR",
        "continentName":"South America",
        "capital":"Buenos Aires",
        "areaInSqKm":2766890,
        "population":41343201,
        "currencyCode":"ARS",
        "languages":["es-AR", "en", "it", "de", "fr", "gn"],
        "geoNameId":"3865483",
        "direction":{
            "west":-73.58297,
            "east":-21.781277,
            "north":-53.591835,
            "south":-55.061314
        },
        "continent":"SA"
    },
    {
        "code":"AS",
        "name":"American Samoa",
        "isoNumeric":"016",
        "isoAlpha3":"ASM",
        "fipsCode":"AQ",
        "continentName":"Oceania",
        "capital":"Pago Pago",
        "areaInSqKm":199,
        "population":57881,
        "currencyCode":"USD",
        "languages":["en-AS", "sm", "to"],
        "geoNameId":"5880801",
        "direction":{
            "west":-171.091888,
            "east":-11.0497,
            "north":-169.416077,
            "south":-14.382478
        },
        "continent":"OC"
    },
    {
        "code":"AT",
        "name":"Austria",
        "isoNumeric":"040",
        "isoAlpha3":"AUT",
        "fipsCode":"AU",
        "continentName":"Europe",
        "capital":"Vienna",
        "areaInSqKm":83858,
        "population":8205000,
        "currencyCode":"EUR",
        "languages":["de-AT", "hr", "hu", "sl"],
        "geoNameId":"2782113",
        "direction":{
            "west":9.535916,
            "east":49.017056,
            "north":17.162722,
            "south":46.378029
        },
        "continent":"EU"
    },
    {
        "code":"AU",
        "name":"Australia",
        "isoNumeric":"036",
        "isoAlpha3":"AUS",
        "fipsCode":"AS",
        "continentName":"Oceania",
        "capital":"Canberra",
        "areaInSqKm":7686850,
        "population":21515754,
        "currencyCode":"AUD",
        "languages":["en-AU"],
        "geoNameId":"2077456",
        "direction":{
            "west":112.911057,
            "east":-10.062805,
            "north":153.639252,
            "south":-43.64397
        },
        "continent":"OC"
    },
    {
        "code":"AW",
        "name":"Aruba",
        "isoNumeric":"533",
        "isoAlpha3":"ABW",
        "fipsCode":"AA",
        "continentName":"North America",
        "capital":"Oranjestad",
        "areaInSqKm":193,
        "population":71566,
        "currencyCode":"AWG",
        "languages":["nl-AW", "es", "en"],
        "geoNameId":"3577279",
        "direction":{
            "west":-70.0644737196045,
            "east":12.623718127152925,
            "north":-69.86575120104982,
            "south":12.411707706190716
        },
        "continent":"NA"
    },
    {
        "code":"AX",
        "name":"Åland",
        "isoNumeric":"248",
        "isoAlpha3":"ALA",
        "fipsCode":"",
        "continentName":"Europe",
        "capital":"Mariehamn",
        "areaInSqKm":null,
        "population":26711,
        "currencyCode":"EUR",
        "languages":["sv-AX"],
        "geoNameId":"661882",
        "direction":{
            "west":19.317694,
            "east":60.488861,
            "north":21.011862,
            "south":59.90675
        },
        "continent":"EU"
    },
    {
        "code":"AZ",
        "name":"Azerbaijan",
        "isoNumeric":"031",
        "isoAlpha3":"AZE",
        "fipsCode":"AJ",
        "continentName":"Asia",
        "capital":"Baku",
        "areaInSqKm":86600,
        "population":8303512,
        "currencyCode":"AZN",
        "languages":["az", "ru", "hy"],
        "geoNameId":"587116",
        "direction":{
            "west":44.774113,
            "east":41.90564,
            "north":50.370083,
            "south":38.38915252685547
        },
        "continent":"AS"
    },
    {
        "code":"BA",
        "name":"Bosnia and Herzegovina",
        "isoNumeric":"070",
        "isoAlpha3":"BIH",
        "fipsCode":"BK",
        "continentName":"Europe",
        "capital":"Sarajevo",
        "areaInSqKm":51129,
        "population":4590000,
        "currencyCode":"BAM",
        "languages":["bs", "hr-BA", "sr-BA"],
        "geoNameId":"3277605",
        "direction":{
            "west":15.718945,
            "east":45.239193,
            "north":19.622223,
            "south":42.546112
        },
        "continent":"EU"
    },
    {
        "code":"BB",
        "name":"Barbados",
        "isoNumeric":"052",
        "isoAlpha3":"BRB",
        "fipsCode":"BB",
        "continentName":"North America",
        "capital":"Bridgetown",
        "areaInSqKm":431,
        "population":285653,
        "currencyCode":"BBD",
        "languages":["en-BB"],
        "geoNameId":"3374084",
        "direction":{
            "west":-59.648922,
            "east":13.327257,
            "north":-59.420376,
            "south":13.039844
        },
        "continent":"NA"
    },
    {
        "code":"BD",
        "name":"Bangladesh",
        "isoNumeric":"050",
        "isoAlpha3":"BGD",
        "fipsCode":"BG",
        "continentName":"Asia",
        "capital":"Dhaka",
        "areaInSqKm":144000,
        "population":156118464,
        "currencyCode":"BDT",
        "languages":["bn-BD", "en"],
        "geoNameId":"1210997",
        "direction":{
            "west":88.028336,
            "east":26.631945,
            "north":92.673668,
            "south":20.743334
        },
        "continent":"AS"
    },
    {
        "code":"BE",
        "name":"Belgium",
        "isoNumeric":"056",
        "isoAlpha3":"BEL",
        "fipsCode":"BE",
        "continentName":"Europe",
        "capital":"Brussels",
        "areaInSqKm":30510,
        "population":10403000,
        "currencyCode":"EUR",
        "languages":["nl-BE", "fr-BE", "de-BE"],
        "geoNameId":"2802361",
        "direction":{
            "west":2.546944,
            "east":51.505444,
            "north":6.403861,
            "south":49.49361
        },
        "continent":"EU"
    },
    {
        "code":"BF",
        "name":"Burkina Faso",
        "isoNumeric":"854",
        "isoAlpha3":"BFA",
        "fipsCode":"UV",
        "continentName":"Africa",
        "capital":"Ouagadougou",
        "areaInSqKm":274200,
        "population":16241811,
        "currencyCode":"XOF",
        "languages":["fr-BF"],
        "geoNameId":"2361809",
        "direction":{
            "west":-5.518916,
            "east":15.082593,
            "north":2.405395,
            "south":9.401108
        },
        "continent":"AF"
    },
    {
        "code":"BG",
        "name":"Bulgaria",
        "isoNumeric":"100",
        "isoAlpha3":"BGR",
        "fipsCode":"BU",
        "continentName":"Europe",
        "capital":"Sofia",
        "areaInSqKm":110910,
        "population":7148785,
        "currencyCode":"BGN",
        "languages":["bg", "tr-BG"],
        "geoNameId":"732800",
        "direction":{
            "west":22.371166,
            "east":44.21764,
            "north":28.612167,
            "south":41.242084
        },
        "continent":"EU"
    },
    {
        "code":"BH",
        "name":"Bahrain",
        "isoNumeric":"048",
        "isoAlpha3":"BHR",
        "fipsCode":"BA",
        "continentName":"Asia",
        "capital":"Manama",
        "areaInSqKm":665,
        "population":738004,
        "currencyCode":"BHD",
        "languages":["ar-BH", "en", "fa", "ur"],
        "geoNameId":"290291",
        "direction":{
            "west":50.45414,
            "east":26.282583,
            "north":50.664471,
            "south":25.796862
        },
        "continent":"AS"
    },
    {
        "code":"BI",
        "name":"Burundi",
        "isoNumeric":"108",
        "isoAlpha3":"BDI",
        "fipsCode":"BY",
        "continentName":"Africa",
        "capital":"Bujumbura",
        "areaInSqKm":27830,
        "population":9863117,
        "currencyCode":"BIF",
        "languages":["fr-BI", "rn"],
        "geoNameId":"433561",
        "direction":{
            "west":28.993061,
            "east":-2.310123,
            "north":30.847729,
            "south":-4.465713
        },
        "continent":"AF"
    },
    {
        "code":"BJ",
        "name":"Benin",
        "isoNumeric":"204",
        "isoAlpha3":"BEN",
        "fipsCode":"BN",
        "continentName":"Africa",
        "capital":"Porto-Novo",
        "areaInSqKm":112620,
        "population":9056010,
        "currencyCode":"XOF",
        "languages":["fr-BJ"],
        "geoNameId":"2395170",
        "direction":{
            "west":0.774575,
            "east":12.418347,
            "north":3.851701,
            "south":6.225748
        },
        "continent":"AF"
    },
    {
        "code":"BL",
        "name":"Saint Barthélemy",
        "isoNumeric":"652",
        "isoAlpha3":"BLM",
        "fipsCode":"TB",
        "continentName":"North America",
        "capital":"Gustavia",
        "areaInSqKm":21,
        "population":8450,
        "currencyCode":"EUR",
        "languages":["fr"],
        "geoNameId":"3578476",
        "direction":{
            "west":-62.8739118253784,
            "east":17.928808791949283,
            "north":-62.788983372985854,
            "south":17.878183227405575
        },
        "continent":"NA"
    },
    {
        "code":"BM",
        "name":"Bermuda",
        "isoNumeric":"060",
        "isoAlpha3":"BMU",
        "fipsCode":"BD",
        "continentName":"North America",
        "capital":"Hamilton",
        "areaInSqKm":53,
        "population":65365,
        "currencyCode":"BMD",
        "languages":["en-BM", "pt"],
        "geoNameId":"3573345",
        "direction":{
            "west":-64.89605,
            "east":32.393833,
            "north":-64.651993,
            "south":32.246639
        },
        "continent":"NA"
    },
    {
        "code":"BN",
        "name":"Brunei",
        "isoNumeric":"096",
        "isoAlpha3":"BRN",
        "fipsCode":"BX",
        "continentName":"Asia",
        "capital":"Bandar Seri Begawan",
        "areaInSqKm":5770,
        "population":395027,
        "currencyCode":"BND",
        "languages":["ms-BN", "en-BN"],
        "geoNameId":"1820814",
        "direction":{
            "west":114.071442,
            "east":5.047167,
            "north":115.359444,
            "south":4.003083
        },
        "continent":"AS"
    },
    {
        "code":"BO",
        "name":"Bolivia",
        "isoNumeric":"068",
        "isoAlpha3":"BOL",
        "fipsCode":"BL",
        "continentName":"South America",
        "capital":"Sucre",
        "areaInSqKm":1098580,
        "population":9947418,
        "currencyCode":"BOB",
        "languages":["es-BO", "qu", "ay"],
        "geoNameId":"3923057",
        "direction":{
            "west":-69.640762,
            "east":-9.680567,
            "north":-57.45809600000001,
            "south":-22.896133
        },
        "continent":"SA"
    },
    {
        "code":"BQ",
        "name":"Bonaire",
        "isoNumeric":"535",
        "isoAlpha3":"BES",
        "fipsCode":"",
        "continentName":"North America",
        "capital":"",
        "areaInSqKm":null,
        "population":18012,
        "currencyCode":"USD",
        "languages":["nl", "pap", "en"],
        "geoNameId":"7626844",
        "direction":{
            "west":-68.416458,
            "east":12.304535,
            "north":-68.192307,
            "south":12.017149
        },
        "continent":"NA"
    },
    {
        "code":"BR",
        "name":"Brazil",
        "isoNumeric":"076",
        "isoAlpha3":"BRA",
        "fipsCode":"BR",
        "continentName":"South America",
        "capital":"Brasília",
        "areaInSqKm":8511965,
        "population":201103330,
        "currencyCode":"BRL",
        "languages":["pt-BR", "es", "en", "fr"],
        "geoNameId":"3469034",
        "direction":{
            "west":-73.985535,
            "east":5.264877,
            "north":-32.392998,
            "south":-33.750706
        },
        "continent":"SA"
    },
    {
        "code":"BS",
        "name":"Bahamas",
        "isoNumeric":"044",
        "isoAlpha3":"BHS",
        "fipsCode":"BF",
        "continentName":"North America",
        "capital":"Nassau",
        "areaInSqKm":13940,
        "population":301790,
        "currencyCode":"BSD",
        "languages":["en-BS"],
        "geoNameId":"3572887",
        "direction":{
            "west":-78.995911,
            "east":26.919243,
            "north":-74.423874,
            "south":22.852743
        },
        "continent":"NA"
    },
    {
        "code":"BT",
        "name":"Bhutan",
        "isoNumeric":"064",
        "isoAlpha3":"BTN",
        "fipsCode":"BT",
        "continentName":"Asia",
        "capital":"Thimphu",
        "areaInSqKm":47000,
        "population":699847,
        "currencyCode":"BTN",
        "languages":["dz"],
        "geoNameId":"1252634",
        "direction":{
            "west":88.75972,
            "east":28.323778,
            "north":92.125191,
            "south":26.70764
        },
        "continent":"AS"
    },
    {
        "code":"BV",
        "name":"Bouvet Island",
        "isoNumeric":"074",
        "isoAlpha3":"BVT",
        "fipsCode":"BV",
        "continentName":"Antarctica",
        "capital":"",
        "areaInSqKm":null,
        "population":0,
        "currencyCode":"NOK",
        "languages":[""],
        "geoNameId":"3371123",
        "direction":{
            "west":3.335499,
            "east":-54.400322,
            "north":3.487976,
            "south":-54.462383
        },
        "continent":"AN"
    },
    {
        "code":"BW",
        "name":"Botswana",
        "isoNumeric":"072",
        "isoAlpha3":"BWA",
        "fipsCode":"BC",
        "continentName":"Africa",
        "capital":"Gaborone",
        "areaInSqKm":600370,
        "population":2029307,
        "currencyCode":"BWP",
        "languages":["en-BW", "tn-BW"],
        "geoNameId":"933860",
        "direction":{
            "west":19.999535,
            "east":-17.780813,
            "north":29.360781,
            "south":-26.907246
        },
        "continent":"AF"
    },
    {
        "code":"BY",
        "name":"Belarus",
        "isoNumeric":"112",
        "isoAlpha3":"BLR",
        "fipsCode":"BO",
        "continentName":"Europe",
        "capital":"Minsk",
        "areaInSqKm":207600,
        "population":9685000,
        "currencyCode":"BYR",
        "languages":["be", "ru"],
        "geoNameId":"630336",
        "direction":{
            "west":23.176889,
            "east":56.165806,
            "north":32.770805,
            "south":51.256416
        },
        "continent":"EU"
    },
    {
        "code":"BZ",
        "name":"Belize",
        "isoNumeric":"084",
        "isoAlpha3":"BLZ",
        "fipsCode":"BH",
        "continentName":"North America",
        "capital":"Belmopan",
        "areaInSqKm":22966,
        "population":314522,
        "currencyCode":"BZD",
        "languages":["en-BZ", "es"],
        "geoNameId":"3582678",
        "direction":{
            "west":-89.224815,
            "east":18.496557,
            "north":-87.776985,
            "south":15.8893
        },
        "continent":"NA"
    },
    {
        "code":"CA",
        "name":"Canada",
        "isoNumeric":"124",
        "isoAlpha3":"CAN",
        "fipsCode":"CA",
        "continentName":"North America",
        "capital":"Ottawa",
        "areaInSqKm":9984670,
        "population":33679000,
        "currencyCode":"CAD",
        "languages":["en-CA", "fr-CA", "iu"],
        "geoNameId":"6251999",
        "direction":{
            "west":-141,
            "east":83.110626,
            "north":-52.636291,
            "south":41.67598
        },
        "continent":"NA"
    },
    {
        "code":"CC",
        "name":"Cocos [Keeling] Islands",
        "isoNumeric":"166",
        "isoAlpha3":"CCK",
        "fipsCode":"CK",
        "continentName":"Asia",
        "capital":"West Island",
        "areaInSqKm":14,
        "population":628,
        "currencyCode":"AUD",
        "languages":["ms-CC", "en"],
        "geoNameId":"1547376",
        "direction":{
            "west":96.816941408,
            "east":-12.072459094,
            "north":96.929489344,
            "south":-12.208725839
        },
        "continent":"AS"
    },
    {
        "code":"CD",
        "name":"Congo",
        "isoNumeric":"180",
        "isoAlpha3":"COD",
        "fipsCode":"CG",
        "continentName":"Africa",
        "capital":"Kinshasa",
        "areaInSqKm":2345410,
        "population":70916439,
        "currencyCode":"CDF",
        "languages":["fr-CD", "ln", "kg"],
        "geoNameId":"203312",
        "direction":{
            "west":12.204144,
            "east":5.386098,
            "north":31.305912,
            "south":-13.455675
        },
        "continent":"AF"
    },
    {
        "code":"CF",
        "name":"Central African Republic",
        "isoNumeric":"140",
        "isoAlpha3":"CAF",
        "fipsCode":"CT",
        "continentName":"Africa",
        "capital":"Bangui",
        "areaInSqKm":622984,
        "population":4844927,
        "currencyCode":"XAF",
        "languages":["fr-CF", "sg", "ln", "kg"],
        "geoNameId":"239880",
        "direction":{
            "west":14.420097,
            "east":11.007569,
            "north":27.463421,
            "south":2.220514
        },
        "continent":"AF"
    },
    {
        "code":"CG",
        "name":"Republic of the Congo",
        "isoNumeric":"178",
        "isoAlpha3":"COG",
        "fipsCode":"CF",
        "continentName":"Africa",
        "capital":"Brazzaville",
        "areaInSqKm":342000,
        "population":3039126,
        "currencyCode":"XAF",
        "languages":["fr-CG", "kg", "ln-CG"],
        "geoNameId":"2260494",
        "direction":{
            "west":11.205009,
            "east":3.703082,
            "north":18.649839,
            "south":-5.027223
        },
        "continent":"AF"
    },
    {
        "code":"CH",
        "name":"Switzerland",
        "isoNumeric":"756",
        "isoAlpha3":"CHE",
        "fipsCode":"SZ",
        "continentName":"Europe",
        "capital":"Berne",
        "areaInSqKm":41290,
        "population":7581000,
        "currencyCode":"CHF",
        "languages":["de-CH", "fr-CH", "it-CH", "rm"],
        "geoNameId":"2658434",
        "direction":{
            "west":5.957472,
            "east":47.805332,
            "north":10.491472,
            "south":45.825695
        },
        "continent":"EU"
    },
    {
        "code":"CI",
        "name":"Ivory Coast",
        "isoNumeric":"384",
        "isoAlpha3":"CIV",
        "fipsCode":"IV",
        "continentName":"Africa",
        "capital":"Yamoussoukro",
        "areaInSqKm":322460,
        "population":21058798,
        "currencyCode":"XOF",
        "languages":["fr-CI"],
        "geoNameId":"2287781",
        "direction":{
            "west":-8.599302,
            "east":10.736642,
            "north":-2.494897,
            "south":4.357067
        },
        "continent":"AF"
    },
    {
        "code":"CK",
        "name":"Cook Islands",
        "isoNumeric":"184",
        "isoAlpha3":"COK",
        "fipsCode":"CW",
        "continentName":"Oceania",
        "capital":"Avarua",
        "areaInSqKm":240,
        "population":21388,
        "currencyCode":"NZD",
        "languages":["en-CK", "mi"],
        "geoNameId":"1899402",
        "direction":{
            "west":-161.093658,
            "east":-10.023114,
            "north":-157.312134,
            "south":-21.944164
        },
        "continent":"OC"
    },
    {
        "code":"CL",
        "name":"Chile",
        "isoNumeric":"152",
        "isoAlpha3":"CHL",
        "fipsCode":"CI",
        "continentName":"South America",
        "capital":"Santiago",
        "areaInSqKm":756950,
        "population":16746491,
        "currencyCode":"CLP",
        "languages":["es-CL"],
        "geoNameId":"3895114",
        "direction":{
            "west":-80.785851,
            "east":-17.507553,
            "north":-66.417557,
            "south":-55.916348
        },
        "continent":"SA"
    },
    {
        "code":"CM",
        "name":"Cameroon",
        "isoNumeric":"120",
        "isoAlpha3":"CMR",
        "fipsCode":"CM",
        "continentName":"Africa",
        "capital":"Yaoundé",
        "areaInSqKm":475440,
        "population":19294149,
        "currencyCode":"XAF",
        "languages":["en-CM", "fr-CM"],
        "geoNameId":"2233387",
        "direction":{
            "west":8.494763,
            "east":13.078056,
            "north":16.192116,
            "south":1.652548
        },
        "continent":"AF"
    },
    {
        "code":"CN",
        "name":"China",
        "isoNumeric":"156",
        "isoAlpha3":"CHN",
        "fipsCode":"CH",
        "continentName":"Asia",
        "capital":"Beijing",
        "areaInSqKm":9596960,
        "population":1330044000,
        "currencyCode":"CNY",
        "languages":["zh-CN", "yue", "wuu", "dta", "ug", "za"],
        "geoNameId":"1814991",
        "direction":{
            "west":73.557693,
            "east":53.56086,
            "north":134.773911,
            "south":15.775416
        },
        "continent":"AS"
    },
    {
        "code":"CO",
        "name":"Colombia",
        "isoNumeric":"170",
        "isoAlpha3":"COL",
        "fipsCode":"CO",
        "continentName":"South America",
        "capital":"Bogotá",
        "areaInSqKm":1138910,
        "population":44205293,
        "currencyCode":"COP",
        "languages":["es-CO"],
        "geoNameId":"3686110",
        "direction":{
            "west":-81.728111,
            "east":13.380502,
            "north":-66.869835,
            "south":-4.225869
        },
        "continent":"SA"
    },
    {
        "code":"CR",
        "name":"Costa Rica",
        "isoNumeric":"188",
        "isoAlpha3":"CRI",
        "fipsCode":"CS",
        "continentName":"North America",
        "capital":"San José",
        "areaInSqKm":51100,
        "population":4516220,
        "currencyCode":"CRC",
        "languages":["es-CR", "en"],
        "geoNameId":"3624060",
        "direction":{
            "west":-85.950623,
            "east":11.216819,
            "north":-82.555992,
            "south":8.032975
        },
        "continent":"NA"
    },
    {
        "code":"CU",
        "name":"Cuba",
        "isoNumeric":"192",
        "isoAlpha3":"CUB",
        "fipsCode":"CU",
        "continentName":"North America",
        "capital":"Havana",
        "areaInSqKm":110860,
        "population":11423000,
        "currencyCode":"CUP",
        "languages":["es-CU"],
        "geoNameId":"3562981",
        "direction":{
            "west":-84.957428,
            "east":23.226042,
            "north":-74.131775,
            "south":19.828083
        },
        "continent":"NA"
    },
    {
        "code":"CV",
        "name":"Cape Verde",
        "isoNumeric":"132",
        "isoAlpha3":"CPV",
        "fipsCode":"CV",
        "continentName":"Africa",
        "capital":"Praia",
        "areaInSqKm":4033,
        "population":508659,
        "currencyCode":"CVE",
        "languages":["pt-CV"],
        "geoNameId":"3374766",
        "direction":{
            "west":-25.358747,
            "east":17.197178,
            "north":-22.669443,
            "south":14.808022
        },
        "continent":"AF"
    },
    {
        "code":"CW",
        "name":"Curacao",
        "isoNumeric":"531",
        "isoAlpha3":"CUW",
        "fipsCode":"UC",
        "continentName":"North America",
        "capital":"Willemstad",
        "areaInSqKm":null,
        "population":141766,
        "currencyCode":"ANG",
        "languages":["nl", "pap"],
        "geoNameId":"7626836",
        "direction":{
            "west":-69.157204,
            "east":12.385672,
            "north":-68.733948,
            "south":12.032745
        },
        "continent":"NA"
    },
    {
        "code":"CX",
        "name":"Christmas Island",
        "isoNumeric":"162",
        "isoAlpha3":"CXR",
        "fipsCode":"KT",
        "continentName":"Asia",
        "capital":"The Settlement",
        "areaInSqKm":135,
        "population":1500,
        "currencyCode":"AUD",
        "languages":["en", "zh", "ms-CC"],
        "geoNameId":"2078138",
        "direction":{
            "west":105.533276992,
            "east":-10.412356007,
            "north":105.712596992,
            "south":-10.5704829995
        },
        "continent":"AS"
    },
    {
        "code":"CY",
        "name":"Cyprus",
        "isoNumeric":"196",
        "isoAlpha3":"CYP",
        "fipsCode":"CY",
        "continentName":"Europe",
        "capital":"Nicosia",
        "areaInSqKm":9250,
        "population":1102677,
        "currencyCode":"EUR",
        "languages":["el-CY", "tr-CY", "en"],
        "geoNameId":"146669",
        "direction":{
            "west":32.27308300000004,
            "east":35.701527,
            "north":34.59791599999994,
            "south":34.6332846722908
        },
        "continent":"EU"
    },
    {
        "code":"CZ",
        "name":"Czechia",
        "isoNumeric":"203",
        "isoAlpha3":"CZE",
        "fipsCode":"EZ",
        "continentName":"Europe",
        "capital":"Prague",
        "areaInSqKm":78866,
        "population":10476000,
        "currencyCode":"CZK",
        "languages":["cs", "sk"],
        "geoNameId":"3077311",
        "direction":{
            "west":12.096194,
            "east":51.058887,
            "north":18.860111,
            "south":48.542915
        },
        "continent":"EU"
    },
    {
        "code":"DE",
        "name":"Germany",
        "isoNumeric":"276",
        "isoAlpha3":"DEU",
        "fipsCode":"GM",
        "continentName":"Europe",
        "capital":"Berlin",
        "areaInSqKm":357021,
        "population":81802257,
        "currencyCode":"EUR",
        "languages":["de"],
        "geoNameId":"2921044",
        "direction":{
            "west":5.865639,
            "east":55.055637,
            "north":15.039889,
            "south":47.275776
        },
        "continent":"EU"
    },
    {
        "code":"DJ",
        "name":"Djibouti",
        "isoNumeric":"262",
        "isoAlpha3":"DJI",
        "fipsCode":"DJ",
        "continentName":"Africa",
        "capital":"Djibouti",
        "areaInSqKm":23000,
        "population":740528,
        "currencyCode":"DJF",
        "languages":["fr-DJ", "ar", "so-DJ", "aa"],
        "geoNameId":"223816",
        "direction":{
            "west":41.773472,
            "east":12.706833,
            "north":43.416973,
            "south":10.909917
        },
        "continent":"AF"
    },
    {
        "code":"DK",
        "name":"Denmark",
        "isoNumeric":"208",
        "isoAlpha3":"DNK",
        "fipsCode":"DA",
        "continentName":"Europe",
        "capital":"Copenhagen",
        "areaInSqKm":43094,
        "population":5484000,
        "currencyCode":"DKK",
        "languages":["da-DK", "en", "fo", "de-DK"],
        "geoNameId":"2623032",
        "direction":{
            "west":8.075611,
            "east":57.748417,
            "north":15.158834,
            "south":54.562389
        },
        "continent":"EU"
    },
    {
        "code":"DM",
        "name":"Dominica",
        "isoNumeric":"212",
        "isoAlpha3":"DMA",
        "fipsCode":"DO",
        "continentName":"North America",
        "capital":"Roseau",
        "areaInSqKm":754,
        "population":72813,
        "currencyCode":"XCD",
        "languages":["en-DM"],
        "geoNameId":"3575830",
        "direction":{
            "west":-61.484108,
            "east":15.631809,
            "north":-61.244152,
            "south":15.20169
        },
        "continent":"NA"
    },
    {
        "code":"DO",
        "name":"Dominican Republic",
        "isoNumeric":"214",
        "isoAlpha3":"DOM",
        "fipsCode":"DR",
        "continentName":"North America",
        "capital":"Santo Domingo",
        "areaInSqKm":48730,
        "population":9823821,
        "currencyCode":"DOP",
        "languages":["es-DO"],
        "geoNameId":"3508796",
        "direction":{
            "west":-72.003487,
            "east":19.929859,
            "north":-68.32,
            "south":17.543159
        },
        "continent":"NA"
    },
    {
        "code":"DZ",
        "name":"Algeria",
        "isoNumeric":"012",
        "isoAlpha3":"DZA",
        "fipsCode":"AG",
        "continentName":"Africa",
        "capital":"Algiers",
        "areaInSqKm":2381740,
        "population":34586184,
        "currencyCode":"DZD",
        "languages":["ar-DZ"],
        "geoNameId":"2589581",
        "direction":{
            "west":-8.673868,
            "east":37.093723,
            "north":11.979548,
            "south":18.960028
        },
        "continent":"AF"
    },
    {
        "code":"EC",
        "name":"Ecuador",
        "isoNumeric":"218",
        "isoAlpha3":"ECU",
        "fipsCode":"EC",
        "continentName":"South America",
        "capital":"Quito",
        "areaInSqKm":283560,
        "population":14790608,
        "currencyCode":"USD",
        "languages":["es-EC"],
        "geoNameId":"3658394",
        "direction":{
            "west":-81.078598,
            "east":1.43902,
            "north":-75.184586,
            "south":-4.998823
        },
        "continent":"SA"
    },
    {
        "code":"EE",
        "name":"Estonia",
        "isoNumeric":"233",
        "isoAlpha3":"EST",
        "fipsCode":"EN",
        "continentName":"Europe",
        "capital":"Tallinn",
        "areaInSqKm":45226,
        "population":1291170,
        "currencyCode":"EUR",
        "languages":["et", "ru"],
        "geoNameId":"453733",
        "direction":{
            "west":21.837584,
            "east":59.676224,
            "north":28.209972,
            "south":57.516193
        },
        "continent":"EU"
    },
    {
        "code":"EG",
        "name":"Egypt",
        "isoNumeric":"818",
        "isoAlpha3":"EGY",
        "fipsCode":"EG",
        "continentName":"Africa",
        "capital":"Cairo",
        "areaInSqKm":1001450,
        "population":80471869,
        "currencyCode":"EGP",
        "languages":["ar-EG", "en", "fr"],
        "geoNameId":"357994",
        "direction":{
            "west":24.698111,
            "east":31.667334,
            "north":35.794861,
            "south":21.725389
        },
        "continent":"AF"
    },
    {
        "code":"EH",
        "name":"Western Sahara",
        "isoNumeric":"732",
        "isoAlpha3":"ESH",
        "fipsCode":"WI",
        "continentName":"Africa",
        "capital":"El Aaiún",
        "areaInSqKm":266000,
        "population":273008,
        "currencyCode":"MAD",
        "languages":["ar", "mey"],
        "geoNameId":"2461445",
        "direction":{
            "west":-17.103182,
            "east":27.669674,
            "north":-8.670276,
            "south":20.774158
        },
        "continent":"AF"
    },
    {
        "code":"ER",
        "name":"Eritrea",
        "isoNumeric":"232",
        "isoAlpha3":"ERI",
        "fipsCode":"ER",
        "continentName":"Africa",
        "capital":"Asmara",
        "areaInSqKm":121320,
        "population":5792984,
        "currencyCode":"ERN",
        "languages":["aa-ER", "ar", "tig", "kun", "ti-ER"],
        "geoNameId":"338010",
        "direction":{
            "west":36.438778,
            "east":18.003084,
            "north":43.13464,
            "south":12.359555
        },
        "continent":"AF"
    },
    {
        "code":"ES",
        "name":"Spain",
        "isoNumeric":"724",
        "isoAlpha3":"ESP",
        "fipsCode":"SP",
        "continentName":"Europe",
        "capital":"Madrid",
        "areaInSqKm":504782,
        "population":46505963,
        "currencyCode":"EUR",
        "languages":["es-ES", "ca", "gl", "eu", "oc"],
        "geoNameId":"2510769",
        "direction":{
            "west":-9.290778,
            "east":43.791721,
            "north":4.315389,
            "south":36.000332
        },
        "continent":"EU"
    },
    {
        "code":"ET",
        "name":"Ethiopia",
        "isoNumeric":"231",
        "isoAlpha3":"ETH",
        "fipsCode":"ET",
        "continentName":"Africa",
        "capital":"Addis Ababa",
        "areaInSqKm":1127127,
        "population":88013491,
        "currencyCode":"ETB",
        "languages":["am", "en-ET", "om-ET", "ti-ET", "so-ET", "sid"],
        "geoNameId":"337996",
        "direction":{
            "west":32.999939,
            "east":14.89375,
            "north":47.986179,
            "south":3.402422
        },
        "continent":"AF"
    },
    {
        "code":"FI",
        "name":"Finland",
        "isoNumeric":"246",
        "isoAlpha3":"FIN",
        "fipsCode":"FI",
        "continentName":"Europe",
        "capital":"Helsinki",
        "areaInSqKm":337030,
        "population":5244000,
        "currencyCode":"EUR",
        "languages":["fi-FI", "sv-FI", "smn"],
        "geoNameId":"660013",
        "direction":{
            "west":20.556944,
            "east":70.096054,
            "north":31.580944,
            "south":59.808777
        },
        "continent":"EU"
    },
    {
        "code":"FJ",
        "name":"Fiji",
        "isoNumeric":"242",
        "isoAlpha3":"FJI",
        "fipsCode":"FJ",
        "continentName":"Oceania",
        "capital":"Suva",
        "areaInSqKm":18270,
        "population":875983,
        "currencyCode":"FJD",
        "languages":["en-FJ", "fj"],
        "geoNameId":"2205218",
        "direction":{
            "west":177.129334,
            "east":-12.480111,
            "north":-178.424438,
            "south":-20.67597
        },
        "continent":"OC"
    },
    {
        "code":"FK",
        "name":"Falkland Islands",
        "isoNumeric":"238",
        "isoAlpha3":"FLK",
        "fipsCode":"FK",
        "continentName":"South America",
        "capital":"Stanley",
        "areaInSqKm":12173,
        "population":2638,
        "currencyCode":"FKP",
        "languages":["en-FK"],
        "geoNameId":"3474414",
        "direction":{
            "west":-61.345192,
            "east":-51.24065,
            "north":-57.712486,
            "south":-52.360512
        },
        "continent":"SA"
    },
    {
        "code":"FM",
        "name":"Micronesia",
        "isoNumeric":"583",
        "isoAlpha3":"FSM",
        "fipsCode":"FM",
        "continentName":"Oceania",
        "capital":"Palikir",
        "areaInSqKm":702,
        "population":107708,
        "currencyCode":"USD",
        "languages":["en-FM", "chk", "pon", "yap", "kos", "uli", "woe", "nkr", "kpg"],
        "geoNameId":"2081918",
        "direction":{
            "west":137.33648,
            "east":10.08904,
            "north":163.03717,
            "south":1.02629
        },
        "continent":"OC"
    },
    {
        "code":"FO",
        "name":"Faroe Islands",
        "isoNumeric":"234",
        "isoAlpha3":"FRO",
        "fipsCode":"FO",
        "continentName":"Europe",
        "capital":"Tórshavn",
        "areaInSqKm":1399,
        "population":48228,
        "currencyCode":"DKK",
        "languages":["fo", "da-FO"],
        "geoNameId":"2622320",
        "direction":{
            "west":-7.458,
            "east":62.400749,
            "north":-6.399583,
            "south":61.394943
        },
        "continent":"EU"
    },
    {
        "code":"FR",
        "name":"France",
        "isoNumeric":"250",
        "isoAlpha3":"FRA",
        "fipsCode":"FR",
        "continentName":"Europe",
        "capital":"Paris",
        "areaInSqKm":547030,
        "population":64768389,
        "currencyCode":"EUR",
        "languages":["fr-FR", "frp", "br", "co", "ca", "eu", "oc"],
        "geoNameId":"3017382",
        "direction":{
            "west":-5.142222,
            "east":51.092804,
            "north":9.561556,
            "south":41.371582
        },
        "continent":"EU"
    },
    {
        "code":"GA",
        "name":"Gabon",
        "isoNumeric":"266",
        "isoAlpha3":"GAB",
        "fipsCode":"GB",
        "continentName":"Africa",
        "capital":"Libreville",
        "areaInSqKm":267667,
        "population":1545255,
        "currencyCode":"XAF",
        "languages":["fr-GA"],
        "geoNameId":"2400553",
        "direction":{
            "west":8.695471,
            "east":2.322612,
            "north":14.502347,
            "south":-3.978806
        },
        "continent":"AF"
    },
    {
        "code":"GB",
        "name":"United Kingdom",
        "isoNumeric":"826",
        "isoAlpha3":"GBR",
        "fipsCode":"UK",
        "continentName":"Europe",
        "capital":"London",
        "areaInSqKm":244820,
        "population":62348447,
        "currencyCode":"GBP",
        "languages":["en-GB", "cy-GB", "gd"],
        "geoNameId":"2635167",
        "direction":{
            "west":-8.623555,
            "east":59.360249,
            "north":1.759,
            "south":49.906193
        },
        "continent":"EU"
    },
    {
        "code":"GD",
        "name":"Grenada",
        "isoNumeric":"308",
        "isoAlpha3":"GRD",
        "fipsCode":"GJ",
        "continentName":"North America",
        "capital":"St. George's",
        "areaInSqKm":344,
        "population":107818,
        "currencyCode":"XCD",
        "languages":["en-GD"],
        "geoNameId":"3580239",
        "direction":{
            "west":-61.802344,
            "east":12.318283928171299,
            "north":-61.57676970108031,
            "south":11.986893
        },
        "continent":"NA"
    },
    {
        "code":"GE",
        "name":"Georgia",
        "isoNumeric":"268",
        "isoAlpha3":"GEO",
        "fipsCode":"GG",
        "continentName":"Asia",
        "capital":"Tbilisi",
        "areaInSqKm":69700,
        "population":4630000,
        "currencyCode":"GEL",
        "languages":["ka", "ru", "hy", "az"],
        "geoNameId":"614540",
        "direction":{
            "west":40.010139,
            "east":43.586498,
            "north":46.725971,
            "south":41.053196
        },
        "continent":"AS"
    },
    {
        "code":"GF",
        "name":"French Guiana",
        "isoNumeric":"254",
        "isoAlpha3":"GUF",
        "fipsCode":"FG",
        "continentName":"South America",
        "capital":"Cayenne",
        "areaInSqKm":91000,
        "population":195506,
        "currencyCode":"EUR",
        "languages":["fr-GF"],
        "geoNameId":"3381670",
        "direction":{
            "west":-54.542511,
            "east":5.776496,
            "north":-51.613949,
            "south":2.127094
        },
        "continent":"SA"
    },
    {
        "code":"GG",
        "name":"Guernsey",
        "isoNumeric":"831",
        "isoAlpha3":"GGY",
        "fipsCode":"GK",
        "continentName":"Europe",
        "capital":"St Peter Port",
        "areaInSqKm":78,
        "population":65228,
        "currencyCode":"GBP",
        "languages":["en", "fr"],
        "geoNameId":"3042362",
        "direction":{
            "west":-2.682472,
            "east":49.738609,
            "north":-2.163889,
            "south":49.412777
        },
        "continent":"EU"
    },
    {
        "code":"GH",
        "name":"Ghana",
        "isoNumeric":"288",
        "isoAlpha3":"GHA",
        "fipsCode":"GH",
        "continentName":"Africa",
        "capital":"Accra",
        "areaInSqKm":239460,
        "population":24339838,
        "currencyCode":"GHS",
        "languages":["en-GH", "ak", "ee", "tw"],
        "geoNameId":"2300660",
        "direction":{
            "west":-3.25542,
            "east":11.173301,
            "north":1.191781,
            "south":4.736723
        },
        "continent":"AF"
    },
    {
        "code":"GI",
        "name":"Gibraltar",
        "isoNumeric":"292",
        "isoAlpha3":"GIB",
        "fipsCode":"GI",
        "continentName":"Europe",
        "capital":"Gibraltar",
        "areaInSqKm":6.5,
        "population":27884,
        "currencyCode":"GIP",
        "languages":["en-GI", "es", "it", "pt"],
        "geoNameId":"2411586",
        "direction":{
            "west":-5.36626149743654,
            "east":36.155439135670726,
            "north":-5.338285164001491,
            "south":36.10903070140248
        },
        "continent":"EU"
    },
    {
        "code":"GL",
        "name":"Greenland",
        "isoNumeric":"304",
        "isoAlpha3":"GRL",
        "fipsCode":"GL",
        "continentName":"North America",
        "capital":"Nuuk",
        "areaInSqKm":2166086,
        "population":56375,
        "currencyCode":"DKK",
        "languages":["kl", "da-GL", "en"],
        "geoNameId":"3425505",
        "direction":{
            "west":-73.04203,
            "east":83.627357,
            "north":-11.312319,
            "south":59.777401
        },
        "continent":"NA"
    },
    {
        "code":"GM",
        "name":"Gambia",
        "isoNumeric":"270",
        "isoAlpha3":"GMB",
        "fipsCode":"GA",
        "continentName":"Africa",
        "capital":"Banjul",
        "areaInSqKm":11300,
        "population":1593256,
        "currencyCode":"GMD",
        "languages":["en-GM", "mnk", "wof", "wo", "ff"],
        "geoNameId":"2413451",
        "direction":{
            "west":-16.825079,
            "east":13.826571,
            "north":-13.797793,
            "south":13.064252
        },
        "continent":"AF"
    },
    {
        "code":"GN",
        "name":"Guinea",
        "isoNumeric":"324",
        "isoAlpha3":"GIN",
        "fipsCode":"GV",
        "continentName":"Africa",
        "capital":"Conakry",
        "areaInSqKm":245857,
        "population":10324025,
        "currencyCode":"GNF",
        "languages":["fr-GN"],
        "geoNameId":"2420477",
        "direction":{
            "west":-14.926619,
            "east":12.67622,
            "north":-7.641071,
            "south":7.193553
        },
        "continent":"AF"
    },
    {
        "code":"GP",
        "name":"Guadeloupe",
        "isoNumeric":"312",
        "isoAlpha3":"GLP",
        "fipsCode":"GP",
        "continentName":"North America",
        "capital":"Basse-Terre",
        "areaInSqKm":1780,
        "population":443000,
        "currencyCode":"EUR",
        "languages":["fr-GP"],
        "geoNameId":"3579143",
        "direction":{
            "west":-61.544765,
            "east":16.516848,
            "north":-61,
            "south":15.867565
        },
        "continent":"NA"
    },
    {
        "code":"GQ",
        "name":"Equatorial Guinea",
        "isoNumeric":"226",
        "isoAlpha3":"GNQ",
        "fipsCode":"EK",
        "continentName":"Africa",
        "capital":"Malabo",
        "areaInSqKm":28051,
        "population":1014999,
        "currencyCode":"XAF",
        "languages":["es-GQ", "fr"],
        "geoNameId":"2309096",
        "direction":{
            "west":9.346865,
            "east":2.346989,
            "north":11.335724,
            "south":0.92086
        },
        "continent":"AF"
    },
    {
        "code":"GR",
        "name":"Greece",
        "isoNumeric":"300",
        "isoAlpha3":"GRC",
        "fipsCode":"GR",
        "continentName":"Europe",
        "capital":"Athens",
        "areaInSqKm":131940,
        "population":11000000,
        "currencyCode":"EUR",
        "languages":["el-GR", "en", "fr"],
        "geoNameId":"390903",
        "direction":{
            "west":19.3736035624134,
            "east":41.7484999849641,
            "north":28.2470831714347,
            "south":34.8020663391466
        },
        "continent":"EU"
    },
    {
        "code":"GS",
        "name":"South Georgia and the South Sandwich Islands",
        "isoNumeric":"239",
        "isoAlpha3":"SGS",
        "fipsCode":"SX",
        "continentName":"Antarctica",
        "capital":"Grytviken",
        "areaInSqKm":3903,
        "population":30,
        "currencyCode":"GBP",
        "languages":["en"],
        "geoNameId":"3474415",
        "direction":{
            "west":-38.021175,
            "east":-53.970467,
            "north":-26.229326,
            "south":-59.479259
        },
        "continent":"AN"
    },
    {
        "code":"GT",
        "name":"Guatemala",
        "isoNumeric":"320",
        "isoAlpha3":"GTM",
        "fipsCode":"GT",
        "continentName":"North America",
        "capital":"Guatemala City",
        "areaInSqKm":108890,
        "population":13550440,
        "currencyCode":"GTQ",
        "languages":["es-GT"],
        "geoNameId":"3595528",
        "direction":{
            "west":-92.23629,
            "east":17.81522,
            "north":-88.223198,
            "south":13.737302
        },
        "continent":"NA"
    },
    {
        "code":"GU",
        "name":"Guam",
        "isoNumeric":"316",
        "isoAlpha3":"GUM",
        "fipsCode":"GQ",
        "continentName":"Oceania",
        "capital":"Hagåtña",
        "areaInSqKm":549,
        "population":159358,
        "currencyCode":"USD",
        "languages":["en-GU", "ch-GU"],
        "geoNameId":"4043988",
        "direction":{
            "west":144.619247,
            "east":13.652333,
            "north":144.953979,
            "south":13.240611
        },
        "continent":"OC"
    },
    {
        "code":"GW",
        "name":"Guinea-Bissau",
        "isoNumeric":"624",
        "isoAlpha3":"GNB",
        "fipsCode":"PU",
        "continentName":"Africa",
        "capital":"Bissau",
        "areaInSqKm":36120,
        "population":1565126,
        "currencyCode":"XOF",
        "languages":["pt-GW", "pov"],
        "geoNameId":"2372248",
        "direction":{
            "west":-16.717535,
            "east":12.680789,
            "north":-13.636522,
            "south":10.924265
        },
        "continent":"AF"
    },
    {
        "code":"GY",
        "name":"Guyana",
        "isoNumeric":"328",
        "isoAlpha3":"GUY",
        "fipsCode":"GY",
        "continentName":"South America",
        "capital":"Georgetown",
        "areaInSqKm":214970,
        "population":748486,
        "currencyCode":"GYD",
        "languages":["en-GY"],
        "geoNameId":"3378535",
        "direction":{
            "west":-61.384762,
            "east":8.557567,
            "north":-56.480251,
            "south":1.17508
        },
        "continent":"SA"
    },
    {
        "code":"HK",
        "name":"Hong Kong",
        "isoNumeric":"344",
        "isoAlpha3":"HKG",
        "fipsCode":"HK",
        "continentName":"Asia",
        "capital":"Hong Kong",
        "areaInSqKm":1092,
        "population":6898686,
        "currencyCode":"HKD",
        "languages":["zh-HK", "yue", "zh", "en"],
        "geoNameId":"1819730",
        "direction":{
            "west":113.837753,
            "east":22.559778,
            "north":114.434753,
            "south":22.15325
        },
        "continent":"AS"
    },
    {
        "code":"HM",
        "name":"Heard Island and McDonald Islands",
        "isoNumeric":"334",
        "isoAlpha3":"HMD",
        "fipsCode":"HM",
        "continentName":"Antarctica",
        "capital":"",
        "areaInSqKm":412,
        "population":0,
        "currencyCode":"AUD",
        "languages":[""],
        "geoNameId":"1547314",
        "direction":{
            "west":72.596535,
            "east":-52.909416,
            "north":73.859146,
            "south":-53.192001
        },
        "continent":"AN"
    },
    {
        "code":"HN",
        "name":"Honduras",
        "isoNumeric":"340",
        "isoAlpha3":"HND",
        "fipsCode":"HO",
        "continentName":"North America",
        "capital":"Tegucigalpa",
        "areaInSqKm":112090,
        "population":7989415,
        "currencyCode":"HNL",
        "languages":["es-HN"],
        "geoNameId":"3608932",
        "direction":{
            "west":-89.350792,
            "east":16.510256,
            "north":-83.155403,
            "south":12.982411
        },
        "continent":"NA"
    },
    {
        "code":"HR",
        "name":"Croatia",
        "isoNumeric":"191",
        "isoAlpha3":"HRV",
        "fipsCode":"HR",
        "continentName":"Europe",
        "capital":"Zagreb",
        "areaInSqKm":56542,
        "population":4491000,
        "currencyCode":"HRK",
        "languages":["hr-HR", "sr"],
        "geoNameId":"3202326",
        "direction":{
            "west":13.493222,
            "east":46.53875,
            "north":19.427389,
            "south":42.43589
        },
        "continent":"EU"
    },
    {
        "code":"HT",
        "name":"Haiti",
        "isoNumeric":"332",
        "isoAlpha3":"HTI",
        "fipsCode":"HA",
        "continentName":"North America",
        "capital":"Port-au-Prince",
        "areaInSqKm":27750,
        "population":9648924,
        "currencyCode":"HTG",
        "languages":["ht", "fr-HT"],
        "geoNameId":"3723988",
        "direction":{
            "west":-74.478584,
            "east":20.08782,
            "north":-71.613358,
            "south":18.021032
        },
        "continent":"NA"
    },
    {
        "code":"HU",
        "name":"Hungary",
        "isoNumeric":"348",
        "isoAlpha3":"HUN",
        "fipsCode":"HU",
        "continentName":"Europe",
        "capital":"Budapest",
        "areaInSqKm":93030,
        "population":9930000,
        "currencyCode":"HUF",
        "languages":["hu-HU"],
        "geoNameId":"719819",
        "direction":{
            "west":16.111889,
            "east":48.585667,
            "north":22.906,
            "south":45.74361
        },
        "continent":"EU"
    },
    {
        "code":"ID",
        "name":"Indonesia",
        "isoNumeric":"360",
        "isoAlpha3":"IDN",
        "fipsCode":"ID",
        "continentName":"Asia",
        "capital":"Jakarta",
        "areaInSqKm":1919440,
        "population":242968342,
        "currencyCode":"IDR",
        "languages":["id", "en", "nl", "jv"],
        "geoNameId":"1643084",
        "direction":{
            "west":95.009331,
            "east":5.904417,
            "north":141.021805,
            "south":-10.941861
        },
        "continent":"AS"
    },
    {
        "code":"IE",
        "name":"Ireland",
        "isoNumeric":"372",
        "isoAlpha3":"IRL",
        "fipsCode":"EI",
        "continentName":"Europe",
        "capital":"Dublin",
        "areaInSqKm":70280,
        "population":4622917,
        "currencyCode":"EUR",
        "languages":["en-IE", "ga-IE"],
        "geoNameId":"2963597",
        "direction":{
            "west":-10.478556,
            "east":55.387917,
            "north":-6.002389,
            "south":51.451584
        },
        "continent":"EU"
    },
    {
        "code":"IL",
        "name":"Israel",
        "isoNumeric":"376",
        "isoAlpha3":"ISR",
        "fipsCode":"IS",
        "continentName":"Asia",
        "capital":"",
        "areaInSqKm":20770,
        "population":7353985,
        "currencyCode":"ILS",
        "languages":["he", "ar-IL", "en-IL", ""],
        "geoNameId":"294640",
        "direction":{
            "west":34.270278754419145,
            "east":33.340137,
            "north":35.876804,
            "south":29.496639
        },
        "continent":"AS"
    },
    {
        "code":"IM",
        "name":"Isle of Man",
        "isoNumeric":"833",
        "isoAlpha3":"IMN",
        "fipsCode":"IM",
        "continentName":"Europe",
        "capital":"Douglas",
        "areaInSqKm":572,
        "population":75049,
        "currencyCode":"GBP",
        "languages":["en", "gv"],
        "geoNameId":"3042225",
        "direction":{
            "west":-4.798722,
            "east":54.419724,
            "north":-4.3115,
            "south":54.055916
        },
        "continent":"EU"
    },
    {
        "code":"IN",
        "name":"India",
        "isoNumeric":"356",
        "isoAlpha3":"IND",
        "fipsCode":"IN",
        "continentName":"Asia",
        "capital":"New Delhi",
        "areaInSqKm":3287590,
        "population":1173108018,
        "currencyCode":"INR",
        "languages":["en-IN", "hi", "bn", "te", "mr", "ta", "ur", "gu", "kn", "ml", "or", "pa", "as", "bh", "sat", "ks", "ne", "sd", "kok", "doi", "mni", "sit", "sa", "fr", "lus", "inc"],
        "geoNameId":"1269750",
        "direction":{
            "west":68.186691,
            "east":35.504223,
            "north":97.403305,
            "south":6.747139
        },
        "continent":"AS"
    },
    {
        "code":"IO",
        "name":"British Indian Ocean Territory",
        "isoNumeric":"086",
        "isoAlpha3":"IOT",
        "fipsCode":"IO",
        "continentName":"Asia",
        "capital":"",
        "areaInSqKm":60,
        "population":4000,
        "currencyCode":"USD",
        "languages":["en-IO"],
        "geoNameId":"1282588",
        "direction":{
            "west":71.259972,
            "east":-5.268333,
            "north":72.493164,
            "south":-7.438028
        },
        "continent":"AS"
    },
    {
        "code":"IQ",
        "name":"Iraq",
        "isoNumeric":"368",
        "isoAlpha3":"IRQ",
        "fipsCode":"IZ",
        "continentName":"Asia",
        "capital":"Baghdad",
        "areaInSqKm":437072,
        "population":29671605,
        "currencyCode":"IQD",
        "languages":["ar-IQ", "ku", "hy"],
        "geoNameId":"99237",
        "direction":{
            "west":38.795887,
            "east":37.378029,
            "north":48.575916,
            "south":29.069445
        },
        "continent":"AS"
    },
    {
        "code":"IR",
        "name":"Iran",
        "isoNumeric":"364",
        "isoAlpha3":"IRN",
        "fipsCode":"IR",
        "continentName":"Asia",
        "capital":"Tehran",
        "areaInSqKm":1648000,
        "population":76923300,
        "currencyCode":"IRR",
        "languages":["fa-IR", "ku"],
        "geoNameId":"130758",
        "direction":{
            "west":44.047279,
            "east":39.777222,
            "north":63.317471,
            "south":25.064083
        },
        "continent":"AS"
    },
    {
        "code":"IS",
        "name":"Iceland",
        "isoNumeric":"352",
        "isoAlpha3":"ISL",
        "fipsCode":"IC",
        "continentName":"Europe",
        "capital":"Reykjavik",
        "areaInSqKm":103000,
        "population":308910,
        "currencyCode":"ISK",
        "languages":["is", "en", "de", "da", "sv", "no"],
        "geoNameId":"2629691",
        "direction":{
            "west":-24.546524,
            "east":66.53463,
            "north":-13.495815,
            "south":63.393253
        },
        "continent":"EU"
    },
    {
        "code":"IT",
        "name":"Italy",
        "isoNumeric":"380",
        "isoAlpha3":"ITA",
        "fipsCode":"IT",
        "continentName":"Europe",
        "capital":"Rome",
        "areaInSqKm":301230,
        "population":60340328,
        "currencyCode":"EUR",
        "languages":["it-IT", "de-IT", "fr-IT", "sc", "ca", "co", "sl"],
        "geoNameId":"3175395",
        "direction":{
            "west":6.614889,
            "east":47.095196,
            "north":18.513445,
            "south":36.652779
        },
        "continent":"EU"
    },
    {
        "code":"JE",
        "name":"Jersey",
        "isoNumeric":"832",
        "isoAlpha3":"JEY",
        "fipsCode":"JE",
        "continentName":"Europe",
        "capital":"Saint Helier",
        "areaInSqKm":116,
        "population":90812,
        "currencyCode":"GBP",
        "languages":["en", "pt"],
        "geoNameId":"3042142",
        "direction":{
            "west":-2.260028,
            "east":49.265057,
            "north":-2.022083,
            "south":49.169834
        },
        "continent":"EU"
    },
    {
        "code":"JM",
        "name":"Jamaica",
        "isoNumeric":"388",
        "isoAlpha3":"JAM",
        "fipsCode":"JM",
        "continentName":"North America",
        "capital":"Kingston",
        "areaInSqKm":10991,
        "population":2847232,
        "currencyCode":"JMD",
        "languages":["en-JM"],
        "geoNameId":"3489940",
        "direction":{
            "west":-78.366638,
            "east":18.526976,
            "north":-76.180321,
            "south":17.703554
        },
        "continent":"NA"
    },
    {
        "code":"JO",
        "name":"Jordan",
        "isoNumeric":"400",
        "isoAlpha3":"JOR",
        "fipsCode":"JO",
        "continentName":"Asia",
        "capital":"Amman",
        "areaInSqKm":92300,
        "population":6407085,
        "currencyCode":"JOD",
        "languages":["ar-JO", "en"],
        "geoNameId":"248816",
        "direction":{
            "west":34.959999,
            "east":33.367668,
            "north":39.301167,
            "south":29.185888
        },
        "continent":"AS"
    },
    {
        "code":"JP",
        "name":"Japan",
        "isoNumeric":"392",
        "isoAlpha3":"JPN",
        "fipsCode":"JA",
        "continentName":"Asia",
        "capital":"Tokyo",
        "areaInSqKm":377835,
        "population":127288000,
        "currencyCode":"JPY",
        "languages":["ja"],
        "geoNameId":"1861060",
        "direction":{
            "west":122.93853,
            "east":45.52314,
            "north":145.820892,
            "south":24.249472
        },
        "continent":"AS"
    },
    {
        "code":"KE",
        "name":"Kenya",
        "isoNumeric":"404",
        "isoAlpha3":"KEN",
        "fipsCode":"KE",
        "continentName":"Africa",
        "capital":"Nairobi",
        "areaInSqKm":582650,
        "population":40046566,
        "currencyCode":"KES",
        "languages":["en-KE", "sw-KE"],
        "geoNameId":"192950",
        "direction":{
            "west":33.908859,
            "east":5.019938,
            "north":41.899078,
            "south":-4.678047
        },
        "continent":"AF"
    },
    {
        "code":"KG",
        "name":"Kyrgyzstan",
        "isoNumeric":"417",
        "isoAlpha3":"KGZ",
        "fipsCode":"KG",
        "continentName":"Asia",
        "capital":"Bishkek",
        "areaInSqKm":198500,
        "population":5508626,
        "currencyCode":"KGS",
        "languages":["ky", "uz", "ru"],
        "geoNameId":"1527747",
        "direction":{
            "west":69.276611,
            "east":43.238224,
            "north":80.283165,
            "south":39.172832
        },
        "continent":"AS"
    },
    {
        "code":"KH",
        "name":"Cambodia",
        "isoNumeric":"116",
        "isoAlpha3":"KHM",
        "fipsCode":"CB",
        "continentName":"Asia",
        "capital":"Phnom Penh",
        "areaInSqKm":181040,
        "population":14453680,
        "currencyCode":"KHR",
        "languages":["km", "fr", "en"],
        "geoNameId":"1831722",
        "direction":{
            "west":102.339996,
            "east":14.686417,
            "north":107.627724,
            "south":10.409083
        },
        "continent":"AS"
    },
    {
        "code":"KI",
        "name":"Kiribati",
        "isoNumeric":"296",
        "isoAlpha3":"KIR",
        "fipsCode":"KR",
        "continentName":"Oceania",
        "capital":"Tarawa",
        "areaInSqKm":811,
        "population":92533,
        "currencyCode":"AUD",
        "languages":["en-KI", "gil"],
        "geoNameId":"4030945",
        "direction":{
            "west":169.556137,
            "east":4.71957,
            "north":-150.215347,
            "south":-11.437038
        },
        "continent":"OC"
    },
    {
        "code":"KM",
        "name":"Comoros",
        "isoNumeric":"174",
        "isoAlpha3":"COM",
        "fipsCode":"CN",
        "continentName":"Africa",
        "capital":"Moroni",
        "areaInSqKm":2170,
        "population":773407,
        "currencyCode":"KMF",
        "languages":["ar", "fr-KM"],
        "geoNameId":"921929",
        "direction":{
            "west":43.21579,
            "east":-11.362381,
            "north":44.538223,
            "south":-12.387857
        },
        "continent":"AF"
    },
    {
        "code":"KN",
        "name":"Saint Kitts and Nevis",
        "isoNumeric":"659",
        "isoAlpha3":"KNA",
        "fipsCode":"SC",
        "continentName":"North America",
        "capital":"Basseterre",
        "areaInSqKm":261,
        "population":49898,
        "currencyCode":"XCD",
        "languages":["en-KN"],
        "geoNameId":"3575174",
        "direction":{
            "west":-62.86956,
            "east":17.420118,
            "north":-62.543266,
            "south":17.095343
        },
        "continent":"NA"
    },
    {
        "code":"KP",
        "name":"North Korea",
        "isoNumeric":"408",
        "isoAlpha3":"PRK",
        "fipsCode":"KN",
        "continentName":"Asia",
        "capital":"Pyongyang",
        "areaInSqKm":120540,
        "population":22912177,
        "currencyCode":"KPW",
        "languages":["ko-KP"],
        "geoNameId":"1873107",
        "direction":{
            "west":124.315887,
            "east":43.006054,
            "north":130.674866,
            "south":37.673332
        },
        "continent":"AS"
    },
    {
        "code":"KR",
        "name":"South Korea",
        "isoNumeric":"410",
        "isoAlpha3":"KOR",
        "fipsCode":"KS",
        "continentName":"Asia",
        "capital":"Seoul",
        "areaInSqKm":98480,
        "population":48422644,
        "currencyCode":"KRW",
        "languages":["ko-KR", "en"],
        "geoNameId":"1835841",
        "direction":{
            "west":125.887108,
            "east":38.612446,
            "north":129.584671,
            "south":33.190945
        },
        "continent":"AS"
    },
    {
        "code":"KW",
        "name":"Kuwait",
        "isoNumeric":"414",
        "isoAlpha3":"KWT",
        "fipsCode":"KU",
        "continentName":"Asia",
        "capital":"Kuwait City",
        "areaInSqKm":17820,
        "population":2789132,
        "currencyCode":"KWD",
        "languages":["ar-KW", "en"],
        "geoNameId":"285570",
        "direction":{
            "west":46.555557,
            "east":30.095945,
            "north":48.431473,
            "south":28.524611
        },
        "continent":"AS"
    },
    {
        "code":"KY",
        "name":"Cayman Islands",
        "isoNumeric":"136",
        "isoAlpha3":"CYM",
        "fipsCode":"CJ",
        "continentName":"North America",
        "capital":"George Town",
        "areaInSqKm":262,
        "population":44270,
        "currencyCode":"KYD",
        "languages":["en-KY"],
        "geoNameId":"3580718",
        "direction":{
            "west":-81.432777,
            "east":19.7617,
            "north":-79.727272,
            "south":19.263029
        },
        "continent":"NA"
    },
    {
        "code":"KZ",
        "name":"Kazakhstan",
        "isoNumeric":"398",
        "isoAlpha3":"KAZ",
        "fipsCode":"KZ",
        "continentName":"Asia",
        "capital":"Astana",
        "areaInSqKm":2717300,
        "population":15340000,
        "currencyCode":"KZT",
        "languages":["kk", "ru"],
        "geoNameId":"1522867",
        "direction":{
            "west":46.491859,
            "east":55.451195,
            "north":87.312668,
            "south":40.936333
        },
        "continent":"AS"
    },
    {
        "code":"LA",
        "name":"Laos",
        "isoNumeric":"418",
        "isoAlpha3":"LAO",
        "fipsCode":"LA",
        "continentName":"Asia",
        "capital":"Vientiane",
        "areaInSqKm":236800,
        "population":6368162,
        "currencyCode":"LAK",
        "languages":["lo", "fr", "en"],
        "geoNameId":"1655842",
        "direction":{
            "west":100.093056,
            "east":22.500389,
            "north":107.697029,
            "south":13.910027
        },
        "continent":"AS"
    },
    {
        "code":"LB",
        "name":"Lebanon",
        "isoNumeric":"422",
        "isoAlpha3":"LBN",
        "fipsCode":"LE",
        "continentName":"Asia",
        "capital":"Beirut",
        "areaInSqKm":10400,
        "population":4125247,
        "currencyCode":"LBP",
        "languages":["ar-LB", "fr-LB", "en", "hy"],
        "geoNameId":"272103",
        "direction":{
            "west":35.114277,
            "east":34.691418,
            "north":36.639194,
            "south":33.05386
        },
        "continent":"AS"
    },
    {
        "code":"LC",
        "name":"Saint Lucia",
        "isoNumeric":"662",
        "isoAlpha3":"LCA",
        "fipsCode":"ST",
        "continentName":"North America",
        "capital":"Castries",
        "areaInSqKm":616,
        "population":160922,
        "currencyCode":"XCD",
        "languages":["en-LC"],
        "geoNameId":"3576468",
        "direction":{
            "west":-61.07415,
            "east":14.103245,
            "north":-60.874203,
            "south":13.704778
        },
        "continent":"NA"
    },
    {
        "code":"LI",
        "name":"Liechtenstein",
        "isoNumeric":"438",
        "isoAlpha3":"LIE",
        "fipsCode":"LS",
        "continentName":"Europe",
        "capital":"Vaduz",
        "areaInSqKm":160,
        "population":35000,
        "currencyCode":"CHF",
        "languages":["de-LI"],
        "geoNameId":"3042058",
        "direction":{
            "west":9.477805,
            "east":47.273529,
            "north":9.632195,
            "south":47.055862
        },
        "continent":"EU"
    },
    {
        "code":"LK",
        "name":"Sri Lanka",
        "isoNumeric":"144",
        "isoAlpha3":"LKA",
        "fipsCode":"CE",
        "continentName":"Asia",
        "capital":"Colombo",
        "areaInSqKm":65610,
        "population":21513990,
        "currencyCode":"LKR",
        "languages":["si", "ta", "en"],
        "geoNameId":"1227603",
        "direction":{
            "west":79.652916,
            "east":9.831361,
            "north":81.881279,
            "south":5.916833
        },
        "continent":"AS"
    },
    {
        "code":"LR",
        "name":"Liberia",
        "isoNumeric":"430",
        "isoAlpha3":"LBR",
        "fipsCode":"LI",
        "continentName":"Africa",
        "capital":"Monrovia",
        "areaInSqKm":111370,
        "population":3685076,
        "currencyCode":"LRD",
        "languages":["en-LR"],
        "geoNameId":"2275384",
        "direction":{
            "west":-11.492083,
            "east":8.551791,
            "north":-7.365113,
            "south":4.353057
        },
        "continent":"AF"
    },
    {
        "code":"LS",
        "name":"Lesotho",
        "isoNumeric":"426",
        "isoAlpha3":"LSO",
        "fipsCode":"LT",
        "continentName":"Africa",
        "capital":"Maseru",
        "areaInSqKm":30355,
        "population":1919552,
        "currencyCode":"LSL",
        "languages":["en-LS", "st", "zu", "xh"],
        "geoNameId":"932692",
        "direction":{
            "west":27.029068,
            "east":-28.572058,
            "north":29.465761,
            "south":-30.668964
        },
        "continent":"AF"
    },
    {
        "code":"LT",
        "name":"Lithuania",
        "isoNumeric":"440",
        "isoAlpha3":"LTU",
        "fipsCode":"LH",
        "continentName":"Europe",
        "capital":"Vilnius",
        "areaInSqKm":65200,
        "population":3565000,
        "currencyCode":"LTL",
        "languages":["lt", "ru", "pl"],
        "geoNameId":"597427",
        "direction":{
            "west":20.941528,
            "east":56.446918,
            "north":26.871944,
            "south":53.901306
        },
        "continent":"EU"
    },
    {
        "code":"LU",
        "name":"Luxembourg",
        "isoNumeric":"442",
        "isoAlpha3":"LUX",
        "fipsCode":"LU",
        "continentName":"Europe",
        "capital":"Luxembourg",
        "areaInSqKm":2586,
        "population":497538,
        "currencyCode":"EUR",
        "languages":["lb", "de-LU", "fr-LU"],
        "geoNameId":"2960313",
        "direction":{
            "west":5.734556,
            "east":50.184944,
            "north":6.528472,
            "south":49.446583
        },
        "continent":"EU"
    },
    {
        "code":"LV",
        "name":"Latvia",
        "isoNumeric":"428",
        "isoAlpha3":"LVA",
        "fipsCode":"LG",
        "continentName":"Europe",
        "capital":"Riga",
        "areaInSqKm":64589,
        "population":2217969,
        "currencyCode":"LVL",
        "languages":["lv", "ru", "lt"],
        "geoNameId":"458258",
        "direction":{
            "west":20.974277,
            "east":58.082306,
            "north":28.241167,
            "south":55.668861
        },
        "continent":"EU"
    },
    {
        "code":"LY",
        "name":"Libya",
        "isoNumeric":"434",
        "isoAlpha3":"LBY",
        "fipsCode":"LY",
        "continentName":"Africa",
        "capital":"Tripoli",
        "areaInSqKm":1759540,
        "population":6461454,
        "currencyCode":"LYD",
        "languages":["ar-LY", "it", "en"],
        "geoNameId":"2215636",
        "direction":{
            "west":9.38702,
            "east":33.168999,
            "north":25.150612,
            "south":19.508045
        },
        "continent":"AF"
    },
    {
        "code":"MA",
        "name":"Morocco",
        "isoNumeric":"504",
        "isoAlpha3":"MAR",
        "fipsCode":"MO",
        "continentName":"Africa",
        "capital":"Rabat",
        "areaInSqKm":446550,
        "population":31627428,
        "currencyCode":"MAD",
        "languages":["ar-MA", "fr"],
        "geoNameId":"2542007",
        "direction":{
            "west":-13.168586,
            "east":35.9224966985384,
            "north":-0.991750000000025,
            "south":27.662115
        },
        "continent":"AF"
    },
    {
        "code":"MC",
        "name":"Monaco",
        "isoNumeric":"492",
        "isoAlpha3":"MCO",
        "fipsCode":"MN",
        "continentName":"Europe",
        "capital":"Monaco",
        "areaInSqKm":1.95,
        "population":32965,
        "currencyCode":"EUR",
        "languages":["fr-MC", "en", "it"],
        "geoNameId":"2993457",
        "direction":{
            "west":7.408962249755859,
            "east":43.75196717037228,
            "north":7.439939260482788,
            "south":43.72472839869377
        },
        "continent":"EU"
    },
    {
        "code":"MD",
        "name":"Moldova",
        "isoNumeric":"498",
        "isoAlpha3":"MDA",
        "fipsCode":"MD",
        "continentName":"Europe",
        "capital":"Chişinău",
        "areaInSqKm":33843,
        "population":4324000,
        "currencyCode":"MDL",
        "languages":["ro", "ru", "gag", "tr"],
        "geoNameId":"617790",
        "direction":{
            "west":26.618944,
            "east":48.490166,
            "north":30.135445,
            "south":45.468887
        },
        "continent":"EU"
    },
    {
        "code":"ME",
        "name":"Montenegro",
        "isoNumeric":"499",
        "isoAlpha3":"MNE",
        "fipsCode":"MJ",
        "continentName":"Europe",
        "capital":"Podgorica",
        "areaInSqKm":14026,
        "population":666730,
        "currencyCode":"EUR",
        "languages":["sr", "hu", "bs", "sq", "hr", "rom"],
        "geoNameId":"3194884",
        "direction":{
            "west":18.461306,
            "east":43.570137,
            "north":20.358833,
            "south":41.850166
        },
        "continent":"EU"
    },
    {
        "code":"MF",
        "name":"Saint Martin",
        "isoNumeric":"663",
        "isoAlpha3":"MAF",
        "fipsCode":"RN",
        "continentName":"North America",
        "capital":"Marigot",
        "areaInSqKm":53,
        "population":35925,
        "currencyCode":"EUR",
        "languages":["fr"],
        "geoNameId":"3578421",
        "direction":{
            "west":-63.152767,
            "east":18.130354,
            "north":-63.012993,
            "south":18.052231
        },
        "continent":"NA"
    },
    {
        "code":"MG",
        "name":"Madagascar",
        "isoNumeric":"450",
        "isoAlpha3":"MDG",
        "fipsCode":"MA",
        "continentName":"Africa",
        "capital":"Antananarivo",
        "areaInSqKm":587040,
        "population":21281844,
        "currencyCode":"MGA",
        "languages":["fr-MG", "mg"],
        "geoNameId":"1062947",
        "direction":{
            "west":43.224876,
            "east":-11.945433,
            "north":50.48378,
            "south":-25.608952
        },
        "continent":"AF"
    },
    {
        "code":"MH",
        "name":"Marshall Islands",
        "isoNumeric":"584",
        "isoAlpha3":"MHL",
        "fipsCode":"RM",
        "continentName":"Oceania",
        "capital":"Majuro",
        "areaInSqKm":181.3,
        "population":65859,
        "currencyCode":"USD",
        "languages":["mh", "en-MH"],
        "geoNameId":"2080185",
        "direction":{
            "west":165.524918,
            "east":14.62,
            "north":171.931808,
            "south":5.587639
        },
        "continent":"OC"
    },
    {
        "code":"MK",
        "name":"Macedonia",
        "isoNumeric":"807",
        "isoAlpha3":"MKD",
        "fipsCode":"MK",
        "continentName":"Europe",
        "capital":"Skopje",
        "areaInSqKm":25333,
        "population":2061000,
        "currencyCode":"MKD",
        "languages":["mk", "sq", "tr", "rmm", "sr"],
        "geoNameId":"718075",
        "direction":{
            "west":20.464695,
            "east":42.361805,
            "north":23.038139,
            "south":40.860195
        },
        "continent":"EU"
    },
    {
        "code":"ML",
        "name":"Mali",
        "isoNumeric":"466",
        "isoAlpha3":"MLI",
        "fipsCode":"ML",
        "continentName":"Africa",
        "capital":"Bamako",
        "areaInSqKm":1240000,
        "population":13796354,
        "currencyCode":"XOF",
        "languages":["fr-ML", "bm"],
        "geoNameId":"2453866",
        "direction":{
            "west":-12.242614,
            "east":25.000002,
            "north":4.244968,
            "south":10.159513
        },
        "continent":"AF"
    },
    {
        "code":"MM",
        "name":"Myanmar [Burma]",
        "isoNumeric":"104",
        "isoAlpha3":"MMR",
        "fipsCode":"BM",
        "continentName":"Asia",
        "capital":"Nay Pyi Taw",
        "areaInSqKm":678500,
        "population":53414374,
        "currencyCode":"MMK",
        "languages":["my"],
        "geoNameId":"1327865",
        "direction":{
            "west":92.189278,
            "east":28.543249,
            "north":101.176781,
            "south":9.784583
        },
        "continent":"AS"
    },
    {
        "code":"MN",
        "name":"Mongolia",
        "isoNumeric":"496",
        "isoAlpha3":"MNG",
        "fipsCode":"MG",
        "continentName":"Asia",
        "capital":"Ulan Bator",
        "areaInSqKm":1565000,
        "population":3086918,
        "currencyCode":"MNT",
        "languages":["mn", "ru"],
        "geoNameId":"2029969",
        "direction":{
            "west":87.749664,
            "east":52.154251,
            "north":119.924309,
            "south":41.567638
        },
        "continent":"AS"
    },
    {
        "code":"MO",
        "name":"Macao",
        "isoNumeric":"446",
        "isoAlpha3":"MAC",
        "fipsCode":"MC",
        "continentName":"Asia",
        "capital":"Macao",
        "areaInSqKm":254,
        "population":449198,
        "currencyCode":"MOP",
        "languages":["zh", "zh-MO", "pt"],
        "geoNameId":"1821275",
        "direction":{
            "west":113.528946,
            "east":22.222334,
            "north":113.565834,
            "south":22.180389
        },
        "continent":"AS"
    },
    {
        "code":"MP",
        "name":"Northern Mariana Islands",
        "isoNumeric":"580",
        "isoAlpha3":"MNP",
        "fipsCode":"CQ",
        "continentName":"Oceania",
        "capital":"Saipan",
        "areaInSqKm":477,
        "population":53883,
        "currencyCode":"USD",
        "languages":["fil", "tl", "zh", "ch-MP", "en-MP"],
        "geoNameId":"4041468",
        "direction":{
            "west":144.88626,
            "east":20.55344,
            "north":146.06528,
            "south":14.11023
        },
        "continent":"OC"
    },
    {
        "code":"MQ",
        "name":"Martinique",
        "isoNumeric":"474",
        "isoAlpha3":"MTQ",
        "fipsCode":"MB",
        "continentName":"North America",
        "capital":"Fort-de-France",
        "areaInSqKm":1100,
        "population":432900,
        "currencyCode":"EUR",
        "languages":["fr-MQ"],
        "geoNameId":"3570311",
        "direction":{
            "west":-61.230118,
            "east":14.878819,
            "north":-60.81551,
            "south":14.392262
        },
        "continent":"NA"
    },
    {
        "code":"MR",
        "name":"Mauritania",
        "isoNumeric":"478",
        "isoAlpha3":"MRT",
        "fipsCode":"MR",
        "continentName":"Africa",
        "capital":"Nouakchott",
        "areaInSqKm":1030700,
        "population":3205060,
        "currencyCode":"MRO",
        "languages":["ar-MR", "fuc", "snk", "fr", "mey", "wo"],
        "geoNameId":"2378080",
        "direction":{
            "west":-17.066521,
            "east":27.298073,
            "north":-4.827674,
            "south":14.715547
        },
        "continent":"AF"
    },
    {
        "code":"MS",
        "name":"Montserrat",
        "isoNumeric":"500",
        "isoAlpha3":"MSR",
        "fipsCode":"MH",
        "continentName":"North America",
        "capital":"Plymouth",
        "areaInSqKm":102,
        "population":9341,
        "currencyCode":"XCD",
        "languages":["en-MS"],
        "geoNameId":"3578097",
        "direction":{
            "west":-62.24138237036129,
            "east":16.824060205313184,
            "north":-62.144100129608205,
            "south":16.674768935441556
        },
        "continent":"NA"
    },
    {
        "code":"MT",
        "name":"Malta",
        "isoNumeric":"470",
        "isoAlpha3":"MLT",
        "fipsCode":"MT",
        "continentName":"Europe",
        "capital":"Valletta",
        "areaInSqKm":316,
        "population":403000,
        "currencyCode":"EUR",
        "languages":["mt", "en-MT"],
        "geoNameId":"2562770",
        "direction":{
            "west":14.191584,
            "east":36.082027,
            "north":14.577639,
            "south":35.810276
        },
        "continent":"EU"
    },
    {
        "code":"MU",
        "name":"Mauritius",
        "isoNumeric":"480",
        "isoAlpha3":"MUS",
        "fipsCode":"MP",
        "continentName":"Africa",
        "capital":"Port Louis",
        "areaInSqKm":2040,
        "population":1294104,
        "currencyCode":"MUR",
        "languages":["en-MU", "bho", "fr"],
        "geoNameId":"934292",
        "direction":{
            "west":56.512718,
            "east":-10.319255,
            "north":63.500179,
            "south":-20.525717
        },
        "continent":"AF"
    },
    {
        "code":"MV",
        "name":"Maldives",
        "isoNumeric":"462",
        "isoAlpha3":"MDV",
        "fipsCode":"MV",
        "continentName":"Asia",
        "capital":"Malé",
        "areaInSqKm":300,
        "population":395650,
        "currencyCode":"MVR",
        "languages":["dv", "en"],
        "geoNameId":"1282028",
        "direction":{
            "west":72.693222,
            "east":7.098361,
            "north":73.637276,
            "south":-0.692694
        },
        "continent":"AS"
    },
    {
        "code":"MW",
        "name":"Malawi",
        "isoNumeric":"454",
        "isoAlpha3":"MWI",
        "fipsCode":"MI",
        "continentName":"Africa",
        "capital":"Lilongwe",
        "areaInSqKm":118480,
        "population":15447500,
        "currencyCode":"MWK",
        "languages":["ny", "yao", "tum", "swk"],
        "geoNameId":"927384",
        "direction":{
            "west":32.67395,
            "east":-9.367541,
            "north":35.916821,
            "south":-17.125
        },
        "continent":"AF"
    },
    {
        "code":"MX",
        "name":"Mexico",
        "isoNumeric":"484",
        "isoAlpha3":"MEX",
        "fipsCode":"MX",
        "continentName":"North America",
        "capital":"Mexico City",
        "areaInSqKm":1972550,
        "population":112468855,
        "currencyCode":"MXN",
        "languages":["es-MX"],
        "geoNameId":"3996063",
        "direction":{
            "west":-118.453949,
            "east":32.716759,
            "north":-86.703392,
            "south":14.532866
        },
        "continent":"NA"
    },
    {
        "code":"MY",
        "name":"Malaysia",
        "isoNumeric":"458",
        "isoAlpha3":"MYS",
        "fipsCode":"MY",
        "continentName":"Asia",
        "capital":"Kuala Lumpur",
        "areaInSqKm":329750,
        "population":28274729,
        "currencyCode":"MYR",
        "languages":["ms-MY", "en", "zh", "ta", "te", "ml", "pa", "th"],
        "geoNameId":"1733045",
        "direction":{
            "west":99.643448,
            "east":7.363417,
            "north":119.267502,
            "south":0.855222
        },
        "continent":"AS"
    },
    {
        "code":"MZ",
        "name":"Mozambique",
        "isoNumeric":"508",
        "isoAlpha3":"MOZ",
        "fipsCode":"MZ",
        "continentName":"Africa",
        "capital":"Maputo",
        "areaInSqKm":801590,
        "population":22061451,
        "currencyCode":"MZN",
        "languages":["pt-MZ", "vmw"],
        "geoNameId":"1036973",
        "direction":{
            "west":30.217319,
            "east":-10.471883,
            "north":40.842995,
            "south":-26.868685
        },
        "continent":"AF"
    },
    {
        "code":"NA",
        "name":"Namibia",
        "isoNumeric":"516",
        "isoAlpha3":"NAM",
        "fipsCode":"WA",
        "continentName":"Africa",
        "capital":"Windhoek",
        "areaInSqKm":825418,
        "population":2128471,
        "currencyCode":"NAD",
        "languages":["en-NA", "af", "de", "hz", "naq"],
        "geoNameId":"3355338",
        "direction":{
            "west":11.71563,
            "east":-16.959894,
            "north":25.256701,
            "south":-28.97143
        },
        "continent":"AF"
    },
    {
        "code":"NC",
        "name":"New Caledonia",
        "isoNumeric":"540",
        "isoAlpha3":"NCL",
        "fipsCode":"NC",
        "continentName":"Oceania",
        "capital":"Noumea",
        "areaInSqKm":19060,
        "population":216494,
        "currencyCode":"XPF",
        "languages":["fr-NC"],
        "geoNameId":"2139685",
        "direction":{
            "west":163.564667,
            "east":-19.549778,
            "north":168.129135,
            "south":-22.698
        },
        "continent":"OC"
    },
    {
        "code":"NE",
        "name":"Niger",
        "isoNumeric":"562",
        "isoAlpha3":"NER",
        "fipsCode":"NG",
        "continentName":"Africa",
        "capital":"Niamey",
        "areaInSqKm":1267000,
        "population":15878271,
        "currencyCode":"XOF",
        "languages":["fr-NE", "ha", "kr", "dje"],
        "geoNameId":"2440476",
        "direction":{
            "west":0.16625,
            "east":23.525026,
            "north":15.995643,
            "south":11.696975
        },
        "continent":"AF"
    },
    {
        "code":"NF",
        "name":"Norfolk Island",
        "isoNumeric":"574",
        "isoAlpha3":"NFK",
        "fipsCode":"NF",
        "continentName":"Oceania",
        "capital":"Kingston",
        "areaInSqKm":34.6,
        "population":1828,
        "currencyCode":"AUD",
        "languages":["en-NF"],
        "geoNameId":"2155115",
        "direction":{
            "west":167.91543230151365,
            "east":-28.995170686948427,
            "north":167.99773740209957,
            "south":-29.063076742954735
        },
        "continent":"OC"
    },
    {
        "code":"NG",
        "name":"Nigeria",
        "isoNumeric":"566",
        "isoAlpha3":"NGA",
        "fipsCode":"NI",
        "continentName":"Africa",
        "capital":"Abuja",
        "areaInSqKm":923768,
        "population":154000000,
        "currencyCode":"NGN",
        "languages":["en-NG", "ha", "yo", "ig", "ff"],
        "geoNameId":"2328926",
        "direction":{
            "west":2.668432,
            "east":13.892007,
            "north":14.680073,
            "south":4.277144
        },
        "continent":"AF"
    },
    {
        "code":"NI",
        "name":"Nicaragua",
        "isoNumeric":"558",
        "isoAlpha3":"NIC",
        "fipsCode":"NU",
        "continentName":"North America",
        "capital":"Managua",
        "areaInSqKm":129494,
        "population":5995928,
        "currencyCode":"NIO",
        "languages":["es-NI", "en"],
        "geoNameId":"3617476",
        "direction":{
            "west":-87.690308,
            "east":15.025909,
            "north":-82.738289,
            "south":10.707543
        },
        "continent":"NA"
    },
    {
        "code":"NL",
        "name":"Netherlands",
        "isoNumeric":"528",
        "isoAlpha3":"NLD",
        "fipsCode":"NL",
        "continentName":"Europe",
        "capital":"Amsterdam",
        "areaInSqKm":41526,
        "population":16645000,
        "currencyCode":"EUR",
        "languages":["nl-NL", "fy-NL"],
        "geoNameId":"2750405",
        "direction":{
            "west":3.362556,
            "east":53.512196,
            "north":7.227944,
            "south":50.753918
        },
        "continent":"EU"
    },
    {
        "code":"NO",
        "name":"Norway",
        "isoNumeric":"578",
        "isoAlpha3":"NOR",
        "fipsCode":"NO",
        "continentName":"Europe",
        "capital":"Oslo",
        "areaInSqKm":324220,
        "population":5009150,
        "currencyCode":"NOK",
        "languages":["no", "nb", "nn", "se", "fi"],
        "geoNameId":"3144096",
        "direction":{
            "west":4.650167,
            "east":71.18811,
            "north":31.078052520751953,
            "south":57.977917
        },
        "continent":"EU"
    },
    {
        "code":"NP",
        "name":"Nepal",
        "isoNumeric":"524",
        "isoAlpha3":"NPL",
        "fipsCode":"NP",
        "continentName":"Asia",
        "capital":"Kathmandu",
        "areaInSqKm":140800,
        "population":28951852,
        "currencyCode":"NPR",
        "languages":["ne", "en"],
        "geoNameId":"1282988",
        "direction":{
            "west":80.056274,
            "east":30.43339,
            "north":88.199333,
            "south":26.356722
        },
        "continent":"AS"
    },
    {
        "code":"NR",
        "name":"Nauru",
        "isoNumeric":"520",
        "isoAlpha3":"NRU",
        "fipsCode":"NR",
        "continentName":"Oceania",
        "capital":"",
        "areaInSqKm":21,
        "population":10065,
        "currencyCode":"AUD",
        "languages":["na", "en-NR"],
        "geoNameId":"2110425",
        "direction":{
            "west":166.899033,
            "east":-0.504306,
            "north":166.945282,
            "south":-0.552333
        },
        "continent":"OC"
    },
    {
        "code":"NU",
        "name":"Niue",
        "isoNumeric":"570",
        "isoAlpha3":"NIU",
        "fipsCode":"NE",
        "continentName":"Oceania",
        "capital":"Alofi",
        "areaInSqKm":260,
        "population":2166,
        "currencyCode":"NZD",
        "languages":["niu", "en-NU"],
        "geoNameId":"4036232",
        "direction":{
            "west":-169.951004,
            "east":-18.951069,
            "north":-169.775177,
            "south":-19.152193
        },
        "continent":"OC"
    },
    {
        "code":"NZ",
        "name":"New Zealand",
        "isoNumeric":"554",
        "isoAlpha3":"NZL",
        "fipsCode":"NZ",
        "continentName":"Oceania",
        "capital":"Wellington",
        "areaInSqKm":268680,
        "population":4252277,
        "currencyCode":"NZD",
        "languages":["en-NZ", "mi"],
        "geoNameId":"2186224",
        "direction":{
            "west":166.7155,
            "east":-34.389668,
            "north":-180,
            "south":-47.286026
        },
        "continent":"OC"
    },
    {
        "code":"OM",
        "name":"Oman",
        "isoNumeric":"512",
        "isoAlpha3":"OMN",
        "fipsCode":"MU",
        "continentName":"Asia",
        "capital":"Muscat",
        "areaInSqKm":212460,
        "population":2967717,
        "currencyCode":"OMR",
        "languages":["ar-OM", "en", "bal", "ur"],
        "geoNameId":"286963",
        "direction":{
            "west":51.882,
            "east":26.387972,
            "north":59.836582,
            "south":16.64575
        },
        "continent":"AS"
    },
    {
        "code":"PA",
        "name":"Panama",
        "isoNumeric":"591",
        "isoAlpha3":"PAN",
        "fipsCode":"PM",
        "continentName":"North America",
        "capital":"Panama City",
        "areaInSqKm":78200,
        "population":3410676,
        "currencyCode":"PAB",
        "languages":["es-PA", "en"],
        "geoNameId":"3703430",
        "direction":{
            "west":-83.051445,
            "east":9.637514,
            "north":-77.17411,
            "south":7.197906
        },
        "continent":"NA"
    },
    {
        "code":"PE",
        "name":"Peru",
        "isoNumeric":"604",
        "isoAlpha3":"PER",
        "fipsCode":"PE",
        "continentName":"South America",
        "capital":"Lima",
        "areaInSqKm":1285220,
        "population":29907003,
        "currencyCode":"PEN",
        "languages":["es-PE", "qu", "ay"],
        "geoNameId":"3932488",
        "direction":{
            "west":-81.326744,
            "east":-0.012977,
            "north":-68.677986,
            "south":-18.349728
        },
        "continent":"SA"
    },
    {
        "code":"PF",
        "name":"French Polynesia",
        "isoNumeric":"258",
        "isoAlpha3":"PYF",
        "fipsCode":"FP",
        "continentName":"Oceania",
        "capital":"Papeete",
        "areaInSqKm":4167,
        "population":270485,
        "currencyCode":"XPF",
        "languages":["fr-PF", "ty"],
        "geoNameId":"4030656",
        "direction":{
            "west":-152.877167,
            "east":-7.903573,
            "north":-134.929825,
            "south":-27.653572
        },
        "continent":"OC"
    },
    {
        "code":"PG",
        "name":"Papua New Guinea",
        "isoNumeric":"598",
        "isoAlpha3":"PNG",
        "fipsCode":"PP",
        "continentName":"Oceania",
        "capital":"Port Moresby",
        "areaInSqKm":462840,
        "population":6064515,
        "currencyCode":"PGK",
        "languages":["en-PG", "ho", "meu", "tpi"],
        "geoNameId":"2088628",
        "direction":{
            "west":140.842865,
            "east":-1.318639,
            "north":155.96344,
            "south":-11.657861
        },
        "continent":"OC"
    },
    {
        "code":"PH",
        "name":"Philippines",
        "isoNumeric":"608",
        "isoAlpha3":"PHL",
        "fipsCode":"RP",
        "continentName":"Asia",
        "capital":"Manila",
        "areaInSqKm":300000,
        "population":99900177,
        "currencyCode":"PHP",
        "languages":["tl", "en-PH", "fil"],
        "geoNameId":"1694008",
        "direction":{
            "west":116.931557,
            "east":21.120611,
            "north":126.601524,
            "south":4.643306
        },
        "continent":"AS"
    },
    {
        "code":"PK",
        "name":"Pakistan",
        "isoNumeric":"586",
        "isoAlpha3":"PAK",
        "fipsCode":"PK",
        "continentName":"Asia",
        "capital":"Islamabad",
        "areaInSqKm":803940,
        "population":184404791,
        "currencyCode":"PKR",
        "languages":["ur-PK", "en-PK", "pa", "sd", "ps", "brh"],
        "geoNameId":"1168579",
        "direction":{
            "west":60.878613,
            "east":37.097,
            "north":77.840919,
            "south":23.786722
        },
        "continent":"AS"
    },
    {
        "code":"PL",
        "name":"Poland",
        "isoNumeric":"616",
        "isoAlpha3":"POL",
        "fipsCode":"PL",
        "continentName":"Europe",
        "capital":"Warsaw",
        "areaInSqKm":312685,
        "population":38500000,
        "currencyCode":"PLN",
        "languages":["pl"],
        "geoNameId":"798544",
        "direction":{
            "west":14.123,
            "east":54.839138,
            "north":24.150749,
            "south":49.006363
        },
        "continent":"EU"
    },
    {
        "code":"PM",
        "name":"Saint Pierre and Miquelon",
        "isoNumeric":"666",
        "isoAlpha3":"SPM",
        "fipsCode":"SB",
        "continentName":"North America",
        "capital":"Saint-Pierre",
        "areaInSqKm":242,
        "population":7012,
        "currencyCode":"EUR",
        "languages":["fr-PM"],
        "geoNameId":"3424932",
        "direction":{
            "west":-56.420658,
            "east":47.146286,
            "north":-56.252991,
            "south":46.786041
        },
        "continent":"NA"
    },
    {
        "code":"PN",
        "name":"Pitcairn Islands",
        "isoNumeric":"612",
        "isoAlpha3":"PCN",
        "fipsCode":"PC",
        "continentName":"Oceania",
        "capital":"Adamstown",
        "areaInSqKm":47,
        "population":46,
        "currencyCode":"NZD",
        "languages":["en-PN"],
        "geoNameId":"4030699",
        "direction":{
            "west":-128.346436,
            "east":-24.315865,
            "north":-124.77285,
            "south":-24.672565
        },
        "continent":"OC"
    },
    {
        "code":"PR",
        "name":"Puerto Rico",
        "isoNumeric":"630",
        "isoAlpha3":"PRI",
        "fipsCode":"RQ",
        "continentName":"North America",
        "capital":"San Juan",
        "areaInSqKm":9104,
        "population":3916632,
        "currencyCode":"USD",
        "languages":["en-PR", "es-PR"],
        "geoNameId":"4566966",
        "direction":{
            "west":-67.942726,
            "east":18.520166,
            "north":-65.242737,
            "south":17.926405
        },
        "continent":"NA"
    },
    {
        "code":"PS",
        "name":"Palestine",
        "isoNumeric":"275",
        "isoAlpha3":"PSE",
        "fipsCode":"WE",
        "continentName":"Asia",
        "capital":"",
        "areaInSqKm":5970,
        "population":3800000,
        "currencyCode":"ILS",
        "languages":["ar-PS"],
        "geoNameId":"6254930",
        "direction":{
            "west":34.21665954589844,
            "east":32.54638671875,
            "north":35.5732955932617,
            "south":31.216541290283203
        },
        "continent":"AS"
    },
    {
        "code":"PT",
        "name":"Portugal",
        "isoNumeric":"620",
        "isoAlpha3":"PRT",
        "fipsCode":"PO",
        "continentName":"Europe",
        "capital":"Lisbon",
        "areaInSqKm":92391,
        "population":10676000,
        "currencyCode":"EUR",
        "languages":["pt-PT", "mwl"],
        "geoNameId":"2264397",
        "direction":{
            "west":-9.495944,
            "east":42.145638,
            "north":-6.182694,
            "south":36.96125
        },
        "continent":"EU"
    },
    {
        "code":"PW",
        "name":"Palau",
        "isoNumeric":"585",
        "isoAlpha3":"PLW",
        "fipsCode":"PS",
        "continentName":"Oceania",
        "capital":"Melekeok - Palau State Capital",
        "areaInSqKm":458,
        "population":19907,
        "currencyCode":"USD",
        "languages":["pau", "sov", "en-PW", "tox", "ja", "fil", "zh"],
        "geoNameId":"1559582",
        "direction":{
            "west":131.11788,
            "east":8.46966,
            "north":134.72307,
            "south":2.8036
        },
        "continent":"OC"
    },
    {
        "code":"PY",
        "name":"Paraguay",
        "isoNumeric":"600",
        "isoAlpha3":"PRY",
        "fipsCode":"PA",
        "continentName":"South America",
        "capital":"Asunción",
        "areaInSqKm":406750,
        "population":6375830,
        "currencyCode":"PYG",
        "languages":["es-PY", "gn"],
        "geoNameId":"3437598",
        "direction":{
            "west":-62.647076,
            "east":-19.294041,
            "north":-54.259354,
            "south":-27.608738
        },
        "continent":"SA"
    },
    {
        "code":"QA",
        "name":"Qatar",
        "isoNumeric":"634",
        "isoAlpha3":"QAT",
        "fipsCode":"QA",
        "continentName":"Asia",
        "capital":"Doha",
        "areaInSqKm":11437,
        "population":840926,
        "currencyCode":"QAR",
        "languages":["ar-QA", "es"],
        "geoNameId":"289688",
        "direction":{
            "west":50.757221,
            "east":26.154722,
            "north":51.636639,
            "south":24.482944
        },
        "continent":"AS"
    },
    {
        "code":"RE",
        "name":"Réunion",
        "isoNumeric":"638",
        "isoAlpha3":"REU",
        "fipsCode":"RE",
        "continentName":"Africa",
        "capital":"Saint-Denis",
        "areaInSqKm":2517,
        "population":776948,
        "currencyCode":"EUR",
        "languages":["fr-RE"],
        "geoNameId":"935317",
        "direction":{
            "west":55.219086,
            "east":-20.856855,
            "north":55.845039,
            "south":-21.372211
        },
        "continent":"AF"
    },
    {
        "code":"RO",
        "name":"Romania",
        "isoNumeric":"642",
        "isoAlpha3":"ROU",
        "fipsCode":"RO",
        "continentName":"Europe",
        "capital":"Bucharest",
        "areaInSqKm":237500,
        "population":21959278,
        "currencyCode":"RON",
        "languages":["ro", "hu", "rom"],
        "geoNameId":"798549",
        "direction":{
            "west":20.269972,
            "east":48.266945,
            "north":29.691055,
            "south":43.627304
        },
        "continent":"EU"
    },
    {
        "code":"RS",
        "name":"Serbia",
        "isoNumeric":"688",
        "isoAlpha3":"SRB",
        "fipsCode":"RI",
        "continentName":"Europe",
        "capital":"Belgrade",
        "areaInSqKm":88361,
        "population":7344847,
        "currencyCode":"RSD",
        "languages":["sr", "hu", "bs", "rom"],
        "geoNameId":"6290252",
        "direction":{
            "west":18.817020416259766,
            "east":46.18138885498047,
            "north":23.00499725341797,
            "south":42.232215881347656
        },
        "continent":"EU"
    },
    {
        "code":"RU",
        "name":"Russia",
        "isoNumeric":"643",
        "isoAlpha3":"RUS",
        "fipsCode":"RS",
        "continentName":"Europe",
        "capital":"Moscow",
        "areaInSqKm":17100000,
        "population":140702000,
        "currencyCode":"RUB",
        "languages":["ru", "tt", "xal", "cau", "ady", "kv", "ce", "tyv", "cv", "udm", "tut", "mns", "bua", "myv", "mdf", "chm", "ba", "inh", "tut", "kbd", "krc", "ava", "sah", "nog"],
        "geoNameId":"2017370",
        "direction":{
            "west":19.25,
            "east":81.857361,
            "north":-169.05,
            "south":41.188862
        },
        "continent":"EU"
    },
    {
        "code":"RW",
        "name":"Rwanda",
        "isoNumeric":"646",
        "isoAlpha3":"RWA",
        "fipsCode":"RW",
        "continentName":"Africa",
        "capital":"Kigali",
        "areaInSqKm":26338,
        "population":11055976,
        "currencyCode":"RWF",
        "languages":["rw", "en-RW", "fr-RW", "sw"],
        "geoNameId":"49518",
        "direction":{
            "west":28.856794,
            "east":-1.053481,
            "north":30.895958,
            "south":-2.840679
        },
        "continent":"AF"
    },
    {
        "code":"SA",
        "name":"Saudi Arabia",
        "isoNumeric":"682",
        "isoAlpha3":"SAU",
        "fipsCode":"SA",
        "continentName":"Asia",
        "capital":"Riyadh",
        "areaInSqKm":1960582,
        "population":25731776,
        "currencyCode":"SAR",
        "languages":["ar-SA"],
        "geoNameId":"102358",
        "direction":{
            "west":34.495693,
            "east":32.158333,
            "north":55.666584,
            "south":15.61425
        },
        "continent":"AS"
    },
    {
        "code":"SB",
        "name":"Solomon Islands",
        "isoNumeric":"090",
        "isoAlpha3":"SLB",
        "fipsCode":"BP",
        "continentName":"Oceania",
        "capital":"Honiara",
        "areaInSqKm":28450,
        "population":559198,
        "currencyCode":"SBD",
        "languages":["en-SB", "tpi"],
        "geoNameId":"2103350",
        "direction":{
            "west":155.508606,
            "east":-6.589611,
            "north":166.980865,
            "south":-11.850555
        },
        "continent":"OC"
    },
    {
        "code":"SC",
        "name":"Seychelles",
        "isoNumeric":"690",
        "isoAlpha3":"SYC",
        "fipsCode":"SE",
        "continentName":"Africa",
        "capital":"Victoria",
        "areaInSqKm":455,
        "population":88340,
        "currencyCode":"SCR",
        "languages":["en-SC", "fr-SC"],
        "geoNameId":"241170",
        "direction":{
            "west":46.204769,
            "east":-4.283717,
            "north":56.279507,
            "south":-9.753867
        },
        "continent":"AF"
    },
    {
        "code":"SD",
        "name":"Sudan",
        "isoNumeric":"729",
        "isoAlpha3":"SDN",
        "fipsCode":"SU",
        "continentName":"Africa",
        "capital":"Khartoum",
        "areaInSqKm":1861484,
        "population":35000000,
        "currencyCode":"SDG",
        "languages":["ar-SD", "en", "fia"],
        "geoNameId":"366755",
        "direction":{
            "west":21.827774047851562,
            "east":22.232219696044922,
            "north":38.60749816894531,
            "south":8.684720993041992
        },
        "continent":"AF"
    },
    {
        "code":"SE",
        "name":"Sweden",
        "isoNumeric":"752",
        "isoAlpha3":"SWE",
        "fipsCode":"SW",
        "continentName":"Europe",
        "capital":"Stockholm",
        "areaInSqKm":449964,
        "population":9045000,
        "currencyCode":"SEK",
        "languages":["sv-SE", "se", "sma", "fi-SE"],
        "geoNameId":"2661886",
        "direction":{
            "west":11.118694,
            "east":69.0625,
            "north":24.156292483918484,
            "south":55.337112
        },
        "continent":"EU"
    },
    {
        "code":"SG",
        "name":"Singapore",
        "isoNumeric":"702",
        "isoAlpha3":"SGP",
        "fipsCode":"SN",
        "continentName":"Asia",
        "capital":"Singapore",
        "areaInSqKm":692.7,
        "population":4701069,
        "currencyCode":"SGD",
        "languages":["cmn", "en-SG", "ms-SG", "ta-SG", "zh-SG"],
        "geoNameId":"1880251",
        "direction":{
            "west":103.638275,
            "east":1.471278,
            "north":104.007469,
            "south":1.258556
        },
        "continent":"AS"
    },
    {
        "code":"SH",
        "name":"Saint Helena",
        "isoNumeric":"654",
        "isoAlpha3":"SHN",
        "fipsCode":"SH",
        "continentName":"Africa",
        "capital":"Jamestown",
        "areaInSqKm":410,
        "population":7460,
        "currencyCode":"SHP",
        "languages":["en-SH"],
        "geoNameId":"3370751",
        "direction":{
            "west":-14.42123,
            "east":-7.887815,
            "north":-5.638753,
            "south":-16.019543
        },
        "continent":"AF"
    },
    {
        "code":"SI",
        "name":"Slovenia",
        "isoNumeric":"705",
        "isoAlpha3":"SVN",
        "fipsCode":"SI",
        "continentName":"Europe",
        "capital":"Ljubljana",
        "areaInSqKm":20273,
        "population":2007000,
        "currencyCode":"EUR",
        "languages":["sl", "sh"],
        "geoNameId":"3190538",
        "direction":{
            "west":13.383083,
            "east":46.877918,
            "north":16.566,
            "south":45.413139
        },
        "continent":"EU"
    },
    {
        "code":"SJ",
        "name":"Svalbard and Jan Mayen",
        "isoNumeric":"744",
        "isoAlpha3":"SJM",
        "fipsCode":"SV",
        "continentName":"Europe",
        "capital":"Longyearbyen",
        "areaInSqKm":62049,
        "population":2550,
        "currencyCode":"NOK",
        "languages":["no", "ru"],
        "geoNameId":"607072",
        "direction":{
            "west":17.699389,
            "east":80.762085,
            "north":33.287334,
            "south":79.220306
        },
        "continent":"EU"
    },
    {
        "code":"SK",
        "name":"Slovakia",
        "isoNumeric":"703",
        "isoAlpha3":"SVK",
        "fipsCode":"LO",
        "continentName":"Europe",
        "capital":"Bratislava",
        "areaInSqKm":48845,
        "population":5455000,
        "currencyCode":"EUR",
        "languages":["sk", "hu"],
        "geoNameId":"3057568",
        "direction":{
            "west":16.84775,
            "east":49.603168,
            "north":22.570444,
            "south":47.728111
        },
        "continent":"EU"
    },
    {
        "code":"SL",
        "name":"Sierra Leone",
        "isoNumeric":"694",
        "isoAlpha3":"SLE",
        "fipsCode":"SL",
        "continentName":"Africa",
        "capital":"Freetown",
        "areaInSqKm":71740,
        "population":5245695,
        "currencyCode":"SLL",
        "languages":["en-SL", "men", "tem"],
        "geoNameId":"2403846",
        "direction":{
            "west":-13.307631,
            "east":10,
            "north":-10.284238,
            "south":6.929611
        },
        "continent":"AF"
    },
    {
        "code":"SM",
        "name":"San Marino",
        "isoNumeric":"674",
        "isoAlpha3":"SMR",
        "fipsCode":"SM",
        "continentName":"Europe",
        "capital":"San Marino",
        "areaInSqKm":61.2,
        "population":31477,
        "currencyCode":"EUR",
        "languages":["it-SM"],
        "geoNameId":"3168068",
        "direction":{
            "west":12.403538978820734,
            "east":43.99223730851663,
            "north":12.51653186779788,
            "south":43.8937092171425
        },
        "continent":"EU"
    },
    {
        "code":"SN",
        "name":"Senegal",
        "isoNumeric":"686",
        "isoAlpha3":"SEN",
        "fipsCode":"SG",
        "continentName":"Africa",
        "capital":"Dakar",
        "areaInSqKm":196190,
        "population":12323252,
        "currencyCode":"XOF",
        "languages":["fr-SN", "wo", "fuc", "mnk"],
        "geoNameId":"2245662",
        "direction":{
            "west":-17.535236,
            "east":16.691633,
            "north":-11.355887,
            "south":12.307275
        },
        "continent":"AF"
    },
    {
        "code":"SO",
        "name":"Somalia",
        "isoNumeric":"706",
        "isoAlpha3":"SOM",
        "fipsCode":"SO",
        "continentName":"Africa",
        "capital":"Mogadishu",
        "areaInSqKm":637657,
        "population":10112453,
        "currencyCode":"SOS",
        "languages":["so-SO", "ar-SO", "it", "en-SO"],
        "geoNameId":"51537",
        "direction":{
            "west":40.986595,
            "east":11.979166,
            "north":51.412636,
            "south":-1.674868
        },
        "continent":"AF"
    },
    {
        "code":"SR",
        "name":"Suriname",
        "isoNumeric":"740",
        "isoAlpha3":"SUR",
        "fipsCode":"NS",
        "continentName":"South America",
        "capital":"Paramaribo",
        "areaInSqKm":163270,
        "population":492829,
        "currencyCode":"SRD",
        "languages":["nl-SR", "en", "srn", "hns", "jv"],
        "geoNameId":"3382998",
        "direction":{
            "west":-58.086563,
            "east":6.004546,
            "north":-53.977493,
            "south":1.831145
        },
        "continent":"SA"
    },
    {
        "code":"SS",
        "name":"South Sudan",
        "isoNumeric":"728",
        "isoAlpha3":"SSD",
        "fipsCode":"OD",
        "continentName":"Africa",
        "capital":"Juba",
        "areaInSqKm":644329,
        "population":8260490,
        "currencyCode":"SSP",
        "languages":["en"],
        "geoNameId":"7909807",
        "direction":{
            "west":24.140274047851562,
            "east":12.219148635864258,
            "north":35.9405517578125,
            "south":3.493394374847412
        },
        "continent":"AF"
    },
    {
        "code":"ST",
        "name":"São Tomé and Príncipe",
        "isoNumeric":"678",
        "isoAlpha3":"STP",
        "fipsCode":"TP",
        "continentName":"Africa",
        "capital":"São Tomé",
        "areaInSqKm":1001,
        "population":175808,
        "currencyCode":"STD",
        "languages":["pt-ST"],
        "geoNameId":"2410758",
        "direction":{
            "west":6.47017,
            "east":1.701323,
            "north":7.466374,
            "south":0.024766
        },
        "continent":"AF"
    },
    {
        "code":"SV",
        "name":"El Salvador",
        "isoNumeric":"222",
        "isoAlpha3":"SLV",
        "fipsCode":"ES",
        "continentName":"North America",
        "capital":"San Salvador",
        "areaInSqKm":21040,
        "population":6052064,
        "currencyCode":"USD",
        "languages":["es-SV"],
        "geoNameId":"3585968",
        "direction":{
            "west":-90.128662,
            "east":14.445067,
            "north":-87.692162,
            "south":13.148679
        },
        "continent":"NA"
    },
    {
        "code":"SX",
        "name":"Sint Maarten",
        "isoNumeric":"534",
        "isoAlpha3":"SXM",
        "fipsCode":"NN",
        "continentName":"North America",
        "capital":"Philipsburg",
        "areaInSqKm":null,
        "population":37429,
        "currencyCode":"ANG",
        "languages":["nl", "en"],
        "geoNameId":"7609695",
        "direction":{
            "west":-63.144039,
            "east":18.070248,
            "north":-63.012993,
            "south":18.011692
        },
        "continent":"NA"
    },
    {
        "code":"SY",
        "name":"Syria",
        "isoNumeric":"760",
        "isoAlpha3":"SYR",
        "fipsCode":"SY",
        "continentName":"Asia",
        "capital":"Damascus",
        "areaInSqKm":185180,
        "population":22198110,
        "currencyCode":"SYP",
        "languages":["ar-SY", "ku", "hy", "arc", "fr", "en"],
        "geoNameId":"163843",
        "direction":{
            "west":35.727222,
            "east":37.319138,
            "north":42.385029,
            "south":32.310665
        },
        "continent":"AS"
    },
    {
        "code":"SZ",
        "name":"Swaziland",
        "isoNumeric":"748",
        "isoAlpha3":"SWZ",
        "fipsCode":"WZ",
        "continentName":"Africa",
        "capital":"Mbabane",
        "areaInSqKm":17363,
        "population":1354051,
        "currencyCode":"SZL",
        "languages":["en-SZ", "ss-SZ"],
        "geoNameId":"934841",
        "direction":{
            "west":30.794107,
            "east":-25.719648,
            "north":32.13726,
            "south":-27.317101
        },
        "continent":"AF"
    },
    {
        "code":"TC",
        "name":"Turks and Caicos Islands",
        "isoNumeric":"796",
        "isoAlpha3":"TCA",
        "fipsCode":"TK",
        "continentName":"North America",
        "capital":"Cockburn Town",
        "areaInSqKm":430,
        "population":20556,
        "currencyCode":"USD",
        "languages":["en-TC"],
        "geoNameId":"3576916",
        "direction":{
            "west":-72.483871,
            "east":21.961878,
            "north":-71.123642,
            "south":21.422626
        },
        "continent":"NA"
    },
    {
        "code":"TD",
        "name":"Chad",
        "isoNumeric":"148",
        "isoAlpha3":"TCD",
        "fipsCode":"CD",
        "continentName":"Africa",
        "capital":"N'Djamena",
        "areaInSqKm":1284000,
        "population":10543464,
        "currencyCode":"XAF",
        "languages":["fr-TD", "ar-TD", "sre"],
        "geoNameId":"2434508",
        "direction":{
            "west":13.473475,
            "east":23.450369,
            "north":24.002661,
            "south":7.441068
        },
        "continent":"AF"
    },
    {
        "code":"TF",
        "name":"French Southern Territories",
        "isoNumeric":"260",
        "isoAlpha3":"ATF",
        "fipsCode":"FS",
        "continentName":"Antarctica",
        "capital":"Port-aux-Français",
        "areaInSqKm":7829,
        "population":140,
        "currencyCode":"EUR",
        "languages":["fr"],
        "geoNameId":"1546748",
        "direction":{
            "west":50.170258,
            "east":-37.790722,
            "north":77.598808,
            "south":-49.735184
        },
        "continent":"AN"
    },
    {
        "code":"TG",
        "name":"Togo",
        "isoNumeric":"768",
        "isoAlpha3":"TGO",
        "fipsCode":"TO",
        "continentName":"Africa",
        "capital":"Lomé",
        "areaInSqKm":56785,
        "population":6587239,
        "currencyCode":"XOF",
        "languages":["fr-TG", "ee", "hna", "kbp", "dag", "ha"],
        "geoNameId":"2363686",
        "direction":{
            "west":-0.147324,
            "east":11.138977,
            "north":1.806693,
            "south":6.104417
        },
        "continent":"AF"
    },
    {
        "code":"TH",
        "name":"Thailand",
        "isoNumeric":"764",
        "isoAlpha3":"THA",
        "fipsCode":"TH",
        "continentName":"Asia",
        "capital":"Bangkok",
        "areaInSqKm":514000,
        "population":67089500,
        "currencyCode":"THB",
        "languages":["th", "en"],
        "geoNameId":"1605651",
        "direction":{
            "west":97.345642,
            "east":20.463194,
            "north":105.639389,
            "south":5.61
        },
        "continent":"AS"
    },
    {
        "code":"TJ",
        "name":"Tajikistan",
        "isoNumeric":"762",
        "isoAlpha3":"TJK",
        "fipsCode":"TI",
        "continentName":"Asia",
        "capital":"Dushanbe",
        "areaInSqKm":143100,
        "population":7487489,
        "currencyCode":"TJS",
        "languages":["tg", "ru"],
        "geoNameId":"1220409",
        "direction":{
            "west":67.387138,
            "east":41.042252,
            "north":75.137222,
            "south":36.674137
        },
        "continent":"AS"
    },
    {
        "code":"TK",
        "name":"Tokelau",
        "isoNumeric":"772",
        "isoAlpha3":"TKL",
        "fipsCode":"TL",
        "continentName":"Oceania",
        "capital":"",
        "areaInSqKm":10,
        "population":1466,
        "currencyCode":"NZD",
        "languages":["tkl", "en-TK"],
        "geoNameId":"4031074",
        "direction":{
            "west":-172.50033569335938,
            "east":-8.553613662719727,
            "north":-171.21142578125,
            "south":-9.381111145019531
        },
        "continent":"OC"
    },
    {
        "code":"TL",
        "name":"East Timor",
        "isoNumeric":"626",
        "isoAlpha3":"TLS",
        "fipsCode":"TT",
        "continentName":"Oceania",
        "capital":"Dili",
        "areaInSqKm":15007,
        "population":1154625,
        "currencyCode":"USD",
        "languages":["tet", "pt-TL", "id", "en"],
        "geoNameId":"1966436",
        "direction":{
            "west":124.04609680175781,
            "east":-8.135833740234375,
            "north":127.30859375,
            "south":-9.463626861572266
        },
        "continent":"OC"
    },
    {
        "code":"TM",
        "name":"Turkmenistan",
        "isoNumeric":"795",
        "isoAlpha3":"TKM",
        "fipsCode":"TX",
        "continentName":"Asia",
        "capital":"Ashgabat",
        "areaInSqKm":488100,
        "population":4940916,
        "currencyCode":"TMT",
        "languages":["tk", "ru", "uz"],
        "geoNameId":"1218197",
        "direction":{
            "west":52.441444,
            "east":42.795555,
            "north":66.684303,
            "south":35.141083
        },
        "continent":"AS"
    },
    {
        "code":"TN",
        "name":"Tunisia",
        "isoNumeric":"788",
        "isoAlpha3":"TUN",
        "fipsCode":"TS",
        "continentName":"Africa",
        "capital":"Tunis",
        "areaInSqKm":163610,
        "population":10589025,
        "currencyCode":"TND",
        "languages":["ar-TN", "fr"],
        "geoNameId":"2464461",
        "direction":{
            "west":7.524833,
            "east":37.543915,
            "north":11.598278,
            "south":30.240417
        },
        "continent":"AF"
    },
    {
        "code":"TO",
        "name":"Tonga",
        "isoNumeric":"776",
        "isoAlpha3":"TON",
        "fipsCode":"TN",
        "continentName":"Oceania",
        "capital":"Nuku'alofa",
        "areaInSqKm":748,
        "population":122580,
        "currencyCode":"TOP",
        "languages":["to", "en-TO"],
        "geoNameId":"4032283",
        "direction":{
            "west":-175.682266,
            "east":-15.562988,
            "north":-173.907578,
            "south":-21.455057
        },
        "continent":"OC"
    },
    {
        "code":"TR",
        "name":"Turkey",
        "isoNumeric":"792",
        "isoAlpha3":"TUR",
        "fipsCode":"TU",
        "continentName":"Asia",
        "capital":"Ankara",
        "areaInSqKm":780580,
        "population":77804122,
        "currencyCode":"TRY",
        "languages":["tr-TR", "ku", "diq", "az", "av"],
        "geoNameId":"298795",
        "direction":{
            "west":25.668501,
            "east":42.107613,
            "north":44.834999,
            "south":35.815418
        },
        "continent":"AS"
    },
    {
        "code":"TT",
        "name":"Trinidad and Tobago",
        "isoNumeric":"780",
        "isoAlpha3":"TTO",
        "fipsCode":"TD",
        "continentName":"North America",
        "capital":"Port of Spain",
        "areaInSqKm":5128,
        "population":1228691,
        "currencyCode":"TTD",
        "languages":["en-TT", "hns", "fr", "es", "zh"],
        "geoNameId":"3573591",
        "direction":{
            "west":-61.923771,
            "east":11.338342,
            "north":-60.517933,
            "south":10.036105
        },
        "continent":"NA"
    },
    {
        "code":"TV",
        "name":"Tuvalu",
        "isoNumeric":"798",
        "isoAlpha3":"TUV",
        "fipsCode":"TV",
        "continentName":"Oceania",
        "capital":"Funafuti",
        "areaInSqKm":26,
        "population":10472,
        "currencyCode":"AUD",
        "languages":["tvl", "en", "sm", "gil"],
        "geoNameId":"2110297",
        "direction":{
            "west":176.064865,
            "east":-5.641972,
            "north":179.863281,
            "south":-10.801169
        },
        "continent":"OC"
    },
    {
        "code":"TW",
        "name":"Taiwan",
        "isoNumeric":"158",
        "isoAlpha3":"TWN",
        "fipsCode":"TW",
        "continentName":"Asia",
        "capital":"Taipei",
        "areaInSqKm":35980,
        "population":22894384,
        "currencyCode":"TWD",
        "languages":["zh-TW", "zh", "nan", "hak"],
        "geoNameId":"1668284",
        "direction":{
            "west":119.534691,
            "east":25.29825,
            "north":122.000443,
            "south":21.901806
        },
        "continent":"AS"
    },
    {
        "code":"TZ",
        "name":"Tanzania",
        "isoNumeric":"834",
        "isoAlpha3":"TZA",
        "fipsCode":"TZ",
        "continentName":"Africa",
        "capital":"Dodoma",
        "areaInSqKm":945087,
        "population":41892895,
        "currencyCode":"TZS",
        "languages":["sw-TZ", "en", "ar"],
        "geoNameId":"149590",
        "direction":{
            "west":29.327168,
            "east":-0.990736,
            "north":40.443222,
            "south":-11.745696
        },
        "continent":"AF"
    },
    {
        "code":"UA",
        "name":"Ukraine",
        "isoNumeric":"804",
        "isoAlpha3":"UKR",
        "fipsCode":"UP",
        "continentName":"Europe",
        "capital":"Kyiv",
        "areaInSqKm":603700,
        "population":45415596,
        "currencyCode":"UAH",
        "languages":["uk", "ru-UA", "rom", "pl", "hu"],
        "geoNameId":"690791",
        "direction":{
            "west":22.128889,
            "east":52.369362,
            "north":40.20739,
            "south":44.390415
        },
        "continent":"EU"
    },
    {
        "code":"UG",
        "name":"Uganda",
        "isoNumeric":"800",
        "isoAlpha3":"UGA",
        "fipsCode":"UG",
        "continentName":"Africa",
        "capital":"Kampala",
        "areaInSqKm":236040,
        "population":33398682,
        "currencyCode":"UGX",
        "languages":["en-UG", "lg", "sw", "ar"],
        "geoNameId":"226074",
        "direction":{
            "west":29.573252,
            "east":4.214427,
            "north":35.036049,
            "south":-1.48405
        },
        "continent":"AF"
    },
    {
        "code":"UM",
        "name":"U.S. Minor Outlying Islands",
        "isoNumeric":"581",
        "isoAlpha3":"UMI",
        "fipsCode":"",
        "continentName":"Oceania",
        "capital":"",
        "areaInSqKm":0,
        "population":0,
        "currencyCode":"USD",
        "languages":["en-UM"],
        "geoNameId":"5854968",
        "direction":{
            "west":-177.392029,
            "east":28.219814,
            "north":166.654526,
            "south":-0.389006
        },
        "continent":"OC"
    },
    {
        "code":"US",
        "name":"United States",
        "isoNumeric":"840",
        "isoAlpha3":"USA",
        "fipsCode":"US",
        "continentName":"North America",
        "capital":"Washington",
        "areaInSqKm":9629091,
        "population":310232863,
        "currencyCode":"USD",
        "languages":["en-US", "es-US", "haw", "fr"],
        "geoNameId":"6252001",
        "direction":{
            "west":-124.733253,
            "east":49.388611,
            "north":-66.954811,
            "south":24.544245
        },
        "continent":"NA"
    },
    {
        "code":"UY",
        "name":"Uruguay",
        "isoNumeric":"858",
        "isoAlpha3":"URY",
        "fipsCode":"UY",
        "continentName":"South America",
        "capital":"Montevideo",
        "areaInSqKm":176220,
        "population":3477000,
        "currencyCode":"UYU",
        "languages":["es-UY"],
        "geoNameId":"3439705",
        "direction":{
            "west":-58.442722,
            "east":-30.082224,
            "north":-53.073933,
            "south":-34.980816
        },
        "continent":"SA"
    },
    {
        "code":"UZ",
        "name":"Uzbekistan",
        "isoNumeric":"860",
        "isoAlpha3":"UZB",
        "fipsCode":"UZ",
        "continentName":"Asia",
        "capital":"Tashkent",
        "areaInSqKm":447400,
        "population":27865738,
        "currencyCode":"UZS",
        "languages":["uz", "ru", "tg"],
        "geoNameId":"1512440",
        "direction":{
            "west":55.996639,
            "east":45.575001,
            "north":73.132278,
            "south":37.184444
        },
        "continent":"AS"
    },
    {
        "code":"VA",
        "name":"Vatican City",
        "isoNumeric":"336",
        "isoAlpha3":"VAT",
        "fipsCode":"VT",
        "continentName":"Europe",
        "capital":"Vatican",
        "areaInSqKm":0.44,
        "population":921,
        "currencyCode":"EUR",
        "languages":["la", "it", "fr"],
        "geoNameId":"3164670",
        "direction":{
            "west":12.44570678169205,
            "east":41.90743830885576,
            "north":12.45837546629481,
            "south":41.90027960306854
        },
        "continent":"EU"
    },
    {
        "code":"VC",
        "name":"Saint Vincent and the Grenadines",
        "isoNumeric":"670",
        "isoAlpha3":"VCT",
        "fipsCode":"VC",
        "continentName":"North America",
        "capital":"Kingstown",
        "areaInSqKm":389,
        "population":104217,
        "currencyCode":"XCD",
        "languages":["en-VC", "fr"],
        "geoNameId":"3577815",
        "direction":{
            "west":-61.46090317727658,
            "east":13.377834,
            "north":-61.11388,
            "south":12.583984810969037
        },
        "continent":"NA"
    },
    {
        "code":"VE",
        "name":"Venezuela",
        "isoNumeric":"862",
        "isoAlpha3":"VEN",
        "fipsCode":"VE",
        "continentName":"South America",
        "capital":"Caracas",
        "areaInSqKm":912050,
        "population":27223228,
        "currencyCode":"VEF",
        "languages":["es-VE"],
        "geoNameId":"3625428",
        "direction":{
            "west":-73.354073,
            "east":12.201903,
            "north":-59.80378,
            "south":0.626311
        },
        "continent":"SA"
    },
    {
        "code":"VG",
        "name":"British Virgin Islands",
        "isoNumeric":"092",
        "isoAlpha3":"VGB",
        "fipsCode":"VI",
        "continentName":"North America",
        "capital":"Road Town",
        "areaInSqKm":153,
        "population":21730,
        "currencyCode":"USD",
        "languages":["en-VG"],
        "geoNameId":"3577718",
        "direction":{
            "west":-64.715363,
            "east":18.757221,
            "north":-64.268768,
            "south":18.38998
        },
        "continent":"NA"
    },
    {
        "code":"VI",
        "name":"U.S. Virgin Islands",
        "isoNumeric":"850",
        "isoAlpha3":"VIR",
        "fipsCode":"VQ",
        "continentName":"North America",
        "capital":"Charlotte Amalie",
        "areaInSqKm":352,
        "population":108708,
        "currencyCode":"USD",
        "languages":["en-VI"],
        "geoNameId":"4796775",
        "direction":{
            "west":-65.038231,
            "east":18.391747,
            "north":-64.565178,
            "south":17.681725
        },
        "continent":"NA"
    },
    {
        "code":"VN",
        "name":"Vietnam",
        "isoNumeric":"704",
        "isoAlpha3":"VNM",
        "fipsCode":"VM",
        "continentName":"Asia",
        "capital":"Hanoi",
        "areaInSqKm":329560,
        "population":89571130,
        "currencyCode":"VND",
        "languages":["vi", "en", "fr", "zh", "km"],
        "geoNameId":"1562822",
        "direction":{
            "west":102.148224,
            "east":23.388834,
            "north":109.464638,
            "south":8.559611
        },
        "continent":"AS"
    },
    {
        "code":"VU",
        "name":"Vanuatu",
        "isoNumeric":"548",
        "isoAlpha3":"VUT",
        "fipsCode":"NH",
        "continentName":"Oceania",
        "capital":"Port Vila",
        "areaInSqKm":12200,
        "population":221552,
        "currencyCode":"VUV",
        "languages":["bi", "en-VU", "fr-VU"],
        "geoNameId":"2134431",
        "direction":{
            "west":166.524979,
            "east":-13.073444,
            "north":169.904785,
            "south":-20.248945
        },
        "continent":"OC"
    },
    {
        "code":"WF",
        "name":"Wallis and Futuna",
        "isoNumeric":"876",
        "isoAlpha3":"WLF",
        "fipsCode":"WF",
        "continentName":"Oceania",
        "capital":"Mata-Utu",
        "areaInSqKm":274,
        "population":16025,
        "currencyCode":"XPF",
        "languages":["wls", "fud", "fr-WF"],
        "geoNameId":"4034749",
        "direction":{
            "west":-178.206787,
            "east":-13.214251,
            "north":-176.128784,
            "south":-14.3286
        },
        "continent":"OC"
    },
    {
        "code":"WS",
        "name":"Samoa",
        "isoNumeric":"882",
        "isoAlpha3":"WSM",
        "fipsCode":"WS",
        "continentName":"Oceania",
        "capital":"Apia",
        "areaInSqKm":2944,
        "population":192001,
        "currencyCode":"WST",
        "languages":["sm", "en-WS"],
        "geoNameId":"4034894",
        "direction":{
            "west":-172.798599,
            "east":-13.432207,
            "north":-171.415741,
            "south":-14.040939
        },
        "continent":"OC"
    },
    {
        "code":"XK",
        "name":"Kosovo",
        "isoNumeric":"0",
        "isoAlpha3":"XKX",
        "fipsCode":"KV",
        "continentName":"Europe",
        "capital":"Pristina",
        "areaInSqKm":null,
        "population":1800000,
        "currencyCode":"EUR",
        "languages":["sq", "sr"],
        "geoNameId":"831053",
        "direction":{
            "west":19.977481504492914,
            "east":43.2682495807952,
            "north":21.80335088694943,
            "south":41.856369601859925
        },
        "continent":"EU"
    },
    {
        "code":"YE",
        "name":"Yemen",
        "isoNumeric":"887",
        "isoAlpha3":"YEM",
        "fipsCode":"YM",
        "continentName":"Asia",
        "capital":"Sanaa",
        "areaInSqKm":527970,
        "population":23495361,
        "currencyCode":"YER",
        "languages":["ar-YE"],
        "geoNameId":"69543",
        "direction":{
            "west":42.5325394314234,
            "east":18.9999989031009,
            "north":54.5305388163283,
            "south":12.1110910264462
        },
        "continent":"AS"
    },
    {
        "code":"YT",
        "name":"Mayotte",
        "isoNumeric":"175",
        "isoAlpha3":"MYT",
        "fipsCode":"MF",
        "continentName":"Africa",
        "capital":"Mamoutzou",
        "areaInSqKm":374,
        "population":159042,
        "currencyCode":"EUR",
        "languages":["fr-YT"],
        "geoNameId":"1024031",
        "direction":{
            "west":45.03796,
            "east":-12.648891,
            "north":45.29295,
            "south":-13.000132
        },
        "continent":"AF"
    },
    {
        "code":"ZA",
        "name":"South Africa",
        "isoNumeric":"710",
        "isoAlpha3":"ZAF",
        "fipsCode":"SF",
        "continentName":"Africa",
        "capital":"Pretoria",
        "areaInSqKm":1219912,
        "population":49000000,
        "currencyCode":"ZAR",
        "languages":["zu", "xh", "af", "nso", "en-ZA", "tn", "st", "ts", "ss", "ve", "nr"],
        "geoNameId":"953987",
        "direction":{
            "west":16.458021,
            "east":-22.126612,
            "north":32.895973,
            "south":-34.839828
        },
        "continent":"AF"
    },
    {
        "code":"ZM",
        "name":"Zambia",
        "isoNumeric":"894",
        "isoAlpha3":"ZMB",
        "fipsCode":"ZA",
        "continentName":"Africa",
        "capital":"Lusaka",
        "areaInSqKm":752614,
        "population":13460305,
        "currencyCode":"ZMK",
        "languages":["en-ZM", "bem", "loz", "lun", "lue", "ny", "toi"],
        "geoNameId":"895949",
        "direction":{
            "west":21.999371,
            "east":-8.22436,
            "north":33.705704,
            "south":-18.079473
        },
        "continent":"AF"
    },
    {
        "code":"ZW",
        "name":"Zimbabwe",
        "isoNumeric":"716",
        "isoAlpha3":"ZWE",
        "fipsCode":"ZI",
        "continentName":"Africa",
        "capital":"Harare",
        "areaInSqKm":390580,
        "population":11651858,
        "currencyCode":"ZWL",
        "languages":["en-ZW", "sn", "nr", "nd"],
        "geoNameId":"878675",
        "direction":{
            "west":25.237028,
            "east":-15.608835,
            "north":33.056305,
            "south":-22.417738
        },
        "continent":"AF"
    },
    {
        "code":null,
        "name":null,
        "isoNumeric":null,
        "isoAlpha3":null,
        "fipsCode":null,
        "continentName":null,
        "capital":null,
        "areaInSqKm":null,
        "population":null,
        "currencyCode":null,
        "languages":null,
        "geoNameId":null,
        "direction":{
            "west":"",
            "east":"",
            "north":"",
            "south":""
        }
    }
];

var COUNTRIE_INFO_GEOJSON =
{
"type": "FeatureCollection",
"features": [
{ "type": "Feature", "properties": { "ne_10m_adm": "CHN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 11, "SOVEREIGNT": "China", "SOV_A3": "CH1", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "China", "ADM0_A3": "CHN", "GEOU_DIF": 0.000000, "GEOUNIT": "China", "GU_A3": "CHN", "SU_DIF": 0.000000, "SUBUNIT": "China", "SU_A3": "CHN", "NAME": "China", "ABBREV": "China", "POSTAL": "CN", "NAME_FORMA": "People's Republic of China", "TERR_": "", "NAME_SORT": "China", "MAP_COLOR": 3.000000, "POP_EST": 1338612968.000000, "GDP_MD_EST": 7973000.000000, "FIPS_10_": 0.000000, "ISO_A2": "CN", "ISO_A3": "CHN", "ISO_N3": 156.000000 }, "geometry": { "type": "Point", "coordinates": [ 104.153013, 37.775904 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "IND", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 147, "SOVEREIGNT": "India", "SOV_A3": "IND", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "India", "ADM0_A3": "IND", "GEOU_DIF": 0.000000, "GEOUNIT": "India", "GU_A3": "IND", "SU_DIF": 0.000000, "SUBUNIT": "India", "SU_A3": "IND", "NAME": "India", "ABBREV": "India", "POSTAL": "IND", "NAME_FORMA": "Republic of India", "TERR_": "", "NAME_SORT": "India", "MAP_COLOR": 2.000000, "POP_EST": 1166079217.000000, "GDP_MD_EST": 3297000.000000, "FIPS_10_": 0.000000, "ISO_A2": "IN", "ISO_A3": "IND", "ISO_N3": 356.000000 }, "geometry": { "type": "Point", "coordinates": [ 79.627796, 23.356872 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "USA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 29, "SOVEREIGNT": "United States of America", "SOV_A3": "US1", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "United States of America", "ADM0_A3": "USA", "GEOU_DIF": 0.000000, "GEOUNIT": "United States of America", "GU_A3": "USA", "SU_DIF": 0.000000, "SUBUNIT": "United States of America", "SU_A3": "USA", "NAME": "United States", "ABBREV": "U.S.A.", "POSTAL": "US", "NAME_FORMA": "United States of America", "TERR_": "", "NAME_SORT": "United States of America", "MAP_COLOR": 1.000000, "POP_EST": 307212123.000000, "GDP_MD_EST": 14260000.000000, "FIPS_10_": 0.000000, "ISO_A2": "US", "ISO_A3": "USA", "ISO_N3": 840.000000 }, "geometry": { "type": "Point", "coordinates": [ -99.108179, 40.116231 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "IDN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 148, "SOVEREIGNT": "Indonesia", "SOV_A3": "IDN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Indonesia", "ADM0_A3": "IDN", "GEOU_DIF": 0.000000, "GEOUNIT": "Indonesia", "GU_A3": "IDN", "SU_DIF": 0.000000, "SUBUNIT": "Indonesia", "SU_A3": "IDN", "NAME": "Indonesia", "ABBREV": "Indo.", "POSTAL": "INDO", "NAME_FORMA": "Republic of Indonesia", "TERR_": "", "NAME_SORT": "Indonesia", "MAP_COLOR": 11.000000, "POP_EST": 240271522.000000, "GDP_MD_EST": 914600.000000, "FIPS_10_": 0.000000, "ISO_A2": "ID", "ISO_A3": "IDN", "ISO_N3": 360.000000 }, "geometry": { "type": "Point", "coordinates": [ 120.198068, -1.981597 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BRA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 99, "SOVEREIGNT": "Brazil", "SOV_A3": "BRA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Brazil", "ADM0_A3": "BRA", "GEOU_DIF": 0.000000, "GEOUNIT": "Brazil", "GU_A3": "BRA", "SU_DIF": 0.000000, "SUBUNIT": "Brazil", "SU_A3": "BRA", "NAME": "Brazil", "ABBREV": "Brazil", "POSTAL": "BR", "NAME_FORMA": "Federative Republic of Brazil", "TERR_": "", "NAME_SORT": "Brazil", "MAP_COLOR": 7.000000, "POP_EST": 198739269.000000, "GDP_MD_EST": 1993000.000000, "FIPS_10_": 0.000000, "ISO_A2": "BR", "ISO_A3": "BRA", "ISO_N3": 76.000000 }, "geometry": { "type": "Point", "coordinates": [ -52.898866, -9.417399 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PAK", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 201, "SOVEREIGNT": "Pakistan", "SOV_A3": "PAK", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Pakistan", "ADM0_A3": "PAK", "GEOU_DIF": 0.000000, "GEOUNIT": "Pakistan", "GU_A3": "PAK", "SU_DIF": 0.000000, "SUBUNIT": "Pakistan", "SU_A3": "PAK", "NAME": "Pakistan", "ABBREV": "Pak.", "POSTAL": "PK", "NAME_FORMA": "Islamic Republic of Pakistan", "TERR_": "", "NAME_SORT": "Pakistan", "MAP_COLOR": 11.000000, "POP_EST": 176242949.000000, "GDP_MD_EST": 427300.000000, "FIPS_10_": 0.000000, "ISO_A2": "PK", "ISO_A3": "PAK", "ISO_N3": 586.000000 }, "geometry": { "type": "Point", "coordinates": [ 69.430319, 30.287627 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BGD", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 89, "SOVEREIGNT": "Bangladesh", "SOV_A3": "BGD", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Bangladesh", "ADM0_A3": "BGD", "GEOU_DIF": 0.000000, "GEOUNIT": "Bangladesh", "GU_A3": "BGD", "SU_DIF": 0.000000, "SUBUNIT": "Bangladesh", "SU_A3": "BGD", "NAME": "Bangladesh", "ABBREV": "Bang.", "POSTAL": "BD", "NAME_FORMA": "People's Republic of Bangladesh", "TERR_": "", "NAME_SORT": "Bangladesh", "MAP_COLOR": 7.000000, "POP_EST": 156050883.000000, "GDP_MD_EST": 224000.000000, "FIPS_10_": 0.000000, "ISO_A2": "BD", "ISO_A3": "BGD", "ISO_N3": 50.000000 }, "geometry": { "type": "Point", "coordinates": [ 89.973664, 24.245614 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NGA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 196, "SOVEREIGNT": "Nigeria", "SOV_A3": "NGA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Nigeria", "ADM0_A3": "NGA", "GEOU_DIF": 0.000000, "GEOUNIT": "Nigeria", "GU_A3": "NGA", "SU_DIF": 0.000000, "SUBUNIT": "Nigeria", "SU_A3": "NGA", "NAME": "Nigeria", "ABBREV": "Nigeria", "POSTAL": "NG", "NAME_FORMA": "Federal Republic of Nigeria", "TERR_": "", "NAME_SORT": "Nigeria", "MAP_COLOR": 2.000000, "POP_EST": 149229090.000000, "GDP_MD_EST": 335400.000000, "FIPS_10_": 0.000000, "ISO_A2": "NG", "ISO_A3": "NGA", "ISO_N3": 566.000000 }, "geometry": { "type": "Point", "coordinates": [ 8.096299, 9.683450 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "RUS", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 214, "SOVEREIGNT": "Russia", "SOV_A3": "RUS", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Russia", "ADM0_A3": "RUS", "GEOU_DIF": 0.000000, "GEOUNIT": "Russia", "GU_A3": "RUS", "SU_DIF": 0.000000, "SUBUNIT": "Russia", "SU_A3": "RUS", "NAME": "Russia", "ABBREV": "Rus.", "POSTAL": "RUS", "NAME_FORMA": "Russian Federation", "TERR_": "", "NAME_SORT": "Russia", "MAP_COLOR": 7.000000, "POP_EST": 140041247.000000, "GDP_MD_EST": 2266000.000000, "FIPS_10_": 0.000000, "ISO_A2": "RU", "ISO_A3": "RUS", "ISO_N3": 643.000000 }, "geometry": { "type": "Point", "coordinates": [ 97.841959, 64.993687 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "JPN", "ScaleRank": 1, "LabelRank": 4, "FeatureCla": "Adm-0 country", "OID_": 156, "SOVEREIGNT": "Japan", "SOV_A3": "JPN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Japan", "ADM0_A3": "JPN", "GEOU_DIF": 0.000000, "GEOUNIT": "Japan", "GU_A3": "JPN", "SU_DIF": 0.000000, "SUBUNIT": "Japan", "SU_A3": "JPN", "NAME": "Japan", "ABBREV": "Japan", "POSTAL": "J", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Japan", "MAP_COLOR": 4.000000, "POP_EST": 127078679.000000, "GDP_MD_EST": 4329000.000000, "FIPS_10_": 0.000000, "ISO_A2": "JP", "ISO_A3": "JPN", "ISO_N3": 392.000000 }, "geometry": { "type": "Point", "coordinates": [ 139.111408, 36.999934 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MEX", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 183, "SOVEREIGNT": "Mexico", "SOV_A3": "MEX", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Mexico", "ADM0_A3": "MEX", "GEOU_DIF": 0.000000, "GEOUNIT": "Mexico", "GU_A3": "MEX", "SU_DIF": 0.000000, "SUBUNIT": "Mexico", "SU_A3": "MEX", "NAME": "Mexico", "ABBREV": "Mex.", "POSTAL": "MX", "NAME_FORMA": "United Mexican States", "TERR_": "", "NAME_SORT": "Mexico", "MAP_COLOR": 3.000000, "POP_EST": 111211789.000000, "GDP_MD_EST": 1563000.000000, "FIPS_10_": 0.000000, "ISO_A2": "MX", "ISO_A3": "MEX", "ISO_N3": 484.000000 }, "geometry": { "type": "Point", "coordinates": [ -102.706024, 24.333812 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PHL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 207, "SOVEREIGNT": "Philippines", "SOV_A3": "PHL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Philippines", "ADM0_A3": "PHL", "GEOU_DIF": 0.000000, "GEOUNIT": "Philippines", "GU_A3": "PHL", "SU_DIF": 0.000000, "SUBUNIT": "Philippines", "SU_A3": "PHL", "NAME": "Philippines", "ABBREV": "Phil.", "POSTAL": "PH", "NAME_FORMA": "Republic of the Philippines", "TERR_": "", "NAME_SORT": "Philippines", "MAP_COLOR": 8.000000, "POP_EST": 97976603.000000, "GDP_MD_EST": 317500.000000, "FIPS_10_": 0.000000, "ISO_A2": "PH", "ISO_A3": "PHL", "ISO_N3": 608.000000 }, "geometry": { "type": "Point", "coordinates": [ 122.857229, 11.920294 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "VNM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 262, "SOVEREIGNT": "Vietnam", "SOV_A3": "VNM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Vietnam", "ADM0_A3": "VNM", "GEOU_DIF": 0.000000, "GEOUNIT": "Vietnam", "GU_A3": "VNM", "SU_DIF": 0.000000, "SUBUNIT": "Vietnam", "SU_A3": "VNM", "NAME": "Vietnam", "ABBREV": "Viet.", "POSTAL": "VN", "NAME_FORMA": "Socialist Republic of Vietnam", "TERR_": "", "NAME_SORT": "Vietnam", "MAP_COLOR": 4.000000, "POP_EST": 86967524.000000, "GDP_MD_EST": 241700.000000, "FIPS_10_": 0.000000, "ISO_A2": "VN", "ISO_A3": "VNM", "ISO_N3": 704.000000 }, "geometry": { "type": "Point", "coordinates": [ 107.935039, 15.566552 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ETH", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 129, "SOVEREIGNT": "Ethiopia", "SOV_A3": "ETH", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Ethiopia", "ADM0_A3": "ETH", "GEOU_DIF": 0.000000, "GEOUNIT": "Ethiopia", "GU_A3": "ETH", "SU_DIF": 0.000000, "SUBUNIT": "Ethiopia", "SU_A3": "ETH", "NAME": "Ethiopia", "ABBREV": "Eth.", "POSTAL": "ET", "NAME_FORMA": "Federal Democratic Republic of Ethiopia", "TERR_": "", "NAME_SORT": "Ethiopia", "MAP_COLOR": 13.000000, "POP_EST": 85237338.000000, "GDP_MD_EST": 68770.000000, "FIPS_10_": 0.000000, "ISO_A2": "ET", "ISO_A3": "ETH", "ISO_N3": 231.000000 }, "geometry": { "type": "Point", "coordinates": [ 39.595800, 8.710491 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "EGY", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 124, "SOVEREIGNT": "Egypt", "SOV_A3": "EGY", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Egypt", "ADM0_A3": "EGY", "GEOU_DIF": 0.000000, "GEOUNIT": "Egypt", "GU_A3": "EGY", "SU_DIF": 0.000000, "SUBUNIT": "Egypt", "SU_A3": "EGY", "NAME": "Egypt", "ABBREV": "Egypt", "POSTAL": "EG", "NAME_FORMA": "Arab Republic of Egypt", "TERR_": "", "NAME_SORT": "Egypt", "MAP_COLOR": 2.000000, "POP_EST": 83082869.000000, "GDP_MD_EST": 443700.000000, "FIPS_10_": 0.000000, "ISO_A2": "EG", "ISO_A3": "EGY", "ISO_N3": 818.000000 }, "geometry": { "type": "Point", "coordinates": [ 29.853064, 26.745378 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "DEU", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 135, "SOVEREIGNT": "Germany", "SOV_A3": "DEU", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Germany", "ADM0_A3": "DEU", "GEOU_DIF": 0.000000, "GEOUNIT": "Germany", "GU_A3": "DEU", "SU_DIF": 0.000000, "SUBUNIT": "Germany", "SU_A3": "DEU", "NAME": "Germany", "ABBREV": "Ger.", "POSTAL": "D", "NAME_FORMA": "Federal Republic of Germany", "TERR_": "", "NAME_SORT": "Germany", "MAP_COLOR": 1.000000, "POP_EST": 82329758.000000, "GDP_MD_EST": 2918000.000000, "FIPS_10_": 0.000000, "ISO_A2": "DE", "ISO_A3": "DEU", "ISO_N3": 276.000000 }, "geometry": { "type": "Point", "coordinates": [ 10.392360, 51.406232 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TUR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 250, "SOVEREIGNT": "Turkey", "SOV_A3": "TUR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Turkey", "ADM0_A3": "TUR", "GEOU_DIF": 0.000000, "GEOUNIT": "Turkey", "GU_A3": "TUR", "SU_DIF": 0.000000, "SUBUNIT": "Turkey", "SU_A3": "TUR", "NAME": "Turkey", "ABBREV": "Tur.", "POSTAL": "TR", "NAME_FORMA": "Republic of Turkey", "TERR_": "", "NAME_SORT": "Turkey", "MAP_COLOR": 4.000000, "POP_EST": 76805524.000000, "GDP_MD_EST": 902700.000000, "FIPS_10_": 0.000000, "ISO_A2": "TR", "ISO_A3": "TUR", "ISO_N3": 792.000000 }, "geometry": { "type": "Point", "coordinates": [ 35.164610, 39.291163 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "COD", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 118, "SOVEREIGNT": "Democratic Republic of the Congo", "SOV_A3": "COD", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Democratic Republic of the Congo", "ADM0_A3": "COD", "GEOU_DIF": 0.000000, "GEOUNIT": "Democratic Republic of the Congo", "GU_A3": "COD", "SU_DIF": 0.000000, "SUBUNIT": "Democratic Republic of the Congo", "SU_A3": "COD", "NAME": "Congo (Kinshasa)", "ABBREV": "D.R.C.", "POSTAL": "DRC", "NAME_FORMA": "Democratic Republic of the Congo", "TERR_": "", "NAME_SORT": "Congo (Kinshasa)", "MAP_COLOR": 7.000000, "POP_EST": 68692542.000000, "GDP_MD_EST": 20640.000000, "FIPS_10_": 0.000000, "ISO_A2": "CD", "ISO_A3": "COD", "ISO_N3": 180.000000 }, "geometry": { "type": "Point", "coordinates": [ 23.119143, -2.926512 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "IRN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 149, "SOVEREIGNT": "Iran", "SOV_A3": "IRN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Iran", "ADM0_A3": "IRN", "GEOU_DIF": 0.000000, "GEOUNIT": "Iran", "GU_A3": "IRN", "SU_DIF": 0.000000, "SUBUNIT": "Iran", "SU_A3": "IRN", "NAME": "Iran", "ABBREV": "Iran", "POSTAL": "IRN", "NAME_FORMA": "Islamic Republic of Iran", "TERR_": "", "NAME_SORT": "Iran", "MAP_COLOR": 13.000000, "POP_EST": 66429284.000000, "GDP_MD_EST": 841700.000000, "FIPS_10_": 0.000000, "ISO_A2": "IR", "ISO_A3": "IRN", "ISO_N3": 364.000000 }, "geometry": { "type": "Point", "coordinates": [ 54.193466, 32.942631 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "THA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 244, "SOVEREIGNT": "Thailand", "SOV_A3": "THA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Thailand", "ADM0_A3": "THA", "GEOU_DIF": 0.000000, "GEOUNIT": "Thailand", "GU_A3": "THA", "SU_DIF": 0.000000, "SUBUNIT": "Thailand", "SU_A3": "THA", "NAME": "Thailand", "ABBREV": "Thai.", "POSTAL": "TH", "NAME_FORMA": "Kingdom of Thailand", "TERR_": "", "NAME_SORT": "Thailand", "MAP_COLOR": 1.000000, "POP_EST": 65905410.000000, "GDP_MD_EST": 547400.000000, "FIPS_10_": 0.000000, "ISO_A2": "TH", "ISO_A3": "THA", "ISO_N3": 764.000000 }, "geometry": { "type": "Point", "coordinates": [ 101.401980, 15.922670 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "FRA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 17, "SOVEREIGNT": "France", "SOV_A3": "FR1", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "France", "ADM0_A3": "FRA", "GEOU_DIF": 0.000000, "GEOUNIT": "France", "GU_A3": "FRA", "SU_DIF": 0.000000, "SUBUNIT": "France", "SU_A3": "FRA", "NAME": "France", "ABBREV": "Fr.", "POSTAL": "F", "NAME_FORMA": "French Republic", "TERR_": "", "NAME_SORT": "France", "MAP_COLOR": 11.000000, "POP_EST": 64057792.000000, "GDP_MD_EST": 2128000.000000, "FIPS_10_": 0.000000, "ISO_A2": "FR", "ISO_A3": "FRA", "ISO_N3": 250.000000 }, "geometry": { "type": "Point", "coordinates": [ 2.541863, 47.901994 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GBR", "ScaleRank": 1, "LabelRank": 7, "FeatureCla": "Adm-0 country", "OID_": 28, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "United Kingdom", "ADM0_A3": "GBR", "GEOU_DIF": 0.000000, "GEOUNIT": "United Kingdom", "GU_A3": "GBR", "SU_DIF": 0.000000, "SUBUNIT": "United Kingdom", "SU_A3": "GBR", "NAME": "United Kingdom", "ABBREV": "U.K.", "POSTAL": "GB", "NAME_FORMA": "United Kingdom of Great Britain and Northern Ireland", "TERR_": "", "NAME_SORT": "United Kingdom", "MAP_COLOR": 3.000000, "POP_EST": 61113205.000000, "GDP_MD_EST": 2226000.000000, "FIPS_10_": 0.000000, "ISO_A2": "GB", "ISO_A3": "GBR", "ISO_N3": 826.000000 }, "geometry": { "type": "Point", "coordinates": [ -1.964338, 53.177063 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ITA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 153, "SOVEREIGNT": "Italy", "SOV_A3": "ITA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Italy", "ADM0_A3": "ITA", "GEOU_DIF": 0.000000, "GEOUNIT": "Italy", "GU_A3": "ITA", "SU_DIF": 0.000000, "SUBUNIT": "Italy", "SU_A3": "ITA", "NAME": "Italy", "ABBREV": "Italy", "POSTAL": "I", "NAME_FORMA": "Italian Republic", "TERR_": "", "NAME_SORT": "Italy", "MAP_COLOR": 7.000000, "POP_EST": 58126212.000000, "GDP_MD_EST": 1823000.000000, "FIPS_10_": 0.000000, "ISO_A2": "IT", "ISO_A3": "ITA", "ISO_N3": 380.000000 }, "geometry": { "type": "Point", "coordinates": [ 12.007595, 43.146504 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ZAF", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 231, "SOVEREIGNT": "South Africa", "SOV_A3": "ZAF", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "South Africa", "ADM0_A3": "ZAF", "GEOU_DIF": 0.000000, "GEOUNIT": "South Africa", "GU_A3": "ZAF", "SU_DIF": 0.000000, "SUBUNIT": "South Africa", "SU_A3": "ZAF", "NAME": "South Africa", "ABBREV": "S.Af.", "POSTAL": "ZA", "NAME_FORMA": "Republic of South Africa", "TERR_": "", "NAME_SORT": "South Africa", "MAP_COLOR": 2.000000, "POP_EST": 49052489.000000, "GDP_MD_EST": 491000.000000, "FIPS_10_": 0.000000, "ISO_A2": "ZA", "ISO_A3": "ZAF", "ISO_N3": 710.000000 }, "geometry": { "type": "Point", "coordinates": [ 22.481511, -30.361173 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KOR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 232, "SOVEREIGNT": "South Korea", "SOV_A3": "KOR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "South Korea", "ADM0_A3": "KOR", "GEOU_DIF": 0.000000, "GEOUNIT": "South Korea", "GU_A3": "KOR", "SU_DIF": 0.000000, "SUBUNIT": "South Korea", "SU_A3": "KOR", "NAME": "S. Korea", "ABBREV": "S.Kor.", "POSTAL": "KR", "NAME_FORMA": "Republic of Korea", "TERR_": "", "NAME_SORT": "Korea, South", "MAP_COLOR": 5.000000, "POP_EST": 48508972.000000, "GDP_MD_EST": 1335000.000000, "FIPS_10_": 0.000000, "ISO_A2": "KR", "ISO_A3": "KOR", "ISO_N3": 410.000000 }, "geometry": { "type": "Point", "coordinates": [ 128.033374, 36.583265 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MMR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 190, "SOVEREIGNT": "Myanmar", "SOV_A3": "MMR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Myanmar", "ADM0_A3": "MMR", "GEOU_DIF": 0.000000, "GEOUNIT": "Myanmar", "GU_A3": "MMR", "SU_DIF": 0.000000, "SUBUNIT": "Myanmar", "SU_A3": "MMR", "NAME": "Myanmar", "ABBREV": "Myan.", "POSTAL": "MM", "NAME_FORMA": "Union of Burma", "TERR_": "", "NAME_SORT": "Myanmar", "MAP_COLOR": 13.000000, "POP_EST": 48137741.000000, "GDP_MD_EST": 55130.000000, "FIPS_10_": 0.000000, "ISO_A2": "MM", "ISO_A3": "MMR", "ISO_N3": 104.000000 }, "geometry": { "type": "Point", "coordinates": [ 96.221378, 21.362748 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "UKR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 254, "SOVEREIGNT": "Ukraine", "SOV_A3": "UKR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Ukraine", "ADM0_A3": "UKR", "GEOU_DIF": 0.000000, "GEOUNIT": "Ukraine", "GU_A3": "UKR", "SU_DIF": 0.000000, "SUBUNIT": "Ukraine", "SU_A3": "UKR", "NAME": "Ukraine", "ABBREV": "Ukr.", "POSTAL": "UA", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Ukraine", "MAP_COLOR": 3.000000, "POP_EST": 45700395.000000, "GDP_MD_EST": 339800.000000, "FIPS_10_": 0.000000, "ISO_A2": "UA", "ISO_A3": "UKR", "ISO_N3": 804.000000 }, "geometry": { "type": "Point", "coordinates": [ 31.346952, 49.267943 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "COL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 111, "SOVEREIGNT": "Colombia", "SOV_A3": "COL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Colombia", "ADM0_A3": "COL", "GEOU_DIF": 0.000000, "GEOUNIT": "Colombia", "GU_A3": "COL", "SU_DIF": 0.000000, "SUBUNIT": "Colombia", "SU_A3": "COL", "NAME": "Colombia", "ABBREV": "Col.", "POSTAL": "CO", "NAME_FORMA": "Republic of Colombia", "TERR_": "", "NAME_SORT": "Colombia", "MAP_COLOR": 1.000000, "POP_EST": 45644023.000000, "GDP_MD_EST": 395400.000000, "FIPS_10_": 0.000000, "ISO_A2": "CO", "ISO_A3": "COL", "ISO_N3": 170.000000 }, "geometry": { "type": "Point", "coordinates": [ -73.082304, 3.958371 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TZA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 256, "SOVEREIGNT": "United Republic of Tanzania", "SOV_A3": "TZA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "United Republic of Tanzania", "ADM0_A3": "TZA", "GEOU_DIF": 1.000000, "GEOUNIT": "Tanzania", "GU_A3": "TZA", "SU_DIF": 0.000000, "SUBUNIT": "Tanzania", "SU_A3": "TZA", "NAME": "Tanzania", "ABBREV": "Tanz.", "POSTAL": "TZ", "NAME_FORMA": "United Republic of Tanzania", "TERR_": "", "NAME_SORT": "Tanzania", "MAP_COLOR": 2.000000, "POP_EST": 41048532.000000, "GDP_MD_EST": 54250.000000, "FIPS_10_": 0.000000, "ISO_A2": "TZ", "ISO_A3": "TZA", "ISO_N3": 834.000000 }, "geometry": { "type": "Point", "coordinates": [ 34.818845, -6.337753 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ARG", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 84, "SOVEREIGNT": "Argentina", "SOV_A3": "ARG", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Argentina", "ADM0_A3": "ARG", "GEOU_DIF": 0.000000, "GEOUNIT": "Argentina", "GU_A3": "ARG", "SU_DIF": 0.000000, "SUBUNIT": "Argentina", "SU_A3": "ARG", "NAME": "Argentina", "ABBREV": "Arg.", "POSTAL": "AR", "NAME_FORMA": "Argentine Republic", "TERR_": "", "NAME_SORT": "Argentina", "MAP_COLOR": 13.000000, "POP_EST": 40913584.000000, "GDP_MD_EST": 573900.000000, "FIPS_10_": 0.000000, "ISO_A2": "AR", "ISO_A3": "ARG", "ISO_N3": 32.000000 }, "geometry": { "type": "Point", "coordinates": [ -64.358756, -35.510844 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ESP", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 233, "SOVEREIGNT": "Spain", "SOV_A3": "ESP", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Spain", "ADM0_A3": "ESP", "GEOU_DIF": 0.000000, "GEOUNIT": "Spain", "GU_A3": "ESP", "SU_DIF": 0.000000, "SUBUNIT": "Spain", "SU_A3": "ESP", "NAME": "Spain", "ABBREV": "Sp.", "POSTAL": "E", "NAME_FORMA": "Kingdom of Spain", "TERR_": "", "NAME_SORT": "Spain", "MAP_COLOR": 5.000000, "POP_EST": 40525002.000000, "GDP_MD_EST": 1403000.000000, "FIPS_10_": 0.000000, "ISO_A2": "ES", "ISO_A3": "ESP", "ISO_N3": 724.000000 }, "geometry": { "type": "Point", "coordinates": [ -3.632857, 40.538645 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KEN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 159, "SOVEREIGNT": "Kenya", "SOV_A3": "KEN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Kenya", "ADM0_A3": "KEN", "GEOU_DIF": 0.000000, "GEOUNIT": "Kenya", "GU_A3": "KEN", "SU_DIF": 0.000000, "SUBUNIT": "Kenya", "SU_A3": "KEN", "NAME": "Kenya", "ABBREV": "Ken.", "POSTAL": "KE", "NAME_FORMA": "Republic of Kenya", "TERR_": "", "NAME_SORT": "Kenya", "MAP_COLOR": 3.000000, "POP_EST": 39002772.000000, "GDP_MD_EST": 61510.000000, "FIPS_10_": 0.000000, "ISO_A2": "KE", "ISO_A3": "KEN", "ISO_N3": 404.000000 }, "geometry": { "type": "Point", "coordinates": [ 37.796093, 0.603351 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "POL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 208, "SOVEREIGNT": "Poland", "SOV_A3": "POL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Poland", "ADM0_A3": "POL", "GEOU_DIF": 0.000000, "GEOUNIT": "Poland", "GU_A3": "POL", "SU_DIF": 0.000000, "SUBUNIT": "Poland", "SU_A3": "POL", "NAME": "Poland", "ABBREV": "Pol.", "POSTAL": "PL", "NAME_FORMA": "Republic of Poland", "TERR_": "", "NAME_SORT": "Poland", "MAP_COLOR": 2.000000, "POP_EST": 38482919.000000, "GDP_MD_EST": 667900.000000, "FIPS_10_": 0.000000, "ISO_A2": "PL", "ISO_A3": "POL", "ISO_N3": 616.000000 }, "geometry": { "type": "Point", "coordinates": [ 19.380227, 52.374049 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MAR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 188, "SOVEREIGNT": "Morocco", "SOV_A3": "MAR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Morocco", "ADM0_A3": "MAR", "GEOU_DIF": 0.000000, "GEOUNIT": "Morocco", "GU_A3": "MAR", "SU_DIF": 0.000000, "SUBUNIT": "Morocco", "SU_A3": "MAR", "NAME": "Morocco", "ABBREV": "Mor.", "POSTAL": "MA", "NAME_FORMA": "Kingdom of Morocco", "TERR_": "", "NAME_SORT": "Morocco", "MAP_COLOR": 9.000000, "POP_EST": 34859364.000000, "GDP_MD_EST": 136600.000000, "FIPS_10_": 0.000000, "ISO_A2": "MA", "ISO_A3": "MAR", "ISO_N3": 504.000000 }, "geometry": { "type": "Point", "coordinates": [ -8.322662, 30.201449 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "DZA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 80, "SOVEREIGNT": "Algeria", "SOV_A3": "DZA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Algeria", "ADM0_A3": "DZA", "GEOU_DIF": 0.000000, "GEOUNIT": "Algeria", "GU_A3": "DZA", "SU_DIF": 0.000000, "SUBUNIT": "Algeria", "SU_A3": "DZA", "NAME": "Algeria", "ABBREV": "Alg.", "POSTAL": "DZ", "NAME_FORMA": "People's Democratic Republic of Algeria", "TERR_": "", "NAME_SORT": "Algeria", "MAP_COLOR": 3.000000, "POP_EST": 34178188.000000, "GDP_MD_EST": 232900.000000, "FIPS_10_": 0.000000, "ISO_A2": "DZ", "ISO_A3": "DZA", "ISO_N3": 12.000000 }, "geometry": { "type": "Point", "coordinates": [ 2.614546, 28.581363 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CAN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 106, "SOVEREIGNT": "Canada", "SOV_A3": "CAN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Canada", "ADM0_A3": "CAN", "GEOU_DIF": 0.000000, "GEOUNIT": "Canada", "GU_A3": "CAN", "SU_DIF": 0.000000, "SUBUNIT": "Canada", "SU_A3": "CAN", "NAME": "Canada", "ABBREV": "Can.", "POSTAL": "CA", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Canada", "MAP_COLOR": 2.000000, "POP_EST": 33487208.000000, "GDP_MD_EST": 1300000.000000, "FIPS_10_": 0.000000, "ISO_A2": "CA", "ISO_A3": "CAN", "ISO_N3": 124.000000 }, "geometry": { "type": "Point", "coordinates": [ -100.061927, 54.725724 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "UGA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 253, "SOVEREIGNT": "Uganda", "SOV_A3": "UGA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Uganda", "ADM0_A3": "UGA", "GEOU_DIF": 0.000000, "GEOUNIT": "Uganda", "GU_A3": "UGA", "SU_DIF": 0.000000, "SUBUNIT": "Uganda", "SU_A3": "UGA", "NAME": "Uganda", "ABBREV": "Uga.", "POSTAL": "UG", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Uganda", "MAP_COLOR": 4.000000, "POP_EST": 32369558.000000, "GDP_MD_EST": 39380.000000, "FIPS_10_": 0.000000, "ISO_A2": "UG", "ISO_A3": "UGA", "ISO_N3": 800.000000 }, "geometry": { "type": "Point", "coordinates": [ 32.367253, 1.285460 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SDN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 236, "SOVEREIGNT": "Sudan", "SOV_A3": "SDN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Sudan", "ADM0_A3": "SDN", "GEOU_DIF": 0.000000, "GEOUNIT": "Sudan", "GU_A3": "SDN", "SU_DIF": 0.000000, "SUBUNIT": "Sudan", "SU_A3": "SDN", "NAME": "Sudan", "ABBREV": "Sudan", "POSTAL": "SD", "NAME_FORMA": "Republic of the Sudan", "TERR_": "", "NAME_SORT": "Sudan", "MAP_COLOR": 1.000000, "POP_EST": 30894000.000000, "GDP_MD_EST": 88080.000000, "FIPS_10_": 0.000000, "ISO_A2": "SD", "ISO_A3": "SDN", "ISO_N3": 729.000000 }, "geometry": { "type": "Point", "coordinates": [ 29.955775, 16.176901 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PER", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 206, "SOVEREIGNT": "Peru", "SOV_A3": "PER", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Peru", "ADM0_A3": "PER", "GEOU_DIF": 0.000000, "GEOUNIT": "Peru", "GU_A3": "PER", "SU_DIF": 0.000000, "SUBUNIT": "Peru", "SU_A3": "PER", "NAME": "Peru", "ABBREV": "Peru", "POSTAL": "PE", "NAME_FORMA": "Republic of Peru", "TERR_": "", "NAME_SORT": "Peru", "MAP_COLOR": 11.000000, "POP_EST": 29546963.000000, "GDP_MD_EST": 247300.000000, "FIPS_10_": 0.000000, "ISO_A2": "PE", "ISO_A3": "PER", "ISO_N3": 604.000000 }, "geometry": { "type": "Point", "coordinates": [ -75.290052, -9.858448 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "IRQ", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 150, "SOVEREIGNT": "Iraq", "SOV_A3": "IRQ", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Iraq", "ADM0_A3": "IRQ", "GEOU_DIF": 0.000000, "GEOUNIT": "Iraq", "GU_A3": "IRQ", "SU_DIF": 0.000000, "SUBUNIT": "Iraq", "SU_A3": "IRQ", "NAME": "Iraq", "ABBREV": "Iraq", "POSTAL": "IRQ", "NAME_FORMA": "Republic of Iraq", "TERR_": "", "NAME_SORT": "Iraq", "MAP_COLOR": 1.000000, "POP_EST": 28945657.000000, "GDP_MD_EST": 103900.000000, "FIPS_10_": 0.000000, "ISO_A2": "IQ", "ISO_A3": "IRQ", "ISO_N3": 368.000000 }, "geometry": { "type": "Point", "coordinates": [ 43.332526, 33.564033 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SAU", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 222, "SOVEREIGNT": "Saudi Arabia", "SOV_A3": "SAU", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Saudi Arabia", "ADM0_A3": "SAU", "GEOU_DIF": 0.000000, "GEOUNIT": "Saudi Arabia", "GU_A3": "SAU", "SU_DIF": 0.000000, "SUBUNIT": "Saudi Arabia", "SU_A3": "SAU", "NAME": "Saudi Arabia", "ABBREV": "Saud.", "POSTAL": "SA", "NAME_FORMA": "Kingdom of Saudi Arabia", "TERR_": "", "NAME_SORT": "Saudi Arabia", "MAP_COLOR": 7.000000, "POP_EST": 28686633.000000, "GDP_MD_EST": 576500.000000, "FIPS_10_": 0.000000, "ISO_A2": "SA", "ISO_A3": "SAU", "ISO_N3": 682.000000 }, "geometry": { "type": "Point", "coordinates": [ 44.472503, 24.423288 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NPL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 193, "SOVEREIGNT": "Nepal", "SOV_A3": "NPL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Nepal", "ADM0_A3": "NPL", "GEOU_DIF": 0.000000, "GEOUNIT": "Nepal", "GU_A3": "NPL", "SU_DIF": 0.000000, "SUBUNIT": "Nepal", "SU_A3": "NPL", "NAME": "Nepal", "ABBREV": "Nepal", "POSTAL": "NP", "NAME_FORMA": "Kingdom of Nepal", "TERR_": "", "NAME_SORT": "Nepal", "MAP_COLOR": 12.000000, "POP_EST": 28563377.000000, "GDP_MD_EST": 31080.000000, "FIPS_10_": 0.000000, "ISO_A2": "NP", "ISO_A3": "NPL", "ISO_N3": 524.000000 }, "geometry": { "type": "Point", "coordinates": [ 83.900675, 28.421135 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "AFG", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 78, "SOVEREIGNT": "Afghanistan", "SOV_A3": "AFG", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Afghanistan", "ADM0_A3": "AFG", "GEOU_DIF": 0.000000, "GEOUNIT": "Afghanistan", "GU_A3": "AFG", "SU_DIF": 0.000000, "SUBUNIT": "Afghanistan", "SU_A3": "AFG", "NAME": "Afghanistan", "ABBREV": "Afg.", "POSTAL": "AF", "NAME_FORMA": "Islamic State of Afghanistan", "TERR_": "", "NAME_SORT": "Afghanistan", "MAP_COLOR": 7.000000, "POP_EST": 28400000.000000, "GDP_MD_EST": 22270.000000, "FIPS_10_": 0.000000, "ISO_A2": "AF", "ISO_A3": "AFG", "ISO_N3": 4.000000 }, "geometry": { "type": "Point", "coordinates": [ 66.048129, 34.092735 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "UZB", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 258, "SOVEREIGNT": "Uzbekistan", "SOV_A3": "UZB", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Uzbekistan", "ADM0_A3": "UZB", "GEOU_DIF": 0.000000, "GEOUNIT": "Uzbekistan", "GU_A3": "UZB", "SU_DIF": 0.000000, "SUBUNIT": "Uzbekistan", "SU_A3": "UZB", "NAME": "Uzbekistan", "ABBREV": "Uzb.", "POSTAL": "UZ", "NAME_FORMA": "Republic of Uzbekistan", "TERR_": "", "NAME_SORT": "Uzbekistan", "MAP_COLOR": 4.000000, "POP_EST": 27606007.000000, "GDP_MD_EST": 71670.000000, "FIPS_10_": 0.000000, "ISO_A2": "UZ", "ISO_A3": "UZB", "ISO_N3": 860.000000 }, "geometry": { "type": "Point", "coordinates": [ 63.057860, 42.024811 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "VEN", "ScaleRank": 1, "LabelRank": 3, "FeatureCla": "Adm-0 country", "OID_": 261, "SOVEREIGNT": "Venezuela", "SOV_A3": "VEN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Venezuela", "ADM0_A3": "VEN", "GEOU_DIF": 0.000000, "GEOUNIT": "Venezuela", "GU_A3": "VEN", "SU_DIF": 0.000000, "SUBUNIT": "Venezuela", "SU_A3": "VEN", "NAME": "Venezuela", "ABBREV": "Ven.", "POSTAL": "VE", "NAME_FORMA": "Bolivarian Republic of Venezuela", "TERR_": "", "NAME_SORT": "Venezuela", "MAP_COLOR": 4.000000, "POP_EST": 26814843.000000, "GDP_MD_EST": 357400.000000, "FIPS_10_": 0.000000, "ISO_A2": "VE", "ISO_A3": "VEN", "ISO_N3": 862.000000 }, "geometry": { "type": "Point", "coordinates": [ -65.850661, 7.588615 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MYS", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 176, "SOVEREIGNT": "Malaysia", "SOV_A3": "MYS", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Malaysia", "ADM0_A3": "MYS", "GEOU_DIF": 0.000000, "GEOUNIT": "Malaysia", "GU_A3": "MYS", "SU_DIF": 0.000000, "SUBUNIT": "Malaysia", "SU_A3": "MYS", "NAME": "Malaysia", "ABBREV": "Malay.", "POSTAL": "MY", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Malaysia", "MAP_COLOR": 6.000000, "POP_EST": 25715819.000000, "GDP_MD_EST": 384300.000000, "FIPS_10_": 0.000000, "ISO_A2": "MY", "ISO_A3": "MYS", "ISO_N3": 458.000000 }, "geometry": { "type": "Point", "coordinates": [ 109.698369, 3.821686 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GHA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 136, "SOVEREIGNT": "Ghana", "SOV_A3": "GHA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Ghana", "ADM0_A3": "GHA", "GEOU_DIF": 0.000000, "GEOUNIT": "Ghana", "GU_A3": "GHA", "SU_DIF": 0.000000, "SUBUNIT": "Ghana", "SU_A3": "GHA", "NAME": "Ghana", "ABBREV": "Ghana", "POSTAL": "GH", "NAME_FORMA": "Republic of Ghana", "TERR_": "", "NAME_SORT": "Ghana", "MAP_COLOR": 4.000000, "POP_EST": 23832495.000000, "GDP_MD_EST": 34200.000000, "FIPS_10_": 0.000000, "ISO_A2": "GH", "ISO_A3": "GHA", "ISO_N3": 288.000000 }, "geometry": { "type": "Point", "coordinates": [ -1.116903, 7.686568 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "YEM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 263, "SOVEREIGNT": "Yemen", "SOV_A3": "YEM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Yemen", "ADM0_A3": "YEM", "GEOU_DIF": 0.000000, "GEOUNIT": "Yemen", "GU_A3": "YEM", "SU_DIF": 0.000000, "SUBUNIT": "Yemen", "SU_A3": "YEM", "NAME": "Yemen", "ABBREV": "Yem.", "POSTAL": "YE", "NAME_FORMA": "Republic of Yemen", "TERR_": "", "NAME_SORT": "Yemen", "MAP_COLOR": 11.000000, "POP_EST": 23822783.000000, "GDP_MD_EST": 55280.000000, "FIPS_10_": 0.000000, "ISO_A2": "YE", "ISO_A3": "YEM", "ISO_N3": 887.000000 }, "geometry": { "type": "Point", "coordinates": [ 47.600325, 16.022097 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TWN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 242, "SOVEREIGNT": "Taiwan", "SOV_A3": "TWN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Taiwan", "ADM0_A3": "TWN", "GEOU_DIF": 0.000000, "GEOUNIT": "Taiwan", "GU_A3": "TWN", "SU_DIF": 0.000000, "SUBUNIT": "Taiwan", "SU_A3": "TWN", "NAME": "Taiwan", "ABBREV": "Taiwan", "POSTAL": "TW", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Taiwan", "MAP_COLOR": 2.000000, "POP_EST": 22974347.000000, "GDP_MD_EST": 712000.000000, "FIPS_10_": 0.000000, "ISO_A2": "TW", "ISO_A3": "TWN", "ISO_N3": 158.000000 }, "geometry": { "type": "Point", "coordinates": [ 120.952160, 23.901381 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PRK", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 197, "SOVEREIGNT": "North Korea", "SOV_A3": "PRK", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "North Korea", "ADM0_A3": "PRK", "GEOU_DIF": 0.000000, "GEOUNIT": "North Korea", "GU_A3": "PRK", "SU_DIF": 0.000000, "SUBUNIT": "North Korea", "SU_A3": "PRK", "NAME": "N. Korea", "ABBREV": "N. Kor.", "POSTAL": "KP", "NAME_FORMA": "Democratic People's Republic of Korea", "TERR_": "", "NAME_SORT": "Korea, North", "MAP_COLOR": 9.000000, "POP_EST": 22665345.000000, "GDP_MD_EST": 40000.000000, "FIPS_10_": 0.000000, "ISO_A2": "KP", "ISO_A3": "PRK", "ISO_N3": 408.000000 }, "geometry": { "type": "Point", "coordinates": [ 126.972707, 40.670787 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ROU", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 213, "SOVEREIGNT": "Romania", "SOV_A3": "ROU", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Romania", "ADM0_A3": "ROU", "GEOU_DIF": 0.000000, "GEOUNIT": "Romania", "GU_A3": "ROU", "SU_DIF": 0.000000, "SUBUNIT": "Romania", "SU_A3": "ROU", "NAME": "Romania", "ABBREV": "Rom.", "POSTAL": "RO", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Romania", "MAP_COLOR": 13.000000, "POP_EST": 22215421.000000, "GDP_MD_EST": 271400.000000, "FIPS_10_": 0.000000, "ISO_A2": "RO", "ISO_A3": "ROU", "ISO_N3": 642.000000 }, "geometry": { "type": "Point", "coordinates": [ 24.968133, 46.079522 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MOZ", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 189, "SOVEREIGNT": "Mozambique", "SOV_A3": "MOZ", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Mozambique", "ADM0_A3": "MOZ", "GEOU_DIF": 0.000000, "GEOUNIT": "Mozambique", "GU_A3": "MOZ", "SU_DIF": 0.000000, "SUBUNIT": "Mozambique", "SU_A3": "MOZ", "NAME": "Mozambique", "ABBREV": "Moz.", "POSTAL": "MZ", "NAME_FORMA": "Republic of Mozambique", "TERR_": "", "NAME_SORT": "Mozambique", "MAP_COLOR": 4.000000, "POP_EST": 21669278.000000, "GDP_MD_EST": 18940.000000, "FIPS_10_": 0.000000, "ISO_A2": "MZ", "ISO_A3": "MOZ", "ISO_N3": 508.000000 }, "geometry": { "type": "Point", "coordinates": [ 34.839185, -17.838653 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LKA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 234, "SOVEREIGNT": "Sri Lanka", "SOV_A3": "LKA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Sri Lanka", "ADM0_A3": "LKA", "GEOU_DIF": 0.000000, "GEOUNIT": "Sri Lanka", "GU_A3": "LKA", "SU_DIF": 0.000000, "SUBUNIT": "Sri Lanka", "SU_A3": "LKA", "NAME": "Sri Lanka", "ABBREV": "Sri L.", "POSTAL": "LK", "NAME_FORMA": "Democratic Socialist Republic of Sri Lanka", "TERR_": "", "NAME_SORT": "Sri Lanka", "MAP_COLOR": 9.000000, "POP_EST": 21324791.000000, "GDP_MD_EST": 91870.000000, "FIPS_10_": 0.000000, "ISO_A2": "LK", "ISO_A3": "LKA", "ISO_N3": 144.000000 }, "geometry": { "type": "Point", "coordinates": [ 80.703269, 7.669434 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "AUS", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 10, "SOVEREIGNT": "Australia", "SOV_A3": "AU1", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Australia", "ADM0_A3": "AUS", "GEOU_DIF": 0.000000, "GEOUNIT": "Australia", "GU_A3": "AUS", "SU_DIF": 0.000000, "SUBUNIT": "Australia", "SU_A3": "AUS", "NAME": "Australia", "ABBREV": "Auz.", "POSTAL": "AU", "NAME_FORMA": "Commonwealth of Australia", "TERR_": "", "NAME_SORT": "Australia", "MAP_COLOR": 7.000000, "POP_EST": 21262641.000000, "GDP_MD_EST": 800200.000000, "FIPS_10_": 0.000000, "ISO_A2": "AU", "ISO_A3": "AUS", "ISO_N3": 36.000000 }, "geometry": { "type": "Point", "coordinates": [ 134.208125, -25.666708 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MDG", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 174, "SOVEREIGNT": "Madagascar", "SOV_A3": "MDG", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Madagascar", "ADM0_A3": "MDG", "GEOU_DIF": 0.000000, "GEOUNIT": "Madagascar", "GU_A3": "MDG", "SU_DIF": 0.000000, "SUBUNIT": "Madagascar", "SU_A3": "MDG", "NAME": "Madagascar", "ABBREV": "Mad.", "POSTAL": "MG", "NAME_FORMA": "Republic of Madagascar", "TERR_": "", "NAME_SORT": "Madagascar", "MAP_COLOR": 3.000000, "POP_EST": 20653556.000000, "GDP_MD_EST": 20130.000000, "FIPS_10_": 0.000000, "ISO_A2": "MG", "ISO_A3": "MDG", "ISO_N3": 450.000000 }, "geometry": { "type": "Point", "coordinates": [ 46.687436, -19.589756 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CIV", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 154, "SOVEREIGNT": "Ivory Coast", "SOV_A3": "CIV", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Ivory Coast", "ADM0_A3": "CIV", "GEOU_DIF": 0.000000, "GEOUNIT": "Ivory Coast", "GU_A3": "CIV", "SU_DIF": 0.000000, "SUBUNIT": "Ivory Coast", "SU_A3": "CIV", "NAME": "Ivory Coast", "ABBREV": "I.C.", "POSTAL": "CI", "NAME_FORMA": "Republic of Cote D'Ivoire", "TERR_": "", "NAME_SORT": "Ivory Coast (Côte d'Ivoire)", "MAP_COLOR": 3.000000, "POP_EST": 20617068.000000, "GDP_MD_EST": 33850.000000, "FIPS_10_": 0.000000, "ISO_A2": "CI", "ISO_A3": "CIV", "ISO_N3": 384.000000 }, "geometry": { "type": "Point", "coordinates": [ -5.569082, 7.686396 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SYR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 241, "SOVEREIGNT": "Syria", "SOV_A3": "SYR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Syria", "ADM0_A3": "SYR", "GEOU_DIF": 0.000000, "GEOUNIT": "Syria", "GU_A3": "SYR", "SU_DIF": 0.000000, "SUBUNIT": "Syria", "SU_A3": "SYR", "NAME": "Syria", "ABBREV": "Syria", "POSTAL": "SYR", "NAME_FORMA": "Syrian Arab Republic", "TERR_": "", "NAME_SORT": "Syria", "MAP_COLOR": 6.000000, "POP_EST": 20178485.000000, "GDP_MD_EST": 98830.000000, "FIPS_10_": 0.000000, "ISO_A2": "SY", "ISO_A3": "SYR", "ISO_N3": 760.000000 }, "geometry": { "type": "Point", "coordinates": [ 38.514673, 35.228653 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CMR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 105, "SOVEREIGNT": "Cameroon", "SOV_A3": "CMR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Cameroon", "ADM0_A3": "CMR", "GEOU_DIF": 0.000000, "GEOUNIT": "Cameroon", "GU_A3": "CMR", "SU_DIF": 0.000000, "SUBUNIT": "Cameroon", "SU_A3": "CMR", "NAME": "Cameroon", "ABBREV": "Cam.", "POSTAL": "CM", "NAME_FORMA": "Republic of Cameroon", "TERR_": "", "NAME_SORT": "Cameroon", "MAP_COLOR": 3.000000, "POP_EST": 18879301.000000, "GDP_MD_EST": 42750.000000, "FIPS_10_": 0.000000, "ISO_A2": "CM", "ISO_A3": "CMR", "ISO_N3": 120.000000 }, "geometry": { "type": "Point", "coordinates": [ 12.143287, 5.417172 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NLD", "ScaleRank": 1, "LabelRank": 6, "FeatureCla": "Adm-0 country", "OID_": 20, "SOVEREIGNT": "Netherlands", "SOV_A3": "NL1", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Netherlands", "ADM0_A3": "NLD", "GEOU_DIF": 0.000000, "GEOUNIT": "Netherlands", "GU_A3": "NLD", "SU_DIF": 0.000000, "SUBUNIT": "Netherlands", "SU_A3": "NLD", "NAME": "Netherlands", "ABBREV": "Neth.", "POSTAL": "NL", "NAME_FORMA": "Kingdom of the Netherlands", "TERR_": "", "NAME_SORT": "Netherlands", "MAP_COLOR": 9.000000, "POP_EST": 16715999.000000, "GDP_MD_EST": 672000.000000, "FIPS_10_": 0.000000, "ISO_A2": "NL", "ISO_A3": "NLD", "ISO_N3": 528.000000 }, "geometry": { "type": "Point", "coordinates": [ 5.357191, 52.372378 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CHL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 110, "SOVEREIGNT": "Chile", "SOV_A3": "CHL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Chile", "ADM0_A3": "CHL", "GEOU_DIF": 0.000000, "GEOUNIT": "Chile", "GU_A3": "CHL", "SU_DIF": 0.000000, "SUBUNIT": "Chile", "SU_A3": "CHL", "NAME": "Chile", "ABBREV": "Chile", "POSTAL": "CL", "NAME_FORMA": "Republic of Chile", "TERR_": "", "NAME_SORT": "Chile", "MAP_COLOR": 9.000000, "POP_EST": 16601707.000000, "GDP_MD_EST": 244500.000000, "FIPS_10_": 0.000000, "ISO_A2": "CL", "ISO_A3": "CHL", "ISO_N3": 152.000000 }, "geometry": { "type": "Point", "coordinates": [ -70.565598, -28.848187 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BFA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 102, "SOVEREIGNT": "Burkina Faso", "SOV_A3": "BFA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Burkina Faso", "ADM0_A3": "BFA", "GEOU_DIF": 0.000000, "GEOUNIT": "Burkina Faso", "GU_A3": "BFA", "SU_DIF": 0.000000, "SUBUNIT": "Burkina Faso", "SU_A3": "BFA", "NAME": "Burkina Faso", "ABBREV": "B.F.", "POSTAL": "BF", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Burkina Faso", "MAP_COLOR": 11.000000, "POP_EST": 15746232.000000, "GDP_MD_EST": 17820.000000, "FIPS_10_": 0.000000, "ISO_A2": "BF", "ISO_A3": "BFA", "ISO_N3": 854.000000 }, "geometry": { "type": "Point", "coordinates": [ -1.619706, 12.488205 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KAZ", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 158, "SOVEREIGNT": "Kazakhstan", "SOV_A3": "KAZ", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Kazakhstan", "ADM0_A3": "KAZ", "GEOU_DIF": 0.000000, "GEOUNIT": "Kazakhstan", "GU_A3": "KAZ", "SU_DIF": 0.000000, "SUBUNIT": "Kazakhstan", "SU_A3": "KAZ", "NAME": "Kazakhstan", "ABBREV": "Kaz.", "POSTAL": "KZ", "NAME_FORMA": "Republic of Kazakhstan", "TERR_": "", "NAME_SORT": "Kazakhstan", "MAP_COLOR": 1.000000, "POP_EST": 15399437.000000, "GDP_MD_EST": 175800.000000, "FIPS_10_": 0.000000, "ISO_A2": "KZ", "ISO_A3": "KAZ", "ISO_N3": 398.000000 }, "geometry": { "type": "Point", "coordinates": [ 67.325896, 48.631138 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NER", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 195, "SOVEREIGNT": "Niger", "SOV_A3": "NER", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Niger", "ADM0_A3": "NER", "GEOU_DIF": 0.000000, "GEOUNIT": "Niger", "GU_A3": "NER", "SU_DIF": 0.000000, "SUBUNIT": "Niger", "SU_A3": "NER", "NAME": "Niger", "ABBREV": "Niger", "POSTAL": "NE", "NAME_FORMA": "Republic of Niger", "TERR_": "", "NAME_SORT": "Niger", "MAP_COLOR": 13.000000, "POP_EST": 15306252.000000, "GDP_MD_EST": 10040.000000, "FIPS_10_": 0.000000, "ISO_A2": "NE", "ISO_A3": "NER", "ISO_N3": 562.000000 }, "geometry": { "type": "Point", "coordinates": [ 9.413579, 17.591152 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ECU", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 123, "SOVEREIGNT": "Ecuador", "SOV_A3": "ECU", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Ecuador", "ADM0_A3": "ECU", "GEOU_DIF": 0.000000, "GEOUNIT": "Ecuador", "GU_A3": "ECU", "SU_DIF": 0.000000, "SUBUNIT": "Ecuador", "SU_A3": "ECU", "NAME": "Ecuador", "ABBREV": "Ecu.", "POSTAL": "EC", "NAME_FORMA": "Republic of Ecuador", "TERR_": "", "NAME_SORT": "Ecuador", "MAP_COLOR": 12.000000, "POP_EST": 14573101.000000, "GDP_MD_EST": 107700.000000, "FIPS_10_": 0.000000, "ISO_A2": "EC", "ISO_A3": "ECU", "ISO_N3": 218.000000 }, "geometry": { "type": "Point", "coordinates": [ -78.309199, -1.002003 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KHM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 104, "SOVEREIGNT": "Cambodia", "SOV_A3": "KHM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Cambodia", "ADM0_A3": "KHM", "GEOU_DIF": 0.000000, "GEOUNIT": "Cambodia", "GU_A3": "KHM", "SU_DIF": 0.000000, "SUBUNIT": "Cambodia", "SU_A3": "KHM", "NAME": "Cambodia", "ABBREV": "Camb.", "POSTAL": "KH", "NAME_FORMA": "Kingdom of Cambodia", "TERR_": "", "NAME_SORT": "Cambodia", "MAP_COLOR": 5.000000, "POP_EST": 14494293.000000, "GDP_MD_EST": 27940.000000, "FIPS_10_": 0.000000, "ISO_A2": "KH", "ISO_A3": "KHM", "ISO_N3": 116.000000 }, "geometry": { "type": "Point", "coordinates": [ 104.969935, 12.999365 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MWI", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 175, "SOVEREIGNT": "Malawi", "SOV_A3": "MWI", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Malawi", "ADM0_A3": "MWI", "GEOU_DIF": 0.000000, "GEOUNIT": "Malawi", "GU_A3": "MWI", "SU_DIF": 0.000000, "SUBUNIT": "Malawi", "SU_A3": "MWI", "NAME": "Malawi", "ABBREV": "Mal.", "POSTAL": "MW", "NAME_FORMA": "Republic of Malawi", "TERR_": "", "NAME_SORT": "Malawi", "MAP_COLOR": 5.000000, "POP_EST": 14268711.000000, "GDP_MD_EST": 11810.000000, "FIPS_10_": 0.000000, "ISO_A2": "MW", "ISO_A3": "MWI", "ISO_N3": 454.000000 }, "geometry": { "type": "Point", "coordinates": [ 33.762737, -13.130485 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SEN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 223, "SOVEREIGNT": "Senegal", "SOV_A3": "SEN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Senegal", "ADM0_A3": "SEN", "GEOU_DIF": 0.000000, "GEOUNIT": "Senegal", "GU_A3": "SEN", "SU_DIF": 0.000000, "SUBUNIT": "Senegal", "SU_A3": "SEN", "NAME": "Senegal", "ABBREV": "Sen.", "POSTAL": "SN", "NAME_FORMA": "Republic of Senegal", "TERR_": "", "NAME_SORT": "Senegal", "MAP_COLOR": 5.000000, "POP_EST": 13711597.000000, "GDP_MD_EST": 21980.000000, "FIPS_10_": 0.000000, "ISO_A2": "SN", "ISO_A3": "SEN", "ISO_N3": 686.000000 }, "geometry": { "type": "Point", "coordinates": [ -14.671998, 14.953046 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GTM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 139, "SOVEREIGNT": "Guatemala", "SOV_A3": "GTM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Guatemala", "ADM0_A3": "GTM", "GEOU_DIF": 0.000000, "GEOUNIT": "Guatemala", "GU_A3": "GTM", "SU_DIF": 0.000000, "SUBUNIT": "Guatemala", "SU_A3": "GTM", "NAME": "Guatemala", "ABBREV": "Guat.", "POSTAL": "GT", "NAME_FORMA": "Republic of Guatemala", "TERR_": "", "NAME_SORT": "Guatemala", "MAP_COLOR": 6.000000, "POP_EST": 13276517.000000, "GDP_MD_EST": 68580.000000, "FIPS_10_": 0.000000, "ISO_A2": "GT", "ISO_A3": "GTM", "ISO_N3": 320.000000 }, "geometry": { "type": "Point", "coordinates": [ -90.363848, 15.802253 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "AGO", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 82, "SOVEREIGNT": "Angola", "SOV_A3": "AGO", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Angola", "ADM0_A3": "AGO", "GEOU_DIF": 0.000000, "GEOUNIT": "Angola", "GU_A3": "AGO", "SU_DIF": 0.000000, "SUBUNIT": "Angola", "SU_A3": "AGO", "NAME": "Angola", "ABBREV": "Ang.", "POSTAL": "AO", "NAME_FORMA": "Republic of Angola", "TERR_": "", "NAME_SORT": "Angola", "MAP_COLOR": 1.000000, "POP_EST": 12799293.000000, "GDP_MD_EST": 110300.000000, "FIPS_10_": 0.000000, "ISO_A2": "AO", "ISO_A3": "AGO", "ISO_N3": 24.000000 }, "geometry": { "type": "Point", "coordinates": [ 17.539116, -12.429726 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MLI", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 178, "SOVEREIGNT": "Mali", "SOV_A3": "MLI", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Mali", "ADM0_A3": "MLI", "GEOU_DIF": 0.000000, "GEOUNIT": "Mali", "GU_A3": "MLI", "SU_DIF": 0.000000, "SUBUNIT": "Mali", "SU_A3": "MLI", "NAME": "Mali", "ABBREV": "Mali", "POSTAL": "ML", "NAME_FORMA": "Republic of Mali", "TERR_": "", "NAME_SORT": "Mali", "MAP_COLOR": 7.000000, "POP_EST": 12666987.000000, "GDP_MD_EST": 14590.000000, "FIPS_10_": 0.000000, "ISO_A2": "ML", "ISO_A3": "MLI", "ISO_N3": 466.000000 }, "geometry": { "type": "Point", "coordinates": [ -2.554519, 17.394458 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ZMB", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 264, "SOVEREIGNT": "Zambia", "SOV_A3": "ZMB", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Zambia", "ADM0_A3": "ZMB", "GEOU_DIF": 0.000000, "GEOUNIT": "Zambia", "GU_A3": "ZMB", "SU_DIF": 0.000000, "SUBUNIT": "Zambia", "SU_A3": "ZMB", "NAME": "Zambia", "ABBREV": "Zambia", "POSTAL": "ZM", "NAME_FORMA": "Republic of Zambia", "TERR_": "", "NAME_SORT": "Zambia", "MAP_COLOR": 13.000000, "POP_EST": 11862740.000000, "GDP_MD_EST": 17500.000000, "FIPS_10_": 0.000000, "ISO_A2": "ZM", "ISO_A3": "ZMB", "ISO_N3": 894.000000 }, "geometry": { "type": "Point", "coordinates": [ 26.829052, -14.292748 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CUB", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 115, "SOVEREIGNT": "Cuba", "SOV_A3": "CUB", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Cuba", "ADM0_A3": "CUB", "GEOU_DIF": 0.000000, "GEOUNIT": "Cuba", "GU_A3": "CUB", "SU_DIF": 0.000000, "SUBUNIT": "Cuba", "SU_A3": "CUB", "NAME": "Cuba", "ABBREV": "Cuba", "POSTAL": "CU", "NAME_FORMA": "Republic of Cuba", "TERR_": "", "NAME_SORT": "Cuba", "MAP_COLOR": 4.000000, "POP_EST": 11451652.000000, "GDP_MD_EST": 108200.000000, "FIPS_10_": 0.000000, "ISO_A2": "CU", "ISO_A3": "CUB", "ISO_N3": 192.000000 }, "geometry": { "type": "Point", "coordinates": [ -79.047628, 22.167961 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ZWE", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 265, "SOVEREIGNT": "Zimbabwe", "SOV_A3": "ZWE", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Zimbabwe", "ADM0_A3": "ZWE", "GEOU_DIF": 0.000000, "GEOUNIT": "Zimbabwe", "GU_A3": "ZWE", "SU_DIF": 0.000000, "SUBUNIT": "Zimbabwe", "SU_A3": "ZWE", "NAME": "Zimbabwe", "ABBREV": "Zimb.", "POSTAL": "ZW", "NAME_FORMA": "Republic of Zimbabwe", "TERR_": "", "NAME_SORT": "Zimbabwe", "MAP_COLOR": 9.000000, "POP_EST": 11392629.000000, "GDP_MD_EST": 1925.000000, "FIPS_10_": 0.000000, "ISO_A2": "ZW", "ISO_A3": "ZWE", "ISO_N3": 716.000000 }, "geometry": { "type": "Point", "coordinates": [ 29.719582, -19.333537 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GRC", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 137, "SOVEREIGNT": "Greece", "SOV_A3": "GRC", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Greece", "ADM0_A3": "GRC", "GEOU_DIF": 0.000000, "GEOUNIT": "Greece", "GU_A3": "GRC", "SU_DIF": 0.000000, "SUBUNIT": "Greece", "SU_A3": "GRC", "NAME": "Greece", "ABBREV": "Greece", "POSTAL": "GR", "NAME_FORMA": "Hellenic Republic", "TERR_": "", "NAME_SORT": "Greece", "MAP_COLOR": 9.000000, "POP_EST": 10737428.000000, "GDP_MD_EST": 343000.000000, "FIPS_10_": 0.000000, "ISO_A2": "GR", "ISO_A3": "GRC", "ISO_N3": 300.000000 }, "geometry": { "type": "Point", "coordinates": [ 21.843795, 39.605035 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PRT", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 209, "SOVEREIGNT": "Portugal", "SOV_A3": "PRT", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Portugal", "ADM0_A3": "PRT", "GEOU_DIF": 0.000000, "GEOUNIT": "Portugal", "GU_A3": "PRT", "SU_DIF": 0.000000, "SUBUNIT": "Portugal", "SU_A3": "PR1", "NAME": "Portugal", "ABBREV": "Port.", "POSTAL": "P", "NAME_FORMA": "Portuguese Republic", "TERR_": "", "NAME_SORT": "Portugal", "MAP_COLOR": 4.000000, "POP_EST": 10707924.000000, "GDP_MD_EST": 236500.000000, "FIPS_10_": 0.000000, "ISO_A2": "PT", "ISO_A3": "PRT", "ISO_N3": 620.000000 }, "geometry": { "type": "Point", "coordinates": [ -8.573113, 39.822819 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TUN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 249, "SOVEREIGNT": "Tunisia", "SOV_A3": "TUN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Tunisia", "ADM0_A3": "TUN", "GEOU_DIF": 0.000000, "GEOUNIT": "Tunisia", "GU_A3": "TUN", "SU_DIF": 0.000000, "SUBUNIT": "Tunisia", "SU_A3": "TUN", "NAME": "Tunisia", "ABBREV": "Tun.", "POSTAL": "TN", "NAME_FORMA": "Republic of Tunisia", "TERR_": "", "NAME_SORT": "Tunisia", "MAP_COLOR": 2.000000, "POP_EST": 10486339.000000, "GDP_MD_EST": 81710.000000, "FIPS_10_": 0.000000, "ISO_A2": "TN", "ISO_A3": "TUN", "ISO_N3": 788.000000 }, "geometry": { "type": "Point", "coordinates": [ 9.550299, 34.345055 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "RWA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 215, "SOVEREIGNT": "Rwanda", "SOV_A3": "RWA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Rwanda", "ADM0_A3": "RWA", "GEOU_DIF": 0.000000, "GEOUNIT": "Rwanda", "GU_A3": "RWA", "SU_DIF": 0.000000, "SUBUNIT": "Rwanda", "SU_A3": "RWA", "NAME": "Rwanda", "ABBREV": "Rwa.", "POSTAL": "RW", "NAME_FORMA": "Rwandese Republic", "TERR_": "", "NAME_SORT": "Rwanda", "MAP_COLOR": 10.000000, "POP_EST": 10473282.000000, "GDP_MD_EST": 9706.000000, "FIPS_10_": 0.000000, "ISO_A2": "RW", "ISO_A3": "RWA", "ISO_N3": 646.000000 }, "geometry": { "type": "Point", "coordinates": [ 29.919012, -2.006307 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BEL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 92, "SOVEREIGNT": "Belgium", "SOV_A3": "BEL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Belgium", "ADM0_A3": "BEL", "GEOU_DIF": 0.000000, "GEOUNIT": "Belgium", "GU_A3": "BEL", "SU_DIF": 0.000000, "SUBUNIT": "Belgium", "SU_A3": "BEL", "NAME": "Belgium", "ABBREV": "Belg.", "POSTAL": "B", "NAME_FORMA": "Kingdom of Belgium", "TERR_": "", "NAME_SORT": "Belgium", "MAP_COLOR": 8.000000, "POP_EST": 10414336.000000, "GDP_MD_EST": 389300.000000, "FIPS_10_": 0.000000, "ISO_A2": "BE", "ISO_A3": "BEL", "ISO_N3": 56.000000 }, "geometry": { "type": "Point", "coordinates": [ 4.636528, 50.831938 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TCD", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 109, "SOVEREIGNT": "Chad", "SOV_A3": "TCD", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Chad", "ADM0_A3": "TCD", "GEOU_DIF": 0.000000, "GEOUNIT": "Chad", "GU_A3": "TCD", "SU_DIF": 0.000000, "SUBUNIT": "Chad", "SU_A3": "TCD", "NAME": "Chad", "ABBREV": "Chad", "POSTAL": "TD", "NAME_FORMA": "Republic of Chad", "TERR_": "", "NAME_SORT": "Chad", "MAP_COLOR": 6.000000, "POP_EST": 10329208.000000, "GDP_MD_EST": 15860.000000, "FIPS_10_": 0.000000, "ISO_A2": "TD", "ISO_A3": "TCD", "ISO_N3": 148.000000 }, "geometry": { "type": "Point", "coordinates": [ 18.451929, 15.539152 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CZE", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 117, "SOVEREIGNT": "Czech Republic", "SOV_A3": "CZE", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Czech Republic", "ADM0_A3": "CZE", "GEOU_DIF": 0.000000, "GEOUNIT": "Czech Republic", "GU_A3": "CZE", "SU_DIF": 0.000000, "SUBUNIT": "Czech Republic", "SU_A3": "CZE", "NAME": "Czech Rep.", "ABBREV": "Cz. Rep.", "POSTAL": "CZ", "NAME_FORMA": "Czech Republic", "TERR_": "", "NAME_SORT": "Czech Republic", "MAP_COLOR": 6.000000, "POP_EST": 10211904.000000, "GDP_MD_EST": 265200.000000, "FIPS_10_": 0.000000, "ISO_A2": "CZ", "ISO_A3": "CZE", "ISO_N3": 203.000000 }, "geometry": { "type": "Point", "coordinates": [ 15.310535, 49.930944 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GIN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 140, "SOVEREIGNT": "Guinea", "SOV_A3": "GIN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Guinea", "ADM0_A3": "GIN", "GEOU_DIF": 0.000000, "GEOUNIT": "Guinea", "GU_A3": "GIN", "SU_DIF": 0.000000, "SUBUNIT": "Guinea", "SU_A3": "GIN", "NAME": "Guinea", "ABBREV": "Gin.", "POSTAL": "GN", "NAME_FORMA": "Republic of Guinea", "TERR_": "", "NAME_SORT": "Guinea", "MAP_COLOR": 2.000000, "POP_EST": 10057975.000000, "GDP_MD_EST": 10600.000000, "FIPS_10_": 0.000000, "ISO_A2": "GN", "ISO_A3": "GIN", "ISO_N3": 324.000000 }, "geometry": { "type": "Point", "coordinates": [ -11.144977, 11.034504 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "HUN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 145, "SOVEREIGNT": "Hungary", "SOV_A3": "HUN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Hungary", "ADM0_A3": "HUN", "GEOU_DIF": 0.000000, "GEOUNIT": "Hungary", "GU_A3": "HUN", "SU_DIF": 0.000000, "SUBUNIT": "Hungary", "SU_A3": "HUN", "NAME": "Hungary", "ABBREV": "Hun.", "POSTAL": "HU", "NAME_FORMA": "Republic of Hungary", "TERR_": "", "NAME_SORT": "Hungary", "MAP_COLOR": 5.000000, "POP_EST": 9905596.000000, "GDP_MD_EST": 196600.000000, "FIPS_10_": 0.000000, "ISO_A2": "HU", "ISO_A3": "HUN", "ISO_N3": 348.000000 }, "geometry": { "type": "Point", "coordinates": [ 19.404981, 47.366738 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SOM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 230, "SOVEREIGNT": "Somalia", "SOV_A3": "SOM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Somalia", "ADM0_A3": "SOM", "GEOU_DIF": 0.000000, "GEOUNIT": "Somalia", "GU_A3": "SOM", "SU_DIF": 0.000000, "SUBUNIT": "Somalia", "SU_A3": "SOM", "NAME": "Somalia", "ABBREV": "Som.", "POSTAL": "SO", "NAME_FORMA": "Federal Republic of Somalia", "TERR_": "", "NAME_SORT": "Somalia", "MAP_COLOR": 7.000000, "POP_EST": 9832017.000000, "GDP_MD_EST": 5524.000000, "FIPS_10_": 0.000000, "ISO_A2": "SO", "ISO_A3": "SOM", "ISO_N3": 706.000000 }, "geometry": { "type": "Point", "coordinates": [ 45.188826, 4.205594 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BOL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 96, "SOVEREIGNT": "Bolivia", "SOV_A3": "BOL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Bolivia", "ADM0_A3": "BOL", "GEOU_DIF": 0.000000, "GEOUNIT": "Bolivia", "GU_A3": "BOL", "SU_DIF": 0.000000, "SUBUNIT": "Bolivia", "SU_A3": "BOL", "NAME": "Bolivia", "ABBREV": "Bolivia", "POSTAL": "BO", "NAME_FORMA": "Republic of Bolivia", "TERR_": "", "NAME_SORT": "Bolivia", "MAP_COLOR": 3.000000, "POP_EST": 9775246.000000, "GDP_MD_EST": 43270.000000, "FIPS_10_": 0.000000, "ISO_A2": "BO", "ISO_A3": "BOL", "ISO_N3": 68.000000 }, "geometry": { "type": "Point", "coordinates": [ -64.678799, -16.881667 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "DOM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 121, "SOVEREIGNT": "Dominican Republic", "SOV_A3": "DOM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Dominican Republic", "ADM0_A3": "DOM", "GEOU_DIF": 0.000000, "GEOUNIT": "Dominican Republic", "GU_A3": "DOM", "SU_DIF": 0.000000, "SUBUNIT": "Dominican Republic", "SU_A3": "DOM", "NAME": "Dominican Rep.", "ABBREV": "Dom. Rep.", "POSTAL": "DO", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Dominican Republic", "MAP_COLOR": 7.000000, "POP_EST": 9650054.000000, "GDP_MD_EST": 78000.000000, "FIPS_10_": 0.000000, "ISO_A2": "DO", "ISO_A3": "DOM", "ISO_N3": 214.000000 }, "geometry": { "type": "Point", "coordinates": [ -70.181571, 19.000693 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BLR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 91, "SOVEREIGNT": "Belarus", "SOV_A3": "BLR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Belarus", "ADM0_A3": "BLR", "GEOU_DIF": 0.000000, "GEOUNIT": "Belarus", "GU_A3": "BLR", "SU_DIF": 0.000000, "SUBUNIT": "Belarus", "SU_A3": "BLR", "NAME": "Belarus", "ABBREV": "Bela.", "POSTAL": "BY", "NAME_FORMA": "Republic of Belarus", "TERR_": "", "NAME_SORT": "Belarus", "MAP_COLOR": 11.000000, "POP_EST": 9648533.000000, "GDP_MD_EST": 114100.000000, "FIPS_10_": 0.000000, "ISO_A2": "BY", "ISO_A3": "BLR", "ISO_N3": 112.000000 }, "geometry": { "type": "Point", "coordinates": [ 28.042432, 53.762329 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SWE", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 239, "SOVEREIGNT": "Sweden", "SOV_A3": "SWE", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Sweden", "ADM0_A3": "SWE", "GEOU_DIF": 0.000000, "GEOUNIT": "Sweden", "GU_A3": "SWE", "SU_DIF": 0.000000, "SUBUNIT": "Sweden", "SU_A3": "SWE", "NAME": "Sweden", "ABBREV": "Swe.", "POSTAL": "S", "NAME_FORMA": "Kingdom of Sweden", "TERR_": "", "NAME_SORT": "Sweden", "MAP_COLOR": 4.000000, "POP_EST": 9059651.000000, "GDP_MD_EST": 344300.000000, "FIPS_10_": 0.000000, "ISO_A2": "SE", "ISO_A3": "SWE", "ISO_N3": 752.000000 }, "geometry": { "type": "Point", "coordinates": [ 18.063754, 65.453381 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "HTI", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 143, "SOVEREIGNT": "Haiti", "SOV_A3": "HTI", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Haiti", "ADM0_A3": "HTI", "GEOU_DIF": 0.000000, "GEOUNIT": "Haiti", "GU_A3": "HTI", "SU_DIF": 0.000000, "SUBUNIT": "Haiti", "SU_A3": "HTI", "NAME": "Haiti", "ABBREV": "Haiti", "POSTAL": "HT", "NAME_FORMA": "Republic of Haiti", "TERR_": "", "NAME_SORT": "Haiti", "MAP_COLOR": 2.000000, "POP_EST": 9035536.000000, "GDP_MD_EST": 11500.000000, "FIPS_10_": 0.000000, "ISO_A2": "HT", "ISO_A3": "HTI", "ISO_N3": 332.000000 }, "geometry": { "type": "Point", "coordinates": [ -73.087813, 18.964650 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BDI", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 103, "SOVEREIGNT": "Burundi", "SOV_A3": "BDI", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Burundi", "ADM0_A3": "BDI", "GEOU_DIF": 0.000000, "GEOUNIT": "Burundi", "GU_A3": "BDI", "SU_DIF": 0.000000, "SUBUNIT": "Burundi", "SU_A3": "BDI", "NAME": "Burundi", "ABBREV": "Bur.", "POSTAL": "BI", "NAME_FORMA": "Republic of Burundi", "TERR_": "", "NAME_SORT": "Burundi", "MAP_COLOR": 8.000000, "POP_EST": 8988091.000000, "GDP_MD_EST": 3102.000000, "FIPS_10_": 0.000000, "ISO_A2": "BI", "ISO_A3": "BDI", "ISO_N3": 108.000000 }, "geometry": { "type": "Point", "coordinates": [ 29.875031, -3.380401 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BEN", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 94, "SOVEREIGNT": "Benin", "SOV_A3": "BEN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Benin", "ADM0_A3": "BEN", "GEOU_DIF": 0.000000, "GEOUNIT": "Benin", "GU_A3": "BEN", "SU_DIF": 0.000000, "SUBUNIT": "Benin", "SU_A3": "BEN", "NAME": "Benin", "ABBREV": "Benin", "POSTAL": "BJ", "NAME_FORMA": "Republic of Benin", "TERR_": "", "NAME_SORT": "Benin", "MAP_COLOR": 12.000000, "POP_EST": 8791832.000000, "GDP_MD_EST": 12830.000000, "FIPS_10_": 0.000000, "ISO_A2": "BJ", "ISO_A3": "BEN", "ISO_N3": 204.000000 }, "geometry": { "type": "Point", "coordinates": [ 2.329361, 10.405246 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SDS", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 235, "SOVEREIGNT": "South Sudan", "SOV_A3": "SDS", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "South Sudan", "ADM0_A3": "SDS", "GEOU_DIF": 0.000000, "GEOUNIT": "South Sudan", "GU_A3": "SDS", "SU_DIF": 0.000000, "SUBUNIT": "South Sudan", "SU_A3": "SDS", "NAME": "S. Sudan", "ABBREV": "S. Sud.", "POSTAL": "SS", "NAME_FORMA": "Republic of South Sudan", "TERR_": "", "NAME_SORT": "South Sudan", "MAP_COLOR": 5.000000, "POP_EST": 8260490.000000, "GDP_MD_EST": -99.000000, "FIPS_10_": -99.000000, "ISO_A2": "SS", "ISO_A3": "SDS", "ISO_N3": 728.000000 }, "geometry": { "type": "Point", "coordinates": [ 30.249527, 7.365878 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "AZE", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 87, "SOVEREIGNT": "Azerbaijan", "SOV_A3": "AZE", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Azerbaijan", "ADM0_A3": "AZE", "GEOU_DIF": 0.000000, "GEOUNIT": "Azerbaijan", "GU_A3": "AZE", "SU_DIF": 0.000000, "SUBUNIT": "Azerbaijan", "SU_A3": "AZE", "NAME": "Azerbaijan", "ABBREV": "Aze.", "POSTAL": "AZ", "NAME_FORMA": "Republic of Azerbaijan", "TERR_": "", "NAME_SORT": "Azerbaijan", "MAP_COLOR": 8.000000, "POP_EST": 8238672.000000, "GDP_MD_EST": 77610.000000, "FIPS_10_": 0.000000, "ISO_A2": "AZ", "ISO_A3": "AZE", "ISO_N3": 31.000000 }, "geometry": { "type": "Point", "coordinates": [ 47.723854, 40.554425 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "AUT", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 86, "SOVEREIGNT": "Austria", "SOV_A3": "AUT", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Austria", "ADM0_A3": "AUT", "GEOU_DIF": 0.000000, "GEOUNIT": "Austria", "GU_A3": "AUT", "SU_DIF": 0.000000, "SUBUNIT": "Austria", "SU_A3": "AUT", "NAME": "Austria", "ABBREV": "Aust.", "POSTAL": "A", "NAME_FORMA": "Republic of Austria", "TERR_": "", "NAME_SORT": "Austria", "MAP_COLOR": 4.000000, "POP_EST": 8210281.000000, "GDP_MD_EST": 329500.000000, "FIPS_10_": 0.000000, "ISO_A2": "AT", "ISO_A3": "AUT", "ISO_N3": 40.000000 }, "geometry": { "type": "Point", "coordinates": [ 14.603007, 47.742630 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "HND", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 144, "SOVEREIGNT": "Honduras", "SOV_A3": "HND", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Honduras", "ADM0_A3": "HND", "GEOU_DIF": 0.000000, "GEOUNIT": "Honduras", "GU_A3": "HND", "SU_DIF": 0.000000, "SUBUNIT": "Honduras", "SU_A3": "HND", "NAME": "Honduras", "ABBREV": "Hond.", "POSTAL": "HN", "NAME_FORMA": "Republic of Honduras", "TERR_": "", "NAME_SORT": "Honduras", "MAP_COLOR": 5.000000, "POP_EST": 7792854.000000, "GDP_MD_EST": 33720.000000, "FIPS_10_": 0.000000, "ISO_A2": "HN", "ISO_A3": "HND", "ISO_N3": 340.000000 }, "geometry": { "type": "Point", "coordinates": [ -86.617213, 14.922471 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CHE", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 240, "SOVEREIGNT": "Switzerland", "SOV_A3": "CHE", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Switzerland", "ADM0_A3": "CHE", "GEOU_DIF": 0.000000, "GEOUNIT": "Switzerland", "GU_A3": "CHE", "SU_DIF": 0.000000, "SUBUNIT": "Switzerland", "SU_A3": "CHE", "NAME": "Switzerland", "ABBREV": "Switz.", "POSTAL": "CH", "NAME_FORMA": "Swiss Confederation", "TERR_": "", "NAME_SORT": "Switzerland", "MAP_COLOR": 3.000000, "POP_EST": 7604467.000000, "GDP_MD_EST": 316700.000000, "FIPS_10_": 0.000000, "ISO_A2": "CH", "ISO_A3": "CHE", "ISO_N3": 756.000000 }, "geometry": { "type": "Point", "coordinates": [ 8.216605, 46.996063 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SRB", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 211, "SOVEREIGNT": "Republic of Serbia", "SOV_A3": "SRB", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Republic of Serbia", "ADM0_A3": "SRB", "GEOU_DIF": 0.000000, "GEOUNIT": "Republic of Serbia", "GU_A3": "SRB", "SU_DIF": 0.000000, "SUBUNIT": "Republic of Serbia", "SU_A3": "SRB", "NAME": "Serbia", "ABBREV": "Serb.", "POSTAL": "RS", "NAME_FORMA": "Republic of Serbia", "TERR_": "", "NAME_SORT": "Serbia", "MAP_COLOR": 10.000000, "POP_EST": 7379339.000000, "GDP_MD_EST": 80340.000000, "FIPS_10_": 0.000000, "ISO_A2": "RS", "ISO_A3": "SRB", "ISO_N3": 688.000000 }, "geometry": { "type": "Point", "coordinates": [ 20.781772, 44.435476 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TJK", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 243, "SOVEREIGNT": "Tajikistan", "SOV_A3": "TJK", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Tajikistan", "ADM0_A3": "TJK", "GEOU_DIF": 0.000000, "GEOUNIT": "Tajikistan", "GU_A3": "TJK", "SU_DIF": 0.000000, "SUBUNIT": "Tajikistan", "SU_A3": "TJK", "NAME": "Tajikistan", "ABBREV": "Tjk.", "POSTAL": "TJ", "NAME_FORMA": "Republic of Tajikistan", "TERR_": "", "NAME_SORT": "Tajikistan", "MAP_COLOR": 5.000000, "POP_EST": 7349145.000000, "GDP_MD_EST": 13160.000000, "FIPS_10_": 0.000000, "ISO_A2": "TJ", "ISO_A3": "TJK", "ISO_N3": 762.000000 }, "geometry": { "type": "Point", "coordinates": [ 71.075379, 39.199118 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ISR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 152, "SOVEREIGNT": "Israel", "SOV_A3": "ISR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Israel", "ADM0_A3": "ISR", "GEOU_DIF": 0.000000, "GEOUNIT": "Israel", "GU_A3": "ISR", "SU_DIF": 0.000000, "SUBUNIT": "Israel", "SU_A3": "ISR", "NAME": "Israel", "ABBREV": "Isr.", "POSTAL": "IS", "NAME_FORMA": "State of Israel", "TERR_": "", "NAME_SORT": "Israel", "MAP_COLOR": 9.000000, "POP_EST": 7233701.000000, "GDP_MD_EST": 201400.000000, "FIPS_10_": 0.000000, "ISO_A2": "IL", "ISO_A3": "ISR", "ISO_N3": 376.000000 }, "geometry": { "type": "Point", "coordinates": [ 34.849018, 31.218071 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BGR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 101, "SOVEREIGNT": "Bulgaria", "SOV_A3": "BGR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Bulgaria", "ADM0_A3": "BGR", "GEOU_DIF": 0.000000, "GEOUNIT": "Bulgaria", "GU_A3": "BGR", "SU_DIF": 0.000000, "SUBUNIT": "Bulgaria", "SU_A3": "BGR", "NAME": "Bulgaria", "ABBREV": "Bulg.", "POSTAL": "BG", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Bulgaria", "MAP_COLOR": 8.000000, "POP_EST": 7204687.000000, "GDP_MD_EST": 93750.000000, "FIPS_10_": 0.000000, "ISO_A2": "BG", "ISO_A3": "BGR", "ISO_N3": 100.000000 }, "geometry": { "type": "Point", "coordinates": [ 25.220918, 42.972594 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SLV", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 125, "SOVEREIGNT": "El Salvador", "SOV_A3": "SLV", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "El Salvador", "ADM0_A3": "SLV", "GEOU_DIF": 0.000000, "GEOUNIT": "El Salvador", "GU_A3": "SLV", "SU_DIF": 0.000000, "SUBUNIT": "El Salvador", "SU_A3": "SLV", "NAME": "El Salvador", "ABBREV": "El. S.", "POSTAL": "SV", "NAME_FORMA": "Republic of El Salvador", "TERR_": "", "NAME_SORT": "El Salvador", "MAP_COLOR": 8.000000, "POP_EST": 7185218.000000, "GDP_MD_EST": 43630.000000, "FIPS_10_": 0.000000, "ISO_A2": "SV", "ISO_A3": "SLV", "ISO_N3": 222.000000 }, "geometry": { "type": "Point", "coordinates": [ -88.869607, 13.826240 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "HKG", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 12, "SOVEREIGNT": "China", "SOV_A3": "CH1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Hong Kong S.A.R.", "ADM0_A3": "HKG", "GEOU_DIF": 0.000000, "GEOUNIT": "Hong Kong S.A.R.", "GU_A3": "HKG", "SU_DIF": 0.000000, "SUBUNIT": "Hong Kong S.A.R.", "SU_A3": "HKG", "NAME": "Hong Kong", "ABBREV": "H.K.", "POSTAL": "HK", "NAME_FORMA": "Hong Kong Special Administrative Region", "TERR_": "China", "NAME_SORT": "Hong Kong S.A.R.", "MAP_COLOR": 3.000000, "POP_EST": 7055071.000000, "GDP_MD_EST": 306600.000000, "FIPS_10_": 0.000000, "ISO_A2": "HK", "ISO_A3": "HKG", "ISO_N3": 344.000000 }, "geometry": { "type": "Point", "coordinates": [ 114.132012, 22.520442 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PRY", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 205, "SOVEREIGNT": "Paraguay", "SOV_A3": "PRY", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Paraguay", "ADM0_A3": "PRY", "GEOU_DIF": 0.000000, "GEOUNIT": "Paraguay", "GU_A3": "PRY", "SU_DIF": 0.000000, "SUBUNIT": "Paraguay", "SU_A3": "PRY", "NAME": "Paraguay", "ABBREV": "Para.", "POSTAL": "PY", "NAME_FORMA": "Republic of Paraguay", "TERR_": "", "NAME_SORT": "Paraguay", "MAP_COLOR": 2.000000, "POP_EST": 6995655.000000, "GDP_MD_EST": 28890.000000, "FIPS_10_": 0.000000, "ISO_A2": "PY", "ISO_A3": "PRY", "ISO_N3": 600.000000 }, "geometry": { "type": "Point", "coordinates": [ -58.376653, -23.416720 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LAO", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 164, "SOVEREIGNT": "Laos", "SOV_A3": "LAO", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Laos", "ADM0_A3": "LAO", "GEOU_DIF": 0.000000, "GEOUNIT": "Laos", "GU_A3": "LAO", "SU_DIF": 0.000000, "SUBUNIT": "Laos", "SU_A3": "LAO", "NAME": "Laos", "ABBREV": "Laos", "POSTAL": "LA", "NAME_FORMA": "Lao People's Democratic Republic", "TERR_": "", "NAME_SORT": "Laos", "MAP_COLOR": 9.000000, "POP_EST": 6834942.000000, "GDP_MD_EST": 13980.000000, "FIPS_10_": 0.000000, "ISO_A2": "LA", "ISO_A3": "LAO", "ISO_N3": 418.000000 }, "geometry": { "type": "Point", "coordinates": [ 102.592173, 19.538296 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SLE", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 225, "SOVEREIGNT": "Sierra Leone", "SOV_A3": "SLE", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Sierra Leone", "ADM0_A3": "SLE", "GEOU_DIF": 0.000000, "GEOUNIT": "Sierra Leone", "GU_A3": "SLE", "SU_DIF": 0.000000, "SUBUNIT": "Sierra Leone", "SU_A3": "SLE", "NAME": "Sierra Leone", "ABBREV": "S.L.", "POSTAL": "SL", "NAME_FORMA": "Republic of Sierra Leone", "TERR_": "", "NAME_SORT": "Sierra Leone", "MAP_COLOR": 7.000000, "POP_EST": 6440053.000000, "GDP_MD_EST": 4285.000000, "FIPS_10_": 0.000000, "ISO_A2": "SL", "ISO_A3": "SLE", "ISO_N3": 694.000000 }, "geometry": { "type": "Point", "coordinates": [ -11.794880, 8.622077 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "JOR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 157, "SOVEREIGNT": "Jordan", "SOV_A3": "JOR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Jordan", "ADM0_A3": "JOR", "GEOU_DIF": 0.000000, "GEOUNIT": "Jordan", "GU_A3": "JOR", "SU_DIF": 0.000000, "SUBUNIT": "Jordan", "SU_A3": "JOR", "NAME": "Jordan", "ABBREV": "Jord.", "POSTAL": "J", "NAME_FORMA": "Hashemite Kingdom of Jordan", "TERR_": "", "NAME_SORT": "Jordan", "MAP_COLOR": 4.000000, "POP_EST": 6342948.000000, "GDP_MD_EST": 31610.000000, "FIPS_10_": 0.000000, "ISO_A2": "JO", "ISO_A3": "JOR", "ISO_N3": 400.000000 }, "geometry": { "type": "Point", "coordinates": [ 36.612037, 31.376465 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LBY", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 169, "SOVEREIGNT": "Libya", "SOV_A3": "LBY", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Libya", "ADM0_A3": "LBY", "GEOU_DIF": 0.000000, "GEOUNIT": "Libya", "GU_A3": "LBY", "SU_DIF": 0.000000, "SUBUNIT": "Libya", "SU_A3": "LBY", "NAME": "Libya", "ABBREV": "Libya", "POSTAL": "LY", "NAME_FORMA": "Great Socialist People's Libyan Arab Jamahiriya", "TERR_": "", "NAME_SORT": "Libya", "MAP_COLOR": 11.000000, "POP_EST": 6310434.000000, "GDP_MD_EST": 88830.000000, "FIPS_10_": 0.000000, "ISO_A2": "LY", "ISO_A3": "LBY", "ISO_N3": 434.000000 }, "geometry": { "type": "Point", "coordinates": [ 17.981875, 27.311853 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PNG", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 204, "SOVEREIGNT": "Papua New Guinea", "SOV_A3": "PNG", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Papua New Guinea", "ADM0_A3": "PNG", "GEOU_DIF": 0.000000, "GEOUNIT": "Papua New Guinea", "GU_A3": "PNG", "SU_DIF": 0.000000, "SUBUNIT": "Papua New Guinea", "SU_A3": "PN1", "NAME": "Papua New Guinea", "ABBREV": "P.N.G.", "POSTAL": "PG", "NAME_FORMA": "Independent State of Papua New Guinea", "TERR_": "", "NAME_SORT": "Papua New Guinea", "MAP_COLOR": 1.000000, "POP_EST": 6057263.000000, "GDP_MD_EST": 13210.000000, "FIPS_10_": 0.000000, "ISO_A2": "PG", "ISO_A3": "PNG", "ISO_N3": 598.000000 }, "geometry": { "type": "Point", "coordinates": [ 145.230557, -6.523787 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TGO", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 246, "SOVEREIGNT": "Togo", "SOV_A3": "TGO", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Togo", "ADM0_A3": "TGO", "GEOU_DIF": 0.000000, "GEOUNIT": "Togo", "GU_A3": "TGO", "SU_DIF": 0.000000, "SUBUNIT": "Togo", "SU_A3": "TGO", "NAME": "Togo", "ABBREV": "Togo", "POSTAL": "TG", "NAME_FORMA": "Togolese Republic", "TERR_": "", "NAME_SORT": "Togo", "MAP_COLOR": 5.000000, "POP_EST": 6019877.000000, "GDP_MD_EST": 5118.000000, "FIPS_10_": 0.000000, "ISO_A2": "TG", "ISO_A3": "TGO", "ISO_N3": 768.000000 }, "geometry": { "type": "Point", "coordinates": [ 0.961512, 8.755432 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NIC", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 194, "SOVEREIGNT": "Nicaragua", "SOV_A3": "NIC", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Nicaragua", "ADM0_A3": "NIC", "GEOU_DIF": 0.000000, "GEOUNIT": "Nicaragua", "GU_A3": "NIC", "SU_DIF": 0.000000, "SUBUNIT": "Nicaragua", "SU_A3": "NIC", "NAME": "Nicaragua", "ABBREV": "Nic.", "POSTAL": "NI", "NAME_FORMA": "Republic of Nicaragua", "TERR_": "", "NAME_SORT": "Nicaragua", "MAP_COLOR": 9.000000, "POP_EST": 5891199.000000, "GDP_MD_EST": 16790.000000, "FIPS_10_": 0.000000, "ISO_A2": "NI", "ISO_A3": "NIC", "ISO_N3": 558.000000 }, "geometry": { "type": "Point", "coordinates": [ -85.297327, 12.902695 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ERI", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 127, "SOVEREIGNT": "Eritrea", "SOV_A3": "ERI", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Eritrea", "ADM0_A3": "ERI", "GEOU_DIF": 0.000000, "GEOUNIT": "Eritrea", "GU_A3": "ERI", "SU_DIF": 0.000000, "SUBUNIT": "Eritrea", "SU_A3": "ERI", "NAME": "Eritrea", "ABBREV": "Erit.", "POSTAL": "ER", "NAME_FORMA": "State of Eritrea", "TERR_": "", "NAME_SORT": "Eritrea", "MAP_COLOR": 12.000000, "POP_EST": 5647168.000000, "GDP_MD_EST": 3945.000000, "FIPS_10_": 0.000000, "ISO_A2": "ER", "ISO_A3": "ERI", "ISO_N3": 232.000000 }, "geometry": { "type": "Point", "coordinates": [ 38.085079, 15.915658 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "DNK", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 14, "SOVEREIGNT": "Denmark", "SOV_A3": "DN1", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Denmark", "ADM0_A3": "DNK", "GEOU_DIF": 0.000000, "GEOUNIT": "Denmark", "GU_A3": "DNK", "SU_DIF": 0.000000, "SUBUNIT": "Denmark", "SU_A3": "DNK", "NAME": "Denmark", "ABBREV": "Den.", "POSTAL": "DK", "NAME_FORMA": "Kingdom of Denmark", "TERR_": "", "NAME_SORT": "Denmark", "MAP_COLOR": 12.000000, "POP_EST": 5500510.000000, "GDP_MD_EST": 203600.000000, "FIPS_10_": 0.000000, "ISO_A2": "DK", "ISO_A3": "DNK", "ISO_N3": 208.000000 }, "geometry": { "type": "Point", "coordinates": [ 10.043369, 56.162755 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SVK", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 227, "SOVEREIGNT": "Slovakia", "SOV_A3": "SVK", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Slovakia", "ADM0_A3": "SVK", "GEOU_DIF": 0.000000, "GEOUNIT": "Slovakia", "GU_A3": "SVK", "SU_DIF": 0.000000, "SUBUNIT": "Slovakia", "SU_A3": "SVK", "NAME": "Slovakia", "ABBREV": "Svk.", "POSTAL": "SK", "NAME_FORMA": "Slovak Republic", "TERR_": "", "NAME_SORT": "Slovakia", "MAP_COLOR": 9.000000, "POP_EST": 5463046.000000, "GDP_MD_EST": 119500.000000, "FIPS_10_": 0.000000, "ISO_A2": "SK", "ISO_A3": "SVK", "ISO_N3": 703.000000 }, "geometry": { "type": "Point", "coordinates": [ 19.584844, 49.031335 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KGZ", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 163, "SOVEREIGNT": "Kyrgyzstan", "SOV_A3": "KGZ", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Kyrgyzstan", "ADM0_A3": "KGZ", "GEOU_DIF": 0.000000, "GEOUNIT": "Kyrgyzstan", "GU_A3": "KGZ", "SU_DIF": 0.000000, "SUBUNIT": "Kyrgyzstan", "SU_A3": "KGZ", "NAME": "Kyrgyzstan", "ABBREV": "Kgz.", "POSTAL": "KG", "NAME_FORMA": "Kyrgyz Republic", "TERR_": "", "NAME_SORT": "Kyrgyzstan", "MAP_COLOR": 6.000000, "POP_EST": 5431747.000000, "GDP_MD_EST": 11610.000000, "FIPS_10_": 0.000000, "ISO_A2": "KG", "ISO_A3": "KGZ", "ISO_N3": 417.000000 }, "geometry": { "type": "Point", "coordinates": [ 74.822786, 42.070229 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "FIN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 30, "SOVEREIGNT": "Finland", "SOV_A3": "FI1", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "County", "ADMIN": "Finland", "ADM0_A3": "FIN", "GEOU_DIF": 0.000000, "GEOUNIT": "Finland", "GU_A3": "FIN", "SU_DIF": 0.000000, "SUBUNIT": "Finland", "SU_A3": "FIN", "NAME": "Finland", "ABBREV": "Fin.", "POSTAL": "FIN", "NAME_FORMA": "Republic of Finland", "TERR_": "", "NAME_SORT": "Finland", "MAP_COLOR": 6.000000, "POP_EST": 5250275.000000, "GDP_MD_EST": 193500.000000, "FIPS_10_": 0.000000, "ISO_A2": "FI", "ISO_A3": "FIN", "ISO_N3": 246.000000 }, "geometry": { "type": "Point", "coordinates": [ 26.505399, 63.497640 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TKM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 251, "SOVEREIGNT": "Turkmenistan", "SOV_A3": "TKM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Turkmenistan", "ADM0_A3": "TKM", "GEOU_DIF": 0.000000, "GEOUNIT": "Turkmenistan", "GU_A3": "TKM", "SU_DIF": 0.000000, "SUBUNIT": "Turkmenistan", "SU_A3": "TKM", "NAME": "Turkmenistan", "ABBREV": "Turkm.", "POSTAL": "TM", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Turkmenistan", "MAP_COLOR": 9.000000, "POP_EST": 4884887.000000, "GDP_MD_EST": 29780.000000, "FIPS_10_": 0.000000, "ISO_A2": "TM", "ISO_A3": "TKM", "ISO_N3": 795.000000 }, "geometry": { "type": "Point", "coordinates": [ 59.338735, 39.358733 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ARE", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 255, "SOVEREIGNT": "United Arab Emirates", "SOV_A3": "ARE", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "United Arab Emirates", "ADM0_A3": "ARE", "GEOU_DIF": 0.000000, "GEOUNIT": "United Arab Emirates", "GU_A3": "ARE", "SU_DIF": 0.000000, "SUBUNIT": "United Arab Emirates", "SU_A3": "ARE", "NAME": "United Arab Emirates", "ABBREV": "U.A.E.", "POSTAL": "AE", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "United Arab Emirates", "MAP_COLOR": 3.000000, "POP_EST": 4798491.000000, "GDP_MD_EST": 184300.000000, "FIPS_10_": 0.000000, "ISO_A2": "AE", "ISO_A3": "ARE", "ISO_N3": 784.000000 }, "geometry": { "type": "Point", "coordinates": [ 53.957513, 23.966281 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NOR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 199, "SOVEREIGNT": "Norway", "SOV_A3": "NOR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Norway", "ADM0_A3": "NOR", "GEOU_DIF": 0.000000, "GEOUNIT": "Norway", "GU_A3": "NOR", "SU_DIF": 0.000000, "SUBUNIT": "Norway", "SU_A3": "NOR", "NAME": "Norway", "ABBREV": "Nor.", "POSTAL": "N", "NAME_FORMA": "Kingdom of Norway", "TERR_": "", "NAME_SORT": "Norway", "MAP_COLOR": 12.000000, "POP_EST": 4676305.000000, "GDP_MD_EST": 276400.000000, "FIPS_10_": 0.000000, "ISO_A2": "NO", "ISO_A3": "NOR", "ISO_N3": 578.000000 }, "geometry": { "type": "Point", "coordinates": [ 9.152843, 61.575418 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SGP", "ScaleRank": 3, "LabelRank": 3, "FeatureCla": "Adm-0 country", "OID_": 226, "SOVEREIGNT": "Singapore", "SOV_A3": "SGP", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Singapore", "ADM0_A3": "SGP", "GEOU_DIF": 0.000000, "GEOUNIT": "Singapore", "GU_A3": "SGP", "SU_DIF": 0.000000, "SUBUNIT": "Singapore", "SU_A3": "SGP", "NAME": "Singapore", "ABBREV": "Sing.", "POSTAL": "SG", "NAME_FORMA": "Republic of Singapore", "TERR_": "", "NAME_SORT": "Singapore", "MAP_COLOR": 3.000000, "POP_EST": 4657542.000000, "GDP_MD_EST": 237300.000000, "FIPS_10_": 0.000000, "ISO_A2": "SG", "ISO_A3": "SGP", "ISO_N3": 702.000000 }, "geometry": { "type": "Point", "coordinates": [ 103.813797, 1.367946 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GEO", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 134, "SOVEREIGNT": "Georgia", "SOV_A3": "GEO", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Georgia", "ADM0_A3": "GEO", "GEOU_DIF": 0.000000, "GEOUNIT": "Georgia", "GU_A3": "GEO", "SU_DIF": 0.000000, "SUBUNIT": "Georgia", "SU_A3": "GEO", "NAME": "Georgia", "ABBREV": "Geo.", "POSTAL": "GE", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Georgia", "MAP_COLOR": 2.000000, "POP_EST": 4615807.000000, "GDP_MD_EST": 21510.000000, "FIPS_10_": 0.000000, "ISO_A2": "GE", "ISO_A3": "GEO", "ISO_N3": 268.000000 }, "geometry": { "type": "Point", "coordinates": [ 43.499259, 42.368323 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BIH", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 97, "SOVEREIGNT": "Bosnia and Herzegovina", "SOV_A3": "BIH", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Bosnia and Herzegovina", "ADM0_A3": "BIH", "GEOU_DIF": 0.000000, "GEOUNIT": "Bosnia and Herzegovina", "GU_A3": "BIH", "SU_DIF": 0.000000, "SUBUNIT": "Bosnia and Herzegovina", "SU_A3": "BIH", "NAME": "Bosnia and Herz.", "ABBREV": "B.H.", "POSTAL": "BiH", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Bosnia and Herzegovina", "MAP_COLOR": 2.000000, "POP_EST": 4613414.000000, "GDP_MD_EST": 29700.000000, "FIPS_10_": 0.000000, "ISO_A2": "BA", "ISO_A3": "BIH", "ISO_N3": 70.000000 }, "geometry": { "type": "Point", "coordinates": [ 17.770360, 44.373581 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CAF", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 108, "SOVEREIGNT": "Central African Republic", "SOV_A3": "CAF", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Central African Republic", "ADM0_A3": "CAF", "GEOU_DIF": 0.000000, "GEOUNIT": "Central African Republic", "GU_A3": "CAF", "SU_DIF": 0.000000, "SUBUNIT": "Central African Republic", "SU_A3": "CAF", "NAME": "Central African Rep.", "ABBREV": "C.A.R.", "POSTAL": "CF", "NAME_FORMA": "Central African Republic", "TERR_": "", "NAME_SORT": "Central African Republic", "MAP_COLOR": 9.000000, "POP_EST": 4511488.000000, "GDP_MD_EST": 3198.000000, "FIPS_10_": 0.000000, "ISO_A2": "CF", "ISO_A3": "CAF", "ISO_N3": 140.000000 }, "geometry": { "type": "Point", "coordinates": [ 20.468081, 6.618378 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "HRV", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 114, "SOVEREIGNT": "Croatia", "SOV_A3": "HRV", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Croatia", "ADM0_A3": "HRV", "GEOU_DIF": 0.000000, "GEOUNIT": "Croatia", "GU_A3": "HRV", "SU_DIF": 0.000000, "SUBUNIT": "Croatia", "SU_A3": "HRV", "NAME": "Croatia", "ABBREV": "Cro.", "POSTAL": "HR", "NAME_FORMA": "Republic of Croatia", "TERR_": "", "NAME_SORT": "Croatia", "MAP_COLOR": 1.000000, "POP_EST": 4489409.000000, "GDP_MD_EST": 82390.000000, "FIPS_10_": 0.000000, "ISO_A2": "HR", "ISO_A3": "HRV", "ISO_N3": 191.000000 }, "geometry": { "type": "Point", "coordinates": [ 16.930788, 45.882971 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MDA", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 184, "SOVEREIGNT": "Moldova", "SOV_A3": "MDA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Moldova", "ADM0_A3": "MDA", "GEOU_DIF": 0.000000, "GEOUNIT": "Moldova", "GU_A3": "MDA", "SU_DIF": 0.000000, "SUBUNIT": "Moldova", "SU_A3": "MDA", "NAME": "Moldova", "ABBREV": "Mda.", "POSTAL": "MD", "NAME_FORMA": "Republic of Moldova", "TERR_": "", "NAME_SORT": "Moldova", "MAP_COLOR": 12.000000, "POP_EST": 4320748.000000, "GDP_MD_EST": 10670.000000, "FIPS_10_": 0.000000, "ISO_A2": "MD", "ISO_A3": "MDA", "ISO_N3": 498.000000 }, "geometry": { "type": "Point", "coordinates": [ 28.456928, 47.401196 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CRI", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 113, "SOVEREIGNT": "Costa Rica", "SOV_A3": "CRI", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Costa Rica", "ADM0_A3": "CRI", "GEOU_DIF": 0.000000, "GEOUNIT": "Costa Rica", "GU_A3": "CRI", "SU_DIF": 0.000000, "SUBUNIT": "Costa Rica", "SU_A3": "CRI", "NAME": "Costa Rica", "ABBREV": "C.R.", "POSTAL": "CR", "NAME_FORMA": "Republic of Costa Rica", "TERR_": "", "NAME_SORT": "Costa Rica", "MAP_COLOR": 2.000000, "POP_EST": 4253877.000000, "GDP_MD_EST": 48320.000000, "FIPS_10_": 0.000000, "ISO_A2": "CR", "ISO_A3": "CRI", "ISO_N3": 188.000000 }, "geometry": { "type": "Point", "coordinates": [ -84.194317, 10.041387 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NZL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 22, "SOVEREIGNT": "New Zealand", "SOV_A3": "NZ1", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "New Zealand", "ADM0_A3": "NZL", "GEOU_DIF": 0.000000, "GEOUNIT": "New Zealand", "GU_A3": "NZL", "SU_DIF": 0.000000, "SUBUNIT": "New Zealand", "SU_A3": "NZL", "NAME": "New Zealand", "ABBREV": "N.Z.", "POSTAL": "NZ", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "New Zealand", "MAP_COLOR": 4.000000, "POP_EST": 4213418.000000, "GDP_MD_EST": 116700.000000, "FIPS_10_": 0.000000, "ISO_A2": "NZ", "ISO_A3": "NZL", "ISO_N3": 554.000000 }, "geometry": { "type": "Point", "coordinates": [ 172.904933, -42.046986 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "IRL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 151, "SOVEREIGNT": "Ireland", "SOV_A3": "IRL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Ireland", "ADM0_A3": "IRL", "GEOU_DIF": 0.000000, "GEOUNIT": "Ireland", "GU_A3": "IRL", "SU_DIF": 0.000000, "SUBUNIT": "Ireland", "SU_A3": "IRL", "NAME": "Ireland", "ABBREV": "Ire.", "POSTAL": "IRL", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Ireland", "MAP_COLOR": 2.000000, "POP_EST": 4203200.000000, "GDP_MD_EST": 188400.000000, "FIPS_10_": 0.000000, "ISO_A2": "IE", "ISO_A3": "IRL", "ISO_N3": 372.000000 }, "geometry": { "type": "Point", "coordinates": [ -7.875493, 53.734002 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LBN", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 166, "SOVEREIGNT": "Lebanon", "SOV_A3": "LBN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Lebanon", "ADM0_A3": "LBN", "GEOU_DIF": 0.000000, "GEOUNIT": "Lebanon", "GU_A3": "LBN", "SU_DIF": 0.000000, "SUBUNIT": "Lebanon", "SU_A3": "LBN", "NAME": "Lebanon", "ABBREV": "Leb.", "POSTAL": "LB", "NAME_FORMA": "Lebanese Republic", "TERR_": "", "NAME_SORT": "Lebanon", "MAP_COLOR": 12.000000, "POP_EST": 4017095.000000, "GDP_MD_EST": 44060.000000, "FIPS_10_": 0.000000, "ISO_A2": "LB", "ISO_A3": "LBN", "ISO_N3": 422.000000 }, "geometry": { "type": "Point", "coordinates": [ 35.939514, 34.191251 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "COG", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 212, "SOVEREIGNT": "Republic of the Congo", "SOV_A3": "COG", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Republic of the Congo", "ADM0_A3": "COG", "GEOU_DIF": 0.000000, "GEOUNIT": "Republic of the Congo", "GU_A3": "COG", "SU_DIF": 0.000000, "SUBUNIT": "Republic of the Congo", "SU_A3": "COG", "NAME": "Congo (Brazzaville)", "ABBREV": "Rep. Congo", "POSTAL": "CG", "NAME_FORMA": "Republic of the Congo", "TERR_": "", "NAME_SORT": "Congo (Brazzaville)", "MAP_COLOR": 10.000000, "POP_EST": 4012809.000000, "GDP_MD_EST": 15350.000000, "FIPS_10_": 0.000000, "ISO_A2": "CG", "ISO_A3": "COG", "ISO_N3": 178.000000 }, "geometry": { "type": "Point", "coordinates": [ 15.881031, 0.388556 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PRI", "ScaleRank": 1, "LabelRank": 7, "FeatureCla": "Adm-0 country", "OID_": 64, "SOVEREIGNT": "United States of America", "SOV_A3": "US1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Puerto Rico", "ADM0_A3": "PRI", "GEOU_DIF": 0.000000, "GEOUNIT": "Puerto Rico", "GU_A3": "PRI", "SU_DIF": 0.000000, "SUBUNIT": "Puerto Rico", "SU_A3": "PRI", "NAME": "Puerto Rico", "ABBREV": "P.R.", "POSTAL": "PR", "NAME_FORMA": "Commonwealth of Puerto Rico", "TERR_": "Commonwealth of U.S.A.", "NAME_SORT": "Puerto Rico", "MAP_COLOR": 1.000000, "POP_EST": 3971020.000000, "GDP_MD_EST": 70230.000000, "FIPS_10_": 0.000000, "ISO_A2": "PR", "ISO_A3": "PRI", "ISO_N3": 630.000000 }, "geometry": { "type": "Point", "coordinates": [ -66.466402, 18.340478 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ALB", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 79, "SOVEREIGNT": "Albania", "SOV_A3": "ALB", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Albania", "ADM0_A3": "ALB", "GEOU_DIF": 0.000000, "GEOUNIT": "Albania", "GU_A3": "ALB", "SU_DIF": 0.000000, "SUBUNIT": "Albania", "SU_A3": "ALB", "NAME": "Albania", "ABBREV": "Alb.", "POSTAL": "AL", "NAME_FORMA": "Republic of Albania", "TERR_": "", "NAME_SORT": "Albania", "MAP_COLOR": 6.000000, "POP_EST": 3639453.000000, "GDP_MD_EST": 21810.000000, "FIPS_10_": 0.000000, "ISO_A2": "AL", "ISO_A3": "ALB", "ISO_N3": 8.000000 }, "geometry": { "type": "Point", "coordinates": [ 20.119283, 40.919498 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LTU", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 171, "SOVEREIGNT": "Lithuania", "SOV_A3": "LTU", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Lithuania", "ADM0_A3": "LTU", "GEOU_DIF": 0.000000, "GEOUNIT": "Lithuania", "GU_A3": "LTU", "SU_DIF": 0.000000, "SUBUNIT": "Lithuania", "SU_A3": "LTU", "NAME": "Lithuania", "ABBREV": "Lith.", "POSTAL": "LT", "NAME_FORMA": "Republic of Lithuania", "TERR_": "", "NAME_SORT": "Lithuania", "MAP_COLOR": 9.000000, "POP_EST": 3555179.000000, "GDP_MD_EST": 63330.000000, "FIPS_10_": 0.000000, "ISO_A2": "LT", "ISO_A3": "LTU", "ISO_N3": 440.000000 }, "geometry": { "type": "Point", "coordinates": [ 23.883398, 55.652297 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SOL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 67, "SOVEREIGNT": "Somaliland", "SOV_A3": "SOL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Disputed", "ADMIN": "Somaliland", "ADM0_A3": "SOL", "GEOU_DIF": 0.000000, "GEOUNIT": "Somaliland", "GU_A3": "SOL", "SU_DIF": 0.000000, "SUBUNIT": "Somaliland", "SU_A3": "SOL", "NAME": "Somaliland", "ABBREV": "Solnd.", "POSTAL": "SL", "NAME_FORMA": "Republic of Somaliland", "TERR_": "", "NAME_SORT": "Somaliland", "MAP_COLOR": 2.000000, "POP_EST": 3500000.000000, "GDP_MD_EST": -99.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 46.252274, 9.798857 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "URY", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 257, "SOVEREIGNT": "Uruguay", "SOV_A3": "URY", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Uruguay", "ADM0_A3": "URY", "GEOU_DIF": 0.000000, "GEOUNIT": "Uruguay", "GU_A3": "URY", "SU_DIF": 0.000000, "SUBUNIT": "Uruguay", "SU_A3": "URY", "NAME": "Uruguay", "ABBREV": "Ury.", "POSTAL": "UY", "NAME_FORMA": "Oriental Republic of Uruguay", "TERR_": "", "NAME_SORT": "Uruguay", "MAP_COLOR": 10.000000, "POP_EST": 3494382.000000, "GDP_MD_EST": 43160.000000, "FIPS_10_": 0.000000, "ISO_A2": "UY", "ISO_A3": "URY", "ISO_N3": 858.000000 }, "geometry": { "type": "Point", "coordinates": [ -56.014039, -32.997671 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LBR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 168, "SOVEREIGNT": "Liberia", "SOV_A3": "LBR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Liberia", "ADM0_A3": "LBR", "GEOU_DIF": 0.000000, "GEOUNIT": "Liberia", "GU_A3": "LBR", "SU_DIF": 0.000000, "SUBUNIT": "Liberia", "SU_A3": "LBR", "NAME": "Liberia", "ABBREV": "Liberia", "POSTAL": "LR", "NAME_FORMA": "Republic of Liberia", "TERR_": "", "NAME_SORT": "Liberia", "MAP_COLOR": 9.000000, "POP_EST": 3441790.000000, "GDP_MD_EST": 1526.000000, "FIPS_10_": 0.000000, "ISO_A2": "LR", "ISO_A3": "LBR", "ISO_N3": 430.000000 }, "geometry": { "type": "Point", "coordinates": [ -9.486666, 6.464935 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "OMN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 200, "SOVEREIGNT": "Oman", "SOV_A3": "OMN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Oman", "ADM0_A3": "OMN", "GEOU_DIF": 0.000000, "GEOUNIT": "Oman", "GU_A3": "OMN", "SU_DIF": 0.000000, "SUBUNIT": "Oman", "SU_A3": "OMN", "NAME": "Oman", "ABBREV": "Oman", "POSTAL": "OM", "NAME_FORMA": "Sultanate of Oman", "TERR_": "", "NAME_SORT": "Oman", "MAP_COLOR": 6.000000, "POP_EST": 3418085.000000, "GDP_MD_EST": 66980.000000, "FIPS_10_": 0.000000, "ISO_A2": "OM", "ISO_A3": "OMN", "ISO_N3": 512.000000 }, "geometry": { "type": "Point", "coordinates": [ 56.969442, 21.330395 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PAN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 203, "SOVEREIGNT": "Panama", "SOV_A3": "PAN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Panama", "ADM0_A3": "PAN", "GEOU_DIF": 0.000000, "GEOUNIT": "Panama", "GU_A3": "PAN", "SU_DIF": 0.000000, "SUBUNIT": "Panama", "SU_A3": "PAN", "NAME": "Panama", "ABBREV": "Pan.", "POSTAL": "PA", "NAME_FORMA": "Republic of Panama", "TERR_": "", "NAME_SORT": "Panama", "MAP_COLOR": 3.000000, "POP_EST": 3360474.000000, "GDP_MD_EST": 38830.000000, "FIPS_10_": 0.000000, "ISO_A2": "PA", "ISO_A3": "PAN", "ISO_N3": 591.000000 }, "geometry": { "type": "Point", "coordinates": [ -80.157261, 8.963921 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MRT", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 181, "SOVEREIGNT": "Mauritania", "SOV_A3": "MRT", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Mauritania", "ADM0_A3": "MRT", "GEOU_DIF": 0.000000, "GEOUNIT": "Mauritania", "GU_A3": "MRT", "SU_DIF": 0.000000, "SUBUNIT": "Mauritania", "SU_A3": "MRT", "NAME": "Mauritania", "ABBREV": "Mrt.", "POSTAL": "MR", "NAME_FORMA": "Islamic Republic of Mauritania", "TERR_": "", "NAME_SORT": "Mauritania", "MAP_COLOR": 1.000000, "POP_EST": 3129486.000000, "GDP_MD_EST": 6308.000000, "FIPS_10_": 0.000000, "ISO_A2": "MR", "ISO_A3": "MRT", "ISO_N3": 478.000000 }, "geometry": { "type": "Point", "coordinates": [ -10.928007, 20.375799 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MNG", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 186, "SOVEREIGNT": "Mongolia", "SOV_A3": "MNG", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Mongolia", "ADM0_A3": "MNG", "GEOU_DIF": 0.000000, "GEOUNIT": "Mongolia", "GU_A3": "MNG", "SU_DIF": 0.000000, "SUBUNIT": "Mongolia", "SU_A3": "MNG", "NAME": "Mongolia", "ABBREV": "Mong.", "POSTAL": "MN", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Mongolia", "MAP_COLOR": 6.000000, "POP_EST": 3041142.000000, "GDP_MD_EST": 9476.000000, "FIPS_10_": 0.000000, "ISO_A2": "MN", "ISO_A3": "MNG", "ISO_N3": 496.000000 }, "geometry": { "type": "Point", "coordinates": [ 103.018094, 47.154370 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ARM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 85, "SOVEREIGNT": "Armenia", "SOV_A3": "ARM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Armenia", "ADM0_A3": "ARM", "GEOU_DIF": 0.000000, "GEOUNIT": "Armenia", "GU_A3": "ARM", "SU_DIF": 0.000000, "SUBUNIT": "Armenia", "SU_A3": "ARM", "NAME": "Armenia", "ABBREV": "Arm.", "POSTAL": "ARM", "NAME_FORMA": "Republic of Armenia", "TERR_": "", "NAME_SORT": "Armenia", "MAP_COLOR": 10.000000, "POP_EST": 2967004.000000, "GDP_MD_EST": 18770.000000, "FIPS_10_": 0.000000, "ISO_A2": "AM", "ISO_A3": "ARM", "ISO_N3": 51.000000 }, "geometry": { "type": "Point", "coordinates": [ 44.563459, 40.787935 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "JAM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 155, "SOVEREIGNT": "Jamaica", "SOV_A3": "JAM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Jamaica", "ADM0_A3": "JAM", "GEOU_DIF": 0.000000, "GEOUNIT": "Jamaica", "GU_A3": "JAM", "SU_DIF": 0.000000, "SUBUNIT": "Jamaica", "SU_A3": "JAM", "NAME": "Jamaica", "ABBREV": "Jam.", "POSTAL": "J", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Jamaica", "MAP_COLOR": 10.000000, "POP_EST": 2825928.000000, "GDP_MD_EST": 20910.000000, "FIPS_10_": 0.000000, "ISO_A2": "JM", "ISO_A3": "JAM", "ISO_N3": 388.000000 }, "geometry": { "type": "Point", "coordinates": [ -77.318747, 18.332429 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KWT", "ScaleRank": 1, "LabelRank": 3, "FeatureCla": "Adm-0 country", "OID_": 162, "SOVEREIGNT": "Kuwait", "SOV_A3": "KWT", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Kuwait", "ADM0_A3": "KWT", "GEOU_DIF": 0.000000, "GEOUNIT": "Kuwait", "GU_A3": "KWT", "SU_DIF": 0.000000, "SUBUNIT": "Kuwait", "SU_A3": "KWT", "NAME": "Kuwait", "ABBREV": "Kwt.", "POSTAL": "KW", "NAME_FORMA": "State of Kuwait", "TERR_": "", "NAME_SORT": "Kuwait", "MAP_COLOR": 2.000000, "POP_EST": 2691158.000000, "GDP_MD_EST": 149100.000000, "FIPS_10_": 0.000000, "ISO_A2": "KW", "ISO_A3": "KWT", "ISO_N3": 414.000000 }, "geometry": { "type": "Point", "coordinates": [ 47.590209, 29.505926 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "WEB", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 24, "SOVEREIGNT": "Palestine", "SOV_A3": "PSE", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "West Bank", "ADM0_A3": "WEB", "GEOU_DIF": 0.000000, "GEOUNIT": "West Bank", "GU_A3": "WEB", "SU_DIF": 0.000000, "SUBUNIT": "West Bank", "SU_A3": "WEB", "NAME": "West Bank", "ABBREV": "W.B.", "POSTAL": "WB", "NAME_FORMA": "West Bank", "TERR_": "", "NAME_SORT": "West Bank", "MAP_COLOR": 8.000000, "POP_EST": 2514845.000000, "GDP_MD_EST": 11950.000000, "FIPS_10_": 0.000000, "ISO_A2": "PS", "ISO_A3": "PSE", "ISO_N3": 275.000000 }, "geometry": { "type": "Point", "coordinates": [ 35.261647, 32.127078 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LVA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 165, "SOVEREIGNT": "Latvia", "SOV_A3": "LVA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Latvia", "ADM0_A3": "LVA", "GEOU_DIF": 0.000000, "GEOUNIT": "Latvia", "GU_A3": "LVA", "SU_DIF": 0.000000, "SUBUNIT": "Latvia", "SU_A3": "LVA", "NAME": "Latvia", "ABBREV": "Lat.", "POSTAL": "LV", "NAME_FORMA": "Republic of Latvia", "TERR_": "", "NAME_SORT": "Latvia", "MAP_COLOR": 13.000000, "POP_EST": 2231503.000000, "GDP_MD_EST": 38860.000000, "FIPS_10_": 0.000000, "ISO_A2": "LV", "ISO_A3": "LVA", "ISO_N3": 428.000000 }, "geometry": { "type": "Point", "coordinates": [ 25.303092, 57.109597 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LSO", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 167, "SOVEREIGNT": "Lesotho", "SOV_A3": "LSO", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Lesotho", "ADM0_A3": "LSO", "GEOU_DIF": 0.000000, "GEOUNIT": "Lesotho", "GU_A3": "LSO", "SU_DIF": 0.000000, "SUBUNIT": "Lesotho", "SU_A3": "LSO", "NAME": "Lesotho", "ABBREV": "Les.", "POSTAL": "LS", "NAME_FORMA": "Republic of Lesotho", "TERR_": "", "NAME_SORT": "Lesotho", "MAP_COLOR": 8.000000, "POP_EST": 2130819.000000, "GDP_MD_EST": 3293.000000, "FIPS_10_": 0.000000, "ISO_A2": "LS", "ISO_A3": "LSO", "ISO_N3": 426.000000 }, "geometry": { "type": "Point", "coordinates": [ 28.227752, -29.748302 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NAM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 191, "SOVEREIGNT": "Namibia", "SOV_A3": "NAM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Namibia", "ADM0_A3": "NAM", "GEOU_DIF": 0.000000, "GEOUNIT": "Namibia", "GU_A3": "NAM", "SU_DIF": 0.000000, "SUBUNIT": "Namibia", "SU_A3": "NAM", "NAME": "Namibia", "ABBREV": "Nam.", "POSTAL": "NA", "NAME_FORMA": "Republic of Namibia", "TERR_": "", "NAME_SORT": "Namibia", "MAP_COLOR": 7.000000, "POP_EST": 2108665.000000, "GDP_MD_EST": 13250.000000, "FIPS_10_": 0.000000, "ISO_A2": "NA", "ISO_A3": "NAM", "ISO_N3": 516.000000 }, "geometry": { "type": "Point", "coordinates": [ 17.218157, -22.378858 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MKD", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 173, "SOVEREIGNT": "Macedonia", "SOV_A3": "MKD", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Macedonia", "ADM0_A3": "MKD", "GEOU_DIF": 0.000000, "GEOUNIT": "Macedonia", "GU_A3": "MKD", "SU_DIF": 0.000000, "SUBUNIT": "Macedonia", "SU_A3": "MKD", "NAME": "Macedonia", "ABBREV": "Mkd.", "POSTAL": "MK", "NAME_FORMA": "Republic of Macedonia", "TERR_": "", "NAME_SORT": "Macedonia, The former Yugoslav Republic of", "MAP_COLOR": 3.000000, "POP_EST": 2066718.000000, "GDP_MD_EST": 18780.000000, "FIPS_10_": 0.000000, "ISO_A2": "MK", "ISO_A3": "MKD", "ISO_N3": 807.000000 }, "geometry": { "type": "Point", "coordinates": [ 21.684570, 41.788970 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SVN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 228, "SOVEREIGNT": "Slovenia", "SOV_A3": "SVN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Slovenia", "ADM0_A3": "SVN", "GEOU_DIF": 0.000000, "GEOUNIT": "Slovenia", "GU_A3": "SVN", "SU_DIF": 0.000000, "SUBUNIT": "Slovenia", "SU_A3": "SVN", "NAME": "Slovenia", "ABBREV": "Slo.", "POSTAL": "SLO", "NAME_FORMA": "Republic of Slovenia", "TERR_": "", "NAME_SORT": "Slovenia", "MAP_COLOR": 12.000000, "POP_EST": 2005692.000000, "GDP_MD_EST": 59340.000000, "FIPS_10_": 0.000000, "ISO_A2": "SI", "ISO_A3": "SVN", "ISO_N3": 705.000000 }, "geometry": { "type": "Point", "coordinates": [ 14.677511, 46.311328 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BWA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 98, "SOVEREIGNT": "Botswana", "SOV_A3": "BWA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Botswana", "ADM0_A3": "BWA", "GEOU_DIF": 0.000000, "GEOUNIT": "Botswana", "GU_A3": "BWA", "SU_DIF": 0.000000, "SUBUNIT": "Botswana", "SU_A3": "BWA", "NAME": "Botswana", "ABBREV": "Bwa.", "POSTAL": "BW", "NAME_FORMA": "Republic of Botswana", "TERR_": "", "NAME_SORT": "Botswana", "MAP_COLOR": 3.000000, "POP_EST": 1990876.000000, "GDP_MD_EST": 27060.000000, "FIPS_10_": 0.000000, "ISO_A2": "BW", "ISO_A3": "BWA", "ISO_N3": 72.000000 }, "geometry": { "type": "Point", "coordinates": [ 24.191489, -21.998311 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KOS", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 161, "SOVEREIGNT": "Kosovo", "SOV_A3": "KOS", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Kosovo", "ADM0_A3": "KOS", "GEOU_DIF": 0.000000, "GEOUNIT": "Kosovo", "GU_A3": "KOS", "SU_DIF": 0.000000, "SUBUNIT": "Kosovo", "SU_A3": "KOS", "NAME": "Kosovo", "ABBREV": "Kos.", "POSTAL": "KO", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Kosovo", "MAP_COLOR": 11.000000, "POP_EST": 1804838.000000, "GDP_MD_EST": 5352.000000, "FIPS_10_": 0.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 20.873692, 42.766419 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GMB", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 133, "SOVEREIGNT": "Gambia", "SOV_A3": "GMB", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Gambia", "ADM0_A3": "GMB", "GEOU_DIF": 0.000000, "GEOUNIT": "Gambia", "GU_A3": "GMB", "SU_DIF": 0.000000, "SUBUNIT": "Gambia", "SU_A3": "GMB", "NAME": "Gambia", "ABBREV": "Gambia", "POSTAL": "GM", "NAME_FORMA": "Republic of the Gambia", "TERR_": "", "NAME_SORT": "Gambia", "MAP_COLOR": 8.000000, "POP_EST": 1782893.000000, "GDP_MD_EST": 2272.000000, "FIPS_10_": 0.000000, "ISO_A2": "GM", "ISO_A3": "GMB", "ISO_N3": 270.000000 }, "geometry": { "type": "Point", "coordinates": [ -16.018569, 13.561559 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GAZ", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 23, "SOVEREIGNT": "Palestine", "SOV_A3": "PSE", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Gaza", "ADM0_A3": "GAZ", "GEOU_DIF": 0.000000, "GEOUNIT": "Gaza", "GU_A3": "GAZ", "SU_DIF": 0.000000, "SUBUNIT": "Gaza", "SU_A3": "GAZ", "NAME": "Gaza", "ABBREV": "Gaza", "POSTAL": "GZ", "NAME_FORMA": "Gaza Strip", "TERR_": "", "NAME_SORT": "Gaza Strip", "MAP_COLOR": 8.000000, "POP_EST": 1604238.000000, "GDP_MD_EST": 0.770000, "FIPS_10_": 0.000000, "ISO_A2": "PS", "ISO_A3": "PSE", "ISO_N3": 275.000000 }, "geometry": { "type": "Point", "coordinates": [ 34.351983, 31.561423 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GNB", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 141, "SOVEREIGNT": "Guinea Bissau", "SOV_A3": "GNB", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Guinea Bissau", "ADM0_A3": "GNB", "GEOU_DIF": 0.000000, "GEOUNIT": "Guinea Bissau", "GU_A3": "GNB", "SU_DIF": 0.000000, "SUBUNIT": "Guinea Bissau", "SU_A3": "GNB", "NAME": "Guinea Bissau", "ABBREV": "GnB.", "POSTAL": "GW", "NAME_FORMA": "Republic of Guinea Bissau", "TERR_": "", "NAME_SORT": "Guinea Bissau (Guinea-Bissau)", "MAP_COLOR": 4.000000, "POP_EST": 1533964.000000, "GDP_MD_EST": 904.200000, "FIPS_10_": 0.000000, "ISO_A2": "GW", "ISO_A3": "GNB", "ISO_N3": 624.000000 }, "geometry": { "type": "Point", "coordinates": [ -14.977199, 12.106546 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GAB", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 132, "SOVEREIGNT": "Gabon", "SOV_A3": "GAB", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Gabon", "ADM0_A3": "GAB", "GEOU_DIF": 0.000000, "GEOUNIT": "Gabon", "GU_A3": "GAB", "SU_DIF": 0.000000, "SUBUNIT": "Gabon", "SU_A3": "GAB", "NAME": "Gabon", "ABBREV": "Gabon", "POSTAL": "GA", "NAME_FORMA": "Gabonese Republic", "TERR_": "", "NAME_SORT": "Gabon", "MAP_COLOR": 5.000000, "POP_EST": 1514993.000000, "GDP_MD_EST": 21110.000000, "FIPS_10_": 0.000000, "ISO_A2": "GA", "ISO_A3": "GAB", "ISO_N3": 266.000000 }, "geometry": { "type": "Point", "coordinates": [ 11.692724, -0.691580 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TTO", "ScaleRank": 1, "LabelRank": 6, "FeatureCla": "Adm-0 country", "OID_": 248, "SOVEREIGNT": "Trinidad and Tobago", "SOV_A3": "TTO", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Trinidad and Tobago", "ADM0_A3": "TTO", "GEOU_DIF": 0.000000, "GEOUNIT": "Trinidad and Tobago", "GU_A3": "TTO", "SU_DIF": 0.000000, "SUBUNIT": "Trinidad and Tobago", "SU_A3": "TTO", "NAME": "Trinidad and Tobago", "ABBREV": "Tr.T.", "POSTAL": "TT", "NAME_FORMA": "Republic of Trinidad and Tobago", "TERR_": "", "NAME_SORT": "Trinidad and Tobago", "MAP_COLOR": 5.000000, "POP_EST": 1310000.000000, "GDP_MD_EST": 29010.000000, "FIPS_10_": 0.000000, "ISO_A2": "TT", "ISO_A3": "TTO", "ISO_N3": 780.000000 }, "geometry": { "type": "Point", "coordinates": [ -61.257584, 10.538057 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "EST", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 128, "SOVEREIGNT": "Estonia", "SOV_A3": "EST", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Estonia", "ADM0_A3": "EST", "GEOU_DIF": 0.000000, "GEOUNIT": "Estonia", "GU_A3": "EST", "SU_DIF": 0.000000, "SUBUNIT": "Estonia", "SU_A3": "EST", "NAME": "Estonia", "ABBREV": "Est.", "POSTAL": "EST", "NAME_FORMA": "Republic of Estonia", "TERR_": "", "NAME_SORT": "Estonia", "MAP_COLOR": 10.000000, "POP_EST": 1299371.000000, "GDP_MD_EST": 27410.000000, "FIPS_10_": 0.000000, "ISO_A2": "EE", "ISO_A3": "EST", "ISO_N3": 233.000000 }, "geometry": { "type": "Point", "coordinates": [ 25.766920, 58.971761 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MUS", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 182, "SOVEREIGNT": "Mauritius", "SOV_A3": "MUS", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Mauritius", "ADM0_A3": "MUS", "GEOU_DIF": 0.000000, "GEOUNIT": "Mauritius", "GU_A3": "MUS", "SU_DIF": 0.000000, "SUBUNIT": "Mauritius", "SU_A3": "MUS", "NAME": "Mauritius", "ABBREV": "Mus.", "POSTAL": "MU", "NAME_FORMA": "Republic of Mauritius", "TERR_": "", "NAME_SORT": "Mauritius", "MAP_COLOR": 7.000000, "POP_EST": 1284264.000000, "GDP_MD_EST": 15270.000000, "FIPS_10_": 0.000000, "ISO_A2": "MU", "ISO_A3": "MUS", "ISO_N3": 480.000000 }, "geometry": { "type": "Point", "coordinates": [ 57.853792, -20.349076 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TLS", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 122, "SOVEREIGNT": "East Timor", "SOV_A3": "TLS", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "East Timor", "ADM0_A3": "TLS", "GEOU_DIF": 0.000000, "GEOUNIT": "East Timor", "GU_A3": "TLS", "SU_DIF": 0.000000, "SUBUNIT": "East Timor", "SU_A3": "TLS", "NAME": "East Timor", "ABBREV": "E.T.", "POSTAL": "TL", "NAME_FORMA": "East Timor (Timor Leste)", "TERR_": "", "NAME_SORT": "East Timor (Timor Leste)", "MAP_COLOR": 3.000000, "POP_EST": 1131612.000000, "GDP_MD_EST": 2520.000000, "FIPS_10_": 0.000000, "ISO_A2": "TL", "ISO_A3": "TLS", "ISO_N3": 626.000000 }, "geometry": { "type": "Point", "coordinates": [ 125.900744, -8.800310 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SWZ", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 238, "SOVEREIGNT": "Swaziland", "SOV_A3": "SWZ", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Swaziland", "ADM0_A3": "SWZ", "GEOU_DIF": 0.000000, "GEOUNIT": "Swaziland", "GU_A3": "SWZ", "SU_DIF": 0.000000, "SUBUNIT": "Swaziland", "SU_A3": "SWZ", "NAME": "Swaziland", "ABBREV": "Swz.", "POSTAL": "SZ", "NAME_FORMA": "Kingdom of Swaziland", "TERR_": "", "NAME_SORT": "Swaziland", "MAP_COLOR": 5.000000, "POP_EST": 1123913.000000, "GDP_MD_EST": 5702.000000, "FIPS_10_": 0.000000, "ISO_A2": "SZ", "ISO_A3": "SWZ", "ISO_N3": 748.000000 }, "geometry": { "type": "Point", "coordinates": [ 31.480055, -26.718089 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "FJI", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 131, "SOVEREIGNT": "Fiji", "SOV_A3": "FJI", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Fiji", "ADM0_A3": "FJI", "GEOU_DIF": 0.000000, "GEOUNIT": "Fiji", "GU_A3": "FJI", "SU_DIF": 0.000000, "SUBUNIT": "Fiji", "SU_A3": "FJI", "NAME": "Fiji", "ABBREV": "Fiji", "POSTAL": "FJ", "NAME_FORMA": "Republic of the Fiji Islands", "TERR_": "", "NAME_SORT": "Fiji", "MAP_COLOR": 2.000000, "POP_EST": 944720.000000, "GDP_MD_EST": 3579.000000, "FIPS_10_": 0.000000, "ISO_A2": "FJ", "ISO_A3": "FJI", "ISO_N3": 242.000000 }, "geometry": { "type": "Point", "coordinates": [ 163.704102, -17.561279 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "QAT", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 210, "SOVEREIGNT": "Qatar", "SOV_A3": "QAT", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Qatar", "ADM0_A3": "QAT", "GEOU_DIF": 0.000000, "GEOUNIT": "Qatar", "GU_A3": "QAT", "SU_DIF": 0.000000, "SUBUNIT": "Qatar", "SU_A3": "QAT", "NAME": "Qatar", "ABBREV": "Qatar", "POSTAL": "QA", "NAME_FORMA": "State of Qatar", "TERR_": "", "NAME_SORT": "Qatar", "MAP_COLOR": 4.000000, "POP_EST": 833285.000000, "GDP_MD_EST": 91330.000000, "FIPS_10_": 0.000000, "ISO_A2": "QA", "ISO_A3": "QAT", "ISO_N3": 634.000000 }, "geometry": { "type": "Point", "coordinates": [ 51.187645, 25.463800 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GUY", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 142, "SOVEREIGNT": "Guyana", "SOV_A3": "GUY", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Guyana", "ADM0_A3": "GUY", "GEOU_DIF": 0.000000, "GEOUNIT": "Guyana", "GU_A3": "GUY", "SU_DIF": 0.000000, "SUBUNIT": "Guyana", "SU_A3": "GUY", "NAME": "Guyana", "ABBREV": "Guy.", "POSTAL": "GY", "NAME_FORMA": "Cooperative Republic of Guyana", "TERR_": "", "NAME_SORT": "Guyana", "MAP_COLOR": 8.000000, "POP_EST": 772298.000000, "GDP_MD_EST": 2966.000000, "FIPS_10_": 0.000000, "ISO_A2": "GY", "ISO_A3": "GUY", "ISO_N3": 328.000000 }, "geometry": { "type": "Point", "coordinates": [ -58.980949, 4.967640 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "COM", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 112, "SOVEREIGNT": "Comoros", "SOV_A3": "COM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Comoros", "ADM0_A3": "COM", "GEOU_DIF": 0.000000, "GEOUNIT": "Comoros", "GU_A3": "COM", "SU_DIF": 0.000000, "SUBUNIT": "Comoros", "SU_A3": "COM", "NAME": "Comoros", "ABBREV": "Com.", "POSTAL": "KM", "NAME_FORMA": "Federal Islamic Republic of the Comoros", "TERR_": "", "NAME_SORT": "Comoros", "MAP_COLOR": 10.000000, "POP_EST": 752438.000000, "GDP_MD_EST": 751.200000, "FIPS_10_": 0.000000, "ISO_A2": "KM", "ISO_A3": "COM", "ISO_N3": 174.000000 }, "geometry": { "type": "Point", "coordinates": [ 43.681229, -11.962738 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BHR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 88, "SOVEREIGNT": "Bahrain", "SOV_A3": "BHR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Bahrain", "ADM0_A3": "BHR", "GEOU_DIF": 0.000000, "GEOUNIT": "Bahrain", "GU_A3": "BHR", "SU_DIF": 0.000000, "SUBUNIT": "Bahrain", "SU_A3": "BHR", "NAME": "Bahrain", "ABBREV": "Bahr.", "POSTAL": "BH", "NAME_FORMA": "State of Bahrain", "TERR_": "", "NAME_SORT": "Bahrain", "MAP_COLOR": 9.000000, "POP_EST": 727785.000000, "GDP_MD_EST": 26820.000000, "FIPS_10_": 0.000000, "ISO_A2": "BH", "ISO_A3": "BHR", "ISO_N3": 48.000000 }, "geometry": { "type": "Point", "coordinates": [ 50.544344, 26.201218 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BTN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 95, "SOVEREIGNT": "Bhutan", "SOV_A3": "BTN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Bhutan", "ADM0_A3": "BTN", "GEOU_DIF": 0.000000, "GEOUNIT": "Bhutan", "GU_A3": "BTN", "SU_DIF": 0.000000, "SUBUNIT": "Bhutan", "SU_A3": "BTN", "NAME": "Bhutan", "ABBREV": "Bhutan", "POSTAL": "BT", "NAME_FORMA": "Kingdom of Bhutan", "TERR_": "", "NAME_SORT": "Bhutan", "MAP_COLOR": 8.000000, "POP_EST": 691141.000000, "GDP_MD_EST": 3524.000000, "FIPS_10_": 0.000000, "ISO_A2": "BT", "ISO_A3": "BTN", "ISO_N3": 64.000000 }, "geometry": { "type": "Point", "coordinates": [ 90.403788, 27.570110 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MNE", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 187, "SOVEREIGNT": "Montenegro", "SOV_A3": "MNE", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Montenegro", "ADM0_A3": "MNE", "GEOU_DIF": 0.000000, "GEOUNIT": "Montenegro", "GU_A3": "MNE", "SU_DIF": 0.000000, "SUBUNIT": "Montenegro", "SU_A3": "MNE", "NAME": "Montenegro", "ABBREV": "Mont.", "POSTAL": "ME", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Montenegro", "MAP_COLOR": 5.000000, "POP_EST": 672180.000000, "GDP_MD_EST": 6816.000000, "FIPS_10_": 0.000000, "ISO_A2": "ME", "ISO_A3": "MNE", "ISO_N3": 499.000000 }, "geometry": { "type": "Point", "coordinates": [ 19.238611, 42.980249 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GNQ", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 126, "SOVEREIGNT": "Equatorial Guinea", "SOV_A3": "GNQ", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Equatorial Guinea", "ADM0_A3": "GNQ", "GEOU_DIF": 0.000000, "GEOUNIT": "Equatorial Guinea", "GU_A3": "GNQ", "SU_DIF": 0.000000, "SUBUNIT": "Equatorial Guinea", "SU_A3": "GNQ", "NAME": "Eq. Guinea", "ABBREV": "Eq. G.", "POSTAL": "GQ", "NAME_FORMA": "Republic of Equatorial Guinea", "TERR_": "", "NAME_SORT": "Equatorial Guinea", "MAP_COLOR": 8.000000, "POP_EST": 633441.000000, "GDP_MD_EST": 22950.000000, "FIPS_10_": 0.000000, "ISO_A2": "GQ", "ISO_A3": "GNQ", "ISO_N3": 226.000000 }, "geometry": { "type": "Point", "coordinates": [ 10.333000, 1.718806 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SLB", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 229, "SOVEREIGNT": "Solomon Islands", "SOV_A3": "SLB", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Solomon Islands", "ADM0_A3": "SLB", "GEOU_DIF": 0.000000, "GEOUNIT": "Solomon Islands", "GU_A3": "SLB", "SU_DIF": 0.000000, "SUBUNIT": "Solomon Islands", "SU_A3": "SLB", "NAME": "Solomon Is.", "ABBREV": "S. Is.", "POSTAL": "SB", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Solomon Islands", "MAP_COLOR": 6.000000, "POP_EST": 595613.000000, "GDP_MD_EST": 1078.000000, "FIPS_10_": 0.000000, "ISO_A2": "SB", "ISO_A3": "SLB", "ISO_N3": 90.000000 }, "geometry": { "type": "Point", "coordinates": [ 159.622225, -8.966923 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MAC", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 13, "SOVEREIGNT": "China", "SOV_A3": "CH1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Macau S.A.R", "ADM0_A3": "MAC", "GEOU_DIF": 0.000000, "GEOUNIT": "Macau S.A.R", "GU_A3": "MAC", "SU_DIF": 0.000000, "SUBUNIT": "Macau S.A.R", "SU_A3": "MAC", "NAME": "Macau", "ABBREV": "Mac.", "POSTAL": "MO", "NAME_FORMA": "Macau Special Administrative Region", "TERR_": "China", "NAME_SORT": "Macau S.A.R", "MAP_COLOR": 3.000000, "POP_EST": 559846.000000, "GDP_MD_EST": 18140.000000, "FIPS_10_": 0.000000, "ISO_A2": "MO", "ISO_A3": "MAC", "ISO_N3": 446.000000 }, "geometry": { "type": "Point", "coordinates": [ 113.551326, 22.291779 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CYP", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 116, "SOVEREIGNT": "Cyprus", "SOV_A3": "CYP", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Cyprus", "ADM0_A3": "CYP", "GEOU_DIF": 0.000000, "GEOUNIT": "Cyprus", "GU_A3": "CYP", "SU_DIF": 0.000000, "SUBUNIT": "Cyprus", "SU_A3": "CYP", "NAME": "Cyprus", "ABBREV": "Cyp.", "POSTAL": "CY", "NAME_FORMA": "Republic of Cyprus", "TERR_": "", "NAME_SORT": "Cyprus", "MAP_COLOR": 7.000000, "POP_EST": 531640.000000, "GDP_MD_EST": 22700.000000, "FIPS_10_": 0.000000, "ISO_A2": "CY", "ISO_A3": "CYP", "ISO_N3": 196.000000 }, "geometry": { "type": "Point", "coordinates": [ 32.990284, 35.096042 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "DJI", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 119, "SOVEREIGNT": "Djibouti", "SOV_A3": "DJI", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Djibouti", "ADM0_A3": "DJI", "GEOU_DIF": 0.000000, "GEOUNIT": "Djibouti", "GU_A3": "DJI", "SU_DIF": 0.000000, "SUBUNIT": "Djibouti", "SU_A3": "DJI", "NAME": "Djibouti", "ABBREV": "Dji.", "POSTAL": "DJ", "NAME_FORMA": "Republic of Djibouti", "TERR_": "", "NAME_SORT": "Djibouti", "MAP_COLOR": 8.000000, "POP_EST": 516055.000000, "GDP_MD_EST": 1885.000000, "FIPS_10_": 0.000000, "ISO_A2": "DJ", "ISO_A3": "DJI", "ISO_N3": 262.000000 }, "geometry": { "type": "Point", "coordinates": [ 42.566970, 11.828264 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LUX", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 172, "SOVEREIGNT": "Luxembourg", "SOV_A3": "LUX", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Luxembourg", "ADM0_A3": "LUX", "GEOU_DIF": 0.000000, "GEOUNIT": "Luxembourg", "GU_A3": "LUX", "SU_DIF": 0.000000, "SUBUNIT": "Luxembourg", "SU_A3": "LUX", "NAME": "Luxembourg", "ABBREV": "Lux.", "POSTAL": "L", "NAME_FORMA": "Grand Duchy of Luxembourg", "TERR_": "", "NAME_SORT": "Luxembourg", "MAP_COLOR": 7.000000, "POP_EST": 491775.000000, "GDP_MD_EST": 39370.000000, "FIPS_10_": 0.000000, "ISO_A2": "LU", "ISO_A3": "LUX", "ISO_N3": 442.000000 }, "geometry": { "type": "Point", "coordinates": [ 6.071594, 49.957274 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SUR", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 237, "SOVEREIGNT": "Suriname", "SOV_A3": "SUR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Suriname", "ADM0_A3": "SUR", "GEOU_DIF": 0.000000, "GEOUNIT": "Suriname", "GU_A3": "SUR", "SU_DIF": 0.000000, "SUBUNIT": "Suriname", "SU_A3": "SUR", "NAME": "Suriname", "ABBREV": "Sur.", "POSTAL": "SR", "NAME_FORMA": "Republic of Suriname", "TERR_": "", "NAME_SORT": "Suriname", "MAP_COLOR": 6.000000, "POP_EST": 481267.000000, "GDP_MD_EST": 4254.000000, "FIPS_10_": 0.000000, "ISO_A2": "SR", "ISO_A3": "SUR", "ISO_N3": 740.000000 }, "geometry": { "type": "Point", "coordinates": [ -55.912093, 4.025025 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CPV", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 107, "SOVEREIGNT": "Cape Verde", "SOV_A3": "CPV", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Cape Verde", "ADM0_A3": "CPV", "GEOU_DIF": 0.000000, "GEOUNIT": "Cape Verde", "GU_A3": "CPV", "SU_DIF": 0.000000, "SUBUNIT": "Cape Verde", "SU_A3": "CPV", "NAME": "Cape Verde", "ABBREV": "C.Vd.", "POSTAL": "CV", "NAME_FORMA": "Republic of Cape Verde", "TERR_": "", "NAME_SORT": "Cape Verde", "MAP_COLOR": 11.000000, "POP_EST": 429474.000000, "GDP_MD_EST": 1626.000000, "FIPS_10_": 0.000000, "ISO_A2": "CV", "ISO_A3": "CPV", "ISO_N3": 132.000000 }, "geometry": { "type": "Point", "coordinates": [ -23.968163, 16.043250 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MLT", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 179, "SOVEREIGNT": "Malta", "SOV_A3": "MLT", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Malta", "ADM0_A3": "MLT", "GEOU_DIF": 0.000000, "GEOUNIT": "Malta", "GU_A3": "MLT", "SU_DIF": 0.000000, "SUBUNIT": "Malta", "SU_A3": "MLT", "NAME": "Malta", "ABBREV": "Malta", "POSTAL": "M", "NAME_FORMA": "Republic of Malta", "TERR_": "", "NAME_SORT": "Malta", "MAP_COLOR": 8.000000, "POP_EST": 405165.000000, "GDP_MD_EST": 9962.000000, "FIPS_10_": 0.000000, "ISO_A2": "MT", "ISO_A3": "MLT", "ISO_N3": 470.000000 }, "geometry": { "type": "Point", "coordinates": [ 14.404172, 36.103863 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MDV", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 177, "SOVEREIGNT": "Maldives", "SOV_A3": "MDV", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Maldives", "ADM0_A3": "MDV", "GEOU_DIF": 0.000000, "GEOUNIT": "Maldives", "GU_A3": "MDV", "SU_DIF": 0.000000, "SUBUNIT": "Maldives", "SU_A3": "MDV", "NAME": "Maldives", "ABBREV": "Mald.", "POSTAL": "MV", "NAME_FORMA": "Republic of Maldives", "TERR_": "", "NAME_SORT": "Maldives", "MAP_COLOR": 7.000000, "POP_EST": 396334.000000, "GDP_MD_EST": 1716.000000, "FIPS_10_": 0.000000, "ISO_A2": "MV", "ISO_A3": "MDV", "ISO_N3": 462.000000 }, "geometry": { "type": "Point", "coordinates": [ 73.330973, 3.710243 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BRN", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 100, "SOVEREIGNT": "Brunei", "SOV_A3": "BRN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Brunei", "ADM0_A3": "BRN", "GEOU_DIF": 0.000000, "GEOUNIT": "Brunei", "GU_A3": "BRN", "SU_DIF": 0.000000, "SUBUNIT": "Brunei", "SU_A3": "BRN", "NAME": "Brunei", "ABBREV": "Brunei", "POSTAL": "BN", "NAME_FORMA": "Negara Brunei Darussalam", "TERR_": "", "NAME_SORT": "Brunei", "MAP_COLOR": 12.000000, "POP_EST": 388190.000000, "GDP_MD_EST": 20250.000000, "FIPS_10_": 0.000000, "ISO_A2": "BN", "ISO_A3": "BRN", "ISO_N3": 96.000000 }, "geometry": { "type": "Point", "coordinates": [ 114.727385, 4.546751 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BHS", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 245, "SOVEREIGNT": "The Bahamas", "SOV_A3": "BHS", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "The Bahamas", "ADM0_A3": "BHS", "GEOU_DIF": 0.000000, "GEOUNIT": "The Bahamas", "GU_A3": "BHS", "SU_DIF": 0.000000, "SUBUNIT": "The Bahamas", "SU_A3": "BHS", "NAME": "Bahamas", "ABBREV": "Bhs.", "POSTAL": "BS", "NAME_FORMA": "Commonwealth of the Bahamas", "TERR_": "", "NAME_SORT": "Bahamas, The", "MAP_COLOR": 5.000000, "POP_EST": 309156.000000, "GDP_MD_EST": 9093.000000, "FIPS_10_": 0.000000, "ISO_A2": "BS", "ISO_A3": "BHS", "ISO_N3": 44.000000 }, "geometry": { "type": "Point", "coordinates": [ -76.570480, 24.398769 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BLZ", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 93, "SOVEREIGNT": "Belize", "SOV_A3": "BLZ", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Belize", "ADM0_A3": "BLZ", "GEOU_DIF": 0.000000, "GEOUNIT": "Belize", "GU_A3": "BLZ", "SU_DIF": 0.000000, "SUBUNIT": "Belize", "SU_A3": "BLZ", "NAME": "Belize", "ABBREV": "Belize", "POSTAL": "BZ", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Belize", "MAP_COLOR": 7.000000, "POP_EST": 307899.000000, "GDP_MD_EST": 2536.000000, "FIPS_10_": 0.000000, "ISO_A2": "BZ", "ISO_A3": "BLZ", "ISO_N3": 84.000000 }, "geometry": { "type": "Point", "coordinates": [ -88.704356, 17.313149 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ISL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 146, "SOVEREIGNT": "Iceland", "SOV_A3": "ISL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Iceland", "ADM0_A3": "ISL", "GEOU_DIF": 0.000000, "GEOUNIT": "Iceland", "GU_A3": "ISL", "SU_DIF": 0.000000, "SUBUNIT": "Iceland", "SU_A3": "ISL", "NAME": "Iceland", "ABBREV": "Iceland", "POSTAL": "IS", "NAME_FORMA": "Republic of Iceland", "TERR_": "", "NAME_SORT": "Iceland", "MAP_COLOR": 9.000000, "POP_EST": 306694.000000, "GDP_MD_EST": 12710.000000, "FIPS_10_": 0.000000, "ISO_A2": "IS", "ISO_A3": "ISL", "ISO_N3": 352.000000 }, "geometry": { "type": "Point", "coordinates": [ -18.328234, 65.172960 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PYF", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 38, "SOVEREIGNT": "France", "SOV_A3": "FR1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "French Polynesia", "ADM0_A3": "PYF", "GEOU_DIF": 0.000000, "GEOUNIT": "French Polynesia", "GU_A3": "PYF", "SU_DIF": 0.000000, "SUBUNIT": "French Polynesia", "SU_A3": "PYF", "NAME": "Fr. Polynesia", "ABBREV": "Fr. Poly.", "POSTAL": "PF", "NAME_FORMA": "Territory of French Polynesia", "TERR_": "Fr.", "NAME_SORT": "French Polynesia", "MAP_COLOR": 11.000000, "POP_EST": 287032.000000, "GDP_MD_EST": 4718.000000, "FIPS_10_": 0.000000, "ISO_A2": "PF", "ISO_A3": "PYF", "ISO_N3": 258.000000 }, "geometry": { "type": "Point", "coordinates": [ -145.091924, -15.399447 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BRB", "ScaleRank": 1, "LabelRank": 6, "FeatureCla": "Adm-0 country", "OID_": 90, "SOVEREIGNT": "Barbados", "SOV_A3": "BRB", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Barbados", "ADM0_A3": "BRB", "GEOU_DIF": 0.000000, "GEOUNIT": "Barbados", "GU_A3": "BRB", "SU_DIF": 0.000000, "SUBUNIT": "Barbados", "SU_A3": "BRB", "NAME": "Barbados", "ABBREV": "Barb.", "POSTAL": "BB", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Barbados", "MAP_COLOR": 3.000000, "POP_EST": 284589.000000, "GDP_MD_EST": 5425.000000, "FIPS_10_": 0.000000, "ISO_A2": "BB", "ISO_A3": "BRB", "ISO_N3": 52.000000 }, "geometry": { "type": "Point", "coordinates": [ -59.560486, 13.266589 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CYN", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 198, "SOVEREIGNT": "Northern Cyprus", "SOV_A3": "CYN", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Northern Cyprus", "ADM0_A3": "CYN", "GEOU_DIF": 0.000000, "GEOUNIT": "Northern Cyprus", "GU_A3": "CYN", "SU_DIF": 0.000000, "SUBUNIT": "Northern Cyprus", "SU_A3": "CYN", "NAME": "N. Cyprus", "ABBREV": "N. Cy.", "POSTAL": "CN", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Cyprus, Northern", "MAP_COLOR": 8.000000, "POP_EST": 265100.000000, "GDP_MD_EST": 3600.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 33.595000, 35.455750 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NCL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 40, "SOVEREIGNT": "France", "SOV_A3": "FR1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "New Caledonia", "ADM0_A3": "NCL", "GEOU_DIF": 0.000000, "GEOUNIT": "New Caledonia", "GU_A3": "NCL", "SU_DIF": 0.000000, "SUBUNIT": "New Caledonia", "SU_A3": "NCL", "NAME": "New Caledonia", "ABBREV": "New C.", "POSTAL": "NC", "NAME_FORMA": "Territory of New Caledonia and Dependencies", "TERR_": "Fr.", "NAME_SORT": "New Caledonia", "MAP_COLOR": 11.000000, "POP_EST": 227436.000000, "GDP_MD_EST": 3158.000000, "FIPS_10_": 0.000000, "ISO_A2": "NC", "ISO_A3": "NCL", "ISO_N3": 540.000000 }, "geometry": { "type": "Point", "coordinates": [ 165.674509, -21.427187 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "WSM", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 219, "SOVEREIGNT": "Samoa", "SOV_A3": "WSM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Samoa", "ADM0_A3": "WSM", "GEOU_DIF": 0.000000, "GEOUNIT": "Samoa", "GU_A3": "WSM", "SU_DIF": 0.000000, "SUBUNIT": "Samoa", "SU_A3": "WSM", "NAME": "Samoa", "ABBREV": "Samoa", "POSTAL": "WS", "NAME_FORMA": "Independent State of Samoa", "TERR_": "", "NAME_SORT": "Samoa", "MAP_COLOR": 6.000000, "POP_EST": 219998.000000, "GDP_MD_EST": 1049.000000, "FIPS_10_": 0.000000, "ISO_A2": "WS", "ISO_A3": "WSM", "ISO_N3": 882.000000 }, "geometry": { "type": "Point", "coordinates": [ -172.160049, -13.843997 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "VUT", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 259, "SOVEREIGNT": "Vanuatu", "SOV_A3": "VUT", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Vanuatu", "ADM0_A3": "VUT", "GEOU_DIF": 0.000000, "GEOUNIT": "Vanuatu", "GU_A3": "VUT", "SU_DIF": 0.000000, "SUBUNIT": "Vanuatu", "SU_A3": "VUT", "NAME": "Vanuatu", "ABBREV": "Van.", "POSTAL": "VU", "NAME_FORMA": "Republic of Vanuatu", "TERR_": "", "NAME_SORT": "Vanuatu", "MAP_COLOR": 3.000000, "POP_EST": 218519.000000, "GDP_MD_EST": 988.500000, "FIPS_10_": 0.000000, "ISO_A2": "VU", "ISO_A3": "VUT", "ISO_N3": 548.000000 }, "geometry": { "type": "Point", "coordinates": [ 167.706714, -16.322147 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "STP", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 221, "SOVEREIGNT": "Sao Tome and Principe", "SOV_A3": "STP", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Sao Tome and Principe", "ADM0_A3": "STP", "GEOU_DIF": 0.000000, "GEOUNIT": "Sao Tome and Principe", "GU_A3": "STP", "SU_DIF": 0.000000, "SUBUNIT": "Sao Tome and Principe", "SU_A3": "STP", "NAME": "Sao Tome and Principe", "ABBREV": "S.T.P.", "POSTAL": "ST", "NAME_FORMA": "Democratic Republic of Sao Tome and Principe", "TERR_": "", "NAME_SORT": "Sao Tome and Principe", "MAP_COLOR": 7.000000, "POP_EST": 212679.000000, "GDP_MD_EST": 276.500000, "FIPS_10_": 0.000000, "ISO_A2": "ST", "ISO_A3": "STP", "ISO_N3": 678.000000 }, "geometry": { "type": "Point", "coordinates": [ 6.726997, 0.447131 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GUM", "ScaleRank": 3, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 62, "SOVEREIGNT": "United States of America", "SOV_A3": "US1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Guam", "ADM0_A3": "GUM", "GEOU_DIF": 0.000000, "GEOUNIT": "Guam", "GU_A3": "GUM", "SU_DIF": 0.000000, "SUBUNIT": "Guam", "SU_A3": "GUM", "NAME": "Guam", "ABBREV": "Guam", "POSTAL": "GU", "NAME_FORMA": "Territory of Guam", "TERR_": "U.S.A.", "NAME_SORT": "Guam", "MAP_COLOR": 1.000000, "POP_EST": 178430.000000, "GDP_MD_EST": 2500.000000, "FIPS_10_": 0.000000, "ISO_A2": "GU", "ISO_A3": "GUM", "ISO_N3": 316.000000 }, "geometry": { "type": "Point", "coordinates": [ 144.772245, 13.530980 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LCA", "ScaleRank": 1, "LabelRank": 7, "FeatureCla": "Adm-0 country", "OID_": 217, "SOVEREIGNT": "Saint Lucia", "SOV_A3": "LCA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Saint Lucia", "ADM0_A3": "LCA", "GEOU_DIF": 0.000000, "GEOUNIT": "Saint Lucia", "GU_A3": "LCA", "SU_DIF": 0.000000, "SUBUNIT": "Saint Lucia", "SU_A3": "LCA", "NAME": "Saint Lucia", "ABBREV": "S.L.", "POSTAL": "LC", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Saint Lucia", "MAP_COLOR": 4.000000, "POP_EST": 160267.000000, "GDP_MD_EST": 1778.000000, "FIPS_10_": 0.000000, "ISO_A2": "LC", "ISO_A3": "LCA", "ISO_N3": 662.000000 }, "geometry": { "type": "Point", "coordinates": [ -60.969572, 13.992560 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CUW", "ScaleRank": 3, "LabelRank": 6, "FeatureCla": "Adm-0 country", "OID_": 19, "SOVEREIGNT": "Netherlands", "SOV_A3": "NL1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Curaçao", "ADM0_A3": "CUW", "GEOU_DIF": 0.000000, "GEOUNIT": "Curaçao", "GU_A3": "CUW", "SU_DIF": 0.000000, "SUBUNIT": "Curaçao", "SU_A3": "CUW", "NAME": "Curaçao", "ABBREV": "Cur.", "POSTAL": "CW", "NAME_FORMA": "", "TERR_": "Neth.", "NAME_SORT": "Curaçao", "MAP_COLOR": 9.000000, "POP_EST": 141766.000000, "GDP_MD_EST": 2.910000, "FIPS_10_": 0.000000, "ISO_A2": "CW", "ISO_A3": "CUW", "ISO_N3": 531.000000 }, "geometry": { "type": "Point", "coordinates": [ -68.970565, 12.273361 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TON", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 247, "SOVEREIGNT": "Tonga", "SOV_A3": "TON", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Tonga", "ADM0_A3": "TON", "GEOU_DIF": 0.000000, "GEOUNIT": "Tonga", "GU_A3": "TON", "SU_DIF": 0.000000, "SUBUNIT": "Tonga", "SU_A3": "TON", "NAME": "Tonga", "ABBREV": "Tongo", "POSTAL": "TO", "NAME_FORMA": "Kingdom of Tonga", "TERR_": "", "NAME_SORT": "Tonga", "MAP_COLOR": 8.000000, "POP_EST": 120898.000000, "GDP_MD_EST": 549.000000, "FIPS_10_": 0.000000, "ISO_A2": "TO", "ISO_A3": "TON", "ISO_N3": 776.000000 }, "geometry": { "type": "Point", "coordinates": [ -174.842842, -20.118608 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KIR", "ScaleRank": 1, "LabelRank": 7, "FeatureCla": "Adm-0 country", "OID_": 160, "SOVEREIGNT": "Kiribati", "SOV_A3": "KIR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Kiribati", "ADM0_A3": "KIR", "GEOU_DIF": 0.000000, "GEOUNIT": "Kiribati", "GU_A3": "KIR", "SU_DIF": 0.000000, "SUBUNIT": "Kiribati", "SU_A3": "KIR", "NAME": "Kiribati", "ABBREV": "Kir.", "POSTAL": "KI", "NAME_FORMA": "Republic of Kiribati", "TERR_": "", "NAME_SORT": "Kiribati", "MAP_COLOR": 12.000000, "POP_EST": 112850.000000, "GDP_MD_EST": 579.500000, "FIPS_10_": 0.000000, "ISO_A2": "KI", "ISO_A3": "KIR", "ISO_N3": 296.000000 }, "geometry": { "type": "Point", "coordinates": [ -165.506312, -1.071112 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "VIR", "ScaleRank": 3, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 66, "SOVEREIGNT": "United States of America", "SOV_A3": "US1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "United States Virgin Islands", "ADM0_A3": "VIR", "GEOU_DIF": 0.000000, "GEOUNIT": "United States Virgin Islands", "GU_A3": "VIR", "SU_DIF": 0.000000, "SUBUNIT": "United States Virgin Islands", "SU_A3": "VIR", "NAME": "U.S. Virgin Is.", "ABBREV": "V.I. (U.S.)", "POSTAL": "VI", "NAME_FORMA": "Virgin Islands of the United States", "TERR_": "U.S.A.", "NAME_SORT": "United States Virgin Islands", "MAP_COLOR": 1.000000, "POP_EST": 109825.000000, "GDP_MD_EST": 1577.000000, "FIPS_10_": 0.000000, "ISO_A2": "VI", "ISO_A3": "VIR", "ISO_N3": 850.000000 }, "geometry": { "type": "Point", "coordinates": [ -64.790222, 18.072995 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "FSM", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 130, "SOVEREIGNT": "Federated States of Micronesia", "SOV_A3": "FSM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Federated States of Micronesia", "ADM0_A3": "FSM", "GEOU_DIF": 0.000000, "GEOUNIT": "Federated States of Micronesia", "GU_A3": "FSM", "SU_DIF": 0.000000, "SUBUNIT": "Federated States of Micronesia", "SU_A3": "FSM", "NAME": "Micronesia", "ABBREV": "F.S.M.", "POSTAL": "FSM", "NAME_FORMA": "Federated States of Micronesia", "TERR_": "", "NAME_SORT": "Micronesia, Federated States of", "MAP_COLOR": 13.000000, "POP_EST": 107434.000000, "GDP_MD_EST": 238.100000, "FIPS_10_": 0.000000, "ISO_A2": "FM", "ISO_A3": "FSM", "ISO_N3": 583.000000 }, "geometry": { "type": "Point", "coordinates": [ 155.227266, 7.168084 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "VCT", "ScaleRank": 1, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 218, "SOVEREIGNT": "Saint Vincent and the Grenadines", "SOV_A3": "VCT", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Saint Vincent and the Grenadines", "ADM0_A3": "VCT", "GEOU_DIF": 0.000000, "GEOUNIT": "Saint Vincent and the Grenadines", "GU_A3": "VCT", "SU_DIF": 0.000000, "SUBUNIT": "Saint Vincent and the Grenadines", "SU_A3": "VCT", "NAME": "St. Vin. and Gren.", "ABBREV": "St.V.G.", "POSTAL": "VC", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Saint Vincent and the Grenadines", "MAP_COLOR": 7.000000, "POP_EST": 104574.000000, "GDP_MD_EST": 1070.000000, "FIPS_10_": 0.000000, "ISO_A2": "VC", "ISO_A3": "VCT", "ISO_N3": 670.000000 }, "geometry": { "type": "Point", "coordinates": [ -61.202621, 13.302116 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ABW", "ScaleRank": 3, "LabelRank": 6, "FeatureCla": "Adm-0 country", "OID_": 18, "SOVEREIGNT": "Netherlands", "SOV_A3": "NL1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Aruba", "ADM0_A3": "ABW", "GEOU_DIF": 0.000000, "GEOUNIT": "Aruba", "GU_A3": "ABW", "SU_DIF": 0.000000, "SUBUNIT": "Aruba", "SU_A3": "ABW", "NAME": "Aruba", "ABBREV": "Aruba", "POSTAL": "AW", "NAME_FORMA": "", "TERR_": "Neth.", "NAME_SORT": "Aruba", "MAP_COLOR": 9.000000, "POP_EST": 103065.000000, "GDP_MD_EST": 2258.000000, "FIPS_10_": 0.000000, "ISO_A2": "AW", "ISO_A3": "ABW", "ISO_N3": 533.000000 }, "geometry": { "type": "Point", "coordinates": [ -69.973455, 12.598461 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "JEY", "ScaleRank": 4, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 27, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Jersey", "ADM0_A3": "JEY", "GEOU_DIF": 0.000000, "GEOUNIT": "Jersey", "GU_A3": "JEY", "SU_DIF": 0.000000, "SUBUNIT": "Jersey", "SU_A3": "JEY", "NAME": "Jersey", "ABBREV": "Jey.", "POSTAL": "JE", "NAME_FORMA": "Bailiwick of Jersey", "TERR_": "Crown dependency of U.K.", "NAME_SORT": "Jersey", "MAP_COLOR": 3.000000, "POP_EST": 91626.000000, "GDP_MD_EST": 5100.000000, "FIPS_10_": 0.000000, "ISO_A2": "JE", "ISO_A3": "JEY", "ISO_N3": 832.000000 }, "geometry": { "type": "Point", "coordinates": [ -2.126831, 49.410941 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GRD", "ScaleRank": 1, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 138, "SOVEREIGNT": "Grenada", "SOV_A3": "GRD", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Grenada", "ADM0_A3": "GRD", "GEOU_DIF": 0.000000, "GEOUNIT": "Grenada", "GU_A3": "GRD", "SU_DIF": 0.000000, "SUBUNIT": "Grenada", "SU_A3": "GRD", "NAME": "Grenada", "ABBREV": "Gren.", "POSTAL": "GD", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Grenada", "MAP_COLOR": 6.000000, "POP_EST": 90739.000000, "GDP_MD_EST": 1161.000000, "FIPS_10_": 0.000000, "ISO_A2": "GD", "ISO_A3": "GRD", "ISO_N3": 308.000000 }, "geometry": { "type": "Point", "coordinates": [ -61.655911, 12.232730 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MNP", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 63, "SOVEREIGNT": "United States of America", "SOV_A3": "US1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Northern Mariana Islands", "ADM0_A3": "MNP", "GEOU_DIF": 0.000000, "GEOUNIT": "Northern Mariana Islands", "GU_A3": "MNP", "SU_DIF": 0.000000, "SUBUNIT": "Northern Mariana Islands", "SU_A3": "MNP", "NAME": "N. Mariana Is.", "ABBREV": "N.M.I.", "POSTAL": "MP", "NAME_FORMA": "Commonwealth of the Northern Mariana Islands", "TERR_": "Commonwealth of U.S.A.", "NAME_SORT": "Mariana Islands, Northern", "MAP_COLOR": 1.000000, "POP_EST": 88662.000000, "GDP_MD_EST": 900.000000, "FIPS_10_": 0.000000, "ISO_A2": "MP", "ISO_A3": "MNP", "ISO_N3": 580.000000 }, "geometry": { "type": "Point", "coordinates": [ 145.592950, 16.243889 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SYC", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 224, "SOVEREIGNT": "Seychelles", "SOV_A3": "SYC", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Seychelles", "ADM0_A3": "SYC", "GEOU_DIF": 0.000000, "GEOUNIT": "Seychelles", "GU_A3": "SYC", "SU_DIF": 0.000000, "SUBUNIT": "Seychelles", "SU_A3": "SYC", "NAME": "Seychelles", "ABBREV": "Syc.", "POSTAL": "SC", "NAME_FORMA": "Republic of Seychelles", "TERR_": "", "NAME_SORT": "Seychelles", "MAP_COLOR": 1.000000, "POP_EST": 87476.000000, "GDP_MD_EST": 1715.000000, "FIPS_10_": 0.000000, "ISO_A2": "SC", "ISO_A3": "SYC", "ISO_N3": 690.000000 }, "geometry": { "type": "Point", "coordinates": [ 51.860182, -6.652368 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ATG", "ScaleRank": 1, "LabelRank": 6, "FeatureCla": "Adm-0 country", "OID_": 83, "SOVEREIGNT": "Antigua and Barbuda", "SOV_A3": "ATG", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Antigua and Barbuda", "ADM0_A3": "ATG", "GEOU_DIF": 0.000000, "GEOUNIT": "Antigua and Barbuda", "GU_A3": "ATG", "SU_DIF": 0.000000, "SUBUNIT": "Antigua and Barbuda", "SU_A3": "ATG", "NAME": "Antigua and Barb.", "ABBREV": "Ant.B.", "POSTAL": "AG", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Antigua and Barbuda", "MAP_COLOR": 5.000000, "POP_EST": 85632.000000, "GDP_MD_EST": 1657.000000, "FIPS_10_": 0.000000, "ISO_A2": "AG", "ISO_A3": "ATG", "ISO_N3": 28.000000 }, "geometry": { "type": "Point", "coordinates": [ -61.791003, 17.394378 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "AND", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 81, "SOVEREIGNT": "Andorra", "SOV_A3": "AND", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Andorra", "ADM0_A3": "AND", "GEOU_DIF": 0.000000, "GEOUNIT": "Andorra", "GU_A3": "AND", "SU_DIF": 0.000000, "SUBUNIT": "Andorra", "SU_A3": "AND", "NAME": "Andorra", "ABBREV": "And.", "POSTAL": "AND", "NAME_FORMA": "Principality of Andorra", "TERR_": "", "NAME_SORT": "Andorra", "MAP_COLOR": 8.000000, "POP_EST": 83888.000000, "GDP_MD_EST": 3660.000000, "FIPS_10_": 0.000000, "ISO_A2": "AD", "ISO_A3": "AND", "ISO_N3": 20.000000 }, "geometry": { "type": "Point", "coordinates": [ 1.560767, 42.733064 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "IMN", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 26, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Isle of Man", "ADM0_A3": "IMN", "GEOU_DIF": 0.000000, "GEOUNIT": "Isle of Man", "GU_A3": "IMN", "SU_DIF": 0.000000, "SUBUNIT": "Isle of Man", "SU_A3": "IMN", "NAME": "Isle of Man", "ABBREV": "IoMan", "POSTAL": "IM", "NAME_FORMA": "", "TERR_": "Crown dependency of U.K.", "NAME_SORT": "Isle of Man", "MAP_COLOR": 3.000000, "POP_EST": 76512.000000, "GDP_MD_EST": 2719.000000, "FIPS_10_": 0.000000, "ISO_A2": "IM", "ISO_A3": "IMN", "ISO_N3": 833.000000 }, "geometry": { "type": "Point", "coordinates": [ -4.534119, 54.410547 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "DMA", "ScaleRank": 1, "LabelRank": 7, "FeatureCla": "Adm-0 country", "OID_": 120, "SOVEREIGNT": "Dominica", "SOV_A3": "DMA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Dominica", "ADM0_A3": "DMA", "GEOU_DIF": 0.000000, "GEOUNIT": "Dominica", "GU_A3": "DMA", "SU_DIF": 0.000000, "SUBUNIT": "Dominica", "SU_A3": "DMA", "NAME": "Dominica", "ABBREV": "D'inca", "POSTAL": "DM", "NAME_FORMA": "Commonwealth of Dominica", "TERR_": "", "NAME_SORT": "Dominica", "MAP_COLOR": 12.000000, "POP_EST": 72660.000000, "GDP_MD_EST": 719.600000, "FIPS_10_": 0.000000, "ISO_A2": "DM", "ISO_A3": "DMA", "ISO_N3": 212.000000 }, "geometry": { "type": "Point", "coordinates": [ -61.356205, 15.535350 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KAB", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 77, "SOVEREIGNT": "Kazakhstan", "SOV_A3": "KAZ", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Lease", "ADMIN": "Baykonur Cosmodrome", "ADM0_A3": "KAB", "GEOU_DIF": 0.000000, "GEOUNIT": "Baykonur Cosmodrome", "GU_A3": "KAB", "SU_DIF": 0.000000, "SUBUNIT": "Baykonur Cosmodrome", "SU_A3": "KAB", "NAME": "Baykonur", "ABBREV": "Bayk.", "POSTAL": "BK", "NAME_FORMA": "", "TERR_": "Leased by Rus. from Kaz.", "NAME_SORT": "Baykonur Cosmodrome", "MAP_COLOR": 1.000000, "POP_EST": 70000.000000, "GDP_MD_EST": -99.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 63.384062, 46.171633 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BMU", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 49, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Bermuda", "ADM0_A3": "BMU", "GEOU_DIF": 0.000000, "GEOUNIT": "Bermuda", "GU_A3": "BMU", "SU_DIF": 0.000000, "SUBUNIT": "Bermuda", "SU_A3": "BMU", "NAME": "Bermuda", "ABBREV": "Berm.", "POSTAL": "BM", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "Bermuda", "MAP_COLOR": 3.000000, "POP_EST": 67837.000000, "GDP_MD_EST": 4500.000000, "FIPS_10_": 0.000000, "ISO_A2": "BM", "ISO_A3": "BMU", "ISO_N3": 60.000000 }, "geometry": { "type": "Point", "coordinates": [ -64.755838, 32.484523 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GGY", "ScaleRank": 4, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 25, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Guernsey", "ADM0_A3": "GGY", "GEOU_DIF": 0.000000, "GEOUNIT": "Guernsey", "GU_A3": "GGY", "SU_DIF": 0.000000, "SUBUNIT": "Guernsey", "SU_A3": "GGY", "NAME": "Guernsey", "ABBREV": "Guern.", "POSTAL": "GG", "NAME_FORMA": "Bailiwick of Guernsey", "TERR_": "Crown dependency of U.K.", "NAME_SORT": "Guernsey", "MAP_COLOR": 3.000000, "POP_EST": 65870.000000, "GDP_MD_EST": 2742.000000, "FIPS_10_": 0.000000, "ISO_A2": "GG", "ISO_A3": "GGY", "ISO_N3": 831.000000 }, "geometry": { "type": "Point", "coordinates": [ -2.530854, 49.674347 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ASM", "ScaleRank": 3, "LabelRank": 7, "FeatureCla": "Adm-0 country", "OID_": 61, "SOVEREIGNT": "United States of America", "SOV_A3": "US1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "American Samoa", "ADM0_A3": "ASM", "GEOU_DIF": 0.000000, "GEOUNIT": "American Samoa", "GU_A3": "ASM", "SU_DIF": 0.000000, "SUBUNIT": "American Samoa", "SU_A3": "ASM", "NAME": "American Samoa", "ABBREV": "Am. Samoa", "POSTAL": "AS", "NAME_FORMA": "Territory of American Samoa", "TERR_": "U.S.A.", "NAME_SORT": "American Samoa", "MAP_COLOR": 1.000000, "POP_EST": 65628.000000, "GDP_MD_EST": 575.300000, "FIPS_10_": 0.000000, "ISO_A2": "AS", "ISO_A3": "ASM", "ISO_N3": 16.000000 }, "geometry": { "type": "Point", "coordinates": [ -170.397563, -14.347739 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MHL", "ScaleRank": 5, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 180, "SOVEREIGNT": "Marshall Islands", "SOV_A3": "MHL", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Marshall Islands", "ADM0_A3": "MHL", "GEOU_DIF": 0.000000, "GEOUNIT": "Marshall Islands", "GU_A3": "MHL", "SU_DIF": 0.000000, "SUBUNIT": "Marshall Islands", "SU_A3": "MHL", "NAME": "Marshall Is.", "ABBREV": "M. Is.", "POSTAL": "MH", "NAME_FORMA": "Republic of the Marshall Islands", "TERR_": "", "NAME_SORT": "Marshall Islands", "MAP_COLOR": 3.000000, "POP_EST": 64522.000000, "GDP_MD_EST": 133.500000, "FIPS_10_": 0.000000, "ISO_A2": "MH", "ISO_A3": "MHL", "ISO_N3": 584.000000 }, "geometry": { "type": "Point", "coordinates": [ 170.087169, 7.169730 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GRL", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 15, "SOVEREIGNT": "Denmark", "SOV_A3": "DN1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Greenland", "ADM0_A3": "GRL", "GEOU_DIF": 0.000000, "GEOUNIT": "Greenland", "GU_A3": "GRL", "SU_DIF": 0.000000, "SUBUNIT": "Greenland", "SU_A3": "GRL", "NAME": "Greenland", "ABBREV": "Grlnd.", "POSTAL": "GL", "NAME_FORMA": "", "TERR_": "Den.", "NAME_SORT": "Greenland", "MAP_COLOR": 12.000000, "POP_EST": 57600.000000, "GDP_MD_EST": 1100.000000, "FIPS_10_": 0.000000, "ISO_A2": "GL", "ISO_A3": "GRL", "ISO_N3": 304.000000 }, "geometry": { "type": "Point", "coordinates": [ -40.313599, 74.073522 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CYM", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 52, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Cayman Islands", "ADM0_A3": "CYM", "GEOU_DIF": 0.000000, "GEOUNIT": "Cayman Islands", "GU_A3": "CYM", "SU_DIF": 0.000000, "SUBUNIT": "Cayman Islands", "SU_A3": "CYM", "NAME": "Cayman Is.", "ABBREV": "Cym. Is.", "POSTAL": "KY", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "Cayman Islands", "MAP_COLOR": 3.000000, "POP_EST": 49035.000000, "GDP_MD_EST": 1939.000000, "FIPS_10_": 0.000000, "ISO_A2": "KY", "ISO_A3": "CYM", "ISO_N3": 136.000000 }, "geometry": { "type": "Point", "coordinates": [ -80.869497, 19.555302 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "FRO", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 36, "SOVEREIGNT": "Denmark", "SOV_A3": "DN1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Faroe Islands", "ADM0_A3": "FRO", "GEOU_DIF": 0.000000, "GEOUNIT": "Faroe Islands", "GU_A3": "FRO", "SU_DIF": 0.000000, "SUBUNIT": "Faroe Islands", "SU_A3": "FRO", "NAME": "Faroe Is.", "ABBREV": "Faroe Is.", "POSTAL": "FO", "NAME_FORMA": "Føoroyar (Faroe Is.)", "TERR_": "Den.", "NAME_SORT": "Faroe Islands", "MAP_COLOR": 12.000000, "POP_EST": 48856.000000, "GDP_MD_EST": 1000.000000, "FIPS_10_": 0.000000, "ISO_A2": "FO", "ISO_A3": "FRO", "ISO_N3": 234.000000 }, "geometry": { "type": "Point", "coordinates": [ -6.870082, 62.235346 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KNA", "ScaleRank": 1, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 216, "SOVEREIGNT": "Saint Kitts and Nevis", "SOV_A3": "KNA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Saint Kitts and Nevis", "ADM0_A3": "KNA", "GEOU_DIF": 0.000000, "GEOUNIT": "Saint Kitts and Nevis", "GU_A3": "KNA", "SU_DIF": 0.000000, "SUBUNIT": "Saint Kitts and Nevis", "SU_A3": "KNA", "NAME": "St. Kitts and Nevis", "ABBREV": "St.K.N.", "POSTAL": "KN", "NAME_FORMA": "Federation of Saint Kitts and Nevis", "TERR_": "", "NAME_SORT": "Saint Kitts and Nevis", "MAP_COLOR": 8.000000, "POP_EST": 40131.000000, "GDP_MD_EST": 777.700000, "FIPS_10_": 0.000000, "ISO_A2": "KN", "ISO_A3": "KNA", "ISO_N3": 659.000000 }, "geometry": { "type": "Point", "coordinates": [ -62.697825, 17.380293 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SXM", "ScaleRank": 3, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 21, "SOVEREIGNT": "Netherlands", "SOV_A3": "NL1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Sint Maarten", "ADM0_A3": "SXM", "GEOU_DIF": 0.000000, "GEOUNIT": "Sint Maarten", "GU_A3": "SXM", "SU_DIF": 0.000000, "SUBUNIT": "Sint Maarten", "SU_A3": "SXM", "NAME": "Sint Maarten", "ABBREV": "St. M.", "POSTAL": "SX", "NAME_FORMA": "", "TERR_": "Neth.", "NAME_SORT": "Netherlands Antilles", "MAP_COLOR": 9.000000, "POP_EST": 37429.000000, "GDP_MD_EST": 400.000000, "FIPS_10_": 0.000000, "ISO_A2": "SX", "ISO_A3": "SXM", "ISO_N3": 534.000000 }, "geometry": { "type": "Point", "coordinates": [ -63.069637, 18.154050 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "LIE", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 170, "SOVEREIGNT": "Liechtenstein", "SOV_A3": "LIE", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Liechtenstein", "ADM0_A3": "LIE", "GEOU_DIF": 0.000000, "GEOUNIT": "Liechtenstein", "GU_A3": "LIE", "SU_DIF": 0.000000, "SUBUNIT": "Liechtenstein", "SU_A3": "LIE", "NAME": "Liechtenstein", "ABBREV": "Liech.", "POSTAL": "FL", "NAME_FORMA": "Principality of Liechtenstein", "TERR_": "", "NAME_SORT": "Liechtenstein", "MAP_COLOR": 9.000000, "POP_EST": 34761.000000, "GDP_MD_EST": 4160.000000, "FIPS_10_": 0.000000, "ISO_A2": "LI", "ISO_A3": "LIE", "ISO_N3": 438.000000 }, "geometry": { "type": "Point", "coordinates": [ 9.540889, 47.330012 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MCO", "ScaleRank": 5, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 185, "SOVEREIGNT": "Monaco", "SOV_A3": "MCO", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Monaco", "ADM0_A3": "MCO", "GEOU_DIF": 0.000000, "GEOUNIT": "Monaco", "GU_A3": "MCO", "SU_DIF": 0.000000, "SUBUNIT": "Monaco", "SU_A3": "MCO", "NAME": "Monaco", "ABBREV": "Mco.", "POSTAL": "MC", "NAME_FORMA": "Principality of Monaco", "TERR_": "", "NAME_SORT": "Monaco", "MAP_COLOR": 12.000000, "POP_EST": 32965.000000, "GDP_MD_EST": 976.300000, "FIPS_10_": 0.000000, "ISO_A2": "MC", "ISO_A3": "MCO", "ISO_N3": 492.000000 }, "geometry": { "type": "Point", "coordinates": [ 7.398764, 43.938198 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SMR", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 220, "SOVEREIGNT": "San Marino", "SOV_A3": "SMR", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "San Marino", "ADM0_A3": "SMR", "GEOU_DIF": 0.000000, "GEOUNIT": "San Marino", "GU_A3": "SMR", "SU_DIF": 0.000000, "SUBUNIT": "San Marino", "SU_A3": "SMR", "NAME": "San Marino", "ABBREV": "S.M.", "POSTAL": "RSM", "NAME_FORMA": "Republic of San Marino", "TERR_": "", "NAME_SORT": "San Marino", "MAP_COLOR": 6.000000, "POP_EST": 30324.000000, "GDP_MD_EST": 1662.000000, "FIPS_10_": 0.000000, "ISO_A2": "SM", "ISO_A3": "SMR", "ISO_N3": 674.000000 }, "geometry": { "type": "Point", "coordinates": [ 12.442168, 44.128982 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MAF", "ScaleRank": 3, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 42, "SOVEREIGNT": "France", "SOV_A3": "FR1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Saint Martin", "ADM0_A3": "MAF", "GEOU_DIF": 0.000000, "GEOUNIT": "Saint Martin", "GU_A3": "MAF", "SU_DIF": 0.000000, "SUBUNIT": "Saint Martin", "SU_A3": "MAF", "NAME": "St. Martin", "ABBREV": "St. M.", "POSTAL": "MF", "NAME_FORMA": "", "TERR_": "Fr.", "NAME_SORT": "Saint Martin", "MAP_COLOR": 11.000000, "POP_EST": 29820.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": 0.000000, "ISO_A2": "MF", "ISO_A3": "MAF", "ISO_N3": 663.000000 }, "geometry": { "type": "Point", "coordinates": [ -63.054270, 18.191152 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "GIB", "ScaleRank": 5, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 55, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Gibraltar", "ADM0_A3": "GIB", "GEOU_DIF": 0.000000, "GEOUNIT": "Gibraltar", "GU_A3": "GIB", "SU_DIF": 0.000000, "SUBUNIT": "Gibraltar", "SU_A3": "GIB", "NAME": "Gibraltar", "ABBREV": "Gib.", "POSTAL": "GI", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "Gibraltar", "MAP_COLOR": 3.000000, "POP_EST": 28034.000000, "GDP_MD_EST": 1066.000000, "FIPS_10_": 0.000000, "ISO_A2": "GI", "ISO_A3": "GIB", "ISO_N3": 292.000000 }, "geometry": { "type": "Point", "coordinates": [ -5.371521, 36.312646 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ALD", "ScaleRank": 1, "LabelRank": 7, "FeatureCla": "Adm-0 country", "OID_": 16, "SOVEREIGNT": "Finland", "SOV_A3": "FI1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Country", "ADMIN": "Aland", "ADM0_A3": "ALD", "GEOU_DIF": 0.000000, "GEOUNIT": "Aland", "GU_A3": "ALD", "SU_DIF": 0.000000, "SUBUNIT": "Aland", "SU_A3": "ALD", "NAME": "Aland", "ABBREV": "Aland", "POSTAL": "AI", "NAME_FORMA": "Åland Islands", "TERR_": "Fin.", "NAME_SORT": "Aland", "MAP_COLOR": 6.000000, "POP_EST": 27153.000000, "GDP_MD_EST": -99.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "ALA", "ISO_N3": 248.000000 }, "geometry": { "type": "Point", "coordinates": [ 20.036981, 60.373280 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "VGB", "ScaleRank": 3, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 51, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "British Virgin Islands", "ADM0_A3": "VGB", "GEOU_DIF": 0.000000, "GEOUNIT": "British Virgin Islands", "GU_A3": "VGB", "SU_DIF": 0.000000, "SUBUNIT": "British Virgin Islands", "SU_A3": "VGB", "NAME": "British Virgin Is.", "ABBREV": "V.I. (Br.)", "POSTAL": "VG", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "British Virgin Islands", "MAP_COLOR": 3.000000, "POP_EST": 24491.000000, "GDP_MD_EST": 853.400000, "FIPS_10_": 0.000000, "ISO_A2": "VG", "ISO_A3": "VGB", "ISO_N3": 92.000000 }, "geometry": { "type": "Point", "coordinates": [ -64.498845, 18.630435 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TCA", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 60, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Turks and Caicos Islands", "ADM0_A3": "TCA", "GEOU_DIF": 0.000000, "GEOUNIT": "Turks and Caicos Islands", "GU_A3": "TCA", "SU_DIF": 0.000000, "SUBUNIT": "Turks and Caicos Islands", "SU_A3": "TCA", "NAME": "Turks and Caicos Is.", "ABBREV": "T.C. Is.", "POSTAL": "TC", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "Turks and Caicos Islands", "MAP_COLOR": 3.000000, "POP_EST": 22942.000000, "GDP_MD_EST": 216.000000, "FIPS_10_": 0.000000, "ISO_A2": "TC", "ISO_A3": "TCA", "ISO_N3": 796.000000 }, "geometry": { "type": "Point", "coordinates": [ -71.872736, 21.912945 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PLW", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 202, "SOVEREIGNT": "Palau", "SOV_A3": "PLW", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Palau", "ADM0_A3": "PLW", "GEOU_DIF": 0.000000, "GEOUNIT": "Palau", "GU_A3": "PLW", "SU_DIF": 0.000000, "SUBUNIT": "Palau", "SU_A3": "PLW", "NAME": "Palau", "ABBREV": "Palau", "POSTAL": "PW", "NAME_FORMA": "Republic of Palau", "TERR_": "", "NAME_SORT": "Palau", "MAP_COLOR": 12.000000, "POP_EST": 20796.000000, "GDP_MD_EST": 164.000000, "FIPS_10_": 0.000000, "ISO_A2": "PW", "ISO_A3": "PLW", "ISO_N3": 585.000000 }, "geometry": { "type": "Point", "coordinates": [ 134.339601, 7.223859 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ESB", "ScaleRank": 3, "LabelRank": 3, "FeatureCla": "Adm-0 country", "OID_": 53, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Dhekelia Sovereign Base Area", "ADM0_A3": "ESB", "GEOU_DIF": 0.000000, "GEOUNIT": "Dhekelia Sovereign Base Area", "GU_A3": "ESB", "SU_DIF": 0.000000, "SUBUNIT": "Dhekelia Sovereign Base Area", "SU_A3": "ESB", "NAME": "Dhekelia", "ABBREV": "Dhek.", "POSTAL": "DH", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "Dhekelia Soverign Base Area", "MAP_COLOR": 3.000000, "POP_EST": 15700.000000, "GDP_MD_EST": -99.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 33.781200, 35.187039 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "WSB", "ScaleRank": 3, "LabelRank": 3, "FeatureCla": "Adm-0 country", "OID_": 47, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Akrotiri Sovereign Base Area", "ADM0_A3": "WSB", "GEOU_DIF": 0.000000, "GEOUNIT": "Akrotiri Sovereign Base Area", "GU_A3": "WSB", "SU_DIF": 0.000000, "SUBUNIT": "Akrotiri Sovereign Base Area", "SU_A3": "WSB", "NAME": "Akrotiri", "ABBREV": "Akr.", "POSTAL": "AK", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "Akrotiri Sovereign Base Area", "MAP_COLOR": 3.000000, "POP_EST": 15700.000000, "GDP_MD_EST": -99.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 32.974437, 34.785318 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "WLF", "ScaleRank": 3, "LabelRank": 3, "FeatureCla": "Adm-0 country", "OID_": 44, "SOVEREIGNT": "France", "SOV_A3": "FR1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Wallis and Futuna", "ADM0_A3": "WLF", "GEOU_DIF": 0.000000, "GEOUNIT": "Wallis and Futuna", "GU_A3": "WLF", "SU_DIF": 0.000000, "SUBUNIT": "Wallis and Futuna", "SU_A3": "WLF", "NAME": "Wallis and Futuna", "ABBREV": "Wlf.", "POSTAL": "WF", "NAME_FORMA": "Territory of the Wallis and Futuna Islands", "TERR_": "Fr.", "NAME_SORT": "Wallis and Futuna", "MAP_COLOR": 11.000000, "POP_EST": 15289.000000, "GDP_MD_EST": 60.000000, "FIPS_10_": 0.000000, "ISO_A2": "WF", "ISO_A3": "WLF", "ISO_N3": 876.000000 }, "geometry": { "type": "Point", "coordinates": [ -177.231113, -13.938507 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "AIA", "ScaleRank": 1, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 48, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Anguilla", "ADM0_A3": "AIA", "GEOU_DIF": 0.000000, "GEOUNIT": "Anguilla", "GU_A3": "AIA", "SU_DIF": 0.000000, "SUBUNIT": "Anguilla", "SU_A3": "AIA", "NAME": "Anguilla", "ABBREV": "Ang.", "POSTAL": "AI", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "Anguilla", "MAP_COLOR": 3.000000, "POP_EST": 14436.000000, "GDP_MD_EST": 108.900000, "FIPS_10_": 0.000000, "ISO_A2": "AI", "ISO_A3": "AIA", "ISO_N3": 660.000000 }, "geometry": { "type": "Point", "coordinates": [ -63.060817, 18.340227 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NRU", "ScaleRank": 3, "LabelRank": 3, "FeatureCla": "Adm-0 country", "OID_": 192, "SOVEREIGNT": "Nauru", "SOV_A3": "NRU", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Nauru", "ADM0_A3": "NRU", "GEOU_DIF": 0.000000, "GEOUNIT": "Nauru", "GU_A3": "NRU", "SU_DIF": 0.000000, "SUBUNIT": "Nauru", "SU_A3": "NRU", "NAME": "Nauru", "ABBREV": "Nauru", "POSTAL": "NR", "NAME_FORMA": "Republic of Nauru", "TERR_": "", "NAME_SORT": "Nauru", "MAP_COLOR": 9.000000, "POP_EST": 14019.000000, "GDP_MD_EST": 60.000000, "FIPS_10_": 0.000000, "ISO_A2": "NR", "ISO_A3": "NRU", "ISO_N3": 520.000000 }, "geometry": { "type": "Point", "coordinates": [ 166.933309, -0.524486 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "TUV", "ScaleRank": 5, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 252, "SOVEREIGNT": "Tuvalu", "SOV_A3": "TUV", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Tuvalu", "ADM0_A3": "TUV", "GEOU_DIF": 0.000000, "GEOUNIT": "Tuvalu", "GU_A3": "TUV", "SU_DIF": 0.000000, "SUBUNIT": "Tuvalu", "SU_A3": "TUV", "NAME": "Tuvalu", "ABBREV": "Tuv.", "POSTAL": "TV", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Tuvalu", "MAP_COLOR": 5.000000, "POP_EST": 12373.000000, "GDP_MD_EST": 14.940000, "FIPS_10_": 0.000000, "ISO_A2": "TV", "ISO_A3": "TUV", "ISO_N3": 798.000000 }, "geometry": { "type": "Point", "coordinates": [ 178.522079, -7.815274 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "COK", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 45, "SOVEREIGNT": "New Zealand", "SOV_A3": "NZ1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Cook Islands", "ADM0_A3": "COK", "GEOU_DIF": 0.000000, "GEOUNIT": "Cook Islands", "GU_A3": "COK", "SU_DIF": 0.000000, "SUBUNIT": "Cook Islands", "SU_A3": "COK", "NAME": "Cook Is.", "ABBREV": "Cook Is.", "POSTAL": "CK", "NAME_FORMA": "", "TERR_": "Assoc. with N.Z.", "NAME_SORT": "Cook Islands", "MAP_COLOR": 4.000000, "POP_EST": 11870.000000, "GDP_MD_EST": 183.200000, "FIPS_10_": 0.000000, "ISO_A2": "CK", "ISO_A3": "COK", "ISO_N3": 184.000000 }, "geometry": { "type": "Point", "coordinates": [ -158.779617, -20.020969 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SHN", "ScaleRank": 3, "LabelRank": 3, "FeatureCla": "Adm-0 country", "OID_": 58, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Saint Helena", "ADM0_A3": "SHN", "GEOU_DIF": 0.000000, "GEOUNIT": "Saint Helena", "GU_A3": "SHN", "SU_DIF": 0.000000, "SUBUNIT": "Saint Helena", "SU_A3": "SHN", "NAME": "Saint Helena", "ABBREV": "St.H.", "POSTAL": "SH", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "Saint Helena", "MAP_COLOR": 3.000000, "POP_EST": 7637.000000, "GDP_MD_EST": 18.000000, "FIPS_10_": 0.000000, "ISO_A2": "SH", "ISO_A3": "SHN", "ISO_N3": 654.000000 }, "geometry": { "type": "Point", "coordinates": [ -10.199231, -27.301569 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "BLM", "ScaleRank": 3, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 41, "SOVEREIGNT": "France", "SOV_A3": "FR1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Saint Barthelemy", "ADM0_A3": "BLM", "GEOU_DIF": 0.000000, "GEOUNIT": "Saint Barthelemy", "GU_A3": "BLM", "SU_DIF": 0.000000, "SUBUNIT": "Saint Barthelemy", "SU_A3": "BLM", "NAME": "St. Barthelemy", "ABBREV": "St. B.", "POSTAL": "BL", "NAME_FORMA": "", "TERR_": "Fr.", "NAME_SORT": "Saint Barthelemy", "MAP_COLOR": 11.000000, "POP_EST": 7448.000000, "GDP_MD_EST": 255.000000, "FIPS_10_": 0.000000, "ISO_A2": "BL", "ISO_A3": "BLM", "ISO_N3": 652.000000 }, "geometry": { "type": "Point", "coordinates": [ -62.831877, 18.018312 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SPM", "ScaleRank": 3, "LabelRank": 3, "FeatureCla": "Adm-0 country", "OID_": 43, "SOVEREIGNT": "France", "SOV_A3": "FR1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Saint Pierre and Miquelon", "ADM0_A3": "SPM", "GEOU_DIF": 0.000000, "GEOUNIT": "Saint Pierre and Miquelon", "GU_A3": "SPM", "SU_DIF": 0.000000, "SUBUNIT": "Saint Pierre and Miquelon", "SU_A3": "SPM", "NAME": "St. Pierre and Miquelon", "ABBREV": "St. P.M.", "POSTAL": "PM", "NAME_FORMA": "Territorial Collectivity of Saint Pierre and Miquelon", "TERR_": "Fr.", "NAME_SORT": "Saint Pierre and Miquelon", "MAP_COLOR": 11.000000, "POP_EST": 7051.000000, "GDP_MD_EST": 48.300000, "FIPS_10_": 0.000000, "ISO_A2": "PM", "ISO_A3": "SPM", "ISO_N3": 666.000000 }, "geometry": { "type": "Point", "coordinates": [ -56.307153, 47.122370 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KAS", "ScaleRank": 0, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 71, "SOVEREIGNT": "Kashmir", "SOV_A3": "KAS", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Indeterminate", "ADMIN": "Siachen Glacier", "ADM0_A3": "KAS", "GEOU_DIF": 0.000000, "GEOUNIT": "Siachen Glacier", "GU_A3": "KAS", "SU_DIF": 0.000000, "SUBUNIT": "Siachen Glacier", "SU_A3": "KAS", "NAME": "", "ABBREV": "", "POSTAL": "", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Kashmir", "MAP_COLOR": 0.000000, "POP_EST": 6000.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 77.180081, 35.573363 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "MSR", "ScaleRank": 3, "LabelRank": 8, "FeatureCla": "Adm-0 country", "OID_": 56, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Montserrat", "ADM0_A3": "MSR", "GEOU_DIF": 0.000000, "GEOUNIT": "Montserrat", "GU_A3": "MSR", "SU_DIF": 0.000000, "SUBUNIT": "Montserrat", "SU_A3": "MSR", "NAME": "Montserrat", "ABBREV": "Monts.", "POSTAL": "MS", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "Montserrat", "MAP_COLOR": 3.000000, "POP_EST": 5097.000000, "GDP_MD_EST": 29.000000, "FIPS_10_": 0.000000, "ISO_A2": "MS", "ISO_A3": "MSR", "ISO_N3": 500.000000 }, "geometry": { "type": "Point", "coordinates": [ -62.186671, 16.843772 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ATA", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 69, "SOVEREIGNT": "Antarctica", "SOV_A3": "ATA", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Indeterminate", "ADMIN": "Antarctica", "ADM0_A3": "ATA", "GEOU_DIF": 0.000000, "GEOUNIT": "Antarctica", "GU_A3": "ATA", "SU_DIF": 0.000000, "SUBUNIT": "Antarctica", "SU_A3": "ATA", "NAME": "Antarctica", "ABBREV": "Ant.", "POSTAL": "AQ", "NAME_FORMA": "", "TERR_": "Multiple claims held in abeyance", "NAME_SORT": "Antarctica", "MAP_COLOR": 0.000000, "POP_EST": 4000.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": 0.000000, "ISO_A2": "AQ", "ISO_A3": "ATA", "ISO_N3": 10.000000 }, "geometry": { "type": "Point", "coordinates": [ 19.317440, -80.455499 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "IOA", "ScaleRank": 5, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 34, "SOVEREIGNT": "Australia", "SOV_A3": "AU1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Indian Ocean Territories", "ADM0_A3": "IOA", "GEOU_DIF": 0.000000, "GEOUNIT": "Indian Ocean Territories", "GU_A3": "IOA", "SU_DIF": 0.000000, "SUBUNIT": "Indian Ocean Territories", "SU_A3": "IOA", "NAME": "Indian Ocean Ter.", "ABBREV": "Ind. Oc. Ter.", "POSTAL": "IOT", "NAME_FORMA": "", "TERR_": "Auz.", "NAME_SORT": "Indian Ocean Territories", "MAP_COLOR": 7.000000, "POP_EST": 4000.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 104.616008, -10.763939 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "IOT", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 50, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "British Indian Ocean Territory", "ADM0_A3": "IOT", "GEOU_DIF": 0.000000, "GEOUNIT": "British Indian Ocean Territory", "GU_A3": "IOT", "SU_DIF": 0.000000, "SUBUNIT": "British Indian Ocean Territory", "SU_A3": "IOT", "NAME": "Br. Indian Ocean Ter.", "ABBREV": "I.O.T.", "POSTAL": "IO", "NAME_FORMA": "", "TERR_": "U.K.", "NAME_SORT": "British Indian Ocean Territory", "MAP_COLOR": 3.000000, "POP_EST": 4000.000000, "GDP_MD_EST": -99.000000, "FIPS_10_": 0.000000, "ISO_A2": "IO", "ISO_A3": "IOT", "ISO_N3": 86.000000 }, "geometry": { "type": "Point", "coordinates": [ 72.299568, -7.192809 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "FLK", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 54, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Falkland Islands", "ADM0_A3": "FLK", "GEOU_DIF": 0.000000, "GEOUNIT": "Falkland Islands", "GU_A3": "FLK", "SU_DIF": 0.000000, "SUBUNIT": "Falkland Islands", "SU_A3": "FLK", "NAME": "Falkland Is.", "ABBREV": "Flk. Is.", "POSTAL": "FK", "NAME_FORMA": "Falkland Islands (Islas Malvinas)", "TERR_": "U.K.", "NAME_SORT": "Falkland Islands", "MAP_COLOR": 3.000000, "POP_EST": 3140.000000, "GDP_MD_EST": 105.100000, "FIPS_10_": 0.000000, "ISO_A2": "FK", "ISO_A3": "FLK", "ISO_N3": 238.000000 }, "geometry": { "type": "Point", "coordinates": [ -59.372962, -51.921150 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NFK", "ScaleRank": 5, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 35, "SOVEREIGNT": "Australia", "SOV_A3": "AU1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Norfolk Island", "ADM0_A3": "NFK", "GEOU_DIF": 0.000000, "GEOUNIT": "Norfolk Island", "GU_A3": "NFK", "SU_DIF": 0.000000, "SUBUNIT": "Norfolk Island", "SU_A3": "NFK", "NAME": "Norfolk Island", "ABBREV": "Nfk. I.", "POSTAL": "NF", "NAME_FORMA": "Territory of Norfolk Island", "TERR_": "Auz.", "NAME_SORT": "Norfolk Island", "MAP_COLOR": 7.000000, "POP_EST": 2141.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": 0.000000, "ISO_A2": "NF", "ISO_A3": "NFK", "ISO_N3": 574.000000 }, "geometry": { "type": "Point", "coordinates": [ 167.955403, -29.198668 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "NIU", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 46, "SOVEREIGNT": "New Zealand", "SOV_A3": "NZ1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Niue", "ADM0_A3": "NIU", "GEOU_DIF": 0.000000, "GEOUNIT": "Niue", "GU_A3": "NIU", "SU_DIF": 0.000000, "SUBUNIT": "Niue", "SU_A3": "NIU", "NAME": "Niue", "ABBREV": "Niue", "POSTAL": "NU", "NAME_FORMA": "", "TERR_": "Assoc. with N.Z.", "NAME_SORT": "Niue", "MAP_COLOR": 4.000000, "POP_EST": 1398.000000, "GDP_MD_EST": 10.010000, "FIPS_10_": 0.000000, "ISO_A2": "NU", "ISO_A3": "NIU", "ISO_N3": 570.000000 }, "geometry": { "type": "Point", "coordinates": [ -169.868365, -19.168116 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "VAT", "ScaleRank": 5, "LabelRank": 16, "FeatureCla": "Adm-0 country", "OID_": 260, "SOVEREIGNT": "Vatican", "SOV_A3": "VAT", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Sovereign country", "ADMIN": "Vatican", "ADM0_A3": "VAT", "GEOU_DIF": 0.000000, "GEOUNIT": "Vatican", "GU_A3": "VAT", "SU_DIF": 0.000000, "SUBUNIT": "Vatican", "SU_A3": "VAT", "NAME": "Vatican", "ABBREV": "Vat.", "POSTAL": "V", "NAME_FORMA": "State of the Vatican City", "TERR_": "", "NAME_SORT": "Vatican (Holy Sea)", "MAP_COLOR": 2.000000, "POP_EST": 826.000000, "GDP_MD_EST": -99.000000, "FIPS_10_": 0.000000, "ISO_A2": "VA", "ISO_A3": "VAT", "ISO_N3": 336.000000 }, "geometry": { "type": "Point", "coordinates": [ 12.451551, 42.095101 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ATF", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 39, "SOVEREIGNT": "France", "SOV_A3": "FR1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "French Southern and Antarctic Lands", "ADM0_A3": "ATF", "GEOU_DIF": 0.000000, "GEOUNIT": "French Southern and Antarctic Lands", "GU_A3": "ATF", "SU_DIF": 0.000000, "SUBUNIT": "French Southern and Antarctic Lands", "SU_A3": "ATF", "NAME": "Fr. S. and Antarctic Lands", "ABBREV": "Fr. S.A.L.", "POSTAL": "TF", "NAME_FORMA": "Territory of the French Southern and Antarctic Lands", "TERR_": "Fr.", "NAME_SORT": "French Southern and Antarctic Lands", "MAP_COLOR": 11.000000, "POP_EST": 140.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": 0.000000, "ISO_A2": "TF", "ISO_A3": "ATF", "ISO_N3": 260.000000 }, "geometry": { "type": "Point", "coordinates": [ 69.028215, -49.312017 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "PCN", "ScaleRank": 3, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 57, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Pitcairn Islands", "ADM0_A3": "PCN", "GEOU_DIF": 0.000000, "GEOUNIT": "Pitcairn Islands", "GU_A3": "PCN", "SU_DIF": 0.000000, "SUBUNIT": "Pitcairn Islands", "SU_A3": "PCN", "NAME": "Pitcairn Is.", "ABBREV": "Pit. Is.", "POSTAL": "PN", "NAME_FORMA": "Pitcairn, Henderson, Ducie and Oeno Islands", "TERR_": "U.K.", "NAME_SORT": "Pitcairn Islands", "MAP_COLOR": 3.000000, "POP_EST": 48.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": 0.000000, "ISO_A2": "PN", "ISO_A3": "PCN", "ISO_N3": 612.000000 }, "geometry": { "type": "Point", "coordinates": [ -128.479717, -24.558275 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SGS", "ScaleRank": 3, "LabelRank": 3, "FeatureCla": "Adm-0 country", "OID_": 59, "SOVEREIGNT": "United Kingdom", "SOV_A3": "GB1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "South Georgia and South Sandwich Islands", "ADM0_A3": "SGS", "GEOU_DIF": 0.000000, "GEOUNIT": "South Georgia and South Sandwich Islands", "GU_A3": "SGS", "SU_DIF": 0.000000, "SUBUNIT": "South Georgia and South Sandwich Islands", "SU_A3": "SGS", "NAME": "S. Geo. and S. Sandw. Is.", "ABBREV": "S.G. S.S. Is.", "POSTAL": "GS", "NAME_FORMA": "South Georgia and South Sandwich Islands", "TERR_": "U.K.", "NAME_SORT": "South Georgia and the Islands", "MAP_COLOR": 3.000000, "POP_EST": 10.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": 0.000000, "ISO_A2": "GS", "ISO_A3": "SGS", "ISO_N3": 239.000000 }, "geometry": { "type": "Point", "coordinates": [ -35.816253, -54.909134 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CSI", "ScaleRank": 5, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 32, "SOVEREIGNT": "Australia", "SOV_A3": "AU1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Coral Sea Islands", "ADM0_A3": "CSI", "GEOU_DIF": 0.000000, "GEOUNIT": "Coral Sea Islands", "GU_A3": "CSI", "SU_DIF": 0.000000, "SUBUNIT": "Coral Sea Islands", "SU_A3": "CSI", "NAME": "Coral Sea Is.", "ABBREV": "C.S.I.", "POSTAL": "CS", "NAME_FORMA": "Coral Sea Islands Territory", "TERR_": "", "NAME_SORT": "Coral Sea Islands", "MAP_COLOR": 7.000000, "POP_EST": 4.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": 0.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 151.290033, -18.676295 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "ATC", "ScaleRank": 5, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 31, "SOVEREIGNT": "Australia", "SOV_A3": "AU1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Ashmore and Cartier Islands", "ADM0_A3": "ATC", "GEOU_DIF": 0.000000, "GEOUNIT": "Ashmore and Cartier Islands", "GU_A3": "ATC", "SU_DIF": 0.000000, "SUBUNIT": "Ashmore and Cartier Islands", "SU_A3": "ATC", "NAME": "Ashmore and Cartier Is.", "ABBREV": "A.C.Is.", "POSTAL": "AU", "NAME_FORMA": "Territory of Ashmore and Cartier Islands", "TERR_": "", "NAME_SORT": "Ashmore and Cartier Islands", "MAP_COLOR": 7.000000, "POP_EST": 0.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": 0.000000, "ISO_A2": "AU", "ISO_A3": "AUS", "ISO_N3": 36.000000 }, "geometry": { "type": "Point", "coordinates": [ 123.585690, -12.513680 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CLP", "ScaleRank": 5, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 37, "SOVEREIGNT": "France", "SOV_A3": "FR1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Clipperton Island", "ADM0_A3": "CLP", "GEOU_DIF": 0.000000, "GEOUNIT": "Clipperton Island", "GU_A3": "CLP", "SU_DIF": 0.000000, "SUBUNIT": "Clipperton Island", "SU_A3": "CLP", "NAME": "Clipperton I.", "ABBREV": "Clp. I.", "POSTAL": "CI", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Clipperton Island", "MAP_COLOR": 11.000000, "POP_EST": 0.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": 0.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ -109.220677, 10.365256 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "CNM", "ScaleRank": 0, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 70, "SOVEREIGNT": "Cyprus No Mans Area", "SOV_A3": "CNM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Indeterminate", "ADMIN": "Cyprus No Mans Area", "ADM0_A3": "CNM", "GEOU_DIF": 0.000000, "GEOUNIT": "Cyprus No Mans Area", "GU_A3": "CNM", "SU_DIF": 0.000000, "SUBUNIT": "Cyprus No Mans Area", "SU_A3": "CNM", "NAME": "", "ABBREV": "", "POSTAL": "", "NAME_FORMA": "Cyprus No Mans Land", "TERR_": "", "NAME_SORT": "Cyprus No Mans Area", "MAP_COLOR": 0.000000, "POP_EST": 0.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 33.291623, 35.323937 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "HMD", "ScaleRank": 5, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 33, "SOVEREIGNT": "Australia", "SOV_A3": "AU1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "Heard Island and McDonald Islands", "ADM0_A3": "HMD", "GEOU_DIF": 0.000000, "GEOUNIT": "Heard Island and McDonald Islands", "GU_A3": "HMD", "SU_DIF": 0.000000, "SUBUNIT": "Heard Island and McDonald Islands", "SU_A3": "HMD", "NAME": "Heard I. and McDonald Is.", "ABBREV": "H.M.Is.", "POSRT": "Heard Island and McDonald Islands", "MAP_COLOR": 7.000000, "POP_EST": 0.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": 0.000000, "ISO_A2": "HM", "ISO_A3": "HMD", "ISO_N3": 334.000000 }, "geometry": { "type": "Point", "coordinates": [ 73.505709, -53.273413 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "KNM", "ScaleRank": 1, "LabelRank": 2, "FeatureCla": "Adm-0 country", "OID_": 72, "SOVEREIGNT": "Korea No Mans Area", "SOV_A3": "KNM", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Indeterminate", "ADMIN": "Korea No Mans Area", "ADM0_A3": "KNM", "GEOU_DIF": 0.000000, "GEOUNIT": "Korea No Mans Area", "GU_A3": "KNM", "SU_DIF": 0.000000, "SUBUNIT": "Korea No Mans Area", "SU_A3": "KNM", "NAME": "", "ABBREV": "", "POSTAL": "", "NAME_FORMA": "", "TERR_": "", "NAME_SORT": "Korea No Mans Area", "MAP_COLOR": 0.000000, "POP_EST": 0.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ 127.492752, 38.453589 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "UMI", "ScaleRank": 4, "LabelRank": 6, "FeatureCla": "Adm-0 country", "OID_": 65, "SOVEREIGNT": "United States of America", "SOV_A3": "US1", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Dependency", "ADMIN": "United States Minor Outlying Islands", "ADM0_A3": "UMI", "GEOU_DIF": 0.000000, "GEOUNIT": "United States Minor Outlying Islands", "GU_A3": "UMI", "SU_DIF": 0.000000, "SUBUNIT": "United States Minor Outlying Islands", "SU_A3": "UMI", "NAME": "U.S. Minor Outlying Is.", "ABBREV": "U.S. MOI", "POSTAL": "UM", "NAME_FORMA": "", "TERR_": "U.S.A.", "NAME_SORT": "United States Minor Outlying Islands", "MAP_COLOR": 1.000000, "POP_EST": 0.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": -99.000000, "ISO_A2": "UM", "ISO_A3": "UMI", "ISO_N3": 581.000000 }, "geometry": { "type": "Point", "coordinates": [ -96.510858, 14.672031 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "SAH", "ScaleRank": 1, "LabelRank": 5, "FeatureCla": "Adm-0 country", "OID_": 68, "SOVEREIGNT": "Western Sahara", "SOV_A3": "SAH", "ADM0_DIF": 0.000000, "LEVEL": 2.000000, "TYPE": "Disputed", "ADMIN": "Western Sahara", "ADM0_A3": "SAH", "GEOU_DIF": 0.000000, "GEOUNIT": "Western Sahara", "GU_A3": "SAH", "SU_DIF": 0.000000, "SUBUNIT": "Western Sahara", "SU_A3": "SAH", "NAME": "W. Sahara", "ABBREV": "W. Sah.", "POSTAL": "WS", "NAME_FORMA": "", "TERR_": "Disputed", "NAME_SORT": "Western Sahara", "MAP_COLOR": 4.000000, "POP_EST": -99.000000, "GDP_MD_EST": 900.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ -12.885107, 23.995111 ] } }
,
{ "type": "Feature", "properties": { "ne_10m_adm": "USG", "ScaleRank": 3, "LabelRank": 10, "FeatureCla": "Adm-0 country", "OID_": 76, "SOVEREIGNT": "Cuba", "SOV_A3": "USG", "ADM0_DIF": 1.000000, "LEVEL": 2.000000, "TYPE": "Lease", "ADMIN": "US Naval Base Guantanamo Bay", "ADM0_A3": "USG", "GEOU_DIF": 0.000000, "GEOUNIT": "US Naval Base Guantanamo Bay", "GU_A3": "USG", "SU_DIF": 0.000000, "SUBUNIT": "US Naval Base Guantanamo Bay", "SU_A3": "USG", "NAME": "Guantanamo Bay USNB", "ABBREV": "G. Bay", "POSTAL": "GB", "NAME_FORMA": "US Naval Base Guantanamo Bay", "TERR_": "Leased by U.S.A. from Cuba", "NAME_SORT": "Guantanamo Bay, US Naval Base", "MAP_COLOR": 4.000000, "POP_EST": -99.000000, "GDP_MD_EST": 0.000000, "FIPS_10_": -99.000000, "ISO_A2": "-99", "ISO_A3": "-99", "ISO_N3": -99.000000 }, "geometry": { "type": "Point", "coordinates": [ -75.153294, 20.045985 ] } }

]
};

/*
{"type:":"FeatureCollection", "features":[
    {"type":"Feature", "properties":{"code":"AD", "isoNumeric:":"020", "isoAlpha3":"AND", "fipsCode":"AN", "continentName":"Europe", "capital":"Andorra la Vella", "areaInSqKm":468, "population":84000, "currencyCode":"EUR", "languages":["ca"], "geoNameId":"3041565", "direction":{"west":1.4071867141112762, "east":42.65604389629997, "north":1.7865427778319827, "south":42.42849259876837}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["42.5000", "1.5000"]}},
    {"type":"Feature", "properties":{"code":"AE", "isoNumeric:":"784", "isoAlpha3":"ARE", "fipsCode":"AE", "continentName":"Asia", "capital":"Abu Dhabi", "areaInSqKm":82880, "population":4975593, "currencyCode":"AED", "languages":["ar-AE", "fa", "en", "hi", "ur"], "geoNameId":"290557", "direction":{"west":51.58332824707031, "east":26.08415985107422, "north":56.38166046142578, "south":22.633329391479492}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["24.0000", "54.0000"]}},
    {"type":"Feature", "properties":{"code":"AF", "isoNumeric:":"004", "isoAlpha3":"AFG", "fipsCode":"AF", "continentName":"Asia", "capital":"Kabul", "areaInSqKm":647500, "population":29121286, "currencyCode":"AFN", "languages":["fa-AF", "ps", "uz-AF", "tk"], "geoNameId":"1149361", "direction":{"west":60.478443, "east":38.483418, "north":74.879448, "south":29.377472}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["33.0000", "65.0000"]}},
    {"type":"Feature", "properties":{"code":"AG", "isoNumeric:":"028", "isoAlpha3":"ATG", "fipsCode":"AC", "continentName":"North America", "capital":"St. John's", "areaInSqKm":443, "population":86754, "currencyCode":"XCD", "languages":["en-AG"], "geoNameId":"3576396", "direction":{"west":-61.906425, "east":17.729387, "north":-61.672421, "south":16.996979}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["17.0500", "-61.8000"]}},
    {"type":"Feature", "properties":{"code":"AI", "isoNumeric:":"660", "isoAlpha3":"AIA", "fipsCode":"AV", "continentName":"North America", "capital":"The Valley", "areaInSqKm":102, "population":13254, "currencyCode":"XCD", "languages":["en-AI"], "geoNameId":"3573511", "direction":{"west":-63.172901, "east":18.283424, "north":-62.971359, "south":18.166815}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["18.2500", "-63.1667"]}},
    {"type":"Feature", "properties":{"code":"AL", "isoNumeric:":"008", "isoAlpha3":"ALB", "fipsCode":"AL", "continentName":"Europe", "capital":"Tirana", "areaInSqKm":28748, "population":2986952, "currencyCode":"ALL", "languages":["sq", "el"], "geoNameId":"783754", "direction":{"west":19.293972, "east":42.665611, "north":21.068472, "south":39.648361}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["41.0000", "20.0000"]}},
    {"type":"Feature", "properties":{"code":"AM", "isoNumeric:":"051", "isoAlpha3":"ARM", "fipsCode":"AM", "continentName":"Asia", "capital":"Yerevan", "areaInSqKm":29800, "population":2968000, "currencyCode":"AMD", "languages":["hy"], "geoNameId":"174982", "direction":{"west":43.44978, "east":41.301834, "north":46.772435045159995, "south":38.830528}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["40.0000", "45.0000"]}},
    {"type":"Feature", "properties":{"code":"AO", "isoNumeric:":"024", "isoAlpha3":"AGO", "fipsCode":"AO", "continentName":"Africa", "capital":"Luanda", "areaInSqKm":1246700, "population":13068161, "currencyCode":"AOA", "languages":["pt-AO"], "geoNameId":"3351879", "direction":{"west":11.679219, "east":-4.376826, "north":24.082119, "south":-18.042076}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-12.5000", "18.5000"]}},
    {"type":"Feature", "properties":{"code":"AQ", "isoNumeric:":"010", "isoAlpha3":"ATA", "fipsCode":"AY", "continentName":"Antarctica", "capital":"", "areaInSqKm":14000000, "population":0, "currencyCode":"", "languages":[""], "geoNameId":"6697173", "direction":{"west":-179.9999, "east":-60.515533, "north":179.9999, "south":-89.9999}, "continent":"AN"}, "geometry":{"type":"Point", "coordinates":["-90.0000", "0.0000"]}},
    {"type":"Feature", "properties":{"code":"AR", "isoNumeric:":"032", "isoAlpha3":"ARG", "fipsCode":"AR", "continentName":"South America", "capital":"Buenos Aires", "areaInSqKm":2766890, "population":41343201, "currencyCode":"ARS", "languages":["es-AR", "en", "it", "de", "fr", "gn"], "geoNameId":"3865483", "direction":{"west":-73.58297, "east":-21.781277, "north":-53.591835, "south":-55.061314}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["-34.0000", "-64.0000"]}},
    {"type":"Feature", "properties":{"code":"AS", "isoNumeric:":"016", "isoAlpha3":"ASM", "fipsCode":"AQ", "continentName":"Oceania", "capital":"Pago Pago", "areaInSqKm":199, "population":57881, "currencyCode":"USD", "languages":["en-AS", "sm", "to"], "geoNameId":"5880801", "direction":{"west":-171.091888, "east":-11.0497, "north":-169.416077, "south":-14.382478}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-14.3333", "-170.0000"]}},
    {"type":"Feature", "properties":{"code":"AT", "isoNumeric:":"040", "isoAlpha3":"AUT", "fipsCode":"AU", "continentName":"Europe", "capital":"Vienna", "areaInSqKm":83858, "population":8205000, "currencyCode":"EUR", "languages":["de-AT", "hr", "hu", "sl"], "geoNameId":"2782113", "direction":{"west":9.535916, "east":49.017056, "north":17.162722, "south":46.378029}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["47.3333", "13.3333"]}},
    {"type":"Feature", "properties":{"code":"AU", "isoNumeric:":"036", "isoAlpha3":"AUS", "fipsCode":"AS", "continentName":"Oceania", "capital":"Canberra", "areaInSqKm":7686850, "population":21515754, "currencyCode":"AUD", "languages":["en-AU"], "geoNameId":"2077456", "direction":{"west":112.911057, "east":-10.062805, "north":153.639252, "south":-43.64397}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-27.0000", "133.0000"]}},
    {"type":"Feature", "properties":{"code":"AW", "isoNumeric:":"533", "isoAlpha3":"ABW", "fipsCode":"AA", "continentName":"North America", "capital":"Oranjestad", "areaInSqKm":193, "population":71566, "currencyCode":"AWG", "languages":["nl-AW", "es", "en"], "geoNameId":"3577279", "direction":{"west":-70.0644737196045, "east":12.623718127152925, "north":-69.86575120104982, "south":12.411707706190716}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["12.5000", "-69.9667"]}},
    {"type":"Feature", "properties":{"code":"AZ", "isoNumeric:":"031", "isoAlpha3":"AZE", "fipsCode":"AJ", "continentName":"Asia", "capital":"Baku", "areaInSqKm":86600, "population":8303512, "currencyCode":"AZN", "languages":["az", "ru", "hy"], "geoNameId":"587116", "direction":{"west":44.774113, "east":41.90564, "north":50.370083, "south":38.38915252685547}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["40.5000", "47.5000"]}},
    {"type":"Feature", "properties":{"code":"BA", "isoNumeric:":"070", "isoAlpha3":"BIH", "fipsCode":"BK", "continentName":"Europe", "capital":"Sarajevo", "areaInSqKm":51129, "population":4590000, "currencyCode":"BAM", "languages":["bs", "hr-BA", "sr-BA"], "geoNameId":"3277605", "direction":{"west":15.718945, "east":45.239193, "north":19.622223, "south":42.546112}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["44.0000", "18.0000"]}},
    {"type":"Feature", "properties":{"code":"BB", "isoNumeric:":"052", "isoAlpha3":"BRB", "fipsCode":"BB", "continentName":"North America", "capital":"Bridgetown", "areaInSqKm":431, "population":285653, "currencyCode":"BBD", "languages":["en-BB"], "geoNameId":"3374084", "direction":{"west":-59.648922, "east":13.327257, "north":-59.420376, "south":13.039844}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["13.1667", "-59.5333"]}},
    {"type":"Feature", "properties":{"code":"BD", "isoNumeric:":"050", "isoAlpha3":"BGD", "fipsCode":"BG", "continentName":"Asia", "capital":"Dhaka", "areaInSqKm":144000, "population":156118464, "currencyCode":"BDT", "languages":["bn-BD", "en"], "geoNameId":"1210997", "direction":{"west":88.028336, "east":26.631945, "north":92.673668, "south":20.743334}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["24.0000", "90.0000"]}},
    {"type":"Feature", "properties":{"code":"BE", "isoNumeric:":"056", "isoAlpha3":"BEL", "fipsCode":"BE", "continentName":"Europe", "capital":"Brussels", "areaInSqKm":30510, "population":10403000, "currencyCode":"EUR", "languages":["nl-BE", "fr-BE", "de-BE"], "geoNameId":"2802361", "direction":{"west":2.546944, "east":51.505444, "north":6.403861, "south":49.49361}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["50.8333", "4.0000"]}},
    {"type":"Feature", "properties":{"code":"BF", "isoNumeric:":"854", "isoAlpha3":"BFA", "fipsCode":"UV", "continentName":"Africa", "capital":"Ouagadougou", "areaInSqKm":274200, "population":16241811, "currencyCode":"XOF", "languages":["fr-BF"], "geoNameId":"2361809", "direction":{"west":-5.518916, "east":15.082593, "north":2.405395, "south":9.401108}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["13.0000", "-2.0000"]}},
    {"type":"Feature", "properties":{"code":"BG", "isoNumeric:":"100", "isoAlpha3":"BGR", "fipsCode":"BU", "continentName":"Europe", "capital":"Sofia", "areaInSqKm":110910, "population":7148785, "currencyCode":"BGN", "languages":["bg", "tr-BG"], "geoNameId":"732800", "direction":{"west":22.371166, "east":44.21764, "north":28.612167, "south":41.242084}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["43.0000", "25.0000"]}},
    {"type":"Feature", "properties":{"code":"BH", "isoNumeric:":"048", "isoAlpha3":"BHR", "fipsCode":"BA", "continentName":"Asia", "capital":"Manama", "areaInSqKm":665, "population":738004, "currencyCode":"BHD", "languages":["ar-BH", "en", "fa", "ur"], "geoNameId":"290291", "direction":{"west":50.45414, "east":26.282583, "north":50.664471, "south":25.796862}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["26.0000", "50.5500"]}},
    {"type":"Feature", "properties":{"code":"BI", "isoNumeric:":"108", "isoAlpha3":"BDI", "fipsCode":"BY", "continentName":"Africa", "capital":"Bujumbura", "areaInSqKm":27830, "population":9863117, "currencyCode":"BIF", "languages":["fr-BI", "rn"], "geoNameId":"433561", "direction":{"west":28.993061, "east":-2.310123, "north":30.847729, "south":-4.465713}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-3.5000", "30.0000"]}},
    {"type":"Feature", "properties":{"code":"BJ", "isoNumeric:":"204", "isoAlpha3":"BEN", "fipsCode":"BN", "continentName":"Africa", "capital":"Porto-Novo", "areaInSqKm":112620, "population":9056010, "currencyCode":"XOF", "languages":["fr-BJ"], "geoNameId":"2395170", "direction":{"west":0.774575, "east":12.418347, "north":3.851701, "south":6.225748}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["9.5000", "2.2500"]}},
    {"type":"Feature", "properties":{"code":"BM", "isoNumeric:":"060", "isoAlpha3":"BMU", "fipsCode":"BD", "continentName":"North America", "capital":"Hamilton", "areaInSqKm":53, "population":65365, "currencyCode":"BMD", "languages":["en-BM", "pt"], "geoNameId":"3573345", "direction":{"west":-64.89605, "east":32.393833, "north":-64.651993, "south":32.246639}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["32.3333", "-64.7500"]}},
    {"type":"Feature", "properties":{"code":"BN", "isoNumeric:":"096", "isoAlpha3":"BRN", "fipsCode":"BX", "continentName":"Asia", "capital":"Bandar Seri Begawan", "areaInSqKm":5770, "population":395027, "currencyCode":"BND", "languages":["ms-BN", "en-BN"], "geoNameId":"1820814", "direction":{"west":114.071442, "east":5.047167, "north":115.359444, "south":4.003083}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["4.5000", "114.6667"]}},
    {"type":"Feature", "properties":{"code":"BO", "isoNumeric:":"068", "isoAlpha3":"BOL", "fipsCode":"BL", "continentName":"South America", "capital":"Sucre", "areaInSqKm":1098580, "population":9947418, "currencyCode":"BOB", "languages":["es-BO", "qu", "ay"], "geoNameId":"3923057", "direction":{"west":-69.640762, "east":-9.680567, "north":-57.45809600000001, "south":-22.896133}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["-17.0000", "-65.0000"]}},
    {"type":"Feature", "properties":{"code":"BR", "isoNumeric:":"076", "isoAlpha3":"BRA", "fipsCode":"BR", "continentName":"South America", "capital":"Brasília", "areaInSqKm":8511965, "population":201103330, "currencyCode":"BRL", "languages":["pt-BR", "es", "en", "fr"], "geoNameId":"3469034", "direction":{"west":-73.985535, "east":5.264877, "north":-32.392998, "south":-33.750706}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["-10.0000", "-55.0000"]}},
    {"type":"Feature", "properties":{"code":"BS", "isoNumeric:":"044", "isoAlpha3":"BHS", "fipsCode":"BF", "continentName":"North America", "capital":"Nassau", "areaInSqKm":13940, "population":301790, "currencyCode":"BSD", "languages":["en-BS"], "geoNameId":"3572887", "direction":{"west":-78.995911, "east":26.919243, "north":-74.423874, "south":22.852743}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["24.2500", "-76.0000"]}},
    {"type":"Feature", "properties":{"code":"BT", "isoNumeric:":"064", "isoAlpha3":"BTN", "fipsCode":"BT", "continentName":"Asia", "capital":"Thimphu", "areaInSqKm":47000, "population":699847, "currencyCode":"BTN", "languages":["dz"], "geoNameId":"1252634", "direction":{"west":88.75972, "east":28.323778, "north":92.125191, "south":26.70764}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["27.5000", "90.5000"]}},
    {"type":"Feature", "properties":{"code":"BV", "isoNumeric:":"074", "isoAlpha3":"BVT", "fipsCode":"BV", "continentName":"Antarctica", "capital":"", "areaInSqKm":null, "population":0, "currencyCode":"NOK", "languages":[""], "geoNameId":"3371123", "direction":{"west":3.335499, "east":-54.400322, "north":3.487976, "south":-54.462383}, "continent":"AN"}, "geometry":{"type":"Point", "coordinates":["-54.4333", "3.4000"]}},
    {"type":"Feature", "properties":{"code":"BW", "isoNumeric:":"072", "isoAlpha3":"BWA", "fipsCode":"BC", "continentName":"Africa", "capital":"Gaborone", "areaInSqKm":600370, "population":2029307, "currencyCode":"BWP", "languages":["en-BW", "tn-BW"], "geoNameId":"933860", "direction":{"west":19.999535, "east":-17.780813, "north":29.360781, "south":-26.907246}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-22.0000", "24.0000"]}},
    {"type":"Feature", "properties":{"code":"BY", "isoNumeric:":"112", "isoAlpha3":"BLR", "fipsCode":"BO", "continentName":"Europe", "capital":"Minsk", "areaInSqKm":207600, "population":9685000, "currencyCode":"BYR", "languages":["be", "ru"], "geoNameId":"630336", "direction":{"west":23.176889, "east":56.165806, "north":32.770805, "south":51.256416}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["53.0000", "28.0000"]}},
    {"type":"Feature", "properties":{"code":"BZ", "isoNumeric:":"084", "isoAlpha3":"BLZ", "fipsCode":"BH", "continentName":"North America", "capital":"Belmopan", "areaInSqKm":22966, "population":314522, "currencyCode":"BZD", "languages":["en-BZ", "es"], "geoNameId":"3582678", "direction":{"west":-89.224815, "east":18.496557, "north":-87.776985, "south":15.8893}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["17.2500", "-88.7500"]}},
    {"type":"Feature", "properties":{"code":"CA", "isoNumeric:":"124", "isoAlpha3":"CAN", "fipsCode":"CA", "continentName":"North America", "capital":"Ottawa", "areaInSqKm":9984670, "population":33679000, "currencyCode":"CAD", "languages":["en-CA", "fr-CA", "iu"], "geoNameId":"6251999", "direction":{"west":-141, "east":83.110626, "north":-52.636291, "south":41.67598}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["60.0000", "-95.0000"]}},
    {"type":"Feature", "properties":{"code":"CC", "isoNumeric:":"166", "isoAlpha3":"CCK", "fipsCode":"CK", "continentName":"Asia", "capital":"West Island", "areaInSqKm":14, "population":628, "currencyCode":"AUD", "languages":["ms-CC", "en"], "geoNameId":"1547376", "direction":{"west":96.816941408, "east":-12.072459094, "north":96.929489344, "south":-12.208725839}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["-12.5000", "96.8333"]}},
    {"type":"Feature", "properties":{"code":"CD", "isoNumeric:":"180", "isoAlpha3":"COD", "fipsCode":"CG", "continentName":"Africa", "capital":"Kinshasa", "areaInSqKm":2345410, "population":70916439, "currencyCode":"CDF", "languages":["fr-CD", "ln", "kg"], "geoNameId":"203312", "direction":{"west":12.204144, "east":5.386098, "north":31.305912, "south":-13.455675}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["0.0000", "25.0000"]}},
    {"type":"Feature", "properties":{"code":"CF", "isoNumeric:":"140", "isoAlpha3":"CAF", "fipsCode":"CT", "continentName":"Africa", "capital":"Bangui", "areaInSqKm":622984, "population":4844927, "currencyCode":"XAF", "languages":["fr-CF", "sg", "ln", "kg"], "geoNameId":"239880", "direction":{"west":14.420097, "east":11.007569, "north":27.463421, "south":2.220514}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["7.0000", "21.0000"]}},
    {"type":"Feature", "properties":{"code":"CG", "isoNumeric:":"178", "isoAlpha3":"COG", "fipsCode":"CF", "continentName":"Africa", "capital":"Brazzaville", "areaInSqKm":342000, "population":3039126, "currencyCode":"XAF", "languages":["fr-CG", "kg", "ln-CG"], "geoNameId":"2260494", "direction":{"west":11.205009, "east":3.703082, "north":18.649839, "south":-5.027223}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-1.0000", "15.0000"]}},
    {"type":"Feature", "properties":{"code":"CH", "isoNumeric:":"756", "isoAlpha3":"CHE", "fipsCode":"SZ", "continentName":"Europe", "capital":"Berne", "areaInSqKm":41290, "population":7581000, "currencyCode":"CHF", "languages":["de-CH", "fr-CH", "it-CH", "rm"], "geoNameId":"2658434", "direction":{"west":5.957472, "east":47.805332, "north":10.491472, "south":45.825695}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["47.0000", "8.0000"]}},
    {"type":"Feature", "properties":{"code":"CI", "isoNumeric:":"384", "isoAlpha3":"CIV", "fipsCode":"IV", "continentName":"Africa", "capital":"Yamoussoukro", "areaInSqKm":322460, "population":21058798, "currencyCode":"XOF", "languages":["fr-CI"], "geoNameId":"2287781", "direction":{"west":-8.599302, "east":10.736642, "north":-2.494897, "south":4.357067}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["8.0000", "-5.0000"]}},
    {"type":"Feature", "properties":{"code":"CK", "isoNumeric:":"184", "isoAlpha3":"COK", "fipsCode":"CW", "continentName":"Oceania", "capital":"Avarua", "areaInSqKm":240, "population":21388, "currencyCode":"NZD", "languages":["en-CK", "mi"], "geoNameId":"1899402", "direction":{"west":-161.093658, "east":-10.023114, "north":-157.312134, "south":-21.944164}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-21.2333", "-159.7667"]}},
    {"type":"Feature", "properties":{"code":"CL", "isoNumeric:":"152", "isoAlpha3":"CHL", "fipsCode":"CI", "continentName":"South America", "capital":"Santiago", "areaInSqKm":756950, "population":16746491, "currencyCode":"CLP", "languages":["es-CL"], "geoNameId":"3895114", "direction":{"west":-80.785851, "east":-17.507553, "north":-66.417557, "south":-55.916348}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["-30.0000", "-71.0000"]}},
    {"type":"Feature", "properties":{"code":"CM", "isoNumeric:":"120", "isoAlpha3":"CMR", "fipsCode":"CM", "continentName":"Africa", "capital":"Yaoundé", "areaInSqKm":475440, "population":19294149, "currencyCode":"XAF", "languages":["en-CM", "fr-CM"], "geoNameId":"2233387", "direction":{"west":8.494763, "east":13.078056, "north":16.192116, "south":1.652548}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["6.0000", "12.0000"]}},
    {"type":"Feature", "properties":{"code":"CN", "isoNumeric:":"156", "isoAlpha3":"CHN", "fipsCode":"CH", "continentName":"Asia", "capital":"Beijing", "areaInSqKm":9596960, "population":1330044000, "currencyCode":"CNY", "languages":["zh-CN", "yue", "wuu", "dta", "ug", "za"], "geoNameId":"1814991", "direction":{"west":73.557693, "east":53.56086, "north":134.773911, "south":15.775416}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["35.0000", "105.0000"]}},
    {"type":"Feature", "properties":{"code":"CO", "isoNumeric:":"170", "isoAlpha3":"COL", "fipsCode":"CO", "continentName":"South America", "capital":"Bogotá", "areaInSqKm":1138910, "population":44205293, "currencyCode":"COP", "languages":["es-CO"], "geoNameId":"3686110", "direction":{"west":-81.728111, "east":13.380502, "north":-66.869835, "south":-4.225869}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["4.0000", "-72.0000"]}},
    {"type":"Feature", "properties":{"code":"CR", "isoNumeric:":"188", "isoAlpha3":"CRI", "fipsCode":"CS", "continentName":"North America", "capital":"San José", "areaInSqKm":51100, "population":4516220, "currencyCode":"CRC", "languages":["es-CR", "en"], "geoNameId":"3624060", "direction":{"west":-85.950623, "east":11.216819, "north":-82.555992, "south":8.032975}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["10.0000", "-84.0000"]}},
    {"type":"Feature", "properties":{"code":"CU", "isoNumeric:":"192", "isoAlpha3":"CUB", "fipsCode":"CU", "continentName":"North America", "capital":"Havana", "areaInSqKm":110860, "population":11423000, "currencyCode":"CUP", "languages":["es-CU"], "geoNameId":"3562981", "direction":{"west":-84.957428, "east":23.226042, "north":-74.131775, "south":19.828083}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["21.5000", "-80.0000"]}},
    {"type":"Feature", "properties":{"code":"CV", "isoNumeric:":"132", "isoAlpha3":"CPV", "fipsCode":"CV", "continentName":"Africa", "capital":"Praia", "areaInSqKm":4033, "population":508659, "currencyCode":"CVE", "languages":["pt-CV"], "geoNameId":"3374766", "direction":{"west":-25.358747, "east":17.197178, "north":-22.669443, "south":14.808022}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["16.0000", "-24.0000"]}},
    {"type":"Feature", "properties":{"code":"CX", "isoNumeric:":"162", "isoAlpha3":"CXR", "fipsCode":"KT", "continentName":"Asia", "capital":"The Settlement", "areaInSqKm":135, "population":1500, "currencyCode":"AUD", "languages":["en", "zh", "ms-CC"], "geoNameId":"2078138", "direction":{"west":105.533276992, "east":-10.412356007, "north":105.712596992, "south":-10.5704829995}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["-10.5000", "105.6667"]}},
    {"type":"Feature", "properties":{"code":"CY", "isoNumeric:":"196", "isoAlpha3":"CYP", "fipsCode":"CY", "continentName":"Europe", "capital":"Nicosia", "areaInSqKm":9250, "population":1102677, "currencyCode":"EUR", "languages":["el-CY", "tr-CY", "en"], "geoNameId":"146669", "direction":{"west":32.27308300000004, "east":35.701527, "north":34.59791599999994, "south":34.6332846722908}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["35.0000", "33.0000"]}},
    {"type":"Feature", "properties":{"code":"CZ", "isoNumeric:":"203", "isoAlpha3":"CZE", "fipsCode":"EZ", "continentName":"Europe", "capital":"Prague", "areaInSqKm":78866, "population":10476000, "currencyCode":"CZK", "languages":["cs", "sk"], "geoNameId":"3077311", "direction":{"west":12.096194, "east":51.058887, "north":18.860111, "south":48.542915}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["49.7500", "15.5000"]}},
    {"type":"Feature", "properties":{"code":"DE", "isoNumeric:":"276", "isoAlpha3":"DEU", "fipsCode":"GM", "continentName":"Europe", "capital":"Berlin", "areaInSqKm":357021, "population":81802257, "currencyCode":"EUR", "languages":["de"], "geoNameId":"2921044", "direction":{"west":5.865639, "east":55.055637, "north":15.039889, "south":47.275776}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["51.0000", "9.0000"]}},
    {"type":"Feature", "properties":{"code":"DJ", "isoNumeric:":"262", "isoAlpha3":"DJI", "fipsCode":"DJ", "continentName":"Africa", "capital":"Djibouti", "areaInSqKm":23000, "population":740528, "currencyCode":"DJF", "languages":["fr-DJ", "ar", "so-DJ", "aa"], "geoNameId":"223816", "direction":{"west":41.773472, "east":12.706833, "north":43.416973, "south":10.909917}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["11.5000", "43.0000"]}},
    {"type":"Feature", "properties":{"code":"DK", "isoNumeric:":"208", "isoAlpha3":"DNK", "fipsCode":"DA", "continentName":"Europe", "capital":"Copenhagen", "areaInSqKm":43094, "population":5484000, "currencyCode":"DKK", "languages":["da-DK", "en", "fo", "de-DK"], "geoNameId":"2623032", "direction":{"west":8.075611, "east":57.748417, "north":15.158834, "south":54.562389}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["56.0000", "10.0000"]}},
    {"type":"Feature", "properties":{"code":"DM", "isoNumeric:":"212", "isoAlpha3":"DMA", "fipsCode":"DO", "continentName":"North America", "capital":"Roseau", "areaInSqKm":754, "population":72813, "currencyCode":"XCD", "languages":["en-DM"], "geoNameId":"3575830", "direction":{"west":-61.484108, "east":15.631809, "north":-61.244152, "south":15.20169}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["15.4167", "-61.3333"]}},
    {"type":"Feature", "properties":{"code":"DO", "isoNumeric:":"214", "isoAlpha3":"DOM", "fipsCode":"DR", "continentName":"North America", "capital":"Santo Domingo", "areaInSqKm":48730, "population":9823821, "currencyCode":"DOP", "languages":["es-DO"], "geoNameId":"3508796", "direction":{"west":-72.003487, "east":19.929859, "north":-68.32, "south":17.543159}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["19.0000", "-70.6667"]}},
    {"type":"Feature", "properties":{"code":"DZ", "isoNumeric:":"012", "isoAlpha3":"DZA", "fipsCode":"AG", "continentName":"Africa", "capital":"Algiers", "areaInSqKm":2381740, "population":34586184, "currencyCode":"DZD", "languages":["ar-DZ"], "geoNameId":"2589581", "direction":{"west":-8.673868, "east":37.093723, "north":11.979548, "south":18.960028}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["28.0000", "3.0000"]}},
    {"type":"Feature", "properties":{"code":"EC", "isoNumeric:":"218", "isoAlpha3":"ECU", "fipsCode":"EC", "continentName":"South America", "capital":"Quito", "areaInSqKm":283560, "population":14790608, "currencyCode":"USD", "languages":["es-EC"], "geoNameId":"3658394", "direction":{"west":-81.078598, "east":1.43902, "north":-75.184586, "south":-4.998823}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["-2.0000", "-77.5000"]}},
    {"type":"Feature", "properties":{"code":"EE", "isoNumeric:":"233", "isoAlpha3":"EST", "fipsCode":"EN", "continentName":"Europe", "capital":"Tallinn", "areaInSqKm":45226, "population":1291170, "currencyCode":"EUR", "languages":["et", "ru"], "geoNameId":"453733", "direction":{"west":21.837584, "east":59.676224, "north":28.209972, "south":57.516193}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["59.0000", "26.0000"]}},
    {"type":"Feature", "properties":{"code":"EG", "isoNumeric:":"818", "isoAlpha3":"EGY", "fipsCode":"EG", "continentName":"Africa", "capital":"Cairo", "areaInSqKm":1001450, "population":80471869, "currencyCode":"EGP", "languages":["ar-EG", "en", "fr"], "geoNameId":"357994", "direction":{"west":24.698111, "east":31.667334, "north":35.794861, "south":21.725389}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["27.0000", "30.0000"]}},
    {"type":"Feature", "properties":{"code":"EH", "isoNumeric:":"732", "isoAlpha3":"ESH", "fipsCode":"WI", "continentName":"Africa", "capital":"El Aaiún", "areaInSqKm":266000, "population":273008, "currencyCode":"MAD", "languages":["ar", "mey"], "geoNameId":"2461445", "direction":{"west":-17.103182, "east":27.669674, "north":-8.670276, "south":20.774158}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["24.5000", "-13.0000"]}},
    {"type":"Feature", "properties":{"code":"ER", "isoNumeric:":"232", "isoAlpha3":"ERI", "fipsCode":"ER", "continentName":"Africa", "capital":"Asmara", "areaInSqKm":121320, "population":5792984, "currencyCode":"ERN", "languages":["aa-ER", "ar", "tig", "kun", "ti-ER"], "geoNameId":"338010", "direction":{"west":36.438778, "east":18.003084, "north":43.13464, "south":12.359555}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["15.0000", "39.0000"]}},
    {"type":"Feature", "properties":{"code":"ES", "isoNumeric:":"724", "isoAlpha3":"ESP", "fipsCode":"SP", "continentName":"Europe", "capital":"Madrid", "areaInSqKm":504782, "population":46505963, "currencyCode":"EUR", "languages":["es-ES", "ca", "gl", "eu", "oc"], "geoNameId":"2510769", "direction":{"west":-9.290778, "east":43.791721, "north":4.315389, "south":36.000332}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["40.0000", "-4.0000"]}},
    {"type":"Feature", "properties":{"code":"ET", "isoNumeric:":"231", "isoAlpha3":"ETH", "fipsCode":"ET", "continentName":"Africa", "capital":"Addis Ababa", "areaInSqKm":1127127, "population":88013491, "currencyCode":"ETB", "languages":["am", "en-ET", "om-ET", "ti-ET", "so-ET", "sid"], "geoNameId":"337996", "direction":{"west":32.999939, "east":14.89375, "north":47.986179, "south":3.402422}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["8.0000", "38.0000"]}},
    {"type":"Feature", "properties":{"code":"FI", "isoNumeric:":"246", "isoAlpha3":"FIN", "fipsCode":"FI", "continentName":"Europe", "capital":"Helsinki", "areaInSqKm":337030, "population":5244000, "currencyCode":"EUR", "languages":["fi-FI", "sv-FI", "smn"], "geoNameId":"660013", "direction":{"west":20.556944, "east":70.096054, "north":31.580944, "south":59.808777}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["64.0000", "26.0000"]}},
    {"type":"Feature", "properties":{"code":"FJ", "isoNumeric:":"242", "isoAlpha3":"FJI", "fipsCode":"FJ", "continentName":"Oceania", "capital":"Suva", "areaInSqKm":18270, "population":875983, "currencyCode":"FJD", "languages":["en-FJ", "fj"], "geoNameId":"2205218", "direction":{"west":177.129334, "east":-12.480111, "north":-178.424438, "south":-20.67597}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-18.0000", "175.0000"]}},
    {"type":"Feature", "properties":{"code":"FK", "isoNumeric:":"238", "isoAlpha3":"FLK", "fipsCode":"FK", "continentName":"South America", "capital":"Stanley", "areaInSqKm":12173, "population":2638, "currencyCode":"FKP", "languages":["en-FK"], "geoNameId":"3474414", "direction":{"west":-61.345192, "east":-51.24065, "north":-57.712486, "south":-52.360512}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["-51.7500", "-59.0000"]}},
    {"type":"Feature", "properties":{"code":"FM", "isoNumeric:":"583", "isoAlpha3":"FSM", "fipsCode":"FM", "continentName":"Oceania", "capital":"Palikir", "areaInSqKm":702, "population":107708, "currencyCode":"USD", "languages":["en-FM", "chk", "pon", "yap", "kos", "uli", "woe", "nkr", "kpg"], "geoNameId":"2081918", "direction":{"west":137.33648, "east":10.08904, "north":163.03717, "south":1.02629}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["6.9167", "158.2500"]}},
    {"type":"Feature", "properties":{"code":"FO", "isoNumeric:":"234", "isoAlpha3":"FRO", "fipsCode":"FO", "continentName":"Europe", "capital":"Tórshavn", "areaInSqKm":1399, "population":48228, "currencyCode":"DKK", "languages":["fo", "da-FO"], "geoNameId":"2622320", "direction":{"west":-7.458, "east":62.400749, "north":-6.399583, "south":61.394943}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["62.0000", "-7.0000"]}},
    {"type":"Feature", "properties":{"code":"FR", "isoNumeric:":"250", "isoAlpha3":"FRA", "fipsCode":"FR", "continentName":"Europe", "capital":"Paris", "areaInSqKm":547030, "population":64768389, "currencyCode":"EUR", "languages":["fr-FR", "frp", "br", "co", "ca", "eu", "oc"], "geoNameId":"3017382", "direction":{"west":-5.142222, "east":51.092804, "north":9.561556, "south":41.371582}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["46.0000", "2.0000"]}},
    {"type":"Feature", "properties":{"code":"GA", "isoNumeric:":"266", "isoAlpha3":"GAB", "fipsCode":"GB", "continentName":"Africa", "capital":"Libreville", "areaInSqKm":267667, "population":1545255, "currencyCode":"XAF", "languages":["fr-GA"], "geoNameId":"2400553", "direction":{"west":8.695471, "east":2.322612, "north":14.502347, "south":-3.978806}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-1.0000", "11.7500"]}},
    {"type":"Feature", "properties":{"code":"GB", "isoNumeric:":"826", "isoAlpha3":"GBR", "fipsCode":"UK", "continentName":"Europe", "capital":"London", "areaInSqKm":244820, "population":62348447, "currencyCode":"GBP", "languages":["en-GB", "cy-GB", "gd"], "geoNameId":"2635167", "direction":{"west":-8.623555, "east":59.360249, "north":1.759, "south":49.906193}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["54.0000", "-2.0000"]}},
    {"type":"Feature", "properties":{"code":"GD", "isoNumeric:":"308", "isoAlpha3":"GRD", "fipsCode":"GJ", "continentName":"North America", "capital":"St. George's", "areaInSqKm":344, "population":107818, "currencyCode":"XCD", "languages":["en-GD"], "geoNameId":"3580239", "direction":{"west":-61.802344, "east":12.318283928171299, "north":-61.57676970108031, "south":11.986893}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["12.1167", "-61.6667"]}},
    {"type":"Feature", "properties":{"code":"GE", "isoNumeric:":"268", "isoAlpha3":"GEO", "fipsCode":"GG", "continentName":"Asia", "capital":"Tbilisi", "areaInSqKm":69700, "population":4630000, "currencyCode":"GEL", "languages":["ka", "ru", "hy", "az"], "geoNameId":"614540", "direction":{"west":40.010139, "east":43.586498, "north":46.725971, "south":41.053196}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["42.0000", "43.5000"]}},
    {"type":"Feature", "properties":{"code":"GF", "isoNumeric:":"254", "isoAlpha3":"GUF", "fipsCode":"FG", "continentName":"South America", "capital":"Cayenne", "areaInSqKm":91000, "population":195506, "currencyCode":"EUR", "languages":["fr-GF"], "geoNameId":"3381670", "direction":{"west":-54.542511, "east":5.776496, "north":-51.613949, "south":2.127094}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["4.0000", "-53.0000"]}},
    {"type":"Feature", "properties":{"code":"GH", "isoNumeric:":"288", "isoAlpha3":"GHA", "fipsCode":"GH", "continentName":"Africa", "capital":"Accra", "areaInSqKm":239460, "population":24339838, "currencyCode":"GHS", "languages":["en-GH", "ak", "ee", "tw"], "geoNameId":"2300660", "direction":{"west":-3.25542, "east":11.173301, "north":1.191781, "south":4.736723}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["8.0000", "-2.0000"]}},
    {"type":"Feature", "properties":{"code":"GI", "isoNumeric:":"292", "isoAlpha3":"GIB", "fipsCode":"GI", "continentName":"Europe", "capital":"Gibraltar", "areaInSqKm":6.5, "population":27884, "currencyCode":"GIP", "languages":["en-GI", "es", "it", "pt"], "geoNameId":"2411586", "direction":{"west":-5.36626149743654, "east":36.155439135670726, "north":-5.338285164001491, "south":36.10903070140248}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["36.1833", "-5.3667"]}},
    {"type":"Feature", "properties":{"code":"GL", "isoNumeric:":"304", "isoAlpha3":"GRL", "fipsCode":"GL", "continentName":"North America", "capital":"Nuuk", "areaInSqKm":2166086, "population":56375, "currencyCode":"DKK", "languages":["kl", "da-GL", "en"], "geoNameId":"3425505", "direction":{"west":-73.04203, "east":83.627357, "north":-11.312319, "south":59.777401}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["72.0000", "-40.0000"]}},
    {"type":"Feature", "properties":{"code":"GM", "isoNumeric:":"270", "isoAlpha3":"GMB", "fipsCode":"GA", "continentName":"Africa", "capital":"Banjul", "areaInSqKm":11300, "population":1593256, "currencyCode":"GMD", "languages":["en-GM", "mnk", "wof", "wo", "ff"], "geoNameId":"2413451", "direction":{"west":-16.825079, "east":13.826571, "north":-13.797793, "south":13.064252}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["13.4667", "-16.5667"]}},
    {"type":"Feature", "properties":{"code":"GN", "isoNumeric:":"324", "isoAlpha3":"GIN", "fipsCode":"GV", "continentName":"Africa", "capital":"Conakry", "areaInSqKm":245857, "population":10324025, "currencyCode":"GNF", "languages":["fr-GN"], "geoNameId":"2420477", "direction":{"west":-14.926619, "east":12.67622, "north":-7.641071, "south":7.193553}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["11.0000", "-10.0000"]}},
    {"type":"Feature", "properties":{"code":"GP", "isoNumeric:":"312", "isoAlpha3":"GLP", "fipsCode":"GP", "continentName":"North America", "capital":"Basse-Terre", "areaInSqKm":1780, "population":443000, "currencyCode":"EUR", "languages":["fr-GP"], "geoNameId":"3579143", "direction":{"west":-61.544765, "east":16.516848, "north":-61, "south":15.867565}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["16.2500", "-61.5833"]}},
    {"type":"Feature", "properties":{"code":"GQ", "isoNumeric:":"226", "isoAlpha3":"GNQ", "fipsCode":"EK", "continentName":"Africa", "capital":"Malabo", "areaInSqKm":28051, "population":1014999, "currencyCode":"XAF", "languages":["es-GQ", "fr"], "geoNameId":"2309096", "direction":{"west":9.346865, "east":2.346989, "north":11.335724, "south":0.92086}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["2.0000", "10.0000"]}},
    {"type":"Feature", "properties":{"code":"GR", "isoNumeric:":"300", "isoAlpha3":"GRC", "fipsCode":"GR", "continentName":"Europe", "capital":"Athens", "areaInSqKm":131940, "population":11000000, "currencyCode":"EUR", "languages":["el-GR", "en", "fr"], "geoNameId":"390903", "direction":{"west":19.3736035624134, "east":41.7484999849641, "north":28.2470831714347, "south":34.8020663391466}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["39.0000", "22.0000"]}},
    {"type":"Feature", "properties":{"code":"GS", "isoNumeric:":"239", "isoAlpha3":"SGS", "fipsCode":"SX", "continentName":"Antarctica", "capital":"Grytviken", "areaInSqKm":3903, "population":30, "currencyCode":"GBP", "languages":["en"], "geoNameId":"3474415", "direction":{"west":-38.021175, "east":-53.970467, "north":-26.229326, "south":-59.479259}, "continent":"AN"}, "geometry":{"type":"Point", "coordinates":["-54.5000", "-37.0000"]}},
    {"type":"Feature", "properties":{"code":"GT", "isoNumeric:":"320", "isoAlpha3":"GTM", "fipsCode":"GT", "continentName":"North America", "capital":"Guatemala City", "areaInSqKm":108890, "population":13550440, "currencyCode":"GTQ", "languages":["es-GT"], "geoNameId":"3595528", "direction":{"west":-92.23629, "east":17.81522, "north":-88.223198, "south":13.737302}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["15.5000", "-90.2500"]}},
    {"type":"Feature", "properties":{"code":"GU", "isoNumeric:":"316", "isoAlpha3":"GUM", "fipsCode":"GQ", "continentName":"Oceania", "capital":"Hagåtña", "areaInSqKm":549, "population":159358, "currencyCode":"USD", "languages":["en-GU", "ch-GU"], "geoNameId":"4043988", "direction":{"west":144.619247, "east":13.652333, "north":144.953979, "south":13.240611}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["13.4667", "144.7833"]}},
    {"type":"Feature", "properties":{"code":"GW", "isoNumeric:":"624", "isoAlpha3":"GNB", "fipsCode":"PU", "continentName":"Africa", "capital":"Bissau", "areaInSqKm":36120, "population":1565126, "currencyCode":"XOF", "languages":["pt-GW", "pov"], "geoNameId":"2372248", "direction":{"west":-16.717535, "east":12.680789, "north":-13.636522, "south":10.924265}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["12.0000", "-15.0000"]}},
    {"type":"Feature", "properties":{"code":"GY", "isoNumeric:":"328", "isoAlpha3":"GUY", "fipsCode":"GY", "continentName":"South America", "capital":"Georgetown", "areaInSqKm":214970, "population":748486, "currencyCode":"GYD", "languages":["en-GY"], "geoNameId":"3378535", "direction":{"west":-61.384762, "east":8.557567, "north":-56.480251, "south":1.17508}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["5.0000", "-59.0000"]}},
    {"type":"Feature", "properties":{"code":"HK", "isoNumeric:":"344", "isoAlpha3":"HKG", "fipsCode":"HK", "continentName":"Asia", "capital":"Hong Kong", "areaInSqKm":1092, "population":6898686, "currencyCode":"HKD", "languages":["zh-HK", "yue", "zh", "en"], "geoNameId":"1819730", "direction":{"west":113.837753, "east":22.559778, "north":114.434753, "south":22.15325}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["22.2500", "114.1667"]}},
    {"type":"Feature", "properties":{"code":"HM", "isoNumeric:":"334", "isoAlpha3":"HMD", "fipsCode":"HM", "continentName":"Antarctica", "capital":"", "areaInSqKm":412, "population":0, "currencyCode":"AUD", "languages":[""], "geoNameId":"1547314", "direction":{"west":72.596535, "east":-52.909416, "north":73.859146, "south":-53.192001}, "continent":"AN"}, "geometry":{"type":"Point", "coordinates":["-53.1000", "72.5167"]}},
    {"type":"Feature", "properties":{"code":"HN", "isoNumeric:":"340", "isoAlpha3":"HND", "fipsCode":"HO", "continentName":"North America", "capital":"Tegucigalpa", "areaInSqKm":112090, "population":7989415, "currencyCode":"HNL", "languages":["es-HN"], "geoNameId":"3608932", "direction":{"west":-89.350792, "east":16.510256, "north":-83.155403, "south":12.982411}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["15.0000", "-86.5000"]}},
    {"type":"Feature", "properties":{"code":"HR", "isoNumeric:":"191", "isoAlpha3":"HRV", "fipsCode":"HR", "continentName":"Europe", "capital":"Zagreb", "areaInSqKm":56542, "population":4491000, "currencyCode":"HRK", "languages":["hr-HR", "sr"], "geoNameId":"3202326", "direction":{"west":13.493222, "east":46.53875, "north":19.427389, "south":42.43589}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["45.1667", "15.5000"]}},
    {"type":"Feature", "properties":{"code":"HT", "isoNumeric:":"332", "isoAlpha3":"HTI", "fipsCode":"HA", "continentName":"North America", "capital":"Port-au-Prince", "areaInSqKm":27750, "population":9648924, "currencyCode":"HTG", "languages":["ht", "fr-HT"], "geoNameId":"3723988", "direction":{"west":-74.478584, "east":20.08782, "north":-71.613358, "south":18.021032}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["19.0000", "-72.4167"]}},
    {"type":"Feature", "properties":{"code":"HU", "isoNumeric:":"348", "isoAlpha3":"HUN", "fipsCode":"HU", "continentName":"Europe", "capital":"Budapest", "areaInSqKm":93030, "population":9930000, "currencyCode":"HUF", "languages":["hu-HU"], "geoNameId":"719819", "direction":{"west":16.111889, "east":48.585667, "north":22.906, "south":45.74361}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["47.0000", "20.0000"]}},
    {"type":"Feature", "properties":{"code":"ID", "isoNumeric:":"360", "isoAlpha3":"IDN", "fipsCode":"ID", "continentName":"Asia", "capital":"Jakarta", "areaInSqKm":1919440, "population":242968342, "currencyCode":"IDR", "languages":["id", "en", "nl", "jv"], "geoNameId":"1643084", "direction":{"west":95.009331, "east":5.904417, "north":141.021805, "south":-10.941861}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["-5.0000", "120.0000"]}},
    {"type":"Feature", "properties":{"code":"IE", "isoNumeric:":"372", "isoAlpha3":"IRL", "fipsCode":"EI", "continentName":"Europe", "capital":"Dublin", "areaInSqKm":70280, "population":4622917, "currencyCode":"EUR", "languages":["en-IE", "ga-IE"], "geoNameId":"2963597", "direction":{"west":-10.478556, "east":55.387917, "north":-6.002389, "south":51.451584}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["53.0000", "-8.0000"]}},
    {"type":"Feature", "properties":{"code":"IL", "isoNumeric:":"376", "isoAlpha3":"ISR", "fipsCode":"IS", "continentName":"Asia", "capital":"", "areaInSqKm":20770, "population":7353985, "currencyCode":"ILS", "languages":["he", "ar-IL", "en-IL", ""], "geoNameId":"294640", "direction":{"west":34.270278754419145, "east":33.340137, "north":35.876804, "south":29.496639}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["31.5000", "34.7500"]}},
    {"type":"Feature", "properties":{"code":"IN", "isoNumeric:":"356", "isoAlpha3":"IND", "fipsCode":"IN", "continentName":"Asia", "capital":"New Delhi", "areaInSqKm":3287590, "population":1173108018, "currencyCode":"INR", "languages":["en-IN", "hi", "bn", "te", "mr", "ta", "ur", "gu", "kn", "ml", "or", "pa", "as", "bh", "sat", "ks", "ne", "sd", "kok", "doi", "mni", "sit", "sa", "fr", "lus", "inc"], "geoNameId":"1269750", "direction":{"west":68.186691, "east":35.504223, "north":97.403305, "south":6.747139}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["20.0000", "77.0000"]}},
    {"type":"Feature", "properties":{"code":"IO", "isoNumeric:":"086", "isoAlpha3":"IOT", "fipsCode":"IO", "continentName":"Asia", "capital":"", "areaInSqKm":60, "population":4000, "currencyCode":"USD", "languages":["en-IO"], "geoNameId":"1282588", "direction":{"west":71.259972, "east":-5.268333, "north":72.493164, "south":-7.438028}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["-6.0000", "71.5000"]}},
    {"type":"Feature", "properties":{"code":"IQ", "isoNumeric:":"368", "isoAlpha3":"IRQ", "fipsCode":"IZ", "continentName":"Asia", "capital":"Baghdad", "areaInSqKm":437072, "population":29671605, "currencyCode":"IQD", "languages":["ar-IQ", "ku", "hy"], "geoNameId":"99237", "direction":{"west":38.795887, "east":37.378029, "north":48.575916, "south":29.069445}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["33.0000", "44.0000"]}},
    {"type":"Feature", "properties":{"code":"IR", "isoNumeric:":"364", "isoAlpha3":"IRN", "fipsCode":"IR", "continentName":"Asia", "capital":"Tehran", "areaInSqKm":1648000, "population":76923300, "currencyCode":"IRR", "languages":["fa-IR", "ku"], "geoNameId":"130758", "direction":{"west":44.047279, "east":39.777222, "north":63.317471, "south":25.064083}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["32.0000", "53.0000"]}},
    {"type":"Feature", "properties":{"code":"IS", "isoNumeric:":"352", "isoAlpha3":"ISL", "fipsCode":"IC", "continentName":"Europe", "capital":"Reykjavik", "areaInSqKm":103000, "population":308910, "currencyCode":"ISK", "languages":["is", "en", "de", "da", "sv", "no"], "geoNameId":"2629691", "direction":{"west":-24.546524, "east":66.53463, "north":-13.495815, "south":63.393253}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["65.0000", "-18.0000"]}},
    {"type":"Feature", "properties":{"code":"IT", "isoNumeric:":"380", "isoAlpha3":"ITA", "fipsCode":"IT", "continentName":"Europe", "capital":"Rome", "areaInSqKm":301230, "population":60340328, "currencyCode":"EUR", "languages":["it-IT", "de-IT", "fr-IT", "sc", "ca", "co", "sl"], "geoNameId":"3175395", "direction":{"west":6.614889, "east":47.095196, "north":18.513445, "south":36.652779}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["42.8333", "12.8333"]}},
    {"type":"Feature", "properties":{"code":"JM", "isoNumeric:":"388", "isoAlpha3":"JAM", "fipsCode":"JM", "continentName":"North America", "capital":"Kingston", "areaInSqKm":10991, "population":2847232, "currencyCode":"JMD", "languages":["en-JM"], "geoNameId":"3489940", "direction":{"west":-78.366638, "east":18.526976, "north":-76.180321, "south":17.703554}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["18.2500", "-77.5000"]}},
    {"type":"Feature", "properties":{"code":"JO", "isoNumeric:":"400", "isoAlpha3":"JOR", "fipsCode":"JO", "continentName":"Asia", "capital":"Amman", "areaInSqKm":92300, "population":6407085, "currencyCode":"JOD", "languages":["ar-JO", "en"], "geoNameId":"248816", "direction":{"west":34.959999, "east":33.367668, "north":39.301167, "south":29.185888}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["31.0000", "36.0000"]}},
    {"type":"Feature", "properties":{"code":"JP", "isoNumeric:":"392", "isoAlpha3":"JPN", "fipsCode":"JA", "continentName":"Asia", "capital":"Tokyo", "areaInSqKm":377835, "population":127288000, "currencyCode":"JPY", "languages":["ja"], "geoNameId":"1861060", "direction":{"west":122.93853, "east":45.52314, "north":145.820892, "south":24.249472}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["36.0000", "138.0000"]}},
    {"type":"Feature", "properties":{"code":"KE", "isoNumeric:":"404", "isoAlpha3":"KEN", "fipsCode":"KE", "continentName":"Africa", "capital":"Nairobi", "areaInSqKm":582650, "population":40046566, "currencyCode":"KES", "languages":["en-KE", "sw-KE"], "geoNameId":"192950", "direction":{"west":33.908859, "east":5.019938, "north":41.899078, "south":-4.678047}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["1.0000", "38.0000"]}},
    {"type":"Feature", "properties":{"code":"KG", "isoNumeric:":"417", "isoAlpha3":"KGZ", "fipsCode":"KG", "continentName":"Asia", "capital":"Bishkek", "areaInSqKm":198500, "population":5508626, "currencyCode":"KGS", "languages":["ky", "uz", "ru"], "geoNameId":"1527747", "direction":{"west":69.276611, "east":43.238224, "north":80.283165, "south":39.172832}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["41.0000", "75.0000"]}},
    {"type":"Feature", "properties":{"code":"KH", "isoNumeric:":"116", "isoAlpha3":"KHM", "fipsCode":"CB", "continentName":"Asia", "capital":"Phnom Penh", "areaInSqKm":181040, "population":14453680, "currencyCode":"KHR", "languages":["km", "fr", "en"], "geoNameId":"1831722", "direction":{"west":102.339996, "east":14.686417, "north":107.627724, "south":10.409083}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["13.0000", "105.0000"]}},
    {"type":"Feature", "properties":{"code":"KI", "isoNumeric:":"296", "isoAlpha3":"KIR", "fipsCode":"KR", "continentName":"Oceania", "capital":"Tarawa", "areaInSqKm":811, "population":92533, "currencyCode":"AUD", "languages":["en-KI", "gil"], "geoNameId":"4030945", "direction":{"west":169.556137, "east":4.71957, "north":-150.215347, "south":-11.437038}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["1.4167", "173.0000"]}},
    {"type":"Feature", "properties":{"code":"KM", "isoNumeric:":"174", "isoAlpha3":"COM", "fipsCode":"CN", "continentName":"Africa", "capital":"Moroni", "areaInSqKm":2170, "population":773407, "currencyCode":"KMF", "languages":["ar", "fr-KM"], "geoNameId":"921929", "direction":{"west":43.21579, "east":-11.362381, "north":44.538223, "south":-12.387857}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-12.1667", "44.2500"]}},
    {"type":"Feature", "properties":{"code":"KN", "isoNumeric:":"659", "isoAlpha3":"KNA", "fipsCode":"SC", "continentName":"North America", "capital":"Basseterre", "areaInSqKm":261, "population":49898, "currencyCode":"XCD", "languages":["en-KN"], "geoNameId":"3575174", "direction":{"west":-62.86956, "east":17.420118, "north":-62.543266, "south":17.095343}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["17.3333", "-62.7500"]}},
    {"type":"Feature", "properties":{"code":"KP", "isoNumeric:":"408", "isoAlpha3":"PRK", "fipsCode":"KN", "continentName":"Asia", "capital":"Pyongyang", "areaInSqKm":120540, "population":22912177, "currencyCode":"KPW", "languages":["ko-KP"], "geoNameId":"1873107", "direction":{"west":124.315887, "east":43.006054, "north":130.674866, "south":37.673332}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["40.0000", "127.0000"]}},
    {"type":"Feature", "properties":{"code":"KR", "isoNumeric:":"410", "isoAlpha3":"KOR", "fipsCode":"KS", "continentName":"Asia", "capital":"Seoul", "areaInSqKm":98480, "population":48422644, "currencyCode":"KRW", "languages":["ko-KR", "en"], "geoNameId":"1835841", "direction":{"west":125.887108, "east":38.612446, "north":129.584671, "south":33.190945}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["37.0000", "127.5000"]}},
    {"type":"Feature", "properties":{"code":"KW", "isoNumeric:":"414", "isoAlpha3":"KWT", "fipsCode":"KU", "continentName":"Asia", "capital":"Kuwait City", "areaInSqKm":17820, "population":2789132, "currencyCode":"KWD", "languages":["ar-KW", "en"], "geoNameId":"285570", "direction":{"west":46.555557, "east":30.095945, "north":48.431473, "south":28.524611}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["29.3375", "47.6581"]}},
    {"type":"Feature", "properties":{"code":"KY", "isoNumeric:":"136", "isoAlpha3":"CYM", "fipsCode":"CJ", "continentName":"North America", "capital":"George Town", "areaInSqKm":262, "population":44270, "currencyCode":"KYD", "languages":["en-KY"], "geoNameId":"3580718", "direction":{"west":-81.432777, "east":19.7617, "north":-79.727272, "south":19.263029}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["19.5000", "-80.5000"]}},
    {"type":"Feature", "properties":{"code":"KZ", "isoNumeric:":"398", "isoAlpha3":"KAZ", "fipsCode":"KZ", "continentName":"Asia", "capital":"Astana", "areaInSqKm":2717300, "population":15340000, "currencyCode":"KZT", "languages":["kk", "ru"], "geoNameId":"1522867", "direction":{"west":46.491859, "east":55.451195, "north":87.312668, "south":40.936333}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["48.0000", "68.0000"]}},
    {"type":"Feature", "properties":{"code":"LA", "isoNumeric:":"418", "isoAlpha3":"LAO", "fipsCode":"LA", "continentName":"Asia", "capital":"Vientiane", "areaInSqKm":236800, "population":6368162, "currencyCode":"LAK", "languages":["lo", "fr", "en"], "geoNameId":"1655842", "direction":{"west":100.093056, "east":22.500389, "north":107.697029, "south":13.910027}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["18.0000", "105.0000"]}},
    {"type":"Feature", "properties":{"code":"LB", "isoNumeric:":"422", "isoAlpha3":"LBN", "fipsCode":"LE", "continentName":"Asia", "capital":"Beirut", "areaInSqKm":10400, "population":4125247, "currencyCode":"LBP", "languages":["ar-LB", "fr-LB", "en", "hy"], "geoNameId":"272103", "direction":{"west":35.114277, "east":34.691418, "north":36.639194, "south":33.05386}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["33.8333", "35.8333"]}},
    {"type":"Feature", "properties":{"code":"LC", "isoNumeric:":"662", "isoAlpha3":"LCA", "fipsCode":"ST", "continentName":"North America", "capital":"Castries", "areaInSqKm":616, "population":160922, "currencyCode":"XCD", "languages":["en-LC"], "geoNameId":"3576468", "direction":{"west":-61.07415, "east":14.103245, "north":-60.874203, "south":13.704778}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["13.8833", "-61.1333"]}},
    {"type":"Feature", "properties":{"code":"LI", "isoNumeric:":"438", "isoAlpha3":"LIE", "fipsCode":"LS", "continentName":"Europe", "capital":"Vaduz", "areaInSqKm":160, "population":35000, "currencyCode":"CHF", "languages":["de-LI"], "geoNameId":"3042058", "direction":{"west":9.477805, "east":47.273529, "north":9.632195, "south":47.055862}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["47.1667", "9.5333"]}},
    {"type":"Feature", "properties":{"code":"LK", "isoNumeric:":"144", "isoAlpha3":"LKA", "fipsCode":"CE", "continentName":"Asia", "capital":"Colombo", "areaInSqKm":65610, "population":21513990, "currencyCode":"LKR", "languages":["si", "ta", "en"], "geoNameId":"1227603", "direction":{"west":79.652916, "east":9.831361, "north":81.881279, "south":5.916833}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["7.0000", "81.0000"]}},
    {"type":"Feature", "properties":{"code":"LR", "isoNumeric:":"430", "isoAlpha3":"LBR", "fipsCode":"LI", "continentName":"Africa", "capital":"Monrovia", "areaInSqKm":111370, "population":3685076, "currencyCode":"LRD", "languages":["en-LR"], "geoNameId":"2275384", "direction":{"west":-11.492083, "east":8.551791, "north":-7.365113, "south":4.353057}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["6.5000", "-9.5000"]}},
    {"type":"Feature", "properties":{"code":"LS", "isoNumeric:":"426", "isoAlpha3":"LSO", "fipsCode":"LT", "continentName":"Africa", "capital":"Maseru", "areaInSqKm":30355, "population":1919552, "currencyCode":"LSL", "languages":["en-LS", "st", "zu", "xh"], "geoNameId":"932692", "direction":{"west":27.029068, "east":-28.572058, "north":29.465761, "south":-30.668964}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-29.5000", "28.5000"]}},
    {"type":"Feature", "properties":{"code":"LT", "isoNumeric:":"440", "isoAlpha3":"LTU", "fipsCode":"LH", "continentName":"Europe", "capital":"Vilnius", "areaInSqKm":65200, "population":3565000, "currencyCode":"LTL", "languages":["lt", "ru", "pl"], "geoNameId":"597427", "direction":{"west":20.941528, "east":56.446918, "north":26.871944, "south":53.901306}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["56.0000", "24.0000"]}},
    {"type":"Feature", "properties":{"code":"LU", "isoNumeric:":"442", "isoAlpha3":"LUX", "fipsCode":"LU", "continentName":"Europe", "capital":"Luxembourg", "areaInSqKm":2586, "population":497538, "currencyCode":"EUR", "languages":["lb", "de-LU", "fr-LU"], "geoNameId":"2960313", "direction":{"west":5.734556, "east":50.184944, "north":6.528472, "south":49.446583}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["49.7500", "6.1667"]}},
    {"type":"Feature", "properties":{"code":"LV", "isoNumeric:":"428", "isoAlpha3":"LVA", "fipsCode":"LG", "continentName":"Europe", "capital":"Riga", "areaInSqKm":64589, "population":2217969, "currencyCode":"LVL", "languages":["lv", "ru", "lt"], "geoNameId":"458258", "direction":{"west":20.974277, "east":58.082306, "north":28.241167, "south":55.668861}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["57.0000", "25.0000"]}},
    {"type":"Feature", "properties":{"code":"LY", "isoNumeric:":"434", "isoAlpha3":"LBY", "fipsCode":"LY", "continentName":"Africa", "capital":"Tripoli", "areaInSqKm":1759540, "population":6461454, "currencyCode":"LYD", "languages":["ar-LY", "it", "en"], "geoNameId":"2215636", "direction":{"west":9.38702, "east":33.168999, "north":25.150612, "south":19.508045}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["25.0000", "17.0000"]}},
    {"type":"Feature", "properties":{"code":"MA", "isoNumeric:":"504", "isoAlpha3":"MAR", "fipsCode":"MO", "continentName":"Africa", "capital":"Rabat", "areaInSqKm":446550, "population":31627428, "currencyCode":"MAD", "languages":["ar-MA", "fr"], "geoNameId":"2542007", "direction":{"west":-13.168586, "east":35.9224966985384, "north":-0.991750000000025, "south":27.662115}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["32.0000", "-5.0000"]}},
    {"type":"Feature", "properties":{"code":"MC", "isoNumeric:":"492", "isoAlpha3":"MCO", "fipsCode":"MN", "continentName":"Europe", "capital":"Monaco", "areaInSqKm":1.95, "population":32965, "currencyCode":"EUR", "languages":["fr-MC", "en", "it"], "geoNameId":"2993457", "direction":{"west":7.408962249755859, "east":43.75196717037228, "north":7.439939260482788, "south":43.72472839869377}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["43.7333", "7.4000"]}},
    {"type":"Feature", "properties":{"code":"MD", "isoNumeric:":"498", "isoAlpha3":"MDA", "fipsCode":"MD", "continentName":"Europe", "capital":"Chişinău", "areaInSqKm":33843, "population":4324000, "currencyCode":"MDL", "languages":["ro", "ru", "gag", "tr"], "geoNameId":"617790", "direction":{"west":26.618944, "east":48.490166, "north":30.135445, "south":45.468887}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["47.0000", "29.0000"]}},
    {"type":"Feature", "properties":{"code":"ME", "isoNumeric:":"499", "isoAlpha3":"MNE", "fipsCode":"MJ", "continentName":"Europe", "capital":"Podgorica", "areaInSqKm":14026, "population":666730, "currencyCode":"EUR", "languages":["sr", "hu", "bs", "sq", "hr", "rom"], "geoNameId":"3194884", "direction":{"west":18.461306, "east":43.570137, "north":20.358833, "south":41.850166}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["42.0000", "19.0000"]}},
    {"type":"Feature", "properties":{"code":"MG", "isoNumeric:":"450", "isoAlpha3":"MDG", "fipsCode":"MA", "continentName":"Africa", "capital":"Antananarivo", "areaInSqKm":587040, "population":21281844, "currencyCode":"MGA", "languages":["fr-MG", "mg"], "geoNameId":"1062947", "direction":{"west":43.224876, "east":-11.945433, "north":50.48378, "south":-25.608952}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-20.0000", "47.0000"]}},
    {"type":"Feature", "properties":{"code":"MH", "isoNumeric:":"584", "isoAlpha3":"MHL", "fipsCode":"RM", "continentName":"Oceania", "capital":"Majuro", "areaInSqKm":181.3, "population":65859, "currencyCode":"USD", "languages":["mh", "en-MH"], "geoNameId":"2080185", "direction":{"west":165.524918, "east":14.62, "north":171.931808, "south":5.587639}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["9.0000", "168.0000"]}},
    {"type":"Feature", "properties":{"code":"MK", "isoNumeric:":"807", "isoAlpha3":"MKD", "fipsCode":"MK", "continentName":"Europe", "capital":"Skopje", "areaInSqKm":25333, "population":2061000, "currencyCode":"MKD", "languages":["mk", "sq", "tr", "rmm", "sr"], "geoNameId":"718075", "direction":{"west":20.464695, "east":42.361805, "north":23.038139, "south":40.860195}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["41.8333", "22.0000"]}},
    {"type":"Feature", "properties":{"code":"ML", "isoNumeric:":"466", "isoAlpha3":"MLI", "fipsCode":"ML", "continentName":"Africa", "capital":"Bamako", "areaInSqKm":1240000, "population":13796354, "currencyCode":"XOF", "languages":["fr-ML", "bm"], "geoNameId":"2453866", "direction":{"west":-12.242614, "east":25.000002, "north":4.244968, "south":10.159513}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["17.0000", "-4.0000"]}},
    {"type":"Feature", "properties":{"code":"MM", "isoNumeric:":"104", "isoAlpha3":"MMR", "fipsCode":"BM", "continentName":"Asia", "capital":"Nay Pyi Taw", "areaInSqKm":678500, "population":53414374, "currencyCode":"MMK", "languages":["my"], "geoNameId":"1327865", "direction":{"west":92.189278, "east":28.543249, "north":101.176781, "south":9.784583}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["22.0000", "98.0000"]}},
    {"type":"Feature", "properties":{"code":"MN", "isoNumeric:":"496", "isoAlpha3":"MNG", "fipsCode":"MG", "continentName":"Asia", "capital":"Ulan Bator", "areaInSqKm":1565000, "population":3086918, "currencyCode":"MNT", "languages":["mn", "ru"], "geoNameId":"2029969", "direction":{"west":87.749664, "east":52.154251, "north":119.924309, "south":41.567638}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["46.0000", "105.0000"]}},
    {"type":"Feature", "properties":{"code":"MO", "isoNumeric:":"446", "isoAlpha3":"MAC", "fipsCode":"MC", "continentName":"Asia", "capital":"Macao", "areaInSqKm":254, "population":449198, "currencyCode":"MOP", "languages":["zh", "zh-MO", "pt"], "geoNameId":"1821275", "direction":{"west":113.528946, "east":22.222334, "north":113.565834, "south":22.180389}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["22.1667", "113.5500"]}},
    {"type":"Feature", "properties":{"code":"MP", "isoNumeric:":"580", "isoAlpha3":"MNP", "fipsCode":"CQ", "continentName":"Oceania", "capital":"Saipan", "areaInSqKm":477, "population":53883, "currencyCode":"USD", "languages":["fil", "tl", "zh", "ch-MP", "en-MP"], "geoNameId":"4041468", "direction":{"west":144.88626, "east":20.55344, "north":146.06528, "south":14.11023}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["15.2000", "145.7500"]}},
    {"type":"Feature", "properties":{"code":"MQ", "isoNumeric:":"474", "isoAlpha3":"MTQ", "fipsCode":"MB", "continentName":"North America", "capital":"Fort-de-France", "areaInSqKm":1100, "population":432900, "currencyCode":"EUR", "languages":["fr-MQ"], "geoNameId":"3570311", "direction":{"west":-61.230118, "east":14.878819, "north":-60.81551, "south":14.392262}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["14.6667", "-61.0000"]}},
    {"type":"Feature", "properties":{"code":"MR", "isoNumeric:":"478", "isoAlpha3":"MRT", "fipsCode":"MR", "continentName":"Africa", "capital":"Nouakchott", "areaInSqKm":1030700, "population":3205060, "currencyCode":"MRO", "languages":["ar-MR", "fuc", "snk", "fr", "mey", "wo"], "geoNameId":"2378080", "direction":{"west":-17.066521, "east":27.298073, "north":-4.827674, "south":14.715547}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["20.0000", "-12.0000"]}},
    {"type":"Feature", "properties":{"code":"MS", "isoNumeric:":"500", "isoAlpha3":"MSR", "fipsCode":"MH", "continentName":"North America", "capital":"Plymouth", "areaInSqKm":102, "population":9341, "currencyCode":"XCD", "languages":["en-MS"], "geoNameId":"3578097", "direction":{"west":-62.24138237036129, "east":16.824060205313184, "north":-62.144100129608205, "south":16.674768935441556}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["16.7500", "-62.2000"]}},
    {"type":"Feature", "properties":{"code":"MT", "isoNumeric:":"470", "isoAlpha3":"MLT", "fipsCode":"MT", "continentName":"Europe", "capital":"Valletta", "areaInSqKm":316, "population":403000, "currencyCode":"EUR", "languages":["mt", "en-MT"], "geoNameId":"2562770", "direction":{"west":14.191584, "east":36.082027, "north":14.577639, "south":35.810276}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["35.8333", "14.5833"]}},
    {"type":"Feature", "properties":{"code":"MU", "isoNumeric:":"480", "isoAlpha3":"MUS", "fipsCode":"MP", "continentName":"Africa", "capital":"Port Louis", "areaInSqKm":2040, "population":1294104, "currencyCode":"MUR", "languages":["en-MU", "bho", "fr"], "geoNameId":"934292", "direction":{"west":56.512718, "east":-10.319255, "north":63.500179, "south":-20.525717}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-20.2833", "57.5500"]}},
    {"type":"Feature", "properties":{"code":"MV", "isoNumeric:":"462", "isoAlpha3":"MDV", "fipsCode":"MV", "continentName":"Asia", "capital":"Malé", "areaInSqKm":300, "population":395650, "currencyCode":"MVR", "languages":["dv", "en"], "geoNameId":"1282028", "direction":{"west":72.693222, "east":7.098361, "north":73.637276, "south":-0.692694}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["3.2500", "73.0000"]}},
    {"type":"Feature", "properties":{"code":"MW", "isoNumeric:":"454", "isoAlpha3":"MWI", "fipsCode":"MI", "continentName":"Africa", "capital":"Lilongwe", "areaInSqKm":118480, "population":15447500, "currencyCode":"MWK", "languages":["ny", "yao", "tum", "swk"], "geoNameId":"927384", "direction":{"west":32.67395, "east":-9.367541, "north":35.916821, "south":-17.125}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-13.5000", "34.0000"]}},
    {"type":"Feature", "properties":{"code":"MX", "isoNumeric:":"484", "isoAlpha3":"MEX", "fipsCode":"MX", "continentName":"North America", "capital":"Mexico City", "areaInSqKm":1972550, "population":112468855, "currencyCode":"MXN", "languages":["es-MX"], "geoNameId":"3996063", "direction":{"west":-118.453949, "east":32.716759, "north":-86.703392, "south":14.532866}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["23.0000", "-102.0000"]}},
    {"type":"Feature", "properties":{"code":"MY", "isoNumeric:":"458", "isoAlpha3":"MYS", "fipsCode":"MY", "continentName":"Asia", "capital":"Kuala Lumpur", "areaInSqKm":329750, "population":28274729, "currencyCode":"MYR", "languages":["ms-MY", "en", "zh", "ta", "te", "ml", "pa", "th"], "geoNameId":"1733045", "direction":{"west":99.643448, "east":7.363417, "north":119.267502, "south":0.855222}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["2.5000", "112.5000"]}},
    {"type":"Feature", "properties":{"code":"MZ", "isoNumeric:":"508", "isoAlpha3":"MOZ", "fipsCode":"MZ", "continentName":"Africa", "capital":"Maputo", "areaInSqKm":801590, "population":22061451, "currencyCode":"MZN", "languages":["pt-MZ", "vmw"], "geoNameId":"1036973", "direction":{"west":30.217319, "east":-10.471883, "north":40.842995, "south":-26.868685}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-18.2500", "35.0000"]}},
    {"type":"Feature", "properties":{"code":"NA", "isoNumeric:":"516", "isoAlpha3":"NAM", "fipsCode":"WA", "continentName":"Africa", "capital":"Windhoek", "areaInSqKm":825418, "population":2128471, "currencyCode":"NAD", "languages":["en-NA", "af", "de", "hz", "naq"], "geoNameId":"3355338", "direction":{"west":11.71563, "east":-16.959894, "north":25.256701, "south":-28.97143}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-22.0000", "17.0000"]}},
    {"type":"Feature", "properties":{"code":"NC", "isoNumeric:":"540", "isoAlpha3":"NCL", "fipsCode":"NC", "continentName":"Oceania", "capital":"Noumea", "areaInSqKm":19060, "population":216494, "currencyCode":"XPF", "languages":["fr-NC"], "geoNameId":"2139685", "direction":{"west":163.564667, "east":-19.549778, "north":168.129135, "south":-22.698}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-21.5000", "165.5000"]}},
    {"type":"Feature", "properties":{"code":"NE", "isoNumeric:":"562", "isoAlpha3":"NER", "fipsCode":"NG", "continentName":"Africa", "capital":"Niamey", "areaInSqKm":1267000, "population":15878271, "currencyCode":"XOF", "languages":["fr-NE", "ha", "kr", "dje"], "geoNameId":"2440476", "direction":{"west":0.16625, "east":23.525026, "north":15.995643, "south":11.696975}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["16.0000", "8.0000"]}},
    {"type":"Feature", "properties":{"code":"NF", "isoNumeric:":"574", "isoAlpha3":"NFK", "fipsCode":"NF", "continentName":"Oceania", "capital":"Kingston", "areaInSqKm":34.6, "population":1828, "currencyCode":"AUD", "languages":["en-NF"], "geoNameId":"2155115", "direction":{"west":167.91543230151365, "east":-28.995170686948427, "north":167.99773740209957, "south":-29.063076742954735}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-29.0333", "167.9500"]}},
    {"type":"Feature", "properties":{"code":"NG", "isoNumeric:":"566", "isoAlpha3":"NGA", "fipsCode":"NI", "continentName":"Africa", "capital":"Abuja", "areaInSqKm":923768, "population":154000000, "currencyCode":"NGN", "languages":["en-NG", "ha", "yo", "ig", "ff"], "geoNameId":"2328926", "direction":{"west":2.668432, "east":13.892007, "north":14.680073, "south":4.277144}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["10.0000", "8.0000"]}},
    {"type":"Feature", "properties":{"code":"NI", "isoNumeric:":"558", "isoAlpha3":"NIC", "fipsCode":"NU", "continentName":"North America", "capital":"Managua", "areaInSqKm":129494, "population":5995928, "currencyCode":"NIO", "languages":["es-NI", "en"], "geoNameId":"3617476", "direction":{"west":-87.690308, "east":15.025909, "north":-82.738289, "south":10.707543}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["13.0000", "-85.0000"]}},
    {"type":"Feature", "properties":{"code":"NL", "isoNumeric:":"528", "isoAlpha3":"NLD", "fipsCode":"NL", "continentName":"Europe", "capital":"Amsterdam", "areaInSqKm":41526, "population":16645000, "currencyCode":"EUR", "languages":["nl-NL", "fy-NL"], "geoNameId":"2750405", "direction":{"west":3.362556, "east":53.512196, "north":7.227944, "south":50.753918}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["52.5000", "5.7500"]}},
    {"type":"Feature", "properties":{"code":"NO", "isoNumeric:":"578", "isoAlpha3":"NOR", "fipsCode":"NO", "continentName":"Europe", "capital":"Oslo", "areaInSqKm":324220, "population":5009150, "currencyCode":"NOK", "languages":["no", "nb", "nn", "se", "fi"], "geoNameId":"3144096", "direction":{"west":4.650167, "east":71.18811, "north":31.078052520751953, "south":57.977917}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["62.0000", "10.0000"]}},
    {"type":"Feature", "properties":{"code":"NP", "isoNumeric:":"524", "isoAlpha3":"NPL", "fipsCode":"NP", "continentName":"Asia", "capital":"Kathmandu", "areaInSqKm":140800, "population":28951852, "currencyCode":"NPR", "languages":["ne", "en"], "geoNameId":"1282988", "direction":{"west":80.056274, "east":30.43339, "north":88.199333, "south":26.356722}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["28.0000", "84.0000"]}},
    {"type":"Feature", "properties":{"code":"NR", "isoNumeric:":"520", "isoAlpha3":"NRU", "fipsCode":"NR", "continentName":"Oceania", "capital":"", "areaInSqKm":21, "population":10065, "currencyCode":"AUD", "languages":["na", "en-NR"], "geoNameId":"2110425", "direction":{"west":166.899033, "east":-0.504306, "north":166.945282, "south":-0.552333}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-0.5333", "166.9167"]}},
    {"type":"Feature", "properties":{"code":"NU", "isoNumeric:":"570", "isoAlpha3":"NIU", "fipsCode":"NE", "continentName":"Oceania", "capital":"Alofi", "areaInSqKm":260, "population":2166, "currencyCode":"NZD", "languages":["niu", "en-NU"], "geoNameId":"4036232", "direction":{"west":-169.951004, "east":-18.951069, "north":-169.775177, "south":-19.152193}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-19.0333", "-169.8667"]}},
    {"type":"Feature", "properties":{"code":"NZ", "isoNumeric:":"554", "isoAlpha3":"NZL", "fipsCode":"NZ", "continentName":"Oceania", "capital":"Wellington", "areaInSqKm":268680, "population":4252277, "currencyCode":"NZD", "languages":["en-NZ", "mi"], "geoNameId":"2186224", "direction":{"west":166.7155, "east":-34.389668, "north":-180, "south":-47.286026}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-41.0000", "174.0000"]}},
    {"type":"Feature", "properties":{"code":"OM", "isoNumeric:":"512", "isoAlpha3":"OMN", "fipsCode":"MU", "continentName":"Asia", "capital":"Muscat", "areaInSqKm":212460, "population":2967717, "currencyCode":"OMR", "languages":["ar-OM", "en", "bal", "ur"], "geoNameId":"286963", "direction":{"west":51.882, "east":26.387972, "north":59.836582, "south":16.64575}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["21.0000", "57.0000"]}},
    {"type":"Feature", "properties":{"code":"PA", "isoNumeric:":"591", "isoAlpha3":"PAN", "fipsCode":"PM", "continentName":"North America", "capital":"Panama City", "areaInSqKm":78200, "population":3410676, "currencyCode":"PAB", "languages":["es-PA", "en"], "geoNameId":"3703430", "direction":{"west":-83.051445, "east":9.637514, "north":-77.17411, "south":7.197906}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["9.0000", "-80.0000"]}},
    {"type":"Feature", "properties":{"code":"PE", "isoNumeric:":"604", "isoAlpha3":"PER", "fipsCode":"PE", "continentName":"South America", "capital":"Lima", "areaInSqKm":1285220, "population":29907003, "currencyCode":"PEN", "languages":["es-PE", "qu", "ay"], "geoNameId":"3932488", "direction":{"west":-81.326744, "east":-0.012977, "north":-68.677986, "south":-18.349728}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["-10.0000", "-76.0000"]}},
    {"type":"Feature", "properties":{"code":"PF", "isoNumeric:":"258", "isoAlpha3":"PYF", "fipsCode":"FP", "continentName":"Oceania", "capital":"Papeete", "areaInSqKm":4167, "population":270485, "currencyCode":"XPF", "languages":["fr-PF", "ty"], "geoNameId":"4030656", "direction":{"west":-152.877167, "east":-7.903573, "north":-134.929825, "south":-27.653572}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-15.0000", "-140.0000"]}},
    {"type":"Feature", "properties":{"code":"PG", "isoNumeric:":"598", "isoAlpha3":"PNG", "fipsCode":"PP", "continentName":"Oceania", "capital":"Port Moresby", "areaInSqKm":462840, "population":6064515, "currencyCode":"PGK", "languages":["en-PG", "ho", "meu", "tpi"], "geoNameId":"2088628", "direction":{"west":140.842865, "east":-1.318639, "north":155.96344, "south":-11.657861}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-6.0000", "147.0000"]}},
    {"type":"Feature", "properties":{"code":"PH", "isoNumeric:":"608", "isoAlpha3":"PHL", "fipsCode":"RP", "continentName":"Asia", "capital":"Manila", "areaInSqKm":300000, "population":99900177, "currencyCode":"PHP", "languages":["tl", "en-PH", "fil"], "geoNameId":"1694008", "direction":{"west":116.931557, "east":21.120611, "north":126.601524, "south":4.643306}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["13.0000", "122.0000"]}},
    {"type":"Feature", "properties":{"code":"PK", "isoNumeric:":"586", "isoAlpha3":"PAK", "fipsCode":"PK", "continentName":"Asia", "capital":"Islamabad", "areaInSqKm":803940, "population":184404791, "currencyCode":"PKR", "languages":["ur-PK", "en-PK", "pa", "sd", "ps", "brh"], "geoNameId":"1168579", "direction":{"west":60.878613, "east":37.097, "north":77.840919, "south":23.786722}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["30.0000", "70.0000"]}},
    {"type":"Feature", "properties":{"code":"PL", "isoNumeric:":"616", "isoAlpha3":"POL", "fipsCode":"PL", "continentName":"Europe", "capital":"Warsaw", "areaInSqKm":312685, "population":38500000, "currencyCode":"PLN", "languages":["pl"], "geoNameId":"798544", "direction":{"west":14.123, "east":54.839138, "north":24.150749, "south":49.006363}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["52.0000", "20.0000"]}},
    {"type":"Feature", "properties":{"code":"PM", "isoNumeric:":"666", "isoAlpha3":"SPM", "fipsCode":"SB", "continentName":"North America", "capital":"Saint-Pierre", "areaInSqKm":242, "population":7012, "currencyCode":"EUR", "languages":["fr-PM"], "geoNameId":"3424932", "direction":{"west":-56.420658, "east":47.146286, "north":-56.252991, "south":46.786041}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["46.8333", "-56.3333"]}},
    {"type":"Feature", "properties":{"code":"PR", "isoNumeric:":"630", "isoAlpha3":"PRI", "fipsCode":"RQ", "continentName":"North America", "capital":"San Juan", "areaInSqKm":9104, "population":3916632, "currencyCode":"USD", "languages":["en-PR", "es-PR"], "geoNameId":"4566966", "direction":{"west":-67.942726, "east":18.520166, "north":-65.242737, "south":17.926405}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["18.2500", "-66.5000"]}},
    {"type":"Feature", "properties":{"code":"PS", "isoNumeric:":"275", "isoAlpha3":"PSE", "fipsCode":"WE", "continentName":"Asia", "capital":"", "areaInSqKm":5970, "population":3800000, "currencyCode":"ILS", "languages":["ar-PS"], "geoNameId":"6254930", "direction":{"west":34.21665954589844, "east":32.54638671875, "north":35.5732955932617, "south":31.216541290283203}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["32.0000", "35.2500"]}},
    {"type":"Feature", "properties":{"code":"PT", "isoNumeric:":"620", "isoAlpha3":"PRT", "fipsCode":"PO", "continentName":"Europe", "capital":"Lisbon", "areaInSqKm":92391, "population":10676000, "currencyCode":"EUR", "languages":["pt-PT", "mwl"], "geoNameId":"2264397", "direction":{"west":-9.495944, "east":42.145638, "north":-6.182694, "south":36.96125}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["39.5000", "-8.0000"]}},
    {"type":"Feature", "properties":{"code":"PW", "isoNumeric:":"585", "isoAlpha3":"PLW", "fipsCode":"PS", "continentName":"Oceania", "capital":"Melekeok - Palau State Capital", "areaInSqKm":458, "population":19907, "currencyCode":"USD", "languages":["pau", "sov", "en-PW", "tox", "ja", "fil", "zh"], "geoNameId":"1559582", "direction":{"west":131.11788, "east":8.46966, "north":134.72307, "south":2.8036}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["7.5000", "134.5000"]}},
    {"type":"Feature", "properties":{"code":"PY", "isoNumeric:":"600", "isoAlpha3":"PRY", "fipsCode":"PA", "continentName":"South America", "capital":"Asunción", "areaInSqKm":406750, "population":6375830, "currencyCode":"PYG", "languages":["es-PY", "gn"], "geoNameId":"3437598", "direction":{"west":-62.647076, "east":-19.294041, "north":-54.259354, "south":-27.608738}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["-23.0000", "-58.0000"]}},
    {"type":"Feature", "properties":{"code":"QA", "isoNumeric:":"634", "isoAlpha3":"QAT", "fipsCode":"QA", "continentName":"Asia", "capital":"Doha", "areaInSqKm":11437, "population":840926, "currencyCode":"QAR", "languages":["ar-QA", "es"], "geoNameId":"289688", "direction":{"west":50.757221, "east":26.154722, "north":51.636639, "south":24.482944}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["25.5000", "51.2500"]}},
    {"type":"Feature", "properties":{"code":"RE", "isoNumeric:":"638", "isoAlpha3":"REU", "fipsCode":"RE", "continentName":"Africa", "capital":"Saint-Denis", "areaInSqKm":2517, "population":776948, "currencyCode":"EUR", "languages":["fr-RE"], "geoNameId":"935317", "direction":{"west":55.219086, "east":-20.856855, "north":55.845039, "south":-21.372211}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-21.1000", "55.6000"]}},
    {"type":"Feature", "properties":{"code":"RO", "isoNumeric:":"642", "isoAlpha3":"ROU", "fipsCode":"RO", "continentName":"Europe", "capital":"Bucharest", "areaInSqKm":237500, "population":21959278, "currencyCode":"RON", "languages":["ro", "hu", "rom"], "geoNameId":"798549", "direction":{"west":20.269972, "east":48.266945, "north":29.691055, "south":43.627304}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["46.0000", "25.0000"]}},
    {"type":"Feature", "properties":{"code":"RS", "isoNumeric:":"688", "isoAlpha3":"SRB", "fipsCode":"RI", "continentName":"Europe", "capital":"Belgrade", "areaInSqKm":88361, "population":7344847, "currencyCode":"RSD", "languages":["sr", "hu", "bs", "rom"], "geoNameId":"6290252", "direction":{"west":18.817020416259766, "east":46.18138885498047, "north":23.00499725341797, "south":42.232215881347656}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["44.0000", "21.0000"]}},
    {"type":"Feature", "properties":{"code":"RU", "isoNumeric:":"643", "isoAlpha3":"RUS", "fipsCode":"RS", "continentName":"Europe", "capital":"Moscow", "areaInSqKm":17100000, "population":140702000, "currencyCode":"RUB", "languages":["ru", "tt", "xal", "cau", "ady", "kv", "ce", "tyv", "cv", "udm", "tut", "mns", "bua", "myv", "mdf", "chm", "ba", "inh", "tut", "kbd", "krc", "ava", "sah", "nog"], "geoNameId":"2017370", "direction":{"west":19.25, "east":81.857361, "north":-169.05, "south":41.188862}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["60.0000", "100.0000"]}},
    {"type":"Feature", "properties":{"code":"RW", "isoNumeric:":"646", "isoAlpha3":"RWA", "fipsCode":"RW", "continentName":"Africa", "capital":"Kigali", "areaInSqKm":26338, "population":11055976, "currencyCode":"RWF", "languages":["rw", "en-RW", "fr-RW", "sw"], "geoNameId":"49518", "direction":{"west":28.856794, "east":-1.053481, "north":30.895958, "south":-2.840679}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-2.0000", "30.0000"]}},
    {"type":"Feature", "properties":{"code":"SA", "isoNumeric:":"682", "isoAlpha3":"SAU", "fipsCode":"SA", "continentName":"Asia", "capital":"Riyadh", "areaInSqKm":1960582, "population":25731776, "currencyCode":"SAR", "languages":["ar-SA"], "geoNameId":"102358", "direction":{"west":34.495693, "east":32.158333, "north":55.666584, "south":15.61425}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["25.0000", "45.0000"]}},
    {"type":"Feature", "properties":{"code":"SB", "isoNumeric:":"090", "isoAlpha3":"SLB", "fipsCode":"BP", "continentName":"Oceania", "capital":"Honiara", "areaInSqKm":28450, "population":559198, "currencyCode":"SBD", "languages":["en-SB", "tpi"], "geoNameId":"2103350", "direction":{"west":155.508606, "east":-6.589611, "north":166.980865, "south":-11.850555}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-8.0000", "159.0000"]}},
    {"type":"Feature", "properties":{"code":"SC", "isoNumeric:":"690", "isoAlpha3":"SYC", "fipsCode":"SE", "continentName":"Africa", "capital":"Victoria", "areaInSqKm":455, "population":88340, "currencyCode":"SCR", "languages":["en-SC", "fr-SC"], "geoNameId":"241170", "direction":{"west":46.204769, "east":-4.283717, "north":56.279507, "south":-9.753867}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-4.5833", "55.6667"]}},
    {"type":"Feature", "properties":{"code":"SD", "isoNumeric:":"729", "isoAlpha3":"SDN", "fipsCode":"SU", "continentName":"Africa", "capital":"Khartoum", "areaInSqKm":1861484, "population":35000000, "currencyCode":"SDG", "languages":["ar-SD", "en", "fia"], "geoNameId":"366755", "direction":{"west":21.827774047851562, "east":22.232219696044922, "north":38.60749816894531, "south":8.684720993041992}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["15.0000", "30.0000"]}},
    {"type":"Feature", "properties":{"code":"SE", "isoNumeric:":"752", "isoAlpha3":"SWE", "fipsCode":"SW", "continentName":"Europe", "capital":"Stockholm", "areaInSqKm":449964, "population":9045000, "currencyCode":"SEK", "languages":["sv-SE", "se", "sma", "fi-SE"], "geoNameId":"2661886", "direction":{"west":11.118694, "east":69.0625, "north":24.156292483918484, "south":55.337112}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["62.0000", "15.0000"]}},
    {"type":"Feature", "properties":{"code":"SG", "isoNumeric:":"702", "isoAlpha3":"SGP", "fipsCode":"SN", "continentName":"Asia", "capital":"Singapore", "areaInSqKm":692.7, "population":4701069, "currencyCode":"SGD", "languages":["cmn", "en-SG", "ms-SG", "ta-SG", "zh-SG"], "geoNameId":"1880251", "direction":{"west":103.638275, "east":1.471278, "north":104.007469, "south":1.258556}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["1.3667", "103.8000"]}},
    {"type":"Feature", "properties":{"code":"SH", "isoNumeric:":"654", "isoAlpha3":"SHN", "fipsCode":"SH", "continentName":"Africa", "capital":"Jamestown", "areaInSqKm":410, "population":7460, "currencyCode":"SHP", "languages":["en-SH"], "geoNameId":"3370751", "direction":{"west":-14.42123, "east":-7.887815, "north":-5.638753, "south":-16.019543}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-15.9333", "-5.7000"]}},
    {"type":"Feature", "properties":{"code":"SI", "isoNumeric:":"705", "isoAlpha3":"SVN", "fipsCode":"SI", "continentName":"Europe", "capital":"Ljubljana", "areaInSqKm":20273, "population":2007000, "currencyCode":"EUR", "languages":["sl", "sh"], "geoNameId":"3190538", "direction":{"west":13.383083, "east":46.877918, "north":16.566, "south":45.413139}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["46.0000", "15.0000"]}},
    {"type":"Feature", "properties":{"code":"SJ", "isoNumeric:":"744", "isoAlpha3":"SJM", "fipsCode":"SV", "continentName":"Europe", "capital":"Longyearbyen", "areaInSqKm":62049, "population":2550, "currencyCode":"NOK", "languages":["no", "ru"], "geoNameId":"607072", "direction":{"west":17.699389, "east":80.762085, "north":33.287334, "south":79.220306}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["78.0000", "20.0000"]}},
    {"type":"Feature", "properties":{"code":"SK", "isoNumeric:":"703", "isoAlpha3":"SVK", "fipsCode":"LO", "continentName":"Europe", "capital":"Bratislava", "areaInSqKm":48845, "population":5455000, "currencyCode":"EUR", "languages":["sk", "hu"], "geoNameId":"3057568", "direction":{"west":16.84775, "east":49.603168, "north":22.570444, "south":47.728111}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["48.6667", "19.5000"]}},
    {"type":"Feature", "properties":{"code":"SL", "isoNumeric:":"694", "isoAlpha3":"SLE", "fipsCode":"SL", "continentName":"Africa", "capital":"Freetown", "areaInSqKm":71740, "population":5245695, "currencyCode":"SLL", "languages":["en-SL", "men", "tem"], "geoNameId":"2403846", "direction":{"west":-13.307631, "east":10, "north":-10.284238, "south":6.929611}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["8.5000", "-11.5000"]}},
    {"type":"Feature", "properties":{"code":"SM", "isoNumeric:":"674", "isoAlpha3":"SMR", "fipsCode":"SM", "continentName":"Europe", "capital":"San Marino", "areaInSqKm":61.2, "population":31477, "currencyCode":"EUR", "languages":["it-SM"], "geoNameId":"3168068", "direction":{"west":12.403538978820734, "east":43.99223730851663, "north":12.51653186779788, "south":43.8937092171425}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["43.7667", "12.4167"]}},
    {"type":"Feature", "properties":{"code":"SN", "isoNumeric:":"686", "isoAlpha3":"SEN", "fipsCode":"SG", "continentName":"Africa", "capital":"Dakar", "areaInSqKm":196190, "population":12323252, "currencyCode":"XOF", "languages":["fr-SN", "wo", "fuc", "mnk"], "geoNameId":"2245662", "direction":{"west":-17.535236, "east":16.691633, "north":-11.355887, "south":12.307275}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["14.0000", "-14.0000"]}},
    {"type":"Feature", "properties":{"code":"SO", "isoNumeric:":"706", "isoAlpha3":"SOM", "fipsCode":"SO", "continentName":"Africa", "capital":"Mogadishu", "areaInSqKm":637657, "population":10112453, "currencyCode":"SOS", "languages":["so-SO", "ar-SO", "it", "en-SO"], "geoNameId":"51537", "direction":{"west":40.986595, "east":11.979166, "north":51.412636, "south":-1.674868}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["10.0000", "49.0000"]}},
    {"type":"Feature", "properties":{"code":"SR", "isoNumeric:":"740", "isoAlpha3":"SUR", "fipsCode":"NS", "continentName":"South America", "capital":"Paramaribo", "areaInSqKm":163270, "population":492829, "currencyCode":"SRD", "languages":["nl-SR", "en", "srn", "hns", "jv"], "geoNameId":"3382998", "direction":{"west":-58.086563, "east":6.004546, "north":-53.977493, "south":1.831145}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["4.0000", "-56.0000"]}},
    {"type":"Feature", "properties":{"code":"ST", "isoNumeric:":"678", "isoAlpha3":"STP", "fipsCode":"TP", "continentName":"Africa", "capital":"São Tomé", "areaInSqKm":1001, "population":175808, "currencyCode":"STD", "languages":["pt-ST"], "geoNameId":"2410758", "direction":{"west":6.47017, "east":1.701323, "north":7.466374, "south":0.024766}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["1.0000", "7.0000"]}},
    {"type":"Feature", "properties":{"code":"SV", "isoNumeric:":"222", "isoAlpha3":"SLV", "fipsCode":"ES", "continentName":"North America", "capital":"San Salvador", "areaInSqKm":21040, "population":6052064, "currencyCode":"USD", "languages":["es-SV"], "geoNameId":"3585968", "direction":{"west":-90.128662, "east":14.445067, "north":-87.692162, "south":13.148679}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["13.8333", "-88.9167"]}},
    {"type":"Feature", "properties":{"code":"SY", "isoNumeric:":"760", "isoAlpha3":"SYR", "fipsCode":"SY", "continentName":"Asia", "capital":"Damascus", "areaInSqKm":185180, "population":22198110, "currencyCode":"SYP", "languages":["ar-SY", "ku", "hy", "arc", "fr", "en"], "geoNameId":"163843", "direction":{"west":35.727222, "east":37.319138, "north":42.385029, "south":32.310665}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["35.0000", "38.0000"]}},
    {"type":"Feature", "properties":{"code":"SZ", "isoNumeric:":"748", "isoAlpha3":"SWZ", "fipsCode":"WZ", "continentName":"Africa", "capital":"Mbabane", "areaInSqKm":17363, "population":1354051, "currencyCode":"SZL", "languages":["en-SZ", "ss-SZ"], "geoNameId":"934841", "direction":{"west":30.794107, "east":-25.719648, "north":32.13726, "south":-27.317101}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-26.5000", "31.5000"]}},
    {"type":"Feature", "properties":{"code":"TC", "isoNumeric:":"796", "isoAlpha3":"TCA", "fipsCode":"TK", "continentName":"North America", "capital":"Cockburn Town", "areaInSqKm":430, "population":20556, "currencyCode":"USD", "languages":["en-TC"], "geoNameId":"3576916", "direction":{"west":-72.483871, "east":21.961878, "north":-71.123642, "south":21.422626}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["21.7500", "-71.5833"]}},
    {"type":"Feature", "properties":{"code":"TD", "isoNumeric:":"148", "isoAlpha3":"TCD", "fipsCode":"CD", "continentName":"Africa", "capital":"N'Djamena", "areaInSqKm":1284000, "population":10543464, "currencyCode":"XAF", "languages":["fr-TD", "ar-TD", "sre"], "geoNameId":"2434508", "direction":{"west":13.473475, "east":23.450369, "north":24.002661, "south":7.441068}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["15.0000", "19.0000"]}},
    {"type":"Feature", "properties":{"code":"TF", "isoNumeric:":"260", "isoAlpha3":"ATF", "fipsCode":"FS", "continentName":"Antarctica", "capital":"Port-aux-Français", "areaInSqKm":7829, "population":140, "currencyCode":"EUR", "languages":["fr"], "geoNameId":"1546748", "direction":{"west":50.170258, "east":-37.790722, "north":77.598808, "south":-49.735184}, "continent":"AN"}, "geometry":{"type":"Point", "coordinates":["-43.0000", "67.0000"]}},
    {"type":"Feature", "properties":{"code":"TG", "isoNumeric:":"768", "isoAlpha3":"TGO", "fipsCode":"TO", "continentName":"Africa", "capital":"Lomé", "areaInSqKm":56785, "population":6587239, "currencyCode":"XOF", "languages":["fr-TG", "ee", "hna", "kbp", "dag", "ha"], "geoNameId":"2363686", "direction":{"west":-0.147324, "east":11.138977, "north":1.806693, "south":6.104417}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["8.0000", "1.1667"]}},
    {"type":"Feature", "properties":{"code":"TH", "isoNumeric:":"764", "isoAlpha3":"THA", "fipsCode":"TH", "continentName":"Asia", "capital":"Bangkok", "areaInSqKm":514000, "population":67089500, "currencyCode":"THB", "languages":["th", "en"], "geoNameId":"1605651", "direction":{"west":97.345642, "east":20.463194, "north":105.639389, "south":5.61}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["15.0000", "100.0000"]}},
    {"type":"Feature", "properties":{"code":"TJ", "isoNumeric:":"762", "isoAlpha3":"TJK", "fipsCode":"TI", "continentName":"Asia", "capital":"Dushanbe", "areaInSqKm":143100, "population":7487489, "currencyCode":"TJS", "languages":["tg", "ru"], "geoNameId":"1220409", "direction":{"west":67.387138, "east":41.042252, "north":75.137222, "south":36.674137}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["39.0000", "71.0000"]}},
    {"type":"Feature", "properties":{"code":"TK", "isoNumeric:":"772", "isoAlpha3":"TKL", "fipsCode":"TL", "continentName":"Oceania", "capital":"", "areaInSqKm":10, "population":1466, "currencyCode":"NZD", "languages":["tkl", "en-TK"], "geoNameId":"4031074", "direction":{"west":-172.50033569335938, "east":-8.553613662719727, "north":-171.21142578125, "south":-9.381111145019531}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-9.0000", "-172.0000"]}},
    {"type":"Feature", "properties":{"code":"TM", "isoNumeric:":"795", "isoAlpha3":"TKM", "fipsCode":"TX", "continentName":"Asia", "capital":"Ashgabat", "areaInSqKm":488100, "population":4940916, "currencyCode":"TMT", "languages":["tk", "ru", "uz"], "geoNameId":"1218197", "direction":{"west":52.441444, "east":42.795555, "north":66.684303, "south":35.141083}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["40.0000", "60.0000"]}},
    {"type":"Feature", "properties":{"code":"TN", "isoNumeric:":"788", "isoAlpha3":"TUN", "fipsCode":"TS", "continentName":"Africa", "capital":"Tunis", "areaInSqKm":163610, "population":10589025, "currencyCode":"TND", "languages":["ar-TN", "fr"], "geoNameId":"2464461", "direction":{"west":7.524833, "east":37.543915, "north":11.598278, "south":30.240417}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["34.0000", "9.0000"]}},
    {"type":"Feature", "properties":{"code":"TO", "isoNumeric:":"776", "isoAlpha3":"TON", "fipsCode":"TN", "continentName":"Oceania", "capital":"Nuku'alofa", "areaInSqKm":748, "population":122580, "currencyCode":"TOP", "languages":["to", "en-TO"], "geoNameId":"4032283", "direction":{"west":-175.682266, "east":-15.562988, "north":-173.907578, "south":-21.455057}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-20.0000", "-175.0000"]}},
    {"type":"Feature", "properties":{"code":"TR", "isoNumeric:":"792", "isoAlpha3":"TUR", "fipsCode":"TU", "continentName":"Asia", "capital":"Ankara", "areaInSqKm":780580, "population":77804122, "currencyCode":"TRY", "languages":["tr-TR", "ku", "diq", "az", "av"], "geoNameId":"298795", "direction":{"west":25.668501, "east":42.107613, "north":44.834999, "south":35.815418}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["39.0000", "35.0000"]}},
    {"type":"Feature", "properties":{"code":"TT", "isoNumeric:":"780", "isoAlpha3":"TTO", "fipsCode":"TD", "continentName":"North America", "capital":"Port of Spain", "areaInSqKm":5128, "population":1228691, "currencyCode":"TTD", "languages":["en-TT", "hns", "fr", "es", "zh"], "geoNameId":"3573591", "direction":{"west":-61.923771, "east":11.338342, "north":-60.517933, "south":10.036105}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["11.0000", "-61.0000"]}},
    {"type":"Feature", "properties":{"code":"TV", "isoNumeric:":"798", "isoAlpha3":"TUV", "fipsCode":"TV", "continentName":"Oceania", "capital":"Funafuti", "areaInSqKm":26, "population":10472, "currencyCode":"AUD", "languages":["tvl", "en", "sm", "gil"], "geoNameId":"2110297", "direction":{"west":176.064865, "east":-5.641972, "north":179.863281, "south":-10.801169}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-8.0000", "178.0000"]}},
    {"type":"Feature", "properties":{"code":"TW", "isoNumeric:":"158", "isoAlpha3":"TWN", "fipsCode":"TW", "continentName":"Asia", "capital":"Taipei", "areaInSqKm":35980, "population":22894384, "currencyCode":"TWD", "languages":["zh-TW", "zh", "nan", "hak"], "geoNameId":"1668284", "direction":{"west":119.534691, "east":25.29825, "north":122.000443, "south":21.901806}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["23.5000", "121.0000"]}},
    {"type":"Feature", "properties":{"code":"TZ", "isoNumeric:":"834", "isoAlpha3":"TZA", "fipsCode":"TZ", "continentName":"Africa", "capital":"Dodoma", "areaInSqKm":945087, "population":41892895, "currencyCode":"TZS", "languages":["sw-TZ", "en", "ar"], "geoNameId":"149590", "direction":{"west":29.327168, "east":-0.990736, "north":40.443222, "south":-11.745696}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-6.0000", "35.0000"]}},
    {"type":"Feature", "properties":{"code":"UA", "isoNumeric:":"804", "isoAlpha3":"UKR", "fipsCode":"UP", "continentName":"Europe", "capital":"Kyiv", "areaInSqKm":603700, "population":45415596, "currencyCode":"UAH", "languages":["uk", "ru-UA", "rom", "pl", "hu"], "geoNameId":"690791", "direction":{"west":22.128889, "east":52.369362, "north":40.20739, "south":44.390415}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["49.0000", "32.0000"]}},
    {"type":"Feature", "properties":{"code":"UG", "isoNumeric:":"800", "isoAlpha3":"UGA", "fipsCode":"UG", "continentName":"Africa", "capital":"Kampala", "areaInSqKm":236040, "population":33398682, "currencyCode":"UGX", "languages":["en-UG", "lg", "sw", "ar"], "geoNameId":"226074", "direction":{"west":29.573252, "east":4.214427, "north":35.036049, "south":-1.48405}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["1.0000", "32.0000"]}},
    {"type":"Feature", "properties":{"code":"UM", "isoNumeric:":"581", "isoAlpha3":"UMI", "fipsCode":"", "continentName":"Oceania", "capital":"", "areaInSqKm":0, "population":0, "currencyCode":"USD", "languages":["en-UM"], "geoNameId":"5854968", "direction":{"west":-177.392029, "east":28.219814, "north":166.654526, "south":-0.389006}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["19.2833", "166.6000"]}},
    {"type":"Feature", "properties":{"code":"US", "isoNumeric:":"840", "isoAlpha3":"USA", "fipsCode":"US", "continentName":"North America", "capital":"Washington", "areaInSqKm":9629091, "population":310232863, "currencyCode":"USD", "languages":["en-US", "es-US", "haw", "fr"], "geoNameId":"6252001", "direction":{"west":-124.733253, "east":49.388611, "north":-66.954811, "south":24.544245}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["38.0000", "-97.0000"]}},
    {"type":"Feature", "properties":{"code":"UY", "isoNumeric:":"858", "isoAlpha3":"URY", "fipsCode":"UY", "continentName":"South America", "capital":"Montevideo", "areaInSqKm":176220, "population":3477000, "currencyCode":"UYU", "languages":["es-UY"], "geoNameId":"3439705", "direction":{"west":-58.442722, "east":-30.082224, "north":-53.073933, "south":-34.980816}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["-33.0000", "-56.0000"]}},
    {"type":"Feature", "properties":{"code":"UZ", "isoNumeric:":"860", "isoAlpha3":"UZB", "fipsCode":"UZ", "continentName":"Asia", "capital":"Tashkent", "areaInSqKm":447400, "population":27865738, "currencyCode":"UZS", "languages":["uz", "ru", "tg"], "geoNameId":"1512440", "direction":{"west":55.996639, "east":45.575001, "north":73.132278, "south":37.184444}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["41.0000", "64.0000"]}},
    {"type":"Feature", "properties":{"code":"VA", "isoNumeric:":"336", "isoAlpha3":"VAT", "fipsCode":"VT", "continentName":"Europe", "capital":"Vatican", "areaInSqKm":0.44, "population":921, "currencyCode":"EUR", "languages":["la", "it", "fr"], "geoNameId":"3164670", "direction":{"west":12.44570678169205, "east":41.90743830885576, "north":12.45837546629481, "south":41.90027960306854}, "continent":"EU"}, "geometry":{"type":"Point", "coordinates":["41.9000", "12.4500"]}},
    {"type":"Feature", "properties":{"code":"VC", "isoNumeric:":"670", "isoAlpha3":"VCT", "fipsCode":"VC", "continentName":"North America", "capital":"Kingstown", "areaInSqKm":389, "population":104217, "currencyCode":"XCD", "languages":["en-VC", "fr"], "geoNameId":"3577815", "direction":{"west":-61.46090317727658, "east":13.377834, "north":-61.11388, "south":12.583984810969037}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["13.2500", "-61.2000"]}},
    {"type":"Feature", "properties":{"code":"VE", "isoNumeric:":"862", "isoAlpha3":"VEN", "fipsCode":"VE", "continentName":"South America", "capital":"Caracas", "areaInSqKm":912050, "population":27223228, "currencyCode":"VEF", "languages":["es-VE"], "geoNameId":"3625428", "direction":{"west":-73.354073, "east":12.201903, "north":-59.80378, "south":0.626311}, "continent":"SA"}, "geometry":{"type":"Point", "coordinates":["8.0000", "-66.0000"]}},
    {"type":"Feature", "properties":{"code":"VG", "isoNumeric:":"092", "isoAlpha3":"VGB", "fipsCode":"VI", "continentName":"North America", "capital":"Road Town", "areaInSqKm":153, "population":21730, "currencyCode":"USD", "languages":["en-VG"], "geoNameId":"3577718", "direction":{"west":-64.715363, "east":18.757221, "north":-64.268768, "south":18.38998}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["18.5000", "-64.5000"]}},
    {"type":"Feature", "properties":{"code":"VI", "isoNumeric:":"850", "isoAlpha3":"VIR", "fipsCode":"VQ", "continentName":"North America", "capital":"Charlotte Amalie", "areaInSqKm":352, "population":108708, "currencyCode":"USD", "languages":["en-VI"], "geoNameId":"4796775", "direction":{"west":-65.038231, "east":18.391747, "north":-64.565178, "south":17.681725}, "continent":"NA"}, "geometry":{"type":"Point", "coordinates":["18.3333", "-64.8333"]}},
    {"type":"Feature", "properties":{"code":"VN", "isoNumeric:":"704", "isoAlpha3":"VNM", "fipsCode":"VM", "continentName":"Asia", "capital":"Hanoi", "areaInSqKm":329560, "population":89571130, "currencyCode":"VND", "languages":["vi", "en", "fr", "zh", "km"], "geoNameId":"1562822", "direction":{"west":102.148224, "east":23.388834, "north":109.464638, "south":8.559611}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["16.0000", "106.0000"]}},
    {"type":"Feature", "properties":{"code":"VU", "isoNumeric:":"548", "isoAlpha3":"VUT", "fipsCode":"NH", "continentName":"Oceania", "capital":"Port Vila", "areaInSqKm":12200, "population":221552, "currencyCode":"VUV", "languages":["bi", "en-VU", "fr-VU"], "geoNameId":"2134431", "direction":{"west":166.524979, "east":-13.073444, "north":169.904785, "south":-20.248945}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-16.0000", "167.0000"]}},
    {"type":"Feature", "properties":{"code":"WF", "isoNumeric:":"876", "isoAlpha3":"WLF", "fipsCode":"WF", "continentName":"Oceania", "capital":"Mata-Utu", "areaInSqKm":274, "population":16025, "currencyCode":"XPF", "languages":["wls", "fud", "fr-WF"], "geoNameId":"4034749", "direction":{"west":-178.206787, "east":-13.214251, "north":-176.128784, "south":-14.3286}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-13.3000", "-176.2000"]}},
    {"type":"Feature", "properties":{"code":"WS", "isoNumeric:":"882", "isoAlpha3":"WSM", "fipsCode":"WS", "continentName":"Oceania", "capital":"Apia", "areaInSqKm":2944, "population":192001, "currencyCode":"WST", "languages":["sm", "en-WS"], "geoNameId":"4034894", "direction":{"west":-172.798599, "east":-13.432207, "north":-171.415741, "south":-14.040939}, "continent":"OC"}, "geometry":{"type":"Point", "coordinates":["-13.5833", "-172.3333"]}},
    {"type":"Feature", "properties":{"code":"YE", "isoNumeric:":"887", "isoAlpha3":"YEM", "fipsCode":"YM", "continentName":"Asia", "capital":"Sanaa", "areaInSqKm":527970, "population":23495361, "currencyCode":"YER", "languages":["ar-YE"], "geoNameId":"69543", "direction":{"west":42.5325394314234, "east":18.9999989031009, "north":54.5305388163283, "south":12.1110910264462}, "continent":"AS"}, "geometry":{"type":"Point", "coordinates":["15.0000", "48.0000"]}},
    {"type":"Feature", "properties":{"code":"YT", "isoNumeric:":"175", "isoAlpha3":"MYT", "fipsCode":"MF", "continentName":"Africa", "capital":"Mamoutzou", "areaInSqKm":374, "population":159042, "currencyCode":"EUR", "languages":["fr-YT"], "geoNameId":"1024031", "direction":{"west":45.03796, "east":-12.648891, "north":45.29295, "south":-13.000132}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-12.8333", "45.1667"]}},
    {"type":"Feature", "properties":{"code":"ZA", "isoNumeric:":"710", "isoAlpha3":"ZAF", "fipsCode":"SF", "continentName":"Africa", "capital":"Pretoria", "areaInSqKm":1219912, "population":49000000, "currencyCode":"ZAR", "languages":["zu", "xh", "af", "nso", "en-ZA", "tn", "st", "ts", "ss", "ve", "nr"], "geoNameId":"953987", "direction":{"west":16.458021, "east":-22.126612, "north":32.895973, "south":-34.839828}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-29.0000", "24.0000"]}},
    {"type":"Feature", "properties":{"code":"ZM", "isoNumeric:":"894", "isoAlpha3":"ZMB", "fipsCode":"ZA", "continentName":"Africa", "capital":"Lusaka", "areaInSqKm":752614, "population":13460305, "currencyCode":"ZMK", "languages":["en-ZM", "bem", "loz", "lun", "lue", "ny", "toi"], "geoNameId":"895949", "direction":{"west":21.999371, "east":-8.22436, "north":33.705704, "south":-18.079473}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-15.0000", "30.0000"]}},
    {"type":"Feature", "properties":{"code":"ZW", "isoNumeric:":"716", "isoAlpha3":"ZWE", "fipsCode":"ZI", "continentName":"Africa", "capital":"Harare", "areaInSqKm":390580, "population":11651858, "currencyCode":"ZWL", "languages":["en-ZW", "sn", "nr", "nd"], "geoNameId":"878675", "direction":{"west":25.237028, "east":-15.608835, "north":33.056305, "south":-22.417738}, "continent":"AF"}, "geometry":{"type":"Point", "coordinates":["-20.0000", "30.0000"]}}
]};
*/
