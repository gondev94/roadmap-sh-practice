function getLetterGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    if (score >= 80) {
        return 'B';
    }
    if (score >= 70) {
        return 'C';
    }
    if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

function hasPassed(score) {
    return score >= 60
}

function getFeedBack(grade) {
    if (grade === 'A') {        
        return 'Excellent work!';
    } 
    else if (grade === 'B') {
        return 'Good job!';
    } else if (grade === 'C' || grade === 'D') {
        return 'You passed!';
    } else {
        return 'You failed!, You need to study more!';
    }
}

function createGradeReport(name, score) {
    const grade = getLetterGrade(score);
    const feedback = getFeedBack(grade);
    const Passed = hasPassed(score);
    return `Name: ${name}, Grade: ${grade}, Feedback: ${feedback}, Has Passed: ${Passed ? 'Yes' : 'No'}`;
}

console.log(getLetterGrade(50))

console.log(hasPassed(60))

console.log(getFeedBack('F'))

console.log(createGradeReport('John', 40))