function hasMinimumLength(password) {
    return password.length >= 8;
}

function hasNumber(password) {
    return /\d/.test(password);
}

function hasUppercaseLetter(password) {
    return /[A-Z]/.test(password);
}

function getFailedRules(password) {
    const failedRules = [];
    if (!hasMinimumLength(password)) {
        failedRules.push('minimumLength');
    }
    if (!hasNumber(password)) {
        failedRules.push('number');
    }
    if (!hasUppercaseLetter(password)) {
        failedRules.push('uppercaseLetter');
    }
    return failedRules;
}

function validatePassword(password) {
    const failedRules = getFailedRules(password);
    return {
        isValid: failedRules.length === 0,
        failedRules: failedRules,
    };

}