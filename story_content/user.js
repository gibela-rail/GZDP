function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ekEerHTOIa":
        Script1();
        break;
      case "5yScbSGEu8X":
        Script2();
        break;
      case "6LKhEUsc8uF":
        Script3();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();

var today = new Date();

var formattedDate =
today.getDate().toString().padStart(2,'0') + "/" +
(today.getMonth()+1).toString().padStart(2,'0') + "/" +
today.getFullYear();

player.SetVar("date", formattedDate);
}

function Script2()
{
  var player = GetPlayer();

player.SetVar(
    "CourseName",
    "Safety"   // Replace with actual course name
);
}

function Script3()
{
  window.print();
}

