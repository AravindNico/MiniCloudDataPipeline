const axios = require("axios");

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const Nationality = ["Indian", "Chinese", "European", "Australian", "American", "African", "Russian"]
const Gender = ["M", "F"]
const Course = ["Math", "Economics", "Engineering", "Science"]
const Ailment = [true, false]

function random_Data(data) {
    return data[Math.floor(Math.random() * data.length)];
}

function random_studentId() {
    return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase()
};
let adduserdetails = []
for (let i = 0; i < 10; i++) {
    let data = {
        "StudentName": random_studentId(),
        "StudentId": random_studentId(),
        "YoB": randomInteger(1990, 2000),
        "Gender": random_Data(Gender),
        "Height": randomInteger(150, 190),
        "Weight": randomInteger(50, 90),
        "Nationality": random_Data(Nationality),
        "Course": random_Data(Course),
        "LastScore": randomInteger(50, 100),
        "Ailments": random_Data(Ailment),
        "Source": randomInteger(1, 5)
    }
    adduserdetails.push(data)
}

console.log(adduserdetails)
let baseUrl = "http://localhost:3000/api/v1"
axios({
        method: "post",
        url: "/users",
        baseURL: baseUrl,
        data: adduserdetails,
        headers: {
            Authorization: "test",
            Accept: "application/json"
        }
    })
    .then(function (response) {
        console.log("User Details:", response.data);
    })
    .catch(function (error) {
        console.log("error:", error);
    });