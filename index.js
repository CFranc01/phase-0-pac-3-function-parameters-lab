function introduction(name) {
    return `Hi, my name is ${name}.`;
}
console.log(introduction("Aki"));

function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Samip", "React"));
console.log(introductionWithLanguage("Aki","JavaScript"));


function introductionWithLanguageOptional(name, language = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language}`;
}
console.log(introductionWithLanguageOptional("Samip"));
console.log(introductionWithLanguageOptional("Gracie","JavaScript"));



function introductionWithLanguageOptional(name, language_override = 'JavaScript') {
    return `Hi, my name is ${name} and I am learning to program in ${language_override}.`;
}
console.log(introductionWithLanguageOptional("Alice"));
console.log(introductionWithLanguageOptional("Gracie", "Python"));


