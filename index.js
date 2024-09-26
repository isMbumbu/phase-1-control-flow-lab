function scuberGreetingForFeet(Feet){
  // Write your code here!
  // Write your code here!
  if (Feet <= 400) {
    return 'This one is on me!';
  } else if (Feet > 2500) {
    return 'No can do.';
  } else if (Feet <= 2000) {
    return 'That will be twenty bucks.';
  } else {
    return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  switch(city){
    case city='NYC':
      return 'Ok, sounds good.'
    break;
    default:
      return 'No go.'
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
switch(tip){
  case tip='generous':
    return 'Thank you so much.'
    break;
  case tip='not as generous':
    return 'Thank you.'
    break;
  default:
    return 'Bye.'
}
}