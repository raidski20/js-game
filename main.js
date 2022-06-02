let start_game_btn = document.getElementById("start-game-btn");

start_game_btn.addEventListener("click", function () {
  start_game_btn.style.display = "none";
  document.getElementById("game-container").style.display = "block";

  let game_time_counter = document.getElementById("game-time-counter");

  let start_time = new Date();

  setInterval(function () {
    let elapsed_time = Date.now() - start_time;
    elapsed_time = elapsed_time / 1000;

    // get seconds
    var seconds = Math.round(elapsed_time % 60);

    // remove seconds from the date
    elapsed_time = Math.floor(elapsed_time / 60);

    // get minutes
    var minutes = Math.round(elapsed_time % 60);

    game_time_counter.innerText = minutes + "M:" + seconds + "S";
  }, 1000);
});


// Array to hold the boxes that the user wants to swap
let requested_boxes_to_swap = [];

function get_box_id(wanted_box_id) 
{
  requested_boxes_to_swap.push(wanted_box_id);

  check_requested_boxes_configuration();
}

// Function to check if requested boxes are good to be swaped
function check_requested_boxes_configuration() 
{
    // Must be at least two requested boxes (box x and another one)
  if (requested_boxes_to_swap.length >= 2) 
  {
      // Getting the last requested box index in the array
    let last_index = requested_boxes_to_swap.length - 1;

    // Getting before last requested box index in the array
    let before_last_index = last_index - 1;

    // I'm using last_index and before_last_index 
    // Because i only need the last and before last requested boxes

    // Checking if the user requested the box "x"
    if (requested_boxes_to_swap[last_index] == "x" ||
        requested_boxes_to_swap[before_last_index] == "x")
    {

      if (requested_boxes_to_swap[last_index] != "x") 
      {
        swap_boxes(requested_boxes_to_swap[last_index]);
      } 
      else if (requested_boxes_to_swap[before_last_index] != "x") 
      {
        swap_boxes(requested_boxes_to_swap[before_last_index]);
      }
    }
  }
}

function swap_boxes(target_box) 
{
    let box_x = document.getElementById("x");
    let to_swap_box = document.getElementById(target_box);

    to_swap_box.innerText = "x";
    to_swap_box.id = "x";

    box_x.innerText = target_box;
    box_x.id = target_box;

    requested_boxes_to_swap.length = 0;
}
