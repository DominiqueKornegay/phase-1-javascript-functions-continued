// code your solution here
function saturdayFun(verb) {
   
    if (verb) {
        return `This Saturday, I want to ${verb}!`
    }
    else {
        return `This Saturday, I want to roller-skate!`
    }
}

function mondayWork(activity) {
    if (activity) {
        return `This Monday, I will ${activity}.`
    }
    else {
        return "This Monday, I will go to the office."
    }
}

function wrapAdjective(adj = '*') {
  return function(name = 'special') {
      return `You are ${adj}${name}${adj}!`
  }
}