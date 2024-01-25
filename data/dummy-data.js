import Post from '../models/post';

export const POSTS = [
    new Post(
        '1',
        new Date('2023-12-04'),
        'Title',
        '',
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id varius metus. Etiam at efficitur tellus, eu malesuada ipsum. Morbi nec ante id lacus congue cursus. Vivamus sit amet ultrices sem, ac mattis nisi. Duis at lectus eros. Cras a imperdiet nisl, a fringilla magna. Ut consectetur massa ultrices metus sodales condimentum.

        Donec lacus metus, interdum eget metus nec, sollicitudin scelerisque erat. Morbi porttitor tempor lectus vitae porta. Nunc rhoncus leo ut nulla ultrices fringilla gravida.`,
        'journal',
        []
    ),
    new Post(
        '2',
        new Date('2023-12-04'),
        'Halloween 2023',
        'imageUrl',
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id varius metus. Etiam at efficitur tellus, eu malesuada ipsum. Morbi nec ante id lacus congue cursus. Vivamus sit amet ultrices sem, ac mattis nisi. Duis at lectus eros. Cras a imperdiet nisl, a fringilla magna. Ut consectetur massa ultrices metus sodales condimentum.

        Donec lacus metus, interdum eget metus nec, sollicitudin scelerisque erat. Morbi porttitor tempor lectus vitae porta. Nunc rhoncus leo ut nulla ultrices fringilla gravida.`,
        'photo',
        []
    ),
    new Post('3', new Date('2023-12-21'), 'Christmas decorating', 'imageUrl', '', 'photo', []),
    new Post('6', new Date('2023-12-21'), 'Christmas ', 'imageUrl', '', 'photo', []),
    new Post('7', new Date('2023-12-21'), ' decorating', 'imageUrl', '', 'photo', []),
    new Post(
        '4',
        new Date('2024-01-18'),
        'Making cheesecake',
        'imageUrl',
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id varrat. Morbi porttitor tempor lectus vitae porta. Nunc rhoncus leo ut nulla ultrices fringilla gravida.`,
        'photo',
        []
    ),
    new Post(
        '5',
        new Date('2024-01-31'),
        'Today sucked',
        '',
        `Lorem ipsum s metus, Morbi porttitor tempor lectus vitae porta. Nunc rhoncus leo ut nulla ultrices fringilla gravida.`,
        'journal',
        []
    ),
];
