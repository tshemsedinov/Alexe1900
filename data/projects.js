const Project = require("../structures/Project");

module.exports = [
    new Project(
        'Recomended Films',
        'https://recommended-films.netlify.app/',
              'A website, where you answer questions about preferences in film genres, '
            + 'and then get list of most popular films of your favourite genres. '
            + 'Also you can rate films and see their average rating.'
    ),
    new Project(
        'ToDo',
        'https://alexe1900todo.netlify.app/',
              'To Do web-app. '
            + 'You can add tasks, view them, edit or delete. '
            + 'Every task has status (completed or incompleted), title and description text'
    ),
    new Project(
        'Museum',
        'https://alexe1900.github.io/mypages/museum-step-2',
        'My edition of Louvre museum website'
    ),
    new Project(
        'Wildlife',
        'https://rolling-scopes-school.github.io/alexe1900-JSFE2021Q1/wildlife/',
        'Website of wildlife protection service'
    ),
    new Project(
        'Moving blocks',
        'https://alexe1900.github.io/mypages/moving-blocks-game',
              'Game, in which you need to move the cursor away from moving blocks. '
            + 'You need to not touch them as long as you can. '
            + '_**Game is not using any JavaScript! Only HTML and CSS.**_'
    ),
];