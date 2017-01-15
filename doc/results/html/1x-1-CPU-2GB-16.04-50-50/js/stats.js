var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "2550",
        "ok": "1718",
        "ko": "832"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "46",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "60008",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "36941",
        "ok": "31571",
        "ko": "48030"
    },
    "standardDeviation": {
        "total": "22744",
        "ok": "20024",
        "ko": "23979"
    },
    "percentiles1": {
        "total": "42556",
        "ok": "32065",
        "ko": "60001"
    },
    "percentiles2": {
        "total": "60001",
        "ok": "50786",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "59307",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60006",
        "ok": "59880",
        "ko": "60008"
    },
    "group1": {
        "name": "t < 220 ms",
        "count": 75,
        "percentage": 3
    },
    "group2": {
        "name": "220 ms < t < 320 ms",
        "count": 4,
        "percentage": 0
    },
    "group3": {
        "name": "t > 320 ms",
        "count": 1639,
        "percentage": 64
    },
    "group4": {
        "name": "failed",
        "count": 832,
        "percentage": 33
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "14.826",
        "ok": "9.988",
        "ko": "4.837"
    }
},
contents: {
"req_wall-94e8a": {
        type: "REQUEST",
        name: "Wall",
path: "Wall",
pathFormatted: "req_wall-94e8a",
stats: {
    "name": "Wall",
    "numberOfRequests": {
        "total": "1275",
        "ok": "1100",
        "ko": "175"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "46",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60008",
        "ok": "59956",
        "ko": "60008"
    },
    "meanResponseTime": {
        "total": "25366",
        "ok": "28528",
        "ko": "5486"
    },
    "standardDeviation": {
        "total": "19343",
        "ok": "17698",
        "ko": "17294"
    },
    "percentiles1": {
        "total": "25406",
        "ok": "29386",
        "ko": "0"
    },
    "percentiles2": {
        "total": "42020",
        "ok": "43207",
        "ko": "0"
    },
    "percentiles3": {
        "total": "57173",
        "ok": "56441",
        "ko": "60002"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59498",
        "ko": "60005"
    },
    "group1": {
        "name": "t < 220 ms",
        "count": 43,
        "percentage": 3
    },
    "group2": {
        "name": "220 ms < t < 320 ms",
        "count": 3,
        "percentage": 0
    },
    "group3": {
        "name": "t > 320 ms",
        "count": 1054,
        "percentage": 83
    },
    "group4": {
        "name": "failed",
        "count": 175,
        "percentage": 14
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "7.413",
        "ok": "6.395",
        "ko": "1.017"
    }
}
    },"req_publishpost-28274": {
        type: "REQUEST",
        name: "PublishPost",
path: "PublishPost",
pathFormatted: "req_publishpost-28274",
stats: {
    "name": "PublishPost",
    "numberOfRequests": {
        "total": "1275",
        "ok": "618",
        "ko": "657"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "54",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "60010",
        "ok": "60008",
        "ko": "60010"
    },
    "meanResponseTime": {
        "total": "48516",
        "ok": "36986",
        "ko": "59363"
    },
    "standardDeviation": {
        "total": "19811",
        "ok": "22613",
        "ko": "6160"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "45174",
        "ko": "60002"
    },
    "percentiles2": {
        "total": "60002",
        "ok": "58480",
        "ko": "60002"
    },
    "percentiles3": {
        "total": "60003",
        "ok": "59748",
        "ko": "60004"
    },
    "percentiles4": {
        "total": "60007",
        "ok": "59949",
        "ko": "60008"
    },
    "group1": {
        "name": "t < 220 ms",
        "count": 32,
        "percentage": 3
    },
    "group2": {
        "name": "220 ms < t < 320 ms",
        "count": 1,
        "percentage": 0
    },
    "group3": {
        "name": "t > 320 ms",
        "count": 585,
        "percentage": 46
    },
    "group4": {
        "name": "failed",
        "count": 657,
        "percentage": 52
    },
    "meanNumberOfRequestsPerSecond": {
        "total": "7.413",
        "ok": "3.593",
        "ko": "3.82"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
