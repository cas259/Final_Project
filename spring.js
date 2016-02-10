// This section of code is how we prepare our code
// so this it is prepared to react to user events.
$(document).ready(function() {
  $(".btn").on("click", addItem);
  // btn class button, when clicked, runs the addItem function
  // $(".link-delete").on("click", deleteItem);
  // the .link-delete, just finds that defined section in the html, and if it's an href, it replace it
  $("ol").on("click", ".link-delete", deleteItem);
});

// This function prompts the user for a to-do item
// and then appends it to the existing list of items.
// It also updates the counter at the top of the screen.
function addItem() {
  text = window.prompt("New Must-Have Spring Item");
  // saves the input of prompt as a variable "text", can start with var text...
  delete_link = '<a href="#" class="link-delete">(Delete)</a>'
  $("ol").append("<li>" + text + " " + delete_link + "</li>");
  //
  var numItems = $("li").length;
  // length is not a function, it's just a property
  $(".total").html(numItems + " items");
  //grabs the span that you've defined as total and changes the number to add
  // number of items

  // Challenge: Differentiate between 1 item vs. more items

}

// This function deletes an item from the list.
// The "event" parameter holds information on which
// item the user wishes to remove.
function deleteItem(event) {
  console.info(event);
  // $(event.target).remove();
  //just deletes the delete word, not the parent. See line below
  $(event.target).parent().remove();
}
