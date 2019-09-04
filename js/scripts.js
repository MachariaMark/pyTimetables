// UI logic
//UI Logic
numberOfTeachers.push(5);

for (var i = 0; i < numberOfTeachers[0]; i++) {
    $("#one").append('<form>' + '<label for="teachersName" >Teacher\'s Name:</label><input type="text" class="form-control" placeholder="Teacher\'s Name" id="teachersName" style="margin: 20px;">' + '<br><br>' + '<label for="teachersId">Teacher\'s Id:</label><input type="text" class="form-control" placeholder="Teacher\'s Id" id="teachersId" style="margin:20px">' + '</form>')
}